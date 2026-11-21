# Patch 06: no flicker anywhere (steady lights and lamps, no light-pool churn, no grain, no z-fighting),
# calmer lamps and a premium grade, smoother autopilot camera.
import sys, re
path = sys.argv[1]
s = open(path).read()
def rep(old, new, count=1):
    global s
    n = s.count(old)
    assert n == count, f"expected {count}x, found {n}x: {old[:90]!r}"
    s = s.replace(old, new)

rep("soukTick, CarpetGuide } from \"./kp.js\";", "soukTick, CarpetGuide, separateCoplanar } from \"./kp.js\";")
# 1) the shared light flicker (7–13 Hz wobble on every flagged light) -> steady
rep("(ct.flicker.value = 0.92 + Math.sin(t * 7.3) * 0.03 + Math.sin(t * 13.1) * 0.03 + Math.sin(t * 2.1) * 0.02);",
    "(ct.flicker.value = 1); // steady light — no flicker")
# 2) lamp glass flicker in every area -> steady and ~25% calmer
for old, new in [
    ("(d.material.emissiveIntensity = 2.6 * (0.94 + Math.sin(e * 9) * 0.03 + Math.sin(e * 5.3) * 0.03));", "(d.material.emissiveIntensity = 1.9);"),
    ("te.material.emissiveIntensity = 2.4 * (0.95 + Math.sin(e * 8.1) * 0.03) * (1 + (this.lanternBoost || 0));", "te.material.emissiveIntensity = 1.8 * (1 + 0.25 * (this.lanternBoost || 0));"),
    ("f.material.emissiveIntensity = 2.2 * (0.95 + Math.sin(e * 7) * 0.04);", "f.material.emissiveIntensity = 1.65;"),
    ("l.material.emissiveIntensity = 2 * (0.95 + Math.sin(e * 6.3) * 0.04);", "l.material.emissiveIntensity = 1.5;"),
    ("s.material.emissiveIntensity = 2.2 * (0.95 + Math.sin(e * 7.7) * 0.04);", "s.material.emissiveIntensity = 1.65;"),
    ("(m.material.emissiveIntensity = 2.3 * (0.95 + Math.sin(e * 7.1) * 0.04));", "(m.material.emissiveIntensity = 1.7);"),
    ("d.material.emissiveIntensity = 2.6 + Math.sin(e * 5) * 0.4 + Math.sin(e * 11) * 0.3;", "d.material.emissiveIntensity = 2.4 + Math.sin(e * 0.9) * 0.12; // forge: slow glow, no strobe"),
    ("(ie.material.emissiveIntensity = 2.6 * (0.94 + Math.sin(e * 6.7) * 0.03 + Math.sin(e * 2.3) * 0.03));", "(ie.material.emissiveIntensity = 1.9);"),
]:
    rep(old, new)
# 3) light pool: keep lights that are already on (hysteresis), re-rank less often, fade slower — no popping
rep("if (((this._acc = (this._acc || 0) + e), this._acc > 0.25 || !this._ranked)) {", "if (((this._acc = (this._acc || 0) + e), this._acc > 0.6 || !this._ranked)) {")
rep("          n._d = n.position.distanceTo(t) / Math.max(0.3, Math.sqrt(n.intensity / 6)) - (n.priority || 0);",
    "          n._d = n.position.distanceTo(t) / Math.max(0.3, Math.sqrt(n.intensity / 6)) - (n.priority || 0) - (this.pool.some((e) => e.userData.slot === n && !e.userData.leaving) ? 2.5 : 0);")
rep("(t.intensity = j(t.intensity, r, 4, e)),", "(t.intensity = j(t.intensity, r, 2.2, e)),")
rep("    ie.push(...kpSouk.lights),\n", "")
# 4) grade: no per-frame grain (it shimmers), less orange, a gentle filmic S-curve; calmer bloom
rep("      grain: { value: 0.025 },\n      warmth: { value: 0.03 },", "      grain: { value: 0 },\n      warmth: { value: 0.015 },")
rep("c.rgb += vec3(warmth, warmth * 0.4, -warmth * 0.6) * c.rgb; gl_FragColor = c; }`,",
    "c.rgb += vec3(warmth, warmth * 0.4, -warmth * 0.6) * c.rgb; vec3 s = clamp(c.rgb, 0.0, 1.0); c.rgb = mix(c.rgb, s * s * (3.0 - 2.0 * s), 0.16); float l = dot(c.rgb, vec3(0.2126, 0.7152, 0.0722)); c.rgb = mix(vec3(l), c.rgb, 1.03); gl_FragColor = c; }`,")
rep("(this.bloom = new xe(new de(innerWidth, innerHeight), 0.22, 0.5, 0.93)),", "(this.bloom = new xe(new de(innerWidth, innerHeight), 0.15, 0.45, 0.96)),")
rep("lampGlass: _({ color: `#ffcf8f`, emissive: `#ff9a3c`, emissiveIntensity: 2.4, roughness: 0.4 })",
    "lampGlass: _({ color: `#ffcf8f`, emissive: `#e8893a`, emissiveIntensity: 2.4, roughness: 0.4 })")
# 5) ambient occlusion off (its depth-precision banding on floors is worse than its benefit)
rep("new wt(W, ar, G, U.quality === `high`)", "new wt(W, ar, G, !1)")
# 6) z-fighting: separate coplanar overlapping builder faces; better depth precision (near 0.05 -> 0.1)
rep("""    let l = Math.min(e, t, n),
      u = U.quality === `high` && l >= 0.03 ? new RoundedBoxGeometry(e, t, n, 1, Math.min(0.02, l * 0.22)) : new ye(e, t, n);
    return this.mesh(lt(u, c), o, r, i, a, s);""", """    [e, t, n, r, i, a] = separateCoplanar(s || this.g, e, t, n, r, i, a);
    let l = Math.min(e, t, n),
      u = U.quality === `high` && l >= 0.03 ? new RoundedBoxGeometry(e, t, n, 1, Math.min(0.02, l * 0.22)) : new ye(e, t, n);
    return this.mesh(lt(u, c), o, r, i, a, s);""")
rep("G = new d(68, innerWidth / innerHeight, 0.05, 900),", "G = new d(68, innerWidth / innerHeight, 0.1, 900),")
# 7) smoother "walk": autopilot turns with eased, capped angular speed (was a per-frame 8% snap); calmer bob/accel
rep("""      (n.yaw += s * 0.08),
        (n.pitch += (-0.06 - n.pitch) * 0.05),
        (n.attention = null),
        Math.abs(s) < 0.9 && r.keys.add(`KeyW`);""", """      let dt = this.dt || 0.016;
      (n.yaw += Math.max(-1.1 * dt, Math.min(1.1 * dt, s * Math.min(1, dt * 2.4)))),
        (n.pitch += (-0.06 - n.pitch) * Math.min(1, dt * 1.6)),
        (n.attention = null),
        Math.abs(s) < 0.7 && r.keys.add(`KeyW`);""")
rep("      let f = n.reduced ? 0 : 0.012;", "      let f = n.reduced ? 0 : 0.005;")
rep("(this.vel.x = j(this.vel.x, u, 9, e)),", "(this.vel.x = j(this.vel.x, u, 5, e)),")
open(path, "w").write(s)
print("patched", path)
