// Trace the monkey through the whole autoplay story: flag teleports (>6 m/s) and report riding per chapter.
import { chromium } from './jewellery/node_modules/playwright-core/index.mjs';
const b = await chromium.launch({ channel: 'chrome', headless: true, args: ['--use-angle=metal', '--enable-gpu', '--ignore-gpu-blocklist'] });
const p = await b.newPage({ viewport: { width: 960, height: 540 } });
const errs = [];
p.on('pageerror', (e) => errs.push(e.message));
await p.goto('http://127.0.0.1:8765/?autoplay');
await p.waitForFunction(() => window.__souk?.ready && window.__souk?.playing, null, { timeout: 60000 });
await p.mouse.move(480, 270);
const r = await p.evaluate(async () => {
  const G = window.__souk.G, m = G.monkey, out = { jumps: [], chapters: {}, onFoot: {}, riding: {} };
  let last = m.root.position.clone(), seenFinale = false, prevCh = null;
  for (let i = 0; i < 4800; i++) {
    await window.__souk.advance(0.1, 30);
    await new Promise((r) => setTimeout(r, 0)); // let wall-clock timers (chapter start) run
    const ch = G.director.chapter, pos = m.root.position, d = pos.distanceTo(last);
    const started = prevCh !== null; // the first chapter start places him at his mark; that is not a teleport
    if (ch !== prevCh) { if (seenFinale && ch === 'welcome') break; prevCh = ch; out.chapters[ch] = +(i / 10).toFixed(1); }
    if (ch === 'finale') seenFinale = true;
    if (d > 0.6 && started) out.jumps.push({ t: +(i / 10).toFixed(1), ch, d: +d.toFixed(2), riding: G.guide.riding, mount: !!m.mount });
    const k = G.guide.riding ? 'riding' : 'onFoot';
    out[k][ch] = (out[k][ch] || 0) + 1;
    last.copy(pos);
  }
  return out;
});
console.log(JSON.stringify(r));
console.log(errs.join('\n') || 'no errors');
await b.close();
