{ let getMapData = function() { return {
	// ----------------- Abandoned Sites ----------------
	abandoned: [{
		coords:      [[67.547,51.734],
		             [66.875,37.406],
		             [78.656,45.859],
		             [82.344,47.219],
		             [90.109,47.094],
		             [32.391,68.297],
		             [112.875,66.172],
		             [88.188,101.797],
		             [91.531,78.688],
		             [31.141,71.953],
		             [57.656,94.109]]
	}],
	// ----------------- Alchemy Supplies ---------------
	alchemy: [{
		coords:      [52.719,62.609]
	}, {
		coords:      [79.141,53.453],
		after:       "sidequest.vc_chuchote"
	}],
	// ----------------- Armorers -----------------------
	armorer: [{
		coords:      [[39.969,81.000],
		             [64.956,65.109],
		             [50.281,64.297]],
		extraLabel:  "craftlevel.journeyman"
	}, {
		coords:      [86.156,63.453],
		extraLabel:  "craftlevel.journeyman",
		rescueFrom:  "armorer_pid"
	}, {
		coords:      [[79.703,108.828],
		             [58.202,94.210]],
		extraLabel:  "craftlevel.journeyman",
		liberate:    true
	}, {
		coords:      [98.031,43.953],
		extraLabel:  "craftlevel.journeyman",
		underground: true,
		entrances:   "foxhollow_hanse",
		liberate:    true
	}],
	// ----------------- Armorer's Tables ---------------
	armorerstable: [{
		coords:      [[50.500,64.453],
		             [116.538,71.366],
		             [65.422,65.344],
		             [105.047,79.422],
		             [69.609,100.609],
		             [40.047,81.156],
		             [86.156,63.734]]
	}, {
		coords:      [98.203,43.688],
		underground: true,
		entrances:   "foxhollow_hanse"
	}],
	// ----------------- Bandit Camps -------------------
	banditcamp: [{
		coords:      [[52.188,100.469],
		             [86.313,109.484],
		             [102.938,75.563],
		             [108.438,65.031]]
	}, {
		coords:      [94.984,42.109],
		extraDesc:   "t:banditcamp.hanse.desc",
		hanse:       "t:signpost.fox",
		special:     true
	}, {
		coords:      [[111.828,72.338],
		             [114.313,75.469]],
		extraDesc:   "t:banditcamp.hanse.desc",
		hanse:       "t:signpost.arthachpalaceruins",
		special:     true
	}, {
		coords:      [[73.156,109.594],
		             [73.750,114.063]],
		extraDesc:   "t:banditcamp.hanse.desc",
		hanse:       "t:signpost.montcranecastle",
		special:     true
	}, {
		coords:      [68.828,115.984],
		extraDesc:   ["t:banditcamp.hanse.desc",
		              "t:banditcamp.ussar.desc"],
		hanse:       "t:signpost.montcranecastle",
		after:       "contract.bonvineblues"
	}],
	// ----------------- Barbers ------------------------
	barber: [{
		coords:      [64.531,63.641]
	}, {
		coords:      [88.969,102.594],
		liberate:    true
	}],
	// ----------------- Blacksmiths --------------------
	blacksmith: [{
		coords:      [[49.813,64.359],
		             [65.113,64.688],
		             [69.578,100.859]],
		extraLabel:  "craftlevel.journeyman"
	}, {
		coords:      [116.516,71.250],
		extraLabel:  "craftlevel.journeyman",
		liberate:    true
	}, {
		coords:      [44.672,72.125],
		extraLabel:  "craftlevel.master",
		rescueFrom:  "blacksmith_pid"
	}, {
		coords:      [50.734,65.547],
		label:       "armorer.label",
		extraLabel:  ["blacksmith.label",
		              "craftlevel.grandmaster",
		              "t:blacksmith.lafargue.label"],
		desc:        "armorer.desc",
		extraDesc:   "blacksmith.desc"
	}],
	// ----------------- Boats --------------------------
	boat: [{
		coords:      [[38.593,55.312],
		             [37.093,62.187],
		             [45.187,55.562],
		             [46.281,62.281],
		             [55.437,73.656],
		             [50.375,80.437],
		             [54.578,87.390],
		             [62.000,87.312],
		             [73.406,76.218],
		             [87.437,80.750],
		             [112.500,65.250],
		             [96.921,60.765],
		             [78.625,69.500],
		             [65.875,76.156]]
	}],
	// ----------------- Brothels -----------------------
	brothel: [{
		coords:      [58.359,72.572],
		name:        "t:belle"
	}],
	// ----------------- Contracts ----------------------
	contract: [{
		coords:      [74.600,75.000],
		name:        "biggamehunter",
		baw:         true
	}, {
		coords:      [48.109,62.750],
		name:        "coldasice",
		baw:         true,
		before:      "mainquest.capture"
	}, {
		coords:      [71.719,102.719],
		name:        "bonvineblues",
		baw:         true
	}, {
		coords:      [64.328,89.797],
		name:        "tufo",
		baw:         true
	}, {
		coords:      [94.437,93.546],
		name:        "phantoms",
		baw:         true
	}],
	// ----------------- Entrances ----------------------
	entrance: [{
		coords:      [[79.422,53.250],
		             [93.141,41.828],
		             [58.688,84.641],
		             [43.438,95.797],
		             [60.344,113.328],
		             [94.844,94.359],
		             [84.031,84.203],
		             [50.109,84.234],
		             [56.484,44.031],
		             [91.766,41.672]]
	}, {
		coords:      [86.047,72.938],
		groupId:     "rivecalme_storehouse"
	}, {
		coords:      [[47.000,79.578],
		             [47.234,78.734]],
		groupId:     "regis_hideout"
	}, {
		coords:      [48.594,92.766],
		groupId:     "cleaning_cave"
	}, {
		coords:      [49.781,100.625],
		groupId:     "termes_ruins"
	}, {
		coords:      [48.188,100.484],
		groupId:     "quen_cave"
	}, {
		coords:      [28.047,81.891],
		during:      "mainquest.cage",
		groupId:     "tesham_ruins"
	}, {
		coords:      [65.156,43.703],
		groupId:     "albertus_grotto"
	}, {
		coords:      [[95.313,41.875],
		             [95.172,45.188]],
		groupId:     "foxhollow_hanse"
	}, {
		coords:      [102.203,64.344],
		groupId:     "again_cave"
	}, {
		coords:      [46.203,51.609],
		groupId:     "murky_cave"
	}, {
		coords:      [43.078,56.094],
		groupId:     "amphitheater_cave"
	}, {
		coords:      [[72.172,87.641],
		             [73.063,86.375]],
		groupId:     "owl_eye_grottos"
	}, {
		coords:      [[108.891,82.438],
		             [107.656,80.844]],
		groupId:     "herbalist_pid_cave"
	}, {
		coords:      [90.969,86.672],
		groupId:     "dun_crossroads_cave"
	}, {
		coords:      [77.375,87.125],
		groupId:     "dun_tynne_den"
	}, {
		coords:      [39.047,67.703],
		groupId:     "barber_cave"
	}, {
		coords:      [35.469,59.328],
		during:      "mainquest.bloodsimple",
		groupId:     "elder_cave"
	}, {
		coords:      [[57.844,50.828],
		             [59.344,51.313]],
		groupId:     "paint_cave"
	}, {
		coords:      [93.125,53.063],
		groupId:     "cave1"
	}, {
		coords:      [64.109,51.500],
		groupId:     "cave2"
	}, {
		coords:      [68.516,114.156],
		groupId:     "ussar_cave"
	}, {
		coords:      [[48.328,66.734],
		             [48.906,65.000],
		             [45.859,66.531]],
		notInGame:   true,
		groupId:     "temple_cemetery"
	}, {
		coords:      [68.141,93.250],
		notInGame:   true,
		after:       "contract.tufo"
	}, {
		coords:      [98.422,58.438],
		notInGame:   true,
		groupId:     "lebioda_temple"
	}, {
		coords:      [60.375,114.453],
		notInGame:   true
	}, {
		coords:      [51.641,84.734],
		notInGame:   true,
		groupId:     "mutagen_dungeon"
	}, {
		coords:      [46.734,100.469],
		notInGame:   true,
		groupId:     "termes_ruins_south"
	}, {
		coords:      [65.813,91.672],
		notInGame:   true,
		groupId:     "flovive_cellar"
	}, {
		coords:      [80.328,107.766],
		notInGame:   true,
		groupId:     "montcrane_hanse"
	}, {
		coords:      [96.703,106.250],
		after:       "treasurehunt.spoon"
	}, {
		coords:      [38.797,96.844],
		after:       "mainquest.cage"
	}, {
		coords:      [84.922,53.875],
		during:      "mainquest.wine"
	}],
	// ----------------- Events -------------------------
	event: [{
		coords:      [55.156,68.468],
		name:        "contract",
		during:      "mainquest.cintra"
	}, {
		coords:      [46.766,65.375],
		name:        "grave",
		underground: true,
		entrances:   "temple_cemetery",
		during:      "sidequest.tilldeath"
	}, {
		coords:      [60.406,56.906],
		name:        "naughty",
		after:       "mainquest.humble"
	}, {
		coords:      [54.078,56.969],
		name:        "ring",
		during:      "mainquest.toussaint"
	}, {
		coords:      [55.234,53.484],
		name:        "grain",
		during:      "mainquest.toussaint"
	}, {
		coords:      [50.750,61.063],
		name:        "drunk",
		after:       "mainquest.humble"
	}, {
		coords:      [58.016,59.422],
		name:        "delwyn",
		during:      "mainquest.fangs"
	}, {
		coords:      [50.344,64.797],
		name:        "child",
		during:      "mainquest.fangs"
	}],
	// ----------------- Grindstones --------------------
	grindstone: [{
		coords:      [[79.625,109.094],
		             [49.816,64.453],
		             [116.500,71.188],
		             [104.969,79.594],
		             [69.725,100.709],
		             [40.063,80.938],
		             [65.391,65.125],
		             [86.047,63.703]]
	}, {
		coords:      [98.125,43.656],
		underground: true,
		entrances:   "foxhollow_hanse"
	}],
	// ----------------- Guarded Treasure ---------------
	guarded: [{
		coords:      [[44.781,103.531],
		             [46.063,88.219],
		             [37.375,63.016],
		             [37.875,93.297],
		             [89.641,93.328],
		             [99.234,79.234],
		             [69.859,81.422],
		             [76.563,113.656],
		             [106.391,86.313],
		             [79.594,67.422],
		             [84.938,40.813],
		             [86.094,43.375]]
	}, {
		coords:      [66.922,91.969],
		underground: true,
		entrances:   "flovive_cellar"
	}, {
		coords:      [[111.828,72.859],
		             [114.172,75.891]],
		extraDesc:   "t:guarded.hanse.desc",
		hanse:       "t:signpost.arthachpalaceruins",
		special:     true
	}, {
		coords:      [[73.344,109.203],
		             [73.875,113.547]],
		extraDesc:   "t:guarded.hanse.desc",
		hanse:       "t:signpost.montcranecastle",
		special:     true
	}, {
		coords:      [94.906,41.859],
		extraDesc:   "t:guarded.hanse.desc",
		hanse:       "t:signpost.fox",
		special:     true
	}],
	// ----------------- Gwent Players ------------------
	gwent: [{
		coords:      [[51.397,61.141],
		             [52.328,65.000],
		             [41.528,81.109],
		             [64.856,62.734],
		             [63.653,90.625],
		             [75.606,75.188]],
		extraLabel:  "innkeep.label"
	}, {
		coords:      [[51.047,66.250],
		             [85.628,53.734]],
		extraLabel:  "herbalist.label"
	}, {
		coords:      [[53.672,61.313],
		             [52.919,62.609],
		             [58.359,72.672]]
	}, {
		coords:      [[50.750,65.109],
		             [55.328,61.891],
		             [58.328,72.000]],
		extraLabel:  "shopkeeper.label"
	}, {
		coords:      [[50.481,64.297],
		             [40.169,81.000],
		             [65.156,65.109]],
		extraLabel:  "armorer.label"
	}, {
		coords:      [64.831,63.641],
		extraLabel:  "barber.label"
	}, {
		coords:      [65.313,64.688],
		extraLabel:  "blacksmith.label"
	}],
	// ----------------- Gwent Quests -------------------
	gwentquest: [{
		coords:      [74.600,75.500],
		label:       "sidequest.gw_tournment.label",
		desc:        "sidequest.gw_tournment.desc",
		after:       "sidequest.gw_fear"
	}, {
		coords:      [51.359,60.890],
		label:       "sidequest.gw_fear.label",
		desc:        "sidequest.gw_fear.desc"
	},],
	// ----------------- Hanse Bases --------------------
	hansebase: [{
		coords:      [[116.047,71.625],
		             [96.438,44.750],
		             [80.813,108.313]]
	}],
	// ----------------- Harbors ------------------------
	harbor: [{
		coords:      [[47.297,60.734],
		             [56.109,74.750],
		             [61.781,88.000],
		             [96.219,60.594]]
	}],
	// ----------------- Herbalists ---------------------
	herbalist: [{
		coords:      [[85.328,53.734],
		             [51.047,66.250]]
	}, {
		coords:      [32.406,68.047],
		liberate:    true
	}, {
		coords:      [94.469,70.844],
		rescueFrom:  "herbalist_pid"
	}],
	// ----------------- Honeycombs ---------------------
	honeycomb: [{
		coords:      [[88.625,74.891],
		             [88.719,74.547],
		             [86.531,43.813],
		             [88.156,46.266],
		             [51.938,100.344]]
	}],
	// ----------------- Innkeeps -----------------------
	innkeep: [{
		coords:      [75.406,75.188],
		extraLabel:  "t:innkeep.cockatrice.label",
		desc:        "t:innkeep.desc"
	}, {
		coords:      [[64.656,62.734],
		             [41.328,81.109]],
		desc:        "t:innkeep.desc"
	}, {
		coords:      [51.438,61.234],
		extraLabel:  "t:innkeep.pheasantry.label",
		desc:        "t:innkeep.desc"
	}, {
		coords:      [90.703,47.578],
		extraLabel:  "t:innkeep.auberge.label",
		desc:        "t:innkeep.desc",
		liberate:    true
	}, {
		coords:      [63.453,90.625],
		extraLabel:  "t:innkeep.barrelandbung.label",
		desc:        "t:innkeep.desc"
	}, {
		coords:      [113.891,66.391],
		extraLabel:  "t:innkeep.salamander.label",
		desc:        "t:innkeep.desc",
		liberate:    true
	}, {
		coords:      [52.128,65.000],
		extraLabel:  "t:innkeep.winery.label",
		desc:        "t:innkeep.desc"
	}, {
		coords:      [47.625,64.625],
		extraLabel:  "t:innkeep.clever.label",
		desc:        "t:innkeep.desc",
		after:       "sidequest.father"
	}],
	// ----------------- Knights in Distress ------------
	kid: [{
		coords:      [[77.156,103.594],
		             [97.813,49.516],
		             [38.203,54.750]]
	}],
	// ----------------- Monster Dens -------------------
	monsterden: [{
		coords:      [[65.266,43.938],
		             [96.047,100.828],
		             [107.422,76.516]]
	}, {
		coords:      [75.656,89.453],
		groupId:     "dun_tynne_den"
	}, {
		coords:      [89.453,108.266],
		groupId:     "basane_den"
	}],
	// ----------------- Monster Nests ------------------
	monsternest: [{
		coords:      [[70.156,74.109],
		             [48.188,84.078],
		             [58.813,41.594],
		             [32.188,79.984],
		             [33.250,84.797],
		             [93.188,110.281],
		             [68.766,115.000]]
	}, {
		coords:      [76.328,86.969],
		underground: true,
		entrances:   "dun_tynne_den"
	}, {
		coords:      [[75.484,40.313],
		             [75.328,40.578]],
		during:      "contract.biggamehunter"
	}],
	// ----------------- Notice Boards ------------------
	notice: [{
		coords:      [[84.391,55.125],
		             [75.141,74.844],
		             [53.375,63.719],
		             [64.328,89.297],
		             [41.750,80.313],
		             [71.719,102.219],
		             [93.609,65.781]]
	}],
	// ----------------- Persons in Distress ------------
	pid: [{
		coords:      [88.750,40.984],
		id:          "armorer_pid"
	}, {
		coords:      [112.859,81.688],
		id:          "shopkeeper_pid"
	}, {
		coords:      [60.125,113.047],
		id:          "cockatrice_shopkeeper_pid"
	}, {
		coords:      [108.438,82.219],
		underground: true,
		entrances:   "herbalist_pid_cave",
		id:          "herbalist_pid"
	}, {
		coords:      [50.953,102.719],
		id:          "blacksmith_pid"
	}],
	// ----------------- Places of Power ----------------
	pop: [{
		coords:      [48.422,100.266],
		extraLabel:  "pop.quen.label",
		underground: true,
		entrances:   "quen_cave"
	}, {
		coords:      [61.531,44.969],
		extraLabel:  "pop.axii.label",
		underground: true,
		entrances:   "albertus_grotto"
	}, {
		coords:      [36.359,59.375],
		extraLabel:  "pop.aard.label"
	}, {
		coords:      [68.625,114.844],
		extraLabel:  "pop.igni.label",
		underground: true,
		entrances:   "ussar_cave"
	}, {
		coords:      [119.188,74.125],
		extraLabel:  "pop.yrden.label"
	}],
	// ----------------- Points of Interest -------------
	poi: [{
		coords:      [53.768,61.625],
		label:       "t:poi.ducal.label"
	}, {
		coords:      [5.500,4.000],
		label:       "#__t:poi.photo__",
		extraDesc:   ["poi.easter.desc",
		              "t:poi.photo.desc"]
	}, {
		coords:      [52.063,64.781],
		label:       "t:poi.reginald.label",
		extraDesc:   "t:poi.reginald.desc",
		special:     true
	}, {
		coords:      [52.281,56.406],
		label:       "t:poi.haremask.label",
		after:       "mainquest.toussaint"
	}, {
		coords:      [[27.781,82.109],
		             [27.547,81.125],
		             [27.547,81.656]],
		label:       "t:poi.tesham.label",
		extraDesc:   "t:poi.tesham.desc",
		underground: true,
		entrances:   "tesham_ruins",
		during:      "mainquest.cage"
	}, {
		coords:      [[33.828,59.094],
		             [31.516,56.219],
		             [22.344,60.375]],
		label:       "t:poi.hengaidth.label",
		extraDesc:   "t:poi.hengaidth.desc",
		underground: true,
		entrances:   "elder_cave",
		during:      "mainquest.bloodsimple"
	}, {
		coords:      [45.438,80.047],
		label:       "t:poi.cake.label",
		extraDesc:   "t:poi.cake.desc",
		underground: true,
		entrances:   "mutagen_dungeon",
		during:      "sidequest.facethestrage"
	}],
	// ----------------- Scavenger Hunts ----------------
	scavengerhunt: [{
		coords:      [113.609,81.078],
		upgrade:     "grandmaster",
		school:      "feline",
		items:       "armor"
	}, {
		coords:      [107.422,77.000],
		upgrade:     "grandmaster",
		school:      "feline",
		items:       ["gauntlets", "silverSword", "steelSword"]
	}, {
		coords:      [116.781,71.500],
		upgrade:     "grandmaster",
		school:      "feline",
		items:       ["boots", "trousers"]
	}, {
		coords:      [80.250,108.641],
		upgrade:     "grandmaster",
		school:      "griffin",
		items:       ["armor", "trousers", "silverSword"],
		underground: true,
		entrances:   "montcrane_hanse"
	}, {
		coords:      [69.078,116.578],
		upgrade:     "grandmaster",
		school:      "griffin",
		items:       ["boots", "gauntlets", "steelSword"]
	}, {
		coords:      [43.656,96.250],
		upgrade:     "grandmaster",
		school:      "manticore",
		items:       "armor"
	}, {
		coords:      [91.547,106.172],
		upgrade:     "grandmaster",
		school:      "manticore",
		items:       "gauntlets"
	}, {
		coords:      [50.703,50.938],
		upgrade:     "grandmaster",
		school:      "manticore",
		items:       "silverSword",
		underground: true,
		entrances:   "murky_cave"
	}, {
		coords:      [69.984,42.813],
		upgrade:     "grandmaster",
		school:      "manticore",
		items:       "steelSword"
	}, {
		coords:      [98.859,57.922],
		upgrade:     "grandmaster",
		school:      "manticore",
		items:       ["boots", "trousers"],
		underground: true,
		entrances:   "lebioda_temple"
	}, {
		coords:      [65.953,91.953],
		upgrade:     "grandmaster",
		school:      "ursine",
		items:       ["armor", "gauntlets", "silverSword"],
		underground: true,
		entrances:   "flovive_cellar"
	}, {
		coords:      [71.453,88.109],
		upgrade:     "grandmaster",
		school:      "ursine",
		items:       ["boots", "trousers", "steelSword"],
		underground: true,
		entrances:   "owl_eye_grottos"
	}, {
		coords:      [48.891,101.328],
		upgrade:     "grandmaster",
		school:      "wolven",
		items:       ["gauntlets", "silverSword", "steelSword"],
		underground: true,
		entrances:   "termes_ruins"
	}, {
		coords:      [48.797,100.172],
		upgrade:     "grandmaster",
		school:      "wolven",
		items:       ["armor", "boots", "trousers"],
		underground: true,
		entrances:   "termes_ruins"
	}],
	// ----------------- Shopkeepers --------------------
	shopkeeper: [{
		coords:      [85.391,72.594],
		extraLabel:  "t:shopkeeper.vintner.label",
		sells:       ["crafting", "drinks"],
		after:       "sidequest.vc_rivecalme"
	}, {
		coords:      [56.266,44.641],
		extraLabel:  "t:shopkeeper.vintner.label",
		sells:       ["food", "drinks"],
		after:       "sidequest.vc_duchaton"
	}, {
		coords:      [49.000,92.688],
		extraLabel:  "t:shopkeeper.vintner.label",
		sells:       ["food", "drinks"],
		after:       "sidequest.vc_cleaning"
	}, {
		coords:      [90.672,86.859],
		extraLabel:  "t:shopkeeper.vintner.label",
		sells:       ["runestones", "alchemy"],
		underground: true,
		entrances:   "dun_crossroads_cave",
		after:       "sidequest.vc_dun"
	}, {
		coords:      [50.719,65.109],
		sells:       ["paintings", "crafting"]
	}, {
		coords:      [[63.734,89.188],
		             [47.937,64.562]],
		sells:       "crafting"
	}, {
		coords:      [53.578,73.188],
		extraLabel:  "t:shopkeeper.dye.label",
		sells:       ["dye", "dyeRemover"]
	}, {
		coords:      [53.469,61.500],
		extraLabel:  "shopkeeper.bookMerchant.label",
		desc:        "shopkeeper.bookMerchant.desc"
	}, {
		coords:      [113.047,81.781],
		sells:       ["crafting", "drinks"],
		rescueFrom:  "shopkeeper_pid"
	}, {
		coords:      [75.656,75.750],
		sells:       ["crafting", "drinks"],
		rescueFrom:  "cockatrice_shopkeeper_pid"
	}, {
		coords:      [55.344,62.078],
		extraLabel:  "shopkeeper.tailor.label",
		desc:        "shopkeeper.tailor.desc"
	}, {
		coords:      [58.359,71.797],
		extraLabel:  "t:shopkeeper.butcher.label",
		sells:       "food"
	}, {
		coords:      [53.813,62.953],
		extraLabel:  "shopkeeper.banker.label",
		desc:        "shopkeeper.banker.desc"
	}, {
		coords:      [[57.453,68.234],
		             [40.063,80.672]],
		sells:       ["crafting", "drinks"]
	}],
	// ----------------- Sidequests ---------------------
	sidequest: [{
		coords:      [52.844,65.000],
		name:        "onlyone",
		baw:         true
	}, {
		coords:      [74.600,77.000],
		name:        "wildkingdom",
		baw:         true
	}, {
		coords:      [74.600,76.500],
		name:        "kingforhire",
		baw:         true
	}, {
		coords:      [54.234,63.688],
		name:        "facethestrage",
		baw:         true
	}, {
		coords:      [83.891,55.156],
		name:        "knightstale",
		baw:         true
	}, {
		coords:      [84.281,49.844],
		name:        "knightstale",
		baw:         true
	}, {
		coords:      [48.094,64.375],
		name:        "tilldeath",
		baw:         true
	}, {
		coords:      [50.719,65.875],
		name:        "master",
		baw:         true
	}, {
		coords:      [52.281,65.234],
		name:        "granite",
		baw:         true
	}, {
		coords:      [52.844,64.000],
		name:        "smittenkight",
		baw:         true,
		after:       "mainquest.toussaint"
	}, {
		coords:      [52.844,64.500],
		name:        "placelikehome",
		baw:         true
	}, {
		coords:      [50.453,63.734],
		name:        "paperchase",
		baw:         true
	}, {
		coords:      [51.438,63.797],
		name:        "portait",
		baw:         true,
		after:       "sidequest.smittenkight"
	}, {
		coords:      [42.625,89.625],
		name:        "cosplay",
		baw:         true
	}, {
		coords:      [66.500,75.203],
		name:        "grist",
		baw:         true,
		after:       "mainquest.cage",
		before:      "mainquest.toys"
	}, {
		coords:      [64.703,43.500],
		name:        "father",
		baw:         true
	}, {
		coords:      [47.156,63.750],
		name:        "sheers",
		baw:         true,
		after:       "sidequest.smittenkight"
	}, {
		coords:      [70.468,67.253],
		name:        "placelikehome",
		baw:         true,
		after:       "mainquest.toussaint"
	}, {
		coords:      [70.468,67.453],
		name:        "hunger",
		baw:         true,
		after:       "mainquest.cage"
	}, {
		coords:      [57.796,87.000],
		name:        "jailbird",
		baw:         true,
		during:      "mainquest.burlap"
	}, {
		coords:      [98.656,58.188],
		name:        "prophet",
		baw:         true,
		underground: true,
		entrances:   "lebioda_temple"
	}, {
		coords:      [[47.312,63.203],
		             [58.875,65.500],
		             [51.922,67.813]],
		name:        "ff_toussaint",
		baw:         true
	}, {
		coords:      [59.063,75.141],
		name:        "ff_raging",
		baw:         true,
		after:       "sidequest.ff_toussaint"
	}, {
		coords:      [93.750,65.906],
		name:        "ww_coronata",
		baw:         true,
		after:       "sidequest.ww_belgaard"
	}, {
		coords:      [74.600,76.000],
		name:        "ww_belgaard",
		baw:         true
	}, {
		coords:      [93.734,65.562],
		name:        "ww_consorting",
		baw:         true,
		after:       "sidequest.ww_deus",
		before:      ["sidequest.ww_coronata",
		              "sidequest.ww_vermentino"]
	}, {
		coords:      [93.750,66.234],
		name:        "ww_vermentino",
		baw:         true,
		after:       "sidequest.ww_belgaard"
	}, {
		coords:      [91.094,86.703],
		name:        "vc_dun",
		baw:         true
	}, {
		coords:      [49.047,92.781],
		name:        "vc_cleaning",
		baw:         true
	}, {
		coords:      [85.563,72.172],
		name:        "vc_rivecalme",
		baw:         true
	}, {
		coords:      [79.640,53.656],
		name:        "vc_chuchote",
		baw:         true
	}, {
		coords:      [56.265,44.343],
		name:        "vc_duchaton",
		baw:         true
	}, {
		coords:      [94.609,50.297],
		name:        "bf1",
		baw:         true
	}, {
		coords:      [92.063,63.344],
		name:        "bf2",
		baw:         true
	}, {
		coords:      [89.781,56.984],
		name:        "bf3",
		baw:         true
	}, {
		coords:      [107.750,72.266],
		name:        "bf4",
		baw:         true
	}, {
		coords:      [101.484,61.531],
		name:        "bf5",
		baw:         true
	}],
	// ----------------- Sign Posts ---------------------
	signpost: [{
		coords:      [85.578,74.844],
		name:        "t:dulcineawindmill"
	}, {
		coords:      [76.563,75.891],
		name:        "t:cockatrice"
	}, {
		coords:      [70.719,69.219],
		name:        "t:corvobianco"
	}, {
		coords:      [58.594,55.828],
		name:        "t:palace"
	}, {
		coords:      [52.188,53.859],
		name:        "t:palacegardens"
	}, {
		coords:      [49.188,67.703],
		name:        "t:gate"
	}, {
		coords:      [39.563,79.563],
		name:        "t:francollarts"
	}, {
		coords:      [77.813,41.813],
		name:        "t:fort"
	}, {
		coords:      [91.297,47.344],
		name:        "t:fox"
	}, {
		coords:      [85.422,55.938],
		name:        "t:castelravello"
	}, {
		coords:      [47.969,78.094],
		name:        "t:cemetry"
	}, {
		coords:      [55.359,88.313],
		name:        "t:prison"
	}, {
		coords:      [46.781,92.297],
		name:        "t:farm"
	}, {
		coords:      [46.406,99.547],
		name:        "t:ruins"
	}, {
		coords:      [35.734,94.438],
		name:        "t:cottage"
	}, {
		coords:      [27.500,80.031],
		name:        "t:mutnaruins"
	}, {
		coords:      [48.063,63.016],
		name:        "t:embassy"
	}, {
		coords:      [53.859,63.641],
		name:        "t:granplace"
	}, {
		coords:      [64.734,64.125],
		name:        "t:tunier"
	}, {
		coords:      [96.391,59.031],
		name:        "t:statue"
	}, {
		coords:      [34.719,67.375],
		name:        "t:hortense"
	}, {
		coords:      [64.609,90.953],
		name:        "t:flovive"
	}, {
		coords:      [69.688,115.422],
		name:        "t:fortussar"
	}, {
		coords:      [78.328,107.422],
		name:        "t:montcranecastle"
	}, {
		coords:      [82.219,85.750],
		name:        "t:duntynnecastle"
	}, {
		coords:      [79.984,94.141],
		name:        "t:duntynnehillside"
	}, {
		coords:      [113.828,74.422],
		name:        "t:arthachpalaceruins"
	}, {
		coords:      [110.344,66.078],
		name:        "t:thesilversalamanderinn"
	}, {
		coords:      [104.281,80.156],
		name:        "t:tradingpost"
	}, {
		coords:      [93.203,73.578],
		name:        "t:coronatavineyard"
	}, {
		coords:      [88.438,100.969],
		name:        "t:basanefarm"
	}, {
		coords:      [65.719,74.813],
		name:        "t:croixmill"
	}, {
		coords:      [57.328,64.453],
		name:        "t:coopersgate"
	}, {
		coords:      [54.844,68.781],
		name:        "t:haborgate"
	}, {
		coords:      [58.500,70.047],
		name:        "t:sansebastian"
	}, {
		coords:      [55.859,72.984],
		name:        "t:beauclairport"
	}, {
		coords:      [92.188,90.406],
		name:        "t:duntynnecrossroads"
	}, {
		coords:      [93.547,66.094],
		name:        "t:plegmundsbridge"
	}, {
		coords:      [78.234,52.672],
		name:        "t:chuchotecave"
	}, {
		coords:      [76.953,65.938],
		name:        "t:sansretourvalley"
	}, {
		coords:      [58.563,42.484],
		name:        "t:riouxcannesoutpost"
	}, {
		coords:      [44.078,54.172],
		name:        "t:seidhellyghadamphitheater"
	}, {
		coords:      [43.031,70.906],
		name:        "t:belgaardvineyard"
	}, {
		coords:      [45.078,65.547],
		name:        "t:lebiodasgate"
	}, {
		coords:      [71.750,100.203],
		name:        "t:ardaisoquarry"
	}, {
		coords:      [59.938,100.188],
		name:        "t:casteldacciaabandonedestate"
	}],
	// ----------------- Signal Fires -------------------
	signalfire: [{
		coords:      [[81.219,109.656],
		             [117.016,71.484]]
	}, {
		coords:      [97.563,44.672],
		underground: true,
		entrances:   "foxhollow_hanse"
	}],
	// ----------------- Stashes ------------------------
	stash: [{
		coords:      [70.359,67.219]
	}],
	// ----------------- Treasure -----------------------
	treasure: [{
		coords:      [[78.547,44.234],
		             [78.547,40.141],
		             [60.141,114.266],
		             [81.250,107.906],
		             [96.141,106.125],
		             [74.922,74.969],
		             [83.328,75.484],
		             [92.063,78.313],
		             [75.969,64.844],
		             [76.000,63.906],
		             [47.156,79.797],
		             [48.109,100.172],
		             [49.266,100.203],
		             [28.672,82.281],
		             [28.547,81.328],
		             [28.375,81.766],
		             [57.734,84.828],
		             [68.391,45.000],
		             [102.266,64.813],
		             [79.453,101.906],
		             [79.922,101.688],
		             [80.219,102.047],
		             [94.453,94.625],
		             [90.75,105.547],
		             [77.703,103.750],
		             [80.266,107.391],
		             [47.734,79.797]]
	}, {
		coords:      [[97.109,44.141],
		             [96.281,44.500]],
		underground: true,
		entrances:   "foxhollow_hanse"
	}, {
		coords:      [101.859,61.484],
		during:      "sidequest.bf5"
	}, {
		coords:      [93.156,52.438],
		underground: true,
		entrances:   "cave1"
	}, {
		coords:      [42.641,55.703],
		underground: true,
		entrances:   "amphitheater_cave"
	}, {
		coords:      [104.438,66.391],
		underground: true,
		entrances:   "again_cave"
	}, {
		coords:      [[39.188,67.297],
		             [40.219,67.969]],
		underground: true,
		entrances:   "barber_cave"
	}, {
		coords:      [61.594,45.203],
		underground: true,
		entrances:   "albertus_grotto"
	}, {
		coords:      [63.406,49.813],
		underground: true,
		entrances:   "cave2"
	}, {
		coords:      [76.641,88.047],
		underground: true,
		entrances:   "dun_tynne_den"
	}, {
		coords:      [69.516,88.094],
		underground: true,
		entrances:   "owl_eye_grottos"
	}, {
		coords:      [58.266,49.563],
		underground: true,
		entrances:   "paint_cave"
	}, {
		coords:      [45.391,78.078],
		underground: true,
		entrances:   "regis_hideout",
		after:       "mainquest.cage"
	}, {
		coords:      [[48.313,82.469],
		             [47.172,83.125],
		             [47.234,83.953],
		             [47.625,85.172]],
		underground: true,
		entrances:   "mutagen_dungeon",
		during:      "sidequest.facethestrage"
	}, {
		coords:      [46.688,100.109],
		underground: true,
		entrances:   "termes_ruins_south",
		during:      "sidequest.facethestrage"
	}, {
		coords:      [[48.375,101.406],
		             [48.531,100.500]],
		underground: true,
		entrances:   "termes_ruins",
		during:      "sidequest.facethestrage"
	}, {
		coords:      [[63.438,81.219],
		             [51.375,84.938],
		             [50.891,85.422],
		             [50.781,85.703],
		             [50.641,83.656],
		             [50.875,83.891],
		             [51.141,84.281],
		             [87.750,41.156],
		             [91.688,106.781],
		             [59.953,80.250],
		             [37.672,62.344],
		             [38.109,61.797],
		             [72.625,49.672]],
		underwater:  true
	}, {
		coords:      [[84.891,73.891],
		             [84.984,73.547]],
		underwater:  true,
		underground: true,
		entrances:   "rivecalme_storehouse"
	}, {
		coords:      [[47.656,93.813],
		             [47.156,93.188]],
		underwater:  true,
		underground: true,
		entrances:   "cleaning_cave"
	}, {
		coords:      [87.719,108.000],
		underwater:  true,
		underground: true,
		entrances:   "basane_den"
	}],
	// ----------------- Treasure Hunts -----------------
	treasurehunt: [{
		coords:      [69.203,42.016],
		name:        "experiment",
		baw:         true
	}, {
		coords:      [92.125,54.938],
		name:        "stranger",
		baw:         true
	}, {
		coords:      [89.141,53.375],
		name:        "carnarvon",
		baw:         true
	}, {
		coords:      [57.859,85.031],
		name:        "escapology",
		baw:         true
	}, {
		coords:      [77.141,42.047],
		name:        "suffering",
		baw:         true
	}, {
		coords:      [102.297,64.109],
		name:        "again",
		baw:         true
	}, {
		coords:      [42.547,54.688],
		name:        "enjoytheplay",
		baw:         true
	}, {
		coords:      [24.234,72.422],
		name:        "gardener",
		baw:         true
	}, {
		coords:      [96.047,80.453],
		name:        "eightdays",
		baw:         true
	}, {
		coords:      [44.219,64.484],
		name:        "selina",
		baw:         true
	}, {
		coords:      [63.653,81.234],
		name:        "widow",
		baw:         true
	}, {
		coords:      [61.188,102.641],
		name:        "filibert",
		baw:         true
	}, {
		coords:      [54.250,106.828],
		name:        "doh",
		baw:         true
	}, {
		coords:      [95.984,88.625],
		name:        "stink",
		baw:         true
	}, {
		coords:      [37.594,97.641],
		name:        "spoon",
		baw:         true,
		after:       "mainquest.cage"
	}],
	// ----------------- Vineyard Infestations ----------
	vineyardinfestation: [{
		coords:      [[75.469,62.594],
		             [97.859,70.625],
		             [46.453,75.563],
		             [79.125,86.391],
		             [77.875,95.344]]
	}]
}; };

registerMap({
	name:        "toussaint",
	ns:          "t",
	bounds:      [{ lat: 0, lng: 0 }, { lat: 144, lng: 144 }],
	initialPos:  [72, 72],
	minZoom:     2,
	maxZoom:     8,
	nativeZoom:  6,
	initialZoom: 3,
	getMapData:  getMapData
}); }
