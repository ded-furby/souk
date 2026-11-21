# Patch 05: "Cinematic" (high) quality — GTAO ambient occlusion, softer 4k sun shadows, bevelled box edges.
import sys
path = sys.argv[1]
s = open(path).read()
def rep(old, new, count=1):
    global s
    n = s.count(old)
    assert n == count, f"expected {count}x, found {n}x: {old[:90]!r}"
    s = s.replace(old, new)

rep('import { clone as oe } from "three/addons/utils/SkeletonUtils.js";',
    'import { clone as oe } from "three/addons/utils/SkeletonUtils.js";\n'
    'import { GTAOPass } from "three/addons/postprocessing/GTAOPass.js";\n'
    'import { RoundedBoxGeometry } from "three/addons/geometries/RoundedBoxGeometry.js";')
# ambient occlusion right after the scene render, before bloom
rep("""  wt = class {
    constructor(e, t, n) {
      this.renderer = e;
      let r = new be(1, 1, { type: ge, samples: 4 });
      (this.composer = new pe(e, r)),
        this.composer.addPass(new De(t, n)),""", """  wt = class {
    constructor(e, t, n, ao = !1) {
      this.renderer = e;
      let r = new be(1, 1, { type: ge, samples: 4 });
      if (((this.composer = new pe(e, r)), this.composer.addPass(new De(t, n)), ao)) {
        // contact shadows where stone meets stone, under stalls, around props — desktop "Cinematic" only
        (this.ao = new GTAOPass(t, n, innerWidth, innerHeight)),
          (this.ao.blendIntensity = 0.85),
          this.ao.updateGtaoMaterial({ radius: 0.45, distanceExponent: 1, thickness: 1.2, scale: 1.1, samples: 12 }),
          this.ao.updatePdMaterial({ lumaPhi: 10, depthPhi: 2, normalPhi: 3, radius: 4, rings: 2, samples: 12 }),
          this.composer.addPass(this.ao);
      }
      this.composer,""")
rep("new wt(W, ar, G)", "new wt(W, ar, G, U.quality === `high`)")
# sun shadows: 4k map and soft PCF edges on high
rep("      let o = a === `low` ? 1024 : 2048;", "      let o = a === `low` ? 1024 : a === `high` ? 4096 : 2048;")
rep("""        (this.sun.shadow.bias = -4e-4),
        (this.sun.shadow.normalBias = 0.03),""", """        (this.sun.shadow.bias = -4e-4),
        (this.sun.shadow.normalBias = 0.03),
        (this.sun.shadow.radius = a === `high` ? 2.5 : 1),""")
# bevelled edges on every builder box (catch the light like carved stone and planed wood)
rep("""  box(e, t, n, r, i, a, o = this.M.stone, s, c = 1) {
    return this.mesh(lt(new ye(e, t, n), c), o, r, i, a, s);
  }""", """  box(e, t, n, r, i, a, o = this.M.stone, s, c = 1) {
    let l = Math.min(e, t, n),
      u = U.quality === `high` && l >= 0.03 ? new RoundedBoxGeometry(e, t, n, 1, Math.min(0.02, l * 0.22)) : new ye(e, t, n);
    return this.mesh(lt(u, c), o, r, i, a, s);
  }""")
# gallery niches: a little less light so the gold filigree reads as metal, not glow
rep("""    color: `#ffd9a6`,
    intensity: 2.2,
    distance: 2.6,
    niche: !0,""", """    color: `#ffd9a6`,
    intensity: 1.5,
    distance: 2.6,
    niche: !0,""")
open(path, "w").write(s)
print("patched", path)
