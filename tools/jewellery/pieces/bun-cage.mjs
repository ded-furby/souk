// Kavya Potluri bun cage (reference 5.jpg): domed openwork gold cage worn over the hair bun.
// Method: the photo sees a ~hemispherical dome from ~39 deg to its right. Every visible feature is traced
// in photo pixels (the 4x crop out/bun-cage/ref_full.png, 1080x1200) and ray-cast onto the dome with ph().
// The strip the photo cannot see (far-left band near the rim, upper right behind the fingers) is filled
// with the same leaf / bead-spray vocabulary, kept minimal — see ASSUMED blocks.
import { THREE, MAT, wire, leaf, bead } from '../lib.mjs';

const R = 0.05; // dome radius (10 cm across, 5 cm deep)
export const PHOTO_YAW = (39 * Math.PI) / 180; // camera is this far round to the piece's right (+X)
const CX = 595, CY = 595, PX = 545; // photo: sphere centre and px per radius
const v3 = (x, y, z) => new THREE.Vector3(x, y, z);
const camR = v3(Math.cos(PHOTO_YAW), 0, -Math.sin(PHOTO_YAW)), camD = v3(Math.sin(PHOTO_YAW), 0, Math.cos(PHOTO_YAW));

// photo pixel -> unit direction on the dome
function ph(u, v) {
  let x = (u - CX) / PX, y = (CY - v) / PX;
  const l = Math.hypot(x, y);
  if (l > 0.985) { x *= 0.985 / l; y *= 0.985 / l; }
  const z = Math.sqrt(1 - x * x - y * y);
  const p = camR.clone().multiplyScalar(x).add(v3(0, y, 0)).addScaledVector(camD, z);
  if (p.z < 0.02) { p.z = 0.02; p.normalize(); } // never below the rim plane
  return p;
}
// polar (from apex +Z) / azimuth (0 = +X, 90 = up) in degrees -> unit direction
const sph = (phi, al) => { const p = (phi * Math.PI) / 180, a = (al * Math.PI) / 180; return v3(Math.sin(p) * Math.cos(a), Math.sin(p) * Math.sin(a), Math.cos(p)); };
const S = (dir, lift = 0) => dir.clone().multiplyScalar(R * (1 + lift));
const P = (u, v, lift = 0) => S(ph(u, v), lift);

let seed = 7;
const rnd = (a = 0, b = 1) => { seed = (seed * 1664525 + 1013904223) >>> 0; return a + (b - a) * (seed / 4294967296); };

// object +Y along dir, +Z (its face) along the dome normal
function place(obj, at, dir, normal) {
  const y = dir.clone().normalize();
  const z = normal.clone().addScaledVector(y, -normal.dot(y)).normalize();
  obj.quaternion.setFromRotationMatrix(new THREE.Matrix4().makeBasis(v3().crossVectors(y, z), y, z));
  obj.position.copy(at);
  return obj;
}

export function build() {
  const g = new THREE.Group();
  const mm = 0.001;

  // ---- helpers that keep everything on the dome ----
  // wire through unit directions (re-projected onto the sphere so it hugs the dome)
  const vineD = (dirs, r, { lift = 0, taper, seg = 2 * mm, caps = true } = {}) => {
    const c = new THREE.CatmullRomCurve3(dirs, false, 'catmullrom', 0.5);
    const n = Math.max(4, Math.ceil((c.getLength() * R) / (2 * mm)));
    const pts = c.getPoints(n).map((p) => S(p.normalize(), lift));
    g.add(wire(pts, r, { taper, radial: r < 0.45 * mm ? 5 : 6, segLen: seg, caps }));
  };
  const vine = (px, r, o) => vineD(px.map(([u, v]) => ph(u, v)), r, o);
  const beadD = (dir, r, lift = 0) => g.add(bead(r, S(dir, lift + (r / R) * 0.6), MAT.gold, r > 1.3 * mm ? 8 : 6));
  const beadP = (u, v, r = 0.9 * mm, lift = 0) => beadD(ph(u, v), r, lift);
  // leaf from base dir to tip dir
  const leafD = (a, b, width, { lift = 0.012, lobed = false, cup = 0.35 } = {}) => { // lobed: true = 5 lobes, 1 = 3 lobes
    const A = S(a, lift), B = S(b, lift), len = A.distanceTo(B), n = a.clone().add(b).normalize();
    const mk = (L, W, main) => leaf({ length: L, width: W, shape: lobed ? 0.8 : 0.72, tip: lobed ? 1.25 : 0.85, cup, bend: -0.06, thick: 0.45 * mm, segU: main ? 6 : 5, segV: 2, rib: false });
    const o = new THREE.Group();
    o.add(mk(len, width, true));
    // raised midrib (own wire: the lib rib is 3x the triangles)
    o.add(wire([0.03, 0.35, 0.65, 0.92].map((u) => [0, u * len, -0.06 * len * u * u + 0.4 * mm]), 0.32 * mm, { taper: [1, 0.4], radial: 5, caps: false, segLen: len / 5 }));
    if (lobed) for (const s of [-1, 1]) { // side lobes -> the serrated vine-leaf outline seen on the left of the dome
      for (const [f, ang, k] of [[0.18, 0.95, 0.58], [0.42, 0.75, 0.42]].slice(0, lobed === true ? 2 : 1)) {
        const l = mk(len * k, width * 0.62, false);
        l.position.y = len * f; l.rotation.z = -s * ang;
        o.add(l);
      }
    }
    g.add(place(o, A, B.clone().sub(A), n));
  };
  const leafP = (a, b, w, o) => leafD(ph(...a), ph(...b), w * mm, o);
  // small cupped 5-petal blossom facing out of the dome
  const blossomD = (dir, r, petals = 5, lift = 0.02, fine = true) => {
    const o = new THREE.Group();
    for (let i = 0; i < petals; i++) {
      const p = leaf({ length: r, width: r * 0.9, shape: 0.62, tip: 0.5, cup: 0.4, bend: -0.05, rib: false, thick: 0.4 * mm, segU: fine ? 7 : 5, segV: fine ? 4 : 2 });
      const h = new THREE.Group();
      p.rotation.x = 0.4; h.add(p); h.rotation.z = (i / petals) * Math.PI * 2 + 0.3; o.add(h);
    }
    o.add(bead(r * 0.26, [0, 0, r * 0.14], MAT.gold, fine ? 8 : 6));
    const t = v3(0, 1, 0).cross(dir).lengthSq() > 0.01 ? v3(0, 1, 0) : v3(1, 0, 0);
    g.add(place(o, S(dir, lift), t, dir));
  };
  const blossomP = (u, v, r) => blossomD(ph(u, v), r * mm);
  // stems fanning from a base, each ending in a bead (the berry / bead sprays)
  const sprayD = (base, tips, br = 1.0 * mm, sr = 0.26 * mm) => {
    for (const t of tips) {
      const mid = base.clone().add(t).normalize();
      vineD([base, mid, t], sr, { seg: 1.8 * mm, caps: false });
      beadD(t, br * rnd(0.85, 1.15));
    }
  };
  const sprayP = (b, tips, br) => sprayD(ph(...b), tips.map((t) => ph(...t)), br && br * mm);
  // tendril ending in a bead
  const tendril = (px, br = 0.75) => { vine(px, 0.3 * mm, { taper: [1, 0.8] }); beadP(...px[px.length - 1], br * mm); };

  // ---- rim: plain smooth round band ----
  g.add(wire(Array.from({ length: 96 }, (_, i) => [Math.cos((i / 96) * 6.2832) * R, Math.sin((i / 96) * 6.2832) * R, 0]), 0.65 * mm, { closed: true, radial: 8, segLen: 2.4 * mm }));

  // ---- insect (upper right of the dome as worn) ----
  {
    const lift = 0.075;
    const c = ph(628, 300), head = ph(690, 392), tail = ph(566, 222);
    const axis = S(head).sub(S(tail));
    const body = new THREE.Mesh(new THREE.SphereGeometry(1, 20, 12).scale(4.9 * mm, 6.4 * mm, 3.9 * mm), MAT.gold); // big polished oval
    g.add(place(body, S(c, lift), axis, c));
    g.add(bead(2.2 * mm, S(ph(677, 370), 0.07), MAT.gold, 12)); // head lumps toward lower right
    g.add(bead(1.6 * mm, S(ph(694, 404), 0.052), MAT.gold, 10));
    g.add(bead(1.2 * mm, S(ph(650, 378), 0.058), MAT.gold, 8));
    const neck = new THREE.Mesh(new THREE.SphereGeometry(1, 12, 8).scale(1.9 * mm, 2.6 * mm, 1.7 * mm), MAT.gold); // ribbed stub where the wings root
    g.add(place(neck, S(tail, 0.05), axis, tail));
    for (const f of [-0.35, 0.1, 0.5]) { // its ribs
      const o = S(tail, 0.05).addScaledVector(axis.clone().normalize(), f * 2.4 * mm);
      const ring = new THREE.Mesh(new THREE.TorusGeometry(1.75 * mm * Math.sqrt(1 - f * f * 0.8), 0.22 * mm, 5, 14).rotateX(Math.PI / 2), MAT.gold);
      g.add(place(ring, o, axis, tail));
    }
    // wings: long narrow lobes filled with ladder cross-veins, as traced
    const wing = (cl, w0, { mid = false, lift = 0.04, rungs } = {}) => {
      const c2 = new THREE.CatmullRomCurve3(cl.map(([u, v]) => v3(u, v, 0)));
      const n = rungs ?? Math.round(c2.getLength() / 14);
      const L = [], Rr = [], M = [];
      for (let i = 0; i <= n; i++) {
        const t = i / n, p = c2.getPointAt(t), tg = c2.getTangentAt(t), w = (w0 / 2) * (0.5 + 0.5 * Math.sin(Math.PI * Math.min(1, 0.15 + t * 0.95))) * (t > 0.9 ? 1 - (t - 0.9) * 7 : 1);
        L.push([p.x - tg.y * w, p.y + tg.x * w]); Rr.push([p.x + tg.y * w, p.y - tg.x * w]); M.push([p.x, p.y]);
      }
      const tip = c2.getPointAt(1).add(c2.getTangentAt(1).multiplyScalar(5));
      vine([...L, [tip.x, tip.y], ...Rr.reverse()], 0.55 * mm, { lift, seg: 1.5 * mm });
      Rr.reverse();
      if (mid) vine(M, 0.45 * mm, { lift: lift + 0.004 });
      for (let i = 1; i < n; i++) { // slanted, slightly arched rungs
        const a = L[i], b = Rr[Math.max(0, i - 1)], m = mid ? M[i] : [(a[0] + b[0]) / 2, (a[1] + b[1]) / 2];
        g.add(wire([P(...a, lift), P(...m, lift + 0.006), P(...b, lift)], 0.42 * mm, { radial: 5, caps: false, segLen: 1.4 * mm }));
      }
    };
    wing([[566, 236], [505, 250], [440, 264], [385, 288], [346, 322]], 68); // left, upper
    wing([[560, 296], [495, 312], [432, 324], [380, 346], [348, 378]], 62); // left, middle
    wing([[545, 334], [475, 368], [422, 410], [390, 452], [374, 494]], 82, { mid: true }); // left, sweeping down (has a clear mid-vein)
    wing([[490, 398], [448, 442], [400, 505], [364, 566]], 60); // left, lowest
    wing([[598, 198], [640, 166], [690, 150], [742, 148]], 70); // right, upper
    wing([[655, 226], [720, 206], [790, 206], [850, 228], [892, 262]], 66); // right, middle (tip behind the fingers)
    wing([[690, 276], [740, 262], [800, 262], [842, 282]], 56); // right, lower
    // long straight leg wires running down from the head
    for (const l of [[[612, 362], [565, 505]], [[745, 338], [750, 500]], [[700, 332], [845, 318]], [[845, 318], [872, 405], [960, 520], [1005, 580]], [[530, 465], [655, 565]], [[640, 392], [632, 492]]])
      vine(l, 0.28 * mm, { lift: 0.01 });
  }

  // ---- centre: scrolls under the insect ----
  vine([[610, 468], [640, 505], [700, 513], [745, 490], [760, 445]], 0.5 * mm, { taper: [1, 0.6], seg: 1.2 * mm });
  vine([[700, 540], [740, 556], [766, 530], [745, 505], [722, 520]], 0.42 * mm, { taper: [1, 0.5], seg: 1 * mm });
  vine([[655, 565], [690, 610], [700, 640]], 0.35 * mm);
  vine([[424, 712], [470, 652], [520, 640], [570, 642], [640, 648], [700, 640], [742, 618], [772, 612]], 0.5 * mm);
  vine([[364, 566], [420, 590], [460, 600], [470, 652]], 0.4 * mm);
  vine([[510, 742], [560, 722], [610, 736], [650, 776], [662, 812]], 0.5 * mm, { taper: [1, 0.6] });
  blossomP(704, 552, 2.1);

  // ---- lower right: open vines, blossoms, bead-tipped tendrils ----
  blossomP(790, 612, 3.4); blossomP(843, 622, 1.6);
  blossomP(792, 772, 3.0); blossomP(752, 804, 2.0); blossomP(640, 690, 2.6); blossomP(992, 606, 1.9);
  leafP([862, 706], [718, 724], 4.2); // the long leaf under the big blossom
  vine([[850, 706], [895, 682], [906, 646], [886, 618], [862, 626]], 0.55 * mm, { taper: [1, 0.55], seg: 1.2 * mm }); // its hooked stem
  vine([[885, 700], [925, 745], [928, 805], [905, 860], [872, 892], [835, 900]], 0.36 * mm);
  vine([[830, 900], [870, 960], [885, 1012]], 0.34 * mm);
  vine([[905, 835], [925, 930], [896, 1000]], 0.3 * mm);
  vine([[880, 690], [940, 735], [1000, 790]], 0.3 * mm);
  vine([[906, 646], [930, 660], [962, 700], [1004, 692], [1008, 640], [992, 606]], 0.3 * mm);
  tendril([[880, 652], [910, 618], [936, 590]], 0.8);
  tendril([[800, 802], [826, 792], [851, 775]], 0.85);
  tendril([[910, 792], [896, 772], [880, 760]], 0.7);
  tendril([[958, 722], [976, 708], [992, 700]], 0.7);
  for (const [u, v] of [[990, 650], [975, 640], [1002, 626], [950, 810], [975, 826], [960, 852]]) beadP(u, v, 0.75 * mm);
  sprayP([930, 660], [[990, 650], [975, 640], [1002, 626]], 0.7);
  sprayP([928, 805], [[950, 810], [975, 826], [960, 852]], 0.7);

  // stems that carry the blossoms and leaves (everything hangs off a vine, nothing floats)
  vine([[700, 880], [745, 822], [752, 804], [792, 772], [840, 742], [862, 706]], 0.36 * mm);
  vine([[790, 612], [730, 652], [640, 690], [600, 722], [560, 722]], 0.36 * mm);
  vine([[843, 622], [862, 626]], 0.3 * mm);
  vine([[835, 900], [800, 890], [772, 880], [735, 876], [700, 880]], 0.36 * mm);
  vine([[662, 812], [700, 792], [745, 822]], 0.34 * mm);
  vine([[640, 690], [655, 740], [662, 812]], 0.32 * mm);

  // ---- lower sector: fan of straight ribs running to the rim, with cross ties and small leaves ----
  vine([[500, 760], [560, 792], [640, 846], [700, 880]], 0.55 * mm);
  vine([[700, 880], [800, 950], [880, 1020]], 0.3 * mm);
  vine([[620, 890], [700, 985], [785, 1075]], 0.3 * mm);
  vine([[545, 925], [630, 1010], [720, 1100]], 0.3 * mm);
  vine([[520, 1010], [600, 1085], [650, 1122]], 0.3 * mm);
  vine([[700, 880], [655, 902], [600, 882]], 0.45 * mm);
  vine([[640, 812], [612, 836], [592, 862]], 0.4 * mm);
  beadP(700, 880, 0.9 * mm);
  leafP([632, 905], [656, 1000], 5, { lobed: true });
  leafP([772, 880], [722, 850], 3.4); leafP([772, 880], [806, 905], 3.2); leafP([826, 882], [872, 886], 3);
  leafP([700, 792], [662, 742], 3.6); leafP([560, 795], [603, 752], 3.2);
  leafP([790, 945], [750, 992], 3.4); leafP([620, 1000], [584, 1054], 3.4); leafP([690, 972], [730, 1018], 3);
  sprayP([560, 1010], [[500, 1040], [540, 1062], [580, 1090], [520, 1100], [480, 1080]], 0.95);
  sprayP([640, 1000], [[610, 1052], [650, 1034], [700, 1012]], 0.85);

  // ---- left half: dense vine leaves and bead sprays ----
  for (const [a, b, w] of [[[300, 650], [238, 598], 6], [[300, 650], [334, 588], 6], [[300, 650], [248, 704], 5.4], [[424, 712], [440, 646], 5],
    [[430, 720], [398, 786], 4.6], [[205, 482], [150, 432], 5], [[232, 520], [198, 574], 5], [[352, 562], [300, 520], 5],
    [[332, 232], [280, 180], 5], [[362, 182], [424, 132], 4.6], [[302, 302], [238, 290], 5], [[470, 152], [542, 112], 4.4],
    [[380, 840], [436, 800], 4.6], [[250, 760], [200, 720], 4.6], [[460, 600], [510, 560], 4.4], [[440, 960], [400, 1010], 4.4],
    [[150, 560], [112, 610], 4.6], [[520, 640], [476, 668], 4]])
    leafP(a, b, w * 0.8);
  vine([[380, 470], [330, 560], [300, 650], [310, 740], [330, 860]], 0.5 * mm);
  vine([[250, 255], [220, 330], [200, 430], [210, 520], [240, 600]], 0.45 * mm);
  vine([[300, 140], [360, 180], [430, 190], [540, 205]], 0.55 * mm);
  vine([[300, 855], [360, 885], [410, 910], [480, 890], [520, 870]], 0.6 * mm, { taper: [1, 0.7] });
  vine([[300, 740], [330, 760], [346, 790], [322, 802], [302, 786]], 0.45 * mm, { taper: [1, 0.5], seg: 1 * mm });
  vine([[330, 860], [300, 960], [300, 1060]], 0.4 * mm);
  vine([[150, 560], [130, 660], [160, 760]], 0.4 * mm);
  vine([[430, 720], [470, 780], [500, 760]], 0.4 * mm);
  sprayP([330, 200], [[275, 150], [300, 140], [285, 168]], 1.1);
  sprayP([230, 320], [[250, 255], [160, 355], [200, 375], [235, 385], [215, 402]], 1.3);
  sprayP([240, 500], [[200, 430], [230, 440], [250, 456], [215, 462], [190, 450]], 1.1);
  sprayP([300, 840], [[88, 710], [105, 690], [150, 790], [165, 812], [186, 800], [206, 842], [226, 766], [150, 722]], 1.15);
  sprayP([320, 900], [[215, 920], [250, 926], [276, 920], [240, 960], [256, 986], [276, 892], [306, 942]], 1.1);
  sprayP([330, 1000], [[296, 1086], [326, 1092], [350, 1086], [300, 1000], [330, 960]], 1.0);
  sprayP([100, 500], [[70, 470], [62, 520], [80, 560], [96, 430]], 1.0);
  sprayP([400, 560], [[360, 600], [382, 624], [420, 600]], 0.9);
  for (let i = 0; i < 8; i++) beadP(520 + i * 33, 70 + i * 7.5 + (i % 2) * 5, 1.0 * mm); // granulated run along the top edge
  vine([[505, 78], [640, 96], [760, 128]], 0.4 * mm);

  // ---- infill. The photo shows the whole dome covered but is too soft to trace piece by piece, so the gaps between the
  //      traced anchors get the motifs it does show (small teardrop leaves, five-petal florets with bead centres, bead sprays,
  //      scrolls) on a seeded jittered grid; the strip the photo cannot see (far left down to the rim, upper right behind
  //      the fingers) is ASSUMED to carry the same cover ----
  const motif = (d) => {
    const e1 = v3(0, 1, 0).cross(d).normalize(), e2 = d.clone().cross(e1), a = rnd(0, 6.283), k = rnd();
    const pt = (r, da = 0) => d.clone().addScaledVector(e1, (Math.cos(a + da) * r) / 50).addScaledVector(e2, (Math.sin(a + da) * r) / 50).normalize(); // r in mm
    if (k < 0.3) { // sprig of teardrop leaves
      vineD([pt(0), pt(2.6, 0.15), pt(5.2)], 0.34 * mm, { caps: false });
      leafD(pt(1.4), pt(6, 0.75), rnd(2.6, 3.3) * mm); leafD(pt(3.2), pt(7.4, -0.6), rnd(2.6, 3.3) * mm); leafD(pt(5.2), pt(9.6, 0.1), rnd(2.8, 3.4) * mm);
    } else if (k < 0.58) { // floret with a leaf
      blossomD(pt(0), rnd(2.2, 3) * mm, 5, 0.02, false);
      vineD([pt(0), pt(2.4, 0.2), pt(4.4)], 0.32 * mm, { caps: false });
      leafD(pt(3.4), pt(8, 0.3), rnd(2.6, 3.2) * mm);
    } else if (k < 0.86) sprayD(pt(0), [0, 1, 2, 3].slice(0, rnd() < 0.5 ? 3 : 4).map((i) => pt(rnd(3.6, 6), i * 0.5 - 0.75)), rnd(0.9, 1.3) * mm);
    else { // small scroll with a leaf
      vineD(Array.from({ length: 9 }, (_, i) => pt(3.2 - i * 0.3, i * 0.95)), 0.4 * mm, { taper: [1, 0.5], seg: 1 * mm });
      leafD(pt(3.2), pt(7.6, -0.5), 3 * mm);
    }
    vineD([pt(0), pt(4.2, 2.6), pt(8.5, 3.1)], 0.36 * mm, { caps: false, seg: 2.6 * mm }); // tie to the neighbouring motif
  };
  const CELL = 94;
  for (let v = 70; v < 1130; v += CELL)
    for (let u = 60; u < 1040; u += CELL) {
      const x = u + rnd(-22, 22), y = v + rnd(-22, 22);
      if (Math.hypot(x - CX, y - CY) > 525 || (x - CX) / PX > 0.76 * Math.sqrt(Math.max(0, 1 - ((y - CY) / PX) ** 2))) continue; // outside the dome / past the rim
      const insect = (x > 320 && x < 600 && y > 185 && y < 600) || (x >= 600 && x < 910 && y > 110 && y < 310) || (x > 560 && x < 730 && y > 200 && y < 440);
      const d = ph(x, y);
      if (insect || d.dot(camD) < 0.3 || d.z < 0.17) continue; // keep clear of the rim
      motif(d);
    }
  for (const phi of [58, 69, 80]) { // far-left strip, seen edge-on or not at all
    const n = Math.round((170 * Math.sin((phi * Math.PI) / 180)) / 11.5);
    for (let i = 0; i <= n; i++) {
      const d = sph(phi + rnd(-3, 3), 96 + (170 * i) / n + rnd(-3, 3));
      if (d.dot(camD) < 0.3) motif(d);
    }
  }
  for (let a = 104; a <= 258; a += 14) vineD([sph(90, a), sph(80, a + 4), sph(68, a - 3), sph(56, a + 4), sph(46, a + rnd(-4, 4))], 0.42 * mm);

  // ---- ASSUMED: upper right behind the fingers — only stems tying the rim to the visible work ----
  for (const al of [20, 42, 64, 84]) vineD([sph(90, al), sph(74, al + 5), sph(58, al + 2)], 0.38 * mm);
  for (const al of [-12, -40]) vineD([sph(90, al), sph(80, al + 4), sph(68, al)], 0.34 * mm);

  g.position.z = -R / 2; // centre the piece
  const root = new THREE.Group();
  root.add(g);
  return root;
}
