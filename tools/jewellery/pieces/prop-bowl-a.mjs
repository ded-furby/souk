// Wide shallow painted bowl: cream glaze, teal petals outside, rosette inside.
import { THREE, C, painted, bands, lathe } from './_props-common.mjs';

export function build() {
  const root = new THREE.Group();
  const P = painted('PaintedBowlA', (c, w, h) => bands(c, w, h, C.cream, [
    { from: 0, to: 0.07, bg: C.terra },
    { from: 0.1, to: 0.3, fg: C.teal, m: 'petal', n: 14 },
    { from: 0.33, to: 0.43, fg: C.ochre, m: 'dots', n: 28, edge: C.teal, s: 0.2 },
    { from: 0.455, to: 0.515, bg: C.teal },
    { from: 0.54, to: 0.64, fg: C.teal, m: 'zig', n: 28 },
    { from: 0.66, to: 0.68, bg: C.ochre },
    { from: 0.7, to: 0.86, fg: C.teal, m: 'almond', n: 16, s: 0.3 },
    { from: 0.74, to: 0.82, fg: C.ochre, m: 'dots', n: 16, off: true, s: 0.3 },
    { from: 0.87, to: 0.89, bg: C.teal },
    { from: 0.9, to: 1, fg: C.ochre, m: 'petalDown', n: 8 },
  ]));
  root.add(lathe([[0.044, 0], [0.048, 0.003], [0.044, 0.012], [0.072, 0.026], [0.106, 0.055], [0.12, 0.08], [0.1165, 0.0815], [0.1, 0.056], [0.066, 0.03], [0.03, 0.019], [0, 0.017]], { seg: 28, n: 30, mat: P, auto: false }));
  return root;
}
