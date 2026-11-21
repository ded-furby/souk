// Squat two-handled pot: terracotta ground, cream zigzags, teal dots.
import { THREE, M, C, painted, bands, lathe, wire } from './_props-common.mjs';

export function build() {
  const root = new THREE.Group();
  const P = painted('PaintedVaseB', (c, w, h) => bands(c, w, h, C.terra, [
    { from: 0.06, to: 0.2, fg: C.ochre, m: 'tri', n: 16 },
    { from: 0.24, to: 0.44, bg: C.cream, fg: C.teal, m: 'diamond', n: 12, edge: C.ink, s: 0.34 },
    { from: 0.3, to: 0.38, fg: C.ochre, m: 'dots', n: 12, off: true, s: 0.4 },
    { from: 0.48, to: 0.62, fg: C.cream, m: 'zig', n: 16, lw: 4 },
    { from: 0.64, to: 0.7, fg: C.teal, m: 'dots', n: 24, s: 0.3 },
    { from: 0.74, to: 0.78, bg: C.cream },
    { from: 0.82, to: 0.96, fg: C.cream, m: 'stripe', n: 20, s: 0.08 },
  ]));
  root.add(lathe([[0.042, 0], [0.047, 0.004], [0.076, 0.04], [0.092, 0.085], [0.074, 0.13], [0.048, 0.155], [0.05, 0.178], [0.066, 0.2]], { seg: 24, n: 24, mat: P }));
  root.add(lathe([[0.066, 0.2], [0.047, 0.176], [0.043, 0.155], [0, 0.145]], { seg: 16, mat: M.clay, auto: false }));
  for (const s of [-1, 1])
    root.add(wire([[s * 0.052, 0.18, 0], [s * 0.088, 0.178, 0], [s * 0.102, 0.15, 0], [s * 0.086, 0.118, 0]], 0.0075, { radial: 6, segLen: 0.012, mat: M.ochre }));
  return root;
}
