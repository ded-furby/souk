# Patch 02: Gold Souk — props kit on the stalls, more lanterns, optional interactions.
import sys
path = sys.argv[1]
s = open(path).read()
def rep(old, new, count=1):
    global s
    n = s.count(old)
    assert n == count, f"expected {count}x, found {n}x: {old[:90]!r}"
    s = s.replace(old, new)

rep("cuffFlowerSized } from \"./kp.js\";",
    "cuffFlowerSized, PROPS, prepareProps, dressSouk, soukInteractions, soukTick } from \"./kp.js\";")
# load the props kit with the other models
rep("  n(`Arranging the gallery…`);", """  let kpProps = {};
  await Promise.all(
    PROPS.map(async (e) => {
      try {
        kpProps[e] = (await i.loadAsync(`${$n}assets/models/props/${e}.glb`)).scene;
      } catch {}
    }),
  ),
    prepareProps(kpProps, r);
  n(`Arranging the gallery…`);""")
rep("artisan: v(u), collection: _ };", "artisan: v(u), collection: _, props: kpProps };")
# stall tables: free alternate slots for curated props (keep the seeded a() sequence intact)
rep("""      for (let t = 0; t < 7; t++)
        e.vase(l + (a() - 0.5) * 0.3, n, o - 1.4 + t * 0.46, t % 4, 0.75 + a() * 0.5, i[t % 3]);""",
    """      for (let t = 0; t < 7; t++)
        (t % 2 ? e.vase.bind(e) : () => {})(l + (a() - 0.5) * 0.3, n, o - 1.4 + t * 0.46, t % 4, 0.75 + a() * 0.5, i[t % 3]);""")
rep("""      for (let r = 0; r < 6; r++)
        e.vase(l + (a() - 0.5) * 0.3, n, o - 1.35 + r * 0.54, r % 4, 0.8 + a() * 0.6, r % 2 ? t.brass : t.copper);""",
    """      for (let r = 0; r < 6; r++)
        (r % 2 ? e.vase.bind(e) : () => {})(l + (a() - 0.5) * 0.3, n, o - 1.35 + r * 0.54, r % 4, 0.8 + a() * 0.6, r % 2 ? t.brass : t.copper);""")
rep("for (let r = 0; r < 5; r++) e.vase(l, n, o - 1.3 + r * 0.65, 3, 0.9, t.brass);",
    "for (let r = 0; r < 5; r++) r % 2 && e.vase(l, n, o - 1.3 + r * 0.65, 3, 0.9, t.brass);")
rep("for (let n = 0; n < 4; n++) e.vase(l, 0.8, o - 1 + n * 0.6, 3, 0.8, t.brassDark);",
    "for (let n = 0; n < 4; n++) n % 2 || e.vase(l, 0.8, o - 1 + n * 0.6, 3, 0.8, t.brassDark);")
# dress the stalls and beams right after the stalls are built (before static batching)
rep("""  d.forEach((e, t) => {
    x(-1, e, C[t]), x(1, e, w[t]);
  });""", """  d.forEach((e, t) => {
    x(-1, e, C[t]), x(1, e, w[t]);
  });
  let kpSouk = dressSouk({ props: n.props, group: i, rows: u, bays: d, left: C, right: w, M: t });""")
rep("""    ie.push({ position: R(0, 3.2, 1.8), color: `#ffe1b0`, intensity: 6, distance: 9 }),
    {
      id: `souk`,""", """    ie.push(...kpSouk.lights),
    ie.push({ position: R(0, 3.2, 1.8), color: `#ffe1b0`, intensity: 6, distance: 9 }),
    {
      id: `souk`,
      kp: kpSouk,""")
rep("""      update(e) {
        re.update(e);""", """      update(e, kpDt, kpHead) {
        re.update(e);""")
rep("        te.material.emissiveIntensity = 2.4 * (0.95 + Math.sin(e * 8.1) * 0.03) * (1 + (this.lanternBoost || 0));\n      },\n      music: `mus_souk`,",
    "        te.material.emissiveIntensity = 2.4 * (0.95 + Math.sin(e * 8.1) * 0.03) * (1 + (this.lanternBoost || 0));\n"
    "        soukTick(kpSouk, kpDt || 0.016, kpHead, te.material.emissiveIntensity);\n      },\n      music: `mus_souk`,")
rep("""    setupAmbientReactions() {
      let e = this.G,
        t = e.areas.souk;""", """    setupAmbientReactions() {
      let e = this.G,
        t = e.areas.souk;
      t.kp && soukInteractions(e, t.kp);""")
open(path, "w").write(s)
print("patched", path)
