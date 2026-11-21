// Tall copper ewer: footed bulb body, long neck, S spout (+X), brass handle (−X), lid with finial.
import { THREE, M, painted, bands, lathe, ring, wire, bead } from './_props-common.mjs';

export function build() {
  const root = new THREE.Group();
  const cu = '#b5683f', dk = '#7a3f24';
  const E = painted('EngravedCopper', (c, w, h) => bands(c, w, h, cu, [
    { from: 0.18, to: 0.26, fg: dk, m: 'petalDown', n: 20, lw: 2 },
    { from: 0.28, to: 0.4, fg: dk, m: 'scroll', n: 12, edge: dk, lw: 2.5 },
    { from: 0.42, to: 0.54, fg: dk, m: 'petal', n: 14 },
    { from: 0.6, to: 0.82, fg: dk, m: 'stripe', n: 14, s: 0.06 },
    { from: 0.88, to: 0.96, fg: dk, m: 'zig', n: 16, edge: dk },
  ]), { rough: 0.4, metal: 0.9 });
  root.add(lathe([[0.05, 0], [0.047, 0.008], [0.028, 0.028], [0.03, 0.045], [0.07, 0.085], [0.085, 0.135], [0.068, 0.19], [0.032, 0.235], [0.022, 0.29], [0.023, 0.335], [0.036, 0.365], [0.04, 0.372]], { seg: 20, n: 24, mat: E }));
  root.add(lathe([[0.038, 0.372], [0.032, 0.385], [0.014, 0.395], [0.006, 0.4], [0.011, 0.41], [0.004, 0.42], [0, 0.435]], { seg: 14, n: 16, mat: M.brass }));
  root.add(ring(0.027, 0.0035, 0.26), ring(0.03, 0.004, 0.04), ring(0.039, 0.003, 0.37));
  root.add(wire([[0.07, 0.125, 0], [0.115, 0.15, 0], [0.14, 0.21, 0], [0.15, 0.28, 0], [0.168, 0.325, 0], [0.19, 0.335, 0]], 0.013, { taper: [1, 0.45], radial: 8, segLen: 0.016, mat: M.copper }));
  root.add(wire([[-0.03, 0.355, 0], [-0.085, 0.38, 0], [-0.13, 0.33, 0], [-0.12, 0.24, 0], [-0.085, 0.17, 0], [-0.1, 0.15, 0]], 0.0065, { taper: [1, 0.6], radial: 6, segLen: 0.016, mat: M.brass }));
  root.add(bead(0.008, [-0.085, 0.384, 0], M.brass, 8));
  return root;
}
