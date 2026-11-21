# Patch 03: the monkey walks (no flying) to the carpet dock, boards his own carpet there and rides it to the end.
import sys
path = sys.argv[1]
s = open(path).read()
def rep(old, new, count=1):
    global s
    n = s.count(old)
    assert n == count, f"expected {count}x, found {n}x: {old[:90]!r}"
    s = s.replace(old, new)

rep("soukInteractions, soukTick } from \"./kp.js\";", "soukInteractions, soukTick, CarpetGuide } from \"./kp.js\";")

# the little carpet lives at the carpet dock (scene root, not the entrance group) and is driven by the guide
rep("""        (this.littleCarpet = en({ fringeMat: () => Ot.fringe }, e.M, 1, 1.4)),
        e.areas.entrance.group.add(this.littleCarpet),
        (this.littleCarpetPark = R(2.55, 0.32, 8.6)),
        this.littleCarpet.position.copy(this.littleCarpetPark),
        (this.littleCarpet.rotation.y = 0.4),
        (e.areas.entrance.updateCarpet = (e) => {
          this.littleCarpet.userData.flying ||
            (this.littleCarpet.position.y = this.littleCarpetPark.y + Math.sin(e * 1.1) * 0.03);
        }),""", """        (this.littleCarpet = en({ fringeMat: () => Ot.fringe }, e.M, 1, 1.4)),
        e.scene.add(this.littleCarpet),
        (this.littleCarpetPark = R(z.carpet.x - 1.85, z.carpet.y, z.carpet.z + 0.1)),
        (this.guide = new CarpetGuide(e, this.littleCarpet, { P, N, Ke, park: this.littleCarpetPark, parkYaw: 0 })),
        (e.guide = this.guide),""")
rep("""          this.littleCarpet.position.copy(this.littleCarpetPark),
          (this.littleCarpet.rotation.y = 0.4));""", """          this.littleCarpet.position.copy(this.littleCarpetPark),
          (this.littleCarpet.rotation.y = 0));""")
rep("""      s.placeAt(l, u),
        (s.sitting = e === `welcome`),
        s.play(e === `welcome` ? `idle` : s.restClip()),""", """      s.placeAt(l, u),
        (s.sitting = e === `welcome`),
        s.play(e === `welcome` ? `idle` : s.restClip()),
        this.guide?.applyState(e, l, u),""")
rep("""    update(e, t) {
      let n = this.G,
        r = n.player.position.z < -167;""", """    update(e, t) {
      this.guide?.tick(e);
      let n = this.G,
        r = n.player.position.z < -167;""")

# welcome: no flying entrance — he is curled up in the hall, wakes, chitters and trots to the lamp
i = s.index("      let a = this.littleCarpet,\n        o = R(0.2, 1.6, 0.4),")
j = s.index("        await t.walk([R(1.25, 0, 7.4)]),", i) + len("        await t.walk([R(1.25, 0, 7.4)]),")
s = s[:i] + """      t.placeAt(R(2.35, 0, 9.5), Math.PI * 0.8),
        (t.sitting = !0),
        t.play(`idle`),
        await N(e.settings.reduced ? 0.6 : 2.4),
        t.stand(),
        t.chitter(1),
        t.face(e.player.head(V)),
        await N(0.5),
        await t.walk([R(1.6, 0, 7.9), R(1.25, 0, 7.4)]),""" + s[j:]

# souk: he looks back at the visitor between stops
rep("""        this.hint(`Look closer at anything that catches your eye.`, 4)),
        await t.walk([B(7), B(8)], { lead: { wait: 6, resume: 3.6 } });""", """        this.hint(`Look closer at anything that catches your eye.`, 4)),
        t.face(e.player.head(V)),
        t.look(e.player.head(new D())),
        await N(1.1),
        t.look(null),
        await t.walk([B(7), B(8)], { lead: { wait: 6, resume: 3.6 } });""")
rep("""        this.motes(null),
        t.look(null),
        await t.walk([B(9), B(10), B(11)], { lead: { wait: 6, resume: 3.6 } }),""", """        this.motes(null),
        t.look(e.player.head(new D())),
        await N(0.9),
        t.look(null),
        await t.walk([B(9), B(10), B(11)], { lead: { wait: 6, resume: 3.6 } }),""")

# carpet dock: he walks to his own carpet and climbs on; the flight waits for him
rep("""        t.walk([B(11), R(0.4, 0, -45.2)], { run: !0 }).then(async () => {
          t.attach(i, R(0, 0.02, -0.95), Math.PI), await t.sit(), t.gesture(`beckon`);
        }),""", """        (this.guide.boarding = t.walk([B(11)], { run: !0 }).then(async () => {
          (this.guide.boarding = null), await this.guide.board(), t.gesture(`beckon`);
        })),""")
rep("this.objective(``, null), t.mount || (t.attach(i, R(0, 0.02, -0.95), Math.PI), t.sit()), this.cine(!0);",
    "this.objective(``, null), this.cine(!0), await this.guide.whenBoarded();")
rep("""          let r = e;
          o.getPointAt(r, i.position);""", """          let r = e;
          o.getPointAt(r, i.position), this.guide.followFlight(o, r);""")
rep("""        (r.groundY = 0),
        t.detach(),
        t.placeAt(R(0.4, 0, -110.6), Math.PI),
        t.stand(),""", """        (r.groundY = 0),
        (this.guide.flying = !1),""")

# autopilot: keep following when he rides his own carpet
rep("""      if (i.mount) {
        n.lookAt(Zn.copy(s).setY(s.y + 0.4), 2.5, 0.4);
        return;
      }
      if (i.moving || c > 4) {""", """      if (i.mount && !this.G.guide?.riding) {
        n.lookAt(Zn.copy(s).setY(s.y + 0.4), 2.5, 0.4);
        return;
      }
      if (i.moving || this.G.guide?.flying || c > 4) {""")
open(path, "w").write(s)
print("patched", path)
