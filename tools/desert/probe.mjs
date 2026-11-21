// Evaluate a JS expression inside the running game (chapter=desert) and print the JSON result.
// usage: node tools/desert/probe.mjs '<js expression using G>' [chapter] [quality]
import { chromium } from '../jewellery/node_modules/playwright-core/index.mjs';
const [expr, chapter = 'desert', q = ''] = process.argv.slice(2);
const b = await chromium.launch({ channel: 'chrome', headless: true, args: ['--use-angle=metal', '--enable-gpu', '--ignore-gpu-blocklist'] });
const p = await b.newPage({ viewport: { width: 1280, height: 720 } });
const errs = [];
p.on('pageerror', (e) => errs.push(e.message));
p.on('console', (m) => (m.type() === 'error' || m.type() === 'warning') && errs.push(m.text()));
await p.goto(`http://127.0.0.1:8765/${process.env.PAGE || 'index-desert.html'}?chapter=${chapter}${q ? `&quality=${q}` : ''}`);
await p.waitForFunction(() => window.__souk?.ready && window.__souk?.playing, null, { timeout: 60000 });
await p.waitForTimeout(1200);
await p.evaluate(() => window.__souk.advance(2, 30));
const r = await p.evaluate(`(async () => { const G = window.__souk.G; return (${expr}); })()`);
console.log(typeof r === 'string' ? r : JSON.stringify(r, null, 1));
if (errs.length) console.log('ERRORS:\n' + [...new Set(errs)].join('\n'));
await b.close();
