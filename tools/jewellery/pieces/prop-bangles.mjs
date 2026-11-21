// A stack of assorted metal bangles on a turned wooden cone stand.
import { THREE, M, lathe, lobes, mesh, rng } from './_props-common.mjs';

export function build() {
  const root = new THREE.Group(), R = rng(5);
  const y0 = 0.016, y1 = 0.25, ra = 0.045, rb = 0.013, cone = (y) => ra + ((y - y0) / (y1 - y0)) * (rb - ra);
  root.add(lathe([[0, 0], [0.058, 0], [0.061, 0.004], [0.056, 0.009], [0.047, 0.011], [ra, y0], [rb, y1], [0.01, 0.255], [0.016, 0.265], [0.011, 0.277], [0, 0.282]], { seg: 20, mat: M.woodDark }));
  const stack = (inner, list) => {
    let y = y0 + ((ra - inner) / (ra - rb)) * (y1 - y0);
    for (const [rt, mat, kind] of list) {
      y += rt;
      const Rm = inner + rt, slack = Math.max(0, inner - cone(y)) * 0.9, a = R() * 6.28;
      let b;
      if (kind === 'band') { b = lathe([[Rm - 0.0012, -rt], [Rm + 0.0012, -rt * 0.7], [Rm + 0.002, 0], [Rm + 0.0012, rt * 0.7], [Rm - 0.0012, rt], [Rm - 0.0012, -rt]], { seg: 24, mat, auto: false }); lobes(b, 12, 0.03); }
      else b = mesh(new THREE.TorusGeometry(Rm, rt, 5, 20), mat, null, [Math.PI / 2, 0, 0]);
      const g = new THREE.Group(); g.add(b);
      g.position.set(Math.cos(a) * slack, y, Math.sin(a) * slack);
      g.rotation.set((R() - 0.5) * 0.12, R() * 6, (R() - 0.5) * 0.12);
      root.add(g);
      y += rt * 0.95;
    }
  };
  stack(0.04, [[0.0045, M.brass], [0.006, M.copper, 'band'], [0.003, M.gold]]);
  stack(0.032, [[0.004, M.gold], [0.0028, M.copper], [0.0028, M.gold], [0.0065, M.brass, 'band'], [0.0035, M.gold], [0.0045, M.copper], [0.0025, M.gold], [0.0025, M.gold]]);
  return root;
}
