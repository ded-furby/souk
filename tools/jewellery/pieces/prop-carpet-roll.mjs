// Rolled carpet lying along X: spiral sheet with a loose flap and fringe, tied with two cords.
import { THREE, M, C, painted, bands, mesh, rng } from './_props-common.mjs';

export function build() {
  const root = new THREE.Group(), R = rng(3);
  const P = painted('CarpetIndigo', (c, w, h) => bands(c, w, h, C.indigo, [
    { from: 0, to: 1, fg: '#2c3c60', m: 'stripe', n: 64, s: 0.2 },
    { from: 0.0, to: 0.04, bg: C.cream }, { from: 0.04, to: 0.16, bg: C.red, fg: C.cream, m: 'diamond', n: 14, s: 0.3 }, { from: 0.16, to: 0.19, bg: C.gold },
    { from: 0.24, to: 0.76, fg: C.red, m: 'star', n: 6, rows: 3, s: 0.4, k: 4 },
    { from: 0.24, to: 0.76, fg: C.gold, m: 'diamond', n: 6, rows: 3, s: 0.16 },
    { from: 0.24, to: 0.76, fg: C.cream, m: 'dots', n: 6, rows: 3, s: 0.05 },
    { from: 0.81, to: 0.84, bg: C.gold }, { from: 0.84, to: 0.96, bg: C.red, fg: C.cream, m: 'diamond', n: 14, s: 0.3 }, { from: 0.96, to: 1, bg: C.cream },
  ]), { w: 256, h: 256, rough: 0.95, side: THREE.DoubleSide });
  const L = 0.8, r0 = 0.02, r1 = 0.1, turns = 3.25, N = 56, flap = 0.13;
  // profile in (z, y): spiral ending at the bottom, then a flap along +z on the ground
  const prof = [];
  for (let i = 0; i <= N; i++) { const t = i / N, a = -Math.PI / 2 - (1 - t) * turns * Math.PI * 2, r = r0 + (r1 - r0) * t; prof.push([Math.cos(a) * r, r1 + Math.sin(a) * r]); }
  for (let i = 1; i <= 5; i++) prof.push([(i / 5) * flap, 0.002 + Math.sin((i / 5) * Math.PI) * 0.004]);
  const len = [0];
  for (let i = 1; i < prof.length; i++) len.push(len[i - 1] + Math.hypot(prof[i][0] - prof[i - 1][0], prof[i][1] - prof[i - 1][1]));
  const total = len[len.length - 1], vis = 2 * Math.PI * r1 + flap; // one texture repeat over the visible outer turn
  const pos = [], uv = [], idx = [];
  prof.forEach(([z, y], i) => { for (const s of [0, 1]) { pos.push((s - 0.5) * L, y, z); uv.push((total - len[i]) / vis, s); } });
  for (let i = 0; i < prof.length - 1; i++) { const a = i * 2; idx.push(a, a + 1, a + 2, a + 1, a + 3, a + 2); }
  const g = new THREE.BufferGeometry();
  g.setAttribute('position', new THREE.Float32BufferAttribute(pos, 3)); g.setAttribute('uv', new THREE.Float32BufferAttribute(uv, 2)); g.setIndex(idx); g.computeVertexNormals();
  root.add(mesh(g, P));
  // rolled ends: dark discs with the weave edge
  const End = painted('CarpetEnd', (c, w, h) => { c.fillStyle = '#3a211c'; c.fillRect(0, 0, w, h); c.strokeStyle = '#6d5238'; c.lineWidth = 2.5; c.beginPath(); for (let i = 0; i <= 200; i++) { const t = i / 200, a = t * turns * Math.PI * 2, r = (0.1 + 0.4 * t) * w; const x = w / 2 + Math.cos(a) * r, y = h / 2 + Math.sin(a) * r; i ? c.lineTo(x, y) : c.moveTo(x, y); } c.stroke(); }, { w: 128, h: 128, rough: 0.95 });
  for (const s of [-1, 1]) root.add(mesh(new THREE.CircleGeometry(r1 * 0.99, 20), End, [s * (L / 2 - 0.006), r1, 0], [0, s * Math.PI / 2, 0]));
  // ties
  for (const s of [-1, 1]) {
    root.add(mesh(new THREE.TorusGeometry(r1 + 0.002, 0.004, 5, 20), M.linen, [s * 0.24, r1, 0], [0, Math.PI / 2, 0]));
    root.add(mesh(new THREE.SphereGeometry(0.009, 6, 4), M.linen, [s * 0.24, r1 + 0.07, 0.074]));
  }
  // fringe on the flap edge
  const fp = [], fi = [];
  for (let i = 0; i < 50; i++) {
    const x = -L / 2 + 0.008 + (i / 49) * (L - 0.016), dx = (R() - 0.5) * 0.012, l = 0.035 + R() * 0.012, b = fp.length / 3;
    fp.push(x - 0.003, 0.003, flap - 0.002, x + 0.003, 0.003, flap - 0.002, x + 0.002 + dx, 0.001, flap + l, x - 0.002 + dx, 0.001, flap + l);
    fi.push(b, b + 3, b + 1, b + 1, b + 3, b + 2);
  }
  const fg = new THREE.BufferGeometry(); fg.setAttribute('position', new THREE.Float32BufferAttribute(fp, 3)); fg.setIndex(fi); fg.computeVertexNormals();
  root.add(mesh(fg, M.linen));
  return root;
}
