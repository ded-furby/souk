// Try look variants live (no rebuild): each variant overrides desert uniforms / env values, then the same views are shot.
// usage: node tools/desert/tune.mjs <outDir> '<views json>' '<variants json: [{name, u:{uniform: value|hex|[..]}, env:{..}}, ...]>' [chapter] [settle]
// uniform values: number, "#hex" or "#hex*k" (colour, optionally scaled), or an array (vector components).
import { chromium } from '../jewellery/node_modules/playwright-core/index.mjs';
import { execFileSync } from 'node:child_process';
import fs from 'node:fs';
const [out, viewsJson, varsJson, chapter = 'desert', settle = '2'] = process.argv.slice(2);
const views = JSON.parse(viewsJson), variants = JSON.parse(varsJson);
fs.mkdirSync(out, { recursive: true });
const b = await chromium.launch({ channel: 'chrome', headless: true, args: ['--use-angle=metal', '--enable-gpu', '--ignore-gpu-blocklist'] });
const p = await b.newPage({ viewport: { width: 1280, height: 720 } });
const errs = [];
p.on('pageerror', (e) => errs.push(e.message));
p.on('console', (m) => m.type() === 'error' && errs.push(m.text()));
await p.goto(`http://127.0.0.1:8765/${process.env.PAGE || 'index-desert.html'}?chapter=${chapter}${process.env.Q ? `&quality=${process.env.Q}` : ''}`);
await p.waitForFunction(() => window.__souk?.ready && window.__souk?.playing, null, { timeout: 60000 });
await p.waitForTimeout(1500);
await p.evaluate((s) => window.__souk.advance(+s, 30), settle);
const files = [];
for (const v of variants) {
  await p.evaluate((v) => {
    const G = window.__souk.G, area = G.areas.desert, L = area.look;
    for (const [k, val] of Object.entries(v.u || {})) {
      const u = L.U[k] || L.sky.material.uniforms[k];
      if (typeof val === 'number') u.value = val;
      else if (typeof val === 'string') { const [h, s] = val.split('*'); u.value.set(h).multiplyScalar(+(s || 1)); }
      else u.value.fromArray(val);
    }
    if (v.env) { Object.assign(area.env, v.env); G.world.current = null; if (v.env.sunDir) L.U.dSun.value.fromArray(v.env.sunDir).normalize(); }
  }, v);
  await p.evaluate(() => window.__souk.advance(4, 30));
  for (const [i, [x, z, yaw, pitch, label]] of views.entries()) {
    await p.evaluate(([x, z, yaw, pitch]) => { const G = window.__souk.G; G.player.teleport(x, z, yaw); G.player.pitch = pitch; G.player.attention = null; }, [x, z, yaw, pitch]);
    await p.evaluate(() => window.__souk.advance(1.2, 30));
    const f = `${out}/${v.name}-${i}-${label}.jpg`;
    await p.screenshot({ path: f, quality: 85 });
    files.push(f);
  }
}
console.log(errs.length ? [...new Set(errs)].join('\n') : 'no errors');
await b.close();
execFileSync('python3', ['-c', `
import sys
from PIL import Image, ImageDraw
cols=int(sys.argv[1]); fs=sys.argv[2:]; W,H=640,360
s=Image.new('RGB',(W*cols,H*((len(fs)+cols-1)//cols)))
for k,f in enumerate(fs):
    im=Image.open(f).resize((W,H)); ImageDraw.Draw(im).text((8,8),f.rsplit('/',1)[1],fill='#ffffff'); s.paste(im,((k%cols)*W,(k//cols)*H))
s.save('${out}/sheet.jpg',quality=86)`, String(views.length), ...files]);
