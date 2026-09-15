#!/bin/bash

set -e

SRC_FMT=$1
DST_IMG=$2
SRC_X1=$3
SRC_Y1=$4
SRC_X2=$5
SRC_Y2=$6
QUALITY=$7

if [ -z "$SRC_FMT" -o -z "$DST_IMG" ] ||
   ![ "$SRC_X1" -eq "$SRC_X1" ] 2>/dev/null ||
   ![ "$SRC_Y1" -eq "$SRC_Y1" ] 2>/dev/null ||
   ![ "$SRC_X2" -eq "$SRC_X2" ] 2>/dev/null ||
   ![ "$SRC_Y2" -eq "$SRC_Y2" ] 2>/dev/null ||
   [[ SRC_X1 -gt SRC_X2 || SRC_Y1 -gt SRC_Y2 ]]; then
	echo "Usage: ./gen_montage.sh <source_format> <dest_img> <x1> <y1> <x2> <y2> <quality>" >&2
	exit 1
fi

SRC_FILES=()

for (( y = SRC_Y2; y >= SRC_Y1; y-- )); do
	for (( x = SRC_X1; x <= SRC_X2; x++ )); do
		SRC_FILES+=("$(printf "$SRC_FMT" $x $y)")
	done
done

if [ -n "$QUALITY" ]; then
	QUALITY="-quality $QUALITY"
fi

magick montage "${SRC_FILES[@]}" \
               -tile $((SRC_X2-SRC_X1+1))x$((SRC_Y2-SRC_Y1+1)) \
               -geometry +0+0 \
               $QUALITY \
               -strip \
               "$DST_IMG"

