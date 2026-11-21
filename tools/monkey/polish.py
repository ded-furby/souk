"""Polish the guide monkey offline and bake him into assets/models/monkey-anim.glb (+ monkey.glb).

Source is the high-res body in tools/monkey/orig/monkey.glb (same sculpt as the rigged one, 3x the detail). The rig
(nodes, joints, inverse bind matrices) and all animation clips are copied untouched from the originals in
tools/monkey/orig/; only the meshes, their skin weights and the material change.

  body: drop debris islands and the hidden inner shell -> close the fez -> cut clean lens discs -> relax hidden cracks,
        light smoothing -> new skin weights (rigid head, spine chain) -> repaint (de-light) -> decimate
        -> smooth normals with hard creases
  tail: rebuilt as a tapered tube with a rounded tip along the old tail's curve, skinned to the tail bones only

usage: python3 tools/monkey/polish.py [--out-dir assets/models] [--tris 36000] [--weights rebound|carried] [--cache <dir>]
  --weights carried  keep the old skin weights (old deformation, including its tearing) instead of the rebuilt ones
  --cache            keep the three slow visibility passes (about 20 s each) between runs
"""
import hashlib, os, sys, time
import numpy as np
import scipy.sparse as sp
from scipy.sparse.linalg import splu
from scipy.spatial import cKDTree

HERE = os.path.dirname(os.path.abspath(__file__))
REPO = os.path.abspath(os.path.join(HERE, '..', '..'))
sys.path.insert(0, HERE)
from glb import GLB
from glbmesh import load_prim, write_skinned
import meshops as mo

SCALE = 0.6 / 1.12            # static monkey.glb -> rigged monkey-anim.glb bind space (exact: the tails match to 1e-8)
ORIG_ANIM = os.path.join(HERE, 'orig/monkey-anim.glb')
ORIG_STATIC = os.path.join(HERE, 'orig/monkey.glb')

# --- landmarks, measured on the sculpt in rig bind space (metres) -------------------------------------------------
# The fez top is a recessed lid inside a ragged rim. Plane fitted to that lid (rms 0.2 mm); he wears the fez tilted.
FEZ_C = np.array([0.03652, 0.58606, 0.02409])     # centre of the lid
FEZ_N = np.array([-0.27365, 0.96161, -0.02042])   # lid normal = fez axis at the top
FEZ_CUT = 0.004                                   # cap height above the lid; the rim top is 5..9 mm above it
# The fez wall is a cone about a slightly different axis (fitted to the wall normals); h = height along it.
FEZ_AXIS, FEZ_AXIS_P = np.array([-0.3918, 0.9186, -0.0514]), np.array([0.2417, 0.1059, 0.0499])
FEZ_WALL = ([0.428, 0.436, 0.444, 0.452, 0.460, 0.468, 0.476, 0.484, 0.492, 0.54], [0.0728, 0.0671, 0.0592, 0.057, 0.0519, 0.0486, 0.0455, 0.0433, 0.0414, 0.042])  # h -> wall radius
FEZ_BASE = 0.426                                  # h of the fez's lower edge
# Sunglasses: one moulded plate, the lenses only painted on. (centre, normal) fitted to the two black blobs.
LENSES = [(np.array([0.0680, 0.4224, 0.1476]), np.array([0.1459, -0.0358, 0.9887])),
          (np.array([0.1352, 0.4217, 0.1348]), np.array([0.2471, -0.1791, 0.9523]))]
LENS_R, FRAME_R = 0.0270, 0.0320                  # lens radius, outer radius of its rim
MUZZLE = (np.array([0.100, 0.370, 0.140]), 0.036, 0.058)   # centre, full-strength radius, fade-out radius
HEAD_PLANE = (0.238, 0.378)                       # head = everything with y + a*z > b (tilted cut from nape to under the chin)
GEM = np.array([0.1195, 0.3230, -0.1318])         # the stone on the back of the vest

# --- palette (OKLab lightness targets; hue and chroma come from the sculpt's own colours) -----------------------
L_FUR, L_MUZZLE, L_VEST, L_FEZ = 0.51, 0.67, 0.45, 0.41
LENS_RGB = np.array([0.012, 0.012, 0.016])
FRAME_RGB = np.array([0.42, 0.24, 0.055])         # brass
CHROMA = {'warm': 0.92, 'vest': 1.30}             # saturation trims
RED_HUE_SHIFT = -5.0                              # degrees: vest and fez a touch away from brick, towards crimson
AO_FLOOR, AO_GAMMA = 0.30, 1.4                    # darkest baked occlusion, contrast
CREASE_DEG = 50                                   # edges sharper than this stay hard (fez rim, glasses, vest hem)
ROUGHNESS = 0.75                                  # as the old material
# --- tail ---------------------------------------------------------------------------------------------------------
TAIL_ROOT, TAIL_JOIN = np.array([0.085, 0.118, -0.105]), 7   # new start deep inside the rump; old ring where the old curve takes over
TAIL_RINGS, TAIL_SIDES, TAIL_R0 = 60, 10, 0.0150  # rings along, sides around, root radius (m)

M1 = np.array([[0.4122214708, 0.5363325363, 0.0514459929], [0.2119034982, 0.6806995451, 0.1073969566], [0.0883024619, 0.2817188376, 0.6299787005]])
M2 = np.array([[0.2104542553, 0.7936177850, -0.0040720468], [1.9779984951, -2.4285922050, 0.4505937099], [0.0259040371, 0.7827717662, -0.8086757660]])


def oklab(rgb):
    return np.cbrt(np.clip(rgb, 0, None) @ M1.T) @ M2.T


def oklab_to_rgb(lab):
    return np.clip(((lab @ np.linalg.inv(M2).T) ** 3) @ np.linalg.inv(M1).T, 0, 1)


def smoothstep(e0, e1, x):
    t = np.clip((x - e0) / (e1 - e0), 0, 1)
    return t * t * (3 - 2 * t)


def cached(cache, name, V, fn):
    if not cache: return fn()
    f = os.path.join(cache, f'{name}-{hashlib.md5(np.ascontiguousarray(V).tobytes()).hexdigest()[:12]}.npz')
    if os.path.exists(f): return tuple(np.load(f).values())
    r = fn(); np.savez(f, *r)
    return r


# ---------------------------------------------------------------- geometry
def dense_weights(J, W, n_joints):
    D = np.zeros((len(J), n_joints))
    np.add.at(D, (np.repeat(np.arange(len(J)), J.shape[1]), J.reshape(-1).astype(int)), W.reshape(-1).astype(float))
    return D


def load_source():
    """High-res body in rig bind space. 'Wa' = the old rigged mesh's skin weights carried over by proximity (only kept
    with --weights carried), 'Ws' = the static model's own two-joint weights."""
    S, T = load_prim(ORIG_STATIC)
    A, Ta = load_prim(ORIG_ANIM)
    mesh = {'V': S['POSITION'].astype(float) * SCALE, 'C': S['COLOR_0'].astype(float), 'T': T,
            'Ws': dense_weights(S['JOINTS_0'], S['WEIGHTS_0'], 2)}
    mesh = mo.keep_largest(mesh)                                         # debris islands go here
    old = mo.keep_largest({'V': A['POSITION'].astype(float), 'T': Ta, 'W': dense_weights(A['JOINTS_0'], A['WEIGHTS_0'], 23)})
    d, i = cKDTree(old['V']).query(mesh['V'], k=4)
    w = 1 / (d ** 2 + 1e-8); w /= w.sum(1, keepdims=True)
    mesh['Wa'] = (old['W'][i] * w[:, :, None]).sum(1)
    return mesh


def drop_inner_shell(mesh, cnt):
    """The sculpt is a hollow double shell; the inside can never be seen. Remove it and plug the few through-holes."""
    hidden = cnt == 0
    lab = mo.vertex_components(len(mesh['V']), mo.edges(mesh['T']), hidden)
    size = np.bincount(lab[lab >= 0])
    inner = hidden & (size[np.maximum(lab, 0)] > 400)                    # small hidden patches are just deep creases
    n0 = len(mesh['T'])
    mesh = mo.keep_largest(mo.compact(mesh, ~inner[mesh['T']].all(1)))
    loops = mo.boundary_loops(mesh['T'])
    for loop in loops: mo.fan_fill(mesh, loop)
    print(f'  inner shell: -{n0 - len(mesh["T"]) + sum(map(len, loops))} faces, plugged {len(loops)} holes {sorted(map(len, loops), reverse=True)}')
    return mesh


def close_fez(mesh):
    """Cut the fez just under its ragged rim and give it a flat, slightly domed top (mesh['pin'] marks the new cap)."""
    def frame(V):
        g = (V - FEZ_C) @ FEZ_N
        return g, np.linalg.norm(V - FEZ_C - np.outer(g, FEZ_N), axis=1)
    g, r = frame(mesh['V'])
    above = (g > FEZ_CUT - 1e-4) & (r < 0.07)
    mesh = mo.keep_largest(mo.compact(mesh, ~above[mesh['T']].any(1)))   # also drops the lid, now cut loose
    V = mesh['V']
    g, r = frame(V)
    loops = mo.boundary_loops(mesh['T'])
    assert len(loops) == 1 and g[loops[0]].min() > FEZ_CUT - 0.03, [len(l) for l in loops]
    loop = np.array(loops[0])
    V[loop] += np.outer(FEZ_CUT - g[loop], FEZ_N)                        # flatten the rim onto the cut plane
    centre = FEZ_C + FEZ_N * FEZ_CUT
    ring = centre + (V[loop] - centre) * 0.55 + FEZ_N * 0.0028           # one inner ring so the dome shades smoothly
    new = {k: v[loop] for k, v in mesh.items() if k != 'T'}; new['V'] = ring
    i0 = mo.append_vertices(mesh, new)
    inner = np.arange(i0, i0 + len(loop))
    a, b, ia, ib = loop, np.roll(loop, -1), inner, np.roll(inner, -1)
    mesh['T'] = np.concatenate([mesh['T'], np.c_[b, a, ia], np.c_[b, ia, ib]])
    c = mo.fan_fill(mesh, inner, centre + FEZ_N * 0.0040)
    print(f'  fez: capped a {len(loop)}-vertex rim, radius {r[loop].mean() * 1000:.1f} mm')
    mesh['pin'] = np.zeros(len(mesh['V'])); mesh['pin'][np.r_[loop, inner, c]] = 1
    return mesh


def fill_crevices(mesh, cnt):
    """Vertices no outside viewpoint can see sit in ragged cracks (under the hair fringe, behind the vest hem). Relax
    them into a smooth membrane between their visible neighbours so the cracks become soft creases."""
    hidden = (cnt < 2) & (mesh['pin'] == 0)
    n = len(mesh['V'])
    A = mo.umbrella(mesh['T'], n)
    L = sp.identity(n, format='csr') - A
    mesh['V'] = mo.harmonic(L, ~hidden, mesh['V'])
    print(f'  crevices: relaxed {hidden.sum()} hidden vertices')
    return mesh


def lens_coords(V, c, n):
    """(distance from the lens axis, growing fast once a point leaves the glasses plate; in-plane x, y; height z)"""
    e1 = np.cross([0, 1, 0], n); e1 /= np.linalg.norm(e1); e2 = np.cross(n, e1)
    q = V - c
    x, y, z = q @ e1, q @ e2, q @ n
    return np.hypot(np.hypot(x, y), 3 * np.maximum(np.abs(z) - 0.013, 0)), x, y, z


def clean_lenses(mesh):
    """Cut exact circles for each lens and its rim into the glasses plate and iron the plate out inside them.
    mesh['glass'] = distance from the nearest lens axis (LENS_R / FRAME_R exactly on the cut contours)."""
    for k, (c, n) in enumerate(LENSES):
        key = f'g{k}'
        mesh[key] = lens_coords(mesh['V'], c, n)[0]
        for iso in (LENS_R, FRAME_R): mesh[key] = mo.slice_mesh(mesh, mesh[key], iso)
        V = mesh['V']
        _, x, y, z = lens_coords(V, c, n)
        m = mesh[key] <= FRAME_R + 1e-9
        Q = np.c_[np.ones(m.sum()), x[m], y[m], x[m] ** 2, x[m] * y[m], y[m] ** 2]   # gently curved glass, no dents
        zfit = Q @ np.linalg.lstsq(Q, z[m], rcond=None)[0]
        V[m] += np.outer(zfit - z[m], n)
        print(f'  lens {k}: {m.sum()} vertices ironed, moved <= {np.abs(zfit - z[m]).max() * 1000:.1f} mm')
    mesh['glass'] = np.minimum(mesh.pop('g0'), mesh.pop('g1'))
    mesh['pin'] = np.maximum(mesh['pin'], mesh['glass'] <= FRAME_R + 1e-9)
    return mesh


# ---------------------------------------------------------------- skin
JOINT = {n: i for i, n in enumerate(['root', 'hips', 'spine', 'chest', 'neck', 'head'])}   # first joints of the skin


def rebind(mesh):
    """New skin weights for the body. The old ones were plain bone-distance weights on a rig that does not line up with
    the sculpt (the 'upper arm' bones run through his cheeks and chest), so every arm swing sheared the face and torso
    and the big arm gestures tore him apart. Here the head is rigid on the head bone and the rest follows the spine
    chain, blended smoothly over the surface; arm and leg bones no longer pull on the mesh."""
    V = mesh['V']
    y, z, x = V[:, 1], V[:, 2], V[:, 0]
    head = y + HEAD_PLANE[0] * z > HEAD_PLANE[1]
    sets = {'root': y < 0.03,
            'hips': (y > 0.085) & (y < 0.14),
            'spine': (y > 0.20) & (y < 0.235) & (x > 0.02) & (x < 0.19) & (z < 0.05) & ~((x > 0.15) & (z > -0.01)),   # belly / small of the back
            'chest': (y > 0.285) & (y < 0.32) & ~head,
            'head': head}
    fixed = np.zeros(len(V), bool); W = np.zeros((len(V), 23))
    for name, m in sets.items():
        W[m & ~fixed, JOINT[name]] = 1; fixed |= m
    L, _ = mo.laplacian(V, mesh['T'])
    W = np.clip(mo.harmonic(L, fixed, W), 0, 1)
    mesh['Wa'] = W / W.sum(1, keepdims=True)
    return mesh


# ---------------------------------------------------------------- colour
def screened_smooth(L, area, y, w, sigma):
    """argmin sum area*w*(x-y)^2 + sigma^2/2 * |grad x|^2 : smooths y at scale sigma and fills in where w == 0."""
    A = (sp.diags(area * np.maximum(w, 1e-7)) + (sigma ** 2 / 2) * L).tocsc()
    return splu(A).solve((area * w)[:, None] * (y if y.ndim > 1 else y[:, None])).reshape(y.shape)


def shade_curve(l, ab, mask, lo=0.18, hi=0.86, n=17):
    """The colours of one material in the bake run along a curve from saturated shadow to pale highlight.
    Returns L -> (a, b) on that curve (median chroma per lightness bin)."""
    edges = np.linspace(lo, hi, n + 1); mid = (edges[1:] + edges[:-1]) / 2
    med = np.full((n, 2), np.nan)
    for i in range(n):
        s = mask & (l >= edges[i]) & (l < edges[i + 1])
        if s.sum() >= 40: med[i] = np.median(ab[s], axis=0)
    ok = ~np.isnan(med[:, 0])
    if ok.sum() < 2: med[:], ok[:] = (np.median(ab[mask], axis=0) if mask.any() else 0), True
    med = np.stack([np.interp(mid, mid[ok], med[ok, k]) for k in range(2)], 1)
    med[1:-1] = (med[:-2] + 2 * med[1:-1] + med[2:]) / 4
    return lambda L: np.stack([np.interp(L, mid, med[:, k]) for k in range(2)], -1)


def fill_holes(mask, E, max_verts=600):
    """Also select the small islands the mask encloses (specks of the wrong colour inside a material)."""
    lab = mo.vertex_components(len(mask), E, ~mask)
    size = np.bincount(lab[lab >= 0], minlength=max(lab.max(), 0) + 1)
    return mask | (~mask & (size[np.maximum(lab, 0)] < max_verts))


def repaint(mesh, cnt, vis, masks=None):
    """De-light: throw the baked shading away. Every material gets one lightness (plus a lighter muzzle),
    its hue/chroma from the sculpt's own shading curve, the local chroma character of the bake, and clean ambient
    occlusion computed from the geometry. Returns linear RGB per vertex."""
    V, T = mesh['V'], mesh['T']
    n = len(V)
    L, area = mo.laplacian(V, T)
    lab = oklab(mesh['C']); l, ab = lab[:, 0], lab[:, 1:]
    hue = np.degrees(np.arctan2(ab[:, 1], ab[:, 0])); chroma = np.linalg.norm(ab, axis=1)
    seen = (cnt >= 3) & (mesh['pin'] == 0)                                # colours of hidden / rebuilt bits mean nothing
    solid = seen & (l > 0.22)                                            # ... and hue is noise in the blackest shadows

    # --- materials -------------------------------------------------------------------------------------------
    redness = screened_smooth(L, area, smoothstep(36, 28, hue) * (hue > -15), solid.astype(float), 0.004)
    red = redness > 0.5
    h = (V - FEZ_AXIS_P) @ FEZ_AXIS
    r = np.linalg.norm(V - FEZ_AXIS_P - np.outer(h, FEZ_AXIS), axis=1)
    E = mo.edges(T)
    fez = (h > FEZ_BASE) & (r < np.interp(h, *FEZ_WALL) + 0.006)          # by shape: its crown is as brown as fur in the bake
    fez = fill_holes(screened_smooth(L, area, fez.astype(float), np.ones(n), 0.005) > 0.5, E)   # a clean hem line
    vest = red & ~fez & (V[:, 1] > 0.15) & (V[:, 1] < 0.47)
    lab_v = mo.vertex_components(n, E, vest)
    vest &= np.bincount(lab_v[vest], minlength=lab_v.max() + 1)[np.maximum(lab_v, 0)] > 150   # drop red specks in the fur
    d_gem = np.linalg.norm(V - GEM, axis=1)
    keep = (d_gem < 0.024) & ~(vest & (d_gem > 0.012))                    # stone + its setting: leave as painted
    vest = fill_holes(vest, E) & ~fez                                     # ... and no painted scratches in the cloth
    green = solid & (hue > 95) & (hue < 170) & (chroma > 0.03) & (V[:, 1] > 0.08) & (V[:, 1] < 0.2) & (np.abs(V[:, 0] - 0.07) < 0.06)
    green = screened_smooth(L, area, green.astype(float), solid.astype(float), 0.003) > 0.4
    vest &= ~keep; green &= ~(keep | vest | fez)
    warm = ~(vest | fez | keep | green)                                   # (the glasses are painted on top later, per face)
    if masks is not None: masks.update(warm=warm, vest=vest, fez=fez, green=green, keep=keep)   # for tuning previews
    print(f'  materials: fur/skin {warm.sum()}, vest {vest.sum()}, fez {fez.sum()}, cloth {green.sum()}, stone {keep.sum()}')

    # --- lightness targets -----------------------------------------------------------------------------------
    target = np.full(n, L_FUR)
    mc, r0, r1 = MUZZLE
    target += (L_MUZZLE - L_FUR) * smoothstep(r1, r0, np.linalg.norm(V - mc, axis=1)) * warm
    target[vest] = L_VEST
    target[fez] = L_FEZ
    target[green] = np.median(l[green & solid]) if (green & solid).any() else L_FUR
    target = screened_smooth(L, area, target, np.ones(n), 0.0012) * (1 - (vest | fez)) + target * (vest | fez)

    # --- hue / chroma: on the material's shading curve at the target lightness, plus the bake's local character
    ao = AO_FLOOR + (1 - AO_FLOOR) * np.clip(screened_smooth(L, area, vis, np.ones(n), 0.003), 0, 1) ** AO_GAMMA
    Lout = target * np.cbrt(ao)
    out_ab = np.zeros((n, 2)); resid = np.zeros((n, 2))
    wres = solid * smoothstep(0.25, 0.45, l)                              # chroma of the darkest paint is exaggerated
    curves = {name: shade_curve(l, ab, m & solid) for name, m in (('warm', warm), ('vest', vest), ('fez', fez), ('green', green))}
    for name, m in (('warm', warm), ('vest', vest), ('fez', fez), ('green', green)):
        out_ab[m] = curves[name](Lout[m]) * CHROMA.get(name, 1)
        resid[m] = (ab - curves[name](l))[m]
    out_ab[fez] = (out_ab[fez] + curves['vest'](Lout[fez]) * CHROMA['vest']) / 2    # a red fez: half-way to the vest's red
    c, s_ = np.cos(np.radians(RED_HUE_SHIFT)), np.sin(np.radians(RED_HUE_SHIFT))
    out_ab[fez | vest] = out_ab[fez | vest] @ np.array([[c, s_], [-s_, c]])
    resid[fez | vest] = 0                                                 # plain felt and cloth: no painted streaks
    resid = screened_smooth(L, area, resid, wres, 0.008) * 0.75
    resid *= np.minimum(1, 0.05 / np.maximum(np.linalg.norm(resid, axis=1), 1e-9))[:, None]
    rgb = oklab_to_rgb(np.c_[Lout, out_ab + resid])
    # stone and setting: the painted colours, evened out a little
    kl = l.copy(); kl[keep] = np.clip(l[keep], 0.3, 0.8)
    rgb[keep] = oklab_to_rgb(np.c_[kl, ab])[keep]
    return rgb, oklab_to_rgb(np.r_[L_FUR, curves['warm'](L_FUR) * CHROMA['warm']][None])[0]


# ---------------------------------------------------------------- final topology, shading, skin
def decimate(mesh, target):
    """Attribute-aware decimation; the glasses and the fez rim keep their exact edges."""
    V, T = mesh['V'], mesh['T']
    prot = (mesh['pin'] > 0)[T].any(1)
    attrs = np.c_[oklab(mesh['rgb']), mo.vertex_normals(V, T)]
    free, info = mo.simplify(V, T[~prot], target - prot.sum(), attrs=attrs, weights=[1, 1, 1, 0.3, 0.3, 0.3], flags=('LockBorder',))
    mesh['T'] = np.concatenate([T[prot], free])
    print(f'  decimated to {len(mesh["T"])} tris ({prot.sum()} protected), deviation <= {info["error"] * info["scale"] * 1000:.2f} mm')
    return mo.compact(mesh, np.ones(len(mesh['T']), bool))


def top4(W):
    """Dense weights (n, joints) -> glTF JOINTS_0 / WEIGHTS_0 (4 influences, normalised)."""
    if W.shape[1] < 4: W = np.pad(W, ((0, 0), (0, 4 - W.shape[1])))
    J = np.argsort(-W, axis=1, kind='stable')[:, :4]
    w = np.take_along_axis(W, J, 1)
    w /= w.sum(1, keepdims=True)
    J = np.where(w > 0, J, 0)
    return J.astype(np.uint8), w.astype(np.float32)


def shade(mesh):
    """Final vertex arrays: smooth normals split at creases, lenses and rims painted per face with crisp edges."""
    V, T = mesh['V'], mesh['T']
    gl = mesh['glass'][T].max(1)
    group = np.where(gl <= LENS_R + 1e-9, 1, np.where(gl <= FRAME_R + 1e-9, 2, 0))
    src, T2, N = mo.split_normals(V, T, CREASE_DEG, group)
    vg = np.zeros(len(src), int); vg[T2.reshape(-1)] = np.repeat(group, 3)
    rgb = mesh['rgb'][src].copy()
    rgb[vg == 1] = LENS_RGB; rgb[vg == 2] = FRAME_RGB
    return {'V': V[src], 'N': N, 'C': rgb, 'T': T2, 'Wa': mesh['Wa'][src], 'Ws': mesh['Ws'][src]}


# ---------------------------------------------------------------- tail
def build_tail(body, fur_rgb):
    """A tapered tube with a rounded tip along the old tail's curve. Skinned to the tail bones only (the old one also
    followed arm and leg bones, which is what bent its tip into a broken hook)."""
    A, _ = load_prim(ORIG_ANIM, 1)
    old = A['POSITION'].astype(float).reshape(71, 11, 3)[:, 1:].mean(1)   # old ring centres (first ring vertex is doubled)
    old = np.r_[[TAIL_ROOT], old[TAIL_JOIN:]]                             # leave the rump squarely instead of sliding along it
    for _ in range(2): old[1:-1] = (old[:-2] + 2 * old[1:-1] + old[2:]) / 4
    s = np.r_[0, np.cumsum(np.linalg.norm(np.diff(old, axis=0), axis=1))]
    u = np.linspace(0, 1, TAIL_RINGS)
    P = np.stack([np.interp(u * s[-1], s, old[:, k]) for k in range(3)], 1)
    tan = np.gradient(P, axis=0); tan /= np.linalg.norm(tan, axis=1, keepdims=True)
    rad = TAIL_R0 * (1 - 0.70 * u ** 1.2)
    # rounded tip: a few rings shrinking along a hemisphere, then the apex
    phi = np.radians([30, 55, 75])
    P = np.r_[P, P[-1] + np.outer(np.sin(phi) * rad[-1], tan[-1])]
    tan = np.r_[tan, np.repeat(tan[-1:], 3, 0)]; rad = np.r_[rad, rad[-1] * np.cos(phi)]; u = np.r_[u, np.ones(3)]
    apex = P[-1] + tan[-1] * rad[-1] * 0.45
    # rotation-minimising frames (parallel transport)
    nrm = np.cross(tan[0], [0, 1, 0]); nrm /= np.linalg.norm(nrm)
    rings = []
    ang = np.arange(TAIL_SIDES) * 2 * np.pi / TAIL_SIDES
    for i in range(len(P)):
        nrm = nrm - tan[i] * (nrm @ tan[i]); nrm /= np.linalg.norm(nrm)
        bi = np.cross(tan[i], nrm)
        rings.append(P[i] + rad[i] * (np.outer(np.cos(ang), nrm) + np.outer(np.sin(ang), bi)))
    V = np.r_[np.concatenate(rings), [apex], [P[0]]]
    nr = len(P); a_i, r_i = nr * TAIL_SIDES, nr * TAIL_SIDES + 1
    j = np.arange(TAIL_SIDES); jn = (j + 1) % TAIL_SIDES
    T = [np.c_[i * TAIL_SIDES + j, (i + 1) * TAIL_SIDES + j, (i + 1) * TAIL_SIDES + jn] for i in range(nr - 1)]
    T += [np.c_[i * TAIL_SIDES + j, (i + 1) * TAIL_SIDES + jn, i * TAIL_SIDES + jn] for i in range(nr - 1)]
    T += [np.c_[(nr - 1) * TAIL_SIDES + j, np.full(TAIL_SIDES, a_i), (nr - 1) * TAIL_SIDES + jn], np.c_[jn, np.full(TAIL_SIDES, r_i), j]]
    T = np.concatenate(T)
    if (V[T[:, 0]] * np.cross(V[T[:, 1]], V[T[:, 2]])).sum() < 0: T = T[:, ::-1]      # outward-facing
    uv = np.r_[np.repeat(u, TAIL_SIDES), 1, 0]                                        # 0 at the root .. 1 at the tip
    # where it leaves the body: first ring whose centre is outside the rump
    near = cKDTree(body['V']).query(P)[1]
    out = np.argmax(((P - body['V'][near]) * body['N'][near]).sum(1) > 0)
    u0 = u[out]
    # colour: the body's fur, a touch darker towards the tip, shaded where it meets the rump
    lab = np.repeat(oklab(fur_rgb[None]), len(V), 0)
    lab[:, 0] *= (1 - 0.10 * smoothstep(0.15, 1.0, uv)) * (0.84 + 0.16 * smoothstep(u0, u0 + 0.06, uv))
    # skin: rump weights at the root, then a smooth hand-over along tail_1..tail_5 (joints 18..22)
    chain = np.exp(-0.5 * ((uv[:, None] - np.array([0.08, 0.3, 0.5, 0.7, 0.9])[None]) / 0.16) ** 2)
    chain /= chain.sum(1, keepdims=True)
    Wa = np.zeros((len(V), 23)); Wa[:, 18:23] = chain
    root = body['Wa'][near[out]]
    k = (1 - smoothstep(u0, u0 + 0.14, uv))[:, None]
    Wa = k * root[None] + (1 - k) * Wa
    Ws = np.zeros((len(V), 2)); Ws[:, 0] = 1
    N = mo.vertex_normals(V, T)
    return {'V': V, 'N': N, 'C': oklab_to_rgb(lab), 'T': T, 'Wa': Wa, 'Ws': Ws}


# ---------------------------------------------------------------- output
def validate(path):
    """No NaNs, unit normals, weights summing to one, no degenerate triangles, no zero-scale transforms."""
    g = GLB(path); j = g.json
    for n in j['nodes']:
        assert all(abs(x) > 1e-6 for x in n.get('scale', [1, 1, 1])), ('zero scale', n.get('name'))
    for sk in j.get('skins', []):
        ibm = g.acc(sk['inverseBindMatrices']).reshape(-1, 4, 4)
        assert np.isfinite(ibm).all() and (np.abs(np.linalg.det(ibm[:, :3, :3])) > 1e-6).all(), 'singular inverse bind matrix'
    tris = 0
    for m in j['meshes']:
        for p in m['primitives']:
            a = {k: g.acc(i) for k, i in p['attributes'].items()}
            V, N, W, J = a['POSITION'].astype(float), a['NORMAL'].astype(float), a['WEIGHTS_0'].astype(float), a['JOINTS_0']
            T = g.acc(p['indices']).reshape(-1, 3).astype(int)
            assert np.isfinite(V).all() and np.isfinite(N).all() and np.isfinite(W).all() and np.isfinite(a['COLOR_0']).all(), 'non-finite vertex data'
            assert np.abs(np.linalg.norm(N, axis=1) - 1).max() < 1e-3, 'normal not unit length'
            assert np.abs(W.sum(1) - 1).max() < 1e-4 and (W.max(1) > 0).all() and (W >= 0).all(), 'bad skin weights'
            assert J.max() < len(j['skins'][0]['joints']), 'joint index out of range'
            assert T.max() < len(V) and (T[:, 0] != T[:, 1]).all() and (T[:, 1] != T[:, 2]).all() and (T[:, 0] != T[:, 2]).all(), 'bad index'
            area = np.linalg.norm(np.cross(V[T[:, 1]] - V[T[:, 0]], V[T[:, 2]] - V[T[:, 0]]), axis=1) / 2
            assert area.min() > 1e-10, f'degenerate triangle (area {area.min():.2e} m^2)'
            assert (a['COLOR_0'] >= 0).all() and (a['COLOR_0'] <= 1).all(), 'colour out of range'
            tris += len(T)
    return tris


def write(out_dir, body, tail):
    m = {k: np.concatenate([body[k], tail[k] + (len(body['V']) if k == 'T' else 0)]) for k in body}
    mat = [{'name': 'Monkey', 'pbrMetallicRoughness': {'metallicFactor': 0, 'roughnessFactor': ROUGHNESS}}]
    for name, src, W, scale in (('monkey-anim.glb', ORIG_ANIM, m['Wa'], 1.0), ('monkey.glb', ORIG_STATIC, m['Ws'], 1 / SCALE)):
        J, w = top4(W)
        path = os.path.join(out_dir, name)
        size = write_skinned(src, path, [{'name': 'Monkey', 'V': m['V'] * scale, 'N': m['N'], 'C': m['C'], 'J': J, 'W': w, 'T': m['T'], 'material': 0}], mat)
        print(f'wrote {path}: {len(m["V"])} verts, {validate(path)} tris, {size / 1e6:.2f} MB')


def main():
    args = sys.argv[1:]
    opt = lambda k, d=None: (args[args.index(k) + 1] if k in args else d)
    out_dir = os.path.abspath(opt('--out-dir', os.path.join(REPO, 'assets/models')))
    cache = opt('--cache')
    t0 = time.time()
    mesh = load_source()
    print(f'source: {len(mesh["V"])} verts {len(mesh["T"])} tris (debris removed)')
    cnt, _ = cached(cache, 'vis0', mesh['V'], lambda: mo.visibility(mesh['V'], mesh['T']))
    mesh = drop_inner_shell(mesh, cnt)
    mesh = close_fez(mesh)
    mesh = clean_lenses(mesh)
    cnt, _ = cached(cache, 'vis1', mesh['V'], lambda: mo.visibility(mesh['V'], mesh['T']))
    mesh = fill_crevices(mesh, cnt)
    mesh['V'] = mo.taubin(mesh['V'], mesh['T'], iters=3, weight=1 - mesh['pin'])
    mesh = mo.weld(mesh, 1.2e-4)                                          # no slivers left by the cuts, plugs and relaxing
    if opt('--weights', 'rebound') == 'rebound': mesh = rebind(mesh)      # --weights carried keeps the old deformation
    print(f'outer surface: {len(mesh["V"])} verts {len(mesh["T"])} tris  [{time.time() - t0:.0f}s]')
    cnt, vis = cached(cache, 'vis2', mesh['V'], lambda: mo.visibility(mesh['V'], mesh['T']))
    mesh['rgb'], fur = repaint(mesh, cnt, vis)
    mesh = decimate(mesh, int(opt('--tris', 36000)))
    body = shade(mesh)
    tail = build_tail(body, fur)
    print(f'body {len(body["V"])} verts {len(body["T"])} tris, tail {len(tail["V"])} verts {len(tail["T"])} tris')
    os.makedirs(out_dir, exist_ok=True)
    write(out_dir, body, tail)
    print(f'[{time.time() - t0:.0f}s]')


if __name__ == '__main__':
    main()
