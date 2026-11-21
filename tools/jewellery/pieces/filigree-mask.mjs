// Kavya Potluri gold filigree face mask (refs 1.jpg frontal, 2.jpg 3/4).
// Layout is drawn in the frontal photo's pixel space (origin = nose bridge, y up) and lifted onto a face surface.
import { THREE, MAT, wire, leaf, mirrorX } from '../lib.mjs';
import { rng, lowBead, place, rose, bloom, surfaceKit, makeFiligree } from './_kp-util.mjs';

const S = 0.00051; // metres per reference pixel (mask ≈ 17 cm wide)
const sm = (a, b, v) => { const t = Math.min(1, Math.max(0, (v - a) / (b - a))); return t * t * (3 - 2 * t); };
function surf(x, y) {
  const u = Math.min(0.985, Math.abs(x) / 0.092);
  let z = -0.07 * (1 - Math.sqrt(1 - u * u));
  z -= (y > 0 ? 5.5 : 1.5) * y * y;
  z += 0.01 * Math.exp(-((x / 0.012) ** 2)) * sm(0.012, -0.02, y) * sm(-0.06, -0.04, y); // nose flanks
  return z;
}
const { lift, normalAt } = surfaceKit(surf, S);

// eye opening (right half): pointed almond
const EYE = { cx: 81, cy: -3, a: 64, b: 32 };
const eyeH = (x) => { const u = (x - EYE.cx) / EYE.a; return Math.abs(u) >= 1 ? -1 : EYE.b * Math.pow(1 - u * u, 0.9); };
const blocked = (pts, m = 4) => pts.some(([x, y]) => x < 3 || Math.abs(y - EYE.cy) < eyeH(x) + m);

export function build() {
  const root = new THREE.Group(), half = new THREE.Group(), R = rng(7);
  const { vine, beads, fill } = makeFiligree({ lift, normalAt, blocked, group: half, R });

  // ---- eye rim (thicker, smooth) + temple band ----
  const rim = (s) => Array.from({ length: 25 }, (_, i) => { const x = EYE.cx - EYE.a + (i / 24) * 2 * EYE.a; return lift([x, EYE.cy + s * Math.max(0, eyeH(x))], 0.001); });
  half.add(wire(rim(1), 0.00115, { radial: 8, segLen: 0.0025 }), wire(rim(-1), 0.00115, { radial: 8, segLen: 0.0025 }));
  const tb = leaf({ length: 0.045, width: 0.0105, shape: 0.5, tip: 1.0, cup: 0, bend: 0, rib: false, segU: 8, segV: 2, thick: 0.0009 });
  half.add(place(tb, lift([143, -3], 0.001), new THREE.Vector3(0.2, -0.12, -1), new THREE.Vector3(1, 0, 0.15)));

  // ---- upper fan: wires rise from the nose bridge and arc out over the brow / forehead ----
  const U = [
    [[5, 4], [5, 50], [7, 100], [9, 150], [5, 188]],
    [[7, 4], [8, 50], [14, 95], [28, 140], [40, 180]],
    [[9, 4], [11, 44], [20, 82], [40, 120], [62, 152], [74, 172]],
    [[10, 4], [13, 40], [24, 70], [48, 98], [80, 124], [104, 146]],
    [[11, 4], [15, 34], [28, 58], [54, 78], [90, 96], [124, 118]],
    [[12, 4], [16, 28], [30, 48], [58, 62], [94, 72], [126, 82], [146, 96]],
    [[13, 4], [18, 24], [34, 40], [62, 50], [96, 54], [128, 54], [150, 62]],
    [[14, 5], [20, 19], [36, 33], [62, 42], [94, 43], [124, 35], [146, 19], [154, 2]],
  ].map((c, i) => vine(c, { curl: i < 2 ? -4.5 : i % 2 ? -4.6 : 4.4, branches: i === 7 ? 6 : 9 }));
  beads(U[0], U[1], 0.45); beads(U[1], U[2]); beads(U[2], U[3], 0.4); beads(U[3], U[4]); beads(U[4], U[5], 0.4); beads(U[5], U[6], 0.35); beads(U[6], U[7], 0.5, 0.9);

  // ---- lower fan: down the sides of the nose, peeling out under the eye and toward the mouth corner ----
  const L = [
    [[13, -4], [20, -18], [36, -30], [62, -38], [94, -39], [124, -32], [146, -18], [153, -6]],
    [[13, -6], [18, -24], [34, -40], [60, -50], [92, -54], [120, -50], [140, -40]],
    [[12, -6], [16, -30], [30, -50], [56, -63], [88, -68], [114, -66], [132, -58]],
    [[12, -6], [15, -36], [26, -60], [50, -78], [80, -88], [106, -94], [124, -100]],
    [[11, -6], [14, -42], [22, -70], [42, -94], [68, -110], [94, -124], [112, -134]],
    [[11, -6], [13, -46], [19, -78], [32, -106], [52, -128], [70, -144]],
    [[10, -6], [12, -50], [17, -84], [24, -112], [34, -136], [44, -150]],
    [[10, -6], [11, -50], [15, -84], [16, -104], [11, -118]],
  ].map((c, i) => vine(c, { curl: i === 7 ? -4.5 : i > 2 ? 0 : i % 2 ? 4.6 : -4.4, branches: i === 7 ? 3 : 7, from: i === 7 ? 0.6 : 0.42 }));
  beads(L[0], L[1], 0.45, 0.9); beads(L[1], L[2]); beads(L[2], L[3], 0.4, 0.9); beads(L[3], L[4], 0.35, 0.9); beads(L[4], L[5], 0.45, 0.9); beads(L[5], L[6], 0.4, 0.9);
  fill(230); // dense lacework fill on forehead and cheeks

  // ---- 3D roses at the mouth / jaw corner, small blossoms at the outer eye corner and forehead edge ----
  const face = (obj, p, off) => half.add(place(obj, lift(p, off), new THREE.Vector3(0, 1, 0), normalAt(p)));
  face(rose(0.0125, 0.2), [130, -104], 0.004);
  face(rose(0.0105, 1.0), [118, -140], 0.0035);
  face(rose(0.0105, 0.5), [76, -150], 0.0035);
  face(bloom(0.006, 5, 0.3), [46, -153], 0.002);
  face(bloom(0.0045, 5, 0), [160, 0], 0.002);
  face(bloom(0.004, 5, 0.6), [163, -17], 0.002);
  face(bloom(0.004, 5, 0.9), [160, 18], 0.002);
  [[18, 198], [52, 188], [88, 168], [120, 142], [144, 110], [154, 74], [32, 152], [72, 132], [106, 104]]
    .forEach((p, i) => face(bloom(i < 6 ? 0.0056 : 0.0048, 5, i * 0.7), p, 0.002));

  root.add(half, mirrorX(half));
  // ---- bridge bar joining the two eye rims; bead column between the two forehead bundles ----
  root.add(wire([[-17, -3], [-8, -1], [0, 0], [8, -1], [17, -3]].map((p) => lift(p, 0.001)), 0.00095, { radial: 8, segLen: 0.002 }));
  for (let i = 0; i < 16; i++) root.add(lowBead(0.0011 - i * 0.00003, lift([0, 9 + i * 6.5], 0.0008), 6));
  return root;
}
