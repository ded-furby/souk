// Pearl strands draped in nested swags over a small turned wooden T-stand.
import { THREE, M, lathe, mesh, bead, pearls } from './_props-common.mjs';

export function build() {
  const root = new THREE.Group();
  const barY = 0.27, barR = 0.007, r = 0.006;
  root.add(lathe([[0, 0], [0.062, 0], [0.066, 0.006], [0.058, 0.013], [0.03, 0.018], [0.014, 0.03], [0.011, 0.06], [0.016, 0.075], [0.01, 0.09], [0.009, 0.2], [0.014, 0.225], [0.009, 0.24], [0.011, barY]], { seg: 10, mat: M.woodDark }));
  root.add(mesh(new THREE.CylinderGeometry(barR, barR, 0.26, 8), M.woodDark, [0, barY, 0], [0, 0, Math.PI / 2]));
  for (const s of [-1, 1]) root.add(bead(0.012, [s * 0.135, barY, 0], M.brass, 8));
  root.add(bead(0.011, [0, barY + 0.012, 0], M.brass, 8));
  const top = barY + barR + r * 0.8;
  const swags = [[0.105, 0.17, 0.013], [0.082, 0.115, -0.013], [0.056, 0.066, 0.014]];
  for (const [a, d, z] of swags) {
    const pts = [];
    for (let i = 0; i <= 16; i++) { const x = -a + (i / 16) * 2 * a, k = 1 - Math.pow(Math.abs(x / a), 2.4); pts.push([x * (1 + 0.08 * k), top - d * k, z * Math.min(1, k * 4 + 0.15)]); }
    root.add(pearls(pts, r, { spacing: 2.25 }));
  }
  root.add(bead(0.009, [0, top - 0.17 - 0.014, 0.013], M.gold, 8));
  return root;
}
