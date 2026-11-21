// Shared materials + helpers for the souk market props (prop-*.mjs).
// Material NAMES are the contract with the game palette.
import { THREE, wire, bead, chain, orient, curve, leaf, flower } from '../lib.mjs';
export { THREE, wire, bead, chain, orient, curve, leaf, flower };

const std = (name, color, metalness, roughness, extra = {}) => new THREE.MeshStandardMaterial({ name, color, metalness, roughness, ...extra });
export const M = {
  brass: std('Brass', '#b98a4a', 0.92, 0.36),
  brassDark: std('BrassDark', '#6e4e2a', 0.85, 0.5),
  copper: std('Copper', '#b5683f', 0.9, 0.4),
  gold: std('Gold', '#e7bd72', 1, 0.24),
  wood: std('Wood', '#8a5f43', 0, 0.8),
  woodDark: std('WoodDark', '#4b3325', 0, 0.8),
  teal: std('CeramicTeal', '#2f6b6a', 0, 0.25),
  cream: std('CeramicCream', '#e8dcc4', 0, 0.3),
  ochre: std('CeramicOchre', '#b5793a', 0, 0.35),
  clay: std('Clay', '#a7623f', 0, 0.95),
  pearl: new THREE.MeshPhysicalMaterial({ name: 'Pearl', color: '#f2ebdf', roughness: 0.22, clearcoat: 1, clearcoatRoughness: 0.08 }),
  lampGlass: std('LampGlass', '#ffe0a8', 0, 0.6, { emissive: '#ffb45c', emissiveIntensity: 2.4, side: THREE.DoubleSide }),
  velvet: std('Velvet', '#183128', 0, 0.95),
  velvetRed: std('VelvetRed', '#3d1218', 0, 0.95),
  linen: std('Linen', '#b3a07f', 0, 0.9),
  mirror: std('Mirror', '#e4e8ea', 1, 0.05),
};
export const C = { teal: '#2f6b6a', cream: '#e8dcc4', ochre: '#b5793a', terra: '#a7623f', ink: '#1d3a40', brass: '#b98a4a', brassDark: '#5a3d1e', red: '#7a2420', deepRed: '#4f1518', indigo: '#22304f', gold: '#c9a04e', wood: '#8a5f43', woodDark: '#4b3325' };

// ---------- canvas textures ----------
export function tex(w, h, draw) {
  const c = document.createElement('canvas');
  c.width = w; c.height = h;
  draw(c.getContext('2d'), w, h);
  const t = new THREE.CanvasTexture(c);
  t.colorSpace = THREE.SRGBColorSpace;
  t.wrapS = t.wrapT = THREE.RepeatWrapping;
  t.anisotropy = 4;
  return t;
}
export const painted = (name, draw, { w = 256, h = 256, rough = 0.3, metal = 0, ...extra } = {}) =>
  new THREE.MeshStandardMaterial({ name, map: tex(w, h, draw), roughness: rough, metalness: metal, ...extra });
// brass sheet with real (alpha-tested) openings
export const pierced = (draw, { w = 256, h = 256, name = 'BrassPierced' } = {}) =>
  painted(name, draw, { w, h, rough: 0.4, metal: 0.92, alphaTest: 0.5, side: THREE.DoubleSide });
export const engraved = (draw, { w = 256, h = 256, name = 'EngravedBrass', rough = 0.38 } = {}) => painted(name, draw, { w, h, rough, metal: 0.92 });

// motifs: (ctx, x, y, cw, bh, band, i) — cell top-left x,y; size cw × bh
const poly = (ctx, pts) => { ctx.beginPath(); pts.forEach(([x, y], i) => (i ? ctx.lineTo(x, y) : ctx.moveTo(x, y))); ctx.closePath(); };
export const motif = {
  zig: (c, x, y, w, h) => { c.beginPath(); c.moveTo(x, y + h * 0.8); c.lineTo(x + w / 2, y + h * 0.2); c.lineTo(x + w, y + h * 0.8); c.stroke(); },
  dots: (c, x, y, w, h, b) => { c.beginPath(); c.arc(x + w / 2, y + h / 2, Math.min(w, h) * (b.s ?? 0.24), 0, 7); c.fill(); },
  ring: (c, x, y, w, h, b) => { c.beginPath(); c.arc(x + w / 2, y + h / 2, Math.min(w, h) * (b.s ?? 0.3), 0, 7); c.stroke(); c.beginPath(); c.arc(x + w / 2, y + h / 2, Math.min(w, h) * 0.09, 0, 7); c.fill(); },
  diamond: (c, x, y, w, h, b) => { const s = b.s ?? 0.42; poly(c, [[x + w / 2, y + h * (0.5 - s)], [x + w * (0.5 + s), y + h / 2], [x + w / 2, y + h * (0.5 + s)], [x + w * (0.5 - s), y + h / 2]]); c.fill(); },
  petal: (c, x, y, w, h) => { c.beginPath(); c.moveTo(x + w * 0.06, y + h); c.quadraticCurveTo(x + w * 0.06, y + h * 0.4, x + w / 2, y + h * 0.06); c.quadraticCurveTo(x + w * 0.94, y + h * 0.4, x + w * 0.94, y + h); c.closePath(); c.fill(); },
  petalDown: (c, x, y, w, h) => { c.beginPath(); c.moveTo(x + w * 0.06, y); c.quadraticCurveTo(x + w * 0.06, y + h * 0.6, x + w / 2, y + h * 0.94); c.quadraticCurveTo(x + w * 0.94, y + h * 0.6, x + w * 0.94, y); c.closePath(); c.fill(); },
  almond: (c, x, y, w, h, b) => { const s = b.s ?? 0.3; c.beginPath(); c.moveTo(x + w / 2, y + h * 0.06); c.quadraticCurveTo(x + w * (0.5 + s), y + h / 2, x + w / 2, y + h * 0.94); c.quadraticCurveTo(x + w * (0.5 - s), y + h / 2, x + w / 2, y + h * 0.06); c.fill(); },
  tear: (c, x, y, w, h) => { c.beginPath(); c.moveTo(x + w / 2, y + h * 0.05); c.bezierCurveTo(x + w * 0.95, y + h * 0.55, x + w * 0.85, y + h * 0.95, x + w / 2, y + h * 0.95); c.bezierCurveTo(x + w * 0.15, y + h * 0.95, x + w * 0.05, y + h * 0.55, x + w / 2, y + h * 0.05); c.fill(); },
  stripe: (c, x, y, w, h, b) => c.fillRect(x + w * (0.5 - (b.s ?? 0.2)), y, w * 2 * (b.s ?? 0.2), h),
  tri: (c, x, y, w, h) => { poly(c, [[x, y + h], [x + w / 2, y], [x + w, y + h]]); c.fill(); },
  triDown: (c, x, y, w, h) => { poly(c, [[x, y], [x + w / 2, y + h], [x + w, y]]); c.fill(); },
  star: (c, x, y, w, h, b) => { const R = Math.min(w, h) * (b.s ?? 0.46), r = R * 0.5, k = b.k ?? 8, p = []; for (let i = 0; i < k * 2; i++) { const a = (i / (k * 2)) * Math.PI * 2, q = i % 2 ? r : R; p.push([x + w / 2 + Math.sin(a) * q, y + h / 2 - Math.cos(a) * q]); } poly(c, p); c.fill(); },
  flower: (c, x, y, w, h, b) => { const R = Math.min(w, h) * (b.s ?? 0.24), k = b.k ?? 4; for (let i = 0; i < k; i++) { const a = (i / k) * Math.PI * 2 + (b.rot ?? 0); c.beginPath(); c.arc(x + w / 2 + Math.cos(a) * R, y + h / 2 + Math.sin(a) * R, R * 0.8, 0, 7); c.fill(); } },
  wave: (c, x, y, w, h) => { c.beginPath(); c.moveTo(x, y + h / 2); c.bezierCurveTo(x + w * 0.25, y - h * 0.1, x + w * 0.25, y - h * 0.1, x + w / 2, y + h / 2); c.bezierCurveTo(x + w * 0.75, y + h * 1.1, x + w * 0.75, y + h * 1.1, x + w, y + h / 2); c.stroke(); },
  scroll: (c, x, y, w, h) => { c.beginPath(); for (let i = 0; i <= 24; i++) { const t = i / 24, a = t * Math.PI * 3.2, r = (1 - t * 0.85) * Math.min(w, h) * 0.42; const px = x + w / 2 + Math.cos(a) * r, py = y + h / 2 + Math.sin(a) * r; i ? c.lineTo(px, py) : c.moveTo(px, py); } c.stroke(); },
  check: (c, x, y, w, h, b, i) => { c.fillRect(x, y + (i % 2 ? h / 2 : 0), w, h / 2); },
  cross: (c, x, y, w, h) => { const s = Math.min(w, h) * 0.36; c.beginPath(); c.moveTo(x + w / 2 - s, y + h / 2 - s); c.lineTo(x + w / 2 + s, y + h / 2 + s); c.moveTo(x + w / 2 + s, y + h / 2 - s); c.lineTo(x + w / 2 - s, y + h / 2 + s); c.stroke(); },
  arch: (c, x, y, w, h) => { c.beginPath(); c.moveTo(x + w * 0.12, y + h); c.lineTo(x + w * 0.12, y + h * 0.45); c.bezierCurveTo(x + w * 0.12, y + h * 0.2, x + w * 0.4, y + h * 0.22, x + w / 2, y + h * 0.04); c.bezierCurveTo(x + w * 0.6, y + h * 0.22, x + w * 0.88, y + h * 0.2, x + w * 0.88, y + h * 0.45); c.lineTo(x + w * 0.88, y + h); c.closePath(); c.fill(); },
};
// Horizontal bands of repeated motifs. from/to are 0..1 measured from the BOTTOM of the texture (= start of a lathe profile).
// band: { from, to, bg, fg, m (motif or array), n, lw, edge, hole (cut real openings), off (half-cell offset), rows }
export function bands(ctx, w, h, base, list) {
  if (base) { ctx.fillStyle = base; ctx.fillRect(0, 0, w, h); }
  for (const b of list) {
    const y1 = (1 - b.to) * h, bh = (b.to - b.from) * h;
    ctx.globalCompositeOperation = 'source-over';
    if (b.bg) { ctx.fillStyle = b.bg; ctx.fillRect(0, y1, w, bh); }
    ctx.globalCompositeOperation = b.hole ? 'destination-out' : 'source-over';
    ctx.fillStyle = ctx.strokeStyle = b.fg || '#000';
    ctx.lineWidth = b.lw || Math.max(1.5, h / 110);
    ctx.lineJoin = ctx.lineCap = 'round';
    const n = b.n || 8, cw = w / n, rows = b.rows || 1, rh = bh / rows;
    for (const m of [].concat(b.m || []))
      for (let r = 0; r < rows; r++)
        for (let i = -1; i <= n; i++) motif[m](ctx, (i + ((b.off ? 0.5 : 0) + (rows > 1 && r % 2 ? 0.5 : 0))) * cw, y1 + r * rh, cw, rh, b, i);
    ctx.globalCompositeOperation = 'source-over';
    if (b.edge) { ctx.fillStyle = b.edge; const e = b.ew || Math.max(2, h / 90); ctx.fillRect(0, y1, w, e); ctx.fillRect(0, y1 + bh - e, w, e); }
  }
}

// ---------- geometry ----------
// Lathe from [[r, y], ...] (bottom → top gives outward faces). n > 0 resamples a smooth spline (uv.v ∝ arc length).
export function lathe(pts, { seg = 24, n = 0, mat = M.brass, flat = false, auto = true } = {}) {
  let p = pts.map(([r, y]) => new THREE.Vector2(r, y));
  if (auto && p[0].y > p[p.length - 1].y) p.reverse();
  if (n) p = new THREE.SplineCurve(p).getSpacedPoints(n);
  p.forEach((q) => (q.x = Math.max(q.x, 0)));
  let g = new THREE.LatheGeometry(p, seg);
  if (flat) { g = g.toNonIndexed(); g.computeVertexNormals(); }
  return new THREE.Mesh(g, mat);
}
export const flatShade = (geo) => { const g = geo.toNonIndexed(); g.computeVertexNormals(); return g; };
export function mesh(geo, mat, pos, rot) {
  const m = new THREE.Mesh(geo, mat);
  if (pos) m.position.set(...pos);
  if (rot) m.rotation.set(...rot);
  return m;
}
export const ring = (R, r, y, mat = M.brass, seg = 20, radial = 5) => mesh(new THREE.TorusGeometry(R, r, radial, seg), mat, [0, y, 0], [Math.PI / 2, 0, 0]);
export function scaleUV(geo, su, sv, ou = 0, ov = 0) {
  const uv = geo.attributes.uv;
  for (let i = 0; i < uv.count; i++) uv.setXY(i, uv.getX(i) * su + ou, uv.getY(i) * sv + ov);
  return geo;
}
// planar UVs from two position axes
export function planarUV(geo, a = 'x', b = 'z', su = 1, sv = 1, ou = 0.5, ov = 0.5) {
  const p = geo.attributes.position, uv = new Float32Array(p.count * 2);
  const get = { x: (i) => p.getX(i), y: (i) => p.getY(i), z: (i) => p.getZ(i) };
  for (let i = 0; i < p.count; i++) { uv[i * 2] = get[a](i) * su + ou; uv[i * 2 + 1] = get[b](i) * sv + ov; }
  geo.setAttribute('uv', new THREE.BufferAttribute(uv, 2));
  return geo;
}
// Hanging hardware: a ring at the origin and n chain links below it. Returns { group, y } (y = bottom of the chain).
export function hanger(n = 3, { R = 0.014, r = 0.0022, link = 0.018, mat = M.brass } = {}) {
  const g = new THREE.Group();
  g.add(mesh(new THREE.TorusGeometry(R, r, 5, 14), mat, [0, -R, 0]));
  let y = -2 * R + r;
  for (let i = 0; i < n; i++) {
    const l = mesh(new THREE.TorusGeometry(link * 0.3, r * 0.7, 4, 8), mat, [0, y - link * 0.42, 0], [0, i % 2 ? 0 : Math.PI / 2, 0]);
    l.scale.y = 1.7;
    g.add(l);
    y -= link * 0.72;
  }
  return { group: g, y: y - link * 0.1 };
}
export function rng(seed = 1) { let s = seed; return () => ((s = (s * 16807) % 2147483647) / 2147483647); }
// Gadroon / scallop a lathe: radius *= 1 + amt*cos(k*theta) wherever sel(r, y) is true (or returns a 0..1 weight).
export function lobes(m, k, amt, sel = () => 1) {
  const p = m.geometry.attributes.position;
  for (let i = 0; i < p.count; i++) {
    const x = p.getX(i), z = p.getZ(i), r = Math.hypot(x, z);
    if (r < 1e-6) continue;
    const f = 1 + amt * Math.cos(k * Math.atan2(x, z)) * +sel(r, p.getY(i));
    p.setX(i, x * f); p.setZ(i, z * f);
  }
  m.geometry.computeVertexNormals();
  return m;
}
export const BR = '#b98a4a', BRL = '#76542a';
// Low-poly pearls strung along a curve (32 tris each).
export function pearls(points, r, { spacing = 2.08, mat = M.pearl } = {}) {
  const c = points.isCurve ? points : curve(points);
  const n = Math.max(2, Math.round(c.getLength() / (r * spacing))), g = new THREE.Group(), geo = new THREE.OctahedronGeometry(r, 1);
  for (let i = 0; i <= n; i++) { const m = new THREE.Mesh(geo, mat); m.position.copy(c.getPointAt(i / n)); m.rotation.set(i, i * 2.1, 0); g.add(m); }
  return g;
}
export const box = (w, h, d, mat, pos) => mesh(new THREE.BoxGeometry(w, h, d), mat, pos);
