// Comparison aid only: bun-cage turned so the `front` view matches the reference photo's camera.
import { THREE } from '../lib.mjs';
import { build as b, PHOTO_YAW } from './bun-cage.mjs';
export function build() { const g = b(); g.rotation.y = -PHOTO_YAW; const r = new THREE.Group(); r.add(g); return r; }
