{ let getMapData = function() { return {
	// ----------------- Abandoned Sites ----------------
	abandoned: [{
		coords:      [[82.797,87.984],
		             [106.219,31.016],
		             [86.703,27.938],
		             [75.875,26.844],
		             [177.969,211.656],
		             [185.750,209.531],
		             [238.156,201.687],
		             [250.250,143.500],
		             [241.125,155.875],
		             [239.750,69.937],
		             [115.828,133.875],
		             [138.031,160.625],
		             [122.281,179.266],
		             [29.984,48.000],
		             [33.969,99.250],
		             [99.938,130.172]]
	}],
	// ----------------- Alchemy Supplies ---------------
	alchemy: [{
		coords:      [[218.984,116.516],
		             [226.328,92.500]]
	}, {
		coords:      [114.813,49.547],
		extraLabel:  "v:alchemy.pellar.label"
	}],
	// ----------------- Armorers -----------------------
	armorer: [{
		coords:      [[208.672,100.828],
		             [158.047,166.344],
		             [104.734,77.531]],
		extraLabel:  "craftlevel.journeyman"
	}, {
		coords:      [129.688,118.719],
		extraLabel:  "craftlevel.amateur",
		rescueFrom:  "mulbrydale_armorer_pid"
	}, {
		coords:      [[82.266,40.422],
		             [178.781,175.984]],
		extraLabel:  "craftlevel.amateur"
	}, {
		coords:      [104.906,77.063],
		extraLabel:  ["craftlevel.master", "v:armorer.yoana.label"],
		after:       "sidequest.masterarmor"
	}],
	// ----------------- Armorer's Tables ---------------
	armorerstable: [{
		coords:      [[210.750,99.016],
		             [160.922,164.297],
		             [129.844,119.094],
		             [106.609,51.953],
		             [105.375,76.094],
		             [68.094,74.203],
		             [82.313,40.984],
		             [75.859,25.828],
		             [101.047,166.734],
		             [102.688,109.234],
		             [164.796,185.468]]
	}],
	// ----------------- Bandit Camps -------------------
	banditcamp: [{
		coords:      [[136.625,89.219],
		             [110.625,60.016],
		             [94.344,37.016],
		             [88.375,34.984],
		             [85.125,33.172],
		             [96.938,31.047],
		             [72.953,24.188],
		             [77.656,17.750],
		             [67.531,23.656],
		             [66.703,26.719],
		             [106.188,115.703],
		             [177.750,195.750],
		             [204.500,197.968],
		             [214.656,223.281],
		             [225.812,218.781],
		             [257.468,208.500],
		             [260.625,178.468],
		             [260.937,165.437],
		             [252.875,113.687],
		             [57.922,26.797]]
	}, {
		coords:      [[175.547,83.125],
		             [128.469,151.563],
		             [134.406,129.094],
		             [80.125,166.000],
		             [108.234,145.344],
		             [137.688,187.797],
		             [47.000,123.172]],
		extraLabel:  "#< (lvl 9)"
	}, {
		coords:      [[38.828,153.984]],
		extraLabel:  "#< (lvl 10)"
	}, {
		coords:      [[209.156,162.734]],
		extraLabel:  "#< (lvl 7)"
	}, {
		coords:      [[97.828,124.594]],
		extraLabel:  "#< (lvl 7-9)"
	}],
	// ----------------- Barbers ------------------------
	barber: [{
		coords:      [[215.016,104.297],
		             [214.484,113.281],
		             [153.734,164.906]]
	}, {
		coords:      [81.891,69.703],
		extraDesc:   "v:barber.free",
		rescueFrom:  "claywich_barber_pid"
	}],
	// ----------------- Blacksmiths --------------------
	blacksmith: [{
		coords:      [197.094,98.766],
		extraLabel:  ["craftlevel.master", "v:blacksmith.hattori.label"],
		after:       "sidequest.dumplings"
	}, {
		coords:      [[205.875,100.891],
		             [152.125,170.453]],
		extraLabel:  "craftlevel.journeyman"
	}, {
		coords:      [[211.188,97.266],
		             [106.328,52.313],
		             [67.844,74.031],
		             [103.156,108.813]],
		extraLabel:  "craftlevel.amateur"
	}, {
		coords:      [30.437,123.562],
		extraLabel:  "craftlevel.amateur",
		after:       "mainquest.bald"
	}, {
		coords:      [239.500,214.687],
		label:       "v:blacksmith.rune.label",
		desc:        "v:blacksmith.rune.desc",
		after:       "sidequest.en_s"
	}],
	// ----------------- Boats --------------------------
	boat: [{
		coords:      [[49.656,26.250],
		             [52.656,75.828],
		             [38.781,99.031],
		             [59.062,124.968],
		             [57.437,103.312],
		             [66.437,81.562],
		             [68.062,39.187],
		             [84.250,103.125],
		             [108.937,104.875],
		             [63.000,201.750],
		             [77.250,190.062],
		             [114.094,133.031],
		             [123.625,173.875],
		             [127.312,176.500],
		             [157.187,83.250],
		             [166.250,86.531],
		             [151.843,85.218],
		             [155.062,108.031],
		             [176.625,125.016],
		             [170.656,135.656],
		             [157.562,156.093],
		             [165.250,163.343],
		             [149.718,162.781],
		             [145.406,167.000],
		             [137.843,167.500],
		             [139.531,176.562],
		             [150.000,172.093],
		             [154.031,171.187],
		             [155.250,176.093],
		             [239.687,202.562],
		             [240.281,210.656],
		             [171.437,76.312],
		             [193.562,77.000],
		             [199.250,87.125],
		             [198.687,91.375],
		             [199.437,95.125],
		             [207.562,88.750],
		             [206.687,90.250],
		             [215.750,91.625],
		             [216.250,94.125],
		             [220.000,95.875],
		             [198.375,118.062],
		             [204.937,120.062],
		             [208.187,118.750],
		             [233.937,104.000],
		             [239.187,89.437],
		             [48.281,53.593],
		             [65.563,69.594]]
	}, {
		coords:      [83.171,49.453],
		after:       "mainquest.wandering"
	}],
	// ----------------- Brothels -----------------------
	brothel: [{
		coords:      [201.547,98.188],
		name:        "v:crippledKate",
		after:       "sidequest.arse"
	}, {
		coords:      [221.109,104.109],
		name:        "v:passiflora"
	}],
	// ----------------- Contracts ----------------------
	contract: [{
		coords:      [209.062,104.390],
		name:        "elusive"
	}, {
		coords:      [205.625,97.281],
		name:        "deadly",
		before:      "mainquest.mists"
	}, {
		coords:      [208.828,103.593],
		name:        "doors"
	}, {
		coords:      [82.062,42.531],
		name:        "jenny"
	}, {
		coords:      [185.515,116.218],
		name:        "lord"
	}, {
		coords:      [128.953,95.468],
		name:        "brother"
	}, {
		coords:      [100.625,109.906],
		name:        "tracks"
	}, {
		coords:      [33.656,206.687],
		name:        "patrol",
		after:       "sidequest.blood"
	}, {
		coords:      [86.281,177.343],
		name:        "phantom"
	}, {
		coords:      [104.562,79.781],
		name:        "shrieker"
	}, {
		coords:      [[77.250,148.218],
		             [62.297,131.980]],
		name:        "swamp",
		after:       "mainquest.wandering"
	}, {
		coords:      [[237.156,130.546],
		             [216.359,137.453]],
		name:        "apirian"
	}, {
		coords:      [104.531,80.312],
		name:        "honorton"
	}, {
		coords:      [158.171,165.328],
		name:        "creature"
	}, {
		coords:      [104.468,80.750],
		name:        "griffin",
		after:       "sidequest.masterarmor"
	}, {
		coords:      [100.625,110.312],
		name:        "merry"
	}, {
		coords:      [69.218,75.843],
		name:        "mystery"
	}, {
		coords:      [158.156,165.593],
		name:        "drunk"
	}, {
		coords:      [188.562,101.156],
		name:        "white"
	}, {
		coords:      [153.765,113.046],
		name:        "wood"
	}],
	// ----------------- Entrances ----------------------
	entrance: [{
		coords:      [[130.313,41.109],
		             [108.234,82.484],
		             [79.094,185.234]]
	}, {
		coords:      [229.984,88.844],
		groupId:     "temple_isle_cave"
	}, {
		coords:      [217.875,159.609],
		groupId:     "windmill_cave"
	}, {
		coords:      [237.406,151.125],
		during:      "mainquest.poet"
	}, {
		coords:      [197.969,201.469],
		notInGame:   true,
		after:       "treasurehunt.shores"
	}, {
		coords:      [206.000,144.031],
		after:       "contract.apirian"
	}, {
		coords:      [159.250,165.641],
		notInGame:   true,
		during:      "mainquest.evil",
		groupId:     "frog_lair"
	}, {
		coords:      [214.656,192.859],
		notInGame:   true,
		after:       "mainquest.deadman",
		groupId:     "everec_crypt"
	}, {
		coords:      [179.438,175.406],
		groupId:     "temerian_hideout"
	}, {
		coords:      [183.219,191.281],
		groupId:     "est_tayiar"
	}, {
		coords:      [156.031,209.125],
		after:       "sidequest.darkness",
		groupId:     "cheese_dungeon"
	}, {
		coords:      [173.750,77.156],
		groupId:     "widows_grotto"
	}, {
		coords:      [148.141,107.047],
		groupId:     "mikel_cave"
	}, {
		coords:      [106.703,72.578],
		groupId:     "crows_perch_well"
	}, {
		coords:      [152.172,48.781],
		groupId:     "lornruk"
	}, {
		coords:      [44.531,39.563],
		groupId:     "wandering_cave"
	}, {
		coords:      [41.688,46.266],
		after:       "contract.mystery"
	}, {
		coords:      [53.891,126.719]
		// TODO: Does this cave connect to swamp_cave below?
	}, {
		coords:      [56.984,155.984],
		groupId:     "hillock_lair"
	}, {
		coords:      [[88.688,107.078],
		             [86.094,107.875]],
		groupId:     "chort_shit_cave"
	}, {
		coords:      [111.266,179.234],
		groupId:     "grotto"
	}, {
		coords:      [93.344,155.813],
		groupId:     "fools_cave"
	}, {
		coords:      [[101.266,177.547],
		             [98.906,177.766]],
		groupId:     "phantom_cave"
	}, {
		coords:      [33.453,128.790],
		after:       "mainquest.bald"
	}, {
		coords:      [83.766,149.953],
		groupId:     "reardon_cellar"
	}, {
		coords:      [43.094,163.641],
		groupId:     "patrol_cave"
	}, {
		coords:      [115.812,45.906],
		groupId:     "pellar_cave"
	}, {
		coords:      [151.156,164.593],
		after:       "mainquest.escape",
		groupId:     "escape_well"
	}, {
		coords:      [251.812,134.875],
		groupId:     "spider_cave"
	}, {
		coords:      [226.875,151.562],
		after:       "contract.doors"
	}, {
		coords:      [[99.750,120.625],
		             [96.438,119.781]],
		groupId:     "wolfking_cave"
	}, {
		coords:      [77.875,140.250],
		notInGame:   true,
		groupId:     "dragonslayers_grotto"
	}, {
		coords:      [[53.156,131.560],
		             [53.875,129.030]],
		groupId:     "swamp_cave"
	}, {
		coords:      [72.859,59.297],
		notInGame:   true,
		groupId:     "allgod_basement"
	}, {
		coords:      [49.000,53.094],
		notInGame:   true,
		after:       "mainquest.wandering",
		groupId:     "wandering_cave"
	}, {
		coords:      [107.906,71.219],
		notInGame:   true,
		groupId:     "crows_perch_well"
	}, {
		coords:      [151.359,170.094],
		notInGame:   true,
		groupId:     "oxenfurt_blacksmith"
	}, {
		coords:      [57.313,158.188],
		notInGame:   true,
		groupId:     "hillock_lair"
	}, {
		coords:      [204.500,105.656],
		notInGame:   true,
		groupId:     "dreamer_basement"
	}, {
		coords:      [[94.266,184.891],
		             [96.203,184.750]],
		notInGame:   true,
		groupId:     "phantom_cave"
	}, {
		coords:      [37.547,123.734],
		notInGame:   true,
		groupId:     "coin_fetch_cave"
	}, {
		coords:      [[35.406,123.063],
		             [34.547,124.094],
		             [37.906,123.781]],
		notInGame:   true
	}, {
		coords:      [219.063,101.688],
		label:       "v:entrance.sewers4.label",
		desc:        "v:entrance.sewers4.desc",
		notInGame:   true
	}, {
		coords:      [213.422,102.359],
		desc:        "v:entrance.sewers4.desc",
		notInGame:   true,
		after:       "mainquest.flowers",
		groupId:     "bathhouse"
	}, {
		coords:      [135.344,127.547],
		during:      "sidequest.eternal",
		groupId:     "devils_pit"
	}, {
		coords:      [257.500,189.876],
		notInGame:   true,
		after:       "sidequest.rose"
	}, {
		coords:      [[211.656,110.422],
		             [205.125,112.234]],
		label:       "v:entrance.sewers1.label",
		desc:        "v:entrance.sewers1.desc",
		groupId:     "sewers1"
	}, {
		coords:      [[214.297,108.094],
		             [217.359,105.906],
		             [219.875,108.391]],
		label:       "v:entrance.sewers2.label",
		desc:        "v:entrance.sewers2.desc",
		groupId:     "sewers2"
	}, {
		coords:      [206.750,93.438],
		label:       "v:entrance.sewers3.label",
		desc:        "v:entrance.sewers3.desc",
		groupId:     "sewers3"
	}, {
		coords:      [194.828,103.578],
		label:       "v:entrance.pass.label",
		desc:        "v:entrance.pass.desc"
	}, {
		coords:      [199.031,103.266],
		label:       "v:entrance.pass.label",
		desc:        "v:entrance.pass.desc"
	}, {
		coords:      [210.281,104.297],
		label:       "v:entrance.sewers3.label",
		desc:        "v:entrance.sewers3.desc",
		after:       "sidequest.never",
		groupId:     "sewers3"
	}, {
		coords:      [201.891,102.406],
		notInGame:   true,
		after:       "mainquest.pyres",
		groupId:     "pyres_hatch"
	}, {
		coords:      [202.531,102.953],
		after:       "mainquest.pyres",
		groupId:     "pyres_hatch"
	}, {
		coords:      [213.844,106.094],
		notInGame:   true,
		after:       "sidequest.sins"
	}],
	// ----------------- Events -------------------------
	event: [{
		coords:      [143.468,101.875],
		name:        "friend"
	}, {
		coords:      [190.625,144.312],
		name:        "welcome"
	}, {
		coords:      [128.187,102.781],
		name:        "mercy1"
	}, {
		coords:      [170.953,87.453],
		name:        "mercy2"
	}, {
		coords:      [120.250,142.281],
		name:        "caravan",
		rescuable:   true,
		id:          "anselm_event"
	}, {
		coords:      [101.343,80.187],
		name:        "crow",
		after:       "mainquest.nilfgaardian"
	}, {
		coords:      [89.859,62.218],
		name:        "crossing1"
	}, {
		coords:      [111.562,110.968],
		name:        "crossing2",
		liberate:    true
	}, {
		coords:      [78.531,128.468],
		name:        "crossing3"
	}, {
		coords:      [83.140,94.953],
		name:        "crossing4"
	}, {
		coords:      [205.875,95.843],
		name:        "drunken"
	}, {
		coords:      [93.625,76.937],
		name:        "dare1"
	}, {
		coords:      [199.125,117.375],
		name:        "dare2",
		after:       "event.dare1"
	}, {
		coords:      [209.656,93.875],
		name:        "dare3",
		after:       "event.dare2"
	}, {
		coords:      [144.062,71.921],
		name:        "troll"
	}, {
		coords:      [88.000,81.812],
		name:        "robbery"
	}, {
		coords:      [204.718,115.343],
		name:        "karmic"
	}, {
		coords:      [126.656,73.437],
		name:        "looters1"
	}, {
		coords:      [145.437,136.500],
		name:        "looters2"
	}, {
		coords:      [99.843,166.562],
		name:        "looters3"
	}, {
		coords:      [210.578,109.750],
		name:        "children1"
	}, {
		coords:      [195.406,96.890],
		name:        "racist1"
	}, {
		coords:      [203.875,114.875],
		name:        "racist2"
	}, {
		coords:      [194.734,102.656],
		name:        "pyre",
		after:       "sidequest.never"
	}, {
		coords:      [237.938,149.906],
		name:        "gift",
		after:       "mainquest.poet"
	}, {
		coords:      [185.750,145.312],
		name:        "strangers"
	}, {
		coords:      [195.343,88.265],
		name:        "strumpet"
	}, {
		coords:      [200.781,108.046],
		name:        "suspicious",
		after:       "mainquest.pyres"
	}, {
		coords:      [206.406,106.468],
		name:        "flame1"
	}, {
		coords:      [207.719,111.469],
		name:        "flame2"
	}, {
		coords:      [163.687,177.656],
		name:        "basilisk"
	}, {
		coords:      [157.593,163.812],
		name:        "passage1",
		after:       "contract.drunk"
	}, {
		coords:      [157.531,169.500],
		name:        "passage2a",
		after:       "event.passage1"
	}, {
		coords:      [159.563,178.578],
		name:        "passage2b",
		after:       "event.passage1"
	}, {
		coords:      [189.500,98.640],
		name:        "raids",
		after:       "mainquest.pyres",
		before:      "sidequest.never"
	}, {
		coords:      [149.312,166.500],
		name:        "neighborhood",
		after:       "sidequest.neighborhood"
	}, {
		coords:      [87.203,164.265],
		name:        "hazardous2",
		after:       "sidequest.hazardous1"
	}, {
		coords:      [42.234,203.172],
		name:        "death2",
		after:       "sidequest.death1"
	}, {
		coords:      [204.594,210.031],
		name:        "trace2",
		after:       "sidequest.trace1"
	}, {
		coords:      [215.328,105.031],
		name:        "raids2",
		after:       "mainquest.pyres",
		before:      "sidequest.never"
	}, {
		coords:      [68.844,75.234],
		name:        "millie",
		after:       "sidequest.cat"
	}, {
		coords:      [209.656,88.375],
		name:        "vivienne",
		after:       "mainquest.humble"
	}, {
		coords:      [101.625,74.625],
		name:        "daughter1",
		after:       "sidequest.crookback"
	}, {
		coords:      [102.094,78.188],
		name:        "daughter2",
		after:       "sidequest.crookback"
	}, {
		coords:      [104.719,76.563],
		name:        "stable",
		after:       "mainquest.family"
	}, {
		coords:      [225.425,151.080],
		name:        "doors2",
		after:       "contract.doors"
	}],
	// ----------------- Grindstones --------------------
	grindstone: [{
		coords:      [[210.641,99.266],
		             [168.094,91.391],
		             [160.734,164.500],
		             [129.922,118.313],
		             [153.016,46.609],
		             [106.594,52.625],
		             [105.156,76.313],
		             [68.094,74.503],
		             [82.328,40.094],
		             [75.875,25.531],
		             [100.703,167.141],
		             [102.531,108.906],
		             [23.984,150.546],
		             [164.296,185.546],
		             [189.812,97.062],
		             [197.141,99.516],
		             [181.531,135.469]]
	}],
	// ----------------- Guarded Treasure ---------------
	guarded: [{
		coords:      [[107.281,42.953],
		             [98.313,40.141],
		             [98.578,21.844],
		             [49.641,150.531],
		             [84.875,123.281],
		             [181.156,220.687],
		             [246.250,182.812],
		             [258.843,129.187],
		             [248.437,162.687],
		             [215.016,126.328],
		             [229.563,124.656],
		             [239.594,104.219],
		             [164.563,198.594],
		             [171.500,119.516],
		             [184.609,58.609],
		             [121.781,136.625],
		             [122.484,167.156],
		             [144.641,87.578],
		             [70.859,44.063],
		             [93.516,99.344],
		             [91.563,19.516],
		             [147.047,57.047],
		             [37.094,55.438],
		             [23.172,78.391],
		             [18.750,78.531],
		             [34.438,93.125],
		             [56.953,200.891],
		             [43.328,149.781],
		             [28.078,148.406],
		             [24.063,150.188],
		             [69.406,162.688]]
	}, {
		coords:      [132.000,69.516],
		after:       "contract.griffin"
	}],
	// ----------------- Gwent Players ------------------
	gwent: [{
		coords:      [[205.438,99.578],
		             [209.703,102.953],
		             [204.547,109.125],
		             [199.141,101.578],
		             [198.813,113.438],
		             [209.453,94.750],
		             [212.156,96.172],
		             [216.281,104.438],
		             [210.859,113.031],
		             [211.969,114.422],
		             [159.344,164.703],
		             [107.641,54.969],
		             [101.750,76.297],
		             [104.297,76.969],
		             [70.688,73.453],
		             [81.969,41.453],
		             [99.984,110.703],
		             [33.672,204.953],
		             [187.875,152.038]],
		extraLabel:  "shopkeeper.label"
	}, {
		coords:      [200.859,98.078]
	}, {
		coords:      [[201.953,102.656],
		             [170.047,179.250]],
		extraLabel:  "herbalist.label"
	}, {
		coords:      [[199.188,126.813],
		             [206.406,96.734],
		             [214.328,110.844],
		             [185.375,117.734]],
		extraLabel:  "innkeep.label"
	}, {
		coords:      [198.409,107.094],
		extraLabel:  "innkeep.label",
		after:       "sidequest.cabaret"
	}, {
		coords:      [[206.063,101.203],
		             [211.344,97.563],
		             [152.344,170.422],
		             [106.688,52.172],
		             [67.703,74.266],
		             [103.469,108.953]],
		extraLabel:  "blacksmith.label"
	}, {
		coords:      [[226.516,92.531],
		             [219.125,116.844]],
		extraLabel:  "alchemy.label"
	}, {
		coords:      [209.500,105.313],
		extraLabel:  "innkeep.label",
		after:       "sidequest.never"
	}, {
		coords:      [[158.281,166.453],
		             [178.844,176.203],
		             [104.813,77.609],
		             [82.453,40.422],
		             [105.125,77.000]],
		extraLabel:  "armorer.label"
	}, {
		coords:      [129.922,118.688],
		extraLabel:  "armorer.label",
		rescueFrom:  "mulbrydale_armorer_pid"
	}, {
		coords:      [84.000,70.125],
		extraLabel:  "shopkeeper.label",
		rescueFrom:  "claywich_shopkeeper_pid"
	}, {
		coords:      [78.219,147.219],
		before:      "mainquest.family",
		weakBefore:  "sidequest.hillock"
	}, {
		coords:      [134.016,131.469],
		after:       "sidequest.eternal"
	}, {
		coords:      [153.563,163.469],
		extraLabel:  "v:gwent.shani.label"
	}, {
		coords:      [155.875,164.781],
		extraLabel:  "v:gwent.olgierd.label",
		after:       "mainquest.evil",
		before:      "mainquest.marriage"
	}],
	// ----------------- Gwent Quests -------------------
	gwentquest: [{
		coords:      [207.516,101.172],
		name:        "vivaldi",
		quest:       "sidequest.gw_city",
		after:       "sidequest.gw_collect"
	}, {
		coords:      [214.406,103.469],
		name:        "dijkstra",
		extraDesc:   "gwentquest.afterPlayer",
		underground: true,
		entrances:   "bathhouse",
		quest:       "sidequest.gw_city",
		afterQuest:  "sidequest.gw_city",
		afterPlayer: "serenity",
		after:       "mainquest.flowers",
		weakBefore:  "sidequest.reason"
	}, {
		coords:      [220.750,103.906],
		name:        "serenity",
		extraDesc:   "gwentquest.afterPlayer",
		quest:       "sidequest.gw_city",
		afterQuest:  "sidequest.gw_city",
		afterPlayer: "vivaldi",
		after:       "sidequest.gw_collect"
	}, {
		coords:      [186.563,83.313],
		name:        "merchant",
		extraDesc:   "gwentquest.afterPlayer",
		quest:       "sidequest.gw_city",
		afterQuest:  "sidequest.gw_city",
		afterPlayer: "dijkstra",
		after:       "sidequest.gw_collect"
	}, {
		coords:      [199.391,106.578],
		name:        "zoltan",
		quest:       "sidequest.gw_pals",
		after:       "mainquest.novigrad"
	}, {
		coords:      [180.141,176.484],
		name:        "roche",
		extraDesc:   "gwentquest.afterPlayer",
		underground: true,
		entrances:   "temerian_hideout",
		quest:       "sidequest.gw_pals",
		afterQuest:  "sidequest.gw_pals",
		afterPlayer: "zoltan"
	}, {
		coords:      [198.656,125.938],
		name:        "thaler",
		desc:        "gwentquest.thaler.desc",
		extraDesc:   "gwentquest.afterPlayer",
		quest:       "sidequest.gw_pals",
		afterQuest:  "sidequest.gw_pals",
		afterPlayer: "roche",
		after:       "sidequest.deadly",
		weakBefore:  "sidequest.reason"
	}, {
		coords:      [128.031,95.813],
		name:        "innkeep",
		extraDesc:   "gwentquest.afterPlayer",
		quest:       "sidequest.gw_inn",
		afterQuest:  "sidequest.gw_inn",
		afterPlayer: "stjepan"
	}, {
		coords:      [156.047,165.500],
		name:        "stjepan",
		quest:       "sidequest.gw_inn"
	}, {
		coords:      [209.516,105.125],
		name:        "olivier",
		extraDesc:   "gwentquest.afterPlayer",
		quest:       "sidequest.gw_inn",
		afterQuest:  "sidequest.gw_inn",
		afterPlayer: "stjepan",
		before:      "sidequest.never"
	}, {
		coords:      [106.859,73.734],
		name:        "baron",
		quest:       "sidequest.gw_velen",
		after:       "mainquest.baron",
		before:      "sidequest.crookback"
	}, {
		coords:      [69.000,72.734],
		name:        "boatwright",
		quest:       "sidequest.gw_velen"
	}, {
		coords:      [80.016,40.500],
		name:        "haddy",
		quest:       "sidequest.gw_velen"
	}, {
		coords:      [84.563,175.656],
		name:        "sage",
		quest:       "sidequest.gw_velen"
	}, {
		coords:      [213.094,106.906],
		name:        "lambert",
		extraDesc:   "gwentquest.afterPlayer",
		quest:       "sidequest.gw_pals",
		afterQuest:  "sidequest.gw_pals",
		afterPlayer: "thaler",
		after:       "sidequest.thread"
	}],
	// ----------------- Harbors ------------------------
	harbor: [{
		coords:      [[199.828,86.109],
		             [157.563,161.406],
		             [123.422,172.734],
		             [114.156,134.563],
		             [114.813,104.563],
		             [82.125,89.125],
		             [95.344,26.344],
		             [107.375,41.438],
		             [53.266,75.359],
		             [28.094,46.609],
		             [33.641,119.953]]
	}],
	// ----------------- Herbalists ---------------------
	herbalist: [{
		coords:      [[207.172,103.047],
		             [201.656,102.625],
		             [184.547,118.500],
		             [169.859,179.094]]
	}, {
		coords:      [[178.593,216.218],
		             [251.016,141.938],
		             [86.609,29.156],
		             [107.125,31.641],
		             [34.578,98.656],
		             [99.828,129.547],
		             [68.109,23.281]],
		liberate:    true
	}, {
		coords:      [199.563,187.438],
		liberate:    true,
		rescueFrom:  "herbalist_pid"
	}],
	// ----------------- Hidden Treasure ----------------
	hidden: [{
		coords:      [153.063,45.953]
	}, {
		coords:      [54.469,51.313],
		underground: true,
		entrances:   "wandering_cave",
		after:       "mainquest.wandering"
	}, {
		coords:      [[86.016,17.078],
		             [50.922,182.641],
		             [99.469,197.203]],
		guarded:     true
	}],
	// ----------------- Hollow Trees -------------------
	hollow: [{
		coords:      [[136.438,122.984],
		             [132.750,90.313],
		             [132.063,88.719],
		             [124.656,88.344],
		             [138.625,125.813],
		             [131.625,121.313],
		             [159.406,126.219],
		             [129.516,49.000],
		             [112.922,155.750],
		             [111.375,155.828],
		             [66.625,23.906],
		             [52.219,19.094],
		             [55.094,20.875],
		             [62.875,184.430],
		             [163.750,198.406],
		             [214.922,125.469],
		             [137.719,125.188],
		             [139.063,127.219],
		             [140.719,127.125],
		             [141.594,127.375],
		             [140.406,125.094],
		             [143.219,125.813],
		             [142.219,124.406],
		             [30.344,53.031],
		             [80.906,19.781],
		             [85.094,45.063],
		             [79.000,164.000],
		             [110.047,147.156],
		             [156.781,134.594],
		             [154.766,131.016],
		             [172.813,87.516],
		             [171.266,92.578],
		             [167.578,101.438],
		             [106.016,38.016],
		             [103.734,41.656],
		             [62.063,27.563],
		             [91.828,99.609],
		             [127.875,118.500],
		             [112.719,111.500],
		             [131.609,131.281],
		             [155.406,138.156],
		             [136.469,148.438],
		             [137.719,143.938],
		             [132.656,124.125],
		             [130.594,130.500],
		             [106.625,108.859],
		             [104.938,126.500],
		             [105.656,131.250],
		             [109.828,145.516],
		             [105.438,101.563],
		             [80.719,167.656],
		             [67.469,182.250],
		             [49.938,182.625],
		             [52.938,181.188],
		             [23.938,149.125],
		             [170.938,95.406],
		             [135.875,176.719],
		             [164.500,200.063],
		             [163.594,199.500],
		             [163.125,199.406],
		             [162.688,199.250],
		             [132.313,192.875],
		             [142.781,187.688],
		             [216.375,126.578],
		             [180.141,192.297],
		             [59.531,144.516],
		             [60.688,143.188],
		             [63.453,143.938],
		             [74.172,27.859],
		             [107.938,45.563],
		             [85.016,132.922],
		             [86.703,129.047],
		             [47.875,43.875],
		             [112.766,57.828],
		             [111.813,137.250],
		             [58.781,193.563],
		             [39.203,195.266],
		             [99.047,42.938],
		             [80.063,15.797],
		             [78.750,19.000],
		             [70.500,22.281],
		             [67.266,20.219],
		             [64.828,21.063],
		             [63.031,24.625],
		             [140.344,120.625],
		             [107.281,123.234],
		             [107.500,119.313]]
	}, {
		coords:      [53.219,69.875],
		during:      "sidequest.forefathers"
	}],
	// ----------------- Honeycombs ---------------------
	honeycomb: [{
		coords:      [[34.438,93.688],
		             [203.750,197.891],
		             [205.344,197.359],
		             [206.563,197.703],
		             [206.844,196.859],
		             [207.531,198.000],
		             [207.859,197.125],
		             [213.000,141.156],
		             [215.266,140.344],
		             [251.719,142.266],
		             [29.125,97.844],
		             [29.750,97.969],
		             [75.531,55.906],
		             [75.500,54.906],
		             [65.547,91.063],
		             [66.172,91.266],
		             [56.063,20.344],
		             [50.234,27.016],
		             [50.969,35.469],
		             [85.906,29.250],
		             [87.188,28.813],
		             [85.875,27.375],
		             [117.516,46.469],
		             [50.359,72.531],
		             [49.359,73.938],
		             [96.359,127.563],
		             [96.109,126.578],
		             [95.484,124.828],
		             [106.328,115.328],
		             [107.844,145.250],
		             [106.891,148.328],
		             [106.938,149.281],
		             [106.016,150.250],
		             [137.688,161.094],
		             [161.953,179.766],
		             [180.578,121.156],
		             [181.391,122.203],
		             [155.078,99.703],
		             [153.703,96.063],
		             [154.922,96.563],
		             [155.078,96.438],
		             [169.188,96.641],
		             [169.797,95.063],
		             [182.625,90.719],
		             [186.250,96.859],
		             [185.406,98.922],
		             [185.578,100.344],
		             [133.125,162.109],
		             [153.469,135.078],
		             [79.719,167.656],
		             [184.781,113.438],
		             [188.750,103.031],
		             [205.703,197.328],
		             [69.344,145.984]]
	}],
	// ----------------- Innkeeps -----------------------
	innkeep: [{
		coords:      [206.000,96.547],
		extraLabel:  "v:innkeep.theGoldenSturgen.label",
		sells:       ["gwent", "food", "drinks"]
	}, {
		coords:      [220.609,104.172],
		extraLabel:  "v:innkeep.passiflora.label",
		sells:       ["gwent", "food", "drinks"]
	}, {
		coords:      [214.000,110.672],
		extraLabel:  "v:innkeep.theNowhere.label",
		sells:       ["food", "drinks"]
	}, {
		coords:      [198.859,106.875],
		extraLabel:  "v:innkeep.rosemaryAndThyme.label",
		sells:       ["food", "drinks"],
		after:       "sidequest.cabaret"
	}, {
		coords:      [198.875,126.656],
		extraLabel:  "v:innkeep.sevenCatsInn.label",
		sells:       ["gwent", "food", "drinks"]
	}, {
		coords:      [209.328,104.719],
		extraLabel:  "v:innkeep.theKingfisher.label",
		sells:       ["gwent", "food", "drinks"]
	}, {
		coords:      [185.125,118.047],
		extraLabel:  "v:innkeep.cunnyOfTheGoose.label",
		sells:       ["gwent", "food", "drinks"]
	}, {
		coords:      [156.063,165.172],
		extraLabel:  "v:innkeep.theAlchemy.label",
		sells:       ["gwent", "food", "drinks"]
	}, {
		coords:      [128.141,95.516],
		extraLabel:  "v:innkeep.innAtTheCrossroads.label",
		sells:       ["gwent", "drinks"]
	}],
	// ----------------- Monster Dens -------------------
	monsterden: [{
		coords:      [142.984,118.125],
		groupId:     "shoe_trolls_cave"
	}, {
		coords:      [81.656,136.359],
		groupId:     "dragonslayers_grotto"
	}, {
		coords:      [237.641,105.016],
		groupId:     "cavern"
	}, {
		coords:      [165.891,99.375]
	}],
	// ----------------- Monster Nests ------------------
	monsternest: [{
		coords:      [[153.734,135.203],
		             [160.500,127.328],
		             [110.656,88.094],
		             [100.078,66.047],
		             [82.969,86.828],
		             [60.047,126.375],
		             [204.843,186.437],
		             [238.812,199.906],
		             [235.656,201.531],
		             [240.562,171.500],
		             [255.125,119.750],
		             [218.687,183.875],
		             [154.141,85.000],
		             [169.094,95.281],
		             [170.313,98.000],
		             [170.266,112.969],
		             [133.422,162.531],
		             [133.750,161.688],
		             [125.938,147.391],
		             [160.750,137.891],
		             [43.578,108.563],
		             [86.891,168.969],
		             [91.297,165.547],
		             [88.094,161.422],
		             [87.891,158.172],
		             [96.875,185.094],
		             [95.656,185.125]]
	}, {
		coords:      [[44.984,40.906],
		             [45.359,41.141]],
		underground: true,
		after:       "mainquest.wandering",
		entrances:   "wandering_cave"
	}],
	// ----------------- Notice Boards ------------------
	notice: [{
		coords:      [[209.078,103.609],
		             [205.641,97.031],
		             [215.844,105.000],
		             [188.594,100.641],
		             [237.172,130.297],
		             [198.047,126.578],
		             [205.750,157.922],
		             [185.500,116.000],
		             [158.156,165.109],
		             [131.547,119.453],
		             [128.953,95.047],
		             [153.344,112.781],
		             [82.078,42.078],
		             [104.547,78.828],
		             [69.234,75.438],
		             [77.266,147.797],
		             [100.641,109.469],
		             [33.688,206.219]]
	}],
	// ----------------- Persons in Distress ------------
	pid: [{
		coords:      [147.578,119.578],
		id:          "border_shopkeeper_pid"
	}, {
		coords:      [102.500,33.828],
		id:          "claywich_barber_pid"
	}, {
		coords:      [198.687,186.906],
		id:          "herbalist_pid"
	}, {
		coords:      [142.984,199.375],
		id:          "crossroads_shopkeeper_pid"
	}, {
		coords:      [115.391,107.094],
		id:          "mulbrydale_armorer_pid"
	}, {
		coords:      [72.656,103.797],
		id:          "claywich_shopkeeper_pid"
	}],
	// ----------------- Places of Power ----------------
	pop: [{
		coords:      [[230.391,98.688],
		             [55.922,154.672]],
		extraLabel:  "pop.igni.label"
	}, {
		coords:      [200.813,162.688],
		extraLabel:  "pop.axii.label"
	}, {
		coords:      [152.688,47.781],
		extraLabel:  "pop.quen.label"
	}, {
		coords:      [15.063,76.140],
		extraLabel:  "pop.aard.label"
	}, {
		coords:      [53.313,52.578],
		extraLabel:  "pop.yrden.label",
		underground: true,
		after:       "mainquest.wandering",
		entrances:   "wandering_cave"
	}, {
		coords:      [35.688,133.594],
		extraLabel:  "pop.quen.label",
		after:       "mainquest.bald"
	}, {
		coords:      [80.219,141.359],
		extraLabel:  "pop.yrden.label"
	}],
	// ----------------- Points of Interest -------------
	poi: [{
		coords:      [[47.125,78.172],
		             [49.391,78.813],
		             [53.469,80.234]],
		label:       "v:poi.spirits.label",
		extraDesc:   "v:poi.spirits.desc",
		lamp:        true,
		during:      "sidequest.towerful"
	}, {
		coords:      [122.656,148.281],
		label:       "poi.lootableBattlefield.label",
		extraDesc:   "poi.lootableBattlefield.desc"
	}, {
		coords:      [142.781,118.375],
		label:       "v:poi.lantern.label",
		extraDesc:   "v:poi.lantern.desc",
		lantern:     true
	}, {
		coords:      [45.203,195.156],
		label:       "v:poi.nilfgaardian.label"
	}, {
		coords:      [156.328,209.422],
		label:       "v:poi.dlever.label",
		extraDesc:   ["poi.easter.desc", "v:poi.dlever.desc"]
	}, {
		coords:      [28.125,148.188],
		label:       "v:poi.elever.label",
		extraDesc:   ["poi.easter.desc", "v:poi.elever.desc"]
	}, {
		coords:      [33.734,146.313],
		label:       "v:poi.elever.label",
		extraDesc:   ["poi.easter.desc", "v:poi.elever.desc"]
	}, {
		coords:      [28.641,155.734],
		label:       "v:poi.elever.label",
		extraDesc:   ["poi.easter.desc", "v:poi.elever.desc"]
	}, {
		coords:      [32.344,150.922],
		label:       "v:poi.elementa.label",
		extraDesc:   ["poi.easter.desc", "v:poi.elementa.desc"],
		special:     true
	}, {
		coords:      [35.688,152.266],
		label:       "v:poi.portal.label",
		extraDesc:   ["poi.easter.desc", "v:poi.portal.desc"],
		special:     true
	}, {
		coords:      [159.406,207.656],
		label:       "v:poi.contract.label",
		extraDesc:   ["v:poi.questitem", "v:poi.contract.desc"],
		quest:       "contract.creature",
		during:      "contract.creature"
	}, {
		coords:      [245.844,195.234],
		label:       "v:poi.hat.label",
		extraDesc:   "v:poi.questitem",
		quest:       "mainquest.deadman",
		during:      "mainquest.deadman"
	}, {
		coords:      [221.094,193.250],
		label:       "v:poi.sketchbook.label",
		extraDesc:   "v:poi.questitem",
		quest:       "mainquest.marriage",
		during:      "mainquest.marriage"
	}, {
		coords:      [86.766,150.891],
		label:       "v:poi.diary.label",
		extraDesc:   "v:poi.questitem",
		quest:       "sidequest.reardon",
		during:      "sidequest.reardon"
	}, {
		coords:      [84.453,150.578],
		label:       "v:poi.paper.label",
		extraDesc:   "v:poi.questitem",
		underground: true,
		entrances:   "reardon_cellar",
		quest:       "sidequest.reardon",
		during:      "sidequest.reardon"
	}, {
		coords:      [220.344,194.625],
		label:       "v:poi.portrait.label",
		extraDesc:   "v:poi.questitem",
		quest:       "mainquest.marriage",
		during:      "mainquest.marriage"
	}, {
		coords:      [215.938,194.344],
		label:       "v:poi.brush.label",
		extraDesc:   "v:poi.questitem",
		quest:       "mainquest.marriage",
		during:      "mainquest.marriage"
	}, {
		coords:      [83.109,78.406],
		label:       "v:poi.doll.label",
		extraDesc:   "v:poi.questitem",
		quest:       "sidequest.cat",
		during:      "sidequest.cat"
	}, {
		coords:      [38.688,131.125],
		label:       "v:poi.acorn.label",
		extraDesc:   ["v:poi.acorn.desc", "v:poi.questitem"],
		quest:       "mainquest.bald",
		after:       "mainquest.bald"
	}, {
		coords:      [138.219,127.313],
		label:       "v:poi.reinald0.label",
		extraDesc:   ["v:poi.questitem", "v:poi.eternal"],
		underground: true,
		entrances:   "devils_pit",
		quest:       "sidequest.eternal",
		during:      "sidequest.eternal"
	}, {
		coords:      [138.984,126.234],
		label:       "v:poi.reinald1.label",
		extraDesc:   ["v:poi.questitem", "v:poi.eternal"],
		underground: true,
		entrances:   "devils_pit",
		quest:       "sidequest.eternal",
		during:      "sidequest.eternal"
	}, {
		coords:      [140.281,131.203],
		label:       "v:poi.reinald2.label",
		extraDesc:   ["v:poi.questitem", "v:poi.eternal"],
		underground: true,
		entrances:   "devils_pit",
		quest:       "sidequest.eternal",
		during:      "sidequest.eternal"
	}, {
		coords:      [144.750,128.922],
		label:       "v:poi.reinald3.label",
		extraDesc:   ["v:poi.questitem", "v:poi.eternal"],
		underground: true,
		entrances:   "devils_pit",
		quest:       "sidequest.eternal",
		during:      "sidequest.eternal"
	}, {
		coords:      [140.813,132.234],
		label:       "v:poi.reinald4.label",
		extraDesc:   ["v:poi.questitem", "v:poi.eternal"],
		underground: true,
		entrances:   "devils_pit",
		quest:       "sidequest.eternal",
		during:      "sidequest.eternal"
	}, {
		coords:      [136.703,134.344],
		label:       "v:poi.reinald5.label",
		extraDesc:   ["v:poi.questitem", "v:poi.eternal"],
		underground: true,
		entrances:   "devils_pit",
		quest:       "sidequest.eternal",
		during:      "sidequest.eternal"
	}, {
		coords:      [141.672,130.703],
		label:       "v:poi.edgar.label",
		extraDesc:   ["v:poi.questitem", "v:poi.eternal"],
		underground: true,
		entrances:   "devils_pit",
		quest:       "sidequest.eternal",
		during:      "sidequest.eternal"
	}, {
		coords:      [144.828,131.828],
		label:       "v:poi.priest.label",
		extraDesc:   ["v:poi.questitem", "v:poi.eternal"],
		underground: true,
		entrances:   "devils_pit",
		quest:       "sidequest.eternal",
		during:      "sidequest.eternal"
	}],
	// ----------------- Scavenger Hunts ----------------
	scavengerhunt: [{
		coords:      [156.031,208.844],
		upgrade:     "enhanced",
		school:      "feline",
		items:       "armor"
	}, {
		coords:      [100.671,177.343],
		upgrade:     "enhanced",
		school:      "feline",
		items:       "boots",
		underground: true,
		entrances:   "phantom_cave"
	}, {
		coords:      [184.469,62.484],
		upgrade:     "#",
		school:      "feline",
		items:       "crossbow"
	}, {
		coords:      [137.531,136.906],
		upgrade:     "basic",
		school:      "forgotten",
		items:       ["armor", "boots", "gauntlets", "trousers",
		              "silverSword", "steelSword"],
		underground: true,
		entrances:   "devils_pit",
		during:      "sidequest.eternal"
	}, {
		coords:      [144.234,134.609],
		upgrade:     "enhanced",
		school:      "feline",
		items:       "gauntlets"
	}, {
		coords:      [182.563,191.609],
		upgrade:     "basic",
		school:      "feline",
		items:       "silverSword",
		underground: true,
		entrances:   "est_tayiar"
	}, {
		coords:      [212.688,113.969],
		upgrade:     "enhanced",
		school:      "feline",
		items:       "silverSword"
	}, {
		coords:      [166.359,99.516],
		upgrade:     "superior",
		school:      "feline",
		items:       "silverSword"
	}, {
		coords:      [178.547,106.328],
		upgrade:     "basic",
		school:      "feline",
		items:       "steelSword"
	}, {
		coords:      [92.859,155.953],
		upgrade:     "enhanced",
		school:      "feline",
		items:       "steelSword",
		underground: true,
		entrances:   "fools_cave"
	}, {
		coords:      [237.984,105.422],
		upgrade:     "superior",
		school:      "feline",
		items:       "steelSword",
		underground: true,
		entrances:   "cavern"
	}, {
		coords:      [151.093,170.312],
		upgrade:     "enhanced",
		school:      "feline",
		items:       "trousers",
		underground: true,
		entrances:   "oxenfurt_blacksmith"
	}, {
		coords:      [156.047,152.828],
		upgrade:     "enhanced",
		school:      "griffin",
		items:       "armor"
	}, {
		coords:      [149.938,75.813],
		upgrade:     "enhanced",
		school:      "griffin",
		items:       "boots"
	}, {
		coords:      [23.656,78.094],
		upgrade:     "enhanced",
		school:      "griffin",
		items:       "gauntlets"
	}, {
		coords:      [153.094,46.281],
		upgrade:     "basic",
		school:      "griffin",
		items:       "silverSword",
		underground: true,
		entrances:   "lornruk"
	}, {
		coords:      [45.656,165.313],
		upgrade:     "enhanced",
		school:      "griffin",
		items:       "silverSword",
		underground: true,
		entrances:   "patrol_cave"
	}, {
		coords:      [160.063,127.094],
		upgrade:     "basic",
		school:      "griffin",
		items:       "steelSword"
	}, {
		coords:      [78.516,16.875],
		upgrade:     "enhanced",
		school:      "griffin",
		items:       "steelSword"
	}, {
		coords:      [107.375,84.438],
		upgrade:     "enhanced",
		school:      "griffin",
		items:       "trousers"
	}, {
		coords:      [43.828,107.953],
		upgrade:     "mastercrafted",
		school:      "ursine",
		items:       "silverSword"
	}, {
		coords:      [53.000,130.547],
		upgrade:     "superior",
		school:      "ursine",
		items:       "silverSword",
		underground: true,
		entrances:   "swamp_cave"
	}, {
		coords:      [116.344,45.563],
		upgrade:     "mastercrafted",
		school:      "ursine",
		items:       "steelSword",
		underground: true,
		entrances:   "pellar_cave"
	}, {
		coords:      [68.297,154.859],
		upgrade:     "superior",
		school:      "ursine",
		items:       "steelSword"
	}, {
		coords:      [39.219,71.719],
		upgrade:     "enhanced",
		school:      "wolven",
		items:       "armor"
	}, {
		coords:      [36.688,53.203],
		upgrade:     "mastercrafted",
		school:      "wolven",
		items:       "armor"
	}, {
		coords:      [110.813,179.125],
		upgrade:     "enhanced",
		school:      "wolven",
		items:       "boots",
		underground: true,
		entrances:   "grotto"
	}, {
		coords:      [107.094,73.391],
		upgrade:     "enhanced",
		school:      "wolven",
		items:       "silverSword",
		underground: true,
		entrances:   "crows_perch_well"
	}, {
		coords:      [50.953,182.453],
		upgrade:     "mastercrafted",
		school:      "wolven",
		items:       "silverSword"
	}, {
		coords:      [46.797,24.547],
		upgrade:     "mastercrafted",
		school:      "wolven",
		items:       "steelSword"
	}, {
		coords:      [225.359,95.906],
		upgrade:     "basic",
		school:      "feline",
		items:       ["armor", "boots", "gauntlets", "trousers"],
		underground: true,
		entrances:   "temple_isle_cave"
	}, {
		coords:      [73.047,121.813],
		upgrade:     "superior",
		school:      "feline",
		items:       ["armor", "boots", "gauntlets", "trousers"]
	}, {
		coords:      [79.531,137.203],
		upgrade:     "basic",
		school:      "griffin",
		items:       ["armor", "boots", "gauntlets", "trousers"],
		underground: true,
		entrances:   "dragonslayers_grotto"
	}, {
		coords:      [24.250,150.500],
		upgrade:     "mastercrafted",
		school:      "ursine",
		items:       ["armor", "boots", "gauntlets", "trousers"]
	}, {
		coords:      [141.453,119.125],
		upgrade:     "superior",
		school:      "ursine",
		items:       ["armor", "boots", "gauntlets", "trousers"],
		underground: true,
		entrances:   "shoe_trolls_cave"
	}],
	// ----------------- Shopkeepers --------------------
	shopkeeper: [{
		coords:      [[208.734,102.859],
		             [209.594,102.828],
		             [208.609,101.938]],
		extraLabel:  "shopkeeper.bookMerchant.label",
		desc:        "shopkeeper.bookMerchant.desc"
	}, {
		coords:      [[205.109,99.563],
		             [188.281,101.453],
		             [211.797,96.109]],
		sells:       ["alchemy", "food", "drinks"]
	}, {
		coords:      [207.375,100.969],
		extraLabel:  ["shopkeeper.banker.label", "v:shopkeeper.vivaldi.label"],
		desc:        "shopkeeper.banker.desc"
	}, {
		coords:      [198.516,113.328],
		extraLabel:  ["shopkeeper.tailor.label",
		              "v:shopkeeper.elihal.label"],
		desc:        "shopkeeper.tailor.desc",
		before:      "sidequest.matter"
	}, {
		coords:      [198.891,101.484],
		sells:       ["crafting", "weapons", "v:zerrikanianSaddlebags"]
	}, {
		coords:      [216.016,104.219],
		extraLabel:  "v:shopkeeper.gildorf.label",
		desc:        "v:shopkeeper.gildorf.desc"
	}, {
		coords:      [209.234,94.563],
		extraLabel:  "v:shopkeeper.fishmonger.label",
		sells:       "fish"
	}, {
		coords:      [215.203,92.344],
		sells:       "v:emptyBottles"
	}, {
		coords:      [213.813,93.063],
		sells:       ["runestones", "alchemy"],
		after:       "sidequest.stuff"
	}, {
		coords:      [[239.766,70.563],
		             [83.531,87.641]],
		sells:       ["runestones", "alchemy"],
		liberate:    true
	}, {
		coords:      [210.578,113.344],
		desc:        "v:shopkeeper.uselessMerchant.desc"
	}, {
		coords:      [204.500,109.047],
		sells:       ["gemDust", "weapons", "food", "drinks"]
	}, {
		coords:      [211.516,114.313],
		extraLabel:  "v:shopkeeper.loanShark.label",
		desc:        "v:shopkeeper.uselessMerchant.desc"
	}, {
		coords:      [212.547,110.969],
		sells:       "crafting"
	}, {
		coords:      [[200.828,98.297],
		             [207.484,102.297]],
		sells:       ["food", "drinks"]
	}, {
		coords:      [130.578,196.953],
		sells:       ["weapons", "crafting"],
		rescueFrom:  "crossroads_shopkeeper_pid"
	}, {
		coords:      [186.656,82.938],
		sells:       ["crafting", "food", "weapons"]
	}, {
		coords:      [[167.844,90.969],
		             [42.844,206.344]],
		sells:       ["armor", "crafting"]
	}, {
		coords:      [159.141,164.516],
		desc:        "v:shopkeeper.paintMerchant.desc"
	}, {
		coords:      [151.781,115.188],
		sells:       ["alchemy", "food"],
		rescueFrom:  "border_shopkeeper_pid"
	}, {
		coords:      [[123.156,179.266],
		             [99.984,130.453],
		             [185.500,206.969]],
		sells:       ["weapons", "crafting"],
		liberate:    true
	}, {
		coords:      [[137.406,160.781],
		             [30.359,46.734]],
		sells:       ["runestones", "alchemy", "food"],
		liberate:    true
	}, {
		coords:      [107.469,54.906],
		desc:        "v:shopkeeper.uselessMerchant.desc"
	}, {
		coords:      [101.547,76.094],
		sells:       ["gwent", "drinks"]
	}, {
		coords:      [81.797,41.406],
		sells:       ["gwent", "jewellery"]
	}, {
		coords:      [90.109,47.906],
		extraLabel:  "v:shopkeeper.keira.label",
		sells:       ["alchemy", "recipes", "v:clearancePotion"],
		before:      "sidequest.favor"
	}, {
		coords:      [104.031,76.875],
		extraLabel:  "v:shopkeeper.quartermaster.label",
		sells:       ["gwent", "food", "drinks"]
	}, {
		coords:      [100.531,76.344],
		extraLabel:  "v:shopkeeper.anselm.label",
		sells:       "v:racingBlinders",
		rescueFrom:  "anselm_event"
	}, {
		coords:      [70.563,73.188],
		sells:       ["drinks", "v:ruggedSaddlebags"]
	}, {
		coords:      [83.766,69.922],
		sells:       ["gwent", "drinks"],
		rescueFrom:  "claywich_shopkeeper_pid"
	}, {
		coords:      [[92.156,29.109],
		             [76.797,26.313],
		             [239.063,156.281]],
		sells:       ["armor", "crafting"],
		liberate:    true
	}, {
		coords:      [[100.578,130.578],
		             [129.578,125.719]],
		sells:       ["alchemy", "food"],
		liberate:    true
	}, {
		coords:      [99.844,110.594],
		sells:       ["gwent", "crafting"]
	}, {
		coords:      [99.000,109.281],
		sells:       ["runestones", "alchemy", "food"]
	}, {
		coords:      [33.453,204.859],
		extraLabel:  "v:shopkeeper.quartermaster.label",
		desc:        "v:shopkeeper.uselessMerchant.desc"
	}, {
		coords:      [78.078,147.141],
		sells:       "drinks",
		before:      "mainquest.family",
		weakBefore:  "sidequest.hillock"
	}, {
		coords:      [42.156,204.500],
		sells:       ["runestones", "alchemy"]
	}, {
		coords:      [44.063,206.734],
		sells:       ["weapons", "crafting"]
	}, {
		coords:      [35.406,124.250],
		sells:       ["runestones", "alchemy"],
		after:       "mainquest.bald"
	}, {
		coords:      [28.500,123.875],
		sells:       ["alchemy", "food"],
		after:       "mainquest.bald"
	}, {
		coords:      [133.906,131.266],
		sells:       ["alchemy", "food"],
		after:       "sidequest.eternal"
	}, {
		coords:      [187.797,152.172],
		sells:       "gwent"
	}, {
		coords:      [78.125,68.922],
		sells:       "food", // TODO: Check what he is actually selling, I just added him for the route.
		routes: [{
			name: "shopkeeper.label",
			coords: [
				[[81.281,69.078], [80.500,68.781], [78.336,68.977], [76.320,68.664], [75.125,68.766],
				[74.313,69.172], [73.391,71.188], [72.859,71.109], [72.211,71.367], [71.734,71.344],
				[71.148,71.609], [70.602,71.516], [70.203,71.359]],
				[[73.391,71.188], [72.797,72.078], [72.750,72.680], [73.063,74.133], [72.383,75.484],
				[71.938,76.047]]
			]
		}]
	}],
	// ----------------- Sidequests ---------------------
	sidequest: [{
		coords:      [182.593,155.875],
		name:        "barnful"
	}, {
		coords:      [199.343,106.343],
		name:        "dangerous",
		after:       "mainquest.poet",
		before:      "mainquest.mists"
	}, {
		coords:      [150.531,166.578],
		name:        "wanted",
		after:       "mainquest.junior",
		before:      "mainquest.mists"
	}, {
		coords:      [66.687,91.125],
		name:        "dog"
	}, {
		coords:      [89.843,48.609],
		name:        "magiclamp",
		after:       "mainquest.wandering",
		before:      "mainquest.mists"
	}, {
		coords:      [89.843,48.809],
		name:        "invitation",
		after:       "sidequest.magiclamp",
		before:      "mainquest.mists"
	}, {
		coords:      [89.843,49.009],
		name:        "towerful",
		after:       "sidequest.invitation",
		before:      "mainquest.mists"
	}, {
		coords:      [89.843,49.209],
		name:        "favor",
		after:       "sidequest.towerful",
		before:      "mainquest.mists"
	}, {
		coords:      [198.063,82.391],
		name:        "reason",
		after:       ["mainquest.blindingly",
		              "sidequest.deadly",
		              "sidequest.eyeforeye",
		              "sidequest.wanted"],
		before:      ["mainquest.mists",
		              "mainquest.ice"]
	}, {
		coords:      [200.375,105.203],
		name:        "feast",
		after:       "mainquest.flowers"
	}, {
		coords:      [72.437,59.625],
		name:        "greedy",
		after:       "mainquest.wandering"
	}, {
		coords:      [205.515,107.984],
		name:        "entombed",
		underground: true,
		entrances:   "sewers1"
	}, {
		coords:      [197.609,93.546],
		name:        "waterfront"
	}, {
		coords:      [180.000,176.125],
		name:        "eyeforeye",
		after:       "sidequest.gangs"
	}, {
		coords:      [160.421,166.437],
		name:        "avid",
		during:      "mainquest.sesame",
		hos:         true
	}, {
		coords:      [148.156,114.093],
		name:        "bitter"
	}, {
		coords:      [207.203,97.140],
		name:        "pearl"
	}, {
		coords:      [42.718,204.250],
		name:        "blood"
	}, {
		coords:      [198.968,107.734],
		name:        "cabaret",
		after:       "mainquest.poet",
		before:      "mainquest.mists"
	}, {
		coords:      [198.968,108.000],
		name:        "sins",
		after:       "sidequest.cabaret",
		before:      "mainquest.mists"
	}, {
		coords:      [106.968,74.875],
		name:        "ciri",
		after:       "mainquest.ciriwolves",
		before:      "mainquest.mists"
	}, {
		coords:      [149.562,129.187],
		name:        "deathfire"
	}, {
		coords:      [105.031,59.843],
		name:        "defender"
	}, {
		coords:      [212.781,145.468],
		name:        "empty"
	}, {
		coords:      [152.500,115.343],
		name:        "fake",
		after:       "sidequest.bitter"
	}, {
		coords:      [218.000,106.109],
		name:        "fencing",
		during:      "mainquest.flowers",
		before:      "mainquest.mists"
	}, {
		coords:      [209.109,103.250],
		name:        "thread",
		before:      "mainquest.baby"
	}, {
		coords:      [101.781,137.718],
		name:        "fools"
	}, {
		coords:      [[104.391,76.938],
		             [89.062,47.875]],
		name:        "forefathers",
		after:       "sidequest.towerful"
	}, {
		coords:      [164.218,89.750],
		name:        "fromfar2"
	}, {
		coords:      [129.687,111.093],
		name:        "funeral"
	}, {
		coords:      [84.625,150.094],
		name:        "ghosts",
		before:      "mainquest.mists"
	}, {
		coords:      [209.078,104.125],
		name:        "haunted",
		after:       "mainquest.novigrad"
	}, {
		coords:      [104.562,129.296],
		name:        "hazardous1"
	}, {
		coords:      [213.187,94.671],
		name:        "stuff"
	}, {
		coords:      [210.468,107.234],
		name:        "messages",
		after:       "event.children1"
	}, {
		coords:      [221.109,104.375],
		name:        "stakes"
	}, {
		coords:      [198.390,104.546],
		name:        "honor",
		after:       "sidequest.gangs"
	}, {
		coords:      [111.843,54.500],
		name:        "rites",
		after:       "sidequest.defender"
	}, {
		coords:      [237.718,129.500],
		name:        "red"
	}, {
		coords:      [76.156,28.031],
		name:        "snares"
	}, {
		coords:      [103.843,39.812],
		name:        "mob",
		before:      "sidequest.favor"
	}, {
		coords:      [104.843,77.312],
		name:        "masterarmor"
	}, {
		coords:      [209.515,102.640],
		name:        "oldfriend"
	}, {
		coords:      [240.937,124.375],
		name:        "hospitality"
	}, {
		coords:      [210.562,95.609],
		name:        "city1",
		after:       ["sidequest.matter",
		              "mainquest.reuven"]
	}, {
		coords:      [221.812,98.968],
		name:        "city2",
		after:       ["sidequest.matter",
		              "mainquest.reuven"]
	}, {
		coords:      [155.093,208.531],
		name:        "darkness"
	}, {
		coords:      [197.062,99.031],
		name:        "dumplings"
	}, {
		coords:      [201.578,98.515],
		name:        "arse",
		after:       "contract.deadly"
	}, {
		coords:      [209.938,109.422],
		name:        "matter",
		after:       "mainquest.reuven"
	}, {
		coords:      [246.547,198.938],
		name:        "midnight",
		during:      "mainquest.deadman",
		hos:         true
	}, {
		coords:      [107.078,73.765],
		name:        "crookback",
		after:       "mainquest.family",
		before:      "mainquest.mists"
	}, {
		coords:      [247.500,174.343],
		name:        "rose",
		after:       "mainquest.evil",
		hos:         true
	}, {
		coords:      [154.000,163.500],
		name:        "neighborhood",
		after:       "contract.drunk"
	}, {
		coords:      [149.281,183.343],
		name:        "spooked"
	}, {
		coords:      [95.156,47.718],
		name:        "takewant",
		after:       "sidequest.cat"
	}, {
		coords:      [202.250,118.687],
		name:        "dwarven"
	}, {
		coords:      [98.781,110.562],
		name:        "reardon",
		before:      "mainquest.mists"
	}, {
		coords:      [159.375,167.218],
		name:        "taxman",
		hos:         true
	}, {
		coords:      [84.406,175.437],
		name:        "stars"
	}, {
		coords:      [155.937,153.281],
		name:        "volunteer"
	}, {
		coords:      [76.687,148.281],
		name:        "hillock"
	}, {
		coords:      [154.968,110.718],
		name:        "pass"
	}, {
		coords:      [197.031,82.625],
		name:        "woe"
	}, {
		coords:      [[128.953,95.250],
		             [108.438,53.219]],
		name:        "heart"
	}, {
		coords:      [99.656,109.718],
		name:        "wannabe",
		after:       "contract.merry"
	}, {
		coords:      [242.906,198.562],
		name:        "trace1",
		hos:         true
	}, {
		coords:      [[207.875,103.062],
		             [217.531,133.469]],
		name:        "rc_derby",
		after:       "mainquest.junior"
	}, {
		coords:      [104.562,79.312],
		name:        "rc_perch",
		routes: [{
			name: "v:race.perch.label",
			coords: [[103.375,65.305], [102.930,63.773], [102.883,62.789], [103.422,61.328], [104.086,60.227],
			        [104.891,59.531], [105.180,58.906], [105.453,57.797], [105.555,56.898], [105.945,55.773],
			        [106.422,55.086], [107.734,54.289], [108.453,53.672], [109.164,52.547], [109.414,52.023],
			        [109.547,51.758], [109.664,51.773], [109.758,51.875], [111.422,53.828], [111.992,54.461],
			        [112.422,55.234], [112.516,56.555], [112.484,57.594], [112.141,58.750], [111.680,59.539],
			        [111.047,60.508], [110.203,60.898], [109.180,61.203], [108.461,61.359], [107.891,61.820],
			        [106.961,62.164], [105.992,62.438], [105.047,64.164], [104.305,64.664]]
		}]
	}, {
		coords:      [239.468,213.281],
		name:        "rc_western",
		hos:         true
	}, {
		coords:      [[209.062,103.859],
		             [194.438,97.547],
		             [206.422,97.141],
		             [208.016,113.250]],
		name:        "ff_novigrad"
	}, {
		coords:      [[99.328,110.015],
		             [128.203,96.078],
		             [106.906,53.156]],
		name:        "ff_velen"
	}, {
		coords:      [239.453,214.969],
		name:        "en_s",
		hos:         true
	}, {
		coords:      [239.453,215.169],
		name:        "en_q",
		hos:         true,
		after:       "sidequest.en_s"
	}, {
		coords:      [239.453,215.369],
		name:        "en_m",
		extraDesc:   "sidequest.en_m.descMods",
		hos:         true,
		after:       "sidequest.en_q"
	}, {
		coords:      [216.287,104.625],
		name:        "nobleman"
	}, {
		coords:      [205.969,103.797],
		name:        "soldier",
		during:      "sidequest.dangerous",
		before:      "mainquest.mists"
	}, {
		coords:      [131.234,131.375],
		name:        "eternal"
	}],
	// ----------------- Sign Posts ---------------------
	signpost: [{
		coords:      [207.375,103.750],
		name:        "v:hierarchSquare"
	}, {
		coords:      [208.766,116.672],
		name:        "v:southernGate"
	}, {
		coords:      [214.813,116.297],
		name:        "v:oxenfurtGate"
	}, {
		coords:      [218.563,102.031],
		name:        "v:stGregorysBridge"
	}, {
		coords:      [226.313,91.547],
		name:        "v:electorsSquare"
	}, {
		coords:      [201.391,111.484],
		name:        "v:tretogorGate"
	}, {
		coords:      [196.563,108.094],
		name:        "v:gateOfTheHierarch"
	}, {
		coords:      [191.688,102.781],
		name:        "v:gloryGate"
	}, {
		coords:      [191.250,96.672],
		name:        "v:portsideGate"
	}, {
		coords:      [197.969,88.609],
		name:        "v:novigradDocks"
	}, {
		coords:      [211.828,121.703],
		name:        "v:arette"
	}, {
		coords:      [198.016,125.922],
		name:        "v:sevenCatsInn"
	}, {
		coords:      [245.109,121.094],
		name:        "v:sarrasinGrange"
	}, {
		coords:      [236.125,130.438],
		name:        "v:yantra"
	}, {
		coords:      [237.031,149.219],
		name:        "v:isolatedHut"
	}, {
		coords:      [214.219,140.781],
		name:        "v:honeyfillMeadworks"
	}, {
		coords:      [223.516,174.375],
		name:        "v:martinFeuillesFarmstead"
	}, {
		coords:      [231.734,162.984],
		name:        "v:winespringGrange"
	}, {
		coords:      [225.672,149.938],
		name:        "v:moldavieResidence"
	}, {
		coords:      [234.469,105.234],
		name:        "v:cavern"
	}, {
		coords:      [205.438,157.313],
		name:        "v:alness"
	}, {
		coords:      [194.000,149.969],
		name:        "v:wheatFields"
	}, {
		coords:      [189.813,161.063],
		name:        "v:vegelbudResidence"
	}, {
		coords:      [184.719,155.609],
		name:        "v:carsten"
	}, {
		coords:      [179.703,174.922],
		name:        "v:temerianPartisanHideout"
	}, {
		coords:      [182.984,189.391],
		name:        "v:estTayiar"
	}, {
		coords:      [168.672,178.078],
		name:        "v:herbalistsHut"
	}, {
		coords:      [155.203,206.688],
		name:        "v:aeramasAbandonedManor"
	}, {
		coords:      [142.641,186.875],
		name:        "v:crossroads"
	}, {
		coords:      [168.969,165.375],
		name:        "v:gustfieldsFarm"
	}, {
		coords:      [215.406,154.203],
		name:        "v:dancingWindmill"
	}, {
		coords:      [193.328,81.500],
		name:        "v:loggersHut"
	}, {
		coords:      [192.875,67.359],
		name:        "v:lighthouse"
	}, {
		coords:      [184.484,117.922],
		name:        "v:cunnyOfTheGoose"
	}, {
		coords:      [179.016,106.938],
		name:        "v:drahimCastle"
	}, {
		coords:      [173.828,76.719],
		name:        "v:widowsGrotto"
	}, {
		coords:      [165.188,91.438],
		name:        "v:ursten"
	}, {
		coords:      [182.469,88.563],
		name:        "v:luciansWindmill"
	}, {
		coords:      [185.109,136.172],
		name:        "v:eternalFireChapel"
	}, {
		coords:      [156.516,108.625],
		name:        "v:borderPost"
	}, {
		coords:      [157.484,172.031],
		name:        "v:novigradGate"
	}, {
		coords:      [149.547,165.094],
		name:        "v:westernGate"
	}, {
		coords:      [156.859,162.375],
		name:        "v:oxenfurtHarbor"
	}, {
		coords:      [139.359,146.203],
		name:        "v:stonecuttersSettlement"
	}, {
		coords:      [155.391,152.375],
		name:        "v:whiteEagleFort"
	}, {
		coords:      [148.453,136.422],
		name:        "v:codgersQuarry"
	}, {
		coords:      [158.813,126.328],
		name:        "v:hindhold"
	}, {
		coords:      [125.281,173.141],
		name:        "v:ferryStation"
	}, {
		coords:      [137.906,121.516],
		name:        "v:hangedMansTree"
	}, {
		coords:      [131.859,131.781],
		name:        "v:devilsPit"
	}, {
		coords:      [129.016,116.984],
		name:        "v:mulbrydale"
	}, {
		coords:      [128.797,94.375],
		name:        "v:innAtTheCrossroads"
	}, {
		coords:      [143.859,52.156],
		name:        "v:harpyFeedingGround"
	}, {
		coords:      [150.906,46.625],
		name:        "v:lornruk"
	}, {
		coords:      [126.828,57.891],
		name:        "v:heatherton"
	}, {
		coords:      [128.688,49.313],
		name:        "v:abandonedTower"
	}, {
		coords:      [129.781,40.859],
		name:        "v:isolatedShack"
	}, {
		coords:      [107.016,54.078],
		name:        "v:blackbough"
	}, {
		coords:      [103.656,40.563],
		name:        "v:hangmansAlley"
	}, {
		coords:      [97.219,74.875],
		name:        "v:crowsPerch"
	}, {
		coords:      [83.781,88.406],
		name:        "v:boatmakersHut"
	}, {
		coords:      [86.516,27.609],
		name:        "v:refugeesCamp"
	}, {
		coords:      [92.203,28.359],
		name:        "v:coastOfWrecks"
	}, {
		coords:      [82.688,42.859],
		name:        "v:midcopse"
	}, {
		coords:      [78.109,57.844],
		name:        "v:wastrelManor"
	}, {
		coords:      [71.516,103.234],
		name:        "v:banditsCamp"
	}, {
		coords:      [69.109,75.000],
		name:        "v:oreton"
	}, {
		coords:      [91.438,37.625],
		name:        "v:forestHut"
	}, {
		coords:      [118.281,68.047],
		name:        "v:wolvenGlade"
	}, {
		coords:      [106.688,84.781],
		name:        "v:burnedRuins"
	}, {
		coords:      [89.984,61.938],
		name:        "v:trollBridge"
	}, {
		coords:      [82.281,70.359],
		name:        "v:claywich"
	}, {
		coords:      [58.672,99.766],
		name:        "v:drudge"
	}, {
		coords:      [68.141,22.922],
		name:        "v:condyle"
	}, {
		coords:      [65.422,36.578],
		name:        "v:duenHen"
	}, {
		coords:      [49.875,78.141],
		name:        "v:fykeIsle"
	}, {
		coords:      [39.219,47.703],
		name:        "v:byways"
	}, {
		coords:      [25.406,78.266],
		name:        "v:frischlow"
	}, {
		coords:      [33.813,98.703],
		name:        "v:olenasGrove"
	}, {
		coords:      [32.125,120.547],
		name:        "v:roadToBaldMountain"
	}, {
		coords:      [25.000,149.563],
		name:        "v:destroyedBastion"
	}, {
		coords:      [41.250,157.594],
		name:        "v:crossroadsVillage"
	}, {
		coords:      [37.828,206.734],
		name:        "v:nilfgaardianArmyGroupCenterCamp"
	}, {
		coords:      [46.219,198.172],
		name:        "v:houseOfRespite"
	}, {
		coords:      [59.203,186.266],
		name:        "v:kimboltWay"
	}, {
		coords:      [62.953,143.797],
		name:        "v:theOrphansOfCrookbackBog"
	}, {
		coords:      [66.625,154.531],
		name:        "v:ruinedTower"
	}, {
		coords:      [55.734,159.281],
		name:        "v:ancientOak"
	}, {
		coords:      [76.219,149.703],
		name:        "v:downwarren"
	}, {
		coords:      [82.016,135.516],
		name:        "v:dragonslayersGrotto"
	}, {
		coords:      [88.328,149.813],
		name:        "v:reardonManor"
	}, {
		coords:      [86.313,175.969],
		name:        "v:benek"
	}, {
		coords:      [100.563,164.641],
		name:        "v:toderas"
	}, {
		coords:      [101.938,136.266],
		name:        "v:lurtch"
	}, {
		coords:      [99.906,109.500],
		name:        "v:lindenvale"
	}, {
		coords:      [115.656,156.328],
		name:        "v:maraudersBridge"
	}, {
		coords:      [111.234,178.766],
		name:        "v:grotto"
	}, {
		coords:      [197.203,225.640],
		name:        "v:arns"
	}, {
		coords:      [254.000,153.312],
		name:        "v:bowdon"
	}, {
		coords:      [243.343,197.468],
		name:        "v:brun"
	}, {
		coords:      [239.969,70.000],
		name:        "v:crane"
	}, {
		coords:      [217.562,184.625],
		name:        "v:draken"
	}, {
		coords:      [203.281,207.437],
		name:        "v:erde"
	}, {
		coords:      [240.937,175.625],
		name:        "v:garin"
	}, {
		coords:      [176.343,209.875],
		name:        "v:heddel"
	}, {
		coords:      [258.031,128.687],
		name:        "v:hunter"
	}, {
		coords:      [213.625,221.812],
		name:        "v:kilker"
	}, {
		coords:      [239.312,211.562],
		name:        "v:mill"
	}, {
		coords:      [195.875,192.125],
		name:        "v:vikk"
	}, {
		coords:      [228.218,197.500],
		name:        "v:voneverec"
	}, {
		coords:      [221.000,217.968],
		name:        "v:zuetzer"
	}, {
		coords:      [104.641,75.641],
		name:        "v:castle",
		after:       "sidequest.crookback"
	}],
	// ----------------- Smugglers' Caches --------------
	smugglers: [{
		coords:      [[193.547,103.891],
		             [201.000,121.516],
		             [183.547,68.297],
		             [75.844,15.000]]
	}],
	// ----------------- Spoils of War ------------------
	spoils: [{
		coords:      [[153.609,79.109],
		             [111.500,105.250],
		             [46.078,24.953]]
	}],
	// ----------------- Stashes ------------------------
	stash: [{
		coords:      [[106.727,74.891],
		             [198.922,106.547]]
	}],
	// ----------------- Treasure -----------------------
	treasure: [{
		coords:      [[101.094,25.344],
		             [239.609,201.875],
		             [225.313,147.875],
		             [206.344,142.734],
		             [192.469,124.016],
		             [249.656,143.984],
		             [222.625,97.109],
		             [222.109,95.031],
		             [229.625,90.328],
		             [226.000,95.563],
		             [239.828,69.625],
		             [199.906,130.766],
		             [196.750,87.063],
		             [178.094,106.000],
		             [189.141,97.078],
		             [180.469,89.359],
		             [166.641,96.563],
		             [97.656,26.375],
		             [97.375,28.438],
		             [91.625,36.906],
		             [91.203,68.172],
		             [103.781,73.484],
		             [103.172,74.625],
		             [103.766,76.516],
		             [119.453,68.688],
		             [128.875,50.578],
		             [139.953,59.344],
		             [143.484,52.234],
		             [54.656,77.969],
		             [55.094,79.250],
		             [51.188,77.813],
		             [50.469,80.094],
		             [72.500,113.469],
		             [99.438,108.906],
		             [100.500,117.313],
		             [84.344,150.063],
		             [68.281,143.719],
		             [50.781,175.438],
		             [86.750,168.531],
		             [130.344,116.188],
		             [129.703,119.688],
		             [173.359,78.453],
		             [174.234,78.234],
		             [193.531,66.188],
		             [213.234,111.391],
		             [209.906,110.359],
		             [208.672,99.891],
		             [30.344,47.063],
		             [28.906,50.469],
		             [44.656,40.125],
		             [219.547,102.063],
		             [47.844,77.094],
		             [86.094,25.625],
		             [37.969,125.688],
		             [33.844,146.594],
		             [170.406,156.875],
		             [180.766,145.734],
		             [44.344,157.063],
		             [109.938,170.313],
		             [127.719,166.406],
		             [124.594,147.406],
		             [143.719,118.500],
		             [148.281,119.875],
		             [220.188,105.844],
		             [227.281,216.844],
		             [146.281,180.063],
		             [119.125,133.563],
		             [139.313,152.813],
		             [133.875,49.000],
		             [80.266,68.234],
		             [103.297,75.344],
		             [103.219,161.188],
		             [94.219,165.594],
		             [82.688,160.563],
		             [96.594,117.500],
		             [43.438,38.219],
		             [42.969,35.594],
		             [50.688,26.656],
		             [30.188,77.875],
		             [42.938,101.250],
		             [56.250,132.530],
		             [55.594,137.810],
		             [136.344,176.000],
		             [150.906,162.219],
		             [157.641,163.406],
		             [214.734,225.734],
		             [234.625,205.719],
		             [239.938,207.094],
		             [211.813,137.063],
		             [216.063,138.688],
		             [217.313,135.375],
		             [209.750,137.563],
		             [227.125,108.813],
		             [175.234,97.313],
		             [207.531,114.375],
		             [203.813,84.797],
		             [197.125,86.375],
		             [208.656,106.656],
		             [212.125,88.266],
		             [213.922,93.625],
		             [228.719,101.094],
		             [227.219,84.094],
		             [30.594,111.969],
		             [35.125,108.750],
		             [58.375,42.250],
		             [72.188,60.422],
		             [66.531,76.438],
		             [126.203,146.094],
		             [90.125,15.219],
		             [94.625,26.688],
		             [117.453,46.766],
		             [149.781,45.063],
		             [124.656,65.172],
		             [133.500,107.734],
		             [140.031,120.672],
		             [67.438,101.047],
		             [76.391,113.469],
		             [51.938,68.078],
		             [49.250,74.266],
		             [52.781,79.688],
		             [50.766,80.703],
		             [38.969,197.547],
		             [70.984,147.984],
		             [72.484,151.797],
		             [80.297,140.844],
		             [92.188,184.250],
		             [154.828,162.359],
		             [155.375,162.438],
		             [110.422,136.453],
		             [166.750,170.344],
		             [158.375,85.063],
		             [157.797,86.547],
		             [155.984,85.313],
		             [155.453,86.172],
		             [158.813,97.016],
		             [159.828,97.797],
		             [157.375,128.344],
		             [159.594,128.641],
		             [156.469,129.484],
		             [159.422,123.781],
		             [166.266,145.734],
		             [164.719,148.078],
		             [95.922,78.125],
		             [94.547,82.125],
		             [65.906,36.859],
		             [124.969,173.969],
		             [136.344,158.844],
		             [160.063,128.266],
		             [159.922,127.516],
		             [156.438,122.766],
		             [129.375,125.984],
		             [108.750,108.813],
		             [77.281,126.906],
		             [111.328,156.891],
		             [111.438,152.047],
		             [109.531,138.313],
		             [66.109,104.313],
		             [62.281,109.156],
		             [67.438,108.406],
		             [70.469,117.625],
		             [86.188,101.250],
		             [33.922,124.875],
		             [75.172,152.703],
		             [97.594,189.281],
		             [69.438,163.875],
		             [57.688,182.813],
		             [185.406,112.469],
		             [184.500,108.125],
		             [72.375,132.063],
		             [154.688,160.344],
		             [145.094,193.188],
		             [240.813,137.250],
		             [230.438,181.688],
		             [60.641,155.594],
		             [80.063,99.875],
		             [149.953,125.234],
		             [69.094,107.172],
		             [103.750,103.172],
		             [98.063,99.156],
		             [98.125,58.813],
		             [186.625,151.688],
		             [226.031,99.156]]
	}, {
		coords:      [[39.000,131.969],
		             [34.531,129.891]],
		after:       "mainquest.bald"
	}, {
		coords:      [[52.625,50.500],
		             [36.469,40.500],
		             [41.234,45.984],
		             [48.563,47.063],
		             [42.922,42.984],
		             [43.984,43.297],
		             [43.797,42.250],
		             [39.641,43.594],
		             [52.906,42.453],
		             [39.766,42.656],
		             [52.563,46.656],
		             [52.797,47.641],
		             [51.750,49.781],
		             [53.313,50.688],
		             [53.188,54.125],
		             [47.281,45.500],
		             [48.219,41.031],
		             [46.500,40.438],
		             [49.188,40.969],
		             [49.125,42.625],
		             [49.891,43.938],
		             [48.453,41.328],
		             [48.141,44.297],
		             [41.047,39.578],
		             [43.641,39.438],
		             [38.922,39.703],
		             [57.344,41.563],
		             [51.734,39.828]],
		underground: true,
		entrances:   "wandering_cave",
		after:       "mainquest.wandering"
	}, {
		coords:      [[214.531,193.344],
		             [216.766,193.875],
		             [216.734,192.906]],
		underground: true,
		entrances:   "everec_crypt",
		after:       "mainquest.deadman"
	}, {
		coords:      [[217.344,193.438],
		             [220.672,193.000]],
		after:       "mainquest.marriage"
	}, {
		coords:      [[202.266,102.609],
		             [201.991,102.406]],
		underground: true,
		entrances:   "pyres_hatch",
		after:       "mainquest.pyres"
	}, {
		coords:      [52.219,129.844],
		underground: true,
		entrances:   "swamp_cave"
	}, {
		coords:      [217.922,160.438],
		underground: true,
		entrances:   "windmill_cave"
	}, {
		coords:      [217.391,108.344],
		underground: true,
		entrances:   "sewers2"
	}, {
		coords:      [[158.266,210.969],
		             [159.297,211.203],
		             [157.875,208.891]],
		underground: true,
		entrances:   "cheese_dungeon",
		after:       "sidequest.darkness"
	}, {
		coords:      [94.813,183.438],
		underground: true,
		entrances:   "phantom_cave"
	}, {
		coords:      [187.125,166.703],
		during:      ["sidequest.sins",
		              "sidequest.matter"]
	}, {
		coords:      [164.094,164.391],
		after:       "contract.drunk"
	}, {
		coords:      [140.844,167.109],
		during:      "mainquest.whatsoever"
	}, {
		coords:      [72.188,59.047],
		underground: true,
		entrances:   "allgod_basement",
		after:       "sidequest.greedy"
	}, {
		coords:      [[153.578,166.875],
		             [154.438,167.266]],
		underground: true,
		entrances:   "escape_well",
		after:       "mainquest.escape"
	}, {
		coords:      [99.766,117.875],
		underground: true,
		entrances:   "wolfking_cave"
	}, {
		coords:      [88.125,107.688],
		underground: true,
		entrances:   "chort_shit_cave"
	}, {
		coords:      [238.078,105.938],
		underground: true,
		entrances:   "cavern"
	}, {
		coords:      [173.547,77.734],
		underground: true,
		entrances:   "widows_grotto"
	}, {
		coords:      [203.875,107.125],
		underground: true,
		entrances:   "dreamer_basement"
	}, {
		coords:      [142.672,120.313],
		underground: true,
		entrances:   "shoe_trolls_cave"
	}, {
		coords:      [[145.000,128.219],
		             [141.156,128.406]],
		underground: true,
		entrances:   "devils_pit",
		during:      "sidequest.eternal"
	}, {
		coords:      [208.594,104.875],
		underground: true,
		entrances:   "sewers3",
		after:       "sidequest.never"
	}, {
		coords:      [[92.313,149.797],
		             [89.391,150.484]],
		underground: true,
		entrances:   "fools_cave"
	}, {
		coords:      [[142.953,107.594],
		             [142.188,109.547],
		             [141.313,106.375],
		             [139.703,107.656]],
		underground: true,
		entrances:   "mikel_cave"
	}, {
		coords:      [[159.109,166.578],
		             [157.906,164.922],
		             [156.344,165.328],
		             [155.047,164.672],
		             [154.094,164.313]],
		underground: true,
		entrances:   "frog_lair",
		during:      "mainquest.evil"
	}, {
		coords:      [239.563,76.688],
		after:       "mainquest.evil"
	}, {
		coords:      [223.297,90.469],
		underground: true,
		entrances:   "temple_isle_cave"
	}, {
		coords:      [[52.219,61.594],
		             [64.703,141.359],
		             [207.219,84.766],
		             [191.391,134.000],
		             [232.141,84.016],
		             [198.641,114.469],
		             [53.375,67.188],
		             [151.344,142.000],
		             [146.000,157.188],
		             [97.531,18.719],
		             [98.313,17.094],
		             [83.188,95.531],
		             [67.750,99.719],
		             [50.344,99.531],
		             [39.344,72.625],
		             [43.125,106.063],
		             [43.563,110.719],
		             [40.781,111.594],
		             [39.875,72.188],
		             [38.781,72.250],
		             [115.125,154.750],
		             [158.063,94.750],
		             [220.625,99.563],
		             [203.000,98.375],
		             [208.031,120.156],
		             [97.969,16.953],
		             [50.031,25.656],
		             [146.281,168.781],
		             [238.906,205.156],
		             [242.906,208.000],
		             [159.734,98.563],
		             [156.125,97.047],
		             [160.578,100.063],
		             [34.703,122.281],
		             [54.531,92.000],
		             [96.281,26.375],
		             [111.250,99.156],
		             [101.313,196.906],
		             [177.125,124.172],
		             [176.828,124.594],
		             [50.016,32.578],
		             [123.859,173.734],
		             [42.484,81.016],
		             [159.141,92.531],
		             [159.141,92.531],
		             [37.813,218.344],
		             [146.266,158.922],
		             [145.922,169.266]],
		underwater:  true
	}, {
		coords:      [38.063,124.500],
		underwater:  true,
		underground: true,
		entrances:   "coin_fetch_cave"
	}, {
		coords:      [[151.125,163.938],
		             [151.875,165.313],
		             [149.297,164.859]],
		underwater:  true,
		underground: true,
		entrances:   "escape_well",
		after:       "mainquest.escape"
	}, {
		coords:      [226.531,90.656],
		underwater:  true,
		underground: true,
		entrances:   "temple_isle_cave"
	}, {
		coords:      [[30.078,194.250],
		             [54.656,156.594]],
		underwater:  true,
		underground: true,
		entrances:   "hillock_lair"
	}, {
		coords:      [[50.500,46.781],
		             [40.313,42.844],
		             [45.672,38.953],
		             [55.250,41.188]],
		underwater:  true,
		underground: true,
		entrances:   "wandering_cave",
		after:       "mainquest.wandering"
	}, {
		coords:      [[91.563,149.500],
		             [91.375,149.703],
		             [89.844,150.125]],
		underwater:  true,
		underground: true,
		entrances:   "fools_cave"
	}, {
		coords:      [[145.172,108.625],
		             [144.563,110.125],
		             [143.547,110.484],
		             [140.781,112.344]],
		underwater:  true,
		underground: true,
		entrances:   "mikel_cave"
	}, {
		coords:      [238.844,76.656],
		underwater:  true,
		after:       "mainquest.evil"
	}],
	// ----------------- Treasure Hunts -----------------
	treasurehunt: [{
		coords:      [107.531,36.859],
		name:        "sunkent"
	}, {
		coords:      [104.422,26.078],
		name:        "mistake"
	}, {
		coords:      [94.859,28.031],
		name:        "zuleyka"
	}, {
		coords:      [105.625,148.141],
		name:        "fire"
	}, {
		coords:      [190.937,195.125],
		name:        "force",
		hos:         true
	}, {
		coords:      [186.312,211.250],
		name:        "surprise",
		hos:         true
	}, {
		coords:      [197.593,226.125],
		name:        "romilly",
		hos:         true
	}, {
		coords:      [245.562,212.562],
		name:        "cursed",
		hos:         true
	}, {
		coords:      [252.625,133.625],
		name:        "redemption",
		hos:         true,
		underground: true,
		entrances:   "spider_cave"
	}, {
		coords:      [238.156,155.891],
		name:        "tinker",
		hos:         true
	}, {
		coords:      [241.750,94.062],
		name:        "perfidy",
		hos:         true
	}, {
		coords:      [154.313,96.734],
		name:        "forcoin"
	}, {
		coords:      [168.563,78.875],
		name:        "wrecks"
	}, {
		coords:      [115.891,134.969],
		name:        "events"
	}, {
		coords:      [130.344,173.906],
		name:        "gods"
	}, {
		coords:      [164.563,146.844],
		name:        "bloodgold"
	}, {
		coords:      [125.625,143.594],
		name:        "luck"
	}, {
		coords:      [171.813,139.453],
		name:        "battlefield"
	}, {
		coords:      [166.922,155.281],
		name:        "dowry"
	}, {
		coords:      [112.969,162.563],
		name:        "world"
	}, {
		coords:      [56.438,20.781],
		name:        "ignored"
	}, {
		coords:      [51.297,34.500],
		name:        "defense"
	}, {
		coords:      [55.031,49.828],
		name:        "gods"
	}, {
		coords:      [39.859,70.531],
		name:        "sunkenc"
	}, {
		coords:      [160.437,166.187],
		name:        "legacy",
		hos:         true,
		during:      "mainquest.sesame"
	}, {
		coords:      [239.468,213.515],
		name:        "shores",
		hos:         true
	}, {
		coords:      [107.391,55.188],
		name:        "scav_cat1"
	}, {
		coords:      [190.109,94.000],
		name:        "scav_cat"
	}, {
		coords:      [106.234,52.656],
		name:        "scav_cat2"
	}, {
		coords:      [103.969,77.094],
		name:        "scav_cat3"
	}, {
		coords:      [103.156,109.125],
		name:        "scav_cat4"
	}, {
		coords:      [82.156,40.625],
		name:        "scav_griffin1"
	}, {
		coords:      [82.156,40.825],
		name:        "scav_griffin2"
	}, {
		coords:      [208.547,101.063],
		name:        "scav_griffin3"
	}, {
		coords:      [197.062,99.231],
		name:        "scav_griffin4"
	}, {
		coords:      [197.062,99.431],
		name:        "scav_wolf1"
	}, {
		coords:      [103.156,109.325],
		name:        "scav_wolf2"
	}, {
		coords:      [208.547,101.263],
		name:        "scav_wolf4"
	}, {
		coords:      [197.062,99.631],
		name:        "scav_wolf5"
	}]
}; };

registerMap({
	name:          "velen",
	ns:            "v",
	bounds:        [{ lat: -32, lng: -32 }, { lat: 288+32, lng: 256+32 }],
	initialPos:    [144, 128],
	minZoom:       1,
	maxZoom:       7,
	minNativeZoom: 1,
	maxNativeZoom: 5,
	initialZoom:   2,
	getMapData:    getMapData
}); }
