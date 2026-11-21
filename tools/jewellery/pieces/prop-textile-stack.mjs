// Stack of folded embroidered textiles: soft pillowed layers, each cloth folded in two or three.
import { THREE, M, C, painted, bands, mesh, planarUV, rng } from './_props-common.mjs';

const R = rng(7);
function fold(w, d, t, mat) {
  const g = new THREE.BoxGeometry(w, t, d, 6, 1, 4).translate(0, t / 2, 0), p = g.attributes.position, ph = R() * 6;
  for (let i = 0; i < p.count; i++) {
    const x = p.getX(i), y = p.getY(i), z = p.getZ(i);
    const ex = Math.pow(Math.abs(x) / (w / 2), 4), ez = Math.pow(Math.abs(z) / (d / 2), 4), e = Math.max(ex, ez);
    let yy = y * (1 - 0.3 * e);                                          // top rolls down at the edges → soft folds
    yy += (y / t) * 0.0025 * Math.sin(x * 31 + ph) * Math.cos(z * 27 + ph); // slight rumple on top
    p.setY(i, yy);
  }
  g.computeVertexNormals();
  planarUV(g, 'x', 'z', 0.96 / w, 0.96 / d); // sides take the border colour instead of a squashed copy of the pattern
  return mesh(g, mat);
}
export function build() {
  const root = new THREE.Group();
  const A = painted('TextileRed', (c, w, h) => bands(c, w, h, C.deepRed, [
    { from: 0.0, to: 0.04, bg: C.gold }, { from: 0.06, to: 0.16, fg: C.gold, m: 'zig', n: 24, lw: 2 },
    { from: 0.18, to: 0.2, bg: C.gold },
    { from: 0.24, to: 0.76, fg: C.gold, m: 'diamond', n: 8, rows: 4, s: 0.26 },
    { from: 0.24, to: 0.76, fg: C.red, m: 'dots', n: 8, rows: 4, s: 0.1 },
    { from: 0.8, to: 0.82, bg: C.gold }, { from: 0.84, to: 0.94, fg: C.gold, m: 'zig', n: 24, lw: 2 }, { from: 0.96, to: 1, bg: C.gold },
  ]), { rough: 0.9 });
  const B = painted('TextileTeal', (c, w, h) => bands(c, w, h, C.teal, [
    { from: 0.0, to: 0.12, bg: C.ink, fg: C.cream, m: 'dots', n: 30, s: 0.16 },
    { from: 0.16, to: 0.84, fg: C.cream, m: 'tear', n: 7, rows: 3 },
    { from: 0.16, to: 0.84, fg: C.ochre, m: 'almond', n: 7, rows: 3, s: 0.12 },
    { from: 0.88, to: 1, bg: C.ink, fg: C.cream, m: 'dots', n: 30, s: 0.16 },
  ]), { rough: 0.9 });
  const Cc = painted('TextileOchre', (c, w, h) => bands(c, w, h, '#a8803f', [
    { from: 0.0, to: 0.08, bg: C.terra }, { from: 0.1, to: 0.12, bg: C.cream },
    { from: 0.16, to: 0.3, fg: C.terra, m: 'tri', n: 16 }, { from: 0.36, to: 0.4, bg: C.ink },
    { from: 0.42, to: 0.58, fg: C.cream, m: ['wave'], n: 10, lw: 3 }, { from: 0.6, to: 0.64, bg: C.ink },
    { from: 0.7, to: 0.84, fg: C.terra, m: 'triDown', n: 16 }, { from: 0.88, to: 0.9, bg: C.cream }, { from: 0.92, to: 1, bg: C.terra },
  ]), { rough: 0.9 });
  const cloths = [[0.42, 0.3, 0.02, 2, Cc], [0.4, 0.28, 0.017, 2, A], [0.39, 0.29, 0.024, 1, M.linen], [0.36, 0.26, 0.015, 3, B], [0.33, 0.24, 0.018, 2, A]];
  let y = 0;
  for (const [w, d, t, layers, mat] of cloths) {
    const ry = (R() - 0.5) * 0.2, ox = (R() - 0.5) * 0.03, oz = (R() - 0.5) * 0.025;
    for (let i = 0; i < layers; i++) {
      const f = fold(w - i * 0.006, d - i * 0.004, t, mat);
      f.position.set(ox, y, oz); f.rotation.y = ry + (R() - 0.5) * 0.03;
      root.add(f);
      y += t * 0.97;
    }
  }
  return root;
}
