// Engraved round lidded brass container. Part `lid`: pivot at the back of its rim (rotate about local X to open).
import { THREE, M, engraved, bands, lathe, mesh, ring, bead, BR, BRL } from './_props-common.mjs';

export function build() {
  const root = new THREE.Group();
  const E = engraved((c, w, h) => bands(c, w, h, BR, [
    { from: 0.04, to: 0.2, fg: BRL, m: 'tri', n: 32 },
    { from: 0.24, to: 0.76, fg: BRL, m: ['ring', 'star'], n: 12, edge: BRL, s: 0.36 },
    { from: 0.24, to: 0.76, fg: BRL, m: 'diamond', n: 12, off: true, s: 0.12 },
    { from: 0.8, to: 0.96, fg: BRL, m: 'triDown', n: 32 },
  ]), { w: 512, h: 128 });
  const R = 0.07, H = 0.066;
  root.add(mesh(new THREE.CylinderGeometry(R, R, H - 0.008, 32, 1, true), E, [0, H / 2 + 0.002, 0]));
  root.add(lathe([[0.064, 0], [R + 0.003, 0.002], [R + 0.003, 0.007], [R, 0.009]], { seg: 32 }));
  root.add(lathe([[R, H - 0.004], [R + 0.001, H], [R - 0.004, H], [R - 0.004, 0.008], [0, 0.008]], { seg: 32 }));
  const lid = new THREE.Group();
  lid.name = 'lid'; lid.userData.part = true;
  lid.position.set(0, H, -R);
  const L = new THREE.Group(); L.position.z = R; lid.add(L);
  const top = engraved((c, w, h) => bands(c, w, h, BR, [
    { from: 0.0, to: 0.12, fg: BRL, m: 'dots', n: 36, s: 0.22 },
    { from: 0.16, to: 0.42, fg: BRL, m: ['wave'], n: 12, edge: BRL },
    { from: 0.46, to: 0.92, fg: BRL, m: 'petal', n: 12, lw: 2 },
  ]), { w: 256, h: 128, name: 'EngravedBrassLid' });
  L.add(lathe([[R + 0.004, 0], [R + 0.004, 0.009], [R - 0.002, 0.012]], { seg: 32 }));
  L.add(lathe([[R - 0.002, 0.012], [0.05, 0.022], [0.02, 0.03], [0.008, 0.031]], { seg: 32, n: 10, mat: top }));
  L.add(lathe([[0.008, 0.031], [0.005, 0.036], [0.011, 0.044], [0.006, 0.052], [0, 0.056]], { seg: 12, n: 10 }));
  root.add(lid);
  return root;
}
