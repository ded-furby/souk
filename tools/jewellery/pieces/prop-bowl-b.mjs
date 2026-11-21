// Deep footed bowl: teal glaze with cream scrollwork, speckled cream interior.
import { THREE, C, painted, bands, lathe } from './_props-common.mjs';

export function build() {
  const root = new THREE.Group();
  const P = painted('PaintedBowlB', (c, w, h) => bands(c, w, h, C.teal, [
    { from: 0, to: 0.1, bg: C.ochre },
    { from: 0.12, to: 0.2, fg: C.cream, m: 'triDown', n: 20 },
    { from: 0.24, to: 0.4, fg: C.cream, m: 'scroll', n: 12, edge: C.cream, lw: 3 },
    { from: 0.42, to: 0.5, fg: C.ochre, m: 'diamond', n: 24, s: 0.3 },
    { from: 0.5, to: 1, bg: C.cream },
    { from: 0.5, to: 0.56, bg: C.ochre },
    { from: 0.6, to: 0.9, fg: C.teal, m: 'dots', n: 14, rows: 4, s: 0.14 },
    { from: 0.93, to: 1, bg: C.teal },
  ]));
  root.add(lathe([[0.034, 0], [0.04, 0.003], [0.03, 0.016], [0.032, 0.026], [0.056, 0.042], [0.076, 0.066], [0.081, 0.095], [0.0775, 0.096], [0.071, 0.067], [0.05, 0.045], [0.02, 0.036], [0, 0.035]], { seg: 24, n: 30, mat: P, auto: false }));
  return root;
}
