{ let getMapData = function() { return {
	// ----------------- Points of Interest -------------
	poi: [{
		coords:      [133.750,68.250],
		label:       "g:poi.start.label",
		desc:        "g:poi.start.desc",
		during:      "mainquest.whatsoever",
		special:     false
	}, {
		coords:      [219.125,87.750],
		label:       "g:poi.well.label",
		desc:        "g:poi.well.desc",
		during:      "mainquest.whatsoever",
		special:     false
	}, {
		coords:      [269.375,136.750],
		label:       "g:poi.shani.label",
		desc:        "g:poi.shani.desc",
		during:      "mainquest.whatsoever",
		special:     false
	}, {
		coords:      [318.125,103.500],
		label:       "g:poi.swing.label",
		desc:        "g:poi.swing.desc",
		during:      "mainquest.whatsoever",
		special:     false
	}, {
		coords:      [363.625,131.000],
		label:       "g:poi.tomb.label",
		desc:        "g:poi.tomb.desc",
		during:      "mainquest.whatsoever",
		special:     false
	}, {
		coords:      [359.375,172.500],
		label:       "g:poi.answer.label",
		desc:        "g:poi.answer.desc",
		during:      "mainquest.whatsoever",
		special:     false
	}],
	// ----------------- Treasure -----------------------
	treasure: [{
		coords:      [277.750,48.125],
		label:       "g:treasure.viper.label",
		during:      "mainquest.whatsoever"
	}, {
		coords:      [300.000,150.750],
		desc:        "g:treasure.cave.desc",
		during:      "mainquest.whatsoever",
		special:     false
	}]
}; };

registerMap({
	name:          "gaunter",
	ns:            "g",
	bounds:        [{ lat: -32, lng: -32 }, { lat: 512+32, lng: 256+32 }],
	initialPos:    [256, 128],
	minZoom:       0,
	maxZoom:       4,
	minNativeZoom: 0,
	maxNativeZoom: 2,
	initialZoom:   1,
	getMapData:    getMapData
}); }
