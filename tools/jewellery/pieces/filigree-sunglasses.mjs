// Kavya Potluri filigree sunglasses (reference 3.jpg). Modelled in millimetres, root scaled to metres.
// Structure read from the photo: round dark lenses in plain polished gold bezels; a wreath of small leaves,
// buds and blossoms laid over the top and outer side of each rim, thickening into the end-piece; a beaded
// (granulated) round medallion low at the bridge with a fan of bead-tipped wires and a bead rosette above it,
// C-scrolls hugging the inner rims. Temples are NOT visible in the photo -> plain slim wires (assumption).
import { THREE, MAT, wire, leaf, bead, gem, spiral, mirrorX, orient } from '../lib.mjs';

const D = Math.PI / 180;
const rng = (a) => () => { a |= 0; a = (a + 0x6d2b79f5) | 0; let t = Math.imul(a ^ (a >>> 15), 1 | a); t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t; return ((t ^ (t >>> 14)) >>> 0) / 4294967296; };
const v3 = (x, y, z = 0) => new THREE.Vector3(x, y, z);

const CX = 35, RL = 20.6, RO = 23; // lens centre x, lens radius, rim outer radius

// leaf with a cheap midrib (lib's rib is too dense for 5 mm leaves)
const sw = (pts, r, o = {}) => wire(pts, r, { radial: 5, caps: false, segLen: 1.2, ...o }); // short stalk / tendril
function lf(length, width, o = {}) {
  const m = leaf({ length, width, thick: 0.3, segU: 8, segV: 4, cup: 0.4, bend: 0.1, ...o, rib: false });
  if (o.rib === false) return m;
  const g = new THREE.Group(), z = (u) => 0.1 * length * u * u + 0.2;
  g.add(m, wire([0.03, 0.3, 0.6, 0.9].map((u) => [0, u * length, z(u)]), width * 0.07, { radial: 5, caps: false, segLen: length / 5, taper: [1, 0.4] }));
  return g;
}
function blossom(radius, center = 'bead', petals = 5) {
  const g = new THREE.Group(), w = ((2 * Math.PI * radius) / petals) * 0.72;
  for (let i = 0; i < petals; i++) {
    const p = lf(radius, w, { shape: 0.62, tip: 0.55, rib: false, cup: 0.35, bend: -0.04, segU: 8 });
    p.rotation.x = 0.4;
    const h = new THREE.Group();
    h.add(p);
    h.rotation.z = (i / petals) * Math.PI * 2;
    g.add(h);
  }
  g.add(center === 'crystal' ? gem(radius * 0.36, [0, 0, radius * 0.22]) : bead(radius * 0.26, [0, 0, radius * 0.2], MAT.gold, 8));
  if (center === 'crystal') g.add(wire(spiral({ r0: radius * 0.4, r1: radius * 0.4, turns: 1, n: 16, center: [0, 0, radius * 0.12] }), radius * 0.08, { radial: 5, caps: false }));
  return g;
}

function half() {
  const g = new THREE.Group(), R = rng(11);
  const pol = (a, r, z = 0) => v3(CX + r * Math.cos(a * D), r * Math.sin(a * D), z);

  // --- bezel (lathe) + lens
  const prof = [[RL, -1.7], [RO - 0.4, -1.7], [RO, -1.0], [RO, 1.0], [RO - 0.5, 1.8], [RL + 1.0, 2.0], [RL + 0.5, 1.5], [RL, 0.9], [RL, -1.7]].map(([r, y]) => new THREE.Vector2(r, y));
  const rim = new THREE.Mesh(new THREE.LatheGeometry(prof.reverse(), 72).rotateX(Math.PI / 2), MAT.gold);
  rim.position.x = CX;
  g.add(rim);
  const lens = new THREE.Mesh(new THREE.SphereGeometry(60, 40, 6, 0, Math.PI * 2, 0, Math.asin((RL + 0.2) / 60)).rotateX(Math.PI / 2).translate(0, 0, -60 + 0.9 + (60 - Math.sqrt(3600 - (RL + 0.2) ** 2))), MAT.lens);
  lens.material.side = THREE.DoubleSide;
  lens.position.x = CX;
  g.add(lens);

  // --- wreath over the top + outer side of the rim (a: 158° at the bridge side, over the top, down to -58°)
  const A0 = 158, A1 = -58, W = RO + 1.4; // W = vine radius
  const big = (a) => Math.exp(-(((a - 4) / 34) ** 2)); // 1 at the end-piece, 0 elsewhere
  const arc = (f, step = 6) => { const p = []; for (let a = A0; a >= A1; a -= step) p.push(f(a)); return p; };
  g.add(wire(arc((a) => pol(a, W + 0.6 * Math.sin(a * D * 7), 1.7)), 0.5, { radial: 6, segLen: 1.6 }));
  g.add(wire(arc((a) => pol(a, W + 1.5 + (0.9 + 1.6 * big(a)) * Math.sin(a * D * 9 + 1), 1.3)), 0.32, { radial: 5, segLen: 1.2 }));
  let i = 0;
  for (let a = A0 - 5; a > A1 + 2; a -= 6, i++) {
    const b = big(a), tang = v3(Math.sin(a * D), -Math.cos(a * D)), out = v3(Math.cos(a * D), Math.sin(a * D));
    const outward = i % 2 === 0, swing = (15 + R() * 25) * D;
    const dir = tang.clone().multiplyScalar(Math.cos(swing)).addScaledVector(out, Math.sin(swing) * (outward ? 1 : -0.3));
    dir.z = 0.22;
    const L = (3.9 + R() * 1.2) * (1 + 0.35 * b);
    g.add(orient(lf(L, L * 0.5), pol(a, W + (outward ? 0.6 : -0.6), 2.0), dir));
    // bud on a short stalk between the leaves
    const ab = a - 3, rb = W + 2.2 + R() * 1.6 + 2.2 * b, pb = pol(ab + (R() - 0.5) * 3, rb, 2.2 + R());
    g.add(sw([pol(ab, W, 1.7), pol(ab - 1, (W + rb) / 2, 2.4), pb], 0.24));
    g.add(bead(0.85 + R() * 0.5, pb, MAT.gold, 8));
    if (i % 2) g.add(bead(0.7, pol(ab + 2.2, W + 1.5 + R(), 2.6), MAT.gold, 8), bead(0.6, pol(ab + 4, W + 2.3 + R(), 2.3), MAT.gold, 8));
    if (i % 3 === 1) g.add(bead(0.6, pol(a + 1.5, W - 1.0, 2.5), MAT.gold, 8), bead(0.5, pol(a + 3.8, W - 0.8, 2.4), MAT.gold, 8));
  }
  // blossoms along the wreath (the larger one marks the end-piece); a few with small crystal centres
  for (const [a, dr, rad, c] of [[132, 1.6, 2.4, 'bead'], [92, 2.0, 2.7, 'crystal'], [52, 2.4, 2.9, 'bead'], [8, 4.4, 3.8, 'crystal'], [-34, 2.6, 2.8, 'bead']]) {
    const f = blossom(rad, c);
    f.position.copy(pol(a, W + dr, 2.9));
    f.rotation.set(-0.15 * Math.sin(a * D), 0.2 * Math.cos(a * D), a);
    g.add(f);
  }
  // end-piece: leaves and bead-tipped tendrils fanning outward, two scrolls
  for (const [a, dr, da, L] of [[26, 3.4, 30, 5.6], [-12, 3.4, -30, 5.6]])
    g.add(orient(lf(L, L * 0.42), pol(a, W + dr, 1.6), v3(Math.cos((a + da) * D), Math.sin((a + da) * D), 0.18)));
  for (const [a, dr] of [[38, 5.6], [27, 7.4], [16, 8.6], [0, 8.8], [-11, 7.8], [-23, 6.2]]) {
    const tip = pol(a + (R() - 0.5) * 4, W + dr, 1.8 + R());
    g.add(sw([pol(a, W + 0.6, 1.5), pol(a + 3, W + dr / 2, 2.4), tip], 0.26, { segLen: 1.5 }));
    g.add(bead(0.85, tip, MAT.gold, 8));
  }
  g.add(wire(spiral({ center: pol(44, W + 4.7, 1.6), r0: 2.3, r1: 0.5, turns: 1.4, a0: -120 * D, dir: 1, n: 28 }), 0.34, { radial: 6, taper: [1, 0.6], segLen: 0.8 }));
  g.add(wire(spiral({ center: pol(-44, W + 3.7, 1.6), r0: 2.1, r1: 0.5, turns: 1.4, a0: 120 * D, dir: -1, n: 28 }), 0.34, { radial: 6, taper: [1, 0.6], segLen: 0.8 }));
  g.add(gem(0.8, pol(66, W + 2.7, 2.6)), gem(0.8, pol(-20, W + 4.9, 2.6))); // small set crystals (see report)
  g.add(bead(1.5, pol(160, W + 0.7, 2.2), MAT.gold, 10)); // bud that ends the wreath at the bridge

  // --- hinge + plain temple (assumed: not visible in the photo)
  const hx = CX + RO + 0.6;
  g.add(new THREE.Mesh(new THREE.BoxGeometry(2.4, 3.2, 3.4).translate(hx, 0, -2.4), MAT.gold));
  g.add(wire([v3(hx + 0.6, 0, -3.6), v3(hx + 2.2, 0, -30), v3(hx + 3, 0, -95), v3(hx + 1.5, -3, -122), v3(hx - 0.5, -11, -138)], 0.9, { taper: [1, 0.8], radial: 8 }));

  // --- bridge side: C-scrolls hugging the inner rim, twig above
  for (const [r, a0, a1, rad] of [[RO + 1.1, 164, 216, 0.42], [RO + 2.4, 168, 206, 0.34]]) {
    const p = [];
    for (let a = a0; a <= a1; a += 6) p.push(pol(a, r, 1.2));
    const e = p[p.length - 1];
    g.add(wire(p.concat(spiral({ center: [e.x + 1.1, e.y - 0.4, 1.2], r0: 1.2, r1: 0.4, turns: 0.9, a0: Math.PI, dir: 1, n: 12 }).slice(1)), rad, { radial: 6 }));
  }
  const tw = [v3(1.5, 8, 1.5), v3(5.5, 13.5, 2), v3(10, 17.5, 1.8), v3(15, 20, 1.6)];
  g.add(wire(tw, 0.36, { taper: [1, 0.6], radial: 6 }));
  for (const [f, dx, dy] of [[0.35, -1.5, 3.4], [0.55, 3.2, -0.6], [0.75, -0.6, 3.2], [1, 2.6, 1]]) {
    const b = new THREE.CatmullRomCurve3(tw).getPoint(f), t = v3(b.x + dx, b.y + dy, b.z + 0.5);
    g.add(sw([b, t], 0.24), bead(0.62, t, MAT.gold, 8));
  }
  return g;
}

function bridge() {
  const g = new THREE.Group();
  const my = -2, MR = 8, mz = 1.4, H = 3;
  const zAt = (r) => mz + H * Math.sqrt(Math.max(0, 1 - (r / MR) ** 2));
  // granulated medallion: darkened dome, beaded rings, rope border
  const dome = new THREE.Mesh(new THREE.SphereGeometry(MR, 28, 8, 0, Math.PI * 2, 0, Math.PI / 2).rotateX(Math.PI / 2).scale(1, 1, H / MR), MAT.goldAntique);
  dome.position.set(0, my, mz);
  g.add(dome);
  const ring = (r, z, rad) => wire(spiral({ center: [0, my, z], r0: r, r1: r, turns: 1, n: 40 }).slice(0, -1), rad, { closed: true, radial: 6 });
  g.add(ring(MR, mz, 0.55), ring(MR - 0.1, mz - 1.2, 0.5));
  for (const [r, n, br] of [[6.9, 18, 0.72], [5.1, 13, 0.68], [3.3, 8, 0.62]])
    for (let i = 0; i < n; i++) {
      const a = (i / n) * Math.PI * 2 + r;
      g.add(bead(br, [Math.cos(a) * r, my + Math.sin(a) * r, zAt(r) + br * 0.3], MAT.gold, 8));
    }
  g.add(ring(1.9, zAt(1.9) + 0.2, 0.34), bead(1.15, [0, my, zAt(0) + 0.5], MAT.gold, 10));
  // fan of bead-tipped wires above the medallion, bead rosette on top
  const base = v3(0, my + MR - 0.5, 1.6);
  for (const [a, L] of [[-62, 8], [-40, 10], [-20, 11.4], [0, 12], [20, 11.4], [40, 10], [62, 8]]) {
    const d = v3(Math.sin(a * D), Math.cos(a * D)), tip = base.clone().addScaledVector(d, L).add(v3(0, 0, 1));
    const mid = base.clone().addScaledVector(d, L * 0.5).add(v3(-Math.sin(a * D) * 0.6, 0, 1.5));
    g.add(wire([base, mid, tip], 0.4, { taper: [1, 0.6], radial: 6 }));
    if (a) g.add(bead(0.72, tip, MAT.gold, 8));
  }
  const top = v3(0, my + MR + 13, 3);
  g.add(bead(0.95, top.clone().add(v3(0, 0, 0.5)), MAT.gold, 8));
  for (let i = 0; i < 6; i++) g.add(bead(0.72, top.clone().add(v3(Math.cos(i * 60 * D) * 1.75, Math.sin(i * 60 * D) * 1.75, 0)), MAT.gold, 8));
  // structural bridge bar behind the ornament (plain, assumed)
  g.add(wire([v3(-13, 5, -0.6), v3(-6.5, 8.6, -0.4), v3(0, 9.4, -0.2), v3(6.5, 8.6, -0.4), v3(13, 5, -0.6)], 0.8, { radial: 6 }));
  g.add(wire([v3(-12.2, -2, 0), v3(-7.8, -2, 0.6)], 0.6, { radial: 6 }), wire([v3(12.2, -2, 0), v3(7.8, -2, 0.6)], 0.6, { radial: 6 }));
  return g;
}

export function build() {
  const root = new THREE.Group();
  const h = half();
  root.add(h, mirrorX(h), bridge());
  root.scale.setScalar(0.001);
  root.position.z = 0.06; // centre the open temples around the origin
  const wrap = new THREE.Group();
  wrap.add(root);
  return wrap;
}
