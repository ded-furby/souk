// Short hanging string of small brass bells. Hook at origin, hangs −Y.
import { THREE, M, lathe, mesh, bead, wire, hanger } from './_props-common.mjs';

function bell(r, h, mat) {
  const g = new THREE.Group();
  g.add(lathe([[0, -h * 0.3], [r * 0.7, -h * 0.62], [r * 0.93, -h * 0.98], [r * 1.1, -h], [r * 1.02, -h * 0.9], [r * 0.82, -h * 0.55], [r * 0.5, -h * 0.2], [r * 0.2, -h * 0.03], [0, 0]].reverse(), { seg: 10, n: 10, mat, auto: false }));
  g.add(mesh(new THREE.TorusGeometry(r * 0.2, r * 0.07, 4, 8), M.brass, [0, r * 0.16, 0]));
  g.add(bead(r * 0.22, [0, -h * 0.95, 0], M.brassDark, 6));
  return g;
}
export function build() {
  const root = new THREE.Group();
  const { group, y } = hanger(2, { R: 0.01, link: 0.014 });
  root.add(group);
  const specs = [[0.017, 0.03, M.brass], [0.021, 0.034, M.copper], [0.016, 0.028, M.brass], [0.024, 0.04, M.brass], [0.018, 0.03, M.copper]];
  let yy = y;
  const pts = [[0, y, 0]];
  specs.forEach(([r, h, mat], i) => {
    yy -= 0.048 + r;
    const s = i % 2 ? -1 : 1;
    pts.push([s * 0.004, yy + 0.02, s * 0.003]);
    const b = bell(r, h, mat);
    b.position.set(s * (r * 0.75), yy - 0.006, s * 0.006);
    b.rotation.z = s * 0.16; b.rotation.y = i * 1.3;
    root.add(b);
    root.add(wire([[s * 0.004, yy + 0.02, s * 0.003], [s * r * 0.7, yy + 0.004, s * 0.006]], 0.0012, { radial: 4, segLen: 1, caps: false, mat: M.brassDark }));
  });
  // end: larger bell on the cord axis
  yy -= 0.07;
  pts.push([0, yy + 0.008, 0]);
  const end = bell(0.03, 0.048, M.brass); end.position.y = yy; root.add(end);
  root.add(wire(pts, 0.0018, { radial: 5, segLen: 0.02, mat: M.brassDark }));
  return root;
}
