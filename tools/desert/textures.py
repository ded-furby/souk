#!/usr/bin/env python3
"""Generate the tileable sand detail textures for the Golden Desert (assets/desert/*.jpg).

  ripple.jpg  1024  RG = wind-ripple normal (x, y), B = ripple height
  grain.jpg    512  RG = fine grain normal,        B = grain speckle (albedo breakup)
  macro.jpg    512  R = broad value patches, G = wind streaks, B = second patch field (hue / warp)

Everything is synthesised in Fourier space, so every map tiles exactly.
usage: python3 tools/desert/textures.py [outDir]
"""
import sys, os
import numpy as np
from PIL import Image, ImageFile

ImageFile.MAXBLOCK = 1 << 23  # noisy maps overflow Pillow's default JPEG buffer when optimize=True

OUT = sys.argv[1] if len(sys.argv) > 1 else os.path.join(os.path.dirname(__file__), '..', '..', 'assets', 'desert')
os.makedirs(OUT, exist_ok=True)
rng = np.random.default_rng(7)


def freqs(n):
    f = np.fft.fftfreq(n) * 2 * np.pi  # radians per pixel
    return np.meshgrid(f, f, indexing='xy')


def spectral_noise(n, shape_fn, seed):
    """White noise filtered by shape_fn(kx, ky) (cycles per tile) -> zero-mean, unit-std tileable field."""
    r = np.random.default_rng(seed)
    kx, ky = np.meshgrid(np.fft.fftfreq(n) * n, np.fft.fftfreq(n) * n, indexing='xy')
    f = np.fft.fft2(r.standard_normal((n, n))) * shape_fn(kx, ky)
    f[0, 0] = 0
    x = np.fft.ifft2(f).real
    return (x - x.mean()) / x.std()


def upsample2(u):
    """Exact band-limited 2x upsample of a periodic field."""
    n = u.shape[0]
    f = np.fft.fftshift(np.fft.fft2(u))
    g = np.zeros((2 * n, 2 * n), complex)
    g[n // 2 : n // 2 + n, n // 2 : n // 2 + n] = f
    return np.fft.ifft2(np.fft.ifftshift(g)).real * 4


def normal_rg(h, strength):
    """Height (periodic) -> tangent-space normal x,y in 0..1 (z is rebuilt in the shader)."""
    dx = (np.roll(h, -1, 1) - np.roll(h, 1, 1)) * 0.5
    dy = (np.roll(h, -1, 0) - np.roll(h, 1, 0)) * 0.5
    nx, ny = -dx * strength, -dy * strength
    l = np.sqrt(nx * nx + ny * ny + 1)
    return nx / l * 0.5 + 0.5, ny / l * 0.5 + 0.5


def save(name, r, g, b, q=91):
    a = np.clip(np.stack([r, g, b], -1) * 255 + 0.5, 0, 255).astype(np.uint8)
    p = os.path.join(OUT, name)
    Image.fromarray(a).save(p, quality=q, subsampling=0, optimize=True)
    print(f'{name}: {a.shape[1]}x{a.shape[0]}  {os.path.getsize(p) / 1024:.0f} KB')


def ripples(n=512, waves=40, steps=450):
    """Anisotropic Swift-Hohenberg pattern: parallel wind ripples with natural forks and pinch-outs."""
    kx, ky = freqs(n)
    k0 = 2 * np.pi * waves / n
    k2 = (kx * kx + ky * ky) / (k0 * k0)
    # growth is highest for |k| = k0 along x; ky is lightly damped so the crests stay roughly parallel to y
    # but keep their meanders and Y-junctions (stopping early keeps the defects from annealing out)
    L = 0.32 - (1 - k2) ** 2 - 0.12 * (ky / k0) ** 2
    u = rng.standard_normal((n, n)) * 0.05
    dt = 0.6
    for _ in range(steps):
        nl = 0.55 * u * u - u ** 3  # the quadratic term sharpens crests
        u = np.fft.ifft2((np.fft.fft2(u) + dt * np.fft.fft2(nl)) / (1 - dt * L)).real
    u = upsample2(u)
    n *= 2
    # local phase / amplitude from the analytic signal along the wind direction
    kx, ky = freqs(n)
    f = np.fft.fft2(u)
    a = np.fft.ifft2(f * (2.0 * (kx > 0) + 1.0 * (kx == 0)))
    amp, ph = np.abs(a), np.angle(a)
    amp = amp / np.percentile(amp, 90)
    # peaked crest, broad trough, crest leaning down-wind (steeper lee side)
    prof = np.cos(ph + 0.42 * np.sin(ph) + 0.38 * np.cos(ph))
    h = prof * np.clip(amp, 0, 1.25) ** 0.8
    # a little breakup so no two ripples are identical
    h += 0.10 * spectral_noise(n, lambda x, y: np.exp(-((np.hypot(x, y * 2.5) - 9) / 7) ** 2), 3)
    h += 0.05 * spectral_noise(n, lambda x, y: np.exp(-((np.hypot(x, y) - 150) / 70) ** 2), 4)
    h = (h - h.min()) / (h.max() - h.min())
    nx, ny = normal_rg(h, 15.0)
    save('ripple.jpg', nx, ny, h)
    return h


def grain(n=512):
    fine = spectral_noise(n, lambda x, y: np.exp(-((np.hypot(x, y) - 120) / 60) ** 2), 11)
    mid = spectral_noise(n, lambda x, y: np.exp(-((np.hypot(x, y) - 34) / 18) ** 2), 12)
    h = fine * 0.7 + mid * 0.45
    nx, ny = normal_rg(h, 1.1)
    # speckle: mostly even, with scattered darker and lighter grains
    w = rng.random((n, n))
    sp = 0.5 + 0.18 * fine + 0.10 * mid
    sp = np.where(w > 0.985, sp + 0.33, np.where(w < 0.03, sp - 0.30, sp))
    k = np.array([0.2, 0.6, 0.2])
    for ax in (0, 1):
        sp = sum(np.roll(sp, s, ax) * c for s, c in zip((-1, 0, 1), k))
    save('grain.jpg', nx, ny, np.clip(sp, 0, 1), q=90)


def macro(n=512):
    def fbm(seed, lo, beta):
        return spectral_noise(n, lambda x, y: (np.hypot(x, y) >= lo) / np.maximum(np.hypot(x, y), 1) ** beta, seed)

    def unit(x, c=2.6):
        return np.clip(x / (2 * c) + 0.5, 0, 1)

    patches = fbm(21, 1, 1.7)
    # streaks: long along x (down-wind), fine across
    streak = spectral_noise(n, lambda x, y: np.exp(-(x / 3.0) ** 2) * (np.abs(y) >= 2) / np.maximum(np.abs(y), 1) ** 0.9 * np.exp(-(y / 60.0) ** 2), 22)
    second = fbm(23, 2, 1.5)
    save('macro.jpg', unit(patches), unit(streak), unit(second), q=92)


if __name__ == '__main__':
    ripples()
    grain()
    macro()
