// Record a full autopilot playthrough with sound: real Chrome, tab capture (video + tab audio) via getDisplayMedia,
// MediaRecorder chunks streamed to disk. Title screen (~6 s) -> "Begin the journey" -> autopilot -> stops when the
// finale loops back to the welcome. Writes <out.webm> and <out.json> (chapter timestamps).
// usage: node tools/record.mjs <out.webm> [url] [maxMinutes]     (touch <outDir>/STOP to end early)
import { chromium } from './jewellery/node_modules/playwright-core/index.mjs';
import fs from 'node:fs';
import path from 'node:path';

const OUT = path.resolve(process.argv[2]);
const URL = process.argv[3] || 'http://127.0.0.1:8765/?quality=high&dpr=1.5';
const MAX_MS = (+process.argv[4] || 25) * 60_000;
const W = 1280, H = 720; // page size in CSS px; the capture is scaled to fit 1920x1080
const STOP_FILE = path.join(path.dirname(OUT), 'STOP');
const META = OUT.replace(/\.webm$/, '.json');
const log = (...a) => console.log(new Date().toISOString().slice(11, 19), ...a);

const browser = await chromium.launch({
  channel: 'chrome',
  headless: false,
  ignoreDefaultArgs: ['--mute-audio'],
  args: ['--auto-accept-this-tab-capture', '--autoplay-policy=no-user-gesture-required', `--window-size=${W},${H + 140}`],
});
// No viewport emulation: tab capture records the real window, so the real window must be the page size.
const ctx = await browser.newContext({ viewport: null, reducedMotion: 'no-preference' });
const page = await ctx.newPage();
page.on('pageerror', (e) => log('[page exception]', e.message));
// The autopilot doesn't need pointer lock; never grab the real mouse cursor.
await page.addInitScript(() => { Element.prototype.requestPointerLock = () => Promise.reject(new DOMException('recording', 'NotAllowedError')); });

const out = fs.createWriteStream(OUT);
let bytes = 0;
await page.exposeFunction('__recChunk', (b64) => { const b = Buffer.from(b64, 'base64'); bytes += b.length; out.write(b); });

await page.goto(URL, { waitUntil: 'domcontentloaded' });
await page.mouse.click(640, 700); // real gesture: unlocks the game's AudioContext + allows getDisplayMedia

const sizeOf = () => page.evaluate(() => { const s = window.__stream.getVideoTracks()[0].getSettings(); return { w: s.width, h: s.height }; });
let info = await page.evaluate(async () => {
  window.__stream = await navigator.mediaDevices.getDisplayMedia({
    video: { width: { max: 1920 }, height: { max: 1080 }, frameRate: { ideal: 30, max: 30 } },
    audio: { suppressLocalAudioPlayback: true, echoCancellation: false, noiseSuppression: false, autoGainControl: false },
    preferCurrentTab: true, selfBrowserSurface: 'include', surfaceSwitching: 'exclude',
  });
  return { audioTracks: window.__stream.getAudioTracks().length };
});
// Chrome's "sharing this tab" bar steals window height; resize until the page is exactly W x H CSS px.
const bcdp = await browser.newBrowserCDPSession();
const { targetInfo } = await (await ctx.newCDPSession(page)).send('Target.getTargetInfo');
const { windowId } = await bcdp.send('Browser.getWindowForTarget', { targetId: targetInfo.targetId });
for (let i = 0; i < 6; i++) {
  await page.waitForTimeout(700);
  const v = await page.evaluate(() => ({ w: innerWidth, h: innerHeight }));
  log('page size', v.w, 'x', v.h, 'capture', JSON.stringify(await sizeOf()));
  if (v.w === W && v.h === H) break;
  const { bounds } = await bcdp.send('Browser.getWindowBounds', { windowId });
  await bcdp.send('Browser.setWindowBounds', { windowId, bounds: { width: bounds.width + W - v.w, height: bounds.height + H - v.h } });
}
await page.waitForTimeout(500);
info = { ...info, ...(await sizeOf()) };

await page.waitForFunction(() => window.__souk?.ready && !document.getElementById('title').hidden, null, { timeout: 180_000 });
info.mimeType = await page.evaluate(() => {
  const mimeType = ['video/webm;codecs=h264,opus', 'video/webm;codecs=vp9,opus', 'video/webm;codecs=vp8,opus'].find((t) => MediaRecorder.isTypeSupported(t));
  const rec = new MediaRecorder(window.__stream, { mimeType, videoBitsPerSecond: 16_000_000, audioBitsPerSecond: 192_000 });
  let q = Promise.resolve();
  rec.ondataavailable = (e) => {
    if (!e.data.size) return;
    q = q
      .then(() => new Promise((r) => { const fr = new FileReader(); fr.onload = () => r(fr.result.slice(fr.result.indexOf('base64,') + 7)); fr.readAsDataURL(e.data); }))
      .then((b64) => window.__recChunk(b64));
  };
  window.__rec = rec;
  window.__recDone = new Promise((r) => { rec.onstop = () => q.then(r); });
  rec.start(1000);
  window.__recT0 = performance.now();
  return mimeType;
});
log('recording', JSON.stringify(info));

const meta = { url: URL, info, beginAt: null, chapters: [], endAt: null };
await page.waitForTimeout(6000); // a few seconds of the title screen
await page.evaluate(() => { if (window.__souk.G.input) window.__souk.G.input.wantsLock = false; });
await page.click('#btn-begin');
await page.mouse.move(W / 2, H / 2); // park the virtual mouse on the crosshair
await page.evaluate(() => window.__souk.autoplay(true));
meta.beginAt = await page.evaluate(() => (performance.now() - window.__recT0) / 1000);
log('journey started at', meta.beginAt.toFixed(1));

const t0 = Date.now();
let seenFinale = false;
while (Date.now() - t0 < MAX_MS && !fs.existsSync(STOP_FILE)) {
  const st = await page.evaluate(() => ({
    ch: window.__souk?.G?.director?.chapter ?? null,
    paused: !!document.getElementById('pause')?.open,
    t: (performance.now() - window.__recT0) / 1000,
  }));
  if (st.ch && meta.chapters.at(-1)?.ch !== st.ch) {
    if (seenFinale && st.ch === 'welcome') { meta.endAt = st.t; log('autopilot looped back to welcome -> stop at', st.t.toFixed(1)); break; }
    meta.chapters.push({ ch: st.ch, t: st.t });
    log('chapter', st.ch, 'at', st.t.toFixed(1), `(${(bytes / 1e6).toFixed(0)} MB)`);
  }
  if (st.ch === 'finale') seenFinale = true;
  if (st.paused) log('WARNING: pause dialog open');
  fs.writeFileSync(META, JSON.stringify(meta, null, 1));
  await page.waitForTimeout(250);
}
if (meta.endAt == null) meta.endAt = await page.evaluate(() => (performance.now() - window.__recT0) / 1000);
await page.evaluate(async () => { window.__rec.stop(); await window.__recDone; });
await new Promise((r) => out.end(r));
fs.writeFileSync(META, JSON.stringify(meta, null, 1));
log('done', (bytes / 1e6).toFixed(1), 'MB', JSON.stringify(meta));
await browser.close();
