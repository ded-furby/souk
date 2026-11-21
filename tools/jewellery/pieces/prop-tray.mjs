// Large round engraved brass tray with a scalloped, beaded rim.
import { THREE, M, engraved, bands, lathe, lobes, BR, BRL } from './_props-common.mjs';

export function build() {
  const root = new THREE.Group();
  // polar texture: bottom of canvas = rim, top = centre
  const E = engraved((c, w, h) => bands(c, w, h, BR, [
    { from: 0.02, to: 0.1, fg: BRL, m: 'dots', n: 48, s: 0.3 },
    { from: 0.14, to: 0.19, bg: BRL },
    { from: 0.2, to: 0.36, fg: BRL, m: ['wave', 'dots'], n: 24, s: 0.1 },
    { from: 0.37, to: 0.4, bg: BRL },
    { from: 0.41, to: 0.52, fg: BRL, m: 'zig', n: 32 },
    { from: 0.53, to: 0.55, bg: BRL },
    { from: 0.56, to: 0.8, fg: BRL, m: 'petalDown', n: 16, lw: 2.5 },
    { from: 0.6, to: 0.74, fg: BRL, m: 'almond', n: 16, s: 0.16 },
    { from: 0.81, to: 0.83, bg: BRL },
    { from: 0.84, to: 0.99, fg: BRL, m: 'petalDown', n: 8, lw: 2.5 },
  ]), { w: 512, h: 256 });
  const sel = (r) => THREE.MathUtils.smoothstep(r, 0.215, 0.245);
  const top = lathe([[0.252, 0.017], [0.243, 0.016], [0.228, 0.007], [0.212, 0.004], [0.15, 0.004], [0.08, 0.004], [0, 0.004]], { seg: 64, n: 14, mat: E, auto: false });
  const under = lathe([[0, 0], [0.215, 0], [0.245, 0.011], [0.253, 0.015], [0.252, 0.0172]], { seg: 64 });
  root.add(lobes(top, 16, 0.022, sel), lobes(under, 16, 0.022, sel));
  return root;
}
