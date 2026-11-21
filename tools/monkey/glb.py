"""Minimal GLB reader/writer (numpy). Keeps everything we do not touch (skin, bones, animation clips) byte-identical."""
import json, struct
import numpy as np

CT = {5120: np.int8, 5121: np.uint8, 5122: np.int16, 5123: np.uint16, 5125: np.uint32, 5126: np.float32}
NC = {'SCALAR': 1, 'VEC2': 2, 'VEC3': 3, 'VEC4': 4, 'MAT4': 16}


class GLB:
    def __init__(self, path):
        b = open(path, 'rb').read()
        assert b[:4] == b'glTF'
        clen, _ = struct.unpack('<II', b[12:20])
        self.json = json.loads(b[20:20 + clen])
        off = 20 + clen
        blen, _ = struct.unpack('<II', b[off:off + 8])
        self.bin = b[off + 8:off + 8 + blen]
        # every buffer view as its own bytes blob, so views can be replaced / appended freely
        self.views = [bytes(self.bin[v.get('byteOffset', 0):v.get('byteOffset', 0) + v['byteLength']]) for v in self.json['bufferViews']]

    def acc(self, i):
        a = self.json['accessors'][i]
        v = self.json['bufferViews'][a['bufferView']]
        dt, n = CT[a['componentType']], NC[a['type']]
        raw = self.views[a['bufferView']]
        stride = v.get('byteStride') or np.dtype(dt).itemsize * n
        o = a.get('byteOffset', 0)
        if stride == np.dtype(dt).itemsize * n:
            arr = np.frombuffer(raw, dt, a['count'] * n, o).reshape(a['count'], n)
        else:
            arr = np.stack([np.frombuffer(raw, dt, n, o + k * stride) for k in range(a['count'])])
        return arr.copy() if n > 1 else arr.copy().reshape(-1)

    def add_view(self, data, target=None):
        self.views.append(bytes(data))
        v = {'buffer': 0, 'byteLength': len(data)}
        if target: v['target'] = target
        self.json['bufferViews'].append(v)
        return len(self.views) - 1

    def add_acc(self, arr, type_, target=None, minmax=False, normalized=False):
        arr = np.ascontiguousarray(arr)
        ct = {v: k for k, v in CT.items()}[arr.dtype.type]
        a = {'bufferView': self.add_view(arr.tobytes(), target), 'componentType': ct, 'count': int(arr.shape[0]), 'type': type_}
        if normalized: a['normalized'] = True
        if minmax:
            a['min'] = arr.reshape(arr.shape[0], -1).min(0).tolist()
            a['max'] = arr.reshape(arr.shape[0], -1).max(0).tolist()
        self.json['accessors'].append(a)
        return len(self.json['accessors']) - 1

    def add_image(self, png_bytes, mime='image/png', name=None):
        bv = self.add_view(png_bytes)
        self.json.setdefault('images', []).append({'bufferView': bv, 'mimeType': mime, **({'name': name} if name else {})})
        return len(self.json['images']) - 1

    def gc(self):
        """Drop accessors / buffer views that nothing references any more (after meshes were replaced)."""
        j = self.json
        used = set()
        for m in j.get('meshes', []):
            for p in m['primitives']:
                used.update(p['attributes'].values())
                if 'indices' in p: used.add(p['indices'])
                for t in p.get('targets', []): used.update(t.values())
        for s in j.get('skins', []):
            if 'inverseBindMatrices' in s: used.add(s['inverseBindMatrices'])
        for a in j.get('animations', []):
            for s in a['samplers']: used.update((s['input'], s['output']))
        amap = {old: new for new, old in enumerate(sorted(used))}
        j['accessors'] = [j['accessors'][i] for i in sorted(used)]
        for m in j.get('meshes', []):
            for p in m['primitives']:
                p['attributes'] = {k: amap[v] for k, v in p['attributes'].items()}
                if 'indices' in p: p['indices'] = amap[p['indices']]
        for s in j.get('skins', []):
            if 'inverseBindMatrices' in s: s['inverseBindMatrices'] = amap[s['inverseBindMatrices']]
        for a in j.get('animations', []):
            for s in a['samplers']: s['input'], s['output'] = amap[s['input']], amap[s['output']]
        vused = {a['bufferView'] for a in j['accessors']} | {im['bufferView'] for im in j.get('images', []) if 'bufferView' in im}
        vmap = {old: new for new, old in enumerate(sorted(vused))}
        j['bufferViews'] = [j['bufferViews'][i] for i in sorted(vused)]
        self.views = [self.views[i] for i in sorted(vused)]
        for a in j['accessors']: a['bufferView'] = vmap[a['bufferView']]
        for im in j.get('images', []):
            if 'bufferView' in im: im['bufferView'] = vmap[im['bufferView']]

    def save(self, path):
        out, off = bytearray(), 0
        for v, data in zip(self.json['bufferViews'], self.views):
            pad = (-len(out)) % 4
            out += b'\0' * pad
            v['byteOffset'] = len(out)
            v['byteLength'] = len(data)
            out += data
        out += b'\0' * ((-len(out)) % 4)
        self.json['buffers'] = [{'byteLength': len(out)}]
        js = json.dumps(self.json, separators=(',', ':')).encode()
        js += b' ' * ((-len(js)) % 4)
        total = 12 + 8 + len(js) + 8 + len(out)
        with open(path, 'wb') as f:
            f.write(struct.pack('<4sII', b'glTF', 2, total))
            f.write(struct.pack('<II', len(js), 0x4E4F534A)); f.write(js)
            f.write(struct.pack('<II', len(out), 0x004E4942)); f.write(out)
        return total


def quat_mat(q):
    x, y, z, w = q
    return np.array([[1 - 2 * (y * y + z * z), 2 * (x * y - z * w), 2 * (x * z + y * w)],
                     [2 * (x * y + z * w), 1 - 2 * (x * x + z * z), 2 * (y * z - x * w)],
                     [2 * (x * z - y * w), 2 * (y * z + x * w), 1 - 2 * (x * x + y * y)]])


def node_local(n):
    if 'matrix' in n: return np.array(n['matrix'], float).reshape(4, 4).T
    m = np.eye(4)
    m[:3, :3] = quat_mat(n.get('rotation', [0, 0, 0, 1])) * np.array(n.get('scale', [1, 1, 1]))[None, :]
    m[:3, 3] = n.get('translation', [0, 0, 0])
    return m


def world_matrices(j, local=None):
    """World matrix of every node. `local` optionally overrides node local matrices {index: 4x4}."""
    nodes = j['nodes']
    parent = {}
    for i, n in enumerate(nodes):
        for c in n.get('children', []): parent[c] = i
    W = {}
    def w(i):
        if i not in W:
            L = local[i] if local and i in local else node_local(nodes[i])
            W[i] = (w(parent[i]) @ L) if i in parent else L
        return W[i]
    for i in range(len(nodes)): w(i)
    return W, parent
