// Kavya Potluri revision helpers. Readable source, bundled with src/app.js (the de-minified original) by esbuild.
// Jewellery GLBs are built in tools/jewellery (metres, front faces +Z). The missing piece of the story is the
// Floral Ear Cuff (assets/models/collection/floral-ear-cuff.glb). Its named parts — cuff, beads, buds,
// leaf_01…, flower_01… — each have their origin at the point where they attach, so they can be assembled.
import { Box3, CatmullRomCurve3, CylinderGeometry, Group, Mesh, MeshStandardMaterial, Quaternion, SphereGeometry, Vector3 } from 'three';

const X = new Vector3(1, 0, 0), Z = new Vector3(0, 0, 1), _q = new Quaternion();
const clamp01 = (x) => Math.min(1, Math.max(0, x));
const easeOut = (x) => 1 - (1 - x) ** 3;

/** Centre `obj` on a new Group and scale it so its largest side measures `size` metres. */
export function fitTo(obj, size) {
  obj.updateMatrixWorld(true);
  const box = new Box3().setFromObject(obj);
  const dim = box.getSize(new Vector3()), c = box.getCenter(new Vector3());
  const s = size / Math.max(dim.x, dim.y, dim.z);
  obj.scale.multiplyScalar(s);
  obj.position.sub(c).multiplyScalar(s);
  const g = new Group();
  g.add(obj);
  return g;
}

/** Turn `obj` so its local direction `dir` ([x,y,z]) points at the viewer (+Z). */
export function faceViewer(obj, dir) {
  obj.quaternion.setFromUnitVectors(new Vector3(...dir).normalize(), Z);
  return obj;
}

// Authored material names that have a plain (untextured) twin in the game's palette.
const SHARED = { Gold: 'gold', Pearl: 'pearl', Brass: 'brass', BrassDark: 'brassDark', Copper: 'copper',
  CeramicTeal: 'ceramicTeal', CeramicCream: 'ceramicCream', CeramicOchre: 'ceramicOchre', Clay: 'clay',
  Velvet: 'velvet', VelvetRed: 'velvetRed', Emerald: 'emerald', Ruby: 'ruby' };

/** Swap authored materials for the game's shared ones by name (`override` maps name -> material). */
export function useGameMaterials(obj, M, override = {}) {
  obj.traverse((m) => {
    if (!m.isMesh) return;
    m.castShadow = true;
    const name = m.material?.name;
    const mat = override[name] ?? (SHARED[name] && M[SHARED[name]]);
    if (mat) m.material = mat;
  });
  return obj;
}

// ---------- Floral Ear Cuff ----------
// Kept in WeakMaps, not userData: Object3D.clone() JSON-copies userData.
const partsOf = new WeakMap(), homeOf = new WeakMap();

export function cuffParts(root) {
  let P = partsOf.get(root);
  if (P) return P;
  P = { cuff: null, beads: null, buds: null, leaves: [], flowers: [] };
  root.traverse((o) => {
    const n = o.name;
    if (n === 'cuff' || n === 'beads' || n === 'buds') P[n] = o;
    else if (/^leaf_\d+$/.test(n)) P.leaves.push(o);
    else if (/^flower_\d+$/.test(n)) P.flowers.push(o);
    else return;
    homeOf.set(o, { q: o.quaternion.clone(), s: o.scale.clone() });
  });
  const byName = (a, b) => a.name.localeCompare(b.name);
  P.leaves.sort(byName);
  P.flowers.sort(byName);
  partsOf.set(root, P);
  return P;
}

/**
 * Assemble the cuff for t in [0, 1]: the frame first, then the leaves unfurl (done by 0.6 — the workshop's
 * pour step), the blossoms open (0.62–0.88 — engraving), buds and beads last (setting). t = 1 is the real piece.
 */
export function cuffAssemble(root, t) {
  const P = cuffParts(root);
  const set = (o, u, axis, angle) => {
    if (!o) return;
    const h = homeOf.get(o), e = easeOut(clamp01(u));
    o.visible = u > 0;
    o.scale.copy(h.s).multiplyScalar(Math.max(0.001, e));
    o.quaternion.copy(h.q);
    if (axis) o.quaternion.multiply(_q.setFromAxisAngle(axis, (1 - e) * angle));
  };
  set(P.cuff, t / 0.25);
  P.leaves.forEach((o, i, a) => set(o, (t - 0.15 - (i / a.length) * 0.25) / 0.2, X, -1.3));
  P.flowers.forEach((o, i, a) => set(o, (t - 0.62 - (i / a.length) * 0.16) / 0.1, Z, 2.2));
  set(P.buds, (t - 0.82) / 0.12);
  set(P.beads, (t - 0.88) / 0.12);
}

/** A standalone copy of one leaf or blossom of the cuff, origin at its attachment point. */
export function cuffPart(root, kind, i = 0) {
  const P = cuffParts(root), list = kind === 'leaf' ? P.leaves : P.flowers;
  const c = list[i % list.length].clone();
  c.position.set(0, 0, 0);
  c.quaternion.identity();
  c.scale.set(1, 1, 1);
  c.visible = true;
  return c;
}

/** Indices of the cuff's blossoms, largest first. */
export function cuffFlowersBySize(root) {
  const P = cuffParts(root), size = new Vector3();
  return P.flowers
    .map((f, i) => ({ i, d: new Box3().setFromObject(cuffPart(root, 'flower', i)).getSize(size).length() }))
    .sort((a, b) => b.d - a.d)
    .map((e) => e.i);
}

/** A cuff leaf scaled to `length` metres, pointing along +X from the origin (like the old procedural leaves). */
export function cuffLeafAlongX(root, i, length) {
  const c = cuffPart(root, 'leaf', i);
  const s = length / Math.max(1e-6, new Box3().setFromObject(c).getSize(new Vector3()).y);
  c.scale.setScalar(s);
  c.rotation.z = -Math.PI / 2;
  const g = new Group();
  g.add(c);
  return g;
}

/** A cuff blossom scaled to `diameter` metres, facing +Z; userData.petalMesh is the blossom itself. */
export function cuffFlowerSized(root, i, diameter) {
  const c = cuffPart(root, 'flower', i);
  const d = new Box3().setFromObject(c).getSize(new Vector3());
  c.scale.setScalar(diameter / Math.max(1e-6, d.x, d.y));
  const g = new Group();
  g.add(c);
  g.userData.petalMesh = c;
  return g;
}

// ---------- Gold Souk dressing: props kit (tools/jewellery/pieces/prop-*.mjs) ----------
export const PROPS = ['prop-lantern-star', 'prop-lantern-dome', 'prop-lantern-hex', 'prop-lantern-tall', 'prop-lantern-small',
  'prop-dallah', 'prop-ewer', 'prop-brass-vase', 'prop-oil-lamp', 'prop-metal-box', 'prop-tray', 'prop-bells',
  'prop-bowl-a', 'prop-bowl-b', 'prop-vase-a', 'prop-vase-b', 'prop-jar', 'prop-jewel-box', 'prop-mirror',
  'prop-textile-stack', 'prop-carpet-roll', 'prop-carpet-flat', 'prop-pearl-strands', 'prop-bangles'];
const LANTERNS = PROPS.slice(0, 5);
const NAMES = { 'prop-dallah': 'Brass dallah', 'prop-ewer': 'Copper ewer', 'prop-brass-vase': 'Engraved vase', 'prop-oil-lamp': 'Oil lamp' };

export function rng(seed) {
  let a = seed >>> 0;
  return () => {
    a = (a + 0x6d2b79f5) | 0;
    let t = Math.imul(a ^ (a >>> 15), 1 | a);
    t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}

/** Once, after loading: game materials, shadows, warmer carved wood. */
export function prepareProps(props, M) {
  for (const scene of Object.values(props)) {
    useGameMaterials(scene, M);
    scene.traverse((m) => {
      if (!m.isMesh) return;
      m.receiveShadow = true;
      if (m.material.name === 'CarvedWood') m.material.color.set('#8d6c52');
      if (/^Carpet|^Textile/.test(m.material.name)) m.material.color.set('#b9a796'), (m.material.roughness = 0.95); // woven, not printed
    });
  }
}

/**
 * Dress the souk stalls and beams with the props kit. Returns the interactive items (lift, boxes, lanterns,
 * carpets), extra light candidates for the light pool, and the shared lantern glass to flicker.
 */
export function dressSouk({ props, group, rows, bays, left, right, M, seed = 1307 }) {
  const r = rng(seed);
  const kp = { glass: null, lift: [], boxes: [], lanterns: [], carpets: [], lights: [], statics: [], anims: new Set() };
  if (!props || !props['prop-dallah']) return kp;
  const glass = (kp.glass = new MeshStandardMaterial({ name: 'LampGlass', color: '#ffcf8f', emissive: '#ff9a3c', emissiveIntensity: 1.7, roughness: 0.4, side: 2 }));
  const face = (s) => (s < 0 ? Math.PI / 2 : -Math.PI / 2);
  const place = (id, x, y, z, rotY = 0, dyn = false) => {
    const src = props[id];
    if (!src) return null;
    const o = src.clone(true);
    o.position.set(x, y, z);
    o.rotation.y = rotY;
    o.traverse((m) => m.isMesh && m.material.name === 'LampGlass' && (m.material = glass));
    group.add(o);
    if (dyn) o.userData.dynamic = true;
    else kp.statics.push(o);
    return o;
  };
  const chain = (x, y0, y1, z) => {
    const c = new Mesh(new CylinderGeometry(0.006, 0.006, y0 - y1, 5), M.brassDark);
    c.position.set(x, (y0 + y1) / 2, z);
    group.add(c);
    kp.statics.push(c);
  };
  const lantern = (id, x, hookY, z, interactive) => {
    const o = place(id, x, hookY, z, r() * Math.PI * 2, interactive);
    const h = new Box3().setFromObject(o).getSize(new Vector3()).y;
    kp.lights.push({ position: new Vector3(x, hookY - h * 0.55, z), color: '#ffb35e', intensity: 1.4, distance: 4.2, flicker: true });
    if (interactive) {
      const mat = glass.clone();
      o.traverse((m) => m.isMesh && m.material === glass && (m.material = mat));
      kp.lanterns.push({ obj: o, mat, boost: 0, pos: new Vector3(x, hookY - h * 0.55, z) });
    }
    return o;
  };

  // Lanterns on the market beams (y 5.4) — not at the inner archways or the entrance arch, where they would clip.
  rows.forEach((z, n) => {
    if (n === 0 || n === rows.length - 1 || Math.abs(z + 11.1) < 0.2 || Math.abs(z + 23.7) < 0.2) return;
    for (const s of [-1, 1]) {
      const id = LANTERNS[(n * 2 + (s > 0 ? 1 : 0) + Math.floor(r() * 2)) % LANTERNS.length];
      const x = s * (1.5 + r() * 0.55), hook = 4.25 + r() * 0.55;
      chain(x, 5.29, hook, z);
      lantern(id, x, hook, z, (n + (s > 0 ? 1 : 0)) % 2 === 0);
    }
  });
  // …and one under each fabric awning between the rows (the "fabric-covered passages").
  rows.slice(0, -1).forEach((z, n) => {
    if (n % 3 === 2 || n === 0) return;
    const x = (r() - 0.5) * 1.4, zz = z - 2.1 + (r() - 0.5) * 0.8, hook = 4.55 + r() * 0.35;
    chain(x, 5.32, hook, zz);
    lantern(LANTERNS[(n + 2) % LANTERNS.length], x, hook, zz, false);
  });

  const TABLE = { ceramics: [[0, 2, 4, 6], (t) => -1.4 + t * 0.46], brass: [[0, 2, 4], (t) => -1.35 + t * 0.54], lanterns: [[0, 2, 4], (t) => -1.3 + t * 0.65] };
  const SETS = {
    ceramics: [['prop-bowl-a', 'prop-vase-a', 'prop-jar', 'prop-bowl-b'], ['prop-vase-b', 'prop-bowl-b', 'prop-vase-a', 'prop-jar'], ['prop-jar', 'prop-bowl-a', 'prop-vase-b', 'prop-vase-a']],
    brass: [['prop-dallah', 'prop-brass-vase', 'prop-ewer'], ['prop-oil-lamp', 'prop-ewer', 'prop-dallah']],
    lanterns: [['prop-oil-lamp', 'prop-metal-box', 'prop-brass-vase'], ['prop-metal-box', 'prop-dallah', 'prop-oil-lamp']],
  };
  const seen = {};
  const stall = (s, z, type) => {
    const k = (seen[type] = (seen[type] ?? -1) + 1), tx = s * 2.95;
    if (TABLE[type]) {
      const [slots, at] = TABLE[type], set = SETS[type][k % SETS[type].length];
      slots.forEach((t, i) => {
        const id = set[i % set.length], lift = type === 'brass' || (type === 'lanterns' && id !== 'prop-metal-box');
        const o = place(id, tx + (r() - 0.5) * 0.08, 0.85, z + at(t), face(s) + (r() - 0.5) * 0.5, lift || id === 'prop-metal-box');
        if (lift && o) kp.lift.push({ obj: o, name: NAMES[id] || 'Brass piece', y: o.position.y, rot: o.rotation.y });
        if (id === 'prop-metal-box' && o) kp.boxes.push(box(o, 'Engraved box'));
      });
    }
    if (type === 'lanterns')
      for (let i = 0; i < 3; i++) {
        const x = s * (3.75 + (r() - 0.5) * 0.9), hook = 2.75 + r() * 0.6, zz = z + (i - 1) * 1.1 + (r() - 0.5) * 0.4;
        chain(x, 3.6, hook, zz);
        lantern(LANTERNS[(k * 3 + i) % LANTERNS.length], x, hook, zz, false);
      }
    if (type === 'charms') {
      const jb = place('prop-jewel-box', tx, 0.8, z - 0.4, face(s) + 0.25, true);
      kp.boxes.push(box(jb, 'Jewellery box'));
      place('prop-mirror', tx + s * 0.05, 0.8, z + 0.8, face(s) - 0.35);
      for (const dz of [-1.75, 1.75]) place('prop-bells', s * 2.75, 3.3, z + dz, r() * 6.28);
    }
    if (type === 'textiles' || type === 'cushions') {
      const c = place('prop-carpet-flat', s * 2.15, 0.012, z + 0.05, Math.PI / 2 + (r() - 0.5) * 0.12, true);
      c.traverse((m) => { if (m.isMesh && /Carpet/.test(m.material.name)) m.material = m.material.clone(); });
      kp.carpets.push({ obj: c, glow: 0, hover: false, pos: c.position.clone() });
      if (type === 'textiles') {
        place('prop-textile-stack', s * 2.85, 0, z + 0.2, face(s) + (r() - 0.5) * 0.4);
        place('prop-carpet-roll', s * 3.95, 0, z - 1.45, Math.PI / 2);
      }
    }
    if (type === 'spices') place('prop-bells', s * 3.9, 1.69, z + 1.5, r() * 6.28);
    if (type === 'gold') {
      const items = ['prop-bangles', 'prop-pearl-strands', 'prop-metal-box', 'prop-bangles', 'prop-pearl-strands', 'prop-jewel-box'];
      items.forEach((id, e) => place(id, tx, 0.945, z - 1.2 + e * 0.48, face(s) + (r() - 0.5) * 0.6));
      for (let a = 0; a < 4; a++) {
        const d = new Mesh(new SphereGeometry(0.014, 10, 8), M.gold);
        d.scale.set(1, 1.5, 1);
        d.position.set(s * 4.8, 2.08, z - 1.2 + a * 0.8);
        group.add(d);
        kp.statics.push(d);
      }
    }
  };
  bays.forEach((z, t) => {
    stall(-1, z, left[t]);
    stall(1, z, right[t]);
  });
  return kp;
}

function box(o, name) {
  let lid = null;
  o.traverse((n) => n.name === 'lid' && (lid = n));
  return { obj: o, lid, name, open: 0, target: 0 };
}

/** Optional souk interactions (no `objective`, so the autopilot never stops for them). */
export function soukInteractions(G, kp) {
  const I = G.interactions, A = G.audio;
  for (const it of kp.lift)
    I.add({ object: it.obj, proxy: 0.22, label: `Lift and turn · ${it.name}`, range: 2.8, highlight: 0.25,
      onSelect: () => {
        if (it.busy) return;
        it.busy = 0.001;
        A.play('charms_tinkle', { position: it.obj.position, volume: 0.35, rate: 1.15 });
        kp.anims.add((dt) => {
          const u = Math.min(1, (it.busy += dt / 3.2)), lift = Math.sin(Math.PI * u);
          it.obj.position.y = it.y + 0.14 * lift * lift;
          it.obj.rotation.y = it.rot + Math.PI * 2 * (u * u * (3 - 2 * u));
          if (u >= 1) return (it.busy = 0), (it.obj.rotation.y = it.rot), true;
        });
      } });
  for (const b of kp.boxes)
    I.add({ object: b.obj, proxy: 0.16, label: () => (b.target ? `Close · ${b.name}` : `Open · ${b.name}`), range: 2.8, highlight: 0.25,
      onSelect: () => {
        b.target = b.target ? 0 : 1;
        A.play(b.target ? 'pickup' : 'place_click', { position: b.obj.position, volume: 0.5 });
        if (b.target) A.play('sparkle', { position: b.obj.position, volume: 0.25, delay: 0.35 });
      } });
  for (const l of kp.lanterns)
    I.add({ object: l.obj, proxy: 0.25, label: 'Brighten the lantern', range: 4.6, highlight: 0,
      onSelect: () => { l.boost = 0.55; A.play('lantern_on', { position: l.pos, volume: 0.45 }); } });
  for (const c of kp.carpets)
    I.add({ object: c.obj, label: 'Hand-woven carpet', range: 3.2, highlight: 0,
      onHover: (on) => { c.hover = on; on && A.play('cloth_flutter', { position: c.pos, volume: 0.18 }); },
      onSelect: () => { c.hover = true; c.glow = 1; A.play('cloth_flutter', { position: c.pos, volume: 0.3 }); } });
}

/** Per-frame souk update: lantern glass follows the souk flicker, approach/select brightening, lids, carpets. */
export function soukTick(kp, dt, head, glassIntensity) {
  if (!kp.glass) return;
  kp.glass.emissiveIntensity = glassIntensity * 0.62; // calm amber glow that still shows the pierced brass
  for (const l of kp.lanterns) {
    const near = head ? Math.max(0, 1 - head.distanceTo(l.pos) / 2.6) * 0.18 : 0; // slightly brighter when near
    l.boost = Math.max(near, l.boost - dt * 0.35);
    l.mat.emissiveIntensity = glassIntensity * 0.62 * (1 + l.boost);
  }
  for (const b of kp.boxes) {
    if (!b.lid) continue;
    b.open += Math.sign(b.target - b.open) * Math.min(Math.abs(b.target - b.open), dt * 1.6);
    const e = b.open * b.open * (3 - 2 * b.open);
    b.lid.rotation.x = -1.25 * e;
  }
  for (const c of kp.carpets) {
    c.glow += ((c.hover ? 1 : 0) - c.glow) * Math.min(1, dt * 5);
    c.obj.traverse((m) => {
      if (!m.isMesh || !/Carpet/.test(m.material.name)) return;
      m.material.emissiveMap = m.material.map;
      m.material.emissive.set('#fff1d6');
      m.material.emissiveIntensity = 0.32 * c.glow;
      if (!m.material.userData.kpEmissive) (m.material.userData.kpEmissive = true), (m.material.needsUpdate = true);
    });
  }
  for (const a of kp.anims) if (a(dt)) kp.anims.delete(a);
}


// ---------- The monkey's own flying carpet (brief §4–5) ----------
// On foot from the entrance to the carpet dock; there he climbs onto his little carpet and stays on it for the rest
// of the journey. While he rides, monkey.walk() / face() / stand() are routed here, so the story beats are unchanged:
// "walk to the display" becomes "glide to the display", "face the bench" turns the carpet. Timing uses the game's
// scheduler (P tween, N wait, Ke per-frame task), so it pauses, fast-forwards and cancels with the chapter.
const _g1 = new Vector3(), _g2 = new Vector3(), _g3 = new Vector3();
const wrapAngle = (a) => ((((a + Math.PI) % (2 * Math.PI)) + 2 * Math.PI) % (2 * Math.PI)) - Math.PI;

export class CarpetGuide {
  constructor(G, carpet, { P, N, Ke, park, parkYaw = 0 }) {
    Object.assign(this, { G, carpet, P, N, Ke });
    this.parkPos = park.clone();
    this.parkYaw = parkYaw;
    this.height = 0.55; // carpet surface above the ground while guiding (doorways, displays, dunes)
    this.riding = this.flying = false;
    this.bank = 0;
    this.lookTimer = 4;
    carpet.rotation.order = 'YXZ';
    this.park(this.parkPos, parkYaw);
    const m = G.monkey, walk = m.walk.bind(m), face = m.face.bind(m), stand = m.stand.bind(m);
    const faceAsync = m.faceAsync?.bind(m);
    m.walk = (pts, o) => (this.riding ? this.fly(pts, o) : walk(pts, o));
    m.face = (p) => (this.riding ? this.turnTo(p) : face(p));
    if (faceAsync) m.faceAsync = (p) => (this.riding ? (this.turnTo(p), N(0.5)) : faceAsync(p));
    m.stand = () => (this.riding ? ((m.sitting = true), m.play('idle')) : stand()); // stays seated on the carpet
  }

  ground(x, z) {
    return this.G.nav.ground(x, z);
  }

  park(pos, yaw) {
    this.carpet.position.copy(pos);
    this.yaw = this.yawTarget = yaw;
    this.carpet.rotation.set(0, yaw, 0);
  }

  /** At the carpet dock: walk to the back edge, hop on in a short arc, settle seated. */
  board() {
    if (this.riding) return Promise.resolve();
    if (this.boarding) return this.boarding;
    const m = this.G.monkey, c = this.carpet, seat = new Vector3(0, 0.02, 0.05);
    const fwd = new Vector3(-Math.sin(this.yaw), 0, -Math.cos(this.yaw));
    const back = c.position.clone().addScaledVector(fwd, -1.05).setY(0);
    return (this.boarding = (async () => {
      await m.walk([back]);
      m.face(c.position);
      await this.N(0.3);
      c.updateWorldMatrix(true, false);
      const from = m.root.position.clone(), to = seat.clone().applyMatrix4(c.matrixWorld);
      this.G.audio.play('cloth_flutter', { position: to, volume: 0.35 });
      await this.P(0.75, (e) => {
        m.root.position.lerpVectors(from, to, e);
        m.root.position.y += Math.sin(Math.PI * e) * 0.3;
      });
      m.attach(c, seat, Math.PI);
      this.riding = true;
      await m.sit();
    })());
  }

  whenBoarded() {
    return this.riding ? Promise.resolve() : this.boarding || this.board();
  }

  /** Glide along waypoints at hover height; `lead` waits (and beckons) when the visitor falls behind. */
  fly(points, o = {}) {
    const c = this.carpet;
    const pts = [new Vector3(c.position.x, 0, c.position.z)];
    for (const p of points) if (Math.hypot(p.x - pts.at(-1).x, p.z - pts.at(-1).z) > 0.15) pts.push(new Vector3(p.x, 0, p.z));
    if (pts.length < 2) return Promise.resolve();
    const path = new CatmullRomCurve3(pts, false, 'centripetal'), L = path.getLength();
    const base = o.run ? 2.1 : o.speed ?? 1.05, m = this.G.monkey;
    let s = 0, v = 0, waiting = false, beckon = 1.5;
    this.flying = true;
    return this.Ke((dt) => {
      const head = this.G.player.head(_g1), d = Math.hypot(head.x - c.position.x, head.z - c.position.z);
      if (o.lead) {
        if (waiting && d < o.lead.resume) (waiting = false), m.look(null);
        else if (!waiting && d > o.lead.wait) (waiting = true), (beckon = 1.2);
      }
      let target = waiting ? 0 : base;
      const end = path.getPointAt(1, _g2);
      if (!waiting && Math.hypot(head.x - end.x, head.z - end.z) < Math.hypot(c.position.x - end.x, c.position.z - end.z) - 1) target *= 1.6;
      v += (target - v) * Math.min(1, dt * 2.5);
      s = Math.min(L, s + v * dt);
      const u = s / L, p = path.getPointAt(u, _g2), t = path.getTangentAt(Math.min(0.999, u), _g3);
      c.position.x = p.x;
      c.position.z = p.z;
      this.hover(dt, 3);
      if (v > 0.05) this.yawTarget = Math.atan2(-t.x, -t.z);
      if (waiting) {
        m.look(head);
        if ((beckon -= dt) < 0) (beckon = 4.5), m.gesture('beckon');
      } else this.glance(dt, head);
      if (s >= L - 1e-3) return (this.flying = false), m.look(null), true;
      return false;
    });
  }

  /** Every so often he looks back at the visitor (brief: "look back towards the user at intervals"). */
  glance(dt, head) {
    const m = this.G.monkey;
    this.lookTimer -= dt;
    if (this.lookTimer < 0 && this.lookTimer > -1.6) m.look(head);
    else if (this.lookTimer <= -1.6) (this.lookTimer = 5 + Math.random() * 3), m.look(null);
  }

  turnTo(p) {
    const c = this.carpet;
    if (Math.hypot(p.x - c.position.x, p.z - c.position.z) > 0.05) this.yawTarget = Math.atan2(-(p.x - c.position.x), -(p.z - c.position.z));
  }

  hover(dt, rate = 2) {
    const c = this.carpet, t = this.G.clock?.time ?? performance.now() / 1000;
    const y = this.ground(c.position.x, c.position.z) + this.height + Math.sin(t * 1.4) * 0.025;
    c.position.y += (y - c.position.y) * Math.min(1, dt * rate);
  }

  /** During the big flight his carpet flies in formation beside the visitor's, a little ahead. */
  followFlight(curve, u) {
    const c = this.carpet, w = Math.min(1, u / 0.06), k = Math.min(1, u + 0.045 * w * w * (3 - 2 * w)); // ~3 m ahead: in view
    const p = curve.getPointAt(k, _g1), t = curve.getTangentAt(Math.min(0.999, k), _g2);
    const side = _g3.set(-t.z, 0, t.x).normalize();
    if (this.side === undefined) this.side = Math.sign(side.dot(_g1.clone().sub(this.parkPos).negate())) || -1;
    c.position.copy(p).addScaledVector(side, 1.85 * this.side);
    c.position.y += 0.22 * w + Math.sin(u * 37) * 0.04 * w;
    const cam = this.G.camera.getWorldPosition(_g2), away = c.position.clone().sub(cam), dist = away.length();
    if (dist < 1.6) c.position.copy(cam).addScaledVector(away.normalize(), 1.6);
    this.yawTarget = Math.atan2(-t.x, -t.z);
    this.flying = u < 0.999;
  }

  /** Per frame (Director.update): smooth yaw with a little bank; hover in place when not travelling. */
  tick(dt) {
    const c = this.carpet, dy = wrapAngle(this.yawTarget - this.yaw), step = dy * Math.min(1, dt * (this.flying ? 3 : 1.8));
    this.yaw += step;
    this.bank += (Math.max(-0.16, Math.min(0.16, (-step / Math.max(dt, 1e-4)) * 0.09)) - this.bank) * Math.min(1, dt * 4);
    c.rotation.set(0, this.yaw, this.bank);
    if (this.riding && !this.flying) this.hover(dt, 2);
    else if (!this.riding && !this.boarding) c.position.y = this.parkPos.y + Math.sin((this.G.clock?.time ?? 0) * 1.1) * 0.03;
  }

  /** Chapter (re)start: before the dock he is on foot and the carpet waits there; afterwards he starts aboard. */
  applyState(chapter, pos, yaw) {
    const m = this.G.monkey;
    this.flying = this.riding = false;
    this.boarding = null;
    this.side = undefined;
    if (!['workshop', 'gallery', 'desert', 'finale'].includes(chapter)) return this.park(this.parkPos, this.parkYaw);
    this.park(new Vector3(pos.x, this.ground(pos.x, pos.z) + this.height, pos.z), yaw - Math.PI);
    m.attach(this.carpet, new Vector3(0, 0.02, 0.05), Math.PI);
    this.riding = true;
    m.sitting = true;
    m.play('idle');
  }
}

// ---------- z-fighting guard ----------
// Builder boxes are axis-aligned. When a new box has a face in the same plane as an earlier box's face and the two
// overlap, the GPU can't decide which is in front and the surface flickers as the camera moves (e.g. the dock floor
// slab laid exactly on top of the stone block). Nudge the newer face out a few millimetres: invisible, but no fighting.
const coplanar = new WeakMap();
export function separateCoplanar(parent, w, h, d, x, y, z) {
  let list = coplanar.get(parent);
  if (!list) coplanar.set(parent, (list = []));
  const EPS = 1e-3, LIFT = 0.004, SIDE = 0.003, ov = (a0, a1, b0, b1) => Math.min(a1, b1) - Math.max(a0, b0) > 1e-3;
  let x0 = x - w / 2, x1 = x + w / 2, y0 = y - h / 2, y1 = y + h / 2, z0 = z - d / 2, z1 = z + d / 2;
  for (const b of list) {
    const xz = ov(x0, x1, b.x0, b.x1) && ov(z0, z1, b.z0, b.z1), yz = ov(y0, y1, b.y0, b.y1) && ov(z0, z1, b.z0, b.z1), xy = ov(x0, x1, b.x0, b.x1) && ov(y0, y1, b.y0, b.y1);
    if (xz && Math.abs(y1 - b.y1) < EPS) y1 = b.y1 + LIFT;
    if (xz && Math.abs(y0 - b.y0) < EPS) y0 = b.y0 - LIFT;
    if (yz && Math.abs(x1 - b.x1) < EPS) x1 = b.x1 + SIDE;
    if (yz && Math.abs(x0 - b.x0) < EPS) x0 = b.x0 - SIDE;
    if (xy && Math.abs(z1 - b.z1) < EPS) z1 = b.z1 + SIDE;
    if (xy && Math.abs(z0 - b.z0) < EPS) z0 = b.z0 - SIDE;
  }
  list.push({ x0, x1, y0, y1, z0, z1 });
  return [x1 - x0, y1 - y0, z1 - z0, (x0 + x1) / 2, (y0 + y1) / 2, (z0 + z1) / 2];
}
