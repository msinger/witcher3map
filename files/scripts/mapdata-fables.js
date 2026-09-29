{ let getMapData = function() { return {
	// ----------------- Gwent Players ------------------
	gwent: [{
		coords:      [129.625,92.188],
		extraLabel:  "f:gwent.girl.label",
		during:      "mainquest.beyond",
		special:     false
	}],
	// ----------------- Notice Boards ------------------
	notice: [{
		coords:      [127.063,92.313],
		during:      "mainquest.beyond",
		special:     false
	}],
	// ----------------- Points of Interest -------------
	poi: [{
		coords:      [126.000,63.125],
		label:       "f:poi.thumb.label",
		during:      "mainquest.beyond",
		special:     false
	}, {
		coords:      [121.625,52.000],
		label:       "f:poi.pigs.label",
		during:      "mainquest.beyond",
		special:     false
	}, {
		coords:      [106.000,72.125],
		label:       "f:poi.tower.label",
		during:      "mainquest.beyond",
		special:     false
	}, {
		coords:      [92.000,57.250],
		label:       "f:poi.dragon.label",
		during:      "mainquest.beyond",
		special:     false
	}, {
		coords:      [89.001,46.251],
		label:       "f:poi.balbina.label",
		during:      "mainquest.beyond",
		special:     false
	}, {
		coords:      [66.252,53.126],
		label:       "f:poi.camp.label",
		during:      "mainquest.beyond",
		special:     false
	}, {
		coords:      [69.376,69.001],
		label:       "f:poi.hood.label",
		during:      "mainquest.beyond",
		special:     false
	}, {
		coords:      [82.750,71.125],
		label:       "f:poi.blaviken.label",
		during:      "mainquest.beyond",
		special:     false
	}, {
		coords:      [75.876,86.251],
		label:       "f:poi.den.label",
		during:      "mainquest.beyond",
		special:     false
	}, {
		coords:      [92.000,106.500],
		label:       "f:poi.joss.label",
		during:      "mainquest.beyond",
		special:     false
	}, {
		coords:      [99.251,88.625],
		label:       "f:poi.wisp.label",
		during:      "mainquest.beyond",
		special:     false
	}, {
		coords:      [73.876,121.126],
		label:       "f:poi.witch.label",
		during:      "mainquest.beyond",
		special:     false
	}, {
		coords:      [71.501,153.000],
		label:       "f:poi.grigg.label",
		during:      "mainquest.beyond",
		special:     false
	}, {
		coords:      [58.251,154.000],
		label:       "f:poi.start.label",
		during:      "mainquest.beyond",
		special:     false
	}, {
		coords:      [104.625,104.625],
		label:       "f:poi.emperor.label",
		during:      "mainquest.beyond",
		special:     false
	}, {
		coords:      [92.562,48.437],
		label:       "f:poi.pepper.label",
		during:      "mainquest.beyond",
		special:     false
	}, {
		coords:      [74.624,72.063],
		label:       "f:poi.slippers.label",
		during:      "mainquest.beyond",
		special:     false
	}],
	// ----------------- Shopkeepers --------------------
	shopkeeper: [{
		coords:      [129.124,90.938],
		extraLabel:  "f:shopkeeper.girl.label",
		desc:        "f:shopkeeper.girl.desc",
		during:      "mainquest.beyond",
		special:     false
	}],
	// ----------------- Sidequests ---------------------
	sidequest: [{
		coords:      [127.188,93.688],
		name:        "duck",
		during:      "mainquest.beyond",
		baw:         true
	}],
	// ----------------- Treasure -----------------------
	treasure: [{
		coords:      [147.875,71.750],
		extraLabel:  "f:treasure.pot.label",
		during:      "mainquest.beyond",
		special:     false
	}, {
		coords:      [90.501,78.000],
		extraLabel:  "f:treasure.knight.label",
		during:      "mainquest.beyond",
		special:     false
	}, {
		coords:      [[74.875,74.000],
		             [106.875,74.313]],
		during:      "mainquest.beyond",
		special:     false
	}, {
		coords:      [[86.001,71.500],
		             [99.500,71.250]],
		during:      "mainquest.beyond",
		special:     false,
		underwater:  true
	}]
}; };

registerMap({
	name:          "fables",
	ns:            "f",
	bounds:        [{ lat: -32, lng: -32 }, { lat: 192+32, lng: 192+32 }],
	initialPos:    [96, 96],
	minZoom:       2,
	maxZoom:       5,
	minNativeZoom: 2,
	maxNativeZoom: 3,
	initialZoom:   3,
	getMapData:    getMapData
}); }
