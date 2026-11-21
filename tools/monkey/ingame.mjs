// Screenshot the guide monkey inside the real game, from where a player would stand (he looks back at the player).
// usage: node tools/monkey/ingame.mjs <outDir> [--page <path under the server root>] [--chapter welcome] [--quality high]
//   --page shoots another copy of the site instead (an index.html + assets/ folder under the server root), e.g. one
//          whose assets/models holds the original monkey GLBs from tools/monkey/orig/, for a before/after on one build
import { chromium } from '../jewellery/node_modules/playwright-core/index.mjs';
import fs from 'node:fs';
import path from 'node:path';
import { execFileSync } from 'node:child_process';

const args = process.argv.slice(2);
const opt = (k, d) => { const i = args.indexOf(`--${k}`); return i < 0 ? d : args[i + 1]; };
const out = path.resolve(args[0]);
const chapter = opt('chapter', 'welcome');
fs.mkdirSync(out, { recursive: true });
// [name, angle around the monkey from his front (deg), distance (m), camera zoom]
const VIEWS = [['front', 0, 1.8, 2.6], ['front_close', 15, 1.1, 2.2], ['threeq', 45, 1.8, 2.6], ['side', 90, 1.8, 2.6], ['back', 160, 1.8, 2.6]];

const b = await chromium.launch({ channel: 'chrome', headless: true, args: ['--use-angle=metal', '--enable-gpu', '--ignore-gpu-blocklist'] });
const p = await b.newPage({ viewport: { width: 1280, height: 720 } });
const errs = [];
p.on('pageerror', (e) => errs.push(e.message));
await p.goto(`http://127.0.0.1:8765/${opt('page', '')}?chapter=${chapter}&quality=${opt('quality', 'high')}`);
await p.waitForFunction(() => window.__souk?.ready && window.__souk?.playing, null, { timeout: 60000 });
await p.waitForTimeout(1500);
await p.evaluate(() => window.__souk.advance(3, 30));
const files = [];
for (const [name, deg, dist, zoom] of VIEWS) {
  await p.evaluate(async ([deg, dist, zoom]) => {
    const G = window.__souk.G, m = G.monkey, pos = m.root.position;
    const stand = () => { // put the player `dist` away at `deg` around him, looking at his chest
      const a = m.yaw + (deg * Math.PI) / 180, x = pos.x + Math.sin(a) * dist, z = pos.z + Math.cos(a) * dist;
      G.player.teleport(x, z, Math.atan2(-(pos.x - x), -(pos.z - z)));
      G.player.attention = null;
      const eye = G.player.head(pos.clone());
      G.player.pitch = Math.atan2(pos.y + 0.32 - eye.y, Math.hypot(pos.x - eye.x, pos.z - eye.z));
    };
    stand();
    await window.__souk.advance(1.2, 30); // let his head turn to the player
    stand(); // he may have walked on meanwhile
    G.camera.zoom = zoom; G.camera.updateProjectionMatrix(); // telephoto from the player's eye, so he fills the crop
    await window.__souk.advance(2 / 30, 30);
  }, [deg, dist, zoom]);
  const f = path.join(out, `${chapter}-${name}.png`);
  await p.screenshot({ path: f });
  files.push(f);
}
console.log(errs.length ? 'PAGE ERRORS:\n' + errs.join('\n') : 'no page errors');
await b.close();
// crop around the screen centre (where he is) and tile
execFileSync('python3', ['-c', `
import sys
from PIL import Image, ImageDraw
out=sys.argv[1]; fs=sys.argv[2:]
tiles=[]
for f in fs:
    im=Image.open(f).convert('RGB'); W,H=im.size
    c=im.crop((W//2-300,H//2-300,W//2+300,H//2+300)); ImageDraw.Draw(c).text((8,8),f.rsplit('/',1)[1][:-4],fill='#ffd27a'); tiles.append(c)
s=Image.new('RGB',(600*len(tiles),600))
for k,t in enumerate(tiles): s.paste(t,(600*k,0))
s.save(out,quality=90)`, path.join(out, `${chapter}.jpg`), ...files]);
console.log('wrote', path.join(out, `${chapter}.jpg`));
