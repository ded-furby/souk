// Gadrooned brass baluster vase with engraved neck and trumpet mouth.
import { THREE, M, engraved, bands, lathe, lobes, ring, BR, BRL } from './_props-common.mjs';

export function build() {
  const root = new THREE.Group();
  const E = engraved((c, w, h) => bands(c, w, h, BR, [
    { from: 0.0, to: 0.08, fg: BRL, m: 'tri', n: 20 },
    { from: 0.14, to: 0.5, fg: BRL, m: 'stripe', n: 12, off: true, s: 0.03 },
    { from: 0.56, to: 0.66, fg: BRL, m: ['wave', 'dots'], n: 12, edge: BRL, s: 0.12 },
    { from: 0.68, to: 0.84, fg: BRL, m: 'almond', n: 18, s: 0.22 },
    { from: 0.9, to: 0.98, fg: BRL, m: 'dots', n: 30, s: 0.25 },
  ]));
  const body = lathe([[0.048, 0], [0.052, 0.006], [0.036, 0.022], [0.034, 0.034], [0.07, 0.07], [0.09, 0.12], [0.078, 0.175], [0.04, 0.215], [0.03, 0.25], [0.036, 0.285], [0.062, 0.315], [0.066, 0.32]], { seg: 36, n: 22, mat: E });
  lobes(body, 12, 0.05, (r, y) => THREE.MathUtils.smoothstep(y, 0.045, 0.08) * (1 - THREE.MathUtils.smoothstep(y, 0.17, 0.2)));
  root.add(body);
  // inner throat so the mouth isn't a hole to nowhere
  root.add(lathe([[0.064, 0.32], [0.034, 0.288], [0.027, 0.25], [0, 0.24]], { seg: 16, mat: M.brassDark, auto: false }));
  root.add(ring(0.033, 0.004, 0.228, M.brass, 20, 5), ring(0.036, 0.0035, 0.03, M.brass, 20, 5), ring(0.065, 0.003, 0.319, M.brass, 24, 5));
  return root;
}
