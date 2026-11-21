// Pan the camera slowly at a viewpoint, grab every frame, and count floor flicker (per-cell light/dark sign flips).
// usage: node zfight-test.mjs <outDir> <chapter> <x> <z> <yaw> <pitch> [frames]
import { chromium } from './jewellery/node_modules/playwright-core/index.mjs';
import { execFileSync } from 'node:child_process';
import fs from 'node:fs';
const [out, chapter, x, z, yaw, pitch, frames = '60'] = process.argv.slice(2);
fs.mkdirSync(out, { recursive: true });
const b = await chromium.launch({ channel: 'chrome', headless: true, args: ['--use-angle=metal', '--enable-gpu', '--ignore-gpu-blocklist'] });
const p = await b.newPage({ viewport: { width: 960, height: 540 } });
await p.goto(`http://127.0.0.1:8765/?chapter=${chapter}&quality=high`);
await p.waitForFunction(() => window.__souk?.ready && window.__souk?.playing, null, { timeout: 60000 });
await p.waitForTimeout(1500);
await p.evaluate(([x, z, yaw, pitch]) => { const G = window.__souk.G; G.player.teleport(+x, +z, +yaw); G.player.pitch = +pitch; G.player.attention = null; return window.__souk.advance(2, 30); }, [x, z, yaw, pitch]);
for (let i = 0; i < +frames; i++) {
  await p.evaluate(([yaw, i]) => { const G = window.__souk.G; G.player.yaw = +yaw + Math.sin(i / 12) * 0.12; return window.__souk.advance(1 / 30, 30); }, [yaw, i]);
  await p.screenshot({ path: `${out}/${String(i).padStart(3, '0')}.png` });
}
await b.close();
execFileSync('python3', ['-c', `
import sys, os
import numpy as np
from PIL import Image
d=sys.argv[1]; fs=sorted(f for f in os.listdir(d) if f[0].isdigit())
fr=[np.asarray(Image.open(os.path.join(d,f)).convert('L'),dtype=np.float32) for f in fs]
H,W=fr[0].shape; gy,gx=6,8
cell=lambda a:a[:H//gy*gy,:W//gx*gx].reshape(gy,H//gy,gx,W//gx).mean(axis=(1,3))
c=[cell(a) for a in fr]; sd=np.array([c[i]-c[i-1] for i in range(1,len(c))])
osc=((sd[1:]*sd[:-1]<0)&(np.abs(sd[1:])>4)&(np.abs(sd[:-1])>4)).sum(axis=0)
print('frames',len(fr),'floor-half flicker flips (rows 4-6):',int(osc[3:].sum()),'max per cell',int(osc[3:].max()),'| max per-frame cell change',round(float(np.abs(sd).max()),1))
`, out], { stdio: 'inherit' });
