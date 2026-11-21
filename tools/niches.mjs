// Screenshot every gallery niche (no hover highlight) — usage: node niches.mjs <outDir>
import { chromium } from './jewellery/node_modules/playwright-core/index.mjs';
const out = process.argv[2];
const b = await chromium.launch({ channel: 'chrome', headless: true, args: ['--use-angle=metal', '--enable-gpu', '--ignore-gpu-blocklist'] });
const p = await b.newPage({ viewport: { width: 960, height: 720 } });
const errs = [];
p.on('pageerror', (e) => errs.push(e.message));
p.on('console', (m) => m.type() === 'error' && errs.push(m.text()));
await p.goto('http://127.0.0.1:8765/?chapter=gallery');
await p.waitForFunction(() => window.__souk?.ready && window.__souk?.playing, null, { timeout: 60000 });
await p.waitForTimeout(1500); await p.evaluate(() => window.__souk.advance(4, 30));
const n = await p.evaluate(() => window.__souk.G.areas.gallery.displays.length);
for (let i = 0; i < n; i++) {
  await p.evaluate((i) => {
    const G = window.__souk.G, d = G.areas.gallery.displays[i], s = Math.sign(d.pos.x);
    G.player.teleport(d.pos.x - s * 1.25, d.pos.z, s > 0 ? -Math.PI / 2 : Math.PI / 2);
    G.player.pitch = -0.1; G.player.attention = null;
  }, i);
  await p.evaluate(() => window.__souk.advance(2.5, 30));
  await p.screenshot({ path: `${out}/niche${i}.jpg`, quality: 82 });
}
console.log('niches', n, errs.length ? errs.join('\n') : 'no errors');
await b.close();
