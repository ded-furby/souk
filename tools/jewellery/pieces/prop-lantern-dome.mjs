// Domed lantern: onion cap, cylindrical pierced body with star lattice, footed base with drop. Hook at origin.
import { THREE, M, pierced, bands, mesh, hanger, lathe, ring, bead } from './_props-common.mjs';

export function build() {
  const root = new THREE.Group();
  const P = pierced((c, w, h) => bands(c, w, h, '#b98a4a', [
    { from: 0, to: 0.1, bg: '#8f6934', m: 'dots', n: 32, hole: true, s: 0.3 },
    { from: 0.12, to: 0.88, m: 'star', n: 8, rows: 3, hole: true, s: 0.44 },
    { from: 0.12, to: 0.88, m: 'dots', n: 8, rows: 3, off: true, hole: true, s: 0.1 },
    { from: 0.9, to: 1, bg: '#8f6934', m: 'dots', n: 32, hole: true, s: 0.3 },
  ]), { w: 512, h: 192 });
  const { group, y } = hanger(3);
  root.add(group);
  const R = 0.085, top = y - 0.115, H = 0.2, bot = top - H;
  // cap: finial + onion dome
  root.add(lathe([[0.002, y], [0.008, y - 0.006], [0.004, y - 0.014], [0.011, y - 0.024], [0.005, y - 0.034], [0.02, y - 0.046], [0.05, y - 0.06], [0.078, y - 0.082], [0.088, y - 0.1], [0.082, y - 0.115]], { seg: 24, n: 22 }));
  root.add(ring(R + 0.004, 0.005, top), ring(R + 0.004, 0.005, bot), ring(R + 0.001, 0.0025, top - H / 2, M.brassDark));
  root.add(mesh(new THREE.CylinderGeometry(R, R, H, 24, 1, true), P, [0, top - H / 2, 0]));
  root.add(mesh(new THREE.CylinderGeometry(R * 0.9, R * 0.9, H, 16, 1, true), M.lampGlass, [0, top - H / 2, 0]));
  // base: shallow bowl, stem, drop
  root.add(lathe([[0.088, bot], [0.08, bot - 0.012], [0.05, bot - 0.03], [0.018, bot - 0.04], [0.008, bot - 0.05], [0.014, bot - 0.06], [0.005, bot - 0.07], [0.001, bot - 0.085]], { seg: 24, n: 18 }));
  for (let i = 0; i < 8; i++) { const a = (i / 8) * Math.PI * 2; root.add(bead(0.006, [Math.sin(a) * (R + 0.004), top + 0.006, Math.cos(a) * (R + 0.004)], M.brass, 6)); }
  return root;
}
