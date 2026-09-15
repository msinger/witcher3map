#!/bin/bash

set -e

SRC_IMG=$1
OUT_DIR=$2
TILE_SZ=$3
MIN_ZOOM=$4
MAX_ZOOM=$5
QUALITY=$6

if [ -z "$SRC_IMG" -o -z "$OUT_DIR" -o -z "$TILE_SZ" ] ||
   ![ "$TILE_SZ" -eq "$TILE_SZ" ] 2>/dev/null ||
   ![ "$MIN_ZOOM" -eq "$MIN_ZOOM" ] 2>/dev/null ||
   ![ "$MAX_ZOOM" -eq "$MAX_ZOOM" ] 2>/dev/null ||
   [[ TILE_SZ -le 0 || MIN_ZOOM -lt 0 || MAX_ZOOM -lt 0 ]] ||
   (( MIN_ZOOM > MAX_ZOOM )); then
	echo "Usage: ./gen_tiles.sh <source_img> <out_dir> <tile_size> <min_zoom> <max_zoom> <quality>" >&2
	exit 1
fi

SRC_IMG=$(realpath -es "$SRC_IMG")

if [ -n "$QUALITY" ]; then
	QUALITY="-quality $QUALITY"
fi

mkdir -p "$OUT_DIR"
cd "$OUT_DIR"
if [ -z "$(find . -maxdepth 0 -type d -empty 2>/dev/null)" ]; then
	echo Output directory not empty >&2
	exit 1
fi

SRC_IMG_W=$(identify -format %w "$SRC_IMG")
SRC_IMG_H=$(identify -format %h "$SRC_IMG")

echo Source image size: ${SRC_IMG_W}x${SRC_IMG_H}

LVL_PXW[$MAX_ZOOM]=$SRC_IMG_W
LVL_PXH[$MAX_ZOOM]=$SRC_IMG_H
LVL_TLW[$MAX_ZOOM]=$(( (LVL_PXW[MAX_ZOOM] + (TILE_SZ-1)) / TILE_SZ ))
LVL_TLH[$MAX_ZOOM]=$(( (LVL_PXH[MAX_ZOOM] + (TILE_SZ-1)) / TILE_SZ ))
LVL_TLC[$MAX_ZOOM]=$(( LVL_TLW[MAX_ZOOM] * LVL_TLH[MAX_ZOOM] ))

for (( i = MAX_ZOOM - 1; i >= MIN_ZOOM; i-- )); do
	LVL_PXW[$i]=$(( (LVL_PXW[i+1] + 1) / 2 ))
	LVL_PXH[$i]=$(( (LVL_PXH[i+1] + 1) / 2 ))
	LVL_TLW[$i]=$(( (LVL_PXW[i] + (TILE_SZ-1)) / TILE_SZ ))
	LVL_TLH[$i]=$(( (LVL_PXH[i] + (TILE_SZ-1)) / TILE_SZ ))
	LVL_TLC[$i]=$(( LVL_TLW[i] * LVL_TLH[i] ))
done

echo Min zoom image size: ${LVL_PXW[MIN_ZOOM]}x${LVL_PXH[MIN_ZOOM]}

for (( i = MIN_ZOOM; i <= MAX_ZOOM; i++ )); do
	for (( j = 0; j < LVL_TLW[i]; j++ )); do
		mkdir -p "$i/$j"
	done

	magick "$SRC_IMG" -filter     triangle \
	                  -resize     ${LVL_PXW[i]}x${LVL_PXH[i]} \
	                  -gravity    southwest \
	                  -background "rgba(255, 255, 255, 0)" \
	                  -extent     $((LVL_TLW[i]*TILE_SZ))x$((LVL_TLH[i]*TILE_SZ)) \
	                  +gravity \
	                  -crop       ${TILE_SZ}x${TILE_SZ} \
	                  -strip \
	       "$i/tmp-%d.png"

	for (( j = 0; j < LVL_TLC[i]; j++ )); do
		dest="$i/$(( j % LVL_TLW[i] ))/$(( LVL_TLH[i] - j / LVL_TLW[i] - 1 ))"
		if magick "$i/tmp-$j.png" -format '%[opaque]' info: | grep -qi false; then
			mv "$i/tmp-$j.png" "$dest.png"
		else
			magick "$i/tmp-$j.png" $QUALITY -strip "$dest.jpg"
			rm "$i/tmp-$j.png"
		fi
	done
done
