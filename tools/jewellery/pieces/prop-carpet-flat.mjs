// Flat rug 1.2 × 0.8 m (long axis X) with a woven medallion pattern and linen fringe on the short ends.
import { THREE, M, C, painted, motif, mesh, rng } from './_props-common.mjs';

export function build() {
  const root = new THREE.Group(), R = rng(11);
  const P = painted('CarpetRed', (c, w, h) => {
    const rect = (i, col) => { c.fillStyle = col; c.fillRect(i, i, w - 2 * i, h - 2 * i); };
    rect(0, C.ink); rect(8, C.cream); rect(12, C.deepRed); rect(46, C.cream); rect(49, C.gold); rect(53, C.red);
    // main border: alternating stars and diamonds
    const cell = 34, put = (x, y, i) => { c.fillStyle = i % 2 ? C.gold : C.teal; motif[i % 2 ? 'diamond' : 'star'](c, x - cell / 2, y - cell / 2, cell, cell, { s: i % 2 ? 0.3 : 0.4, k: 8 }); c.fillStyle = C.cream; motif.dots(c, x - cell / 2, y - cell / 2, cell, cell, { s: 0.08 }); };
    const nx = Math.round((w - 58) / cell), ny = Math.round((h - 58) / cell);
    for (let i = 0; i <= nx; i++) { const x = 29 + (i * (w - 58)) / nx; put(x, 29, i); put(x, h - 29, i); }
    for (let j = 1; j < ny; j++) { const y = 29 + (j * (h - 58)) / ny; put(29, y, j); put(w - 29, y, j); }
    // field lattice
    for (let j = 0; j < 9; j++) for (let i = 0; i < 15; i++) { c.fillStyle = (i + j) % 2 ? '#5d1a1b' : '#93382a'; motif.diamond(c, 60 + i * 26.4 + (j % 2 ? 13 : 0) - 4, 62 + j * 24.5, 26, 22, { s: 0.2 }); }
    // corner spandrels
    c.save(); c.beginPath(); c.rect(53, 53, w - 106, h - 106); c.clip();
    for (const [x, y] of [[53, 53], [w - 53, 53], [53, h - 53], [w - 53, h - 53]]) for (const [r, col] of [[50, C.ink], [42, C.cream], [38, C.teal], [22, C.gold], [12, C.deepRed]]) { c.fillStyle = col; c.beginPath(); c.moveTo(x, y); c.arc(x, y, r, 0, 7); c.fill(); }
    c.restore();
    // central medallion
    const cx = w / 2, cy = h / 2;
    const M2 = (rx, ry, col, k = 4) => { c.fillStyle = col; c.beginPath(); for (let i = 0; i < k * 2; i++) { const a = (i / (k * 2)) * Math.PI * 2, q = i % 2 ? 0.72 : 1; const x = cx + Math.cos(a) * rx * q, y = cy + Math.sin(a) * ry * q; i ? c.lineTo(x, y) : c.moveTo(x, y); } c.closePath(); c.fill(); };
    M2(150, 96, C.ink, 8); M2(142, 89, C.cream, 8); M2(136, 84, C.indigo, 8); M2(100, 64, C.gold, 8); M2(92, 58, C.deepRed, 8); M2(60, 40, C.teal, 4); M2(40, 26, C.cream, 4); M2(22, 15, C.red, 4);
    for (const s of [-1, 1]) { c.fillStyle = C.gold; motif.diamond(c, cx + s * 172 - 14, cy - 14, 28, 28, { s: 0.45 }); c.fillStyle = C.ink; motif.diamond(c, cx + s * 172 - 14, cy - 14, 28, 28, { s: 0.22 }); }
    // weave
    c.globalAlpha = 0.07; c.fillStyle = '#000'; for (let y = 0; y < h; y += 3) c.fillRect(0, y, w, 1);
    c.globalAlpha = 1;
  }, { w: 512, h: 340, rough: 0.95 });
  const g = new THREE.PlaneGeometry(1.2, 0.8, 12, 8).rotateX(-Math.PI / 2);
  const p = g.attributes.position;
  for (let i = 0; i < p.count; i++) { const x = p.getX(i), z = p.getZ(i); p.setY(i, 0.004 + 0.0025 * (Math.sin(x * 9 + z * 4) * Math.cos(z * 11 - x * 3) + 1)); }
  g.computeVertexNormals();
  root.add(mesh(g, P));
  const fp = [], fi = [];
  for (const s of [-1, 1]) for (let i = 0; i < 64; i++) {
    const z = -0.395 + (i / 63) * 0.79, dz = (R() - 0.5) * 0.014, l = 0.05 + R() * 0.015, b = fp.length / 3, x0 = s * 0.598, x1 = s * (0.6 + l);
    fp.push(x0, 0.004, z - 0.0035, x0, 0.004, z + 0.0035, x1, 0.001, z + 0.002 + dz, x1, 0.001, z - 0.002 + dz);
    s > 0 ? fi.push(b, b + 1, b + 2, b, b + 2, b + 3) : fi.push(b, b + 2, b + 1, b, b + 3, b + 2);
  }
  const fg = new THREE.BufferGeometry(); fg.setAttribute('position', new THREE.Float32BufferAttribute(fp, 3)); fg.setIndex(fi); fg.computeVertexNormals();
  root.add(mesh(fg, M.linen));
  return root;
}
