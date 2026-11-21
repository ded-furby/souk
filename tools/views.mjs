// Screenshot fixed viewpoints in a chapter and tile them.
// usage: node views.mjs <outDir> <chapter> '<json [[x,z,yaw,pitch,label], ...]>' [settleSec]
import { chromium } from './jewellery/node_modules/playwright-core/index.mjs';
import { execFileSync } from 'node:child_process';
const [out, chapter, json, settle = '2'] = process.argv.slice(2);
const views = JSON.parse(json);
const b = await chromium.launch({ channel: 'chrome', headless: true, args: ['--use-angle=metal', '--enable-gpu', '--ignore-gpu-blocklist'] });
const p = await b.newPage({ viewport: { width: 1280, height: 720 } });
const errs = [];
p.on('pageerror', (e) => errs.push(e.message));
p.on('console', (m) => m.type() === 'error' && errs.push(m.text()));
await p.goto(`http://127.0.0.1:8765/${process.env.PAGE || ``}?chapter=${chapter}${process.env.Q ? `&quality=${process.env.Q}` : ``}`);
await p.waitForFunction(() => window.__souk?.ready && window.__souk?.playing, null, { timeout: 60000 });
await p.waitForTimeout(1500);
await p.evaluate((s) => window.__souk.advance(+s, 30), settle);
const files = [];
for (const [i, [x, z, yaw, pitch, label]] of views.entries()) {
  await p.evaluate(([x, z, yaw, pitch]) => {
    const G = window.__souk.G;
    G.player.teleport(x, z, yaw);
    G.player.pitch = pitch;
    G.player.attention = null;
  }, [x, z, yaw, pitch]);
  await p.evaluate(() => window.__souk.advance(1.2, 30));
  const f = `${out}/v${i}-${(label || '').replace(/\W+/g, '_')}.jpg`;
  await p.screenshot({ path: f, quality: 82 });
  files.push(f);
}
console.log(errs.length ? errs.join('\n') : 'no errors');
await b.close();
execFileSync('python3', ['-c', `
import sys
from PIL import Image, ImageDraw
fs=sys.argv[1:]; W,H=640,360; cols=3
s=Image.new('RGB',(W*cols,H*((len(fs)+cols-1)//cols)))
for k,f in enumerate(fs):
    im=Image.open(f).resize((W,H)); ImageDraw.Draw(im).text((8,8),f.rsplit('/',1)[1],fill='#ffd27a'); s.paste(im,((k%cols)*W,(k//cols)*H))
s.save('${out}/sheet.jpg',quality=84)`, ...files]);
