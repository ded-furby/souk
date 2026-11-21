"""Mesh operations for the monkey polish pipeline (numpy / scipy only): topology, visibility, smoothing, normals."""
import json, os, subprocess, tempfile
import numpy as np
import scipy.sparse as sp
from scipy.sparse.csgraph import connected_components
from scipy.sparse.linalg import splu
from scipy.spatial import cKDTree

HERE = os.path.dirname(os.path.abspath(__file__))


# ---------------------------------------------------------------- topology
def face_normals(V, T):
    return np.cross(V[T[:, 1]] - V[T[:, 0]], V[T[:, 2]] - V[T[:, 0]])  # length = 2 * area


def vertex_normals(V, T):
    N = np.zeros_like(V)
    fn = face_normals(V, T)
    for k in range(3): np.add.at(N, T[:, k], fn)
    return N / np.maximum(np.linalg.norm(N, axis=1, keepdims=True), 1e-20)


def edges(T):
    return np.concatenate([T[:, [0, 1]], T[:, [1, 2]], T[:, [2, 0]]])


def vertex_components(n, E, mask=None):
    """Connected-component label per vertex over edges E (optionally only among mask vertices; others get -1)."""
    if mask is not None: E = E[mask[E[:, 0]] & mask[E[:, 1]]]
    G = sp.coo_matrix((np.ones(len(E)), (E[:, 0], E[:, 1])), shape=(n, n))
    lab = connected_components(G, directed=False)[1]
    return lab if mask is None else np.where(mask, lab, -1)


def compact(mesh, keep_faces):
    """Drop faces, then unreferenced vertices. mesh: {'T': faces, <per-vertex arrays>...}"""
    T = mesh['T'][keep_faces]
    used = np.zeros(len(mesh['V']), bool); used[T.reshape(-1)] = True
    remap = np.cumsum(used) - 1
    return {k: (remap[T] if k == 'T' else v[used]) for k, v in mesh.items()}


def keep_largest(mesh, min_verts=None):
    """Keep the largest connected component (or every component with at least min_verts vertices)."""
    lab = vertex_components(len(mesh['V']), edges(mesh['T']))
    size = np.bincount(lab)
    ok = size >= min_verts if min_verts else size == size.max()
    return compact(mesh, ok[lab[mesh['T'][:, 0]]])


def boundary_loops(T):
    """Ordered boundary loops, each a vertex list following the boundary half-edge direction of its face."""
    E = edges(T)
    key = np.minimum(E[:, 0], E[:, 1]) * (T.max() + 1) + np.maximum(E[:, 0], E[:, 1])
    _, inv, cnt = np.unique(key, return_inverse=True, return_counts=True)
    B = E[cnt[inv] == 1]
    nxt = {}
    for a, b in B: nxt.setdefault(int(a), []).append(int(b))
    loops = []
    while nxt:
        start = next(iter(nxt)); loop = [start]; cur = start
        while True:
            outs = nxt.get(cur)
            if not outs: break
            b = outs.pop()
            if not outs: del nxt[cur]
            if b == start: break
            loop.append(b); cur = b
        loops.append(loop)
    return loops


def append_vertices(mesh, new):
    """Append vertices; `new` maps each per-vertex key to (k, ...) rows. Returns the index of the first new vertex."""
    n0 = len(mesh['V'])
    for k in mesh:
        if k != 'T': mesh[k] = np.concatenate([mesh[k], np.asarray(new[k], mesh[k].dtype).reshape((-1,) + mesh[k].shape[1:])])
    return n0


def fan_fill(mesh, loop, centre=None):
    """Close a boundary loop with a triangle fan around a new centre vertex (attributes = loop average)."""
    loop = np.asarray(loop)
    new = {k: v[loop].mean(0, keepdims=True) for k, v in mesh.items() if k != 'T'}
    if centre is not None: new['V'] = np.asarray(centre, float)[None]
    c = append_vertices(mesh, new)
    a, b = loop, np.roll(loop, -1)                     # boundary half-edge a->b belongs to an existing face
    mesh['T'] = np.concatenate([mesh['T'], np.c_[b, a, np.full(len(loop), c)]])
    return c


def weld(mesh, tol):
    """Merge vertices closer than tol (the later one wins, so freshly cut contours stay exact) and drop the faces that
    collapse. Removes the sliver triangles that cutting and hole-plugging leave behind."""
    n = len(mesh['V'])
    pairs = cKDTree(mesh['V']).query_pairs(tol, output_type='ndarray')
    if not len(pairs): return mesh
    lab = connected_components(sp.coo_matrix((np.ones(len(pairs)), (pairs[:, 0], pairs[:, 1])), shape=(n, n)), directed=False)[1]
    rep = np.zeros(lab.max() + 1, np.int64); np.maximum.at(rep, lab, np.arange(n))
    T = rep[lab][mesh['T']]
    T = T[(T[:, 0] != T[:, 1]) & (T[:, 1] != T[:, 2]) & (T[:, 0] != T[:, 2])]
    key = np.sort(T, axis=1); _, inv, cnt = np.unique(key, axis=0, return_inverse=True, return_counts=True)
    mesh['T'] = T[cnt[inv.reshape(-1)] == 1]                       # a face left twice is a collapsed fin: drop both sides
    return compact(mesh, np.ones(len(mesh['T']), bool))


def slice_mesh(mesh, f, iso):
    """Split every triangle the iso-contour f == iso passes through, so the contour becomes a chain of mesh edges.
    Per-vertex arrays are interpolated onto the new vertices. Returns f extended to the new vertices."""
    s = np.asarray(f, float) - iso
    s = np.where(np.abs(s) < 5e-5, np.where(s < 0, -5e-5, 5e-5), s)   # keep the contour 0.05 mm off existing vertices (no slivers)
    T = mesh['T']; n = len(s)
    neg = s[T] < 0
    cut = neg.any(1) & ~neg.all(1)
    if not cut.any(): return np.asarray(f, float)
    Tc = T[cut]; nc = neg[cut]
    lone = np.where(nc.sum(1) == 1, nc.argmax(1), (~nc).argmax(1))  # the corner alone on its side
    r = np.arange(len(Tc))
    p, q, w = Tc[r, lone], Tc[r, (lone + 1) % 3], Tc[r, (lone + 2) % 3]
    pairs = np.concatenate([np.c_[p, q], np.c_[p, w]])              # the two crossed edges of each cut triangle
    key = np.minimum(pairs[:, 0], pairs[:, 1]) * n + np.maximum(pairs[:, 0], pairs[:, 1])
    uk, first, inv = np.unique(key, return_index=True, return_inverse=True)
    a, b = pairs[first, 0], pairs[first, 1]
    t = (s[a] / (s[a] - s[b]))
    new = {k: v[a] + (v[b] - v[a]) * t.reshape((-1,) + (1,) * (v.ndim - 1)) for k, v in mesh.items() if k != 'T'}
    i0 = append_vertices(mesh, new)
    m1, m2 = i0 + inv[:len(Tc)], i0 + inv[len(Tc):]
    mesh['T'] = np.concatenate([T[~cut], np.c_[p, m1, m2], np.c_[m1, q, w], np.c_[m1, w, m2]])
    return np.r_[np.asarray(f, float), np.full(len(uk), float(iso))]


# ---------------------------------------------------------------- visibility (voxel z-buffer)
def voxelize(V, T, vs, pad=4):
    """Conservative surface voxelisation -> (occupancy grid, grid origin)."""
    lo = V.min(0) - pad * vs
    occ = np.zeros(np.ceil((V.max(0) - lo) / vs).astype(int) + pad, bool)
    A, B, C = V[T[:, 0]], V[T[:, 1]], V[T[:, 2]]
    emax = np.maximum.reduce([np.linalg.norm(B - A, axis=1), np.linalg.norm(C - B, axis=1), np.linalg.norm(A - C, axis=1)])
    k = np.ceil(emax / (vs * 0.45)).astype(int) + 1    # samples per edge so that spacing < half a voxel
    for kk in np.unique(k):
        m = k == kk
        i, j = np.meshgrid(np.arange(kk + 1), np.arange(kk + 1), indexing='ij'); ok = (i + j) <= kk
        u, v = (i[ok] / kk)[None, :, None], (j[ok] / kk)[None, :, None]
        P = A[m][:, None] * (1 - u - v) + B[m][:, None] * u + C[m][:, None] * v
        idx = np.floor((P.reshape(-1, 3) - lo) / vs).astype(int)
        occ[idx[:, 0], idx[:, 1], idx[:, 2]] = True
    return occ, lo


def fib_sphere(n):
    i = np.arange(n) + 0.5
    phi, th = np.arccos(1 - 2 * i / n), np.pi * (1 + 5 ** 0.5) * i
    return np.c_[np.cos(th) * np.sin(phi), np.cos(phi), np.sin(th) * np.sin(phi)]


def visibility(V, T, ndir=120, vs=0.0025, eps=2.0, facing=0.25):
    """Per vertex: (number of the ndir sphere directions it can be seen from, cosine-weighted ambient visibility 0..1)."""
    N = vertex_normals(V, T)
    cnt = np.zeros(len(V), np.int32); num = np.zeros(len(V)); den = np.zeros(len(V))
    for d in fib_sphere(ndir):
        a = np.cross(d, [0.3, 0.5, 0.81]); a /= np.linalg.norm(a)
        R = np.stack([a, np.cross(d, a), d])           # rotate the view direction onto +z
        Vr, nz = V @ R.T, N @ d
        occ, lo = voxelize(Vr, T, vs)
        shadow = np.logical_or.accumulate(occ[:, :, ::-1], axis=2)[:, :, ::-1]  # at or below something, seen from +z
        q = Vr.copy(); q[:, 2] += eps * vs
        idx = np.floor((q - lo) / vs).astype(int)
        seen = ~shadow[idx[:, 0], idx[:, 1], idx[:, 2]]
        cnt += seen & (nz > facing)
        w = np.maximum(nz, 0); num += w * seen; den += w
    return cnt, num / np.maximum(den, 1e-9)


# ---------------------------------------------------------------- smoothing
def laplacian(V, T):
    """Cotangent Laplacian (weights clamped >= 0) and lumped vertex areas."""
    n = len(V); L = sp.csr_matrix((n, n)); area = np.zeros(n)
    fa = np.linalg.norm(face_normals(V, T), axis=1) / 2
    for k in range(3):
        i, j, o = T[:, k], T[:, (k + 1) % 3], T[:, (k + 2) % 3]
        u, v = V[i] - V[o], V[j] - V[o]
        cot = np.clip((u * v).sum(1) / np.maximum(np.linalg.norm(np.cross(u, v), axis=1), 1e-12), 0.02, 20) / 2
        L = L + sp.coo_matrix((cot, (i, j)), shape=(n, n)) + sp.coo_matrix((cot, (j, i)), shape=(n, n))
        np.add.at(area, T[:, k], fa / 3)
    L = L.tocsr()
    return sp.diags(np.asarray(L.sum(1)).ravel()) - L, np.maximum(area, 1e-12)


def harmonic(L, fixed, values):
    """Smoothest interpolation over the surface of `values` (n, k) given on the `fixed` vertices (Dirichlet solve)."""
    free = ~fixed
    X = np.array(values, float)
    lu = splu(L[free][:, free].tocsc())
    X[free] = lu.solve(-(L[free][:, fixed] @ X[fixed]))
    return X


def umbrella(T, n):
    """Row-normalised vertex adjacency (uniform weights)."""
    E = edges(T)
    A = sp.coo_matrix((np.ones(len(E) * 2), (np.r_[E[:, 0], E[:, 1]], np.r_[E[:, 1], E[:, 0]])), shape=(n, n)).tocsr()
    A.data[:] = 1
    return sp.diags(1 / np.maximum(np.asarray(A.sum(1)).ravel(), 1)) @ A


def taubin(V, T, iters=4, lam=0.5, mu=-0.53, weight=None):
    """Taubin smoothing (no shrink). weight (n,) in 0..1 scales the amount per vertex."""
    A = umbrella(T, len(V)); w = np.ones(len(V)) if weight is None else weight
    V = V.copy()
    for _ in range(iters):
        V += (lam * w)[:, None] * (A @ V - V)
        V += (mu * w)[:, None] * (A @ V - V)
    return V


# ---------------------------------------------------------------- decimation (meshoptimizer, see simplify.mjs)
def simplify(V, T, target, attrs=None, weights=None, lock=None, error=1.0, flags=()):
    """-> faces (m,3) indexing the same vertices (vertices are never moved)."""
    with tempfile.TemporaryDirectory() as d:
        np.asarray(V, np.float32).tofile(d + '/pos.f32'); np.asarray(T, np.uint32).tofile(d + '/idx.u32')
        if attrs is not None: np.asarray(attrs, np.float32).tofile(d + '/attr.f32')
        if lock is not None: np.asarray(lock, np.uint8).tofile(d + '/lock.u8')
        r = subprocess.run(['node', HERE + '/simplify.mjs', d, str(int(target)), str(error), ','.join(map(str, weights)) if weights is not None else '-', ','.join(flags) or '-'], capture_output=True, text=True)
        if r.returncode: raise RuntimeError(r.stderr)
        return np.fromfile(d + '/out.u32', np.uint32).reshape(-1, 3).astype(np.int64), json.loads(r.stdout.strip().splitlines()[-1])


# ---------------------------------------------------------------- shading normals with hard edges
def split_normals(V, T, crease_deg=50.0, group=None):
    """Area-weighted vertex normals; vertices are duplicated along edges sharper than crease_deg and along edges between
    faces of different `group` (per-face ids). -> (source vertex per output vertex, faces, normals, face corner -> output vertex)"""
    F = len(T); fn = face_normals(V, T)
    fu = fn / np.maximum(np.linalg.norm(fn, axis=1, keepdims=True), 1e-20)
    E = edges(T); fid = np.tile(np.arange(F), 3); loc = np.repeat(np.arange(3), F)
    key = np.minimum(E[:, 0], E[:, 1]) * len(V) + np.maximum(E[:, 0], E[:, 1])
    order = np.argsort(key, kind='stable'); ks = key[order]
    pair = np.where(ks[1:] == ks[:-1])[0]
    pair = pair[(np.r_[True, ks[pair[1:]] != ks[pair[:-1]]])]                # first two faces of each edge only
    h1, h2 = order[pair], order[pair + 1]
    smooth = (fu[fid[h1]] * fu[fid[h2]]).sum(1) > np.cos(np.radians(crease_deg))
    if group is not None: smooth &= group[fid[h1]] == group[fid[h2]]
    h1, h2 = h1[smooth], h2[smooth]
    # corner (face, local index) graph: corners of the same vertex are joined across smooth edges
    def corner(h, end):   # corner id of half-edge h's start (end=0) or end (end=1) vertex
        return fid[h] * 3 + (loc[h] + end) % 3
    same = E[h1, 0] == E[h2, 0]                      # same orientation (non-manifold-ish) or opposite (the normal case)
    a = np.r_[corner(h1, 0), corner(h1, 1)]
    b = np.r_[np.where(same, corner(h2, 0), corner(h2, 1)), np.where(same, corner(h2, 1), corner(h2, 0))]
    lab = connected_components(sp.coo_matrix((np.ones(len(a)), (a, b)), shape=(F * 3, F * 3)), directed=False)[1]
    cv = T.reshape(-1)                                # vertex of corner f*3+k
    uniq, out_of_corner = np.unique(lab, return_inverse=True)
    src = np.zeros(len(uniq), np.int64); src[out_of_corner] = cv
    N = np.zeros((len(uniq), 3)); np.add.at(N, out_of_corner, np.repeat(fn, 3, axis=0))
    bad = np.linalg.norm(N, axis=1) < 1e-12                       # faces cancelling out: fall back to one face's normal
    if bad.any():
        fb = np.zeros((len(uniq), 3)); fb[out_of_corner] = np.repeat(fu, 3, axis=0); N[bad] = fb[bad]
    N /= np.linalg.norm(N, axis=1, keepdims=True)
    return src, out_of_corner.reshape(F, 3), N


if __name__ == '__main__':   # self-check: slicing keeps area, volume and closedness; split normals stay unit length
    V = np.array([[1, 0, 0], [-1, 0, 0], [0, 1, 0], [0, -1, 0], [0, 0, 1], [0, 0, -1]], float)
    m = {'V': V, 'T': np.array([[0, 2, 4], [2, 1, 4], [1, 3, 4], [3, 0, 4], [2, 0, 5], [1, 2, 5], [3, 1, 5], [0, 3, 5]])}
    f = slice_mesh(m, m['V'][:, 1], 0.3)
    assert abs(np.linalg.norm(face_normals(m['V'], m['T']), axis=1).sum() / 2 - 4 * 3 ** 0.5) < 1e-9
    assert abs((m['V'][m['T'][:, 0]] * np.cross(m['V'][m['T'][:, 1]], m['V'][m['T'][:, 2]])).sum() / 6 - 4 / 3) < 1e-9
    assert not boundary_loops(m['T']) and ((f[m['T']] >= 0.3 - 1e-6).all(1) | (f[m['T']] <= 0.3 + 1e-6).all(1)).all()
    src, T2, N = split_normals(m['V'], m['T'], 50)
    assert np.allclose(np.linalg.norm(N, axis=1), 1) and (m['V'][src][T2] == m['V'][m['T']]).all()
    h = harmonic(laplacian(m['V'], m['T'])[0], m['V'][:, 1] != 0.3, m['V'][:, 1:2])
    assert h.min() >= -1 - 1e-9 and h.max() <= 1 + 1e-9
    print('meshops ok')
