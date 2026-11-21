// Modelling helpers for the Kavya Potluri jewellery (three.js r186, same as the game).
// Conventions: metres; +Y is up; the FRONT of every piece faces +Z.
// Build a piece out of these primitives, mark animatable sub-groups with `userData.part = true`,
// and `bake()` merges everything per material (one mesh per material per part) for the game.
import * as THREE from 'three';
import { mergeGeometries } from 'three/addons/utils/BufferGeometryUtils.js';

export { THREE };
export const V = (p) => (p.isVector3 ? p.clone() : new THREE.Vector3(p[0], p[1], p[2] ?? 0));

// Material NAMES are the contract with the game: the gallery swaps `Gold`, `Pearl`, `Emerald`, `Ruby`
// for its own shared materials; other names are used as authored (keep them few).
export const MAT = {
  gold: new THREE.MeshPhysicalMaterial({ name: 'Gold', color: '#e7bd72', metalness: 1, roughness: 0.24, clearcoat: 0.25, clearcoatRoughness: 0.2 }),
  goldAntique: new THREE.MeshStandardMaterial({ name: 'GoldAntique', color: '#a97b38', metalness: 1, roughness: 0.45 }),
  pearl: new THREE.MeshPhysicalMaterial({ name: 'Pearl', color: '#f2ebdf', metalness: 0, roughness: 0.22, clearcoat: 1, clearcoatRoughness: 0.08, sheen: 0.6, sheenColor: new THREE.Color('#ffe9d2') }),
  crystal: new THREE.MeshPhysicalMaterial({ name: 'Crystal', color: '#ffffff', metalness: 0.15, roughness: 0.02, clearcoat: 1, ior: 2.0, envMapIntensity: 2.5 }),
  lens: new THREE.MeshPhysicalMaterial({ name: 'Lens', color: '#21140b', metalness: 0.25, roughness: 0.04, clearcoat: 1, transparent: true, opacity: 0.92 }),
};

// ---------- curves ----------
export function curve(points, { closed = false, tension = 0.5 } = {}) {
  return new THREE.CatmullRomCurve3(points.map(V), closed, 'catmullrom', tension);
}
// Flat spiral in a plane (default XY, facing +Z): from radius r0 to r1 over `turns`, starting at angle a0.
export function spiral({ center = [0, 0, 0], r0 = 0.01, r1 = 0.002, turns = 1.5, a0 = 0, dir = 1, n = 48, z = 0, plane = 'xy' } = {}) {
  const c = V(center), pts = [];
  for (let i = 0; i <= n; i++) {
    const t = i / n, a = a0 + dir * t * turns * Math.PI * 2, r = r0 + (r1 - r0) * t;
    const p = plane === 'xz' ? [Math.cos(a) * r, z * t, Math.sin(a) * r] : [Math.cos(a) * r, Math.sin(a) * r, z * t];
    pts.push(new THREE.Vector3(...p).add(c));
  }
  return pts;
}

// ---------- primitives (all return THREE.Mesh or THREE.Group) ----------
// A round wire along points. taper: [startScale, endScale] or fn(t)->scale. Rounded end caps.
export function wire(points, radius, { taper, closed = false, radial = 8, caps = true, mat = MAT.gold, tension = 0.5, segLen } = {}) {
  const c = points.isCurve ? points : curve(points, { closed, tension });
  const len = c.getLength();
  const tubular = Math.min(600, Math.max(3, Math.ceil(len / (segLen ?? Math.max(radius * 1.8, len / 240)))));
  const geo = new THREE.TubeGeometry(c, tubular, radius, radial, closed);
  const tf = typeof taper === 'function' ? taper : taper ? (t) => taper[0] + (taper[1] - taper[0]) * t : null;
  if (tf) {
    const pos = geo.attributes.position, ctr = new THREE.Vector3(), v = new THREE.Vector3();
    for (let i = 0; i <= tubular; i++) {
      c.getPointAt(i / tubular, ctr);
      const s = Math.max(0.05, tf(i / tubular));
      for (let j = 0; j <= radial; j++) {
        const k = i * (radial + 1) + j;
        v.fromBufferAttribute(pos, k).sub(ctr).multiplyScalar(s).add(ctr);
        pos.setXYZ(k, v.x, v.y, v.z);
      }
    }
  }
  const parts = [geo];
  if (caps && !closed)
    for (const t of [0, 1]) {
      const r = radius * (tf ? Math.max(0.05, tf(t)) : 1);
      parts.push(new THREE.SphereGeometry(r, radial, Math.max(4, radial >> 1)).translate(...c.getPointAt(t).toArray()));
    }
  return new THREE.Mesh(mergeGeometries(parts.map(prep)), mat);
}

export function bead(r, at = [0, 0, 0], mat = MAT.gold, seg = 12) {
  const m = new THREE.Mesh(new THREE.SphereGeometry(r, seg, Math.max(6, seg >> 1)), mat);
  m.position.copy(V(at));
  return m;
}

// Round brilliant-ish stone, table facing +Z. r = girdle radius.
export function gem(r, at = [0, 0, 0], mat = MAT.crystal, facets = 10) {
  const crown = new THREE.CylinderGeometry(r * 0.58, r, r * 0.32, facets, 1).rotateX(Math.PI / 2).translate(0, 0, r * 0.16);
  const pav = new THREE.ConeGeometry(r, r * 0.7, facets, 1).rotateX(-Math.PI / 2).translate(0, 0, -r * 0.35);
  const m = new THREE.Mesh(mergeGeometries([crown.toNonIndexed(), pav.toNonIndexed()].map(prep)), mat);
  m.geometry.computeVertexNormals();
  m.position.copy(V(at));
  return m;
}

// Beads strung along a curve (bead-chain, granulation lines, tassels).
export function chain(points, r, { spacing = 2.4, mat = MAT.gold, seg = 8 } = {}) {
  const c = points.isCurve ? points : curve(points);
  const n = Math.max(2, Math.round(c.getLength() / (r * spacing)));
  const g = new THREE.Group();
  for (let i = 0; i <= n; i++) g.add(bead(r, c.getPointAt(i / n), mat, seg));
  return g;
}

// A thin solid leaf/petal blade with a raised midrib. Base at the origin, tip at +Y*length, face toward +Z.
//  shape <1 moves the widest point toward the base; tip >1 sharpens the tip, <1 rounds it (petals ~0.5).
//  cup: edges curl back (+) or forward (-); bend: tip bends toward +Z (+) or back (-); twist: radians along length.
//  veins: side-vein pairs (engraved look); notch: depth of a notch at the tip (heart petals).
export function leaf({ length = 0.03, width = 0.012, shape = 0.85, tip = 1.3, cup = 0.3, bend = 0.12, twist = 0, thick = 0.0005, segU = 20, segV = 6, rib = true, ribR, veins = 0, notch = 0, mat = MAT.gold } = {}) {
  const W = (u) => (width / 2) * Math.pow(Math.max(0, Math.sin(Math.PI * Math.pow(u, shape))), tip);
  const P = (u, v, side) => {
    const w = W(u) * v;
    let y = u * length;
    if (notch) y -= notch * length * Math.exp(-Math.pow(v / 0.35, 2)) * Math.pow(u, 6);
    let z = -cup * width * 0.5 * v * v * Math.sin(Math.PI * Math.min(1, u * 1.1)) + bend * length * u * u + (side * thick) / 2;
    const a = twist * u;
    return [w * Math.cos(a) - z * Math.sin(a), y, w * Math.sin(a) + z * Math.cos(a)];
  };
  const pos = [], uv = [], idx = [];
  const nv = segV + 1, grid = (side) => {
    const base = pos.length / 3;
    for (let i = 0; i <= segU; i++)
      for (let j = 0; j <= segV; j++) {
        const u = i / segU, v = (j / segV) * 2 - 1;
        pos.push(...P(u, v, side)); uv.push(u, (v + 1) / 2);
      }
    for (let i = 0; i < segU; i++)
      for (let j = 0; j < segV; j++) {
        const a = base + i * nv + j, b = a + nv, c = a + 1, d = b + 1;
        side > 0 ? idx.push(a, c, b, c, d, b) : idx.push(a, b, c, c, b, d);
      }
    return base;
  };
  const F = grid(1), B = grid(-1);
  for (const j of [0, segV]) // stitch the two long edges
    for (let i = 0; i < segU; i++) {
      const f0 = F + i * nv + j, f1 = f0 + nv, b0 = B + i * nv + j, b1 = b0 + nv;
      j === 0 ? idx.push(f0, f1, b0, b0, f1, b1) : idx.push(f0, b0, f1, f1, b0, b1);
    }
  const blade = new THREE.BufferGeometry();
  blade.setAttribute('position', new THREE.Float32BufferAttribute(pos, 3));
  blade.setAttribute('uv', new THREE.Float32BufferAttribute(uv, 2));
  blade.setIndex(idx);
  blade.computeVertexNormals();
  const geos = [prep(blade)];
  const rr = ribR ?? Math.max(thick * 0.9, width * 0.035);
  const mid = (u) => new THREE.Vector3(...P(u, 0, 1)).add(new THREE.Vector3(0, 0, rr * 0.4));
  if (rib) geos.push(wire(Array.from({ length: 9 }, (_, i) => mid(0.02 + (i / 8) * 0.9)), rr, { taper: [1, 0.35], radial: 6 }).geometry);
  for (let k = 1; k <= veins; k++) {
    const u0 = 0.12 + (k / (veins + 1)) * 0.72;
    for (const s of [-1, 1]) {
      const pts = [0, 0.33, 0.66, 0.92].map((f) => {
        const u = Math.min(0.98, u0 + f * 0.16), v = s * f * 0.92;
        return new THREE.Vector3(...P(u, v, 1)).add(new THREE.Vector3(0, 0, rr * 0.25));
      });
      geos.push(wire(pts, rr * 0.45, { taper: [1, 0.4], radial: 5 }).geometry);
    }
  }
  return new THREE.Mesh(mergeGeometries(geos), mat);
}

// A flower facing +Z. layers>1 makes rose/ranunculus forms (inner layers smaller and more upright).
//  cup 0 = flat, 1 = deep cup. center: 'bead' | 'pearl' | 'cluster' | 'crystal' | null.
export function flower({ petals = 5, radius = 0.01, petalWidth = 1.0, cup = 0.45, layers = 1, center = 'bead', centerR, spin = 0, petalTip = 0.55, petalCup = 0.35, veins = 0, mat = MAT.gold, thick = 0.0005 } = {}) {
  const g = new THREE.Group();
  for (let L = 0; L < layers; L++) {
    const r = radius * (1 - (L / Math.max(1, layers)) * 0.62);
    const n = layers > 1 ? petals + (L % 2) : petals;
    const tilt = Math.min(1.45, cup * (0.55 + (L / Math.max(1, layers - 1 || 1)) * 0.9) * (layers > 1 ? 1.2 : 1));
    const w = ((2 * Math.PI * r) / n) * 0.62 * petalWidth;
    for (let i = 0; i < n; i++) {
      const p = leaf({ length: r, width: w, shape: 0.62, tip: petalTip, cup: petalCup, bend: -0.12 * cup, thick, rib: false, veins, mat });
      const h = new THREE.Group();
      p.rotation.x = tilt; // tilt toward +Z
      h.add(p);
      h.rotation.z = spin + (i / n) * Math.PI * 2 + L * (Math.PI / n);
      h.position.z = L * radius * 0.08;
      g.add(h);
    }
  }
  const cr = centerR ?? radius * 0.24;
  if (center === 'pearl') g.add(bead(cr, [0, 0, cr * 0.6], MAT.pearl, 16));
  else if (center === 'crystal') g.add(gem(cr, [0, 0, cr * 0.4]));
  else if (center === 'bead') g.add(bead(cr, [0, 0, cr * 0.5], mat));
  else if (center === 'cluster') {
    g.add(bead(cr * 0.55, [0, 0, cr * 0.6], mat));
    for (let i = 0; i < 7; i++) {
      const a = (i / 7) * Math.PI * 2;
      g.add(bead(cr * 0.34, [Math.cos(a) * cr * 0.7, Math.sin(a) * cr * 0.7, cr * 0.4], mat));
    }
  }
  return g;
}

// Mirror an object across the YZ plane (x -> -x). bake() fixes the winding.
export function mirrorX(obj) {
  const g = new THREE.Group();
  g.scale.x = -1;
  g.add(obj.clone(true));
  return g;
}
// Place `obj` at `at`, with its +Y axis pointing along `dir` and optional spin about that axis.
export function orient(obj, at, dir, spin = 0) {
  obj.position.copy(V(at));
  obj.quaternion.setFromUnitVectors(new THREE.Vector3(0, 1, 0), V(dir).normalize());
  if (spin) obj.quaternion.multiply(new THREE.Quaternion().setFromAxisAngle(new THREE.Vector3(0, 1, 0), spin));
  return obj;
}

// ---------- baking ----------
function prep(geo, flip = false) {
  let g = geo.index ? geo : geo.setIndex([...Array(geo.attributes.position.count).keys()]);
  for (const k of Object.keys(g.attributes)) if (!['position', 'normal', 'uv'].includes(k)) g.deleteAttribute(k);
  if (!g.attributes.normal) g.computeVertexNormals();
  if (!g.attributes.uv) g.setAttribute('uv', new THREE.Float32BufferAttribute(new Float32Array(g.attributes.position.count * 2), 2));
  if (flip) {
    const ix = g.index.array;
    for (let i = 0; i < ix.length; i += 3) [ix[i + 1], ix[i + 2]] = [ix[i + 2], ix[i + 1]];
    g.index.needsUpdate = true;
  }
  g.morphAttributes = {};
  g.clearGroups();
  return g;
}
export { prep };

// Merge every mesh per material. Descendants flagged `userData.part = true` stay separate nodes,
// keep their transform (= their pivot) and name, so the game can animate them.
export function bake(root) {
  root.updateMatrixWorld(true);
  const build = (part, parentWorld) => {
    const out = new THREE.Group();
    out.name = part.name || '';
    new THREE.Matrix4().copy(parentWorld).invert().multiply(part.matrixWorld).decompose(out.position, out.quaternion, out.scale);
    const inv = new THREE.Matrix4().copy(part.matrixWorld).invert(), buckets = new Map();
    const add = (m) => {
      const mm = new THREE.Matrix4().multiplyMatrices(inv, m.matrixWorld);
      const geo = prep(m.geometry.clone().applyMatrix4(mm), mm.determinant() < 0);
      if (!buckets.has(m.material)) buckets.set(m.material, []);
      buckets.get(m.material).push(geo);
    };
    if (part.isMesh) add(part);
    const visit = (n) => {
      for (const c of n.children) {
        if (c.userData.part) { out.add(build(c, part.matrixWorld)); continue; }
        if (c.isMesh) add(c);
        visit(c);
      }
    };
    visit(part);
    for (const [mat, geos] of buckets) {
      const mesh = new THREE.Mesh(mergeGeometries(geos), mat);
      mesh.name = `${out.name || 'piece'}_${mat.name}`;
      out.add(mesh);
    }
    return out;
  };
  return build(root, root.matrixWorld);
}

export function stats(obj) {
  let tris = 0, meshes = 0;
  const mats = new Set();
  obj.traverse((m) => {
    if (!m.isMesh) return;
    meshes++;
    mats.add(m.material.name);
    tris += (m.geometry.index ? m.geometry.index.count : m.geometry.attributes.position.count) / 3;
  });
  const s = new THREE.Box3().setFromObject(obj).getSize(new THREE.Vector3());
  return { triangles: Math.round(tris), meshes, materials: [...mats], sizeMeters: s.toArray().map((v) => +v.toFixed(4)) };
}
