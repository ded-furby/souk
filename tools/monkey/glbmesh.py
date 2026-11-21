"""Shared helpers for the monkey polish pipeline: load primitives, write a skinned GLB (rig + clips copied untouched)."""
import numpy as np
from glb import GLB


def load_prim(path, mesh=0):
    """-> (attrs {POSITION, NORMAL, COLOR_0, JOINTS_0, WEIGHTS_0, ...} as arrays, triangles (n,3))"""
    g = GLB(path)
    p = g.json['meshes'][mesh]['primitives'][0]
    return {k: g.acc(a) for k, a in p['attributes'].items()}, g.acc(p['indices']).reshape(-1, 3).astype(np.int64)


def write_skinned(src_path, out_path, meshes, materials):
    """Replace the meshes/materials of src_path, keep nodes, skin and animations byte-identical.
    meshes: [{name, V, N, C (linear rgb float), J (n,4), W (n,4), T, material (index)}]"""
    g = GLB(src_path)
    j = g.json
    nodes = [i for i, n in enumerate(j['nodes']) if 'mesh' in n]
    assert len(meshes) <= len(nodes)
    j['meshes'], j['materials'] = [], materials
    for k, m in enumerate(meshes):
        V = np.asarray(m['V'], np.float32)
        W = np.asarray(m['W'], np.float32)
        attrs = {
            'POSITION': g.add_acc(V, 'VEC3', 34962, minmax=True),
            'NORMAL': g.add_acc(np.asarray(m['N'], np.float32), 'VEC3', 34962),
            'COLOR_0': g.add_acc(np.asarray(m['C'], np.float32), 'VEC3', 34962),
            'JOINTS_0': g.add_acc(np.asarray(m['J'], np.uint8), 'VEC4', 34962),
            'WEIGHTS_0': g.add_acc(W, 'VEC4', 34962),
        }
        T = np.asarray(m['T']).reshape(-1)
        idx = g.add_acc(T.astype(np.uint32 if len(V) > 65535 else np.uint16), 'SCALAR', 34963)
        j['meshes'].append({'name': m['name'], 'primitives': [{'attributes': attrs, 'indices': idx, 'material': m['material']}]})
        j['nodes'][nodes[k]]['mesh'] = k
    for extra in nodes[len(meshes):]:  # fewer meshes than before: leave an empty node behind (keeps node indices stable)
        for key in ('mesh', 'skin'): j['nodes'][extra].pop(key, None)
    g.gc()
    return g.save(out_path)
