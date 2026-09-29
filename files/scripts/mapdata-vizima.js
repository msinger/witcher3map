{ let getMapData = function() { return {
	// ----------------- Gwent Players ------------------
	gwent: [{
		coords:      [120.938,120.750],
		extraLabel:  "z:gwent.nobleman.label"
	}],
	// ----------------- Points of Interest -------------
	poi: [{
		coords:      [123.125,126.438],
		label:       "z:poi.switch.label",
		desc:        "z:poi.switch.desc"
	}, {
		coords:      [149.875,125.500],
		label:       "z:poi.towel.label",
		desc:        "z:poi.towel.desc",
		during:      "mainquest.imperial"
	}],
	// ----------------- Sign Posts ---------------------
	signpost: [{
		coords:      [111.750,135.688],
		name:        "z:palace"
	}],
	// ----------------- Treasure -----------------------
	treasure: [{
		coords:      [[132.750,126.500],
		             [131.906,95.219],
		             [132.938,95.188]]
	}, {
		coords:      [[145.000,151.000],
		             [145.188,153.250],
		             [159.813,151.188],
		             [160.125,153.063]],
		after:       "sidequest.brnilfgaard"
	}]
}; };

registerMap({
	name:          "vizima",
	ns:            "z",
	bounds:        [{ lat: 0, lng: 0 }, { lat: 256, lng: 256 }],
	initialPos:    [128, 128],
	minZoom:       2,
	maxZoom:       5,
	minNativeZoom: 2,
	maxNativeZoom: 3,
	initialZoom:   3,
	getMapData:    getMapData
}); }
