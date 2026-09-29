{ let getMapData = function() { return {
}; };

registerMap({
	name:          "spiral",
	ns:            "p",
	bounds:        [{ lat: -32, lng: -32 }, { lat: 384+32, lng: 384+32}],
	initialPos:    [192, 192],
	minZoom:       1,
	maxZoom:       7,
	minNativeZoom: 1,
	maxNativeZoom: 5,
	initialZoom:   2,
	getMapData:    getMapData
}); }
