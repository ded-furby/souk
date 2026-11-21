// Standing table mirror: ogee-arched engraved brass frame, crest finial, easel leg. Leans back slightly.
import { THREE, M, engraved, mesh, bead, lathe, wire, planarUV, BR, BRL, motif } from './_props-common.mjs';

const arch = (a, y0, hs, apex) => {
  const s = new THREE.Shape();
  s.moveTo(-a, y0); s.lineTo(a, y0); s.lineTo(a, hs);
  s.bezierCurveTo(a, hs + (apex - hs) * 0.55, a * 0.22, hs + (apex - hs) * 0.62, 0, apex);
  s.bezierCurveTo(-a * 0.22, hs + (apex - hs) * 0.62, -a, hs + (apex - hs) * 0.55, -a, hs);
  s.closePath();
  return s;
};
export function build() {
  const root = new THREE.Group();
  const E = engraved((c, w, h) => {
    c.fillStyle = BR; c.fillRect(0, 0, w, h);
    c.fillStyle = c.strokeStyle = BRL; c.lineWidth = 2;
    motif.flower(c, 0, 0, w, h, { s: 0.2, k: 4 });
    motif.ring(c, 0, 0, w, h, { s: 0.44 });
    for (const [x, y] of [[0, 0], [w, 0], [0, h], [w, h]]) { c.beginPath(); c.arc(x, y, w * 0.14, 0, 7); c.fill(); }
  }, { w: 64, h: 64 });
  const g = new THREE.Group();
  const outer = arch(0.13, 0, 0.25, 0.42), inner = arch(0.1, 0.03, 0.25, 0.372);
  outer.holes.push(inner);
  const fg = new THREE.ExtrudeGeometry(outer, { depth: 0.012, bevelEnabled: true, bevelThickness: 0.003, bevelSize: 0.003, bevelSegments: 1, curveSegments: 10 });
  planarUV(fg, 'x', 'y', 1 / 0.03, 1 / 0.03, 0, 0);
  g.add(mesh(fg, E));
  // inner bead moulding (a thin raised lip) + mirror glass
  const lip = arch(0.104, 0.026, 0.25, 0.378); lip.holes.push(arch(0.097, 0.033, 0.25, 0.367));
  g.add(mesh(new THREE.ExtrudeGeometry(lip, { depth: 0.004, bevelEnabled: false, curveSegments: 10 }), M.brass, [0, 0, 0.012]));
  g.add(mesh(new THREE.ShapeGeometry(arch(0.101, 0.029, 0.25, 0.373), 10), M.mirror, [0, 0, 0.006]));
  g.add(mesh(new THREE.ShapeGeometry(arch(0.128, 0.002, 0.25, 0.417), 10), M.woodDark, [0, 0, -0.0035], [0, Math.PI, 0]));
  // crest + studs
  const crest = lathe([[0.006, 0], [0.012, 0.008], [0.005, 0.016], [0.009, 0.026], [0, 0.04]], { seg: 10, n: 10 });
  crest.position.set(0, 0.418, 0.006); g.add(crest);
  for (const [x, y] of [[-0.115, 0.015], [0.115, 0.015], [-0.115, 0.25], [0.115, 0.25], [0, 0.395]]) g.add(bead(0.007, [x, y, 0.014], M.brass, 8));
  for (const s of [-1, 1]) g.add(bead(0.012, [s * 0.118, 0.008, 0.004], M.brass, 8));
  g.rotation.x = -0.2;
  root.add(g);
  // easel leg hinged near the top of the back
  const top = new THREE.Vector3(0, 0.3, -0.004).applyEuler(g.rotation);
  root.add(wire([top.toArray(), [0, 0.003, -0.17]], 0.005, { radial: 6, segLen: 1, mat: M.woodDark }));
  root.add(bead(0.007, top.toArray(), M.brass, 6));
  return root;
}
