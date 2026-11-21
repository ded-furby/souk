// Measure real-time frame rate in a chapter. usage: node fps.mjs <quality> <dpr> [chapter] [seconds]
import { chromium } from './jewellery/node_modules/playwright-core/index.mjs';
const [q = 'high', dpr = '2', chapter = 'souk', secs = '8'] = process.argv.slice(2);
const b = await chromium.launch({ channel: 'chrome', headless: true, args: ['--use-angle=metal', '--enable-gpu', '--ignore-gpu-blocklist', '--disable-gpu-vsync', '--disable-frame-rate-limit'] });
const p = await b.newPage({ viewport: { width: 1280, height: 720 }, deviceScaleFactor: +dpr });
const errs = [];
p.on('pageerror', (e) => errs.push(e.message));
await p.goto(`http://127.0.0.1:8765/${process.env.PAGE || ``}?autoplay&chapter=${chapter}&quality=${q}&dpr=${dpr}`);
await p.waitForFunction(() => window.__souk?.ready && window.__souk?.playing, null, { timeout: 60000 });
await p.waitForTimeout(4000);
const r = await p.evaluate((ms) => new Promise((res) => {
  let n = 0, t0 = performance.now(), worst = 0, last = t0, slow = 0;
  const f = (t) => { n++; const dt = t - last; worst = Math.max(worst, dt); slow += dt > 40; last = t;
    if (t - t0 < ms) requestAnimationFrame(f); else res({ fps: +(n / ((t - t0) / 1000)).toFixed(1), worstMs: +worst.toFixed(1), slowFrames: slow, px: [innerWidth * devicePixelRatio, innerHeight * devicePixelRatio] }); };
  requestAnimationFrame(f);
}), +secs * 1000);
console.log(q, 'dpr', dpr, chapter, JSON.stringify(r), errs.join(' | ') || '');
await b.close();
