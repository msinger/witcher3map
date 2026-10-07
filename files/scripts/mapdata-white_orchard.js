{ let getMapData = function() { return {
	// ----------------- Abandoned Sites ----------------
	abandoned: [{
		coords:      [[36.938,93.437],
		             [66.126,19.312]]
	}],
	// ----------------- Armorers -----------------------
	armorer: [{
		coords:      [59.187,64.750],
		extraLabel:  "craftlevel.amateur"
	}],
	// ----------------- Armorer's Tables ---------------
	armorerstable: [{
		coords:      [109.345,19.528]
	}],
	// ----------------- Bandit Camps -------------------
	banditcamp: [{
		coords:      [[21.624,41.125],
		             [48.563,97.125],
		             [82.585,15.844],
		             [102.000,109.840],
		             [51.844,116.125],
		             [64.907,114.000]]
	}],
	// ----------------- Blacksmiths --------------------
	blacksmith: [{
		coords:      [108.062,20.375],
		extraLabel:  "craftlevel.amateur"
	}],
	// ----------------- Contracts ----------------------
	contract: [{
		coords:      [[62.406,64.437],
		             [62.344,56.344]],
		id:          "contract.devil",
		name:        "devil",
		before:      "mainquest.ice"
	}],
	// ----------------- Entrances ----------------------
	entrance: [{
		coords:      [[30.376,68.125],
		             [36.563,74.250]],
		groupId:     "well"
	}, {
		coords:      [102.563,60.782],
		notInGame:   true,
		groupId:     "crypt"
	}],
	// ----------------- Events -------------------------
	event: [{
		coords:      [64.938,34.313],
		name:        "tomira",
		during:      "mainquest.something"
	}, {
		coords:      [88.688,38.125],
		name:        "dwarves",
		during:      "mainquest.something"
	}],
	// ----------------- Grindstones --------------------
	grindstone: [{
		coords:      [[67.250,17.625],
		             [108.125,21.375]]
	}, {
		coords:      [60.017,65.276],
		extraDesc:   "w:grindstone.forge.desc",
		special:     true
	}],
	// ----------------- Guarded Treasure ---------------
	guarded: [{
		coords:      [[45.624,85.500],
		             [88.437,8.750],
		             [107.781,32.656],
		             [46.000,128.250]]
	}, {
		coords:      [105.910,59.063],
		underground: true,
		entrances:   "crypt"
	}],
	// ----------------- Gwent Players ------------------
	gwent: [{
		coords:      [66.030,70.938],
		before:      "mainquest.incident"
	}],
	// ----------------- Herbalists ---------------------
	herbalist: [{
		coords:      [64.437,33.687]
	}, {
		coords:      [37.750,93.125],
		liberate:    true
	}],
	// ----------------- Hollow Trees -------------------
	hollow: [{
		coords:      [[75.875,131.312],
		             [61.156,114.656],
		             [68.875,119.187],
		             [79.187,15.312],
		             [29.405,80.750],
		             [115.812,50.750],
		             [115.250,59.500],
		             [35.030,103.063],
		             [93.063,139.375],
		             [97.281,132.656],
		             [84.187,94.563],
		             [112.125,62.750],
		             [59.999,121.188],
		             [76.000,10.875],
		             [75.687,15.688],
		             [72.343,12.969],
		             [61.781,128.469],
		             [32.062,60.500],
		             [85.438,142.469],
		             [120.656,60.531]]
	}],
	// ----------------- Honeycombs ---------------------
	honeycomb: [{
		coords:      [[67.750,41.938],
		             [67.313,35.000],
		             [62.313,26.062],
		             [64.063,16.500],
		             [64.875,17.562],
		             [69.219,18.906],
		             [69.093,16.844],
		             [69.875,14.844],
		             [81.875,15.563],
		             [73.343,4.906],
		             [72.500,5.125],
		             [87.750,24.125],
		             [94.500,17.375],
		             [96.281,16.000],
		             [78.781,31.937],
		             [78.187,32.031],
		             [86.937,30.313],
		             [90.000,30.500],
		             [86.001,35.969],
		             [92.125,32.531],
		             [106.907,32.562],
		             [97.438,37.531],
		             [89.843,39.500],
		             [88.062,40.375],
		             [87.250,40.656],
		             [29.376,52.312],
		             [41.908,108.156],
		             [72.374,86.750],
		             [61.813,90.187],
		             [62.000,98.375],
		             [64.563,119.094],
		             [79.781,35.813],
		             [80.688,36.937],
		             [89.875,65.625],
		             [101.625,65.000],
		             [97.125,58.938],
		             [99.813,103.312],
		             [97.625,105.938],
		             [93.313,93.500],
		             [52.937,26.875],
		             [83.594,32.688],
		             [94.844,31.531],
		             [98.719,33.562],
		             [69.249,89.250],
		             [68.999,12.500],
		             [76.656,37.281],
		             [68.500,21.437],
		             [69.313,48.125],
		             [75.875,31.875],
		             [76.297,25.469]]
	}],
	// ----------------- Innkeeps -----------------------
	innkeep: [{
		coords:      [65.125,70.219],
		extraLabel:  "w:innkeep.whiteOrchardInn.label",
		sells:       ["gwent", "food", "drinks"],
		before:      "mainquest.incident"
	}],
	// ----------------- Monster Nests ------------------
	monsternest: [{
		coords:      [[117.750,60.000],
		             [92.062,127.781],
		             [67.938,134.906]]
	}],
	// ----------------- Notice Boards ------------------
	notice: [{
		coords:      [61.937,64.437]
	}],
	// ----------------- Places of Power ----------------
	pop: [{
		coords:      [[22.126,52.125],
		             [93.313,128.219]],
		extraLabel:  "pop.quen.label"
	}, {
		coords:      [29.937,90.438],
		extraLabel:  "pop.yrden.label"
	}, {
		coords:      [85.094,35.281],
		extraLabel:  "pop.axii.label"
	}, {
		coords:      [102.062,61.125],
		extraLabel:  "pop.igni.label"
	}, {
		coords:      [118.438,58.625],
		extraLabel:  "pop.aard.label"
	}],
	// ----------------- Points of Interest -------------
	poi: [{
		coords:      [87.250,133.687],
		label:       "poi.lootableBattlefield.label",
		extraDesc:   "poi.lootableBattlefield.desc"
	}, {
		coords:      [74.342,129.422],
		label:       "w:poi.crystalSkull.label",
		extraDesc:   "w:poi.crystalSkull.desc",
		before:      "mainquest.incident"
	}, {
		coords:      [62.376,73.437],
		label:       "w:poi.boss.label",
		extraDesc:   "w:poi.boss.desc"
	}, {
		coords:      [32.408,69.906],
		label:       "w:poi.diary.label",
		extraDesc:   "w:poi.diary.desc"
	}],
	// ----------------- Scavenger Hunts ----------------
	scavengerhunt: [{
		coords:      [51.754,115.911],
		upgrade:     "#",
		school:      "serpentine",
		items:       "steelSword"
	}, {
		coords:      [103.157,60.343],
		upgrade:     "#",
		school:      "serpentine",
		items:       "silverSword",
		underground: true,
		entrances:   "crypt"
	}],
	// ----------------- Shopkeepers --------------------
	shopkeeper: [{
		coords:      [64.344,74.187],
		sells:       ["gwent", "drinks", "crafting", "recipes", "w:temerianSet"]
	}, {
		coords:      [64.312,17.313],
		sells:       ["runestones", "alchemy", "food"], // TODO: Check inventory in Redkit. In my game he didn't have runestones. And as food he only sold one single water.
		liberate:    true
	}],
	// ----------------- Sidequests ---------------------
	sidequest: [{
		coords:      [73.813,50.313],
		name:        "fry"
	}, {
		coords:      [59.782,64.719],
		name:        "twist"
	}, {
		coords:      [62.064,67.531],
		name:        "faith",
		during:      "mainquest.something"
	}, {
		coords:      [[48.469,124.407],
		             [61.438,64.422]],
		id:          "sidequest.missing",
		name:        "missing"
	}, {
		coords:      [64.814,33.156],
		name:        "death1",
		during:      "mainquest.orchard"
	}, {
		coords:      [89.813,26.126],
		name:        "precious"
	}],
	// ----------------- Sign Posts ---------------------
	signpost: [{
		coords:      [32.811,66.938],
		name:        "w:abandonedVillage"
	}, {
		coords:      [36.499,49.906],
		name:        "w:brokenBridge"
	}, {
		coords:      [62.875,76.656],
		name:        "w:woesongBridge"
	}, {
		coords:      [65.875,27.125],
		name:        "w:sawmill"
	}, {
		coords:      [89.687,64.063],
		name:        "w:mill"
	}, {
		coords:      [113.125,19.000],
		name:        "w:nilfgaardianGarrison"
	}, {
		coords:      [91.000,118.563],
		name:        "w:cacklerBridge"
	}, {
		coords:      [69.844,124.813],
		name:        "w:crossroads"
	}, {
		coords:      [61.063,101.500],
		name:        "w:ford"
	}, {
		coords:      [54.250,128.875],
		name:        "w:ransackedVillage"
	}],
	// ----------------- Smugglers' Caches --------------
	smugglers: [{
		coords:      [40.376,105.813]
	}],
	// ----------------- Spoils of War ------------------
	spoils: [{
		coords:      [118.875,36.656]
	}],
	// ----------------- Stashes ------------------------
	stash: [{
		coords:      [65.844,70.453]
	}],
	// ----------------- Treasure -----------------------
	treasure: [{
		coords:      [[69.155,38.250],
		             [116.031,28.125],
		             [116.625,19.937],
		             [92.812,117.844],
		             [90.281,116.188],
		             [85.687,48.906],
		             [62.562,77.687],
		             [62.281,89.062],
		             [44.905,114.344],
		             [34.155,78.938],
		             [36.749,49.375],
		             [50.843,42.750],
		             [113.218,32.375],
		             [112.188,48.688],
		             [92.656,73.156],
		             [76.624,107.657],
		             [68.282,87.531],
		             [82.750,132.188],
		             [81.687,132.437],
		             [80.031,134.563],
		             [80.343,137.625],
		             [28.248,69.344],
		             [66.063,116.375],
		             [49.626,121.062],
		             [53.469,125.562],
		             [51.875,125.781],
		             [52.032,127.657],
		             [42.095,113.468],
		             [38.248,104.094],
		             [67.719,16.031],
		             [66.843,121.125],
		             [72.750,114.000],
		             [33.313,25.625],
		             [82.219,27.688],
		             [30.717,91.031],
		             [103.562,71.438],
		             [61.593,114.969],
		             [29.905,54.687],
		             [85.031,36.875],
		             [81.937,124.125],
		             [56.751,128.437],
		             [28.562,66.094],
		             [100.719,14.281],
		             [77.906,30.875],
		             [63.156,56.375]]
	}, {
		coords:      [[78.124,54.062],
		             [86.750,51.063],
		             [72.781,60.531],
		             [75.094,57.031],
		             [42.594,132.343],
		             [39.313,78.156]],
		underwater:  true
	}, {
		coords:      [[33.968,72.688],
		             [30.561,68.688]],
		underwater:  true,
		underground: true,
		entrances:   "well"
	}],
	// ----------------- Treasure Hunts -----------------
	treasurehunt: [{
		coords:      [89.812,49.062],
		name:        "temerian"
	}, {
		coords:      [97.812,87.563],
		name:        "dirty"
	}, {
		coords:      [106.750,98.000],
		name:        "deserter"
	}, {
		coords:      [51.984,115.969],
		id:          "treasurehunt.scav_viper",
		name:        "scav_viper"
	}, {
		coords:      [103.195,60.086],
		id:          "treasurehunt.scav_viper",
		name:        "scav_viper",
		underground: true,
		entrances:   "crypt"
	}]
}; };

registerMap({
	name:          "white_orchard",
	ns:            "w",
	bounds:        [{ lat: -32, lng: -32 }, { lat: 128+32, lng: 160+32 }],
	initialPos:    [64, 80],
	minZoom:       2,
	maxZoom:       7,
	minNativeZoom: 2,
	maxNativeZoom: 5,
	initialZoom:   3,
	getMapData:    getMapData
}); }
