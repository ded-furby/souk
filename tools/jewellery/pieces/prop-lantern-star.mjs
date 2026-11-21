// Moroccan star lantern: 14 pierced pyramids around a core, soldered seams, glowing inside. Hook at origin.
import { THREE, M, pierced, bands, mesh, flatShade, scaleUV, hanger, orient, wire, bead, lathe } from './_props-common.mjs';

export function build() {
  const root = new THREE.Group();
  const P = pierced((c, w, h) => bands(c, w, h, '#b98a4a', [
    { from: 0.0, to: 0.06, bg: '#6e4e2a' },
    { from: 0.1, to: 0.46, m: 'almond', n: 4, hole: true, s: 0.2 },
    { from: 0.1, to: 0.2, m: 'dots', n: 4, off: true, hole: true, s: 0.2 },
    { from: 0.5, to: 0.68, m: 'diamond', n: 4, hole: true, s: 0.16 },
    { from: 0.72, to: 0.8, m: 'dots', n: 4, hole: true, s: 0.2 },
  ]));
  const { group, y } = hanger(4);
  root.add(group);
  const a = 0.05, cy = y - 0.035 - 0.085 - a;
  const star = new THREE.Group(), glass = new THREE.Group();
  const spike = (dir, sides, rad, h, base) => {
    const geo = flatShade(new THREE.ConeGeometry(rad, h, sides, 1, true, sides === 4 ? Math.PI / 4 : 0));
    if (sides === 3) scaleUV(geo, 0.75, 1);
    const g = new THREE.Group();
    g.add(mesh(geo, P, [0, h / 2, 0]));
    for (let i = 0; i < sides; i++) {
      const t = (i / sides) * Math.PI * 2 + (sides === 4 ? Math.PI / 4 : 0);
      g.add(wire([[Math.sin(t) * rad, 0, Math.cos(t) * rad], [0, h, 0]], 0.0016, { radial: 4, caps: false, segLen: 1, mat: M.brass }));
    }
    g.add(bead(0.004, [0, h, 0], M.brass, 6));
    const d = new THREE.Vector3(...dir).normalize();
    orient(g, d.clone().multiplyScalar(base), d);
    star.add(g);
    const gl = mesh(new THREE.ConeGeometry(rad * 0.86, h * 0.86, sides, 1, true, sides === 4 ? Math.PI / 4 : 0), M.lampGlass, [0, h * 0.43, 0]);
    const gg = new THREE.Group(); gg.add(gl); orient(gg, d.clone().multiplyScalar(base), d); glass.add(gg);
  };
  spike([0, 1, 0], 4, a * Math.SQRT2, 0.085, a);
  spike([0, -1, 0], 4, a * Math.SQRT2, 0.19, a);
  for (const d of [[1, 0, 0], [-1, 0, 0], [0, 0, 1], [0, 0, -1]]) spike(d, 4, a * Math.SQRT2, 0.115, a);
  for (const sx of [-1, 1]) for (const sy of [-1, 1]) for (const sz of [-1, 1]) spike([sx, sy, sz], 3, 0.05, 0.085, a * 1.25);
  star.position.y = glass.position.y = cy;
  root.add(star, glass);
  // cap between chain and top spike
  root.add(lathe([[0.003, y - 0.035], [0.012, y - 0.03], [0.006, y - 0.02], [0.009, y - 0.012], [0.003, y]], { seg: 8, n: 10 }));
  root.add(bead(0.007, [0, cy - a - 0.19 - 0.006, 0], M.brass, 8));
  return root;
}
