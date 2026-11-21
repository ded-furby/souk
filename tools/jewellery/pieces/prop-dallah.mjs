// Arabic coffee pot (dallah): waisted body, crescent beak spout (+X), handle (−X), tall finial lid.
import { THREE, M, engraved, bands, lathe, ring, wire, bead, BR, BRL } from './_props-common.mjs';

export function build() {
  const root = new THREE.Group();
  const E = engraved((c, w, h) => bands(c, w, h, BR, [
    { from: 0.03, to: 0.16, fg: BRL, m: 'petal', n: 16, lw: 2 },
    { from: 0.2, to: 0.34, fg: BRL, m: ['zig', 'dots'], n: 16, edge: BRL, s: 0.1 },
    { from: 0.36, to: 0.5, fg: BRL, m: 'almond', n: 24, s: 0.2 },
    { from: 0.62, to: 0.7, fg: BRL, m: 'dots', n: 24, edge: BRL, s: 0.2 },
    { from: 0.8, to: 0.97, fg: BRL, m: 'triDown', n: 16 },
  ]));
  root.add(lathe([[0.05, 0], [0.058, 0.004], [0.056, 0.014], [0.072, 0.04], [0.074, 0.065], [0.058, 0.105], [0.04, 0.14], [0.042, 0.16], [0.054, 0.188], [0.06, 0.2]], { seg: 20, n: 20, mat: E }));
  root.add(lathe([[0.058, 0.2], [0.055, 0.21], [0.04, 0.228], [0.016, 0.24], [0.006, 0.246], [0.013, 0.258], [0.005, 0.27], [0.009, 0.28], [0.003, 0.29], [0.0, 0.305]], { seg: 14, n: 18 }));
  root.add(ring(0.06, 0.0035, 0.2), ring(0.041, 0.003, 0.148), ring(0.056, 0.003, 0.008));
  const spout = wire([[0.03, 0.14, 0], [0.075, 0.158, 0], [0.115, 0.185, 0], [0.15, 0.2, 0], [0.168, 0.196, 0]], 0.026, { taper: (t) => 1 - 0.9 * Math.pow(t, 0.8), radial: 8, segLen: 0.014, mat: M.brass });
  spout.scale.z = 0.55;
  root.add(spout);
  root.add(wire([[-0.05, 0.192, 0], [-0.095, 0.2, 0], [-0.122, 0.16, 0], [-0.112, 0.1, 0], [-0.068, 0.062, 0]], 0.0065, { taper: [1, 0.7], radial: 6, segLen: 0.012, mat: M.brass }));
  root.add(bead(0.009, [-0.095, 0.203, 0], M.brass, 8));
  return root;
}
