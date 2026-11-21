// Render a piece in headless Chrome (same three.js + lighting as the game) and optionally export its GLB.
// usage: node render.mjs <piece> [--views front,threeq,left] [--size 1024] [--zoom 1] [--glb] [--out <dir>]
//   writes <out>/<piece>/<view>.png, <piece>.glb (with --glb) and stats.json; prints stats.
import { chromium } from 'playwright-core';
import http from 'node:http';
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const here = path.dirname(fileURLToPath(import.meta.url));
const args = process.argv.slice(2);
const piece = args[0];
const opt = (k, d) => { const i = args.indexOf(`--${k}`); return i < 0 ? d : args[i + 1]; };
if (!piece) { console.error('usage: node render.mjs <piece> [--views a,b] [--size n] [--zoom z] [--glb] [--out dir]'); process.exit(1); }
const views = opt('views', 'front,threeq,left,top').split(',');
const size = +opt('size', 1024);
const zoom = +opt('zoom', 1);
const out = path.resolve(opt('out', path.join(here, 'out')), piece);
const types = { '.html': 'text/html', '.mjs': 'text/javascript', '.js': 'text/javascript', '.json': 'application/json' };

const server = http.createServer((req, res) => {
  const u = decodeURIComponent(new URL(req.url, 'http://x').pathname);
  const file = u.startsWith('/three/') ? path.join(here, 'node_modules/three', u.slice(7)) : path.join(here, u);
  fs.readFile(file, (err, data) => {
    if (err) { res.writeHead(404); return res.end(); }
    res.writeHead(200, { 'content-type': types[path.extname(file)] || 'application/octet-stream', 'cache-control': 'no-store' });
    res.end(data);
  });
}).listen(0, '127.0.0.1');
await new Promise((r) => server.once('listening', r));

const browser = await chromium.launch({ channel: 'chrome', headless: true, args: ['--ignore-gpu-blocklist', '--enable-unsafe-swiftshader'] });
try {
  const page = await browser.newPage();
  const errors = [];
  page.on('pageerror', (e) => errors.push(e.message));
  page.on('console', (m) => m.type() === 'error' && errors.push(m.text()));
  await page.goto(`http://127.0.0.1:${server.address().port}/studio.html`);
  await page.waitForFunction(() => window.__ready, null, { timeout: 30000 });
  const res = await page.evaluate((o) => window.__run(o), { piece, views, size, zoom, glb: args.includes('--glb') }).catch((e) => {
    console.error('BUILD FAILED:', e.message, errors.join('\n'));
    process.exit(2);
  });
  fs.mkdirSync(out, { recursive: true });
  for (const [v, url] of Object.entries(res.images)) fs.writeFileSync(path.join(out, `${v}.png`), Buffer.from(url.split(',')[1], 'base64'));
  if (res.glb) fs.writeFileSync(path.join(out, `${piece}.glb`), Buffer.from(res.glb, 'base64'));
  const st = { ...res.stats, glbBytes: res.glb ? Buffer.from(res.glb, 'base64').length : undefined };
  fs.writeFileSync(path.join(out, 'stats.json'), JSON.stringify(st, null, 1));
  if (errors.length) console.error('page errors:\n' + errors.join('\n'));
  console.log(JSON.stringify(st));
  console.log('wrote', out);
} finally {
  await browser.close();
  server.close();
}
