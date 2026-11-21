# Patch 04: Genie emerges gradually from a glowing lamp, introduces the monkey; golden trail more visible and directional.
import sys
path = sys.argv[1]
s = open(path).read()
def rep(old, new, count=1):
    global s
    n = s.count(old)
    assert n == count, f"expected {count}x, found {n}x: {old[:90]!r}"
    s = s.replace(old, new)

# --- Genie: slower, readable reveal and departure (same design and effects in both scenes)
rep("(this.presence = j(this.presence, this.targetPresence, this.targetPresence > this.presence ? 1.1 : 1.8, e)),",
    "(this.presence = j(this.presence, this.targetPresence, this.targetPresence > this.presence ? 0.62 : 0.95, e)),")
rep("      this.rising.t += e / 2.2;", "      this.rising.t += e / 3.6;")

# opening: the lamp glows first, then smoke, then the Genie forms; she turns to introduce the monkey; no hurried exit
rep("""        r.play(`sparkle`, { position: d, volume: 0.6 }),
        this.motes(d.clone().add(R(0.12, 0.08, 0)), `rise`, 50),
        t.look(R(0, 2.2, 7)),
        (t.lookPlayer = !1),
        await N(1.2),
        await n.appear(R(0.1, 1.02, 7), R(0.15, 0.95, 7)),""", """        r.play(`sparkle`, { position: d, volume: 0.6 }),
        (this.lampGlow = e.world.slot({ position: d.clone().add(R(0, 0.3, 0.15)), color: `#ffc272`, intensity: 0, distance: 4.5, priority: 2.5 })),
        await P(e.settings.reduced ? 0.6 : 1.8, (e) => {
          this.lampGlow.intensity = 6 * e;
        }),
        this.motes(d.clone().add(R(0.12, 0.08, 0)), `rise`, 50),
        t.look(R(0, 2.2, 7)),
        (t.lookPlayer = !1),
        await N(1.6),
        P(3, (e) => {
          this.lampGlow.intensity = 6 * (1 - e);
        }).then(() => e.world.removeSlot(this.lampGlow)),
        await n.appear(R(0.1, 1.02, 7), R(0.15, 0.95, 7)),""")
rep("""        t.look(null),
        (t.lookPlayer = !0),
        n.gesture(`present`),
        await N(0.6),
        await t.gesture(`excited`),
        await this.say(`welcome3`),""", """        t.look(null),
        (t.lookPlayer = !0),
        (n.faceTarget = t.root.position.clone().add(R(0, 0.5, 0))),
        n.gesture(`present`),
        await N(0.9),
        t.look(n.root.position.clone().add(R(0, 1.7, 0))),
        await t.gesture(`excited`),
        (n.faceTarget = null),
        t.look(null),
        await this.say(`welcome3`),""")
rep("""        n.gesture(`bow`),
        await N(1.6),
        await n.vanish(z.lamp.clone().add(R(0.1, 0, 0))),""", """        n.gesture(`bow`),
        await N(2.6),
        await n.vanish(z.lamp.clone().add(R(0.1, 0, 0))),""")

# finale: same glow-then-emerge entrance at the desert lamp
rep("""        t.look(c),
        await N(1.6),
        this.look(c.clone().add(R(0, 1.6, 0)), 1.2, 4),
        await n.appear(c.clone().add(R(0.1, 0, 0)), c),""", """        t.look(c),
        (this.lampGlow = e.world.slot({ position: c.clone().add(R(0, 0.2, 0.15)), color: `#ffc272`, intensity: 0, distance: 4.5, priority: 2.5 })),
        await P(1.8, (e) => {
          this.lampGlow.intensity = 6 * e;
        }),
        this.look(c.clone().add(R(0, 1.6, 0)), 1.2, 4),
        P(3, (e) => {
          this.lampGlow.intensity = 6 * (1 - e);
        }).then(() => e.world.removeSlot(this.lampGlow)),
        await n.appear(c.clone().add(R(0.1, 0, 0)), c),""")

# --- golden trail: more visible, tighter line, a soft pulse travelling toward the destination
rep("""      (this.mat.uniforms.size.value = e ? 0.06 : 0.032),
        (this.mat.uniforms.boost.value = e ? 2.4 : 1.6),
        this.mat.uniforms.tint.value.set(1, e ? 0.78 : 0.86, e ? 0.38 : 0.58);""",
    """      (this.mat.uniforms.size.value = e ? 0.074 : 0.04),
        (this.mat.uniforms.boost.value = e ? 2.8 : 2),
        this.mat.uniforms.tint.value.set(1, e ? 0.72 : 0.82, e ? 0.3 : 0.5);""")
rep("        (this.mat = ht(0.032)),", "        (this.mat = ht(0.04)),\n        this.mat.uniforms.boost && (this.mat.uniforms.boost.value = 2),")
rep("          v = 0.16 + 0.12 * Math.sin(_),", "          v = 0.1 + 0.07 * Math.sin(_),")
rep("        r[e] = b * (0.45 + 0.55 * Math.max(0, Math.sin(t * 2.1 + h * 3))) * this.strength;",
    "        let w = Math.max(0, Math.sin((o * this.length - t * 1.6) * 2.1)) ** 6; // pulse travelling toward the target\n"
    "        r[e] = b * (0.5 + 0.5 * Math.max(0, Math.sin(t * 2.1 + h * 3))) * (0.7 + 0.65 * w) * this.strength;")
open(path, "w").write(s)
print("patched", path)
