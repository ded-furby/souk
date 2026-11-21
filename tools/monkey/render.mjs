// Render the monkey in headless Chrome (game-like load path + lighting) and tile the shots into a sheet.
// usage: node tools/monkey/render.mjs --glb assets/models/monkey-anim.glb [--hook] --out <dir> --set <name>|--shots '<json>' [--cols n] [--check]
//   --hook   run src/monkey-look.js upgradeMonkey() on the loaded GLTF first (as the game does)
//   --check  also run every clip at N frames and report skinned bounds / longest edge (exploded-vertex check)
import { chromium } from '../jewellery/node_modules/playwright-core/index.mjs';
import http from 'node:http';
import fs from 'node:fs';
import path from 'node:path';
import { execFileSync } from 'node:child_process';
import { fileURLToPath } from 'node:url';
import { SETS } from './shots.mjs';

const here = path.dirname(fileURLToPath(import.meta.url));
const repo = path.resolve(here, '../..');
const args = process.argv.slice(2);
const opt = (k, d) => { const i = args.indexOf(`--${k}`); return i < 0 ? d : args[i + 1]; };
const glb = opt('glb', 'assets/models/monkey-anim.glb');
const out = path.resolve(opt('out', path.join(here, 'out')));
const set = opt('set', 'overview');
const shots = opt('shots') ? JSON.parse(opt('shots')) : SETS[set];
if (!shots) { console.error('unknown set', set, 'have', Object.keys(SETS)); process.exit(1); }
const cols = +opt('cols', 4);
const types = { '.html': 'text/html', '.mjs': 'text/javascript', '.js': 'text/javascript', '.json': 'application/json', '.glb': 'model/gltf-binary', '.png': 'image/png', '.jpg': 'image/jpeg' };

const server = http.createServer((req, res) => {
  const u = decodeURIComponent(new URL(req.url, 'http://x').pathname);
  const file = u.startsWith('/three/') ? path.join(repo, 'tools/jewellery/node_modules/three', u.slice(7)) : path.join(repo, u);
  fs.readFile(file, (err, data) => {
    if (err) { res.writeHead(404); return res.end(); }
    res.writeHead(200, { 'content-type': types[path.extname(file)] || 'application/octet-stream', 'cache-control': 'no-store' });
    res.end(data);
  });
}).listen(0, '127.0.0.1');
await new Promise((r) => server.once('listening', r));

const browser = await chromium.launch({ channel: 'chrome', headless: true, args: ['--use-angle=metal', '--enable-gpu', '--ignore-gpu-blocklist'] });
try {
  const page = await browser.newPage();
  const errors = [];
  page.on('pageerror', (e) => errors.push(e.message));
  page.on('console', (m) => (m.type() === 'error' || m.type() === 'warning') && errors.push(`${m.type()}: ${m.text()}`));
  await page.goto(`http://127.0.0.1:${server.address().port}/tools/monkey/studio.html`);
  await page.waitForFunction(() => window.__ready, null, { timeout: 30000 });
  const info = await page.evaluate((o) => window.__load(o), { glb: '/' + glb, hook: args.includes('--hook'), bg: opt('bg'), quality: opt('quality') });
  console.log(JSON.stringify({ tris: info.tris, verts: info.verts, hookMs: info.hookMs, meshes: info.meshes, clips: info.clips }));
  if (opt('blockout')) await page.evaluate((spec) => window.__blockout(spec), JSON.parse(fs.readFileSync(opt('blockout'), 'utf8')));
  fs.mkdirSync(out, { recursive: true });
  const files = [];
  for (const [i, s] of shots.entries()) {
    const url = await page.evaluate((s) => window.__shot(s), s);
    const f = path.join(out, `${set}-${String(i).padStart(2, '0')}-${(s.name || '').replace(/\W+/g, '_')}.png`);
    fs.writeFileSync(f, Buffer.from(url.split(',')[1], 'base64'));
    files.push(f);
  }
  if (args.includes('--check')) {
    const N = +opt('frames', 12), rep = {};
    for (const [name, dur] of Object.entries(info.clips)) {
      let maxEdge = 0, lo = [9, 9, 9], hi = [-9, -9, -9];
      for (let k = 0; k < N; k++) {
        const b = await page.evaluate(([c, t]) => window.__bounds(c, t), [name, (dur * k) / (N - 1)]);
        maxEdge = Math.max(maxEdge, b.maxEdge);
        lo = lo.map((x, j) => Math.min(x, b.min[j])); hi = hi.map((x, j) => Math.max(x, b.max[j]));
      }
      rep[name] = { maxEdge, min: lo, max: hi };
    }
    console.log('CHECK ' + JSON.stringify(rep));
    fs.writeFileSync(path.join(out, `${set}-check.json`), JSON.stringify(rep, null, 1));
  }
  if (errors.length) console.error('PAGE ERRORS:\n' + [...new Set(errors)].join('\n'));
  else console.log('no page errors');
  const sheet = path.join(out, `${set}.jpg`);
  execFileSync('python3', ['-c', `
import sys
from PIL import Image, ImageDraw
cols=int(sys.argv[1]); sheet=sys.argv[2]; fs=sys.argv[3:]
ims=[Image.open(f).convert('RGB') for f in fs]
W,H=ims[0].size
s=Image.new('RGB',(W*cols,H*((len(fs)+cols-1)//cols)),'#000')
for k,(f,im) in enumerate(zip(fs,ims)):
    ImageDraw.Draw(im).text((8,8),f.rsplit('/',1)[1][:-4],fill='#ffd27a')
    s.paste(im,((k%cols)*W,(k//cols)*H))
s.save(sheet,quality=90)`, String(cols), sheet, ...files]);
  console.log('wrote', sheet);
} finally {
  await browser.close();
  server.close();
}
