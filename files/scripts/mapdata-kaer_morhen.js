{ let getMapData = function() { return {
	// ----------------- Alchemy Supplies ---------------
	alchemy: [{
		coords:      [64.563,67.000],
		extraLabel:  "k:alchemy.keira.label",
		extraDesc:   "k:alchemy.keira.desc",
		during:      "mainquest.battle"
	}],
	// ----------------- Armorers -----------------------
	armorer: [{
		coords:      [62.781,61.203],
		extraLabel:  ["craftlevel.amateur", "k:armorer.zoltan.label"],
		extraDesc:   "k:armorer.zoltan.desc",
		during:      "mainquest.battle"
	}],
	// ----------------- Armorer's Tables ---------------
	armorerstable: [{
		coords:      [65.813,68.547]
	}],
	// ----------------- Boats --------------------------
	boat: [{
		coords:      [117.000,66.797],
		after:       "mainquest.trial"
	}, {
		coords:      [83.671,64.687]
	}],
	// ----------------- Entrances ----------------------
	entrance: [{
		coords:      [135.875,73.875],
		groupId:     "no_pointy_sticks_cave"
	}, {
		coords:      [127.781,66.672],
		groupId:     "speartip_cave"
	}, {
		coords:      [[132.531,70.109],
		             [34.844,71.719],
		             [46.063,51.453],
		             [88.188,73.125],
		             [75.422,43.063],
		             [70.906,67.406],
		             [61.391,88.547],
		             [50.219,60.594],
		             [48.688,59.719],
		             [56.813,60.000]]
	}, {
		coords:      [117.734,67.469],
		notInGame:   true,
		groupId:     "speartip_cave"
	}],
	// ----------------- Events -------------------------
	event: [{
		coords:      [75.062,41.312],
		name:        "trail"
	}],
	// ----------------- Grindstones --------------------
	grindstone: [{
		coords:      [[64.297,61.328],
		             [66.703,68.813],
		             [62.156,61.688]]
	}],
	// ----------------- Guarded Treasure ---------------
	guarded: [{
		coords:      [[119.313,74.906],
		             [102.625,52.906]]
	}],
	// ----------------- Gwent Quests -------------------
	gwentquest: [{
		coords:      [64.219,69.281],
		name:        "lambert",
		extraDesc:   "gwentquest.afterPlayer",
		quest:       "sidequest.gw_pals",
		afterQuest:  "sidequest.gw_pals",
		afterPlayer: "thaler",
		before:      "mainquest.baby"
	}],
	// ----------------- Places of Power ----------------
	pop: [{
		coords:      [125.781,67.891],
		extraLabel:  "pop.igni.label"
	}],
	// ----------------- Points of Interest -------------
	poi: [{
		coords:      [46.219,54.375],
		label:       "k:poi.deadDog.label",
		extraDesc:   "k:poi.deadDog.desc",
		special:     true
	}, {
		coords:      [66.906,66.734],
		label:       "k:poi.earring.label"
	}, {
		coords:      [78.906,52.016],
		label:       "k:poi.graveyard.label"
	}, {
		coords:      [46.625,58.875],
		label:       "k:poi.leoGrave.label",
		extraDesc:   "k:poi.leoGrave.desc"
	}],
	// ----------------- Scavenger Hunts ----------------
	scavengerhunt: [{
		coords:      [59.687,89.875],
		upgrade:     "superior",
		school:      "wolven",
		items:       "boots"
	}, {
		coords:      [35.000,72.875],
		upgrade:     "enhanced",
		school:      "wolven",
		items:       "gauntlets"
	}, {
		coords:      [46.062,50.843],
		upgrade:     "superior",
		school:      "wolven",
		items:       "gauntlets"
	}, {
		coords:      [117.031,60.312],
		upgrade:     "basic",
		school:      "wolven",
		items:       "silverSword"
	}, {
		coords:      [62.796,41.718],
		upgrade:     "basic",
		school:      "wolven",
		items:       "steelSword"
	}, {
		coords:      [117.437,58.687],
		upgrade:     "enhanced",
		school:      "wolven",
		items:       "steelSword"
	}, {
		coords:      [89.843,69.968],
		upgrade:     "enhanced",
		school:      "wolven",
		items:       "trousers"
	}, {
		coords:      [75.437,42.484],
		upgrade:     "superior",
		school:      "wolven",
		items:       "trousers"
	}, {
		coords:      [57.031,58.375],
		upgrade:     "basic",
		school:      "wolven",
		items:       ["armor", "boots", "gauntlets", "trousers"]
	}],
	// ----------------- Sidequests ---------------------
	sidequest: [{
		coords:      [64.156,59.828],
		name:        "berengar",
		before:      "mainquest.mists"
	}, {
		coords:      [39.703,77.000],
		name:        "greenhouse"
	}, {
		coords:      [82.500,66.156],
		name:        "slayer"
	}, {
		coords:      [62.750,42.531],
		name:        "bastion",
		after:       "sidequest.magiclamp"
	}, {
		coords:      [65.031,67.750],
		name:        "forge",
		after:       "mainquest.wandering"
	}],
	// ----------------- Sign Posts ---------------------
	signpost: [{
		coords:      [82.109,65.656],
		name:        "k:lakesideHut"
	}, {
		coords:      [47.922,55.547],
		name:        "k:ironMine"
	}, {
		coords:      [61.172,58.734],
		name:        "k:kaerMorhen"
	}, {
		coords:      [62.531,43.719],
		name:        "k:bastion"
	}, {
		coords:      [116.625,58.813],
		name:        "k:ruinedWatchtower"
	}],
	// ----------------- Stashes ------------------------
	stash: [{
		coords:      [64.570,67.500]
	}],
	// ----------------- Treasure -----------------------
	treasure: [{
		coords:      [[107.563,60.938],
		             [97.750,54.813],
		             [67.250,67.500],
		             [61.063,42.875],
		             [72.688,56.000],
		             [47.313,64.406],
		             [135.063,74.031]]
	}, {
		coords:      [136.469,74.750],
		underground: true,
		entrances:   "no_pointy_sticks_cave"
	}, {
		coords:      [[122.578,68.563],
		             [121.203,66.109],
		             [123.469,68.031],
		             [126.703,64.109],
		             [128.391,64.031],
		             [129.109,66.016]],
		underground: true,
		entrances:   "speartip_cave"
	}, {
		coords:      [47.188,57.000],
		underwater:  true
	}]
}; };

registerMap({
	name:        "kaer_morhen",
	ns:          "k",
	bounds:      [{ lat: 0, lng: 0 }, { lat: 160, lng: 128 }],
	initialPos:  [80, 64],
	minZoom:     2,
	maxZoom:     7,
	nativeZoom:  5,
	initialZoom: 3,
	getMapData:  getMapData
}); }
