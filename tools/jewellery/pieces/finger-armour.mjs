// Kavya Potluri finger armour (reference 5.jpg, the hand). Modelled in millimetres, root scaled to metres.
// Read from the photo (right hand seen from the back):
//  - index: long pointed-oval openwork shield from over the nail to past the second joint — a bundle of
//    whiplash wires down the middle, loops/scrolls to the edge wires, bead cluster at the tip, and the lower
//    end dissolving into bead-tipped tendrils.
//  - middle, ring, little finger: fine vine sprays with small leaves, a few polished teardrop leaves, tiny blossoms,
//    scroll tendrils and small bead accents, running along the top of each finger from just behind the nail.
//  - thumb: a short spray of three polished leaves with berries and bead-tipped tendrils.
// Each piece is laid out flat as (u across, v along the finger, h above the skin) and wrapped on a cylinder.
// Ring bands under the fingers are not visible in the photo -> slim plain bands (assumption).
import { THREE, MAT, wire, leaf, bead, spiral } from '../lib.mjs';

const D = Math.PI / 180;
const rng = (a) => () => { a |= 0; a = (a + 0x6d2b79f5) | 0; let t = Math.imul(a ^ (a >>> 15), 1 | a); t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t; return ((t ^ (t >>> 14)) >>> 0) / 4294967296; };

// A finger: cylinder of radius R along +Y (tip = +Y), top of the finger at z = 0 facing +Z.
function finger(R) {
  const g = new THREE.Group();
  const S = (u, v, h = 0) => new THREE.Vector3((R + h) * Math.sin(u / R), v, (R + h) * Math.cos(u / R) - R);
  const W = (pts, r, o = {}) => { const m = wire(pts.map(([u, v, h]) => S(u, v, h ?? r)), r, { radial: 6, segLen: Math.max(0.5, r * 1.3), ...o }); g.add(m); return m; };
  // put obj on the surface at (u,v), its +Y along surface direction `ang` (0 = toward the tip, + = toward +u), its +Z along the normal
  const place = (obj, u, v, ang = 0, h = 0, tilt = 0) => {
    const n = new THREE.Vector3(Math.sin(u / R), 0, Math.cos(u / R)), tu = new THREE.Vector3(Math.cos(u / R), 0, -Math.sin(u / R));
    const y = new THREE.Vector3(0, Math.cos(ang), 0).addScaledVector(tu, Math.sin(ang));
    obj.quaternion.setFromRotationMatrix(new THREE.Matrix4().makeBasis(new THREE.Vector3().crossVectors(y, n), y, n));
    if (tilt) obj.rotateX(-tilt); // lift the tip off the finger
    obj.position.copy(S(u, v, h));
    g.add(obj);
    return obj;
  };
  const B = (r, u, v, h) => g.add(bead(r, S(u, v, h ?? r), MAT.gold, 8));
  const band = (v, r = 0.6) => { const p = []; for (let i = 0; i < 40; i++) p.push([Math.sin((i / 40) * 2 * Math.PI) * (R - 0.2), v, Math.cos((i / 40) * 2 * Math.PI) * (R - 0.2) - R]); g.add(wire(p, r, { closed: true, radial: 6, segLen: 1.4 })); };
  return { g, S, W, place, B, band, R };
}

const petal = (L, w, o = {}) => leaf({ length: L, width: w, thick: 0.35, segU: 8, segV: 4, shape: 0.62, tip: 0.55, rib: false, cup: 0.35, bend: -0.04, ...o });
function blossom(radius, n = 5) {
  const g = new THREE.Group();
  for (let i = 0; i < n; i++) {
    const p = petal(radius, ((2 * Math.PI * radius) / n) * 0.72), h = new THREE.Group();
    p.rotation.x = 0.4;
    h.add(p);
    h.rotation.z = (i / n) * Math.PI * 2;
    g.add(h);
  }
  g.add(bead(radius * 0.28, [0, 0, radius * 0.22], MAT.gold, 8));
  return g;
}
// plump polished teardrop leaf (no veins — they read as smooth and glossy in the photo)
const drop = (L, w) => leaf({ length: L, width: w * 1.15, thick: 1.0, segU: 12, segV: 6, shape: 1.0, tip: 0.72, rib: false, cup: 0.5, bend: 0.05 });

// ---------- index: the long openwork shield ----------
function indexShield() {
  const F = finger(8.6), { W, B, place } = F;
  const L = 60, v0 = -L / 2, v1 = L / 2, HW = 10.6; // length, half width (arc length on the finger)
  const edge = (v) => HW * Math.pow(Math.sin(Math.PI * Math.min(1, (v1 - v) / (L * 0.86)) * 0.5 + 0.0001), 0.7); // pointed at the tip, full width from the middle down
  for (const s of [-1, 1]) {
    const p = [];
    for (let v = v1; v >= v0 + 14; v -= 3) p.push([s * edge(v) * (v < -6 ? 1 - ((-6 - v) / 40) ** 2 : 1), v]);
    const e = p[p.length - 1];
    W(p.concat(spiral({ center: [e[0] - s * 1.7, e[1] - 0.3, 0], r0: 1.7, r1: 0.5, turns: 1.1, a0: s > 0 ? 0 : Math.PI, dir: -s, n: 14 }).slice(1).map((q) => [q.x, q.y])), 0.58, { taper: [0.8, 1] });
  }
  // central whiplash bundle: three wires that run together, part at the top into scrolls and at the bottom into tendrils
  const mid = (v) => 3.3 * Math.sin(((v + 4) / L) * Math.PI * 2.0);
  // one whiplash vine down the middle, two finer vines weaving over and under it
  { const p = []; for (let v = 27; v >= -13; v -= 2) p.push([mid(v), v, 0.9]); W(p, 0.7, { taper: [0.55, 1] }); }
  for (const s of [-1, 1]) {
    const p = [];
    for (let v = 24; v >= -13; v -= 1.5) {
      const ph = ((24 - v) / 37) * Math.PI * 3.5, env = 0.35 + 0.65 * Math.sin(((24 - v) / 37) * Math.PI);
      p.push([mid(v) + s * 3.4 * env * Math.sin(ph), v, 0.9 + s * 0.55 * Math.cos(ph)]);
    }
    W(p, 0.45, { taper: [0.7, 1] });
  }
  // scroll heads where the bundle opens at the top
  W(spiral({ center: [-4.2, 21.2, 0], r0: 2.6, r1: 0.6, turns: 1.3, a0: -20 * D, dir: 1, n: 22 }).map((q) => [q.x, q.y]), 0.58, { taper: [1, 0.6] });
  B(0.9, -4.2, 21.2);
  W(spiral({ center: [3.4, 24.6, 0], r0: 2.1, r1: 0.5, turns: 1.2, a0: 200 * D, dir: -1, n: 20 }).map((q) => [q.x, q.y]), 0.55, { taper: [1, 0.6] });
  // the large open loop right of the bundle and the smaller one on the left (clearly visible in the photo)
  W(spiral({ center: [4.9, -3.5, 0], r0: 3.6, r1: 3.6, turns: 1, n: 24 }).slice(0, -1).map((q) => [q.x, q.y * 1.15 + 0.5]), 0.62, { closed: true });
  W(spiral({ center: [-5.2, 8.5, 0], r0: 2.7, r1: 2.7, turns: 1, n: 20 }).slice(0, -1).map((q) => [q.x, q.y]), 0.55, { closed: true });
  // C-scrolls tying bundle to edge wires
  for (const [s, v, r] of [[1, 14, 2.8], [1, 5.5, 2.4], [-1, -1, 3.0], [-1, -9, 2.6], [1, -11.5, 2.4], [-1, 15.5, 2.2], [1, 20, 1.8], [-1, 3.5, 1.8], [1, -17, 2.0], [-1, -16.5, 2.2]]) {
    const c = [mid(v) + s * (edge(v) * 0.58 + 0.6), v];
    W(spiral({ center: [c[0], c[1], 0], r0: r, r1: 0.5, turns: 1.25, a0: (s > 0 ? 180 : 0) * D, dir: s, n: 22 }).map((q) => [q.x, q.y]), 0.5, { taper: [1, 0.6] });
  }
  // small blossoms and leaves caught in the vine
  for (const [u, v, r] of [[-5, -5.5, 3.0], [5, 10.5, 2.7], [-1.6, 24.5, 2.4], [5.6, -15, 2.4]]) place(blossom(r), u, v, u, 1.3);
  for (const [u, v, a, l] of [[-6.6, 2, 25, 5.5], [6.4, 17, -20, 5], [-6.2, -14, 160, 5], [6.5, -9.5, 200, 4.6]])
    place(leaf({ length: l, width: l * 0.42, thick: 0.35, segU: 8, segV: 4, ribR: 0.18, cup: 0.4 }), u, v, a * D, 0.7, 0.15);
  // bead cluster on the tip
  for (const [u, v, r, h] of [[0, 29.4, 1.6, 1.6], [-2.3, 27.8, 1.25, 1.2], [2.2, 27.6, 1.3, 1.2], [-0.8, 31.6, 1.2, 1], [1.5, 31, 1.0, 1], [-3.6, 25.4, 1.0, 0.9], [3.5, 25, 0.9, 0.9]]) B(r, u, v, h);
  // lower end: tendrils fanning out of the bundle over the knuckle, each ending in a bead
  for (const [u1, vEnd, bend, r] of [[-10.5, -21, -2.5, 0.5], [-7.2, -27, -1.5, 0.56], [-3.4, -30, 1.2, 0.6], [0.6, -28.5, -1.2, 0.6], [4.2, -30, 1.6, 0.58], [8, -26, 2.4, 0.52], [11, -20, 2.2, 0.46]]) {
    const u0 = mid(-13) + Math.sign(u1) * 0.9, p = [[u0, -12], [u0 + (u1 - u0) * 0.25 + bend * 0.4, -12 + (vEnd + 12) * 0.4], [u0 + (u1 - u0) * 0.7 + bend, -12 + (vEnd + 12) * 0.75], [u1, vEnd]];
    W(p.map(([u, v], i) => [u, v, 0.5 + i * 0.25]), r, { taper: [1, 0.75] });
    B(r * 2.2, u1, vEnd, 1.3);
  }
  for (const [u, v] of [[-7.5, -17], [7, -18.5], [-3.5, -20], [3, -22], [-9, -12], [9.5, -13]]) B(0.85, u, v, 0.85); // granules along the fringe
  F.band(11); F.band(-11);
  return F.g;
}

// ---------- middle / ring / little finger / thumb: leaf-and-berry sprays ----------
function spray(R, L, seed, { leaves, beads = 10, bandAt = 0 }) {
  const F = finger(R), { W, B, place } = F, rnd = rng(seed);
  const stem = (v) => 1.5 * Math.sin((v / L) * Math.PI * 2.3 + seed);
  const p = [], q = [];
  for (let v = L / 2; v >= -L / 2; v -= 2) { p.push([stem(v), v]); q.push([-1.7 * stem(v + 2), v * 0.94, 0.9 + 0.4 * Math.cos(v)]); }
  W(p, 0.5, { taper: [0.6, 1] });
  W(q, 0.3, { taper: [0.7, 1] }); // second, finer vine crossing the first
  // a few polished teardrop leaves (the glossy highlights in the photo)
  for (const [v, side, len, wid, a] of leaves) place(drop(len, wid), stem(v) + side * 1.0, v, (a ?? side * 24) * D, 0.6, 0.1);
  // alternating along the vine: small leaf, scroll tendril with a bead, tiny blossom
  const n = Math.round(L / 3.4);
  for (let i = 0; i < n; i++) {
    const v = L / 2 - 2 - (i + 0.5) * ((L - 3) / n), side = i % 2 ? 1 : -1, u0 = stem(v), kind = i % 3;
    if (kind === 0) {
      const l = 3.6 + rnd() * 1.4;
      place(leaf({ length: l, width: l * 0.42, thick: 0.3, segU: 8, segV: 4, ribR: 0.14, cup: 0.4 }), u0 + side * 0.4, v, side * (35 + rnd() * 30) * D, 0.6, 0.15);
    } else if (kind === 1) {
      const r0 = 1.5 + rnd() * 0.7, c = [u0 + side * (r0 + 0.4), v];
      const sp = spiral({ center: [c[0], c[1], 0], r0, r1: 0.45, turns: 1.2, a0: (side > 0 ? 180 : 0) * D, dir: side, n: 18 });
      W(sp.map((e) => [e.x, e.y]), 0.3, { taper: [1, 0.6] });
      B(0.55, sp[sp.length - 1].x, sp[sp.length - 1].y, 0.6);
    } else {
      const u1 = u0 + side * (2.2 + rnd() * 1.4), v1 = v + 1.2;
      W([[u0, v, 0.5], [(u0 + u1) / 2, v + 1, 0.9], [u1, v1, 1.0]], 0.26, { radial: 5 });
      place(blossom(1.5 + rnd() * 0.4), u1, v1, rnd() * 6, 1.2);
    }
  }
  // small bead accents on fine stalks
  for (let i = 0; i < beads; i++) {
    const v = L / 2 + 1 - ((i + rnd()) / beads) * (L + 1), side = i % 2 ? -1 : 1, u0 = stem(v);
    const u1 = u0 + side * (1.6 + rnd() * R * 0.4), v1 = v + (rnd() - 0.3) * 3, h = 0.7 + rnd() * 1.2, r = 0.5 + rnd() * 0.25;
    W([[u0, v, 0.5], [(u0 + u1) / 2, (v + v1) / 2, h], [u1, v1, h]], 0.22, { radial: 5, caps: false, segLen: 1.4 });
    B(r, u1, v1, h + r * 0.4);
    if (i % 3 === 0) B(r * 0.75, u1 + side * 0.9, v1 + 0.9, h);
  }
  F.band(bandAt);
  return F.g;
}

export function build() {
  const hand = new THREE.Group();
  const put = (g, x, y, rotZ, z = 0, rotY = 0) => { g.position.set(x, y, z); g.rotation.set(0, rotY * D, rotZ * D); hand.add(g); };
  put(indexShield(), -21, 16, 9, 0, 0);
  put(spray(8.4, 44, 3, { leaves: [[17, -1, 8, 3.2], [13, 1, 9, 3.4], [-2, -1, 6.5, 2.8]], bandAt: -6 }), -1, 26, 2);
  put(spray(7.8, 38, 8, { leaves: [[13, 1, 8.5, 3.3], [3, -1, 7, 3]], bandAt: -4 }), 17, 19, -6, -1, 6);
  put(spray(6.8, 32, 14, { leaves: [[10, -1, 7.5, 3], [-3, 1, 6, 2.6]], bandAt: -3 }), 33, 3, -14, -3, 12);
  put(spray(9.6, 26, 21, { leaves: [[6, -1.6, 8, 3.2, -14], [6.5, 0.2, 9, 3.4, 3], [6, 1.8, 7.5, 3.1, 18]], bandAt: -2 }), -42, -30, 42, -2, -14);
  hand.scale.setScalar(0.001);
  hand.position.set(0.008, 0.004, 0.008);
  const root = new THREE.Group();
  root.add(hand);
  return root;
}
