// Flicker / camera-smoothness meter. Plays a chapter on autopilot and samples EVERY rendered frame in the page:
// mean luminance of the WebGL canvas (as video-range YAVG, comparable with ffmpeg signalstats), camera yaw/pitch/
// position, exposure, light-pool state. Real time by default (judge flicker in real time); --ff fast-forwards
// deterministically at 30 fps (quick iteration, hides nothing the renderer does but skips CSS/timers).
// usage: node tools/flicker.mjs <out.json> [--page index.html] [--chapter souk] [--secs 40] [--skip 0]
//                               [--quality high] [--dpr 1.5] [--ff] [--w 1280] [--h 720]
// Prints: luminance jumps (>6 between 0.1 s samples) and oscillations (sign flip, both >2.5) — the same metric as
// the recording check — plus per-frame flicker, dark frames, and camera angular speed / acceleration.
import { chromium } from './jewellery/node_modules/playwright-core/index.mjs';
import fs from 'node:fs';

const args = process.argv.slice(2);
const out = args[0] && !args[0].startsWith('--') ? args[0] : null;
const opt = (k, d) => { const i = args.indexOf(`--${k}`); return i < 0 ? d : args[i + 1]; };
const flag = (k) => args.includes(`--${k}`);
const page_ = opt('page', 'index.html'), chapter = opt('chapter', 'welcome'), secs = +opt('secs', 40), skip = +opt('skip', 0);
const quality = opt('quality', 'high'), dpr = +opt('dpr', 1.5), ff = flag('ff'), W = +opt('w', 1280), H = +opt('h', 720);

const browser = await chromium.launch({ channel: 'chrome', headless: true, args: ['--autoplay-policy=no-user-gesture-required', '--use-angle=metal', '--enable-gpu', '--ignore-gpu-blocklist'] });
const page = await browser.newPage({ viewport: { width: W, height: H }, deviceScaleFactor: dpr });
const errors = [];
page.on('pageerror', (e) => errors.push(`exception: ${e.message}`));
page.on('console', (m) => m.type() === 'error' && errors.push(`error: ${m.text()}`));
await page.goto(`http://127.0.0.1:8765/${page_}?autoplay&chapter=${chapter}&quality=${quality}&dpr=${dpr}`);
await page.waitForFunction(() => window.__souk?.ready && window.__souk?.playing, null, { timeout: 90000 });
await page.mouse.move(W / 2, H / 2);

// In-page sampler: wraps renderer.render; a microtask after the frame's last draw reads the canvas back (small).
await page.evaluate(() => {
  const G = window.__souk.G, R = G.renderer, cv = R.domElement, cam = G.camera;
  const c2 = document.createElement('canvas');
  c2.width = 64; c2.height = 36;
  const ctx = c2.getContext('2d', { willReadFrequently: true });
  const veil = document.getElementById('veil');
  const F = (window.__flk = { rows: [], on: false });
  const e = cam.matrixWorld.elements;
  let pending = false;
  const sample = () => {
    pending = false;
    if (!F.on) return;
    ctx.drawImage(cv, 0, 0, 64, 36);
    const d = ctx.getImageData(0, 0, 64, 36).data;
    let s = 0;
    const grid = new Array(8).fill(0); // 4x2 cells
    for (let y = 0; y < 36; y++) for (let x = 0; x < 64; x++) {
      const i = (y * 64 + x) * 4, l = 0.299 * d[i] + 0.587 * d[i + 1] + 0.114 * d[i + 2];
      s += l; grid[(y >= 18 ? 4 : 0) + (x >> 4)] += l;
    }
    const pool = G.world.pool;
    F.rows.push([
      +performance.now().toFixed(1), +G.clock.time.toFixed(3), +(16 + (s / 2304) * (219 / 255)).toFixed(2),
      +Math.atan2(-e[8], -e[10]).toFixed(4), +Math.asin(Math.max(-1, Math.min(1, -e[9]))).toFixed(4), // world yaw (as player.yaw), pitch
      +e[12].toFixed(3), +e[13].toFixed(3), +e[14].toFixed(3), +cam.fov.toFixed(2),
      +R.toneMappingExposure.toFixed(3), +pool.reduce((a, l) => a + l.intensity, 0).toFixed(2),
      +R.getPixelRatio().toFixed(2), G.director.chapter, +getComputedStyle(veil).opacity,
      grid.map((g) => Math.round(16 + (g / 288) * (219 / 255))),
    ]);
  };
  const render = R.render.bind(R);
  R.render = (s, c) => { render(s, c); if (!pending) { pending = true; queueMicrotask(sample); } };
});

if (skip > 0) await page.evaluate((s) => window.__souk.advance(s, 30), skip);
const t0 = Date.now();
if (ff) {
  await page.evaluate(async (n) => { window.__flk.on = true; for (let i = 0; i < n; i++) await window.__souk.advance(1 / 30, 30); }, Math.round(secs * 30));
} else {
  await page.evaluate(() => { window.__souk.live(); window.__flk.on = true; });
  await page.waitForTimeout(secs * 1000);
}
const rows = await page.evaluate(() => { window.__flk.on = false; return window.__flk.rows; });
await browser.close();

// ---- analysis ----
const K = { t: 0, gt: 1, y: 2, yaw: 3, pitch: 4, x: 5, py: 6, z: 7, fov: 8, exp: 9, lights: 10, pr: 11, ch: 12, veil: 13, grid: 14 };
const time = (r) => (ff ? r[K.gt] * 1000 : r[K.t]);
const wrap = (a) => ((((a + Math.PI) % (2 * Math.PI)) + 2 * Math.PI) % (2 * Math.PI)) - Math.PI;
const T0 = time(rows[0]), dur = (time(rows.at(-1)) - T0) / 1000;
// 10 fps resample (nearest earlier frame), like `ffmpeg fps=10`
const ten = [];
for (let k = 0, i = 0; k * 100 <= dur * 1000; k++) { while (i + 1 < rows.length && time(rows[i + 1]) - T0 <= k * 100) i++; ten.push(rows[i]); }
let jumps = 0, osc = 0; const events = [];
for (let k = 1; k < ten.length; k++) {
  const d = ten[k][K.y] - ten[k - 1][K.y];
  if (Math.abs(d) > 6) { jumps++; events.push([+(k / 10).toFixed(1), 'J', +d.toFixed(1)]); }
  if (k >= 2) { const d0 = ten[k - 1][K.y] - ten[k - 2][K.y]; if (d * d0 < 0 && Math.abs(d) > 2.5 && Math.abs(d0) > 2.5) { osc++; events.push([+(k / 10).toFixed(1), 'O', +d.toFixed(1)]); } }
}
// per-frame: luminance flips (frame-to-frame sign change, both > 1.5), dark frames, camera kinematics
let flips = 0, dark = 0, maxYawRate = 0, maxPitchRate = 0, maxYawAcc = 0, prChanges = 0, sumAbsDY = 0, maxStep = 0;
const yawRates = []; let prevRate = 0, reversals = 0, lastSign = 0, swing = 0;
for (let i = 1; i < rows.length; i++) {
  const a = rows[i - 1], b = rows[i], dt = Math.max(1e-3, (time(b) - time(a)) / 1000), dy = b[K.y] - a[K.y];
  sumAbsDY += Math.abs(dy);
  if (i >= 2) { const d0 = a[K.y] - rows[i - 2][K.y]; if (dy * d0 < 0 && Math.abs(dy) > 1.5 && Math.abs(d0) > 1.5) flips++; }
  if (b[K.y] < 40 && a[K.y] > 60) dark++;
  if (b[K.pr] !== a[K.pr]) prChanges++;
  const yr = wrap(b[K.yaw] - a[K.yaw]) / dt, pr = (b[K.pitch] - a[K.pitch]) / dt;
  const step = Math.hypot(b[K.x] - a[K.x], b[K.py] - a[K.py], b[K.z] - a[K.z]);
  if (b[K.ch] === a[K.ch]) { // ignore the hard cut of a chapter (re)start
    maxYawRate = Math.max(maxYawRate, Math.abs(yr)); maxPitchRate = Math.max(maxPitchRate, Math.abs(pr));
    maxYawAcc = Math.max(maxYawAcc, Math.abs(yr - prevRate) / dt); maxStep = Math.max(maxStep, step / dt);
    yawRates.push(Math.abs(yr));
    // whip-pan detector: yaw-rate sign reversal after swinging more than 20 degrees one way within 1.5 s
    const sg = Math.abs(yr) > 0.15 ? Math.sign(yr) : 0;
    if (sg && sg !== lastSign) { if (Math.abs(swing) > 0.35) reversals++; swing = 0; lastSign = sg; }
    if (sg) swing += yr * dt;
  }
  prevRate = yr;
}
yawRates.sort((a, b) => a - b);
const deg = (r) => +((r * 180) / Math.PI).toFixed(1);
const summary = {
  page: page_, chapter, mode: ff ? 'fast-forward' : 'real-time', quality, dpr, seconds: +dur.toFixed(1), frames: rows.length, fps: +(rows.length / dur).toFixed(1),
  jumps, osc, frameFlips: flips, darkFrames: dark, meanAbsDY: +(sumAbsDY / rows.length).toFixed(3),
  yawRateMaxDegS: deg(maxYawRate), yawRateP99DegS: deg(yawRates[Math.floor(yawRates.length * 0.99)] || 0), pitchRateMaxDegS: deg(maxPitchRate),
  yawAccMaxDegS2: deg(maxYawAcc), whipPans: reversals, camSpeedMax: +maxStep.toFixed(2), pixelRatioChanges: prChanges,
  events: events.slice(0, 60), errors: [...new Set(errors)].slice(0, 10), wallSeconds: +((Date.now() - t0) / 1000).toFixed(1),
};
console.log(JSON.stringify(summary));
if (out) fs.writeFileSync(out, JSON.stringify({ summary, keys: Object.keys(K), rows }));
