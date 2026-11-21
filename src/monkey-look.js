// Monkey look upgrade (face, body, tail). Called once with the loaded monkey GLTF (monkey-anim.glb, or monkey.glb
// as a fallback) before the Monkey is created. Owned by the monkey-look work; keep the rig and animation clips intact.
// gltf: { scene, animations }; ctx: { M (game materials), renderer, quality }
export function upgradeMonkey(gltf, ctx) {}
