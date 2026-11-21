// Kavya Potluri floral crown / halo (ref 1.jpg). Designed in mm in the frontal plane, +Z toward the viewer.
// Origin of the design = centre of the head arc. Layers: support arc (back) -> halo sprays -> roses (front).
// The open centre is where the mask's forehead dome sits when both are worn.
import { THREE, wire, mirrorX } from '../lib.mjs';
import { rng, lowBead, place, rose, bloom, veinLeaf } from './_kp-util.mjs';

const mm = 0.001, D = Math.PI / 180, ZB = -12; // ZB: depth of the support arc
const band = (deg) => [80 * Math.cos(deg * D), 85 * Math.sin(deg * D)];
const v3 = (x, y, z = 0) => new THREE.Vector3(x * mm, y * mm, z * mm);
const Z = new THREE.Vector3(0, 0, 1);
// distance from `base` along `deg` to the outer envelope of the halo (ellipse 124 x 133 mm)
function reach(base, deg) {
  const dx = Math.cos(deg * D) / 124, dy = Math.sin(deg * D) / 133, px = base[0] / 124, py = base[1] / 133;
  const a = dx * dx + dy * dy, b = 2 * (px * dx + py * dy), c = px * px + py * py - 1;
  return (-b + Math.sqrt(Math.max(0, b * b - 4 * a * c))) / (2 * a);
}
export function build() {
  const root = new THREE.Group(), half = new THREE.Group(), R = rng(11);

  // straight sprig from `base` along `deg`, ending in a tiny flower (or bead); optionally strung with beads
  function sprig(g, base, deg, len, { beaded = false, tip = 'floret', zTip = 0, bow = 0, zBase = ZB } = {}) {
    const d = [Math.cos(deg * D), Math.sin(deg * D)], nrm = [-d[1], d[0]];
    const a = v3(base[0], base[1], zBase), e = v3(base[0] + d[0] * len, base[1] + d[1] * len, zTip);
    const m = a.clone().lerp(e, 0.5).add(v3(nrm[0] * bow * len, nrm[1] * bow * len, 0));
    const c = new THREE.CatmullRomCurve3([a, m, e]);
    g.add(wire([a, m, e], 0.00045, { radial: 4, segLen: 0.008, caps: false }));
    if (beaded) { const n = Math.round((len * 0.72) / 3.8); for (let i = 0; i <= n; i++) g.add(lowBead(0.00095, c.getPointAt(0.24 + (0.7 * i) / n))); }
    const dir = c.getTangentAt(1);
    if (tip === 'floret') { const f = bloom(0.0034, 5, R() * 6, 0.35, 3); f.position.copy(e).addScaledVector(Z, 0.0006); f.rotation.set(-dir.y * 0.5, dir.x * 0.5, 0); g.add(f); }
    else g.add(lowBead(0.0016, e, 7));
  }
  const vleaf = (g, at, deg, len, z) => g.add(place(veinLeaf(len * mm, len * 0.27 * mm), v3(at[0], at[1], z), new THREE.Vector3(Math.cos(deg * D), Math.sin(deg * D), -0.12), Z));
  const roseAt = (g, x, y, r, z, spin = 0, tx = 0, ty = 0) => { const f = rose(r * mm, spin); f.position.copy(v3(x, y, z)); f.rotation.set(tx, ty, 0); g.add(f); };
  const onRay = (deg, k) => { const b = band(deg), o = reach(b, deg) * k; return [b[0] + Math.cos(deg * D) * o, b[1] + Math.sin(deg * D) * o]; };

  // ---- (c) outer halo: tall radiating sprays in two depth layers, veined leaves, blossoms on stems ----
  for (let i = 0; i < 22; i++) {
    const deg = 24 + i * 2.95 + (R() - 0.5) * 1.5, b = band(deg), dir = deg + (R() - 0.5) * 8, back = i % 2 === 0;
    sprig(half, b, dir, reach(b, dir) * [1, 0.66, 0.92, 0.55, 0.98, 0.78][i % 6], { beaded: i % 3 !== 1, zTip: back ? -14 - R() * 30 : -4 + R() * 12, bow: (R() - 0.5) * 0.08 });
  }
  for (const [deg, len, k, z] of [[26, 30, 0.22, -16], [40, 32, 0.34, -10], [54, 34, 0.24, -18], [68, 32, 0.36, -10], [81, 34, 0.26, -16]]) vleaf(half, onRay(deg, k), deg + (R() - 0.5) * 10, len, z);
  for (const [deg, k, r] of [[83, 0.88, 6.5], [71, 0.68, 6], [58, 0.78, 6], [46, 0.62, 5.5], [35, 0.75, 5.5]]) {
    const b = band(deg), p = onRay(deg, k);
    half.add(wire([v3(b[0], b[1], ZB), v3((b[0] + p[0]) / 2 + 2, (b[1] + p[1]) / 2, -6), v3(p[0], p[1], -2)], 0.0005, { radial: 4, segLen: 0.008 }));
    const f = bloom(r * mm, 5, deg, 0.5); f.position.copy(v3(p[0], p[1], -1)); half.add(f);
  }
  // starburst fans of beaded rods at the sides
  for (const [hub, d0, d1, n] of [[band(28), -6, 60, 11], [band(6), -30, 32, 13]])
    for (let i = 0; i < n; i++) {
      const deg = d0 + ((d1 - d0) * i) / (n - 1);
      sprig(half, hub, deg, reach(hub, deg) * [1, 0.7, 0.92, 0.8][i % 4], { beaded: i % 3 !== 1, tip: i % 4 === 3 ? 'bead' : 'floret', zTip: -30 + R() * 34 });
    }
  // ogee arch wires framing the peak
  half.add(wire([v3(31, 78, ZB), v3(38, 104, -8), v3(27, 128, -6), v3(6, 143, -8)], 0.0006, { radial: 5, segLen: 0.005 }));
  half.add(wire([v3(52, 66, ZB), v3(61, 92, -9), v3(54, 112, -8), v3(40, 124, -8)], 0.0005, { radial: 5, segLen: 0.005 }));

  // ---- (b) roses: shoulders stepping down diagonally from the peak ----
  for (const [x, y, r, z] of [[41, 67, 13.5, 9], [62, 55, 13, 6], [93, 50, 12.5, 0], [88, 34, 11, -2], [108, 4, 11, -6]]) {
    const a = Math.atan2(y, x);
    roseAt(half, x, y, r, z, a, -Math.sin(a) * 0.25, Math.cos(a) * 0.35);
    const b = band(Math.atan2(y / 85, x / 80) / D);
    half.add(wire([v3(b[0], b[1], ZB), v3(x, y, z - 2)], 0.0007, { radial: 4, caps: false }));
  }
  root.add(half, mirrorX(half));

  // ---- peak: large roses clustered high at the top-centre ----
  roseAt(root, 0, 85, 15, 13, 0.3, -0.2);
  roseAt(root, 0, 109, 13.5, 7, 1.1, -0.35);
  roseAt(root, -14, 71, 11.5, 16, 0.7, 0.1, -0.25);
  roseAt(root, 16, 70, 11.5, 16, 0.2, 0.1, 0.25);
  root.add(wire([v3(0, 85, ZB), v3(0, 109, 4)], 0.0008, { radial: 4, caps: false }));
  for (const [deg, k, bd] of [[90, 1, true], [81, 0.8, false], [99, 0.8, false], [73, 0.92, true], [107, 0.92, true]]) sprig(root, [0, 118], deg, reach([0, 118], deg) * k, { beaded: bd, zTip: -14, zBase: 0 });
  // ---- structure: slim polished support arc over the head ----
  root.add(wire(Array.from({ length: 41 }, (_, i) => { const b = band(-12 + (204 * i) / 40); return v3(b[0], b[1], ZB); }), 0.0011, { radial: 6, segLen: 0.006 }));

  root.position.set(0, -0.06, 0.012); // centre the piece near the origin
  return root;
}
