# Homepage banner texture

The red homepage banner shows a faint composite of biocytin-filled human neurons
recorded in the lab. It is a single image, `images/neurons/hero-neurons.webp`,
built from the cell masks in `cells/`.

## Adding a new cell

1. Export the fill as a PNG or TIFF (a maximum-intensity projection of the z-stack
   works best) and crop out scale bars and labels.
2. Make a mask:
   ```
   python3 tools/banner/prep_cell.py raw_fill.tif tools/banner/cells/case-YYYY-MM_cellN.png --channel red
   ```
   Use `--channel mean` for gray fills. Raise `--threshold` if background speckle
   remains; lower it if faint dendrites are lost.
3. Add the file to `LAYOUT` in `build_banner.py` (position, size, rotation).
4. Rebuild:
   ```
   python3 tools/banner/build_banner.py
   ```
5. Preview locally with `python3 -m http.server` from the repo root and open
   http://localhost:8000.

Requires Python 3 with `numpy`, `scipy` and `pillow`.
