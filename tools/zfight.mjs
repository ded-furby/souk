// Z-fighting detector. Walks viewpoints along the story route (and the carpet flight), renders each one twice with
// a minutely different camera near plane — the picture is geometrically identical, only depth-test ties can change —
// and reports where pixels differ, with the two coplanar surfaces found by a ray through the worst spot.
// usage: node tools/zfight.mjs [--page index.html] [--chapter finale] [--quality high] [--shots <dir>] [--step 2]
import { chromium } from './jewellery/node_modules/playwright-core/index.mjs';
import fs from 'node:fs';

const args = process.argv.slice(2);
const opt = (k, d) => { const i = args.indexOf(`--${k}`); return i < 0 ? d : args[i + 1]; };
const page_ = opt('page', 'index.html'), chapter = opt('chapter', 'finale'), quality = opt('quality', 'high'), shots = opt('shots', null), step = +opt('step', 2);
if (shots) fs.mkdirSync(shots, { recursive: true });

// The guide route (src/app.js `Pt`) — walked both ways, looking a little down at the floor.
const ROUTE = [[0, 12.6], [1.7, 9.4], [1.6, 5.8], [0, 3.6], [0, 1.6], [0, -4], [0.6, -10], [-0.5, -16], [0.4, -22], [0, -28], [0, -34.5], [0, -40], [0, -44.6],
  [0, -107.6], [0, -113.5], [0, -117.8], [0, -121.5], [0, -125.6], [1.95, -127.5], [1.6, -131.6], [0, -134.2], [0, -136.6], [0, -139.5], [0, -145], [0, -150.6],
  [0, -153.8], [1.5, -156.5], [0.4, -159.6], [0, -161.8], [0, -165], [0, -168.6], [-1.6, -176], [-3.2, -184], [0.5, -193], [6.5, -201], [9.2, -209], [7.6, -216], [5.6, -221.2], [5.3, -222.6]];
const views = [];
for (let i = 0; i < ROUTE.length - 1; i++) {
  const [ax, az] = ROUTE[i], [bx, bz] = ROUTE[i + 1], L = Math.hypot(bx - ax, bz - az);
  if (az > -45 && bz < -100) { // the flight: high over the valley, towards the dock and back at the courtyard
    for (let z = -50; z > -104; z -= 6) for (const back of [0, 1]) views.push({ x: 0.3, y: 4.2, z, yaw: back ? Math.PI : 0, pitch: -0.22, tag: 'flight' });
    continue;
  }
  const yaw = Math.atan2(-(bx - ax), -(bz - az));
  for (let s = 0; s < L; s += step) for (const back of [0, 1])
    views.push({ x: ax + ((bx - ax) * s) / L, z: az + ((bz - az) * s) / L, yaw: yaw + back * Math.PI, pitch: -0.28, tag: 'walk' });
}

const browser = await chromium.launch({ channel: 'chrome', headless: true, args: ['--use-angle=metal', '--enable-gpu', '--ignore-gpu-blocklist'] });
const page = await browser.newPage({ viewport: { width: 1280, height: 720 } });
const errs = [];
page.on('pageerror', (e) => errs.push(e.message));
await page.goto(`http://127.0.0.1:8765/${page_}?chapter=${chapter}&quality=${quality}&dpr=1`);
await page.waitForFunction(() => window.__souk?.ready && window.__souk?.playing, null, { timeout: 90000 });
await page.waitForTimeout(1500);
await page.evaluate(() => window.__souk.advance(1, 30));

const found = [];
for (const [n, v] of views.entries()) {
  const r = await page.evaluate(async (v) => {
    const G = window.__souk.G, R = G.renderer, cam = G.camera, P = G.player;
    P.teleport(v.x, v.z, v.yaw);
    P.pitch = v.pitch; P.attention = null; P.mount = null;
    await window.__souk.advance(0.15, 20);
    const y0 = P.rig.position.y;
    if (v.y != null) P.rig.position.y = v.y - 1.62;
    P.rig.rotation.y = v.yaw; cam.rotation.set(v.pitch, 0, 0);
    G.world.update(0, G.clock.time, P.head(new P.position.constructor()), false);
    const W = 480, H = 270, c2 = (window.__zc ||= Object.assign(document.createElement('canvas'), { width: W, height: H })), ctx = c2.getContext('2d', { willReadFrequently: true });
    const near0 = cam.near;
    const grab = (near) => { cam.near = near; cam.updateProjectionMatrix(); R.setRenderTarget(null); R.render(G.scene, cam); ctx.drawImage(R.domElement, 0, 0, W, H); return ctx.getImageData(0, 0, W, H).data; };
    const a = grab(near0), a2 = grab(near0), b = grab(near0 * 1.006), c = grab(near0 * 0.994);
    cam.near = near0; cam.updateProjectionMatrix();
    let count = 0, noise = 0, sx = 0, sy = 0, x0 = W, x1 = 0, yy0 = H, yy1 = 0;
    for (let i = 0, p = 0; i < a.length; i += 4, p++) {
      const d = (u, w) => Math.max(Math.abs(u[i] - w[i]), Math.abs(u[i + 1] - w[i + 1]), Math.abs(u[i + 2] - w[i + 2]));
      if (d(a, a2) > 20) { noise++; continue; }
      if (Math.max(d(a, b), d(a, c)) > 20) { const x = p % W, y = (p / W) | 0; count++; sx += x; sy += y; x0 = Math.min(x0, x); x1 = Math.max(x1, x); yy0 = Math.min(yy0, y); yy1 = Math.max(yy1, y); }
    }
    let hits = null;
    if (count > 25) {
      // median flagged pixel -> ray -> the first surfaces it meets
      const V3 = P.position.constructor, px = [];
      for (let i = 0, p = 0; i < a.length; i += 4, p++) if (Math.max(Math.abs(a[i] - b[i]), Math.abs(a[i] - c[i])) > 20) px.push(p);
      const mid = px[px.length >> 1], mx = ((mid % W) + 0.5) / W * 2 - 1, my = -((((mid / W) | 0) + 0.5) / H * 2 - 1);
      cam.updateMatrixWorld(true);
      const o = new V3().setFromMatrixPosition(cam.matrixWorld), dir = new V3(mx, my, 0.5).unproject(cam).sub(o).normalize();
      const Ray = G.xr.hands?.[0]?.pointer?.ray?.constructor;
      if (Ray) {
        const rc = { ray: new Ray(o, dir), near: 0, far: 400, params: { Points: { threshold: 0 }, Line: { threshold: 0 } }, camera: cam };
        const list = [];
        G.scene.traverseVisible((m) => { if (m.isMesh && !m.isInstancedMesh && !m.isSkinnedMesh && m.material && !m.material.transparent) { try { m.raycast(rc, list); } catch {} } });
        list.sort((p, q) => p.distance - q.distance);
        const area = (m) => { for (let q = m; q; q = q.parent) if (q.parent?.name === 'World') return q.name; return '?'; };
        hits = list.slice(0, 4).map((h) => ({ d: +h.distance.toFixed(4), at: h.point.toArray().map((t) => +t.toFixed(3)), mesh: h.object.name, mat: h.object.material.name, area: area(h.object) }));
      }
    }
    P.rig.position.y = y0;
    return { count, noise, cx: count ? Math.round(sx / count) : 0, cy: count ? Math.round(sy / count) : 0, box: [x0, yy0, x1, yy1], hits };
  }, v);
  if (r.count > 25) {
    found.push({ n, ...v, ...r });
    console.log(`view ${n} ${v.tag} x=${v.x.toFixed(1)} z=${v.z.toFixed(1)} yaw=${v.yaw.toFixed(2)}: ${r.count} px differ (box ${r.box}) noise=${r.noise}`);
    for (const h of (r.hits || []).slice(0, 3)) console.log(`     ${h.d} m  ${h.area}/${h.mesh} [${h.mat}] at ${h.at}`);
    if (shots) await page.screenshot({ path: `${shots}/zf-${String(n).padStart(3, '0')}.jpg`, quality: 80 });
  }
}
console.log(`${views.length} views, ${found.length} with depth ties, ${found.reduce((s, f) => s + f.count, 0)} px total` + (errs.length ? `\nERRORS: ${errs.join('\n')}` : ''));
await browser.close();
