#!/usr/bin/env python3
"""Compose the homepage banner texture from cell masks in tools/banner/cells/.

Usage (from the repo root):
    python3 tools/banner/build_banner.py

Writes images/neurons/hero-neurons.webp: white neurons on a transparent
background, with the banner opacity baked in, used by .hero::before in styles.css.
Edit LAYOUT below to add, move, or resize cells.
"""
from pathlib import Path

import numpy as np
from PIL import Image

ROOT = Path(__file__).resolve().parents[2]
CELLS = ROOT / "tools/banner/cells"
OUT = ROOT / "images/neurons/hero-neurons.webp"

WIDTH, HEIGHT = 2400, 1000
OPACITY = 0.40  # how strongly the neurons show through the red

# (mask file, center x, center y, height as fraction of banner, rotation deg, brightness, mirror)
LAYOUT = [
    ("case-2026-09_cell1.png", 0.17, 0.42, 1.15, -8, 1.00, False),
    ("case-2026-10_cell2.png", 0.60, 0.30, 0.80, -12, 0.90, False),
    ("case-2026-10_cell1.png", 0.42, 0.78, 0.70, 15, 0.85, False),
    ("case-2026-09_cell2.png", 0.84, 0.58, 1.05, 0, 1.00, False),
    ("case-2026-09_cell1.png", 0.66, 0.70, 0.62, 12, 0.85, True),
    ("case-2026-09_cell2.png", 0.03, 0.92, 0.55, 40, 0.45, True),
    ("case-2026-10_cell1.png", 0.99, 0.08, 0.50, -30, 0.40, True),
]


def main():
    canvas = np.zeros((HEIGHT, WIDTH))
    for name, cx, cy, hf, rot, gain, mirror in LAYOUT:
        im = Image.open(CELLS / name).convert("L")
        if mirror:
            im = im.transpose(Image.FLIP_LEFT_RIGHT)
        s = hf * HEIGHT / im.height
        im = im.resize((int(im.width * s), int(im.height * s)), Image.LANCZOS)
        im = im.rotate(rot, resample=Image.BICUBIC, expand=True)
        a = np.asarray(im).astype(float) / 255 * gain
        x0, y0 = int(cx * WIDTH - a.shape[1] / 2), int(cy * HEIGHT - a.shape[0] / 2)
        xs, ys = max(0, x0), max(0, y0)
        xe, ye = min(WIDTH, x0 + a.shape[1]), min(HEIGHT, y0 + a.shape[0])
        if xe <= xs or ye <= ys:
            continue
        region = canvas[ys:ye, xs:xe]
        canvas[ys:ye, xs:xe] = np.maximum(region, a[ys - y0:ye - y0, xs - x0:xe - x0])

    rgba = np.zeros((HEIGHT, WIDTH, 4), np.uint8)
    rgba[..., :3] = 255
    rgba[..., 3] = (np.clip(canvas, 0, 1) * OPACITY * 255).astype(np.uint8)
    OUT.parent.mkdir(parents=True, exist_ok=True)
    Image.fromarray(rgba).save(OUT, quality=80, method=6)
    print(f"wrote {OUT.relative_to(ROOT)} ({OUT.stat().st_size // 1024} KB)")


if __name__ == "__main__":
    main()
