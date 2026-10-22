{ let getMapData = function() { return {
	// ----------------- Abandoned Sites ----------------
	abandoned: [{
		coords:      [[36.938,93.437],  // 4x Ghoul (L2)
		             [66.126,19.312]],  // 4x Ghoul (L2)
		name:        "ghoul",
		level:       "#2"
	}],
	// ----------------- Armorers -----------------------
	armorer: [{
		coords:      [59.187,64.750],
		id:          "willis",
		extraLabel:  ["craftlevel.amateur", "w:armorer.willis.label"]
	}],
	// ----------------- Armorer's Tables ---------------
	armorerstable: [{
		coords:      [109.345,19.528]
	}],
	// ----------------- Bandit Camps -------------------
	banditcamp: [{
		coords:      [[21.624,41.125],  // 1x Axe2H (L2), 2x Sword (L2), 1x Ranged (L1)
		             [82.585,15.844]],  // 1x Axe2H (L2), 2x Sword (L2), 1x Ranged (L1)
		level:       "#1 & 2"
	}, {
		coords:      [64.907,114.000],  // 1x Axe2H-Weak (L2), 1x Sword (L2), 1x Ranged (L1)
		id:          "bridgeBandits",
		level:       "#1 & 2",
		uncleared:   "tentBandits"
	}, {
		coords:      [102.000,109.840], // 1x Leader-Sword-Shield (L4), 2x Axe2H (L2), 1x Sword (L2), 2x Ranged (L1)
		id:          "tentBandits",
		level:       "#1, 2 & 4"
	}, {
		coords:      [[48.563,97.125],  // 1x Leader-Axe2H (L5), 2x Sword (L2), 2x Ranged (L1)
		             [51.844,116.125]], // 1x Leader-Axe2H (L5), 2x Sword (L2), 1x Ranged (L1)
		level:       "#1, 2 & 5"
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
		coords:      [107.781,32.656],  // 1x Warg (L5), 3x Wolf (L5)
		name:        "wolf",
		level:       "#5"
	}, {
		coords:      [88.437,8.750],    // 1x Water Hag (L6)
		name:        "waterhag",
		level:       "#6"
	}, {
		coords:      [105.910,59.063],  // 1x Wraith (L7)
		name:        "wraith",
		level:       "#7",
		underground: true,
		entrances:   "crypt"
	}, {
		coords:      [[45.624,85.500],  // 1x Drowner (L4), 3x Drowner (L3)
		             [46.000,128.250]], // 1x Drowner (L4), 3x Drowner (L3)
		name:        "drowner",
		level:       "#3 & 4"
	}],
	// ----------------- Gwent Players ------------------
	gwent: [{
		coords:      [66.030,70.938],
		id:          "aldertGwent",
		extraLabel:  "w:gwent.aldert.label",
		before:      "mainquest.incident"
	}],
	// ----------------- Herbalists ---------------------
	herbalist: [{
		coords:      [64.437,33.687],
		id:          "tomira",
		extraLabel:  "w:herbalist.tomira.label",
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
		id:          "elsa",
		extraLabel:  ["w:innkeep.whiteOrchardInn.label", "w:innkeep.elsa.label"],
		sells:       ["gwent", "food", "drinks"],
		before:      "mainquest.incident"
	}],
	// ----------------- Monsters -----------------------
	monster: [{
		coords:      [85.938,34.969],   // 1x Wraith (L6)
		name:        "wraith",
		level:       "#6",
		once:        true,
		areas: [{
			name: "monster.spawn",
			coords: [[86.141,34.578], [86.141,35.609], [85.000,35.609], [85.000,34.578]]
		}]
	}, {
		coords:      [59.563,115.156],  // 2x Wolf (L5)
		name:        "wolf",
		level:       "#5",
		once:        true,
		uncleared:   "tentBandits",
		areas: [{
			name: "monster.spawn",
			coords: [[56.125,119.219], [54.688,113.750], [56.781,113.437], [58.469,112.344], [60.625,112.312],
			        [60.469,119.250], [58.031,120.625]]
		}]
	}, {
		coords:      [72.750,40.688],   // 1x Warg (L5), 6x Wolf (L5) (in pr_poe_monsters area)
		name:        "wolf",
		level:       "#5",
		areas: [{
			name: "monster.spawn",
			coords: [[67.188,38.000], [71.125,36.250], [76.125,35.063], [82.563,34.813], [83.375,38.813],
			        [82.375,41.500], [78.563,42.000], [75.438,43.625], [72.375,45.813], [70.188,46.000]]
		}]
	}, {
		coords:      [108.563,108.500], // 2x Warg (L5), {4h-21h: 12x, 21h-4h: 14x} Wolf (L5) (in pr_poe_003 area)
		name:        "wolf",
		level:       "#5",
		areas: [{
			name: "monster.spawn",
			coords: [[123.625,85.000], [122.000,101.125], [108.188,121.563], [104.500,120.188], [107.813,84.313]]
		}]
	}, {
		coords:      [95.500,92.875],   // 1x Warg (L5), {4h-21h: 4x, 21h-4h: 5x} Wolf (L5) (in pr_poe_005 area)
		name:        "wolf",
		level:       "#5",
		areas: [{
			name: "monster.spawn",
			coords: [[99.188,89.500], [100.875,86.313], [107.500,89.438], [105.313,98.250], [101.000,98.125],
			        [97.375,102.375], [88.063,101.188], [86.063,91.188], [88.625,83.625], [93.250,83.313],
			        [95.188,88.625]]
		}]
	}, {
		coords:      [120.188,50.469],  // 1x Warg (L5), {4h-21h: 3x, 21h-4h: 4x} Wolf (L5) (in pr_poe_007 area)
		name:        "wolf",
		level:       "#5",
		areas: [{
			name: "monster.spawn",
			coords: [[122.469,42.344], [123.844,53.906], [116.500,54.500], [117.563,46.156], [118.344,44.813]]
		}]
	}, {
		coords:      [93.688,33.625],   // 1x Warg (L5), {4h-21h: 5x, 21h-4h: 7x} Wolf (L5) (in pr_poe_012 area)
		name:        "wolf",
		level:       "#5",
		areas: [{
			name: "monster.spawn",
			coords: [[94.688,41.313], [82.063,28.625], [86.281,27.656], [90.750,25.813], [98.250,30.000],
			        [104.250,37.094]]
		}]
	}, {
		coords:      [78.875,13.688],   // 1x Warg (L5), {4h-21h: 5x, 21h-4h: 8x} Wolf (L5) (in pr_poe_013 area)
		name:        "wolf",
		level:       "#5",
		areas: [{
			name: "monster.spawn",
			coords: [[83.125,4.219], [85.969,15.250], [85.188,22.250], [78.906,25.000], [75.406,28.625],
			        [72.281,24.906], [72.531,10.781], [66.375,0.000], [78.781,0.000]]
		}]
	}, {
		coords:      [57.250,19.125],   // 1x Warg (L5), {4h-21h: 4x, 21h-4h: 6x} Wolf (L5) (in pr_poe_014 area)
		name:        "wolf",
		level:       "#5",
		areas: [{
			name: "monster.spawn",
			coords: [[64.594,21.000], [64.531,25.469], [52.719,26.875], [48.938,21.313], [45.188,20.531],
			        [47.344,10.969], [58.750,2.844], [65.750,0.000], [65.000,12.281], [61.281,15.344]]
		}]
	}, {
		coords:      [35.250,39.000],   // 1x Warg (L5), {4h-21h: 4x, 21h-4h: 6x} Wolf (L5) (in pr_poe_015 area)
		name:        "wolf",
		level:       "#5",
		areas: [{
			name: "monster.spawn",
			coords: [[46.000,33.375], [46.875,40.375], [41.875,47.625], [37.375,47.750], [32.250,44.125],
			        [31.500,42.250], [27.000,37.125], [21.250,34.125], [26.000,26.250], [35.000,20.000],
			        [39.875,24.250], [40.250,31.125]]
		}]
	}, {
		coords:      [45.000,120.313],  // 2x Drowner (L4)
		name:        "drowner",
		level:       "#4",
		once:        true,
		areas: [{
			name: "monster.spawn",
			coords: [[44.313,117.156], [45.469,120.781], [43.313,121.375], [42.281,117.688]]
		}]
	}, {
		coords:      [89.500,50.688],   // 2x Drowner (L4)
		name:        "drowner",
		level:       "#4",
		once:        true,
		areas: [{
			name: "monster.spawn",
			coords: [[89.906,47.938], [91.281,52.281], [88.938,52.906], [87.656,48.563]]
		}]
	}, {
		coords:      [98.938,12.531],   // {4h-21h: 3x, 21h-4h: 5x} Drowner (L4) (in pr_poe_010 area)
		name:        "drowner",
		level:       "#4",
		areas: [{
			name: "monster.spawn",
			coords: [[101.844,18.219], [98.656,18.500], [97.188,14.750], [94.281,14.031], [93.094,17.188],
			        [89.563,15.625], [89.063,13.719], [85.969,12.156], [85.969,6.750], [88.625,12.281],
			        [92.344,12.688], [96.125,8.125], [100.188,7.781], [104.719,14.031]]
		}]
	}, {
		coords:      [102.250,25.500],  // {4h-21h: 3x, 21h-4h: 5x} Drowner (L4) (in pr_poe_011 area)
		name:        "drowner",
		level:       "#4",
		areas: [{
			name: "monster.spawn",
			coords: [[105.219,22.563], [106.938,25.188], [107.281,27.031], [106.938,28.813], [105.406,30.813],
			        [101.844,32.844], [97.656,28.594], [93.313,29.031], [90.969,25.719], [95.625,25.281],
			        [97.875,20.438], [102.031,24.688]]
		}]
	}, {
		coords:      [119.656,36.125],  // {4h-21h: 3x, 21h-4h: 4x} Drowner (L10) (in pr_poe_008 area)
		name:        "drowner", // only if player has crossbow
		level:       "#10",
		underwater:  true,
		areas: [{
			name: "monster.spawn",
			coords: [[124.438,37.000], [119.688,41.500], [114.938,40.688], [112.125,36.500], [116.375,30.313],
			        [121.750,31.750]]
		}]
	}, {
		coords:      [38.750,125.750],  // {4h-21h: 3x, 21h-4h: 4x} Drowner (L10) (in pr_poe_018 area)
		name:        "drowner", // only if player has crossbow
		level:       "#10",
		underwater:  true,
		areas: [{
			name: "monster.spawn",
			coords: [[40.188,109.812], [41.375,120.875], [44.125,126.062], [38.813,132.500], [31.500,129.875],
			        [36.875,117.375], [34.063,113.000], [36.875,107.750]]
		}]
	}, {
		coords:      [96.875,49.750],   // {4h-21h: 3x, 21h-4h: 4x} Drowner (L10) (in pr_poe_023 area)
		name:        "drowner", // only if player has crossbow
		level:       "#10",
		underwater:  true,
		areas: [{
			name: "monster.spawn",
			coords: [[101.313,47.438], [103.063,49.063], [99.188,50.563], [97.875,51.813], [92.188,50.375],
			        [90.938,49.625], [91.625,48.313], [93.813,47.875], [94.938,48.438], [97.563,48.438],
			        [98.063,47.813], [99.813,47.938]]
		}]
	}, {
		coords:      [37.125,59.250],   // 1x Bear (L6) (in pr_poe_monsters area)
		name:        "bear",
		level:       "#6",
		areas: [{
			name: "monster.spawn",
			coords: [[42.125,61.438], [39.563,62.688], [33.000,62.250], [27.813,63.875], [24.375,61.000],
			        [25.438,58.563], [30.438,57.625], [34.125,54.500], [37.750,54.000], [41.250,55.750]]
		}]
	}, {
		coords:      [119.188,74.063],  // 1x Bear (L6) (in pr_poe_006 area)
		name:        "bear",
		level:       "#6",
		areas: [{
			name: "monster.spawn",
			coords: [[108.375,73.563], [110.938,69.500], [125.000,67.250], [128.000,82.188], [116.125,83.375],
			        [109.063,80.625]]
		}]
	}, {
		coords:      [29.594,91.313],   // 1x Bear (L6) (in place_of_power_major area)
		name:        "bear",
		level:       "#6",
		once:        true,
		areas: [{
			name: "monster.spawn",
			coords: [[31.750,90.938], [29.500,92.656], [27.750,90.375], [30.438,88.625]]
		}]
	}, {
		coords:      [83.938,90.438],   // 5x-7x Wild Dog (L1) (in pr_poe_monsters area)
		name:        "wilddog",
		level:       "#1",
		areas: [{
			name: "monster.spawn",
			coords: [[81.125,85.813], [84.875,84.750], [87.875,82.313], [92.250,84.313], [92.813,88.375],
			        [89.063,98.875], [84.813,100.500], [81.188,97.438], [78.500,92.688]]
		}]
	}, {
		coords:      [94.156,137.531],  // {4h-21h: 11x, 21h-4h: 16x} Wild Dog (L1) (in pr_poe_002 area)
		name:        "wilddog",
		level:       "#1",
		cleared:     "battlefieldNest",
		after:       "mainquest.lilac",
		areas: [{
			name: "monster.spawn",
			coords: [[99.188,132.500], [99.938,139.438], [96.563,143.625], [91.063,144.000], [88.250,142.438],
			        [90.938,139.000], [92.063,133.563], [94.188,132.625]]
		}]
	}, {
		coords:      [54.063,16.500],   // 6x-8x Nekker (L6) (in pr_poe_monsters area)
		name:        "nekker",
		level:       "#6",
		areas: [{
			name: "monster.spawn",
			coords: [[56.938,7.188], [60.125,20.125], [57.250,24.688], [51.750,22.813], [45.625,11.688]]
		}]
	}, {
		coords:      [111.250,100.563],  // 4x Wolf (L5)
		name:        "wolf",
		level:       "#5",
		once:        true,
		uncleared:   "tentBandits",
		areas: [{
			name: "monster.spawn",
			coords: [[117.125,99.063], [112.563,107.188], [104.875,102.500], [110.438,94.750]]
		}]
	}],
	// ----------------- Monster Nests ------------------
	monsternest: [{
		coords:      [[117.750,60.000], // {5h-21h: 3x, 21h-5h: 5x} Ghoul (L2)
		             [67.938,134.906]], // 5x Ghoul (L2)
		name:        "ghoul",
		level:       "#2"
	}, {
		coords:      [92.062,127.781],  // 5x Ghoul (L2)
		name:        "ghoul",
		level:       "#2",
		id:          "battlefieldNest"
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
		coords:      [85.539,35.086],
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
		id:          "bram",
		extraLabel:  "w:shopkeeper.bram.label",
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
		name:        "scav_viper"
	}, {
		coords:      [103.195,60.086],
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
