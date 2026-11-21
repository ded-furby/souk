// Lidded ginger jar: cream glaze with teal lattice and ochre bands; teal lid with knob.
import { THREE, M, C, painted, bands, lathe } from './_props-common.mjs';

export function build() {
  const root = new THREE.Group();
  const P = painted('PaintedJar', (c, w, h) => bands(c, w, h, C.cream, [
    { from: 0, to: 0.05, bg: C.teal },
    { from: 0.07, to: 0.17, fg: C.ochre, m: 'petal', n: 18 },
    { from: 0.2, to: 0.23, bg: C.teal },
    { from: 0.25, to: 0.7, fg: C.teal, m: 'cross', n: 14, rows: 4, lw: 2.5 },
    { from: 0.25, to: 0.7, fg: C.ochre, m: 'dots', n: 14, rows: 4, s: 0.12 },
    { from: 0.72, to: 0.75, bg: C.teal },
    { from: 0.77, to: 0.88, fg: C.teal, m: 'wave', n: 12, lw: 3 },
    { from: 0.9, to: 1, bg: C.ochre },
  ]));
  root.add(lathe([[0.045, 0], [0.05, 0.004], [0.074, 0.03], [0.095, 0.09], [0.086, 0.15], [0.056, 0.186], [0.045, 0.198], [0.047, 0.21]], { seg: 24, n: 26, mat: P }));
  root.add(lathe([[0.053, 0.206], [0.055, 0.214], [0.046, 0.234], [0.02, 0.247], [0.007, 0.25], [0.006, 0.256], [0.014, 0.266], [0.009, 0.278], [0, 0.283]], { seg: 20, n: 20, mat: M.teal }));
  return root;
}
