// Small pierced ball lantern for clusters. Hook at origin.
import { THREE, M, pierced, bands, mesh, hanger, lathe, bead, ring } from './_props-common.mjs';

export function build() {
  const root = new THREE.Group();
  const P = pierced((c, w, h) => bands(c, w, h, '#b98a4a', [
    { from: 0.1, to: 0.24, m: 'dots', n: 16, hole: true, s: 0.3 },
    { from: 0.27, to: 0.47, m: 'flower', n: 8, hole: true, s: 0.2 },
    { from: 0.47, to: 0.53, bg: '#8f6934' },
    { from: 0.53, to: 0.73, m: 'flower', n: 8, off: true, hole: true, s: 0.2 },
    { from: 0.76, to: 0.9, m: 'dots', n: 16, hole: true, s: 0.3 },
  ]), { w: 256, h: 128 });
  const { group, y } = hanger(3, { R: 0.011, link: 0.015 });
  root.add(group);
  const r = 0.062, cy = y - 0.03 - r;
  root.add(lathe([[0.002, y], [0.008, y - 0.006], [0.004, y - 0.014], [0.02, y - 0.026], [0.03, y - 0.036]], { seg: 12, n: 10 }));
  root.add(mesh(new THREE.SphereGeometry(r, 16, 10), P, [0, cy, 0]));
  root.add(mesh(new THREE.SphereGeometry(r * 0.9, 12, 8), M.lampGlass, [0, cy, 0]));
  root.add(ring(r + 0.001, 0.003, cy, M.brass, 16, 5));
  root.add(lathe([[0.02, cy - r + 0.004], [0.012, cy - r - 0.006], [0.004, cy - r - 0.014], [0.009, cy - r - 0.024], [0.001, cy - r - 0.04]], { seg: 10, n: 12 }));
  return root;
}
