# Side-by-side sheet: reference photo (optionally cropped) next to one or more renders, equal height.
# usage: python3 compare.py <out.png> <ref.jpg>[:x0,y0,x1,y1] <render.png> [<render2.png> ...] [--h 720]
import sys
from PIL import Image, ImageDraw

args = sys.argv[1:]
h = 720
if "--h" in args:
    i = args.index("--h")
    h = int(args[i + 1])
    del args[i : i + 2]
out, ref, renders = args[0], args[1], args[2:]


def load(spec):
    path, _, crop = spec.partition(":")
    im = Image.open(path).convert("RGB")
    if crop:
        im = im.crop(tuple(int(v) for v in crop.split(",")))
    return im.resize((max(1, round(im.width * h / im.height)), h), Image.LANCZOS)


ims = [load(ref)] + [load(r) for r in renders]
sheet = Image.new("RGB", (sum(i.width for i in ims) + 8 * (len(ims) - 1), h), "#000")
x = 0
for n, im in enumerate(ims):
    sheet.paste(im, (x, 0))
    ImageDraw.Draw(sheet).text((x + 8, 8), "REFERENCE" if n == 0 else f"RENDER {n}", fill="#ffd27a")
    x += im.width + 8
sheet.save(out)
print(out, sheet.size)
