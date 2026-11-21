// Antique oil lamp: low boat body, long spout (+X), loop handle (−X), small finial lid.
import { THREE, M, lathe, ring, wire, bead, engraved, bands } from './_props-common.mjs';

export function build() {
  const root = new THREE.Group();
  const dk = '#6e4e2a', ln = '#2e1f10';
  const E = engraved((c, w, h) => bands(c, w, h, dk, [
    { from: 0.3, to: 0.45, fg: ln, m: 'petalDown', n: 14, lw: 2 },
    { from: 0.5, to: 0.62, fg: '#a57c42', m: 'dots', n: 20, s: 0.16, edge: ln },
    { from: 0.66, to: 0.86, fg: ln, m: 'petal', n: 14, lw: 2 },
  ]), { name: 'EngravedBrassDark', w: 256, h: 128, rough: 0.5 });
  const body = lathe([[0.034, 0], [0.036, 0.004], [0.022, 0.014], [0.02, 0.024], [0.048, 0.036], [0.06, 0.056], [0.046, 0.076], [0.022, 0.084]], { seg: 20, n: 20, mat: E });
  body.scale.x = 1.25;
  root.add(body);
  root.add(lathe([[0.024, 0.083], [0.02, 0.09], [0.007, 0.095], [0.011, 0.104], [0.004, 0.112], [0, 0.122]], { seg: 12, n: 12, mat: M.brass }));
  root.add(ring(0.024, 0.003, 0.084, M.brass, 16, 5), ring(0.022, 0.003, 0.02, M.brass, 16, 5));
  const spout = wire([[0.045, 0.052, 0], [0.095, 0.054, 0], [0.135, 0.068, 0], [0.168, 0.09, 0]], 0.023, { taper: [1, 0.36], radial: 8, segLen: 0.012, caps: false, mat: M.brassDark });
  root.add(spout);
  const lip = ring(0.0085, 0.0025, 0, M.brass, 10, 5); // collar round the wick hole
  lip.position.set(0.169, 0.091, 0); lip.rotation.set(0, Math.PI / 2, -0.6, 'YZX');
  root.add(lip);
  root.add(bead(0.0075, [0.166, 0.089, 0], M.brassDark, 8));
  root.add(wire([[-0.062, 0.07, 0], [-0.098, 0.096, 0], [-0.124, 0.074, 0], [-0.108, 0.04, 0], [-0.07, 0.042, 0]], 0.0055, { radial: 6, segLen: 0.01, mat: M.brass }));
  root.add(wire([[-0.098, 0.096, 0], [-0.106, 0.112, 0], [-0.096, 0.12, 0], [-0.088, 0.112, 0]], 0.004, { taper: [1, 0.6], radial: 5, segLen: 0.008, mat: M.brass }));
  return root;
}
