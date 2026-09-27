{ let getMapData = function() { return {
	// ----------------- Abandoned Sites ----------------
	abandoned: [{
		coords:      [[127.188,212.844],
		             [124.531,217.734],
		             [134.609,137.891],
		             [115.562,116.750],
		             [99.688,150.016]]
	}],
	// ----------------- Alchemy Supplies ---------------
	alchemy: [{
		coords:      [137.125,218.359]
	}, {
		coords:      [131.078,133.407],
		weakBefore:  "sidequest.nithing"
	}, {
		coords:      [137.703,164.312],
		extraLabel:  "s:alchemy.gremist.label",
		after:       "sidequest.practicum"
	}],
	// ----------------- Armorers -----------------------
	armorer: [{
		coords:      [[130.406,222.094],
		             [192.359,179.906]],
		extraLabel:  "craftlevel.amateur"
	}, {
		coords:      [[94.656,125.188],
		             [154.109,123.406]],
		extraLabel:  "craftlevel.journeyman"
	}],
	// ----------------- Armorer's Tables ---------------
	armorerstable: [{
		coords:      [[130.687,225.203],
		             [130.578,221.733],
		             [127.281,212.282],
		             [193.453,180.110],
		             [177.360,72.750],
		             [95.215,125.422],
		             [121.420,107.110],
		             [154.010,122.847],
		             [130.422,222.453]]
	}],
	// ----------------- Bandit Camps -------------------
	banditcamp: [{
		coords:      [[167.125,179.625],
		             [167.937,65.922],
		             [130.062,139.281],
		             [96.515,115.969],
		             [141.531,171.812],
		             [156.000,163.063]]
	}, {
		coords:      [196.563,115.187],
		notInGame:   true
	}],
	// ----------------- Barbers ------------------------
	barber: [{
		coords:      [175.266,72.375]
	}, {
		coords:      [149.438,127.625],
		extraLabel:  "s:shopkeeper.sjusta.label"
	}],
	// ----------------- Blacksmiths --------------------
	blacksmith: [{
		coords:      [[62.248,187.657],
		             [130.750,224.859],
		             [193.893,179.031],
		             [176.969,72.562],
		             [121.375,106.740],
		             [102.500,140.969],
		             [154.235,123.094]],
		extraLabel:  "craftlevel.amateur"
	}, {
		coords:      [95.397,125.047],
		extraLabel:  "craftlevel.journeyman"
	}, {
		coords:      [123.407,129.234],
		extraLabel:  "craftlevel.amateur",
		rescueFrom:  "blacksmith_pid"
	}, {
		coords:      [108.407,73.938],
		extraLabel:  "craftlevel.amateur",
		after:       "mainquest.bpreparations"
	}],
	// ----------------- Boats --------------------------
	boat: [{
		coords:      [[109.407,74.500],
		             [57.939,201.500],
		             [128.719,209.656],
		             [132.626,222.406],
		             [179.625,140.125],
		             [190.750,172.312],
		             [191.343,178.531],
		             [191.500,179.375],
		             [145.985,85.126],
		             [183.531,71.657],
		             [91.000,116.860],
		             [124.516,108.329],
		             [135.422,98.359],
		             [102.250,142.313],
		             [99.048,150.219],
		             [115.547,170.593],
		             [143.860,170.672],
		             [129.954,131.438],
		             [159.640,135.829],
		             [151.344,125.532],
		             [147.328,122.969],
		             [147.000,123.000],
		             [128.845,172.000],
		             [161.218,160.437],
		             [141.063,212.812],
		             [174.969,74.000],
		             [122.156,105.562],
		             [141.562,52.625],
		             [62.531,201.156]]
	}, {
		coords:      [117.532,53.875],
		after:       "mainquest.mists"
	}, {
		coords:      [149.250,210.343],
		after:       "sidequest.last"
	}],
	// ----------------- Contracts ----------------------
	contract: [{
		coords:      [104.391,141.344],
		name:        "dragon"
	}, {
		coords:      [176.047,73.094],
		name:        "groom"
	}, {
		coords:      [129.235,150.875],
		name:        "miners"
	}, {
		coords:      [130.407,133.203],
		name:        "missing"
	}, {
		coords:      [147.360,125.657],
		name:        "muire"
	}, {
		coords:      [103.828,141.516],
		name:        "wanted"
	}, {
		coords:      [130.079,221.828],
		name:        "beast"
	}, {
		coords:      [118.204,107.453],
		name:        "eldberg"
	}, {
		coords:      [121.891,129.297],
		name:        "heart"
	}],
	// ----------------- Entrances ----------------------
	entrance: [{
		coords:      [[58.577,182.922],
		             [62.702,183.422],
		             [139.703,216.875],
		             [138.422,214.593],
		             [133.469,217.969],
		             [131.219,215.937],
		             [108.875,56.343],
		             [96.204,65.047],
		             [138.688,124.406],
		             [105.489,161.219],
		             [113.891,164.422],
		             [117.015,156.516],
		             [142.750,142.281],
		             [135.937,161.875],
		             [135.828,162.797],
		             [136.110,163.953],
		             [127.625,226.687],
		             [128.906,226.516],
		             [139.125,216.484],
		             [96.781,59.187],
		             [108.875,53.500],
		             [111.688,56.437],
		             [112.969,55.281],
		             [114.343,54.500]]
	}, {
		coords:      [[136.188,165.578],
		             [190.031,174.719],
		             [131.234,148.219],
		             [94.218,59.000],
		             [97.125,64.453],
		             [97.218,63.953]],
		notInGame:   true
	}, {
		coords:      [138.375,229.281],
		underwater:  true,
		during:      "sidequest.last"
	}, {
		coords:      [129.656,218.938],
		groupId:     "fame_cave"
	}, {
		coords:      [193.531,175.672],
		groupId:     "slide_trophy_cave"
	}, {
		coords:      [[164.438,64.078],
		             [164.969,66.563]],
		groupId:     "old_watchtower_cave"
	}, {
		coords:      [140.750,53.125],
		after:       "mainquest.elderblood"
	}, {
		coords:      [97.204,61.422],
		groupId:     "urskar_tordarroch_cave"
	}, {
		coords:      [102.516,63.578],
		groupId:     "urskar_boothouse_cave"
	}, {
		coords:      [99.594,72.844],
		after:       "sidequest.undvik"
	}, {
		coords:      [[78.890,145.938],
		             [81.797,145.953]],
		groupId:     "elverum_lighthouse_cave"
	}, {
		coords:      [81.422,135.000],
		groupId:     "shroom_cave"
	}, {
		coords:      [108.109,121.797],
		after:       "sidequest.gambit",
		before:      "mainquest.mists"
	}, {
		coords:      [115.359,130.485],
		groupId:     "fornhala_den"
	}, {
		coords:      [134.938,103.657],
		groupId:     "pearls_cave"
	}, {
		coords:      [102.687,168.625],
		groupId:     "grotto"
	}, {
		coords:      [142.500,132.375],
		groupId:     "disturbed_crypt"
	}, {
		coords:      [137.437,164.406],
		after:       "sidequest.practicum"
	}, {
		coords:      [150.719,151.218],
		groupId:     "yustianna_grotto"
	}, {
		coords:      [159.094,136.236],
		after:       "mainquest.sunstone",
		groupId:     "sunstone_cave"
	}, {
		coords:      [145.453,132.031],
		notInGame:   true,
		groupId:     "disturbed_crypt"
	}, {
		coords:      [196.468,176.375],
		notInGame:   true,
		groupId:     "slide_trophy_cave"
	}, {
		coords:      [133.156,148.390],
		notInGame:   true,
		groupId:     "blandare_grave"
	}, {
		coords:      [102.406,116.578],
		notInGame:   true,
		groupId:     "fart_cave"
	}, {
		coords:      [114.515,110.750],
		notInGame:   true,
		groupId:     "arinbjorn_grave"
	}, {
		coords:      [154.141,121.906],
		notInGame:   true,
		after:       "sidequest.gambit",
		groupId:     "trolde_passage"
	}, {
		coords:      [[96.562,64.922],
		             [97.907,62.766]],
		notInGame:   true,
		groupId:     "urskar_tordarroch_cave"
	}, {
		coords:      [106.859,145.375],
		notInGame:   true,
		during:      "contract.wanted"
	}, {
		coords:      [104.781,148.562],
		after:       "contract.wanted"
	}, {
		coords:      [122.016,137.641],
		notInGame:   true,
		groupId:     "boxholm_ruins"
	}, {
		coords:      [197.562,179.378],
		notInGame:   true,
		groupId:     "yngvars_fang_ruins"
	}, {
		coords:      [102.750,64.390],
		notInGame:   true,
		groupId:     "urskar_boothouse_cave"
	}],
	// ----------------- Events -------------------------
	event: [{
		coords:      [117.251,109.563],
		name:        "wild"
	}, {
		coords:      [102.345,116.860],
		name:        "farting",
		underground: true,
		entrances:   "fart_cave"
	}, {
		coords:      [117.703,113.172],
		name:        "children2"
	}, {
		coords:      [121.329,114.297],
		name:        "siren"
	}, {
		coords:      [65.079,197.359],
		name:        "hemdall"
	}, {
		coords:      [114.376,147.094],
		name:        "woe"
	}, {
		coords:      [151.078,122.609],
		name:        "hammond",
		during:      "sidequest.thread"
	}, {
		coords:      [150.391,151.672],
		name:        "yustianna",
		underground: true,
		entrances:   "yustianna_grotto"
	}],
	// ----------------- Grindstones --------------------
	grindstone: [{
		coords:      [[62.362,188.016],
		             [130.907,224.618],
		             [130.494,221.514],
		             [127.125,212.375],
		             [193.734,180.328],
		             [177.172,72.813],
		             [94.813,125.578],
		             [121.547,107.203],
		             [134.750,137.407],
		             [153.797,122.875]]
	}],
	// ----------------- Guarded Treasure ---------------
	guarded: [{
		coords:      [[72.594,166.469],
		             [114.938,66.250],
		             [81.548,38.062],
		             [66.671,183.172],
		             [135.594,212.719],
		             [114.234,125.234],
		             [156.125,139.375],
		             [136.203,128.735],
		             [134.594,168.562],
		             [107.063,106.906],
		             [142.218,121.062],
		             [79.439,148.000],
		             [87.968,140.688],
		             [197.563,106.250],
		             [200.063,130.187],
		             [205.125,133.313],
		             [207.187,139.375],
		             [202.688,150.812],
		             [172.844,217.000],
		             [199.375,122.938],
		             [80.843,177.281]]
	}, {
		coords:      [132.531,148.343],
		underground: true,
		entrances:   "blandare_grave"
	}],
	// ----------------- Gwent Players ------------------
	gwent: [{
		coords:      [[62.036,187.006],
		             [130.449,223.817],
		             [193.924,180.892],
		             [175.506,71.787],
		             [119.002,108.001],
		             [149.728,126.423]],
		extraLabel:  "innkeep.label"
	}, {
		coords:      [[62.378,187.728],
		             [130.831,225.001],
		             [193.960,179.167],
		             [177.054,72.420],
		             [95.533,125.153],
		             [121.467,106.854],
		             [102.630,141.111],
		             [154.306,123.236]],
		extraLabel:  "blacksmith.label"
	}, {
		coords:      [[130.269,222.871],
		             [63.968,188.016],
		             [175.505,73.169],
		             [92.269,118.049],
		             [123.121,130.783],
		             [103.160,142.236],
		             [129.145,150.236],
		             [150.484,126.047],
		             [129.641,131.875]],
		extraLabel:  "shopkeeper.label"
	}, {
		coords:      [[130.488,222.236],
		             [192.424,180.048],
		             [94.733,125.273],
		             [154.195,123.548]],
		extraLabel:  "armorer.label"
	}, {
		coords:      [123.496,129.377],
		extraLabel:  "blacksmith.label",
		rescueFrom:  "blacksmith_pid"
	}, {
		coords:      [147.728,127.533],
		extraLabel:  "herbalist.label"
	}, {
		coords:      [121.516,147.000],
		extraLabel:  "herbalist.label",
		rescueFrom:  "herbalist_pid"
	}],
	// ----------------- Gwent Quests -------------------
	gwentquest: [{
		coords:      [136.125,165.313],
		name:        "ermion",
		quest:       "sidequest.gw_skellige",
		after:       "mainquest.echoes"
	}, {
		coords:      [137.703,164.500],
		name:        "gremist",
		extraDesc:   "gwentquest.afterPlayer",
		quest:       "sidequest.gw_skellige",
		afterQuest:  "sidequest.gw_skellige",
		afterPlayer: "ermion",
		after:       "sidequest.practicum"
	}, {
		coords:      [151.625,122.640],
		name:        "crach",
		extraDesc:   "gwentquest.afterPlayer",
		quest:       "sidequest.gw_skellige",
		afterQuest:  "sidequest.gw_skellige",
		afterPlayer: "ermion",
		after:       "mainquest.king"
	}, {
		coords:      [149.391,127.859],
		name:        "sjusta",
		extraDesc:   "gwentquest.afterPlayer",
		quest:       "sidequest.gw_skellige",
		afterQuest:  "sidequest.gw_skellige",
		afterPlayer: "crach"
	}, {
		coords:      [94.437,124.235],
		name:        "lugos",
		extraDesc:   "gwentquest.afterPlayer",
		quest:       "sidequest.gw_skellige",
		afterQuest:  "sidequest.gw_skellige",
		afterPlayer: "gremist",
		after:       "mainquest.king"
	}],
	// ----------------- Harbors ------------------------
	harbor: [{
		coords:      [[147.672,123.203],
		             [160.063,135.641],
		             [130.843,131.594],
		             [122.281,105.391],
		             [134.875,98.391],
		             [109.735,76.110],
		             [117.453,69.297],
		             [92.187,114.875],
		             [65.063,189.969],
		             [100.969,143.218],
		             [98.406,149.906],
		             [102.343,170.344],
		             [133.094,223.657],
		             [128.031,171.156],
		             [190.719,179.469],
		             [176.688,75.218],
		             [141.594,51.688],
		             [124.875,210.750]]
	}],
	// ----------------- Herbalists ---------------------
	herbalist: [{
		coords:      [[127.562,162.469],
		             [147.656,127.391]]
	}, {
		coords:      [99.344,149.360],
		extraDesc:   "misc.liberated",
		special:     true
	}, {
		coords:      [121.750,147.047],
		rescueFrom:  "herbalist_pid"
	}],
	// ----------------- Hollow Trees -------------------
	hollow: [{
		coords:      [[135.062,145.250],
		             [134.094,144.609],
		             [134.391,144.906],
		             [135.656,145.797],
		             [136.125,145.156],
		             [138.718,145.062],
		             [141.578,146.797],
		             [144.375,146.219],
		             [141.094,143.063],
		             [139.531,145.125],
		             [135.797,146.656],
		             [134.453,146.734],
		             [133.812,146.187],
		             [129.985,144.937],
		             [134.234,149.094],
		             [128.875,143.484],
		             [130.078,143.359],
		             [134.422,143.297],
		             [148.875,147.281],
		             [117.750,121.703],
		             [180.625,81.578],
		             [182.140,137.391],
		             [203.015,150.140],
		             [202.313,150.828],
		             [156.125,192.000],
		             [108.250,106.593],
		             [111.797,69.468],
		             [105.969,71.094],
		             [109.735,63.344],
		             [98.656,56.625],
		             [98.781,67.969],
		             [136.063,134.438],
		             [130.250,136.219],
		             [118.141,122.891],
		             [113.266,119.547],
		             [114.453,122.438],
		             [118.953,167.765],
		             [120.234,165.891],
		             [120.250,166.766],
		             [104.016,110.172],
		             [105.141,109.234],
		             [109.860,105.734],
		             [111.735,106.406],
		             [179.969,81.750],
		             [180.468,79.453],
		             [118.844,166.094],
		             [108.313,110.062],
		             [115.328,104.875],
		             [129.641,148.484],
		             [181.250,136.953],
		             [181.078,139.641],
		             [108.204,72.453],
		             [108.407,70.938],
		             [112.281,68.219],
		             [109.609,54.625],
		             [104.843,69.281],
		             [102.781,74.015],
		             [100.367,63.797]]
	}],
	// ----------------- Honeycombs ---------------------
	honeycomb: [{
		coords:      [[143.359,127.438],
		             [117.984,126.703],
		             [118.656,126.547],
		             [98.422,111.875],
		             [99.547,115.203],
		             [99.953,115.250],
		             [117.625,106.328],
		             [117.109,106.750]]
	}],
	// ----------------- Innkeeps -----------------------
	innkeep: [{
		coords:      [61.938,186.849],
		extraLabel:  "s:innkeep.harvikenInn.label",
		sells:       ["gwent", "food", "drinks"]
	}, {
		coords:      [130.375,223.625],
		extraLabel:  "s:innkeep.houseOfWarriors.label",
		sells:       ["food", "drinks"]
	}, {
		coords:      [193.812,180.750],
		extraLabel:  "s:innkeep.uriallaHarbourInn.label",
		sells:       ["gwent", "food", "drinks"]
	}, {
		coords:      [175.406,71.610],
		extraLabel:  "s:innkeep.svorlagInn.label",
		sells:       ["gwent", "food", "drinks"]
	}, {
		coords:      [118.906,107.859],
		extraLabel:  "s:innkeep.arinbjornInn.label",
		sells:       ["gwent", "food", "drinks"]
	}, {
		coords:      [149.656,126.281],
		extraLabel:  "s:innkeep.theNewPort.label",
		sells:       ["gwent", "food", "drinks"]
	}],
	// ----------------- Monster Dens -------------------
	monsterden: [{
		coords:      [58.155,200.406],
		groupId:     "trottheim_den"
	}, {
		coords:      [63.077,192.282],
		groupId:     "harviken_den"
	}, {
		coords:      [150.281,136.469],
		groupId:     "sunstone_cave"
	}, {
		coords:      [110.735,128.359],
		groupId:     "fornhala_den"
	}, {
		coords:      [144.563,153.250]
	}, {
		coords:      [147.781,157.875],
		groupId:     "ruins_northeast_of_gelen"
	}],
	// ----------------- Monster Nests ------------------
	monsternest: [{
		coords:      [[193.688,170.859],
		             [134.766,125.297],
		             [99.641,134.563],
		             [133.765,131.328],
		             [99.578,149.062]]
	}],
	// ----------------- Notice Boards ------------------
	notice: [{
		coords:      [[130.969,223.281],
		             [176.037,72.844],
		             [93.718,121.000],
		             [118.219,107.203],
		             [131.610,134.219],
		             [104.406,141.094],
		             [129.234,150.656],
		             [147.078,126.985]]
	}],
	// ----------------- Persons in Distress ------------
	pid: [{
		coords:      [126.578,123.344],
		id:          "blacksmith_pid"
	}, {
		coords:      [121.843,147.469],
		id:          "herbalist_pid"
	}],
	// ----------------- Places of Power ----------------
	pop: [{
		coords:      [[63.968,181.078],
		             [127.797,163.172]],
		extraLabel:  "pop.yrden.label"
	}, {
		coords:      [198.407,177.531],
		extraLabel:  "pop.quen.label"
	}, {
		coords:      [178.031,66.266],
		extraLabel:  "pop.igni.label"
	}, {
		coords:      [[101.969,117.437],
		             [133.891,126.047]],
		extraLabel:  "pop.axii.label"
	}, {
		coords:      [136.281,173.188],
		extraLabel:  "pop.aard.label"
	}, {
		coords:      [155.406,121.813],
		extraLabel:  "pop.quen.label",
		undergroung: true,
		entrances:   "trolde_passage",
		after:       "sidequest.gambit"
	}, {
		coords:      [155.125,133.719],
		extraLabel:  "pop.igni.label",
		undergroung: true,
		entrances:   "sunstone_cave",
		after:       "mainquest.sunstone"
	}],
	// ----------------- Points of Interest -------------
	poi: [{
		coords:      [167.750,194.563],
		label:       "s:poi.gship.label",
		extraDesc:   "s:poi.gship.desc"
	}, {
		coords:      [149.328,153.062],
		label:       "s:poi.poem.label",
		extraDesc:   "s:poi.poem.desc"
	}, {
		coords:      [127.066,116.266],
		label:       "s:poi.birna.label",
		extraDesc:   "s:poi.birna.desc",
		special:     true
	}, {
		coords:      [64.687,209.141],
		label:       "s:poi.dowry.label",
		extraDesc:   "s:poi.dowry.desc"
	}, {
		coords:      [[109.438,67.016],
		             [112.375,68.453],
		             [103.407,72.859],
		             [102.594,73.297]],
		label:       "s:poi.nail.label",
		extraDesc:   "s:poi.nail.desc"
	}, {
		coords:      [[107.594,65.578],
		             [106.593,65.328]],
		label:       "s:poi.twine.label",
		extraDesc:   "s:poi.twine.desc"
	}, {
		coords:      [106.969,66.359],
		label:       "s:poi.octo.label",
		extraDesc:   "s:poi.octo.desc"
	}, {
		coords:      [108.532,56.125],
		label:       "s:poi.horn.label",
		extraDesc:   "s:poi.horn.desc"
	}],
	// ----------------- Scavenger Hunts ----------------
	scavengerhunt: [{
		coords:      [63.032,193.360],
		upgrade:     "mastercrafted",
		school:      "feline",
		items:       "silverSword",
		underground: true,
		entrances:   "harviken_den"
	}, {
		coords:      [143.188,152.547],
		upgrade:     "mastercrafted",
		school:      "feline",
		items:       "steelSword"
	}, {
		coords:      [110.821,127.467],
		upgrade:     "mastercrafted",
		school:      "griffin",
		items:       "silverSword"
	}, {
		coords:      [80.241,145.884],
		upgrade:     "superior",
		school:      "griffin",
		items:       "silverSword",
		underground: true,
		entrances:   "elverum_lighthouse_cave"
	}, {
		coords:      [120.812,141.656],
		upgrade:     "mastercrafted",
		school:      "griffin",
		items:       "steelSword"
	}, {
		coords:      [198.412,174.756],
		upgrade:     "superior",
		school:      "griffin",
		items:       "steelSword"
	}, {
		coords:      [103.126,166.047],
		upgrade:     "enhanced",
		school:      "ursine",
		items:       "armor",
		underground: true,
		entrances:   "grotto"
	}, {
		coords:      [101.898,116.907],
		upgrade:     "enhanced",
		school:      "ursine",
		items:       "boots",
		underground: true,
		entrances:   "fart_cave"
	}, {
		coords:      [164.866,64.178],
		upgrade:     "#",
		school:      "ursine",
		items:       "crossbow",
		underground: true,
		entrances:   "old_watchtower_cave"
	}, {
		coords:      [151.094,143.516],
		upgrade:     "enhanced",
		school:      "ursine",
		items:       "gauntlets"
	}, {
		coords:      [155.917,139.911],
		upgrade:     "basic",
		school:      "ursine",
		items:       "silverSword"
	}, {
		coords:      [147.250,155.969],
		upgrade:     "enhanced",
		school:      "ursine",
		items:       "silverSword",
		underground: true,
		entrances:   "ruins_northeast_of_gelen"
	}, {
		coords:      [100.641,150.187],
		upgrade:     "basic",
		school:      "ursine",
		items:       "steelSword"
	}, {
		coords:      [143.766,80.797],
		upgrade:     "enhanced",
		school:      "ursine",
		items:       "steelSword"
	}, {
		coords:      [115.142,79.000],
		upgrade:     "enhanced",
		school:      "ursine",
		items:       "trousers"
	}, {
		coords:      [99.437,135.125],
		upgrade:     "superior",
		school:      "wolven",
		items:       "armor"
	}, {
		coords:      [101.047,75.281],
		upgrade:     "mastercrafted",
		school:      "wolven",
		items:       "boots"
	}, {
		coords:      [123.250,136.422],
		upgrade:     "mastercrafted",
		school:      "wolven",
		items:       "gauntlets"
	}, {
		coords:      [114.953,111.156],
		upgrade:     "superior",
		school:      "wolven",
		items:       "silverSword",
		underground: true,
		entrances:   "arinbjorn_grave"
	}, {
		coords:      [131.469,204.547],
		upgrade:     "superior",
		school:      "wolven",
		items:       "steelSword"
	}, {
		coords:      [168.531,66.062],
		upgrade:     "mastercrafted",
		school:      "wolven",
		items:       "trousers"
	}, {
		coords:      [60.079,200.390],
		upgrade:     "mastercrafted",
		school:      "feline",
		items:       ["armor", "boots", "gauntlets", "trousers"],
		underground: true,
		entrances:   "trottheim_den"
	}, {
		coords:      [135.956,174.044],
		upgrade:     "mastercrafted",
		school:      "griffin",
		items:       ["armor", "boots", "gauntlets", "trousers"]
	}, {
		coords:      [158.109,161.766],
		upgrade:     "superior",
		school:      "griffin",
		items:       ["armor", "boots", "gauntlets", "trousers"]
	}, {
		coords:      [197.829,179.406],
		upgrade:     "basic",
		school:      "ursine",
		items:       ["armor", "boots", "gauntlets", "trousers"],
		underground: true,
		entrances:   "yngvars_fang_ruins"
	}],
	// ----------------- Shopkeepers --------------------
	shopkeeper: [{
		coords:      [[130.187,222.750],
		             [129.703,132.063],
		             [175.422,73.062],
		             [63.890,187.844],
		             [103.032,142.094]],
		sells:       ["crafting", "fish"]
	}, {
		coords:      [92.171,117.906],
		sells:       ["maps", "crafting", "fish", "s:mastercraftedSaddle"]
	}, {
		coords:      [[123.031,130.640],
		             [141.547,129.188],
		             [150.516,125.844],
		             [146.609,123.265],
		             [114.609,117.344],
		             [127.391,212.562]],
		sells:       ["maps", "crafting"]
	}, {
		coords:      [135.312,137.407],
		sells:       ["armor", "crafting"],
		extraDesc:   "misc.liberated",
		special:     true
	}, {
		coords:      [129.062,150.094],
		sells:       ["maps", "crafting", "food", "drinks"]
	}, {
		coords:      [149.580,127.767],
		extraLabel:  "s:shopkeeper.sjusta.label",
		sells:       ["clothes", "crafting"],
		extraDesc:   "s:shopkeeper.barber.desc"
	}],
	// ----------------- Sidequests ---------------------
	sidequest: [{
		coords:      [117.532,158.015],
		name:        "beloved"
	}, {
		coords:      [133.141,104.313],
		name:        "horn"
	}, {
		coords:      [93.655,121.219],
		name:        "horn"
	}, {
		coords:      [130.891,224.218],
		name:        "passenger",
		after:       "mainquest.storm",
		before:      "mainquest.family"
	}, {
		coords:      [134.016,157.968],
		name:        "sawmill"
	}, {
		coords:      [149.672,126.704],
		name:        "unpaid",
		after:       ["sidequest.stranger",
		              "sidequest.dreams"],
		before:      "sidequest.gambit"
	}, {
		coords:      [127.173,137.844],
		name:        "assault"
	}, {
		coords:      [114.844,134.922],
		name:        "brave"
	}, {
		coords:      [153.000,122.859],
		name:        "coronation",
		after:       "sidequest.gambit",
		before:      "mainquest.mists"
	}, {
		coords:      [161.218,141.032],
		name:        "punishment1"
	}, {
		coords:      [147.954,138.188],
		name:        "punishment2"
	}, {
		coords:      [160.953,161.000],
		name:        "keepers"
	}, {
		coords:      [61.562,200.390],
		name:        "flesh",
		before:      "sidequest.thread"
	}, {
		coords:      [130.110,218.968],
		name:        "glory"
	}, {
		coords:      [178.546,137.407],
		name:        "spirit"
	}, {
		coords:      [126.922,182.719],
		name:        "fromfar1"
	}, {
		coords:      [135.813,145.938],
		name:        "hardtimes"
	}, {
		coords:      [130.969,223.484],
		name:        "clothing"
	}, {
		coords:      [63.268,192.875],
		name:        "maiden"
	}, {
		coords:      [153.546,122.469],
		name:        "gambit",
		after:       ["sidequest.possession",
		              "sidequest.undvik"],
		before:      "mainquest.mists"
	}, {
		coords:      [175.219,80.844],
		name:        "arena"
	}, {
		coords:      [142.126,132.438],
		name:        "disturbed"
	}, {
		coords:      [173.515,71.954],
		name:        "possession",
		after:       "mainquest.king",
		before:      "mainquest.bpreparations"
	}, {
		coords:      [137.641,164.046],
		name:        "practicum"
	}, {
		coords:      [136.141,162.968],
		name:        "therapy"
	}, {
		coords:      [94.985,126.172],
		name:        "stranger",
		after:       "contract.eldberg"
	}, {
		coords:      [115.766,169.718],
		name:        "taken1"
	}, {
		coords:      [137.328,218.015],
		name:        "taken2"
	}, {
		coords:      [81.657,135.876],
		name:        "dreams",
		after:       "mainquest.king",
		before:      "sidequest.gambit"
	}, {
		coords:      [137.953,143.313],
		name:        "blade"
	}, {
		coords:      [130.422,223.250],
		name:        "last",
		after:       "mainquest.storm",
		before:      "mainquest.baby"
	}, {
		coords:      [103.250,72.375],
		name:        "undvik",
		after:       "mainquest.king"
	}, {
		coords:      [[127.751,136.000],
		             [131.641,134.532]],
		name:        "nithing"
	}, {
		coords:      [[193.718,179.671],
		             [196.500,185.234]],
		name:        "warriors",
		after:       "sidequest.nowheres"
	}, {
		coords:      [63.720,187.687],
		name:        "price"
	}, {
		coords:      [129.063,148.703],
		name:        "grossbart"
	}, {
		coords:      [193.624,179.328],
		name:        "nowheres"
	}, {
		coords:      [146.782,124.094],
		name:        "worthy1"
	}, {
		coords:      [141.313,128.797],
		name:        "worthy2"
	}, {
		coords:      [104.016,140.953],
		name:        "worthy3"
	}, {
		coords:      [125.438,132.438],
		name:        "ps_fayrlund"
	}, {
		coords:      [130.626,220.843],
		name:        "ps_goddess",
		after:       ["sidequest.ps_fayrlund",
		              "sidequest.ps_fyresdal",
		              "sidequest.ps_trolde"]
	}, {
		coords:      [120.032,149.063],
		name:        "ps_fyresdal"
	}, {
		coords:      [131.500,133.688],
		name:        "ps_trolde"
	}, {
		coords:      [147.094,127.531],
		name:        "gw_skellige"
	}, {
		coords:      [175.203,81.063],
		name:        "ff_champion",
		after:       ["sidequest.ff_novigrad",
		              "sidequest.ff_velen",
		              "sidequest.ff_skellige"]
	}, {
		coords:      [[147.094,127.266],
		             [149.063,126.812],
		             [118.546,105.813]],
		name:        "ff_skellige"
	}],
	// ----------------- Sign Posts ---------------------
	signpost: [{
		coords:      [61.921,201.656],
		name:        "s:trottheim"
	}, {
		coords:      [62.843,187.218],
		name:        "s:harviken"
	}, {
		coords:      [129.594,222.593],
		name:        "s:larvik"
	}, {
		coords:      [136.844,213.281],
		name:        "s:freyasGarden"
	}, {
		coords:      [133.266,210.000],
		name:        "s:lofoten"
	}, {
		coords:      [129.813,210.578],
		name:        "s:lofotenCemetery"
	}, {
		coords:      [126.687,212.547],
		name:        "s:isolatedHut"
	}, {
		coords:      [123.938,217.141],
		name:        "s:lurthen"
	}, {
		coords:      [196.468,184.875],
		name:        "s:trailToYngvarsFang"
	}, {
		coords:      [198.563,177.156],
		name:        "s:yngvarsFang"
	}, {
		coords:      [193.281,179.281],
		name:        "s:uriallaHarbor"
	}, {
		coords:      [191.485,171.563],
		name:        "s:bayOfWinds"
	}, {
		coords:      [177.078,81.266],
		name:        "s:hov"
	}, {
		coords:      [176.359,71.641],
		name:        "s:svorlag"
	}, {
		coords:      [168.266,65.594],
		name:        "s:oldWatchtower"
	}, {
		coords:      [140.437,52.813],
		name:        "s:thePaliGapCoast"
	}, {
		coords:      [145.906,84.500],
		name:        "s:kaerAlmhult"
	}, {
		coords:      [108.031,73.500],
		name:        "s:marlinCoast"
	}, {
		coords:      [99.766,81.672],
		name:        "s:gullPoint"
	}, {
		coords:      [103.235,71.265],
		name:        "s:dorveRuins"
	}, {
		coords:      [96.360,65.562],
		name:        "s:clanTordarrochForge"
	}, {
		coords:      [100.610,61.313],
		name:        "s:urskar"
	}, {
		coords:      [105.218,55.875],
		name:        "s:abandonedVillage"
	}, {
		coords:      [117.938,53.000],
		name:        "s:torGvalchca"
	}, {
		coords:      [79.797,147.688],
		name:        "s:elverumLighthouse"
	}, {
		coords:      [99.828,149.687],
		name:        "s:ruinedInn"
	}, {
		coords:      [104.967,141.313],
		name:        "s:fyresdal"
	}, {
		coords:      [93.734,124.625],
		name:        "s:kaerMuire"
	}, {
		coords:      [91.391,118.344],
		name:        "s:holmsteinsPort"
	}, {
		coords:      [106.078,108.797],
		name:        "s:wildShore"
	}, {
		coords:      [109.750,121.468],
		name:        "s:fornhala"
	}, {
		coords:      [105.265,161.219],
		name:        "s:distillery"
	}, {
		coords:      [102.641,168.406],
		name:        "s:grotto"
	}, {
		coords:      [113.891,147.156],
		name:        "s:palisade"
	}, {
		coords:      [117.906,106.719],
		name:        "s:arinbjorn"
	}, {
		coords:      [120.719,117.938],
		name:        "s:sund"
	}, {
		coords:      [124.218,129.734],
		name:        "s:fayrlund"
	}, {
		coords:      [119.687,139.281],
		name:        "s:boxholm"
	}, {
		coords:      [130.187,133.562],
		name:        "s:rannvaig"
	}, {
		coords:      [128.937,149.000],
		name:        "s:blandare"
	}, {
		coords:      [127.906,162.281],
		name:        "s:druidsCamp"
	}, {
		coords:      [128.844,170.031],
		name:        "s:redgill"
	}, {
		coords:      [133.125,157.000],
		name:        "s:abandonedSawmill"
	}, {
		coords:      [136.047,164.953],
		name:        "s:gedyneith"
	}, {
		coords:      [142.328,169.344],
		name:        "s:whaleGraveyard"
	}, {
		coords:      [136.719,130.625],
		name:        "s:crossroads"
	}, {
		coords:      [140.219,145.313],
		name:        "s:minersCamp"
	}, {
		coords:      [141.562,101.562],
		name:        "s:eldbergLighthouse"
	}, {
		coords:      [143.031,153.156],
		name:        "s:kaerGelen"
	}, {
		coords:      [146.962,125.250],
		name:        "s:KaerTroldeHarbor"
	}, {
		coords:      [153.875,124.516],
		name:        "s:bridgeToKaerTrolde"
	}, {
		coords:      [145.938,139.078],
		name:        "s:rogne"
	}, {
		coords:      [151.016,150.609],
		name:        "s:yustiannasGrotto"
	}, {
		coords:      [153.938,162.687],
		name:        "s:giantsToes"
	}, {
		coords:      [159.109,136.328],
		name:        "s:ancientCrypt"
	}],
	// ----------------- Smugglers' Caches --------------
	smugglers: [{
		coords:      [[131.469,116.375],
		             [135.125,110.875],
		             [138.875,117.188],
		             [144.719,114.906],
		             [149.156,108.406],
		             [155.000,111.344],
		             [160.844,111.563],
		             [157.625,103.344],
		             [152.375,86.687],
		             [138.718,93.500],
		             [134.156,94.563],
		             [136.281,77.000],
		             [140.031,65.250],
		             [152.782,66.687],
		             [160.906,80.000],
		             [168.000,100.125],
		             [180.187,130.406],
		             [173.625,128.031],
		             [164.062,126.906],
		             [164.875,134.344],
		             [170.188,144.219],
		             [163.187,149.468],
		             [176.063,158.281],
		             [181.062,186.000],
		             [179.937,182.687],
		             [181.000,176.125],
		             [167.750,186.625],
		             [146.750,172.188],
		             [153.656,171.688],
		             [147.406,179.625],
		             [153.531,178.875],
		             [144.407,185.719],
		             [144.063,194.656],
		             [144.063,202.406],
		             [132.687,194.687],
		             [102.812,208.750],
		             [97.250,180.750],
		             [95.344,169.969],
		             [88.031,154.219],
		             [84.219,158.156],
		             [62.437,161.687],
		             [65.593,136.250],
		             [62.375,118.532],
		             [57.188,65.437],
		             [71.875,95.563],
		             [79.999,112.188],
		             [87.312,92.875],
		             [101.937,96.312],
		             [119.907,97.656],
		             [119.344,86.219],
		             [123.532,82.750],
		             [124.078,93.656],
		             [197.624,164.124],
		             [197.438,112.625],
		             [180.187,107.906],
		             [171.094,212.063],
		             [207.376,87.812],
		             [195.563,136.000],
		             [200.313,145.687]]
	}, {
		coords:      [168.625,175.563],
		notInGame:   true
	}],
	// ----------------- Spoils of War ------------------
	spoils: [{
		coords:      [[62.000,107.063],
		             [140.156,49.594],
		             [136.813,39.312],
		             [174.094,106.563],
		             [167.594,118.375],
		             [202.749,131.688],
		             [82.531,170.031],
		             [110.031,182.969]]
	}],
	// ----------------- Treasure -----------------------
	treasure: [{
		coords:      [[62.718,177.407],
		             [113.250,54.313],
		             [133.625,128.094],
		             [134.781,126.062],
		             [143.250,120.469],
		             [137.781,143.657],
		             [149.562,153.125],
		             [63.780,68.000],
		             [135.265,127.344],
		             [135.813,125.297],
		             [138.703,122.187],
		             [58.452,208.188],
		             [150.297,164.782],
		             [179.890,81.953],
		             [180.265,82.031],
		             [186.750,71.250],
		             [199.219,118.891],
		             [200.500,110.938],
		             [196.531,112.390],
		             [195.609,101.062],
		             [200.156,99.781],
		             [195.969,94.500],
		             [180.360,138.015],
		             [154.750,192.188],
		             [191.500,198.687],
		             [151.594,85.719],
		             [117.688,73.625],
		             [64.218,103.750],
		             [100.202,160.469],
		             [105.281,72.375],
		             [107.188,68.250],
		             [58.391,191.890],
		             [141.656,128.984],
		             [145.203,120.531],
		             [134.250,141.344],
		             [140.797,144.782],
		             [127.562,151.953],
		             [122.719,136.578],
		             [122.437,137.750],
		             [123.063,137.985],
		             [122.750,137.953],
		             [123.875,137.188],
		             [121.812,138.703],
		             [121.812,138.703],
		             [120.187,141.719],
		             [120.703,141.109],
		             [112.094,143.375],
		             [109.890,120.890],
		             [109.563,122.109],
		             [109.218,121.000],
		             [106.578,119.422],
		             [77.251,153.641],
		             [76.267,156.031],
		             [79.376,143.672],
		             [86.406,127.844],
		             [86.968,127.844],
		             [87.657,122.750],
		             [89.829,119.094],
		             [92.062,121.625],
		             [96.266,125.594],
		             [95.609,125.750],
		             [92.844,124.516],
		             [95.734,112.641],
		             [112.750,108.953],
		             [114.734,105.734],
		             [121.219,217.422],
		             [118.812,219.718],
		             [125.171,222.281],
		             [197.141,179.110],
		             [197.610,179.000],
		             [197.626,179.734],
		             [186.297,69.860],
		             [186.203,68.453],
		             [186.000,71.922],
		             [198.875,144.844],
		             [194.969,111.594],
		             [197.829,98.359],
		             [198.782,100.672],
		             [199.859,98.047],
		             [196.219,100.844],
		             [195.687,95.453],
		             [197.485,93.860],
		             [197.438,94.938],
		             [197.141,91.203],
		             [197.859,90.906],
		             [199.296,90.359],
		             [197.156,87.563],
		             [197.000,88.282],
		             [196.187,89.188],
		             [196.563,89.875],
		             [144.047,153.609],
		             [98.328,139.250],
		             [94.735,124.000],
		             [135.328,98.672],
		             [198.281,177.219],
		             [196.875,174.109],
		             [176.094,108.172],
		             [149.531,83.844],
		             [68.999,54.563],
		             [99.719,192.437],
		             [88.219,38.438],
		             [88.281,39.469],
		             [104.094,46.438],
		             [111.516,71.391],
		             [112.813,69.594],
		             [113.938,71.594],
		             [113.766,69.547],
		             [114.500,69.468],
		             [114.250,67.890],
		             [113.906,68.578],
		             [113.328,70.250],
		             [112.531,69.203],
		             [114.703,67.391],
		             [111.516,68.813],
		             [110.594,68.000],
		             [106.047,69.797],
		             [107.188,67.000],
		             [106.719,66.766],
		             [106.219,66.313],
		             [106.297,65.078],
		             [109.906,68.063],
		             [102.297,62.797],
		             [197.110,109.250],
		             [102.578,68.516]]
	}, {
		coords:      [153.203,153.047],
		extraDesc:   "s:treasure.solution.desc"
	}, {
		coords:      [95.843,66.062],
		extraDesc:   "s:treasure.toodeep.desc",
		special:     true
	}, {
		coords:      [62.969,192.562],
		underground: true,
		entrances:   "harviken_den"
	}, {
		coords:      [134.500,101.953],
		underground: true,
		entrances:   "pearls_cave"
	}, {
		coords:      [[128.015,218.547],
		             [129.297,218.156]],
		underground: true,
		entrances:   "fame_cave"
	}, {
		coords:      [84.454,133.407],
		underground: true,
		entrances:   "shroom_cave"
	}, {
		coords:      [101.484,118.985],
		underground: true,
		entrances:   "fart_cave"
	}, {
		coords:      [[104.453,168.641],
		             [104.688,166.219],
		             [102.750,167.187]],
		underground: true,
		entrances:   "grotto"
	}, {
		coords:      [119.766,139.797],
		underground: true,
		entrances:   "boxholm_ruins"
	}, {
		coords:      [60.719,201.375],
		underground: true,
		entrances:   "trottheim_den"
	}, {
		coords:      [[149.922,152.844],
		             [149.109,152.406],
		             [148.703,151.531],
		             [149.906,151.063]],
		underground: true,
		entrances:   "yustianna_grotto"
	}, {
		coords:      [[114.328,128.828],
		             [113.281,129.938]],
		underground: true,
		entrances:   "fornhala_den"
	}, {
		coords:      [102.656,63.937],
		underground: true,
		entrances:   "urskar_boothouse_cave"
	}, {
		coords:      [[149.875,137.156],
		             [154.453,134.359],
		             [154.235,134.000],
		             [154.734,133.625],
		             [158.094,134.656],
		             [153.922,135.750],
		             [153.734,133.578],
		             [150.250,133.594],
		             [149.688,131.969],
		             [149.172,135.718],
		             [150.375,135.422],
		             [150.719,135.688],
		             [149.375,136.625]],
		underground: true,
		entrances:   "sunstone_cave"
	}, {
		coords:      [144.750,132.500],
		underground: true,
		entrances:   "disturbed_crypt"
	}, {
		coords:      [194.015,175.516],
		underground: true,
		entrances:   "slide_trophy_cave"
	}, {
		coords:      [[93.655,58.625],
		             [94.656,63.500],
		             [95.485,62.812],
		             [96.750,61.860],
		             [95.155,61.922],
		             [95.329,60.953],
		             [96.281,60.235],
		             [93.171,62.969],
		             [96.297,63.172],
		             [95.125,64.250]],
		underground: true,
		entrances:   "urskar_tordarroch_cave"
	}, {
		coords:      [[146.907,221.844],
		             [147.469,221.468],
		             [150.469,125.015],
		             [149.844,124.906],
		             [63.764,176.937],
		             [144.281,167.906],
		             [156.906,163.734],
		             [157.719,164.343],
		             [197.438,90.313],
		             [191.312,197.188],
		             [157.125,192.031],
		             [134.656,224.937],
		             [119.562,219.812],
		             [119.891,220.359],
		             [129.250,101.656],
		             [125.547,112.063],
		             [98.203,155.359],
		             [99.156,160.469],
		             [133.938,125.500],
		             [121.578,130.516],
		             [111.703,142.593],
		             [116.797,139.578],
		             [98.500,155.344],
		             [143.547,170.266],
		             [146.687,166.438],
		             [148.219,165.344],
		             [151.344,164.656],
		             [152.782,164.000],
		             [157.937,164.562],
		             [77.344,152.735],
		             [137.797,207.359],
		             [189.312,170.906],
		             [202.532,148.094],
		             [195.468,111.234],
		             [196.734,98.125],
		             [110.062,72.813],
		             [120.187,59.359],
		             [108.512,74.340]],
		underwater:  true
	}, {
		coords:      [151.812,210.500],
		underwater:  true,
		during:      "sidequest.last"
	}, {
		coords:      [138.640,229.750],
		underwater:  true,
		underground: true,
		entrances:   "",
		during:      "sidequest.last"
	}, {
		coords:      [103.531,167.312],
		underwater:  true,
		underground: true,
		entrances:   "grotto"
	}, {
		coords:      [[194.797,176.531],
		             [192.265,175.797]],
		underwater:  true,
		underground: true,
		entrances:   "slide_trophy_cave"
	}, {
		coords:      [[94.313,62.031],
		             [92.875,62.094],
		             [96.093,59.078],
		             [91.203,63.781]],
		underwater:  true,
		underground: true,
		entrances:   "urskar_tordarroch_cave"
	}],
	// ----------------- Treasure Hunts -----------------
	treasurehunt: [{
		coords:      [[103.312,45.281],
		             [60.062,122.156],
		             [211.188,89.313]],
		name:        "hidden"
	}, {
		coords:      [[171.969,83.750],
		             [143.375,81.813],
		             [127.719,115.906],
		             [76.313,155.781],
		             [136.156,173.687],
		             [154.906,96.375],
		             [175.656,105.375],
		             [193.593,146.656]],
		name:        "guarded"
	}, {
		coords:      [153.437,136.562],
		name:        "hidden",
		underground: true,
		entrances:   "sunstone_cave",
		after:       "mainquest.sunstone"
	}, {
		coords:      [189.859,185.125],
		name:        "nilf"
	}, {
		coords:      [115.000,56.828],
		name:        "precious"
	}, {
		coords:      [120.890,139.141],
		name:        "inheritance"
	}, {
		coords:      [122.886,153.860],
		name:        "marks"
	}, {
		coords:      [181.968,136.688],
		name:        "unlucky"
	}, {
		coords:      [89.500,181.437],
		name:        "ironsides"
	}, {
		coords:      [171.375,77.875],
		name:        "dare"
	}, {
		coords:      [103.797,65.797],
		name:        "shortcut"
	}, {
		coords:      [58.577,182.547],
		name:        "depths"
	}, {
		coords:      [124.250,152.188],
		name:        "praised"
	}, {
		coords:      [99.985,149.344],
		name:        "fortune"
	}, {
		coords:      [134.312,102.344],
		name:        "pearls"
	}, {
		coords:      [103.454,71.829],
		name:        "ruins"
	}, {
		coords:      [153.953,123.641],
		name:        "scav_bear1"
	}, {
		coords:      [153.953,123.783],
		name:        "scav_bear2"
	}, {
		coords:      [153.953,123.925],
		name:        "scav_bear3"
	}, {
		coords:      [153.953,124.068],
		name:        "scav_bear4"
	}, {
		coords:      [153.953,124.210],
		name:        "scav_wolf3"
	}, {
		coords:      [153.953,124.352],
		name:        "scav_wolf6"
	}]
}; };

registerMap({
	name:        "skellige",
	ns:          "s",
	bounds:      [{ lat: 0, lng: 0 }, { lat: 256, lng: 256 }],
	initialPos:  [128, 128],
	minZoom:     2,
	maxZoom:     8,
	nativeZoom:  6,
	initialZoom: 2,
	getMapData:  getMapData
}); }
