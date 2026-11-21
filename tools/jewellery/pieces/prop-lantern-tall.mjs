// Tall slender spindle lantern with a stacked finial and long drop. Hook at origin.
import { THREE, M, pierced, bands, hanger, lathe, ring, bead } from './_props-common.mjs';

export function build() {
  const root = new THREE.Group();
  const P = pierced((c, w, h) => bands(c, w, h, '#b98a4a', [
    { from: 0.02, to: 0.14, m: 'tri', n: 12, hole: true },
    { from: 0.17, to: 0.47, m: 'almond', n: 12, hole: true, s: 0.34 },
    { from: 0.47, to: 0.53, bg: '#8f6934', m: 'dots', n: 24, hole: true, s: 0.22 },
    { from: 0.53, to: 0.83, m: 'almond', n: 12, off: true, hole: true, s: 0.34 },
    { from: 0.86, to: 0.97, m: 'triDown', n: 12, hole: true },
  ]), { w: 256, h: 256 });
  const { group, y } = hanger(3);
  root.add(group);
  const t = y - 0.13, H = 0.36, b = t - H;
  const prof = [[0.034, b], [0.05, b + 0.05], [0.062, b + 0.14], [0.058, b + 0.24], [0.044, b + 0.32], [0.036, t]];
  root.add(lathe(prof, { seg: 12, n: 14, mat: P }));
  root.add(lathe(prof.map(([r, yy]) => [r * 0.88, yy]), { seg: 10, n: 8, mat: M.lampGlass }));
  // spire with stacked knops
  root.add(lathe([[0.002, y], [0.007, y - 0.008], [0.003, y - 0.016], [0.012, y - 0.03], [0.004, y - 0.042], [0.009, y - 0.052], [0.006, y - 0.065], [0.022, y - 0.095], [0.042, t + 0.012], [0.04, t]], { seg: 12, n: 24 }));
  root.add(ring(0.039, 0.004, t, M.brass, 12, 5), ring(0.037, 0.004, b, M.brass, 12, 5));
  // drop
  root.add(lathe([[0.036, b], [0.03, b - 0.02], [0.012, b - 0.04], [0.005, b - 0.055], [0.013, b - 0.07], [0.004, b - 0.085], [0.008, b - 0.1], [0.001, b - 0.13]], { seg: 12, n: 22 }));
  return root;
}
