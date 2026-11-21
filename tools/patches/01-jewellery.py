# Patch 01: replace the invented "Pearl Bloom" jewellery with the real Kavya Potluri pieces.
# Every replacement must match exactly once. usage: python3 tools/patches/01-jewellery.py src/app.js
import sys

path = sys.argv[1]
s = open(path).read()


def rep(old, new, count=1):
    global s
    n = s.count(old)
    assert n == count, f"expected {count}x, found {n}x: {old[:90]!r}"
    s = s.replace(old, new)


def rep_between(start, end, new):
    """Replace from `start` (inclusive) up to and including `end`."""
    global s
    i = s.index(start)
    j = s.index(end, i) + len(end)
    assert s.count(start) == 1, start
    s = s[:i] + new + s[j:]


# --- imports
rep('import { clone as oe } from "three/addons/utils/SkeletonUtils.js";',
    'import { clone as oe } from "three/addons/utils/SkeletonUtils.js";\n'
    'import { fitTo, faceViewer, useGameMaterials, cuffAssemble, cuffPart, cuffFlowersBySize, cuffLeafAlongX, cuffFlowerSized } from "./kp.js";')

# --- loading: the missing jewel is the Floral Ear Cuff; the old "jewel-small" is gone
rep("      a(`jewel`),\n      a(`jewel-small`),", "      a(`floral-ear-cuff`),\n      Promise.resolve(null),")
rep("jewelSmall: v(l),", "jewelSmall: null,")
rep("""          t.map(async (e) => {
            try {
              let t = await i.loadAsync(`${$n}assets/models/collection/${e.file}`);""",
    """          t.map(async (e) => {
            if (e.kind) return e;
            try {
              let t = await i.loadAsync(`${$n}assets/models/collection/${e.file}`);""")

# --- collection (gallery niches, in niche order) and the missing piece
rep_between("var yn = [", "  bn = {\n", """var yn = [
    { id: `filigree-mask`, name: `Filigree Mask`, line: `Gold wire fountains from the bridge of the nose into a lace of buds, leaves and granulation, with crimped roses at the jaw.` },
    { id: `floral-crown`, name: `Floral Crown`, line: `A halo of gold roses, beaded sprays and veined leaves rising from a single slim band.` },
    { id: `filigree-sunglasses`, name: `Filigree Sunglasses`, line: `Round dark lenses framed in gold, wreathed in leaves and buds, with a granulated medallion at the bridge.` },
    { id: `bun-cage`, name: `Filigree Bun Cage`, line: `An openwork gold dome of leaves, florets and bead sprays, crowned by a winged creature with ladder-veined wings.` },
    { id: `finger-armour`, name: `Filigree Finger Armour`, line: `An openwork shield for the index finger and fine vine rings for the others, ending in bead-tipped tendrils.` },
    { id: `ear-cuff-study`, name: `Floral Ear Cuff · Study`, line: `The maker's drawing of the piece that belongs on the empty pedestal.` },
  ],
  bn = {
""")
rep("""    name: `The Pearl Bloom`,
    line: `Kavya Potluri — botanical filigree in gold, engraved leaves and a single pearl, made entirely by hand.`,""",
    """    name: `Floral Ear Cuff`,
    line: `Kavya Potluri — gold leaves, blossoms and beaded sprays climbing the ear from a single sculpted cuff.`,""")

# --- gallery displays: real pieces only (no procedural stand-in), optional facing, drawing for the study
rep("""    let s;
    if (r) {
      s = r.scene.clone();""",
    """    let s;
    if (r?.kind === `study`) {
      s = new h();
      let e = new ve().load(`${$n}assets/models/collection/${r.file}`);
      (e.colorSpace = Oe), (e.anisotropy = 4);
      let n = new S(new u(0.3, 0.3), new C({ map: e, roughness: 0.9 }));
      n.position.z = 0.004;
      let i = new S(new ye(0.33, 0.33, 0.012), t.woodDark);
      s.add(i, n), (s.rotation.x = -0.08);
      let a = new h();
      a.add(s), (s = a);
    } else if (r) {
      s = r.scene.clone();
      r.face && faceViewer(s, r.face);""")
rep("} else s = mn(t, 0.16, { pearl: !0 });", "} else s = new h();")
# --- gallery pedestal: brass relief of the missing cuff
rep("""  let g = mn({ ...t, gold: t.brassDark, pearl: t.brassDark }, 0.15);
  (g.rotation.x = -Math.PI / 2), (g.scale.z = 0.15), m.add(g), L(g);""",
    """  let g = fitTo(useGameMaterials(n.jewel.clone(), t, { Gold: t.brassDark, GoldAntique: t.brassDark, Pearl: t.brassDark }), 0.3);
  (g.rotation.x = -Math.PI / 2), (g.scale.z = 0.15), m.add(g), L(g);""")

# --- workshop: the doorway emblem is the cuff; the station props are cuff leaves in progress
rep("    l = mn(t, 0.62, { pearl: !0 });", "    l = fitTo(useGameMaterials(n.jewel.clone(), t), 1.1);")
rep("""    let d = n.jewelSmall.clone();
    d.scale.setScalar(0.38),""", """    let d = fitTo(useGameMaterials(cuffPart(n.jewel, `leaf`, Math.round((a + 200) * 3)), t), 0.07);
    d.scale.multiplyScalar(1),""")

# --- souk gold stall: the branded jewel is not market stock (props replace these in patch 02)
rep("        let t = n.jewelSmall.clone();", "        let t = new h();")
rep("        let l = n.jewelSmall.clone();", "        let l = new h();")

# --- finale: the pearl rises and the real cuff assembles around it from its own parts
rep("""        (this.bloom = mn(t, 0.19, {})),
        (this.bloom.rotation.x = -Math.PI / 2 + 0.5),
        n.group.add(this.bloom),
        (this.jewel = new h());
      let r = e.A.jewel.clone();
      r.scale.setScalar(0.6),
        (r.rotation.x = Math.PI / 2),
        this.jewel.add(r),""", """        (this.jewel = new h());
      let r = e.A.jewel.clone();
      (this.jewelModel = r),
        this.jewel.add(fitTo(r, 0.3)),""")
rep_between("      this.motes(s, `swirl`, 40),\n        (this.bloom.visible = !0),", "        (this.bloom.visible = !1),\n", """      this.motes(s, `swirl`, 40),
        (this.jewel.visible = !0),
        this.jewel.position.copy(s),
        this.jewel.rotation.set(0.12, 0.8, 0),
        this.jewel.scale.setScalar(1),
        cuffAssemble(this.jewelModel, 0),
        (this.finaleLight.off = !1),
        this.finaleLight.position.copy(s).add(R(0, 0.6, 0.5)),
        await P(e.settings.reduced ? 3 : 9, (e) => {
          this.pearl.position.lerpVectors(o, s, A(e * 2)),
            (this.pearl.material.emissiveIntensity = 0.4 + Math.sin(e * Math.PI) * 1.2),
            cuffAssemble(this.jewelModel, k((e - 0.1) / 0.85)),
            (this.jewel.rotation.y = 0.8 * (1 - A(e))),
            (this.finaleLight.intensity = 1 + Math.sin(e * Math.PI) * 6);
        }),
        await P(1.2, (e) => {
          this.pearl.scale.setScalar(Math.max(0.001, 1 - e)),
            (this.finaleLight.intensity = Math.sin(e * Math.PI) * 9 + 1);
        }),
""")
rep("(this.jewel.rotation.x = 0.5 + e * 0.2),", "(this.jewel.rotation.x = 0.12 + e * 0.1),")
rep("(this.jewel.rotation.x = 0.7 * (1 - e) + 0.05 * e),", "(this.jewel.rotation.x = 0.22 * (1 - e) + 0.05 * e),")

# --- golden arch: grown from the cuff's own leaves and blossoms, crowned by its largest blossom
rep("new gn(t, { width: 3.4, height: 4.4 })", "new gn(t, { width: 3.4, height: 4.4, cuff: e.A.jewel })")
rep("            o = pn(e, 0.32 + n() * 0.2, 0.08 + n() * 0.04, 0.007),",
    "            o = t.cuff ? useGameMaterials(cuffLeafAlongX(t.cuff, r, 0.32 + n() * 0.2 + 0 * n()), e) : pn(e, 0.32 + n() * 0.2, 0.08 + n() * 0.04, 0.007),")
rep("            a = fn(e, 0.16 + n() * 0.05, 5, 0.006);",
    "            a = t.cuff ? useGameMaterials(cuffFlowerSized(t.cuff, r, 2 * (0.16 + n() * 0.05)), e) : fn(e, 0.16 + n() * 0.05, 5, 0.006);")
rep("      (this.crown = mn(e, 0.62, { pearl: !0 })),",
    "      (this.crown = t.cuff ? useGameMaterials(cuffFlowerSized(t.cuff, cuffFlowersBySize(t.cuff)[0], 1.15), e) : mn(e, 0.62, { pearl: !0 })),")
rep("this.crown.scale.setScalar(Math.max(0.001, Ve(n))), hn(this.crown, n),",
    "this.crown.scale.setScalar(Math.max(0.001, Ve(n))), this.crown.userData.leaves ? hn(this.crown, n) : (this.crown.rotation.z = (1 - A(n)) * 1.6),")
rep("let i = new S(new T(0.05 + n() * 0.03, 16, 12), e.pearl.clone());",
    "let i = new S(new T(0.05 + n() * 0.03, 16, 12), (t.cuff ? e.gold : e.pearl).clone());")

# --- workshop craft bench: the piece being made is the cuff; the final step sets its largest blossom
rep("        (this.piece = mn(t, 0.085, {})),",
    "        (this.pieceModel = useGameMaterials(e.A.jewel.clone(), t)),\n        (this.piece = fitTo(this.pieceModel, 0.2)),")
rep("        (this.pearl = s(new T(0.019, 20, 14), t.pearl, 0.88, 0.985, o + 0.04)),",
    "        (this.pearl = new h()),\n        this.pearl.position.set(0.88, 0.985, o + 0.04),\n        n.add(this.pearl),\n"
    "        this.pearl.add(fitTo(useGameMaterials(cuffPart(e.A.jewel, `flower`, cuffFlowersBySize(e.A.jewel)[0]), t), 0.045).rotateX(-Math.PI / 2)),")
rep("        hn(this.piece, 0),", "        cuffAssemble(this.pieceModel, 0),")
rep("        hn(this.piece, 1),", "        cuffAssemble(this.pieceModel, 1),")
rep("""          hn(this.piece, e * 0.6),
            this.piece.userData.flowers.forEach((e) => e.scale.setScalar(0.001)),""",
    "          cuffAssemble(this.pieceModel, e * 0.6),")
rep("await P(1, (e) => hn(this.piece, 0.6 + 0.25 * e)),", "await P(1, (e) => cuffAssemble(this.pieceModel, 0.6 + 0.25 * e)),")
rep("await P(1.2, (e) => hn(this.piece, 0.85 + 0.15 * e)),", "await P(1.2, (e) => cuffAssemble(this.pieceModel, 0.85 + 0.15 * e)),")
rep("""        this.pearl.scale.setScalar(1),
        this.piece.userData.pearl && this.piece.remove(this.piece.userData.pearl),""",
    "        this.pearl.scale.setScalar(1),")
rep("""    addPearlToPiece() {
      if (this.piece.userData.pearl) return;
      let e = new S(new T(0.021, 20, 14), this.G.M.pearl);
      (e.position.z = 0.004), (e.castShadow = !0), this.piece.add(e), (this.piece.userData.pearl = e);
    }""", """    addPearlToPiece() {
      cuffAssemble(this.pieceModel, 1);
    }""")

# --- words: no pearl is set into the real piece
rep("Pick up the pearl", "Pick up the gold blossom", count=3)
rep("Set the pearl at the heart of the flower", "Set the blossom on the cuff", count=2)
rep("label: `Set the pearl`", "label: `Set the blossom`")
rep("`The pearl sits in the small brass dish on the right of the bench.`", "`The gold blossom sits in the small brass dish on the right of the bench.`")
rep("`With the pearl in hand, click the golden flower in the centre.`", "`With the blossom in hand, click the ear cuff in the centre.`")
rep("Set by hand, the pearl holds. The flower is whole.", "Set by hand, the blossom holds. The cuff is whole.")
rep("The same flower… on the doorway", "The same cuff… on the doorway")
rep("`One piece is missing — The Pearl Bloom`", "`One piece is missing — the ${bn.name}`")
rep("blurb: `Pour, shape, engrave and set the jewel.`", "blurb: `Pour, shape, engrave and set the ear cuff.`")

open(path, "w").write(s)
print("patched", path)
