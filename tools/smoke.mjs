// Fast-forward the game's autopilot through the whole story with window.__souk.advance(),
// screenshot each chapter, report page errors and the chapter timeline.
// usage: node smoke.mjs <outDir> [url] [--every 20] [--max 700] [--step 5]
import { chromium } from './jewellery/node_modules/playwright-core/index.mjs';
import fs from 'node:fs';
import path from 'node:path';

const args = process.argv.slice(2);
const out = path.resolve(args[0] || 'smoke');
const url = args[1] && !args[1].startsWith('--') ? args[1] : 'http://127.0.0.1:8765/?autoplay';
const opt = (k, d) => { const i = args.indexOf(`--${k}`); return i < 0 ? d : +args[i + 1]; };
const every = opt('every', 20), max = opt('max', 700), step = opt('step', 5);
fs.mkdirSync(out, { recursive: true });

const browser = await chromium.launch({ channel: 'chrome', headless: true, args: ['--autoplay-policy=no-user-gesture-required', '--use-angle=metal', '--enable-gpu', '--ignore-gpu-blocklist'] });
const page = await browser.newPage({ viewport: { width: 1280, height: 720 } });
const errors = [];
page.on('pageerror', (e) => errors.push(`exception: ${e.message}`));
page.on('console', (m) => (m.type() === 'error' || m.type() === 'warning') && errors.push(`${m.type()}: ${m.text()}`));
const t0 = Date.now();
await page.goto(url);
await page.waitForFunction(() => window.__souk?.ready && window.__souk?.playing, null, { timeout: 60000 }).catch(async () => {
  console.log('NOT READY — status:', await page.evaluate(() => document.getElementById('load-status')?.textContent));
  console.log([...new Set(errors)].slice(0, 20).join('\n'));
  await browser.close();
  process.exit(1);
});
console.log(`ready in ${((Date.now() - t0) / 1000).toFixed(1)}s`);
await page.mouse.move(640, 360); // park the pointer on the crosshair, like a player looking at targets

let sim = 0, last = null, lastShot = -1e9, seenFinale = false;
const shot = async (name) => page.screenshot({ path: path.join(out, `${String(Math.round(sim)).padStart(4, '0')}-${name}.jpg`), quality: 70 });
while (sim < max) {
  await page.evaluate((s) => window.__souk.advance(s, 30), step);
  sim += step;
  const st = await page.evaluate(() => ({
    ch: window.__souk.G.director?.chapter,
    obj: document.getElementById('obj-text')?.textContent || '',
    sub: document.getElementById('sub-text')?.textContent || '',
    pause: !!document.getElementById('pause')?.open,
  }));
  if (st.ch !== last) {
    if (seenFinale && st.ch === 'welcome') { console.log(`t=${sim}s looped back to welcome — end`); break; }
    console.log(`t=${sim}s chapter ${st.ch}`);
    last = st.ch;
    await shot(st.ch);
    lastShot = sim;
  } else if (sim - lastShot >= every) {
    await shot(st.ch);
    lastShot = sim;
  }
  if (st.ch === 'finale') seenFinale = true;
  if (st.pause) errors.push(`pause dialog open at t=${sim}`);
}
console.log(`simulated ${sim}s in ${((Date.now() - t0) / 1000).toFixed(0)}s wall`);
console.log(errors.length ? `ERRORS (${errors.length}):\n` + [...new Set(errors)].slice(0, 30).join('\n') : 'no page errors');
await browser.close();
