# Colour-to-alpha against white, trim, resize, save WebP. Usage: key.py SRC DST [maxpx]
import sys
from PIL import Image, ImageChops, ImageMath
src, dst = sys.argv[1], sys.argv[2]
maxpx = int(sys.argv[3]) if len(sys.argv) > 3 else 720
im = Image.open(src).convert("RGB")
r, g, b = im.split()
mn = ImageChops.darker(ImageChops.darker(r, g), b)
# alpha from distance to white; ignore near-white noise (<6), stretch the rest
a = ImageChops.invert(mn).point(lambda v: 0 if v < 6 else min(255, int((v - 6) * 255 / 249 * 1.0)))
def unmul(c):
    return ImageMath.lambda_eval(lambda e: e["convert"](e["max"](e["min"](255 - (255 - e["c"]) * 255 / e["max"](e["a"], 1), 255), 0), "L"), c=c, a=a)
out = Image.merge("RGBA", (unmul(r), unmul(g), unmul(b), a))
bbox = a.point(lambda v: 255 if v > 12 else 0).getbbox()
if bbox:
    pad = 16
    bbox = (max(0, bbox[0]-pad), max(0, bbox[1]-pad), min(im.width, bbox[2]+pad), min(im.height, bbox[3]+pad))
    out = out.crop(bbox)
out.thumbnail((maxpx, maxpx), Image.LANCZOS)
out.save(dst, "WEBP", quality=74, method=6, alpha_quality=80)
print(dst, out.size)
