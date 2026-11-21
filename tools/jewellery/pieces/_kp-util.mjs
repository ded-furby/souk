// Shared low-poly helpers for filigree-mask and floral-crown.
import { THREE, MAT, leaf, wire } from '../lib.mjs';

export function rng(seed) {
  return () => {
    seed = (seed + 0x6d2b79f5) | 0;
    let t = Math.imul(seed ^ (seed >>> 15), 1 | seed);
    t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}
const beadGeo = new Map();
export function lowBead(r, at, seg = 5) {
  if (!beadGeo.has(seg)) beadGeo.set(seg, new THREE.SphereGeometry(1, seg, seg > 6 ? 5 : seg < 5 ? 2 : 3));
  const m = new THREE.Mesh(beadGeo.get(seg), MAT.gold);
  m.scale.setScalar(r);
  m.position.copy(at);
  return m;
}
// Place obj so its +Y points along dir and its +Z (face) is as close to `normal` as possible.
export function place(obj, at, dir, normal) {
  const y = dir.clone().normalize();
  const z = normal.clone().addScaledVector(y, -normal.dot(y)).normalize();
  const x = new THREE.Vector3().crossVectors(y, z);
  obj.quaternion.setFromRotationMatrix(new THREE.Matrix4().makeBasis(x, y, z));
  obj.position.copy(at);
  return obj;
}
// 2D curl: heading turns by `turn` radians over `len`, tightening toward the end. Returns points after P.
export function clothoid(P, ang, len, turn, n = 12) {
  const pts = [];
  let [x, y] = P;
  for (let i = 1; i <= n; i++) {
    const s = (i - 0.5) / n, a = ang + turn * s * s, d = (len / n) * (1 - 0.45 * s);
    x += Math.cos(a) * d; y += Math.sin(a) * d;
    pts.push([x, y]);
  }
  return pts;
}
function ring(g, n, len, width, tilt, z, spin, o, J) {
  for (let i = 0; i < n; i++) {
    const j = J ? [J() - 0.5, J() - 0.5, J() - 0.5] : [0, 0, 0];
    const p = leaf({ length: len * (1 + j[0] * 0.25), twist: j[1] * 0.7, width, shape: 1.3, tip: 0.45, rib: false, segU: 5, segV: 4, thick: 0.0004, ...o });
    p.rotation.x = tilt + j[2] * 0.35;
    const h = new THREE.Group();
    h.add(p);
    h.rotation.z = spin + ((i + j[1] * 0.3) / n) * Math.PI * 2;
    h.position.z = z;
    g.add(h);
  }
}
// Sheet-metal rose facing +Z: three rings of broad cupped petals around a small bead cluster.
export function rose(R, spin = 0) {
  const g = new THREE.Group();
  const J = rng(Math.round(spin * 1000 + R * 1e5));
  ring(g, 5, R, R * 1.0, 0.6, 0, spin, { cup: -0.75, bend: -0.34, segU: 6, notch: 0.14 }, J);
  ring(g, 5, R * 0.75, R * 0.8, 1.0, R * 0.05, spin + 0.63, { cup: -0.8, bend: -0.18, segU: 6, notch: 0.1 }, J);
  ring(g, 3, R * 0.5, R * 0.6, 1.3, R * 0.08, spin + 0.3, { cup: -0.8, bend: 0, segU: 4, segV: 2 }, J);
  g.add(lowBead(R * 0.13, new THREE.Vector3(0, 0, R * 0.2), 6));
  for (let i = 0; i < 5; i++) { const a = i * 1.257; g.add(lowBead(R * 0.07, new THREE.Vector3(Math.cos(a) * R * 0.15, Math.sin(a) * R * 0.15, R * 0.22))); }
  return g;
}
// Small open blossom facing +Z.
export function bloom(R, n = 5, spin = 0, tilt = 0.45, segU = 5) {
  const g = new THREE.Group();
  ring(g, n, R, ((2 * Math.PI * R) / n) * 0.66, tilt, 0, spin, { cup: -0.4, bend: -0.15, segU, segV: 2, thick: 0.0003 });
  g.add(lowBead(R * 0.24, new THREE.Vector3(0, 0, R * 0.2), 6));
  return g;
}
// Long lanceolate leaf with a midrib and straight engraved-look side veins (cheap version of lib leaf's veins).
export function veinLeaf(length, width, veins = 5) {
  const g = new THREE.Group(), o = { length, width, shape: 0.9, tip: 1.3, cup: 0.25, bend: 0.05 };
  g.add(leaf({ ...o, rib: false, segU: 10, segV: 4, thick: 0.0005 }));
  const W = (u) => (width / 2) * Math.pow(Math.sin(Math.PI * Math.pow(u, o.shape)), o.tip);
  const P = (u, v) => new THREE.Vector3(W(u) * v, u * length, -o.cup * width * 0.5 * v * v * Math.sin(Math.PI * Math.min(1, u * 1.1)) + o.bend * length * u * u + 0.0005);
  g.add(wire([0.02, 0.3, 0.6, 0.95].map((u) => P(u, 0)), width * 0.045, { taper: [1, 0.4], radial: 4, segLen: length / 8 }));
  for (let k = 1; k <= veins; k++) for (const sd of [-1, 1]) { const u = 0.08 + (k / (veins + 1)) * 0.74; g.add(wire([P(u, 0), P(Math.min(0.97, u + 0.13), sd * 0.9)], width * 0.022, { radial: 3, caps: false, segLen: 1 })); }
  return g;
}

// Height-field helpers: design in 2D units (S metres each), lift onto z = surf(x, y) (metres).
export function surfaceKit(surf, S) {
  const normalAt = ([px, py]) => { const x = px * S, y = py * S, e = 1e-4; return new THREE.Vector3(-(surf(x + e, y) - surf(x - e, y)) / (2 * e), -(surf(x, y + e) - surf(x, y - e)) / (2 * e), 1).normalize(); };
  const lift = (p, off = 0.0005) => new THREE.Vector3(p[0] * S, p[1] * S, surf(p[0] * S, p[1] * S)).addScaledVector(normalAt(p), off);
  return { lift, normalAt };
}
// Vine filigree on a lifted surface: main wires with end curls, curled side tendrils with leaf / bead / plaque
// terminals, granulation rows between wires and small fill attached along the wires. `unit` scales design lengths.
export function makeFiligree({ lift, normalAt, blocked = () => false, group, R, unit = 1 }) {
  const budGeo = leaf({ length: 0.0054, width: 0.003, shape: 0.8, tip: 1.1, cup: -0.3, bend: 0.1, rib: false, segU: 4, segV: 2, thick: 0.0004 }).geometry;
  const tinyGeo = leaf({ length: 0.0036, width: 0.002, shape: 0.8, tip: 1.1, cup: -0.3, bend: 0.1, rib: false, segU: 3, segV: 2, thick: 0.0003 }).geometry;
  const sqGeo = new THREE.BoxGeometry(0.0022, 0.0022, 0.0006), tracks = [];
  const path2 = (ctrl, n) => new THREE.CatmullRomCurve3(ctrl.map(([x, y]) => new THREE.Vector3(x, y, 0))).getSpacedPoints(n).map((v) => [v.x, v.y]);
  function terminal(pts, term) {
    const a = lift(pts.at(-1)), b = lift(pts.at(-2)), n = normalAt(pts.at(-1)), dir = a.clone().sub(b);
    if (term === 'bead') group.add(lowBead(0.00095, a.addScaledVector(n, 0.0004), 6));
    else group.add(place(new THREE.Mesh(term === 'square' ? sqGeo : budGeo, MAT.gold), a.addScaledVector(n, 0.0003), dir, n));
  }
  function tendril(P, ang, len, turn, term) {
    const pts = [P, ...clothoid(P, ang, len, turn, 10)];
    if (blocked(pts)) return false;
    group.add(wire(pts.map((p) => lift(p)), 0.00034, { taper: [1, 0.7], radial: 4, segLen: 0.0012, caps: false }));
    terminal(pts, term);
    tracks.push(pts.slice(2));
    return true;
  }
  function vine(ctrl, { r = 0.0005, curl = 4.5, curlLen = 18, branches = 8, from = 0.42, term = 'leaf' } = {}) {
    const pts = path2(ctrl, 40);
    group.add(wire(pts.map((p) => lift(p)), r, { taper: [1, 0.65], radial: 4, segLen: 0.0025 }));
    tracks.push(pts.slice(Math.round(from * 40)));
    const e = pts.at(-1), q = pts.at(-2), ang = Math.atan2(e[1] - q[1], e[0] - q[0]);
    if (curl) {
      const c = [e, ...clothoid(e, ang, curlLen * unit, curl, 12)];
      group.add(wire(c.map((p) => lift(p)), r * 0.65, { taper: [1, 0.7], radial: 4, segLen: 0.0009, caps: false }));
      terminal(c, term);
    }
    for (let k = 0; k < branches; k++) {
      const i = Math.round((from + ((k + 0.3 * R()) / branches) * (0.97 - from)) * 40), P = pts[i];
      const a = Math.atan2(pts[i + 1][1] - pts[i - 1][1], pts[i + 1][0] - pts[i - 1][0]);
      const side = (k % 2 ? 1 : -1) * Math.sign(curl || 1), len = (20 + R() * 14) * unit, turn = 2.3 + R() * 1.2;
      const t = ['leaf', 'leaf', 'bead', 'leaf', 'leaf', 'bead', 'leaf', 'square'][Math.floor(R() * 8)];
      tendril(P, a + side * 0.55, len, side * turn, t) || tendril(P, a - side * 0.55, len, -side * turn, t);
    }
    return pts;
  }
  function beads(A, B, t0 = 0.3, t1 = 0.95, r = 0.0007) {
    const mid = [];
    for (let i = Math.round(t0 * 40); i <= Math.round(t1 * 40); i++) mid.push(lift([(A[i][0] + B[i][0]) / 2, (A[i][1] + B[i][1]) / 2], 0.0006));
    const c = new THREE.CatmullRomCurve3(mid), n = Math.round(c.getLength() / 0.0021);
    for (let i = 0; i <= n; i++) group.add(lowBead(r, c.getPointAt(i / n), 4));
  }
  // small granulation beads, tiny leaves, flat florets and plaques sitting on / sprouting from the wires
  function fill(n) {
    const all = tracks.flatMap((t) => t.slice(1, -1).map((p, i) => [t[i], p, t[i + 2]]));
    for (let k = 0; k < n; k++) {
      const [a, P, b] = all[Math.floor(R() * all.length)], ang = Math.atan2(b[1] - a[1], b[0] - a[0]), sd = R() < 0.5 ? -1 : 1, u = R();
      const off = (d, aa) => [P[0] + Math.cos(aa) * d * unit, P[1] + Math.sin(aa) * d * unit], nrm = normalAt(P);
      if (u < 0.45) { const q = off(1.9, ang + sd * 1.57); if (!blocked([q])) group.add(lowBead(0.00062 + R() * 0.0003, lift(q, 0.0006), 4)); }
      else if (u < 0.8) { const q = off(4, ang + sd * (0.7 + R() * 0.8)); if (!blocked([q])) group.add(place(new THREE.Mesh(tinyGeo, MAT.gold), lift(P, 0.0006), lift(q).sub(lift(P)), nrm)); }
      else if (u < 0.93) { const q = off(3, ang + sd * 1.57); if (!blocked([q], 6)) group.add(place(bloom(0.0022 + R() * 0.0006, 5, R() * 6, 0.18, 3), lift(q, 0.0011), new THREE.Vector3(0, 1, 0), nrm)); }
      else group.add(place(new THREE.Mesh(sqGeo, MAT.gold), lift(P, 0.0009), new THREE.Vector3(Math.cos(ang + 0.78), Math.sin(ang + 0.78), 0), nrm));
    }
  }
  return { vine, tendril, beads, fill };
}
