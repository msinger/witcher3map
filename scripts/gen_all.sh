#!/bin/bash

set -e

REDKIT_PATH=${REDKIT_PATH:-"$HOME/.local/share/Steam/steamapps/common/The Witcher 3 REDkit"}
TILE_SZ=256
JPG_QUALITY=85

if ! [ -d ../files/maps ]; then
	echo Please run ./gen_all.sh from within scripts directory and make sure ../files/maps exists. >&2
	exit 1
fi

TEMP_FILE=
function cleanup () {
	if [ -n "$TEMP_FILE" ]; then
		rm -f "$TEMP_FILE"
	fi
}
trap cleanup EXIT
TEMP_FILE=$(mktemp --suffix=.png)

echo White Orchard:
if [ -d ../files/maps/white_orchard ]; then
	echo exists already
else
	./gen_montage.sh "$REDKIT_PATH/r4data/gameplay/gui_new/maps/prolog_village/level3/tile%dx%d.jpg" \
	                 "$TEMP_FILE" 2 2 6 5
	./gen_tiles.sh "$TEMP_FILE" ../files/maps/white_orchard \
	               $TILE_SZ 2 5 $JPG_QUALITY
fi

echo Velen Novigrad:
if [ -d ../files/maps/velen ]; then
	echo exists already
else
	./gen_montage.sh "$REDKIT_PATH/r4data/gameplay/gui_new/maps/novigrad/level4/tile%dx%d.jpg" \
	                 "$TEMP_FILE" 6 5 13 13
	./gen_tiles.sh "$TEMP_FILE" ../files/maps/velen \
	               $TILE_SZ 1 5 $JPG_QUALITY
fi

echo Gaunter:
if [ -d ../files/maps/gaunter ]; then
	echo exists already
else
	./gen_montage.sh "$REDKIT_PATH/r4data/gameplay/gui_new/minimaps/novigrad/tile%dx%d.jpg" \
	                 "$TEMP_FILE" 41 19 42 22
	./gen_tiles.sh "$TEMP_FILE" ../files/maps/gaunter \
	               $TILE_SZ 0 2 $JPG_QUALITY
fi

echo Skellige:
if [ -d ../files/maps/skellige ]; then
	echo exists already
else
	./gen_montage.sh "$REDKIT_PATH/r4data/gameplay/gui_new/maps/skellige/level4/tile%dx%d.jpg" \
	                 "$TEMP_FILE" 0 0 15 15
	./gen_tiles.sh "$TEMP_FILE" ../files/maps/skellige \
	               $TILE_SZ 2 6 $JPG_QUALITY
fi

echo Kaer Morhen:
if [ -d ../files/maps/kaer_morhen ]; then
	echo exists already
else
	./gen_montage.sh "$REDKIT_PATH/r4data/gameplay/gui_new/maps/kaer_morhen/level4/tile%dx%d.jpg" \
	                 "$TEMP_FILE" 6 6 9 10
	./gen_tiles.sh "$TEMP_FILE" ../files/maps/kaer_morhen \
	               $TILE_SZ 2 5 $JPG_QUALITY
fi

echo Isle of Mists:
if [ -d ../files/maps/isle_mists ]; then
	echo exists already
else
	./gen_montage.sh "$REDKIT_PATH/r4data/gameplay/gui_new/maps/island_of_mist/level2/tile%dx%d.jpg" \
	                 "$TEMP_FILE" 0 1 3 3
	./gen_tiles.sh "$TEMP_FILE" ../files/maps/isle_mists \
	               $TILE_SZ 2 3 $JPG_QUALITY
fi

echo Toussaint:
if [ -d ../files/maps/toussaint ]; then
	echo exists already
else
	./gen_montage.sh "$REDKIT_PATH/r4data/dlc/bob/data/gameplay/gui_new/maps/bob/level4/tile%dx%d.jpg" \
	                 "$TEMP_FILE" 3 2 11 10
	./gen_tiles.sh "$TEMP_FILE" ../files/maps/toussaint \
	               $TILE_SZ 2 6 $JPG_QUALITY
fi

echo Thousand Fables:
if [ -d ../files/maps/fables ]; then
	echo exists already
else
	./gen_montage.sh "$REDKIT_PATH/r4data/dlc/bob/data/gameplay/gui_new/minimaps/bob/tile%dx%d.jpg" \
	                 "$TEMP_FILE" 25 20 27 22
	./gen_tiles.sh "$TEMP_FILE" ../files/maps/fables \
	               $TILE_SZ 2 3 $JPG_QUALITY
fi
