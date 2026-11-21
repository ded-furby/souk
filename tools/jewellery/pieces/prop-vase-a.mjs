// Tall bottle-neck vase: teal glaze, cream bands with ink motifs, ochre accents.
import { THREE, M, C, painted, bands, lathe } from './_props-common.mjs';

export function build() {
  const root = new THREE.Group();
  const P = painted('PaintedVaseA', (c, w, h) => bands(c, w, h, C.teal, [
    { from: 0, to: 0.04, bg: C.terra },
    { from: 0.07, to: 0.2, fg: C.cream, m: 'petal', n: 12 },
    { from: 0.24, to: 0.42, bg: C.cream, fg: C.ink, m: ['ring'], n: 8, edge: C.ochre, s: 0.34 },
    { from: 0.24, to: 0.42, fg: C.ochre, m: 'diamond', n: 8, off: true, s: 0.16 },
    { from: 0.46, to: 0.58, fg: C.cream, m: 'almond', n: 14, s: 0.26 },
    { from: 0.62, to: 0.66, bg: C.ochre },
    { from: 0.68, to: 0.88, fg: C.cream, m: 'stripe', n: 10, s: 0.05 },
    { from: 0.9, to: 0.94, bg: C.ochre },
    { from: 0.95, to: 1, bg: C.cream },
  ]));
  root.add(lathe([[0.044, 0], [0.05, 0.004], [0.068, 0.045], [0.086, 0.11], [0.072, 0.17], [0.036, 0.215], [0.022, 0.26], [0.02, 0.31], [0.029, 0.345], [0.036, 0.358]], { seg: 24, n: 28, mat: P }));
  root.add(lathe([[0.036, 0.358], [0.027, 0.345], [0.018, 0.31], [0, 0.3]], { seg: 16, mat: M.teal, auto: false }));
  return root;
}
