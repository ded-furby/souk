"""Pair two render.mjs outputs of the same shot set into one before | after contact sheet.
usage: python3 tools/monkey/contact.py <beforeDir> <afterDir> <set> <out.jpg> [pairs per row]"""
import glob, os, sys
from PIL import Image, ImageDraw

before, after, name, out = sys.argv[1:5]
per_row = int(sys.argv[5]) if len(sys.argv) > 5 else 3
files = sorted(os.path.basename(f) for f in glob.glob(os.path.join(before, f'{name}-[0-9][0-9]-*.png')))
assert files and all(os.path.exists(os.path.join(after, f)) for f in files), 'render both sets first'
W, H = Image.open(os.path.join(before, files[0])).size
rows = (len(files) + per_row - 1) // per_row
sheet = Image.new('RGB', (per_row * (2 * W + 12), rows * (H + 26)), '#14100c')
d = ImageDraw.Draw(sheet)
for k, f in enumerate(files):
    x, y = (k % per_row) * (2 * W + 12) + 6, (k // per_row) * (H + 26)
    d.text((x + 4, y + 7), f[len(name) + 4:-4].replace('_', ' ') + '      before  |  after', fill='#ffd27a')
    sheet.paste(Image.open(os.path.join(before, f)).convert('RGB'), (x, y + 26))
    sheet.paste(Image.open(os.path.join(after, f)).convert('RGB'), (x + W, y + 26))
sheet.save(out, quality=90)
print('wrote', out, sheet.size)
