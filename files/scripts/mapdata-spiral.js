{ let getMapData = function() { return {
	// ----------------- Entrances ----------------------
	entrance: [{
		coords:      [137.586,31.750],
		portal:      true,
		notInGame:   true, // TODO: Check if in game
		during:      "mainquest.through",
		special:     false
	}, {
		coords:      [161.766,127.063],
		portal:      true,
		notInGame:   true, // TODO: Check if in game
		groupId:     "poisonToUnderwater",
		during:      "mainquest.through",
		special:     false
	}, {
		coords:      [32.750,291.313],
		portal:      true,
		underwater:  true,
		underground: true,
		entrances:   "poisonToUnderwater",
		notInGame:   true, // TODO: Check if in game
		during:      "mainquest.through",
		special:     false
	}, {
		coords:      [76.531,301.625],
		portal:      true,
		underground: true,
		notInGame:   true, // TODO: Check if in game
		during:      "mainquest.through",
		special:     false
	}]
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
