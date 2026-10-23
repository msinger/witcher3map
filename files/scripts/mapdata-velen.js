{ let getMapData = function(i) { return {
	// ----------------- Abandoned Sites ----------------
	abandoned: [{
		coords:      [[82.797,87.984],
		             [238.156,201.687],
		             [99.938,130.172]]
	}, {
		coords:      [122.281,179.266], // 1x Alghoul (L9), 5x Ghoul (L9)
		id:          "abandonedFerryStation",
		name:        "ghoul",
		level:       "#9"
	}, {
		coords:      [115.828,133.875], // 4x Drowner (L4), {optional: 2x Drowner (Underwater) (L10)}
		name:        "drowner",
		level:       "#4"
	}, {
		coords:      [138.031,160.625], // 4x Drowner (L9)
		name:        "drowner",
		level:       "#9"
	}, {
		coords:      [86.703,27.938],   // 1x Leader-Sword (L6), 2x Sword (L5), 2x Axe (L5), 2x Mace (L5), 5x Crossbow (L5)
		level:       "#5 & 6"
	}, {
		coords:      [[106.219,31.016], // 1x Axe (L7), 1x Sword (L7), 1x Club (L7), 1x Bow (L7)
		             [75.875,26.844]],  // 1x Axe (L7), 3x Sword (L7), 1x Club (L7), 1x Bow (L7), 1x Crossbow (L7)
		level:       "#7"
	}, {
		coords:      [33.969,99.250],   // 1x Endrega Warrior (L11), 3x Endrega Worker (L9)
		name:        "endrega",
		level:       "#9 & 11"
	}, {
		coords:      [29.984,48.000],   // 6x Sword (L9), 3x Ranged (L9)
		level:       "#9"
	}, {
		coords:      [241.125,155.875], // all Fallen Knight: 2x Sword (L33), 1x Sword-Shield (L33), 1x Hammer-2H (L33), 1x Mace (L33), 1x Crossbow (L33) (in ep1_poi_04)
		level:       "#33" // TODO: Check if this contains diagrams for the 'From Ofier's Distant Shores' quest.
	}, {
		coords:      [239.750,69.937],  // 1x Bilge Hag (L34), 3x Drowned Dead (L34) (in ep1_poi_06)
		name:        "bilgehag",
		level:       "#34"
	}, {
		coords:      [250.250,143.500], // 5x Wraith (L29) (in ep1_poi_07)
		name:        "wraith",
		level:       "#29"
	}, {
		coords:      [185.750,209.531], // 6x Ghoul (L34) (in ep1_poi_08)
		name:        "ghoul",
		level:       "#34"
	}, {
		coords:      [177.969,211.656], // 1x Arachnomorph (L30), 4x Arachnomorph (L34) (in ep1_poi_30)
		name:        "arachnomorph",
		level:       "#30 & 34"
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
		             [158.047,166.344]],
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
		id:          "yoana",
		extraLabel:  ["craftlevel.master", "v:armorer.yoana.label"],
		notBefore:   "sidequest.masterarmor"
	}, {
		coords:      [104.734,77.531],
		id:          "fergus",
		extraLabel:  ["craftlevel.journeyman", "v:armorer.fergus.label"]
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
		coords:      [175.547,83.125],  // 1x Leader-Sword-Shield (L9), 1x Club (L9), 1x Spear (L9)
		id:          "lucianCamp",
		level:       "#9"
	}, {
		coords:      [47.000,123.172],  // 1x Club-Shield (L9), 1x Axe (L9), 1x Mace (L9), 1x Club (L9), 1x Ranged (L9)
		id:          "paintingCamp",
		level:       "#9"
	}, {
		coords:      [38.828,153.984],  // 2x Sword (L9), 1x Ranged (L9)
		id:          "oldBridgeCamp",
		level:       "#9"
	}, {
		coords:      [97.828,124.594],  // 1x Club-Shield (L9), 1x Axe (L9), 3x Bow (L7)
		id:          "circlesCamp",
		level:       "#7 & 9"
	}, {
		coords:      [[39.813,172.813],  // 1x Axe (L7), 1x Mace (L7), 1x Club (L7)
		             [57.250,216.813],   // 1x Axe (L7), 1x Mace (L7), 1x Club (L7)
		             [61.156,203.656],   // 1x Axe (L7), 1x Mace (L7), 1x Club (L7)
		             [55.250,182.750],   // 1x Axe (L7), 1x Mace (L7), 1x Club (L7)
		             [133.156,61.844],   // 1x Axe (L7), 1x Mace (L7), 1x Club (L7)
		             [122.938,63.125],   // 1x Axe (L7), 1x Mace (L7), 1x Club (L7)
		             [141.781,119.922],  // 1x Axe (L7), 1x Mace (L7), 1x Club (L7)
		             [194.781,177.625],  // 1x Axe (L7), 1x Mace (L7), 1x Club (L7)
		             [92.125,55.750],    // 1x Axe (L7), 1x Mace (L7), 1x Club (L7)
		             [51.938,19.578],    // 1x Axe (L7), 1x Mace (L7), 1x Club (L7)
		             [61.953,184.094],   // 1x Axe-2H (L7), 1x Mace (L7), 1x Club (L7)
		             [85.156,186.453],   // 1x Axe-2H (L7), 1x Mace (L7), 1x Club (L7)
		             [70.500,141.219],   // 1x Axe-2H (L7), 1x Mace (L7), 1x Club (L7)
		             [160.281,153.641],  // 1x Axe-2H (L7), 1x Mace (L7), 1x Club (L7)
		             [222.156,121.625],  // 1x Axe-2H (L7), 1x Mace (L7), 1x Club (L7)
		             [167.406,182.281],  // 1x Axe-2H (L7), 1x Mace (L7), 1x Club (L7)
		             [167.875,211.000],  // 1x Axe-2H (L7), 1x Mace (L7), 1x Club (L7)
		             [158.875,209.938],  // 1x Axe-2H (L7), 1x Mace (L7), 1x Club (L7)
		             [174.469,205.500],  // 1x Axe-2H (L7), 1x Mace (L7), 1x Club (L7)
		             [126.844,191.203],  // 1x Axe-2H (L7), 1x Mace (L7), 1x Club (L7)
		             [129.453,188.953],  // 1x Axe-2H (L7), 1x Mace (L7), 1x Club (L7)
		             [161.031,96.531],   // 1x Axe-2H (L7), 1x Mace (L7), 1x Club (L7)
		             [151.172,68.781],   // 1x Axe-2H (L7), 1x Mace (L7), 1x Club (L7)
		             [136.625,89.219],   // 1x Axe-2H (L7), 1x Mace (L7), 1x Club (L7) // TODO: Check if this is on in-game map.
		             [72.250,54.875],    // 1x Axe-2H (L7), 1x Mace (L7), 1x Club (L7)
		             [64.563,90.172],    // 1x Axe-2H (L7), 1x Mace (L7), 1x Club (L7)
		             [28.844,101.078]],  // 1x Axe-2H (L7), 1x Mace (L7), 1x Club (L7)
		level:       "#7",
		notInGame:   true
	}, {
		disabled:    true, // Disabled by HoS DLC.
		coords:      [243.156,149.406],  // 1x Axe-2H (L7), 1x Mace (L7), 1x Club (L7)
		level:       "#7",
		notInGame:   true
	}, {
		coords:      [58.578,190.109],  // 2x Axe (L7), 1x Mace (L7), 1x Club (L7) (in _bald_mountain/bm_poe_01/mounted_bandits_group_01)
		level:       "#7",
		mounted:     true,
		notInGame:   true,
		cleared:     "guardedMeetingPoint",
		routes: [{
			name: "banditcamp.mounted.route",
			coords: [[59.609,186.922], [59.109,187.813], [58.859,189.000], [58.578,190.109], [58.844,191.422],
			        [58.828,192.531], [59.266,194.047], [59.656,194.813], [60.313,195.313], [60.578,196.359],
			        [58.047,199.672], [56.891,199.250], [54.766,199.719], [52.688,199.094], [52.156,197.656],
			        [52.156,194.750], [53.359,193.609], [54.953,193.609], [56.438,193.906], [57.734,193.516],
			        [58.141,192.891], [57.938,190.078], [58.422,187.719], [59.594,186.891]]
		}]
	}, {
		coords:      [125.344,71.031],  // 2x Axe (L7), 1x Mace (L7), 1x Club (L7) (in _crow_perch/cp_poe_north/mounted_bandits)
		level:       "#7",
		mounted:     true,
		notInGame:   true,
		routes: [{
			name: "banditcamp.mounted.route",
			coords: [[104.219,64.688], [104.969,64.219], [105.875,62.406], [106.531,62.219], [107.469,62.000],
			        [108.469,61.188], [109.969,60.938], [110.563,60.844], [111.344,61.313], [112.563,62.063],
			        [113.844,62.969], [115.250,63.156], [116.250,62.969], [117.813,61.969], [119.125,61.438],
			        [119.688,61.469], [120.844,61.813], [121.688,62.469], [122.000,63.688], [123.250,64.219],
			        [123.906,63.625], [126.281,64.813], [126.531,66.250], [125.906,67.406], [125.844,68.938],
			        [125.344,71.031], [125.469,72.094], [127.031,73.813], [127.094,75.125], [127.563,75.969],
			        [127.406,77.000], [126.750,78.313], [125.719,78.719], [125.219,79.781], [124.375,81.063],
			        [124.188,80.156], [123.906,79.938], [122.969,79.813], [122.094,79.250], [119.781,79.219],
			        [118.813,78.969], [118.031,78.063], [116.875,77.500], [115.969,77.375], [115.063,76.938],
			        [114.188,76.063], [113.625,75.813], [111.938,73.938], [111.406,72.656], [111.156,71.500],
			        [110.875,70.813], [109.188,69.594], [108.688,68.781], [108.188,67.344], [107.531,66.594],
			        [107.219,66.219], [107.000,65.875], [106.500,65.406], [105.469,65.156], [104.219,64.688]]
		}]
	}, {
		coords:      [[110.625,60.016],  // 3x Axe (L7), 1x Sword (L7), 1x Bow (L7) (in crow_perch/cp37_campfire)
		             [209.156,162.734],  // 1x Axe-2H (L7), 1x Mace (L7), 1x Club (L7)
		             [96.938,31.047],    // 1x Axe (L7), 2x Sword (L7), 1x Bow (L7)
		             [77.656,17.750]],   // 1x Leader-Sword (L7), 2x Axe (L7), 4x Sword (L7), 1x Club (L7), 1x Bow (L7), 1x Crossbow (L7)
		level:       "#7"
	}, {
		coords:      [108.234,145.344], // 1x Axe-Shield (L9), 1x Club-Shield (L9), 1x Axe (L9), 1x Mace (L9), 1x Club (L9), 2x Bow (L7)
		level:       "#7 & 9"
	}, {
		coords:      [[106.188,115.703], // 1x Leader-Axe2H (L9), 1x Sword (L9), 1x Ranged (L9)
		             [134.406,129.094],  // 3x Axe-2H (L9), 3x Mace (L9), 3x Club (L9)
		             [137.688,187.797],  // 1x Leader-Sword-Shield (L9), 3x Sword (L9), 2x Ranged (L9)
		             [85.125,33.172],    // 1x Leader-Axe2H (L9), 1x Sword (L9), 1x Ranged (L9)
		             [88.375,34.984]],   // 1x Axe2H (L9), 1x Sword (L9), 1x Ranged (L9)
		level:       "#9"
	}, {
		coords:      [80.125,166.000],  // 1x Leader-Axe2H (L9), 1x Axe (L9), 4x Ranged (L9), 3x Guard Dog (L1)
		level:       "#1 & 9"
	}, {
		coords:      [109.797,138.398], // 1x Cannibal (L3)
		label:       "v:banditcamp.cannibal.label",
		desc:        "v:banditcamp.cannibal.desc",
		level:       "#3",
		notInGame:   true,
	}, {
		coords:      [128.469,151.563], // Mostly random (L9)
		id:          "battlefieldCamp",
		level:       "#9"
	}, {
		coords:      [147.719,121.047], // 2x Axe (L7), 1x Mace (L7), 1x Club (L7)
		level:       "#7",
		mounted:     true,
		notInGame:   true,
		routes: [{
			name: "banditcamp.mounted.route",
			coords: [[149.125,117.719], [148.766,118.891], [148.594,120.063], [147.719,121.047],
			        [147.297,121.359], [146.219,120.750], [145.625,120.203], [145.625,119.266],
			        [146.094,118.250], [145.594,117.422], [145.188,116.859], [145.734,116.063],
			        [146.844,116.188], [148.219,116.688], [149.125,117.719]]
		}]
	}, {
		disabled:    true, // Disabled by HoS DLC.
		coords:      [187.406,184.219], // 2x Axe (L7), 1x Mace (L7), 1x Club (L7)
		level:       "#7",
		mounted:     true,
		notInGame:   true,
		routes: [{
			name: "banditcamp.mounted.route",
			coords: [[[184.063,181.172], [186.500,181.328], [189.266,180.344], [192.063,179.156],
			        [196.844,179.500], [198.625,181.344], [198.969,186.172], [196.484,186.141],
			        [195.000,186.156], [193.234,185.828], [192.453,185.438], [190.906,184.438],
			        [188.859,184.375], [187.406,184.219], [186.828,183.281], [186.281,181.953],
			        [184.063,181.172], [180.445,182.672], [179.891,183.281], [179.906,184.078],
			        [179.078,186.109], [177.297,186.656], [175.484,186.594], [174.375,188.656],
			        [175.219,188.750], [175.891,188.672], [176.375,189.203], [176.719,189.531],
			        [178.438,190.047], [178.578,190.297], [179.750,190.813], [180.641,190.453],
			        [180.953,190.297], [181.547,190.438], [182.422,189.969], [182.547,189.641],
			        [183.094,189.844], [183.844,190.016], [184.625,189.672], [185.297,189.578],
			        [186.031,189.781], [186.719,189.531], [187.422,189.078], [188.266,189.109],
			        [188.578,188.984], [189.781,188.641], [190.469,187.766], [190.797,187.594],
			        [191.188,186.875], [192.453,185.438]],
			        [[185.297,189.578], [185.844,187.313], [187.453,186.406], [187.406,184.219]]]
		}]
	}, {
		coords:      [173.375,104.391], // 2x Axe (L7), 1x Mace (L7), 1x Club (L7)
		level:       "#7",
		mounted:     true,
		notInGame:   true,
		routes: [{
			name: "banditcamp.mounted.route",
			coords: [[173.375,104.391], [173.859,104.922], [174.938,105.156], [175.656,105.813],
			        [175.969,106.406], [176.703,106.984], [177.250,107.125], [178.172,107.172],
			        [179.000,107.547], [178.813,108.094], [177.031,107.563], [176.094,107.828],
			        [175.328,107.422], [174.578,106.609], [173.625,106.031], [173.219,105.281],
			        [173.375,104.391]]
		}]
	}, {
		coords:      [94.344,37.016],   // Mostly random (L9)
		id:          "forestHutCamp",
		level:       "#9"
	}, {
		coords:      [96.375,42.266],   // 2x Axe (L7), 1x Mace (L7), 1x Club (L7)
		level:       "#7",
		mounted:     true,
		notInGame:   true,
		routes: [{
			name: "banditcamp.mounted.route",
			coords: [[96.375,42.266], [97.063,42.625], [97.453,43.172], [97.703,43.844], [98.297,44.625],
			        [98.875,44.813], [99.453,44.688], [100.000,44.813], [100.500,45.375], [100.516,45.938],
			        [100.297,46.500], [100.328,47.188], [100.797,48.047], [101.578,47.313], [102.484,45.313],
			        [100.500,45.375]]
		}]
	}, {
		coords:      [[67.531,23.656],  // 4x Club (L3), 3x Spear (L3)
		             [57.922,26.797]],  // 3x Club (L3), 1x Bow (L3)
		level:       "#3"
	}, {
		coords:      [[66.703,26.719],  // Cannibal Chief Hammer-2H (L5), and a shit ton of Cannibals (L3)
		             [72.953,24.188]],  // Cannibal Chief Hammer-2H (L5), 4x Club (L3), 2x Bow (L3)
		level:       "#3 & 5"
	}, {
		coords:      [[225.812,218.781], // all Fallen Knight: 1x Sword-Shield (L33), 4x Sword (L33), 1x Hammer-2H (L33), 4x Crossbow (L33) (in ep1_poi_09)
		             [252.875,113.687],  // all Fallen Knight: 1x Sword-Shield (L33), 2x Sword (L33), 1x Hammer-2H (L33), 2x Crossbow (L33) (in ep1_poi_11)
		             [260.937,165.437],  // all Fallen Knight: 1x Sword-Shield (L33), 2x Sword (L33), 1x Hammer-2H (L33), 2x Crossbow (L33) (in ep1_poi_12)
		             [260.625,178.468],  // all Fallen Knight: 1x Sword-Shield (L33), 2x Sword (L33), 1x Hammer-2H (L33), 2x Crossbow (L33) (in ep1_poi_13)
		             [257.468,208.500],  // all Fallen Knight: 1x Sword-Shield (L33), 1x Sword (L33), 1x Halberd (L33), 1x Mace (L33), 2x Crossbow (L33) (in ep1_poi_14)
		             [204.500,197.968],  // all Fallen Knight: 1x Sword-Shield (L33), 1x Sword (L33), 3x Hammer-2H (L33), 1x Crossbow (L33) (in ep1_poi_16)
		             [177.750,195.750],  // all Fallen Knight: 2x Sword (L33), 1x Halberd (L33), 1x Crossbow (L33) (in ep1_poi_17)
		             [214.656,223.281]], // all Fallen Knight: 1x Sword-Shield (L33), 1x Sword (L33), 1x Mace (L33), 3x Crossbow (L33) (in ep1_poi_23)
		label:       "v:banditcamp.fallen.label",
		level:       "#33"
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
		notBefore:   "sidequest.dumplings"
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
		notBefore:   "mainquest.bald"
	}, {
		coords:      [239.500,214.687],
		id:          "runewright",
		label:       "v:blacksmith.rune.label",
		extraLabel:  "v:blacksmith.dulla.label",
		desc:        "v:blacksmith.rune.desc",
		runewright:  true,
		notBefore:   "sidequest.en_s"
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
		notBefore:   "mainquest.wandering"
	}],
	// ----------------- Brothels -----------------------
	brothel: [{
		coords:      [201.547,98.188],
		name:        "v:crippledKate",
		notBefore:   "sidequest.arse"
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
		notBefore:   "sidequest.blood"
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
		notBefore:   "mainquest.wandering"
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
		notBefore:   "sidequest.masterarmor"
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
		notBefore:   "treasurehunt.shores"
	}, {
		coords:      [206.000,144.031],
		notBefore:   "contract.apirian"
	}, {
		coords:      [159.250,165.641],
		notInGame:   true,
		during:      "mainquest.evil",
		groupId:     "frog_lair"
	}, {
		coords:      [214.656,192.859],
		notInGame:   true,
		notBefore:   "mainquest.deadman",
		groupId:     "everec_crypt"
	}, {
		coords:      [179.438,175.406],
		groupId:     "temerian_hideout"
	}, {
		coords:      [183.219,191.281],
		groupId:     "est_tayiar"
	}, {
		coords:      [155.438,209.445], // TODO: Is this the entry location? Is ingame map marker wrong?
		notBefore:   "sidequest.darkness",
		groupId:     "cheese_dungeon",
		portal:      true,
		routes: [{
			name: "entrance.portal.dest.label",
			coords: [[155.438,209.445], [151.406,207.359]]
		}]
	}, {
		coords:      [151.484,213.055],
		notBefore:   "sidequest.darkness",
		groupId:     "cheese_dungeon2",
		portal:      true,
		underground: true,
		entrances:   "cheese_dungeon",
		notInGame:   true,
		routes: [{
			name: "entrance.portal.dest.label",
			coords: [[151.484,213.055], [158.719,209.828]]
		}]
	}, {
		coords:      [158.984,211.320],
		notBefore:   "sidequest.darkness",
		groupId:     "cheese_dungeon3",
		portal:      true,
		underground: true,
		entrances:   "cheese_dungeon2",
		notInGame:   true,
		routes: [{
			name: "entrance.portal.dest.label",
			coords: [[158.984,211.320], [155.508,209.586]]
		}]
	}, {
		coords:      [154.602,207.734],
		notBefore:   "sidequest.darkness",
		portal:      true,
		underground: true,
		entrances:   "cheese_dungeon3",
		notInGame:   true,
		routes: [{
			name: "entrance.portal.dest.label",
			coords: [[154.602,207.734], [155.398,209.070]]
		}]
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
		coords:      [44.461,39.664],
		label:       "v:entrance.wandering_cave.label",
		groupId:     "wandering_cave_entry"
	}, {
		coords:      [41.688,46.266],
		notBefore:   "contract.mystery"
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
		label:       "v:entrance.sabbath_cave.label",
		notBefore:   "mainquest.bald",
		groupId:     "sabbath_cave"
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
		notBefore:   "mainquest.escape",
		groupId:     "escape_well"
	}, {
		coords:      [150.109,169.797],
		during:      "mainquest.escape", // TODO: Is it accessible after the mission?
		groupId:     "oxenfurt_prison",
		notInGame:   true
	}, {
		coords:      [152.852,168.727],
		during:      "mainquest.junior", // TODO: Is it accessible after the mission?
		groupId:     "whoreson_basement",
		notInGame:   true
	}, {
		coords:      [251.812,134.875],
		groupId:     "spider_cave"
	}, {
		coords:      [226.875,151.562],
		notBefore:   "contract.doors"
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
		coords:      [49.109,53.047],
		label:       "v:entrance.wandering_cave.label",
		notInGame:   true,
		notBefore:   "mainquest.wandering",
		groupId:     "wandering_cave_exit"
	}, {
		coords:      [107.906,71.219],
		notInGame:   true,
		groupId:     "crows_perch_well"
	}, {
		coords:      [151.078,170.672],
		notInGame:   true,
		groupId:     "oxenfurt_blacksmith"
	}, {
		coords:      [57.313,158.188],
		notInGame:   true,
		groupId:     "hillock_lair"
	}, {
		coords:      [203.781,106.453],
		notInGame:   true,
		groupId:     "dreamer_basement",
		underground: true,
		notBefore:   "mainquest.dreaming"
	}, {
		coords:      [[94.266,184.891],
		             [96.203,184.750]],
		notInGame:   true,
		groupId:     "phantom_cave"
	}, {
		coords:      [37.547,123.734],
		groupId:     "sabbath_aux_cave",
		notInGame:   true
	}, {
		coords:      [[35.406,123.063],
		             [34.547,124.094]],
		groupId:     "sabbath_aux_cave",
		notInGame:   true
	}, {
		coords:      [37.906,123.781],
		notInGame:   true,
		groupId:     "coin_fetch_cave"
	}, {
		coords:      [33.250,132.172],
		label:       "v:entrance.sabbath_cave.label",
		notInGame:   true,
		groupId:     "sabbath_cave"
	}, {
		coords:      [218.352,101.594],
		label:       "v:entrance.bath_sewers.label",
		desc:        "v:entrance.bath_sewers.desc",
		notInGame:   true,
		groupId:     "bath_sewers"
	}, {
		coords:      [213.016,102.594],
		desc:        "v:entrance.bath_sewers.desc",
		notInGame:   true,
		notBefore:   "mainquest.flowers",
		groupId:     "bathhouse"
	}, {
		coords:      [135.344,127.547],
		during:      "sidequest.eternal",
		groupId:     "devils_pit"
	}, {
		coords:      [257.500,189.876],
		notInGame:   true,
		notBefore:   "sidequest.rose"
	}, {
		coords:      [[211.656,110.422],
		             [205.117,112.461]],
		label:       "v:entrance.bits_sewers.label",
		desc:        "v:entrance.bits_sewers.desc",
		groupId:     "bits_sewers"
	}, {
		coords:      [[214.398,108.336],
		             [217.188,106.000],
		             [219.719,108.742]], // TODO: Is this on the in-game map?
		label:       "v:entrance.gildorf_sewers.label",
		desc:        "v:entrance.gildorf_sewers.desc",
		groupId:     "gildorf_sewers"
	}, {
		coords:      [207.086,93.391],
		label:       "v:entrance.kingfisher_sewers.label",
		desc:        "v:entrance.kingfisher_sewers.desc",
		groupId:     "kingfisher_sewers"
	}, {
		coords:      [[195.094,103.867],
		             [199.109,103.289]],
		label:       "v:entrance.pass.label",
		desc:        "v:entrance.pass.desc",
		groupId:     "glory_sewers"
	}, {
		coords:      [209.849,104.909],
		label:       "v:entrance.kingfisher_sewers.label",
		desc:        "v:entrance.kingfisher_sewers.desc",
		notInGame:   true,
		notBefore:   "sidequest.never",
		groupId:     "kingfisher_sewers"
	}, {
		coords:      [210.383,104.352],
		label:       "v:entrance.morgue_sewers.label",
		desc:        "v:entrance.morgue_sewers.desc",
		notBefore:   "sidequest.sins",
		groupId:     "lower_morgue_sewers"
	}, {
		coords:      [201.328,103.164],
		notInGame:   true,
		notBefore:   "mainquest.pyres",
		groupId:     "kluhg_hatch"
	}, {
		coords:      [202.391,102.781], // TODO: Can you enter this from the canal before the quest?
		notBefore:   "mainquest.pyres",
		groupId:     "kluhg_hatch"
	}, {
		coords:      [213.758,106.242],
		label:       "v:entrance.morgue_sewers.label",
		desc:        "v:entrance.morgue_sewers.desc",
		notInGame:   true,
		notBefore:   "sidequest.sins",
		groupId:     "upper_morgue_sewers"
	}, {
		coords:      [218.000,110.703],
		label:       "v:entrance.whoreson_arena.label",
		desc:        "v:entrance.whoreson_arena.desc",
		notInGame:   true,
		notBefore:   "mainquest.junior",
		groupId:     "whoreson_arena"
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
		rescuable:   true
	}, {
		coords:      [101.343,80.187],
		name:        "crow",
		notBefore:   "mainquest.nilfgaardian"
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
		name:        "cache"
	}, {
		coords:      [205.875,95.843],
		name:        "drunken"
	}, {
		coords:      [93.625,76.937],
		name:        "dare1"
	}, {
		coords:      [199.125,117.375],
		name:        "dare2",
		notBefore:   "event.dare1"
	}, {
		coords:      [209.656,93.875],
		name:        "dare3",
		notBefore:   "event.dare2"
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
		notBefore:   "sidequest.never"
	}, {
		coords:      [237.938,149.906],
		name:        "gift",
		notBefore:   "mainquest.poet"
	}, {
		coords:      [185.750,145.312],
		name:        "strangers"
	}, {
		coords:      [195.343,88.265],
		name:        "strumpet"
	}, {
		coords:      [200.781,108.046],
		name:        "suspicious",
		notBefore:   "mainquest.pyres"
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
		notBefore:   "contract.drunk"
	}, {
		coords:      [157.531,169.500],
		name:        "passage2a",
		notBefore:   "event.passage1"
	}, {
		coords:      [159.563,178.578],
		name:        "passage2b",
		notBefore:   "event.passage1"
	}, {
		coords:      [189.500,98.640],
		name:        "raids",
		notBefore:   "mainquest.pyres",
		before:      "sidequest.never"
	}, {
		coords:      [149.312,166.500],
		name:        "neighborhood",
		notBefore:   "sidequest.neighborhood"
	}, {
		coords:      [87.203,164.265],
		name:        "hazardous2",
		notBefore:   "sidequest.hazardous1"
	}, {
		coords:      [42.234,203.172],
		name:        "death2",
		notBefore:   "sidequest.death1"
	}, {
		coords:      [204.594,210.031],
		name:        "trace2",
		notBefore:   "sidequest.trace1"
	}, {
		coords:      [215.328,105.031],
		name:        "raids2",
		notBefore:   "mainquest.pyres",
		before:      "sidequest.never"
	}, {
		coords:      [68.844,75.234],
		name:        "millie",
		notBefore:   "sidequest.cat"
	}, {
		coords:      [209.656,88.375],
		name:        "vivienne",
		notBefore:   "mainquest.humble"
	}, {
		coords:      [101.625,74.625],
		name:        "daughter1",
		notBefore:   "sidequest.crookback"
	}, {
		coords:      [102.094,78.188],
		name:        "daughter2",
		notBefore:   "sidequest.crookback"
	}, {
		coords:      [104.719,76.563],
		name:        "stable",
		notBefore:   "mainquest.family"
	}, {
		coords:      [225.425,151.080],
		name:        "doors2",
		notBefore:   "contract.doors"
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
		coords:      [[107.281,42.953], // 7x Drowner (L4) (in crow_perch/cp14_hangmans_avenue)
		             [91.563,19.516]],  // 4x Drowner (L4)
		name:        "drowner",
		level:       "#4"
	}, {
		coords:      [84.875,123.281],  // 1x Bear (L12) (in _crookback_bog/cb_poe_01/bear_group1)
		name:        "bear",
		level:       "#12"
	}, {
		coords:      [49.641,150.531],
		id:          "guardedAncientStoneCircle",
		name:        "earthelemental",
		level:       "#20"
	}, {
		coords:      [56.953,200.891],
		id:          "guardedMeetingPoint",
		name:        "earthelemental",
		level:       "#24"
	}, {
		coords:      [28.078,148.406],  // 1x Wyvern (L14) (in _bald_mountain/bm_poe_02/wyvern_group2)
		name:        "wyvern",
		level:       "#14",
	}, {
		coords:      [24.063,150.188],  // 1x Cyclops (L19) (in bald_mountain/bm1_abandoned_castle)
		name:        "cyclops",
		level:       "#19",
	}, {
		coords:      [43.328,149.781],  // 1x Bilge Hag (L20) (in bald_mountain/bm4_poisoned_pond)
		id:          "guardedPoisonPond",
		name:        "bilgehag",
		level:       "#20",
	}, {
		coords:      [132.000,69.516],  // 1x Cyclops (L18) (in crow_perch/cp11_handmans_glade)
		id:          "guardedSheep",
		name:        "cyclops",
		level:       "#18",
		after:       "contract.griffin"
	}, {
		coords:      [98.578,21.844],   // 1x {6h-18h: Noonwraith, 18h-6h: Nightwraith} (L15) (in nml_w_012)
		name:        "wraith",
		level:       "#15"
	}, {
		coords:      [69.406,162.688],  // 1x Water Hag (L8) (in crookback_bog/cb19_fossil)
		id:          "guardedFossilHag",
		name:        "waterhag",
		level:       "#8"
	}, {
		coords:      [93.516,99.344],   // 1x Forktail (L14) (in crow_perch/cp36_forktail)
		name:        "forktail",
		level:       "#14"
	}, {
		coords:      [147.047,57.047],  // 1x Basilisk (L14) (in crow_perch/cp38_mini_boss)
		id:          "guardedPerchBasilisk",
		name:        "basilisk",
		level:       "#14"
	}, {
		coords:      [[121.781,136.625], // 1x Alghoul (L13)
		             [34.438,93.125]],   // 1x Alghoul (L13)
		name:        "alghoul",
		level:       "#13"
	}, {
		coords:      [122.484,167.156], // 1x-2x Drowned Dead (L9), 4x-6x Drowner (L9)
		name:        "drowner",
		level:       "#9"
	}, {
		coords:      [171.500,119.516], // 1x Wyvern (L18)
		id:          "guardedPontarWyvern",
		name:        "wyvern",
		level:       "#18"
	}, {
		coords:      [[229.563,124.656], // 1x Bilge Hag (L15)
		             [144.641,87.578]],  // 1x Bilge Hag (L15)
		name:        "bilgehag",
		level:       "#15",
	}, {
		coords:      [239.594,104.219], // 1x Armored Arachas (L23)
		name:        "armoredarachas",
		level:       "#23",
	}, {
		coords:      [[215.016,126.328], // 1x Water Hag (L8)
		             [70.859,44.063]],   // 1x Water Hag (L8)
		name:        "waterhag",
		level:       "#8"
	}, {
		coords:      [164.563,198.594], // 1x Leshen (L20)
		name:        "leshen",
		level:       "#20"
	}, {
		coords:      [184.609,58.609],  // 1x Basilisk (L14)
		name:        "basilisk",
		level:       "#14"
	}, {
		coords:      [174.000,78.914],  // 1x {5:00-19:30: Noonwraith (L15), 19:30-5:00: Nightwraith} (L15)
		name:        "wraith",
		level:       "#15",
		after:       "sidequest.fromfar2"
	}, {
		coords:      [98.313,40.141],   // 1x Endrega Warrior (L9), 6x Endrega Worker (L9)
		name:        "endrega",
		level:       "#9"
	}, {
		coords:      [18.750,78.531],   // 1x Gargoyle (L19)
		name:        "gargoyle",
		level:       "#19"
	}, {
		coords:      [37.094,55.438],   // 2x Wraith (L7)
		name:        "wraith",
		level:       "#7"
	}, {
		coords:      [23.172,78.391],   // 1x {6h-22h: Noonwraith (L18), 22h-6h: Nightwraith} (L18)
		name:        "wraith",
		level:       "#18"
	}, {
		coords:      [248.437,162.687], // 1x Golem (L37) (in ep1_poi_03)
		name:        "golem",
		level:       "#37"
	}, {
		coords:      [258.843,129.187], // 1x Bear (L34) (in ep1_poi_24)
		name:        "bear",
		level:       "#34"
	}, {
		coords:      [181.156,220.687], // 1x Alghoul (L34), 6x Ghoul (L34) (in ep1_poi_33)
		name:        "alghoul",
		level:       "#34"
	}, {
		coords:      [246.250,182.812], // 4x Boar (L34) (in ep1_poi_35)
		name:        "boar",
		level:       "#34"
	}],
	// ----------------- Gwent Players ------------------
	gwent: [{
		coords:      [[205.438,99.578],
		             [209.703,102.953],
		             [204.547,109.125],
		             [199.141,101.578],
		             [209.453,94.750],
		             [212.156,96.172],
		             [216.281,104.438],
		             [210.859,113.031],
		             [211.969,114.422],
		             [159.344,164.703],
		             [107.641,54.969],
		             [70.688,73.453],
		             [81.969,41.453],
		             [33.672,204.953]],
		extraLabel:  "shopkeeper.label"
	}, {
		coords:      [200.859,98.078]
	}, {
		coords:      [[201.953,102.656],
		             [170.047,179.250]],
		extraLabel:  "herbalist.label"
	}, {
		coords:      [214.328,110.844],
		extraLabel:  "innkeep.label"
	}, {
		coords:      [198.409,107.094],
		extraLabel:  "innkeep.label",
		notBefore:   "sidequest.cabaret"
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
		id:          "kingfisherInnkeepGwent",
		extraLabel:  "innkeep.label",
		notBefore:   "sidequest.never"
	}, {
		coords:      [[158.281,166.453],
		             [178.844,176.203],
		             [82.453,40.422]],
		extraLabel:  "armorer.label"
	}, {
		coords:      [129.922,118.688],
		extraLabel:  "armorer.label",
		rescueFrom:  "mulbrydale_armorer_pid"
	}, {
		coords:      [84.000,70.125],
		id:          "claywichMerchantGwent",
		extraLabel:  "shopkeeper.label",
		rescueFrom:  "claywich_shopkeeper_pid"
	}, {
		coords:      [78.219,147.219],
		before:      "mainquest.family",
		weakBefore:  "mainquest.hillock"
	}, {
		coords:      [134.016,131.469],
		notBefore:   "sidequest.eternal"
	}, {
		coords:      [153.563,163.469],
		id:          "shaniGwent",
		extraLabel:  "v:gwent.shani.label"
	}, {
		coords:      [155.875,164.781],
		id:          "olgierdGwent",
		extraLabel:  "v:gwent.olgierd.label",
		notBefore:   "mainquest.evil",
		before:      "mainquest.marriage"
	}, {
		coords:      [104.297,76.969],
		id:          "perchQuartermasterGwent",
		extraLabel:  "v:shopkeeper.quartermaster.label"
	}, {
		coords:      [105.125,77.000], // TODO: Check if you can play Gwent with her only after she's available as master armorer.
		id:          "yoanaGwent",
		extraLabel:  "v:armorer.yoana.label"
	}, {
		coords:      [104.813,77.609],
		id:          "fergusGwent",
		extraLabel:  "v:armorer.fergus.label"
	}, {
		coords:      [187.875,152.038],
		id:          "circusMerchantGwent",
		extraLabel:  "shopkeeper.label"
	}, {
		coords:      [99.984,110.703],
		id:          "lindenvaleMerchantGwent",
		extraLabel:  "shopkeeper.label"
	}, {
		coords:      [101.750,76.297],
		id:          "perchTraderGwent",
		extraLabel:  "shopkeeper.label"
	}, {
		coords:      [185.375,117.734],
		id:          "cunnyInnkeepGwent",
		extraLabel:  "innkeep.label"
	}, {
		coords:      [199.188,126.813],
		id:          "sevenCatsInnkeepGwent",
		extraLabel:  "innkeep.label"
	}, {
		coords:      [206.406,96.734],
		id:          "sturgeonInnkeepGwent",
		extraLabel:  "innkeep.label"
	}, {
		coords:      [198.813,113.438],
		id:          "elihalGwent",
		extraLabel:  "v:shopkeeper.elihal.label"
	}],
	// ----------------- Gwent Quests -------------------
	gwentquest: [{
		coords:      [207.516,101.172],
		name:        "vivaldi",
		quest:       "sidequest.gw_city",
		notBefore:   "sidequest.gw_collect"
	}, {
		coords:      [214.406,103.469],
		name:        "dijkstra",
		extraDesc:   "gwentquest.afterPlayer",
		underground: true,
		entrances:   "bathhouse",
		quest:       "sidequest.gw_city",
		afterQuest:  "sidequest.gw_city",
		afterPlayer: "serenity",
		notBefore:   "mainquest.flowers",
		weakBefore:  "sidequest.reason"
	}, {
		coords:      [220.750,103.906],
		name:        "serenity",
		extraDesc:   "gwentquest.afterPlayer",
		quest:       "sidequest.gw_city",
		afterQuest:  "sidequest.gw_city",
		afterPlayer: "vivaldi",
		notBefore:   "sidequest.gw_collect"
	}, {
		coords:      [186.563,83.313],
		name:        "merchant",
		extraDesc:   "gwentquest.afterPlayer",
		quest:       "sidequest.gw_city",
		afterQuest:  "sidequest.gw_city",
		afterPlayer: "dijkstra",
		notBefore:   "sidequest.gw_collect"
	}, {
		coords:      [199.391,106.578],
		name:        "zoltan",
		quest:       "sidequest.gw_pals",
		notBefore:   "mainquest.dreaming"
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
		notBefore:   "sidequest.deadly",
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
		notBefore:   "mainquest.baron",
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
		notBefore:   "sidequest.thread"
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
		coords:      [153.063,45.953], // 1x Wyvern (L14)
		guarded:     true,
		name:        "wyvern",
		level:       "#14"
	}, {
		coords:      [54.469,51.313],  // 1x Golem (L6)
		guarded:     true,
		name:        "golem",
		level:       "#6",
		underground: true,
		entrances:   ["wandering_cave_entry", "wandering_cave_exit"],
		notBefore:   "mainquest.wandering"
	}, {
		coords:      [86.016,17.078],   // 2x-3x Drowner (L4) (in nml_w_013)
		guarded:     true,
		name:        "drowner",
		level:       "#4",
		areas: [{
			name: "monster.spawn",
			coords: [[88.391,15.250], [89.016,18.250], [86.594,18.922], [83.625,18.984], [82.641,17.328],
			        [82.094,14.156], [82.922,12.203], [87.047,12.547]]
		}]
	}, {
		coords:      [50.922,182.641],  // 1x Fiend (L22) (in crookback_bog/cb17_childprison)
		guarded:     true,
		name:        "fiend",
		level:       "#22"
	}, {
		coords:      [99.469,197.203],  // 2x Foglet (L4)
		guarded:     true,
		name:        "foglet",
		level:       "#4"
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
		             [107.500,119.313],
		             [59.219,188.797]]
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
		id:          "sturgeonInnkeep",
		extraLabel:  "v:innkeep.theGoldenSturgen.label",
		sells:       ["gwent", "food", "drinks"]
	}, {
		coords:      [220.609,104.172],
		id:          "serenity",
		extraLabel:  ["v:innkeep.passiflora.label", "gwentquest.serenity.label"],
		sells:       ["gwent", "food", "drinks"]
	}, {
		coords:      [214.000,110.672],
		extraLabel:  "v:innkeep.theNowhere.label",
		sells:       ["food", "drinks"]
	}, {
		coords:      [198.859,106.875],
		extraLabel:  "v:innkeep.rosemaryAndThyme.label",
		sells:       ["food", "drinks"],
		notBefore:   "sidequest.cabaret"
	}, {
		coords:      [198.875,126.656],
		id:          "sevenCatsInnkeep",
		extraLabel:  "v:innkeep.sevenCatsInn.label",
		sells:       ["gwent", "food", "drinks"]
	}, {
		coords:      [209.328,104.719],
		id:          "kingfisherInnkeep",
		extraLabel:  "v:innkeep.theKingfisher.label",
		sells:       ["gwent", "food", "drinks"]
	}, {
		coords:      [185.125,118.047],
		id:          "cunnyInnkeep",
		extraLabel:  "v:innkeep.cunnyOfTheGoose.label",
		sells:       ["gwent", "food", "drinks"]
	}, {
		coords:      [156.063,165.172],
		id:          "stjepan",
		extraLabel:  ["v:innkeep.theAlchemy.label", "gwentquest.stjepan.label"],
		sells:       ["gwent", "food", "drinks"]
	}, {
		coords:      [128.141,95.516],
		id:          "crossroadsInnkeep",
		extraLabel:  "v:innkeep.innAtTheCrossroads.label",
		sells:       ["gwent", "drinks"]
	}],
	// ----------------- Interiors ----------------------
	interior: [{
		label:       "v:interior.wandering_cave.label",
		floors: [{
			label:     "interior.levelB3.label",
			images: [{
				bounds: i.saltmain.s01,
				file:   "v/interiors/novigrad_salt_mine_01_mod.png"
			}, {
				bounds: i.saltmain.s09,
				file:   "v/interiors/novigrad_salt_mine_09_mod.png"
			}, {
				bounds: i.saltchest.s10,
				file:   "v/interiors/novigrad_salt_mine_10.png"
			}, {
				bounds: i.saltmain.s11,
				file:   "v/interiors/novigrad_salt_mine_11.png"
			}, {
				bounds: i.saltmain.s08,
				file:   "v/interiors/novigrad_salt_mine_08.png"
			}]
		}, {
			label:     "interior.levelB2.label",
			entrances: "wandering_cave_exit",
			images: [{
				bounds: i.saltback.s06,
				file:   "v/interiors/novigrad_salt_mine_06.png"
			}, {
				bounds: i.saltback.s12,
				file:   "v/interiors/novigrad_salt_mine_12_crop.png"
			}, {
				bounds: i.saltback.s05,
				file:   "v/interiors/novigrad_salt_mine_05_mod.png"
			}, {
				bounds: i.saltmain.s03,
				file:   "v/interiors/novigrad_salt_mine_03.png"
			}, {
				bounds: i.saltmain.s07,
				file:   "v/interiors/novigrad_salt_mine_07.png"
			}]
		}, {
			label:     "interior.levelB1.label",
			entrances: "wandering_cave_entry",
			images: [{
				bounds: i.saltmain.s04,
				file:   "v/interiors/novigrad_salt_mine_04.png"
			}]
		}]
	}, {
		label:       "v:interior.sabbath_cave.label",
		floors: [{
			label:     "interior.levelB2.label",
			entrances: "coin_fetch_cave",
			images: [{
				bounds: i.balddrop.b06,
				file:   "v/interiors/novigrad_q111_cave_06_crop.png"
			}, {
				bounds: i.balddrop.b09,
				file:   "v/interiors/novigrad_q111_cave_09_crop.png"
			}, {
				bounds: i.balddrop.b10,
				file:   "v/interiors/novigrad_q111_cave_10.png"
			}, {
				bounds: i.baldwater.b08,
				file:   "v/interiors/novigrad_q111_cave_08_crop.png"
			}]
		}, {
			label:     "interior.levelB1.label",
			entrances: ["sabbath_cave", "sabbath_aux_cave"],
			images: [{
				bounds: i.baldfugas.b02,
				file:   "v/interiors/novigrad_q111_cave_02.png"
			}, {
				bounds: i.balddoor.b01,
				file:   "v/interiors/novigrad_q111_cave_01.png"
			}, {
				bounds: i.baldtop.b11,
				file:   "v/interiors/novigrad_q111_cave_11_crop.png"
			}, {
				bounds: i.baldciri.b04,
				file:   "v/interiors/novigrad_q111_cave_04.png"
			}, {
				bounds: i.baldciri.b03,
				file:   "v/interiors/novigrad_q111_cave_03.png"
			}, {
				bounds: i.baldcave.b07,
				file:   "v/interiors/novigrad_q111_cave_07.png"
			}]
		}]
	}, {
		label:       "v:interior.oxenfurt_sewers.label",
		floors: [{
			label:     "interior.levelB2.label",
			entrances: "escape_well",
			images: [{
				bounds: i.oxenfurt.p01,
				file:   "v/interiors/novigrad_q310_prison.png"
			}, {
				bounds: i.oxenfurt.c07,
				file:   "v/interiors/novigrad_q310_prison_cave_7.png"
			}, {
				bounds: i.oxenfurt.c08,
				file:   "v/interiors/novigrad_q310_prison_cave_8.png"
			}, {
				bounds: i.oxenfurt.c09,
				file:   "v/interiors/novigrad_q310_prison_cave_9_mod.png"
			}, {
				bounds: i.oxenfurt.c11,
				file:   "v/interiors/novigrad_q310_prison_cave_11.png"
			}, {
				bounds: i.oxenfurt.c12,
				file:   "v/interiors/novigrad_q310_prison_cave_12.png"
			}, {
				bounds: i.oxenfurt.c14,
				file:   "v/interiors/novigrad_q310_prison_cave_14.png"
			}, {
				bounds: i.oxenfurt.c15,
				file:   "v/interiors/novigrad_q310_prison_cave_15_mod.png"
			}, {
				bounds: i.oxenfurt.c04,
				file:   "v/interiors/novigrad_q310_prison_cave_4.png"
			}, {
				bounds: i.oxenfurt.c05,
				file:   "v/interiors/novigrad_q310_prison_cave_5.png"
			}, {
				bounds: i.frog.s02,
				file:   "v/interiors/q601_sewers_2.png"
			}]
		}, {
			label:     "interior.levelB1.label",
			entrances: ["oxenfurt_blacksmith", "oxenfurt_prison", "whoreson_basement", "frog_lair"],
			images: [{
				bounds: i.oxenfurt.p02,
				file:   "v/interiors/novigrad_q310_prison_2.png"
			}, {
				bounds: i.oxenfurt.c02,
				file:   "v/interiors/novigrad_q310_prison_cave_2.png"
			}, {
				bounds: i.oxenfurt.c03,
				file:   "v/interiors/novigrad_q310_prison_cave_3.png"
			}, {
				bounds: i.frog.s01,
				file:   "v/interiors/q601_sewers_1.png"
			}]
		}]
	}, {
		label:       "v:interior.novigrad_sewers.label",
		floors: [{
			label:     "interior.levelB4.label",
			images: [{
				bounds: i.noviInn.i03,
				file:   "v/interiors/novigrad_zimorodek_sewers_3.png"
			}]
		}, {
			label:     "interior.levelB3.label",
			images: [{
				bounds: i.noviInn.i02,
				file:   "v/interiors/novigrad_zimorodek_sewers_2.png"
			}, {
				bounds: i.noviInn.i06,
				file:   "v/interiors/novigrad_zimorodek_sewers_6.png"
			}, {
				bounds: i.noviInn.i07,
				file:   "v/interiors/novigrad_zimorodek_sewers_7_mod.png"
			}, {
				bounds: i.noviInn.i09,
				file:   "v/interiors/novigrad_zimorodek_sewers_9.png"
			}, {
				bounds: i.noviArena.a01,
				file:   "v/interiors/novigrad_sewers_01.png"
			}]
		}, {
			label:     "interior.levelB2.label",
			entrances: ["kingfisher_sewers", "lower_morgue_sewers", "bath_sewers", "glory_sewers",
			            "bits_sewers", "kluhg_hatch"],
			images: [{
				bounds: i.noviInn.i01,
				file:   "v/interiors/novigrad_zimorodek_sewers_1.png"
			}, {
				bounds: i.noviInn.i10,
				file:   "v/interiors/novigrad_zimorodek_sewers_10.png"
			}, {
				bounds: i.noviMorgue.m02,
				file:   "v/interiors/kingfisher_underground_passage_02.png"
			}, {
				bounds: i.noviMorgue.m01,
				file:   "v/interiors/kingfisher_underground_passage_01.png"
			}, {
				bounds: i.noviBath.p01,
				file:   "v/interiors/philipa_fight_construction_1.png"
			}, {
				bounds: i.noviBath.p05,
				file:   "v/interiors/philipa_fight_construction_5.png"
			}, {
				bounds: i.noviArena.a02,
				file:   "v/interiors/novigrad_sewers_02.png"
			}, {
				bounds: i.noviKluhg.k01,
				file:   "v/interiors/novigrad_q301_store_basement_1.png"
			}, {
				bounds: i.noviGlory.g01,
				file:   "v/interiors/novigrad_q301_sewers.png"
			}, {
				bounds: i.noviBits.d01,
				file:   "v/interiors/novigrad_sewers_1.png"
			}, {
				bounds: i.noviBits.d02,
				file:   "v/interiors/novigrad_sewers_entrance_2.png"
			}, {
				bounds: i.noviTomb.t01,
				file:   "v/interiors/novigrad_elven_grave.png"
			}]
		}, {
			label:     "interior.levelB1.label",
			entrances: ["gildorf_sewers", "upper_morgue_sewers", "bathhouse", "whoreson_arena", "temple_isle_cave"],
			images: [{
				bounds: i.noviRich.r03,
				file:   "v/interiors/novigrad_very_rich_district_sewers_03.png"
			}, {
				bounds: i.noviMorgue.m04,
				file:   "v/interiors/kingfisher_underground_passage_04.png"
			}, {
				bounds: i.noviBath.b02,
				file:   "v/interiors/novigrad_bathhouse_02.png"
			}, {
				bounds: i.noviBath.b01,
				file:   "v/interiors/novigrad_bathhouse.png"
			}, {
				bounds: i.noviBath.p03,
				file:   "v/interiors/philipa_fight_construction_3.png"
			}, {
				bounds: i.noviArenaE.a03,
				file:   "v/interiors/novigrad_sewers_03.png"
			}, {
				bounds: i.noviLynx.l05,
				file:   "v/interiors/novigrad_lynx_dungeon_05_mod.png"
			}, {
				bounds: i.noviLynx.l06,
				file:   "v/interiors/novigrad_lynx_dungeon_06_mod.png"
			}, {
				bounds: i.noviLynx.l07,
				file:   "v/interiors/novigrad_lynx_dungeon_07.png"
			}, {
				bounds: i.noviLynx.l08,
				file:   "v/interiors/novigrad_lynx_dungeon_08_mod.png"
			}, {
				bounds: i.noviLynx.l03,
				file:   "v/interiors/novigrad_lynx_dungeon_03.png"
			}, {
				bounds: i.noviLynx.l02,
				file:   "v/interiors/novigrad_lynx_dungeon_02.png"
			}, {
				bounds: i.noviLynx.l04,
				file:   "v/interiors/novigrad_lynx_dungeon_04_mod.png"
			}]
		}]
	}, {
		label:       "v:interior.cheese.label",
		floors: [{
			label:     "interior.levelB2.label",
			entrances: ["cheese_dungeon", "cheese_dungeon3"],
			images: [{
				bounds: i.cheeseMind.m02,
				file:   "v/interiors/gf33_hall_of_mind_2.png"
			}, {
				bounds: i.cheeseMind.m01,
				file:   "v/interiors/gf33_hall_of_mind_1.png"
			}, {
				bounds: i.cheeseDext.d01,
				file:   "v/interiors/gf33_hall_of_dexterity.png"
			}, {
				bounds: i.cheeseEnd.e01,
				file:   "v/interiors/gf33_cave_entrance_hall.png"
			}]
		}, {
			label:     "interior.levelB1.label",
			entrances: "cheese_dungeon2",
			images: [{
				bounds: i.cheeseDext.d02,
				file:   "v/interiors/gf33_hall_of_dexterity_02_mod.png"
			}]
		}]
	}, {
		label:       "v:interior.mikel_cave.label",
		floors: [{
			label:     "interior.levelB3.label",
			images: [{
				bounds: i.hideoutDive.h06,
				file:   "v/interiors/gr17_hideout_06.png"
			}, {
				bounds: i.hideoutEgg.h05,
				file:   "v/interiors/gr17_hideout_05.png"
			}]
		}, {
			label:     "interior.levelB2.label",
			images: [{
				bounds: i.hideoutMain.h02,
				file:   "v/interiors/gr17_hideout_02.png"
			}, {
				bounds: i.hideoutNest.h03,
				file:   "v/interiors/gr17_hideout_03.png"
			}, {
				bounds: i.hideoutEgg.h04,
				file:   "v/interiors/gr17_hideout_04.png"
			}]
		}, {
			label:     "interior.levelB1.label",
			entrances: "mikel_cave",
			images: [{
				bounds: i.hideoutMain.h01,
				file:   "v/interiors/gr17_hideout_01.png"
			}]
		}]
	}],
	// ----------------- Monsters -----------------------
	monster: [{
		coords:      [55.875,197.250],  // 4x-6x Drowner (L9) (in _bald_mountain/bm_poe_01/drowners_group_01)
		name:        "drowner",
		level:       "#9",
		cleared:     "guardedMeetingPoint",
		areas: [{
			name: "monster.spawn",
			coords: [[57.375,196.031], [57.375,198.594], [54.406,198.594], [54.406,196.031]]
		}]
	}, {
		coords:      [53.813,189.938],  // 4x-6x Drowner (L9) (in _bald_mountain/bm_poe_01/drowners_group_02)
		name:        "drowner",
		level:       "#9",
		areas: [{
			name: "monster.spawn",
			coords: [[55.813,188.781], [55.813,191.469], [51.813,191.469], [51.813,188.781]]
		}]
	}, {
		coords:      [55.813,175.938],  // 4x-6x Drowner (L9) (in _bald_mountain/bm_poe_01/drowners_group_03)
		name:        "drowner",
		level:       "#9",
		areas: [{
			name: "monster.spawn",
			coords: [[58.500,173.844], [58.500,179.125], [53.219,179.125], [53.219,173.844]]
		}]
	}, {
		coords:      [57.188,210.313],  // 2x-3x Foglet (L10) (in _bald_mountain/bm_poe_01/foglings_group_01)
		name:        "foglet",
		level:       "#10",
		areas: [{
			name: "monster.spawn",
			coords: [[59.625,208.156], [59.625,212.688], [54.844,212.688], [54.844,208.156]]
		}]
	}, {
		coords:      [54.844,204.063],  // 2x-3x Foglet (L10) (in _bald_mountain/bm_poe_01/foglings_group_02)
		name:        "foglet",
		level:       "#10",
		areas: [{
			name: "monster.spawn",
			coords: [[57.531,202.313], [57.531,206.438], [52.125,206.438], [52.125,202.313]]
		}]
	}, {
		coords:      [34.375,190.406],  // 2x-3x Foglet (L10) (in _bald_mountain/bm_poe_01/foglings_group_03)
		name:        "foglet",
		level:       "#10",
		areas: [{
			name: "monster.spawn",
			coords: [[37.563,189.219], [37.563,192.500], [31.344,192.500], [31.344,189.219]]
		}]
	}, {
		coords:      [45.156,183.563],  // 3x-4x Nekker (L8) (in _bald_mountain/bm_poe_01/nekker_group_01)
		name:        "nekker",
		level:       "#8",
		areas: [{
			name: "monster.spawn",
			coords: [[47.031,181.594], [47.031,185.531], [43.438,185.531], [43.438,181.594]]
		}]
	}, {
		coords:      [49.313,212.000],  // 1x Warg (L8), 6x Wolf (L5) (in _bald_mountain/bm_poe_01/wolf_group_01)
		name:        "wolf",
		level:       "#5 & 8",
		areas: [{
			name: "monster.spawn",
			coords: [[51.750,207.375], [51.750,217.188], [46.750,217.188], [46.750,207.375]]
		}]
	}, {
		coords:      [37.000,177.875],  // 1x Warg (L8), 6x Wolf (L5) (in _bald_mountain/bm_poe_01/wolf_group_02)
		name:        "wolf",
		level:       "#5 & 8",
		areas: [{
			name: "monster.spawn",
			coords: [[40.813,175.188], [40.813,180.625], [33.188,180.625], [33.188,175.188]]
		}]
	}, {
		coords:      [53.156,143.219],  // 1x Arachas (L11) (in _bald_mountain/bm_poe_02/arachas_group1)
		name:        "arachas",
		level:       "#11",
		areas: [{
			name: "monster.spawn",
			coords: [[56.688,138.781], [56.688,147.406], [49.813,147.406], [49.813,138.781]]
		}]
	}, {
		coords:      [52.031,144.531],  // 3x-4x Endrega Warrior (L11), 8x-10x Endrega Worker (L9) (in _bald_mountain/bm_poe_02/endriagas_group1,2,3)
		name:        "endrega",
		level:       "#9 & 11",
		areas: [{
			name: "monster.spawn",
			coords: [[56.688,138.781], [56.688,147.406], [49.813,147.406], [49.813,138.781]]
		}]
	}, {
		coords:      [58.344,154.375],  // 3x-4x Endrega Warrior (L11), 8x-10x Endrega Worker (L9) (in _bald_mountain/bm_poe_02/endriagas_group4,5,6)
		name:        "endrega",
		level:       "#9 & 11",
		areas: [{
			name: "monster.spawn",
			coords: [[61.719,153.406], [61.719,159.563], [53.156,159.563], [53.156,153.406]]
		}]
	}, {
		coords:      [36.781,138.531],  // 1x Basilisk (L32) (in _bald_mountain/bm_poe_02/basilisk_group1)
		name:        "basilisk",
		level:       "#32",
		areas: [{
			name: "monster.spawn",
			coords: [[38.969,136.313], [38.969,141.188], [34.594,141.188], [34.594,136.313]]
		}]
	}, {
		coords:      [43.984,166.547],  // 1x Bear (L18) (in _bald_mountain/bm_poe_02/bear_group1)
		name:        "bear",
		level:       "#18",
		areas: [{
			name: "monster.spawn",
			coords: [[46.250,163.188], [46.250,170.500], [41.563,170.500], [41.563,163.188]]
		}]
	}, {
		disabled:    true, // Seems to be permanently disabled.
		coords:      [47.688,121.438],  // 1x Fiend (L16) (in _bald_mountain/bm_poe_02/bies_group1)
		name:        "fiend",
		level:       "#16",
		areas: [{
			name: "monster.spawn",
			coords: [[50.000,120.688], [50.000,124.125], [44.938,124.125], [44.938,120.688]]
		}]
	}, {
		coords:      [47.875,142.719],  // 1x Fiend (L16) (in _bald_mountain/bm_poe_02/bies_group2)
		name:        "fiend",
		level:       "#16",
		areas: [{
			name: "monster.spawn",
			coords: [[49.313,139.906], [49.313,146.188], [46.438,146.188], [46.438,139.906]]
		}]
	}, {
		disabled:    true, // Seems to be permanently disabled.
		coords:      [59.594,128.531],  // 4x-6x Drowner (L9) (in _bald_mountain/bm_poe_02/drowners_group1)
		name:        "drowner",
		level:       "#9",
		areas: [{
			name: "monster.spawn",
			coords: [[62.875,125.656], [63.406,130.844], [56.563,129.563], [57.188,126.156]]
		}]
	}, {
		coords:      [55.625,122.406],  // 4x-6x Mucknixer (L15) (in _bald_mountain/bm_poe_02/drowners_group2)
		name:        "mucknixer",
		level:       "#15",
		areas: [{
			name: "monster.spawn",
			coords: [[55.813,124.813], [50.938,123.656], [53.656,118.625], [62.344,123.344]]
		}]
	}, {
		coords:      [58.219,149.844],  // 2x-3x Foglet (L10) (in _bald_mountain/bm_poe_02/foglings_group1)
		name:        "foglet",
		level:       "#10",
		areas: [{
			name: "monster.spawn",
			coords: [[60.438,147.906], [60.438,152.438], [56.031,152.438], [56.031,147.906]]
		}]
	}, {
		coords:      [29.609,123.703],  // 2x Foglet (L26) (in _bald_mountain/bm_poe_02/foglings_village)
		name:        "foglet",
		level:       "#26",
		notDuring:   "mainquest.bald",
		areas: [{
			name: "monster.spawn",
			coords: [[30.531,123.063], [30.531,124.672], [28.766,124.672], [28.766,123.063]]
		}]
	}, {
		coords:      [32.375,124.969],  // 2x Foglet (L26) (in _bald_mountain/bm_poe_02/foglings_village2)
		name:        "foglet",
		level:       "#26",
		notDuring:   "mainquest.bald",
		areas: [{
			name: "monster.spawn",
			coords: [[33.313,124.172], [33.313,125.969], [31.484,125.969], [31.484,124.172]]
		}]
	}, {
		coords:      [36.750,125.578],  // 2x Foglet (L26) (in _bald_mountain/bm_poe_02/foglings_village3)
		name:        "foglet",
		level:       "#26",
		notDuring:   "mainquest.bald",
		areas: [{
			name: "monster.spawn",
			coords: [[37.563,124.758], [37.563,126.523], [35.844,126.523], [35.844,124.758]]
		}]
	}, {
		coords:      [20.078,130.375],  // 1x Leshen (L20) (in _bald_mountain/bm_poe_02/lessun_group1)
		name:        "leshen",
		level:       "#20",
		notDuring:   "mainquest.bald",
		once:        true,
		areas: [{
			name: "monster.spawn",
			coords: [[21.234,128.641], [21.828,130.500], [21.406,131.875], [19.891,132.234], [18.703,131.594],
			        [18.422,130.281], [19.109,128.859], [20.141,128.594]]
		}]
	}, {
		coords:      [30.969,139.313],  // 1x Forktail (L18) (in _bald_mountain/bm_poe_02/forktail_group1)
		name:        "forktail",
		level:       "#18",
		areas: [{
			name: "monster.spawn",
			coords: [[33.219,137.031], [33.219,142.375], [28.813,142.375], [28.813,137.031]]
		}]
	}, {
		coords:      [52.000,127.906],  // 8x-12x Ghoul (L9) (in _bald_mountain/bm_poe_02/ghouls_group_1_n_2)
		name:        "ghoul",
		level:       "#9",
		after:       "contract.swamp",
		areas: [{
			name: "monster.spawn",
			coords: [[55.094,126.125], [54.438,130.438], [52.594,132.719], [50.219,132.938], [50.219,125.281]]
		}]
	}, {
		coords:      [46.813,128.469],  // 10x-14x Harpy (L13) (in _bald_mountain/bm_poe_02/harpies_group_1_plus_2)
		name:        "harpy",
		level:       "#13",
		cleared:     "paintingCamp",
		areas: [{
			name: "monster.spawn",
			coords: [[49.531,125.313], [49.688,132.181], [44.250,132.181], [43.656,125.781]]
		}]
	}, {
		coords:      [43.500,141.875],  // 5x-7x Harpy (L13) (in _bald_mountain/bm_poe_02/harpies_group_3)
		name:        "harpy",
		level:       "#13",
		areas: [{
			name: "monster.spawn",
			coords: [[45.438,138.531], [45.438,145.438], [41.688,145.438], [41.688,138.531]]
		}]
	}, {
		coords:      [56.563,136.969],  // 3x-4x Nekker (L8) (in _bald_mountain/bm_poe_02/nekkers_group1)
		name:        "nekker",
		level:       "#8",
		areas: [{
			name: "monster.spawn",
			coords: [[58.422,135.625], [58.422,138.500], [54.688,138.500], [54.688,135.625]]
		}]
	}, {
		coords:      [36.500,168.125],  // 1x-2x Nekker Warrior (L12), 3x-4x Nekker (L8) (in _bald_mountain/bm_poe_02/nekkers_group2_n_3)
		name:        "nekker",
		level:       "#8 & 12",
		areas: [{
			name: "monster.spawn",
			coords: [[38.750,166.563], [38.750,170.000], [34.563,170.000], [34.563,166.563]]
		}]
	}, {
		coords:      [50.094,149.750],  // 2x-3x Wraith (L7) (in _bald_mountain/bm_poe_02/wraiths_group1)
		name:        "wraith",
		level:       "#7",
		fromTime:    "#21",
		toTime:      "#5",
		cleared:     "guardedAncientStoneCircle",
		areas: [{
			name: "monster.spawn",
			coords: [[50.938,149.125], [50.938,152.031], [48.219,152.031], [48.219,149.125]]
		}]
	}, {
		coords:      [33.219,147.719],  // 2x-3x Wraith (L7) (in _bald_mountain/bm_poe_02/wraiths_group2)
		name:        "wraith",
		level:       "#7",
		fromTime:    "#21",
		toTime:      "#5",
		areas: [{
			name: "monster.spawn",
			coords: [[35.344,144.938], [35.344,149.500], [31.563,149.500], [31.563,144.938]]
		}]
	}, {
		coords:      [46.422,133.313],  // 2x-3x Wraith (L7) (in _bald_mountain/bm_poe_02/wraiths_group3)
		name:        "wraith",
		level:       "#7",
		fromTime:    "#21",
		toTime:      "#5",
		areas: [{
			name: "monster.spawn",
			coords: [[47.000,132.938], [47.000,133.750], [45.953,133.750], [45.953,132.938]]
		}]
	}, {
		coords:      [39.719,153.406],  // 1x Rabid rock troll (L10) (in _bald_mountain/bm_poe_02/troll_group1)
		name:        "rabidrocktroll",
		level:       "#10",
		cleared:     "oldBridgeCamp",
		areas: [{
			name: "monster.spawn",
			coords: [[40.656,152.875], [40.656,155.406], [37.281,155.406], [37.281,152.875]]
		}]
	}, {
		coords:      [57.313,133.313],  // 1x Water Hag (L8) (in _bald_mountain/bm_poe_02/waterhag_group1)
		name:        "waterhag",
		level:       "#8",
		after:       "contract.swamp",
		areas: [{
			name: "monster.spawn",
			coords: [[58.438,131.313], [58.438,134.375], [54.563,134.375], [54.563,131.313]]
		}]
	}, {
		coords:      [49.500,135.906],  // 1x Wyvern (L9) (in _bald_mountain/bm_poe_02/wyvern_group1)
		name:        "wyvern",
		level:       "#9",
		areas: [{
			name: "monster.spawn",
			coords: [[51.563,134.688], [51.563,137.500], [47.531,137.500], [47.531,134.688]]
		}]
	}, {
		coords:      [27.781,155.453],  // 1x Wyvern (L14) (in _bald_mountain/bm_poe_02/wyvern_group3)
		name:        "wyvern",
		level:       "#14",
		areas: [{
			name: "monster.spawn",
			coords: [[29.500,153.188], [30.188,157.734], [26.000,158.031], [25.547,153.469]]
		}]
	}, {
		coords:      [42.563,157.750],  // 1x Warg (L8), 6x Wolf (L5) (in _bald_mountain/bm_poe_02/wolfs_group1)
		name:        "wolf",
		level:       "#5 & 8",
		areas: [{
			name: "monster.spawn",
			coords: [[43.750,154.781], [45.375,158.609], [41.269,160.841], [39.422,157.344]]
		}]
	}, {
		coords:      [50.375,158.344],  // 1x Warg (L8), 6x Wolf (L5) (in _bald_mountain/bm_poe_02/wolfs_group2)
		name:        "wolf",
		level:       "#5 & 8",
		areas: [{
			name: "monster.spawn",
			coords: [[52.813,156.969], [52.813,160.563], [47.969,160.563], [47.969,156.969]]
		}]
	}, {
		coords:      [59.063,168.563],  // 1x Warg (L8), 6x Wolf (L5) (in _bald_mountain/bm_poe_02/wolfs_group3)
		name:        "wolf",
		level:       "#5 & 8",
		areas: [{
			name: "monster.spawn",
			coords: [[61.594,167.000], [61.594,170.406], [56.625,170.406], [56.625,167.000]]
		}]
	}, {
		coords:      [50.156,168.625],  // 1x Warg (L8), 6x Wolf (L5) (in _bald_mountain/bm_poe_02/wolfs_group4)
		name:        "wolf",
		level:       "#5 & 8",
		areas: [{
			name: "monster.spawn",
			coords: [[52.656,167.031], [52.656,170.469], [47.844,170.469], [47.844,167.031]]
		}]
	}, {
		coords:      [37.750,143.250],  // 1x Warg (L8), 6x Wolf (L5) (in _bald_mountain/bm_poe_02/wolfs_group5)
		name:        "wolf",
		level:       "#5 & 8",
		areas: [{
			name: "monster.spawn",
			coords: [[39.594,141.875], [39.594,145.063], [35.844,145.063], [35.844,141.875]]
		}]
	}, {
		coords:      [42.094,150.672],  // 1x Warg (L8), 6x Wolf (L5) (in _bald_mountain/bm_poe_02/wolfs_group6)
		name:        "wolf",
		level:       "#5 & 8",
		cleared:     "guardedPoisonPond",
		areas: [{
			name: "monster.spawn",
			coords: [[44.906,148.453], [44.906,152.563], [39.766,152.563], [39.766,148.453]]
		}]
	}, {
		coords:      [33.375,154.781],  // 1x Warg (L8), 6x Wolf (L5) (in _bald_mountain/bm_poe_02/wolfs_group7)
		name:        "wolf",
		level:       "#5 & 8",
		areas: [{
			name: "monster.spawn",
			coords: [[33.750,152.375], [36.344,155.219], [33.594,157.688], [30.875,154.281]]
		}]
	}, {
		coords:      [34.063,161.984],  // 1x Warg (L8), 6x Wolf (L5) (in _bald_mountain/bm_poe_02/wolfs_group8)
		name:        "wolf",
		level:       "#5 & 8",
		areas: [{
			name: "monster.spawn",
			coords: [[36.391,162.453], [34.453,165.047], [31.203,161.953], [33.750,159.000]]
		}]
	}, {
		coords:      [88.313,112.750],  // 1x Arachas (L11) (in _crookback_bog/cb_poe_01/arachas_group1)
		name:        "arachas",
		level:       "#11",
		areas: [{
			name: "monster.spawn",
			coords: [[93.906,113.156], [91.051,118.581], [82.925,113.525], [85.500,108.000]]
		}]
	}, {
		coords:      [65.688,106.500],  // 1x Bear (L6) (in _crookback_bog/cb_poe_01/bears_group2)
		name:        "bear",
		level:       "#6",
		areas: [{
			name: "monster.spawn",
			coords: [[68.375,101.125], [69.750,108.969], [65.031,112.000], [60.781,105.563]]
		}]
	}, {
		coords:      [75.031,110.375],  // 4x-6x Drowner (L9) (in _crookback_bog/cb_poe_01/drowner_group1)
		name:        "drowner",
		level:       "#9",
		areas: [{
			name: "monster.spawn",
			coords: [[76.531,105.906], [80.344,110.969], [73.625,116.250], [69.750,110.500]]
		}]
	}, {
		coords:      [73.875,121.047],  // 1x Earth Elemental (L27) (in _crookback_bog/cb_poe_01/elemental_01)
		name:        "earthelemental",
		level:       "#27",
		areas: [{
			name: "monster.spawn",
			coords: [[74.766,120.375], [74.984,122.344], [72.578,122.500], [72.375,120.484]]
		}]
	}, {
		coords:      [68.781,126.938],  // 4x-6x Foglet (L4) (in _crookback_bog/cb_poe_01/foglings_group1)
		name:        "foglet",
		level:       "#4",
		areas: [{
			name: "monster.spawn",
			coords: [[71.656,122.625], [72.188,131.563], [65.844,131.719], [66.000,122.938]]
		}]
	}, {
		coords:      [80.406,125.063],  // 1x-2x Nekker Warrior (L12), 3x-4x Nekker Level 8 (in _crookback_bog/cb_poe_01/nekkers_group1)
		name:        "nekker",
		level:       "#8 & 12",
		areas: [{
			name: "monster.spawn",
			coords: [[75.500,123.938], [80.219,118.388], [82.844,119.625], [84.531,124.344], [82.469,129.938],
			        [80.313,132.188], [78.313,132.188], [75.875,130.844], [75.500,128.000]]
		}]
	}, {
		coords:      [150.063,42.672],  // 3x Drowner (L10) (in lw_nml_w_001)
		name:        "drowner",
		level:       "#10",
		underwater:  true,
		areas: [{
			name: "monster.spawn",
			coords: [[151.164,43.898], [148.680,43.625], [147.406,43.930], [147.836,42.250], [148.359,41.695],
			        [150.219,41.289], [151.820,41.945], [152.258,42.844]]
		}]
	}, {
		coords:      [149.875,63.563],  // 3x Drowner (L10) (in lw_nml_w_002)
		name:        "drowner",
		level:       "#10",
		underwater:  true,
		areas: [{
			name: "monster.spawn",
			coords: [[151.141,65.672], [149.141,65.609], [147.516,64.625], [147.406,63.078], [149.219,61.594],
			        [150.766,61.234], [151.469,62.219], [152.000,63.563], [152.000,64.641]]
		}]
	}, {
		coords:      [160.078,81.750],  // 1x Drowner (L10) (in lw_nml_w_004)
		name:        "drowner",
		level:       "#10",
		underwater:  true,
		areas: [{
			name: "monster.spawn",
			coords: [[162.313,83.953], [159.844,84.125], [157.953,83.953], [157.531,81.391], [158.453,79.500],
			        [160.313,79.359], [161.094,79.875], [162.656,81.531]]
		}]
	}, {
		coords:      [167.031,83.047],  // {6h-18h: 2x Drowner (L9)}, {18h-6h: 1x Drowned Dead (L18), 3x Drowner (L9)} (in lw_nml_w_005)
		name:        "drowner",
		level:       "#9 & 18",
		underwater:  true,
		areas: [{
			name: "monster.spawn",
			coords: [[169.688,83.000], [168.672,83.719], [168.844,84.266], [167.078,86.984], [166.500,87.078],
			        [165.031,86.766], [165.719,85.094], [165.359,83.531], [165.250,82.188], [164.672,81.625],
			        [164.703,80.484], [165.625,79.359], [166.266,79.266], [167.484,79.641], [168.078,81.016],
			        [169.422,81.375]]
		}]
	}, {
		coords:      [177.375,62.094],  // 3x Drowner (L10) (in lw_nml_w_006)
		name:        "drowner",
		level:       "#10",
		underwater:  true,
		areas: [{
			name: "monster.spawn",
			coords: [[178.406,63.188], [177.594,63.375], [177.172,63.203], [176.156,62.969], [176.422,61.438],
			        [177.000,60.797], [177.859,60.797], [178.234,61.438]]
		}]
	}, {
		coords:      [182.531,65.359],  // 3x Drowner (L10) (in lw_nml_w_006)
		name:        "drowner",
		level:       "#10",
		underwater:  true,
		areas: [{
			name: "monster.spawn",
			coords: [[183.406,63.563], [184.234,63.563], [184.813,65.109], [183.719,66.859], [181.063,67.578],
			        [180.172,66.922], [179.859,65.938], [180.219,65.000]]
		}]
	}, {
		coords:      [195.734,68.734],  // 3x Drowner (L10) (in lw_nml_w_007)
		name:        "drowner",
		level:       "#10",
		underwater:  true,
		areas: [{
			name: "monster.spawn",
			coords: [[194.563,69.688], [194.797,68.266], [195.516,67.141], [196.125,66.719], [196.750,68.109],
			        [196.625,69.422], [195.875,70.656]]
		}]
	}, {
		coords:      [141.969,38.031],  // 3x Drowner (L10) (in lw_nml_w_008)
		name:        "drowner",
		level:       "#10",
		underwater:  true,
		areas: [{
			name: "monster.spawn",
			coords: [[142.156,40.344], [139.938,39.125], [139.281,37.469], [140.031,36.375], [141.188,36.125],
			        [143.531,36.750], [144.875,38.719]]
		}]
	}, {
		coords:      [135.531,34.906],  // 3x Drowner (L10) (in lw_nml_w_008)
		name:        "drowner",
		level:       "#10",
		underwater:  true,
		areas: [{
			name: "monster.spawn",
			coords: [[136.781,36.063], [135.844,37.344], [134.344,36.250], [134.063,33.688], [135.219,33.094],
			        [136.438,33.656], [137.031,35.031]]
		}]
	}, {
		coords:      [124.188,34.219],  // 3x Drowner (L10) (in lw_nml_w_009)
		name:        "drowner",
		level:       "#10",
		underwater:  true,
		areas: [{
			name: "monster.spawn",
			coords: [[126.125,36.000], [124.000,36.000], [121.469,35.156], [121.000,33.375], [122.906,32.531],
			        [125.094,32.750], [126.375,33.594], [127.094,34.688]]
		}]
	}, {
		coords:      [109.391,38.031],  // 3x Drowner (L10) (in lw_nml_w_010)
		name:        "drowner",
		level:       "#10",
		underwater:  true,
		after:       "treasurehunt.sunkent",
		areas: [{
			name: "monster.spawn",
			coords: [[108.094,38.047], [108.328,36.953], [109.031,36.297], [110.469,36.859], [111.063,37.609],
			        [110.172,39.344], [108.953,39.844], [108.328,39.281]]
		}]
	}, {
		coords:      [109.047,26.891],  // 3x Drowner (L10) (in lw_nml_w_011)
		name:        "drowner",
		level:       "#10",
		underwater:  true,
		areas: [{
			name: "monster.spawn",
			coords: [[107.453,27.625], [107.688,26.406], [108.469,25.734], [109.766,25.734], [110.734,26.672],
			        [110.344,28.094], [109.625,27.859], [108.625,28.172]]
		}]
	}, {
		coords:      [67.594,16.484],  // 1x Drowner (L10) (in lw_nml_w_015)
		name:        "drowner",
		level:       "#10",
		underwater:  true,
		areas: [{
			name: "monster.spawn",
			coords: [[68.172,17.922], [66.766,17.609], [65.844,16.813], [66.063,15.609], [66.875,14.828],
			        [67.734,14.719], [69.063,15.891], [69.266,16.500], [69.594,17.031], [69.125,17.688]]
		}]
	}, {
		coords:      [55.523,17.781],  // 3x Drowner (L10) (in ../lw_nml_w_016)
		name:        "drowner",
		level:       "#10",
		underwater:  true,
		areas: [{
			name: "monster.spawn",
			coords: [[58.281,17.727], [58.070,18.422], [57.063,18.961], [54.352,19.625], [53.625,18.906],
			        [53.055,17.695], [53.055,16.406], [55.211,15.914], [57.789,16.867]]
		}]
	}, {
		coords:      [46.512,30.496],  // 3x Drowner (L10) (in lw_nml_w_017)
		name:        "drowner",
		level:       "#10",
		underwater:  true,
		areas: [{
			name: "monster.spawn",
			coords: [[48.806,32.554], [47.119,32.554], [45.747,32.042], [44.247,32.605], [42.919,32.277],
			        [43.247,30.386], [44.044,29.246], [45.372,28.730], [48.716,28.730], [49.387,30.011],
			        [49.200,31.496]]
		}]
	}, {
		coords:      [108.031,196.219], // 5x Drowner (L10) (in lw_nml_w_039)
		name:        "drowner",
		level:       "#10",
		underwater:  true,
		areas: [{
			name: "monster.spawn",
			coords: [[100.719,198.938], [104.375,196.219], [106.469,193.719], [108.563,188.469],
			        [111.875,186.781], [113.875,189.438], [111.969,195.219], [108.031,200.688],
			        [104.719,202.531], [102.531,202.031]]
		}]
	}, {
		coords:      [114.375,184.406], // 4x-6x Drowner (L10) (in lw_nml_w_039)
		name:        "drowner",
		level:       "#10",
		underwater:  true,
		areas: [{
			name: "monster.spawn",
			coords: [[114.750,180.656], [119.019,185.656], [113.813,189.250], [109.781,184.438]]
		}]
	}, {
		coords:      [44.141,216.500],  // 2x Drowner (L10) (in lw_nml_w_041)
		name:        "drowner",
		level:       "#10",
		underwater:  true,
		areas: [{
			name: "monster.spawn",
			coords: [[45.141,216.047], [45.641,217.531], [44.828,218.063], [44.203,217.594],
			        [43.297,217.391], [42.641,216.234], [43.313,215.219], [44.531,215.219]]
		}]
	}, {
		disabled:    true, // Seems to be broken, because someone didn't actually assign the drowners to it.
		coords:      [149.031,160.375], // 3x Drowner (L10) (in lw_nml_w_043)
		name:        "drowner",
		level:       "#10",
		underwater:  true,
		areas: [{
			name: "monster.spawn",
			coords: [[145.531,160.500], [146.531,160.781], [148.281,159.938], [149.750,158.281],
			        [151.563,159.750], [150.375,161.188], [147.688,162.438], [147.063,163.281],
			        [145.969,163.625], [145.000,163.250], [144.625,162.375], [144.625,161.688]]
		}]
	}, {
		coords:      [157.875,158.344], // 3x Drowner (L10) (in lw_nml_w_045)
		name:        "drowner",
		level:       "#10",
		underwater:  true,
		areas: [{
			name: "monster.spawn",
			coords: [[157.031,157.094], [158.250,157.094], [159.359,157.359], [159.875,158.156],
			        [159.641,159.219], [158.453,159.844], [156.391,159.203], [155.984,157.844]]
		}]
	}, {
		coords:      [166.234,158.836], // 3x Drowner (L10) (in lw_nml_w_045)
		name:        "drowner",
		level:       "#10",
		underwater:  true,
		areas: [{
			name: "monster.spawn",
			coords: [[164.711,159.141], [164.883,157.875], [165.594,157.391], [166.492,157.328],
			        [167.273,157.977], [167.734,158.625], [167.734,159.477], [166.203,160.281],
			        [165.320,160.289]]
		}]
	}, {
		coords:      [218.375,88.797],  // 3x Drowner (L10) (in lw_nml_w_053)
		name:        "drowner",
		level:       "#10",
		underwater:  true,
		areas: [{
			name: "monster.spawn",
			coords: [[220.250,88.406], [219.938,89.297], [219.047,90.156], [218.469,91.172],
			        [217.219,90.703], [216.766,89.313], [217.203,87.875], [218.078,87.188],
			        [219.375,87.188]]
		}]
	}, {
		coords:      [218.063,82.438],  // 4x Drowner (L10) (in lw_nml_w_053)
		name:        "drowner",
		level:       "#10",
		underwater:  true,
		areas: [{
			name: "monster.spawn",
			coords: [[218.219,85.500], [216.766,84.016], [216.125,82.484], [216.563,81.063],
			        [217.578,79.688], [218.938,80.844], [219.547,82.422], [219.203,84.672]]
		}]
	}, {
		coords:      [232.406,87.156],  // 5x Drowner (L4) (in lw_nml_w_054)
		name:        "drowner",
		level:       "#4",
		underwater:  true,
		areas: [{
			name: "monster.spawn",
			coords: [[231.922,89.266], [229.016,84.594], [233.234,82.531], [234.078,88.891]]
		}]
	}, {
		coords:      [230.359,104.063], // {6h-18h: 4x Drowner (L4)}, {18h-6h: 1x Drowned Dead (L18), 5x Drowner (L9)} (in lw_nml_w_055)
		name:        "drowner",
		level:       "#4, 9 & 18",
		underwater:  true,
		areas: [{
			name: "monster.spawn",
			coords: [[235.625,104.328], [234.438,104.781], [234.016,103.313], [231.891,103.891],
			        [230.484,106.531], [230.047,108.750], [229.266,109.219], [228.641,109.250],
			        [227.094,110.250], [228.563,107.172], [227.625,106.172], [226.266,106.172],
			        [225.500,104.828], [225.500,103.797], [229.906,103.156], [233.063,99.531],
			        [235.313,100.641], [234.641,102.797]]
		}]
	}, {
		coords:      [111.141,102.500], // 1x Drowner (L9) (in lw_nml_w_058)
		name:        "drowner",
		level:       "#9",
		underwater:  true,
		areas: [{
			name: "monster.spawn",
			coords: [[111.594,99.922], [114.266,100.594], [110.594,105.766], [108.828,104.891],
			        [108.859,102.750], [110.484,100.359]]
		}]
	}, {
		coords:      [154.969,78.719],  // 3x Drowner (L4) (in lw_poe_w_003)
		name:        "drowner",
		level:       "#4",
		underwater:  true,
		areas: [{
			name: "monster.spawn",
			coords: [[156.719,77.703], [156.328,78.781], [153.703,81.000], [153.328,80.359],
			        [153.797,78.688], [155.234,76.859], [156.078,76.859]]
		}]
	}, {
		coords:      [118.547,177.828], // 3x Drowner (L10) (in lw_poe_w_038)
		name:        "drowner",
		level:       "#10",
		underwater:  true,
		areas: [{
			name: "monster.spawn",
			coords: [[120.641,176.516], [119.031,180.047], [118.250,181.297], [117.422,181.297],
			        [116.797,180.563], [116.469,179.094], [116.891,177.750], [117.266,176.219],
			        [118.359,175.125], [120.172,175.281]]
		}]
	}, {
		coords:      [35.625,27.797],   // 4x Drowner (L10) (in nml_w_018)
		name:        "drowner",
		level:       "#10",
		underwater:  true,
		areas: [{
			name: "monster.spawn",
			coords: [[33.328,28.516], [34.766,25.453], [37.703,27.031], [36.609,29.766]]
		}]
	}, {
		coords:      [30.500,24.891],   // 2x Drowner (L10) (in nml_w_018)
		name:        "drowner",
		level:       "#10",
		underwater:  true,
		areas: [{
			name: "monster.spawn",
			coords: [[29.734,28.219], [28.828,28.219], [30.734,21.797], [32.391,22.563]]
		}]
	}, {
		coords:      [43.188,65.156],   // 3x Drowner (L10) (in nml_w_020)
		name:        "drowner",
		level:       "#10",
		underwater:  true,
		areas: [{
			name: "monster.spawn",
			coords: [[42.344,68.531], [39.656,64.531], [44.031,61.656], [46.375,66.188]]
		}]
	}, {
		coords:      [44.688,90.969],   // 3x Drowner (L10) (in nml_w_021)
		name:        "drowner",
		level:       "#10",
		underwater:  true,
		areas: [{
			name: "monster.spawn",
			coords: [[41.406,94.344], [41.406,87.531], [47.531,87.531], [47.531,94.344]]
		}]
	}, {
		coords:      [59.750,72.375],   // 3x Drowner (L10) (in nml_w_022)
		name:        "drowner",
		level:       "#10",
		underwater:  true,
		areas: [{
			name: "monster.spawn",
			coords: [[61.969,66.344], [61.969,78.625], [57.344,78.625], [57.344,66.344]]
		}]
	}, {
		coords:      [89.219,66.969],   // 4x-6x Drowner (L9) (in _crow_perch/cp_poe_east/drowner_group4)
		name:        "drowner",
		level:       "#9",
		areas: [{
			name: "monster.spawn",
			coords: [[86.469,62.219], [92.469,62.219], [92.469,68.219], [86.469,68.219]]
		}]
	}, {
		coords:      [87.953,63.797],   // 3x Drowner (L10) (in nml_w_026)
		name:        "drowner",
		level:       "#10",
		underwater:  true,
		areas: [{
			name: "monster.spawn",
			coords: [[87.156,66.031], [85.734,65.844], [87.328,63.625], [87.609,62.313], [86.938,61.844],
			        [88.375,60.563], [88.422,59.625], [89.391,59.359], [89.688,59.359], [90.203,59.891],
			        [90.203,60.516], [89.453,61.063], [89.219,61.000], [88.828,60.828], [88.203,61.969],
			        [88.438,62.734], [88.563,64.469], [89.078,65.859]]
		}]
	}, {
		coords:      [57.344,116.500],  // 3x Drowner (L10) (in nml_w_028)
		name:        "drowner",
		level:       "#10",
		underwater:  true,
		areas: [{
			name: "monster.spawn",
			coords: [[55.563,118.406], [55.563,114.563], [59.188,114.563], [59.188,118.406]]
		}]
	}, {
		coords:      [53.594,109.406],  // 4x Drowner (L10) (in nml_w_028)
		name:        "drowner",
		level:       "#10",
		underwater:  true,
		areas: [{
			name: "monster.spawn",
			coords: [[57.125,106.969], [57.125,112.000], [49.906,112.000], [49.906,106.969]]
		}]
	}, {
		coords:      [47.125,115.781],  // 3x Drowner (L10) (in nml_w_028)
		name:        "drowner",
		level:       "#10",
		underwater:  true,
		areas: [{
			name: "monster.spawn",
			coords: [[45.125,117.656], [45.125,113.969], [49.094,113.969], [49.094,117.656]]
		}]
	}, {
		coords:      [139.844,72.234],  // 3x Drowner (L10) (in nml_w_029)
		name:        "drowner",
		level:       "#10",
		underwater:  true,
		areas: [{
			name: "monster.spawn",
			coords: [[142.813,70.453], [138.063,75.703], [136.563,74.172], [141.609,69.016]]
		}]
	}, {
		coords:      [153.109,63.875],  // 2x Drowner (L10) (in nml_w_030)
		name:        "drowner",
		level:       "#10",
		underwater:  true,
		areas: [{
			name: "monster.spawn",
			coords: [[152.281,64.672], [152.281,63.047], [153.922,63.047], [153.922,64.672]]
		}]
	}, {
		coords:      [154.563,60.219],  // 3x Drowner (L10) (in nml_w_030)
		name:        "drowner",
		level:       "#10",
		underwater:  true,
		areas: [{
			name: "monster.spawn",
			coords: [[152.719,61.781], [152.031,60.094], [156.172,58.625], [156.656,60.438]]
		}]
	}, {
		coords:      [156.281,64.141], // 1x Drowner (L10) (in nml_w_030)
		name:        "drowner",
		level:       "#10",
		underwater:  true,
		areas: [{
			name: "monster.spawn",
			coords: [[155.719,63.750], [156.719,63.578], [156.875,64.547], [155.859,64.656]]
		}]
	}, {
		coords:      [148.438,91.906],  // 2x Drowner (L10) (in nml_w_033)
		name:        "drowner",
		level:       "#10",
		underwater:  true,
		areas: [{
			name: "monster.spawn",
			coords: [[146.906,93.688], [146.906,90.063], [149.719,90.063], [149.719,93.688]]
		}]
	}, {
		coords:      [108.578,119.313], // 1x Drowner (L10) (in nml_w_035)
		name:        "drowner",
		level:       "#10",
		underwater:  true,
		areas: [{
			name: "monster.spawn",
			coords: [[108.281,118.750], [109.000,118.750], [109.000,119.906], [108.281,119.906]]
		}]
	}, {
		coords:      [109.047,116.719], // 2x Drowner (L10) (in nml_w_035)
		name:        "drowner",
		level:       "#10",
		underwater:  true,
		areas: [{
			name: "monster.spawn",
			coords: [[109.156,117.828], [108.313,117.500], [108.844,115.547], [109.750,115.922]]
		}]
	}, {
		coords:      [114.188,147.563], // 1x Drowner (L10) (in nml_w_036)
		name:        "drowner",
		level:       "#10",
		underwater:  true,
		areas: [{
			name: "monster.spawn",
			coords: [[114.688,148.016], [113.703,148.016], [113.703,147.094], [114.688,147.094]]
		}]
	}, {
		coords:      [120.547,164.734], // 2x Drowner (L10) (in nml_w_037)
		name:        "drowner",
		level:       "#10",
		underwater:  true,
		areas: [{
			name: "monster.spawn",
			coords: [[119.625,163.484], [121.484,163.484], [121.484,165.906], [119.625,165.906]]
		}]
	}, {
		coords:      [119.922,168.641], // 1x Drowner (L10) (in nml_w_037)
		name:        "drowner",
		level:       "#10",
		underwater:  true,
		areas: [{
			name: "monster.spawn",
			coords: [[120.750,167.563], [120.750,169.875], [119.094,169.875], [119.094,167.563]]
		}]
	}, {
		coords:      [173.813,145.875], // 4x-6x Drowner (L10) (in nml_w_046)
		name:        "drowner",
		level:       "#10",
		underwater:  true,
		areas: [{
			name: "monster.spawn",
			coords: [[171.906,144.156], [175.719,144.156], [175.719,147.531], [171.906,147.531]]
		}]
	}, {
		coords:      [175.281,151.031], // 4x-6x Drowner (L10) (in nml_w_046)
		name:        "drowner",
		level:       "#10",
		underwater:  true,
		areas: [{
			name: "monster.spawn",
			coords: [[176.875,149.406], [176.875,152.875], [173.750,152.875], [173.750,149.406]]
		}]
	}, {
		coords:      [161.063,115.406], // 2x Drowner (L10) (in nml_w_047)
		name:        "drowner",
		level:       "#10",
		underwater:  true,
		areas: [{
			name: "monster.spawn",
			coords: [[158.719,113.125], [163.531,113.125], [163.531,117.500], [158.719,117.500]]
		}]
	}, {
		coords:      [154.859,102.266], // 2x Drowner (L10) (in nml_w_047)
		name:        "drowner",
		level:       "#10",
		underwater:  true,
		areas: [{
			name: "monster.spawn",
			coords: [[155.625,101.703], [155.625,102.984], [154.063,102.984], [154.063,101.703]]
		}]
	}, {
		disabled:    true, // Seems to be broken, I don't understand why. Maybe because another spawn in the same encounter has None assigned for monsters, maybe this breaks the whole encounter.
		coords:      [173.250,130.844], // 2x Drowner (L10) (in nml_w_048)
		name:        "drowner",
		level:       "#10",
		underwater:  true,
		areas: [{
			name: "monster.spawn",
			coords: [[175.250,129.031], [175.250,132.656], [171.406,132.656], [171.406,129.031]]
		}]
	}, {
		disabled:    true, // Seems to be broken, because someone didn't actually assign the drowners to it.
		coords:      [169.250,126.531], // 3x Drowner (L10) (in nml_w_048)
		name:        "drowner",
		level:       "#10",
		underwater:  true,
		areas: [{
			name: "monster.spawn",
			coords: [[171.219,124.656], [171.219,128.500], [167.375,128.500], [167.375,124.656]]
		}]
	}, {
		coords:      [197.492,122.055], // 1x Drowner (L10) (in nml_w_050)
		name:        "drowner",
		level:       "#10",
		underwater:  true,
		areas: [{
			name: "monster.spawn",
			coords: [[197.867,121.406], [198.234,122.484], [197.102,122.805], [196.758,121.641]]
		}]
	}, {
		coords:      [199.359,78.469],  // 2x Drowner (L10) (in nml_w_052)
		name:        "drowner",
		level:       "#10",
		underwater:  true,
		areas: [{
			name: "monster.spawn",
			coords: [[198.891,79.250], [198.469,77.906], [199.922,77.547], [200.266,78.984]]
		}]
	}, {
		coords:      [220.219,151.000], // 3x Wolf (L5) (in nml_w_057)
		name:        "wolf",
		level:       "#5",
		areas: [{
			name: "monster.spawn",
			coords: [[221.531,149.813], [221.531,152.281], [218.969,152.281], [218.969,149.813]]
		}]
	}, {
		coords:      [217.359,148.813], // 3x Wolf (L5) (in nml_w_057)
		name:        "wolf",
		level:       "#5",
		routes: [{
			name: "monster.route",
			coords: [[217.766,146.109], [217.359,148.813], [216.734,150.359], [217.703,149.813],
			        [217.703,148.484], [216.750,147.031], [216.063,146.719], [215.625,145.781],
			        [217.766,146.109]]
		}]
	}, {
		coords:      [97.563,62.719],   // 12x-16x Nekker (L6) (in _crow_perch/cp_poe_east/nekker_group1)
		name:        "nekker",
		level:       "#6",
		cleared:     "perchEastGhoulNestSouth",
		areas: [{
			name: "monster.spawn",
			coords: [[101.563,58.375], [101.563,68.781], [93.188,68.781], [93.188,58.375]]
		}]
	}, {
		coords:      [97.906,95.250],   // 6x-8x Nekker (L6) (in _crow_perch/cp_poe_east/nekker_group2)
		name:        "nekker",
		level:       "#6",
		areas: [{
			name: "monster.spawn",
			coords: [[102.125,93.500], [99.656,100.969], [93.250,98.281], [95.844,91.000]]
		}]
	}, {
		coords:      [108.500,88.844],  // 5x-7x Wild Dog (L1) (in _crow_perch/cp_poe_east/wild_dogs_group1)
		name:        "wilddog",
		level:       "#1",
		cleared:     "perchEastGhoulNestNorth",
		areas: [{
			name: "monster.spawn",
			coords: [[113.219,88.047], [108.406,96.109], [103.094,88.125], [110.344,83.563]]
		}]
	}, {
		coords:      [79.375,82.031],   // 1x Warg (L8), 6x Wolf (L5) (in _crow_perch/cp_poe_east/wolf_group1)
		name:        "wolf",
		level:       "#5 & 8",
		areas: [{
			name: "monster.spawn",
			coords: [[74.969,84.375], [76.563,77.063], [84.250,81.188], [82.281,85.500]]
		}]
	}, {
		coords:      [89.203,87.031],   // 2x Warg (L8), 12x Wolf (L5) (in _crow_perch/cp_poe_east/wolf_group2)
		name:        "wolf",
		level:       "#5 & 8",
		notDuring:   "sidequest.cat",
		areas: [{
			name: "monster.spawn",
			coords: [[86.953,82.563], [92.641,83.250], [91.797,91.859], [86.188,91.406]]
		}]
	}, {
		coords:      [88.188,78.313],   // 1x Warg (L8), 6x Wolf (L5) (in _crow_perch/cp_poe_east/wolf_group3)
		name:        "wolf",
		level:       "#5 & 8",
		areas: [{
			name: "monster.spawn",
			coords: [[90.906,76.156], [90.906,81.250], [85.375,81.250], [85.375,76.156]]
		}]
	}, {
		coords:      [75.172,93.375],   // 4x-6x Drowner (L4) (in _crow_perch/cp_poe_east/drowner_group1)
		name:        "drowner",
		level:       "#4",
		areas: [{
			name: "monster.spawn",
			coords: [[77.313,96.422], [72.594,95.203], [73.719,90.719], [78.328,92.125]]
		}]
	}, {
		coords:      [87.109,101.859],  // 4x-6x Drowner (L9) (in _crow_perch/cp_poe_east/drowner_group2)
		name:        "drowner",
		level:       "#9",
		areas: [{
			name: "monster.spawn",
			coords: [[90.703,99.906], [87.219,105.078], [82.172,101.609], [85.719,96.375]]
		}]
	}, {
		coords:      [97.813,102.594],  // 4x-6x Drowner (L9) (in _crow_perch/cp_poe_east/drowner_group3)
		name:        "drowner",
		level:       "#9",
		areas: [{
			name: "monster.spawn",
			coords: [[94.281,101.344], [101.375,101.344], [101.375,104.219], [94.281,104.219]]
		}]
	}, {
		coords:      [120.547,96.453],  // 1x Bear (L12) (in _crow_perch/cp_poe_east/bear_group1)
		name:        "bear",
		level:       "#12",
		areas: [{
			name: "monster.spawn",
			coords: [[116.078,99.859], [116.078,93.156], [122.422,93.156], [122.422,99.859]]
		}]
	}, {
		coords:      [119.500,56.188],  // 4x-6x Drowner (L4) (in _crow_perch/cp_poe_north/drowners_group1)
		name:        "drowner",
		level:       "#4",
		areas: [{
			name: "monster.spawn",
			coords: [[116.906,59.078], [114.797,54.641], [121.422,52.391], [123.500,56.969]]
		}]
	}, {
		coords:      [143.688,61.266],  // 4x-6x Drowner (L4) (in _crow_perch/cp_poe_north/drowners_group2)
		name:        "drowner",
		level:       "#4",
		cleared:     "guardedPerchBasilisk",
		areas: [{
			name: "monster.spawn",
			coords: [[146.109,61.016], [142.422,64.938], [140.469,63.141], [144.594,58.969]]
		}]
	}, {
		coords:      [135.000,41.328],  // 4x-6x Drowner (L4) (in _crow_perch/cp_poe_north/drowners_group3)
		name:        "drowner",
		level:       "#4",
		areas: [{
			name: "monster.spawn",
			coords: [[138.078,40.531], [136.359,43.813], [132.844,41.969], [134.625,38.656]]
		}]
	}, {
		coords:      [120.422,84.172],  // 4x-6x Drowner (L4) (in _crow_perch/cp_poe_north/drowners_group4)
		name:        "drowner",
		level:       "#4",
		areas: [{
			name: "monster.spawn",
			coords: [[123.781,85.328], [119.344,88.828], [116.406,84.000], [121.813,81.813]]
		}]
	}, {
		coords:      [108.766,44.266],  // 10x-14x Wild Dog (L1) (in _crow_perch/cp_poe_north/wild_dogs_group1)
		name:        "wilddog",
		level:       "#1",
		areas: [{
			name: "monster.spawn",
			coords: [[104.906,43.203], [110.203,42.609], [110.828,47.625], [105.563,48.219]]
		}]
	}, {
		coords:      [139.125,60.406],  // 10x-14x Wild Dog (L1) (in _crow_perch/cp_poe_north/wild_dogs_group2)
		name:        "wilddog",
		level:       "#1",
		areas: [{
			name: "monster.spawn",
			coords: [[143.734,58.719], [138.188,64.594], [135.078,61.047], [140.922,55.531]]
		}]
	}, {
		coords:      [118.281,77.656],  // 5x-7x Wild Dog (L1) (in _crow_perch/cp_poe_north/wild_dogs3)
		name:        "wilddog",
		level:       "#1",
		areas: [{
			name: "monster.spawn",
			coords: [[124.625,78.656], [115.813,83.531], [111.813,74.813], [122.438,74.650]]
		}]
	}, {
		coords:      [133.594,50.781],  // 2x Warg (L5), 12x Wolf (L5) (in _crow_perch/cp_poe_north/wolves_group1)
		name:        "wolf",
		level:       "#5",
		areas: [{
			name: "monster.spawn",
			coords: [[136.063,54.719], [130.363,53.906], [130.213,49.406], [131.594,45.547], [133.594,45.891],
			        [137.938,51.859]]
		}]
	}, {
		coords:      [122.188,43.750],  // 2x Warg (L5), 12x Wolf (L5) (in _crow_perch/cp_poe_north/wolves_group2)
		name:        "wolf",
		level:       "#5",
		areas: [{
			name: "monster.spawn",
			coords: [[126.297,39.516], [127.281,50.672], [118.219,50.484], [117.438,36.406]]
		}]
	}, {
		coords:      [135.469,67.063],  // 2x Warg (L5), 12x Wolf (L5) (in _crow_perch/cp_poe_north/wolves_group3)
		name:        "wolf",
		level:       "#5",
		cleared:     "guardedSheep",
		areas: [{
			name: "monster.spawn",
			coords: [[140.469,66.969], [134.594,74.125], [131.219,65.750], [131.219,63.844], [135.563,62.391]]
		}]
	}, {
		coords:      [114.125,43.719],  // 12x-16x Nekker (L6) (in _crow_perch/cp_poe_north/nekkers_group1)
		name:        "nekker", // TODO: Are those Nekkers disabled while we search for Princess?
		level:       "#6",
		areas: [{
			name: "monster.spawn",
			coords: [[116.781,47.609], [111.531,47.875], [110.672,41.031], [116.641,39.344]]
		}]
	}, {
		coords:      [116.344,70.688],  // 12x-16x Nekker (L6) (in _crow_perch/cp_poe_north/nekkers_group2)
		name:        "nekker", // TODO: Are those Nekkers disabled while doing ritual?
		level:       "#6",
		areas: [{
			name: "monster.spawn",
			coords: [[121.594,65.406], [121.969,73.813], [116.281,73.906], [113.031,73.188], [113.125,70.031],
			        [111.125,65.344], [116.844,64.094]]
		}]
	}, {
		coords:      [147.625,50.125],  // 12x-16x Harpy (L7) (in _crow_perch/cp_poe_north/harpies_group1)
		name:        "harpy",
		level:       "#7",
		areas: [{
			name: "monster.spawn",
			coords: [[146.813,42.750], [155.938,50.375], [147.375,61.750], [139.375,53.875]]
		}]
	}, {
		coords:      [151.906,48.016],  // 3x Drowner (L10) (in lw_nml_w_001)
		name:        "drowner",
		level:       "#10",
		underwater:  true,
		areas: [{
			name: "monster.spawn",
			coords: [[152.875,47.750], [153.289,49.305], [152.758,49.805], [151.734,49.031], [151.094,48.375],
			        [151.141,47.063], [151.719,46.680]]
		}]
	}, {
		coords:      [130.203,38.641],  // 2x Bear (L6) (in _crow_perch/cp_poe_north/black_bear_group1)
		name:        "bear",
		level:       "#6",
		areas: [{
			name: "monster.spawn",
			coords: [[132.875,41.078], [127.313,44.688], [126.578,35.469], [132.609,35.000]]
		}]
	}, {
		coords:      [168.430,79.742],  // 4x-6x Mucknixer (L15) (in crow_perch/cp34_shipwreck_island)
		name:        "mucknixer",
		level:       "#15",
		once:        true,
		areas: [{
			name: "monster.spawn",
			coords: [[168.664,78.781], [169.367,80.508], [168.469,80.883], [167.836,79.820], [167.797,78.891]]
		}]
	}, {
		coords:      [169.195,77.789],  // 4x-6x Drowner (L10) (in crow_perch/cp34_shipwreck_island)
		name:        "drowner",
		level:       "#10",
		underwater:  true,
		once:        true,
		areas: [{
			name: "monster.spawn",
			coords: [[170.492,77.219], [170.617,79.031], [167.703,78.445], [167.703,77.375]]
		}]
	}, {
		coords:      [65.625,190.000],  // 1x Warg (L8), 6x Wolf (L5) (in _descent/de_poe_01)
		name:        "wolf",
		level:       "#5 & 8",
		areas: [{
			name: "monster.spawn",
			coords: [[67.734,186.469], [67.734,193.969], [63.453,193.969], [63.453,186.469]]
		}]
	}, {
		coords:      [73.094,184.531],  // 1x Warg (L8), 6x Wolf (L5) (in _descent/de_poe_01)
		name:        "wolf",
		level:       "#5 & 8",
		areas: [{
			name: "monster.spawn",
			coords: [[75.578,180.578], [75.578,189.156], [70.609,189.156], [70.609,180.578]]
		}]
	}, {
		coords:      [71.297,192.250],  // 1x-2x Drowned Dead (L18) (in _descent/de_poe_01)
		name:        "drowneddead",
		level:       "#18",
		areas: [{
			name: "monster.spawn",
			coords: [[72.950,190.606], [72.950,194.125], [69.469,194.125], [69.469,190.606]]
		}]
	}, {
		coords:      [66.297,177.891],  // 1x-2x Alghoul (L17) (in _descent/de_poe_01)
		name:        "alghoul",
		level:       "#17",
		areas: [{
			name: "monster.spawn",
			coords: [[69.047,174.688], [69.047,181.500], [63.531,181.500], [63.531,174.688]]
		}]
	}, {
		coords:      [77.703,178.313],  // 1x Bear (L12) (in _descent/de_poe_01)
		name:        "bear",
		level:       "#12",
		areas: [{
			name: "monster.spawn",
			coords: [[79.094,175.125], [79.094,181.453], [76.375,181.453], [76.375,175.125]]
		}]
	}, {
		coords:      [77.719,188.844],  // 1x-2x Drowned Dead (L18), 4x-6x Mucknixer (L15) (in _descent/de_poe_01)
		name:        "drowner",
		level:       "#15 & 18",
		areas: [{
			name: "monster.spawn",
			coords: [[79.938,186.375], [81.000,187.906], [75.469,192.094], [74.313,190.438]]
		}]
	}, {
		coords:      [91.875,177.281],  // 1x Warg (L8), 6x Wolf (L5) (in _descent/de_poe_01)
		name:        "wolf",
		level:       "#5 & 8",
		areas: [{
			name: "monster.spawn",
			coords: [[94.313,172.313], [94.313,183.463], [89.313,183.463], [89.313,172.313]]
		}]
	}, {
		coords:      [70.141,165.172],  // 1x Fiend (L16) (in _descent/de_poe_02)
		name:        "fiend",
		level:       "#16",
		cleared:     "guardedFossilHag",
		areas: [{
			name: "monster.spawn",
			coords: [[73.922,160.203], [73.922,168.969], [65.281,168.969], [65.281,160.203]]
		}]
	}, {
		coords:      [67.344,144.313],  // 2x-3x Foglet (L4) (in _descent/de_poe_02)
		name:        "foglet",
		level:       "#4",
		areas: [{
			name: "monster.spawn",
			coords: [[69.031,142.531], [69.031,146.734], [65.813,146.734], [65.813,142.531]]
		}]
	}, {
		coords:      [67.375,154.844],  // 1x Earth Elemental (L25) (in _descent/de_poe_02)
		name:        "earthelemental",
		level:       "#25",
		areas: [{
			name: "monster.spawn",
			coords: [[68.734,154.906], [67.250,155.906], [66.328,154.781], [67.672,153.266]]
		}]
	}, {
		coords:      [71.734,157.672],  // 1x Bilge Hag (L20) (in _descent/de_poe_02)
		name:        "bilgehag",
		level:       "#20",
		areas: [{
			name: "monster.spawn",
			coords: [[74.781,157.547], [74.781,158.969], [68.422,158.969], [68.656,158.016], [69.313,157.125],
			        [69.969,156.500], [72.313,156.109]]
		}]
	}, {
		coords:      [69.000,150.938],  // 2x-3x Foglel (L4) (in _descent/de_poe_02)
		name:        "foglet",
		level:       "#4",
		areas: [{
			name: "monster.spawn",
			coords: [[66.938,148.125], [72.547,151.547], [71.188,153.781], [65.500,150.453]]
		}]
	}, {
		coords:      [74.281,152.844],  // 1x-2x Alghoul (L14) (in _descent/de_poe_02)
		name:        "alghoul",
		level:       "#14",
		areas: [{
			name: "monster.spawn",
			coords: [[75.578,151.781], [75.578,154.109], [73.109,154.109], [73.109,151.781]]
		}]
	}, {
		coords:      [79.875,159.219],  // 1x-2x Nekker Warrior (L12) (in _descent/de_poe_02)
		name:        "nekkerwarrior",
		level:       "#12",
		areas: [{
			name: "monster.spawn",
			coords: [[83.406,157.438], [83.406,161.375], [76.406,161.375], [76.406,157.438]]
		}]
	}, {
		coords:      [79.750,151.063],  // 1x Bear (L12) (in _descent/de_poe_02)
		name:        "bear",
		level:       "#12",
		areas: [{
			name: "monster.spawn",
			coords: [[80.922,148.625], [82.219,153.281], [78.625,154.078], [77.266,149.609]]
		}]
	}, {
		coords:      [82.594,142.063],  // 1x Warg (L8), 6x Wolf (L5) (in _descent/de_poe_02)
		name:        "wolf",
		level:       "#5 & 8",
		areas: [{
			name: "monster.spawn",
			coords: [[89.438,137.750], [89.438,146.469], [80.641,146.469], [80.641,137.750]]
		}]
	}, {
		coords:      [85.969,141.938],  // 1x Leshen (L20) (in _descent/de_poe_02)
		name:        "leshen",
		level:       "#20",
		once:        true,
		areas: [{
			name: "monster.spawn",
			coords: [[90.688,138.688], [87.969,147.094], [82.188,145.531], [84.469,137.156]]
		}]
	}, {
		coords:      [64.109,137.656],  // 1x Water Hag (L8) (in _descent/de_poe_02)
		name:        "waterhag",
		level:       "#8",
		areas: [{
			name: "monster.spawn",
			coords: [[66.609,136.719], [66.609,139.219], [61.469,139.219], [61.469,136.719]]
		}]
	}, {
		coords:      [73.125,137.250],  // 1x Wyvern (L9) (in _descent/de_poe_02)
		name:        "wyvern",
		level:       "#9",
		areas: [{
			name: "monster.spawn",
			coords: [[76.750,135.109], [74.609,141.766], [69.578,139.891], [71.750,133.625]]
		}]
	}, {
		coords:      [62.828,133.219],  // 2x-3x Foglet (L4) (in _descent/de_poe_02)
		name:        "foglet",
		level:       "#4",
		notDuring:   "sidequest.forefathers",
		areas: [{
			name: "monster.spawn",
			coords: [[64.281,128.422], [64.281,136.234], [61.391,136.234], [61.391,128.422]]
		}]
	}, {
		coords:      [70.234,148.336],  // {21h-5h: 2x-3x Wraith (L7)} (in _descent/de_poe_02)
		name:        "wraith",
		level:       "#7",
		fromTime:    "#21",
		toTime:      "#5",
		areas: [{
			name: "monster.spawn",
			coords: [[71.688,146.703], [71.977,149.734], [68.969,149.992], [68.602,146.945]]
		}]
	}, {
		coords:      [92.641,152.859],  // 1x Warg (L8), 6x Wolf (L5) (in _descent/de_poe_02)
		name:        "wolf",
		level:       "#5 & 8",
		areas: [{
			name: "monster.spawn",
			coords: [[94.953,149.984], [94.953,155.781], [90.359,155.781], [90.359,149.984]]
		}]
	}, {
		coords:      [92.531,144.906],  // 1x Bear (L6) (in _descent/de_poe_02)
		name:        "bear",
		level:       "#6",
		areas: [{
			name: "monster.spawn",
			coords: [[94.594,143.000], [94.594,147.125], [90.813,147.125], [90.813,143.000]]
		}]
	}, {
		coords:      [92.250,136.250],  // 3x-4x Nekker (L8) (in _descent/de_poe_02)
		name:        "nekker",
		level:       "#8",
		areas: [{
			name: "monster.spawn",
			coords: [[94.219,133.125], [94.219,140.281], [90.094,140.281], [90.094,133.125]]
		}]
	}, {
		coords:      [86.063,131.531],  // 3x-4x Endrega Warrior (L12), 4x-5x Endrega Worker (L9) (in _descent/de_poe_02)
		name:        "endrega",
		level:       "#9 & 12",
		areas: [{
			name: "monster.spawn",
			coords: [[89.219,129.563], [89.219,136.438], [80.125,136.438], [80.125,129.563]]
		}]
	}, {
		coords:      [76.719,130.938],  // 1x Warg (L8), 6x Wolf (L5) (in _descent/de_poe_02)
		name:        "wolf",
		level:       "#5 & 8",
		areas: [{
			name: "monster.spawn",
			coords: [[79.031,129.313], [79.031,132.875], [74.438,132.875], [74.438,129.313]]
		}]
	}, {
		coords:      [67.938,129.375],  // 4x-6x Drowner (L4) (in _descent/de_poe_02)
		name:        "drowner",
		level:       "#4",
		areas: [{
			name: "monster.spawn",
			coords: [[70.375,127.781], [70.375,132.188], [65.750,132.188], [65.750,127.781]]
		}]
	}, {
		coords:      [62.891,152.672],  // 4x-5x Endrega Worker (L9) (in _descent/de_poe_02)
		name:        "endrega",
		level:       "#9",
		areas: [{
			name: "monster.spawn",
			coords: [[64.656,150.625], [64.656,155.328], [61.203,155.328], [61.203,150.625]]
		}]
	}, {
		coords:      [62.766,162.344],  // 1x Warg (L8), 6x Wolf (L5) (in _descent/de_poe_02)
		name:        "wolf",
		level:       "#5 & 8",
		areas: [{
			name: "monster.spawn",
			coords: [[64.422,156.891], [64.422,168.469], [61.156,168.469], [61.156,156.891]]
		}]
	}, {
		coords:      [112.938,178.844], // 2x-4x Drowned Dead (L18) (in _descent/de_poe_03)
		name:        "drowneddead",
		level:       "#18",
		areas: [{
			name: "monster.spawn",
			coords: [[115.797,174.156], [117.609,176.563], [109.813,183.672], [108.109,181.250]]
		}]
	}, {
		coords:      [116.594,167.938], // 1x Bilge Hag (L20) (in _descent/de_poe_03)
		name:        "bilgehag",
		level:       "#20",
		areas: [{
			name: "monster.spawn",
			coords: [[117.016,164.891], [118.094,170.172], [116.078,170.688], [114.859,165.328]]
		}]
	}, {
		coords:      [108.078,167.375], // 1x Warg (L8), 6x Wolf (L5) (in _descent/de_poe_03)
		name:        "wolf",
		level:       "#5 & 8",
		areas: [{
			name: "monster.spawn",
			coords: [[112.609,164.828], [112.609,170.563], [103.250,170.563], [103.250,164.828]]
		}]
	}, {
		coords:      [105.438,173.594], // 1x Bear (L6) (in _descent/de_poe_03)
		name:        "bear",
		level:       "#6",
		areas: [{
			name: "monster.spawn",
			coords: [[107.984,171.328], [107.984,176.156], [102.906,176.156], [102.906,171.328]]
		}]
	}, {
		coords:      [95.250,165.031],  // 1x-2x Nekker Warrior (L12) (in _descent/de_poe_03)
		name:        "nekkerwarrior",
		level:       "#12",
		uncleared:   "decentNekkerNestNorth",
		areas: [{
			name: "monster.spawn",
			coords: [[96.859,163.359], [96.859,167.297], [93.766,167.297], [93.766,163.359]]
		}]
	}, {
		coords:      [100.438,165.797], // 1x-2x Alghoul (L14) (in _descent/de_poe_03)
		name:        "alghoul",
		level:       "#14",
		areas: [{
			name: "monster.spawn",
			coords: [[102.359,163.109], [102.359,169.078], [98.359,169.078], [98.359,163.109]]
		}]
	}, {
		coords:      [99.609,167.328],  // 4x-6x Devourer (L13) (in _descent/de_poe_03)
		name:        "devourer",
		level:       "#13",
		areas: [{
			name: "monster.spawn",
			coords: [[102.359,163.109], [102.359,169.078], [98.359,169.078], [98.359,163.109]]
		}]
	}, {
		coords:      [110.203,174.063], // 4x-5x Endrega Worker (L9) (in _descent/de_poe_03)
		name:        "endrega",
		level:       "#9",
		areas: [{
			name: "monster.spawn",
			coords: [[111.750,172.172], [111.750,176.703], [108.563,176.703], [108.563,172.172]]
		}]
	}, {
		coords:      [106.156,149.297], // 4x-6x Ghoul (L9) (in _descent/de_poe_04)
		name:        "ghoul",
		level:       "#9",
		//after:       "treasurehunt.fire", // This quest also spawns 4x Ghoul (L9) here, so for the player it makes no difference.
		areas: [{
			name: "monster.spawn",
			coords: [[107.203,146.750], [107.203,151.047], [105.219,150.672], [104.359,148.594], [105.094,146.750]]
		}]
	}, {
		coords:      [96.188,124.109],  // 4x-5x Endrega Worker (L9) (in _descent/de_poe_04)
		name:        "endrega",
		level:       "#9",
		cleared:     "circlesCamp",
		areas: [{
			name: "monster.spawn",
			coords: [[97.609,121.781], [99.250,126.578], [95.234,127.938], [93.500,123.031]]
		}]
	}, {
		coords:      [113.219,140.297], // 4x-6x Drowner (L4) (in _descent/de_poe_04)
		name:        "drowner",
		level:       "#4",
		areas: [{
			name: "monster.spawn",
			coords: [[115.422,135.781], [115.422,146.406], [111.078,146.406], [111.078,135.781]]
		}]
	}, {
		coords:      [115.250,144.047], // 1x Drowner (L10) (in nml_w_036)
		name:        "drowner",
		level:       "#10",
		underwater:  true,
		areas: [{
			name: "monster.spawn",
			coords: [[115.953,143.063], [115.953,145.000], [114.641,145.000], [114.641,143.063]]
		}]
	}, {
		coords:      [112.813,153.313], // 1x Water Hag (L8) (in _descent/de_poe_04)
		name:        "waterhag",
		level:       "#8",
		areas: [{
			name: "monster.spawn",
			coords: [[114.719,148.484], [114.719,155.750], [111.344,155.750], [111.344,148.484]]
		}]
	}, {
		coords:      [100.609,122.078], // {21h-5h: 2x-3x Wraith (L7)} (in _descent/de_poe_04)
		name:        "wraith",
		level:       "#7",
		fromTime:    "#21",
		toTime:      "#5",
		areas: [{
			name: "monster.spawn",
			coords: [[103.344,124.359], [99.922,125.938], [97.453,119.922], [101.453,118.578]]
		}]
	}, {
		coords:      [105.875,119.078], // 1x Bear (L6) (in _descent/de_poe_04)
		name:        "bear",
		level:       "#6",
		areas: [{
			name: "monster.spawn",
			coords: [[107.453,117.031], [107.453,122.250], [104.469,122.250], [104.469,117.031]]
		}]
	}, {
		coords:      [107.797,129.875], // 5x-7x Wild Dog (L1) (in _descent/de_poe_04)
		name:        "wilddog",
		level:       "#1",
		areas: [{
			name: "monster.spawn",
			coords: [[109.359,123.813], [110.938,131.688], [110.438,132.344], [110.297,135.297],
			        [107.531,137.531], [106.156,136.656], [104.984,127.188], [105.375,124.641]]
		}]
	}, {
		coords:      [103.781,160.031], // 2x-3x Foglet (L4) (in _descent/de_poe_04)
		name:        "foglet",
		level:       "#4",
		areas: [{
			name: "monster.spawn",
			coords: [[103.469,157.906], [105.781,159.469], [103.625,162.500], [101.344,160.844]]
		}]
	}, {
		coords:      [109.922,158.656], // 6x-8x Nekker (L6) (in _descent/de_poe_04)
		name:        "nekker",
		level:       "#6",
		areas: [{
			name: "monster.spawn",
			coords: [[112.609,157.672], [110.203,162.047], [106.984,160.125], [109.750,155.656]]
		}]
	}, {
		coords:      [118.516,150.109], // 5x-7x Wild Dog (L1) (in _descent/de_poe_04)
		name:        "wilddog",
		level:       "#1",
		areas: [{
			name: "monster.spawn",
			coords: [[119.000,148.000], [120.406,151.938], [117.766,152.703], [116.578,148.641]]
		}]
	}, {
		coords:      [104.672,154.781], // 1x Arachas (L11) (in _descent/de_poe_04)
		name:        "arachas",
		level:       "#11",
		areas: [{
			name: "monster.spawn",
			coords: [[107.844,153.203], [107.844,157.203], [101.422,157.203], [101.422,153.203]]
		}]
	}, {
		coords:      [98.359,145.578],  // 6x-8x Nekker (L6) (in _descent/de_poe_04)
		name:        "nekker",
		level:       "#6",
		areas: [{
			name: "monster.spawn",
			coords: [[100.484,142.922], [100.484,149.016], [96.172,149.016], [96.172,142.922]]
		}]
	}, {
		coords:      [105.188,141.047], // 1x Bear (L6) (in _descent/de_poe_04)
		name:        "bear",
		level:       "#6",
		areas: [{
			name: "monster.spawn",
			coords: [[107.297,139.109], [107.297,143.719], [103.031,143.719], [103.031,139.109]]
		}]
	}, {
		coords:      [95.609,119.359],  // 1x Bear (L6) (in _descent/de_poe_04)
		name:        "bear",
		level:       "#6",
		areas: [{
			name: "monster.spawn",
			coords: [[95.766,117.141], [97.234,118.578], [96.328,120.844], [95.125,121.266],
			        [93.672,120.422], [94.719,119.797]]
		}]
	}, {
		disabled:    true, // Not working, because there are no matching spawn points placed.
		coords:      [101.141,116.656], // 2x-3x Wraith (L7) (in _descent/de_poe_04)
		name:        "wraith",
		level:       "#7",
		areas: [{
			name: "monster.spawn",
			coords: [[102.156,116.219], [102.156,117.984], [99.563,117.984], [99.563,116.219]]
		}]
	}, {
		coords:      [126.594,142.703], // 5x-6x Nekker (L18) (in _greyrocks/gr_poe_01)
		name:        "nekker",
		level:       "#18",
		after:       "treasurehunt.luck",
		areas: [{
			name: "monster.spawn",
			coords: [[128.391,141.703], [128.391,145.094], [125.016,145.094], [125.016,141.703]]
		}]
	}, {
		coords:      [123.313,109.875], // 2x Warg (L8), 12x Wolf (L5) (in _greyrocks/gr_poe_01)
		name:        "wolf",
		level:       "#5 & 8",
		areas: [{
			name: "monster.spawn",
			coords: [[128.313,111.781], [124.953,115.578], [118.031,109.188], [121.875,105.016]]
		}]
	}, {
		coords:      [117.625,117.281], // 2x Warg (L8), 12x Wolf (L5) (in _greyrocks/gr_poe_01)
		name:        "wolf",
		level:       "#5 & 8",
		areas: [{
			name: "monster.spawn",
			coords: [[118.281,113.750], [120.594,115.938], [121.719,119.313], [118.344,122.063],
			        [115.125,120.031], [113.625,117.656], [115.219,114.719]]
		}]
	}, {
		coords:      [119.578,124.422], // 4x-6x Ghoul (L2) (in _greyrocks/gr_poe_01)
		name:        "ghoul",
		level:       "#2",
		areas: [{
			name: "monster.spawn",
			coords: [[123.531,123.656], [123.531,125.313], [115.656,125.313], [115.656,123.656]]
		}]
	}, {
		coords:      [117.406,129.141], // 5x-7x Wild Dog (L1) (in _greyrocks/gr_poe_01)
		name:        "wilddog",
		level:       "#1",
		areas: [{
			name: "monster.spawn",
			coords: [[118.688,127.875], [118.688,130.375], [116.109,130.375], [116.109,127.875]]
		}]
	}, {
		coords:      [119.375,132.859], // 5x-7x Wild Dog (L1) (in _greyrocks/gr_poe_01)
		name:        "wilddog",
		level:       "#1",
		areas: [{
			name: "monster.spawn",
			coords: [[120.203,131.344], [120.203,134.766], [118.594,134.766], [118.594,131.344]]
		}]
	}, {
		coords:      [123.172,132.781], // 1x Warg (L8), 6x Wolf (L5) (in _greyrocks/gr_poe_01)
		name:        "wolf",
		level:       "#5 & 8",
		areas: [{
			name: "monster.spawn",
			coords: [[125.313,130.594], [125.313,135.188], [121.125,135.188], [121.125,130.594]]
		}]
	}, {
		coords:      [122.422,140.391], // 3x-4x Nekker (L8), 6x-8x Nekker (L6) (in _greyrocks/gr_poe_01)
		name:        "nekker",
		level:       "#6 & 8",
		areas: [{
			name: "monster.spawn",
			coords: [[124.391,138.594], [124.391,142.297], [120.734,142.297], [120.734,138.594]]
		}]
	}, {
		coords:      [121.016,145.859], // 6x-8x Nekker (L6) (in _greyrocks/gr_poe_01)
		name:        "nekker",
		level:       "#6",
		areas: [{
			name: "monster.spawn",
			coords: [[123.219,143.594], [123.219,148.469], [118.719,148.469], [118.719,143.594]]
		}]
	}, {
		coords:      [132.594,141.219], // 1x Bear (L6) (in _greyrocks/gr_poe_01)
		name:        "bear",
		level:       "#6",
		areas: [{
			name: "monster.spawn",
			coords: [[134.469,139.000], [134.469,143.719], [130.750,143.719], [130.750,139.000]]
		}]
	}, {
		coords:      [130.297,134.641], // 5x-7x Wild Dog (L1) (in _greyrocks/gr_poe_01)
		name:        "wilddog",
		level:       "#1",
		areas: [{
			name: "monster.spawn",
			coords: [[131.594,133.547], [131.594,136.000], [129.016,136.000], [129.016,133.547]]
		}]
	}, {
		coords:      [127.625,129.172], // 12x-16x Nekker (L6) (in _greyrocks/gr_poe_01)
		name:        "nekker",
		level:       "#6",
		areas: [{
			name: "monster.spawn",
			coords: [[128.906,127.078], [128.906,131.563], [126.359,131.563], [126.359,127.078]]
		}]
	}, {
		coords:      [126.828,123.063], // 5x-7x Wild Dog (L1) (in _greyrocks/gr_poe_01)
		name:        "wilddog",
		level:       "#1",
		areas: [{
			name: "monster.spawn",
			coords: [[128.563,121.547], [128.563,124.578], [125.156,124.578], [125.156,121.547]]
		}]
	}, {
		coords:      [136.688,120.313], // 5x-7x Wild Dog (L1) (in _greyrocks/gr_poe_01)
		name:        "wilddog",
		level:       "#1",
		areas: [{
			name: "monster.spawn",
			coords: [[138.328,119.641], [138.328,121.063], [135.094,121.063], [135.094,119.641]]
		}]
	}, {
		coords:      [139.219,136.781], // 8x-12x Ghoul (L2) (in _greyrocks/gr_poe_01)
		name:        "ghoul",
		level:       "#2",
		areas: [{
			name: "monster.spawn",
			coords: [[141.344,133.438], [142.281,141.969], [137.750,141.500], [137.156,138.031],
			        [134.328,135.609], [133.828,133.609]]
		}]
	}, {
		coords:      [139.719,126.891], // 4x-6x Ghoul (L2) (in _greyrocks/gr_poe_01)
		name:        "ghoul",
		level:       "#2",
		areas: [{
			name: "monster.spawn",
			coords: [[141.313,124.719], [141.313,128.984], [137.469,128.984], [137.469,124.719]]
		}]
	}, {
		coords:      [145.938,129.406], // 1x Warg (L8), 6x Wolf (L5) (in _greyrocks/gr_poe_01)
		name:        "wolf",
		level:       "#5 & 8",
		areas: [{
			name: "monster.spawn",
			coords: [[147.969,126.438], [147.969,132.344], [142.688,132.344], [142.688,126.438]]
		}]
	}, {
		coords:      [131.625,152.031], // 4x-6x Ghoul (L2) (in _greyrocks/gr_poe_02)
		name:        "ghoul",
		level:       "#2",
		cleared:     "battlefieldCamp",
		areas: [{
			name: "monster.spawn",
			coords: [[133.688,149.375], [133.688,155.000], [129.625,155.000], [129.625,149.375]]
		}]
	}, {
		coords:      [125.313,154.344], // 4x-6x Ghoul (L2) (in _greyrocks/gr_poe_02)
		name:        "ghoul",
		level:       "#2",
		cleared:     "battlefieldCamp",
		areas: [{
			name: "monster.spawn",
			coords: [[127.500,151.875], [127.500,156.969], [123.125,156.969], [123.125,151.875]]
		}]
	}, {
		coords:      [123.453,161.172], // 4x-6x Drowner (L4) (in _greyrocks/gr_poe_02)
		name:        "drowner",
		level:       "#4",
		areas: [{
			name: "monster.spawn",
			coords: [[124.563,158.344], [124.563,164.531], [122.313,164.531], [122.313,158.344]]
		}]
	}, {
		coords:      [134.547,166.703], // 4x-6x Drowner (L4) (in _greyrocks/gr_poe_02)
		name:        "drowner",
		level:       "#4",
		areas: [{
			name: "monster.spawn",
			coords: [[136.938,164.063], [135.094,170.453], [132.609,169.594], [134.578,163.094]]
		}]
	}, {
		coords:      [137.359,154.484], // 5x-7x Wild Dog (L1) (in _greyrocks/gr_poe_02)
		name:        "wilddog",
		level:       "#1",
		areas: [{
			name: "monster.spawn",
			coords: [[139.656,153.141], [139.656,156.078], [135.125,156.078], [135.125,153.141]]
		}]
	}, {
		coords:      [129.672,170.391], // 1x Warg (L8), 6x Wolf (L5) (in _greyrocks/gr_poe_02)
		name:        "wolf",
		level:       "#5 & 8",
		areas: [{
			name: "monster.spawn",
			coords: [[131.625,168.438], [131.625,172.375], [127.719,172.375], [127.719,168.438]]
		}]
	}, {
		coords:      [127.188,162.578], // 2x Warg (L8), 12x Wolf (L5) (in _greyrocks/gr_poe_02)
		name:        "wolf",
		level:       "#5 & 8",
		areas: [{
			name: "monster.spawn",
			coords: [[128.828,159.563], [128.828,166.078], [125.516,166.078], [125.516,159.563]]
		}]
	}, {
		coords:      [169.750,139.563], // 4x-6x Foglet (L4) (in _greyrocks/gr_poe_03)
		name:        "foglet",
		level:       "#4",
		after:       "treasurehunt.battlefield",
		areas: [{
			name: "monster.spawn",
			coords: [[174.625,134.406], [174.625,143.875], [165.344,143.875], [165.344,134.406]]
		}]
	}, {
		coords:      [165.969,150.469], // 4x-6x Drowner (L9) (in _greyrocks/gr_poe_03)
		name:        "drowner",
		level:       "#9",
		after:       "treasurehunt.dowry",
		areas: [{
			name: "monster.spawn",
			coords: [[169.063,145.750], [169.063,155.406], [162.750,155.406], [162.750,145.750]]
		}]
	}, {
		coords:      [156.672,135.828], // 4x-6x Ghoul (L2) (in _greyrocks/gr_poe_03)
		name:        "ghoul",
		level:       "#2",
		areas: [{
			name: "monster.spawn",
			coords: [[156.938,133.406], [158.969,136.031], [156.047,138.531], [155.250,138.563], [154.719,135.141]]
		}]
	}, {
		coords:      [155.484,127.766], // 4x-6x Foglet (L4) (in _greyrocks/gr_poe_03)
		name:        "foglet",
		level:       "#4",
		areas: [{
			name: "monster.spawn",
			coords: [[157.188,123.641], [157.188,132.578], [153.609,132.578], [153.609,124.047]]
		}]
	}, {
		coords:      [150.938,131.563], // 1x Bear (L6) (in _greyrocks/gr_poe_03)
		name:        "bear",
		level:       "#6",
		areas: [{
			name: "monster.spawn",
			coords: [[152.906,131.656], [150.688,133.969], [148.563,131.406], [151.156,129.188]]
		}]
	}, {
		coords:      [152.156,152.594], // 4x-6x Drowner (L9) (in _greyrocks/gr_poe_03)
		name:        "drowner",
		level:       "#9",
		areas: [{
			name: "monster.spawn",
			coords: [[154.797,146.984], [154.797,157.109], [149.328,157.109], [149.328,146.984]]
		}]
	}, {
		coords:      [161.313,144.250], // 4x-6x Drowner (L9) (in _greyrocks/gr_poe_03)
		name:        "drowner",
		level:       "#9",
		areas: [{
			name: "monster.spawn",
			coords: [[164.688,144.000], [159.750,147.719], [157.375,144.656], [162.453,140.672]]
		}]
	}, {
		coords:      [150.563,141.391], // 6x-8x Nekker (L8) (in _greyrocks/gr_poe_03)
		name:        "nekker",
		level:       "#8",
		areas: [{
			name: "monster.spawn",
			coords: [[153.141,138.500], [152.109,146.109], [148.063,145.500], [149.484,137.563]]
		}]
	}, {
		coords:      [149.328,124.250], // 5x-7x Wild Dog (L1) (in _greyrocks/gr_poe_04)
		name:        "wilddog",
		level:       "#1",
		areas: [{
			name: "monster.spawn",
			coords: [[144.250,122.625], [151.609,122.625], [152.063,125.469], [149.438,126.859]]
		}]
	}, {
		coords:      [142.922,108.250], // 5x-7x Wild Dog (L1) (in _greyrocks/gr_poe_04)
		name:        "wilddog",
		level:       "#1",
		areas: [{
			name: "monster.spawn",
			coords: [[147.491,104.344], [146.719,113.250], [138.859,114.219], [138.859,104.344]]
		}]
	}, {
		coords:      [135.594,104.313], // 2x X (L6) (in _greyrocks/gr_poe_04)
		name:        "bear",
		level:       "#6",
		areas: [{
			name: "monster.spawn",
			coords: [[138.594,98.969], [141.563,103.750], [132.375,110.250], [129.188,105.438]]
		}]
	}, {
		coords:      [125.469,173.586], // 6x Ghoul (L9) (in greyrocks/gr11_ferry_station)
		name:        "ghoul",
		level:       "#9",
		once:        true,
		uncleared:   "abandonedFerryStation",
		areas: [{
			name: "monster.spawn",
			coords: [[126.844,171.969], [126.844,174.844], [124.117,174.844], [124.117,171.969]]
		}]
	}, {
		coords:      [218.906,119.094], // 4x-6x Devourer (L13) (in _gustfields/gf_poe_01)
		name:        "devourer",
		level:       "#13",
		fromTime:    "#23",
		toTime:      "#4",
		areas: [{
			name: "monster.spawn",
			coords: [[218.500,117.875], [220.906,117.609], [221.156,119.734], [218.344,120.109], [217.641,119.047]]
		}]
	}, {
		coords:      [219.938,118.703], // 1x-2x Alghoul (L14) (in _gustfields/gf_poe_01)
		name:        "alghoul",
		level:       "#14",
		fromTime:    "#23",
		toTime:      "#4",
		areas: [{
			name: "monster.spawn",
			coords: [[218.500,117.875], [220.906,117.609], [221.156,119.734], [218.344,120.109], [217.641,119.047]]
		}]
	}, {
		coords:      [226.094,128.188], // 1x Warg (L8), 6x Wolf (L5) (in _gustfields/gf_poe_01)
		name:        "wolf",
		level:       "#5 & 8",
		areas: [{
			name: "monster.spawn",
			coords: [[224.375,129.781], [223.281,127.906], [227.000,126.156], [228.781,127.344], [227.969,128.625],
			        [226.625,129.625]]
		}]
	}, {
		coords:      [220.969,125.109], // 1x Warg (L8), 6x Wolf (L5) (in _gustfields/gf_poe_01)
		name:        "wolf",
		level:       "#5 & 8",
		areas: [{
			name: "monster.spawn",
			coords: [[222.734,126.750], [221.250,127.641], [219.797,125.375], [219.359,123.984], [220.266,122.797],
			        [221.500,123.656]]
		}]
	}, {
		disabled:    true, // Disabled by HoS DLC.
		coords:      [248.031,144.688], // 1x Warg (L8), 6x Wolf (L5) (in _gustfields/gf_poe_01)
		name:        "wolf",
		level:       "#5 & 8",
		areas: [{
			name: "monster.spawn",
			coords: [[246.313,140.750], [248.453,142.344], [251.922,145.078], [251.453,147.844], [246.156,146.406],
			        [245.031,142.750]]
		}]
	}, {
		disabled:    true, // Disabled by HoS DLC.
		coords:      [241.688,114.984], // 1x Warg (L8), 6x Wolf (L5) (in _gustfields/gf_poe_01)
		name:        "wolf",
		level:       "#5 & 8",
		areas: [{
			name: "monster.spawn",
			coords: [[239.578,114.031], [241.594,113.172], [244.094,113.141], [244.750,115.578], [240.625,117.078],
			        [238.422,115.641]]
		}]
	}, {
		coords:      [224.219,125.109], // 1x Bear (L12) (in _gustfields/gf_poe_01)
		name:        "bear",
		level:       "#12",
		areas: [{
			name: "monster.spawn",
			coords: [[224.656,123.891], [225.281,125.750], [223.828,126.266], [223.094,124.313]]
		}]
	}, {
		coords:      [225.500,114.500], // 1x Bear (L12) (in _gustfields/gf_poe_01)
		name:        "bear",
		level:       "#12",
		areas: [{
			name: "monster.spawn",
			coords: [[226.688,112.750], [227.469,113.938], [226.938,116.234], [224.703,116.500], [223.609,114.703],
			        [224.234,112.984], [225.344,112.578]]
		}]
	}, {
		coords:      [231.906,117.375], // 1x Cockatrice (L20) (in _gustfields/gf_poe_01)
		name:        "cockatrice",
		level:       "#20",
		areas: [{
			name: "monster.spawn",
			coords: [[230.847,114.294], [235.297,118.719], [233.344,120.656], [228.563,116.234]]
		}]
	}, {
		coords:      [232.016,108.031], // 4x-6x Drowner (L9) (in _gustfields/gf_poe_01)
		name:        "drowner",
		level:       "#9",
		areas: [{
			name: "monster.spawn",
			coords: [[233.109,103.500], [235.031,105.625], [232.000,109.250], [230.031,107.500]]
		}]
	}, {
		disabled:    true, // Disabled by HoS DLC.
		coords:      [229.547,110.484], // 4x-6x Drowner (L9) (in _gustfields/gf_poe_01)
		name:        "drowner",
		level:       "#9",
		areas: [{
			name: "monster.spawn",
			coords: [[229.797,107.422], [232.063,109.531], [229.469,111.703], [228.078,112.344], [226.781,111.328]]
		}]
	}, {
		coords:      [242.891,84.609], // 1x-2x Drowned Dead (L18) (in _gustfields/gf_poe_01)
		name:        "drowneddead",
		level:       "#18",
		areas: [{
			name: "monster.spawn",
			coords: [[246.438,80.594], [244.125,90.969], [238.375,90.000], [240.531,80.656]]
		}]
	}, {
		coords:      [238.125,109.578], // 3x-4x Endrage Warrior (L11), 4x-5x Endrega Worker (L9) (in _gustfields/gf_poe_01)
		name:        "endrega",
		level:       "#9 & 11",
		areas: [{
			name: "monster.spawn",
			coords: [[235.547,107.500], [238.125,106.969], [240.750,110.375], [240.125,112.078], [238.703,112.219],
			        [236.656,111.172]]
		}]
	}, {
		coords:      [240.734,106.734], // 3x-4x Endrage Warrior (L11) (in _gustfields/gf_poe_01)
		name:        "endrega",
		level:       "#11",
		areas: [{
			name: "monster.spawn",
			coords: [[238.984,106.594], [240.984,104.750], [242.656,106.844], [240.250,108.547]]
		}]
	}, {
		disabled:    true, // Disabled by HoS DLC.
		coords:      [250.344,102.359], // 3x-4x Endrage Warrior (L11) (in _gustfields/gf_poe_01)
		name:        "endrega",
		level:       "#11",
		areas: [{
			name: "monster.spawn",
			coords: [[246.516,100.375], [251.750,98.313], [254.000,104.453], [249.000,106.484]]
		}]
	}, {
		coords:      [243.594,98.156], // 5x-6x Nekker (L18) (in _gustfields/gf_poe_01)
		name:        "nekker",
		level:       "#18",
		areas: [{
			name: "monster.spawn",
			coords: [[241.438,96.313], [244.078,95.234], [246.000,100.422], [243.469,101.547]]
		}]
	}, {
		coords:      [200.688,130.672], // 4x-6x Drowner (L9) (in _gustfields/gf_poe_02)
		name:        "drowner",
		level:       "#9",
		areas: [{
			name: "monster.spawn",
			coords: [[202.375,129.031], [202.375,133.109], [199.031,133.109], [199.031,128.938]]
		}]
	}, {
		coords:      [206.281,129.641], // 4x-6x Drowner (L9) (in _gustfields/gf_poe_02)
		name:        "drowner",
		level:       "#9",
		areas: [{
			name: "monster.spawn",
			coords: [[206.047,126.359], [209.125,128.203], [206.438,133.172], [203.469,131.484]]
		}]
	}, {
		coords:      [198.156,151.766], // 1x Nightwraith (L15) (in _gustfields/gf_poe_02)
		name:        "nightwraith",
		level:       "#15",
		fromTime:    "#22",
		toTime:      "#5",
		areas: [{
			name: "monster.spawn",
			coords: [[202.016,147.641], [199.547,153.047], [196.406,151.719], [199.047,146.000]]
		}]
	}, {
		coords:      [199.219,149.313], // 1x Noonwraith (L15) (in _gustfields/gf_poe_02)
		name:        "noonwraith",
		level:       "#15",
		fromTime:    "#9",
		toTime:      "#16",
		areas: [{
			name: "monster.spawn",
			coords: [[199.016,147.031], [201.375,148.250], [199.156,151.922], [196.859,150.609]]
		}]
	}, {
		coords:      [198.625,140.781], // 2x Warg (L8), 12x Wolf (L5) (in _gustfields/gf_poe_02)
		name:        "wolf",
		level:       "#5 & 8",
		notDuring:   "mainquest.poet",
		areas: [{
			name: "monster.spawn",
			coords: [[201.031,134.938], [205.281,140.438], [196.563,147.156], [192.281,141.656]]
		}]
	}, {
		coords:      [212.281,131.891], // 3x-4x Nekker (L8) (in _gustfields/gf_poe_02)
		name:        "nekker",
		level:       "#8",
		areas: [{
			name: "monster.spawn",
			coords: [[215.125,128.547], [217.016,132.672], [209.359,135.672], [207.719,131.203]]
		}]
	}, {
		coords:      [207.578,139.438], // 4x-6x Drowner (L9) (in _gustfields/gf_poe_02)
		name:        "drowner",
		level:       "#9",
		notDuring:   "mainquest.poet",
		areas: [{
			name: "monster.spawn",
			coords: [[210.750,137.656], [210.750,141.063], [206.141,141.063], [206.141,137.656]]
		}]
	}, {
		coords:      [207.625,148.906], // 4x-6x Drowner (L9) (in _gustfields/gf_poe_02)
		name:        "drowner",
		level:       "#9",
		after:       "sidequest.empty", // TODO: Check if this works. Fact 'mq1016_aftermath_triggered' is only set in bugfixing phase, not in quest itself.
		areas: [{
			name: "monster.spawn",
			coords: [[209.656,147.344], [209.656,150.375], [205.469,150.375], [205.469,147.344]]
		}]
	}, {
		coords:      [225.344,159.719], // 1x Warg (L8), 6x Wolf (L5) (in _gustfields/gf_poe_03)
		name:        "wolf",
		level:       "#5 & 8",
		areas: [{
			name: "monster.spawn",
			coords: [[222.766,157.891], [224.781,158.047], [226.359,158.688], [227.969,160.313],
			        [226.766,162.609], [222.969,159.797]]
		}]
	}, {
		coords:      [209.188,177.719], // 1x Warg (L8), 6x Wolf (L5) (in _gustfields/gf_poe_03)
		name:        "wolf",
		level:       "#5 & 8",
		areas: [{
			name: "monster.spawn",
			coords: [[207.875,180.000], [207.844,175.656], [209.313,174.344], [210.344,175.563],
			        [211.000,177.719], [210.188,180.094]]
		}]
	}, {
		coords:      [235.984,171.406], // 3x-4x Endrega Warrior (L11), 4x-5x Endrega Worker (L9) (in _gustfields/gf_poe_03)
		name:        "endrega",
		level:       "#9 & 11",
		areas: [{
			name: "monster.spawn",
			coords: [[235.016,168.266], [238.531,168.969], [236.719,174.984], [233.906,174.156]]
		}]
	}, {
		coords:      [218.844,159.625], // 3x-4x Nekker (L8), 6x-8x Nekker (L6) (in _gustfields/gf_poe_03)
		name:        "nekker",
		level:       "#6 & 8",
		areas: [{
			name: "monster.spawn",
			coords: [[215.516,159.531], [216.703,157.594], [220.234,157.516], [220.766,160.594], [217.219,163.125]]
		}]
	}, {
		coords:      [210.328,168.375], // 3x-4x Nekker (L8), 6x-8x Nekker (L6) (in _gustfields/gf_poe_03)
		name:        "nekker",
		level:       "#6 & 8",
		areas: [{
			name: "monster.spawn",
			coords: [[209.813,165.625], [213.922,166.766], [213.281,169.672], [209.609,171.984], [206.969,168.484]]
		}]
	}, {
		coords:      [213.875,183.656], // 1x Wyvern (L14) (in _gustfields/gf_poe_03)
		name:        "wyvern",
		level:       "#14",
		areas: [{
			name: "monster.spawn",
			coords: [[214.625,181.906], [215.938,183.313], [213.375,185.781], [212.000,184.063]]
		}]
	}, {
		coords:      [174.031,162.844], // 1x Nightwraith (L15) (in _gustfields/gf_poe_04)
		name:        "nightwraith",
		level:       "#15",
		fromTime:    "#19",
		fromTimeM:   "#30",
		toTime:      "#5",
		areas: [{
			name: "monster.spawn",
			coords: [[171.469,162.406], [174.328,158.766], [177.156,161.234], [174.313,164.594]]
		}]
	}, {
		coords:      [174.281,161.156], // 1x Noonwraith (L15) (in _gustfields/gf_poe_04)
		name:        "noonwraith",
		level:       "#15",
		fromTime:    "#5",
		toTime:      "#19",
		toTimeM:     "#30",
		areas: [{
			name: "monster.spawn",
			coords: [[171.469,162.406], [174.328,158.766], [177.156,161.234], [174.313,164.594]]
		}]
	}, {
		coords:      [189.156,149.922], // 4x-6x Drowner (L9) (in _gustfields/gf_poe_04)
		name:        "drowner",
		level:       "#9",
		areas: [{
			name: "monster.spawn",
			coords: [[190.828,146.859], [190.828,151.141], [185.703,151.141], [185.703,146.859]]
		}]
	}, {
		coords:      [172.234,172.375], // 1x Nightwraith (L15) (in _gustfields/gf_poe_04)
		name:        "nightwraith",
		level:       "#15",
		fromTime:    "#19",
		fromTimeM:   "#30",
		toTime:      "#5",
		areas: [{
			name: "monster.spawn",
			coords: [[171.797,169.828], [174.563,170.875], [172.906,175.031], [169.969,173.922]]
		}]
	}, {
		coords:      [174.922,180.688], // 1x Warg (L8), 6x Wolf (L5) (in _gustfields/gf_poe_04)
		name:        "wolf",
		level:       "#5 & 8",
		areas: [{
			name: "monster.spawn",
			coords: [[178.031,177.797], [176.078,184.906], [171.844,183.891], [173.922,176.500]]
		}]
	}, {
		coords:      [187.063,194.031], // 1x Forktail (L18) (in _gustfields/gf_poe_04)
		name:        "forktail",
		level:       "#18",
		areas: [{
			name: "monster.spawn",
			coords: [[190.875,190.531], [192.250,196.750], [183.703,198.656], [182.297,192.438]]
		}]
	}, {
		coords:      [204.219,173.500], // 3x-4x Nekker (L8) (in _gustfields/gf_poe_04)
		name:        "nekker",
		level:       "#8",
		areas: [{
			name: "monster.spawn",
			coords: [[206.875,171.281], [206.875,176.469], [201.563,176.469], [201.563,171.281]]
		}]
	}, {
		disabled:    true, // Disabled by HoS DLC.
		coords:      [200.250,186.563], // 1x Grave Hag (L28) (in _gustfields/gf_poe_04)
		name:        "gravehag",
		level:       "#28",
		once:        true,
		areas: [{
			name: "monster.spawn",
			coords: [[198.031,183.594], [203.078,185.781], [202.000,190.359], [196.313,188.469]]
		}]
	}, {
		coords:      [143.813,188.172], // 1x Warg (L8), 6x Wolf (L5) (in _gustfields/gf_poe_05)
		name:        "wolf",
		level:       "#5 & 8",
		areas: [{
			name: "monster.spawn",
			coords: [[145.352,185.422], [145.695,187.086], [145.320,188.914], [143.484,191.047],
			        [141.453,189.484], [143.359,185.594]]
		}]
	}, {
		coords:      [162.563,195.375], // 1x Warg (L8), 6x Wolf (L5) (in _gustfields/gf_poe_05)
		name:        "wolf",
		level:       "#5 & 8",
		areas: [{
			name: "monster.spawn",
			coords: [[163.625,193.469], [164.781,195.625], [162.156,197.281], [160.594,196.938],
			        [161.125,195.563], [161.938,194.469]]
		}]
	}, {
		coords:      [161.313,201.344], // 1x Warg (L8), 6x Wolf (L5) (in _gustfields/gf_poe_05)
		name:        "wolf",
		level:       "#5 & 8",
		areas: [{
			name: "monster.spawn",
			coords: [[159.344,199.594], [160.781,198.813], [163.188,202.219], [162.938,204.156],
			        [161.594,203.625], [160.125,202.219]]
		}]
	}, {
		coords:      [168.938,196.781], // 1x Warg (L8), 6x Wolf (L5) (in _gustfields/gf_poe_05)
		name:        "wolf",
		level:       "#5 & 8",
		areas: [{
			name: "monster.spawn",
			coords: [[166.875,194.813], [168.469,195.000], [170.469,196.656], [171.469,198.188],
			        [169.438,199.375], [166.844,196.313]]
		}]
	}, {
		coords:      [153.563,193.750], // 1x-2x Nekker Warrior (L12), 6x-8x Nekker (L8) (in _gustfields/gf_poe_05)
		name:        "nekker",
		level:       "#8 & 12",
		areas: [{
			name: "monster.spawn",
			coords: [[157.094,196.063], [151.969,198.500], [150.469,194.000], [151.531,190.469], [155.500,190.469]]
		}]
	}, {
		coords:      [146.906,193.250], // 1x Bear (L12) (in _gustfields/gf_poe_05)
		name:        "bear",
		level:       "#12",
		areas: [{
			name: "monster.spawn",
			coords: [[147.313,191.156], [148.969,193.781], [146.563,195.188], [144.844,192.719]]
		}]
	}, {
		coords:      [160.531,192.500], // 1x Bear (L12) (in _gustfields/gf_poe_05)
		name:        "bear",
		level:       "#12",
		areas: [{
			name: "monster.spawn",
			coords: [[160.750,190.000], [162.750,193.313], [160.156,194.781], [158.125,191.313]]
		}]
	}, {
		coords:      [140.469,183.297], // 4x-6x Drowner (L9) (in _gustfields/gf_poe_05)
		name:        "drowner",
		level:       "#9",
		areas: [{
			name: "monster.spawn",
			coords: [[141.469,180.188], [143.063,182.766], [138.984,185.516], [137.359,182.781]]
		}]
	}, {
		coords:      [147.406,208.313], // 3x-4x Endrega Warrior (L11), 4x-5x Endrega Worker (L9) (in _gustfields/gf_poe_06)
		name:        "endrega",
		level:       "#9 & 11",
		areas: [{
			name: "monster.spawn",
			coords: [[151.500,203.875], [151.500,212.188], [143.500,212.188], [143.500,203.875]]
		}]
	}, {
		coords:      [125.125,204.938], // 1x Warg (L8), 6x Wolf (L5) (in _gustfields/gf_poe_06)
		name:        "wolf",
		level:       "#5 & 8",
		areas: [{
			name: "monster.spawn",
			coords: [[129.531,202.063], [129.531,208.438], [120.938,208.438], [120.938,202.063]]
		}]
	}, {
		coords:      [138.250,203.063], // 3x-4x Nekker (L8) (in _gustfields/gf_poe_06)
		name:        "nekker",
		level:       "#8",
		areas: [{
			name: "monster.spawn",
			coords: [[143.500,200.875], [141.469,207.813], [132.750,205.906], [134.594,198.813]]
		}]
	}, {
		coords:      [120.484,193.734], // 4x-6x Drowner (L9) (in _gustfields/gf_poe_06)
		name:        "drowner",
		level:       "#9",
		areas: [{
			name: "monster.spawn",
			coords: [[122.844,190.781], [123.766,195.281], [117.844,196.281], [117.063,191.891]]
		}]
	}, {
		coords:      [138.313,193.656], // 1x Warg (L8), 6x Wolf (L5) (in _gustfields/gf_poe_06)
		name:        "wolf",
		level:       "#5 & 8",
		areas: [{
			name: "monster.spawn",
			coords: [[140.094,189.656], [142.656,194.000], [136.500,198.156], [133.844,193.219]]
		}]
	}, {
		coords:      [134.094,188.609], // 1x Bear (L12) (in _gustfields/gf_poe_06)
		name:        "bear",
		level:       "#12",
		areas: [{
			name: "monster.spawn",
			coords: [[135.281,186.578], [136.313,189.531], [132.672,190.719], [131.656,187.438]]
		}]
	}, {
		coords:      [117.219,202.188], // 3x-4x Nekker (L8) (in _gustfields/gf_poe_06)
		name:        "nekker",
		level:       "#8",
		areas: [{
			name: "monster.spawn",
			coords: [[119.688,198.781], [119.688,206.188], [114.656,206.188], [114.656,198.781]]
		}]
	}, {
		coords:      [123.750,197.875], // 1x Warg (L8), 6x Wolf (L5) (in _gustfields/gf_poe_06)
		name:        "wolf",
		level:       "#5 & 8",
		areas: [{
			name: "monster.spawn",
			coords: [[125.219,194.328], [127.453,198.453], [122.219,201.469], [119.953,197.438]]
		}]
	}, {
		coords:      [170.781,120.938], // 2x-3x Foglet (L4) (in _homestead/hs_poe_01)
		name:        "foglet",
		level:       "#4",
		cleared:     "guardedPontarWyvern",
		areas: [{
			name: "monster.spawn",
			coords: [[170.344,115.219], [174.078,120.156], [173.188,123.516], [169.484,123.172], [167.016,117.813]]
		}]
	}, {
		coords:      [177.844,137.438], // 4x-6x Drowner (L9) (in _homestead/hs_poe_01)
		name:        "drowner",
		level:       "#9",
		areas: [{
			name: "monster.spawn",
			coords: [[179.547,134.109], [179.719,141.141], [176.344,141.500], [175.672,134.453]]
		}]
	}, {
		coords:      [189.250,134.453], // 3x-4x Endrega Warrior (L11), 4x-5x Endrega Worker (L9) (in _homestead/hs_poe_01)
		name:        "endrega",
		level:       "#9 & 11",
		areas: [{
			name: "monster.spawn",
			coords: [[192.938,132.578], [189.594,139.016], [185.922,140.531], [185.922,134.875], [189.828,130.203],
			        [191.375,129.563], [192.938,130.219]]
		}]
	}, {
		coords:      [185.969,127.156], // 1x-2x Nekker Warrior (L12), 3x-4x Nekker (L8) (in _homestead/hs_poe_01)
		name:        "nekker",
		level:       "#8 & 12",
		areas: [{
			name: "monster.spawn",
			coords: [[188.703,126.828], [188.703,128.891], [186.672,129.984], [183.672,129.172], [183.672,125.094],
			        [184.734,123.500]]
		}]
	}, {
		coords:      [190.000,118.281], // 1x Nightwraith (L15) (in _homestead/hs_poe_01)
		name:        "nightwraith",
		level:       "#15",
		fromTime:    "#19",
		fromTimeM:   "#30",
		toTime:      "#5",
		areas: [{
			name: "monster.spawn",
			coords: [[191.688,116.594], [191.688,119.188], [189.172,119.188], [189.172,116.594]]
		}]
	}, {
		coords:      [190.672,117.406], // 1x Noonwraith (L15) (in _homestead/hs_poe_01)
		name:        "noonwraith",
		level:       "#15",
		fromTime:    "#5",
		toTime:      "#19",
		toTimeM:     "#30",
		areas: [{
			name: "monster.spawn",
			coords: [[191.688,116.594], [191.688,119.188], [189.172,119.188], [189.172,116.594]]
		}]
	}, {
		coords:      [181.734,138.703], // 1x Warg (L8), 6x Wolf (L5) (in _homestead/hs_poe_01)
		name:        "wolf",
		level:       "#5 & 8",
		areas: [{
			name: "monster.spawn",
			coords: [[182.984,136.656], [182.734,141.125], [180.578,140.781], [180.500,136.719]]
		}]
	}, {
		coords:      [169.406,100.297], // 1x Warg (L8), 6x Wolf (L5) (in _homestead/hs_poe_02)
		name:        "wolf",
		level:       "#5 & 8",
		cleared:     "urstenNestEast",
		areas: [{
			name: "monster.spawn",
			coords: [[172.234,96.109], [172.234,103.891], [166.328,103.891], [166.328,96.109]]
		}]
	}, {
		coords:      [188.438,87.406],  // 1x Warg (L8), 6x Wolf (L5) (in _homestead/hs_poe_02)
		name:        "wolf",
		level:       "#5",
		areas: [{
			name: "monster.spawn",
			coords: [[192.297,84.609], [191.688,89.109], [184.688,89.453], [183.891,86.828]]
		}]
	}, {
		coords:      [173.844,109.438], // 1x-2x Drowned Dead (L18) (in _homestead/hs_poe_02)
		name:        "drowneddead",
		level:       "#18",
		areas: [{
			name: "monster.spawn",
			coords: [[175.781,107.703], [175.156,112.547], [172.266,112.156], [171.703,107.125]]
		}]
	}, {
		coords:      [176.844,85.594],  // 5x-7x Wild Dog (L1) (in _homestead/hs_poe_03)
		name:        "wilddog",
		level:       "#1",
		cleared:     "lucianCamp",
		areas: [{
			name: "monster.spawn",
			coords: [[180.156,81.281], [181.500,86.125], [178.031,89.188], [173.156,89.188],
			        [171.563,87.250], [171.750,83.750], [175.094,80.719]]
		}]
	}, {
		coords:      [182.625,77.609],  // 2x Warg (L8), 12x Wolf (L5) (in _homestead/hs_poe_03)
		name:        "wolf",
		level:       "#5 & 8",
		areas: [{
			name: "monster.spawn",
			coords: [[183.719,73.172], [187.078,78.906], [182.406,82.750], [177.516,77.578], [179.719,74.219]]
		}]
	}, {
		coords:      [190.938,73.500],  // 1x-2x Nekker Warrior (L12), 3x-4x Nekker (L8) (in _homestead/hs_poe_03)
		name:        "nekker",
		level:       "#8 & 12",
		areas: [{
			name: "monster.spawn",
			coords: [[191.797,68.625], [193.672,69.719], [195.516,73.469], [193.328,76.875], [191.328,77.563],
			        [188.328,77.141], [187.547,75.313], [187.641,73.297]]
		}]
	}, {
		coords:      [195.234,74.641],  // 3x Drowner (L10) (in lw_nml_w_007)
		name:        "drowner",
		level:       "#10",
		underwater:  true,
		areas: [{
			name: "monster.spawn",
			coords: [[194.703,75.813], [193.891,75.531], [194.047,74.391], [194.422,73.656], [195.344,73.391],
			        [196.016,73.750], [196.250,74.703], [195.969,75.531]]
		}]
	}, {
		coords:      [125.969,104.906], // 5x-7x Wild Dog (L1) (in _mudplough/encounters)
		name:        "wilddog",
		level:       "#1",
		areas: [{
			name: "monster.spawn",
			coords: [[127.906,102.031], [126.906,108.219], [125.063,107.656], [124.156,102.781]]
		}]
	}, {
		coords:      [133.094,87.500],  // 5x-7x Wild Dog (L1) (in _mudplough/encounters)
		name:        "wilddog",
		level:       "#1",
		areas: [{
			name: "monster.spawn",
			coords: [[134.500,85.000], [135.406,87.344], [133.625,89.938], [130.313,90.750], [129.500,88.125]]
		}]
	}, {
		coords:      [134.047,101.797], // 5x-7x Wild Dog (L1) (in _mudplough/encounters)
		name:        "wilddog",
		level:       "#1",
		areas: [{
			name: "monster.spawn",
			coords: [[136.469,100.266], [138.281,101.922], [130.844,104.047], [130.953,101.422], [133.797,100.188]]
		}]
	}, {
		coords:      [141.688,96.953],  // 6x-8x Nekker (L6) (in _mudplough/encounters)
		name:        "nekker",
		level:       "#6",
		areas: [{
			name: "monster.spawn",
			coords: [[143.281,95.063], [145.906,96.453], [140.922,99.188], [137.453,96.625]]
		}]
	}, {
		coords:      [142.219,81.594],  // 12x-16x Nekker (L6) (in _mudplough/encounters)
		name:        "nekker",
		level:       "#6",
		areas: [{
			name: "monster.spawn",
			coords: [[138.813,78.563], [142.250,75.938], [144.063,79.281], [144.531,82.969], [144.344,86.031],
			        [141.375,86.688]]
		}]
	}, {
		coords:      [132.828,98.266],  // 4x-6x Drowner (L4) (in _mudplough/encounters)
		name:        "drowner",
		level:       "#4",
		areas: [{
			name: "monster.spawn",
			coords: [[133.047,96.766], [134.172,97.891], [133.234,99.297], [132.188,99.375], [130.703,97.266]]
		}]
	}, {
		coords:      [140.391,89.297],  // 4x-6x Drowner (L4) (in _mudplough/encounters)
		name:        "drowner",
		level:       "#4",
		areas: [{
			name: "monster.spawn",
			coords: [[143.813,89.688], [138.297,91.609], [137.688,89.703], [140.344,87.922], [142.922,88.406]]
		}]
	}, {
		coords:      [150.609,73.391],  // 1x Forktail (L18) (in _mudplough/encounters)
		name:        "forktail",
		level:       "#18",
		areas: [{
			name: "monster.spawn",
			coords: [[152.313,71.781], [152.313,74.734], [150.906,75.422], [148.938,74.453], [148.938,71.781]]
		}]
	}, {
		coords:      [145.266,71.656],  // 2x-3x Foglet (L4) (in _mudplough/encounters)
		name:        "foglet",
		level:       "#4",
		after:       "event.troll",
		areas: [{
			name: "monster.spawn",
			coords: [[146.063,68.984], [147.625,72.469], [144.391,74.109], [142.516,70.906]]
		}]
	}, {
		coords:      [94.047,34.750],   // 4x-5x Endrega Worker (L9) (in _spitfire_bluff/encounters)
		name:        "endrega",
		level:       "#9",
		cleared:     "forestHutCamp",
		areas: [{
			name: "monster.spawn",
			coords: [[96.188,39.203], [91.016,41.000], [88.891,35.125], [94.734,33.078]]
		}]
	}, {
		coords:      [92.141,39.031],   // 1x Arachas (L11) (in _spitfire_bluff/encounters)
		name:        "arachas",
		level:       "#11",
		cleared:     "forestHutCamp",
		areas: [{
			name: "monster.spawn",
			coords: [[94.828,36.906], [93.063,40.984], [89.047,38.078], [89.250,34.188]]
		}]
	}, {
		disabled:    true, // Seems to be permanently disabled.
		coords:      [80.141,18.047],   // 1x Arachas (L18) (in _spitfire_bluff/encounters)
		name:        "arachas",
		level:       "#18",
		areas: [{
			name: "monster.spawn",
			coords: [[80.406,12.813], [82.844,19.938], [78.391,21.391], [75.875,14.359]]
		}]
	}, {
		coords:      [85.531,50.438],   // 4x-6x Drowner (L4) (in _spitfire_bluff/encounters)
		name:        "drowner",
		level:       "#4",
		areas: [{
			name: "monster.spawn",
			coords: [[85.922,48.813], [89.203,50.563], [90.078,51.813], [89.406,53.422], [83.484,52.063],
			        [83.797,49.422]]
		}]
	}, {
		coords:      [75.375,46.094],   // 4x-6x Drowner (L9) (in _spitfire_bluff/encounters)
		name:        "drowner",
		level:       "#9",
		areas: [{
			name: "monster.spawn",
			coords: [[79.594,48.047], [77.781,50.219], [71.172,45.078], [73.141,42.688]]
		}]
	}, {
		coords:      [69.688,19.516],   // 4x-6x Drowner (L4) (in _spitfire_bluff/encounters)
		name:        "drowner",
		level:       "#4",
		areas: [{
			name: "monster.spawn",
			coords: [[74.563,20.531], [73.688,22.531], [67.406,19.094], [68.359,17.281]]
		}]
	}, {
		coords:      [95.438,50.563],   // 2x Warg (L8), 12x Wolf (L5) (in _spitfire_bluff/encounters)
		name:        "wolf",
		level:       "#5 & 8",
		notDuring:   "sidequest.takewant",
		areas: [{
			name: "monster.spawn",
			coords: [[94.750,43.688], [99.563,53.281], [94.094,55.438], [91.938,46.125]]
		}]
	}, {
		coords:      [81.969,34.031],   // 1x Warg (L8), 6x Wolf (L5) (in _spitfire_bluff/encounters)
		name:        "wolf",
		level:       "#5 & 8",
		areas: [{
			name: "monster.spawn",
			coords: [[79.406,33.594], [83.359,32.313], [83.906,35.219], [80.188,35.109]]
		}]
	}, {
		coords:      [73.156,33.156],   // 4x-5x Endrega Worker (L9) (in _spitfire_bluff/encounters)
		name:        "endrega",
		level:       "#9",
		areas: [{
			name: "monster.spawn",
			coords: [[69.531,30.875], [74.188,29.250], [76.563,35.781], [71.875,37.625]]
		}]
	}, {
		coords:      [102.422,22.875],  // 4x Drowner (L4) (in _spitfire_bluff/encounters)
		name:        "drowner",
		level:       "#4",
		once:        true,
		underwater:  true,
		areas: [{
			name: "monster.spawn",
			coords: [[[104.359,17.656], [105.891,23.453], [100.672,24.656], [99.219,23.641], [99.766,23.250],
			        [100.125,22.109], [98.172,20.516], [97.844,18.922], [100.109,17.719]],
			        [[102.797,20.859], [103.000,21.563], [100.594,21.641], [100.797,20.938]]]
		}]
	}, {
		coords:      [99.516,24.531],  // 3x Drowner (L10) (in lw_nml_w_012)
		name:        "drowner",
		level:       "#10",
		underwater:  true,
		areas: [{
			name: "monster.spawn",
			coords: [[100.703,24.766], [100.453,25.516], [99.781,26.078], [98.531,25.563], [98.047,23.781],
			        [99.000,23.578], [99.688,23.172], [100.406,23.172]]
		}]
	}, {
		coords:      [55.563,24.813],   // 8x-12x Mucknixer (L15) (in _the_mire/the_mire_01)
		name:        "mucknixer",
		level:       "#15",
		areas: [{
			name: "monster.spawn",
			coords: [[58.953,21.984], [58.953,26.766], [49.234,26.766], [49.234,21.984]]
		}]
	}, {
		coords:      [62.734,33.141],   // 8x-12x Mucknixer (L15) (in _the_mire/the_mire_01)
		name:        "mucknixer",
		level:       "#15",
		areas: [{
			name: "monster.spawn",
			coords: [[66.219,30.172], [66.219,36.672], [59.438,36.672], [59.438,30.172]]
		}]
	}, {
		coords:      [39.703,34.422],   // 8x-12x Mucknixer (L15) (in _the_mire/the_mire_01)
		name:        "mucknixer",
		level:       "#15",
		areas: [{
			name: "monster.spawn",
			coords: [[43.047,30.984], [43.047,36.281], [35.047,36.281], [35.047,30.984]]
		}]
	}, {
		coords:      [38.313,31.203],   // 3x Drowner (L10) (in nml_w_018)
		name:        "drowner",
		level:       "#10",
		underwater:  true,
		areas: [{
			name: "monster.spawn",
			coords: [[39.125,33.813], [36.094,32.422], [37.563,28.594], [40.641,30.219]]
		}]
	}, {
		coords:      [52.188,33.219],   // 1x Water Hag (L8) (in _the_mire/the_mire_01)
		name:        "waterhag",
		level:       "#8",
		once:        true,
		after:       "treasurehunt.defense",
		areas: [{
			name: "monster.spawn",
			coords: [[53.391,31.672], [53.391,35.516], [49.359,35.516], [49.359,31.672]]
		}]
	}, {
		coords:      [45.297,53.125],   // 2x-3x Foglet (L10) (in _the_mire/the_mire_01)
		name:        "foglet",
		level:       "#10",
		areas: [{
			name: "monster.spawn",
			coords: [[47.703,51.500], [47.703,55.734], [43.672,55.734], [43.672,51.500]]
		}]
	}, {
		coords:      [45.203,52.109],   // 1x Water Hag (L8) (in _the_mire/the_mire_01)
		name:        "waterhag",
		level:       "#8",
		once:        true,
		areas: [{
			name: "monster.spawn",
			coords: [[47.703,51.500], [47.703,55.734], [43.672,55.734], [43.672,51.500]]
		}]
	}, {
		coords:      [43.078,38.953],   // 1x Bear (L12) (in _the_mire/the_mire_01)
		name:        "bear",
		level:       "#12",
		notDuring:   "mainquest.wandering",
		areas: [{
			name: "monster.spawn",
			coords: [[45.719,38.125], [45.719,41.625], [42.500,41.625], [42.500,38.125]]
		}]
	}, {
		coords:      [51.531,44.531],   // 1x Griffin (L25) (in _the_mire/the_mire_01)
		name:        "griffin",
		level:       "#25",
		once:        true,
		notDuring:   "mainquest.wandering",
		areas: [{
			name: "monster.spawn",
			coords: [[54.391,41.744], [54.391,47.084], [46.406,47.084], [46.406,41.744]]
		}]
	}, {
		coords:      [59.031,45.531],   // 2x Warg (L8), 12x Wolf (L5) (in _the_mire/the_mire_01)
		name:        "wolf",
		level:       "#5 & 8",
		areas: [{
			name: "monster.spawn",
			coords: [[61.813,40.781], [61.813,50.031], [56.000,50.031], [56.000,40.781]]
		}]
	}, {
		coords:      [37.094,41.750],   // 2x Warg (L8), 12x Wolf (L5) (in _the_mire/the_mire_01)
		name:        "wolf",
		level:       "#5 & 8",
		areas: [{
			name: "monster.spawn",
			coords: [[39.719,39.344], [39.719,43.219], [35.688,43.219], [35.688,39.344]]
		}]
	}, {
		coords:      [53.234,63.938],   // 4x-6x Rotfiend (L6) (in _the_mire/the_mire_02)
		name:        "rotfiend",
		level:       "#6",
		notDuring:   "sidequest.forefathers",
		areas: [{
			name: "monster.spawn",
			coords: [[57.328,60.281], [57.328,67.500], [49.984,67.500], [49.984,60.281]]
		}]
	}, {
		coords:      [53.516,74.156],   // 8x-12x Rotfiend (L6) (in _the_mire/the_mire_02)
		name:        "rotfiend",
		level:       "#6",
		notDuring:   "sidequest.forefathers",
		areas: [{
			name: "monster.spawn",
			coords: [[56.641,72.516], [56.641,76.359], [51.719,76.359], [51.719,72.516]]
		}]
	}, {
		coords:      [45.781,80.188],   // 4x-6x Rotfiend (L6) (in _the_mire/the_mire_02)
		name:        "rotfiend",
		level:       "#6",
		areas: [{
			name: "monster.spawn",
			coords: [[47.203,76.875], [48.281,82.500], [43.328,83.328], [42.234,77.719]]
		}]
	}, {
		coords:      [69.859,64.266],   // 1x Warg (L8), 6x Wolf (L5) (in _the_mire/the_mire_02)
		name:        "wolf",
		level:       "#5 & 8",
		areas: [{
			name: "monster.spawn",
			coords: [[71.766,61.156], [71.766,67.859], [67.719,67.859], [67.719,61.156]]
		}]
	}, {
		coords:      [75.313,64.375],   // 1x Warg (L8), 6x Wolf (L5) (in _the_mire/the_mire_02)
		name:        "wolf",
		level:       "#5 & 8",
		areas: [{
			name: "monster.spawn",
			coords: [[77.109,61.156], [77.109,67.859], [73.250,67.859], [73.250,61.156]]
		}]
	}, {
		coords:      [66.594,57.953],   // 2x-3x Foglet (L10) (in _the_mire/the_mire_02)
		name:        "foglet",
		level:       "#10",
		before:      "sidequest.favor", // TODO: Do the foglets stay disabled after ploughing Keira?
		areas: [{
			name: "monster.spawn",
			coords: [[68.500,56.219], [68.500,60.188], [64.578,60.188], [64.578,56.219]]
		}]
	}, {
		coords:      [69.219,89.750],   // 2x-3x Foglet (L10) (in _the_mire/the_mire_02)
		name:        "foglet",
		level:       "#10",
		areas: [{
			name: "monster.spawn",
			coords: [[71.203,88.281], [71.203,91.797], [67.391,91.797], [67.391,88.281]]
		}]
	}, {
		coords:      [49.578,75.320],   // 4x-6x Ghoul (L9) (in _the_mire/the_mire_02)
		name:        "ghoul",
		level:       "#9",
		notDuring:   "sidequest.forefathers",
		areas: [{
			name: "monster.spawn",
			coords: [[50.797,73.211], [50.797,78.164], [47.594,78.164], [47.594,73.211]]
		}]
	}, {
		coords:      [52.328,70.000],   // 4x-6x Drowner (L4) (in _the_mire/the_mire_02)
		name:        "drowner",
		level:       "#4",
		notDuring:   "sidequest.forefathers",
		areas: [{
			name: "monster.spawn",
			coords: [[54.859,68.938], [54.859,72.078], [50.859,72.078], [50.859,68.938]]
		}]
	}, {
		coords:      [25.953,65.016],   // 4x-5x Endrega Worker (L9) (in _the_mire/the_mire_03)
		name:        "endrega",
		level:       "#9",
		areas: [{
			name: "monster.spawn",
			coords: [[30.375,62.000], [30.375,67.859], [21.719,67.859], [21.719,62.000]]
		}]
	}, {
		coords:      [30.031,56.844],   // 2x Bear (L6) (in _the_mire/the_mire_03)
		name:        "bear",
		level:       "#6",
		areas: [{
			name: "monster.spawn",
			coords: [[32.188,52.188], [34.906,59.063], [27.625,61.656], [24.656,54.563]]
		}]
	}, {
		coords:      [26.500,43.031], // 4x-6x Drowner (L9) (in _the_mire/the_mire_03)
		name:        "drowner",
		level:       "#9",
		areas: [{
			name: "monster.spawn",
			coords: [[31.563,36.625], [27.531,46.750], [21.469,46.750], [28.094,36.625]]
		}]
	}, {
		coords:      [21.109,49.969],   // 4x-5x Endrega Worker (L9) (in _the_mire/the_mire_03)
		name:        "endrega",
		level:       "#9",
		areas: [{
			name: "monster.spawn",
			coords: [[23.438,48.313], [22.594,52.750], [19.609,52.172], [18.469,49.500], [20.516,47.578]]
		}]
	}, {
		coords:      [21.375,76.750],   // 2x-3x Wraith (L7) (in _the_mire/the_mire_03)
		name:        "wraith",
		level:       "#7",
		areas: [{
			name: "monster.spawn",
			coords: [[27.000,74.125], [27.000,81.156], [17.500,81.156], [17.500,74.125]]
		}]
	}, {
		coords:      [30.656,91.063],   // 3x-4x Nekker (L8) (in _the_mire/the_mire_03)
		name:        "nekker",
		level:       "#8",
		areas: [{
			name: "monster.spawn",
			coords: [[36.563,87.281], [37.469,89.625], [35.844,93.375], [29.469,95.469], [26.500,95.469],
			        [25.313,93.969], [24.875,91.313], [26.531,89.344], [29.969,87.281]]
		}]
	}, {
		coords:      [41.281,121.719],  // 4x-6x Drowner (L9) (in _the_mire/the_mire_04)
		name:        "drowner",
		level:       "#9",
		cleared:     "paintingCamp",
		areas: [{
			name: "monster.spawn",
			coords: [[43.125,119.734], [42.625,122.188], [41.203,123.141], [39.844,122.281], [39.625,119.391]]
		}]
	}, {
		coords:      [20.156,122.313], // 1x Warg (L8), 6x Wolf (L5) (in _the_mire/the_mire_04)
		name:        "wolf",
		level:       "#5 & 8",
		areas: [{
			name: "monster.spawn",
			coords: [[21.969,120.188], [21.969,124.750], [19.000,125.281], [17.688,119.781], [19.906,119.438]]
		}]
	}, {
		coords:      [41.313,105.000],  // 4x-6x Drowner (L9) (in _the_mire/the_mire_04)
		name:        "drowner",
		level:       "#9",
		areas: [{
			name: "monster.spawn",
			coords: [[42.109,101.719], [47.438,105.813], [40.109,111.828], [37.109,107.359]]
		}]
	}, {
		coords:      [32.328,104.891],  // 4x-5x Endrega Worker (L9) (in _the_mire/the_mire_04)
		name:        "endrega",
		level:       "#9",
		areas: [{
			name: "monster.spawn",
			coords: [[36.422,103.344], [36.422,107.359], [29.156,107.359], [29.156,103.344]]
		}]
	}, {
		coords:      [62.719,106.188],  // 4x-5x Endrega Worker (L9) (in _the_mire/the_mire_04)
		name:        "endrega",
		level:       "#9",
		areas: [{
			name: "monster.spawn",
			coords: [[64.672,101.750], [68.000,104.516], [63.906,110.344], [60.813,107.031]]
		}]
	}, {
		coords:      [52.594,97.750],   // 3x-4x Nekker (L8) (in _the_mire/the_mire_04)
		name:        "nekker",
		level:       "#8",
		areas: [{
			name: "monster.spawn",
			coords: [[52.516,95.266], [54.859,96.359], [53.125,100.000], [50.375,99.359]]
		}]
	}, {
		coords:      [29.313,113.609],  // 3x-4x Nekker (L8), 6x-8x Nekker (L6) (in _the_mire/the_mire_04)
		name:        "nekker",
		level:       "#6 & 8",
		areas: [{
			name: "monster.spawn",
			coords: [[30.344,110.359], [33.547,113.703], [26.453,117.281], [26.063,113.266]]
		}]
	}, {
		coords:      [39.945,70.008],   // 5x Drowner (L4) (in the_mire/tm13_underwater_ruins)
		name:        "drowner",
		level:       "#4",
		once:        true,
		areas: [{
			name: "monster.spawn",
			coords: [[40.445,69.453], [40.898,71.055], [39.391,71.438], [38.820,69.719]]
		}]
	}, {
		coords:      [54.516,50.641],   // 6x Wraith (L13), {6h-22h: 1x Noonwraith (L15)}, {22h-6h: 1x Nightwraith (L15)} (in the_mire/tm15_miniboss)
		name:        "wraith",
		level:       "#13 & 15",
		once:        true,
		areas: [{
			name: "monster.spawn",
			coords: [[55.203,50.172], [55.203,51.578], [53.797,51.578], [53.797,50.172]]
		}]
	}, {
		coords:      [38.766,73.188],   // 3x Drowner (Underwater) (L10) (in the_mire/tm_underwater_dungeon)
		name:        "drowner",
		level:       "#10",
		once:        true,
		underwater:  true,
		areas: [{
			name: "monster.spawn",
			coords: [[40.305,71.391], [40.305,73.938], [37.875,73.938], [37.875,71.391]]
		}]
	}, {
		coords:      [252.906,203.875], // 1x Warg (L37), 2x-3x Wolf (L37) (in ep1_poe_01)
		name:        "wolf",
		level:       "#37",
		areas: [{
			name: "monster.spawn",
			coords: [[251.484,205.047], [252.156,202.281], [254.156,202.734], [253.531,205.359]]
		}]
	}, {
		coords:      [250.984,183.016], // 1x Warg (L37), 2x-3x Wolf (L37) (in ep1_poe_01)
		name:        "wolf",
		level:       "#37",
		areas: [{
			name: "monster.spawn",
			coords: [[254.078,178.734], [254.078,187.281], [247.828,187.281], [247.828,178.734]]
		}]
	}, {
		coords:      [254.297,174.250], // 5x-6x Arachnomorph (L34) (in ep1_poe_01)
		name:        "arachnomorph",
		level:       "#34",
		areas: [{
			name: "monster.spawn",
			coords: [[255.844,171.984], [255.844,176.531], [252.656,176.531], [252.656,171.984]]
		}]
	}, {
		coords:      [260.063,171.250], // 4x-6x Endrega Drone (L35) (in ep1_poe_01)
		name:        "endrega",
		level:       "#35",
		areas: [{
			name: "monster.spawn",
			coords: [[256.969,168.156], [263.063,169.375], [263.250,172.938], [258.000,174.250]]
		}]
	}, {
		coords:      [242.469,169.313], // 1x Bear (L34) (in ep1_poe_01)
		name:        "bear",
		level:       "#34",
		areas: [{
			name: "monster.spawn",
			coords: [[242.844,167.453], [244.172,171.078], [242.141,171.672], [240.984,167.969]]
		}]
	}, {
		coords:      [250.969,215.234], // 5x-6x Arachnomorph (L34) (in ep1_poe_01)
		name:        "arachnomorph",
		level:       "#34",
		areas: [{
			name: "monster.spawn",
			coords: [[248.984,212.703], [255.297,211.797], [254.359,216.781], [245.469,219.250]]
		}]
	}, {
		coords:      [246.438,160.266], // 5x-7x Wild Dog (L32) (in ep1_poe_01)
		name:        "wilddog",
		level:       "#32",
		areas: [{
			name: "monster.spawn",
			coords: [[250.734,157.453], [248.969,161.250], [246.516,163.109], [243.297,163.469],
			        [243.297,159.234], [248.266,156.625]]
		}]
	}, {
		coords:      [257.500,186.531], // 8x-12x Boar (L34) (in ep1_poe_01)
		name:        "boar",
		level:       "#34",
		areas: [{
			name: "monster.spawn",
			coords: [[254.625,182.625], [261.063,181.625], [257.781,199.344], [254.188,198.594]]
		}]
	}, {
		coords:      [248.188,166.000], // 5x-6x Nekker (L34) (in ep1_poe_01)
		name:        "nekker",
		level:       "#34",
		areas: [{
			name: "monster.spawn",
			coords: [[250.281,165.078], [250.281,166.813], [246.141,166.813], [246.141,165.078]]
		}]
	}, {
		coords:      [247.422,208.578], // 3x-5x Drowned Dead (L33) (in ep1_poe_01)
		name:        "drowneddead",
		level:       "#33",
		areas: [{
			name: "monster.spawn",
			coords: [[247.109,206.219], [249.313,207.359], [247.641,210.828], [245.281,209.719]]
		}]
	}, {
		coords:      [243.188,149.406], // 5x-6x Arachnomorph (L34) (in ep1_poe_02)
		name:        "arachnomorph",
		level:       "#34",
		areas: [{
			name: "monster.spawn",
			coords: [[242.219,145.063], [246.906,147.969], [244.406,153.500], [239.969,151.094]]
		}]
	}, {
		coords:      [261.688,155.594], // 1x Wyvern (L34) (in ep1_poe_02)
		name:        "wyvern",
		level:       "#34",
		areas: [{
			name: "monster.spawn",
			coords: [[264.719,150.313], [264.719,160.375], [258.500,160.375], [258.500,150.313]]
		}]
	}, {
		coords:      [264.469,144.844], // 1x Warg (L37), 2x-3x Wolf (L37) (in ep1_poe_02)
		name:        "wolf",
		level:       "#37",
		areas: [{
			name: "monster.spawn",
			coords: [[259.969,142.875], [264.906,139.719], [269.250,146.781], [264.375,150.031]]
		}]
	}, {
		coords:      [254.766,158.344], // 1x-2x Drowned Dead (L18) (in ep1_poe_02)
		name:        "drowneddead",
		level:       "#18",
		areas: [{
			name: "monster.spawn",
			coords: [[256.125,155.750], [256.391,161.031], [253.125,160.859], [253.625,156.109]]
		}]
	}, {
		coords:      [255.156,143.719], // 5x-7x Wild Dog (L32) (in ep1_poe_02)
		name:        "wilddog",
		level:       "#32",
		areas: [{
			name: "monster.spawn",
			coords: [[252.219,143.797], [252.219,139.953], [254.609,140.531], [256.344,141.859],
			        [258.516,147.422], [256.281,147.422], [254.391,145.469]]
		}]
	}, {
		coords:      [255.719,132.875], // 2x-3x Endrega Drone Level 35 (in ep1_poe_02)
		name:        "endrega",
		level:       "#35",
		areas: [{
			name: "monster.spawn",
			coords: [[260.094,133.563], [256.625,138.031], [252.938,137.563], [251.469,134.938],
			        [251.656,128.281], [258.563,128.156]]
		}]
	}, {
		coords:      [256.781,130.625], // 1x Venomous Arachas (L38) (in ep1_poe_02)
		name:        "venomousarachas",
		level:       "#38",
		areas: [{
			name: "monster.spawn",
			coords: [[260.094,133.563], [256.625,138.031], [252.938,137.563], [251.469,134.938],
			        [251.656,128.281], [258.563,128.156]]
		}]
	}, {
		coords:      [245.578,125.016], // {11h-13h: 1x Noonwraith (L34)} (in ep1_poe_02)
		name:        "noonwraith",
		level:       "#34",
		fromTime:    "#11",
		toTime:      "#13",
		areas: [{
			name: "monster.spawn",
			coords: [[246.109,121.984], [247.977,127.125], [244.883,128.148], [243.141,122.953]]
		}]
	}, {
		coords:      [237.875,207.109], // 3x-5x Drowned Dead (L33) (in ep1_poe_03)
		name:        "drowneddead",
		level:       "#33",
		once:        true,
		areas: [{
			name: "monster.spawn",
			coords: [[239.281,201.719], [239.281,205.853], [242.703,207.353], [242.156,211.125],
			        [239.406,211.094], [235.953,209.266], [233.594,206.734], [233.594,205.281],
			        [235.656,203.344]]
		}]
	}, {
		coords:      [236.531,218.906], // 5x-6x Nekker (L34) (in ep1_poe_03)
		name:        "nekker",
		level:       "#34",
		once:        true,
		areas: [{
			name: "monster.spawn",
			coords: [[239.734,215.656], [239.734,222.156], [233.219,222.156], [233.219,215.656]]
		}]
	}, {
		coords:      [241.594,204.453], // {22h-4h: 1x Bilge Hag (L34)} (in ep1_poe_03)
		name:        "bilgehag",
		level:       "#34",
		fromTime:    "#22",
		toTime:      "#4",
		once:        true,
		areas: [{
			name: "monster.spawn",
			coords: [[242.547,203.188], [243.625,204.844], [241.031,205.813], [239.797,204.703], [240.391,203.547]]
		}]
	}, {
		coords:      [226.828,205.359], // 1x Bear (L34) (in ep1_poe_03)
		name:        "bear",
		level:       "#34",
		once:        true,
		areas: [{
			name: "monster.spawn",
			coords: [[225.813,203.453], [228.391,204.141], [227.891,207.094], [225.297,206.516]]
		}]
	}, {
		coords:      [238.297,180.781], // 4x-6x Boar (L34) (in ep1_poe_03)
		name:        "boar",
		level:       "#34",
		once:        true,
		areas: [{
			name: "monster.spawn",
			coords: [[240.797,177.688], [240.797,183.750], [235.781,183.750], [235.781,177.688]]
		}]
	}, {
		coords:      [234.469,190.625], // 5x-7x Wild Dog (L32) (in ep1_poe_03)
		name:        "wilddog",
		level:       "#32",
		once:        true,
		areas: [{
			name: "monster.spawn",
			coords: [[234.625,184.719], [236.844,188.313], [237.688,191.156], [233.969,194.469],
			        [232.250,196.594], [231.031,194.813], [232.563,188.094]]
		}]
	}, {
		coords:      [186.828,201.688], // 5x-6x Nekker (L34) (in ep1_poe_04)
		name:        "nekker",
		level:       "#34",
		once:        true,
		areas: [{
			name: "monster.spawn",
			coords: [[189.719,203.828], [189.078,204.469], [187.188,203.313], [183.938,202.172],
			        [183.484,200.625], [184.781,199.688], [186.297,199.344], [187.063,199.688],
			        [188.875,200.984], [189.547,202.094]]
		}]
	}, {
		coords:      [216.781,211.750], // 1x Bear (L34) (in ep1_poe_04)
		name:        "bear",
		level:       "#34",
		once:        true,
		areas: [{
			name: "monster.spawn",
			coords: [[216.813,209.375], [220.969,211.063], [220.969,213.094], [214.938,213.922],
			        [212.328,212.047], [213.797,210.469]]
		}]
	}, {
		coords:      [173.344,216.609], // 5x-6x Nekker (L34) (in ep1_poe_04)
		name:        "nekker",
		level:       "#34",
		once:        true,
		areas: [{
			name: "monster.spawn",
			coords: [[177.141,217.156], [175.422,219.953], [169.344,216.266], [171.422,213.594]]
		}]
	}, {
		coords:      [218.047,200.000], // 5x-6x Arachnomorph (L34) (in ep1_poe_04)
		name:        "arachnomorph",
		level:       "#34",
		once:        true,
		areas: [{
			name: "monster.spawn",
			coords: [[219.656,198.578], [219.656,201.688], [216.500,201.688], [216.500,198.578]]
		}]
	}, {
		coords:      [187.969,222.938], // 1x Arachas (L37), 1x Armored Arachas (L37), 1x Venomous Arachas (L38) (in ep1_poe_04)
		name:        "arachas",
		level:       "#37 & 38",
		once:        true,
		areas: [{
			name: "monster.spawn",
			coords: [[193.094,222.703], [195.625,229.359], [192.547,230.219], [188.688,224.719],
			        [179.600,222.700], [180.078,217.453], [185.891,219.266], [189.969,222.141]]
		}]
	}, {
		coords:      [213.188,219.938], // 4x-6x Boar (L34) (in ep1_poe_04)
		name:        "boar",
		level:       "#34",
		once:        true,
		areas: [{
			name: "monster.spawn",
			coords: [[218.344,217.531], [217.344,221.344], [214.188,221.406], [214.656,222.797],
			        [208.656,223.203], [209.297,219.406], [209.391,218.031], [212.344,217.781]]
		}]
	}, {
		coords:      [184.766,195.547], // 1x Wyvern (L34) (in ep1_poe_04)
		name:        "wyvern",
		level:       "#34",
		once:        true,
		areas: [{
			name: "monster.spawn",
			coords: [[187.750,194.313], [187.094,197.953], [181.766,196.891], [182.672,193.063]]
		}]
	}, {
		coords:      [219.875,223.453], // 5x-6x Arachnomorph (L34) (in ep1_poe_04)
		name:        "arachnomorph",
		level:       "#34",
		once:        true,
		areas: [{
			name: "monster.spawn",
			coords: [[220.609,221.109], [222.531,223.406], [219.219,226.250], [217.094,223.344]]
		}]
	}, {
		coords:      [191.297,216.703], // 1x Archgriffin (L39) (in ep1_poi_08)
		name:        "archgriffin",
		level:       "#39",
		once:        true,
		areas: [{
			name: "monster.spawn",
			coords: [[193.297,214.469], [193.734,218.844], [189.031,219.219], [188.531,214.391]]
		}]
	}],
	// ----------------- Monster Dens -------------------
	monsterden: [{
		coords:      [142.984,118.125], // 3x Nekker Warrior (L6), 8x Nekker (L6)
		groupId:     "shoe_trolls_cave",
		name:        "nekker",
		level:       "#6",
		notDuring:   "sidequest.deadly"
	}, {
		coords:      [81.656,136.359],  // 1x Ekimmara (L11), 8x Wraith (L7)
		groupId:     "dragonslayers_grotto",
		name:        "ekimmara",
		level:       "#7 & 11"
	}, {
		coords:      [237.641,105.016],
		groupId:     "cavern",
		name:        "golem",
		level:       "#19"
	}, {
		coords:      [165.891,99.375],  // 14x Nekker (L18), 1x Rabid rock troll (L16)
		name:        "nekker",
		level:       "#16 & 18"
	}],
	// ----------------- Monster Nests ------------------
	monsternest: [{
		coords:      [[43.578,108.563],
		             [96.875,185.094],
		             [95.656,185.125]]
	}, {
		coords:      [[45.766,41.367],
		             [45.266,41.125]],
		underground: true,
		notBefore:   "mainquest.wandering",
		entrances:   ["wandering_cave_entry", "wandering_cave_exit"]
	}, {
		coords:      [60.047,126.375],  // 1x Drowned Dead (L9), {6h-21h: 4x, 21h-6h: 7x} Drowner (L9) (in crookback_nog/cb21_swampnests)
		name:        "drowner",
		level:       "#9"
	}, {
		coords:      [110.656,88.094],  // 5x Ghoul (L9) (in crow_perch/cp34_ghouls_nest)
		id:          "perchEastGhoulNestNorth",
		name:        "ghoul",
		level:       "#9"
	}, {
		coords:      [100.078,66.047],  // 3x-4x Ghoul (L9) (in crow_perch/cp35_ghouls_nest)
		id:          "perchEastGhoulNestSouth",
		name:        "ghoul",
		level:       "#9"
	}, {
		coords:      [[82.969,86.828],   // 4x Ghoul (L9) (in crow_perch/cp5_boatmaker)
		             [133.422,162.531],  // --\__ together: 8x Ghoul (L9) (in greyrocks/gr18_trebuchet_factory)
		             [133.750,161.688],  // --/
		             [125.938,147.391]], // 4x Ghoul (L9) (in greyrocks/gr35_ghouls_nest)
		name:        "ghoul",
		level:       "#9"
	}, {
		coords:      [86.891,168.969],  // 6x Nekker (L6), 2x Nekker (L8)
		name:        "nekker",
		level:       "#6 & 8"
	}, {
		coords:      [91.297,165.547],  // 1x Nekker Warrior (L9), 5x Nekker (L8)
		id:          "decentNekkerNestNorth",
		name:        "nekker",
		level:       "#8 & 9"
	}, {
		coords:      [[88.094,161.422], // 1x Nekker Warrior (L9), 5x Nekker (L8)
		             [87.891,158.172]], // 1x Nekker Warrior (L9), 5x Nekker (L8)
		name:        "nekker",
		level:       "#8 & 9"
	}, {
		coords:      [160.750,137.891], // 1x Devourer (L5), 5x Rotfiend (L6)
		name:        "rotfiend",
		level:       "#5 & 6"
	}, {
		coords:      [160.500,127.328], // 6x Harpy (L7), 1x Harpy (L5)
		name:        "harpy",
		level:       "#5 & 7"
	}, {
		coords:      [153.734,135.203], // 4x-5x Nekker (L6)
		name:        "nekker",
		level:       "#6"
	}, {
		coords:      [169.094,95.281],  // 1x Endrega Warrior (L9), 3x Endrega Worker (L9)
		id:          "urstenNestWest",
		name:        "endrega",
		level:       "#9"
	}, {
		coords:      [170.313,98.000],
		id:          "urstenNestEast",
		name:        "endrega",
		level:       "#9"
	}, {
		coords:      [[170.266,112.969], // 1x Devourer (L5), 3x Rotfiend (L6)
		             [154.141,85.000]],  // 1x Devourer (L5), 4x Rotfiend (L6)
		name:        "rotfiend",
		level:       "#5 & 6"
	}, {
		coords:      [218.687,183.875], // 1x Wyvern (L34) (in ep1_poi_19)
		name:        "wyvern",
		level:       "#34"
	}, {
		coords:      [[255.125,119.750], // 6x Nekker (L34)
		             [238.812,199.906],  // --\__ together: 10x Nekker (L34)
		             [235.656,201.531]], // --/
		name:        "nekker",
		level:       "#34"
	}, {
		coords:      [240.562,171.500], // 6x Arachnomorph (L34)
		name:        "arachnomorph",
		level:       "#34"
	}, {
		coords:      [204.843,186.437], // 1x Forktail (L30) (in ep1_poi_34)
		name:        "forktail",
		level:       "#30"
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
		coords:      [102.500,33.828],  // 1x Leader-Sword (L6), 2x Sword (L5), 1x Pike-2H (L5), 1x Mace (L5), 1x Sword-Shield (L5), 2x Crossbow (L5)
		id:          "claywich_barber_pid",
		level:       "#5 & 6"
	}, {
		coords:      [198.687,186.906], // all Fallen Knight: 2x Sword (L33), 1x Sword-Shield (L33), 1x Hammer-2H, 1x Crossbow (L33) (in ep1_poi_20)
		id:          "herbalist_pid",
		level:       "#33" // TODO: Check if this contains diagrams for the 'From Ofier's Distant Shores' quest.
	}, {
		coords:      [142.984,199.375], // // 1x Leader-Axe-2H (L9), 1x Axe-2H (L9), 2x Sword (L9), 1x Ranged (L9)
		id:          "crossroads_shopkeeper_pid",
		level:       "#9"
	}, {
		coords:      [115.391,107.094], // 1x Nilfgaardian Deserter (Sword-Hard) (L16), 2x Nilfgaardian Deserter (Sword-Shield) (L16), 2x Nilfgaardian Deserter (Crossbow) (L14), 1x Slave Driver (Axe-2H) 2x, (L7), Slave Driver (Sword) (L7), 1x Slave Driver (Club) (L7)
		id:          "mulbrydale_armorer_pid",
		level:       "#7, 14 & 16"
	}, {
		coords:      [72.656,103.797],  // 1x Leader-Sword (L6), 2x Sword (L5), 1x Axe-2H (L5), 2x Axe-1H (L5), 2x Crossbow (L5)
		id:          "claywich_shopkeeper_pid",
		level:       "#5 & 6"
	}],
	// ----------------- Places of Power ----------------
	pop: [{
		coords:      [230.391,98.688],
		id:          "igniPopTempleIsle",
		extraLabel:  "pop.igni.label"
	}, {
		coords:      [55.922,154.672],
		id:          "igniPopHillock",
		extraLabel:  "pop.igni.label"
	}, {
		coords:      [200.813,162.688],
		id:          "axiiPop",
		extraLabel:  "pop.axii.label"
	}, {
		coords:      [152.688,47.781],
		id:          "quenPopLornruk",
		extraLabel:  "pop.quen.label"
	}, {
		coords:      [15.063,76.140],
		id:          "aardPop",
		extraLabel:  "pop.aard.label"
	}, {
		coords:      [53.234,52.414],
		id:          "yrdenPopMire",
		extraLabel:  "pop.yrden.label",
		underground: true,
		notBefore:   "mainquest.wandering",
		entrances:   ["wandering_cave_entry", "wandering_cave_exit"]
	}, {
		coords:      [35.688,133.594],
		id:          "quenPopBald",
		extraLabel:  "pop.quen.label",
		notBefore:   "mainquest.bald"
	}, {
		coords:      [80.219,141.359],
		id:          "yrdenPopDescent",
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
		notBefore:   "mainquest.bald"
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
		coords:      [152.055,169.594],
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
		id:          "elihal",
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
		notBefore:   "sidequest.stuff"
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
		id:          "perchTrader",
		sells:       ["gwent", "drinks"]
	}, {
		coords:      [81.797,41.406],
		id:          "midcopseMerchant",
		sells:       ["gwent", "jewellery"]
	}, {
		coords:      [90.109,47.906],
		id:          "keira",
		extraLabel:  "v:shopkeeper.keira.label",
		sells:       ["alchemy", "recipes", "v:clearancePotion"],
		before:      "sidequest.favor"
	}, {
		coords:      [104.031,76.875],
		id:          "perchQuartermaster",
		extraLabel:  "v:shopkeeper.quartermaster.label",
		sells:       ["gwent", "food", "drinks"]
	}, {
		coords:      [100.531,76.344],
		extraLabel:  "v:shopkeeper.anselm.label",
		sells:       "v:racingBlinders",
		rescueFrom:  "event.caravan"
	}, {
		coords:      [70.563,73.188],
		sells:       ["drinks", "v:ruggedSaddlebags"]
	}, {
		coords:      [83.766,69.922],
		id:          "claywichMerchant",
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
		id:          "lindenvaleMerchant",
		sells:       ["gwent", "crafting"]
	}, {
		coords:      [99.000,109.281],
		id:          "lindenvaleInnkeep",
		label:       "innkeep.label", // TODO: Check if he has the correct icon now ingame.
		desc:        "innkeep.desc",
		sells:       ["runestones", "alchemy", "food"] // TODO: According to the wiki, inventory should be linked with Crossroads Inn.
	}, {
		coords:      [33.453,204.859],
		extraLabel:  "v:shopkeeper.quartermaster.label",
		desc:        "v:shopkeeper.uselessMerchant.desc"
	}, {
		coords:      [78.078,147.141],
		sells:       "drinks",
		before:      "mainquest.family",
		weakBefore:  "mainquest.hillock"
	}, {
		coords:      [42.156,204.500],
		sells:       ["runestones", "alchemy"]
	}, {
		coords:      [44.063,206.734],
		sells:       ["weapons", "crafting"]
	}, {
		coords:      [35.406,124.250],
		sells:       ["runestones", "alchemy"],
		notBefore:   "mainquest.bald"
	}, {
		coords:      [28.500,123.875],
		sells:       ["alchemy", "food"],
		notBefore:   "mainquest.bald"
	}, {
		coords:      [133.906,131.266],
		sells:       ["alchemy", "food"],
		notBefore:   "sidequest.eternal"
	}, {
		coords:      [187.797,152.172],
		id:          "circusMerchant",
		sells:       "gwent"
	}, {
		coords:      [[107.250,52.844],
		             [185.516,155.875],
		             [190.883,112.688]],
		id:          "shopkeeper.travellingMerchant",
		label:       "v:shopkeeper.travellingMerchant.label",
		sells:       "food",
		extraDesc:   ["v:shopkeeper.travellingMerchant.desc",
		              "#TODO: Check what he is actually selling."]
	}, {
		coords:      [78.125,68.922],
		sells:       "food",
		extraDesc:   "#TODO: Check what he is actually selling, I just added him for the route.",
		routes: [{
			name:    "shopkeeper.label",
			coords:  [[[81.281,69.078], [80.500,68.781], [78.336,68.977], [76.320,68.664], [75.125,68.766],
			         [74.313,69.172], [73.391,71.188], [72.859,71.109], [72.211,71.367], [71.734,71.344],
			         [71.148,71.609], [70.602,71.516], [70.203,71.359]],
			         [[73.391,71.188], [72.797,72.078], [72.750,72.680], [73.063,74.133], [72.383,75.484],
			         [71.938,76.047]]]
		}]
	}, {
		coords:      [147.828,148.922],
		sells:       "food",
		extraDesc:   "#TODO: Check what he is actually selling, I just added him for the route.",
		routes: [{
			name:    "shopkeeper.label",
			coords:  [[149.125,148.828], [148.781,149.031], [148.188,148.953], [147.547,148.953], [147.172,149.063],
			         [146.609,149.469], [146.328,149.797], [146.031,149.828], [145.641,149.938], [145.375,150.219],
			         [144.813,150.813], [144.266,151.234], [143.938,151.375], [143.406,151.516], [142.969,150.969],
			         [142.234,150.781], [141.469,150.719]]
		}]
	}, {
		coords:      [231.031,163.219],
		sells:       "food",
		extraDesc:   "#TODO: Check what he is actually selling, I just added him for the route.",
		routes: [{
			name:    "shopkeeper.label",
			coords:  [[[231.031,163.219], [231.133,163.031], [231.430,162.867], [231.531,162.586], [231.359,162.023],
			         [231.094,161.523], [230.938,161.055], [230.891,160.109], [230.922,158.906], [231.086,157.633],
			         [231.148,156.758], [231.102,155.414], [231.102,154.055], [231.008,152.336], [231.156,151.344],
			         [231.227,150.586], [231.125,150.336], [230.875,150.141], [229.930,150.047], [227.570,149.945],
			         [226.945,149.969], [226.594,149.969], [226.445,150.047], [226.406,150.156], [226.359,150.328],
			         [226.242,150.453], [226.070,150.508], [225.859,150.539], [225.727,150.703], [225.633,150.953],
			         [225.555,151.398], [225.586,151.719], [225.719,151.906], [225.703,152.055], [225.625,152.211],
			         [225.547,152.414], [225.531,152.602], [225.727,153.156], [225.789,153.492], [226.156,153.953],
			         [226.500,154.305], [226.859,154.992], [227.094,155.734], [227.086,156.391], [226.938,156.930],
			         [226.797,157.594], [226.820,157.867], [227.055,158.234], [227.563,158.727], [227.961,158.883],
			         [228.258,159.016], [228.688,159.328], [228.922,159.453], [229.266,159.523], [229.578,159.617],
			         [229.938,159.547], [230.320,159.477], [230.508,159.430], [230.758,159.164], [230.914,158.922]],
			         [[231.531,162.586], [231.711,163.133]]]
		}]
	}, {
		coords:      [229.891,138.500],
		sells:       "food",
		extraDesc:   "#TODO: Check what he is actually selling, I just added him for the route.",
		routes: [{
			name:    "shopkeeper.label",
			coords:  [[229.891,138.500], [230.547,138.750], [230.859,138.984], [231.578,139.031], [233.125,139.063],
			         [234.031,138.984], [234.797,138.391], [235.172,137.766], [235.531,136.734], [235.563,136.156],
			         [235.797,135.922], [236.266,135.813], [236.891,135.266], [237.375,134.516], [237.563,134.203],
			         [237.547,133.813], [237.125,133.109], [236.969,132.781], [236.953,132.016], [236.813,131.766],
			         [236.656,131.594], [236.672,131.438], [237.469,129.828], [237.906,129.406], [238.328,129.203],
			         [238.953,128.313], [239.234,127.828], [239.563,127.500], [240.234,126.141], [240.563,125.469],
			         [240.719,125.078], [241.000,124.906], [241.609,124.766], [242.234,124.656], [242.781,124.344],
			         [243.063,123.688], [243.078,123.156], [243.094,122.422], [243.469,121.859], [244.078,121.531],
			         [244.828,121.406], [245.438,121.484], [245.906,121.484], [246.234,121.406], [246.734,120.922],
			         [247.094,120.656], [247.750,120.141], [248.266,119.922], [248.906,119.875], [249.609,120.047],
			         [249.750,120.156]]
		}]
	}, {
		coords:      [214.688,153.641],
		sells:       "food",
		extraDesc:   "#TODO: Check what he is actually selling, I just added him for the route.",
		routes: [{
			name:    "shopkeeper.label",
			coords:  [[214.688,153.641], [214.313,153.250], [213.875,151.547], [213.734,150.297], [213.734,149.375],
			         [213.391,147.594], [213.391,146.703], [213.625,145.969], [213.656,145.734], [213.578,145.406],
			         [213.422,145.047], [213.438,144.219], [213.313,143.641]]
		}]
	}, {
		coords:      [180.570,119.359],
		sells:       "food",
		extraDesc:   "#TODO: Check what he is actually selling, I just added him for the route.",
		routes: [{
			name:    "shopkeeper.label",
			coords:  [[181.531,120.375], [180.656,120.000], [180.594,119.641], [180.500,119.172], [180.344,119.016],
			         [179.844,118.969], [179.313,119.078], [178.547,119.453], [178.016,119.672], [177.250,119.688],
			         [176.891,119.375], [176.516,118.938], [176.125,118.734], [175.641,118.688], [175.031,118.516],
			         [174.016,117.984], [173.375,117.500], [172.922,117.391], [172.375,117.406], [171.938,117.219],
			         [171.578,116.703], [170.906,115.359], [170.766,114.703], [171.000,113.953], [171.203,113.344],
			         [171.188,112.406], [170.797,110.141], [170.672,109.359], [170.719,108.531]]
		}]
	}, {
		coords:      [180.703,88.094],
		sells:       "food",
		extraDesc:   "#TODO: Check what he is actually selling, I just added him for the route.",
		routes: [{
			name:    "shopkeeper.label",
			coords:  [[180.703,88.094], [181.094,87.625], [181.453,87.609], [181.969,87.703], [182.406,87.938],
			         [182.766,88.906], [183.094,90.172], [183.438,91.281], [183.859,92.000], [184.547,92.719],
			         [185.016,93.219], [185.734,93.672], [186.172,94.328], [186.484,95.063], [186.609,95.734],
			         [186.953,96.281], [187.359,96.516], [187.719,96.484], [188.313,96.281], [189.641,96.234],
			         [190.641,96.438], [190.891,96.672], [190.938,97.063], [190.938,97.547], [190.906,97.922],
			         [190.766,98.547], [190.672,99.391]]
		}]
	}, {
		coords:      [233.766,179.250],
		sells:       "food",
		extraDesc:   "#TODO: Check what he is actually selling, I just added him for the route.",
		routes: [{
			name:    "shopkeeper.label",
			coords:  [[233.766,179.250], [233.828,180.297], [233.688,181.531], [233.797,182.297], [234.328,183.406],
			         [235.094,184.578], [235.781,185.219], [236.266,186.266], [237.313,188.344], [237.469,188.828],
			         [238.531,190.281], [239.516,191.484], [240.594,193.047]]
		}]
	}],
	// ----------------- Sidequests ---------------------
	sidequest: [{
		coords:      [182.593,155.875],
		name:        "barnful"
	}, {
		coords:      [199.343,106.343],
		name:        "dangerous",
		notBefore:   "mainquest.poet",
		before:      "mainquest.mists"
	}, {
		coords:      [150.531,166.578],
		name:        "wanted",
		notBefore:   "mainquest.junior",
		before:      "mainquest.mists"
	}, {
		coords:      [66.687,91.125],
		name:        "dog"
	}, {
		coords:      [89.843,48.609],
		name:        "magiclamp",
		notBefore:   "mainquest.wandering",
		before:      "mainquest.mists"
	}, {
		coords:      [89.843,48.809],
		name:        "invitation",
		notBefore:   "sidequest.magiclamp",
		before:      "mainquest.mists"
	}, {
		coords:      [89.843,49.009],
		name:        "towerful",
		notBefore:   "sidequest.invitation",
		before:      "mainquest.mists"
	}, {
		coords:      [89.843,49.209],
		name:        "favor",
		notBefore:   "sidequest.towerful",
		before:      "mainquest.mists"
	}, {
		coords:      [198.063,82.391],
		name:        "reason",
		notBefore:   ["mainquest.blindingly",
		              "sidequest.deadly",
		              "sidequest.eyeforeye",
		              "sidequest.wanted"],
		before:      ["mainquest.mists",
		              "mainquest.ice"]
	}, {
		coords:      [200.375,105.203],
		name:        "feast",
		notBefore:   "mainquest.flowers"
	}, {
		coords:      [72.437,59.625],
		name:        "greedy",
		notBefore:   "mainquest.wandering"
	}, {
		coords:      [205.563,108.188],
		name:        "entombed",
		underground: true,
		entrances:   "bits_sewers"
	}, {
		coords:      [197.609,93.546],
		name:        "waterfront"
	}, {
		coords:      [180.000,176.125],
		name:        "eyeforeye",
		notBefore:   "sidequest.gangs"
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
		notBefore:   "mainquest.poet",
		before:      "mainquest.mists"
	}, {
		coords:      [198.968,108.000],
		name:        "sins",
		notBefore:   "sidequest.cabaret",
		before:      "mainquest.mists"
	}, {
		coords:      [106.968,74.875],
		name:        "ciri",
		notBefore:   "mainquest.ciriwolves",
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
		notBefore:   "sidequest.bitter"
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
		notBefore:   "sidequest.towerful"
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
		notBefore:   "mainquest.dreaming"
	}, {
		coords:      [104.562,129.296],
		name:        "hazardous1"
	}, {
		coords:      [213.187,94.671],
		name:        "stuff"
	}, {
		coords:      [210.468,107.234],
		name:        "messages",
		notBefore:   "event.children1"
	}, {
		coords:      [221.109,104.375],
		name:        "stakes"
	}, {
		coords:      [198.390,104.546],
		name:        "honor",
		notBefore:   "sidequest.gangs"
	}, {
		coords:      [111.843,54.500],
		name:        "rites",
		notBefore:   "sidequest.defender"
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
		name:        "city2",
		notBefore:   ["sidequest.matter",
		              "mainquest.reuven"]
	}, {
		coords:      [221.812,98.968],
		name:        "city1",
		notBefore:   ["sidequest.matter",
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
		notBefore:   "contract.deadly"
	}, {
		coords:      [209.938,109.422],
		name:        "matter",
		notBefore:   "mainquest.reuven"
	}, {
		coords:      [246.547,198.938],
		name:        "midnight",
		during:      "mainquest.deadman",
		hos:         true
	}, {
		coords:      [107.078,73.765],
		name:        "crookback",
		notBefore:   "mainquest.family",
		before:      "mainquest.mists"
	}, {
		coords:      [247.500,174.343],
		name:        "rose",
		notBefore:   "mainquest.evil",
		hos:         true
	}, {
		coords:      [154.000,163.500],
		name:        "neighborhood",
		notBefore:   "contract.drunk"
	}, {
		coords:      [149.281,183.343],
		name:        "spooked"
	}, {
		coords:      [95.156,47.718],
		name:        "takewant",
		notBefore:   "sidequest.cat"
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
		id:          "mainquest.hillock",
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
		notBefore:   "contract.merry"
	}, {
		coords:      [242.906,198.562],
		name:        "trace1",
		hos:         true
	}, {
		coords:      [[207.875,103.062],
		             [194.445,163.172]],
		name:        "rc_derby",
		race:        true,
		notBefore:   "mainquest.junior",
		routes: [{
			name: "v:race.derby1.label",
			coords: [[194.453,161.922], [195.016,162.406], [195.969,162.609], [196.984,162.484], [197.922,162.797],
			        [198.563,163.188], [199.391,162.969], [199.938,162.250], [200.000,161.828], [199.828,160.938],
			        [199.859,160.359], [200.391,159.563], [200.906,159.172], [201.859,158.094], [202.484,156.906],
			        [202.578,155.766], [202.422,154.656], [202.188,153.516], [202.156,153.078], [201.719,152.563],
			        [200.828,151.734], [199.891,151.141], [198.797,150.078], [198.266,149.797], [197.266,149.734],
			        [195.984,149.844], [195.500,150.000], [195.109,150.531], [194.953,151.125], [195.172,152.141],
			        [195.188,152.813], [194.906,153.672], [194.406,155.328], [194.406,155.844], [194.531,157.078],
			        [194.500,157.594], [194.188,158.578], [193.922,159.406], [193.813,160.078], [194.016,160.500],
			        [194.219,160.906], [194.250,161.625]]
		}, {
			name: "v:race.derby2.label",
			coords: [[194.453,161.922], [195.016,162.406], [195.969,162.609], [196.984,162.484], [197.922,162.797],
			        [198.563,163.188], [198.563,163.188], [199.469,163.172], [200.234,163.641], [201.313,164.141],
			        [202.250,164.047], [203.125,163.172], [203.813,162.906], [204.547,163.031], [205.203,163.484],
			        [205.391,163.984], [205.703,164.672], [206.328,164.938], [207.203,164.953], [208.172,164.844],
			        [208.328,164.734], [208.609,164.141], [208.594,163.953], [208.203,163.203], [208.078,162.922],
			        [208.297,161.969], [208.547,161.703], [209.063,161.453], [209.594,160.859], [209.906,159.094],
			        [209.703,158.547], [209.281,158.109], [208.516,157.953], [207.250,158.078], [206.563,158.078],
			        [206.125,157.984], [205.297,157.484], [204.469,156.891], [203.797,156.109], [203.250,155.203],
			        [202.688,153.969], [202.031,152.828], [201.719,152.563], [200.828,151.734], [199.891,151.141],
			        [198.797,150.078], [198.266,149.797], [197.266,149.734], [195.984,149.844], [195.500,150.000],
			        [195.109,150.531], [194.953,151.125], [195.172,152.141], [195.188,152.813], [194.906,153.672],
			        [194.406,155.328], [194.406,155.844], [194.531,157.078], [194.500,157.594], [194.188,158.578],
			        [193.922,159.406], [193.813,160.078], [194.016,160.500], [194.219,160.906], [194.250,161.625]]
		}, {
			name: "v:race.derby3.label",
			coords: [[194.453,161.922], [195.016,162.406], [195.969,162.609], [196.984,162.484], [197.922,162.797],
			        [198.563,163.188], [199.391,162.969], [199.938,162.250], [200.000,161.828], [199.828,160.938],
			        [199.859,160.359], [200.391,159.563], [200.906,159.172], [201.859,158.094], [202.406,157.281],
			        [203.063,156.938], [203.531,156.813], [204.094,156.844], [204.781,157.219], [206.125,157.984],
			        [206.563,158.078], [207.250,158.078], [208.516,157.953], [209.281,158.109], [209.703,158.547],
			        [209.906,159.094], [209.594,160.859], [209.063,161.453], [208.547,161.703], [208.297,161.969],
			        [208.078,162.922], [208.203,163.203], [208.594,163.953], [208.609,164.141], [208.328,164.734],
			        [208.172,164.844], [207.203,164.953], [206.328,164.938], [205.703,164.672], [205.391,163.984],
			        [205.203,163.484], [204.547,163.031], [203.813,162.906], [203.125,163.172], [202.250,164.047],
			        [201.313,164.141], [200.234,163.641], [200.063,163.156], [200.094,162.438], [200.000,161.828],
			        [199.828,160.938], [199.859,160.359], [200.391,159.563], [200.906,159.172], [201.859,158.094],
			        [202.484,156.906], [202.578,155.766], [202.422,154.656], [202.188,153.516], [202.156,153.078],
			        [201.719,152.563], [200.828,151.734], [199.891,151.141], [198.797,150.078], [198.266,149.797],
			        [197.266,149.734], [195.984,149.844], [195.500,150.000], [195.109,150.531], [194.953,151.125],
			        [195.172,152.141], [195.188,152.813], [194.906,153.672], [194.406,155.328], [194.406,155.844],
			        [194.531,157.078], [194.500,157.594], [194.188,158.578], [193.922,159.406], [193.813,160.078],
			        [194.016,160.500], [194.219,160.906], [194.250,161.625]]
		}, {
			name: "v:race.palio.label",
			coords: [[196.172,112.094], [194.469,113.594], [193.891,114.156], [193.547,115.125], [193.313,115.563],
			        [192.922,115.922], [192.766,116.391], [192.375,116.875], [192.016,117.453], [191.750,118.750],
			        [191.781,119.469], [192.297,120.859], [192.969,122.016], [193.406,122.453], [193.469,122.922],
			        [193.047,124.453], [192.641,125.641], [192.281,126.078], [191.656,126.844], [190.922,127.078],
			        [190.484,127.453], [189.797,128.266], [189.313,129.016], [188.797,129.594], [188.281,129.797],
			        [187.656,130.141], [187.141,130.531], [185.953,130.641], [185.094,130.563], [184.422,130.188],
			        [184.000,129.609], [183.641,129.156], [183.203,128.859], [182.828,128.266], [182.750,127.531],
			        [183.016,126.609], [182.938,125.828], [183.000,125.313], [183.297,124.516], [183.578,123.969],
			        [183.656,123.188], [183.750,122.594], [184.063,121.750], [184.234,121.281], [184.203,120.266],
			        [184.016,119.797], [183.688,119.406], [183.156,119.281], [182.422,119.234], [181.797,119.313],
			        [180.781,119.141], [179.750,118.891], [179.406,118.625], [179.000,118.031], [178.641,117.609],
			        [178.516,117.250], [178.578,116.734], [178.422,115.891], [178.219,115.313], [178.188,114.484],
			        [178.250,113.875], [178.531,113.078], [179.063,112.656], [179.344,112.500], [179.766,112.484],
			        [180.359,112.406], [180.656,112.406], [181.156,112.188], [181.797,112.125], [182.328,112.188],
			        [182.719,112.391], [183.359,112.656], [183.875,113.125], [184.328,113.578], [184.750,113.938],
			        [185.438,113.984], [186.219,113.891], [186.922,113.594], [187.797,113.125], [188.375,113.125],
			        [189.297,113.219], [189.984,113.063], [190.750,113.000], [191.438,113.188], [192.063,113.625],
			        [192.813,113.766], [193.422,113.781], [194.156,113.672], [194.563,113.438], [196.125,112.094]]
		}]
	}, {
		coords:      [104.562,79.312],
		name:        "rc_perch",
		race:        true,
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
		hos:         true,
		race:        true
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
		notBefore:   "sidequest.en_s"
	}, {
		coords:      [239.453,215.369],
		name:        "en_m",
		extraDesc:   "sidequest.en_m.descMods",
		hos:         true,
		notBefore:   "sidequest.en_q"
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
		notBefore:   "sidequest.crookback"
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
		coords:      [153.609,79.109]
	}, {
		coords:      [46.078,24.953],   // 3x Drowner (Underwater) (L10)
		name:        "drowner",
		level:       "#10"
	}, {
		coords:      [111.500,105.250], // 3x Drowner (L4)
		name:        "drowner",
		level:       "#4"
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
		notBefore:   "mainquest.bald"
	}, {
		coords:      [[52.617,50.609],
		             [37.828,40.742],
		             [41.234,45.984],
		             [48.391,47.484],
		             [42.813,42.664],
		             [43.984,43.297],
		             [43.672,41.797],
		             [39.641,43.594],
		             [52.508,42.633],
		             [39.766,42.656],
		             [52.195,46.797],
		             [52.438,47.750],
		             [51.359,49.531],
		             [52.438,51.258],
		             [53.539,54.297],
		             [46.867,45.219],
		             [47.375,40.852],
		             [46.367,40.648],
		             [49.188,40.969],
		             [49.125,42.625],
		             [49.953,43.594],
		             [48.258,41.414],
		             [48.141,44.297],
		             [41.047,39.578],
		             [43.406,39.680],
		             [38.922,39.703],
		             [57.516,40.891],
		             [51.727,39.453]],
		underground: true,
		entrances:   ["wandering_cave_entry", "wandering_cave_exit"],
		notBefore:   "mainquest.wandering"
	}, {
		coords:      [51.227,43.102],
		unreachable: true,
		underground: true,
		entrances:   ["wandering_cave_entry", "wandering_cave_exit"],
		notBefore:   "mainquest.wandering"
	}, {
		coords:      [[214.531,193.344],
		             [216.766,193.875],
		             [216.734,192.906]],
		underground: true,
		entrances:   "everec_crypt",
		notBefore:   "mainquest.deadman"
	}, {
		coords:      [[217.344,193.438],
		             [220.672,193.000]],
		notBefore:   "mainquest.marriage"
	}, {
		coords:      [[201.664,102.797], // TODO: Can you enter this from the canal before the quest?
		             [201.398,103.234]],
		underground: true,
		entrances:   "kluhg_hatch",
		notBefore:   "mainquest.pyres"
	}, {
		coords:      [52.219,129.844],
		underground: true,
		entrances:   "swamp_cave"
	}, {
		coords:      [217.922,160.438],
		underground: true,
		entrances:   "windmill_cave"
	}, {
		coords:      [217.227,108.344],
		underground: true,
		entrances:   "gildorf_sewers"
	}, {
		coords:      [[158.266,210.969],
		             [159.297,211.203],
		             [158.148,209.000]],
		underground: true,
		entrances:   "cheese_dungeon",
		notBefore:   "sidequest.darkness"
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
		notBefore:   "contract.drunk"
	}, {
		coords:      [140.844,167.109],
		during:      "mainquest.whatsoever"
	}, {
		coords:      [72.188,59.047],
		underground: true,
		entrances:   "allgod_basement",
		notBefore:   "sidequest.greedy"
	}, {
		coords:      [[153.578,166.875],
		             [154.500,167.477]],
		underground: true,
		entrances:   "escape_well",
		notBefore:   "mainquest.escape"
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
		entrances:   "dreamer_basement",
		notBefore:   "mainquest.dreaming"
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
		coords:      [208.125,104.742],
		underground: true,
		entrances:   "kingfisher_sewers",
		notBefore:   "sidequest.never"
	}, {
		coords:      [[92.313,149.797],
		             [89.391,150.484]],
		underground: true,
		entrances:   "fools_cave"
	}, {
		coords:      [[142.953,107.594], // TODO: Can't see these four chests in REDkit. They may only show up during the quest. Check exact location.
		             [142.188,109.547],
		             [141.313,106.375],
		             [139.703,107.656]],
		underground: true,
		entrances:   "mikel_cave"
	}, {
		coords:      [[158.922,166.141],
		             [157.781,164.570],
		             [155.961,165.281],
		             [155.219,164.195],
		             [154.094,164.313]],
		underground: true,
		entrances:   "frog_lair",
		during:      "mainquest.evil"
	}, {
		coords:      [239.563,76.688],
		notBefore:   "mainquest.evil"
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
		coords:      [37.766,124.672],
		underwater:  true,
		underground: true,
		entrances:   "coin_fetch_cave"
	}, {
		coords:      [[151.125,163.938],
		             [151.875,165.313],
		             [149.359,165.227]],
		underwater:  true,
		underground: true,
		entrances:   "escape_well",
		notBefore:   "mainquest.escape"
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
		coords:      [[50.531,46.539],
		             [40.211,42.695],
		             [45.820,38.750],
		             [54.891,40.984]],
		underwater:  true,
		underground: true,
		entrances:   ["wandering_cave_entry", "wandering_cave_exit"],
		notBefore:   "mainquest.wandering"
	}, {
		coords:      [[91.563,149.500],
		             [91.375,149.703],
		             [89.844,150.125]],
		underwater:  true,
		underground: true,
		entrances:   "fools_cave"
	}, {
		coords:      [[144.508,108.766],
		             [143.961,109.891],
		             [143.352,110.391],
		             [140.781,112.344]],
		underwater:  true,
		underground: true,
		entrances:   "mikel_cave"
	}, {
		coords:      [238.844,76.656],
		underwater:  true,
		notBefore:   "mainquest.evil"
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
		name:        "airforce",
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
}; }; let calcInteriors = function(scale) { return {
	saltmain: calcInteriorBounds({
			s01: { size: { w: 1932, h: 1932 }, off: { x:    0, y: 1808 } },
			s03: { size: { w: 1048, h: 1048 }, off: { x:  963, y: 1922 } },
			s04: { size: { w:  992, h:  992 }, off: { x:  538, y:  989 } },
			s07: { size: { w:  889, h:  889 }, off: { x:  141, y: 1312 } },
			s08: { size: { w:  414, h:  414 }, off: { x:  334, y: 1511 } },
			s09: { size: { w: 2172, h: 2172 }, off: { x:   78, y:    0 } },
			s11: { size: { w:  546, h:  546 }, off: { x: 1620, y: 2439 } }
		}, { x: 867, y: 1934 }, { lat: 44.594, lng: 39.688 }, scale),
	saltback: calcInteriorBounds({
			s05: { size: { w: 1922, h: 1922 }, off: { x:    0, y:    0 } },
			s06: { size: { w: 1670, h: 1670 }, off: { x: 1292, y:  295 } },
			s12: { size: { w:  603, h:  557 }, off: { x: 1098, y: 1232 } }
		}, { x: 2374, y: 1610 }, { lat: 49.109, lng: 53.047 }, scale),
	saltchest: calcInteriorBounds({
			s10: { size: { w: 1102, h: 1102 }, off: { x: 0, y: 0 } }
		}, { x: 535, y: 467 }, { lat: 57.516, lng: 40.891 }, scale),

	balddoor: calcInteriorBounds({
			b01: { size: { w: 360, h: 360 }, off: { x: 0, y: 0 } }
		}, { x: 24, y: 265 }, { lat: 33.391, lng: 129.047 }, scale),
	baldfugas: calcInteriorBounds({
			b02: { size: { w: 544, h: 544 }, off: { x: 0, y: 0 } }
		}, { x: 159, y: 208 }, { lat: 35.671, lng: 129.249 }, scale),
	baldtop: calcInteriorBounds({
			b11: { size: { w: 1300, h: 938 }, off: { x: 0, y: 0 } }
		}, { x: 704, y: 802 }, { lat: 33.250, lng: 132.172 }, scale),
	baldciri: calcInteriorBounds({
			b03: { size: { w: 382, h: 382 }, off: { x: 297, y: 359 } },
			b04: { size: { w: 696, h: 696 }, off: { x:   0, y:   0 } }
		}, { x: 566, y: 584 }, { lat: 36.462, lng: 131.513 }, scale),
	balddrop: calcInteriorBounds({
			b06: { size: { w: 1474, h: 1200 }, off: { x: 323, y:    0 } },
			b09: { size: { w:  906, h:  750 }, off: { x:   0, y:  659 } },
			b10: { size: { w:  392, h:  392 }, off: { x: 537, y: 1012 } }
		}, { x: 879, y: 771 }, { lat: 35.528, lng: 128.611 }, scale),
	baldwater: calcInteriorBounds({
			b08: { size: { w: 620, h: 1000 }, off: { x: 0, y: 0 } }
		}, { x: 74, y: 227 }, { lat: 37.938, lng: 123.297 }, scale),
	baldcave: calcInteriorBounds({
			b07: { size: { w: 830, h: 830 }, off: { x: 0, y: 0 } }
		}, { x: 87, y: 615 }, { lat: 35.359, lng: 123.156 }, scale),

	oxenfurt: calcInteriorBounds({
			p01: { size: { w:  250, h:  250 }, off: { x: 1016, y: 896 } },
			p02: { size: { w:  502, h:  502 }, off: { x:  943, y: 740 } },
			c02: { size: { w:  546, h:  546 }, off: { x:  961, y:  94 } },
			c03: { size: { w:  250, h:  250 }, off: { x: 1346, y: 495 } },
			c04: { size: { w:  272, h:  272 }, off: { x: 1067, y: 549 } },
			c05: { size: { w:  250, h:  250 }, off: { x: 1149, y: 840 } },
			c07: { size: { w: 1068, h: 1068 }, off: { x:  412, y:   0 } },
			c08: { size: { w: 1000, h: 1000 }, off: { x:    0, y: 378 } },
			c09: { size: { w:  654, h:  654 }, off: { x:   36, y: 290 } },
			c11: { size: { w:  218, h:  218 }, off: { x:  561, y: 331 } },
			c12: { size: { w:  294, h:  294 }, off: { x:  507, y:  96 } },
			c14: { size: { w:  424, h:  424 }, off: { x:  620, y: 798 } },
			c15: { size: { w:  304, h:  304 }, off: { x:  968, y: 728 } }
		}, { x: 1478, y: 662 }, { lat: 151.102, lng: 170.664 }, scale),
	frog: calcInteriorBounds({
			s01: { size: { w:  972, h:  972 }, off: { x: 404, y:   0 } },
			s02: { size: { w: 1288, h: 1288 }, off: { x:   0, y: 177 } }
		}, { x: 1021, y: 188 }, { lat: 159.250, lng: 165.641 }, scale),

	noviRich: calcInteriorBounds({
			r03: { size: { w: 1600, h: 1600 }, off: { x: 0, y: 0 } }
		}, { x: 589, y: 527 }, { lat: 217.188, lng: 106.000 }, scale),
	noviInn: calcInteriorBounds({
			i01: { size: { w:  480, h:  480 }, off: { x:   55, y: 275 } },
			i02: { size: { w:  872, h:  872 }, off: { x:    0, y: 175 } },
			i03: { size: { w: 1300, h: 1300 }, off: { x:  446, y:   0 } },
			i06: { size: { w:  666, h:  666 }, off: { x:  869, y:  39 } },
			i07: { size: { w:  622, h:  622 }, off: { x: 1499, y:  52 } },
			i09: { size: { w:  546, h:  546 }, off: { x: 1981, y:  64 } },
			i10: { size: { w:  350, h:  350 }, off: { x: 2141, y:   6 } }
		}, { x: 2229, y: 181 }, { lat: 209.849, lng: 104.909 }, scale),
	noviMorgue: calcInteriorBounds({
			m01: { size: { w: 505, h: 505 }, off: { x:   0, y: 278 } },
			m02: { size: { w: 632, h: 632 }, off: { x: 283, y:  58 } },
			m04: { size: { w: 647, h: 647 }, off: { x: 313, y:   0 } }
		}, { x: 607, y: 42 }, { lat: 213.758, lng: 106.242 }, scale),
	noviBath: calcInteriorBounds({
			b01: { size: { w:  730, h:  730 }, off: { x:  686, y: 844 } },
			b02: { size: { w:  370, h:  370 }, off: { x: 1292, y: 901 } },
			p01: { size: { w:  912, h:  912 }, off: { x:  257, y:  40 } },
			p03: { size: { w:  696, h:  696 }, off: { x:  594, y: 152 } },
			p05: { size: { w: 2268, h: 2268 }, off: { x:    0, y:   0 } }
		}, { x: 808, y: 1370 }, { lat: 213.063, lng: 102.773 }, scale),
	noviArena: calcInteriorBounds({
			a01: { size: { w: 1146, h: 1146 }, off: { x: 68, y: 84 } },
			a02: { size: { w: 1058, h: 1058 }, off: { x:  0, y:  0 } }
		}, { x: 558, y: 180 }, { lat: 218.047, lng: 109.813 }, scale),
	noviArenaE: calcInteriorBounds({
			a03: { size: { w: 262, h: 262 }, off: { x: 0, y: 0 } }
		}, { x: 172, y: 151 }, { lat: 218.047, lng: 110.656 }, scale),
	noviLynx: calcInteriorBounds({
			l02: { size: { w: 1200, h: 1200 }, off: { x:    0, y: 394 } },
			l03: { size: { w:  424, h:  424 }, off: { x:  562, y: 499 } },
			l04: { size: { w:  742, h:  742 }, off: { x:  708, y: 162 } },
			l05: { size: { w:  688, h:  688 }, off: { x: 1082, y: 673 } },
			l06: { size: { w:  546, h:  546 }, off: { x: 1105, y: 115 } },
			l07: { size: { w:  774, h:  774 }, off: { x: 1357, y: 367 } },
			l08: { size: { w:  654, h:  654 }, off: { x:  214, y:   0 } }
		}, { x: 254, y: 330 }, { lat: 229.938, lng: 88.758 }, scale),
	noviKluhg: calcInteriorBounds({
			k01: { size: { w: 294, h: 294 }, off: { x: 0, y: 0 } }
		}, { x: 180, y: 182 }, { lat: 201.383, lng: 103.172 }, scale),
	noviGlory: calcInteriorBounds({
			g01: { size: { w: 1014, h: 1014 }, off: { x: 0, y: 0 } }
		}, { x: 468, y: 317 }, { lat: 199.109, lng: 103.289 }, scale),
	noviBits: calcInteriorBounds({
			d01: { size: { w: 1180, h: 1180 }, off: { x:   0, y: 137 } },
			d02: { size: { w:  294, h:  294 }, off: { x: 296, y:   0 } }
		}, { x: 509, y: 39 }, { lat: 211.594, lng: 109.719 }, scale),
	noviTomb: calcInteriorBounds({
			t01: { size: { w: 622, h: 622 }, off: { x: 0, y: 0 } }
		}, { x: 268, y: 299 }, { lat: 205.563, lng: 108.188 }, scale),
	cheeseMind: calcInteriorBounds({
			m01: { size: { w: 316, h: 316 }, off: { x: 786, y: 290 } },
			m02: { size: { w: 884, h: 884 }, off: { x:   0, y:   0 } }
		}, { x: 38, y: 466 }, { lat: 151.406, lng: 207.359 }, scale),
	cheeseDext: calcInteriorBounds({
			d01: { size: { w: 1540, h: 1540 }, off: { x: 179, y:   0 } },
			d02: { size: { w: 1000, h: 1000 }, off: { x:   0, y: 547 } }
		}, { x: 706, y: 926 }, { lat: 158.734, lng: 209.797 }, scale),
	cheeseEnd: calcInteriorBounds({
			e01: { size: { w: 862, h: 862 }, off: { x: 0, y: 0 } }
		}, { x: 351, y: 440 }, { lat: 154.875, lng: 208.383 }, scale),
	hideoutMain: calcInteriorBounds({
			h01: { size: { w: 588, h: 588 }, off: { x: 132, y:  0 } },
			h02: { size: { w: 982, h: 982 }, off: { x:   0, y: 14 } }
		}, { x: 496, y: 131 }, { lat: 147.250, lng: 106.961 }, scale),
	hideoutDive: calcInteriorBounds({
			h06: { size: { w: 446, h: 446 }, off: { x: 0, y: 0 } }
		}, { x: 173, y: 27 }, { lat: 144.766, lng: 109.383 }, scale),
	hideoutNest: calcInteriorBounds({
			h03: { size: { w: 1342, h: 1342 }, off: { x: 0, y: 0 } }
		}, { x: 1218, y: 523 }, { lat: 142.109, lng: 111.844 }, scale),
	hideoutEgg: calcInteriorBounds({
			h04: { size: { w:  404, h:  404 }, off: { x:  0, y: 643 } },
			h05: { size: { w: 1036, h: 1036 }, off: { x: 51, y:   0 } }
		}, { x: 364, y: 311 }, { lat: 141.547, lng: 112.813 }, scale)
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
	getMapData:    function() { return getMapData(calcInteriors(183.0)); }
}); }
