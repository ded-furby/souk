# Turn a studio render (gold on dark) into a sepia jeweller's study on parchment.
# usage: python3 tools/jewellery/study.py <render.png> <out.jpg> [size]
import sys, random
from PIL import Image, ImageFilter, ImageChops, ImageDraw

src, out = sys.argv[1], sys.argv[2]
size = int(sys.argv[3]) if len(sys.argv) > 3 else 1024
im = Image.open(src).convert("L")
x0, y0, x1, y1 = im.point(lambda v: 255 if v > 30 else 0).getbbox()  # crop to the piece, square, with margin
c, half = ((x0 + x1) // 2, (y0 + y1) // 2), int(max(x1 - x0, y1 - y0) * 0.62)
im = im.crop((c[0] - half, c[1] - half, c[0] + half, c[1] + half)).resize((size, size), Image.LANCZOS)
ink = im.point(lambda v: max(0, min(255, int(((v - 24) / 205) ** 0.7 * 255))) if v > 24 else 0)
edges = im.filter(ImageFilter.FIND_EDGES).point(lambda v: min(255, v * 3))
ink = ImageChops.lighter(ink, edges).filter(ImageFilter.GaussianBlur(0.6))

random.seed(7)
paper = Image.new("RGB", (size, size), (236, 224, 196))
noise = Image.effect_noise((size, size), 18).convert("L").filter(ImageFilter.GaussianBlur(1.2))
paper = Image.composite(Image.new("RGB", (size, size), (222, 206, 172)), paper, noise.point(lambda v: int(v * 0.35)))
vign = Image.radial_gradient("L").resize((size, size)).point(lambda v: int(v * 0.55))
paper = Image.composite(Image.new("RGB", (size, size), (176, 150, 108)), paper, vign)
sepia = Image.new("RGB", (size, size), (78, 50, 24))
drawing = Image.composite(sepia, paper, ink.point(lambda v: int(v * 0.88)))
d = ImageDraw.Draw(drawing)
m = size // 22
d.rectangle([m, m, size - m, size - m], outline=(120, 88, 52), width=max(2, size // 400))
drawing.save(out, quality=86)
print(out, drawing.size)
