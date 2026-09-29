{ let getMapData = function() { return {
	// ----------------- Abandoned Sites ----------------
	abandoned: [{
		coords:      [[126.938,212.594],
		             [124.281,217.484],
		             [134.359,137.641],
		             [115.312,116.500],
		             [99.438,149.766]]
	}],
	// ----------------- Alchemy Supplies ---------------
	alchemy: [{
		coords:      [136.875,218.109]
	}, {
		coords:      [130.828,133.157],
		weakBefore:  "sidequest.nithing"
	}, {
		coords:      [137.453,164.062],
		extraLabel:  "s:alchemy.gremist.label",
		after:       "sidequest.practicum"
	}],
	// ----------------- Armorers -----------------------
	armorer: [{
		coords:      [[130.156,221.844],
		             [192.109,179.656]],
		extraLabel:  "craftlevel.amateur"
	}, {
		coords:      [[94.406,124.938],
		             [153.859,123.156]],
		extraLabel:  "craftlevel.journeyman"
	}],
	// ----------------- Armorer's Tables ---------------
	armorerstable: [{
		coords:      [[130.437,224.953],
		             [130.328,221.483],
		             [127.031,212.032],
		             [193.203,179.860],
		             [177.110,72.500],
		             [94.965,125.172],
		             [121.170,106.860],
		             [153.760,122.597],
		             [130.172,222.203]]
	}],
	// ----------------- Bandit Camps -------------------
	banditcamp: [{
		coords:      [[166.875,179.375],
		             [167.687,65.672],
		             [129.812,139.031],
		             [96.265,115.719],
		             [141.281,171.562],
		             [155.750,162.813]]
	}, {
		coords:      [196.313,114.937],
		notInGame:   true
	}],
	// ----------------- Barbers ------------------------
	barber: [{
		coords:      [175.016,72.125]
	}, {
		coords:      [149.188,127.375],
		extraLabel:  "s:shopkeeper.sjusta.label"
	}],
	// ----------------- Blacksmiths --------------------
	blacksmith: [{
		coords:      [[61.998,187.407],
		             [130.500,224.609],
		             [193.643,178.781],
		             [176.719,72.312],
		             [121.125,106.490],
		             [102.250,140.719],
		             [153.985,122.844]],
		extraLabel:  "craftlevel.amateur"
	}, {
		coords:      [95.147,124.797],
		extraLabel:  "craftlevel.journeyman"
	}, {
		coords:      [123.157,128.984],
		extraLabel:  "craftlevel.amateur",
		rescueFrom:  "blacksmith_pid"
	}, {
		coords:      [108.157,73.688],
		extraLabel:  "craftlevel.amateur",
		after:       "mainquest.bpreparations"
	}],
	// ----------------- Boats --------------------------
	boat: [{
		coords:      [[109.157,74.250],
		             [57.689,201.250],
		             [128.469,209.406],
		             [132.376,222.156],
		             [179.375,139.875],
		             [190.500,172.062],
		             [191.093,178.281],
		             [191.250,179.125],
		             [145.735,84.876],
		             [183.281,71.407],
		             [90.750,116.610],
		             [124.266,108.079],
		             [135.172,98.109],
		             [102.000,142.063],
		             [98.798,149.969],
		             [115.297,170.343],
		             [143.610,170.422],
		             [129.704,131.188],
		             [159.390,135.579],
		             [151.094,125.282],
		             [147.078,122.719],
		             [146.750,122.750],
		             [128.595,171.750],
		             [160.968,160.187],
		             [140.813,212.562],
		             [174.719,73.750],
		             [121.906,105.312],
		             [141.312,52.375],
		             [62.281,200.906]]
	}, {
		coords:      [117.282,53.625],
		after:       "mainquest.mists"
	}, {
		coords:      [149.000,210.093],
		after:       "sidequest.last"
	}],
	// ----------------- Contracts ----------------------
	contract: [{
		coords:      [104.141,141.094],
		name:        "dragon"
	}, {
		coords:      [175.797,72.844],
		name:        "groom"
	}, {
		coords:      [128.985,150.625],
		name:        "miners"
	}, {
		coords:      [130.157,132.953],
		name:        "missing"
	}, {
		coords:      [147.110,125.407],
		name:        "muire"
	}, {
		coords:      [103.578,141.266],
		name:        "wanted"
	}, {
		coords:      [129.829,221.578],
		name:        "beast"
	}, {
		coords:      [117.954,107.203],
		name:        "eldberg"
	}, {
		coords:      [121.641,129.047],
		name:        "heart"
	}],
	// ----------------- Entrances ----------------------
	entrance: [{
		coords:      [[58.327,182.672],
		             [62.452,183.172],
		             [139.453,216.625],
		             [138.172,214.343],
		             [133.219,217.719],
		             [130.969,215.687],
		             [108.625,56.093],
		             [95.954,64.797],
		             [138.438,124.156],
		             [105.239,160.969],
		             [113.641,164.172],
		             [116.765,156.266],
		             [142.500,142.031],
		             [135.687,161.625],
		             [135.578,162.547],
		             [135.860,163.703],
		             [127.375,226.437],
		             [128.656,226.266],
		             [138.875,216.234],
		             [96.531,58.937],
		             [108.625,53.250],
		             [111.438,56.187],
		             [112.719,55.031],
		             [114.093,54.250]]
	}, {
		coords:      [[135.938,165.328],
		             [189.781,174.469],
		             [130.984,147.969],
		             [93.968,58.750],
		             [96.875,64.203],
		             [96.968,63.703]],
		notInGame:   true
	}, {
		coords:      [138.125,229.031],
		underwater:  true,
		during:      "sidequest.last"
	}, {
		coords:      [129.406,218.688],
		groupId:     "fame_cave"
	}, {
		coords:      [193.281,175.422],
		groupId:     "slide_trophy_cave"
	}, {
		coords:      [[164.188,63.828],
		             [164.719,66.313]],
		groupId:     "old_watchtower_cave"
	}, {
		coords:      [140.500,52.875],
		after:       "mainquest.elderblood"
	}, {
		coords:      [96.954,61.172],
		groupId:     "urskar_tordarroch_cave"
	}, {
		coords:      [102.266,63.328],
		groupId:     "urskar_boothouse_cave"
	}, {
		coords:      [99.344,72.594],
		after:       "sidequest.undvik"
	}, {
		coords:      [[78.640,145.688],
		             [81.547,145.703]],
		groupId:     "elverum_lighthouse_cave"
	}, {
		coords:      [81.172,134.750],
		groupId:     "shroom_cave"
	}, {
		coords:      [107.859,121.547],
		after:       "sidequest.gambit",
		before:      "mainquest.mists"
	}, {
		coords:      [115.109,130.235],
		groupId:     "fornhala_den"
	}, {
		coords:      [134.688,103.407],
		groupId:     "pearls_cave"
	}, {
		coords:      [102.437,168.375],
		groupId:     "grotto"
	}, {
		coords:      [142.250,132.125],
		groupId:     "disturbed_crypt"
	}, {
		coords:      [137.187,164.156],
		after:       "sidequest.practicum"
	}, {
		coords:      [150.469,150.968],
		groupId:     "yustianna_grotto"
	}, {
		coords:      [158.844,135.986],
		after:       "mainquest.sunstone",
		groupId:     "sunstone_cave"
	}, {
		coords:      [145.203,131.781],
		notInGame:   true,
		groupId:     "disturbed_crypt"
	}, {
		coords:      [196.218,176.125],
		notInGame:   true,
		groupId:     "slide_trophy_cave"
	}, {
		coords:      [132.906,148.140],
		notInGame:   true,
		groupId:     "blandare_grave"
	}, {
		coords:      [102.156,116.328],
		notInGame:   true,
		groupId:     "fart_cave"
	}, {
		coords:      [114.265,110.500],
		notInGame:   true,
		groupId:     "arinbjorn_grave"
	}, {
		coords:      [153.891,121.656],
		notInGame:   true,
		after:       "sidequest.gambit",
		groupId:     "trolde_passage"
	}, {
		coords:      [[96.312,64.672],
		             [97.657,62.516]],
		notInGame:   true,
		groupId:     "urskar_tordarroch_cave"
	}, {
		coords:      [106.609,145.125],
		notInGame:   true,
		during:      "contract.wanted"
	}, {
		coords:      [104.531,148.312],
		after:       "contract.wanted"
	}, {
		coords:      [121.766,137.391],
		notInGame:   true,
		groupId:     "boxholm_ruins"
	}, {
		coords:      [197.312,179.128],
		notInGame:   true,
		groupId:     "yngvars_fang_ruins"
	}, {
		coords:      [102.500,64.140],
		notInGame:   true,
		groupId:     "urskar_boothouse_cave"
	}],
	// ----------------- Events -------------------------
	event: [{
		coords:      [117.001,109.313],
		name:        "wild"
	}, {
		coords:      [102.095,116.610],
		name:        "farting",
		underground: true,
		entrances:   "fart_cave"
	}, {
		coords:      [117.453,112.922],
		name:        "children2"
	}, {
		coords:      [121.079,114.047],
		name:        "siren"
	}, {
		coords:      [64.829,197.109],
		name:        "hemdall"
	}, {
		coords:      [114.126,146.844],
		name:        "woe"
	}, {
		coords:      [150.828,122.359],
		name:        "hammond",
		during:      "sidequest.thread"
	}, {
		coords:      [150.141,151.422],
		name:        "yustianna",
		underground: true,
		entrances:   "yustianna_grotto"
	}],
	// ----------------- Grindstones --------------------
	grindstone: [{
		coords:      [[62.112,187.766],
		             [130.657,224.368],
		             [130.244,221.264],
		             [126.875,212.125],
		             [193.484,180.078],
		             [176.922,72.563],
		             [94.563,125.328],
		             [121.297,106.953],
		             [134.500,137.157],
		             [153.547,122.625]]
	}],
	// ----------------- Guarded Treasure ---------------
	guarded: [{
		coords:      [[72.344,166.219],
		             [114.688,66.000],
		             [81.298,37.812],
		             [66.421,182.922],
		             [135.344,212.469],
		             [113.984,124.984],
		             [155.875,139.125],
		             [135.953,128.485],
		             [134.344,168.312],
		             [106.813,106.656],
		             [141.968,120.812],
		             [79.189,147.750],
		             [87.718,140.438],
		             [197.313,106.000],
		             [199.813,129.937],
		             [204.875,133.063],
		             [206.937,139.125],
		             [202.438,150.562],
		             [172.594,216.750],
		             [199.125,122.688],
		             [80.593,177.031]]
	}, {
		coords:      [132.281,148.093],
		underground: true,
		entrances:   "blandare_grave"
	}],
	// ----------------- Gwent Players ------------------
	gwent: [{
		coords:      [[61.786,186.756],
		             [130.199,223.567],
		             [193.674,180.642],
		             [175.256,71.537],
		             [118.752,107.751],
		             [149.478,126.173]],
		extraLabel:  "innkeep.label"
	}, {
		coords:      [[62.128,187.478],
		             [130.581,224.751],
		             [193.710,178.917],
		             [176.804,72.170],
		             [95.283,124.903],
		             [121.217,106.604],
		             [102.380,140.861],
		             [154.056,122.986]],
		extraLabel:  "blacksmith.label"
	}, {
		coords:      [[130.019,222.621],
		             [63.718,187.766],
		             [175.255,72.919],
		             [92.019,117.799],
		             [122.871,130.533],
		             [102.910,141.986],
		             [128.895,149.986],
		             [150.234,125.797],
		             [129.391,131.625]],
		extraLabel:  "shopkeeper.label"
	}, {
		coords:      [[130.238,221.986],
		             [192.174,179.798],
		             [94.483,125.023],
		             [153.945,123.298]],
		extraLabel:  "armorer.label"
	}, {
		coords:      [123.246,129.127],
		extraLabel:  "blacksmith.label",
		rescueFrom:  "blacksmith_pid"
	}, {
		coords:      [147.478,127.283],
		extraLabel:  "herbalist.label"
	}, {
		coords:      [121.266,146.750],
		extraLabel:  "herbalist.label",
		rescueFrom:  "herbalist_pid"
	}],
	// ----------------- Gwent Quests -------------------
	gwentquest: [{
		coords:      [135.875,165.063],
		name:        "ermion",
		quest:       "sidequest.gw_skellige",
		after:       "mainquest.echoes"
	}, {
		coords:      [137.453,164.250],
		name:        "gremist",
		extraDesc:   "gwentquest.afterPlayer",
		quest:       "sidequest.gw_skellige",
		afterQuest:  "sidequest.gw_skellige",
		afterPlayer: "ermion",
		after:       "sidequest.practicum"
	}, {
		coords:      [151.375,122.390],
		name:        "crach",
		extraDesc:   "gwentquest.afterPlayer",
		quest:       "sidequest.gw_skellige",
		afterQuest:  "sidequest.gw_skellige",
		afterPlayer: "ermion",
		after:       "mainquest.king"
	}, {
		coords:      [149.141,127.609],
		name:        "sjusta",
		extraDesc:   "gwentquest.afterPlayer",
		quest:       "sidequest.gw_skellige",
		afterQuest:  "sidequest.gw_skellige",
		afterPlayer: "crach"
	}, {
		coords:      [94.187,123.985],
		name:        "lugos",
		extraDesc:   "gwentquest.afterPlayer",
		quest:       "sidequest.gw_skellige",
		afterQuest:  "sidequest.gw_skellige",
		afterPlayer: "gremist",
		after:       "mainquest.king"
	}],
	// ----------------- Harbors ------------------------
	harbor: [{
		coords:      [[147.422,122.953],
		             [159.813,135.391],
		             [130.593,131.344],
		             [122.031,105.141],
		             [134.625,98.141],
		             [109.485,75.860],
		             [117.203,69.047],
		             [91.937,114.625],
		             [64.813,189.719],
		             [100.719,142.968],
		             [98.156,149.656],
		             [102.093,170.094],
		             [132.844,223.407],
		             [127.781,170.906],
		             [190.469,179.219],
		             [176.438,74.968],
		             [141.344,51.438],
		             [124.625,210.500]]
	}],
	// ----------------- Herbalists ---------------------
	herbalist: [{
		coords:      [[127.312,162.219],
		             [147.406,127.141]]
	}, {
		coords:      [99.094,149.110],
		liberate:    true
	}, {
		coords:      [121.500,146.797],
		rescueFrom:  "herbalist_pid"
	}],
	// ----------------- Hidden Treasure ----------------
	hidden: [{
		coords:      [[103.062,45.031],
		             [59.812,121.906],
		             [210.938,89.063]]
	}, {
		coords:      [[171.719,83.500],
		             [143.125,81.563],
		             [127.469,115.656],
		             [76.063,155.531],
		             [135.906,173.437],
		             [154.656,96.125],
		             [175.406,105.125],
		             [193.343,146.406]],
		guarded:     true
	}, {
		coords:      [153.187,136.312],
		underground: true,
		entrances:   "sunstone_cave",
		after:       "mainquest.sunstone"
	}],
	// ----------------- Hollow Trees -------------------
	hollow: [{
		coords:      [[134.812,145.000],
		             [133.844,144.359],
		             [134.141,144.656],
		             [135.406,145.547],
		             [135.875,144.906],
		             [138.468,144.812],
		             [141.328,146.547],
		             [144.125,145.969],
		             [140.844,142.813],
		             [139.281,144.875],
		             [135.547,146.406],
		             [134.203,146.484],
		             [133.562,145.937],
		             [129.735,144.687],
		             [133.984,148.844],
		             [128.625,143.234],
		             [129.828,143.109],
		             [134.172,143.047],
		             [148.625,147.031],
		             [117.500,121.453],
		             [180.375,81.328],
		             [181.890,137.141],
		             [202.765,149.890],
		             [202.063,150.578],
		             [155.875,191.750],
		             [108.000,106.343],
		             [111.547,69.218],
		             [105.719,70.844],
		             [109.485,63.094],
		             [98.406,56.375],
		             [98.531,67.719],
		             [135.813,134.188],
		             [130.000,135.969],
		             [117.891,122.641],
		             [113.016,119.297],
		             [114.203,122.188],
		             [118.703,167.515],
		             [119.984,165.641],
		             [120.000,166.516],
		             [103.766,109.922],
		             [104.891,108.984],
		             [109.610,105.484],
		             [111.485,106.156],
		             [179.719,81.500],
		             [180.218,79.203],
		             [118.594,165.844],
		             [108.063,109.812],
		             [115.078,104.625],
		             [129.391,148.234],
		             [181.000,136.703],
		             [180.828,139.391],
		             [107.954,72.203],
		             [108.157,70.688],
		             [112.031,67.969],
		             [109.359,54.375],
		             [104.593,69.031],
		             [102.531,73.765],
		             [100.367,63.797],
		             [203.281,150.766]]
	}],
	// ----------------- Honeycombs ---------------------
	honeycomb: [{
		coords:      [[143.109,127.188],
		             [117.734,126.453],
		             [118.406,126.297],
		             [98.172,111.625],
		             [99.297,114.953],
		             [99.703,115.000],
		             [117.375,106.078],
		             [116.859,106.500],
		             [81.238,146.020],
		             [81.332,146.207],
		             [98.527,154.703],
		             [98.473,154.520]]
	}],
	// ----------------- Innkeeps -----------------------
	innkeep: [{
		coords:      [61.688,186.599],
		extraLabel:  "s:innkeep.harvikenInn.label",
		sells:       ["gwent", "food", "drinks"]
	}, {
		coords:      [130.125,223.375],
		extraLabel:  "s:innkeep.houseOfWarriors.label",
		sells:       ["food", "drinks"]
	}, {
		coords:      [193.562,180.500],
		extraLabel:  "s:innkeep.uriallaHarbourInn.label",
		sells:       ["gwent", "food", "drinks"]
	}, {
		coords:      [175.156,71.360],
		extraLabel:  "s:innkeep.svorlagInn.label",
		sells:       ["gwent", "food", "drinks"]
	}, {
		coords:      [118.656,107.609],
		extraLabel:  "s:innkeep.arinbjornInn.label",
		sells:       ["gwent", "food", "drinks"]
	}, {
		coords:      [149.406,126.031],
		extraLabel:  "s:innkeep.theNewPort.label",
		sells:       ["gwent", "food", "drinks"]
	}],
	// ----------------- Monster Dens -------------------
	monsterden: [{
		coords:      [57.905,200.156],
		groupId:     "trottheim_den"
	}, {
		coords:      [62.827,192.032],
		groupId:     "harviken_den"
	}, {
		coords:      [150.031,136.219],
		groupId:     "sunstone_cave"
	}, {
		coords:      [110.485,128.109],
		groupId:     "fornhala_den"
	}, {
		coords:      [144.313,153.000]
	}, {
		coords:      [147.531,157.625],
		groupId:     "ruins_northeast_of_gelen"
	}],
	// ----------------- Monster Nests ------------------
	monsternest: [{
		coords:      [[193.438,170.609],
		             [134.516,125.047],
		             [99.391,134.313],
		             [133.515,131.078],
		             [99.328,148.812]]
	}],
	// ----------------- Notice Boards ------------------
	notice: [{
		coords:      [[130.719,223.031],
		             [175.787,72.594],
		             [93.468,120.750],
		             [117.969,106.953],
		             [131.360,133.969],
		             [104.156,140.844],
		             [128.984,150.406],
		             [146.828,126.735]]
	}],
	// ----------------- Persons in Distress ------------
	pid: [{
		coords:      [126.328,123.094],
		id:          "blacksmith_pid"
	}, {
		coords:      [121.593,147.219],
		id:          "herbalist_pid"
	}],
	// ----------------- Places of Power ----------------
	pop: [{
		coords:      [[63.718,180.828],
		             [127.547,162.922]],
		extraLabel:  "pop.yrden.label"
	}, {
		coords:      [198.157,177.281],
		extraLabel:  "pop.quen.label"
	}, {
		coords:      [177.781,66.016],
		extraLabel:  "pop.igni.label"
	}, {
		coords:      [[101.719,117.187],
		             [133.641,125.797]],
		extraLabel:  "pop.axii.label"
	}, {
		coords:      [136.031,172.938],
		extraLabel:  "pop.aard.label"
	}, {
		coords:      [155.156,121.563],
		extraLabel:  "pop.quen.label",
		undergroung: true,
		entrances:   "trolde_passage",
		after:       "sidequest.gambit"
	}, {
		coords:      [154.875,133.469],
		extraLabel:  "pop.igni.label",
		undergroung: true,
		entrances:   "sunstone_cave",
		after:       "mainquest.sunstone"
	}],
	// ----------------- Points of Interest -------------
	poi: [{
		coords:      [167.500,194.313],
		label:       "s:poi.gship.label",
		extraDesc:   "s:poi.gship.desc"
	}, {
		coords:      [149.078,152.812],
		label:       "s:poi.poem.label",
		extraDesc:   "s:poi.poem.desc"
	}, {
		coords:      [127.109,116.250],
		label:       "s:poi.birna.label",
		extraDesc:   "s:poi.birna.desc",
		special:     true
	}, {
		coords:      [64.437,208.891],
		label:       "s:poi.dowry.label",
		extraDesc:   "s:poi.dowry.desc"
	}, {
		coords:      [[109.188,66.766],
		             [112.125,68.203],
		             [103.157,72.609],
		             [102.344,73.047]],
		label:       "s:poi.nail.label",
		extraDesc:   "s:poi.nail.desc"
	}, {
		coords:      [[107.344,65.328],
		             [106.343,65.078]],
		label:       "s:poi.twine.label",
		extraDesc:   "s:poi.twine.desc"
	}, {
		coords:      [106.719,66.109],
		label:       "s:poi.octo.label",
		extraDesc:   "s:poi.octo.desc"
	}, {
		coords:      [108.282,55.875],
		label:       "s:poi.horn.label",
		extraDesc:   "s:poi.horn.desc"
	}],
	// ----------------- Scavenger Hunts ----------------
	scavengerhunt: [{
		coords:      [62.782,193.110],
		upgrade:     "mastercrafted",
		school:      "feline",
		items:       "silverSword",
		underground: true,
		entrances:   "harviken_den"
	}, {
		coords:      [142.938,152.297],
		upgrade:     "mastercrafted",
		school:      "feline",
		items:       "steelSword"
	}, {
		coords:      [110.571,127.217],
		upgrade:     "mastercrafted",
		school:      "griffin",
		items:       "silverSword"
	}, {
		coords:      [79.991,145.634],
		upgrade:     "superior",
		school:      "griffin",
		items:       "silverSword",
		underground: true,
		entrances:   "elverum_lighthouse_cave"
	}, {
		coords:      [120.562,141.406],
		upgrade:     "mastercrafted",
		school:      "griffin",
		items:       "steelSword"
	}, {
		coords:      [198.162,174.506],
		upgrade:     "superior",
		school:      "griffin",
		items:       "steelSword"
	}, {
		coords:      [102.876,165.797],
		upgrade:     "enhanced",
		school:      "ursine",
		items:       "armor",
		underground: true,
		entrances:   "grotto"
	}, {
		coords:      [101.648,116.657],
		upgrade:     "enhanced",
		school:      "ursine",
		items:       "boots",
		underground: true,
		entrances:   "fart_cave"
	}, {
		coords:      [164.616,63.928],
		upgrade:     "#",
		school:      "ursine",
		items:       "crossbow",
		underground: true,
		entrances:   "old_watchtower_cave"
	}, {
		coords:      [150.844,143.266],
		upgrade:     "enhanced",
		school:      "ursine",
		items:       "gauntlets"
	}, {
		coords:      [155.667,139.661],
		upgrade:     "basic",
		school:      "ursine",
		items:       "silverSword"
	}, {
		coords:      [147.000,155.719],
		upgrade:     "enhanced",
		school:      "ursine",
		items:       "silverSword",
		underground: true,
		entrances:   "ruins_northeast_of_gelen"
	}, {
		coords:      [100.391,149.937],
		upgrade:     "basic",
		school:      "ursine",
		items:       "steelSword"
	}, {
		coords:      [143.516,80.547],
		upgrade:     "enhanced",
		school:      "ursine",
		items:       "steelSword"
	}, {
		coords:      [114.892,78.750],
		upgrade:     "enhanced",
		school:      "ursine",
		items:       "trousers"
	}, {
		coords:      [99.187,134.875],
		upgrade:     "superior",
		school:      "wolven",
		items:       "armor"
	}, {
		coords:      [100.797,75.031],
		upgrade:     "mastercrafted",
		school:      "wolven",
		items:       "boots"
	}, {
		coords:      [123.000,136.172],
		upgrade:     "mastercrafted",
		school:      "wolven",
		items:       "gauntlets"
	}, {
		coords:      [114.703,110.906],
		upgrade:     "superior",
		school:      "wolven",
		items:       "silverSword",
		underground: true,
		entrances:   "arinbjorn_grave"
	}, {
		coords:      [131.219,204.297],
		upgrade:     "superior",
		school:      "wolven",
		items:       "steelSword"
	}, {
		coords:      [168.281,65.812],
		upgrade:     "mastercrafted",
		school:      "wolven",
		items:       "trousers"
	}, {
		coords:      [59.829,200.140],
		upgrade:     "mastercrafted",
		school:      "feline",
		items:       ["armor", "boots", "gauntlets", "trousers"],
		underground: true,
		entrances:   "trottheim_den"
	}, {
		coords:      [135.706,173.794],
		upgrade:     "mastercrafted",
		school:      "griffin",
		items:       ["armor", "boots", "gauntlets", "trousers"]
	}, {
		coords:      [157.859,161.516],
		upgrade:     "superior",
		school:      "griffin",
		items:       ["armor", "boots", "gauntlets", "trousers"]
	}, {
		coords:      [197.579,179.156],
		upgrade:     "basic",
		school:      "ursine",
		items:       ["armor", "boots", "gauntlets", "trousers"],
		underground: true,
		entrances:   "yngvars_fang_ruins"
	}],
	// ----------------- Shopkeepers --------------------
	shopkeeper: [{
		coords:      [[129.937,222.500],
		             [129.453,131.813],
		             [175.172,72.812],
		             [63.640,187.594],
		             [102.782,141.844]],
		sells:       ["crafting", "fish"]
	}, {
		coords:      [91.921,117.656],
		sells:       ["maps", "crafting", "fish", "s:mastercraftedSaddle"]
	}, {
		coords:      [[122.781,130.390],
		             [141.297,128.938],
		             [150.266,125.594],
		             [146.359,123.015],
		             [114.359,117.094],
		             [127.141,212.312]],
		sells:       ["maps", "crafting"]
	}, {
		coords:      [135.062,137.157],
		sells:       ["armor", "crafting"],
		liberate:    true
	}, {
		coords:      [128.812,149.844],
		sells:       ["maps", "crafting", "food", "drinks"]
	}, {
		coords:      [149.330,127.517],
		extraLabel:  "s:shopkeeper.sjusta.label",
		sells:       ["clothes", "crafting"],
		extraDesc:   "s:shopkeeper.barber.desc"
	}],
	// ----------------- Sidequests ---------------------
	sidequest: [{
		coords:      [117.282,157.765],
		name:        "beloved"
	}, {
		coords:      [132.891,104.063],
		name:        "horn"
	}, {
		coords:      [93.405,120.969],
		name:        "horn"
	}, {
		coords:      [130.641,223.968],
		name:        "passenger",
		after:       "mainquest.storm",
		before:      "mainquest.family"
	}, {
		coords:      [133.766,157.718],
		name:        "sawmill"
	}, {
		coords:      [149.422,126.454],
		name:        "unpaid",
		after:       ["sidequest.stranger",
		              "sidequest.dreams"],
		before:      "sidequest.gambit"
	}, {
		coords:      [126.923,137.594],
		name:        "assault"
	}, {
		coords:      [114.594,134.672],
		name:        "brave"
	}, {
		coords:      [152.750,122.609],
		name:        "coronation",
		after:       "sidequest.gambit",
		before:      "mainquest.mists"
	}, {
		coords:      [160.968,140.782],
		name:        "punishment1"
	}, {
		coords:      [147.704,137.938],
		name:        "punishment2"
	}, {
		coords:      [160.703,160.750],
		name:        "keepers"
	}, {
		coords:      [61.312,200.140],
		name:        "flesh",
		before:      "sidequest.thread"
	}, {
		coords:      [129.860,218.718],
		name:        "glory"
	}, {
		coords:      [178.296,137.157],
		name:        "spirit"
	}, {
		coords:      [126.672,182.469],
		name:        "fromfar1"
	}, {
		coords:      [135.563,145.688],
		name:        "hardtimes"
	}, {
		coords:      [130.719,223.234],
		name:        "clothing"
	}, {
		coords:      [63.018,192.625],
		name:        "maiden"
	}, {
		coords:      [153.296,122.219],
		name:        "gambit",
		after:       ["sidequest.possession",
		              "sidequest.undvik"],
		before:      "mainquest.mists"
	}, {
		coords:      [174.969,80.594],
		name:        "arena"
	}, {
		coords:      [141.876,132.188],
		name:        "disturbed"
	}, {
		coords:      [173.265,71.704],
		name:        "possession",
		after:       "mainquest.king",
		before:      "mainquest.bpreparations"
	}, {
		coords:      [137.391,163.796],
		name:        "practicum"
	}, {
		coords:      [135.891,162.718],
		name:        "therapy"
	}, {
		coords:      [94.735,125.922],
		name:        "stranger",
		after:       "contract.eldberg"
	}, {
		coords:      [115.516,169.468],
		name:        "taken1"
	}, {
		coords:      [137.078,217.765],
		name:        "taken2"
	}, {
		coords:      [81.407,135.626],
		name:        "dreams",
		after:       "mainquest.king",
		before:      "sidequest.gambit"
	}, {
		coords:      [137.703,143.063],
		name:        "blade"
	}, {
		coords:      [130.172,223.000],
		name:        "last",
		after:       "mainquest.storm",
		before:      "mainquest.baby"
	}, {
		coords:      [103.000,72.125],
		name:        "undvik",
		after:       "mainquest.king"
	}, {
		coords:      [[127.501,135.750],
		             [131.391,134.282]],
		name:        "nithing"
	}, {
		coords:      [[193.468,179.421],
		             [196.250,184.984]],
		name:        "warriors",
		after:       "sidequest.nowheres"
	}, {
		coords:      [63.470,187.437],
		name:        "price"
	}, {
		coords:      [128.813,148.453],
		name:        "grossbart"
	}, {
		coords:      [193.374,179.078],
		name:        "nowheres"
	}, {
		coords:      [146.532,123.844],
		name:        "worthy1"
	}, {
		coords:      [141.063,128.547],
		name:        "worthy2"
	}, {
		coords:      [103.766,140.703],
		name:        "worthy3"
	}, {
		coords:      [125.438,132.438],
		name:        "ps_fayrlund"
	}, {
		coords:      [130.376,220.593],
		name:        "ps_goddess",
		after:       ["sidequest.ps_fayrlund",
		              "sidequest.ps_fyresdal",
		              "sidequest.ps_trolde"]
	}, {
		coords:      [119.782,148.813],
		name:        "ps_fyresdal"
	}, {
		coords:      [131.250,133.438],
		name:        "ps_trolde"
	}, {
		coords:      [146.844,127.281],
		name:        "gw_skellige"
	}, {
		coords:      [174.953,80.813],
		name:        "ff_champion",
		after:       ["sidequest.ff_novigrad",
		              "sidequest.ff_velen",
		              "sidequest.ff_skellige"]
	}, {
		coords:      [[146.844,127.016],
		             [148.813,126.562],
		             [118.296,105.563]],
		name:        "ff_skellige"
	}],
	// ----------------- Sign Posts ---------------------
	signpost: [{
		coords:      [61.671,201.406],
		name:        "s:trottheim"
	}, {
		coords:      [62.593,186.968],
		name:        "s:harviken"
	}, {
		coords:      [129.344,222.343],
		name:        "s:larvik"
	}, {
		coords:      [136.594,213.031],
		name:        "s:freyasGarden"
	}, {
		coords:      [133.016,209.750],
		name:        "s:lofoten"
	}, {
		coords:      [129.563,210.328],
		name:        "s:lofotenCemetery"
	}, {
		coords:      [126.437,212.297],
		name:        "s:isolatedHut"
	}, {
		coords:      [123.688,216.891],
		name:        "s:lurthen"
	}, {
		coords:      [196.218,184.625],
		name:        "s:trailToYngvarsFang"
	}, {
		coords:      [198.313,176.906],
		name:        "s:yngvarsFang"
	}, {
		coords:      [193.031,179.031],
		name:        "s:uriallaHarbor"
	}, {
		coords:      [191.235,171.313],
		name:        "s:bayOfWinds"
	}, {
		coords:      [176.828,81.016],
		name:        "s:hov"
	}, {
		coords:      [176.109,71.391],
		name:        "s:svorlag"
	}, {
		coords:      [168.016,65.344],
		name:        "s:oldWatchtower"
	}, {
		coords:      [140.187,52.563],
		name:        "s:thePaliGapCoast"
	}, {
		coords:      [145.656,84.250],
		name:        "s:kaerAlmhult"
	}, {
		coords:      [107.781,73.250],
		name:        "s:marlinCoast"
	}, {
		coords:      [99.516,81.422],
		name:        "s:gullPoint"
	}, {
		coords:      [102.985,71.015],
		name:        "s:dorveRuins"
	}, {
		coords:      [96.110,65.312],
		name:        "s:clanTordarrochForge"
	}, {
		coords:      [100.360,61.063],
		name:        "s:urskar"
	}, {
		coords:      [104.968,55.625],
		name:        "s:abandonedVillage"
	}, {
		coords:      [117.688,52.750],
		name:        "s:torGvalchca"
	}, {
		coords:      [79.547,147.438],
		name:        "s:elverumLighthouse"
	}, {
		coords:      [99.578,149.437],
		name:        "s:ruinedInn"
	}, {
		coords:      [104.717,141.063],
		name:        "s:fyresdal"
	}, {
		coords:      [93.484,124.375],
		name:        "s:kaerMuire"
	}, {
		coords:      [91.141,118.094],
		name:        "s:holmsteinsPort"
	}, {
		coords:      [105.828,108.547],
		name:        "s:wildShore"
	}, {
		coords:      [109.500,121.218],
		name:        "s:fornhala"
	}, {
		coords:      [105.015,160.969],
		name:        "s:distillery"
	}, {
		coords:      [102.391,168.156],
		name:        "s:grotto"
	}, {
		coords:      [113.641,146.906],
		name:        "s:palisade"
	}, {
		coords:      [117.656,106.469],
		name:        "s:arinbjorn"
	}, {
		coords:      [120.469,117.688],
		name:        "s:sund"
	}, {
		coords:      [123.968,129.484],
		name:        "s:fayrlund"
	}, {
		coords:      [119.437,139.031],
		name:        "s:boxholm"
	}, {
		coords:      [129.937,133.312],
		name:        "s:rannvaig"
	}, {
		coords:      [128.687,148.750],
		name:        "s:blandare"
	}, {
		coords:      [127.656,162.031],
		name:        "s:druidsCamp"
	}, {
		coords:      [128.594,169.781],
		name:        "s:redgill"
	}, {
		coords:      [132.875,156.750],
		name:        "s:abandonedSawmill"
	}, {
		coords:      [135.797,164.703],
		name:        "s:gedyneith"
	}, {
		coords:      [142.078,169.094],
		name:        "s:whaleGraveyard"
	}, {
		coords:      [136.469,130.375],
		name:        "s:crossroads"
	}, {
		coords:      [139.969,145.063],
		name:        "s:minersCamp"
	}, {
		coords:      [141.312,101.312],
		name:        "s:eldbergLighthouse"
	}, {
		coords:      [142.781,152.906],
		name:        "s:kaerGelen"
	}, {
		coords:      [146.712,125.000],
		name:        "s:KaerTroldeHarbor"
	}, {
		coords:      [153.625,124.266],
		name:        "s:bridgeToKaerTrolde"
	}, {
		coords:      [145.688,138.828],
		name:        "s:rogne"
	}, {
		coords:      [150.766,150.359],
		name:        "s:yustiannasGrotto"
	}, {
		coords:      [153.688,162.437],
		name:        "s:giantsToes"
	}, {
		coords:      [158.859,136.078],
		name:        "s:ancientCrypt"
	}],
	// ----------------- Smugglers' Caches --------------
	smugglers: [{
		coords:      [[131.219,116.125],
		             [134.875,110.625],
		             [138.625,116.938],
		             [144.469,114.656],
		             [148.906,108.156],
		             [154.750,111.094],
		             [160.594,111.313],
		             [157.375,103.094],
		             [152.125,86.437],
		             [138.468,93.250],
		             [133.906,94.313],
		             [136.031,76.750],
		             [139.781,65.000],
		             [152.532,66.437],
		             [160.656,79.750],
		             [167.750,99.875],
		             [179.937,130.156],
		             [173.375,127.781],
		             [163.812,126.656],
		             [164.625,134.094],
		             [169.938,143.969],
		             [162.937,149.218],
		             [175.813,158.031],
		             [180.812,185.750],
		             [179.687,182.437],
		             [180.750,175.875],
		             [167.500,186.375],
		             [146.500,171.938],
		             [153.406,171.438],
		             [147.156,179.375],
		             [153.281,178.625],
		             [144.157,185.469],
		             [143.813,194.406],
		             [143.813,202.156],
		             [132.437,194.437],
		             [102.562,208.500],
		             [97.000,180.500],
		             [95.094,169.719],
		             [87.781,153.969],
		             [83.969,157.906],
		             [62.187,161.437],
		             [65.343,136.000],
		             [62.125,118.282],
		             [56.938,65.187],
		             [71.625,95.313],
		             [79.749,111.938],
		             [87.062,92.625],
		             [101.687,96.062],
		             [119.657,97.406],
		             [119.094,85.969],
		             [123.282,82.500],
		             [123.828,93.406],
		             [197.374,163.874],
		             [197.188,112.375],
		             [179.937,107.656],
		             [170.844,211.813],
		             [207.126,87.562],
		             [195.313,135.750],
		             [200.063,145.437]]
	}, {
		coords:      [168.375,175.313],
		notInGame:   true
	}],
	// ----------------- Spoils of War ------------------
	spoils: [{
		coords:      [[61.750,106.813],
		             [139.906,49.344],
		             [136.563,39.062],
		             [173.844,106.313],
		             [167.344,118.125],
		             [202.499,131.438],
		             [82.281,169.781],
		             [109.781,182.719]]
	}],
	// ----------------- Stashes ------------------------
	stash: [{
		coords:      [148.871,125.902]
	}],
	// ----------------- Treasure -----------------------
	treasure: [{
		coords:      [[62.468,177.157],
		             [113.000,54.063],
		             [133.375,127.844],
		             [134.531,125.812],
		             [143.000,120.219],
		             [137.531,143.407],
		             [149.312,152.875],
		             [63.530,67.750],
		             [135.015,127.094],
		             [135.563,125.047],
		             [138.453,121.937],
		             [58.202,207.938],
		             [150.047,164.532],
		             [179.640,81.703],
		             [180.015,81.781],
		             [186.500,71.000],
		             [198.969,118.641],
		             [200.250,110.688],
		             [196.281,112.140],
		             [195.359,100.812],
		             [199.906,99.531],
		             [195.719,94.250],
		             [180.110,137.765],
		             [154.500,191.938],
		             [191.250,198.437],
		             [151.344,85.469],
		             [117.438,73.375],
		             [63.968,103.500],
		             [99.952,160.219],
		             [105.031,72.125],
		             [106.938,68.000],
		             [58.141,191.640],
		             [141.406,128.734],
		             [144.953,120.281],
		             [134.000,141.094],
		             [140.547,144.532],
		             [127.312,151.703],
		             [122.469,136.328],
		             [122.187,137.500],
		             [122.813,137.735],
		             [122.500,137.703],
		             [123.625,136.938],
		             [121.562,138.453],
		             [119.937,141.469],
		             [120.453,140.859],
		             [111.844,143.125],
		             [109.640,120.640],
		             [109.313,121.859],
		             [108.968,120.750],
		             [106.328,119.172],
		             [77.001,153.391],
		             [76.017,155.781],
		             [79.126,143.422],
		             [86.156,127.594],
		             [86.718,127.594],
		             [87.407,122.500],
		             [89.579,118.844],
		             [91.812,121.375],
		             [96.016,125.344],
		             [95.359,125.500],
		             [92.594,124.266],
		             [95.484,112.391],
		             [112.500,108.703],
		             [114.484,105.484],
		             [120.969,217.172],
		             [118.562,219.468],
		             [124.921,222.031],
		             [196.891,178.860],
		             [197.360,178.750],
		             [197.376,179.484],
		             [186.047,69.610],
		             [185.953,68.203],
		             [185.750,71.672],
		             [198.625,144.594],
		             [194.719,111.344],
		             [197.579,98.109],
		             [198.532,100.422],
		             [199.609,97.797],
		             [195.969,100.594],
		             [195.437,95.203],
		             [197.235,93.610],
		             [197.188,94.688],
		             [196.891,90.953],
		             [197.609,90.656],
		             [199.046,90.109],
		             [196.906,87.313],
		             [196.750,88.032],
		             [195.937,88.938],
		             [196.313,89.625],
		             [143.797,153.359],
		             [99.625,137.984],
		             [94.485,123.750],
		             [135.078,98.422],
		             [198.031,176.969],
		             [196.625,173.859],
		             [175.844,107.922],
		             [149.281,83.594],
		             [68.749,54.313],
		             [99.469,192.187],
		             [87.969,38.188],
		             [88.031,39.219],
		             [103.844,46.188],
		             [111.266,71.141],
		             [112.563,69.344],
		             [113.688,71.344],
		             [113.516,69.297],
		             [114.250,69.218],
		             [114.000,67.640],
		             [113.656,68.328],
		             [113.078,70.000],
		             [112.281,68.953],
		             [114.453,67.141],
		             [111.266,68.563],
		             [110.344,67.750],
		             [105.797,69.547],
		             [106.938,66.750],
		             [106.469,66.516],
		             [105.969,66.063],
		             [106.047,64.828],
		             [109.656,67.813],
		             [102.047,62.547],
		             [102.328,68.266],
		             [117.422,124.719]]
	}, {
		coords:      [152.953,152.797],
		extraDesc:   "s:treasure.solution.desc"
	}, {
		coords:      [95.593,65.812],
		extraDesc:   "s:treasure.toodeep.desc",
		special:     true
	}, {
		coords:      [62.719,192.312],
		underground: true,
		entrances:   "harviken_den"
	}, {
		coords:      [134.250,101.703],
		underground: true,
		entrances:   "pearls_cave"
	}, {
		coords:      [[127.765,218.297],
		             [129.047,217.906]],
		underground: true,
		entrances:   "fame_cave"
	}, {
		coords:      [84.204,133.157],
		underground: true,
		entrances:   "shroom_cave"
	}, {
		coords:      [101.234,118.735],
		underground: true,
		entrances:   "fart_cave"
	}, {
		coords:      [[104.203,168.391],
		             [104.438,165.969],
		             [102.500,166.937]],
		underground: true,
		entrances:   "grotto"
	}, {
		coords:      [119.516,139.547],
		underground: true,
		entrances:   "boxholm_ruins"
	}, {
		coords:      [60.469,201.125],
		underground: true,
		entrances:   "trottheim_den"
	}, {
		coords:      [[149.672,152.594],
		             [148.859,152.156],
		             [148.453,151.281],
		             [149.656,150.813]],
		underground: true,
		entrances:   "yustianna_grotto"
	}, {
		coords:      [[114.078,128.578],
		             [113.031,129.688]],
		underground: true,
		entrances:   "fornhala_den"
	}, {
		coords:      [102.406,63.687],
		underground: true,
		entrances:   "urskar_boothouse_cave"
	}, {
		coords:      [[149.625,136.906],
		             [154.203,134.109],
		             [153.985,133.750],
		             [154.484,133.375],
		             [157.844,134.406],
		             [153.672,135.500],
		             [153.484,133.328],
		             [150.000,133.344],
		             [149.438,131.719],
		             [148.922,135.468],
		             [150.125,135.172],
		             [150.469,135.438],
		             [149.125,136.375]],
		underground: true,
		entrances:   "sunstone_cave"
	}, {
		coords:      [144.500,132.250],
		underground: true,
		entrances:   "disturbed_crypt"
	}, {
		coords:      [193.765,175.266],
		underground: true,
		entrances:   "slide_trophy_cave"
	}, {
		coords:      [[93.405,58.375],
		             [94.406,63.250],
		             [95.235,62.562],
		             [96.500,61.610],
		             [94.905,61.672],
		             [95.079,60.703],
		             [96.031,59.985],
		             [92.921,62.719],
		             [96.047,62.922],
		             [94.875,64.000]],
		underground: true,
		entrances:   "urskar_tordarroch_cave"
	}, {
		coords:      [[146.657,221.594],
		             [147.219,221.218],
		             [150.219,124.765],
		             [149.594,124.656],
		             [63.514,176.687],
		             [144.031,167.656],
		             [156.656,163.484],
		             [157.469,164.093],
		             [197.188,90.063],
		             [191.062,196.938],
		             [156.875,191.781],
		             [134.406,224.687],
		             [119.312,219.562],
		             [119.641,220.109],
		             [129.000,101.406],
		             [125.297,111.813],
		             [97.953,155.109],
		             [98.906,160.219],
		             [133.688,125.250],
		             [121.328,130.266],
		             [111.453,142.343],
		             [116.547,139.328],
		             [98.250,155.094],
		             [143.297,170.016],
		             [146.437,166.188],
		             [147.969,165.094],
		             [151.094,164.406],
		             [152.532,163.750],
		             [157.687,164.312],
		             [77.094,152.485],
		             [137.547,207.109],
		             [189.062,170.656],
		             [202.282,147.844],
		             [195.218,110.984],
		             [196.484,97.875],
		             [109.812,72.563],
		             [119.937,59.109],
		             [108.512,74.340],
		             [196.860,109.000],
		             [75.953,157.234]],
		underwater:  true
	}, {
		coords:      [151.562,210.250],
		underwater:  true,
		during:      "sidequest.last"
	}, {
		coords:      [138.390,229.500],
		underwater:  true,
		underground: true,
		entrances:   "",
		during:      "sidequest.last"
	}, {
		coords:      [103.281,167.062],
		underwater:  true,
		underground: true,
		entrances:   "grotto"
	}, {
		coords:      [[194.547,176.281],
		             [192.015,175.547]],
		underwater:  true,
		underground: true,
		entrances:   "slide_trophy_cave"
	}, {
		coords:      [[94.063,61.781],
		             [92.625,61.844],
		             [95.843,58.828],
		             [90.953,63.531]],
		underwater:  true,
		underground: true,
		entrances:   "urskar_tordarroch_cave"
	}],
	// ----------------- Treasure Hunts -----------------
	treasurehunt: [{
		coords:      [189.609,184.875],
		name:        "nilf"
	}, {
		coords:      [114.750,56.578],
		name:        "precious"
	}, {
		coords:      [120.640,138.891],
		name:        "inheritance"
	}, {
		coords:      [122.636,153.610],
		name:        "marks"
	}, {
		coords:      [181.718,136.438],
		name:        "unlucky"
	}, {
		coords:      [89.250,181.187],
		name:        "ironsides"
	}, {
		coords:      [171.125,77.625],
		name:        "dare"
	}, {
		coords:      [103.547,65.547],
		name:        "shortcut"
	}, {
		coords:      [58.327,182.297],
		name:        "depths"
	}, {
		coords:      [124.000,151.938],
		name:        "praised"
	}, {
		coords:      [99.735,149.094],
		name:        "fortune"
	}, {
		coords:      [134.062,102.094],
		name:        "pearls"
	}, {
		coords:      [103.204,71.579],
		name:        "ruins"
	}, {
		coords:      [153.703,123.391],
		name:        "scav_bear1"
	}, {
		coords:      [153.703,123.533],
		name:        "scav_bear2"
	}, {
		coords:      [153.703,123.675],
		name:        "scav_bear3"
	}, {
		coords:      [153.703,123.818],
		name:        "scav_bear4"
	}, {
		coords:      [153.703,123.960],
		name:        "scav_wolf3"
	}, {
		coords:      [153.703,124.102],
		name:        "scav_wolf6"
	}]
}; };

registerMap({
	name:          "skellige",
	ns:            "s",
	bounds:        [{ lat: 0, lng: 0 }, { lat: 256, lng: 256 }],
	initialPos:    [128, 128],
	minZoom:       2,
	maxZoom:       8,
	minNativeZoom: 2,
	maxNativeZoom: 6,
	initialZoom:   2,
	getMapData:    getMapData
}); }
