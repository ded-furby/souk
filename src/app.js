import { Ray as e, HemisphereLight as t, Matrix4 as n, CylinderGeometry as r, Fog as i, ExtrudeGeometry as a, Line as o, Path as s, MeshBasicMaterial as c, LineBasicMaterial as l, PlaneGeometry as u, PerspectiveCamera as d, LoopOnce as f, InstancedBufferAttribute as p, InstancedMesh as m, Group as h, LatheGeometry as g, Quaternion as _, LoopRepeat as v, ConeGeometry as y, Euler as b, MeshPhysicalMaterial as x, Mesh as S, MeshStandardMaterial as C, Points as w, PointLight as ee, QuadraticBezierCurve3 as te, CanvasTexture as ne, ShaderMaterial as ie, CircleGeometry as ae, SphereGeometry as T, WebGLRenderer as se, TubeGeometry as ce, Raycaster as le, AnimationMixer as ue, Vector2 as de, BufferGeometry as fe, BufferAttribute as E, Scene as me, IcosahedronGeometry as he, HalfFloatType as ge, TextureLoader as ve, BoxGeometry as ye, WebGLRenderTarget as be, RingGeometry as Se, Shape as we, Box3 as Te, Vector3 as D, Plane as Ee, SRGBColorSpace as Oe, ShapeGeometry as Ae, RepeatWrapping as Me, PMREMGenerator as Ne, TorusGeometry as Pe, CapsuleGeometry as Fe, DirectionalLight as Ie, Color as O, CatmullRomCurve3 as Le, MathUtils as Re } from "three";
import { GLTFLoader as ke } from "three/addons/loaders/GLTFLoader.js";
import { HDRLoader as Ce } from "three/addons/loaders/HDRLoader.js";
import { EffectComposer as pe } from "three/addons/postprocessing/EffectComposer.js";
import { OutputPass as je } from "three/addons/postprocessing/OutputPass.js";
import { RenderPass as De } from "three/addons/postprocessing/RenderPass.js";
import { ShaderPass as re } from "three/addons/postprocessing/ShaderPass.js";
import { UnrealBloomPass as xe } from "three/addons/postprocessing/UnrealBloomPass.js";
import { mergeGeometries as _e } from "three/addons/utils/BufferGeometryUtils.js";
import { clone as oe } from "three/addons/utils/SkeletonUtils.js";
import { GTAOPass } from "three/addons/postprocessing/GTAOPass.js";
import { upgradeMonkey } from "./monkey-look.js";
import { upgradeDesert } from "./desert-look.js";
import { RoundedBoxGeometry } from "three/addons/geometries/RoundedBoxGeometry.js";
import { fitTo, faceViewer, useGameMaterials, cuffAssemble, cuffPart, cuffFlowersBySize, cuffLeafAlongX, cuffFlowerSized, PROPS, prepareProps, dressSouk, soukInteractions, soukTick, CarpetGuide, separateCoplanar } from "./kp.js";
(function () {
  let e = document.createElement(`link`).relList;
  if (e && e.supports && e.supports(`modulepreload`)) return;
  for (let e of document.querySelectorAll(`link[rel="modulepreload"]`)) n(e);
  new MutationObserver((e) => {
    for (let t of e)
      if (t.type === `childList`) for (let e of t.addedNodes) e.tagName === `LINK` && e.rel === `modulepreload` && n(e);
  }).observe(document, { childList: !0, subtree: !0 });
  function t(e) {
    let t = {};
    return (
      e.integrity && (t.integrity = e.integrity),
      e.referrerPolicy && (t.referrerPolicy = e.referrerPolicy),
      (t.credentials =
        e.crossOrigin === `use-credentials` ? `include` : e.crossOrigin === `anonymous` ? `omit` : `same-origin`),
      t
    );
  }
  function n(e) {
    if (e.ep) return;
    e.ep = !0;
    let n = t(e);
    fetch(e.href, n);
  }
})();
var ze = { time: 0, dt: 0, real: 0, rdt: 0, scale: 1 },
  k = (e, t = 0, n = 1) => Math.min(n, Math.max(t, e)),
  Be = (e, t, n) => e + (t - e) * n,
  A = (e) => ((e = k(e)), e * e * (3 - 2 * e)),
  Ve = (e) => 1 - (1 - k(e)) ** 3,
  He = (e) => ((e = k(e)), e < 0.5 ? 4 * e * e * e : 1 - (-2 * e + 2) ** 3 / 2),
  j = (e, t, n, r) => Be(e, t, 1 - Math.exp(-n * r));
function Ue(e, t, n, r) {
  return e + (((((t - e + Math.PI) % (Math.PI * 2)) + Math.PI * 2) % (Math.PI * 2)) - Math.PI) * (1 - Math.exp(-n * r));
}
function We(e = 1) {
  return () => ((e = (e * 1664525 + 1013904223) >>> 0), e / 4294967296);
}
var M = new (class {
    constructor() {
      (this.items = []), (this.token = { alive: !0 });
    }
    newToken() {
      return (this.token.alive = !1), (this.token = { alive: !0 }), this.token;
    }
    add(e, t = this.token) {
      return new Promise((n) => this.items.push({ step: e, token: t, resolve: n }));
    }
    update(e) {
      let t = this.items;
      for (let n = 0; n < t.length; n++) {
        let r = t[n],
          i = !r.token.alive;
        !i && r.step(e) && ((i = !0), r.resolve()), i && (t.splice(n, 1), n--);
      }
    }
  })(),
  N = (e) => {
    let t = 0;
    return M.add((n) => (t += n) >= e);
  },
  Ge = (e) => M.add(() => !!e());
function P(e, t, n = A) {
  let r = 0;
  return (
    t(n(0)),
    M.add((i) => {
      r += i;
      let a = Math.min(1, r / e);
      return t(n(a), a), a >= 1;
    })
  );
}
function Ke(e) {
  let t = 0;
  return M.add((n) => e(n, (t += n)));
}
var qe = class {
    constructor(e) {
      (this.canvas = e),
        (this.keys = new Set()),
        (this.lookX = 0),
        (this.lookY = 0),
        (this.primary = { down: !1, pressed: !1, released: !1 }),
        (this.skip = !1),
        (this.locked = !1),
        (this.enabled = !1),
        (this.touch = matchMedia(`(pointer: coarse)`).matches),
        (this.mouse = { x: 0, y: 0 }),
        (this.stick = { x: 0, y: 0 }),
        (this.onPause = null),
        (this.onInteractKey = null),
        (this.dragLook = null),
        (this.wantsLock = !0),
        addEventListener(`keydown`, (e) => {
          this.enabled &&
            !e.target.closest?.(`dialog`) &&
            ([
              `KeyW`,
              `KeyA`,
              `KeyS`,
              `KeyD`,
              `ArrowUp`,
              `ArrowDown`,
              `ArrowLeft`,
              `ArrowRight`,
              `Space`,
              `ShiftLeft`,
              `ShiftRight`,
            ].includes(e.code) && e.preventDefault(),
            this.keys.add(e.code),
            e.code === `Space` && (this.skip = !0),
            (e.code !== `KeyE` && e.code !== `Enter`) ||
              e.repeat ||
              ((this.primary.down = !0), (this.primary.pressed = !0), (this.keySource = !0)),
            (e.code === `Escape` || e.code === `KeyP`) && this.onPause?.());
        }),
        addEventListener(`keyup`, (e) => {
          this.keys.delete(e.code),
            e.code === `Space` && (this.skip = !1),
            (e.code === `KeyE` || e.code === `Enter`) &&
              this.keySource &&
              ((this.primary.down = !1), (this.primary.released = !0), (this.keySource = !1));
        }),
        addEventListener(`blur`, () => this.reset()),
        e.addEventListener(`pointerdown`, (t) => {
          this.enabled &&
            (e.focus(),
            t.pointerType === `mouse` && this.wantsLock && !this.locked && e.requestPointerLock?.()?.catch?.(() => {}),
            this.setMouse(t),
            (t.pointerType !== `mouse` || !this.wantsLock || this.locked) &&
              t.button === 0 &&
              ((this.primary.down = !0), (this.primary.pressed = !0)),
            (t.pointerType === `mouse` && this.wantsLock) ||
              ((this.dragLook = { id: t.pointerId, x: t.clientX, y: t.clientY, moved: 0 }),
              e.setPointerCapture(t.pointerId)));
        }),
        e.addEventListener(`pointermove`, (e) => {
          if (this.enabled) {
            if (this.locked) (this.lookX += e.movementX), (this.lookY += e.movementY);
            else if ((this.setMouse(e), this.dragLook && this.dragLook.id === e.pointerId && !this.holdingTarget)) {
              let t = e.clientX - this.dragLook.x,
                n = e.clientY - this.dragLook.y;
              (this.dragLook.moved += Math.abs(t) + Math.abs(n)),
                (this.lookX += t),
                (this.lookY += n),
                (this.dragLook.x = e.clientX),
                (this.dragLook.y = e.clientY);
            }
          }
        });
      let t = (e) => {
        this.dragLook?.id === e.pointerId && (this.dragLook = null),
          this.primary.down && !this.keySource && ((this.primary.down = !1), (this.primary.released = !0));
      };
      e.addEventListener(`pointerup`, t),
        e.addEventListener(`pointercancel`, t),
        document.addEventListener(`pointerlockchange`, () => {
          let t = this.locked;
          (this.locked = document.pointerLockElement === e),
            t && !this.locked && this.enabled && this.wantsLock && this.onPause?.();
        });
      let n = document.getElementById(`stick`),
        r = n?.firstElementChild;
      if (n) {
        let e = null,
          t = 0,
          i = 0;
        n.addEventListener(`pointerdown`, (r) => {
          (e = r.pointerId), n.setPointerCapture(e);
          let o = n.getBoundingClientRect();
          (t = o.left + o.width / 2), (i = o.top + o.height / 2), a(r);
        });
        let a = (n) => {
          if (n.pointerId !== e) return;
          let a = (n.clientX - t) / 50,
            o = (n.clientY - i) / 50,
            s = Math.hypot(a, o);
          s > 1 && ((a /= s), (o /= s)),
            (this.stick.x = a),
            (this.stick.y = o),
            (r.style.transform = `translate(${a * 36}px, ${o * 36}px)`);
        };
        n.addEventListener(`pointermove`, a);
        let o = () => {
          (e = null), (this.stick.x = this.stick.y = 0), (r.style.transform = ``);
        };
        n.addEventListener(`pointerup`, o),
          n.addEventListener(`pointercancel`, o),
          document.getElementById(`touch-act`).addEventListener(`pointerdown`, (e) => {
            e.preventDefault(), (this.primary.down = !0), (this.primary.pressed = !0), (this.touchAct = !0);
          }),
          document.getElementById(`touch-act`).addEventListener(`pointerup`, () => {
            (this.primary.down = !1), (this.primary.released = !0), (this.touchAct = !1);
          });
      }
    }
    setMouse(e) {
      (this.mouse.x = (e.clientX / innerWidth) * 2 - 1), (this.mouse.y = -(e.clientY / innerHeight) * 2 + 1);
    }
    reset() {
      this.keys.clear(), (this.skip = !1), (this.primary.down = !1), (this.dragLook = null);
    }
    get moveX() {
      return (
        (this.keys.has(`KeyD`) || this.keys.has(`ArrowRight`) ? 1 : 0) -
        (this.keys.has(`KeyA`) || this.keys.has(`ArrowLeft`) ? 1 : 0) +
        this.stick.x
      );
    }
    get moveZ() {
      return (
        (this.keys.has(`KeyS`) || this.keys.has(`ArrowDown`) ? 1 : 0) -
        (this.keys.has(`KeyW`) || this.keys.has(`ArrowUp`) ? 1 : 0) +
        this.stick.y
      );
    }
    get run() {
      return this.keys.has(`ShiftLeft`) || this.keys.has(`ShiftRight`);
    }
    get centred() {
      return this.locked || this.keySource || this.touchAct || (!this.wantsLock && this.touch);
    }
    endFrame() {
      (this.primary.pressed = !1), (this.primary.released = !1), (this.lookX = 0), (this.lookY = 0);
    }
  },
  Je = 1.62,
  Ye = new D(),
  Xe = new D(),
  Ze = class {
    constructor(e, t) {
      (this.nav = t),
        (this.rig = new h()),
        (this.rig.name = `PlayerRig`),
        (this.camera = e),
        e.position.set(0, Je, 0),
        (e.rotation.order = `YXZ`),
        this.rig.add(e),
        (this.yaw = 0),
        (this.pitch = -0.05),
        (this.vel = new de()),
        (this.frozen = !1),
        (this.mount = null),
        (this.attention = null),
        (this.stepDist = 0),
        (this.onStep = null),
        (this.bob = 0),
        (this.speed = 0),
        (this.radius = 0.24),
        (this.groundY = 0);
    }
    get position() {
      return this.rig.position;
    }
    head(e = new D()) {
      return this.camera.getWorldPosition(e);
    }
    forward(e = new D()) {
      return this.camera.getWorldDirection(e);
    }
    teleport(e, t, n = this.yaw, r = !1) {
      this.rig.position.set(e, this.nav.ground(e, t), t),
        (this.groundY = this.rig.position.y),
        this.vel.set(0, 0),
        r ? (this.rig.rotation.y = n) : ((this.yaw = n), (this.rig.rotation.y = n), (this.pitch = -0.05));
    }
    lookAt(e, t = 2.2, n = 2.5) {
      this.attention = { point: e.clone ? e.clone() : e, rate: t, t: n };
    }
    updateDesktop(e, t, n) {
      let r = 0.0021 * (n.sensitivity ?? 1);
      if (this.lookLock) {
        let e = (this.lookDelta ||= { x: 0, y: 0 });
        (e.x += t.lookX), (e.y += t.lookY);
      } else
        (t.lookX || t.lookY) && (this.attention = null),
          (this.yaw -= t.lookX * r),
          (this.pitch = k(this.pitch - t.lookY * r, -1.35, 1.35));
      if (this.attention) {
        let t = this.attention;
        (t.t -= e), this.head(Ye), Xe.copy(t.point).sub(Ye);
        let n = Math.atan2(-Xe.x, -Xe.z),
          r = Math.atan2(Xe.y, Math.hypot(Xe.x, Xe.z));
        (this.yaw = Ue(this.yaw, n, t.rate, e)),
          (this.pitch = j(this.pitch, k(r, -0.9, 0.9), t.rate, e)),
          t.t <= 0 && (this.attention = null);
      }
      let i = t.moveX,
        a = t.moveZ,
        o = Math.hypot(i, a);
      o > 1 && ((i /= o), (a /= o));
      let s = (t.run ? 3.1 : 1.85) * (this.frozen || this.mount ? 0 : 1),
        c = Math.sin(this.yaw),
        l = Math.cos(this.yaw),
        u = (i * l + a * c) * s,
        d = (-i * c + a * l) * s;
      (this.vel.x = j(this.vel.x, u, 5, e)),
        (this.vel.y = j(this.vel.y, d, 5, e)),
        this.walk(e),
        (this.rig.rotation.y = this.yaw),
        this.camera.rotation.set(this.pitch, 0, 0);
      let f = n.reduced ? 0 : 0.005;
      this.camera.position.y = Je + Math.sin(this.bob * Math.PI * 2) * f * Math.min(1, this.speed / 1.8);
    }
    updateXR(e, t, n) {
      let r = this.camera,
        i = t.x,
        a = t.y;
      (Math.hypot(i, a) < 0.18 || this.frozen || this.mount) && (i = a = 0);
      let o = r.getWorldDirection(Ye),
        s = Math.atan2(-o.x, -o.z),
        c = Math.sin(s),
        l = Math.cos(s),
        u = 1.6;
      (this.vel.x = j(this.vel.x, (i * l + a * c) * u, 10, e)),
        (this.vel.y = j(this.vel.y, (-i * c + a * l) * u, 10, e)),
        this.walk(e, !0);
    }
    walk(e, t = !1) {
      let n = this.rig.position;
      if (this.mount) {
        this.mount.object.updateWorldMatrix(!0, !1),
          Ye.copy(this.mount.offset).applyMatrix4(this.mount.object.matrixWorld),
          n.copy(Ye),
          (this.speed = 0);
        return;
      }
      let r = this.vel.x * e,
        i = this.vel.y * e,
        a = 0,
        o = 0;
      t && (this.head(Ye), (a = Ye.x - n.x), (o = Ye.z - n.z));
      let [s, c] = this.nav.move(n.x + a, n.z + o, r, i, this.radius),
        l = s - (n.x + a),
        u = c - (n.z + o);
      (n.x += l), (n.z += u);
      let d = Math.hypot(l, u);
      this.speed = e > 0 ? d / e : 0;
      let f = this.nav.ground(n.x + a, n.z + o);
      (this.groundY = j(this.groundY, f, 12, e)),
        (n.y = this.groundY + ((t && this.seatLift) || 0)),
        (this.bob += d / 1.5),
        (this.stepDist += d),
        this.stepDist > 0.72 && ((this.stepDist = 0), this.onStep?.(n));
    }
  },
  Qe = new n(),
  $e = new D(),
  et = new D();
function tt() {
  let e = new h(),
    t = new C({ color: `#2a241c`, roughness: 0.5, metalness: 0.3 }),
    n = new C({ color: `#c9a35d`, roughness: 0.3, metalness: 1 }),
    r = new S(new Fe(0.014, 0.07, 6, 12), t);
  (r.rotation.x = Math.PI / 2 - 0.35), r.position.set(0, -0.012, 0.04), e.add(r);
  let i = new S(new Pe(0.022, 0.003, 6, 24), n);
  i.position.set(0, 0.008, -0.01), (i.rotation.x = 0.3), e.add(i);
  let a = new S(new T(0.006, 10, 8), new c({ color: `#ffe3a8` }));
  return a.position.set(0, 0.008, -0.03), e.add(a), e;
}
var nt = class {
    constructor(e, t, n) {
      (this.renderer = e),
        (this.player = t),
        (this.nav = n),
        (this.session = null),
        (this.supported = !1),
        (this.hands = []),
        (this.stick = { x: 0, y: 0 }),
        (this.onStart = null),
        (this.onEnd = null),
        (this.onMenu = null),
        (this.skipHeld = !1),
        (this.snapReady = !0),
        (this.teleportAim = null),
        (e.xr.enabled = !0),
        e.xr.setReferenceSpaceType(`local-floor`);
      for (let e = 0; e < 2; e++) this.hands.push(this.makeHand(e));
      let r = new fe().setFromPoints(
        Array(40)
          .fill(0)
          .map(() => new D()),
      );
      (this.arc = new o(r, new l({ color: `#f1d18f`, transparent: !0, opacity: 0.85 }))),
        (this.arc.frustumCulled = !1),
        (this.arc.visible = !1),
        (this.marker = new S(
          new Se(0.22, 0.3, 40),
          new c({ color: `#f1d18f`, transparent: !0, opacity: 0.9, side: 2, depthWrite: !1 }),
        )),
        (this.marker.rotation.x = -Math.PI / 2),
        (this.marker.visible = !1),
        e.xr.addEventListener(`sessionstart`, () => {
          (this.session = e.xr.getSession()), this.onStart?.();
        }),
        e.xr.addEventListener(`sessionend`, () => {
          (this.session = null), (this.arc.visible = this.marker.visible = !1), this.onEnd?.();
        });
    }
    attach(e) {
      e.add(this.arc, this.marker);
      for (let e of this.hands) this.player.rig.add(e.ray, e.grip);
    }
    makeHand(t) {
      let n = this.renderer.xr,
        i = n.getController(t),
        a = n.getControllerGrip(t),
        o = new S(
          new r(0.0016, 0.0016, 1, 6, 1, !0).translate(0, 0.5, 0).rotateX(-Math.PI / 2),
          new c({ color: `#f3dca8`, transparent: !0, opacity: 0.55, depthWrite: !1 }),
        );
      (o.scale.z = 3), i.add(o);
      let s = new S(new T(0.008, 10, 8), new c({ color: `#fff1cc` }));
      (s.visible = !1), i.add(s), a.add(tt());
      let l = {
          index: t,
          ray: i,
          grip: a,
          line: o,
          dot: s,
          source: null,
          pointer: { id: `xr` + t, ray: new e(), down: !1, pressed: !1, released: !1, primary: !1, xr: !0, grip: a },
        },
        u = () => {
          (l.pointer.down = !0), (l.pointer.pressed = !0), this.pulse(l, 0.25, 30);
        },
        d = () => {
          (l.pointer.down = !1), (l.pointer.released = !0);
        };
      return (
        i.addEventListener(`selectstart`, u),
        i.addEventListener(`selectend`, d),
        i.addEventListener(`squeezestart`, u),
        i.addEventListener(`squeezeend`, d),
        i.addEventListener(`connected`, (e) => {
          (l.source = e.data),
            (l.pointer.primary = e.data.handedness !== `left`),
            (i.visible = a.visible = e.data.targetRayMode === `tracked-pointer`);
        }),
        i.addEventListener(`disconnected`, () => {
          (l.source = null), (i.visible = a.visible = !1);
        }),
        l
      );
    }
    pulse(e, t = 0.3, n = 40) {
      try {
        e.source?.gamepad?.hapticActuators?.[0]?.pulse?.(t, n);
      } catch {}
    }
    pulseAll(e, t) {
      for (let n of this.hands) this.pulse(n, e, t);
    }
    async check() {
      if (!navigator.xr || !isSecureContext) return (this.supported = !1);
      try {
        this.supported = await navigator.xr.isSessionSupported(`immersive-vr`);
      } catch {
        this.supported = !1;
      }
      return this.supported;
    }
    async enter() {
      if (this.session) {
        await this.session.end();
        return;
      }
      let e = await navigator.xr.requestSession(`immersive-vr`, {
          optionalFeatures: [`local-floor`, `bounded-floor`, `hand-tracking`],
        }),
        t = !e.enabledFeatures || e.enabledFeatures.includes(`local-floor`);
      this.renderer.xr.setReferenceSpaceType(t ? `local-floor` : `local`),
        (this.floorOffset = t ? 0 : 1.6),
        await this.renderer.xr.setSession(e);
    }
    pointers() {
      return this.hands.filter((e) => e.source && e.ray.visible !== !1).map((e) => e.pointer);
    }
    update(e, t, n) {
      if (!this.session) return;
      this.player.seatLift = t.seated ? 0.45 : 0;
      let r = !1;
      (this.skipHeld = !1), (this.stick.x = this.stick.y = 0);
      for (let n of this.hands) {
        let i = n.pointer;
        n.ray.updateWorldMatrix(!0, !1),
          Qe.identity().extractRotation(n.ray.matrixWorld),
          i.ray.origin.setFromMatrixPosition(n.ray.matrixWorld),
          i.ray.direction.set(0, 0, -1).applyMatrix4(Qe);
        let a = n.source?.gamepad;
        if (!a) continue;
        let o = a.axes,
          s = o[2] ?? o[0] ?? 0,
          c = o[3] ?? o[1] ?? 0,
          l = a.buttons;
        l[4]?.pressed && (this.skipHeld = !0);
        let u = !!l[5]?.pressed;
        u && !n.menuHeld && (r = !0),
          (n.menuHeld = u),
          n.source.handedness === `left` && t.smoothLocomotion
            ? ((this.stick.x = s), (this.stick.y = c))
            : this.handleRightStick(n, s, c, e, t);
        let d = i.hit;
        (n.line.scale.z = d ? d.distance : 3),
          (n.dot.visible = !!d),
          d && n.dot.position.set(0, 0, -d.distance),
          (n.line.material.opacity = d ? 0.9 : 0.4),
          i.hoverIt !== n.lastHover && (i.hoverIt && this.pulse(n, 0.12, 15), (n.lastHover = i.hoverIt));
      }
      r && this.onMenu?.();
    }
    handleRightStick(e, t, n, r, i) {
      if (
        (Math.abs(t) > 0.7 &&
          this.snapReady &&
          Math.abs(n) < 0.6 &&
          ((this.snapReady = !1), this.snapTurn(-Math.sign(t) * (Math.PI / 6))),
        Math.abs(t) < 0.3 && (this.snapReady = !0),
        n < -0.7 && !this.player.mount && !this.player.frozen)
      )
        this.aimTeleport(e), (this.teleportHand = e);
      else if (this.teleportHand === e) {
        if (this.teleportAim) {
          this.player.head($e);
          let t = this.player.rig.position;
          (t.x += this.teleportAim.x - $e.x),
            (t.z += this.teleportAim.z - $e.z),
            (t.y = this.nav.ground(this.teleportAim.x, this.teleportAim.z)),
            (this.player.groundY = t.y),
            this.pulse(e, 0.3, 40);
        }
        (this.teleportHand = null), (this.teleportAim = null), (this.arc.visible = this.marker.visible = !1);
      }
    }
    aimTeleport(e) {
      let t = $e.setFromMatrixPosition(e.ray.matrixWorld),
        n = et.set(0, 0, -1).applyMatrix4(Qe.identity().extractRotation(e.ray.matrixWorld)),
        r = this.arc.geometry.attributes.position,
        i = n.clone().multiplyScalar(7),
        a = t.clone(),
        o = null,
        s = 0;
      for (; s < 40; s++) {
        if ((r.setXYZ(s, a.x, a.y, a.z), o)) continue;
        let e = this.nav.ground(a.x, a.z);
        a.y <= e && s > 0 ? ((o = a.clone()), (o.y = e)) : (a.addScaledVector(i, 0.05), (i.y -= 9.8 * 0.05));
      }
      r.needsUpdate = !0;
      let c = o && this.nav.walkable(o.x, o.z, 0.25) && o.distanceTo(t) < 9;
      (this.arc.visible = !0),
        this.arc.material.color.set(c ? `#f1d18f` : `#a0614f`),
        (this.marker.visible = !!c),
        c && this.marker.position.set(o.x, o.y + 0.03, o.z),
        (this.teleportAim = c ? o : null);
    }
    snapTurn(e) {
      let t = this.player.rig;
      this.player.head($e);
      let n = $e.clone();
      (t.rotation.y += e),
        t.updateMatrixWorld(!0),
        this.player.head($e),
        (t.position.x += n.x - $e.x),
        (t.position.z += n.z - $e.z);
    }
  },
  rt = new le(),
  it = new D(),
  at = new O(`#ffcf7a`),
  ot = class {
    constructor() {
      (this.items = []),
        (this.reactors = []),
        (this.pointers = []),
        (this.hover = null),
        (this.holdProgress = 0),
        (this.onHoverSound = null);
    }
    add(e) {
      let t = Object.assign(
        { kind: `press`, range: 5, enabled: !0, holdTime: 1.2, highlight: !0, hovered: !1, proximity: 0 },
        e,
      );
      if (((t.hits = e.hits || [e.object]), e.proxy)) {
        let n = e.object;
        n.updateWorldMatrix(!0, !0);
        let r = new Te().setFromObject(n).getCenter(new D()),
          i = n.getWorldScale(new D()).x || 1,
          a = new S(new T(e.proxy / i, 10, 8), new c({ visible: !1 }));
        a.position.copy(n.worldToLocal(r)), n.add(a), (t.proxyMesh = a), (t.hits = [...t.hits, a]);
      }
      for (let e of t.hits)
        e.traverse((e) => {
          (e.userData.its ||= []).push(t);
        });
      return (
        t.highlight &&
          ((t.mats = []),
          t.object.traverse((e) => {
            e.isMesh &&
              e.material?.emissive &&
              (e.userData.ownMaterial || ((e.material = e.material.clone()), (e.userData.ownMaterial = !0)),
              t.mats.push({ m: e.material, base: e.material.emissive.clone(), baseI: e.material.emissiveIntensity }));
          }),
          (t.glow = 0)),
        this.items.push(t),
        t
      );
    }
    remove(e) {
      if (e) {
        (this.items = this.items.filter((t) => t !== e)),
          this.setGlow(e, 0),
          e.proxyMesh && e.proxyMesh.removeFromParent();
        for (let t of e.hits)
          t.traverse((t) => {
            t.userData.its && (t.userData.its = t.userData.its.filter((t) => t !== e));
          });
      }
    }
    react(e) {
      let t = Object.assign({ radius: 4, value: 0 }, e);
      return this.reactors.push(t), t;
    }
    isOn(e) {
      return typeof e.enabled == `function` ? e.enabled() : e.enabled;
    }
    setGlow(e, t) {
      if (e.mats) {
        let s = typeof e.highlight == `number` ? e.highlight : 1; // numeric highlight = subtler glow (jewellery)
        for (let { m: n, base: r, baseI: i } of e.mats)
          n.emissive.copy(r).lerp(at, t * 0.55 * s), (n.emissiveIntensity = i + t * 0.35 * s);
      }
    }
    update(e, t, n, r) {
      let i = this.items.filter((e) => this.isOn(e) && e.object.visible !== !1),
        a = [];
      for (let e of i) for (let t of e.hits) a.push(t);
      (this.hover = null), (this.holdProgress = 0);
      for (let n of t) {
        let t = null;
        if ((n.captured && !i.includes(n.captured) && (n.captured = null), a.length)) {
          rt.ray.copy(n.ray), (rt.far = 12);
          let e = rt.intersectObjects(a, !0);
          for (let r of e) {
            let e = r.object,
              a = null;
            for (; e && !a; ) {
              let t = e.userData.its;
              if (t) for (let e = t.length - 1; e >= 0 && !a; e--) i.includes(t[e]) && (a = t[e]);
              a || (e = e.parent);
            }
            if (!(!a || r.distance > a.range * (n.xr ? 1.6 : 1)) && st(e)) {
              t = { it: a, point: r.point, distance: r.distance, uv: r.uv };
              break;
            }
          }
        }
        n.hit = t;
        let r = n.captured || t?.it || null;
        if (
          (n.hoverIt !== r &&
            (n.hoverIt && n.hoverIt.onHover?.(!1, n),
            r && (r.onHover?.(!0, n), this.onHoverSound?.(r, n)),
            (n.hoverIt = r),
            (n.holdT = 0)),
          (n.primary || (!this.hover && r)) && (this.hover = r ? { it: r, ptr: n } : this.hover),
          n.pressed && t)
        ) {
          let e = t.it;
          e.kind === `press`
            ? e.onSelect?.(n, t)
            : (e.kind === `drag` || e.kind === `grab`) && ((n.captured = e), e.onPress?.(n, t)),
            (n.holdT = 0);
        }
        if (
          (n.down &&
            r &&
            (r.kind === `hold` &&
              t?.it === r &&
              ((n.holdT += e),
              r.onHoldTick?.(n.holdT / r.holdTime, n),
              n.holdT >= r.holdTime && ((n.holdT = -1e9), r.onSelect?.(n, t)),
              (n.primary || !this.holdProgress) && (this.holdProgress = Math.max(0, n.holdT / r.holdTime))),
            n.captured === r && r.whileDown?.(n, e, t)),
          n.down || (n.holdT > 0 && r?.onHoldTick?.(0, n), (n.holdT = 0)),
          n.released && n.captured)
        ) {
          let e = n.captured;
          (n.captured = null), e.onRelease?.(n, t);
        }
      }
      for (let r of this.items) {
        let i = t.some((e) => e.hoverIt === r) && this.isOn(r) ? 1 : 0;
        if (((r.hovered = i === 1), r.mats)) {
          let t = j(r.glow, i, 10, e);
          Math.abs(t - r.glow) > 0.001 && ((r.glow = t), this.setGlow(r, t));
        }
        if (r.near) {
          let e = r.object.getWorldPosition(it).distanceTo(n) < r.near;
          e !== r.isNear && ((r.isNear = e), r.onNear?.(e));
        }
      }
      for (let t of this.reactors) {
        let r = (t.position || t.object.getWorldPosition(it)).distanceTo(n),
          i = r < t.radius ? 1 - r / t.radius : 0;
        (t.value = j(t.value, i, t.rate || 3, e)), t.update?.(t.value, e);
      }
    }
  };
function st(e) {
  for (; e; ) {
    if (!e.visible) return !1;
    e = e.parent;
  }
  return !0;
}
var ct = { time: { value: 0 }, flicker: { value: 1 }, pointScale: { value: 600 } };
function lt(e, t = 1) {
  let n = e.attributes.position,
    r = e.attributes.normal,
    i = e.attributes.uv;
  if (!i || !r) return e;
  for (let e = 0; e < n.count; e++) {
    let a = Math.abs(r.getX(e)),
      o = Math.abs(r.getY(e)),
      s = Math.abs(r.getZ(e));
    o > a && o > s
      ? i.setXY(e, n.getX(e) * t, n.getZ(e) * t)
      : a > s
        ? i.setXY(e, n.getZ(e) * t, n.getY(e) * t)
        : i.setXY(e, n.getX(e) * t, n.getY(e) * t);
  }
  return (i.needsUpdate = !0), e;
}
function ut(e, t = `hang`, n = 0.08) {
  return (
    (e.onBeforeCompile = (e) => {
      (e.uniforms.uTime = ct.time),
        (e.vertexShader = e.vertexShader
          .replace(
            `#include <common>`,
            `#include <common>
uniform float uTime;`,
          )
          .replace(
            `#include <begin_vertex>`,
            `#include <begin_vertex>
      vec4 wp = modelMatrix * vec4(position, 1.0);
      float w = ${t === `hang` ? `(1.0 - uv.y)` : t === `flag` ? `uv.x` : `sin(uv.x * 3.14159)`};
      float wave = sin(wp.x * 1.7 + wp.z * 1.3 + uTime * 1.6) * 0.6 + sin(wp.x * 3.1 - uTime * 2.3 + wp.y * 2.0) * 0.4;
      transformed += normal * wave * ${n.toFixed(3)} * w;`,
          ));
    }),
    (e.customProgramCacheKey = () => `wind-` + t + n),
    e
  );
}
function dt(e, t, n, r = 256, i = 512) {
  let a = document.createElement(`canvas`);
  (a.width = r), (a.height = i);
  let o = a.getContext(`2d`);
  (o.fillStyle = t), o.fillRect(0, 0, r, i);
  let s = n;
  if (e === `stripe`) {
    let e = 0,
      t = 0;
    for (; e < i; ) {
      let n = [6, 18, 4, 30, 10][t % 5];
      (o.fillStyle = s[t % s.length]), o.fillRect(0, e, r, n), (e += n + [14, 26, 8, 40][t % 4]), t++;
    }
  } else if (e === `diamond`) {
    for (let e = 0; e < i / 64; e++)
      for (let n = -1; n < r / 64 + 1; n++) {
        let r = n * 64 + (e % 2) * 32,
          i = e * 64 + 32;
        (o.fillStyle = s[(e + n + 8) % s.length]),
          o.beginPath(),
          o.moveTo(r, i - 26),
          o.lineTo(r + 22, i),
          o.lineTo(r, i + 26),
          o.lineTo(r - 22, i),
          o.closePath(),
          o.fill(),
          (o.fillStyle = t),
          o.beginPath(),
          o.moveTo(r, i - 12),
          o.lineTo(r + 10, i),
          o.lineTo(r, i + 12),
          o.lineTo(r - 10, i),
          o.closePath(),
          o.fill();
      }
    for (let e of [0, r - 14]) (o.fillStyle = s[0]), o.fillRect(e, 0, 14, i);
  } else {
    (o.strokeStyle = s[0]),
      (o.lineWidth = 10),
      o.strokeRect(12, 12, r - 24, i - 24),
      (o.strokeStyle = s[1] || s[0]),
      (o.lineWidth = 3),
      o.strokeRect(26, 26, r - 52, i - 52);
    for (let e = 60; e < i - 40; e += 56)
      for (let t = 56; t < r - 40; t += 48) {
        (o.fillStyle = s[(t + e) % s.length]), o.beginPath();
        for (let n = 0; n < 8; n++) {
          let r = (n / 8) * Math.PI * 2;
          o.ellipse(t + Math.cos(r) * 6, e + Math.sin(r) * 6, 5, 2.5, r, 0, Math.PI * 2);
        }
        o.fill();
      }
  }
  for (let e = 0; e < r; e += 2)
    (o.fillStyle = e % 4 ? `rgba(255,240,210,0.035)` : `rgba(0,0,0,0.05)`), o.fillRect(e, 0, 1, i);
  for (let e = 0; e < i; e += 2) (o.fillStyle = `rgba(0,0,0,0.04)`), o.fillRect(0, e, r, 1);
  let c = new ne(a);
  return (c.colorSpace = Oe), (c.wrapS = c.wrapT = Me), (c.anisotropy = 4), c;
}
async function ft(e, t, n = () => {}, r = `high`) {
  let i = new ve(),
    a = Math.min(8, e.capabilities.getMaxAnisotropy()),
    o = async (e, r = !1, o = 1) => {
      let s = await i.loadAsync(`${t}assets/pbr/${e}`);
      return (s.wrapS = s.wrapT = Me), (s.anisotropy = a), s.repeat.set(o, o), r && (s.colorSpace = Oe), n(e), s;
    },
    s = r === `low` ? `1k` : `2k`,
    l = async (e, t) => {
      let [n, r, i] = await Promise.all([
        o(`${e}-color-${s}.jpg`, !0, t),
        o(`${e}-normal-${s}.jpg`, !1, t),
        o(`${e}-rough-${s}.jpg`, !1, t),
      ]);
      return { map: n, normalMap: r, roughnessMap: i };
    },
    [u, d, f, p, m, h, g] = await Promise.all([
      l(`stone`, 0.5),
      l(`floor`, 0.33),
      l(`sand`, 0.35),
      l(`wood`, 0.6),
      o(`carved-botanical-${s}.jpg`, !0, 1.2),
      o(`persian-carpet-${s}.jpg`, !0),
      new Ce().loadAsync(`${t}assets/pbr/sunset-2k.hdr`).then((e) => (n(`sky`), e)),
    ]),
    _ = (e) => new C(e),
    v = (e) => new x(e),
    y = (e, t, n, r = t === `sail` ? 0.38 : 0.12) =>
      ut(
        v({
          color: e,
          emissive: e,
          emissiveIntensity: r,
          roughness: 0.95,
          sheen: 0.7,
          sheenRoughness: 0.75,
          sheenColor: new O(`#d8b892`),
          side: 2,
        }),
        t,
        n,
      ),
    b = (e) => new de(e, e),
    S = (e, t, n, r, i, a = r === `sail` ? 0.3 : 0.08) => {
      let o = dt(e, t, n);
      return ut(
        v({
          map: o,
          emissive: `#ffffff`,
          emissiveMap: o,
          emissiveIntensity: a,
          roughness: 0.95,
          sheen: 0.6,
          sheenRoughness: 0.75,
          sheenColor: new O(`#d8b892`),
          side: 2,
        }),
        r,
        i,
      );
    },
    w = {
      stone: _({ ...u, color: `#d8bd93`, normalScale: b(0.5) }),
      stoneDark: _({ ...u, color: `#a8916f`, normalScale: b(0.7) }),
      plaster: _({
        map: u.map,
        normalMap: u.normalMap,
        roughnessMap: u.roughnessMap,
        color: `#e2c9a2`,
        normalScale: b(0.25),
      }),
      floor: _({ ...d, color: `#c9b593`, normalScale: b(0.8) }),
      floorDark: _({ ...d, color: `#8d7a60`, normalScale: b(0.8) }),
      sand: _({ ...f, color: `#e2bf88`, normalScale: b(0.9) }),
      wood: _({ ...p, color: `#8a5f43` }),
      woodDark: _({ ...p, color: `#4b3325` }),
      carved: _({ color: `#d9c19b`, map: m, bumpMap: m, bumpScale: 2.2, roughness: 0.92 }),
      carvedDark: _({ color: `#9c8462`, map: m, bumpMap: m, bumpScale: 2.2, roughness: 0.95 }),
      rug: v({
        map: h,
        color: `#ffffff`,
        roughness: 0.96,
        sheen: 0.6,
        sheenRoughness: 0.8,
        sheenColor: new O(`#c9a884`),
        side: 2,
      }),
      gold: v({ color: `#e7bd72`, metalness: 1, roughness: 0.24, clearcoat: 0.25, clearcoatRoughness: 0.2 }),
      goldSoft: _({ color: `#d6aa5f`, metalness: 1, roughness: 0.38 }),
      brass: _({ color: `#b98a4a`, metalness: 0.92, roughness: 0.36 }),
      brassDark: _({ color: `#6e4e2a`, metalness: 0.85, roughness: 0.5 }),
      copper: _({ color: `#b5683f`, metalness: 0.9, roughness: 0.4 }),
      pearl: v({
        color: `#fbf0dc`,
        metalness: 0.05,
        roughness: 0.14,
        iridescence: 0.55,
        iridescenceIOR: 1.35,
        clearcoat: 1,
        clearcoatRoughness: 0.06,
        sheen: 0.4,
        sheenColor: new O(`#ffe9d6`),
      }),
      emerald: v({ color: `#1f6b4c`, metalness: 0, roughness: 0.05, clearcoat: 1 }),
      ruby: v({ color: `#8a1730`, metalness: 0, roughness: 0.06, clearcoat: 1 }),
      velvet: v({ color: `#183128`, roughness: 1, sheen: 1, sheenRoughness: 0.5, sheenColor: new O(`#4f6e5c`) }),
      velvetRed: v({ color: `#3d1218`, roughness: 1, sheen: 1, sheenRoughness: 0.5, sheenColor: new O(`#87454a`) }),
      glass: v({
        color: `#fff3de`,
        metalness: 0.1,
        roughness: 0.05,
        clearcoat: 1,
        transparent: !0,
        opacity: 0.1,
        depthWrite: !1,
        side: 2,
      }),
      lampGlass: _({ color: `#ffcf8f`, emissive: `#e8893a`, emissiveIntensity: 2.4, roughness: 0.4 }),
      ember: _({ color: `#ff9a3c`, emissive: `#ff7a1c`, emissiveIntensity: 3 }),
      ceramicTeal: v({ color: `#2f6b6a`, roughness: 0.25, clearcoat: 0.8 }),
      ceramicCream: v({ color: `#e8dcc4`, roughness: 0.3, clearcoat: 0.6 }),
      ceramicOchre: v({ color: `#b5793a`, roughness: 0.35, clearcoat: 0.5 }),
      clay: _({ color: `#a7623f`, roughness: 0.95 }),
      linen: v({ color: `#b3a07f`, roughness: 1, sheen: 0.5, sheenColor: new O(`#fff2da`), side: 2 }),
      clothCream: y(`#e6d3b0`, `hang`, 0.07),
      clothTerracotta: y(`#a5503a`, `hang`, 0.07),
      clothOchre: y(`#c08a3e`, `hang`, 0.07),
      clothBurgundy: y(`#6e2232`, `hang`, 0.06),
      clothIndigo: y(`#2c3a55`, `hang`, 0.06),
      sailCream: y(`#e9d8b8`, `sail`, 0.12),
      sailTerracotta: y(`#b0613f`, `sail`, 0.12),
      sailOchre: y(`#c99a52`, `sail`, 0.12),
      sailStripe: S(`stripe`, `#d9c4a0`, [`#a5503a`, `#2c3a55`, `#c08a3e`, `#6e2232`], `sail`, 0.12),
      sailKilim: S(`diamond`, `#b0613f`, [`#e2cfa8`, `#2c3a55`, `#c99a52`, `#6e2232`], `sail`, 0.12),
      sailOchreStripe: S(`stripe`, `#c99a52`, [`#6e2232`, `#e6d3b0`, `#2f4a3e`], `sail`, 0.12),
      bannerKilim: S(`diamond`, `#6e2232`, [`#c99a52`, `#e6d3b0`, `#2f4a3e`, `#b0613f`], `hang`, 0.07),
      bannerBorder: S(`border`, `#a5503a`, [`#e6c88f`, `#2c3a55`, `#f0e0bd`], `hang`, 0.07),
      bannerIndigo: S(`border`, `#2c3a55`, [`#c99a52`, `#e6d3b0`, `#a5503a`], `hang`, 0.07),
      bannerStripe: S(`stripe`, `#e6d3b0`, [`#a5503a`, `#2c3a55`, `#c08a3e`], `hang`, 0.07),
      tableCloth: v({
        map: dt(`stripe`, `#8f3b2c`, [`#d9b46a`, `#2c3a55`, `#e6d3b0`]),
        roughness: 1,
        sheen: 0.25,
        sheenColor: new O(`#e7c9a0`),
        side: 2,
      }),
      tableCloth2: v({
        map: dt(`diamond`, `#2c3a55`, [`#c99a52`, `#a5503a`, `#e6d3b0`]),
        roughness: 1,
        sheen: 0.5,
        sheenColor: new O(`#e7c9a0`),
        side: 2,
      }),
      plasterDark: _({
        map: u.map,
        normalMap: u.normalMap,
        roughnessMap: u.roughnessMap,
        color: `#6a5442`,
        normalScale: b(0.35),
      }),
      rugHang: ut(v({ map: h, roughness: 0.96, sheen: 0.6, sheenColor: new O(`#c9a884`), side: 2 }), `hang`, 0.035),
      spiceRed: _({ color: `#9a2e1c`, roughness: 1 }),
      spiceSaffron: _({ color: `#c9861c`, roughness: 1 }),
      spiceGreen: _({ color: `#6b6a2a`, roughness: 1 }),
      spiceBrown: _({ color: `#6a3b1f`, roughness: 1 }),
      dark: _({ color: `#0d0a08`, roughness: 1 }),
      black: new c({ color: `#000000` }),
      skin: _({ color: `#b07a55`, roughness: 0.75 }),
    };
  (w.sandTex = f), (w.rugTex = h), (w.carvingTex = m);
  let ee = new Ne(e);
  (w.env = ee.fromEquirectangular(g).texture), g.dispose(), ee.dispose();
  for (let e of Object.keys(w)) w[e]?.isMaterial && (w[e].name = e);
  if (r === `low`)
    for (let e of Object.keys(w)) {
      let t = w[e];
      t?.isMeshPhysicalMaterial && ((t.sheen = 0), (t.clearcoat = 0), (t.iridescence = 0), (t.transmission = 0));
    }
  return w;
}
var pt;
function mt() {
  if (pt) return pt;
  let e = document.createElement(`canvas`);
  e.width = e.height = 64;
  let t = e.getContext(`2d`),
    n = t.createRadialGradient(32, 32, 0, 32, 32, 32);
  return (
    n.addColorStop(0, `rgba(255,248,225,1)`),
    n.addColorStop(0.18, `rgba(255,224,150,0.85)`),
    n.addColorStop(0.45, `rgba(240,180,80,0.25)`),
    n.addColorStop(1, `rgba(240,170,60,0)`),
    (t.fillStyle = n),
    t.fillRect(0, 0, 64, 64),
    (pt = new ne(e)),
    (pt.colorSpace = Oe),
    pt
  );
}
function ht(e = 0.05) {
  return new ie({
    uniforms: {
      map: { value: mt() },
      size: { value: e },
      opacity: { value: 1 },
      heightScale: ct.pointScale,
      tint: { value: new O(1, 0.86, 0.58) },
      boost: { value: 1.6 },
    },
    vertexShader: `attribute float aAlpha; attribute float aSize; varying float vAlpha; uniform float size; uniform float heightScale;
      void main(){ vAlpha=aAlpha; vec4 mv=modelViewMatrix*vec4(position,1.0); gl_Position=projectionMatrix*mv;
      gl_PointSize = size * aSize * heightScale / max(0.1,-mv.z); }`,
    fragmentShader: `uniform sampler2D map; uniform float opacity; uniform vec3 tint; uniform float boost; varying float vAlpha;
      void main(){ vec4 c=texture2D(map,gl_PointCoord); gl_FragColor=vec4(c.rgb*tint*boost, c.a*vAlpha*opacity); if(gl_FragColor.a<0.01) discard;}`,
    transparent: !0,
    depthWrite: !1,
    blending: 2,
  });
}
var gt = class {
    constructor(e = 240) {
      this.count = e;
      let t = We(77);
      (this.seed = Float32Array.from({ length: e }, () => t())),
        (this.phase = Float32Array.from({ length: e * 3 }, () => t() * Math.PI * 2));
      let n = new fe();
      n.setAttribute(`position`, new E(new Float32Array(e * 3), 3)),
        n.setAttribute(`aAlpha`, new E(new Float32Array(e), 1)),
        n.setAttribute(
          `aSize`,
          new E(
            Float32Array.from({ length: e }, () => 0.5 + t() * t() * 1.4),
            1,
          ),
        ),
        (this.mat = ht(0.04)),
        this.mat.uniforms.boost && (this.mat.uniforms.boost.value = 2),
        (this.points = new w(n, this.mat)),
        (this.points.frustumCulled = !1),
        (this.points.renderOrder = 5),
        (this.strength = 0),
        (this.target = 0),
        (this.samples = null),
        (this.length = 1),
        (this.flow = 0),
        (this.height = 0.85),
        (this.lowAtEnd = !0),
        (this.gaps = null);
    }
    setPath(e, t = {}) {
      if (!e || e.length < 2) {
        this.samples = null;
        return;
      }
      let n = new Le(
        e.map((e) => e.clone()),
        !1,
        `centripetal`,
        0.5,
      );
      this.length = n.getLength();
      let r = Math.max(32, Math.min(400, Math.round(this.length * 6)));
      (this.samples = n.getSpacedPoints(r)),
        (this.height = t.height ?? 0.85),
        (this.ground = t.ground || null),
        (this.gaps = t.gaps || null);
    }
    show(e = !0) {
      this.target = +!!e;
    }
    daylight(e) {
      (this.mat.uniforms.size.value = e ? 0.074 : 0.04),
        (this.mat.uniforms.boost.value = e ? 2.8 : 2),
        this.mat.uniforms.tint.value.set(1, e ? 0.72 : 0.82, e ? 0.3 : 0.5);
    }
    update(e, t) {
      if (
        ((this.strength = j(this.strength, this.target, 1.6, e)),
        (this.points.visible = this.strength > 0.01 && !!this.samples),
        !this.points.visible)
      )
        return;
      let n = this.points.geometry.attributes.position.array,
        r = this.points.geometry.attributes.aAlpha.array,
        i = this.samples,
        a = i.length - 1,
        o = 1.05 / this.length;
      this.flow += e * o;
      for (let e = 0; e < this.count; e++) {
        let o = (this.seed[e] + this.flow) % 1,
          s = o * a,
          c = Math.floor(s),
          l = s - c,
          u = i[c],
          d = i[Math.min(a, c + 1)],
          f = u.x + (d.x - u.x) * l,
          p = u.z + (d.z - u.z) * l,
          m = u.y + (d.y - u.y) * l,
          h = this.phase[e * 3],
          g = this.phase[e * 3 + 1],
          _ = this.phase[e * 3 + 2],
          v = 0.1 + 0.07 * Math.sin(_),
          y = this.height * (0.55 + 0.45 * Math.sin(o * 9 + g)) * (this.lowAtEnd ? 0.45 + 0.55 * (1 - o) : 1);
        (n[e * 3] = f + Math.sin(t * 0.7 + h + o * 20) * v),
          (n[e * 3 + 1] = (this.ground ? this.ground(f, p) : m) + y + Math.sin(t * 1.3 + g) * 0.06),
          (n[e * 3 + 2] = p + Math.cos(t * 0.6 + _ + o * 17) * v);
        let b = Math.min(1, o * 8) * Math.min(1, (1 - o) * 5);
        if (this.gaps)
          for (let [e, t] of this.gaps) o > e && o < t && (b *= 1 - Math.min(1, Math.min(o - e, t - o) * 30));
        let w = Math.max(0, Math.sin((o * this.length - t * 1.6) * 2.1)) ** 6; // pulse travelling toward the target
        r[e] = b * (0.5 + 0.5 * Math.max(0, Math.sin(t * 2.1 + h * 3))) * (0.7 + 0.65 * w) * this.strength;
      }
      (this.points.geometry.attributes.position.needsUpdate = !0),
        (this.points.geometry.attributes.aAlpha.needsUpdate = !0);
    }
  },
  _t = class {
    constructor(e, t, n = {}) {
      let r = We(n.seed || 5);
      (this.box = t), (this.count = e);
      let i = new fe();
      this.base = new Float32Array(e * 3);
      for (let n = 0; n < e; n++)
        (this.base[n * 3] = t.min.x + r() * (t.max.x - t.min.x)),
          (this.base[n * 3 + 1] = t.min.y + r() * (t.max.y - t.min.y)),
          (this.base[n * 3 + 2] = t.min.z + r() * (t.max.z - t.min.z));
      i.setAttribute(`position`, new E(this.base.slice(), 3)),
        i.setAttribute(
          `aAlpha`,
          new E(
            Float32Array.from({ length: e }, () => r()),
            1,
          ),
        ),
        i.setAttribute(
          `aSize`,
          new E(
            Float32Array.from({ length: e }, () => 0.4 + r() * 0.9),
            1,
          ),
        ),
        (this.mat = ht(n.size || 0.012)),
        (this.mat.uniforms.opacity.value = n.opacity ?? 0.5),
        (this.points = new w(i, this.mat)),
        (this.points.frustumCulled = !1),
        (this.speed = n.speed || 0.03),
        (this.seeds = Float32Array.from({ length: e }, () => r() * 100));
    }
    update(e) {
      if (!this.points.visible) return;
      let t = this.points.geometry.attributes.position.array,
        n = this.base,
        r = this.box.max.y - this.box.min.y;
      for (let i = 0; i < this.count; i++) {
        let a = this.seeds[i];
        (t[i * 3] = n[i * 3] + Math.sin(e * 0.21 + a) * 0.25),
          (t[i * 3 + 1] = this.box.min.y + ((n[i * 3 + 1] - this.box.min.y + e * this.speed * (0.5 + (a % 1))) % r)),
          (t[i * 3 + 2] = n[i * 3 + 2] + Math.cos(e * 0.17 + a * 1.3) * 0.25);
      }
      this.points.geometry.attributes.position.needsUpdate = !0;
    }
  },
  F = { p: [0, 0, 0], f: [0, 0, -1], u: [0, 1, 0] },
  vt = class {
    constructor(e) {
      (this.base = e),
        (this.ctx = null),
        (this.manifest = {}),
        (this.buffers = new Map()),
        (this.musicVol = 0.7),
        (this.sfxVol = 0.9),
        (this.voice = !1),
        (this.current = { music: null, amb: null }),
        (this.speaking = null);
    }
    async init() {
      try {
        let e = await fetch(`${this.base}assets/audio/manifest.json`);
        e.ok && (this.manifest = await e.json());
      } catch {}
    }
    unlock() {
      if (!this.ctx) {
        let e = window.AudioContext || window.webkitAudioContext;
        if (!e) return;
        (this.ctx = new e()), (this.master = this.ctx.createGain()), this.master.connect(this.ctx.destination);
        let t = this.ctx.createDynamicsCompressor();
        (t.threshold.value = -14),
          (t.ratio.value = 3),
          (t.attack.value = 0.01),
          (t.release.value = 0.3),
          t.connect(this.master),
          (this.bus = t),
          (this.musicBus = this.ctx.createGain()),
          this.musicBus.connect(t),
          (this.sfxBus = this.ctx.createGain()),
          this.sfxBus.connect(t),
          this.applyVolumes();
      }
      this.ctx.state !== `running` && this.ctx.resume().catch(() => {});
    }
    applyVolumes() {
      this.ctx && ((this.musicBus.gain.value = this.musicVol * 0.85), (this.sfxBus.gain.value = this.sfxVol));
    }
    has(e) {
      return !!this.manifest[e];
    }
    load(e) {
      return !this.ctx || !this.has(e)
        ? Promise.resolve(null)
        : (this.buffers.has(e) ||
            this.buffers.set(
              e,
              fetch(`${this.base}assets/audio/${this.manifest[e].file}`)
                .then((e) => (e.ok ? e.arrayBuffer() : Promise.reject(e.status)))
                .then((e) => this.ctx.decodeAudioData(e))
                .catch(() => null),
            ),
          this.buffers.get(e));
    }
    preload(e) {
      for (let t of e) this.load(t);
    }
    async bed(e, t, n = 1, r = 3) {
      if (!this.ctx) return;
      let i = this.current[e];
      if (i?.name === t) {
        i.gain.gain.setTargetAtTime(n, this.ctx.currentTime, r / 3);
        return;
      }
      if (i) {
        i.gain.gain.setTargetAtTime(0, this.ctx.currentTime, r / 3);
        let e = i.src;
        setTimeout(() => {
          try {
            e?.stop();
          } catch {}
        }, r * 2e3);
      }
      if (((this.current[e] = null), !t)) return;
      let a = { name: t, gain: this.ctx.createGain(), src: null };
      (a.gain.gain.value = 0), a.gain.connect(e === `music` ? this.musicBus : this.sfxBus), (this.current[e] = a);
      let o = await this.load(t);
      if (!o || this.current[e] !== a) return;
      let s = this.ctx.createBufferSource();
      (s.buffer = o),
        (s.loop = this.manifest[t]?.loop !== !1),
        s.connect(a.gain),
        s.start(),
        (a.src = s),
        a.gain.gain.setTargetAtTime(n, this.ctx.currentTime, r / 3);
    }
    music(e, t = 1, n = 4) {
      return this.bed(`music`, e, t, n);
    }
    ambience(e, t = 1, n = 3) {
      return this.bed(`amb`, e, t, n);
    }
    play(e, t = {}) {
      if (!this.ctx || !this.has(e)) return null;
      let n = {
        stopped: !1,
        stop: () => {
          n.stopped = !0;
        },
      };
      return (
        this.load(e).then((e) => {
          if (!e || n.stopped) return;
          let r = this.ctx,
            i = r.createBufferSource(),
            a = r.createGain();
          (i.buffer = e), (i.loop = !!t.loop), (i.playbackRate.value = t.rate ?? 1), (a.gain.value = t.volume ?? 1);
          let o = a;
          if (t.position) {
            let e = r.createPanner();
            (e.panningModel = `HRTF`),
              (e.distanceModel = `inverse`),
              (e.refDistance = t.ref ?? 1.2),
              (e.rolloffFactor = t.rolloff ?? 1.1),
              yt(e, t.position),
              a.connect(e),
              (o = e),
              (n.panner = e);
          }
          o.connect(this.sfxBus),
            i.connect(a),
            i.start(r.currentTime + (t.delay || 0)),
            (n.stop = (e = 0.3) => {
              (n.stopped = !0),
                a.gain.setTargetAtTime(0, r.currentTime, e / 3),
                setTimeout(
                  () => {
                    try {
                      i.stop();
                    } catch {}
                  },
                  e * 1500 + 50,
                );
            }),
            (n.gain = a),
            (n.src = i);
        }),
        n
      );
    }
    playVariant(e, t, n) {
      return this.play(`${e}${1 + Math.floor(Math.random() * t)}`, n);
    }
    chime(e = 880, t = 0.05) {
      if (!this.ctx) return;
      let n = this.ctx,
        r = n.currentTime;
      for (let [i, a] of [
        [1, 0],
        [1.5, 0.07],
        [2, 0.14],
      ]) {
        let o = n.createOscillator(),
          s = n.createGain();
        (o.type = `sine`),
          (o.frequency.value = e * i),
          s.gain.setValueAtTime(0, r + a),
          s.gain.linearRampToValueAtTime(t, r + a + 0.01),
          s.gain.exponentialRampToValueAtTime(1e-4, r + a + 1.4),
          o.connect(s),
          s.connect(this.sfxBus),
          o.start(r + a),
          o.stop(r + a + 1.5);
      }
    }
    listener(e) {
      if (!this.ctx) return;
      let t = this.ctx.listener,
        n = e.matrixWorld.elements;
      if (
        ((F.p[0] = n[12]),
        (F.p[1] = n[13]),
        (F.p[2] = n[14]),
        (F.f[0] = -n[8]),
        (F.f[1] = -n[9]),
        (F.f[2] = -n[10]),
        (F.u[0] = n[4]),
        (F.u[1] = n[5]),
        (F.u[2] = n[6]),
        t.positionX)
      ) {
        let e = this.ctx.currentTime;
        t.positionX.setTargetAtTime(F.p[0], e, 0.02),
          t.positionY.setTargetAtTime(F.p[1], e, 0.02),
          t.positionZ.setTargetAtTime(F.p[2], e, 0.02),
          t.forwardX.setTargetAtTime(F.f[0], e, 0.02),
          t.forwardY.setTargetAtTime(F.f[1], e, 0.02),
          t.forwardZ.setTargetAtTime(F.f[2], e, 0.02),
          t.upX.setTargetAtTime(F.u[0], e, 0.02),
          t.upY.setTargetAtTime(F.u[1], e, 0.02),
          t.upZ.setTargetAtTime(F.u[2], e, 0.02);
      } else t.setPosition(...F.p), t.setOrientation(...F.f, ...F.u);
    }
    async say(e, t) {
      this.stopSpeech();
      let n = this.manifest[`vo_` + e];
      if (n && this.ctx) {
        let t = this.play(`vo_` + e, { volume: 1 });
        return (this.speaking = t), (n.duration || 4) + 0.3;
      }
      if (!this.voice || !window.speechSynthesis) return null;
      let r = new SpeechSynthesisUtterance(t),
        i = speechSynthesis.getVoices();
      return (
        (r.voice =
          [`Serena`, `Kate`, `Martha`, `Stephanie`, `Moira`, `Fiona`, `Samantha`, `Google UK English Female`, `Karen`]
            .map((e) => i.find((t) => t.name.includes(e)))
            .find(Boolean) ||
          i.find((e) => /en-GB/.test(e.lang)) ||
          null),
        (r.rate = 0.86),
        (r.pitch = 1.04),
        (r.volume = 0.9),
        speechSynthesis.speak(r),
        (this.speaking = r),
        null
      );
    }
    stopSpeech() {
      try {
        window.speechSynthesis?.cancel();
      } catch {}
      this.speaking?.stop && this.speaking.stop(0.2), (this.speaking = null);
    }
  };
function yt(e, t) {
  e.positionX
    ? ((e.positionX.value = t.x), (e.positionY.value = t.y), (e.positionZ.value = t.z))
    : e.setPosition(t.x, t.y, t.z);
}
var I = (e) => document.getElementById(e),
  bt = new D();
function xt(e, t, n, r, i, a) {
  e.beginPath(),
    e.moveTo(t + a, n),
    e.arcTo(t + r, n, t + r, n + i, a),
    e.arcTo(t + r, n + i, t, n + i, a),
    e.arcTo(t, n + i, t, n, a),
    e.arcTo(t, n, t + r, n, a),
    e.closePath();
}
var St = class {
    constructor() {
      (this.state = {
        chapter: ``,
        objective: ``,
        speaker: ``,
        subtitle: ``,
        prompt: ``,
        kind: ``,
        hold: 0,
        toast: ``,
      }),
        (this.subTimer = null),
        (this.toastTimer = null),
        (this.dirty = !0),
        (this.subsOn = !0),
        (this.canvas = document.createElement(`canvas`)),
        (this.canvas.width = 1024),
        (this.canvas.height = 420),
        (this.tex = new ne(this.canvas)),
        (this.tex.colorSpace = Oe),
        (this.panel = new S(
          new u(0.86, 0.353),
          new c({ map: this.tex, transparent: !0, depthTest: !1, depthWrite: !1, toneMapped: !1 }),
        )),
        (this.panel.renderOrder = 999),
        (this.panel.visible = !1),
        (this.panel.frustumCulled = !1),
        (this.panelYaw = 0),
        (this.menu = this.makeMenu());
    }
    objective(e, t) {
      (this.state.chapter = e || ``),
        (this.state.objective = t || ``),
        (this.dirty = !0),
        (I(`obj-chapter`).textContent = e || ``),
        (I(`obj-text`).textContent = t || ``),
        I(`objective`).classList.toggle(`show`, !!t);
    }
    subtitle(e, t, n = 5) {
      clearTimeout(this.subTimer),
        (this.state.speaker = e || ``),
        (this.state.subtitle = t || ``),
        (this.dirty = !0),
        (I(`sub-speaker`).textContent = e || ``),
        (I(`sub-text`).textContent = t || ``),
        I(`subtitle`).classList.toggle(`show`, !!t && this.subsOn),
        t && n && (this.subTimer = setTimeout(() => this.subtitle(``, ``), n * 1e3));
    }
    prompt(e, t = `press`, n = !1) {
      (e !== this.state.prompt || t !== this.state.kind) &&
        ((this.state.prompt = e || ``),
        (this.state.kind = t),
        (this.dirty = !0),
        (I(`prompt-text`).textContent = e || ``),
        (I(`prompt-key`).textContent = t === `hold` ? `Hold` : t === `drag` ? `Hold + move` : `Click`),
        I(`prompt`).classList.toggle(`show`, !!e),
        I(`crosshair`).classList.toggle(`active`, !!e));
    }
    hold(e) {
      Math.abs(e - this.state.hold) < 0.01 ||
        ((this.state.hold = e),
        (this.dirty = !0),
        (document.querySelector(`#hold-ring circle`).style.strokeDashoffset = String(113.1 * (1 - Math.min(1, e)))));
    }
    toast(e, t = 3.5) {
      clearTimeout(this.toastTimer),
        (I(`toast`).textContent = e),
        I(`toast`).classList.add(`show`),
        (this.state.toast = e),
        (this.dirty = !0),
        (this.toastTimer = setTimeout(() => {
          I(`toast`).classList.remove(`show`), (this.state.toast = ``), (this.dirty = !0);
        }, t * 1e3));
    }
    cinematic(e) {
      document.body.classList.toggle(`cinematic`, !!e);
    }
    skip(e, t = 0) {
      (I(`skip-hint`).hidden = !e), (I(`skip-fill`).style.width = `${Math.min(1, t) * 100}%`);
    }
    crosshair(e) {
      I(`crosshair`).classList.toggle(`hidden`, !e);
    }
    inspect(e) {
      (I(`inspect-card`).hidden = !e),
        e && ((I(`inspect-name`).textContent = e.name), (I(`inspect-line`).textContent = e.line)),
        (this.state.inspect = e),
        (this.dirty = !0);
    }
    drawPanel() {
      if (!this.dirty) return;
      this.dirty = !1;
      let e = this.canvas.getContext(`2d`),
        t = this.state,
        n = 1024;
      e.clearRect(0, 0, n, 420), (e.textAlign = `center`);
      let r = [];
      if (t.subtitle && this.subsOn) {
        r.push({ t: (t.speaker || ``).toUpperCase(), f: `600 19px Arial`, col: `#dcb877`, h: 34 });
        for (let n of this.wrapLines(e, t.subtitle, `34px Georgia`, 880).slice(0, 3))
          r.push({ t: n, f: `34px Georgia`, col: `#f6ecd9`, h: 44 });
      } else if (t.inspect) {
        r.push({ t: `KAVYA POTLURI`, f: `600 17px Arial`, col: `#dcb877`, h: 32 }),
          r.push({ t: t.inspect.name, f: `36px Georgia`, col: `#f6ecd9`, h: 48 });
        for (let n of this.wrapLines(e, t.inspect.line, `24px Arial`, 860).slice(0, 3))
          r.push({ t: n, f: `24px Arial`, col: `#d8cdb8`, h: 32 });
      } else if (t.toast)
        for (let n of this.wrapLines(e, t.toast, `italic 28px Georgia`, 860).slice(0, 2))
          r.push({ t: n, f: `italic 28px Georgia`, col: `#f6ecd9`, h: 38 });
      if (
        (t.objective &&
          !t.subtitle &&
          (r.push({ t: t.chapter.toUpperCase(), f: `600 16px Arial`, col: `#dcb877`, h: 30, gap: r.length ? 14 : 0 }),
          r.push({ t: t.objective, f: `28px Georgia`, col: `#efe4cf`, h: 38 })),
        t.prompt &&
          r.push({
            t: `${t.kind === `hold` ? `HOLD TRIGGER` : `TRIGGER`}  ·  ${t.prompt}`,
            f: `600 21px Arial`,
            col: `#e8c98a`,
            h: 34,
            gap: 10,
          }),
        !r.length)
      ) {
        this.tex.needsUpdate = !0;
        return;
      }
      let i = 0,
        a = 0;
      for (let t of r) (i += t.h + (t.gap || 0)), (e.font = t.f), (a = Math.max(a, e.measureText(t.t).width));
      let o = Math.min(1004, a + 90),
        s = i + 44,
        c = (n - o) / 2,
        l = 420 - s - 8;
      (e.fillStyle = `rgba(18,14,10,0.62)`),
        xt(e, c, l, o, s, 26),
        e.fill(),
        (e.strokeStyle = `rgba(220,184,119,0.35)`),
        (e.lineWidth = 2),
        xt(e, c + 1, l + 1, o - 2, s - 2, 25),
        e.stroke();
      let u = l + 22;
      for (let t of r)
        (u += (t.gap || 0) + t.h), (e.font = t.f), (e.fillStyle = t.col), e.fillText(t.t, n / 2, u - t.h * 0.28);
      this.tex.needsUpdate = !0;
    }
    wrapLines(e, t, n, r) {
      e.font = n;
      let i = [],
        a = ``;
      for (let n of String(t).split(` `))
        e.measureText(a + n).width > r && a ? (i.push(a.trim()), (a = n + ` `)) : (a += n + ` `);
      return a.trim() && i.push(a.trim()), i;
    }
    updatePanel(e, t, n) {
      if (((this.panel.visible = n), !n)) return;
      this.drawPanel(), t.getWorldPosition(bt);
      let r = t.getWorldDirection(new D()),
        i = Math.atan2(r.x, r.z),
        a = ((((i - this.panelYaw + Math.PI) % (Math.PI * 2)) + Math.PI * 2) % (Math.PI * 2)) - Math.PI;
      (Math.abs(a) > 0.45 || this.snapPanel) && ((this.following = !0), (this.snapPanel = !1)),
        this.following && ((this.panelYaw = Ue(this.panelYaw, i, 3, e)), Math.abs(a) < 0.05 && (this.following = !1));
      let o = 1.5;
      this.panel.position.set(
        bt.x + Math.sin(this.panelYaw) * o,
        j(this.panel.position.y || bt.y, bt.y - 0.52, 4, e),
        bt.z + Math.cos(this.panelYaw) * o,
      ),
        this.panel.lookAt(bt.x, bt.y, bt.z),
        this.menu.visible &&
          (this.menu.position.set(bt.x + Math.sin(this.menuYaw) * 1.1, bt.y - 0.1, bt.z + Math.cos(this.menuYaw) * 1.1),
          this.menu.lookAt(bt));
    }
    makeMenu() {
      let e = document.createElement(`canvas`);
      (e.width = 768), (e.height = 640);
      let t = new ne(e);
      t.colorSpace = Oe;
      let n = new S(new u(0.72, 0.6), new c({ map: t, transparent: !0, depthTest: !1, toneMapped: !1 }));
      return (n.renderOrder = 1e3), (n.visible = !1), (n.userData.canvas = e), (n.userData.tex = t), n;
    }
    drawMenu(e) {
      let t = this.menu,
        n = t.userData.canvas.getContext(`2d`);
      n.clearRect(0, 0, 768, 640),
        (n.fillStyle = `rgba(22,17,12,0.94)`),
        n.fillRect(0, 0, 768, 640),
        (n.strokeStyle = `rgba(220,184,119,0.6)`),
        (n.lineWidth = 2),
        n.strokeRect(2, 2, 764, 636),
        (n.textAlign = `center`),
        (n.fillStyle = `#dcb877`),
        (n.font = `600 20px Arial`),
        n.fillText(`THE SOUK OF STOLEN WISHES`, 384, 62),
        e.forEach((e, t) => {
          let r = 110 + t * 88;
          (n.fillStyle = t === 0 ? `#dcb877` : `rgba(255,255,255,0.06)`),
            n.fillRect(84, r, 600, 68),
            (n.fillStyle = t === 0 ? `#21180d` : `#f3e8d4`),
            (n.font = `30px Georgia`),
            n.fillText(e.label, 384, r + 45);
        }),
        (t.userData.items = e),
        (t.userData.tex.needsUpdate = !0);
    }
    menuPick(e) {
      let t = this.menu.userData.items || [],
        n = (1 - e.y) * 640,
        r = Math.floor((n - 110) / 88);
      return r >= 0 && r < t.length && (n - 110) % 88 < 68 ? t[r] : null;
    }
  },
  Ct = {
    uniforms: {
      tDiffuse: { value: null },
      time: { value: 0 },
      vignette: { value: 0.32 },
      grain: { value: 0 },
      warmth: { value: 0.015 },
    },
    vertexShader: `varying vec2 vUv; void main(){ vUv = uv; gl_Position = projectionMatrix * modelViewMatrix * vec4(position,1.0); }`,
    fragmentShader: `uniform sampler2D tDiffuse; uniform float time, vignette, grain, warmth; varying vec2 vUv;
    float h(vec2 p){ return fract(sin(dot(p, vec2(12.9898,78.233)) + time) * 43758.5453); }
    void main(){ vec4 c = texture2D(tDiffuse, vUv); vec2 d = vUv - 0.5; float v = 1.0 - dot(d, d) * vignette * 2.2;
      c.rgb *= v; c.rgb += (h(vUv * 1000.0) - 0.5) * grain; c.rgb += vec3(warmth, warmth * 0.4, -warmth * 0.6) * c.rgb; vec3 s = clamp(c.rgb, 0.0, 1.0); c.rgb = mix(c.rgb, s * s * (3.0 - 2.0 * s), 0.16); float l = dot(c.rgb, vec3(0.2126, 0.7152, 0.0722)); c.rgb = mix(vec3(l), c.rgb, 1.03); gl_FragColor = c; }`,
  },
  wt = class {
    constructor(e, t, n, ao = !1) {
      this.renderer = e;
      let r = new be(1, 1, { type: ge, samples: 4 });
      if (((this.composer = new pe(e, r)), this.composer.addPass(new De(t, n)), ao)) {
        // contact shadows where stone meets stone, under stalls, around props — desktop "Cinematic" only
        (this.ao = new GTAOPass(t, n, innerWidth, innerHeight)),
          (this.ao.blendIntensity = 0.85),
          this.ao.updateGtaoMaterial({ radius: 0.45, distanceExponent: 1, thickness: 1.2, scale: 1.1, samples: 8 }),
          this.ao.updatePdMaterial({ lumaPhi: 10, depthPhi: 2, normalPhi: 3, radius: 4, rings: 2, samples: 8 }),
          this.composer.addPass(this.ao);
      }
      this.composer,
        (this.bloom = new xe(new de(innerWidth, innerHeight), 0.15, 0.45, 0.96)),
        this.composer.addPass(this.bloom),
        this.composer.addPass(new je()),
        (this.grade = new re(Ct)),
        this.composer.addPass(this.grade),
        this.resize();
    }
    resize() {
      this.composer.setPixelRatio(this.renderer.getPixelRatio()), this.composer.setSize(innerWidth, innerHeight);
    }
    render(e) {
      let t = performance.now();
      if (this.ao?.enabled) {
        // safety net: if this machine can't hold ~37 fps with ambient occlusion once warmed up, drop it
        let n = Math.min(100, t - (this.last ?? t));
        (this.ema = (this.ema ?? 16) * 0.97 + n * 0.03), (this.t0 ??= t), this.ema > 27 && t - this.t0 > 1e4 && ((this.ao.enabled = !1), (this.aoTripped = !0));
      }
      (this.last = t), (this.grade.uniforms.time.value = e % 10), this.composer.render();
    }
  },
  Tt = Math.PI * 2;
function Et(e, t, n, r = 24, i = 0) {
  let a = (n * n + (e * e) / 4) / e,
    o = a - e / 2,
    s = Math.atan2(n, -o),
    c = [];
  for (let e = 0; e <= r; e++) {
    let n = Math.PI + (s - Math.PI) * (e / r);
    c.push(new de(i + o + Math.cos(n) * a, t + Math.sin(n) * a));
  }
  for (let e = r - 1; e >= 0; e--) {
    let t = c[e];
    c.push(new de(2 * i - t.x, t.y));
  }
  return c;
}
function Dt(e, t, n, r = 0, i = new we()) {
  let a = Et(e, t, n, 20, r);
  i.moveTo(r - e / 2, 0);
  for (let e of a) i.lineTo(e.x, e.y);
  return i.lineTo(r + e / 2, 0), i.closePath(), i;
}
var Ot = class e {
  constructor(e, t) {
    (this.M = e), (this.g = t), (this.r = We(11)), (this.lanterns = []), (this.flickerLights = []);
  }
  at(e) {
    return (this.g = e), this;
  }
  mesh(e, t, n = 0, r = 0, i = 0, a = this.g) {
    let o = new S(e, t);
    return o.position.set(n, r, i), (o.castShadow = !0), (o.receiveShadow = !0), a.add(o), o;
  }
  box(e, t, n, r, i, a, o = this.M.stone, s, c = 1) {
    [e, t, n, r, i, a] = separateCoplanar(s || this.g, e, t, n, r, i, a);
    let l = Math.min(e, t, n),
      u = U.quality === `high` && l >= 0.03 ? new RoundedBoxGeometry(e, t, n, 1, Math.min(0.02, l * 0.22)) : new ye(e, t, n);
    return this.mesh(lt(u, c), o, r, i, a, s);
  }
  block(e, t, n, r, i, a, o = this.M.stone, s) {
    return this.box(Math.abs(n - e), a - i, Math.abs(r - t), (e + n) / 2, (i + a) / 2, (t + r) / 2, o, s);
  }
  cyl(e, t, n, i, a, o, s = this.M.stone, c = 16, l) {
    return this.mesh(new r(e, t, n, c), s, i, a, o, l);
  }
  sphere(e, t, n, r, i = this.M.gold, a = 16, o) {
    return this.mesh(new T(e, a, Math.max(6, (a * 0.6) | 0)), i, t, n, r, o);
  }
  lathe(e, t, n, r, i, a = 20, o) {
    return this.mesh(
      new g(
        e.map(([e, t]) => new de(e, t)),
        a,
      ),
      i,
      t,
      n,
      r,
      o,
    );
  }
  tube(e, t, n = this.M.gold, r, i, a = 6) {
    let o = new Le(e.map((e) => (e.isVector3 ? e : new D(...e))));
    return this.mesh(new ce(o, i || Math.max(8, e.length * 4), t, a, !1), n, 0, 0, 0, r);
  }
  archWall({
    x: e = 0,
    z: t = 0,
    rotY: n = 0,
    width: r = 8,
    height: i = 6,
    depth: o = 0.8,
    openW: c = 3,
    spring: l = 2.6,
    rise: u,
    mat: d = this.M.stone,
    trim: f = this.M.carved,
    parent: p = this.g,
    band: m = 0.32,
    openX: g = 0,
  }) {
    u ??= c * 0.66;
    let _ = new h();
    _.position.set(e, 0, t), (_.rotation.y = n), p.add(_);
    let v = new we();
    v.moveTo(-r / 2, 0),
      v.lineTo(r / 2, 0),
      v.lineTo(r / 2, i),
      v.lineTo(-r / 2, i),
      v.closePath(),
      v.holes.push(Dt(c, l, u, g, new s()));
    let y = new a(v, { depth: o, bevelEnabled: !1, curveSegments: 6 });
    if ((y.translate(0, 0, -o / 2), lt(y), this.mesh(y, d, 0, 0, 0, _), f)) {
      let e = Dt(c + m * 2, l, u + m, g);
      e.holes.push(Dt(c, l, u, g, new s()));
      let t = new a(e, {
        depth: o + 0.12,
        bevelEnabled: !0,
        bevelSize: 0.02,
        bevelThickness: 0.02,
        bevelSegments: 1,
        curveSegments: 6,
      });
      t.translate(0, 0, -(o + 0.12) / 2);
      let n = t.attributes.uv,
        r = t.attributes.position;
      for (let e = 0; e < r.count; e++) n.setXY(e, r.getX(e) * 0.9, r.getY(e) * 0.9);
      this.mesh(t, f, 0, 0, 0, _);
      for (let e of [-1, 1]) {
        let t = g + e * (c / 2 + m * 0.5);
        for (let e of [-1, 1])
          this.cyl(0.09, 0.1, l - 0.3, t, (l - 0.3) / 2 + 0.15, e * (o / 2 + 0.08), this.M.stone, 10, _),
            this.box(0.3, 0.14, 0.24, t, l - 0.08, e * (o / 2 + 0.06), f, _),
            this.box(0.28, 0.16, 0.24, t, 0.08, e * (o / 2 + 0.06), this.M.stoneDark, _);
      }
    }
    return _;
  }
  column(e, t, n = 4, r = 0.24, i = this.M.stone, a = this.g) {
    let o = new h();
    return (
      o.position.set(e, 0, t),
      a.add(o),
      this.box(r * 2.6, 0.22, r * 2.6, 0, 0.11, 0, this.M.stoneDark, o),
      this.cyl(r * 1.15, r * 1.25, 0.18, 0, 0.31, 0, i, 16, o),
      this.cyl(r * 0.92, r, n - 0.85, 0, 0.4 + (n - 0.85) / 2, 0, i, 16, o),
      this.cyl(r * 1.35, r * 0.95, 0.26, 0, n - 0.32, 0, this.M.carved, 16, o),
      this.box(r * 2.9, 0.2, r * 2.9, 0, n - 0.1, 0, this.M.stoneDark, o),
      o
    );
  }
  lantern(e, t, n, r = 1, i = 0.8) {
    this.lanterns.push({ x: e, y: t, z: n, s: r, chain: i });
  }
  flushLanterns(t = this.g, i = 2.4) {
    if (!this.lanterns.length) return null;
    let a = this.M,
      o = this.lanterns.length;
    if (!e.lanternGeo) {
      let t = [],
        n = new y(0.17, 0.2, 6);
      n.translate(0, 0.27, 0), t.push(n);
      let i = new T(0.035, 8, 6);
      i.translate(0, 0.4, 0), t.push(i);
      let a = new Pe(0.035, 0.008, 5, 12);
      a.translate(0, 0.45, 0), t.push(a);
      let o = new r(0.14, 0.09, 0.08, 6);
      o.translate(0, -0.21, 0), t.push(o);
      let s = new y(0.05, 0.12, 6);
      s.rotateX(Math.PI), s.translate(0, -0.3, 0), t.push(s);
      for (let e = 0; e < 6; e++) {
        let n = (e * Tt) / 6,
          r = new ye(0.018, 0.36, 0.018);
        r.translate(Math.cos(n) * 0.15, 0, Math.sin(n) * 0.15), t.push(r);
      }
      let c = new r(0.158, 0.158, 0.03, 6, 1, !0);
      c.translate(0, 0.07, 0),
        t.push(c),
        (e.lanternGeo = _e(t.map((e) => e.toNonIndexed()))),
        (e.glassGeo = new r(0.135, 0.13, 0.34, 6)),
        (e.chainGeo = new r(0.006, 0.006, 1, 4)),
        e.chainGeo.translate(0, 0.5, 0);
    }
    let s = a.lampGlass.clone();
    s.emissiveIntensity = i;
    let c = new m(e.lanternGeo, a.brass, o),
      l = new m(e.glassGeo, s, o),
      u = new m(e.chainGeo, a.brassDark, o),
      d = new n(),
      f = new _(),
      p = new D(),
      h = new D(),
      k = 0;
    this.lanterns.forEach((e, t) => {
      f.setFromAxisAngle(new D(0, 1, 0), this.r() * Tt),
        d.compose(h.set(e.x, e.y, e.z), f, p.setScalar(e.s)),
        c.setMatrixAt(t, d),
        l.setMatrixAt(t, d);
      // A chainless lantern must get no chain instance: a zero Y-scale makes the instanced normal 0/0 = NaN,
      // and one NaN pixel through the bloom blacks out the whole frame.
      e.chain > 0 && (d.compose(h.set(e.x, e.y + 0.45 * e.s, e.z), f, p.set(1, e.chain, 1)), u.setMatrixAt(k++, d));
    });
    u.count = k;
    for (let e of [c, l, u])
      (e.castShadow = !1), (e.receiveShadow = !1), (e.userData.dynamic = !0), e.computeBoundingSphere(), t.add(e);
    c.castShadow = !0;
    let g = new Float32Array(o * 3),
      v = new Float32Array(o).fill(1),
      b = new Float32Array(o);
    this.lanterns.forEach((e, t) => {
      (g[t * 3] = e.x), (g[t * 3 + 1] = e.y), (g[t * 3 + 2] = e.z), (b[t] = e.s);
    });
    let x = new fe();
    x.setAttribute(`position`, new E(g, 3)),
      x.setAttribute(`aAlpha`, new E(v, 1)),
      x.setAttribute(`aSize`, new E(b, 1));
    let S = ht(0.55);
    (S.uniforms.opacity.value = 0.32), (S.uniforms.boost.value = 1), S.uniforms.tint.value.set(1, 0.72, 0.42);
    let C = new w(x, S);
    return (
      (C.userData.dynamic = !0),
      (C.renderOrder = 6),
      t.add(C),
      (this.lanterns = []),
      { body: c, glass: l, chain: u, material: s, halo: C }
    );
  }
  rug(e, t, n, r, i, a = 0, o = this.g, s = this.M.rug) {
    let c = new h();
    c.position.set(e, t, n), (c.rotation.y = a), o.add(c);
    let l = new u(r, i, 4, 4);
    l.rotateX(-Math.PI / 2), (this.mesh(l, s, 0, 0.012, 0, c).castShadow = !1);
    let d = new u(r * 0.96, 0.09);
    d.rotateX(-Math.PI / 2);
    for (let e of [-1, 1]) {
      let t = this.mesh(d.clone(), this.fringeMat(), 0, 0.011, e * (i / 2 + 0.045), c);
      t.castShadow = !1;
    }
    return c;
  }
  fringeMat() {
    if (!e.fringe) {
      let t = document.createElement(`canvas`);
      (t.width = 256), (t.height = 32);
      let n = t.getContext(`2d`);
      for (let e = 0; e < 64; e++)
        (n.fillStyle = e % 2 ? `#e8d9bc` : `#d9c6a2`), n.fillRect(e * 4 + 1, 0, 2, 26 + ((e * 7) % 6));
      let r = new ne(t);
      (r.colorSpace = Oe),
        (r.wrapS = Me),
        (r.repeat.x = 3),
        (e.fringe = new C({ map: r, alphaTest: 0.5, side: 2, roughness: 1 }));
    }
    return e.fringe;
  }
  banner(e, t, n, r, i, a, o = 0, s = this.g) {
    let c = new u(r, i, 6, 12);
    c.translate(0, -i / 2, 0);
    let l = this.mesh(c, a, e, t, n, s);
    return (l.rotation.y = o), l;
  }
  curtain(e, t, n, r, i, a, o = 0, s = 7, c = this.g) {
    let l = new u(r, i, s * 4, 6);
    l.translate(0, -i / 2, 0);
    let d = l.attributes.position;
    for (let e = 0; e < d.count; e++) {
      let t = d.getX(e) / r + 0.5,
        n = -d.getY(e) / i;
      d.setZ(e, Math.sin(t * s * Math.PI * 2) * (0.05 + n * 0.03)), d.setX(e, d.getX(e) * (1 - n * 0.18));
    }
    l.computeVertexNormals();
    let f = this.mesh(l, a, e, t, n, c);
    return (f.rotation.y = o), f;
  }
  awning(e, t, n, r, i, a, o = 0, s = 0.35, c = this.g) {
    let l = new u(r, i, 14, 6);
    l.rotateX(-Math.PI / 2);
    let d = l.attributes.position;
    for (let e = 0; e < d.count; e++) {
      let t = d.getX(e) / r + 0.5;
      d.setY(e, -Math.sin(t * Math.PI) * s + Math.sin(d.getZ(e) * 3) * 0.02);
    }
    l.computeVertexNormals();
    let f = this.mesh(l, a, e, t, n, c);
    return (f.rotation.y = o), f;
  }
  table(e, t, n = 1.8, r = 0.8, i = 0.82, a = 0, o = this.g, s = this.M.woodDark) {
    let c = new h();
    c.position.set(e, 0, t), (c.rotation.y = a), o.add(c), this.box(n, 0.07, r, 0, i, 0, s, c);
    for (let e of [-1, 1])
      for (let t of [-1, 1]) this.box(0.07, i, 0.07, e * (n / 2 - 0.08), i / 2, t * (r / 2 - 0.08), s, c);
    return this.box(n - 0.15, 0.05, 0.04, 0, i * 0.25, r / 2 - 0.08, s, c), c;
  }
  cloth(e, t, n, r, i, a = this.M.linen, o = 0, s = this.g, c = 0.25) {
    let l = new u(r, i + c, 8, 5);
    l.rotateX(-Math.PI / 2);
    let d = l.attributes.position;
    for (let e = 0; e < d.count; e++) {
      let t = d.getZ(e);
      if (t > i / 2) {
        let n = t - i / 2;
        d.setZ(e, i / 2 + 0.01), d.setY(e, -n + Math.sin(d.getX(e) * 9) * 0.01);
      }
    }
    l.computeVertexNormals();
    let f = this.mesh(l, a, e, t, n, s);
    return (f.rotation.y = o), f;
  }
  vase(e, t, n, r = 0, i = 1, a = this.M.brass, o = this.g) {
    let s = [
      [
        [0.001, 0],
        [0.09, 0.01],
        [0.15, 0.08],
        [0.16, 0.18],
        [0.1, 0.3],
        [0.05, 0.38],
        [0.055, 0.46],
        [0.075, 0.48],
      ],
      [
        [0.001, 0],
        [0.07, 0],
        [0.12, 0.05],
        [0.16, 0.14],
        [0.14, 0.22],
        [0.08, 0.26],
        [0.07, 0.3],
        [0.09, 0.31],
      ],
      [
        [0.001, 0],
        [0.05, 0.01],
        [0.08, 0.1],
        [0.11, 0.3],
        [0.07, 0.52],
        [0.03, 0.62],
        [0.04, 0.72],
        [0.06, 0.74],
      ],
      [
        [0.001, 0],
        [0.12, 0],
        [0.2, 0.04],
        [0.22, 0.08],
        [0.22, 0.09],
      ],
    ][r];
    return this.lathe(
      s.map(([e, t]) => [e * i, t * i]),
      e,
      t,
      n,
      a,
      22,
      o,
    );
  }
  sack(e, t, n = 0.24, r = this.M.spiceSaffron, i = this.g) {
    let a = new h();
    return (
      a.position.set(e, 0, t),
      i.add(a),
      this.lathe(
        [
          [0.001, 0],
          [n * 0.85, 0],
          [n, 0.12],
          [n * 0.95, 0.38],
          [n * 1.08, 0.46],
          [n * 1.12, 0.47],
        ],
        0,
        0,
        0,
        this.M.linen,
        14,
        a,
      ),
      this.lathe(
        [
          [0.001, 0.5],
          [n * 0.4, 0.47],
          [n * 0.95, 0.42],
          [n * 1.02, 0.4],
        ],
        0,
        0,
        0,
        r,
        14,
        a,
      ),
      a
    );
  }
  rolledRug(e, t, n, r = 1.4, i = 0.11, a = 0, o = this.g) {
    let s = this.cyl(i, i, r, e, t, n, this.M.rug, 14, o);
    return s.rotation.set(0, a, Math.PI / 2), s;
  }
  mashrabiyaMat() {
    if (!e.lattice) {
      let t = document.createElement(`canvas`);
      t.width = t.height = 256;
      let n = t.getContext(`2d`);
      (n.fillStyle = `#5a3c28`), n.fillRect(0, 0, 256, 256), (n.globalCompositeOperation = `destination-out`);
      for (let [e, t] of [
        [64, 64],
        [192, 64],
        [64, 192],
        [192, 192],
        [128, 128],
        [0, 0],
        [256, 0],
        [0, 256],
        [256, 256],
      ]) {
        n.beginPath();
        for (let r = 0; r < 16; r++) {
          let i = (r / 16) * Tt,
            a = r % 2 ? 22 : 38;
          n.lineTo(e + Math.cos(i) * a, t + Math.sin(i) * a);
        }
        n.fill();
      }
      for (let [e, t] of [
        [128, 0],
        [0, 128],
        [256, 128],
        [128, 256],
        [128, 64],
        [64, 128],
        [192, 128],
        [128, 192],
      ])
        n.beginPath(), n.arc(e, t, 9, 0, Tt), n.fill();
      let r = new ne(t);
      (r.colorSpace = Oe),
        (r.wrapS = r.wrapT = Me),
        (e.lattice = new C({ map: r, alphaTest: 0.5, side: 2, roughness: 0.85, color: `#a27a58` }));
    }
    return e.lattice;
  }
  mashrabiya(e, t, n, r, i, a = 0, o = this.g) {
    let s = new u(r, i),
      c = s.attributes.uv;
    for (let e = 0; e < c.count; e++) c.setXY(e, c.getX(e) * r * 2.2, c.getY(e) * i * 2.2);
    let l = this.mesh(s, this.mashrabiyaMat(), e, t, n, o);
    l.rotation.y = a;
    let d = new h();
    d.position.set(e, t, n), (d.rotation.y = a), o.add(d);
    for (let e of [-1, 1])
      this.box(0.08, i + 0.08, 0.1, e * (r / 2 + 0.02), 0, 0, this.M.woodDark, d),
        this.box(r + 0.12, 0.08, 0.1, 0, e * (i / 2 + 0.02), 0, this.M.woodDark, d);
    return l;
  }
  door(e, t, n = 2.4, r = 3.2, i = 0, o = this.g, s = r * 0.6) {
    let c = new h();
    c.position.set(e, 0, t), (c.rotation.y = i), o.add(c), (c.userData.dynamic = !0);
    let l = [];
    for (let e of [-1, 1]) {
      let t = new h();
      t.position.set((e * n) / 2, 0, 0), c.add(t);
      let i = new h();
      t.add(i);
      let o = n / 2 - 0.02;
      this.box(o, s, 0.08, (-e * o) / 2, s / 2, 0, this.M.woodDark, i);
      let u = new a(this.leafTop(n, s, r, e), { depth: 0.08, bevelEnabled: !1 });
      u.translate(0, 0, -0.04), lt(u), this.mesh(u, this.M.woodDark, 0, 0, 0, i);
      for (let t = 0; t < 5; t++)
        for (let n = 0; n < 3; n++)
          this.sphere(0.022, -e * (0.18 + (n * (o - 0.3)) / 2), 0.4 + (t * (s - 0.3)) / 4, 0.05, this.M.brass, 6, i);
      for (let t of [0.55, s - 0.3]) this.box(o - 0.1, 0.07, 0.03, (-e * o) / 2, t, 0.05, this.M.brassDark, i);
      this.mesh(new Pe(0.07, 0.012, 6, 16), this.M.brass, -e * (o - 0.15), 1.15, 0.07, i),
        L(i),
        l.push({ pivot: t, s: e });
    }
    return {
      group: c,
      open: (e) => {
        for (let t of l) t.pivot.rotation.y = -t.s * e * 1.75;
      },
    };
  }
  leafTop(e, t, n, r) {
    let i = Et(e, t, n - t, 14).filter((e) => (r < 0 ? e.x <= 1e-4 : e.x >= -1e-4)),
      a = (-r * e) / 2,
      o = new we();
    return i.forEach((e, t) => (t ? o.lineTo(e.x + a, e.y) : o.moveTo(e.x + a, e.y))), o.lineTo(a, t), o.closePath(), o;
  }
  frondMat() {
    if (!e.frond) {
      let t = document.createElement(`canvas`);
      (t.width = 128), (t.height = 512);
      let n = t.getContext(`2d`);
      (n.strokeStyle = `#5d6b33`), (n.lineWidth = 5), n.beginPath(), n.moveTo(64, 0), n.lineTo(64, 512), n.stroke();
      for (let e = 10; e < 500; e += 9) {
        let t = 58 * Math.sin((e / 512) * Math.PI) + 6;
        for (let r of [-1, 1])
          (n.strokeStyle = (e / 9) % 3 ? `#6f7d3a` : `#56622c`),
            (n.lineWidth = 4),
            n.beginPath(),
            n.moveTo(64, e),
            n.quadraticCurveTo(64 + r * t * 0.6, e + 6, 64 + r * t, e + 22),
            n.stroke();
      }
      let r = new ne(t);
      (r.colorSpace = Oe),
        (e.frond = new C({ map: r, alphaTest: 0.45, side: 2, roughness: 0.8, color: `#c9d0a0` })),
        (e.trunk = new C({ color: `#76593d`, roughness: 1 }));
    }
    return e.frond;
  }
  palm(t, n, r, i = 5, a = this.g, o = 0.15) {
    let s = new h();
    s.position.set(t, n, r), (s.rotation.y = this.r() * Math.PI * 2), a.add(s);
    let c = [];
    for (let e = 0; e <= 8; e++) {
      let t = e / 8;
      c.push(new D(Math.sin(t * 1.4) * o * i * 0.3, t * i, 0));
    }
    let l = new Le(c),
      d = new ce(l, 12, 0.16, 8, !1),
      f = d.attributes.position;
    for (let e = 0; e < f.count; e++) {
      let t = f.getY(e) / i,
        n = 1 - t * 0.35,
        r = l.getPointAt(Math.min(1, Math.max(0, t)));
      f.setX(e, r.x + (f.getX(e) - r.x) * n), f.setZ(e, r.z + (f.getZ(e) - r.z) * n);
    }
    d.computeVertexNormals(), this.frondMat(), this.mesh(d, e.trunk, 0, 0, 0, s);
    let p = l.getPointAt(1);
    for (let t = 0; t < 11; t++) {
      let n = i * (0.42 + this.r() * 0.12),
        r = new u(0.62, n, 1, 10);
      r.translate(0, n / 2, 0);
      let a = r.attributes.position;
      for (let e = 0; e < a.count; e++) {
        let t = a.getY(e) / n;
        a.setZ(e, -t * t * n * 0.55);
      }
      r.computeVertexNormals(),
        this.mesh(r, e.frond, p.x, p.y, p.z, s).rotation.set(-0.5 - this.r() * 0.6, (t / 11) * Math.PI * 2, 0, `YXZ`);
    }
    return s;
  }
  dome(e, t, n, r, i = this.M.plaster, a = this.g) {
    let o = new T(r, 24, 12, 0, Tt, 0, Math.PI / 2);
    lt(o, 0.5);
    let s = this.mesh(o, i, e, t, n, a);
    return (
      this.cyl(r * 0.06, r * 0.1, r * 0.35, e, t + r + r * 0.15, n, this.M.brass, 8, a),
      this.sphere(r * 0.08, e, t + r + r * 0.36, n, this.M.gold, 10, a),
      s
    );
  }
  parapet(e, t, n, r, i = this.M.plaster, a = 0, o = this.g) {
    let s = new h();
    (s.rotation.y = a), o.add(s), this.box(Math.abs(t - e), 0.5, 0.35, (e + t) / 2, r + 0.25, n, i, s);
    for (let a = Math.min(e, t) + 0.3; a < Math.max(e, t); a += 0.9) {
      let e = new ye(0.45, 0.45, 0.35);
      lt(e), this.mesh(e, i, a, r + 0.72, n, s);
    }
    return s;
  }
  frieze(e, t, n, r, { flip: i = !1, crown: a = !0, arches: o = !0, parent: s = this.g, topY: c } = {}) {
    let l = new h();
    s.add(l), i && ((l.rotation.y = Math.PI), l.position.set(e + t, 0, 2 * n));
    let u = Math.abs(t - e),
      d = (e + t) / 2;
    if (
      (this.box(u, 0.22, 0.16, d, r, n + 0.08, this.M.carved, l),
      this.box(u, 0.08, 0.2, d, r - 0.16, n + 0.1, this.M.stoneDark, l),
      o)
    )
      for (let i = Math.min(e, t) + 0.7; i < Math.max(e, t) - 0.5; i += 1.2)
        (this.archWall({
          x: i,
          z: n + 0.04,
          width: 1.05,
          height: 1.5,
          depth: 0.08,
          openW: 0.62,
          spring: 0.8,
          rise: 0.45,
          band: 0.08,
          mat: this.M.plaster,
          trim: this.M.carved,
          parent: l,
        }).position.y = r + 0.15),
          this.box(0.6, 1.15, 0.02, i, r + 0.75, n + 0.005, this.M.stoneDark, l);
    if (a) {
      let i = c ?? r + 1.9;
      this.box(u, 0.14, 0.5, d, i, n - 0.1, this.M.carved, l);
      for (let r = Math.min(e, t) + 0.35; r < Math.max(e, t); r += 0.85)
        this.box(0.42, 0.42, 0.42, r, i + 0.28, n - 0.1, this.M.stone, l);
    }
    return l;
  }
  pedestal(e, t, n = 0.5, r = 0.9, i = this.g) {
    let a = new h();
    a.position.set(e, 0, t),
      i.add(a),
      this.lathe(
        [
          [0.001, 0],
          [n * 1.25, 0],
          [n * 1.25, 0.1],
          [n * 1.05, 0.16],
          [n * 0.88, 0.24],
          [n * 0.82, r - 0.22],
          [n * 1, r - 0.14],
          [n * 1.12, r - 0.1],
          [n * 1.12, r],
          [0.001, r],
        ],
        0,
        0,
        0,
        this.M.stone,
        24,
        a,
      );
    let o = this.cyl(n * 0.86, n * 0.86, r * 0.42, 0, r * 0.5, 0, this.M.carved, 24, a);
    return (o.castShadow = !1), a;
  }
};
function L(e, t = 22) {
  e.updateMatrixWorld(!0);
  let r = e.matrixWorld.clone().invert(),
    i = new Map(),
    a = [],
    o = new D();
  e.traverse((s) => {
    if (!s.isMesh || s.isInstancedMesh || s.isSkinnedMesh || Array.isArray(s.material)) return;
    for (let t = s; t && t !== e; t = t.parent) if (t.userData.dynamic) return;
    let c = s.geometry.index ? s.geometry.toNonIndexed() : s.geometry.clone();
    c.attributes.uv || c.setAttribute(`uv`, new E(new Float32Array(c.attributes.position.count * 2), 2));
    for (let e of Object.keys(c.attributes)) [`position`, `normal`, `uv`].includes(e) || c.deleteAttribute(e);
    c.applyMatrix4(new n().multiplyMatrices(r, s.matrixWorld)), c.computeBoundingSphere();
    let l = c.boundingSphere;
    o.copy(l.center);
    let u = s.castShadow && l.radius > 0.35,
      d = l.radius > t * 0.75,
      f = s.material.uuid + (u ? `s` : ``) + (d ? `B` : `${Math.floor(o.x / t)},${Math.floor(o.z / t)}`);
    i.has(f) || i.set(f, { mat: s.material, cast: u, geos: [] }), i.get(f).geos.push(c), a.push(s);
  });
  for (let e of a) e.parent.remove(e);
  for (let { mat: t, cast: n, geos: r } of i.values()) {
    let i = _e(r, !1);
    for (let e of r) e.dispose();
    if (!i) continue;
    i.computeBoundingSphere();
    let a = new S(i, t);
    (a.castShadow = n), (a.receiveShadow = !0), (a.name = `static-` + t.name), e.add(a);
  }
}
var R = (e, t, n) => new D(e, t, n),
  z = {
    spawn: R(0, 0, 13.6),
    lamp: R(0, 0.98, 7),
    pedestal: R(0, 0, 7),
    monkeyStart: R(1.25, 0, 7.4),
    soukArch: R(0, 0, 2),
    carpet: R(0, 0.42, -46.5),
    dockLanding: R(0, 0.42, -109.5),
    workshopDoor: R(0, 0, -118),
    bench: R(0, 0, -127.5),
    craftStand: R(0, 0, -126.2),
    motifDoor: R(0, 0, -136),
    galleryPedestal: R(0, 0, -155.5),
    galleryExit: R(0, 0, -162),
    gate: R(0, 0, -168),
    stage: R(5, 0, -226),
    digSpot: R(5.35, 0, -223.4),
    desertLamp: R(3.2, 0, -225.2),
  },
  kt = [
    [-4.4, 2.6, 4.4, 15.4],
    [-1.4, 1.2, 1.4, 2.8],
    [-2.45, -37.2, 2.45, 1.4],
    [-7.4, -53.3, 7.4, -36.9],
    [-6.4, -117.3, 6.4, -103.9],
    [-1.35, -119, 1.35, -117],
    [-6, -135.4, 6, -118.7],
    [-1.2, -137.4, 1.2, -135.2],
    [-3.8, -161.5, 3.8, -137.2],
    [-0.95, -168.6, 0.95, -161.3],
    [-30, -252, 30, -168.2],
  ],
  At = [
    { x: 0, z: 7, r: 0.75 },
    [-1.35, -128.45, 1.35, -126.55],
    [-5.95, -125.2, -3.3, -122.3],
    [3.3, -125.2, 5.95, -122.3],
    [-5.95, -132.6, -3.3, -129.7],
    { x: 0, z: -155.5, r: 0.8 },
    { x: 5, z: -226, r: 0.75 },
    [-30, -168.7, -1.02, -165],
    [1.02, -168.7, 30, -165],
    { x: 1.4, z: -229.6, r: 0.55 },
    { x: 8.9, z: -230.4, r: 0.55 },
    { x: 10.4, z: -224.8, r: 0.5 },
    { x: -0.4, z: -224.2, r: 0.5 },
    [6.8, -222.3, 8.4, -220.9],
    [1.85, -233.8, 3.35, -232.6],
    [6.65, -233.8, 8.15, -232.6],
  ],
  jt = {
    soukArch: [-1.6, 1, 1.6, 2.9],
    courtyardBack: [-7.4, -53.4, 7.4, -52.6],
    workshopDoor: [-1.5, -119.2, 1.5, -116.9],
    motifDoor: [-1.3, -137.6, 1.3, -135],
    galleryExit: [-1, -162.2, 1, -161.2],
  },
  Mt = [
    { id: `entrance`, rect: [-6, 1.5, 6, 18] },
    { id: `souk`, rect: [-6, -37, 6, 1.5] },
    { id: `courtyard`, rect: [-9, -55, 9, -37] },
    { id: `valley`, rect: [-60, -103.5, 60, -55] },
    { id: `dock`, rect: [-9, -118.2, 9, -103.5] },
    { id: `workshop`, rect: [-8, -136, 8, -118.2] },
    { id: `gallery`, rect: [-6, -162, 6, -136] },
    { id: `desert`, rect: [-80, -300, 80, -162] },
  ],
  Nt = {
    entrance: [`entrance`, `souk`],
    souk: [`entrance`, `souk`, `courtyard`],
    courtyard: [`souk`, `courtyard`, `valley`],
    valley: [`courtyard`, `valley`, `dock`],
    dock: [`valley`, `dock`, `workshop`],
    workshop: [`dock`, `workshop`, `gallery`],
    gallery: [`workshop`, `gallery`, `desert`],
    desert: [`gallery`, `desert`],
  },
  Pt = [
    [0, 12.6],
    [1.7, 9.4],
    [1.6, 5.8],
    [0, 3.6],
    [0, 1.6],
    [0, -4],
    [0.6, -10],
    [-0.5, -16],
    [0.4, -22],
    [0, -28],
    [0, -34.5],
    [0, -40],
    [0, -44.6],
    [0, -107.6],
    [0, -113.5],
    [0, -117.8],
    [0, -121.5],
    [0, -125.6],
    [1.95, -127.5],
    [1.6, -131.6],
    [0, -134.2],
    [0, -136.6],
    [0, -139.5],
    [0, -145],
    [0, -150.6],
    [0, -153.8],
    [1.5, -156.5],
    [0.4, -159.6],
    [0, -161.8],
    [0, -165],
    [0, -168.6],
    [-1.6, -176],
    [-3.2, -184],
    [0.5, -193],
    [6.5, -201],
    [9.2, -209],
    [7.6, -216],
    [5.6, -221.2],
    [5.3, -222.6],
  ],
  B = (e) => R(Pt[e][0], 0, Pt[e][1]);
function Ft(e, t) {
  let n = 1e9;
  for (let r = 29; r < Pt.length - 1; r++) {
    let [i, a] = Pt[r],
      [o, s] = Pt[r + 1],
      c = o - i,
      l = s - a,
      u = c * c + l * l,
      d = k(((e - i) * c + (t - a) * l) / u),
      f = i + c * d - e,
      p = a + l * d - t;
    n = Math.min(n, f * f + p * p);
  }
  return Math.sqrt(n);
}
function It(e, t) {
  let n = Math.sin(e * 0.045 + t * 0.021) * 0.5 + 0.5,
    r = Math.sin(e * 0.11 - t * 0.063 + 1.7) * 0.5 + 0.5,
    i = Math.sin(e * 0.021 - t * 0.034 + 0.6) * 0.5 + 0.5;
  return n ** 1.8 * 5.5 + r ** 2.2 * 1.6 + i * 3;
}
function Lt(e, t) {
  if (t > -167) return 0;
  let n = k((-167 - t) / 10),
    r = A(k((Ft(e, t) - 5) / 26)),
    i = A(k((Math.hypot(e - z.stage.x, t - z.stage.z) - 9) / 30)),
    a = Math.sin(e * 0.9 + t * 0.35) * 0.04 + Math.sin(e * 0.31 - t * 0.8) * 0.05;
  return It(e, t) * r * i * n + (Math.sin(e * 0.08 + 1) * 0.35 + Math.sin(t * 0.05) * 0.45 + 0.6) * n * i + a * n;
}
function Rt(e, t) {
  return t < -167 ? Lt(e, t) : 0;
}
function zt(e, t) {
  for (let n of Mt) {
    let [r, i, a, o] = n.rect;
    if (e >= r && e <= a && t >= i && t <= o) return n.id;
  }
  return `desert`;
}
var Bt = new D(0.55, 0.3, -0.78).normalize(),
  Vt = class {
    constructor() {
      (this.uniforms = {
        sunDir: { value: Bt.clone() },
        zenith: { value: new O(`#7fa2b8`) },
        horizon: { value: new O(`#f0cfa0`) },
        ground: { value: new O(`#c79d6a`) },
        sunColor: { value: new O(`#fff0cf`) },
        glow: { value: 1 },
        clouds: { value: 0.35 },
        time: { value: 0 },
      }),
        (this.mesh = new S(
          new T(450, 48, 24),
          new ie({
            uniforms: this.uniforms,
            side: 1,
            depthWrite: !1,
            fog: !1,
            vertexShader: `varying vec3 vDir; void main(){ vDir = normalize(position); vec4 p = projectionMatrix * modelViewMatrix * vec4(position,1.0); gl_Position = p.xyww; }`,
            fragmentShader: `uniform vec3 sunDir, zenith, horizon, ground, sunColor; uniform float glow, clouds, time; varying vec3 vDir;
        float h2(vec2 p){ return fract(sin(dot(p, vec2(127.1, 311.7))) * 43758.5453); }
        float n2(vec2 p){ vec2 i = floor(p), f = fract(p); f = f * f * (3.0 - 2.0 * f);
          return mix(mix(h2(i), h2(i + vec2(1, 0)), f.x), mix(h2(i + vec2(0, 1)), h2(i + vec2(1, 1)), f.x), f.y); }
        float fbm(vec2 p){ float a = 0.5, s = 0.0; for (int i = 0; i < 4; i++) { s += a * n2(p); p = p * 2.03 + vec2(1.7, 9.2); a *= 0.5; } return s; }
        void main(){
          vec3 d = normalize(vDir); float h = d.y;
          vec3 col = mix(horizon, zenith, pow(smoothstep(-0.02, 0.75, h), 0.7));
          col = mix(col, ground, smoothstep(0.0, -0.12, h));
          float s = max(dot(d, normalize(sunDir)), 0.0);
          col += sunColor * (pow(s, 900.0) * 5.0 + pow(s, 60.0) * 0.4 * glow + pow(s, 8.0) * 0.08 * glow);
          // Thin, high wisps of cloud, lit warm toward the sun.
          if (clouds > 0.001 && h > 0.0) {
            vec2 uv = d.xz / (h + 0.18) * 1.6 + vec2(time * 0.004, time * 0.0015);
            float c = fbm(uv * vec2(1.0, 2.6)) ; c = smoothstep(0.52, 0.85, c) * clouds * smoothstep(0.0, 0.18, h);
            vec3 cloudCol = mix(vec3(1.0, 0.93, 0.84), sunColor * vec3(1.0, 0.78, 0.55), pow(s, 3.0));
            col = mix(col, cloudCol, c * 0.75);
          }
          // A whisper of haze band right on the horizon.
          col = mix(col, horizon * 1.05, exp(-abs(h) * 30.0) * 0.35);
          gl_FragColor = vec4(col, 1.0);
          #include <tonemapping_fragment>
          #include <colorspace_fragment>
        }`,
          }),
        )),
        (this.mesh.renderOrder = -10),
        (this.mesh.frustumCulled = !1),
        (this.mesh.name = `Sky`);
    }
    update(e, t = 0) {
      this.mesh.position.copy(e), (this.uniforms.time.value = t);
    }
    setColors(e, t, n, r) {
      this.uniforms.zenith.value.lerp(e, n),
        this.uniforms.horizon.value.lerp(t, n),
        r !== void 0 && (this.uniforms.clouds.value += (r - this.uniforms.clouds.value) * n);
    }
  };
function Ht(e, t, n, i, a = `#ffd9a0`, o = 0.16) {
  let s = e.distanceTo(t),
    c = new r(n, i, s, 24, 1, !0);
  c.translate(0, -s / 2, 0);
  let l = new ie({
      uniforms: { color: { value: new O(a) }, strength: { value: o }, time: { value: 0 } },
      vertexShader: `varying float vY; varying vec3 vN; varying vec3 vView; uniform float time;
      void main(){ vY = uv.y; vN = normalize(normalMatrix * normal); vec4 mv = modelViewMatrix * vec4(position,1.0); vView = normalize(-mv.xyz); gl_Position = projectionMatrix * mv; }`,
      fragmentShader: `uniform vec3 color; uniform float strength; varying float vY; varying vec3 vN; varying vec3 vView;
      void main(){ float edge = pow(abs(dot(normalize(vN), normalize(vView))), 1.6); float fade = smoothstep(0.0, 0.35, vY) * smoothstep(1.0, 0.75, vY) * 0.6 + smoothstep(0.0,0.9,vY)*0.4;
        gl_FragColor = vec4(color * strength * edge * fade, 1.0); }`,
      transparent: !0,
      depthWrite: !1,
      blending: 2,
      side: 2,
    }),
    u = new S(c, l);
  return (
    u.position.copy(e),
    u.quaternion.setFromUnitVectors(new D(0, -1, 0), t.clone().sub(e).normalize()),
    (u.userData.dynamic = !0),
    (u.renderOrder = 3),
    (u.castShadow = !1),
    (u.receiveShadow = !1),
    u
  );
}
var Ut = 6,
  Wt = 4.5;
new D();
var Gt = {
    sun: 2.2,
    sunColor: `#ffe2b5`,
    hemi: 0.5,
    sky: `#f3dcb8`,
    groundCol: `#6b5236`,
    env: 0.5,
    fog: `#c9ad85`,
    fogNear: 20,
    fogFar: 140,
    exposure: 1,
    sunDir: Bt.toArray(),
    zenith: `#7fa2b8`,
    horizon: `#f0cfa0`,
    clouds: 0.35,
  },
  Kt = class {
    constructor(e, n, r, a) {
      (this.renderer = e),
        (this.scene = n),
        (this.M = r),
        (this.areas = new Map()),
        (this.root = new h()),
        (this.root.name = `World`),
        n.add(this.root),
        (this.sky = new Vt()),
        n.add(this.sky.mesh),
        (n.environment = r.env),
        (this.sun = new Ie(`#ffe2b5`, 2.2)),
        (this.sun.castShadow = !0);
      let o = a === `low` ? 1024 : a === `high` ? 4096 : 2048;
      this.sun.shadow.mapSize.set(o, o);
      let s = this.sun.shadow.camera;
      (s.left = s.bottom = -20),
        (s.right = s.top = 20),
        (s.near = 1),
        (s.far = 120),
        (this.sun.shadow.bias = -4e-4),
        (this.sun.shadow.normalBias = 0.03),
        (this.sun.shadow.radius = a === `high` ? 2.5 : 1),
        n.add(this.sun, this.sun.target),
        (this.hemi = new t(`#f3dcb8`, `#6b5236`, 0.5)),
        n.add(this.hemi),
        (this.pool = []);
      for (let e = 0; e < Ut; e++) {
        let e = new ee(`#ffc77d`, 0, 8, 2);
        (e.userData.slot = null), n.add(e), this.pool.push(e);
      }
      (n.fog = new i(`#c9ad85`, 20, 140)),
        (this.env = { ...Gt }),
        (this.envTarget = { ...Gt }),
        (this.current = null),
        (this.override = null),
        (this.extraLights = []),
        (this.updaters = []),
        (this.hidden = new Set());
    }
    setHidden(e, t) {
      t ? this.hidden.add(e) : this.hidden.delete(e), (this.current = null);
    }
    add(e) {
      (e.group.name = e.id), this.root.add(e.group), this.areas.set(e.id, e);
      for (let t of e.lights || []) t.area = e.id;
      e.update && this.updaters.push(e);
    }
    setOverride(e) {
      (this.override = e), (this.current = null);
    }
    slot(e) {
      let t = Object.assign({ color: `#ffc77d`, intensity: 6, distance: 8, area: null }, e);
      return this.extraLights.push(t), t;
    }
    removeSlot(e) {
      this.extraLights = this.extraLights.filter((t) => t !== e);
    }
    update(e, t, n, r) {
      (ct.time.value = t),
        (ct.flicker.value = 1); // steady light — no flicker
      let i = zt(n.x, n.z);
      if (i !== this.current) {
        this.current = i;
        let e = new Set(this.override || Nt[i] || [i]);
        if (this.override) for (let t of Nt[i] || []) e.add(t);
        if (!this.override) for (let t of this.hidden) t !== i && e.delete(t);
        for (let [t, n] of this.areas) n.group.visible = e.has(t);
        (this.visible = e), (this.envTarget = { ...Gt, ...(this.areas.get(i)?.env || {}) }), this.onArea?.(i);
      }
      let a = this.env,
        o = this.envTarget,
        s = 1 - Math.exp(-1.6 * e);
      for (let e of [`sun`, `hemi`, `env`, `fogNear`, `fogFar`, `exposure`]) a[e] = Be(a[e], o[e], s);
      for (let e of [`sunColor`, `sky`, `groundCol`, `fog`])
        (a[`_` + e] = a[`_` + e] || new O(a[e])),
          o[`_` + e] || (o[`_` + e] = new O(o[e])),
          a[`_` + e].lerp(o[`_` + e], s);
      (a._sunDir = a._sunDir || new D().fromArray(a.sunDir)),
        (o._sunDir ||= new D().fromArray(o.sunDir).normalize()),
        a._sunDir.lerp(o._sunDir, s).normalize(),
        this.sky.uniforms.sunDir.value.copy(a._sunDir),
        o._zenith || ((o._zenith = new O(o.zenith)), (o._horizon = new O(o.horizon))),
        this.sky.setColors(o._zenith, o._horizon, s, o.clouds),
        (this.sun.intensity = a.sun),
        this.sun.color.copy(a._sunColor),
        (this.hemi.intensity = a.hemi),
        this.hemi.color.copy(a._sky),
        this.hemi.groundColor.copy(a._groundCol),
        (this.scene.environmentIntensity = a.env),
        this.scene.fog.color.copy(a._fog),
        (this.scene.fog.near = a.fogNear),
        (this.scene.fog.far = a.fogFar),
        (this.renderer.toneMappingExposure = a.exposure);
      let c = 40 / this.sun.shadow.mapSize.x,
        l = Math.round(n.x / c) * c,
        u = Math.round(n.z / c) * c;
      this.sun.target.position.set(l, n.y - 1.5, u),
        this.sun.position.copy(this.sun.target.position).addScaledVector(a._sunDir, 60),
        this.sky.update(n, t),
        this.assignLights(e, n);
      for (let r of this.updaters) r.group.visible && r.update(t, e, n);
    }
    assignLights(e, t) {
      if (((this._acc = (this._acc || 0) + e), this._acc > 0.6 || !this._ranked)) {
        this._acc = 0;
        let e = [];
        for (let t of this.extraLights) t.off || e.push(t);
        for (let [t, n] of this.areas) if (this.visible?.has(t)) for (let t of n.lights || []) t.off || e.push(t);
        for (let n of e)
          n._d = n.position.distanceTo(t) / Math.max(0.3, Math.sqrt(n.intensity / 6)) - (n.priority || 0) - (this.pool.some((e) => e.userData.slot === n && !e.userData.leaving) ? 2.5 : 0);
        e.sort((e, t) => e._d - t._d), (this._ranked = e.slice(0, Ut));
        let n = new Set(this._ranked);
        for (let e of this.pool) e.userData.slot && !n.has(e.userData.slot) && (e.userData.leaving = !0);
        for (let e of this._ranked) {
          if (this.pool.some((t) => t.userData.slot === e)) {
            let t = this.pool.find((t) => t.userData.slot === e);
            t.userData.leaving = !1;
            continue;
          }
          let t = this.pool.find((e) => !e.userData.slot || (e.userData.leaving && e.intensity < 0.05));
          t && ((t.userData.slot = e), (t.userData.leaving = !1), (t.intensity = 0));
        }
      }
      for (let t of this.pool) {
        let n = t.userData.slot;
        if (!n) {
          t.intensity = 0;
          continue;
        }
        let r = t.userData.leaving || n.off ? 0 : n.intensity * Wt * (n.flicker ? ct.flicker.value : 1);
        (t.intensity = j(t.intensity, r, 2.2, e)),
          t.position.copy(n.position),
          t.color.set(n.color),
          (t.distance = n.distance),
          t.userData.leaving && t.intensity < 0.03 && ((t.userData.slot = null), (t.intensity = 0));
      }
    }
  },
  qt = (e, t, n, r = 0) => t >= e[0] - r && t <= e[2] + r && n >= e[1] - r && n <= e[3] + r,
  Jt = class {
    constructor() {
      (this.closed = new Set(Object.keys(jt))), (this.extra = []);
    }
    open(e) {
      this.closed.delete(e);
    }
    close(e) {
      this.closed.add(e);
    }
    blocked(e, t, n = 0.22) {
      for (let r of At.concat(this.extra))
        if (Array.isArray(r)) {
          if (qt(r, e, t, n)) return !0;
        } else if (Math.hypot(e - r.x, t - r.z) < r.r + n) return !0;
      for (let r of this.closed) if (qt(jt[r], e, t, n)) return !0;
      return !1;
    }
    walkable(e, t, n = 0.22) {
      let r = !1;
      for (let n of kt)
        if (qt(n, e, t, 0)) {
          r = !0;
          break;
        }
      return r && !this.blocked(e, t, n);
    }
    move(e, t, n, r, i) {
      return this.walkable(e + n, t + r, i)
        ? [e + n, t + r]
        : this.walkable(e + n, t, i)
          ? [e + n, t]
          : this.walkable(e, t + r, i)
            ? [e, t + r]
            : [e, t];
    }
    ground(e, t) {
      return Rt(e, t);
    }
  };
function Yt(e, t, n) {
  let r = new h();
  e.at(r);
  let i = 5.3,
    a = 1.2,
    o = 16.8;
  e.block(-5.3, a, i, o, -0.2, 0, t.floorDark);
  for (let n of [-1, 1]) e.box(0.04, 0.012, 13, n * 1.45, 0.006, 8.6, t.brass);
  for (let n of [-1, 1]) e.block(n * i, a, n * 5.8999999999999995, o, 0, 8, t.stone);
  e.block(-5.3 - 0.6, o, 5.8999999999999995, 17.400000000000002, 0, 8, t.stone);
  let s = 7.4;
  e.block(-5.3, 8.2, i, o, s, 7.800000000000001, t.woodDark),
    e.block(-5.3, a, i, 5.8, s, 7.800000000000001, t.woodDark),
    e.block(-5.3, 5.8, -0.9, 8.2, s, 7.800000000000001, t.woodDark),
    e.block(0.9, 5.8, i, 8.2, s, 7.800000000000001, t.woodDark);
  for (let n = 1.7999999999999998; n < o; n += 1.3)
    Math.abs(n - 7) > 1.1 && e.box(2 * i, 0.22, 0.18, 0, 7.29, n, t.wood);
  e.box(2 * i, 0.3, 0.3, 0, 7, 5.6, t.carvedDark), e.box(2 * i, 0.3, 0.3, 0, 7, 8.4, t.carvedDark);
  for (let n of [-1, 1])
    e.box(0.35, 0.25, 15.600000000000001, n * 5.1499999999999995, 6.800000000000001, 9, t.carved),
      e.box(0.25, 0.18, 15.600000000000001, n * 5.2, 0.09, 9, t.stoneDark);
  e.archWall({
    x: 0,
    z: 2,
    width: 11.799999999999999,
    height: 8,
    depth: 0.9,
    openW: 3.2,
    spring: 2.9,
    rise: 2.15,
    band: 0.42,
  }),
    e.archWall({
      x: 0,
      z: 16.650000000000002,
      width: 11.799999999999999,
      height: 8,
      depth: 0.3,
      openW: 2.8,
      spring: 2.7,
      rise: 1.8,
      rotY: Math.PI,
      trim: t.carvedDark,
    });
  let l = e.door(0, 16.55, 2.8, 4.5, Math.PI, r, 2.7);
  for (let t of [-1, 1])
    for (let n of [4.6, 12.2])
      e.archWall({
        x: t * 5.22,
        z: n,
        rotY: (t * Math.PI) / 2,
        width: 3.4,
        height: 6.2,
        depth: 0.16,
        openW: 2.2,
        spring: 2.6,
        rise: 1.6,
        band: 0.28,
      }),
        e.door(t * 5.28, n, 2.2, 4.2, (-t * Math.PI) / 2, r, 2.6);
  for (let n of [-1, 1])
    for (let r of [8.4, 15.2]) {
      e.box(0.7, 0.42, 2.2, n * 4.8999999999999995, 0.21, r, t.stoneDark),
        e.box(0.62, 0.12, 2.1, n * 4.88, 0.48, r, t.velvetRed);
      for (let i = 0; i < 2; i++)
        e.sphere(0.22, n * 4.9799999999999995, 0.66, r - 0.5 + i, t.velvetRed, 12).scale.set(0.5, 0.9, 1.2);
    }
  e.rug(0, 0, 11.6, 2.4, 6.6), e.rug(0, 0, 7, 3.2, 3.2, Math.PI / 4);
  for (let n of [-1, 1])
    e.vase(n * 2.9, 0, 3.2, 0, 2.4, t.brass),
      e.vase(n * 3.6, 0, 3, 2, 1.6, t.brassDark),
      e.vase(n * 4.5, 0, 10.2, 1, 1.6, t.copper);
  e.pedestal(z.pedestal.x, z.pedestal.z, 0.42, 0.95);
  let u = n.lamp.clone();
  u.scale.setScalar(0.42),
    u.position.set(z.lamp.x - 0.06, 0.955, z.lamp.z),
    (u.rotation.y = -0.35),
    (u.userData.dynamic = !0),
    r.add(u);
  for (let t of [-1, 1]) for (let n of [3.8, 6.8, 10, 13.2]) e.lantern(t * 3.3, 4.6 + (n % 2) * 0.3, n, 1.05, 2.3);
  e.lantern(0, 5.6, 12.4, 1.3, 1.5);
  let d = e.flushLanterns(r, 2.6),
    f = Ht(R(0, 7.7, 7), R(0.15, 0, 7.1), 0.75, 1.15, `#ffdcae`, 0.13);
  r.add(f);
  let p = new _t(140, new Te(R(-1.1, 0.2, 6), R(1.1, 7, 8)), { size: 0.01, opacity: 0.55, speed: 0.025, seed: 3 });
  (p.points.userData.dynamic = !0), r.add(p.points);
  let m = new S(
    new ae(1.25, 40),
    new c({ color: `#ffcf8a`, transparent: !0, opacity: 0.12, blending: 2, depthWrite: !1 }),
  );
  return (
    (m.rotation.x = -Math.PI / 2),
    m.position.set(0.1, 0.02, 7.1),
    (m.userData.dynamic = !0),
    r.add(m),
    L(r),
    {
      id: `entrance`,
      group: r,
      lamp: u,
      backDoor: l,
      env: {
        sun: 0.15,
        hemi: 0.16,
        sky: `#d9b88a`,
        groundCol: `#3b2a1c`,
        env: 0.22,
        fog: `#1d150e`,
        fogNear: 9,
        fogFar: 46,
        exposure: 1.18,
        sunDir: [0.3, 0.8, -0.5],
      },
      lights: [
        { position: R(0, 5.5, 7), color: `#ffd9a6`, intensity: 4.5, distance: 9, priority: 2 },
        { position: R(0, 1.6, 7.4), color: `#ffb768`, intensity: 2.5, distance: 4 },
        { position: R(0, 3.2, 1.2), color: `#ffe1b0`, intensity: 8, distance: 11, priority: 1 },
        ...[-1, 1].flatMap((e) =>
          [R(e * 3.3, 4.4, 5), R(e * 3.3, 4.4, 12)].map((e) => ({
            position: e,
            color: `#ffb35e`,
            intensity: 4.5,
            distance: 7,
            flicker: !0,
          })),
        ),
      ],
      update(e) {
        this.updateCarpet?.(e),
          p.update(e),
          (f.material.uniforms.strength.value = 0.12 + Math.sin(e * 0.4) * 0.015),
          (d.material.emissiveIntensity = 1.9);
      },
      music: `mus_welcome`,
      amb: `amb_entrance`,
    }
  );
}
var Xt = new D(0.16, 0.92, -0.36).normalize();
function Zt(e, t, n, r) {
  let i = new h();
  e.at(i);
  let a = We(42),
    o = 1.5,
    s = -37.4,
    c = 2.6,
    l = 4.9;
  e.block(-4.9, s, l, o, -0.2, 0, t.floor);
  let u = [];
  for (let e = o; e >= -37.5; e -= 4.2) u.push(e);
  let d = u.slice(0, -1).map((e) => e - 2.1),
    f = [],
    p = [],
    m = [],
    g = [],
    _ = [],
    v = (e, t, n, r, a, o, s) => (
      e.position.set(t, n, r),
      (e.userData.dynamic = !0),
      i.add(e),
      L(e),
      _.push({ obj: e, name: a, line: o, size: s }),
      e
    );
  for (let n of [-1, 1]) {
    e.block(n * l, s, n * 5.4, o, 0, 3.6, t.plaster);
    for (let r of u)
      e.block(n * c, r - 0.32, n * l, r + 0.32, 0, 3.5, t.stone),
        e.box(0.7, 0.2, 0.75, n * 2.85, 0.1, r, t.stoneDark),
        e.box(0.72, 0.24, 0.76, n * 2.85, 3.25, r, t.carved);
    e.box(0.3, 0.32, 38.9, n * 2.65, 3.55, -35.9 / 2, t.wood),
      e.box(2.4, 0.2, 38.9, (7.5 / 2) * n, 3.65, -35.9 / 2, t.woodDark);
    for (let r = 0; r < d.length; r++) {
      let i = d[r],
        o = 7 + a() * 2.6,
        s = a() * 0.25;
      if (
        (e.block(n * (c + s), i - 2.15, n * (3.8 + s), i + 2.15, 3.7, o, r % 3 == 1 ? t.plaster : t.stone),
        e.box(0.2, 0.18, 4.3, n * (c + s - 0.05), o - 0.05, i, t.stoneDark),
        a() > 0.35)
      ) {
        let r = n * (c + s - 0.32),
          o = 4.9 + a() * 0.5,
          l = i + (a() - 0.5) * 1.2;
        e.box(0.62, 0.12, 1.5, r, o - 0.85, l, t.woodDark),
          e.box(0.62, 0.12, 1.5, r, o + 0.85, l, t.woodDark),
          e.mashrabiya(r - n * 0.3, o, l, 1.4, 1.6, Math.PI / 2);
        for (let i of [-0.6, 0.6]) {
          let a = e.box(0.5, 0.1, 0.1, r + n * 0.12, o - 1, l + i, t.wood);
          a.rotation.z = n * 0.6;
        }
      } else
        e.box(0.06, 1.2, 0.8, n * (c + s - 0.03), 5.2, i, t.dark),
          e.box(0.08, 1.3, 0.5, n * (c + s - 0.06), 5.2, i + 0.68, t.wood);
      a() > 0.3 &&
        e.banner(
          n * (c + s - 0.04),
          6.6,
          i + 1.2,
          1.1,
          2.4 + a(),
          [t.bannerKilim, t.bannerBorder, t.bannerIndigo, t.rugHang, t.bannerStripe][r % 5],
          n < 0 ? Math.PI / 2 : -Math.PI / 2,
        );
    }
  }
  let b = [];
  for (let n = 0; n < u.length; n++) {
    let r = u[n];
    if ((e.box(5.8, 0.24, 0.22, 0, 5.4, r, t.wood), n < u.length - 1)) {
      if (n % 3 == 2) {
        b.push(r - 2.1);
        continue;
      }
      e.awning(0, 5.45, r - 2.1, 5.5, 3.9, [t.sailStripe, t.sailKilim, t.sailOchreStripe][n % 3], 0, 0.45);
    }
    if (
      (e.lantern(0.9, 4.3 + a() * 0.4, r, 1, 1),
      e.lantern(-0.9, 4.2 + a() * 0.4, r + 0.2, 0.9, 1.1),
      n % 2 == 1 && n < u.length - 1)
    ) {
      let n = r - 1.05,
        a = [];
      for (let e = 0; e <= 12; e++) {
        let t = e / 12;
        a.push([-2.6 + t * 2 * c, 4.699999999999999 - Math.sin(t * Math.PI) * 0.45, n]);
      }
      e.tube(a, 0.006, t.woodDark, i, 24, 4);
      for (let e = 1; e < 12; e++) {
        let [r, o] = a[e],
          s = new S(
            new fe().setFromPoints([new D(-0.11, 0, 0), new D(0.11, 0, 0), new D(0, -0.28, 0)]),
            [t.bannerKilim, t.bannerBorder, t.bannerIndigo, t.bannerStripe][e % 4],
          );
        s.geometry.setAttribute(`uv`, new E(new Float32Array([0, 1, 1, 1, 0.5, 0]), 2)),
          s.geometry.computeVertexNormals(),
          s.position.set(r, o, n),
          (s.castShadow = !0),
          i.add(s);
      }
    }
  }
  for (let t of [-11.1, -23.7])
    e.archWall({ x: 0, z: t, width: 5.8, height: 7.4, depth: 0.7, openW: 3.7, spring: 3.1, rise: 2.3, band: 0.36 });
  let x = (r, o, s) => {
    let c = r * 3.75,
      l = r * 2.95;
    e.banner(
      r * 2.65,
      3.38,
      o,
      3.6,
      0.42,
      [t.clothCream, t.clothTerracotta, t.clothBurgundy, t.clothOchre][Math.abs(Math.round(o)) % 4],
      r < 0 ? Math.PI / 2 : -Math.PI / 2,
    );
    let u = (n = 0.8, a = 3.2, s = 0.75) => (
        e.table(l, o, a, s, n, Math.PI / 2, i, t.wood),
        e.cloth(
          l,
          n + 0.04,
          o,
          a + 0.04,
          s,
          Math.abs(Math.round(o)) % 2 ? t.tableCloth : t.tableCloth2,
          r < 0 ? Math.PI / 2 : -Math.PI / 2,
        ),
        n + 0.05
      ),
      d = (n = 3) => {
        for (let i = 0; i < n; i++) e.box(0.42, 0.05, 3.6, r * 4.67, 0.6 + i * 0.75, o, t.wood);
        e.box(0.05, 2.4, 0.05, r * 4.67, 1.2, o - 1.75, t.woodDark),
          e.box(0.05, 2.4, 0.05, r * 4.67, 1.2, o + 1.75, t.woodDark);
      };
    if (s === `lanterns`) {
      let n = u();
      for (let t = 0; t < 14; t++)
        e.lantern(c + (a() - 0.5) * 1.4, 2.2 + a() * 1, o + (a() - 0.5) * 3.2, 0.6 + a() * 0.35, 0.6 + a());
      for (let r = 0; r < 5; r++) r % 2 && e.vase(l, n, o - 1.3 + r * 0.65, 3, 0.9, t.brass);
      p.push({ kind: `lanterns`, position: R(c, 2.6, o) });
    } else if (s === `ceramics`) {
      let n = u();
      d(3);
      let i = [t.ceramicTeal, t.ceramicCream, t.ceramicOchre];
      for (let t = 0; t < 7; t++)
        (t % 2 ? e.vase.bind(e) : () => {})(l + (a() - 0.5) * 0.3, n, o - 1.4 + t * 0.46, t % 4, 0.75 + a() * 0.5, i[t % 3]);
      for (let t = 0; t < 3; t++)
        for (let n = 0; n < 6; n++)
          e.vase(r * 4.65, 0.63 + t * 0.75, o - 1.5 + n * 0.6, (n + t) % 4, 0.6 + a() * 0.4, i[(n + t) % 3]);
    } else if (s === `spices`) {
      for (let n = 0; n < 6; n++)
        e.sack(
          r * (3 + (n % 2) * 0.62),
          o - 1.3 + Math.floor(n / 2) * 1.25,
          0.24,
          [t.spiceSaffron, t.spiceRed, t.spiceGreen, t.spiceBrown, t.spiceRed, t.spiceSaffron][n],
        );
      d(2);
      for (let n = 0; n < 10; n++)
        e.vase(r * 4.65, 0.63 + (n % 2) * 0.75, o - 1.5 + (n >> 1) * 0.75, 1, 0.55, t.ceramicCream);
      let n = e.box(0.04, 0.9, 0.04, r * 3.9, 1.25, o + 1.5, t.brass);
      (n.castShadow = !0), e.box(0.6, 0.02, 0.02, r * 3.9, 1.7, o + 1.5, t.brass);
      for (let n of [-0.28, 0.28]) e.vase(r * 3.9 + n, 1.35, o + 1.5, 3, 0.7, t.brass);
    } else if (s === `textiles`) {
      for (let n = 0; n < 3; n++)
        e.banner(
          r * 4.8500000000000005,
          3.3,
          o - 1.2 + n * 1.2,
          1.1,
          2.6,
          t.rugHang,
          r < 0 ? Math.PI / 2 : -Math.PI / 2,
        );
      for (let t = 0; t < 9; t++)
        e.rolledRug(r * (3.3 + (t % 3) * 0.24), 0.12 + Math.floor(t / 3) * 0.22, o + 0.6, 1.5, 0.11, Math.PI / 2);
      for (let n = 0; n < 4; n++)
        e.box(
          0.8,
          0.07,
          0.6,
          l,
          0.06 + n * 0.08,
          o - 1,
          [t.clothTerracotta, t.clothCream, t.clothIndigo, t.clothBurgundy][n],
        );
    } else if (s === `brass`) {
      let n = u();
      for (let r = 0; r < 6; r++)
        (r % 2 ? e.vase.bind(e) : () => {})(l + (a() - 0.5) * 0.3, n, o - 1.35 + r * 0.54, r % 4, 0.8 + a() * 0.6, r % 2 ? t.brass : t.copper);
      d(3);
      for (let n = 0; n < 3; n++)
        for (let i = 0; i < 5; i++)
          e.vase(r * 4.65, 0.63 + n * 0.75, o - 1.4 + i * 0.7, (i * 3 + n) % 4, 0.8, n % 2 ? t.brassDark : t.brass);
      let s = new h();
      s.position.set(l - r * 0.12, n + 0.02, o + 0.25),
        (s.userData.dynamic = !0),
        i.add(s),
        e.lathe(
          [
            [0.001, 0],
            [0.09, 0],
            [0.11, 0.04],
            [0.06, 0.1],
            [0.08, 0.2],
            [0.03, 0.3],
            [0.001, 0.33],
          ],
          0,
          0,
          0,
          t.gold,
          18,
          s,
        ),
        (e.mesh(new Pe(0.075, 0.008, 6, 24), t.gold, 0, 0.2, 0, s).rotation.x = Math.PI / 2),
        g.push(s);
    } else if (s === `charms`) {
      u(0.75, 2.6);
      for (let n = 0; n < 4; n++) n % 2 || e.vase(l, 0.8, o - 1 + n * 0.6, 3, 0.8, t.brassDark);
      for (let n = 0; n < 7; n++) {
        let s = new h();
        s.position.set(r * 2.75, 3.3, o - 1.5 + n * 0.5), (s.userData.dynamic = !0), i.add(s);
        let c = 0.9 + a() * 0.8;
        e.cyl(0.004, 0.004, c, 0, -c / 2, 0, t.brassDark, 4, s);
        for (let n = 0; n < 6; n++) {
          let r = e.mesh(new y(0.03, 0.05, 6), t.brass, 0, (-c * (n + 1)) / 6, 0, s);
          r.rotation.x = Math.PI;
        }
        L(s), m.push(s);
      }
    } else if (s === `pearls`) {
      let n = u(0.85, 3);
      for (let r = 0; r < 4; r++) {
        e.box(0.42, 0.05, 0.6, l, n + 0.02, o - 1 + r * 0.66, t.velvet);
        for (let i = 0; i < 14; i++)
          e.sphere(
            0.018 + a() * 0.006,
            l + (a() - 0.5) * 0.32,
            n + 0.065,
            o - 1 + r * 0.66 + (a() - 0.5) * 0.48,
            t.pearl,
            10,
          );
      }
      for (let n = 0; n < 4; n++) {
        let a = [];
        for (let e = 0; e <= 12; e++) {
          let t = e / 12;
          a.push([r * 4.1, 2.1 - Math.sin(t * Math.PI) * 0.55, o - 1.3 + n * 0.85 + t * 0.6]);
        }
        e.tube(a, 0.012, t.pearl, i, 30, 6);
      }
      e.box(0.05, 0.05, 3.2, r * 4.1, 2.12, o, t.woodDark);
    } else if (s === `gold`) {
      e.box(0.7, 0.9, 3, l, 0.45, o, t.wood);
      for (let n of [0.12, 0.88]) e.box(0.72, 0.03, 3.02, l, n, o, t.brass);
      for (let n = 0; n < 4; n++) e.box(0.02, 0.6, 0.62, l + -r * 0.36, 0.48, o - 1.1 + n * 0.73, t.carved);
      e.box(0.66, 0.05, 2.94, l, 0.92, o, t.velvet);
      let s = e.box(0.7, 0.4, 3, l, 1.15, o, t.glass);
      s.castShadow = !1;
      for (let e = 0; e < 6; e++) {
        let t = new h();
        t.scale.setScalar(0.42),
          t.position.set(l, 0.99, o - 1.2 + e * 0.48),
          (t.rotation.x = -Math.PI / 2 + 0.3),
          (t.rotation.z = a()),
          (t.userData.dynamic = !0),
          i.add(t),
          (e === 2 || e === 4) && f.push(t.position.clone().add(R(0, 0.06, 0)));
      }
      e.box(0.05, 1.7, 3.2, r * 4.86, 1.95, o, t.velvet);
      for (let a = 0; a < 4; a++) {
        let s = o - 1.2 + a * 0.8,
          c = [];
        for (let e = 0; e <= 16; e++) {
          let t = e / 16;
          c.push([r * 4.82, 2.6 - Math.sin(t * Math.PI) * 0.45, s - 0.25 + t * 0.5]);
        }
        e.tube(c, 0.008, t.gold, i, 32, 6);
        let l = new h();
        l.scale.setScalar(0.22),
          l.position.set(r * 4.800000000000001, 2.1, s),
          l.rotation.set(0, r < 0 ? Math.PI / 2 : -Math.PI / 2, 0),
          i.add(l),
          e.sphere(0.015, r * 4.83, 2.62, s - 0.26, t.brass, 8),
          e.sphere(0.015, r * 4.83, 2.62, s + 0.26, t.brass, 8);
      }
    } else if (s === `cushions`) {
      for (let n = 0; n < 8; n++)
        e.sphere(
          0.3,
          r * (3.2 + (n % 2) * 0.7),
          0.22 + Math.floor(n / 4) * 0.36,
          o - 1.2 + (n % 4) * 0.8,
          [t.velvetRed, t.clothOchre, t.clothIndigo, t.clothTerracotta][n % 4],
          12,
        ).scale.set(1, 0.45, 1);
      for (let n = 0; n < 2; n++)
        e.banner(
          r * 4.8500000000000005,
          3.3,
          o - 0.8 + n * 1.6,
          1.4,
          2.8,
          t.rugHang,
          r < 0 ? Math.PI / 2 : -Math.PI / 2,
        );
    } else if (s === `shut`) {
      e.box(0.12, 3.2, 3.6, r * 2.8000000000000003, 1.6, o, t.woodDark);
      for (let n = 0; n < 6; n++) e.box(0.05, 3.1, 0.06, r * 2.72, 1.6, o - 1.6 + n * 0.64, t.wood);
    }
  };
  {
    let n = new h();
    e.lathe(
      [
        [0.001, 0],
        [0.06, 0],
        [0.07, 0.03],
        [0.05, 0.06],
        [0.02, 0.09],
        [0.035, 0.1],
      ],
      0,
      0,
      0,
      t.brass,
      18,
      n,
    );
    let r = e.cyl(0.008, 0.02, 0.12, 0.08, 0.05, 0, t.brass, 8, n);
    (r.rotation.z = -1.1),
      (e.mesh(new Pe(0.03, 0.006, 6, 16), t.brass, -0.075, 0.06, 0, n).rotation.y = Math.PI / 2),
      v(
        n,
        -2.95,
        0.86,
        d[0] + 1,
        `Oil lamp`,
        `Spun on a lathe from one disc of brass, then the spout is soldered and the seam hidden with a file.`,
        0.17,
      );
    let i = new h();
    e.lathe(
      [
        [0.001, 0],
        [0.05, 0],
        [0.11, 0.04],
        [0.13, 0.07],
        [0.125, 0.075],
      ],
      0,
      0,
      0,
      t.ceramicTeal,
      24,
      i,
    ),
      v(
        i,
        2.95,
        0.86,
        d[0] + 0.9,
        `Glazed bowl`,
        `Thrown on a kick wheel and glazed with copper oxide, which the kiln turns this deep sea-green.`,
        0.2,
      );
    let a = new h(),
      o = [];
    for (let e = 0; e <= 24; e++) {
      let t = (e / 24) * Math.PI * 2;
      o.push(new D(Math.cos(t) * 0.07, 0, Math.sin(t) * 0.05));
    }
    for (let n = 0; n < 24; n++) e.sphere(0.008, o[n].x, 0.008, o[n].z, t.pearl, 10, a);
    v(
      a,
      -2.95,
      0.91,
      d[4] + 0.9,
      `Seed-pearl strand`,
      `Each pearl is drilled by hand and knotted on silk, so a broken thread never loses more than one.`,
      0.18,
    );
    let s = new h();
    e.lathe(
      [
        [0.001, 0],
        [0.04, 0],
        [0.05, 0.03],
        [0.05, 0.04],
      ],
      0,
      0,
      0,
      t.copper,
      16,
      s,
    ),
      (e.cyl(0.006, 0.006, 0.14, 0.09, 0.03, 0, t.woodDark, 6, s).rotation.z = Math.PI / 2),
      v(
        s,
        -3,
        0.51,
        d[1] - 1.3,
        `Spice scoop`,
        `Copper, beaten into a cup over a wooden form; the handle is olive wood, worn smooth by years of use.`,
        0.16,
      );
  }
  let C = [`lanterns`, `spices`, `brass`, `textiles`, `pearls`, `lanterns`, `textiles`, `cushions`, `shut`],
    w = [`ceramics`, `textiles`, `charms`, `ceramics`, `gold`, `spices`, `brass`, `ceramics`, `shut`];
  d.forEach((e, t) => {
    x(-1, e, C[t]), x(1, e, w[t]);
  });
  let kpSouk = dressSouk({ props: n.props, group: i, rows: u, bays: d, left: C, right: w, M: t });
  let ee = [];
  for (let [r, a] of [
    [-1, d[1] + 1.2],
    [1, d[4] - 1],
    [-1, d[6] + 1.4],
    [1, d[1] - 1.3],
    [1, d[3] + 1.2],
    [-1, d[2] - 1.4],
  ]) {
    e.box(0.44, 0.42, 0.44, r * 4.12, 0.21, a, t.woodDark);
    let o = n.artisan.clone();
    o.position.set(r * 3.95, 0, a),
      (o.rotation.y = r < 0 ? Math.PI / 2 : -Math.PI / 2),
      o.scale.setScalar(1.05),
      (o.userData.dynamic = !0),
      i.add(o),
      L(o),
      ee.push(o);
  }
  let te = e.flushLanterns(i, 2.4),
    ne = [];
  for (let e of b) {
    let t = R(-0.3, 7.5, e),
      n = Ht(t, t.clone().addScaledVector(Xt, -7.5 / Xt.y), 1.4, 1.9, `#ffe2b4`, 0.17);
    i.add(n), ne.push(n);
  }
  let re = new _t(220, new Te(R(-2.4, 0.3, s), R(2.4, 5, o)), { size: 0.009, opacity: 0.45, speed: 0.02, seed: 9 });
  (re.points.userData.dynamic = !0), i.add(re.points), L(i);
  let ie = [];
  for (let e = 0; e < d.length - 1; e++)
    ie.push({ position: R(e % 2 ? 1.5 : -1.5, 3, d[e]), color: `#ffb969`, intensity: 5, distance: 8, flicker: !0 });
  return (
    ie.push({ position: R(0, 3.2, 1.8), color: `#ffe1b0`, intensity: 6, distance: 9 }),
    {
      id: `souk`,
      kp: kpSouk,
      group: i,
      shimmer: f,
      reactors: p,
      charms: m,
      brassPieces: g,
      merchants: ee,
      curios: _,
      env: {
        sun: 3,
        sunColor: `#ffe0b0`,
        hemi: 1.05,
        sky: `#f7e2c0`,
        groundCol: `#8a6a48`,
        env: 0.85,
        fog: `#d4b48a`,
        fogNear: 28,
        fogFar: 130,
        exposure: 1.05,
        sunDir: Xt.toArray(),
      },
      lights: ie,
      update(e, kpDt, kpHead) {
        re.update(e);
        for (let t of m)
          t.rotation.z = Math.sin(e * 1.3 + t.position.z * 3) * 0.04 * (1 + (t.userData.excite || 0) * 6);
        for (let e of m) e.userData.excite && (e.userData.excite *= 0.985);
        te.material.emissiveIntensity = 1.8 * (1 + 0.25 * (this.lanternBoost || 0));
        soukTick(kpSouk, kpDt || 0.016, kpHead, te.material.emissiveIntensity);
      },
      music: `mus_souk`,
      amb: `amb_souk`,
    }
  );
}
var Qt = new Map();
function $t(e, t) {
  if (Qt.has(t)) return Qt.get(t);
  let n = e.rug.clone();
  n.side = 2;
  let r = { value: t === `ride` ? 0.4 : 0.15 };
  return (
    (n.userData.flutter = r),
    (n.onBeforeCompile = (e) => {
      (e.uniforms.uTime = ct.time),
        (e.uniforms.uFlutter = r),
        (e.vertexShader = e.vertexShader
          .replace(
            `#include <common>`,
            `#include <common>
uniform float uTime; uniform float uFlutter;`,
          )
          .replace(
            `#include <begin_vertex>`,
            `#include <begin_vertex>
        vec4 cw = modelMatrix * vec4(0.0,0.0,0.0,1.0);
        float ph = cw.x * 0.7 + cw.z * 0.37;
        float along = position.z; float across = position.x;
        float wave = sin(along * 2.6 - uTime * (1.6 + uFlutter * 3.0) + ph) * (0.012 + uFlutter * 0.03) + sin(across * 3.1 + uTime * 1.1 + ph) * 0.008;
        float edge = pow(abs(along) / 1.6, 4.0) * 0.06 + pow(abs(across) / 1.1, 6.0) * 0.03;
        transformed.y += wave + edge;`,
          ));
    }),
    (n.customProgramCacheKey = () => `carpet-` + t),
    Qt.set(t, n),
    n
  );
}
function en(e, t, n = 1.9, r = 2.8, i = `parked`) {
  let a = new h();
  a.userData.dynamic = !0;
  let o = new ye(n, 0.03, r, 12, 1, 18),
    s = new S(o, $t(t, i));
  (s.castShadow = !0), (s.receiveShadow = !0), a.add(s);
  for (let t of [-1, 1]) {
    let i = new S(new u(n * 0.96, 0.12), e.fringeMat());
    (i.rotation.x = -Math.PI / 2 + t * 0.15), i.position.set(0, 0, t * (r / 2 + 0.06)), a.add(i);
  }
  return (a.userData.w = n), (a.userData.d = r), (a.userData.flutter = s.material.userData.flutter), a;
}
function tn(e, t, n) {
  let r = new h();
  e.at(r);
  let i = -37.2,
    a = -54.4;
  e.block(-8.6, a, 8.6, i, -0.25, 0, t.floor);
  let o = new we();
  for (let e = 0; e < 16; e++) {
    let t = (e / 16) * Math.PI * 2,
      n = e % 2 ? 1.25 : 2.1;
    e ? o.lineTo(Math.cos(t) * n, Math.sin(t) * n) : o.moveTo(Math.cos(t) * n, Math.sin(t) * n);
  }
  let s = new Ae(o);
  s.rotateX(-Math.PI / 2), (e.mesh(s, t.floorDark, z.carpet.x, 0.004, z.carpet.z).castShadow = !1);
  let c = e.mesh(new Pe(2.3, 0.025, 4, 64), t.brass, z.carpet.x, 0.004, z.carpet.z);
  c.rotation.x = -Math.PI / 2;
  for (let n of [-1, 1]) {
    e.block(n * 8.5, a, n * 9.1, i, 0, 9, t.stone);
    for (let r = 0; r < 3; r++) {
      let i = -40.1 - r * 5.7;
      e.archWall({
        x: n * 8,
        z: i,
        rotY: (n * Math.PI) / 2,
        width: 5.75,
        height: 6.2,
        depth: 0.7,
        openW: 3.8,
        spring: 3.2,
        rise: 2.2,
        band: 0.34,
      }),
        e.banner(n * 8.42, 4.6, i, 1.6, 3.6, t.rugHang, n < 0 ? Math.PI / 2 : -Math.PI / 2),
        e.lantern(n * 7.3, 4.2, i - 2.85, 1.05, 1.3),
        e.box(0.6, 2.8, 5.7, n * 8, 7.6, i, t.plaster),
        e.mashrabiya(n * 7.69, 7.4, i, 2, 1.6, Math.PI / 2);
    }
    e.box(0.9, 0.3, 17.199999999999996, n * 7.9, 6.3, -91.6 / 2, t.carved);
  }
  e.archWall({ x: 0, z: -37.35, width: 17.2, height: 9, depth: 0.6, openW: 4.6, spring: 3.4, rise: 2.4, band: 0.4 }),
    e.archWall({ x: 0, z: -54, width: 17.2, height: 10.5, depth: 1.2, openW: 6.6, spring: 4.6, rise: 3.6, band: 0.55 }),
    e.box(6.4, 0.9, 0.4, 0, 0.45, -54.199999999999996, t.carved),
    e.frieze(-8, 8, -53.379999999999995, 8.55, { topY: 10.5 }),
    e.frieze(-8, 8, -37.67, 7, { flip: !0, topY: 9 });
  for (let n of [-1, 1]) {
    e.banner(n * 5.2, 8.2, -53.339999999999996, 1.3, 5.2, n < 0 ? t.bannerKilim : t.bannerBorder, 0),
      e.banner(n * 5.6, 6.9, -37.7, 1.2, 4.2, t.rugHang, Math.PI),
      e.lantern(n * 2.3, 5.6, -53, 1.2, 2.4);
    for (let r = 0; r < 2; r++) e.vase(n * (2.7 + r * 0.55), 0, -53.05, r % 2 ? 2 : 0, 1.7, r ? t.copper : t.brass);
  }
  e.lantern(0, 7, -53.9, 1.4, 1.2), e.rug(-5.2, 0, -44, 2.4, 3.2, Math.PI / 2);
  for (let n = 0; n < 3; n++)
    e.sphere(0.34, -6.6 + n * 0.05, 0.18, -45.2 + n * 1.1, [t.velvetRed, t.tableCloth, t.tableCloth2][n], 12).scale.set(
      1.2,
      0.45,
      1,
    );
  e.cyl(0.42, 0.42, 0.04, -5.2, 0.42, -44, t.brass, 24), e.cyl(0.05, 0.08, 0.4, -5.2, 0.2, -44, t.woodDark, 8);
  for (let n = 0; n < 3; n++) e.vase(-5.35 + n * 0.16, 0.44, -44.1 + (n % 2) * 0.15, 3, 0.5, t.ceramicCream);
  e.rug(5.4, 0, -40.5, 2.2, 3, Math.PI / 2);
  for (let t of [-1, 1]) e.column(t * 3.9, -53, 4.5, 0.26);
  e.block(-9, -55, 9, -53.8, -10, 0, t.stone);
  let l = [];
  for (let [n, i, a, o] of [
    [-4.6, 0.55, -41.5, 0.25],
    [4.8, 0.9, -42.5, -0.35],
    [-5, 1.35, -48.6, 0.1],
    [4.6, 0.6, -50.2, -0.15],
    [-2.4, 2.1, -52, 0.5],
  ]) {
    let s = en(e, t, 1.7, 2.5);
    s.position.set(n, i, a), (s.rotation.y = o), r.add(s), l.push({ c: s, y: i, phase: n * 1.3 + a });
  }
  let u = en(e, t, 2, 2.9, `ride`);
  u.position.copy(z.carpet), r.add(u);
  let d = e.mesh(new Fe(0.11, 0.9, 6, 14).rotateZ(Math.PI / 2), t.tableCloth, 0, 0.1, 0.95, u);
  d.castShadow = !0;
  for (let [n, i] of [
    [-6.6, -38.6],
    [6.6, -38.6],
    [-6.6, -52.8],
    [6.6, -52.8],
  ])
    e.lathe(
      [
        [0.001, 0],
        [0.34, 0],
        [0.5, 0.55],
        [0.55, 0.62],
      ],
      n,
      0,
      i,
      t.clay,
      16,
    ),
      e.palm(n, 0.55, i, 3.2, r, 0.08);
  let f = e.flushLanterns(r, 2.2);
  return (
    L(r),
    {
      id: `courtyard`,
      group: r,
      carpet: u,
      parked: l,
      env: {
        sun: 3.2,
        sunColor: `#ffe3b8`,
        hemi: 1,
        sky: `#f4dfbd`,
        groundCol: `#8a6a48`,
        env: 0.8,
        fog: `#d9bf98`,
        fogNear: 30,
        fogFar: 160,
        exposure: 1.05,
        sunDir: [0.5, 0.62, -0.6],
      },
      lights: [
        { position: R(-6.8, 3.6, -45), color: `#ffbb6a`, intensity: 4, distance: 8, flicker: !0 },
        { position: R(6.8, 3.6, -45), color: `#ffbb6a`, intensity: 4, distance: 8, flicker: !0 },
        { position: R(0, 3, -38.5), color: `#ffd9a0`, intensity: 4, distance: 8 },
      ],
      update(e) {
        for (let t of l) t.c.position.y = t.y + Math.sin(e * 0.9 + t.phase) * 0.05;
        f.material.emissiveIntensity = 1.65;
      },
      music: `mus_souk`,
      amb: `amb_souk`,
    }
  );
}
function nn({
  center: e,
  count: t = 14,
  radius: r = 18,
  height: i = 10,
  spread: a = 6,
  color: o = `#3b3128`,
  speed: s = 0.12,
  size: l = 0.32,
  seed: u = 1,
}) {
  let d = new fe();
  d.setAttribute(
    `position`,
    new E(
      new Float32Array([
        0, 0, 0.18, -0.05, 0, -0.12, 0.05, 0, -0.12, 0, 0, 0.05, -0.55, 0, -0.05, 0, 0, -0.08, 0, 0, 0.05, 0.55, 0,
        -0.05, 0, 0, -0.08,
      ]),
      3,
    ),
  ),
    d.setAttribute(`flap`, new E(new Float32Array([0, 0, 0, 0, 1, 0, 0, 1, 0]), 1));
  let f = new c({ color: o, side: 2, fog: !0 });
  (f.onBeforeCompile = (e) => {
    (e.uniforms.uTime = ct.time),
      (e.vertexShader = e.vertexShader
        .replace(
          `#include <common>`,
          `#include <common>
uniform float uTime; attribute float flap; attribute float phase;`,
        )
        .replace(
          `#include <begin_vertex>`,
          `#include <begin_vertex>
        float f = sin(uTime * 9.0 + phase * 6.28) * 0.6 + 0.15;
        transformed.y += flap * abs(transformed.x) * f;`,
        ));
  }),
    (f.customProgramCacheKey = () => `bird`);
  let h = new m(d, f, t),
    g = new Float32Array(t),
    v = u,
    y = () => (v = (v * 16807) % 2147483647) / 2147483647,
    b = [];
  for (let e = 0; e < t; e++)
    (g[e] = y()),
      b.push({
        a: y() * Math.PI * 2,
        r: r * (0.6 + y() * 0.5),
        h: i + (y() - 0.5) * a,
        w: s * (0.8 + y() * 0.4),
        bob: y() * 10,
      });
  d.setAttribute(`phase`, new p(g, 1)), (h.frustumCulled = !1), (h.userData.dynamic = !0), (h.castShadow = !1);
  let x = new n(),
    S = new _(),
    C = new D(),
    w = new D(l, l, l),
    ee = new D(0, 1, 0);
  return (
    (h.userData.update = (n) => {
      for (let r = 0; r < t; r++) {
        let t = b[r],
          i = t.a + n * t.w;
        C.set(e.x + Math.cos(i) * t.r, e.y + t.h + Math.sin(n * 0.7 + t.bob) * 0.8, e.z + Math.sin(i) * t.r * 0.7),
          S.setFromAxisAngle(ee, Math.atan2(-Math.sin(i), Math.cos(i) * 0.7)),
          x.compose(C, S, w),
          h.setMatrixAt(r, x);
      }
      h.instanceMatrix.needsUpdate = !0;
    }),
    h
  );
}
function rn(e, t) {
  let n = new h();
  e.at(n);
  let r = We(808);
  e.block(-90, -104.5, 90, -54, -9.5, -9, t.floorDark);
  let i = [t.plaster, t.stone, t.plaster],
    a = (e, t) => Math.abs(e) < 6 && t < -60 && t > -100;
  for (let o = -56; o > -101.5; o -= 7 + r() * 3)
    for (let s = -70; s < 70; s += 6 + r() * 4) {
      let c = 4 + r() * 4,
        l = 4 + r() * 3.5,
        u = s + c / 2,
        d = o - l / 2;
      if (Math.abs(u) < 2.4 && d < -58 && d > -101) continue;
      let f = (a(u, d) ? -3.6 : -3.2) + r() * 3.8 - Math.max(0, Math.abs(u) - 30) * 0.02,
        p = i[(r() * 3) | 0];
      e.block(u - c / 2, d - l / 2, u + c / 2, d + l / 2, -9, f, p),
        e.box(c + 0.15, 0.35, 0.18, u, f + 0.17, d - l / 2, p),
        e.box(c + 0.15, 0.35, 0.18, u, f + 0.17, d + l / 2, p),
        e.box(0.18, 0.35, l, u - c / 2, f + 0.17, d, p),
        e.box(0.18, 0.35, l, u + c / 2, f + 0.17, d, p);
      let m = r();
      if (
        (m < 0.12
          ? e.dome(u, f, d, Math.min(c, l) * 0.42, r() > 0.5 ? t.plaster : t.stone)
          : m < 0.3
            ? e.awning(
                u,
                f + 2.1,
                d,
                c * 0.7,
                l * 0.6,
                [t.sailCream, t.sailTerracotta, t.sailOchre][(r() * 3) | 0],
                0,
                0.25,
              )
            : m < 0.45 &&
              e.box(1.1, 0.9, 1.1, u + (r() - 0.5) * c * 0.5, f + 0.45, d + (r() - 0.5) * l * 0.5, t.stoneDark),
        Math.abs(u) < 26)
      )
        for (let n = -6.8; n < f - 1.2; n += 2.8)
          for (let i = -1; i <= 1; i += 2)
            r() > 0.55 &&
              (e.box(0.55, 0.9, 0.08, u + i * c * 0.25, n, d + l / 2 + 0.03, t.woodDark),
              e.box(0.7, 0.08, 0.2, u + i * c * 0.25, n - 0.5, d + l / 2 + 0.08, t.stoneDark));
      if (r() < 0.22 && Math.abs(u) < 30) {
        let r = f + 1.1;
        e.tube(
          [
            [u - c * 0.4, r, d],
            [u, r - 0.15, d],
            [u + c * 0.4, r, d],
          ],
          0.01,
          t.woodDark,
          n,
          8,
          4,
        );
        for (let n = 0; n < 4; n++)
          e.banner(
            u - c * 0.3 + n * c * 0.2,
            r - 0.05,
            d,
            0.45,
            0.7,
            [t.bannerStripe, t.clothTerracotta, t.bannerIndigo, t.clothOchre][n],
            0,
          );
        for (let n of [-1, 1]) e.box(0.06, 1.2, 0.06, u + n * c * 0.4, f + 0.6, d, t.woodDark);
      }
      r() < 0.07 && !a(u, d) && e.palm(u + (r() - 0.5) * c * 0.4, f, d + (r() - 0.5) * l * 0.4, 4 + r() * 2);
    }
  let o = [t.bannerKilim, t.bannerBorder, t.bannerIndigo, t.rugHang, t.bannerStripe, t.clothTerracotta],
    s = 0;
  for (let n of [-66, -76, -86]) {
    for (let r of [-1, 1])
      e.block(r * 3.3, n - 1.1, r * 5.5, n + 1.1, -9, 9.2, t.stone),
        e.box(2.6, 0.35, 2.6, r * 4.4, 9.35, n, t.carved),
        e.dome(r * 4.4, 9.5, n, 0.95, t.plaster),
        e.mashrabiya(r * 3.27, 6.8, n, 0.9, 1.4, Math.PI / 2);
    e.box(7.2, 0.34, 0.34, 0, 8.4, n, t.woodDark), e.box(7.2, 0.12, 0.42, 0, 8.62, n, t.wood);
    for (let t of [-1, 1])
      for (let i = 0; i < 2; i++)
        e.banner(t * (1.9 + i * 0.85), 8.25, n + 0.05, 0.75, 3.4 + r() * 1.2, o[s++ % o.length], 0);
    e.lantern(0, 7.6, n, 1.1, 0.5), e.awning(0, 8.2, n + 0.25, 7, 0.5, t.sailKilim, 0, 0.5);
  }
  for (let t of [-60, -71, -81, -93, -98]) e.palm((r() - 0.5) * 2.4, -9, t, 7 + r() * 3);
  let c = R(15, -9, -80);
  e.cyl(1.5, 1.8, 18, c.x, 0, c.z, t.stone, 16),
    e.cyl(2.2, 1.6, 0.6, c.x, 9.2, c.z, t.carved, 16),
    e.cyl(1.1, 1.3, 6, c.x, 12.5, c.z, t.plaster, 16),
    e.cyl(1.6, 1.2, 0.5, c.x, 15.600000000000001, c.z, t.carved, 16),
    e.dome(c.x, 15.8, c.z, 1.1, t.plaster),
    e.block(-24, -79, -12, -91, -9, 2.5, t.stone),
    e.dome(-18, 2.5, -85, 5.2, t.plaster);
  for (let n of [-1, 1]) e.dome(-18 + n * 7, -1.5, -85, 2.4, t.plaster);
  e.block(-28, -79, -26, -81, -9, 8, t.stone),
    e.dome(-27, 8, -80, 1, t.plaster),
    e.block(-12, -104.1, 12, -102.9, -9, 0, t.stone);
  let l = e.flushLanterns(n, 2),
    u = [
      nn({ center: R(-6, -9, -78), count: 16, radius: 22, height: 21, seed: 3 }),
      nn({ center: R(14, -9, -62), count: 9, radius: 12, height: 17, speed: 0.16, seed: 9 }),
    ];
  for (let e of u) n.add(e);
  return (
    L(n),
    {
      id: `valley`,
      group: n,
      env: {
        sun: 3.4,
        sunColor: `#ffe3b8`,
        hemi: 1,
        sky: `#f4dfbd`,
        groundCol: `#8a6a48`,
        env: 0.85,
        fog: `#dcc29c`,
        fogNear: 35,
        fogFar: 220,
        exposure: 1.05,
        sunDir: [0.5, 0.5, -0.7],
      },
      lights: [],
      update(e) {
        l.material.emissiveIntensity = 1.5;
        for (let t of u) t.userData.update(e);
      },
      music: `mus_souk`,
      amb: `amb_flight`,
    }
  );
}
function an(e, t) {
  let n = new h();
  e.at(n);
  let r = -103.6,
    i = -118.4;
  e.block(-7.4, i, 7.4, r, -9, 0, t.stone),
    e.block(-7.4, i, 7.4, r, -0.02, 0, t.floor),
    e.box(2.6, 0.012, 3.4, 0, 0.006, -109.5, t.floorDark);
  for (let n of [-1, 1])
    e.box(0.05, 0.014, 3.4, n * 1.3, 0.008, -109.5, t.brass),
      e.box(2.6, 0.014, 0.05, 0, 0.008, -109.5 + n * 1.7, t.brass);
  for (let n of [-1, 1]) {
    let r = n * 2.1,
      i = n * 7;
    e.box(Math.abs(i - r), 0.12, 0.3, (r + i) / 2, 1, -103.5, t.wood),
      e.box(Math.abs(i - r), 0.12, 0.26, (r + i) / 2, 0.1, -103.5, t.stoneDark);
    for (let n = Math.min(r, i); n <= Math.max(r, i); n += 0.32) e.cyl(0.035, 0.045, 0.85, n, 0.55, -103.5, t.wood, 8);
    e.box(0.35, 1.5, 0.35, r, 0.75, -103.5, t.carved), e.lantern(r, 1.75, -103.5, 0.8, 0);
  }
  for (let a of [-1, 1]) {
    e.block(a * 7, i, a * 7.6, r, 0, 7.5, t.stone),
      e.archWall({
        x: a * 6.95,
        z: -110.5,
        rotY: (a * Math.PI) / 2,
        width: 4.6,
        height: 6,
        depth: 0.2,
        openW: 1.8,
        spring: 2.4,
        rise: 1.2,
        band: 0.26,
      }),
      e.door(a * 7.05, -110.5, 1.8, 3.6, (-a * Math.PI) / 2, n, 2.4),
      e.box(1.1, 0.15, 3.4, a * 6.45, 4.2, -110.5, t.woodDark);
    for (let n = -112; n <= -109; n += 0.3) e.cyl(0.025, 0.025, 0.8, a * 5.95, 4.65, n, t.wood, 6);
    e.box(0.1, 0.1, 3.4, a * 5.95, 5.05, -110.5, t.wood),
      e.box(0.12, 1.6, 0.12, a * 6.3, 0.8, -105.5, t.wood),
      e.box(0.12, 1.6, 0.12, a * 6.3, 0.8, -107.5, t.wood);
    for (let t = 0; t < 4; t++) e.rolledRug(a * 6.3, 0.35 + t * 0.38, -106.5, 2.1, 0.12, Math.PI / 2);
  }
  e.archWall({
    x: 0,
    z: -118.25,
    width: 15.2,
    height: 8.5,
    depth: 0.7,
    openW: 2.7,
    spring: 2.8,
    rise: 1.8,
    band: 0.45,
  }),
    e.box(15.2, 0.35, 0.9, 0, 8.5, -118.25, t.carved),
    e.frieze(-7, 7, -117.9, 6.6, { topY: 8.75, arches: !1 }),
    e.box(3.6, 0.16, 1, 0, 5.15, -117.45, t.woodDark);
  for (let n = -1.7; n <= 1.7; n += 0.22) e.cyl(0.025, 0.03, 0.75, n, 5.6, -116.98, t.wood, 6);
  e.box(3.6, 0.08, 0.1, 0, 5.98, -116.98, t.wood);
  for (let n of [-1.5, 1.5]) {
    let r = e.box(0.14, 0.7, 0.14, n, 4.75, -117.65, t.woodDark);
    r.rotation.x = 0.6;
  }
  e.mashrabiya(0, 6.2, -117.87, 1.6, 1.6, 0);
  let a = e.door(0, -118.35000000000001, 2.7, 4.6, 0, n, 2.8);
  e.mashrabiya(-3.8, 5.6, -117.88000000000001, 1.8, 2.2, 0), e.mashrabiya(3.8, 5.6, -117.88000000000001, 1.8, 2.2, 0);
  for (let [n, r] of [
    [-5.6, t.rugHang],
    [-4.4, t.bannerKilim],
    [4.4, t.bannerBorder],
    [5.6, t.rugHang],
  ])
    e.banner(n, 4.4, -117.84, 1, 3.2, r, 0);
  for (let [n, r, i] of [
    [-6.1, -104.6, 0],
    [6.1, -104.6, 2],
    [-3.2, -117.2, 1],
    [3.2, -117.2, 0],
  ])
    e.vase(n, 0, r, i, 1.8, i === 1 ? t.copper : t.brass);
  for (let [n, r] of [
    [5.8, -113.2],
    [5.3, -112.6],
    [5.9, -112.3],
  ])
    e.box(0.6, 0.5, 0.6, n, 0.25, r, t.wood);
  e.box(0.5, 0.4, 0.5, 5.6, 0.7, -112.9, t.woodDark),
    e.awning(0, 5.4, -107, 14, 4.5, t.sailStripe, 0, 0.45),
    e.awning(0, 5.6, -112.2, 14, 4.5, t.sailKilim, 0, 0.45);
  for (let n of [-104.8, -109.6, -114.6]) e.box(14, 0.22, 0.22, 0, 5.4, n, t.wood);
  for (let t of [-4.5, 0, 4.5]) for (let n of [-107.2, -112.3]) e.lantern(t, 4.4, n, 1, 0.8);
  for (let [r, i] of [
    [-5.6, -116.8],
    [5.6, -116.8],
  ])
    e.lathe(
      [
        [0.001, 0],
        [0.32, 0],
        [0.4, 0.62],
        [0.45, 0.7],
      ],
      r,
      0,
      i,
      t.clay,
      16,
    ),
      e.palm(r, 0.62, i, 3, n, 0.06);
  let o = [];
  for (let [r, i, a, s] of [
    [-4.4, 0.45, -108.5, 0.1],
    [4.5, 0.75, -107.8, -0.15],
    [-4.6, 0.6, -113.6, -0.05],
    [4.4, 0.4, -114, 0.2],
  ]) {
    let c = en(e, t, 1.6, 2.4);
    c.position.set(r, i, a), (c.rotation.y = s), n.add(c), o.push({ c, y: i, phase: r + a });
  }
  let s = e.flushLanterns(n, 2.2);
  return (
    L(n),
    {
      id: `dock`,
      group: n,
      door: a,
      parked: o,
      env: {
        sun: 3.1,
        sunColor: `#ffdfae`,
        hemi: 0.95,
        sky: `#f4dfbd`,
        groundCol: `#8a6a48`,
        env: 0.8,
        fog: `#dcc29c`,
        fogNear: 30,
        fogFar: 200,
        exposure: 1.05,
        sunDir: [0.55, 0.5, -0.66],
      },
      lights: [
        { position: R(-4.5, 3.6, -110), color: `#ffbb6a`, intensity: 4, distance: 8, flicker: !0 },
        { position: R(4.5, 3.6, -110), color: `#ffbb6a`, intensity: 4, distance: 8, flicker: !0 },
        { position: R(0, 2.6, -116.6), color: `#ffcf8a`, intensity: 4, distance: 6 },
      ],
      update(e) {
        for (let t of o) t.c.position.y = t.y + Math.sin(e * 0.8 + t.phase) * 0.04;
        s.material.emissiveIntensity = 1.65;
      },
      music: `mus_souk`,
      amb: `amb_souk`,
    }
  );
}
var on = Math.PI * 2,
  sn = (e, t, n = 0) => new D(e, t, n);
function cn(e, t, n = !1, r) {
  let i = new Le(e, n, `centripetal`);
  return new ce(i, r || Math.max(12, e.length * 3), t, 5, n);
}
function ln(e) {
  let t = e.geometry.index.count;
  return (
    (e.userData.grow = (n) => {
      let r = Math.floor((k(n) * t) / 30) * 30;
      e.geometry.setDrawRange(0, r), (e.visible = r > 0);
    }),
    e
  );
}
function un(e, t) {
  let n = [];
  for (let r = 0; r <= 18; r++) {
    let i = r / 18;
    n.push(sn(i * e, Math.sin(Math.PI * i) ** 0.85 * t * (1 - 0.25 * i), 0));
  }
  for (let r = 17; r > 0; r--) {
    let i = r / 18;
    n.push(sn(i * e, -(Math.sin(Math.PI * i) ** 0.85) * t * (1 - 0.25 * i), 0));
  }
  let r = [[sn(0, 0), sn(e * 0.5, 0.004), sn(e * 0.95, 0)]];
  for (let n = 1; n <= 4; n++) {
    let i = n / 5.5;
    for (let n of [-1, 1])
      r.push([
        sn(i * e, 0),
        sn(i * e + e * 0.1, n * t * 0.35),
        sn(i * e + e * 0.16, n * t * 0.62 * Math.sin(Math.PI * (i + 0.1))),
      ]);
  }
  return { outline: n, veins: r };
}
function dn(e, t) {
  let n = [];
  for (let r = 0; r <= 14; r++) {
    let i = (r / 14) * on,
      a = (1 - Math.cos(i)) / 2;
    n.push(sn(a * e, Math.sin(i) * t * Math.sin(Math.PI * a) ** 0.6, 0));
  }
  return n.pop(), n;
}
function fn(e, t, n = 5, r = 0.0035) {
  let i = new h();
  i.userData.petals = [];
  let a = [];
  for (let e = 0; e < n; e++) {
    let i = cn(dn(t, t * 0.42), r, !0, 30);
    i.rotateZ((e / n) * on), a.push(i);
  }
  let o = new S(_e(a), e.gold);
  (o.castShadow = !0), i.add(o);
  for (let e of a) e.dispose();
  i.userData.petalMesh = o;
  let s = new S(new T(t * 0.22, 14, 10), e.pearl);
  return (s.position.z = t * 0.05), i.add(s), (i.userData.pearl = s), i;
}
function pn(e, t, n, r = 0.0035) {
  let i = new h(),
    { outline: a, veins: o } = un(t, n),
    s = ln(new S(cn(a, r, !0, 48), e.gold));
  i.add(s);
  let c = o.map((e) => cn(e, r * 0.6, !1, 8)),
    l = ln(new S(_e(c), e.gold));
  i.add(l);
  for (let e of c) e.dispose();
  return (
    i.traverse((e) => {
      e.isMesh && (e.castShadow = !0);
    }),
    (i.userData.parts = i.children),
    i
  );
}
function mn(e, t = 0.2, n = {}) {
  let r = new h(),
    i = t * 0.018;
  (r.userData.leaves = []), (r.userData.flowers = []);
  for (let n = 0; n < 8; n++) {
    let a = pn(e, t * 0.95, t * 0.24, i);
    (a.rotation.z = (n / 8) * on + on / 16), (a.position.z = -t * 0.02);
    let o = new h();
    o.add(a),
      (a.position.x = t * 0.32),
      (o.rotation.z = a.rotation.z),
      (a.rotation.z = 0),
      r.add(o),
      r.userData.leaves.push(o);
  }
  for (let n = 0; n < 8; n++) {
    let a = fn(e, t * 0.2, 5, i * 0.9),
      o = (n / 8) * on;
    a.position.set(Math.cos(o) * t * 0.48, Math.sin(o) * t * 0.48, t * 0.03), r.add(a), r.userData.flowers.push(a);
  }
  let a = new S(new Pe(t * 0.3, i * 1.4, 6, 48), e.gold);
  if ((r.add(a), (r.userData.ring = a), n.pearl)) {
    let n = new S(new T(t * 0.25, 24, 16), e.pearl);
    (n.position.z = t * 0.05), r.add(n), (r.userData.pearl = n);
  }
  return (
    r.traverse((e) => {
      e.isMesh && (e.castShadow = !0);
    }),
    r
  );
}
function hn(e, t) {
  let { leaves: n, flowers: r, ring: i } = e.userData;
  i.scale.setScalar(Math.max(0.001, Ve(k(t / 0.2)))),
    n.forEach((e, n) => {
      let r = k((t - 0.12 - n * 0.03) / 0.45),
        i = e.children[0];
      for (let e of i.children) e.userData.grow?.(r);
      e.scale.setScalar(0.6 + 0.4 * A(r));
    }),
    r.forEach((e, n) => {
      let r = k((t - 0.45 - n * 0.03) / 0.35);
      e.scale.setScalar(Math.max(0.001, Ve(r))),
        e.userData.petalMesh && (e.userData.petalMesh.rotation.x = (1 - A(r)) * 0.9);
    });
}
var gn = class {
    constructor(e, t = {}) {
      let n = We(31);
      (this.group = new h()), (this.group.name = `Sculpture`);
      let r = t.width || 3.6,
        i = t.height || 4.6,
        a = i * 0.55;
      this.parts = [];
      let o = e.gold,
        s = (e, t) => {
          let n = [],
            o = r / 2 + e;
          for (let e = 0; e <= 30; e++) {
            let r = e / 30,
              s,
              c;
            if (r < 0.45) {
              let e = r / 0.45;
              (s = t * o * (1 - 0.04 * Math.sin(e * Math.PI))), (c = e * a);
            } else {
              let e = (((r - 0.45) / 0.55) * Math.PI) / 2;
              (s = t * o * Math.cos(e) ** 1.25), (c = a + (i - a) * Math.sin(e) ** 0.85);
            }
            n.push(sn(s + Math.sin(r * 19 + t) * 0.02, c, Math.sin(r * 7 + t * 2) * 0.05));
          }
          return n;
        };
      this.stems = [];
      for (let e of [-1, 1])
        for (let [t, n, r] of [
          [0, 0.035, 0],
          [0.16, 0.018, 0.05],
          [-0.14, 0.014, 0.1],
        ]) {
          let i = s(t, e),
            a = ln(new S(cn(i, n, !1, 120), o));
          (a.castShadow = !0), this.group.add(a), this.stems.push({ m: a, delay: r, pts: i });
        }
      let c = this.stems.filter((e) => e.delay === 0);
      for (let e of c)
        for (let t = 3; t < 28; t += 3) {
          let n = e.pts[t],
            r = e.pts[t + 1].clone().sub(n).normalize(),
            i = sn(-r.y, r.x, 0).multiplyScalar(Math.sign(n.x) || 1),
            a = [];
          for (let e = 0; e <= 10; e++) {
            let t = e / 10,
              r = t * on * 0.9;
            a.push(
              n
                .clone()
                .addScaledVector(i, 0.04 + t * 0.22 * Math.cos(r * 0.5))
                .add(sn(0, Math.sin(r) * 0.1 * t, Math.cos(r) * 0.08 * t)),
            );
          }
          let s = ln(new S(cn(a, 0.008, !1, 24), o));
          (s.castShadow = !0), this.group.add(s), this.parts.push({ type: `tendril`, m: s, at: t / 30 });
        }
      for (let t of c)
        for (let r = 2; r < 29; r += 2) {
          let i = t.pts[r],
            a = Math.sign(i.x) || 1,
            o = t.cuff ? useGameMaterials(cuffLeafAlongX(t.cuff, r, 0.32 + n() * 0.2 + 0 * n()), e) : pn(e, 0.32 + n() * 0.2, 0.08 + n() * 0.04, 0.007),
            s = new h();
          s.position.copy(i),
            s.add(o),
            (s.rotation.z = (a > 0 ? 0 : Math.PI) + (n() - 0.5) * 1.6 + (r > 14 ? a * 0.6 : 0)),
            (s.rotation.y = (n() - 0.5) * 1.2),
            this.group.add(s),
            this.parts.push({ type: `leaf`, g: s, leaf: o, at: r / 30 });
        }
      for (let t of c)
        for (let r of [7, 13, 19, 24]) {
          let i = t.pts[r],
            a = t.cuff ? useGameMaterials(cuffFlowerSized(t.cuff, r, 2 * (0.16 + n() * 0.05)), e) : fn(e, 0.16 + n() * 0.05, 5, 0.006);
          a.position.copy(i).add(sn(0, 0, 0.06)),
            (a.rotation.y = (n() - 0.5) * 0.6),
            this.group.add(a),
            this.parts.push({ type: `flower`, g: a, at: r / 30 });
        }
      (this.crown = t.cuff ? useGameMaterials(cuffFlowerSized(t.cuff, cuffFlowersBySize(t.cuff)[0], 1.15), e) : mn(e, 0.62, { pearl: !0 })),
        this.crown.position.set(0, i + 0.1, 0.05),
        this.group.add(this.crown),
        (this.pearls = []);
      for (let t = 0; t < 9; t++) {
        let i = new S(new T(0.05 + n() * 0.03, 16, 12), (t.cuff ? e.gold : e.pearl).clone());
        (i.material.emissive = new O(`#ffe2b0`)), (i.material.emissiveIntensity = 0);
        let a = (t / 9 - 0.5) * 2.6;
        (i.userData.home = sn(
          Math.sin(a) * (r / 2 - 0.5),
          1.2 + Math.cos(a) * 2.6 * n() + n() * 0.8,
          (n() - 0.5) * 0.7,
        )),
          (i.userData.phase = n() * on),
          this.group.add(i),
          this.pearls.push(i);
      }
      (this.progress = 0), this.grow(0);
    }
    grow(e) {
      this.progress = e;
      for (let t of this.stems) t.m.userData.grow(k((e - t.delay) / 0.45));
      let t = (t) => k((e - t * 0.45) / 0.25);
      for (let n of this.parts) {
        let r = t(n.at);
        if (n.type === `tendril`) n.m.userData.grow(r);
        else if (n.type === `leaf`) {
          n.g.scale.setScalar(Math.max(0.001, Ve(r)));
          for (let e of n.leaf.children) e.userData.grow?.(k(r * 1.4));
        } else if (n.type === `flower`) {
          let t = k((e - 0.35 - n.at * 0.3) / 0.25);
          n.g.scale.setScalar(Math.max(0.001, Ve(t))), (n.g.userData.petalMesh.rotation.x = (1 - A(t)) * 0.9);
        }
      }
      let n = k((e - 0.62) / 0.3);
      this.crown.scale.setScalar(Math.max(0.001, Ve(n))), this.crown.userData.leaves ? hn(this.crown, n) : (this.crown.rotation.z = (1 - A(n)) * 1.6), (this.pearlP = k((e - 0.7) / 0.3));
    }
    update(e, t) {
      this.pearls.forEach((t, n) => {
        let r = k(this.pearlP * 1.6 - n * 0.07);
        t.visible = r > 0;
        let i = t.userData.home;
        t.position.set(i.x * (0.3 + 0.7 * r), i.y * A(r) + Math.sin(e * 0.8 + t.userData.phase) * 0.05 * r, i.z),
          (t.material.emissiveIntensity = 1.4 * A(r));
      });
    }
  },
  _n = new D(-0.72, 0.55, -0.42).normalize();
function vn(e, t, n, r) {
  let i = new h();
  e.at(i);
  let a = 6.5,
    o = -118.6,
    s = -136.4;
  e.block(-6.5, s, a, o, -0.2, 0, t.wood),
    e.block(a, s, 7.2, o, 0, 6.2, t.stone),
    e.block(-7.2, -119.1, -6.5, o, 0, 6.2, t.stone),
    e.block(-7.2, s, -6.5, -134.1, 0, 6.2, t.stone),
    e.block(-6.5, s, a, o, 5.8, 6.1499999999999995, t.woodDark);
  for (let n = -119.39999999999999; n > s; n -= 1.4) e.box(2 * a, 0.26, 0.2, 0, 5.67, n, t.wood);
  for (let n of [-1, 1]) e.box(0.4, 0.3, 17.80000000000001, n * 6.3, 5.45, -255 / 2, t.carved);
  e.archWall({
    x: 0,
    z: -136.20000000000002,
    width: 14.4,
    height: 6.2,
    depth: 0.6,
    openW: 2.2,
    spring: 2.6,
    rise: 1.4,
    band: 0.42,
  });
  let c = e.door(0, -136.28, 2.2, 4, 0, i, 2.6),
    l = fitTo(useGameMaterials(n.jewel.clone(), t), 1.1);
  l.position.set(0, 4.65, -135.82), (l.userData.dynamic = !0), i.add(l), L(l);
  let u = [];
  for (let n of [-121.6, -126.6, -131.6]) {
    e.archWall({
      x: -6.85,
      z: n,
      rotY: Math.PI / 2,
      width: 5,
      height: 6.2,
      depth: 0.7,
      openW: 1.4,
      spring: 3.4,
      rise: 0.95,
      band: 0.22,
      trim: t.carved,
    }),
      e.box(0.72, 1.2, 1.5, -6.85, 0.6, n, t.stone),
      e.mashrabiya(-6.85, 2.85, n, 1.4, 3.3, Math.PI / 2);
    let r = R(-6.8, 3.4, n),
      a = Ht(r, r.clone().addScaledVector(_n, -3.4 / _n.y), 0.6, 1, `#ffdcaa`, 0.1);
    i.add(a), u.push(a);
  }
  for (let n = 0; n < 4; n++) e.box(0.45, 0.05, 8, 6.25, 0.7 + n * 0.62, -124.5, t.wood);
  for (let n = 0; n < 24; n++)
    e.vase(
      6.25,
      0.73 + (n % 4) * 0.62,
      -128.2 + Math.floor(n / 4) * 1.3,
      n % 4,
      0.45 + (n % 3) * 0.15,
      [t.brass, t.ceramicCream, t.copper, t.ceramicTeal][n % 4],
    );
  e.block(3.6, -135.8, 6.2, -133.3, 0, 1.3, t.stoneDark),
    e.cyl(0.55, 0.75, 1.6, 4.9, 2.1, -134.6, t.clay, 12),
    e.cyl(0.2, 0.3, 2.6, 4.9, 4.2, -134.6, t.clay, 10);
  let d = e.box(0.9, 0.18, 0.4, 4.9, 1, -133.25, t.ember);
  d.userData.dynamic = !0;
  let f = [],
    p = t.lampGlass.clone();
  p.emissiveIntensity = 1.1;
  for (let [r, a, o] of [
    [-4.6, -123.75, `shaping`],
    [4.6, -123.75, `engraving`],
    [-4.6, -131.15, `setting`],
  ]) {
    let s = Math.sign(r);
    e.table(r, a, 2.5, 1, 0.86, Math.PI / 2),
      e.cloth(r, 0.9, a + 0.3, 1, 0.7, t.linen, s < 0 ? Math.PI / 2 : -Math.PI / 2, i, 0.05);
    let c = n.artisan.clone();
    c.position.set(r + s * 0.95, 0, a),
      (c.rotation.y = s < 0 ? Math.PI / 2 : -Math.PI / 2),
      (c.userData.dynamic = !0),
      i.add(c),
      L(c),
      e.cyl(0.08, 0.1, 0.04, r - s * 0.2, 0.92, a - 0.95, t.brass, 10),
      e.cyl(0.012, 0.012, 0.42, r - s * 0.2, 1.13, a - 0.95, t.brass, 6);
    let l = e.cyl(0.04, 0.11, 0.12, r - s * 0.2, 1.34, a - 0.85, t.brass, 12);
    l.rotation.x = 0.5;
    let u = e.sphere(0.035, r - s * 0.2, 1.3, a - 0.82, p, 8);
    u.castShadow = !1;
    let d = fitTo(useGameMaterials(cuffPart(n.jewel, `leaf`, Math.round((a + 200) * 3)), t), 0.07);
    d.scale.multiplyScalar(1),
      d.position.set(r - s * 0.15, 0.95, a + 0.1),
      (d.rotation.x = -Math.PI / 2),
      (d.userData.dynamic = !0),
      i.add(d);
    for (let n = 0; n < 5; n++) {
      let i = e.cyl(0.008, 0.008, 0.26, r - s * 0.36, 0.91, a - 0.4 + n * 0.1, n % 2 ? t.brass : t.woodDark, 6);
      i.rotation.z = Math.PI / 2;
    }
    e.box(0.14, 0.12, 0.12, r + s * 0.05, 0.96, a + 0.6, t.brassDark);
    let m = new h();
    if ((m.position.set(r + s * 0.45, 1.12, a + 0.1), (m.userData.dynamic = !0), i.add(m), o === `shaping`))
      (e.cyl(0.012, 0.012, 0.24, 0, 0, 0, t.woodDark, 6, m).rotation.z = Math.PI / 2),
        e.box(0.08, 0.035, 0.035, -s * 0.12, 0, 0, t.brassDark, m);
    else if (o === `engraving`) {
      let n = e.cyl(0.006, 0.01, 0.16, 0, 0, 0, t.brass, 6, m);
      n.rotation.z = s * 1.1;
    } else
      (e.cyl(0.004, 0.004, 0.14, 0, 0, 0, t.brass, 5, m).rotation.z = s * 1.2),
        e.sphere(0.012, -s * 0.06, -0.03, 0, t.pearl, 8, m);
    f.push({ x: r, z: a, label: o, tool: m, art: c, piece: d, s, pos: R(r, 1, a) });
  }
  e.box(2.7, 0.12, 1.15, 0, 0.88, -127.5, t.woodDark);
  for (let n of [-1, 1]) for (let r of [-1, 1]) e.box(0.12, 0.84, 0.12, n * 1.2, 0.42, -127.5 + r * 0.45, t.woodDark);
  e.box(2.5, 0.06, 0.06, 0, 0.25, -127.05, t.woodDark),
    e.cloth(0, 0.945, -127.6, 2.3, 0.9, t.linen, 0, i, 0.06),
    e.rug(0, 0, -122, 2.6, 3.6),
    e.rug(0, 0, -132.6, 3, 2.2, Math.PI / 2),
    e.rug(3.2, 0, -129.8, 2.2, 3.2, 0.06);
  for (let n = 0; n < 3; n++)
    e.sphere(0.32, 2.6 + n * 0.62, 0.16, -131.2, [t.velvetRed, t.tableCloth, t.tableCloth2][n], 12).scale.set(
      1,
      0.42,
      1,
    );
  e.box(0.9, 0.3, 0.6, 3.2, 0.15, -129.6, t.woodDark);
  for (let n = 0; n < 3; n++) e.vase(2.95 + n * 0.25, 0.3, -129.6, 3, 0.55, t.brass);
  e.box(3.2, 0.08, 0.12, -3.4, 2.1, -135.9, t.wood);
  for (let n = 0; n < 14; n++) {
    let r = e.cyl(0.01, 0.01, 0.38, -4.8 + n * 0.2, 1.85, -135.85, n % 3 ? t.brass : t.woodDark, 6);
    r.rotation.z = n % 2 ? 0.08 : -0.08;
  }
  for (let n = 0; n < 3; n++) e.box(1, 0.04, 0.3, -3.4, 0.9 + n * 0.45, -135.8, t.wood);
  for (let n = 0; n < 9; n++)
    e.vase(
      -3.8 + (n % 3) * 0.4,
      0.93 + Math.floor(n / 3) * 0.45,
      -135.8,
      n % 4,
      0.4,
      [t.ceramicCream, t.brass, t.ceramicTeal][n % 3],
    );
  e.banner(-6.1, 5.5, -128.9, 1.3, 4.6, t.bannerBorder, Math.PI / 2),
    e.banner(6.1, 5.5, -129.8, 1.3, 4.6, t.bannerKilim, -Math.PI / 2);
  for (let t of [-1, 1]) for (let n = 0; n < 3; n++) e.lantern(t * 2.4, 4.3, -121.5 - n * 5, 1, 1.2);
  let m = e.flushLanterns(i, 2.3),
    g = new _t(160, new Te(R(-6, 0.3, -134), R(0, 4, -119)), { size: 0.009, opacity: 0.5, speed: 0.015, seed: 13 });
  (g.points.userData.dynamic = !0), i.add(g.points);
  let _ = new _t(36, new Te(R(4.5, 1, -133.5), R(5.3, 2.6, -133)), {
    size: 0.012,
    opacity: 0.9,
    speed: 0.35,
    seed: 17,
  });
  return (
    _.mat.uniforms.tint.value.set(1, 0.5, 0.18),
    (_.mat.uniforms.boost.value = 2.2),
    (_.points.userData.dynamic = !0),
    i.add(_.points),
    L(i),
    {
      id: `workshop`,
      group: i,
      motif: l,
      motifDoor: c,
      stations: f,
      embers: d,
      env: {
        sun: 2.6,
        sunColor: `#ffd9a0`,
        hemi: 0.42,
        sky: `#e9d0a8`,
        groundCol: `#4a3423`,
        env: 0.4,
        fog: `#3a2a1c`,
        fogNear: 12,
        fogFar: 60,
        exposure: 1.15,
        sunDir: _n.toArray(),
      },
      lights: [
        { position: R(0, 2.6, -126.6), color: `#ffcf8f`, intensity: 3.2, distance: 6, priority: 1.5 },
        { position: R(4.9, 1.2, -132.6), color: `#ff8a3a`, intensity: 5, distance: 5, flicker: !0 },
        ...f.map((e) => ({
          position: R(e.x - e.s * 0.2, 1.3, e.z - 0.7),
          color: `#ffc27a`,
          intensity: 1.5,
          distance: 3.2,
        })),
        { position: R(0, 3, -120), color: `#ffd9a0`, intensity: 4, distance: 8 },
      ],
      update(e) {
        g.update(e), _.update(e), (m.material.emissiveIntensity = 1.7);
        for (let t of f) {
          let n = e * (t.label === `shaping` ? 6 : 2.2) + t.x;
          if (t.label === `shaping`) {
            (t.tool.rotation.x = Math.max(0, Math.sin(n)) * 0.7),
              (t.tool.position.y = 1.08 + Math.max(0, Math.sin(n)) * 0.08);
            let e = Math.floor((n - Math.PI) / (Math.PI * 2));
            e !== t.cyc &&
              (t.cyc !== void 0 &&
                this.group.visible &&
                r?.audio.play(`hammer_${1 + (e & 1) * 2}`, {
                  position: t.pos,
                  volume: 0.22,
                  rate: 1.1 + (e % 3) * 0.05,
                }),
              (t.cyc = e));
          } else
            t.label === `engraving`
              ? ((t.tool.position.z = t.z + 0.1 + Math.sin(n) * 0.05),
                (t.tool.position.y = 1 + Math.abs(Math.sin(n * 2)) * 0.01))
              : (t.tool.position.y = 1.02 + (Math.sin(n) * 0.5 + 0.5) * 0.06);
          t.art.rotation.z = Math.sin(e * 0.7 + t.x) * 0.012;
        }
        d.material.emissiveIntensity = 2.4 + Math.sin(e * 0.9) * 0.12; // forge: slow glow, no strobe
      },
      music: `mus_workshop`,
      amb: `amb_workshop`,
    }
  );
}
var yn = [
    { id: `filigree-mask`, name: `Filigree Mask`, line: `Gold wire fountains from the bridge of the nose into a lace of buds, leaves and granulation, with crimped roses at the jaw.` },
    { id: `floral-crown`, name: `Floral Crown`, line: `A halo of gold roses, beaded sprays and veined leaves rising from a single slim band.` },
    { id: `filigree-sunglasses`, name: `Filigree Sunglasses`, line: `Round dark lenses framed in gold, wreathed in leaves and buds, with a granulated medallion at the bridge.` },
    { id: `bun-cage`, name: `Filigree Bun Cage`, line: `An openwork gold dome of leaves, florets and bead sprays, crowned by a winged creature with ladder-veined wings.` },
    { id: `finger-armour`, name: `Filigree Finger Armour`, line: `An openwork shield for the index finger and fine vine rings for the others, ending in bead-tipped tendrils.` },
    { id: `ear-cuff-study`, name: `Floral Ear Cuff · Study`, line: `The maker's drawing of the piece that belongs on the empty pedestal.` },
  ],
  bn = {
    name: `Floral Ear Cuff`,
    line: `Kavya Potluri — gold leaves, blossoms and beaded sprays climbing the ear from a single sculpted cuff.`,
  };
function xn(e, t, n) {
  let i = new h();
  e.at(i);
  let a = 4.5,
    o = -136.8,
    s = -162.2,
    c = 7.2,
    l = t.floorDark.clone();
  (l.roughness = 0.35),
    (l.roughnessMap = null),
    l.color.set(`#6d5a45`),
    (l.name = `polished`),
    e.block(-4.5, s, a, o, -0.2, 0, l),
    e.rug(0, 0, -149, 1.8, 20, 0),
    e.block(-4.5, s, a, o, c, 7.6000000000000005, t.woodDark);
  for (let n = -137.8; n > s; n -= 1.6) e.box(2 * a, 0.24, 0.2, 0, 7.08, n, t.wood);
  for (let n of [-143, -149.2]) {
    e.archWall({
      x: 0,
      z: n,
      width: 10.4,
      height: c,
      depth: 0.6,
      openW: 4.6,
      spring: 3.6,
      rise: 2.4,
      band: 0.42,
      mat: t.plasterDark,
      trim: t.carvedDark,
    });
    for (let r of [-1, 1]) e.curtain(r * 2.15, 5.7, n + 0.42, 1.1, 5.7, t.velvetRed, 0, 6);
  }
  let d = [],
    f = [-139.9, -146.1, -152.4];
  for (let n of [-1, 1]) {
    e.block(n * 5.25, s, n * 5.8, o, 0, c, t.carvedDark);
    let r = o;
    for (let i of f) {
      e.archWall({
        x: n * 4.88,
        z: i,
        rotY: (n * Math.PI) / 2,
        width: 1.6,
        height: c,
        depth: 0.75,
        openW: 1.15,
        spring: 2.25,
        rise: 0.75,
        band: 0.2,
        mat: t.plasterDark,
        trim: t.carved,
      }),
        e.block(n * a, i + 0.8, n * 5.25, r, 0, c, t.plasterDark),
        (r = i - 0.8),
        e.block(n * a, i - 0.6, n * 5.25, i + 0.6, 0, 0.92, t.carvedDark),
        e.box(0.08, 0.06, 1.2, n * 4.48, 0.93, i, t.brass);
      let o = e.box(0.04, 2, 1.1, n * 5.22, 1.95, i, t.velvet);
      (o.castShadow = !1), e.box(0.42, 0.24, 0.42, n * 4.9, 1.04, i, t.velvet);
      let s = e.box(0.3, 0.02, 0.7, n * 4.9, 2.75, i, t.lampGlass);
      (s.castShadow = !1), d.push({ s: n, z: i, pos: R(n * 4.9, 1.42, i), view: R(n * 3.15, 0, i) });
    }
    e.block(n * a, s, n * 5.25, r, 0, c, t.plasterDark);
    for (let t = 0; t < 4; t++) e.lantern(n * 3.2, 3.6 + (t % 2) * 0.3, -138.8 - t * 6.4, 0.85, 2.5);
  }
  for (let t = 0; t < 70; t++) {
    let n = t * 2.39996,
      r = Math.sqrt(t / 70) * 2.6;
    e.lantern(
      Math.cos(n) * r * 0.85,
      4.1 + (1 - r / 2.6) * 1.8 + Math.sin(t * 1.7) * 0.25,
      -149.5 + Math.sin(n) * r * 1.5,
      0.42 + Math.sin(t) * 0.06,
      3 - (1 - r / 2.6) * 1.8,
    );
  }
  let p = e.pedestal(z.galleryPedestal.x, z.galleryPedestal.z, 0.48, 1.05);
  e.cyl(0.3, 0.3, 0.06, 0, 1.08, z.galleryPedestal.z, t.velvet, 24);
  let m = new h();
  m.position.set(0, 1.115, z.galleryPedestal.z), (m.userData.dynamic = !0), i.add(m);
  let g = fitTo(useGameMaterials(n.jewel.clone(), t, { Gold: t.brassDark, GoldAntique: t.brassDark, Pearl: t.brassDark }), 0.3);
  (g.rotation.x = -Math.PI / 2), (g.scale.z = 0.15), m.add(g), L(g);
  let _ = new h();
  _.position.set(0, 1.1, z.galleryPedestal.z),
    (_.userData.dynamic = !0),
    i.add(_),
    (e.mesh(new r(0.36, 0.36, 0.5, 40, 1, !0), t.glass, 0, 0.25, 0, _).castShadow = !1),
    (e.mesh(new T(0.36, 40, 12, 0, Math.PI * 2, 0, Math.PI / 2), t.glass, 0, 0.5, 0, _).castShadow = !1),
    (e.mesh(new Pe(0.36, 0.012, 6, 48), t.brass, 0, 0.5, 0, _).rotation.x = Math.PI / 2),
    (e.mesh(new Pe(0.36, 0.012, 6, 48), t.brass, 0, 0, 0, _).rotation.x = Math.PI / 2);
  let v = Ht(R(0, 6.9, z.galleryPedestal.z), R(0, 0.9, z.galleryPedestal.z), 0.25, 0.75, `#ffe2b4`, 0.11);
  i.add(v);
  let y = document.createElement(`canvas`);
  (y.width = 512), (y.height = 128);
  let b = y.getContext(`2d`);
  (b.fillStyle = `#6e4e2a`),
    b.fillRect(0, 0, 512, 128),
    (b.strokeStyle = `#c69a52`),
    (b.lineWidth = 6),
    b.strokeRect(8, 8, 496, 112),
    (b.fillStyle = `#f0d39a`),
    (b.textAlign = `center`),
    (b.font = `italic 40px Georgia`),
    b.fillText(bn.name, 256, 62),
    (b.font = `20px Georgia`),
    b.fillText(`KAVYA POTLURI`, 256, 98);
  let x = new ne(y);
  x.colorSpace = Oe;
  let w = e.mesh(
    new u(0.42, 0.105),
    new C({ map: x, metalness: 0.6, roughness: 0.4 }),
    0,
    0.72,
    z.galleryPedestal.z + 0.53,
  );
  (w.rotation.x = -0.25),
    (w.userData.dynamic = !0),
    e.archWall({
      x: 0,
      z: -162,
      width: 10.4,
      height: c,
      depth: 0.6,
      openW: 1.6,
      spring: 2.3,
      rise: 1,
      band: 0.3,
      mat: t.plasterDark,
      trim: t.carvedDark,
    });
  let ee = e.door(0, -162.04999999999998, 1.6, 3.3, 0, i, 2.3);
  e.block(-1.2, -168.6, 1.2, s, -0.2, 0, t.floor);
  for (let n of [-1, 1]) e.block(n * 1, -168.6, n * 1.6, s, 0, 4, t.stone);
  e.block(-1.6, -168.6, 1.6, s, 3.5, 4, t.stone);
  for (let n of [-1, 1]) e.curtain(n * 1.5, 4.3, -137.3, 1.3, 4.3, t.velvetRed, 0, 7);
  let te = [],
    re = n.collection?.length ? n.collection : [];
  d.forEach((e, n) => {
    let r = re.find((e) => e.id === yn[n].id),
      a = r ? { ...yn[n], name: r.name || yn[n].name, line: r.line || yn[n].line } : yn[n],
      o = new h();
    o.position.copy(e.pos), (o.rotation.y = e.s < 0 ? Math.PI / 2 : -Math.PI / 2), (o.userData.dynamic = !0), i.add(o);
    let s;
    if (r?.kind === `study`) {
      s = new h();
      let e = new ve().load(`${$n}assets/models/collection/${r.file}`);
      (e.colorSpace = Oe), (e.anisotropy = 4);
      let n = new S(new u(0.3, 0.3), new C({ map: e, color: `#7d7262`, roughness: 0.95, envMapIntensity: 0.3 }));
      n.position.z = 0.0075;
      let i = new S(new ye(0.33, 0.33, 0.012), t.woodDark);
      s.add(i, n), (s.rotation.x = -0.08);
      let a = new h();
      a.add(s), (s = a);
    } else if (r) {
      s = r.scene.clone();
      r.face && faceViewer(s, r.face);
      let e = new Te().setFromObject(s),
        n = e.getSize(new D()),
        i = e.getCenter(new D()),
        a = 0.36 / Math.max(n.x, n.y, n.z);
      s.scale.setScalar(a), s.position.sub(i.multiplyScalar(a));
      let o = new h();
      o.add(s), (s = o);
      for (let e of s.children[0].children)
        e.traverse((e) => {
          if (e.isMesh) {
            e.castShadow = !0;
            let n = e.material?.name;
            n === `Gold`
              ? (e.material = t.gold)
              : n === `Pearl`
                ? (e.material = t.pearl)
                : n === `Emerald`
                  ? (e.material = t.emerald)
                  : n === `Ruby` && (e.material = t.ruby);
          }
        });
    } else s = new h();
    o.add(s);
    let c = document.createElement(`canvas`);
    (c.width = 512), (c.height = 96);
    let l = c.getContext(`2d`);
    (l.fillStyle = `#5d4122`),
      l.fillRect(0, 0, 512, 96),
      (l.fillStyle = `#efd39a`),
      (l.textAlign = `center`),
      (l.font = `italic 30px Georgia`),
      l.fillText(a.name, 256, 44),
      (l.font = `16px Georgia`),
      l.fillText(`KAVYA POTLURI`, 256, 76);
    let d = new ne(c);
    (d.colorSpace = Oe), (d.anisotropy = 4);
    let f = new S(new u(0.42, 0.079), new C({ map: d, metalness: 0.5, roughness: 0.45 }));
    f.position.set(e.s * 4.445, 0.82, e.z),
      (f.rotation.y = e.s < 0 ? Math.PI / 2 : -Math.PI / 2),
      (f.userData.dynamic = !0),
      i.add(f),
      te.push({ ...e, ...a, holder: o, obj: s, home: s.position.clone(), homeQ: s.quaternion.clone() });
  });
  let ie = e.flushLanterns(i, 2.6),
    ae = new _t(90, new Te(R(-3, 0.5, -159), R(3, 5, -140)), { size: 0.008, opacity: 0.35, speed: 0.01, seed: 21 });
  (ae.points.userData.dynamic = !0), i.add(ae.points), L(i);
  let oe = d.map((e) => ({
    position: e.pos.clone().add(R(-e.s * 0.35, 1, 0)),
    color: `#ffd9a6`,
    intensity: 1.5,
    distance: 2.6,
    niche: !0,
  }));
  return (
    oe.push({ position: R(0, 3.4, z.galleryPedestal.z), color: `#ffe0b0`, intensity: 5, distance: 5, priority: 1.5 }),
    oe.push({ position: R(0, 4.3, -149.5), color: `#ffb86a`, intensity: 6, distance: 9, flicker: !0 }),
    oe.push({ position: R(0, 2.2, -161.4), color: `#ffe6c0`, intensity: 0, distance: 6, exit: !0 }),
    {
      id: `gallery`,
      group: i,
      displays: te,
      exitDoor: ee,
      outline: m,
      dome: _,
      plaque: w,
      ped: p,
      env: {
        sun: 0.1,
        hemi: 0.12,
        sky: `#d0b48c`,
        groundCol: `#2a1e14`,
        env: 0.32,
        fog: `#140f0a`,
        fogNear: 12,
        fogFar: 46,
        exposure: 1.1,
        sunDir: [0.4, 0.8, -0.4],
      },
      lights: oe,
      update(e) {
        ae.update(e),
          (ie.material.emissiveIntensity = 1.9);
      },
      music: `mus_gallery`,
      amb: `amb_gallery`,
    }
  );
}
var Sn = new D(0.46, 0.27, -0.85).normalize();
function Cn(e, t, n, r) {
  let i = new h();
  e.at(i);
  let a = We(1234),
    o = r.settings.quality === `low` ? 140 : 230,
    s = new u(240, 250, o, o);
  s.rotateX(-Math.PI / 2), s.translate(0, 0, -291);
  let c = s.attributes.position,
    l = new Float32Array(c.count * 3);
  for (let e = 0; e < c.count; e++) {
    let t = c.getX(e),
      n = c.getZ(e),
      r = Lt(t, n);
    n > -166.5 && (r = -0.05);
    let i = Re.smoothstep(Math.hypot(t, (n + 210) * 0.8), 55, 115);
    (r += i * It(t * 0.5, n * 0.5) * 2.6), c.setY(e, r);
    let a = 0.92 + Math.min(0.12, r * 0.012) + Math.sin(t * 0.7 + n * 0.3) * 0.015;
    (l[e * 3] = a), (l[e * 3 + 1] = a * 0.985), (l[e * 3 + 2] = a * 0.96);
  }
  s.setAttribute(`color`, new E(l, 3)), s.computeVertexNormals();
  let d = s.attributes.uv;
  for (let e = 0; e < c.count; e++) d.setXY(e, c.getX(e) * 0.5, c.getZ(e) * 0.5);
  let f = t.sand.clone();
  (f.vertexColors = !0),
    (f.name = `sandTerrain`),
    f.normalScale.set(0.45, 0.45),
    (f.onBeforeCompile = (e) => {
      (e.vertexShader = e.vertexShader
        .replace(
          `#include <common>`,
          `#include <common>
varying vec3 vWorldP;`,
        )
        .replace(
          `#include <worldpos_vertex>`,
          `#include <worldpos_vertex>
vWorldP = (modelMatrix * vec4(transformed, 1.0)).xyz;`,
        )),
        (e.fragmentShader = e.fragmentShader
          .replace(
            `#include <common>`,
            `#include <common>
varying vec3 vWorldP;`,
          )
          .replace(
            `#include <normal_fragment_maps>`,
            `#include <normal_fragment_maps>
        vec2 wp = vWorldP.xz;
        float ph = dot(wp, vec2(0.83, 0.55)) * 7.0 + sin(wp.x * 0.9 + wp.y * 0.4) * 2.2;
        float rip = sin(ph) * 0.5 + 0.5; rip = pow(rip, 3.0);
        vec3 rn = normalize(vec3(cos(ph) * 0.83, 0.0, cos(ph) * 0.55));
        normal = normalize(normal + (viewMatrix * vec4(rn, 0.0)).xyz * 0.16);
        diffuseColor.rgb *= 0.94 + rip * 0.08;`,
          ));
    }),
    (f.customProgramCacheKey = () => `sand-ripple`);
  let p = e.mesh(s, f);
  (p.castShadow = !1), (p.userData.dynamic = !0), (p.name = `terrain`);
  let m = new Se(150, 600, 96, 6);
  m.rotateX(-Math.PI / 2);
  let g = m.attributes.position;
  for (let e = 0; e < g.count; e++) {
    let t = g.getX(e),
      n = g.getZ(e),
      r = Math.hypot(t, n);
    g.setY(e, It(t * 0.12, n * 0.12) * 3.5 * Re.smoothstep(r, 150, 260) - 1.5 + r * 0.012);
  }
  m.computeVertexNormals();
  let _ = e.mesh(m, t.sand, 0, 0, -230);
  (_.castShadow = !1), (_.userData.dynamic = !0);
  let v = -167.2;
  e.archWall({ x: 0, z: v, width: 120, height: 11, depth: 2.6, openW: 2, spring: 2.6, rise: 1.4, band: 0.5 }),
    e.box(120, 0.6, 3, 0, 11.3, v, t.carved);
  for (let n = -59; n < 60; n += 1.4) e.box(0.7, 0.8, 0.6, n, 12, -168.29999999999998, t.stone);
  for (let n of [-7, 7, -28, 28, -52, 52])
    e.cyl(2.6, 3, 14, n, 7, -168, t.stone, 20), e.cyl(3, 2.7, 0.7, n, 14.3, -168, t.carved, 20);
  for (let n = 0; n < 14; n++) {
    let r = -50 + n * 7.7 + a() * 3,
      i = 12 + a() * 6;
    e.block(r - 3, -165.2, r + 3, -158.2, 0, i, t.plaster), a() > 0.5 && e.dome(r, i, -161.7, 2.4, t.plaster);
  }
  e.cyl(1.1, 1.3, 26, -14, 13, -161.2, t.stone, 14), e.dome(-14, 26, -161.2, 1.1, t.plaster);
  for (let n = 0; n < 3; n++) e.box(3.4 - n * 0.2, 0.12, 0.5, 0, -0.06 - n * 0.05, -168.7 - n * 0.5, t.stoneDark);
  let y = (n, r, i, a = 0.42, o = 0) => {
    let s = Lt(n, r),
      c = e.cyl(a * 0.92, a, i, n, s + i / 2 - 0.25, r, t.stone, 14);
    (c.rotation.z = o), i > 2 && e.cyl(a * 1.3, a * 0.95, 0.3, n, s + i - 0.3, r, t.carved, 14);
  };
  y(1.4, -229.6, 3.4),
    y(8.9, -230.4, 2.2),
    y(10.4, -224.8, 1.2, 0.4, 0.05),
    y(-0.4, -224.2, 0.9, 0.4),
    e.cyl(0.4, 0.4, 1.5, 7.6, Lt(7.6, -221.6) + 0.18, -221.6, t.stone, 14).rotation.set(0, 0.6, Math.PI / 2 - 0.08),
    e.archWall({
      x: 5,
      z: -233.2,
      width: 6.2,
      height: 5.2,
      depth: 0.8,
      openW: 3.4,
      spring: 2.6,
      rise: 1.9,
      band: 0.35,
    });
  for (let n = 0; n < 12; n++) {
    let r = 5 + (a() - 0.5) * 15,
      i = -226 + (a() - 0.5) * 13;
    if (
      Math.hypot(r - z.stage.x, i - z.stage.z) < 2.4 ||
      Math.hypot(r - z.digSpot.x, i - z.digSpot.z) < 1.8 ||
      Math.hypot(r - 5, i - -220) < 2
    )
      continue;
    let o = new he(1, 2),
      s = o.attributes.position;
    for (let e = 0; e < s.count; e++) {
      let t = s.getX(e),
        r = s.getY(e),
        i = s.getZ(e),
        a = 1 + Math.sin(t * 3.1 + n) * 0.08 + Math.sin(r * 4.3 + n * 2) * 0.06 + Math.sin(i * 5.7) * 0.05;
      s.setXYZ(
        e,
        Math.sign(t) * Math.abs(t) ** 0.6 * a,
        Math.sign(r) * Math.abs(r) ** 0.6 * a,
        Math.sign(i) * Math.abs(i) ** 0.6 * a,
      );
    }
    o.computeVertexNormals(), lt(o, 1.4);
    let c = 0.25 + a() * 0.35,
      l = e.mesh(o, a() > 0.4 ? t.stoneDark : t.plaster, r, Lt(r, i) + 0.02, i);
    l.scale.set(c * (1 + a()), c * (0.5 + a() * 0.4), c * (0.8 + a() * 0.6)),
      l.rotation.set(a() * 0.4, a() * 3, a() * 0.4);
  }
  for (let [t, n, r] of [
    [-38, -258, 7],
    [44, -275, 9],
    [-70, -300, 12],
  ]) {
    let i = Lt(t, n) + It(t * 0.5, n * 0.5) * 2.6 * Re.smoothstep(Math.hypot(t, (n + 210) * 0.8), 55, 115) - 1;
    e.archWall({
      x: t,
      z: n,
      width: 7,
      height: r,
      depth: 1,
      openW: 3,
      spring: r * 0.45,
      rise: 2,
      band: 0.3,
    }).position.y = i;
  }
  let b = e.pedestal(z.stage.x, z.stage.z, 0.5, 0.96);
  b.position.y = Lt(z.stage.x, z.stage.z) - 0.04;
  let x = n.lamp.clone();
  x.scale.setScalar(0.42),
    x.position.set(z.desertLamp.x, Lt(z.desertLamp.x, z.desertLamp.z) + 0.05, z.desertLamp.z),
    x.rotation.set(0.12, 0.9, -0.22),
    (x.userData.dynamic = !0),
    i.add(x);
  let C = new S(new T(0.42, 24, 12, 0, Math.PI * 2, 0, Math.PI / 2), t.sand);
  lt(C.geometry, 2),
    C.scale.set(1, 0.32, 1),
    C.position.set(z.digSpot.x, Lt(z.digSpot.x, z.digSpot.z) - 0.02, z.digSpot.z),
    (C.userData.dynamic = !0),
    (C.receiveShadow = !0),
    i.add(C);
  let w = nn({
    center: R(10, 0, -250),
    count: 6,
    radius: 34,
    height: 28,
    spread: 8,
    speed: 0.07,
    size: 0.5,
    color: `#4a3a2c`,
    seed: 21,
  });
  return (
    i.add(w),
    L(i),
    {
      id: `desert`,
      update(e) {
        w.userData.update(e);
      },
      group: i,
      terrain: p,
      lamp: x,
      mound: C,
      ped: b,
      env: {
        sun: 3.8,
        sunColor: `#ffcf8f`,
        hemi: 0.75,
        sky: `#f7d5a2`,
        groundCol: `#b0773e`,
        env: 0.7,
        fog: `#efc996`,
        fogNear: 90,
        fogFar: 520,
        exposure: 0.95,
        sunDir: Sn.toArray(),
        zenith: `#6f97ad`,
        horizon: `#f3c58a`,
        clouds: 0.6,
      },
      lights: [],
      music: `mus_desert`,
      amb: `amb_desert`,
    }
  );
}
var wn = new D(),
  Tn = new D(),
  En = new _(),
  Dn = new _(),
  On = new _(),
  kn = new D(0, 1, 0),
  An = class {
    constructor(e, t, n) {
      (this.G = n),
        (this.root = new h()),
        (this.root.name = `Monkey`),
        (this.model = oe(e.scene)),
        (this.animated = t),
        this.model.traverse((e) => {
          e.isMesh &&
            ((e.castShadow = !0),
            (e.receiveShadow = !0),
            (e.frustumCulled = !1),
            e.material && ((e.material = e.material.clone()), (e.material.envMapIntensity = 0.6)));
        }),
        t || ((this.model.rotation.y = -Math.PI / 2), this.model.scale.setScalar(0.54)),
        this.root.add(this.model),
        (this.mixer = new ue(this.model)),
        (this.clips = Object.fromEntries((e.animations || []).map((e) => [e.name, e]))),
        (this.actions = {}),
        (this.head = this.model.getObjectByName(`head`) || this.model.getObjectByName(`MonkeyHead`)),
        (this.neck = this.model.getObjectByName(`neck`)),
        (this.stride = { walk: 0.44, run: 0.82 }),
        (this.state = `idle`),
        (this.current = null),
        (this.yaw = 0),
        (this.targetYaw = 0),
        (this.speed = 0),
        (this.moving = !1),
        (this.lookTarget = null),
        (this.lookWeight = 0),
        (this.lookPlayer = !0),
        (this.mount = null),
        (this.hop = 0),
        (this.excite = 0),
        (this.chitterCooldown = 0),
        (this.walkId = 0),
        this.play(this.has(`idle`) ? `idle` : Object.keys(this.clips)[0]);
      let r = document.createElement(`canvas`);
      r.width = r.height = 64;
      let i = r.getContext(`2d`);
      (i.fillStyle = `rgba(70,45,20,0.55)`), i.beginPath(), i.ellipse(32, 38, 11, 17, 0, 0, Math.PI * 2), i.fill();
      for (let e = 0; e < 4; e++) i.beginPath(), i.ellipse(20 + e * 8, 14, 3.5, 5, 0, 0, Math.PI * 2), i.fill();
      let a = new ne(r);
      (this.prints = new m(
        new u(0.07, 0.1).rotateX(-Math.PI / 2),
        new c({ map: a, transparent: !0, depthWrite: !1, opacity: 0.8 }),
        160,
      )),
        (this.prints.count = 0),
        (this.prints.frustumCulled = !1),
        (this.prints.renderOrder = 2),
        (this.printIndex = 0),
        (this.printDist = 0),
        (this.printSide = 1),
        n.scene.add(this.prints);
    }
    has(e) {
      return !!this.clips[e];
    }
    get position() {
      return this.root.position;
    }
    action(e) {
      return this.has(e)
        ? (this.actions[e] || (this.actions[e] = this.mixer.clipAction(this.clips[e])), this.actions[e])
        : null;
    }
    play(e, t = 0.35, n = 1) {
      if (!e) return;
      let r = this.action(e);
      r &&
        (this.current === r
          ? (r.timeScale = n)
          : (r.reset(),
            r.setLoop(v, 1 / 0),
            (r.timeScale = n),
            (r.enabled = !0),
            r.setEffectiveWeight(1),
            this.current && r.crossFadeFrom(this.current, t, !0),
            r.play(),
            (this.current = r),
            (this.currentName = e)));
    }
    gesture(e, t) {
      if (((t ||= this.moving ? `walk` : this.restClip()), this.chitter(0.6), !this.has(e)))
        return (this.excite = 1), Mn(1.2);
      let n = this.action(e);
      n.reset(),
        n.setLoop(f, 1),
        (n.clampWhenFinished = !0),
        (n.timeScale = 1),
        (n.enabled = !0),
        n.setEffectiveWeight(1),
        this.current && this.current !== n && n.crossFadeFrom(this.current, 0.3, !0),
        n.play(),
        (this.current = n),
        (this.currentName = e);
      let r = this.clips[e].duration,
        i = 0;
      return M.add(
        (e) => ((i += e), i >= r - 0.3 && (this.current === n && ((this.current = null), this.play(t, 0.3)), !0)),
      );
    }
    restClip() {
      return this.sitting ? `idle` : this.has(`stand_idle`) ? `stand_idle` : `idle`;
    }
    loop(e) {
      this.play(e, 0.35);
    }
    chitter(e = 1) {
      this.chitterCooldown > 0 ||
        Math.random() > e ||
        ((this.chitterCooldown = 1.6),
        this.G.audio.playVariant(`monkey_chitter_`, 4, {
          position: this.root.position.clone().add(new D(0, 0.5, 0)),
          volume: 0.75,
          rate: 0.95 + Math.random() * 0.15,
        }));
    }
    placeAt(e, t) {
      this.walkId++,
        (this.mount = null),
        this.root.position.set(e.x, this.ground(e.x, e.z), e.z),
        t !== void 0 && (this.yaw = this.targetYaw = t),
        (this.moving = !1);
    }
    ground(e, t) {
      return this.G.nav.ground(e, t);
    }
    face(e) {
      wn.copy(e).sub(this.root.position), (this.targetYaw = Math.atan2(wn.x, wn.z));
    }
    faceAsync(e) {
      return this.face(e), M.add(() => Math.abs(jn(this.yaw, this.targetYaw)) < 0.08);
    }
    look(e) {
      this.lookTarget = e ? e.clone() : null;
    }
    walk(e, t = {}) {
      let n = (Array.isArray(e) ? e : [e]).map((e) => e.clone()),
        r = !!t.run,
        i = t.speed || (r ? 2 : 0.95),
        a = 0,
        o = !1,
        s = 0;
      this.sitting = !1;
      let c = ++this.walkId;
      return M.add((e) => {
        if (c !== this.walkId) return !0;
        if (this.mount) return !1;
        let l = n[a];
        wn.set(l.x - this.root.position.x, 0, l.z - this.root.position.z);
        let u = wn.length();
        if (u < 0.12)
          return a++, a >= n.length && ((this.moving = !1), (this.speed = 0), this.play(this.restClip(), 0.35), !0);
        let d = i,
          f = r;
        if (t.lead) {
          let r = this.G.player.head(Tn),
            a = n[n.length - 1],
            c = Math.hypot(r.x - this.root.position.x, r.z - this.root.position.z),
            l =
              Math.hypot(r.x - a.x, r.z - a.z) >
              Math.hypot(this.root.position.x - a.x, this.root.position.z - a.z) - 0.5;
          if (
            (!o &&
              l &&
              c > (t.lead.wait || 5.5) &&
              ((o = !0), (s = 0), (this.moving = !1), (this.speed = 0), this.play(this.restClip(), 0.4), t.onWait?.()),
            o)
          ) {
            if (
              ((s += e),
              this.face(r),
              s > 4 &&
                Math.floor(s / 6) !== Math.floor((s - e) / 6) &&
                (this.gesture(`beckon`), this.G.audio.play(`sparkle`, { volume: 0.2 })),
              c < (t.lead.resume || 3.2) || !l)
            )
              o = !1;
            else return !1;
          }
          !l && c > 2.5 && ((d = Math.max(i, 2.1)), (f = !0));
        }
        wn.set(l.x - this.root.position.x, 0, l.z - this.root.position.z);
        let p = Math.min(u, d * e);
        wn.normalize(), (this.targetYaw = Math.atan2(wn.x, wn.z));
        let m = Math.abs(jn(this.yaw, this.targetYaw)) > 1.2;
        m ||
          ((this.root.position.x += wn.x * p),
          (this.root.position.z += wn.z * p),
          (this.root.position.y = this.ground(this.root.position.x, this.root.position.z)),
          this.trackPrints(p)),
          (this.moving = !m),
          (this.speed = m ? 0 : d);
        let h = f && this.has(`run`) ? `run` : `walk`;
        return (
          this.has(h) &&
            this.play(h, 0.25, k(d / (this.stride[f ? `run` : `walk`] / this.clips[h].duration), 0.5, 2.2)),
          !1
        );
      });
    }
    attach(e, t, n = 0) {
      this.walkId++, (this.mount = { object: e, local: t.clone(), yaw: n }), (this.moving = !1);
    }
    detach() {
      this.mount &&= ((this.root.position.y = this.ground(this.root.position.x, this.root.position.z)), null);
    }
    sit() {
      return (
        (this.sitting = !0),
        this.has(`sit_down`) && this.currentName !== `idle`
          ? this.gesture(`sit_down`, `idle`)
          : (this.play(`idle`), Mn(0.3))
      );
    }
    stand() {
      (this.sitting = !1), this.play(this.restClip());
    }
    trackPrints(e) {
      if (this.root.position.z > -168 || ((this.printDist += e), this.printDist < 0.16)) return;
      (this.printDist = 0), (this.printSide *= -1);
      let t = new n(),
        r = this.root.position,
        i = new D(Math.cos(this.yaw), 0, -Math.sin(this.yaw)).multiplyScalar(0.06 * this.printSide),
        a = r.x + i.x,
        o = r.z + i.z;
      t.compose(new D(a, Lt(a, o) + 0.015, o), new _().setFromAxisAngle(kn, this.yaw), new D(1, 1, 1)),
        this.prints.setMatrixAt(this.printIndex, t),
        (this.printIndex = (this.printIndex + 1) % 160),
        (this.prints.count = Math.min(160, this.prints.count + 1)),
        (this.prints.instanceMatrix.needsUpdate = !0);
    }
    update(e, t) {
      if (((this.chitterCooldown -= e), this.mount)) {
        let e = this.mount.object;
        e.updateWorldMatrix(!0, !1), this.root.position.copy(this.mount.local).applyMatrix4(e.matrixWorld);
        let t = new b().setFromQuaternion(e.getWorldQuaternion(En), `YXZ`);
        this.targetYaw = t.y + this.mount.yaw;
      }
      if (
        ((this.yaw = Ue(this.yaw, this.targetYaw, this.mount ? 12 : 6, e)),
        (this.root.rotation.y = this.yaw),
        (this.excite = j(this.excite, 0, 2.5, e)),
        this.animated)
      ) {
        this.hop += e * (this.moving ? this.speed * 7.5 : 0);
        let t = this.moving ? Math.abs(Math.sin(this.hop)) * Math.min(0.05, this.speed * 0.022) : 0;
        (this.model.position.y = j(this.model.position.y, t, 18, e)),
          (this.model.rotation.x = j(
            this.model.rotation.x,
            this.moving ? 0.1 + Math.sin(this.hop * 2) * 0.03 : 0,
            8,
            e,
          )),
          (this.model.rotation.z = j(this.model.rotation.z, this.moving ? Math.sin(this.hop) * 0.04 : 0, 8, e));
      } else {
        this.hop += e * (this.moving ? this.speed * 6.5 : 0);
        let t = this.moving ? Math.abs(Math.sin(this.hop)) * 0.07 : 0;
        (this.model.position.y = t + Math.abs(Math.sin(this.G.clock.time * 9)) * 0.08 * this.excite),
          (this.model.rotation.x = this.moving ? 0.12 + Math.sin(this.hop * 2) * 0.05 : 0),
          this.model.scale.setScalar(0.54 * (1 + Math.sin(this.G.clock.time * 2.2) * 0.008));
      }
      for (let e of [this.head, this.neck]) e?.userData.base && e.quaternion.copy(e.userData.base);
      this.mixer.update(e);
      for (let e of [this.head, this.neck]) e && (e.userData.base ||= new _()).copy(e.quaternion);
      if (this.head) {
        let n = this.lookTarget || (this.lookPlayer ? t : null),
          r = n && (this.lookTarget || this.root.position.distanceTo(t) < 6) ? 1 : 0;
        (this.lookWeight = j(this.lookWeight, r, 3, e)),
          n && this.lookWeight > 0.01 && this.aimBone(this.head, n, this.lookWeight * (this.neck ? 0.6 : 1)),
          n && this.neck && this.lookWeight > 0.01 && this.aimBone(this.neck, n, this.lookWeight * 0.35);
      }
    }
    aimBone(e, t, n) {
      e.updateWorldMatrix(!0, !1), e.getWorldPosition(wn), Tn.copy(t).sub(wn);
      let r = Tn.clone().applyAxisAngle(kn, -this.yaw),
        i = Math.atan2(r.x, r.z),
        a = Math.atan2(r.y, Math.hypot(r.x, r.z));
      (i = k(i, -1.1, 1.1)),
        (a = k(a, -0.5, 0.6)),
        En.setFromEuler(new b(-a * n, i * n, 0, `YXZ`)),
        Dn.setFromAxisAngle(kn, this.yaw),
        On.copy(Dn).invert();
      let o = Dn.multiply(En).multiply(On),
        s = e.getWorldQuaternion(new _()),
        c = e.parent.getWorldQuaternion(new _());
      e.quaternion.copy(c.invert().multiply(o.multiply(s)));
    }
  };
function jn(e, t) {
  return ((((t - e + Math.PI) % (Math.PI * 2)) + Math.PI * 2) % (Math.PI * 2)) - Math.PI;
}
function Mn(e) {
  let t = 0;
  return M.add((n) => (t += n) >= e);
}
var Nn = new D();
function Pn(e) {
  let t = new C({
      color: `#f6e8cc`,
      emissive: `#ffd79a`,
      emissiveIntensity: 0.1,
      roughness: 0.35,
      metalness: 0.15,
      transparent: !0,
      depthWrite: !0,
    }),
    n = { presence: { value: 0 }, height: { value: e }, solid: { value: 0.2 } };
  return (
    (t.userData.u = n),
    (t.onBeforeCompile = (e) => {
      (e.uniforms.uTime = ct.time),
        (e.uniforms.uPresence = n.presence),
        (e.uniforms.uHeight = n.height),
        (e.uniforms.uSolid = n.solid),
        (e.vertexShader = e.vertexShader
          .replace(
            `#include <common>`,
            `#include <common>
varying float vH; varying vec3 vObj;`,
          )
          .replace(
            `#include <begin_vertex>`,
            `#include <begin_vertex>
vH = position.y; vObj = position;`,
          )),
        (e.fragmentShader = e.fragmentShader
          .replace(
            `#include <common>`,
            `#include <common>
      uniform float uTime, uPresence, uHeight, uSolid; varying float vH; varying vec3 vObj;
      float hsh(vec3 p){ p = fract(p * 0.3183099 + 0.1); p *= 17.0; return fract(p.x * p.y * p.z * (p.x + p.y + p.z)); }
      float vnoise(vec3 x){ vec3 i = floor(x), f = fract(x); f = f*f*(3.0-2.0*f);
        return mix(mix(mix(hsh(i), hsh(i+vec3(1,0,0)), f.x), mix(hsh(i+vec3(0,1,0)), hsh(i+vec3(1,1,0)), f.x), f.y),
                   mix(mix(hsh(i+vec3(0,0,1)), hsh(i+vec3(1,0,1)), f.x), mix(hsh(i+vec3(0,1,1)), hsh(i+vec3(1,1,1)), f.x), f.y), f.z); }`,
          )
          .replace(
            `#include <color_fragment>`,
            `#include <color_fragment>
        diffuseColor.rgb *= mix(vec3(1.0), vec3(0.86, 0.72, 0.5), uSolid * 0.8);`,
          )
          .replace(
            `#include <emissivemap_fragment>`,
            `#include <emissivemap_fragment>
        float hN = vH / uHeight;
        float n = vnoise(vObj * 6.0 + vec3(0.0, -uTime * 0.6, uTime * 0.2)) * 0.6 + vnoise(vObj * 15.0 + vec3(uTime * 0.3, -uTime, 0.0)) * 0.4;
        vec3 nv = normalize(vViewPosition);
        float fres = pow(1.0 - abs(dot(normalize(vNormal), nv)), 2.0);
        totalEmissiveRadiance += vec3(1.0, 0.8, 0.5) * (fres * mix(0.5, 0.22, uSolid) + n * mix(0.08, 0.02, uSolid));`,
          )
          .replace(
            `#include <dithering_fragment>`,
            `#include <dithering_fragment>
        float tail = smoothstep(0.02, 0.42, hN + (n - 0.5) * 0.18);
        // She forms from the smoke upward as presence rises.
        float T = uPresence * 1.6 - 0.25;
        float vis = 1.0 - smoothstep(T - 0.2, T, hN + (n - 0.5) * 0.2);
        float a = mix(mix(0.3, 0.82, uSolid), 0.95, fres) * (0.7 + n * 0.3);
        gl_FragColor.a *= a * mix(0.25, 1.0, tail) * vis * clamp(uPresence * 2.0, 0.0, 1.0);
        if (gl_FragColor.a < 0.012) discard;`,
          ));
    }),
    (t.customProgramCacheKey = () => `spirit`),
    t
  );
}
var Fn = class {
  constructor(e, t, n) {
    (this.G = n),
      (this.animated = t),
      (this.root = new h()),
      (this.root.name = `Genie`),
      (this.root.visible = !1),
      this.root.scale.setScalar(0.9),
      (this.model = oe(e.scene));
    let r = new Te().setFromObject(this.model),
      i = r.max.y - r.min.y;
    t || this.model.scale.setScalar(2.3 / i),
      (this.height = 2.3),
      (this.mat = Pn(t ? 2.3 : i)),
      this.model.traverse((e) => {
        e.isMesh &&
          ((e.material = this.mat),
          (e.castShadow = !1),
          (e.receiveShadow = !1),
          (e.frustumCulled = !1),
          (e.renderOrder = 4));
      }),
      this.root.add(this.model),
      (this.mixer = new ue(this.model)),
      (this.clips = Object.fromEntries((e.animations || []).map((e) => [e.name, e]))),
      (this.actions = {}),
      (this.current = null),
      (this.presence = 0),
      (this.targetPresence = 0),
      (this.yaw = 0),
      (this.faceTarget = null),
      (this.base = new D()),
      (this.float = 0),
      (this.light = null),
      (this.speaking = !1),
      (this.smokeN = 140);
    let a = new fe();
    a.setAttribute(`position`, new E(new Float32Array(420), 3)),
      a.setAttribute(`aAlpha`, new E(new Float32Array(140), 1)),
      a.setAttribute(
        `aSize`,
        new E(
          Float32Array.from({ length: 140 }, () => 0.6 + Math.random() * 1.6),
          1,
        ),
      ),
      (this.smokeMat = new ie({
        uniforms: { map: { value: mt() }, opacity: { value: 1 }, scale: ct.pointScale },
        vertexShader: `uniform float scale; attribute float aAlpha; attribute float aSize; varying float vA; void main(){ vA=aAlpha; vec4 mv=modelViewMatrix*vec4(position,1.0); gl_Position=projectionMatrix*mv; gl_PointSize=aSize*0.11*scale/max(0.2,-mv.z); }`,
        fragmentShader: `uniform sampler2D map; uniform float opacity; varying float vA; void main(){ vec4 c=texture2D(map,gl_PointCoord); gl_FragColor=vec4(vec3(1.0,0.93,0.8)*c.rgb, c.a*vA*opacity*0.11); if(gl_FragColor.a<0.004) discard; }`,
        transparent: !0,
        depthWrite: !1,
        blending: 2,
      })),
      (this.smoke = new w(a, this.smokeMat)),
      (this.smoke.frustumCulled = !1),
      n.scene.add(this.smoke),
      (this.particles = Array.from({ length: 140 }, () => ({ p: new D(), v: new D(), life: 0, max: 1 }))),
      (this.tailBones = [`tail_1`, `tail_2`, `tail_3`, `hips`]
        .map((e) => this.model.getObjectByName(e))
        .filter(Boolean)),
      (this.headBone = this.model.getObjectByName(`head`)),
      this.play(`idle`);
  }
  action(e) {
    return this.clips[e] ? (this.actions[e] ||= this.mixer.clipAction(this.clips[e])) : null;
  }
  play(e, t = 0.5) {
    let n = this.action(e);
    n &&
      this.current !== n &&
      (n.reset(),
      n.setLoop(v, 1 / 0),
      (n.enabled = !0),
      n.setEffectiveWeight(1),
      this.current && n.crossFadeFrom(this.current, t, !0),
      n.play(),
      (this.current = n));
  }
  gesture(e) {
    let t = this.action(e);
    if (!t) return (this.float += 1), In(2);
    t.reset(),
      t.setLoop(f, 1),
      (t.clampWhenFinished = !0),
      (t.enabled = !0),
      t.setEffectiveWeight(1),
      this.current && this.current !== t && t.crossFadeFrom(this.current, 0.4, !0),
      t.play(),
      (this.current = t);
    let n = this.clips[e].duration,
      r = 0;
    return M.add(
      (e) => ((r += e), r > n - 0.4 && (this.current === t && ((this.current = null), this.play(`idle`, 0.4)), !0)),
    );
  }
  async appear(e, t) {
    this.base.copy(e),
      this.root.position.copy(t || e),
      (this.root.visible = !0),
      (this.smoke.visible = !0),
      (this.targetPresence = 0),
      (this.presence = 0),
      (this.light = this.G.world.slot({
        position: e.clone().add(new D(0, 1.4, 0.3)),
        color: `#ffe2b4`,
        intensity: 0,
        distance: 7,
        priority: 3,
      })),
      this.G.audio.play(`genie_appear`, { position: e.clone().add(new D(0, 1.2, 0)), volume: 0.9 }),
      (this.rising = { from: (t || e).clone(), t: 0 }),
      this.gesture(`emerge`),
      (this.targetPresence = 1),
      await Ln(() => this.presence > 0.97);
  }
  async vanish(e) {
    this.G.audio.play(`genie_vanish`, { position: this.root.position.clone().add(new D(0, 1.2, 0)), volume: 0.8 }),
      (this.targetPresence = 0),
      (this.sinkTo = e ? e.clone() : null),
      await Ln(() => this.presence < 0.02),
      (this.root.visible = !1),
      (this.light &&= (this.G.world.removeSlot(this.light), null));
  }
  async say(e, t, n) {
    let { ui: r, audio: i } = this.G;
    (this.speaking = !0),
      i.play(`sparkle`, { position: this.root.position.clone().add(new D(0, 2, 0)), volume: 0.18, rate: 0.8 });
    let a = await i.say(e, t),
      o = t.split(/\s+/).length,
      s = Math.max(a || 0, 1.6 + o * 0.36);
    r.subtitle(`The Genie`, t, s + 0.5), n && this.gesture(n), await In(s), (this.speaking = !1);
  }
  face(e) {
    this.faceTarget = e ? e.clone() : null;
  }
  update(e, t) {
    if (
      ((this.mat.userData.u.solid.value = j(
        this.mat.userData.u.solid.value,
        this.root.position.z < -167 ? 0.65 : 0.2,
        2,
        e,
      )),
      (this.presence = j(this.presence, this.targetPresence, this.targetPresence > this.presence ? 0.62 : 0.95, e)),
      (this.mat.userData.u.presence.value = this.presence),
      !this.root.visible)
    ) {
      this.smoke.visible = !1;
      return;
    }
    if (((this.float += e), this.rising)) {
      this.rising.t += e / 3.6;
      let t = A(this.rising.t);
      this.root.position.lerpVectors(this.rising.from, this.base, t), this.rising.t >= 1 && (this.rising = null);
    } else
      this.sinkTo && this.targetPresence === 0
        ? this.root.position.lerp(this.sinkTo, 1 - Math.exp(-1.5 * e))
        : this.root.position.set(this.base.x, this.base.y + Math.sin(this.float * 0.8) * 0.04, this.base.z);
    let n = this.faceTarget || t;
    Nn.copy(n).sub(this.root.position),
      (this.yaw = Ue(this.yaw, Math.atan2(Nn.x, Nn.z), 1.8, e)),
      (this.root.rotation.y = this.yaw);
    let r = this.animated ? 1 : 2.3 / this.height;
    if (
      (this.animated || this.model.scale.setScalar(r * (0.2 + 0.8 * A(this.presence))),
      this.headBone?.userData.base && this.headBone.quaternion.copy(this.headBone.userData.base),
      this.mixer.update(e),
      this.headBone &&
        ((this.headBone.userData.base ||= new _()).copy(this.headBone.quaternion),
        (this.talk = j(this.talk || 0, +!!this.speaking, 3, e)),
        this.talk > 0.01))
    ) {
      let e = this.float;
      this.headBone.rotateX((Math.sin(e * 2.3) * 0.05 + Math.sin(e * 3.7) * 0.025) * this.talk),
        this.headBone.rotateY(Math.sin(e * 1.1) * 0.06 * this.talk);
    }
    this.light &&
      ((this.light.intensity = 1.6 * this.presence),
      this.light.position.copy(this.root.position).add(Nn.set(0, 1.5, 0.4))),
      this.updateSmoke(e);
  }
  updateSmoke(e) {
    let t = this.smoke.geometry.attributes.position.array,
      n = this.smoke.geometry.attributes.aAlpha.array,
      r = this.tailBones.length ? this.tailBones : [this.root];
    for (let i = 0; i < this.smokeN; i++) {
      let a = this.particles[i];
      if (((a.life += e), a.life > a.max)) {
        let e = r[(Math.random() * r.length) | 0];
        e.getWorldPosition(a.p),
          (a.p.x += (Math.random() - 0.5) * 0.25),
          (a.p.z += (Math.random() - 0.5) * 0.25),
          e === this.root && (a.p.y += Math.random() * 0.8),
          a.v.set((Math.random() - 0.5) * 0.12, 0.12 + Math.random() * 0.22, (Math.random() - 0.5) * 0.12),
          (a.life = 0),
          (a.max = 1.6 + Math.random() * 2.2);
      }
      let o = a.life / a.max;
      (a.v.x += Math.sin(a.life * 2 + i) * 0.12 * e),
        (a.v.z += Math.cos(a.life * 1.7 + i) * 0.12 * e),
        a.p.addScaledVector(a.v, e),
        (t[i * 3] = a.p.x),
        (t[i * 3 + 1] = a.p.y),
        (t[i * 3 + 2] = a.p.z),
        (n[i] = Math.sin(Math.PI * o) * this.presence * (1 - this.mat.userData.u.solid.value * 0.6));
    }
    (this.smoke.geometry.attributes.position.needsUpdate = !0),
      (this.smoke.geometry.attributes.aAlpha.needsUpdate = !0);
  }
};
function In(e) {
  let t = 0;
  return M.add((n) => (t += n) >= e);
}
function Ln(e) {
  return M.add(() => e());
}
var Rn = new D(),
  zn = new _(),
  Bn = class {
    constructor(e) {
      (this.G = e), (this.active = null);
    }
    open(e, t, n = {}) {
      if (this.active) return Promise.resolve();
      let { G: r } = this,
        i = new Te();
      e.updateWorldMatrix(!0, !0),
        e.traverse((e) => {
          e.isMesh &&
            e.material?.visible !== !1 &&
            (e.geometry.computeBoundingBox(), i.union(e.geometry.boundingBox.clone().applyMatrix4(e.matrixWorld)));
        });
      let a = i.getSize(new D()).length(),
        o = {
          object: e,
          card: t,
          parent: e.parent,
          pos: e.position.clone(),
          quat: e.quaternion.clone(),
          scl: e.scale.clone(),
          t: 0,
          closing: !1,
          spin: 0,
          tilt: 0,
          scale: (n.size || 0.2) / Math.max(0.01, a),
          hand: n.ptr?.xr && n.ptr.grip ? n.ptr.grip : null,
        };
      return (
        (this.active = o),
        r.scene.attach(e),
        (o.from = e.position.clone()),
        (o.fromQ = e.quaternion.clone()),
        (o.fromS = e.scale.clone()),
        r.ui.inspect(t),
        r.audio.play(`pickup`, { volume: 0.6 }),
        (r.player.lookLock = !0),
        r.monkey.look(e.getWorldPosition(new D())),
        r.monkey.chitter(0.5),
        (o.it = r.interactions.add({
          object: e,
          proxy: 0.15,
          label: `Return it`,
          highlight: !1,
          range: 3,
          onSelect: () => this.close(),
        })),
        new Promise((e) => (o.resolve = e))
      );
    }
    close() {
      let e = this.active;
      e &&
        !e.closing &&
        ((e.closing = !0),
        (e.t = 0),
        (e.from = e.object.position.clone()),
        (e.fromQ = e.object.quaternion.clone()),
        (e.fromS = e.object.scale.clone()),
        this.G.interactions.remove(e.it),
        this.G.ui.inspect(null),
        (this.G.player.lookLock = !1),
        this.G.monkey.look(null),
        this.G.audio.play(`place_click`, { volume: 0.4 }));
    }
    update(e) {
      let t = this.active;
      if (!t) return;
      let { G: r } = this;
      t.t += e;
      let i = t.object;
      if (t.closing) {
        let e = A(t.t / 0.6);
        t.parent.updateWorldMatrix(!0, !1);
        let n = t.pos.clone().applyMatrix4(t.parent.matrixWorld),
          r = t.parent.getWorldQuaternion(new _()).multiply(t.quat),
          a = t.scl.clone().multiply(t.parent.getWorldScale(new D()));
        i.position.lerpVectors(t.from, n, e),
          i.quaternion.slerpQuaternions(t.fromQ, r, e),
          i.scale.lerpVectors(t.fromS, a, e),
          e >= 1 &&
            (t.parent.attach(i),
            i.position.copy(t.pos),
            i.quaternion.copy(t.quat),
            i.scale.copy(t.scl),
            (this.active = null),
            t.resolve());
        return;
      }
      if (t.hand) {
        t.hand.updateWorldMatrix(!0, !1);
        let e = new D(0, 0.03, -0.11).applyMatrix4(t.hand.matrixWorld),
          n = t.hand.getWorldQuaternion(new _()).multiply(zn.setFromEuler(new b(-0.9, 0, 0))),
          r = A(t.t / 0.5);
        i.position.lerpVectors(t.from, e, r),
          i.quaternion.slerpQuaternions(t.fromQ, n, r),
          i.scale.lerpVectors(t.fromS, t.scl.clone().multiplyScalar(t.scale * 0.7), r);
        return;
      }
      let a = r.camera,
        o = a.getWorldPosition(Rn).clone(),
        s = a.getWorldDirection(new D()),
        c = o.addScaledVector(s, 0.42).add(new D(0, -0.04, 0)),
        l = r.player.lookDelta || { x: 0, y: 0 };
      (t.spin += l.x * 0.006 + e * 0.35),
        (t.tilt = Math.max(-1.2, Math.min(1.2, t.tilt + l.y * 0.006))),
        (r.player.lookDelta = { x: 0, y: 0 });
      let u = new _()
          .setFromRotationMatrix(new n().lookAt(a.getWorldPosition(new D()), c, new D(0, 1, 0)))
          .multiply(zn.setFromEuler(new b(t.tilt, t.spin, 0))),
        d = A(t.t / 0.7);
      i.position.lerpVectors(t.from, c, d),
        i.quaternion.slerpQuaternions(t.fromQ, u, d),
        i.scale.lerpVectors(t.fromS, t.scl.clone().multiplyScalar(t.scale), d),
        t.t > 1 && r.input.primary.pressed && !r.xr.session && this.close();
    }
  },
  Vn = new D(),
  Hn = class {
    constructor(e) {
      this.G = e;
      let { M: t } = e,
        n = (this.group = new h());
      n.name = `CraftBench`;
      let i = 0.945,
        o = z.bench.z;
      (this.top = i), e.areas.workshop.group.add(n);
      let s = (e, t, r, i, a, o = n) => {
        let s = new S(e, t);
        return s.position.set(r, i, a), (s.castShadow = !0), (s.receiveShadow = !0), o.add(s), s;
      };
      s(new r(0.13, 0.1, 0.14, 16), t.brassDark, -0.88, 1.015, o),
        (this.coals = s(new r(0.11, 0.11, 0.02, 16), t.ember.clone(), -0.88, 1.0899999999999999, o)),
        (this.crucible = new h()),
        this.crucible.position.set(-0.88, 1.105, o),
        n.add(this.crucible);
      let c = s(
        new g(
          [
            [0.001, 0],
            [0.05, 0],
            [0.065, 0.06],
            [0.07, 0.1],
            [0.075, 0.105],
          ].map(([e, t]) => new de(e, t)),
          18,
        ),
        t.clay,
        0,
        0,
        0,
        this.crucible,
      );
      (c.material = t.clay),
        (this.melt = s(
          new ae(0.064, 20),
          new C({ color: `#ffb347`, emissive: `#ff8a1c`, emissiveIntensity: 2.4, roughness: 0.3, metalness: 0.6 }),
          0,
          0.085,
          0,
          this.crucible,
        )),
        (this.melt.rotation.x = -Math.PI / 2);
      let l = s(new r(0.008, 0.008, 0.22, 6), t.woodDark, 0.15, 0.08, 0, this.crucible);
      (l.rotation.z = Math.PI / 2),
        (this.stream = s(
          new r(0.006, 0.01, 1, 8).translate(0, -0.5, 0),
          this.melt.material,
          -0.8,
          1.2149999999999999,
          o + 0.02,
        )),
        (this.stream.visible = !1),
        s(new ye(0.26, 0.05, 0.18), t.stoneDark, -0.55, 0.97, o + 0.02),
        (this.fill = s(new u(0.2, 0.12), this.melt.material.clone(), -0.55, 0.996, o + 0.02)),
        (this.fill.rotation.x = -Math.PI / 2),
        this.fill.scale.set(0.001, 0.001, 1),
        s(new r(0.12, 0.14, 0.12, 20), t.woodDark, 0, 1.005, o + 0.05),
        s(new ye(0.16, 0.035, 0.12), t.brassDark, 0, 1.0819999999999999, o + 0.05),
        (this.pieceModel = useGameMaterials(e.A.jewel.clone(), t)),
        (this.piece = fitTo(this.pieceModel, 0.2)),
        (this.piece.rotation.x = -Math.PI / 2 + 0.35),
        this.piece.position.set(0, 1.13, o + 0.06),
        n.add(this.piece),
        (this.hammer = new h()),
        this.hammer.position.set(0.2, 0.965, o + 0.1),
        n.add(this.hammer);
      let d = s(new r(0.009, 0.011, 0.24, 8), t.woodDark, 0, 0, 0, this.hammer);
      (d.rotation.z = Math.PI / 2),
        (d.position.x = 0.07),
        (s(new ye(0.035, 0.035, 0.08), t.brass, -0.05, 0, 0, this.hammer).rotation.x = Math.PI / 2),
        (this.hammer.userData.rest = this.hammer.position.clone()),
        s(new ye(0.34, 0.02, 0.22), t.velvet, 0.47, 0.955, o + 0.03),
        (this.leafPad = new h()),
        this.leafPad.position.set(0.34, 0.98, o + 0.03),
        this.leafPad.rotation.set(-Math.PI / 2 + 0.55, 0, 0),
        n.add(this.leafPad);
      let f = new we();
      for (let e = 0; e <= 24; e++) {
        let t = e / 24;
        f[e ? `lineTo` : `moveTo`](t * 0.26, Math.sin(Math.PI * t) ** 0.85 * 0.065 * (1 - 0.25 * t));
      }
      for (let e = 23; e > 0; e--) {
        let t = e / 24;
        f.lineTo(t * 0.26, -(Math.sin(Math.PI * t) ** 0.85) * 0.065 * (1 - 0.25 * t));
      }
      (this.leafBlank = s(
        new a(f, { depth: 0.004, bevelEnabled: !0, bevelSize: 0.002, bevelThickness: 0.002, bevelSegments: 2 }),
        t.goldSoft,
        0,
        0,
        0,
        this.leafPad,
      )),
        (this.leafBlank.castShadow = !0),
        (this.veinPath = [
          R(0.012, 0, 0.007),
          R(0.06, 0.004, 0.007),
          R(0.12, 0.002, 0.007),
          R(0.18, -0.002, 0.007),
          R(0.245, 0, 0.007),
        ]),
        (this.veinCurve = new Le(this.veinPath)),
        (this.vein = ln(new S(cn(this.veinPath, 0.0022, !1, 60), t.brassDark))),
        this.leafPad.add(this.vein),
        this.vein.userData.grow(0),
        (this.guide = new w(new fe().setFromPoints(this.veinCurve.getSpacedPoints(26)), ht(0.015)));
      let p = new Float32Array(27).fill(1),
        m = new Float32Array(27).fill(1);
      this.guide.geometry.setAttribute(`aAlpha`, new E(p, 1)),
        this.guide.geometry.setAttribute(`aSize`, new E(m, 1)),
        (this.guide.visible = !1),
        this.leafPad.add(this.guide),
        (this.graver = new h()),
        n.add(this.graver),
        (this.graver.visible = !1),
        s(new r(0.003, 0.006, 0.09, 6).translate(0, 0.045, 0), t.brass, 0, 0, 0, this.graver),
        s(new T(0.014, 10, 8), t.woodDark, 0, 0.1, 0, this.graver).scale.set(1, 1.4, 1),
        s(new r(0.07, 0.05, 0.02, 20), t.brass, 0.88, 0.955, o + 0.04),
        (this.pearl = new h()),
        this.pearl.position.set(0.88, 0.985, o + 0.04),
        n.add(this.pearl),
        this.pearl.add(fitTo(useGameMaterials(cuffPart(e.A.jewel, `flower`, cuffFlowersBySize(e.A.jewel)[0]), t), 0.045).rotateX(-Math.PI / 2)),
        (this.pearlHome = this.pearl.position.clone()),
        (this.sparks = new w(new fe(), ht(0.02))),
        (this.sparks.frustumCulled = !1),
        n.add(this.sparks),
        (this.sparkN = 40),
        (this.sparkData = []),
        this.sparks.geometry.setAttribute(`position`, new E(new Float32Array(120), 3)),
        this.sparks.geometry.setAttribute(`aAlpha`, new E(new Float32Array(40), 1)),
        this.sparks.geometry.setAttribute(
          `aSize`,
          new E(
            Float32Array.from({ length: 40 }, () => 0.3 + Math.random()),
            1,
          ),
        );
      let _ = R(0, i, o);
      for (let e of n.children) e.position.sub(_);
      n.position.copy(_), n.scale.setScalar(1.45);
      for (let e of [`pearlHome`]) this[e].sub(_);
      this.hammer.userData.rest.sub(_), this.reset();
    }
    reset() {
      (this.step = 0),
        (this.fillP = 0),
        (this.strikes = 0),
        (this.engraved = 0),
        (this.holdingPearl = !1),
        (this.done = !1),
        cuffAssemble(this.pieceModel, 0),
        (this.piece.visible = !1),
        this.fill.scale.set(0.001, 0.001, 1),
        (this.crucible.rotation.z = 0),
        (this.stream.visible = !1),
        this.vein.userData.grow(0),
        (this.engraved = 0),
        this.pearl.position.copy(this.pearlHome),
        (this.pearl.visible = !0),
        this.pearl.scale.setScalar(1),
        this.hammer.position.copy(this.hammer.userData.rest),
        this.hammer.rotation.set(0, 0, 0);
    }
    complete() {
      (this.piece.visible = !0),
        cuffAssemble(this.pieceModel, 1),
        this.fill.scale.set(1, 1, 1),
        this.vein.userData.grow(1),
        (this.pearl.visible = !1),
        this.addPearlToPiece();
    }
    addPearlToPiece() {
      cuffAssemble(this.pieceModel, 1);
    }
    burst(e, t = 18) {
      for (let n = 0; n < t; n++)
        (this.sparkI = ((this.sparkI || 0) + 1) % this.sparkN),
          (this.sparkData[this.sparkI] = {
            p: e.clone(),
            v: new D((Math.random() - 0.5) * 1.2, Math.random() * 1.4, (Math.random() - 0.5) * 1.2),
            life: 0,
            max: 0.3 + Math.random() * 0.4,
          });
    }
    update(e) {
      let t = this.sparks.geometry.attributes.position.array,
        n = this.sparks.geometry.attributes.aAlpha.array;
      for (let r = 0; r < this.sparkN; r++) {
        let i = this.sparkData[r];
        i
          ? ((i.life += e),
            (i.v.y -= 4 * e),
            i.p.addScaledVector(i.v, e),
            (t[r * 3] = i.p.x),
            (t[r * 3 + 1] = i.p.y),
            (t[r * 3 + 2] = i.p.z),
            (n[r] = Math.max(0, 1 - i.life / i.max)))
          : (n[r] = 0);
      }
      if (
        ((this.sparks.geometry.attributes.position.needsUpdate = !0),
        (this.sparks.geometry.attributes.aAlpha.needsUpdate = !0),
        (this.coals.material.emissiveIntensity = 2.6 + Math.sin(this.G.clock.time * 6) * 0.5),
        this.holdingPearl && this.holdPointer)
      ) {
        let t = this.holdPointer;
        if (
          (t.grip
            ? (t.grip.updateWorldMatrix(!0, !1), Vn.set(0, -0.01, -0.06).applyMatrix4(t.grip.matrixWorld))
            : Vn.copy(t.ray.origin).addScaledVector(t.ray.direction, 0.38),
          this.group.worldToLocal(Vn),
          this.pearl.position.lerp(Vn, 1 - Math.exp(-18 * e)),
          t.xr)
        ) {
          let e = this.settingWorld();
          this.pearl.getWorldPosition(Vn), Vn.distanceTo(e) < 0.07 && this.onSet?.();
        }
      }
    }
    settingWorld() {
      return this.piece.localToWorld(new D(0, 0, 0.004));
    }
    async play(e) {
      let { G: t } = this,
        n = t.interactions,
        r = t.audio;
      this.reset(),
        e.objective(`Hold to pour the molten gold into the leaf mould`, null),
        await new Promise((t) => {
          let i = n.add({
            object: this.crucible,
            kind: `hold`,
            holdTime: 2.4,
            label: `Pour the molten gold`,
            range: 2.6,
            objective: !0,
            onHoldTick: (e) => {
              (this.crucible.rotation.z = -A(e) * 1.15),
                (this.stream.visible = e > 0.25),
                (this.stream.scale.y = 0.24),
                (this.fillP = Math.max(this.fillP, k((e - 0.25) / 0.75)));
              let t = 0.001 + this.fillP;
              this.fill.scale.set(t, t, 1),
                e > 0.25 &&
                  !this.pourSound &&
                  (this.pourSound = r.play(`pour_gold`, {
                    position: this.fill.getWorldPosition(new D()),
                    volume: 0.9,
                  })),
                e <= 0.01 && this.pourSound && (this.pourSound.stop(0.2), (this.pourSound = null));
            },
            onSelect: () => {
              n.remove(i), t();
            },
          });
          e.skipStep = () => {
            n.remove(i), t();
          };
        }),
        (this.stream.visible = !1),
        this.fill.scale.set(1, 1, 1),
        await P(0.6, (e) => {
          this.crucible.rotation.z = -1.15 * (1 - e);
        }),
        r.play(`cool_hiss`, { position: this.fill.getWorldPosition(new D()), volume: 0.8 }),
        (this.piece.visible = !0),
        await P(1.6, (e) => {
          cuffAssemble(this.pieceModel, e * 0.6),
            (this.fill.material.emissiveIntensity = 2.4 * (1 - e));
        }),
        t.monkey.gesture(`excited`),
        t.ui.toast(`The gold cools into the frame of a flower.`, 3.5);
      for (let i = 0; i < 3; i++) {
        e.objective(`Strike the gold to shape the petals (${i + 1} of 3)`, null),
          await new Promise((t) => {
            let r = n.add({
              object: this.piece,
              proxy: 0.13,
              label: `Strike with the hammer`,
              range: 2.6,
              highlight: !1,
              objective: !0,
              onSelect: () => {
                n.remove(r), t();
              },
            });
            e.skipStep = () => {
              n.remove(r), t();
            };
          });
        let a = this.hammer.userData.rest.clone(),
          o = this.piece.position.clone().add(R(0.06, 0.09, 0.02));
        await P(
          0.16,
          (e) => {
            this.hammer.position.lerpVectors(a, o, e), (this.hammer.rotation.z = -0.9 * e);
          },
          Ve,
        ),
          r.play(`hammer_${i + 1}`, { position: this.piece.getWorldPosition(new D()), volume: 1 }),
          t.xr.pulseAll(0.6, 60),
          this.burst(this.piece.position.clone().add(R(0, 0.03, 0)), 16);
        let s = 0.6 + i * 0.0933;
        P(0.5, (e) => cuffAssemble(this.pieceModel, s + 0.0933 * Ve(e)));
        await P(0.35, (e) => {
          this.hammer.position.lerpVectors(o, a, e), (this.hammer.rotation.z = -0.9 * (1 - e));
        });
      }
      t.ui.toast(`Each strike coaxes a blossom from the metal.`, 3.5),
        e.objective(`Hold and trace the dotted vein to engrave the leaf`, null),
        (this.guide.visible = !0),
        await new Promise((i) => {
          let a = 0,
            o = null,
            s = () => {
              n.remove(c), (this.graver.visible = !1), (this.guide.visible = !1), this.vein.userData.grow(1), i();
            },
            c = n.add({
              object: this.leafBlank,
              kind: `drag`,
              label: `Engrave along the vein`,
              range: 2.6,
              objective: !0,
              autopath: () => this.veinCurve.getSpacedPoints(30).map((e) => this.leafPad.localToWorld(e.clone())),
              onPress: () => {
                this.graver.visible = !0;
              },
              whileDown: (e) => {
                let n = new D(0, 0, 1).applyQuaternion(this.leafPad.getWorldQuaternion(new _())),
                  i = this.leafPad.getWorldPosition(new D()),
                  c = new Ee().setFromNormalAndCoplanarPoint(n, i),
                  l = e.ray.intersectPlane(c, new D());
                if (!l) return;
                this.graver.position.copy(this.group.worldToLocal(l.clone())),
                  this.graver.lookAt(this.group.worldToLocal(l.clone().add(n))),
                  this.graver.rotateX(Math.PI / 2);
                let u = this.leafPad.worldToLocal(l.clone()),
                  d = a,
                  f = 1e9;
                for (let e = a; e <= Math.min(1, a + 0.15); e += 0.01) {
                  let t = this.veinCurve.getPointAt(e).distanceTo(u);
                  t < f && ((f = t), (d = e));
                }
                let p = e.xr ? 0.035 : 0.028;
                if (f < p && d > a) {
                  (a = d), this.vein.userData.grow(a);
                  let e = this.guide.geometry.attributes.aAlpha;
                  for (let t = 0; t < e.count; t++) e.array[t] = +(t / (e.count - 1) > a);
                  (e.needsUpdate = !0),
                    (!o || t.clock.time - o > 0.25) &&
                      ((o = t.clock.time),
                      r.play(`engrave`, { position: l, volume: 0.5, rate: 0.9 + Math.random() * 0.2 }),
                      t.xr.pulseAll(0.15, 20)),
                    a > 0.96 && s();
                }
              },
              onRelease: () => {
                this.graver.visible = !1;
              },
            });
          e.skipStep = s;
        }),
        await P(1, (e) => cuffAssemble(this.pieceModel, 0.88 + 0.06 * e)),
        t.monkey.gesture(`look_around`),
        t.ui.toast(`Every leaf now carries the line of a maker’s hand.`, 3.5),
        e.objective(`Pick up the gold blossom`, null),
        await new Promise((t) => {
          let i = n.add({
            object: this.pearl,
            proxy: 0.06,
            label: `Pick up the gold blossom`,
            range: 2.6,
            objective: !0,
            onSelect: (e) => {
              n.remove(i), (this.holdingPearl = !0), (this.holdPointer = e), r.play(`pickup`, { volume: 0.7 }), t();
            },
          });
          e.skipStep = () => {
            n.remove(i), t();
          };
        }),
        e.objective(`Set the blossom on the cuff`, null),
        await new Promise((t) => {
          let r = () => {
            this.done || ((this.done = !0), n.remove(i), (this.onSet = null), t());
          };
          this.onSet = r;
          let i = n.add({
            object: this.piece,
            proxy: 0.13,
            label: `Set the blossom`,
            range: 2.6,
            highlight: !1,
            objective: !0,
            onSelect: r,
          });
          e.skipStep = r;
        }),
        (this.holdingPearl = !1);
      let i = this.pearl.getWorldPosition(new D()),
        a = this.settingWorld();
      await P(0.5, (e) => {
        this.pearl.position.copy(this.group.worldToLocal(i.clone().lerp(a, e)));
      }),
        (this.pearl.visible = !1),
        this.addPearlToPiece(),
        r.play(`pearl_set`, { position: a, volume: 0.9 }),
        t.xr.pulseAll(0.4, 40),
        await P(1.2, (e) => cuffAssemble(this.pieceModel, 0.94 + 0.06 * e)),
        r.play(`sparkle`, { position: a, volume: 0.6 }),
        t.ui.toast(`Set by hand, the blossom holds. The cuff is whole.`, 4),
        this.burst(this.piece.position.clone(), 30),
        (e.skipStep = null);
    }
  },
  Un = {
    welcome1: `Welcome, traveller. I am the keeper of forgotten things.`,
    welcome2: `Beyond this arch lies the old Gold Souk. Every treasure in it remembers the hands that made it.`,
    welcome3: `My little friend knows its every corner. Follow him — and stay curious.`,
    finale1: `You found it. Nothing made with such care is ever truly lost.`,
    finale2: `I keep the treasures the world forgets, so that their stories are kept too.`,
    finale3: `Look closely. Every petal was shaped by patient hands. Every leaf carries the memory of its maker.`,
    finale4: `Let it show you what it carries.`,
    finale5: `Gold can be melted, and pearls can be lost. But craft — craft is remembered.`,
    finale6: `This is the work of Kavya Potluri. And now, it is part of your story too.`,
  },
  Wn = [
    { id: `welcome`, title: `The Welcome`, blurb: `A lamp, a guardian and a little guide.` },
    { id: `souk`, title: `The Gold Souk`, blurb: `Brass, pearls and woven light.` },
    { id: `carpet`, title: `The Flying Carpet`, blurb: `A gentle ride over the lower town.` },
    { id: `workshop`, title: `The Workshop`, blurb: `Pour, shape, engrave and set the ear cuff.` },
    { id: `gallery`, title: `The Gallery`, blurb: `Kavya Potluri’s collection — and an empty pedestal.` },
    { id: `desert`, title: `The Golden Desert`, blurb: `Follow the trail beyond the souk.` },
    { id: `finale`, title: `The Restoration`, blurb: `The pearl, the Genie and the golden arch.` },
  ],
  Gn = {
    welcome: `01 · The Welcome`,
    souk: `02 · The Gold Souk`,
    carpet: `03 · The Flying Carpet`,
    workshop: `04 · The Workshop`,
    gallery: `05 · The Gallery`,
    desert: `06 · The Golden Desert`,
    finale: `07 · The Restoration`,
  },
  Kn = `souk-game-progress-v2`,
  qn = {
    "Approach the lamp": `Walk up to the lamp on the pedestal and look at it — or click it.`,
    "Follow your guide into the souk": `The golden motes lead the way. Follow the monkey through the arch.`,
    "Step onto the flying carpet": `Walk onto the carpet in the middle of the courtyard, or click it.`,
    "Follow the sound of hammers": `The workshop door is straight ahead, past the landing.`,
    "Join the craft at the central bench": `Stand at the front of the long bench in the middle of the room.`,
    "Hold to pour the molten gold into the leaf mould": `Point at the glowing crucible on the left and hold the button down.`,
    "Hold and trace the dotted vein to engrave the leaf": `Hold the button on the gold leaf and slowly follow the dotted line from its base to its tip.`,
    "Pick up the gold blossom": `The gold blossom sits in the small brass dish on the right of the bench.`,
    "Set the blossom on the cuff": `With the blossom in hand, click the ear cuff in the centre.`,
    "Explore the collection": `Walk up to a lit niche and click a piece to hold it. The monkey is heading to the centre…`,
    "Something on the central pedestal…": `Walk up to the glass dome in the middle of the gallery.`,
    "Follow the golden trail across the sand": `Follow the motes and the monkey out across the dunes.`,
    "There — follow the glimmer": `Keep after the monkey — he has seen where the trail went.`,
    "Help him brush away the sand": `Point at the small mound of sand beside the monkey and hold the button.`,
  },
  V = new D(),
  Jn = (e, t) => Math.hypot(e.x - t.x, e.z - t.z),
  Yn = class {
    constructor(e) {
      (this.G = e),
        (this.chapter = null),
        (this.cinematic = !1),
        (this.inspector = new Bn(e)),
        (this.craft = new Hn(e)),
        (this.trailTarget = null),
        (this.trailRoute = null),
        (this.trailOpts = {}),
        (this.found = new Set()),
        e.scene.attach(e.areas.courtyard.carpet),
        this.setupAmbientReactions(),
        this.buildFinaleProps(),
        (this.littleCarpet = en({ fringeMat: () => Ot.fringe }, e.M, 1, 1.4)),
        e.scene.add(this.littleCarpet),
        (this.littleCarpetPark = R(z.carpet.x - 1.85, z.carpet.y, z.carpet.z + 0.1)),
        (this.guide = new CarpetGuide(e, this.littleCarpet, { P, N, Ke, park: this.littleCarpetPark, parkYaw: 0 })),
        (e.guide = this.guide),
        (e.world.onArea = (e) => this.onArea(e));
    }
    saved() {
      try {
        return localStorage.getItem(Kn);
      } catch {
        return null;
      }
    }
    save(e) {
      try {
        localStorage.setItem(Kn, e);
      } catch {}
    }
    clearSave() {
      try {
        localStorage.removeItem(Kn);
      } catch {}
    }
    nextChapter() {
      let e = Wn.findIndex((e) => e.id === this.chapter);
      return Wn[Math.min(Wn.length - 1, e + 1)].id;
    }
    objective(e, t, n = {}) {
      this.G.ui.objective(Gn[this.chapter] || ``, e),
        (this.hintState = e && qn[e] ? { text: qn[e], t: 0, shown: 0 } : null),
        t !== void 0 && this.trail(t, n);
    }
    trail(e, t = {}) {
      (this.trailTarget = e), (this.trailOpts = t), (this.trailAcc = 1e9), this.G.trail.show(!!e);
    }
    cine(e, t) {
      (this.cinematic = e),
        this.G.ui.cinematic(e && !this.G.xr.session),
        (this.G.player.frozen = e),
        t && !this.G.xr.session && (this.G.player.lookAt(t, 1.8, 3), (this.G.player.attention.story = !0));
    }
    look(e, t = 1.8, n = 2.5) {
      this.G.xr.session || (this.G.player.lookAt(e, t, n), (this.G.player.attention.story = !0));
    }
    near(e, t) {
      return Ge(() => Jn(this.G.player.head(V), e) < t);
    }
    pick(e) {
      return new Promise((t) => {
        let n = this.G.interactions.add({
          objective: !0,
          ...e,
          onSelect: (r, i) => {
            this.G.interactions.remove(n), e.after?.(r, i), t(r);
          },
        });
        this.pending.push(n);
      });
    }
    say(e, t) {
      return this.G.genie.say(e, Un[e], t);
    }
    hint(e, t = 4) {
      this.G.ui.toast(e, t);
    }
    route(e, t) {
      let n = [],
        r = e <= t ? 1 : -1;
      for (let i = e; r > 0 ? i <= t : i >= t; i += r) n.push(B(i));
      return n;
    }
    async start(e) {
      let t = this.G;
      M.newToken();
      for (let e of this.pending || []) t.interactions.remove(e);
      (this.pending = []),
        this.inspector.active && this.inspector.close(),
        this.cine(!1),
        t.trail.show(!1),
        t.ui.subtitle(``, ``),
        t.ui.objective(``, ``),
        t.audio.stopSpeech(),
        (t.player.mount = null),
        (t.player.frozen = !1),
        (t.camera.position.y = t.xr.session ? 0 : 1.62),
        t.world.setOverride(null),
        (this.chapter = e),
        this.save(e),
        this.applyState(e);
      let n = Wn.findIndex((t) => t.id === e);
      for (let e = n; e < Wn.length; e++) {
        let r = Wn[e];
        this.chapter !== r.id && ((this.chapter = r.id), this.save(r.id)),
          t.ui.objective(Gn[r.id], ``),
          e === n && this.placePlayer(r.id),
          await this[r.id]();
      }
    }
    skipScene() {
      this.skipStep?.();
    }
    attract() {
      let e = this.G;
      M.newToken(),
        (this.chapter = null),
        this.applyState(`welcome`),
        e.player.teleport(2.6, 14.4, 0.32),
        (e.player.pitch = 0.04),
        (e.player.mount = null),
        (e.genie.root.visible = !1),
        Ke((t, n) => {
          let r = e.player;
          return (
            (r.rig.rotation.y = 0.32 + Math.sin(n * 0.07) * 0.1),
            r.camera.rotation.set(0.04 + Math.sin(n * 0.05) * 0.025, 0, 0),
            (r.rig.position.x = 2.6 + Math.sin(n * 0.045) * 0.35),
            !1
          );
        });
    }
    placePlayer(e) {
      let t = this.G.player,
        n = !!this.G.xr.session,
        [r, i, a] = {
          welcome: [z.spawn.x, z.spawn.z, 0],
          souk: [0, 0.6, 0],
          carpet: [0, -38.6, 0],
          workshop: [0, -107.2, 0],
          gallery: [0, -138.6, 0],
          desert: [0, -166.4, 0],
          finale: [5.2, -219.4, 0.04],
        }[e];
      t.teleport(r, i, a, n), n && (this.G.ui.snapPanel = !0);
    }
    applyState(e) {
      let t = this.G,
        n = t.areas,
        r = t.nav,
        i = Wn.findIndex((t) => t.id === e),
        a = (e) => i > Wn.findIndex((t) => t.id === e);
      for (let e of [`soukArch`, `workshopDoor`, `motifDoor`, `galleryExit`]) r.close(e);
      a(`welcome`) && r.open(`soukArch`),
        a(`workshop`) && r.open(`workshopDoor`),
        a(`workshop`) && r.open(`motifDoor`),
        a(`gallery`) && r.open(`galleryExit`),
        t.world.setHidden(`workshop`, !a(`workshop`)),
        t.world.setHidden(`gallery`, !a(`workshop`)),
        t.world.setHidden(`desert`, !a(`gallery`)),
        n.dock.door.open(+!!a(`workshop`)),
        n.workshop.motifDoor.open(+!!a(`workshop`)),
        n.gallery.exitDoor.open(a(`gallery`) ? 0.9 : 0),
        (n.gallery.lights.find((e) => e.exit).intensity = a(`gallery`) ? 8 : 0),
        this.setMotifGlow(+!!a(`workshop`)),
        a(`workshop`) ? this.craft.complete() : this.craft.reset();
      let o = n.courtyard.carpet;
      a(`carpet`) ? o.position.copy(z.dockLanding) : o.position.copy(z.carpet),
        o.rotation.set(0, 0, 0),
        (n.desert.mound.visible = !0),
        n.desert.mound.scale.set(1, 0.32, 1),
        (this.pearl.visible = !1),
        (this.jewel.visible = !1),
        (this.sculpture.group.visible = !1),
        this.sculpture.grow(0),
        (this.finaleLight.intensity = 0),
        (this.finaleLight.off = !0),
        (this.titleCard.visible = !1),
        (this.titleCard.material.opacity = 0),
        (this.showShaft.material.uniforms.strength.value = 0),
        (n.desert.lamp.visible = !0),
        (t.genie.root.visible = !1),
        (t.genie.targetPresence = 0),
        (t.genie.presence = 0);
      let s = t.monkey;
      s.detach(),
        s.look(null),
        (s.lookPlayer = !0),
        this.littleCarpet &&
          ((this.littleCarpet.userData.flying = !1),
          this.littleCarpet.position.copy(this.littleCarpetPark),
          (this.littleCarpet.rotation.y = 0));
      let c = {
          welcome: [z.monkeyStart, 0],
          souk: [R(0.8, 0, -1.8), Math.PI],
          carpet: [R(0.6, 0, -40.5), Math.PI],
          workshop: [R(1, 0, -111.5), Math.PI],
          gallery: [R(0.9, 0, -140.5), Math.PI],
          desert: [R(0.6, 0, -170.4), Math.PI],
          finale: [R(5.85, 0, -223.1), -0.6],
        },
        [l, u] = c[e] || c.welcome;
      s.placeAt(l, u),
        (s.sitting = e === `welcome`),
        s.play(e === `welcome` ? `idle` : s.restClip()),
        this.guide?.applyState(e, l, u),
        e === `finale` &&
          ((n.desert.mound.visible = !1), (this.pearl.visible = !0), this.pearl.position.copy(this.pearlSpot));
    }
    setMotifGlow(e) {
      this.G.areas.workshop.motif.traverse((t) => {
        t.isMesh &&
          (t.userData.glowMat || ((t.material = t.material.clone()), (t.userData.glowMat = !0)),
          t.material.emissive?.set(`#ffb85a`),
          t.material.emissive && (t.material.emissiveIntensity = e * 0.9));
      });
    }
    onArea(e) {
      let t = this.G.areas[e];
      if (!t) return;
      let { audio: n } = this.G;
      this.musicLock || (t.music && n.music(t.music, 0.8), t.amb && n.ambience(t.amb, 0.9));
    }
    setupAmbientReactions() {
      let e = this.G,
        t = e.areas.souk;
      t.kp && soukInteractions(e, t.kp);
      for (let n of t.reactors)
        e.interactions.react({
          position: n.position,
          radius: 4.5,
          update: (r) => {
            (t.lanternBoost = Math.max(t.lanternBoost || 0, r) * 0.98),
              r > 0.5 && !n.done && ((n.done = !0), e.audio.play(`lantern_on`, { position: n.position, volume: 0.5 })),
              r < 0.1 && (n.done = !1);
          },
        });
      for (let n of t.charms)
        e.interactions.react({
          object: n,
          radius: 1.8,
          update: (t) => {
            t > 0.25 &&
              !n.userData.rang &&
              ((n.userData.rang = !0),
              (n.userData.excite = 1),
              e.audio.play(`charms_tinkle`, { position: n.getWorldPosition(new D()), volume: 0.5 })),
              t < 0.05 && (n.userData.rang = !1);
          },
        });
      for (let t of e.areas.gallery.displays) {
        let n = e.areas.gallery.lights.find(
          (e) => e.niche && Math.abs(e.position.z - t.z) < 0.1 && Math.sign(e.position.x) === t.s,
        );
        e.interactions.react({
          position: t.pos,
          radius: 3.2,
          update: (e, r) => {
            n && (n.intensity = 2.2 + e * 5),
              (t.spin = (t.spin || Math.random() * 6) + r * (0.25 + e * 0.5)),
              (this.inspector.active && this.inspector.active.object === t.obj) ||
                (t.obj.rotation.y = Math.sin(t.spin) * 0.55);
          },
        });
      }
      let n = [
        {
          obj: t.brassPieces[0],
          name: `Chased brass ornament`,
          line: `Hammered from a single sheet, then chased with a blunt tool, one small dent at a time.`,
        },
        ...t.curios,
      ];
      for (let t of n)
        t.obj &&
          e.interactions.add({
            object: t.obj,
            proxy: 0.18,
            label: `Look closer · ${t.name}`,
            range: 2.6,
            onSelect: (r) => {
              let i = !this.found.has(t.name);
              this.found.add(t.name),
                this.inspector.open(t.obj, t, { size: t.size || 0.18, ptr: r }),
                i && setTimeout(() => e.ui.toast(`Curiosities found · ${this.found.size} of ${n.length}`, 3), 900);
            },
          });
    }
    buildFinaleProps() {
      let e = this.G,
        t = e.M,
        n = e.areas.desert;
      (this.pearlSpot = R(z.digSpot.x, Lt(z.digSpot.x, z.digSpot.z) + 0.045, z.digSpot.z)),
        (this.pearl = new S(new T(0.045, 32, 20), t.pearl.clone())),
        (this.pearl.material.emissive = new O(`#ffdba8`)),
        (this.pearl.material.emissiveIntensity = 0),
        (this.pearl.castShadow = !0),
        this.pearl.position.copy(this.pearlSpot),
        n.group.add(this.pearl),
        (this.jewel = new h());
      let r = e.A.jewel.clone();
      (this.jewelModel = r),
        this.jewel.add(fitTo(r, 0.3)),
        n.group.add(this.jewel),
        r.traverse((e) => {
          e.isMesh &&
            ((e.castShadow = !0),
            /gold/i.test(e.material.name)
              ? (e.material = t.gold)
              : /pearl/i.test(e.material.name) && (e.material = t.pearl));
        });
      let i = Lt(z.stage.x, z.stage.z) + 0.92;
      (this.stageTop = R(z.stage.x, i, z.stage.z)),
        (this.sculpture = new gn(t, { width: 3.4, height: 4.4, cuff: e.A.jewel })),
        this.sculpture.group.position.set(z.stage.x, Lt(z.stage.x, z.stage.z - 0.9), z.stage.z - 0.9),
        n.group.add(this.sculpture.group),
        (this.showShaft = Ht(
          R(z.stage.x, i + 6, z.stage.z),
          R(z.stage.x, i - 0.3, z.stage.z),
          0.15,
          0.9,
          `#ffd9a0`,
          0,
        )),
        n.group.add(this.showShaft),
        (this.finaleLight = e.world.slot({
          position: R(z.stage.x, i + 1.6, z.stage.z + 0.8),
          color: `#ffe2b0`,
          intensity: 0,
          distance: 6,
          priority: 4,
        })),
        (this.magicN = 120);
      let a = new fe();
      a.setAttribute(`position`, new E(new Float32Array(360), 3)),
        a.setAttribute(`aAlpha`, new E(new Float32Array(120), 1)),
        a.setAttribute(
          `aSize`,
          new E(
            Float32Array.from({ length: 120 }, () => 0.4 + Math.random()),
            1,
          ),
        ),
        (this.magic = new w(a, ht(0.03))),
        (this.magic.frustumCulled = !1),
        e.scene.add(this.magic),
        (this.magicData = Array.from({ length: 120 }, () => ({ p: new D(), v: new D(), life: 1, max: 1 }))),
        (this.magicSource = null);
      let o = document.createElement(`canvas`);
      (o.width = 1024), (o.height = 320);
      let s = o.getContext(`2d`);
      (s.textAlign = `center`),
        (s.fillStyle = `#f3e3c3`),
        (s.font = `300 88px Georgia`),
        (s.letterSpacing = `18px`),
        (s.shadowColor = `rgba(80,40,0,0.6)`),
        (s.shadowBlur = 18),
        s.fillText(`KAVYA POTLURI`, 512, 150),
        (s.font = `italic 46px Georgia`),
        (s.fillStyle = `#e7c58a`),
        (s.letterSpacing = `2px`),
        s.fillText(bn.name, 512, 230),
        (s.fillStyle = `rgba(231,197,138,0.8)`),
        s.fillRect(392, 270, 240, 2);
      let l = new ne(o);
      (l.colorSpace = Oe),
        (this.titleCard = new S(
          new u(3.2, 1),
          new c({ map: l, transparent: !0, opacity: 0, depthWrite: !1, toneMapped: !1 }),
        )),
        this.titleCard.position.set(z.stage.x, Lt(z.stage.x, z.stage.z) + 5.6, z.stage.z - 0.6),
        (this.titleCard.visible = !1),
        (this.titleCard.renderOrder = 7),
        n.group.add(this.titleCard);
    }
    motes(e, t = `rise`, n = 40) {
      this.magicSource = e ? { at: e.clone(), mode: t, rate: n, acc: 0 } : null;
    }
    updateMotes(e) {
      let t = this.magic.geometry.attributes.position.array,
        n = this.magic.geometry.attributes.aAlpha.array,
        r = this.magicSource,
        i = 0;
      r && ((r.acc += e * r.rate), (i = Math.floor(r.acc)), (r.acc -= i));
      for (let a = 0; a < this.magicN; a++) {
        let o = this.magicData[a];
        if (o.life >= o.max && i > 0 && r) {
          i--, (o.life = 0), (o.max = 1.5 + Math.random() * 2);
          let e = Math.random() * Math.PI * 2,
            t = r.mode === `sink` ? 0.9 : 0.15 + Math.random() * 0.25;
          o.p.set(
            r.at.x + Math.cos(e) * t,
            r.at.y + (r.mode === `sink` ? 0.8 + Math.random() : Math.random() * 0.1),
            r.at.z + Math.sin(e) * t,
          ),
            o.v.set(-Math.sin(e) * 0.3, r.mode === `sink` ? -0.25 : 0.25 + Math.random() * 0.35, Math.cos(e) * 0.3),
            (o.a = e);
        }
        (o.life += e),
          r?.mode === `sink` &&
            (V.copy(r.at)
              .sub(o.p)
              .multiplyScalar(1.4 * e),
            o.p.add(V)),
          o.p.addScaledVector(o.v, e),
          r?.mode === `swirl` && ((o.v.x += -o.v.z * e * 2), (o.v.z += o.v.x * e * 2)),
          (t[a * 3] = o.p.x),
          (t[a * 3 + 1] = o.p.y),
          (t[a * 3 + 2] = o.p.z),
          (n[a] = o.life < o.max ? Math.sin(Math.PI * k(o.life / o.max)) : 0);
      }
      (this.magic.geometry.attributes.position.needsUpdate = !0),
        (this.magic.geometry.attributes.aAlpha.needsUpdate = !0);
    }
    update(e, t) {
      this.guide?.tick(e);
      let n = this.G,
        r = n.player.position.z < -167;
      if (
        (r !== this.outdoors && ((this.outdoors = r), n.trail.daylight(r), or?.ao && (or.ao.enabled = !r && !or.aoTripped)),
        this.hintState && !this.cinematic && !this.inspector.active)
      ) {
        let e = this.hintState;
        (e.t += t),
          e.t > 24 + e.shown * 30 &&
            (e.shown++,
            n.ui.toast(n.xr.session ? e.text.replace(/click|Click/g, `trigger`) : e.text, 6),
            n.monkey.gesture(`point`));
      }
      if (
        (this.inspector.update(t),
        this.craft.update(e),
        this.updateMotes(e),
        this.sculpture.update(ze.time),
        (this.trailAcc = (this.trailAcc || 0) + t),
        this.trailTarget && this.trailAcc > 0.6)
      ) {
        this.trailAcc = 0;
        let e = n.player.head(new D()),
          t = this.trailTarget.isObject3D ? this.trailTarget.getWorldPosition(new D()) : this.trailTarget.clone(),
          r = [R(e.x, Rt(e.x, e.z), e.z).addScaledVector(n.player.forward(V).setY(0).normalize(), 0.9)],
          i = this.trailOpts.route;
        if (i) {
          let t = i[0];
          for (let n = i[0]; n < i[1]; n++) {
            let r = B(n),
              i = B(n + 1)
                .clone()
                .sub(r);
            R(e.x, 0, e.z).sub(r).dot(i) / i.lengthSq() > 0.6 && (t = n + 1);
          }
          for (let e = t; e <= i[1]; e++) {
            let t = B(e);
            Jn(t, r[r.length - 1]) > 0.8 && r.push(R(t.x, Rt(t.x, t.z), t.z));
          }
        }
        Jn(t, r[r.length - 1]) > 0.4 ? r.push(t) : (r[r.length - 1] = t),
          r.length >= 2 && Jn(r[0], t) > 1.2
            ? (n.trail.setPath(r, {
                height: this.trailOpts.height ?? 0.8,
                ground: this.trailOpts.ground ? Rt : null,
                gaps: this.trailOpts.gaps,
              }),
              n.trail.show(!0))
            : this.trailOpts.keep || n.trail.show(!1);
      }
    }
    async welcome() {
      let e = this.G,
        { monkey: t, genie: n, audio: r } = e,
        i = e.areas;
      r.music(`mus_welcome`, 0.7), r.ambience(`amb_entrance`, 0.9);
      t.placeAt(R(2.35, 0, 9.5), Math.PI * 0.8),
        (t.sitting = !0),
        t.play(`idle`),
        await N(e.settings.reduced ? 0.6 : 2.4),
        t.stand(),
        t.chitter(1),
        t.face(e.player.head(V)),
        await N(0.5),
        await t.walk([R(1.6, 0, 7.9), R(1.25, 0, 7.4)]),
        t.face(e.player.head(V)),
        await t.sit(),
        await N(0.6),
        this.objective(`Approach the lamp`, i.entrance.lamp, { height: 0.6 });
      let u = 0,
        d = z.lamp.clone();
      await Promise.race([
        this.pick({ object: i.entrance.lamp, label: `Touch the lamp`, range: 3.2 }),
        Ke((t) => {
          let n = e.player.head(V),
            r = e.player.forward(new D()),
            i = d.clone().sub(n);
          return (u = i.length() < 3.4 && i.normalize().dot(r) > 0.93 ? u + t : 0), u > 1.6;
        }),
      ]);
      for (let t of this.pending) e.interactions.remove(t);
      this.objective(``, null),
        this.cine(!0, R(0, 2.4, 7)),
        r.play(`sparkle`, { position: d, volume: 0.6 }),
        (this.lampGlow = e.world.slot({ position: d.clone().add(R(0, 0.3, 0.15)), color: `#ffc272`, intensity: 0, distance: 4.5, priority: 2.5 })),
        await P(e.settings.reduced ? 0.6 : 1.8, (e) => {
          this.lampGlow.intensity = 6 * e;
        }),
        this.motes(d.clone().add(R(0.12, 0.08, 0)), `rise`, 50),
        t.look(R(0, 2.2, 7)),
        (t.lookPlayer = !1),
        await N(1.6),
        P(3, (e) => {
          this.lampGlow.intensity = 6 * (1 - e);
        }).then(() => e.world.removeSlot(this.lampGlow)),
        await n.appear(R(0.1, 1.02, 7), R(0.15, 0.95, 7)),
        this.motes(null),
        t.gesture(`surprised`),
        await N(0.6),
        await this.say(`welcome1`, `welcome`),
        await this.say(`welcome2`),
        t.look(null),
        (t.lookPlayer = !0),
        (n.faceTarget = t.root.position.clone().add(R(0, 0.5, 0))),
        n.gesture(`present`),
        await N(0.9),
        t.look(n.root.position.clone().add(R(0, 1.7, 0))),
        await t.gesture(`excited`),
        (n.faceTarget = null),
        t.look(null),
        await this.say(`welcome3`),
        t.stand(),
        await t.gesture(`beckon`),
        n.gesture(`bow`),
        await N(2.6),
        await n.vanish(z.lamp.clone().add(R(0.1, 0, 0))),
        e.nav.open(`soukArch`),
        r.play(`door_open`, { position: z.soukArch.clone().add(R(0, 2, 0)), volume: 0.4 }),
        this.cine(!1),
        this.objective(`Follow your guide into the souk`, null),
        this.trail(B(5), { route: [0, 5] }),
        await Promise.race([
          t
            .walk([B(2), B(3), B(4), R(0.5, 0, -0.8)], { lead: { wait: 6, resume: 3.5 } })
            .then(() => t.face(e.player.head(V))),
          Ge(() => e.player.position.z < 1.6),
        ]),
        await Ge(() => e.player.position.z < 1.4);
    }
    async souk() {
      let e = this.G,
        { monkey: t, audio: n } = e,
        r = e.areas.souk;
      this.save(`souk`),
        e.nav.open(`soukArch`),
        n.music(`mus_souk`, 0.7),
        n.ambience(`amb_souk`, 0.9),
        this.objective(`Follow the monkey through the souk`, B(10), { route: [4, 10] }),
        await t.walk([B(5), R(-2.2, 0, -8.75)], { lead: { wait: 6, resume: 3.6 } });
      let i = r.brassPieces[0];
      i &&
        (t.face(i.getWorldPosition(V)),
        t.look(i.getWorldPosition(new D())),
        await N(0.4),
        t.gesture(`reach_touch`),
        await N(1),
        n.play(`place_click`, { position: i.getWorldPosition(new D()), volume: 0.4 }),
        P(1.2, (e) => {
          i.rotation.y = e * 1.4;
        }),
        await N(1.6),
        t.look(null),
        this.hint(`Look closer at anything that catches your eye.`, 4)),
        t.face(e.player.head(V)),
        t.look(e.player.head(new D())),
        await N(1.1),
        t.look(null),
        await t.walk([B(7), B(8)], { lead: { wait: 6, resume: 3.6 } });
      let a = r.shimmer[0] || R(3, 1, -17);
      this.motes(a, `swirl`, 30),
        n.play(`sparkle`, { position: a, volume: 0.5 }),
        t.face(a),
        t.look(a),
        await t.gesture(`look_around`),
        await N(0.8),
        this.motes(null),
        t.look(e.player.head(new D())),
        await N(0.9),
        t.look(null),
        await t.walk([B(9), B(10), B(11)], { lead: { wait: 6, resume: 3.6 } }),
        await this.near(B(11), 4.5);
    }
    async carpet() {
      let e = this.G,
        { monkey: t, audio: n, player: r } = e,
        i = e.areas.courtyard.carpet;
      e.nav.open(`soukArch`),
        n.music(`mus_souk`, 0.7),
        (this.guide.boarding = t.walk([B(11)], { run: !0 }).then(async () => {
          (this.guide.boarding = null), await this.guide.board(), t.gesture(`beckon`);
        })),
        this.objective(`Step onto the flying carpet`, i, { height: 0.4 }),
        await Promise.race([
          Ge(() => {
            let e = r.head(V);
            return Math.abs(e.x - i.position.x) < 1.15 && Math.abs(e.z - i.position.z) < 1.6;
          }),
          this.pick({ object: i, label: `Board the carpet`, range: 4 }),
        ]);
      for (let t of this.pending) e.interactions.remove(t);
      this.objective(``, null), this.cine(!0), await this.guide.whenBoarded();
      let a = !!e.xr.session;
      (r.mount = { object: i, offset: R(0, 0.02, 0.55) }),
        a
          ? (r.head(V), (r.rig.position.y = i.position.y))
          : P(1.2, (t) => {
              e.camera.position.y = 1.62 - t * 0.5;
            }),
        this.look(R(0, 3, -60), 1.2, 3),
        n.play(`carpet_rise`, { volume: 0.8 }),
        n.ambience(`amb_flight`, 0.9),
        n.music(`mus_souk`, 0.9),
        e.xr.pulseAll(0.35, 120),
        (this.musicLock = !0),
        e.world.setOverride([`courtyard`, `valley`, `dock`]),
        (i.userData.flutter.value = 0.4);
      let o = new Le(
        [
          z.carpet.clone(),
          R(0, 1.3, -48.5),
          R(0, 2.6, -52.5),
          R(0, 3.4, -57),
          R(0.8, 4.2, -63),
          R(-0.4, 4.4, -70),
          R(0.6, 4.3, -78),
          R(-0.3, 4.4, -86),
          R(0.2, 4, -93),
          R(0, 2.6, -100),
          R(0, 1.2, -105.5),
          z.dockLanding.clone(),
        ],
        !1,
        `centripetal`,
      );
      o.getLength();
      let s = e.settings.reduced ? 16 : 44,
        c = {};
      await P(
        s,
        (e) => {
          let r = e;
          o.getPointAt(r, i.position), this.guide.followFlight(o, r);
          let a = o.getPointAt(Math.min(1, r + 0.01));
          r < 0.99 && (i.rotation.y = Math.atan2(-(a.x - i.position.x), -(a.z - i.position.z)) * 0.6),
            r > 0.06 && !c.a && ((c.a = !0), t.gesture(`look_around`)),
            r > 0.3 && !c.b && ((c.b = !0), t.look(R(15, 8, -80)), t.gesture(`point`)),
            r > 0.42 && !c.c && ((c.c = !0), t.look(null), n.play(`cloth_flutter`, { volume: 0.6 })),
            r > 0.62 && !c.d && ((c.d = !0), n.play(`cloth_flutter`, { volume: 0.5 })),
            r > 0.8 && !c.e && ((c.e = !0), t.gesture(`excited`));
        },
        (e) => He(e),
      ),
        (i.rotation.y = 0),
        (i.userData.flutter.value = 0.15),
        n.play(`carpet_land`, { volume: 0.8 }),
        e.xr.pulseAll(0.3, 90),
        (this.musicLock = !1),
        e.world.setOverride(null),
        await N(0.6),
        (r.mount = null);
      let l = R(0, 0, -107.4);
      a
        ? (r.head(V), (r.rig.position.x += l.x - V.x), (r.rig.position.z += l.z - V.z), (r.rig.position.y = 0))
        : (r.rig.position.set(l.x, 0, l.z),
          P(0.8, (t) => {
            e.camera.position.y = 1.12 + t * 0.5;
          })),
        (r.groundY = 0),
        (this.guide.flying = !1),
        this.cine(!1),
        this.onArea(`dock`),
        await t.gesture(`look_around`);
    }
    async workshop() {
      let e = this.G,
        { monkey: t, audio: n } = e,
        r = e.areas.workshop,
        i = e.areas.dock;
      n.music(`mus_souk`, 0.6), n.ambience(`amb_souk`, 0.8);
      let a = !0;
      (async () => {
        for (; a; )
          n.play(`hammer_${1 + ((Math.random() * 3) | 0)}`, {
            position: R(0, 1.5, -119),
            volume: 0.35,
            rate: 0.9 + Math.random() * 0.2,
          }),
            await N(0.5 + Math.random() * 1.2);
      })(),
        this.objective(`Follow the sound of hammers`, z.workshopDoor, { route: [13, 15] }),
        await t.walk([R(0.6, 0, -114.5), R(0.8, 0, -116.6)], { lead: { wait: 6, resume: 3.5 } }),
        t.face(e.player.head(V)),
        t.gesture(`point`),
        await this.near(z.workshopDoor, 4.4),
        (a = !1),
        e.world.setHidden(`workshop`, !1),
        n.play(`door_open`, { position: z.workshopDoor.clone().add(R(0, 1.5, 0)), volume: 0.8 }),
        await P(2.2, (e) => i.door.open(e)),
        e.nav.open(`workshopDoor`),
        this.objective(`Watch the artisans at work`, null),
        await t.walk([B(16), R(-2.6, 0, -123.4)], { lead: { wait: 6, resume: 3.6 } });
      let o = r.stations[0];
      t.face(o.pos), t.look(o.pos.clone().add(R(0, 0.1, 0))), await N(2.5), t.look(null);
      let s = {
          shaping: `Shaping — thin gold is coaxed into petals with a small hammer.`,
          engraving: `Engraving — every leaf vein is cut by hand with a graver.`,
          setting: `Setting — tiny claws are pushed over a pearl to hold it for a lifetime.`,
        },
        c = (this.visitedStations ||= new Set());
      if (!this.stationReactors)
        for (let t of (this.stationReactors = r.stations))
          e.interactions.react({
            position: t.pos,
            radius: 2.4,
            update: (e) => {
              e > 0.2 && !c.has(t.label) && this.chapter === `workshop` && (c.add(t.label), this.hint(s[t.label], 5));
            },
          });
      await t.walk([R(1.6, 0, -125.4), R(0.9, 0, -126.2)], { lead: { wait: 6, resume: 3.6 } }),
        t.face(z.bench),
        t.gesture(`point`),
        this.objective(`Join the craft at the central bench`, z.craftStand, { height: 0.5 }),
        await this.near(z.craftStand, 1.5),
        this.objective(``, null),
        e.trail.show(!1),
        this.look(R(0, 0.95, -127.6), 2, 2),
        t.face(z.bench),
        t.look(R(0, 1, -127.5)),
        await this.craft.play(this),
        t.look(null),
        t.face(e.player.head(V)),
        await t.gesture(`excited`),
        this.objective(`The same cuff… on the doorway`, null);
      let l = r.motif.getWorldPosition(new D());
      this.look(l, 1.4, 3),
        n.play(`lantern_on`, { position: l, volume: 0.8 }),
        this.motes(l, `swirl`, 30),
        await P(2.2, (e) => this.setMotifGlow(e)),
        t.look(l),
        await N(1.2),
        this.motes(null),
        e.world.setHidden(`gallery`, !1),
        n.play(`door_open`, { position: z.motifDoor.clone().add(R(0, 1.5, 0)), volume: 0.8 }),
        await P(2.4, (e) => r.motifDoor.open(e)),
        e.nav.open(`motifDoor`),
        t.look(null),
        this.objective(`Enter the jewellery quarter`, B(22), { route: [18, 22] }),
        t.walk([B(18), B(19), B(20), B(21), B(22), R(0.9, 0, -141)], { lead: { wait: 6, resume: 3.6 } }),
        await Ge(() => e.player.position.z < -136.3);
    }
    async gallery() {
      let e = this.G,
        { monkey: t, audio: n } = e,
        r = e.areas.gallery;
      e.nav.open(`motifDoor`),
        n.music(`mus_gallery`, 0.7),
        n.ambience(`amb_gallery`, 0.9),
        this.objective(`Explore the collection`, null),
        this.hint(`Approach a niche — select a piece to hold it.`, 4.5);
      let i = 0,
        a = r.displays.map((t, r) => {
          let a = e.interactions.add({
            object: t.obj,
            proxy: 0.2,
            highlight: 0.2,
            label: `Look closer · ${t.name}`,
            range: 3.2,
            objective: r === 0 || r === 3,
            onSelect: (e) => {
              i++,
                (a.done = !0),
                this.inspector.open(t.obj, t, { size: 0.24, ptr: e }),
                n.play(`sparkle`, { volume: 0.25 });
            },
          });
          return a;
        });
      this.galleryIts = a;
      let o = r.displays[0];
      await t.walk([R(0.6, 0, -139.6), o.view.clone().add(R(0.4, 0, 0))]),
        t.face(o.pos),
        t.look(o.pos),
        await N(3),
        t.look(null),
        await Promise.race([Ge(() => i >= 2), N(40), this.near(z.galleryPedestal, 3.2)]),
        this.inspector.active && (await Ge(() => !this.inspector.active)),
        await t.walk([R(0.8, 0, -150), R(0.6, 0, -154.2)], { lead: { wait: 7, resume: 4 } }),
        t.face(z.galleryPedestal),
        t.look(R(0, 1.15, z.galleryPedestal.z)),
        this.objective(`Something on the central pedestal…`, R(0, 0, z.galleryPedestal.z + 1.2), { height: 0.4 }),
        await this.near(z.galleryPedestal, 2.9),
        this.objective(``, null),
        e.trail.show(!1),
        this.cine(!0, R(0, 1.15, z.galleryPedestal.z)),
        n.play(`discovery`, { position: R(0, 1.2, z.galleryPedestal.z), volume: 0.9 }),
        await t.gesture(`surprised`),
        t.face(e.player.head(V)),
        t.look(null),
        await t.gesture(`point`),
        this.objective(`One piece is missing — the ${bn.name}`, null),
        await N(1.2);
      let s = R(0, 1.15, z.galleryPedestal.z);
      this.motes(s, `rise`, 45), t.look(s.clone().add(R(0, 0.8, 0))), await N(2.2), this.motes(null);
      let c = r.lights.find((e) => e.exit);
      e.world.setHidden(`desert`, !1),
        n.play(`door_open`, { position: z.galleryExit.clone().add(R(0, 1.5, 0)), volume: 0.8 }),
        P(3, (e) => {
          r.exitDoor.open(e * 0.9), (c.intensity = 8 * e);
        }),
        this.trail(z.gate, { route: [26, 30], height: 1 }),
        t.look(z.galleryExit.clone().add(R(0, 1.2, 0))),
        this.look(z.galleryExit.clone().add(R(0, 1.6, 0)), 1.2, 3),
        await N(2.6),
        e.nav.open(`galleryExit`),
        this.cine(!1);
      for (let t of a) e.interactions.remove(t);
      this.objective(`Follow the golden trail`, z.gate, { route: [26, 30], height: 1 }),
        t.look(null),
        t.walk([B(26), B(27), B(28), B(29), B(30), B(31)], { lead: { wait: 6, resume: 3.6 } }),
        await Ge(() => e.player.position.z < -166.6);
    }
    async desert() {
      let e = this.G,
        { monkey: t, audio: n } = e;
      e.nav.open(`galleryExit`), n.music(`mus_desert`, 0.75), n.ambience(`amb_desert`, 1);
      let r = { route: [30, 37], height: 0.45, ground: !0 };
      this.objective(`Follow the golden trail across the sand`, R(z.digSpot.x, 0, z.digSpot.z + 1), r),
        await t.walk([B(31)], { lead: { wait: 7, resume: 4 } }),
        t.face(B(33)),
        await t.gesture(`look_around`),
        await t.walk([B(32), B(33)], { lead: { wait: 7, resume: 4 } }),
        this.objective(`The trail has vanished beneath the dunes…`, null),
        e.trail.show(!1),
        await t.gesture(`look_around`),
        await N(1.4),
        this.motes(R(B(34).x, Lt(B(34).x, B(34).z) + 0.1, B(34).z), `rise`, 25),
        n.play(`sparkle`, { position: B(34), volume: 0.5 }),
        t.face(B(34)),
        await t.gesture(`point`),
        this.motes(null),
        this.objective(`There — follow the glimmer`, R(z.digSpot.x, 0, z.digSpot.z + 1), { ...r, route: [33, 37] }),
        await t.walk([B(34), B(35), B(36), B(37)], { lead: { wait: 7, resume: 4 }, run: !1 });
      let i = e.areas.desert.mound,
        a = this.pearlSpot.clone();
      e.trail.show(!1),
        (this.trailTarget = null),
        this.motes(a, `sink`, 50),
        n.play(`trail_loop`, { position: a, volume: 0.5 }),
        await t.walk([R(z.digSpot.x + 0.45, 0, z.digSpot.z + 0.15)], { run: !0 }),
        this.motes(null),
        t.face(a),
        t.look(a),
        this.objective(`He has found something…`, R(z.digSpot.x - 0.3, 0, z.digSpot.z + 1.9), { height: 0.3 }),
        await this.near(z.digSpot, 3.6),
        this.look(a, 1.5, 3),
        t.loop(`dig`);
      let o = !0;
      (async () => {
        for (; o; ) n.playVariant(`dig_`, 3, { position: a, volume: 0.7 }), await N(0.45);
      })(),
        await N(2.5),
        this.objective(`Help him brush away the sand`, i, { height: 0.2 }),
        await this.pick({ object: i, kind: `hold`, holdTime: 1.6, label: `Brush away the sand`, range: 3.2 }),
        this.objective(``, null),
        (o = !1),
        t.play(t.restClip()),
        (this.pearl.visible = !0),
        this.pearl.position.copy(a).add(R(0, -0.05, 0)),
        await P(1.6, (e) => {
          i.scale.set(1 + e * 0.4, 0.32 * (1 - e) + 0.01, 1 + e * 0.4),
            (this.pearl.position.y = a.y - 0.05 + 0.05 * e),
            (this.pearl.material.emissiveIntensity = 0.4 * e);
        }),
        (i.visible = !1),
        n.play(`sparkle`, { position: a, volume: 0.7 });
    }
    async finale() {
      let e = this.G,
        { monkey: t, genie: n, audio: r, player: i } = e,
        a = e.areas.desert;
      r.music(`mus_desert`, 0.6), r.ambience(`amb_desert`, 0.8);
      let o = this.pearlSpot.clone();
      (this.pearl.visible = !0),
        this.cine(!0, o),
        t.face(o),
        t.look(o),
        await N(1),
        await t.gesture(`reach_touch`),
        (this.musicLock = !0),
        r.music(null),
        r.play(`transform_swell`, { position: o, volume: 1 }),
        t.gesture(`surprised`);
      let s = o.clone().add(R(0, 0.45, 0));
      this.motes(s, `swirl`, 40),
        (this.jewel.visible = !0),
        this.jewel.position.copy(s),
        this.jewel.rotation.set(0.12, 0.8, 0),
        this.jewel.scale.setScalar(1),
        cuffAssemble(this.jewelModel, 0),
        (this.finaleLight.off = !1),
        this.finaleLight.position.copy(s).add(R(0, 0.6, 0.5)),
        await P(e.settings.reduced ? 3 : 9, (e) => {
          this.pearl.position.lerpVectors(o, s, A(e * 2)),
            (this.pearl.material.emissiveIntensity = 0.4 + Math.sin(e * Math.PI) * 1.2),
            cuffAssemble(this.jewelModel, k((e - 0.1) / 0.85)),
            (this.jewel.rotation.y = 0.8 * (1 - A(e))),
            (this.finaleLight.intensity = 1 + Math.sin(e * Math.PI) * 6);
        }),
        await P(1.2, (e) => {
          this.pearl.scale.setScalar(Math.max(0.001, 1 - e)),
            (this.finaleLight.intensity = Math.sin(e * Math.PI) * 9 + 1);
        }),
        (this.pearl.visible = !1),
        this.motes(null),
        r.play(`finale_bell`, { position: s, volume: 0.6 }),
        await t.gesture(`excited`),
        this.objective(``, null),
        await P(1.4, (e) => {
          this.jewel.position.lerpVectors(s, this.stageTop.clone().add(R(0, 0.18, 0)), A(e)),
            (this.jewel.rotation.x = 0.12 + e * 0.1),
            this.finaleLight.position.copy(this.jewel.position).add(R(0, 0.8, 0.6));
        }),
        t.walk([R(z.stage.x + 0.75, 0, z.stage.z + 0.55)]).then(() => t.face(this.stageTop)),
        this.look(this.stageTop.clone().add(R(0, 0.6, 0)), 1.4, 3),
        await N(1.8);
      let c = a.lamp.position.clone().add(R(0, 0.2, 0));
      if (
        (this.motes(c, `swirl`, 50),
        r.play(`growth_creak`, { position: c, volume: 0.5 }),
        t.look(c),
        (this.lampGlow = e.world.slot({ position: c.clone().add(R(0, 0.2, 0.15)), color: `#ffc272`, intensity: 0, distance: 4.5, priority: 2.5 })),
        await P(1.8, (e) => {
          this.lampGlow.intensity = 6 * e;
        }),
        this.look(c.clone().add(R(0, 1.6, 0)), 1.2, 4),
        P(3, (e) => {
          this.lampGlow.intensity = 6 * (1 - e);
        }).then(() => e.world.removeSlot(this.lampGlow)),
        await n.appear(c.clone().add(R(0.1, 0, 0)), c),
        this.motes(null),
        n.face(i.head(new D())),
        await this.say(`finale1`, `welcome`),
        await this.say(`finale2`),
        n.face(this.stageTop),
        await this.say(`finale3`, `present`),
        this.look(this.stageTop.clone().add(R(0, 1.8, -0.9)), 1, 4),
        n.gesture(`raise_hand`),
        await this.say(`finale4`),
        r.music(`mus_finale`, 0.9, 2),
        r.play(`growth_creak`, { position: this.stageTop, volume: 0.7 }),
        r.play(`transform_swell`, { position: this.stageTop, volume: 0.8 }),
        (this.sculpture.group.visible = !0),
        this.motes(this.stageTop, `rise`, 40),
        !e.xr.session)
      ) {
        let t = i.position.clone(),
          n = t.clone().sub(this.stageTop).setY(0);
        if (n.length() < 7) {
          let r = this.stageTop.clone().add(n.normalize().multiplyScalar(7.5));
          (r.y = 0),
            P(
              5,
              (n) => {
                let a = t.x + (r.x - t.x) * n,
                  o = t.z + (r.z - t.z) * n;
                i.rig.position.set(a, e.nav.ground(a, o), o), (i.groundY = i.rig.position.y);
              },
              He,
            );
        }
      }
      t.look(this.stageTop.clone().add(R(0, 2, -0.9))),
        await P(
          e.settings.reduced ? 5 : 16,
          (e) => {
            this.sculpture.grow(e), (this.finaleLight.intensity = 3 + e * 4);
          },
          (e) => e,
        ),
        this.motes(null),
        n.face(i.head(new D())),
        await this.say(`finale5`),
        await this.say(`finale6`, `bow`);
      let l = this.stageTop.clone().add(R(0, 0.55, 0));
      r.play(`finale_bell`, { position: l, volume: 0.7 }),
        await P(2.5, (e) => {
          this.jewel.position.lerpVectors(this.stageTop.clone().add(R(0, 0.18, 0)), l, A(e)),
            (this.jewel.rotation.x = 0.22 * (1 - e) + 0.05 * e),
            this.finaleLight.position.copy(this.jewel.position).add(R(0, 0.7, 0.8));
        }),
        this.cine(!1),
        t.look(null);
      let u = !0;
      Ke(
        (e) => (u && (this.jewel.rotation.y += e * 0.35), (this.jewel.position.y = l.y + Math.sin(ze.time) * 0.02), !1),
      ),
        e.ui.subtitle(``, ``),
        (this.titleCard.visible = !0),
        this.titleCard.lookAt(i.head(new D())),
        P(3, (e) => {
          (this.titleCard.material.opacity = e), (this.showShaft.material.uniforms.strength.value = 0.14 * e);
        }),
        this.objective(`${bn.name} · Kavya Potluri`, null),
        e.ui.toast(`Select the jewel to hold it. Explore as long as you like.`, 6),
        e.interactions.add({
          object: this.jewel,
          proxy: 0.25,
          label: `Hold ${bn.name}`,
          range: 3.5,
          onSelect: async (e) => {
            (u = !1), await this.inspector.open(this.jewel, bn, { size: 0.26, ptr: e }), (u = !0);
          },
        }),
        (this.musicLock = !1),
        await N(9),
        n.vanish(c),
        e.autopilot.on
          ? (await N(14), this.start(`welcome`))
          : (e.xr.session
              ? e.ui.toast(`Thank you for visiting. Press B / Y for the menu.`, 8)
              : (document.exitPointerLock?.(), document.getElementById(`ending`).showModal()),
            await Ge(() => !1));
    }
  },
  Xn = new D(),
  Zn = new D(),
  Qn = class {
    constructor(e) {
      (this.G = e), (this.on = !1), (this.t = 0), (this.act = null);
    }
    start() {
      (this.on = !0), (this.G.input.keySource = !0);
    }
    stop() {
      (this.on = !1), this.release(), this.G.input.keys.delete(`KeyW`);
    }
    release() {
      let e = this.G.input.primary;
      e.down && ((e.down = !1), (e.released = !0)), (this.act = null);
    }
    target() {
      let e = this.G.interactions.items.filter(
        (e) => e.objective && !e.done && this.G.interactions.isOn(e) && e.object.visible !== !1,
      );
      return e[e.length - 1] || null;
    }
    update(e) {
      if (((this.dt = e), !this.on)) return;
      let { director: t, player: n, input: r, monkey: i } = this.G;
      if ((r.keys.delete(`KeyW`), (this.t += e), t.inspector.active)) {
        (this.inspectT = (this.inspectT || 0) + e), this.inspectT > 4.5 && ((this.inspectT = 0), t.inspector.close());
        return;
      }
      if (t.cinematic || n.mount) {
        this.act?.kind !== `drag` && this.release();
        return;
      }
      let a = n.head(Xn);
      if (n.attention?.story) return;
      let o = this.target();
      if (o) {
        let t = (o.proxyMesh || o.object).getWorldPosition(Zn);
        if (a.distanceTo(t) > Math.min(2.4, o.range - 0.3)) return this.walkTo(t, 0.9);
        n.lookAt(this.act?.aim || t, 4, 0.5);
        let i = this.G.interactions.hover?.it === o;
        if (
          ((this.act && this.act.it === o) || (this.release(), (this.act = { it: o, t: 0, kind: o.kind })),
          (this.act.t += e),
          this.act.t < 0.9)
        )
          return;
        let s = r.primary;
        if (o.kind === `press`)
          i &&
            !s.down &&
            this.act.t > 1.1 &&
            ((s.down = !0),
            (s.pressed = !0),
            N(0.09).then(() => {
              (s.down = !1), (s.released = !0);
            }),
            (this.act.t = -0.6));
        else if (o.kind === `hold`) (i || s.down) && (s.down || ((s.down = !0), (s.pressed = !0)));
        else if (o.kind === `drag` && o.autopath) {
          let t = o.autopath();
          if (((this.act.u = this.act.u ?? 0), !s.down && i && ((s.down = !0), (s.pressed = !0), (this.act.u = 0)), s.down)) {
            this.act.u = Math.min(1, this.act.u + e * 0.28);
            let r = Math.min(t.length - 1, Math.floor(this.act.u * (t.length - 1)));
            (this.act.aim = t[r]), n.lookAt(t[r], 12, 0.3);
          }
        }
        return;
      }
      this.act && this.release();
      let s = i.position,
        c = Math.hypot(s.x - a.x, s.z - a.z);
      if (i.mount && !this.G.guide?.riding) {
        n.lookAt(Zn.copy(s).setY(s.y + 0.4), 2.5, 0.4);
        return;
      }
      if (i.moving || this.G.guide?.flying || c > 4) {
        let e = this.behind(s, 2.4);
        return this.walkTo(e, 0.4);
      }
      let l = t.trailTarget;
      if (l) {
        let e = l.isObject3D ? l.getWorldPosition(Zn) : l;
        if (Math.hypot(e.x - a.x, e.z - a.z) > 0.7) return this.walkTo(e, 0.6);
      }
      n.lookAt(Zn.copy(s).setY(s.y + 0.5), 2, 0.4);
    }
    behind(e, t) {
      let n = 0,
        r = 0,
        i = 1e9;
      for (let t = 0; t < Pt.length - 1; t++) {
        let [a, o] = Pt[t],
          [s, c] = Pt[t + 1],
          l = s - a,
          u = c - o,
          d = l * l + u * u,
          f = Math.max(0, Math.min(1, ((e.x - a) * l + (e.z - o) * u) / d)),
          p = Math.hypot(a + l * f - e.x, o + u * f - e.z);
        p < i && ((i = p), (n = t), (r = f));
      }
      let a = n,
        o = r,
        s = t;
      for (; s > 0; ) {
        let [e, t] = Pt[a],
          [n, r] = Pt[a + 1],
          i = Math.hypot(n - e, r - t),
          c = o * i;
        if (c >= s || a === 0) {
          let a = Math.max(0, c - s) / i;
          return { x: e + (n - e) * a, z: t + (r - t) * a };
        }
        (s -= c), a--, (o = 1);
      }
      return e;
    }
    walkTo(e, t) {
      let { player: n, input: r } = this.G,
        i = n.head(Xn),
        a = e.x - i.x,
        o = e.z - i.z;
      if (Math.hypot(a, o) < t) return;
      let s = ((((Math.atan2(-a, -o) - n.yaw + Math.PI) % (Math.PI * 2)) + Math.PI * 2) % (Math.PI * 2)) - Math.PI;
      let dt = this.dt || 0.016;
      (n.yaw += Math.max(-1.1 * dt, Math.min(1.1 * dt, s * Math.min(1, dt * 2.4)))),
        (n.pitch += (-0.06 - n.pitch) * Math.min(1, dt * 1.6)),
        (n.attention = null),
        Math.abs(s) < 0.7 && r.keys.add(`KeyW`);
    }
  },
  H = (e) => document.getElementById(e),
  $n = `./`,
  er = new URLSearchParams(location.search),
  tr = null;
try {
  tr = window.localStorage;
} catch {}
var U = {
  music: 0.7,
  sfx: 0.9,
  voice: !1,
  subtitles: !0,
  sensitivity: 1,
  reduced: matchMedia(`(prefers-reduced-motion: reduce)`).matches,
  smoothLocomotion: !0,
  vignette: !0,
  seated: !1,
  quality: /OculusBrowser|Quest|Pico/i.test(navigator.userAgent) ? `low` : `high`,
};
try {
  Object.assign(U, JSON.parse(tr?.getItem(`souk-game-settings-v2`) || `{}`));
} catch {}
var nr = () => {
  try {
    tr?.setItem(`souk-game-settings-v2`, JSON.stringify(U));
  } catch {}
};
er.has(`quality`) && (U.quality = er.get(`quality`));
var rr = H(`world`),
  W = new se({ canvas: rr, antialias: !0, powerPreference: `high-performance` });
(W.outputColorSpace = Oe),
  (W.toneMapping = 4),
  (W.toneMappingExposure = 1),
  (W.shadowMap.enabled = U.quality !== `low`),
  (W.shadowMap.type = 1);
var ir = () => Math.min(devicePixelRatio, +er.get(`dpr`) || (U.quality === `high` ? 2 : U.quality === `medium` ? 1.5 : 1));
W.setPixelRatio(ir()), W.setSize(innerWidth, innerHeight);
var ar = new me(),
  G = new d(68, innerWidth / innerHeight, 0.1, 900),
  or = U.quality === `low` ? null : new wt(W, ar, G, !1),
  sr = new Jt(),
  K = new qe(rr),
  q = new Ze(G, sr);
ar.add(q.rig);
var J = new nt(W, q, sr);
W.xr.setFramebufferScaleFactor(U.quality === `high` ? 1.3 : U.quality === `medium` ? 1.1 : 1), J.attach(ar);
var cr = new ot(),
  lr = new gt(U.quality === `low` ? 170 : 320);
ar.add(lr.points);
var Y = new vt($n);
(Y.musicVol = U.music), (Y.sfxVol = U.sfx), (Y.voice = U.voice);
var X = new St();
(X.subsOn = U.subtitles), ar.add(X.panel, X.menu);
var ur = new S(
  new Se(0.06, 0.6, 48, 1),
  new ie({
    uniforms: { strength: { value: 0 } },
    transparent: !0,
    depthTest: !1,
    depthWrite: !1,
    vertexShader: `varying vec2 vP; void main(){ vP = position.xy; gl_Position = projectionMatrix * modelViewMatrix * vec4(position,1.0); }`,
    fragmentShader: `uniform float strength; varying vec2 vP; void main(){ float r = length(vP); float a = smoothstep(0.22 - strength * 0.12, 0.42 - strength * 0.1, r) * strength; gl_FragColor = vec4(0.03,0.02,0.01, a); }`,
  }),
);
(ur.position.z = -0.25), (ur.renderOrder = 2e3), (ur.frustumCulled = !1), (ur.visible = !1), G.add(ur);
var dr = new D();
cr.onHoverSound = (e, t) => Y.play(`ui_hover`, { volume: t.xr ? 0.35 : 0.25 });
var fr = { id: `mouse`, ray: new e(), primary: !0, down: !1, pressed: !1, released: !1 },
  pr = new le();
q.onStep = (e) => {
  if (!vr || q.mount) return;
  let t = e.z < -168;
  Y.playVariant(t ? `step_sand_` : `step_stone_`, 4, { volume: t ? 0.32 : 0.22, rate: 0.92 + Math.random() * 0.16 });
};
var mr,
  hr,
  gr,
  Z,
  _r = !1,
  vr = !1,
  yr = !1,
  Q = {
    renderer: W,
    scene: ar,
    camera: G,
    player: q,
    nav: sr,
    input: K,
    xr: J,
    interactions: cr,
    trail: lr,
    audio: Y,
    ui: X,
    settings: U,
    saveSettings: nr,
    base: $n,
    clock: ze,
    sched: M,
  };
async function br() {
  let e = (e, t) => {
      (H(`load-status`).textContent = e), t != null && (H(`load-bar`).style.width = `${Math.round(t * 100)}%`);
    },
    t = 0,
    n = (n) => e(n, ++t / 20);
  e(`Polishing the brass…`, 0.02), await Y.init();
  let r = await ft(W, $n, () => n(`Laying the stone…`), U.quality),
    i = new ke(),
    a = async (e, t = !1) => {
      try {
        let t = await i.loadAsync(`${$n}assets/models/${e}.glb`);
        return n(`Waking ${e.replace(/-.*/, ``)}…`), t;
      } catch (e) {
        if (!t) throw e;
        return n(`…`), null;
      }
    },
    o = async (e) => (await a(`${e}-anim`, !0)) || a(e),
    [s, c, l, u, d, f] = await Promise.all([
      a(`lamp`),
      a(`floral-ear-cuff`),
      Promise.resolve(null),
      a(`artisan`),
      o(`monkey`),
      o(`genie`),
    ]),
    kpM = d && upgradeMonkey(d, { M: r, renderer: W, quality: U.quality }),
    p = d?.animations?.length > 2 ? d : null,
    m = d,
    h = f?.animations?.length > 2 ? f : null,
    g = f,
    _ = [];
  try {
    let e = await fetch(`${$n}assets/models/collection/manifest.json`);
    if (e.ok) {
      let t = await e.json();
      _ = (
        await Promise.all(
          t.map(async (e) => {
            if (e.kind) return e;
            try {
              let t = await i.loadAsync(`${$n}assets/models/collection/${e.file}`);
              return { ...e, scene: t.scene };
            } catch {
              return null;
            }
          }),
        )
      ).filter(Boolean);
    }
  } catch {}
  let kpProps = {};
  await Promise.all(
    PROPS.map(async (e) => {
      try {
        kpProps[e] = (await i.loadAsync(`${$n}assets/models/props/${e}.glb`)).scene;
      } catch {}
    }),
  ),
    prepareProps(kpProps, r);
  n(`Arranging the gallery…`);
  let v = (e) => (
      e.scene.traverse((e) => {
        e.isMesh && ((e.castShadow = !0), (e.receiveShadow = !0));
      }),
      e.scene
    ),
    y = { M: r, lamp: v(s), jewel: v(c), jewelSmall: null, artisan: v(u), collection: _, props: kpProps };
  (Q.M = r), (Q.A = y), (mr = new Kt(W, ar, r, U.quality)), (Q.world = mr);
  let b = new Ot(r, null),
    x = [Yt, Zt, tn, rn, an, vn, xn, Cn],
    S = [
      `the entrance hall`,
      `the souk`,
      `the carpet courtyard`,
      `the lower town`,
      `the carpet dock`,
      `the workshop`,
      `the gallery`,
      `the desert`,
    ];
  for (let n = 0; n < x.length; n++)
    e(`Building ${S[n]}…`, (t + n) / 20), await new Promise((e) => setTimeout(e, 0)), mr.add(x[n](b, r, y, Q));
  (Q.areas = Object.fromEntries(mr.areas)),
    upgradeDesert(Q.areas.desert, { M: r, renderer: W, scene: ar, quality: U.quality, G: Q }),
    (hr = new An(p || m, !!p, Q)),
    (gr = new Fn(h || g, !!h, Q)),
    ar.add(hr.root, gr.root),
    (Q.monkey = hr),
    (Q.genie = gr),
    (Z = new Yn(Q)),
    (Q.director = Z),
    (Q.autopilot = new Qn(Q));
  for (let e of mr.areas.values()) e.group.visible = !0;
  e(`Lighting the lanterns…`, 0.96), q.teleport(z.spawn.x, z.spawn.z, 0), mr.update(0.016, 0, q.head(new D()), !1);
  try {
    await W.compileAsync(ar, G);
  } catch {
    W.compile(ar, G);
  }
  (mr.current = null), (_r = !0);
}
function xr() {
  (vr = !1), (K.enabled = !1), (H(`title`).hidden = !1), (H(`hud`).hidden = !0);
  let e = Z.saved();
  (H(`btn-continue`).hidden = !e),
    e && (H(`continue-label`).textContent = `· ${Wn.find((t) => t.id === e)?.title || ``}`),
    Z.attract(),
    H(`veil`).classList.add(`clear`);
}
async function Sr(e) {
  Y.unlock(),
    (H(`title`).hidden = !0),
    (H(`hud`).hidden = !1),
    document.querySelectorAll(`dialog[open]`).forEach((e) => e.close()),
    (vr = !0),
    (yr = !1),
    (K.enabled = !0),
    J.session || rr.requestPointerLock?.()?.catch?.(() => {}),
    H(`veil`).classList.remove(`clear`),
    await new Promise((e) => setTimeout(e, 650)),
    Z.start(e).catch((e) => console.error(e)),
    await new Promise((e) => setTimeout(e, 120)),
    H(`veil`).classList.add(`clear`);
}
function Cr(e = !yr) {
  vr &&
    !J.session &&
    ((yr = e),
    e
      ? (K.reset(), H(`pause`).showModal(), (H(`btn-pause-vr`).hidden = !J.supported))
      : (H(`pause`).close(), rr.requestPointerLock?.()?.catch?.(() => {})));
}
K.onPause = () => {
  document.querySelector(`dialog[open]`) || Cr(!0);
};
function wr() {
  if (X.menu.visible) {
    (X.menu.visible = !1), cr.remove(X.menuIt);
    return;
  }
  X.drawMenu([
    { label: `Resume`, act: () => {} },
    { label: `Skip this scene`, act: () => Z.skipScene() },
    { label: `Restart chapter`, act: () => Z.start(Z.chapter) },
    { label: `Next chapter`, act: () => Z.start(Z.nextChapter()) },
    { label: `Exit VR`, act: () => J.session?.end() },
  ]);
  let e = G.getWorldDirection(new D());
  (X.menuYaw = Math.atan2(e.x, e.z)),
    (X.menu.visible = !0),
    (X.menuIt = cr.add({
      object: X.menu,
      label: `Select`,
      highlight: !1,
      range: 4,
      onSelect: (e, t) => {
        let n = X.menuPick(t.uv);
        n && ((X.menu.visible = !1), cr.remove(X.menuIt), n.act());
      },
    }));
}
J.onMenu = wr;
var Tr = !1;
(J.onStart = () => {
  J.session.addEventListener(`visibilitychange`, () => {
    (Tr = J.session?.visibilityState !== `visible`), Tr && Y.stopSpeech();
  }),
    (H(`hud`).hidden = !0),
    (X.panel.visible = !0),
    (X.snapPanel = !0),
    q.camera.position.set(0, 0, 0),
    q.camera.rotation.set(0, 0, 0),
    (q.rig.rotation.y = q.yaw),
    (q.rig.position.y = q.groundY),
    W.xr.setFoveation(U.quality === `low` ? 0.8 : 0.4),
    U.quality !== `high` && (W.shadowMap.enabled = !1),
    vr || Sr(Z.saved() || `welcome`);
}),
  (J.onEnd = () => {
    (Tr = !1),
      (W.shadowMap.enabled = U.quality !== `low`),
      (H(`hud`).hidden = !vr),
      q.camera.position.set(0, q.mount ? 1.12 : 1.62, 0),
      (q.yaw = q.rig.rotation.y),
      (X.menu.visible = !1);
  });
var Er = 0,
  Dr = 0,
  $ = { acc: 0, frames: 0, scale: 1 };
function Or(e) {
  if (J.session || kr || (($.acc += e), $.frames++, $.acc < 2)) return;
  let t = $.frames / $.acc;
  ($.acc = 0), ($.frames = 0);
  let n = $.scale;
  t < 48 ? ($.scale = Math.max(0.6, $.scale - 0.1)) : t > 58 && $.scale < 1 && ($.scale = Math.min(1, $.scale + 0.05)),
    $.scale !== n && (W.setPixelRatio(ir() * $.scale), or?.resize());
}
var kr = !1,
  Ar = 0,
  jr = new de();
function Mr(e, t = !0) {
  if (kr && e !== null) return;
  e === null && (e = Ar);
  let n = e / 1e3,
    r = Er ? Math.min(0.05, n - Er) : 0.016;
  if (((Er = n), !_r)) return;
  let i = !!J.session;
  (Dr = (K.skip || J.skipHeld) && Z.cinematic && vr && !yr ? Dr + r : 0),
    (ze.scale = Dr > 0.6 ? 8 : 1),
    X.skip(Z.cinematic && vr && !i, Math.min(1, Dr / 0.6));
  let a = (yr || Tr ? 0 : r) * ze.scale;
  (ze.rdt = r),
    (ze.dt = a),
    (ze.real = n),
    (ze.time += a),
    Dr > 0.6 && Y.stopSpeech(),
    vr && !yr && Q.autopilot.update(r),
    vr && !yr && (i ? (J.update(r, U, cr), q.updateXR(r, J.stick, U)) : q.updateDesktop(r, K, U));
  let o = q.head(new D()),
    s = [];
  vr &&
    !yr &&
    (i
      ? (s = J.pointers())
      : (pr.setFromCamera(K.centred || K.locked ? new de(0, 0) : K.mouse, G),
        fr.ray.copy(pr.ray),
        (fr.down = K.primary.down),
        (fr.pressed = K.primary.pressed),
        (fr.released = K.primary.released),
        (s = [fr]))),
    cr.update(r, s, o);
  let c = cr.hover;
  if (c && vr) {
    let e = c.it;
    X.prompt(typeof e.label == `function` ? e.label() : e.label, e.kind), X.hold(cr.holdProgress);
  } else X.prompt(``), X.hold(0);
  K.holdingTarget = !!c && K.primary.down;
  for (let e of s) (e.pressed = !1), (e.released = !1);
  if (
    (M.update(a),
    Z.update(a, r),
    hr.update(a, o),
    gr.update(a, o),
    mr.update(r, ze.time, o, i),
    lr.update(a, ze.time),
    X.updatePanel(r, G, i),
    !i)
  ) {
    let e = Z.cinematic ? 56 : 68;
    Math.abs(G.fov - e) > 0.05 && ((G.fov += (e - G.fov) * Math.min(1, r * 0.9)), G.updateProjectionMatrix());
  }
  let l = r > 0 ? q.rig.position.distanceTo(dr) / r : 0;
  dr.copy(q.rig.position);
  let u = i && U.vignette ? Math.min(0.85, l * 0.32) : 0;
  (ur.material.uniforms.strength.value += (u - ur.material.uniforms.strength.value) * Math.min(1, r * 6)),
    (ur.visible = i && ur.material.uniforms.strength.value > 0.01),
    Y.listener(G),
    K.endFrame();
  let d = i ? W.xr.getCamera() : null,
    f = d?.cameras?.[0]?.viewport?.w || W.getDrawingBufferSize(jr).y,
    p = d?.cameras?.[0] ? 2 * Math.atan(1 / d.cameras[0].projectionMatrix.elements[5]) : Re.degToRad(G.fov);
  (ct.pointScale.value = f / (2 * Math.tan(p / 2))), t && (Or(r), or && !i ? or.render(ze.time) : W.render(ar, G));
}
function Nr() {
  (G.aspect = innerWidth / innerHeight),
    G.updateProjectionMatrix(),
    W.setPixelRatio(ir() * $.scale),
    W.setSize(innerWidth, innerHeight),
    or?.resize();
}
addEventListener(`resize`, Nr);
for (let e of [`pointerdown`, `keydown`, `touchstart`]) addEventListener(e, () => Y.unlock(), { passive: !0 });
function Pr() {
  (H(`btn-begin`).onclick = () => {
    Z.clearSave(), Sr(`welcome`);
  }),
    (H(`btn-continue`).onclick = () => Sr(Z.saved()));
  let e = () => {
    let e = H(`chapter-list`);
    e.replaceChildren(),
      Wn.forEach((t, n) => {
        let r = document.createElement(`li`),
          i = document.createElement(`button`);
        (i.innerHTML = `<b>${String(n + 1).padStart(2, `0`)}</b><span>${t.title}</span><small>${t.blurb}</small>`),
          (i.onclick = () => {
            H(`chapters`).close(), H(`pause`).close(), Sr(t.id);
          }),
          r.append(i),
          e.append(r);
      }),
      H(`chapters`).showModal();
  };
  (H(`btn-chapters`).onclick = e), (H(`btn-pause-chapters`).onclick = e);
  let t = () => H(`settings`).showModal();
  (H(`btn-settings`).onclick = t),
    (H(`btn-pause-settings`).onclick = t),
    (H(`btn-resume`).onclick = () => Cr(!1)),
    (H(`btn-title`).onclick = () => {
      H(`pause`).close(), (yr = !1), document.exitPointerLock?.(), xr();
    }),
    (H(`btn-stay`).onclick = () => {
      H(`ending`).close(), rr.requestPointerLock?.()?.catch?.(() => {});
    }),
    (H(`btn-again`).onclick = () => {
      H(`ending`).close(), Z.clearSave(), Sr(`welcome`);
    }),
    document.querySelectorAll(`[data-close]`).forEach((e) => (e.onclick = () => e.closest(`dialog`).close())),
    H(`pause`).addEventListener(`cancel`, (e) => {
      e.preventDefault(), Cr(!1);
    });
  let n = (e, t, n) => {
      let r = H(e);
      (r.value = U[t]),
        (r.oninput = () => {
          (U[t] = Number(r.value)), n?.(), nr();
        });
    },
    r = (e, t, n) => {
      let r = H(e);
      (r.checked = !!U[t]),
        (r.onchange = () => {
          (U[t] = r.checked), n?.(), nr();
        });
    };
  n(`set-music`, `music`, () => {
    (Y.musicVol = U.music), Y.applyVolumes();
  }),
    n(`set-sfx`, `sfx`, () => {
      (Y.sfxVol = U.sfx), Y.applyVolumes();
    }),
    n(`set-sens`, `sensitivity`),
    r(`set-voice`, `voice`, () => {
      (Y.voice = U.voice), U.voice && Y.say(`test`, `Welcome, traveller.`);
    }),
    r(`set-subs`, `subtitles`, () => {
      X.subsOn = U.subtitles;
    }),
    r(`set-reduced`, `reduced`),
    r(`set-smooth`, `smoothLocomotion`),
    r(`set-vignette`, `vignette`),
    r(`set-seated`, `seated`);
  let i = H(`set-quality`);
  (i.value = U.quality),
    (i.onchange = () => {
      (U.quality = i.value), nr(), X.toast(`Reload to apply the new detail level.`);
    });
  let a = async () => {
    Y.unlock();
    try {
      await J.enter();
    } catch (e) {
      X.toast(`Could not start VR on this device.`), console.warn(e);
    }
  };
  (H(`btn-vr`).onclick = a),
    (H(`btn-pause-vr`).onclick = () => {
      H(`pause`).close(), (yr = !1), a();
    }),
    X.hold(0),
    K.touch && (document.body.classList.add(`touch`), (K.wantsLock = !1));
}
async function Fr() {
  try {
    await br(), Pr();
    let e = await J.check();
    (H(`btn-vr`).disabled = !e),
      (H(`btn-vr`).textContent = e ? `Enter VR` : isSecureContext ? `VR headset not detected` : `VR needs HTTPS`),
      H(`btn-vr`).classList.toggle(`available`, e),
      W.setAnimationLoop(Mr),
      (H(`loading`).hidden = !0),
      er.has(`autoplay`)
        ? ((K.wantsLock = !1), Sr(er.get(`chapter`) || `welcome`), Q.autopilot.start())
        : er.has(`chapter`)
          ? Sr(er.get(`chapter`))
          : xr();
  } catch (e) {
    console.error(e),
      (H(`load-status`).textContent = `The world could not load. Try again, or use a browser with WebGL 2.`),
      (H(`retry`).hidden = !1),
      (H(`retry`).onclick = () => location.reload());
  }
}
Fr(),
  (window.__souk = {
    G: Q,
    get ready() {
      return _r;
    },
    get playing() {
      return vr;
    },
    start: Sr,
    pause: Cr,
    async advance(e, t = 30, n = {}) {
      (kr = !0), (Ar ||= performance.now());
      let r = Math.round(e * t);
      for (let e = 0; e < r; e++) {
        (Ar += 1e3 / t), n.skip && (K.skip = !0), Mr(null, e === r - 1);
        for (let e = 0; e < 8; e++) await Promise.resolve();
      }
      return (K.skip = !1), ze.time;
    },
    async follow(e, t = () => hr.position, n = 2.4, r = 30) {
      (kr = !0), (Ar ||= performance.now());
      let i = Math.round(e * r);
      for (let e = 0; e < i; e++) {
        let a = t(),
          o = q.position,
          s = Math.hypot(a.x - o.x, a.z - o.z);
        (q.yaw = Math.atan2(-(a.x - o.x), -(a.z - o.z))),
          (q.attention = null),
          s > n ? K.keys.add(`KeyW`) : K.keys.delete(`KeyW`),
          (Ar += 1e3 / r),
          Mr(null, e === i - 1);
        for (let e = 0; e < 8; e++) await Promise.resolve();
      }
      return K.keys.delete(`KeyW`), ze.time;
    },
    live() {
      (kr = !1), (Er = 0);
    },
    autoplay(e = !0) {
      e ? Q.autopilot.start() : Q.autopilot.stop();
    },
  });
