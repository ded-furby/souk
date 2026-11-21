// Hexagonal lantern: corner posts, arched fretwork panels over glowing glass, leaf crown, pyramid roof. Hook at origin.
import { THREE, M, pierced, motif, bands, mesh, flatShade, hanger, lathe, bead, leaf } from './_props-common.mjs';

export function build() {
  const root = new THREE.Group();
  const P = pierced((c, w, h) => {
    bands(c, w, h, '#b98a4a', [
      { from: 0.0, to: 0.12, m: 'diamond', n: 4, hole: true, s: 0.34 },
      { from: 0.9, to: 0.98, m: 'dots', n: 6, hole: true, s: 0.28 },
    ]);
    c.globalCompositeOperation = 'destination-out';
    motif.arch(c, w * 0.08, h * 0.14, w * 0.84, h * 0.72, {});
    c.globalCompositeOperation = 'source-over';
    // tracery inside the arch: mullion + quatrefoil ring
    c.fillStyle = c.strokeStyle = '#b98a4a'; c.lineWidth = w * 0.03;
    c.fillRect(w * 0.485, h * 0.34, w * 0.03, h * 0.52);
    c.beginPath(); c.arc(w / 2, h * 0.36, w * 0.13, 0, 7); c.stroke();
    c.beginPath(); c.moveTo(w * 0.17, h * 0.62); c.lineTo(w * 0.83, h * 0.62); c.stroke();
  }, { w: 128, h: 256 });
  const { group, y } = hanger(3);
  root.add(group);
  const R = 0.095, H = 0.25, roofH = 0.085, top = y - 0.03 - roofH, bot = top - H, side = R, inR = R * Math.cos(Math.PI / 6);
  const body = new THREE.Group();
  body.rotation.y = Math.PI / 6;
  // roof + cap
  root.add(lathe([[0.003, y], [0.01, y - 0.008], [0.005, y - 0.018], [0.014, y - 0.03]], { seg: 8, n: 8 }));
  body.add(mesh(flatShade(new THREE.ConeGeometry(R * 1.12, roofH, 6, 1, true)), M.brass, [0, top + roofH / 2, 0]));
  body.add(mesh(flatShade(new THREE.CylinderGeometry(R * 1.12, R * 1.06, 0.014, 6)), M.brassDark, [0, top - 0.007, 0]));
  body.add(mesh(flatShade(new THREE.CylinderGeometry(R * 1.06, R * 1.12, 0.016, 6)), M.brassDark, [0, bot + 0.008, 0]));
  body.add(mesh(flatShade(new THREE.ConeGeometry(R * 1.1, 0.05, 6, 1, true)), M.brass, [0, bot - 0.025, 0], [Math.PI, 0, 0]));
  root.add(bead(0.011, [0, bot - 0.056, 0], M.brass, 8), bead(0.005, [0, bot - 0.07, 0], M.brass, 6));
  for (let i = 0; i < 6; i++) {
    const a = (i / 6) * Math.PI * 2, s = Math.sin(a), co = Math.cos(a);
    body.add(mesh(new THREE.CylinderGeometry(0.006, 0.006, H, 5), M.brass, [s * R, top - H / 2, co * R]));
    body.add(bead(0.008, [s * R * 1.1, top + 0.004, co * R * 1.1], M.brass, 6));
    const am = a + Math.PI / 6, sm = Math.sin(am), cm = Math.cos(am);
    const p = mesh(new THREE.PlaneGeometry(side, H - 0.028), P, [sm * inR, top - H / 2, cm * inR], [0, am, 0]);
    const gl = mesh(new THREE.PlaneGeometry(side * 0.96, H - 0.028), M.lampGlass, [sm * (inR - 0.008), top - H / 2, cm * (inR - 0.008)], [0, am, 0]);
    body.add(p, gl);
    // crown leaf on each side
    const l = leaf({ length: 0.045, width: 0.03, segU: 6, segV: 2, rib: false, bend: 0.5, cup: 0.2, thick: 0.001, mat: M.brass });
    l.position.set(sm * inR * 1.1, top - 0.002, cm * inR * 1.1); l.rotation.y = am;
    body.add(l);
  }
  root.add(body);
  return root;
}
