#!/usr/bin/env python3

import math
import re
import sys


def convert(lat, lng):
    # EPSG:3857 -> pixel coordinates at zoom 0,
    # followed by the same transformation used by the
    # experimental Leaflet marker code.

    new_lng = 128.0 + lng * 128.0 / 180.0

    mercator_y = math.log(
        math.tan(math.pi / 4.0 + lat * math.pi / 360.0)
    )

    new_lat = 128.0 + mercator_y * 128.0 / math.pi

    return new_lat, new_lng


pattern = re.compile(
    r'(?P<prefix>\bcoords\s*:\s*\[\[\s*)'
    r'(?P<lat>[+-]?(?:\d+(?:\.\d*)?|\.\d+))'
    r'(?P<separator>\s*,\s*)'
    r'(?P<lng>[+-]?(?:\d+(?:\.\d*)?|\.\d+))'
    r'(?P<suffix>\s*\]\])'
)


def replace_coordinate(match):
    lat = float(match.group("lat"))
    lng = float(match.group("lng"))

    new_lat, new_lng = convert(lat, lng)

    return (
        match.group("prefix")
        + f"{new_lat:.3f}"
        + match.group("separator")
        + f"{new_lng:.3f}"
        + match.group("suffix")
    )


def main():
    if len(sys.argv) != 3:
        print(f"Usage: {sys.argv[0]} INPUT.js OUTPUT.js")
        sys.exit(1)

    input_file = sys.argv[1]
    output_file = sys.argv[2]

    with open(input_file, "r", encoding="utf-8") as f:
        data = f.read()

    converted_data, count = pattern.subn(
        replace_coordinate, data
    )

    with open(output_file, "w", encoding="utf-8") as f:
        f.write(converted_data)

    print(f"Converted {count} coordinates.")
    print(f"Wrote {output_file}")


if __name__ == "__main__":
    main()

