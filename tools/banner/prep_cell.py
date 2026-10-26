#!/usr/bin/env python3
"""Turn a fluorescent biocytin-fill image into a clean grayscale cell mask.

Usage:
    python3 tools/banner/prep_cell.py RAW_IMAGE OUT_MASK.png [--channel red|mean] [--threshold 0.12]

The mask keeps only the filled cell's connected arbor (soma + processes) and
drops background speckle, so every cell looks consistent in the banner.
Crop out scale bars and labels before running this.
"""
import argparse

import numpy as np
from PIL import Image
from scipy import ndimage as ndi


def prep(path, channel="mean", threshold=0.12):
    rgb = np.asarray(Image.open(path).convert("RGB")).astype(float)
    g = rgb[..., 0] if channel == "red" else rgb.mean(-1)

    # Background subtraction (rolling-minimum, smoothed) and contrast stretch
    bg = ndi.gaussian_filter(ndi.minimum_filter(g, 21), 21)
    f = ndi.gaussian_filter(np.clip(g - bg, 0, None), 0.8)
    lo, hi = np.percentile(f, 65), np.percentile(f, 99.8)
    f = np.clip((f - lo) / (hi - lo), 0, 1) ** 0.75
    f[f < 0.07] = 0

    # Fade the frame edges so cells blend when composited
    h, w = f.shape
    yy, xx = np.mgrid[0:h, 0:w]
    f *= np.clip(np.minimum.reduce([xx, w - 1 - xx, yy, h - 1 - yy]) / 30, 0, 1) ** 1.5

    # Keep only components that contain a bright, soma-like peak
    lab, k = ndi.label(ndi.binary_dilation(f > threshold, iterations=2))
    sm = ndi.gaussian_filter(f, 3)
    peaks = ndi.maximum(sm, lab, range(1, k + 1))
    keep = [i for i, m in enumerate(peaks, 1) if m > 0.75 * sm.max()]
    region = ndi.binary_dilation(np.isin(lab, keep), iterations=3).astype(float)
    return np.clip(f * ndi.gaussian_filter(region, 2), 0, 1)


if __name__ == "__main__":
    ap = argparse.ArgumentParser()
    ap.add_argument("raw")
    ap.add_argument("out")
    ap.add_argument("--channel", choices=["red", "mean"], default="mean",
                    help="'red' for red-channel fills, 'mean' for gray/other")
    ap.add_argument("--threshold", type=float, default=0.12,
                    help="raise to drop more background, lower to keep faint dendrites")
    a = ap.parse_args()
    Image.fromarray((prep(a.raw, a.channel, a.threshold) * 255).astype(np.uint8)).save(a.out)
    print("wrote", a.out)
