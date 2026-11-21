"""Check a baked monkey GLB: sane vertex data (the asserts in polish.validate) and a rig + clips identical to the original.
usage: python3 tools/monkey/check_glb.py <baked.glb> <original.glb>"""
import sys, os
import numpy as np
sys.path.insert(0, os.path.dirname(os.path.abspath(__file__)))
from glb import GLB
from polish import validate

baked, orig = sys.argv[1:3]
tris = validate(baked)            # finite positions/normals/weights, unit normals, weights sum to 1, no degenerate triangles, no zero scales
a, b = GLB(baked), GLB(orig)
strip = lambda n: {k: v for k, v in n.items() if k not in ('mesh', 'skin')}   # which node carries the mesh is all that may differ
assert [strip(n) for n in a.json['nodes']] == [strip(n) for n in b.json['nodes']], 'node tree / transforms changed'
assert a.json['scenes'] == b.json['scenes'] and len(a.json['skins']) == len(b.json['skins'])
for sa, sb in zip(a.json['skins'], b.json['skins']):
    assert sa['joints'] == sb['joints'], 'joint list changed'
    assert a.views[a.json['accessors'][sa['inverseBindMatrices']]['bufferView']] == b.views[b.json['accessors'][sb['inverseBindMatrices']]['bufferView']], 'inverse bind matrices changed'
assert [x['name'] for x in a.json['animations']] == [x['name'] for x in b.json['animations']]
n = 0
for xa, xb in zip(a.json['animations'], b.json['animations']):
    assert [c['target'] for c in xa['channels']] == [c['target'] for c in xb['channels']]
    for s, t in zip(xa['samplers'], xb['samplers']):
        assert s.get('interpolation') == t.get('interpolation')
        for k in ('input', 'output'):
            assert a.views[a.json['accessors'][s[k]]['bufferView']] == b.views[b.json['accessors'][t[k]]['bufferView']], 'keyframes changed'
            n += 1
p = a.json['meshes'][0]['primitives'][0]
N = a.acc(p['attributes']['NORMAL']).astype(float); W = a.acc(p['attributes']['WEIGHTS_0']).astype(float); V = a.acc(p['attributes']['POSITION']).astype(float)
T = a.acc(p['indices']).reshape(-1, 3).astype(int)
area = np.linalg.norm(np.cross(V[T[:, 1]] - V[T[:, 0]], V[T[:, 2]] - V[T[:, 0]]), axis=1) / 2
print(f'{os.path.basename(baked)}: OK  {len(V)} verts {tris} tris | normals |n| in [{np.linalg.norm(N, axis=1).min():.6f}, {np.linalg.norm(N, axis=1).max():.6f}]'
      f' | weight sums in [{W.sum(1).min():.6f}, {W.sum(1).max():.6f}], smallest top weight {W.max(1).min():.3f}'
      f' | smallest triangle {area.min() * 1e6:.4f} mm^2 | rig: {len(a.json["nodes"])} nodes, {len(a.json["skins"][0]["joints"])} joints, inverse binds and {len(a.json["animations"])} clips ({n} keyframe tracks) byte-identical to the original')
