// Decimate a triangle list with meshoptimizer (attribute-aware, optional per-vertex locks). Driven by polish.py.
// usage: node simplify.mjs <dir> <targetTris> <maxError> <attrWeights csv|-> <flags csv|->
//   reads  <dir>/pos.f32 (n*3) idx.u32 (m*3) [attr.f32 (n*k)] [lock.u8 (n)]   writes <dir>/out.u32
// Vertices are never moved: the result indexes a subset of the input vertices.
import fs from 'node:fs';
import path from 'node:path';
import { MeshoptSimplifier as S } from 'meshoptimizer';

const [dir, target, maxError, weights, flags] = process.argv.slice(2);
const read = (f, T) => { const b = fs.readFileSync(path.join(dir, f)); return new T(b.buffer.slice(b.byteOffset, b.byteOffset + b.byteLength)); };
const has = (f) => fs.existsSync(path.join(dir, f));
await S.ready;
const pos = read('pos.f32', Float32Array), idx = read('idx.u32', Uint32Array);
const w = weights && weights !== '-' ? weights.split(',').map(Number) : [];
const fl = flags && flags !== '-' ? flags.split(',') : [];
const lock = has('lock.u8') ? read('lock.u8', Uint8Array) : null;
const [out, err] = w.length
  ? S.simplifyWithAttributes(idx, pos, 3, read('attr.f32', Float32Array), w.length, w, lock, +target * 3, +maxError, fl)
  : S.simplifyWithAttributes(idx, pos, 3, new Float32Array(0), 0, [], lock, +target * 3, +maxError, fl);
fs.writeFileSync(path.join(dir, 'out.u32'), Buffer.from(out.buffer, out.byteOffset, out.byteLength));
console.log(JSON.stringify({ tris: out.length / 3, error: err, scale: S.getScale(pos, 3) }));
