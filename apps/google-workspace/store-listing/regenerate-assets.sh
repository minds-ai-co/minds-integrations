#!/usr/bin/env bash
# Regenerate the Google Workspace Marketplace store-listing images.
set -euo pipefail
cd "$(dirname "$0")"
SRC=../../../../webapp/public/images/app-icon.png
LOGO=../../../../webapp/public/images/logo-full.png
for s in 32 48 96 128; do
  magick "$SRC" -resize ${s}x${s} -background white -alpha remove -alpha off \
    -colorspace sRGB -type TrueColor -strip "PNG24:minds-icon-${s}.png"
done
magick -size 220x140 xc:white \
  \( "$LOGO" -resize 168x -background white -alpha remove -alpha off \) \
  -gravity center -compose over -composite \
  -colorspace sRGB -type TrueColor -strip "PNG24:minds-card-banner-220x140.png"
magick identify ./*.png
