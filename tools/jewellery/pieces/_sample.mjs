// Smoke test for the toolkit: a stem with leaves, a flower, a gem, a spiral and a mirrored copy.
import { THREE, MAT, wire, leaf, flower, gem, spiral, chain, mirrorX, orient } from '../lib.mjs';

export function build() {
  const root = new THREE.Group();
  const half = new THREE.Group();
  half.add(wire([[0, -0.03, 0], [0.006, -0.01, 0.002], [0.004, 0.012, 0.003], [0.012, 0.03, 0]], 0.0007, { taper: [1, 0.5] }));
  half.add(wire(spiral({ center: [0.014, 0.03, 0], r0: 0.004, r1: 0.0012, turns: 1.3, a0: Math.PI }), 0.0005));
  for (const [y, a] of [[-0.018, -0.8], [0.0, 0.9], [0.018, -0.7]]) {
    const l = leaf({ length: 0.016, width: 0.007, veins: 3, cup: 0.35, bend: 0.1 });
    half.add(orient(l, [0.005, y, 0.002], [Math.sin(a), Math.cos(a) * 0.6, 0.15]));
  }
  root.add(half, mirrorX(half));
  const f = flower({ petals: 5, radius: 0.009, cup: 0.5, center: 'pearl' });
  f.position.set(0, 0.034, 0.004);
  f.userData.part = true;
  f.name = 'flower';
  root.add(f);
  root.add(gem(0.0022, [0, -0.034, 0.002]));
  root.add(chain([[-0.02, -0.04, 0], [0, -0.048, 0.003], [0.02, -0.04, 0]], 0.0008));
  return root;
}
