// Carved wooden jewellery box with brass corners, hinges and clasp.
// Parts: `lid` (pivot on the hinge axis, back top edge; rotation.x < 0 opens) and `ornament` (coiled pearl strand inside).
import { THREE, M, C, painted, bands, box, mesh, bead, pearls } from './_props-common.mjs';
import { spiral as sp } from '../lib.mjs';

export function build(open = 0) {
  const root = new THREE.Group();
  const W = 0.22, D = 0.14, H = 0.07, LH = 0.032, t = 0.008, f = 0.008;
  const carve = '#55371f';
  const Wd = painted('CarvedWood', (c, w, h) => {
    c.fillStyle = C.wood; c.fillRect(0, 0, w, h);
    c.strokeStyle = '#7d5439'; c.lineWidth = 1;
    for (let i = 0; i < 26; i++) { const y = (i + 0.5) * h / 26 + Math.sin(i * 7) * 3; c.beginPath(); c.moveTo(0, y); c.bezierCurveTo(w * 0.3, y + 3, w * 0.6, y - 3, w, y + 1); c.stroke(); }
    c.strokeStyle = carve; c.lineWidth = 3; c.strokeRect(w * 0.05, h * 0.07, w * 0.9, h * 0.86);
    c.lineWidth = 1.5; c.strokeRect(w * 0.075, h * 0.11, w * 0.85, h * 0.78);
    c.save(); c.beginPath(); c.rect(w * 0.09, h * 0.13, w * 0.82, h * 0.74); c.clip();
    bands(c, w, h, null, [
      { from: 0.74, to: 0.84, fg: carve, m: 'zig', n: 18, lw: 2 },
      { from: 0.34, to: 0.66, fg: carve, m: 'star', n: 6, s: 0.4, k: 8 },
      { from: 0.34, to: 0.66, fg: C.wood, m: 'dots', n: 6, s: 0.14 },
      { from: 0.42, to: 0.58, fg: carve, m: 'diamond', n: 6, off: true, s: 0.2 },
      { from: 0.16, to: 0.26, fg: carve, m: 'zig', n: 18, lw: 2 },
    ]);
    c.restore();
  }, { rough: 0.75 });
  // body: walls + floor, velvet lining
  root.add(box(W, H, t, Wd, [0, f + H / 2, D / 2 - t / 2]), box(W, H, t, Wd, [0, f + H / 2, -D / 2 + t / 2]));
  root.add(box(t, H, D - 2 * t, Wd, [W / 2 - t / 2, f + H / 2, 0]), box(t, H, D - 2 * t, Wd, [-W / 2 + t / 2, f + H / 2, 0]));
  root.add(box(W - 2 * t, t, D - 2 * t, Wd, [0, f + t / 2, 0]));
  root.add(box(W - 2 * t, 0.002, D - 2 * t, M.velvetRed, [0, f + t + 0.001, 0]));
  const iw = W - 2 * t, id = D - 2 * t, ih = H - t - 0.004;
  root.add(box(iw, ih, 0.0015, M.velvetRed, [0, f + t + ih / 2, id / 2]), box(iw, ih, 0.0015, M.velvetRed, [0, f + t + ih / 2, -id / 2]));
  root.add(box(0.0015, ih, id, M.velvetRed, [iw / 2, f + t + ih / 2, 0]), box(0.0015, ih, id, M.velvetRed, [-iw / 2, f + t + ih / 2, 0]));
  // corner mounts: two thin plates wrapping each vertical edge (cx/cz = outer corner, y = centre height)
  const corner = (g, sx, sz, cx, y, cz, s = 0.024, p = 0.0024) => g.add(box(s, s, p, M.brass, [cx - sx * s / 2 + sx * p / 2, y, cz]), box(p, s, s, M.brass, [cx, y, cz - sz * s / 2 + sz * p / 2]));
  for (const sx of [-1, 1]) for (const sz of [-1, 1]) {
    corner(root, sx, sz, sx * W / 2, f + 0.011, sz * D / 2);
    root.add(bead(0.008, [sx * (W / 2 - 0.016), 0.007, sz * (D / 2 - 0.016)], M.brass, 8));
  }
  for (const sx of [-1, 1]) root.add(mesh(new THREE.CylinderGeometry(0.004, 0.004, 0.03, 8), M.brass, [sx * 0.06, f + H, -D / 2 - 0.001], [0, 0, Math.PI / 2]));
  root.add(box(0.024, 0.02, 0.003, M.brass, [0, f + H - 0.014, D / 2 + 0.001]), bead(0.004, [0, f + H - 0.016, D / 2 + 0.003], M.brass, 6));
  // lid
  const lid = new THREE.Group();
  lid.name = 'lid'; lid.userData.part = true;
  lid.position.set(0, f + H, -D / 2);
  lid.rotation.x = -open;
  lid.add(box(W, LH, D, Wd, [0, LH / 2, D / 2]));
  lid.add(box(W - 0.036, 0.006, D - 0.036, Wd, [0, LH + 0.003, D / 2]));
  lid.add(box(W - 2 * t - 0.002, 0.002, D - 2 * t - 0.002, M.velvetRed, [0, -0.0008, D / 2]));
  for (const sx of [-1, 1]) for (const sz of [-1, 1]) { corner(lid, sx, sz, sx * W / 2, LH - 0.011, sz > 0 ? D : 0); lid.add(box(0.024, 0.0024, 0.024, M.brass, [sx * (W / 2 - 0.0108), LH, sz > 0 ? D - 0.0108 : 0.0108])); }
  lid.add(box(0.03, 0.022, 0.003, M.brass, [0, 0.012, D + 0.001]));
  root.add(lid);
  // ornament: coiled pearl strand with a small brass clasp
  const orn = new THREE.Group();
  orn.name = 'ornament'; orn.userData.part = true;
  orn.position.set(0.01, f + t + 0.002, 0);
  orn.add(pearls(sp({ center: [0, 0.0042, 0], r0: 0.04, r1: 0.014, turns: 1.9, plane: 'xz', n: 60 }), 0.0045));
  orn.add(bead(0.0045, [0.045, 0.0045, -0.006], M.brass, 8));
  root.add(orn);
  return root;
}
