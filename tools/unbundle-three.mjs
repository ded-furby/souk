// One-off: map the minified three.js chunk's exports (assets/three-CJrR38H-.js) back to real three.js r186
// names by fingerprinting (prototype methods, statics, instance .type / is* flags, constant values).
// usage: node tools/unbundle-three.mjs  -> prints JSON { chunkExport: "module#Name" } and unmatched names
import { chromium } from './jewellery/node_modules/playwright-core/index.mjs';
import http from 'node:http';
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const repo = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const threeDir = path.join(repo, 'tools/jewellery/node_modules/three');
const server = http.createServer((req, res) => {
  const u = decodeURIComponent(new URL(req.url, 'http://x').pathname);
  const file = u.startsWith('/three/') ? path.join(threeDir, u.slice(7)) : path.join(repo, u);
  fs.readFile(file, (e, d) => {
    if (e) { res.writeHead(404); return res.end(); }
    res.writeHead(200, { 'content-type': file.endsWith('.html') ? 'text/html' : 'text/javascript' });
    res.end(d);
  });
}).listen(0, '127.0.0.1');
await new Promise((r) => server.once('listening', r));
fs.writeFileSync(path.join(repo, 'tools/_unbundle.html'),
  `<!doctype html><script type="importmap">{"imports":{"three":"/three/build/three.module.js","three/addons/":"/three/examples/jsm/"}}</script><body>`);

const ADDONS = [
  'loaders/GLTFLoader.js', 'loaders/DRACOLoader.js', 'loaders/KTX2Loader.js', 'loaders/RGBELoader.js', 'loaders/HDRLoader.js', 'loaders/EXRLoader.js',
  'libs/meshopt_decoder.module.js', 'utils/BufferGeometryUtils.js', 'utils/SkeletonUtils.js', 'environments/RoomEnvironment.js',
  'postprocessing/EffectComposer.js', 'postprocessing/RenderPass.js', 'postprocessing/UnrealBloomPass.js', 'postprocessing/OutputPass.js',
  'postprocessing/ShaderPass.js', 'postprocessing/Pass.js', 'postprocessing/SMAAPass.js', 'postprocessing/BokehPass.js', 'postprocessing/GTAOPass.js',
  'postprocessing/SSAOPass.js', 'postprocessing/FXAAPass.js', 'shaders/FXAAShader.js', 'shaders/VignetteShader.js', 'shaders/ColorCorrectionShader.js',
  'webxr/XRControllerModelFactory.js', 'webxr/XRHandModelFactory.js', 'webxr/VRButton.js', 'webxr/XRButton.js', 'controls/PointerLockControls.js',
  'objects/Reflector.js', 'objects/Sky.js', 'objects/Water.js', 'geometries/RoundedBoxGeometry.js', 'math/SimplexNoise.js', 'math/ImprovedNoise.js',
  'lines/Line2.js', 'lines/LineMaterial.js', 'lines/LineGeometry.js', 'misc/Timer.js', 'animation/CCDIKSolver.js',
];

const browser = await chromium.launch({ channel: 'chrome', headless: true, args: ['--enable-unsafe-swiftshader'] });
const page = await browser.newPage();
await page.goto(`http://127.0.0.1:${server.address().port}/tools/_unbundle.html`);
const result = await page.evaluate(async (ADDONS) => {
  const chunk = await import('/assets/three-CJrR38H-.js');
  const sources = { three: await import('three') };
  for (const a of ADDONS) { try { sources[a] = await import(`/three/examples/jsm/${a}`); } catch (e) { /* missing addon in r186 */ } }
  const SKIP = new Set(['length', 'name', 'prototype', 'arguments', 'caller']);
  const inst = (v) => { try { const o = new v(); return [o.type, ...Object.keys(o).filter((k) => k.startsWith('is'))].join(','); } catch { return '?'; } };
  const fp = (v) => {
    if (v === null || v === undefined) return `nil:${v}`;
    if (typeof v !== 'function' && typeof v !== 'object') return `${typeof v}:${String(v)}`;
    if (typeof v === 'object') return `obj:${Object.keys(v).sort().join(',')}`;
    const proto = v.prototype ? Object.getOwnPropertyNames(v.prototype).filter((k) => k !== 'constructor').sort().join(',') : 'noproto';
    const stat = Object.getOwnPropertyNames(v).filter((k) => !SKIP.has(k)).sort().join(',');
    return `fn${v.length}|${proto}|${stat}`;
  };
  const index = new Map();
  for (const [mod, ns] of Object.entries(sources))
    for (const [name, v] of Object.entries(ns)) {
      const k = fp(v);
      if (!index.has(k)) index.set(k, []);
      index.get(k).push({ mod, name, v });
    }
  const map = {}, unmatched = [], ambiguous = {};
  for (const [ck, v] of Object.entries(chunk)) {
    let cands = index.get(fp(v)) || [];
    if (cands.length > 1 && typeof v === 'function') {
      const t = inst(v);
      const narrowed = cands.filter((c) => inst(c.v) === t);
      if (narrowed.length) cands = narrowed;
    }
    if (cands.length > 1 && typeof v === 'function') {
      const narrowed = cands.filter((c) => c.v.name === v.name || c.name === v.name);
      if (narrowed.length) cands = narrowed;
    }
    if (!cands.length) { unmatched.push(`${ck} (${typeof v}) ${fp(v).slice(0, 160)}`); continue; }
    const core = cands.filter((c) => c.mod === 'three');
    const pick = (core.length ? core : cands)[0];
    map[ck] = `${pick.mod}#${pick.name}`;
    if (cands.length > 1 && typeof v === 'function') ambiguous[ck] = cands.map((c) => `${c.mod}#${c.name}`);
  }
  return { map, unmatched, ambiguous, total: Object.keys(chunk).length };
}, ADDONS);
console.log(JSON.stringify(result, null, 1));
await browser.close();
server.close();
fs.unlinkSync(path.join(repo, 'tools/_unbundle.html'));
