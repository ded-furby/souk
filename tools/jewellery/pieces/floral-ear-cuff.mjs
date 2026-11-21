// Kavya Potluri floral ear cuff — hero piece. Traced from reference photo 4.jpg.
// All layout data below is in SOURCE-PHOTO PIXELS (630x836 image) so it can be checked against the photo;
// P() converts to metres (0.3 mm/px: ear ≈ 6 cm, foliage ≈ 12 x 11 cm), +Y up, front +Z.
import { THREE, MAT, wire, leaf, bead, chain, curve } from '../lib.mjs';

const S = 0.0003;
const P = (x, y, z = 0) => new THREE.Vector3((x - 295) * S, (650 - y) * S, z);
const part = (o, name) => { o.userData.part = true; o.name = name; return o; };
let seed = 7;
const rnd = () => { seed = (seed * 16807) % 2147483647; return seed / 2147483647; }; // deterministic
const Z_SPINE = -0.003, Z_FRONT = 0.007;

// ---------- data traced from the photo (pixels) ----------
// hidden back frame: follows the back edge of the ear, top junction -> behind the lobe  (ASSUMPTION: not visible)
const SPINE = [[289, 556], [270, 545], [244, 548], [221, 566], [209, 597], [208, 631], [218, 663], [240, 689], [271, 704], [310, 709], [351, 706], [388, 695], [411, 667]];
// visible C-shaped wire lying in the ear: ball end at the top, tapering point at the lobe
const FRONT_ARC = [[287, 561, 0.004], [279, 566, 0.0062], [270, 573], [260, 583], [252.5, 597], [250, 613], [252, 630], [258, 647], [270, 660], [287, 668], [308, 673], [332, 673], [358, 668], [383, 660], [400, 653], [411, 646.5]];
// hook over the top of the ear (ball end inside the ear) and hook round the lobe (ball end in front)
const TOP_HOOK = [[289, 556, Z_SPINE], [290, 558.5, 0.0035], [297, 561, 0.006], [304, 567, Z_FRONT], [309, 577, Z_FRONT], [309, 585, Z_FRONT], [303, 592, Z_FRONT], [292.5, 593, Z_FRONT]];
const LOBE_HOOK = [[411, 667, Z_SPINE], [415, 662, 0], [417, 656, 0.004], [416.5, 649, 0.0065], [413, 642, Z_FRONT], [407, 637.5, Z_FRONT], [398, 638, Z_FRONT], [392, 643, Z_FRONT]];

// leaves: base, tip, width, lobes per side
const LEAVES = [
  [[243, 487], [281, 541], 30, 6], [[160, 538], [223, 568], 36, 7], [[176, 533], [126, 505], 26, 6],
  [[172, 582], [98, 601], 32, 7], [[131, 632], [93, 673], 30, 6], [[192, 649], [148, 689], 30, 6],
  [[290, 702], [286, 792], 32, 8], [[318, 752], [331, 829], 33, 7], [[325, 708], [385, 724], 28, 6],
  [[440, 716], [498, 756], 36, 6], [[406, 745], [438, 816], 33, 7], [[273, 778], [250, 842], 26, 6],
];
// large blossoms: centre, radius, kind, spin, tiltX, tiltY
const FLOWERS = [
  [[214, 509], 24, 'trumpet', 0.2, 0.1, -0.1], [[158, 628], 28, 'trumpet', 0.9, -0.25, -0.3],
  [[232, 746], 40, 'round', 0.5, 0.1, 0.1], [[366, 765], 34, 'heart', 0.1, 0.05, 0.15],
];
// small 5-petal blossoms: centre, radius
const BLOSSOMS = [[172, 497, 9], [232, 486, 8], [227, 549, 8], [121, 574, 7], [141, 657, 8], [462, 650, 10], [346, 803, 11], [241, 797, 8], [427, 742, 8]];
// buds (cupped teardrops on stems): x, y, r, optional stem origin
const BUDS = [
  [192, 473, 7], [420, 664, 8, [408, 681]], [406, 692, 9, [398, 683]], [426, 697, 8, [420, 681]], [447, 704, 9, [433, 680]], [462, 683, 8, [445, 678]],
  [192, 622, 6], [240, 670, 9], [228, 697, 8], [322, 738, 10], [413, 727, 8], [153, 731, 7], [197, 705, 7], [165, 765, 7], [195, 785, 8], [255, 711, 7], [205, 626, 6], [290, 809, 4.5],
  [130, 712, 5], [148, 707, 6], [303, 795, 6], [245, 545, 5],
];
// ball-tipped tendrils: path..., last number = ball radius. `true` first = do not root to the spine (branches off another stem)
const TENDRILS = [
  [[186, 500], [180, 482], [171, 470], [158, 468], 2.5], [[178, 495], [172, 483], [162, 477], 2.5], [[165, 505], [152, 497], [147, 489], 2], [[150, 508], [135, 497], [126, 487], 2],
  [[160, 572], [145, 558], [128, 545], 2.5], [[213, 590], [197, 589], [186, 592], 5.5], [[213, 598], [197, 602], [183, 605], 2.5], [[213, 580], [195, 576], [180, 574], 2],
  [[150, 606], [128, 611], [106, 617], 2.5], [[125, 618], [105, 628], [93, 647], 2.5],
  [[240, 690], [215, 715], [190, 738], [160, 745], [135, 738], 2], [true, [160, 745], [145, 750], [133, 752], 1.5], [[243, 690], [225, 700], [207, 705], 4.5], [[215, 722], [200, 745], [203, 770], [212, 790], 2.5],
  [[302, 700], [306, 750], [309, 795], [313, 820], 2.5], [[305, 705], [315, 740], [336, 757], 2.5], [true, [311, 738], [322, 758], [337, 768], 2.5], [[283, 770], [288, 800], [291, 808], 2.5],
  [[392, 700], [408, 735], [425, 762], [442, 775], [462, 779], 3.5],
  [true, [398, 683], [420, 681], [445, 678], [456, 681], 0.01], [true, [412, 680], [422, 668], [431, 660], 2.5], [true, [425, 680], [440, 672], [452, 668], 2.5], [true, [430, 681], [436, 695], [437, 707], 2.5], [true, [440, 679], [452, 692], [458, 707], 2.5],
  [[252, 682], [238, 683], [226, 684], 2], [[255, 690], [245, 700], [238, 706], 2], [[262, 694], [256, 706], [250, 712], 2],
  [[214, 612], [200, 612], [188, 618], 2], [[214, 620], [203, 628], [196, 640], 2],
  [[405, 671], [425, 656], [452, 638], 2.2], // thicker wire from the lobe hook up to the top-right blossom
];
// granulated (beaded) wires: path..., bead radius
const BEADWIRES = [
  [[285, 556], [268, 543], [250, 534], [232, 530], [216, 531], 2.4], [[212, 630], [205, 650], [193, 670], [175, 685], [160, 692], 2.2], [[209, 645], [209, 665], [207, 685], [205, 703], 2],
  [[387, 696], [402, 706], [417, 720], [432, 736], [447, 751], 2.8], [[466, 664], [474, 680], [477, 697], [473, 712], 2.5], [[455, 758], [466, 761], [477, 763], [488, 766], 3.3],
  [[278, 702], [277, 727], [275, 752], [274, 775], [280, 800], 2], [[322, 705], [326, 722], [331, 740], 2.2], [[185, 742], [184, 760], [180, 778], [172, 792], 2], [[165, 572], [150, 566], [135, 562], [122, 560], 2],
  [[392, 708], [404, 724], [416, 742], [428, 758], 1.8], [[128, 690], [124, 703], [122, 716], [120, 728], 1.8], [[216, 632], [223, 646], [233, 660], [246, 672], 1.8],
];
const CLUSTERS = [[120, 683], [170, 712], [453, 765], [133, 543], [180, 523], [131, 512]];

// ---------- helpers ----------
const spineCurve = curve(SPINE.map(([x, y]) => P(x, y, Z_SPINE)));
const N_SP = 160, spineSamples = spineCurve.getSpacedPoints(N_SP);
// Root point on the back frame for something at p. Roots are snapped to a few solder nodes (with some scatter),
// so stems leave the frame in bundles, fan out and occasionally cross — as sprays do in the photo.
function nearestSpine(p, exact = false) {
  let bi = 0, d = Infinity;
  spineSamples.forEach((s, i) => { const dd = (s.x - p.x) ** 2 + (s.y - p.y) ** 2; if (dd < d) { d = dd; bi = i; } });
  if (!exact) bi = Math.max(0, Math.min(N_SP, Math.round((bi + (rnd() - 0.5) * 22) / 9) * 9));
  return spineSamples[bi].clone();
}
// organic S-curved stem from a to b, kept low (under the foliage) until it reaches b
function stem(a, b, r = 0.0003) {
  const d = b.clone().sub(a), perp = new THREE.Vector3(-d.y, d.x, 0), s = rnd() < 0.5 ? -1 : 1;
  const p1 = a.clone().addScaledVector(d, 0.3 + rnd() * 0.1).addScaledVector(perp, s * (0.07 + rnd() * 0.13));
  const p2 = a.clone().addScaledVector(d, 0.68 + rnd() * 0.1).addScaledVector(perp, -s * (0.02 + rnd() * 0.1));
  p1.z = a.z + (b.z - a.z) * 0.15; p2.z = a.z + (b.z - a.z) * 0.55;
  return wire([a, p1, p2, b], r, { radial: 4, taper: [1.15, 0.8], segLen: r * 3.2 }); // short segments: smooth at inspection distance
}
// like lib orient(), but keeps the face toward +Z for every direction (orient() flips things that point straight down)
function aim(obj, at, dir, roll = 0) {
  const y = dir.clone().normalize(), x = new THREE.Vector3().crossVectors(y, new THREE.Vector3(0, 0, 1)).normalize(), z = new THREE.Vector3().crossVectors(x, y);
  obj.position.copy(at);
  obj.quaternion.setFromRotationMatrix(new THREE.Matrix4().makeBasis(x, y, z)).multiply(new THREE.Quaternion().setFromAxisAngle(new THREE.Vector3(0, 1, 0), roll));
  return obj;
}
const rootStem = (to, r, from) => stem(from ? P(from[0], from[1], to.z * 0.6) : nearestSpine(to), to, r);

// closed thin blade from a point function pt(u, v, side) -> [x,y,z]; u 0..1 base->tip, v -1..1 across
function blade(pt, segU, segV) {
  const nv = segV + 1, pos = [], idx = [];
  const grid = (side) => {
    const b = pos.length / 3;
    for (let i = 0; i <= segU; i++) for (let j = 0; j <= segV; j++) pos.push(...pt(i / segU, (j / segV) * 2 - 1, side));
    for (let i = 0; i < segU; i++)
      for (let j = 0; j < segV; j++) {
        const a = b + i * nv + j, c = a + nv, e = a + 1, f = c + 1;
        side > 0 ? idx.push(a, e, c, e, f, c) : idx.push(a, c, e, e, c, f);
      }
    return b;
  };
  const F = grid(1), B = grid(-1);
  for (const j of [0, segV])
    for (let i = 0; i < segU; i++) {
      const f0 = F + i * nv + j, f1 = f0 + nv, b0 = B + i * nv + j, b1 = b0 + nv;
      j === 0 ? idx.push(f0, f1, b0, b0, f1, b1) : idx.push(f0, b0, f1, f1, b0, b1);
    }
  const geo = new THREE.BufferGeometry();
  geo.setAttribute('position', new THREE.Float32BufferAttribute(pos, 3));
  geo.setIndex(idx);
  geo.computeVertexNormals();
  return new THREE.Mesh(geo, MAT.gold);
}

// Cast leaf as in the photo: lobed margin (lobes alternate left/right and vary in depth, so the edge is not a regular
// saw-tooth), a raised vein per lobe, long pointed tip, raised midrib. Base at origin, tip +Y, face +Z.
function fernLeaf({ length, width, lobes = 6, cup = 0.3, bend = 0.1, twist = 0, thick = 0.00045, depth = 0.3 }) {
  const segU = lobes * 8, shapeE = 0.56 + rnd() * 0.14, ph = [rnd() * 0.5, 0.5 + rnd() * 0.4];
  const amp = [0, 1].map(() => Array.from({ length: lobes + 2 }, () => 0.45 + rnd() * 0.95)); // per-lobe depth, per side
  const wob = rnd() * 6, lobeU = (u) => Math.min(1, u / 0.86) + 0.012 * Math.sin(u * 17 + wob);
  const fade = (u) => (u < 0.86 ? 1 : 0);
  const lobe = (u, sd) => Math.abs(Math.sin(Math.PI * (lobes * lobeU(u) + ph[sd]))); // 1 on the lobe crest, 0 in the notch
  const dep = (u, sd) => depth * amp[sd][Math.max(0, Math.floor(lobes * lobeU(u) + ph[sd]))];
  const W = (u, sd) => (width / 2) * Math.pow(Math.sin(Math.PI * Math.pow(u, shapeE)), 0.95) * (1 - dep(u, sd) * fade(u) * (1 - lobe(u, sd)));
  const pt = (u, v, side) => {
    const sd = v > 0 ? 1 : 0, a = Math.abs(v), w = W(u, sd) * v;
    const y = u * length + a * W(u, sd) * 0.4; // lobes and veins sweep toward the tip
    const pleat = 0.075 * width * (lobe(u, sd) - 0.6) * fade(u) * Math.min(1, a * 1.6) * Math.sin(Math.PI * u);
    const z = -cup * width * 0.5 * v * v * Math.sin(Math.PI * Math.min(1, u * 1.1)) + bend * length * u * u + pleat + (side * thick) / 2;
    const t = twist * u;
    return [w * Math.cos(t) - z * Math.sin(t), y, w * Math.sin(t) + z * Math.cos(t)];
  };
  const g = new THREE.Group();
  g.add(blade(pt, segU, 6));
  const rr = width * 0.045;
  g.add(wire(Array.from({ length: 10 }, (_, i) => new THREE.Vector3(...pt((i / 9) * 0.97, 0, 1)).add(new THREE.Vector3(0, 0, rr * 0.3))), rr, { taper: [1.3, 0.25], radial: 6 }));
  return g;
}

// Ruffled petal: broad, irregular wavy rim that crinkles in depth. Base at origin, tip +Y, face +Z.
function ruffPetal({ length: L, width: w, shape = 1.3, tipPow = 0.42, notch = 0.06, ruffle = 0.09, waves = 3, cup = 0.4, crease = 0, curl = 0, segU = 10, segV = 8 }) {
  const ph = rnd() * 6.28, ph2 = rnd() * 6.28, skew = (rnd() - 0.5) * 0.25;
  const W = (u) => (w / 2) * Math.pow(Math.max(0, Math.sin(Math.PI * Math.pow(u, shape))), tipPow);
  return blade((u, v, side) => {
    const x = W(u) * v + skew * w * u * u * 0.5;
    const y = u * L * (1 + u * (0.09 * Math.sin(2.6 * v + ph) + 0.05 * Math.sin(5.3 * v + ph2))) - notch * L * Math.exp(-((v / 0.35) ** 2)) * u ** 6;
    const z = -cup * w * 0.5 * v * v * Math.sin(Math.PI * Math.min(1, u * 1.1)) + crease * w * (1 - Math.abs(v)) * Math.sin(Math.PI * Math.min(1, u * 1.15))
      + ruffle * L * u * u * Math.sin(waves * Math.PI * v + ph) + curl * L * u ** 3 + (side * 0.0004) / 2;
    return [x, y, z];
  }, segU, segV);
}
function ring(n, R, o, tilt, spin = 0) {
  const g = new THREE.Group();
  for (let i = 0; i < n; i++) {
    const p = ruffPetal({ length: R * (0.92 + rnd() * 0.16), ...o });
    p.rotation.x = tilt + (rnd() - 0.5) * 0.16;
    const h = new THREE.Group();
    h.add(p);
    h.rotation.z = spin + ((i + (rnd() - 0.5) * 0.22) / n) * Math.PI * 2;
    h.position.z = (i % 2) * R * 0.03; // neighbours overlap instead of intersecting
    g.add(h);
  }
  return g;
}
function blossom(R, segU = 6) { // small 5-petal blossom with a stamen boss
  const g = ring(5, R, { width: R * 0.85, shape: 1.2, tipPow: 0.5, notch: 0, ruffle: 0.04, waves: 2, cup: 0.4, segU, segV: 4 }, 0.22);
  g.add(bead(R * 0.2, [0, 0, R * 0.14], MAT.gold, 8));
  for (let i = 0; i < 5; i++) { const a = (i + 0.5) / 5 * Math.PI * 2; g.add(bead(R * 0.09, [Math.cos(a) * R * 0.3, Math.sin(a) * R * 0.3, R * 0.14], MAT.gold, 6)); }
  return g;
}
function bigFlower(R, kind) {
  const g = new THREE.Group();
  if (kind === 'trumpet') { // star-creased trumpet: pointed, lightly crinkled petals, bead in a collar
    g.add(ring(5, R, { width: R * 1.3, shape: 0.85, tipPow: 0.95, notch: 0, ruffle: 0.05, waves: 2.5, cup: 0.25, crease: 0.06, curl: -0.12 }, 0.4));
    const collar = new THREE.Mesh(new THREE.TorusGeometry(R * 0.2, R * 0.045, 6, 20), MAT.gold);
    collar.position.z = R * 0.13;
    g.add(collar, bead(R * 0.17, [0, 0, R * 0.17], MAT.gold, 14));
    return g;
  }
  const heart = kind === 'heart';
  g.add(ring(5, R, { width: R * 1.12, notch: heart ? 0.2 : 0.08, ruffle: 0.1, waves: 3, cup: 0.35, curl: -0.1, segU: 11, segV: 9 }, 0.3)); // outer, chunky
  const inner = ring(heart ? 4 : 5, R * 0.62, { width: R * 0.7, notch: 0.1, ruffle: 0.12, waves: 2.5, cup: 0.3, curl: -0.1, segU: 8, segV: 7 }, 0.55, 0.63); // inner layer, crumpled
  inner.position.z = R * 0.05;
  g.add(inner);
  if (heart) { const f = blossom(R * 0.3, 5); f.position.z = R * 0.26; f.rotation.z = 0.4; g.add(f); }
  else {
    g.add(bead(R * 0.1, [0, 0, R * 0.12], MAT.gold, 10));
    for (let i = 0; i < 9; i++) { // stamens
      const a = (i / 9) * Math.PI * 2 + 0.2, r = R * (0.16 + 0.07 * (i % 2)), tip = [Math.cos(a) * r, Math.sin(a) * r, R * 0.24];
      g.add(wire([[0, 0, R * 0.04], [tip[0] * 0.6, tip[1] * 0.6, R * 0.2], tip], R * 0.012, { radial: 4, caps: false }), bead(R * 0.035, tip, MAT.gold, 6));
    }
  }
  return g;
}

// ---------- build ----------
export function build() {
  seed = 7;
  const root = new THREE.Group();
  const cuff = part(new THREE.Group(), 'cuff'), beads = part(new THREE.Group(), 'beads'), buds = part(new THREE.Group(), 'buds');
  root.add(cuff, beads, buds);
  const v3 = (a, zDef) => P(a[0], a[1], a[2] ?? zDef);

  // wire frame
  cuff.add(wire(SPINE.map(([x, y]) => P(x, y, Z_SPINE)), 0.00045, { radial: 8 }));
  cuff.add(wire(FRONT_ARC.map((a) => v3(a, Z_FRONT)), 0.00048, { radial: 10, taper: (t) => (t > 0.8 ? 1 - (t - 0.8) * 3.4 : 1) }));
  cuff.add(bead(0.00085, v3(FRONT_ARC[0]), MAT.gold, 14));
  for (const h of [TOP_HOOK, LOBE_HOOK]) {
    cuff.add(wire(h.map((a) => v3(a)), 0.00042, { radial: 10 }));
    cuff.add(bead(0.00085, v3(h.at(-1)), MAT.gold, 14));
  }

  // leaves: varied depth, roll (some partly edge-on), curl and width, so they overlap rather than lie in one fan plane
  LEAVES.forEach(([b, t, w, lobes], i) => {
    const base = P(b[0], b[1], 0.0006 + rnd() * 0.003), tip = P(t[0], t[1], base.z + (rnd() - 0.35) * 0.004);
    const dir = tip.clone().sub(base);
    const g = fernLeaf({ length: dir.length(), width: w * S * (0.95 + rnd() * 0.2), lobes, cup: 0.15 + rnd() * (i === 6 ? 0.1 : 0.4), bend: i === 6 ? 0.08 + rnd() * 0 : (rnd() - 0.35) * 0.3, twist: (rnd() - 0.5) * (i === 6 ? 0.1 : 0.6), depth: 0.24 + rnd() * 0.12 });
    const roll = (rnd() - 0.5) * 0.9; // leaf_07 hangs face-on straight below the ear in the photo
    root.add(part(aim(g, base, dir, i === 6 ? 0.1 : roll), `leaf_${String(i + 1).padStart(2, '0')}`));
    cuff.add(rootStem(base, 0.00036));
  });

  // blossoms
  let fi = 0;
  const addFlower = (g, c, z, rx, ry, rz) => {
    g.position.copy(P(c[0], c[1], z));
    g.rotation.set(rx, ry, rz);
    root.add(part(g, `flower_${String(++fi).padStart(2, '0')}`));
    cuff.add(rootStem(P(c[0], c[1], z - 0.0008), 0.00034));
  };
  for (const [c, R, kind, spin, tx, ty] of FLOWERS) addFlower(bigFlower(R * S, kind), c, 0.0045, tx, ty, spin);
  for (const [x, y, r] of BLOSSOMS) addFlower(blossom(r * S), [x, y], 0.003 + rnd() * 0.002, (rnd() - 0.5) * 0.5, (rnd() - 0.5) * 0.5, rnd() * 6);

  // buds
  for (const [x, y, r, from] of BUDS) {
    const c = P(x, y, 0.001 + rnd() * 0.003), a = from ? P(from[0], from[1], c.z * 0.6) : nearestSpine(c);
    const dir = c.clone().sub(a).setZ(0).normalize(), base = c.clone().addScaledVector(dir, -r * S);
    buds.add(aim(leaf({ length: r * 2.4 * S, width: r * 1.9 * S, shape: 0.85, tip: 0.7, cup: 0.5, bend: 0.06, segU: 7, segV: 4, rib: false }), base, dir, (rnd() - 0.5) * 0.9));
    cuff.add(stem(a, base, 0.00028));
  }

  // ball-tipped tendrils
  for (const t of TENDRILS) {
    const free = t[0] === true, pts = t.slice(free ? 1 : 0, -1), rb = t.at(-1) * S, z = 0.0004 + rnd() * 0.0022;
    const path = pts.map(([x, y], i) => P(x, y, z * (free ? 1 : 0.5 + (0.5 * i) / (pts.length - 1))));
    if (!free) {
      const s = nearestSpine(path[0]);
      if (s.distanceTo(path[0]) > 0.0025) { // S-bend in from the frame instead of a straight spoke
        const d = path[0].clone().sub(s);
        path.unshift(s, s.clone().addScaledVector(d, 0.5).add(new THREE.Vector3(-d.y, d.x, 0).multiplyScalar((rnd() - 0.5) * 0.4)));
      } else path[0] = s;
    }
    const r = rb > 0.0009 ? 0.00038 : rb > 0.0006 ? 0.00032 : 0.00027;
    cuff.add(wire(path, r, { radial: 4, taper: [1.1, 0.85], segLen: r * 3.2 }));
    if (rb > 0.0001) beads.add(bead(rb * 1.1, path.at(-1), MAT.gold, rb > 0.001 ? 14 : 8));
  }

  // granulated wires + berry clusters
  for (const b of BEADWIRES) {
    const r = b.at(-1) * S * 1.15, z = 0.001 + rnd() * 0.003, path = b.slice(0, -1).map(([x, y]) => P(x, y, z));
    const s = nearestSpine(path[0], true);
    if (s.distanceTo(path[0]) < 0.004) path[0] = s; else cuff.add(stem(s, path[0], 0.00026));
    cuff.add(wire(path, r * 0.4, { radial: 4, segLen: r * 3 }));
    beads.add(chain(path, r, { spacing: 2.3, seg: 8 }));
  }
  for (const [x, y] of CLUSTERS) {
    const c = P(x, y, 0.0015 + rnd() * 0.002);
    cuff.add(rootStem(c, 0.00026));
    for (let i = 0; i < 9; i++) {
      const a = i * 2.4, r = Math.sqrt(i / 9) * 0.0021;
      beads.add(bead(0.00062, [c.x + Math.cos(a) * r, c.y + Math.sin(a) * r, c.z + 0.0006 - r * 0.25], MAT.gold, 8));
    }
  }
  return root;
}
