{ let getMapData = function() { return {

	//------------------------------------------------Abandoned Site------------------------------------------------
	abandoned: [{
		coords: [[127.188,212.844]],
		label: $.t("abandoned.label"),
		popup: $.t("abandoned.desc")
	},{
		coords: [[124.531,217.734]],
		label: $.t("abandoned.label"),
		popup: $.t("abandoned.desc")
	},{
		coords: [[134.609,137.891]],
		label: $.t("abandoned.label"),
		popup: $.t("abandoned.desc")
	},{
		coords: [[115.562,116.750]],
		label: $.t("abandoned.label"),
		popup: $.t("abandoned.desc")
	},{
		coords: [[99.688,150.016]],
		label: $.t("abandoned.label"),
		popup: $.t("abandoned.desc")
	}],

	//------------------------------------------------Alchemy Supplies------------------------------------------------
	alchemy: [{
		coords: [[137.125,218.359]],
		label: $.t("alchemy.label"),
		popup: $.t("alchemy.desc")
	},{
		coords: [[131.078,133.407]],
		label: $.t("alchemy.label"),
		popup: $.t("misc.mdisappears",{quest: $.t("sidequests.label.nithing")}) + $.t("alchemy.desc")
	},{
		coords: [[137.703,164.312]],
		label: $.t("alchemy.label") + ' - ' + $.t("s:alchemy.gremist") + '*',
		popup: $.t("misc.active",{quest: $.t("sidequests.label.practicum")}) + $.t("alchemy.desc")
	}],

	//------------------------------------------------Armourer------------------------------------------------
	armourer: [{
		coords: [[130.406,222.094]],
		label: $.t("sidebar.armourer"),
		popupTitle: $.t("sidebar.armourer") + ' - ' + $.t("craftlevels.Amateur"),
		popup: $.t("armourer.desc")
	},{
		coords: [[192.359,179.906]],
		label: $.t("sidebar.armourer"),
		popupTitle: $.t("sidebar.armourer") + ' - ' + $.t("craftlevels.Amateur"),
		popup: $.t("armourer.desc")
	},{
		coords: [[94.656,125.188]],
		label: $.t("sidebar.armourer"),
		popupTitle: $.t("sidebar.armourer") + ' - ' + $.t("craftlevels.Journeyman"),
		popup: $.t("armourer.desc")
	},{
		coords: [[154.109,123.406]],
		label: $.t("sidebar.armourer"),
		popupTitle: $.t("sidebar.armourer") + ' - ' + $.t("craftlevels.Journeyman"),
		popup: $.t("armourer.desc")
	}],

	//------------------------------------------------Armourer's Table------------------------------------------------
	armourerstable: [{
		coords: [[130.687,225.203]],
		label: $.t("armourerstable.label"),
		popup: $.t("armourerstable.desc")
	},{
		coords: [[130.578,221.733]],
		label: $.t("armourerstable.label"),
		popup: $.t("armourerstable.desc")
	},{
		coords: [[127.281,212.282]],
		label: $.t("armourerstable.label"),
		popup: $.t("armourerstable.desc")
	},{
		coords: [[193.453,180.110]],
		label: $.t("armourerstable.label"),
		popup: $.t("armourerstable.desc")
	},{
		coords: [[177.360,72.750]],
		label: $.t("armourerstable.label"),
		popup: $.t("armourerstable.desc")
	},{
		coords: [[95.215,125.422]],
		label: $.t("armourerstable.label"),
		popup: $.t("armourerstable.desc")
	},{
		coords: [[121.420,107.110]],
		label: $.t("armourerstable.label"),
		popup: $.t("armourerstable.desc")
	},{
		coords: [[154.010,122.847]],
		label: $.t("armourerstable.label"),
		popup: $.t("armourerstable.desc")
	},{
		coords: [[130.422,222.453]],
		label: $.t("armourerstable.label"),
		popup: $.t("armourerstable.desc")
	}],

	//------------------------------------------------Bandit Camp------------------------------------------------
	banditcamp: [{
		coords: [[167.125,179.625]],
		label: $.t("banditcamp.label"),
		popup: $.t("banditcamp.desc")
	},{
		coords: [[167.937,65.922]],
		label: $.t("banditcamp.label"),
		popup: $.t("banditcamp.desc")
	},{
		coords: [[130.062,139.281]],
		label: $.t("banditcamp.label"),
		popup: $.t("banditcamp.desc")
	},{
		coords: [[96.515,115.969]],
		label: $.t("banditcamp.label"),
		popup: $.t("banditcamp.desc")
	},{
		coords: [[141.531,171.812]],
		label: $.t("banditcamp.label"),
		popup: $.t("banditcamp.desc")
	},{
		coords: [[156.000,163.063]],
		label: $.t("banditcamp.label"),
		popup: $.t("banditcamp.desc")
	},{
		coords: [[196.563,115.187]],
		label: $.t("banditcamp.label"),
		popup: $.t("entrance.desc.exit") + $.t("banditcamp.desc")
	}],

	//------------------------------------------------Barber------------------------------------------------
	barber: [{
		coords: [[175.266,72.375]],
		label: $.t("barber.label"),
		popup: $.t("barber.desc")
	},{
		coords: [[149.438,127.625]],
		label: $.t("barber.label"),
		popup: $.t("barber.desc")
	}],

	//------------------------------------------------Blacksmith------------------------------------------------
	blacksmith: [{
		coords: [[62.248,187.657]],
		label: $.t("sidebar.blacksmith"),
		popupTitle: $.t("sidebar.blacksmith") + ' - ' + $.t("craftlevels.Amateur"),
		popup: $.t("blacksmith.desc")
	},{
		coords: [[130.750,224.859]],
		label: $.t("sidebar.blacksmith"),
		popupTitle: $.t("sidebar.blacksmith") + ' - ' + $.t("craftlevels.Amateur"),
		popup: $.t("blacksmith.desc")
	},{
		coords: [[193.893,179.031]],
		label: $.t("sidebar.blacksmith"),
		popupTitle: $.t("sidebar.blacksmith") + ' - ' + $.t("craftlevels.Amateur"),
		popup: $.t("blacksmith.desc")
	},{
		coords: [[176.969,72.562]],
		label: $.t("sidebar.blacksmith"),
		popupTitle: $.t("sidebar.blacksmith") + ' - ' + $.t("craftlevels.Amateur"),
		popup: $.t("blacksmith.desc")
	},{
		coords: [[95.397,125.047]],
		label: $.t("sidebar.blacksmith"),
		popupTitle: $.t("sidebar.blacksmith") + ' - ' + $.t("craftlevels.Journeyman"),
		popup: $.t("blacksmith.desc")
	},{
		coords: [[121.375,106.740]],
		label: $.t("sidebar.blacksmith"),
		popupTitle: $.t("sidebar.blacksmith") + ' - ' + $.t("craftlevels.Amateur"),
		popup: $.t("blacksmith.desc")
	},{
		coords: [[123.407,129.234]],
		label: $.t("sidebar.blacksmith") + '*',
		popupTitle: $.t("sidebar.blacksmith") + ' - ' + $.t("craftlevels.Amateur") + '*',
		popup: $.t("blacksmith.desc") + $.t("pid.rescue",{x1: $.t("<a href='#6/-33.633/-40.298\'>"), end: $.t("</a>")})
	},{
		coords: [[102.500,140.969]],
		label: $.t("sidebar.blacksmith"),
		popupTitle: $.t("sidebar.blacksmith") + ' - ' + $.t("craftlevels.Amateur"),
		popup: $.t("blacksmith.desc")
	},{
		coords: [[154.235,123.094]],
		label: $.t("sidebar.blacksmith"),
		popupTitle: $.t("sidebar.blacksmith") + ' - ' + $.t("craftlevels.Amateur"),
		popup: $.t("blacksmith.desc")
	},{
		coords: [[108.407,73.938]],
		label: $.t("sidebar.blacksmith"),
		popupTitle: $.t("sidebar.blacksmith") + ' - ' + $.t("craftlevels.Amateur"),
		popup: $.t("misc.active",{quest: $.t("mainquests.label.bpreparations")}) + $.t("blacksmith.desc")
	},],

	//------------------------------------------------Boat------------------------------------------------
	boat: [{
		coords: [[117.532,53.875]],
		label: $.t("sidebar.boat") + '*',
		popup: $.t("misc.active",{quest: $.t("mainquests.label.mists")}) + $.t("boat.desc")
	},{
		coords: [[109.407,74.500]],
		label: $.t("sidebar.boat"),
		popup: $.t("boat.desc")
	},{
		coords: [[57.939,201.500]],
		label: $.t("sidebar.boat"),
		popup: $.t("boat.desc")
	},{
		coords: [[149.250,210.343]],
		label: $.t("sidebar.boat") + '*',
		popup: $.t("misc.active",{quest: $.t("sidequests.label.last")}) + $.t("boat.desc")
	},{
		coords: [[128.719,209.656]],
		label: $.t("sidebar.boat"),
		popup: $.t("boat.desc")
	},{
		coords: [[132.626,222.406]],
		label: $.t("sidebar.boat"),
		popup: $.t("boat.desc")
	},{
		coords: [[179.625,140.125]],
		label: $.t("sidebar.boat"),
		popup: $.t("boat.desc")
	},{
		coords: [[190.750,172.312]],
		label: $.t("sidebar.boat"),
		popup: $.t("boat.desc")
	},{
		coords: [[191.343,178.531]],
		label: $.t("sidebar.boat"),
		popup: $.t("boat.desc")
	},{
		coords: [[191.500,179.375]],
		label: $.t("sidebar.boat"),
		popup: $.t("boat.desc")
	},{
		coords: [[145.985,85.126]],
		label: $.t("sidebar.boat"),
		popup: $.t("boat.desc")
	},{
		coords: [[183.531,71.657]],
		label: $.t("sidebar.boat"),
		popup: $.t("boat.desc")
	},{
		coords: [[91.000,116.860]],
		label: $.t("sidebar.boat"),
		popup: $.t("boat.desc")
	},{
		coords: [[124.516,108.329]],
		label: $.t("sidebar.boat"),
		popup: $.t("boat.desc")
	},{
		coords: [[135.422,98.359]],
		label: $.t("sidebar.boat"),
		popup: $.t("boat.desc")
	},{
		coords: [[102.250,142.313]],
		label: $.t("sidebar.boat"),
		popup: $.t("boat.desc")
	},{
		coords: [[99.048,150.219]],
		label: $.t("sidebar.boat"),
		popup: $.t("boat.desc")
	},{
		coords: [[115.547,170.593]],
		label: $.t("sidebar.boat"),
		popup: $.t("boat.desc")
	},{
		coords: [[143.860,170.672]],
		label: $.t("sidebar.boat"),
		popup: $.t("boat.desc")
	},{
		coords: [[129.954,131.438]],
		label: $.t("sidebar.boat"),
		popup: $.t("boat.desc")
	},{
		coords: [[159.640,135.829]],
		label: $.t("sidebar.boat"),
		popup: $.t("boat.desc")
	},{
		coords: [[151.344,125.532]],
		label: $.t("sidebar.boat"),
		popup: $.t("boat.desc")
	},{
		coords: [[147.328,122.969]],
		label: $.t("sidebar.boat"),
		popup: $.t("boat.desc")
	},{
		coords: [[147.000,123.000]],
		label: $.t("sidebar.boat"),
		popup: $.t("boat.desc")
	},{
		coords: [[128.845,172.000]],
		label: $.t("sidebar.boat"),
		popup: $.t("boat.desc")
	},{
		coords: [[161.218,160.437]],
		label: $.t("sidebar.boat"),
		popup: $.t("boat.desc")
	},{
		coords: [[141.063,212.812]],
		label: $.t("sidebar.boat"),
		popup: $.t("boat.desc")
	},{
		coords: [[174.969,74.000]],
		label: $.t("sidebar.boat"),
		popup: $.t("boat.desc")
	},{
		coords: [[122.156,105.562]],
		label: $.t("sidebar.boat"),
		popup: $.t("boat.desc")
	},{
		coords: [[141.562,52.625]],
		label: $.t("sidebar.boat"),
		popup: $.t("boat.desc")
	},{
		coords: [[62.531,201.156]],
		label: $.t("sidebar.boat"),
		popup: $.t("boat.desc")
	}],

	//------------------------------------------------Brothel------------------------------------------------
	brothel: [],

	//------------------------------------------------Contracts------------------------------------------------
	contracts: [{
		coords: [[104.391,141.344]],
		label: $.t("contracts.label.dragon"),
		popup: $.t("contracts.desc.dragon")
	},{
		coords: [[176.047,73.094]],
		label: $.t("contracts.label.groom"),
		popup: $.t("contracts.desc.groom")
	},{
		coords: [[129.235,150.875]],
		label: $.t("contracts.label.miners"),
		popup: $.t("contracts.desc.miners")
	},{
		coords: [[130.407,133.203]],
		label: $.t("contracts.label.missing"),
		popup: $.t("contracts.desc.missing")
	},{
		coords: [[147.360,125.657]],
		label: $.t("contracts.label.muire"),
		popup: $.t("contracts.desc.muire")
	},{
		coords: [[103.828,141.516]],
		label: $.t("contracts.label.wanted"),
		popup: $.t("contracts.desc.wanted")
	},{
		coords: [[130.079,221.828]],
		label: $.t("contracts.label.beast"),
		popup: $.t("contracts.desc.beast")
	},{
		coords: [[118.204,107.453]],
		label: $.t("contracts.label.eldberg"),
		popup: $.t("contracts.desc.eldberg")
	},{
		coords: [[121.891,129.297]],
		label: $.t("contracts.label.heart"),
		popup: $.t("contracts.desc.heart")
	}],

	//------------------------------------------------Entrance------------------------------------------------
	entrance: [{
		coords: [[58.577,182.922]],
		label: $.t("sidebar.entrance"),
		popup: $.t("entrance.desc.entry")
	},{
		coords: [[62.702,183.422]],
		label: $.t("sidebar.entrance"),
		popup: $.t("entrance.desc.entry")
	},{
		coords: [[139.703,216.875]],
		label: $.t("sidebar.entrance"),
		popup: $.t("entrance.desc.entry")
	},{
		coords: [[138.422,214.593]],
		label: $.t("sidebar.entrance"),
		popup: $.t("entrance.desc.entry")
	},{
		coords: [[138.375,229.281]],
		label: $.t("entranceunderwatercave.label") + '*',
		popup: $.t("misc.dactive",{quest: $.t("sidequests.label.last")}) + $.t("entranceunderwatercave.desc")
	},{
		coords: [[133.469,217.969]],
		label: $.t("sidebar.entrance"),
		popup: $.t("entrance.desc.entry")
	},{
		coords: [[131.219,215.937]],
		label: $.t("sidebar.entrance"),
		popup: $.t("entrance.desc.entry")
	},{
		coords: [[129.656,218.938]],
		label: $.t("sidebar.entrance"),
		popup: $.t("entrance.desc.entry")
	},{
		coords: [[193.531,175.672]],
		label: $.t("sidebar.entrance"),
		popup: $.t("entrance.desc.entry")
	},{
		coords: [[164.438,64.078]],
		label: $.t("sidebar.entrance"),
		popup: $.t("entrance.desc.entry")
	},{
		coords: [[140.750,53.125]],
		label: $.t("sidebar.entrance") + '*',
		popup: $.t("misc.active",{quest: $.t("mainquests.label.elderblood")}) + $.t("entrance.desc.entry")
	},{
		coords: [[108.875,56.343]],
		label: $.t("sidebar.entrance"),
		popup: $.t("entrance.desc.entry")
	},{
		coords: [[97.204,61.422]],
		label: $.t("sidebar.entrance"),
		popup: $.t("entrance.desc.entry")
	},{
		coords: [[96.204,65.047]],
		label: $.t("sidebar.entrance"),
		popup: $.t("entrance.desc.entry")
	},{
		coords: [[102.516,63.578]],
		label: $.t("sidebar.entrance"),
		popup: $.t("entrance.desc.entry")
	},{
		coords: [[99.594,72.844]],
		label: $.t("sidebar.entrance") + '*',
		popup: $.t("misc.active",{quest: $.t("sidequests.label.undvik")}) + $.t("entrance.desc.entry")
	},{
		coords: [[78.890,145.938]],
		label: $.t("sidebar.entrance"),
		popup: $.t("entrance.desc.entry")
	},{
		coords: [[81.797,145.953]],
		label: $.t("sidebar.entrance"),
		popup: $.t("entrance.desc.entry")
	},{
		coords: [[81.422,135.000]],
		label: $.t("sidebar.entrance"),
		popup: $.t("entrance.desc.entry")
	},{
		coords: [[108.109,121.797]],
		label: $.t("sidebar.entrance") + '*',
		popup: $.t("misc.active",{quest: $.t("sidequests.label.gambit")}) + $.t("misc.disappears",{quest: $.t("mainquests.label.mists")}) + $.t("entrance.desc.entry")
	},{
		coords: [[115.359,130.485]],
		label: $.t("sidebar.entrance"),
		popup: $.t("entrance.desc.entry")
	},{
		coords: [[134.938,103.657]],
		label: $.t("sidebar.entrance"),
		popup: $.t("entrance.desc.entry")
	},{
		coords: [[138.688,124.406]],
		label: $.t("sidebar.entrance"),
		popup: $.t("entrance.desc.entry")
	},{
		coords: [[102.687,168.625]],
		label: $.t("sidebar.entrance"),
		popup: $.t("entrance.desc.entry")
	},{
		coords: [[105.489,161.219]],
		label: $.t("sidebar.entrance"),
		popup: $.t("entrance.desc.entry")
	},{
		coords: [[113.891,164.422]],
		label: $.t("sidebar.entrance"),
		popup: $.t("entrance.desc.entry")
	},{
		coords: [[117.015,156.516]],
		label: $.t("sidebar.entrance"),
		popup: $.t("entrance.desc.entry")
	},{
		coords: [[142.750,142.281]],
		label: $.t("sidebar.entrance"),
		popup: $.t("entrance.desc.entry")
	},{
		coords: [[142.500,132.375]],
		label: $.t("sidebar.entrance"),
		popup: $.t("entrance.desc.entry")
	},{
		coords: [[137.437,164.406]],
		label: $.t("sidebar.entrance") + '*',
		popup: $.t("misc.active",{quest: $.t("sidequests.label.practicum")}) + $.t("entrance.desc.entry")
	},{
		coords: [[150.719,151.218]],
		label: $.t("sidebar.entrance"),
		popup: $.t("entrance.desc.entry")
	},{
		coords: [[135.937,161.875]],
		label: $.t("sidebar.entrance"),
		popup: $.t("entrance.desc.entry")
	},{
		coords: [[135.828,162.797]],
		label: $.t("sidebar.entrance"),
		popup: $.t("entrance.desc.entry")
	},{
		coords: [[136.110,163.953]],
		label: $.t("sidebar.entrance"),
		popup: $.t("entrance.desc.entry")
	},{
		coords: [[159.094,136.236]],
		label: $.t("sidebar.entrance") + '*',
		popup: $.t("misc.active",{quest: $.t("mainquests.label.sunstone")}) + $.t("entrance.desc.entry")
	},{
		coords: [[127.625,226.687]],
		label: $.t("sidebar.entrance"),
		popup: $.t("entrance.desc.entry")
	},{
		coords: [[128.906,226.516]],
		label: $.t("sidebar.entrance"),
		popup: $.t("entrance.desc.entry")
	},{
		coords: [[139.125,216.484]],
		label: $.t("sidebar.entrance"),
		popup: $.t("entrance.desc.entry")
	},{
		coords: [[96.781,59.187]],
		label: $.t("sidebar.entrance"),
		popup: $.t("entrance.desc.entry")
	},{
		coords: [[164.969,66.563]],
		label: $.t("sidebar.entrance"),
		popup: $.t("entrance.desc.entry")
	},{
		coords: [[145.453,132.031]],
		label: $.t("sidebar.entrance"),
		popup: $.t("entrance.desc.exit")
	},{
		coords: [[136.188,165.578]],
		label: $.t("sidebar.entrance"),
		popup: $.t("entrance.desc.exit")
	},{
		coords: [[190.031,174.719]],
		label: $.t("sidebar.entrance"),
		popup: $.t("entrance.desc.exit")
	},{
		coords: [[196.468,176.375]],
		label: $.t("sidebar.entrance"),
		popup: $.t("entrance.desc.exit")
	},{
		coords: [[133.156,148.390]],
		label: $.t("sidebar.entrance"),
		popup: $.t("entrance.desc.exit")
	},{
		coords: [[131.234,148.219]],
		label: $.t("sidebar.entrance"),
		popup: $.t("entrance.desc.exit")
	},{
		coords: [[102.406,116.578]],
		label: $.t("sidebar.entrance"),
		popup: $.t("entrance.desc.exit")
	},{
		coords: [[114.515,110.750]],
		label: $.t("sidebar.entrance"),
		popup: $.t("entrance.desc.exit")
	},{
		coords: [[154.141,121.906]],
		label: $.t("sidebar.entrance") + '*',
		popup: $.t("misc.active",{quest: $.t("sidequests.label.gambit")}) + $.t("entrance.desc.exit")
	},{
		coords: [[108.875,53.500]],
		label: $.t("sidebar.entrance"),
		popup: $.t("entrance.desc.entry")
	},{
		coords: [[111.688,56.437]],
		label: $.t("sidebar.entrance"),
		popup: $.t("entrance.desc.entry")
	},{
		coords: [[112.969,55.281]],
		label: $.t("sidebar.entrance"),
		popup: $.t("entrance.desc.entry")
	},{
		coords: [[114.343,54.500]],
		label: $.t("sidebar.entrance"),
		popup: $.t("entrance.desc.entry")
	},{
		coords: [[94.218,59.000]],
		label: $.t("sidebar.entrance"),
		popup: $.t("entrance.desc.exit")
	},{
		coords: [[97.125,64.453]],
		label: $.t("sidebar.entrance"),
		popup: $.t("entrance.desc.exit")
	},{
		coords: [[97.218,63.953]],
		label: $.t("sidebar.entrance"),
		popup: $.t("entrance.desc.exit")
	},{
		coords: [[96.562,64.922]],
		label: $.t("sidebar.entrance"),
		popup: $.t("entrance.desc.exit")
	},{
		coords: [[97.907,62.766]],
		label: $.t("sidebar.entrance"),
		popup: $.t("entrance.desc.exit")
	},{
		coords: [[106.859,145.375]],
		label: $.t("sidebar.entrance") + '*',
		popup: $.t("misc.dactive",{quest: $.t("contracts.label.wanted")}) + $.t("entrance.desc.exit")
	},{
		coords: [[104.781,148.562]],
		label: $.t("sidebar.entrance") + '*',
		popup: $.t("misc.active",{quest: $.t("contracts.label.wanted")}) + $.t("entrance.desc.entry")
	},{
		coords: [[122.016,137.641]],
		label: $.t("sidebar.entrance"),
		popup: $.t("entrance.desc.exit")
	},{
		coords: [[197.562,179.378]],
		label: $.t("sidebar.entrance"),
		popup: $.t("entrance.desc.exit")
	},{
		coords: [[102.750,64.390]],
		label: $.t("sidebar.entrance"),
		popup: $.t("entrance.desc.exit")
	}],

	//------------------------------------------------Events------------------------------------------------
	event: [{
		coords: [[117.251,109.563]],
		label: $.t("event.label.wild"),
		popup: $.t("event.desc.wild")
	},{
		coords: [[102.345,116.860]],
		label: $.t("event.label.farting") + ' (' + $.t("misc.underground") + ')',
		popup: $.t("event.desc.farting") + $.t("<br />") + $.t("misc.entrance1",{x1: $.t("<a href='#6/-57.017/-49.812\'>"), end: $.t("</a>")})
	},{
		coords: [[117.703,113.172]],
		label: $.t("event.label.children2"),
		popup: $.t("event.desc.children2")
	},{
		coords: [[121.329,114.297]],
		label: $.t("event.label.siren"),
		popup: $.t("event.desc.siren")
	},{
		coords: [[65.079,197.359]],
		label: $.t("event.label.hemdall"),
		popup: $.t("event.desc.hemdall")
	},{
		coords: [[114.376,147.094]],
		label: $.t("event.label.woe"),
		popup: $.t("event.desc.woe")
	},{
		coords: [[151.078,122.609]],
		label: $.t("event.label.hammond"),
		popup: $.t("event.desc.hammond") + $.t("misc.dactive",{quest: $.t("sidequests.label.thread")})
	},{
		coords: [[150.391,151.672]],
		label: $.t("event.label.yustianna") + ' (' + $.t("misc.underground") + ')',
		popup: $.t("event.desc.yustianna") + $.t("<br />") + $.t("misc.entrance1",{x1: $.t("<a href='#6/-1.801/-1.099\'>"), end: $.t("</a>")})
	}],

	//------------------------------------------------Grindstone------------------------------------------------
	grindstone: [{
		coords: [[62.362,188.016]],
		label: $.t("sidebar.grindstone"),
		popup: $.t("grindstone.desc")
	},{
		coords: [[130.907,224.618]],
		label: $.t("sidebar.grindstone"),
		popup: $.t("grindstone.desc")
	},{
		coords: [[130.494,221.514]],
		label: $.t("sidebar.grindstone"),
		popup: $.t("grindstone.desc")
	},{
		coords: [[127.125,212.375]],
		label: $.t("sidebar.grindstone"),
		popup: $.t("grindstone.desc")
	},{
		coords: [[193.734,180.328]],
		label: $.t("sidebar.grindstone"),
		popup: $.t("grindstone.desc")
	},{
		coords: [[177.172,72.813]],
		label: $.t("sidebar.grindstone"),
		popup: $.t("grindstone.desc")
	},{
		coords: [[94.813,125.578]],
		label: $.t("sidebar.grindstone"),
		popup: $.t("grindstone.desc")
	},{
		coords: [[121.547,107.203]],
		label: $.t("sidebar.grindstone"),
		popup: $.t("grindstone.desc")
	},{
		coords: [[134.750,137.407]],
		label: $.t("sidebar.grindstone"),
		popup: $.t("grindstone.desc")
	},{
		coords: [[153.797,122.875]],
		label: $.t("sidebar.grindstone"),
		popup: $.t("grindstone.desc")
	}],

	//------------------------------------------------Guarded Treasure------------------------------------------------
	guarded: [{
		coords: [[72.594,166.469]],
		label: $.t("sidebar.guarded"),
		popup: $.t("guarded.desc")
	},{
		coords: [[114.938,66.250]],
		label: $.t("sidebar.guarded"),
		popup: $.t("guarded.desc")
	},{
		coords: [[81.548,38.062]],
		label: $.t("sidebar.guarded"),
		popup: $.t("guarded.desc")
	},{
		coords: [[66.671,183.172]],
		label: $.t("sidebar.guarded"),
		popup: $.t("guarded.desc")
	},{
		coords: [[135.594,212.719]],
		label: $.t("sidebar.guarded"),
		popup: $.t("guarded.desc")
	},{
		coords: [[114.234,125.234]],
		label: $.t("sidebar.guarded"),
		popup: $.t("guarded.desc")
	},{
		coords: [[156.125,139.375]],
		label: $.t("sidebar.guarded"),
		popup: $.t("guarded.desc")
	},{
		coords: [[136.203,128.735]],
		label: $.t("sidebar.guarded"),
		popup: $.t("guarded.desc")
	},{
		coords: [[134.594,168.562]],
		label: $.t("sidebar.guarded"),
		popup: $.t("guarded.desc")
	},{
		coords: [[107.063,106.906]],
		label: $.t("sidebar.guarded"),
		popup: $.t("guarded.desc")
	},{
		coords: [[142.218,121.062]],
		label: $.t("sidebar.guarded"),
		popup: $.t("guarded.desc")
	},{
		coords: [[79.439,148.000]],
		label: $.t("sidebar.guarded"),
		popup: $.t("guarded.desc")
	},{
		coords: [[87.968,140.688]],
		label: $.t("sidebar.guarded"),
		popup: $.t("guarded.desc")
	},{
		coords: [[132.531,148.343]],
		label: $.t("sidebar.guarded") + ' (' + $.t("misc.underground") + ')',
		popup: $.t("guarded.desc")
	},{
		coords: [[197.563,106.250]],
		label: $.t("sidebar.guarded"),
		popup: $.t("guarded.desc")
	},{
		coords: [[200.063,130.187]],
		label: $.t("sidebar.guarded"),
		popup: $.t("guarded.desc")
	},{
		coords: [[205.125,133.313]],
		label: $.t("sidebar.guarded"),
		popup: $.t("guarded.desc")
	},{
		coords: [[207.187,139.375]],
		label: $.t("sidebar.guarded"),
		popup: $.t("guarded.desc")
	},{
		coords: [[202.688,150.812]],
		label: $.t("sidebar.guarded"),
		popup: $.t("guarded.desc")
	},{
		coords: [[172.844,217.000]],
		label: $.t("sidebar.guarded"),
		popup: $.t("guarded.desc")
	},{
		coords: [[199.375,122.938]],
		label: $.t("sidebar.guarded"),
		popup: $.t("guarded.desc")
	},{
		coords: [[80.843,177.281]],
		label: $.t("sidebar.guarded"),
		popup: $.t("guarded.desc")
	}],

	//------------------------------------------------Gwent Player------------------------------------------------
	gwent: [{
		coords: [[62.036,187.006]],
		label: $.t("sidebar.gwent"),
		popupTitle: $.t("sidebar.innkeep") + ' - ' +  $.t("sidebar.gwent"),
		popup: $.t("gwent.desc.player")
	},{
		coords: [[62.378,187.728]],
		label: $.t("sidebar.gwent"),
		popupTitle: $.t("sidebar.blacksmith") + ' - ' +  $.t("sidebar.gwent"),
		popup: $.t("gwent.desc.player")
	},{
		coords: [[130.269,222.871]],
		label: $.t("sidebar.gwent"),
		popupTitle: $.t("sidebar.shopkeeper") + ' - ' +  $.t("sidebar.gwent"),
		popup: $.t("gwent.desc.player")
	},{
		coords: [[63.968,188.016]],
		label: $.t("sidebar.gwent"),
		popupTitle: $.t("sidebar.shopkeeper") + ' - ' +  $.t("sidebar.gwent"),
		popup: $.t("gwent.desc.player")
	},{
		coords: [[130.449,223.817]],
		label: $.t("sidebar.gwent"),
		popupTitle: $.t("sidebar.innkeep") + ' - ' +  $.t("sidebar.gwent"),
		popup: $.t("gwent.desc.player")
	},{
		coords: [[130.831,225.001]],
		label: $.t("sidebar.gwent"),
		popupTitle: $.t("sidebar.blacksmith") + ' - ' +  $.t("sidebar.gwent"),
		popup: $.t("gwent.desc.player")
	},{
		coords: [[130.488,222.236]],
		label: $.t("sidebar.gwent"),
		popupTitle: $.t("sidebar.armourer") + ' - ' +  $.t("sidebar.gwent"),
		popup: $.t("gwent.desc.player")
	},{
		coords: [[193.960,179.167]],
		label: $.t("sidebar.gwent"),
		popupTitle: $.t("sidebar.blacksmith") + ' - ' +  $.t("sidebar.gwent"),
		popup: $.t("gwent.desc.player")
	},{
		coords: [[193.924,180.892]],
		label: $.t("sidebar.gwent"),
		popupTitle: $.t("sidebar.innkeep") + ' - ' +  $.t("sidebar.gwent"),
		popup: $.t("gwent.desc.player")
	},{
		coords: [[192.424,180.048]],
		label: $.t("sidebar.gwent"),
		popupTitle: $.t("sidebar.armourer") + ' - ' +  $.t("sidebar.gwent"),
		popup: $.t("gwent.desc.player")
	},{
		coords: [[177.054,72.420]],
		label: $.t("sidebar.gwent"),
		popupTitle: $.t("sidebar.blacksmith") + ' - ' +  $.t("sidebar.gwent"),
		popup: $.t("gwent.desc.player")
	},{
		coords: [[175.505,73.169]],
		label: $.t("sidebar.gwent"),
		popupTitle: $.t("sidebar.shopkeeper") + ' - ' +  $.t("sidebar.gwent"),
		popup: $.t("gwent.desc.player")
	},{
		coords: [[175.506,71.787]],
		label: $.t("sidebar.gwent"),
		popupTitle: $.t("sidebar.innkeep") + ' - ' +  $.t("sidebar.gwent"),
		popup: $.t("gwent.desc.player")
	},{
		coords: [[94.733,125.273]],
		label: $.t("sidebar.gwent"),
		popupTitle: $.t("sidebar.armourer") + ' - ' +  $.t("sidebar.gwent"),
		popup: $.t("gwent.desc.player")
	},{
		coords: [[95.533,125.153]],
		label: $.t("sidebar.gwent"),
		popupTitle: $.t("sidebar.blacksmith") + ' - ' +  $.t("sidebar.gwent"),
		popup: $.t("gwent.desc.player")
	},{
		coords: [[92.269,118.049]],
		label: $.t("sidebar.gwent"),
		popupTitle: $.t("sidebar.shopkeeper") + ' - ' +  $.t("sidebar.gwent"),
		popup: $.t("gwent.desc.player")
	},{
		coords: [[119.002,108.001]],
		label: $.t("sidebar.gwent"),
		popupTitle: $.t("sidebar.innkeep") + ' - ' +  $.t("sidebar.gwent"),
		popup: $.t("gwent.desc.player")
	},{
		coords: [[121.467,106.854]],
		label: $.t("sidebar.gwent"),
		popupTitle: $.t("sidebar.blacksmith") + ' - ' +  $.t("sidebar.gwent"),
		popup: $.t("gwent.desc.player")
	},{
		coords: [[123.496,129.377]],
		label: $.t("sidebar.gwent") + '*',
		popupTitle: $.t("sidebar.blacksmith") + ' - ' +  $.t("sidebar.gwent") + '*',
		popup: $.t("gwent.desc.player") + $.t("pid.rescue",{x1: $.t("<a href='#6/-33.633/-40.298\'>"), end: $.t("</a>")})
	},{
		coords: [[123.121,130.783]],
		label: $.t("sidebar.gwent"),
		popupTitle: $.t("sidebar.shopkeeper") + ' - ' +  $.t("sidebar.gwent"),
		popup: $.t("gwent.desc.player")
	},{
		coords: [[103.160,142.236]],
		label: $.t("sidebar.gwent"),
		popupTitle: $.t("sidebar.shopkeeper") + ' - ' +  $.t("sidebar.gwent"),
		popup: $.t("gwent.desc.player")
	},{
		coords: [[102.630,141.111]],
		label: $.t("sidebar.gwent"),
		popupTitle: $.t("sidebar.blacksmith") + ' - ' +  $.t("sidebar.gwent"),
		popup: $.t("gwent.desc.player")
	},{
		coords: [[154.195,123.548]],
		label: $.t("sidebar.gwent"),
		popupTitle: $.t("sidebar.armourer") + ' - ' +  $.t("sidebar.gwent"),
		popup: $.t("gwent.desc.player")
	},{
		coords: [[154.306,123.236]],
		label: $.t("sidebar.gwent"),
		popupTitle: $.t("sidebar.blacksmith") + ' - ' +  $.t("sidebar.gwent"),
		popup: $.t("gwent.desc.player")
	},{
		coords: [[129.145,150.236]],
		label: $.t("sidebar.gwent"),
		popupTitle: $.t("sidebar.shopkeeper") + ' - ' +  $.t("sidebar.gwent"),
		popup: $.t("gwent.desc.player")
	},{
		coords: [[150.484,126.047]],
		label: $.t("sidebar.gwent"),
		popupTitle: $.t("sidebar.shopkeeper") + ' - ' +  $.t("sidebar.gwent"),
		popup: $.t("gwent.desc.player")
	},{
		coords: [[147.728,127.533]],
		label: $.t("sidebar.gwent"),
		popupTitle: $.t("sidebar.herbalist") + ' - ' +  $.t("sidebar.gwent"),
		popup: $.t("gwent.desc.player")
	},{
		coords: [[149.728,126.423]],
		label: $.t("sidebar.gwent"),
		popupTitle: $.t("sidebar.innkeep") + ' - ' +  $.t("sidebar.gwent"),
		popup: $.t("gwent.desc.player")
	},{
		coords: [[121.516,147.000]],
		label: $.t("sidebar.gwent"),
		popupTitle: $.t("sidebar.herbalist") + ' - ' +  $.t("sidebar.gwent"),
		popup: $.t("gwent.desc.player")
	},{
		coords: [[129.641,131.875]],
		label: $.t("sidebar.gwent"),
		popupTitle: $.t("sidebar.shopkeeper") + ' - ' +  $.t("sidebar.gwent"),
		popup: $.t("gwent.desc.player")
	}],
	
	//------------------------------------------------Gwent Quest------------------------------------------------
	gwentquest: [{
		coords: [[136.125,165.313]],
		label: $.t("sidebar.gwentquest") + '*',
		popupTitle: $.t("gwentquest.players.ermion") + ' - ' +  $.t("sidebar.gwentquest"),
		popup: $.t("misc.active",{quest: $.t("mainquests.label.echoes")}) + $.t("gwentquest.desc.quest",{quest: $.t("gwentquest.label") + $.t(": ") + $.t("sidequests.label.gw_sk")})
	},{
		coords: [[137.703,164.500]],
		label: $.t("sidebar.gwentquest") + '*',
		popupTitle: $.t("s:alchemy.gremist") + ' - ' +  $.t("sidebar.gwentquest") + '*',
		popup: $.t("misc.active",{quest: $.t("sidequests.label.practicum")}) + $.t("misc.active",{quest: $.t("sidequests.label.gw_sk") + ' - ' + $.t("gwentquest.players.ermion")}) + $.t("gwentquest.desc.quest",{quest: $.t("gwentquest.label") + $.t(": ") + $.t("sidequests.label.gw_sk")})
	},{
		coords: [[151.625,122.640]],
		label: $.t("sidebar.gwentquest") + '*',
		popupTitle: $.t("gwentquest.players.crach") + ' - ' +  $.t("sidebar.gwentquest") + '*',
		popup: $.t("misc.active",{quest: $.t("mainquests.label.king")}) + $.t("misc.active",{quest: $.t("sidequests.label.gw_sk") + ' - ' + $.t("gwentquest.players.ermion")}) + $.t("gwentquest.desc.quest",{quest: $.t("gwentquest.label") + $.t(": ") + $.t("sidequests.label.gw_sk")})
	},{
		coords: [[149.391,127.859]],
		label: $.t("sidebar.gwentquest"),
		popupTitle: $.t("gwentquest.players.sjusta") + ' - ' +  $.t("sidebar.gwentquest"),
		popup: $.t("gwentquest.desc.quest",{quest: $.t("gwentquest.label") + $.t(": ") + $.t("misc.active",{quest: $.t("sidequests.label.gw_sk") + ' - ' + $.t("gwentquest.players.crach")}) + $.t("sidequests.label.gw_sk")})
	},{
		coords: [[94.437,124.235]],
		label: $.t("sidebar.gwentquest") + '*',
		popupTitle: $.t("gwentquest.players.lugos") + ' - ' +  $.t("sidebar.gwentquest") + '*',
		popup: $.t("misc.active",{quest: $.t("mainquests.label.king")}) + $.t("misc.active",{quest: $.t("sidequests.label.gw_sk") + ' - ' + $.t("s:alchemy.gremist")}) + $.t("gwentquest.desc.quest",{quest: $.t("gwentquest.label") + $.t(": ") + $.t("sidequests.label.gw_sk")})
	}],
	
	//------------------------------------------------Hanse Base------------------------------------------------
	hansebase: [],

	//------------------------------------------------Harbor------------------------------------------------
	harbor: [{
		coords: [[147.672,123.203]],
		label: $.t("sidebar.harbor"),
		popup: $.t("harbor.desc")
	},{
		coords: [[160.063,135.641]],
		label: $.t("sidebar.harbor"),
		popup: $.t("harbor.desc")
	},{
		coords: [[130.843,131.594]],
		label: $.t("sidebar.harbor"),
		popup: $.t("harbor.desc")
	},{
		coords: [[122.281,105.391]],
		label: $.t("sidebar.harbor"),
		popup: $.t("harbor.desc")
	},{
		coords: [[134.875,98.391]],
		label: $.t("sidebar.harbor"),
		popup: $.t("harbor.desc")
	},{
		coords: [[109.735,76.110]],
		label: $.t("sidebar.harbor"),
		popup: $.t("harbor.desc")
	},{
		coords: [[117.453,69.297]],
		label: $.t("sidebar.harbor"),
		popup: $.t("harbor.desc")
	},{
		coords: [[92.187,114.875]],
		label: $.t("sidebar.harbor"),
		popup: $.t("harbor.desc")
	},{
		coords: [[65.063,189.969]],
		label: $.t("sidebar.harbor"),
		popup: $.t("harbor.desc")
	},{
		coords: [[100.969,143.218]],
		label: $.t("sidebar.harbor"),
		popup: $.t("harbor.desc")
	},{
		coords: [[98.406,149.906]],
		label: $.t("sidebar.harbor"),
		popup: $.t("harbor.desc")
	},{
		coords: [[102.343,170.344]],
		label: $.t("sidebar.harbor"),
		popup: $.t("harbor.desc")
	},{
		coords: [[133.094,223.657]],
		label: $.t("sidebar.harbor"),
		popup: $.t("harbor.desc")
	},{
		coords: [[128.031,171.156]],
		label: $.t("sidebar.harbor"),
		popup: $.t("harbor.desc")
	},{
		coords: [[190.719,179.469]],
		label: $.t("sidebar.harbor"),
		popup: $.t("harbor.desc")
	},{
		coords: [[176.688,75.218]],
		label: $.t("sidebar.harbor"),
		popup: $.t("harbor.desc")
	},{
		coords: [[141.594,51.688]],
		label: $.t("sidebar.harbor"),
		popup: $.t("harbor.desc")
	},{
		coords: [[124.875,210.750]],
		label: $.t("sidebar.harbor"),
		popup: $.t("harbor.desc")
	}],

	//------------------------------------------------Herbalist------------------------------------------------
	herbalist: [{
		coords: [[127.562,162.469]],
		label: $.t("sidebar.herbalist"),
		popup: $.t("alchemy.desc")
	},{
		coords: [[147.656,127.391]],
		label: $.t("sidebar.herbalist"),
		popup: $.t("alchemy.desc")
	},{
		coords: [[99.344,149.360]],
		label: $.t("sidebar.herbalist") + '*',
		popup: $.t("misc.liberated") + $.t("alchemy.desc")
	},{
		coords: [[121.750,147.047]],
		label: $.t("sidebar.herbalist") + '*',
		popup: $.t("alchemy.desc") + $.t("pid.rescue",{x1: $.t("<a href='#6/-38.994/-6.372\'>"), end: $.t("</a>")})
	}],

	//------------------------------------------------Hidden Treasure------------------------------------------------
	hidden: [{
		coords: [[189.859,185.125]],
		label: $.t("sidebar.hidden"),
		popupTitle: $.t("treasure.label") +$.t(": ") +$.t("sidequests.label.tr_nilf"),
		popup: $.t("sidequests.desc.tr_nilf")
	},{
		coords: [[115.000,56.828]],
		label: $.t("sidebar.hidden"),
		popupTitle: $.t("treasure.label") +$.t(": ") +$.t("sidequests.label.tr_precious"),
		popup: $.t("sidequests.desc.tr_precious")
	},{
		coords: [[103.312,45.281]],
		label: $.t("sidebar.hidden"),
		popup: $.t("hidden.desc")
	},{
		coords: [[120.890,139.141]],
		label: $.t("sidebar.hidden"),
		popupTitle: $.t("treasure.label") +$.t(": ") +$.t("sidequests.label.tr_inheritance"),
		popup: $.t("sidequests.desc.tr_inheritance")
	},{
		coords: [[122.886,153.860]],
		label: $.t("sidebar.hidden"),
		popupTitle: $.t("treasure.label") +$.t(": ") +$.t("sidequests.label.tr_marks"),
		popup: $.t("sidequests.desc.tr_marks")
	},{
		coords: [[153.437,136.562]],
		label: $.t("sidebar.hidden") + '*' + ' (' + $.t("misc.underground") + ')',
		popup: $.t("misc.active",{quest: $.t("mainquests.label.sunstone")}) + $.t("hidden.desc") + $.t("<br />") + $.t("misc.entrance2",{x1: $.t("<a href='#6/9.926/-22.168\'>"), x2: $.t("<a href='#6/-2.416/-21.841\'>"), end: $.t("</a>")})
	},{
		coords: [[181.968,136.688]],
		label: $.t("sidebar.hidden"),
		popupTitle: $.t("treasure.label") +$.t(": ") +$.t("sidequests.label.tr_unlucky"),
		popup: $.t("sidequests.desc.tr_unlucky")
	},{
		coords: [[89.500,181.437]],
		label: $.t("sidebar.hidden"),
		popupTitle: $.t("treasure.label") +$.t(": ") +$.t("sidequests.label.tr_ironsides"),
		popup: $.t("sidequests.desc.tr_ironsides")
	},{
		coords: [[60.062,122.156]],
		label: $.t("sidebar.hidden"),
		popup: $.t("hidden.desc")
	},{
		coords: [[211.188,89.313]],
		label: $.t("sidebar.hidden"),
		popup: $.t("hidden.desc")
	},{
		coords: [[171.375,77.875]],
		label: $.t("sidebar.hidden"),
		popupTitle: $.t("treasure.label") +$.t(": ") +$.t("sidequests.label.tr_dare"),
		popup: $.t("sidequests.desc.tr_dare")
	},{
		coords: [[171.969,83.750]],
		label: $.t("sidebar.hidden"),
		popup: $.t("hidden.guarded")
	},{
		coords: [[103.797,65.797]],
		label: $.t("sidebar.hidden"),
		popupTitle: $.t("treasure.label") +$.t(": ") +$.t("sidequests.label.tr_shortcut"),
		popup: $.t("sidequests.desc.tr_shortcut")
	},{
		coords: [[143.375,81.813]],
		label: $.t("sidebar.hidden"),
		popup: $.t("hidden.guarded")
	},{
		coords: [[58.577,182.547]],
		label: $.t("sidebar.hidden"),
		popupTitle: $.t("treasure.label") +$.t(": ") +$.t("sidequests.label.tr_depths"),
		popup: $.t("sidequests.desc.tr_depths")
	},{
		coords: [[124.250,152.188]],
		label: $.t("sidebar.hidden"),
		popupTitle: $.t("treasure.label") +$.t(": ") +$.t("sidequests.label.tr_praised"),
		popup: $.t("sidequests.desc.tr_praised")
	},{
		coords: [[99.985,149.344]],
		label: $.t("sidebar.hidden"),
		popupTitle: $.t("treasure.label") +$.t(": ") +$.t("sidequests.label.tr_fortune"),
		popup: $.t("sidequests.desc.tr_fortune")
	},{
		coords: [[127.719,115.906]],
		label: $.t("sidebar.hidden"),
		popup: $.t("hidden.guarded")
	},{
		coords: [[76.313,155.781]],
		label: $.t("sidebar.hidden"),
		popup: $.t("hidden.guarded")
	},{
		coords: [[136.156,173.687]],
		label: $.t("sidebar.hidden"),
		popup: $.t("hidden.guarded")
	},{
		coords: [[134.312,102.344]],
		label: $.t("sidebar.hidden"),
		popupTitle: $.t("treasure.label") +$.t(": ") +$.t("sidequests.label.tr_pearls"),
		popup: $.t("sidequests.desc.tr_pearls")
	},{
		coords: [[154.906,96.375]],
		label: $.t("sidebar.hidden"),
		popup: $.t("hidden.guarded")
	},{
		coords: [[175.656,105.375]],
		label: $.t("sidebar.hidden"),
		popup: $.t("hidden.guarded")
	},{
		coords: [[193.593,146.656]],
		label: $.t("sidebar.hidden"),
		popup: $.t("hidden.guarded")
	},{
		coords: [[103.454,71.829]],
		label: $.t("treasure.label") +$.t(": ") +$.t("sidequests.label.tr_ruins"),
		popup: $.t("sidequests.desc.tr_ruins")
	}],

	//------------------------------------------------Hollow Treasure------------------------------------------------
	hollow: [{
		coords: [[135.062,145.250]],
		label: $.t("sidebar.hollow"),
		popup: $.t("hollow.desc")
	},{
		coords: [[134.094,144.609]],
		label: $.t("sidebar.hollow"),
		popup: $.t("hollow.desc")
	},{
		coords: [[134.391,144.906]],
		label: $.t("sidebar.hollow"),
		popup: $.t("hollow.desc")
	},{
		coords: [[135.656,145.797]],
		label: $.t("sidebar.hollow"),
		popup: $.t("hollow.desc")
	},{
		coords: [[136.125,145.156]],
		label: $.t("sidebar.hollow"),
		popup: $.t("hollow.desc")
	},{
		coords: [[138.718,145.062]],
		label: $.t("sidebar.hollow"),
		popup: $.t("hollow.desc")
	},{
		coords: [[141.578,146.797]],
		label: $.t("sidebar.hollow"),
		popup: $.t("hollow.desc")
	},{
		coords: [[144.375,146.219]],
		label: $.t("sidebar.hollow"),
		popup: $.t("hollow.desc")
	},{
		coords: [[141.094,143.063]],
		label: $.t("sidebar.hollow"),
		popup: $.t("hollow.desc")
	},{
		coords: [[139.531,145.125]],
		label: $.t("sidebar.hollow"),
		popup: $.t("hollow.desc")
	},{
		coords: [[135.797,146.656]],
		label: $.t("sidebar.hollow"),
		popup: $.t("hollow.desc")
	},{
		coords: [[134.453,146.734]],
		label: $.t("sidebar.hollow"),
		popup: $.t("hollow.desc")
	},{
		coords: [[133.812,146.187]],
		label: $.t("sidebar.hollow"),
		popup: $.t("hollow.desc")
	},{
		coords: [[129.985,144.937]],
		label: $.t("sidebar.hollow"),
		popup: $.t("hollow.desc")
	},{
		coords: [[134.234,149.094]],
		label: $.t("sidebar.hollow"),
		popup: $.t("hollow.desc")
	},{
		coords: [[128.875,143.484]],
		label: $.t("sidebar.hollow"),
		popup: $.t("hollow.desc")
	},{
		coords: [[130.078,143.359]],
		label: $.t("sidebar.hollow"),
		popup: $.t("hollow.desc")
	},{
		coords: [[134.422,143.297]],
		label: $.t("sidebar.hollow"),
		popup: $.t("hollow.desc")
	},{
		coords: [[148.875,147.281]],
		label: $.t("sidebar.hollow"),
		popup: $.t("hollow.desc")
	},{
		coords: [[117.750,121.703]],
		label: $.t("sidebar.hollow"),
		popup: $.t("hollow.desc")
	},{
		coords: [[180.625,81.578]],
		label: $.t("sidebar.hollow"),
		popup: $.t("hollow.desc")
	},{
		coords: [[182.140,137.391]],
		label: $.t("sidebar.hollow"),
		popup: $.t("hollow.desc")
	},{
		coords: [[203.015,150.140]],
		label: $.t("sidebar.hollow"),
		popup: $.t("hollow.desc")
	},{
		coords: [[202.313,150.828]],
		label: $.t("sidebar.hollow"),
		popup: $.t("hollow.desc")
	},{
		coords: [[156.125,192.000]],
		label: $.t("sidebar.hollow"),
		popup: $.t("hollow.desc")
	},{
		coords: [[108.250,106.593]],
		label: $.t("sidebar.hollow"),
		popup: $.t("hollow.desc")
	},{
		coords: [[111.797,69.468]],
		label: $.t("sidebar.hollow"),
		popup: $.t("hollow.desc")
	},{
		coords: [[105.969,71.094]],
		label: $.t("sidebar.hollow"),
		popup: $.t("hollow.desc")
	},{
		coords: [[109.735,63.344]],
		label: $.t("sidebar.hollow"),
		popup: $.t("hollow.desc")
	},{
		coords: [[98.656,56.625]],
		label: $.t("sidebar.hollow"),
		popup: $.t("hollow.desc")
	},{
		coords: [[98.781,67.969]],
		label: $.t("sidebar.hollow"),
		popup: $.t("hollow.desc")
	},{
		coords: [[136.063,134.438]],
		label: $.t("sidebar.hollow"),
		popup: $.t("hollow.desc")
	},{
		coords: [[130.250,136.219]],
		label: $.t("sidebar.hollow"),
		popup: $.t("hollow.desc")
	},{
		coords: [[118.141,122.891]],
		label: $.t("sidebar.hollow"),
		popup: $.t("hollow.desc")
	},{
		coords: [[113.266,119.547]],
		label: $.t("sidebar.hollow"),
		popup: $.t("hollow.desc")
	},{
		coords: [[114.453,122.438]],
		label: $.t("sidebar.hollow"),
		popup: $.t("hollow.desc")
	},{
		coords: [[118.953,167.765]],
		label: $.t("sidebar.hollow"),
		popup: $.t("hollow.desc")
	},{
		coords: [[120.234,165.891]],
		label: $.t("sidebar.hollow"),
		popup: $.t("hollow.desc")
	},{
		coords: [[120.250,166.766]],
		label: $.t("sidebar.hollow"),
		popup: $.t("hollow.desc")
	},{
		coords: [[104.016,110.172]],
		label: $.t("sidebar.hollow"),
		popup: $.t("hollow.desc")
	},{
		coords: [[105.141,109.234]],
		label: $.t("sidebar.hollow"),
		popup: $.t("hollow.desc")
	},{
		coords: [[109.860,105.734]],
		label: $.t("sidebar.hollow"),
		popup: $.t("hollow.desc")
	},{
		coords: [[111.735,106.406]],
		label: $.t("sidebar.hollow"),
		popup: $.t("hollow.desc")
	},{
		coords: [[179.969,81.750]],
		label: $.t("sidebar.hollow"),
		popup: $.t("hollow.desc")
	},{
		coords: [[180.468,79.453]],
		label: $.t("sidebar.hollow"),
		popup: $.t("hollow.desc")
	},{
		coords: [[118.844,166.094]],
		label: $.t("sidebar.hollow"),
		popup: $.t("hollow.desc")
	},{
		coords: [[108.313,110.062]],
		label: $.t("sidebar.hollow"),
		popup: $.t("hollow.desc")
	},{
		coords: [[115.328,104.875]],
		label: $.t("sidebar.hollow"),
		popup: $.t("hollow.desc")
	},{
		coords: [[129.641,148.484]],
		label: $.t("sidebar.hollow"),
		popup: $.t("hollow.desc")
	},{
		coords: [[181.250,136.953]],
		label: $.t("sidebar.hollow"),
		popup: $.t("hollow.desc")
	},{
		coords: [[181.078,139.641]],
		label: $.t("sidebar.hollow"),
		popup: $.t("hollow.desc")
	},{
		coords: [[108.204,72.453]],
		label: $.t("sidebar.hollow"),
		popup: $.t("hollow.desc")
	},{
		coords: [[108.407,70.938]],
		label: $.t("sidebar.hollow"),
		popup: $.t("hollow.desc")
	},{
		coords: [[112.281,68.219]],
		label: $.t("sidebar.hollow"),
		popup: $.t("hollow.desc")
	},{
		coords: [[109.609,54.625]],
		label: $.t("sidebar.hollow"),
		popup: $.t("hollow.desc")
	},{
		coords: [[104.843,69.281]],
		label: $.t("sidebar.hollow"),
		popup: $.t("hollow.desc")
	},{
		coords: [[102.781,74.015]],
		label: $.t("sidebar.hollow"),
		popup: $.t("hollow.desc")
	}],
	
	//------------------------------------------------Honeycomb------------------------------------------------
	honeycomb: [{
		coords: [[143.359,127.438]],
		label: $.t("sidebar.honeycomb"),
		popup: $.t("honeycomb.desc")
	},{
		coords: [[117.984,126.703]],
		label: $.t("sidebar.honeycomb"),
		popup: $.t("honeycomb.desc")
	},{
		coords: [[118.656,126.547]],
		label: $.t("sidebar.honeycomb"),
		popup: $.t("honeycomb.desc")
	},{
		coords: [[98.422,111.875]],
		label: $.t("sidebar.honeycomb"),
		popup: $.t("honeycomb.desc")
	},{
		coords: [[99.547,115.203]],
		label: $.t("sidebar.honeycomb"),
		popup: $.t("honeycomb.desc")
	},{
		coords: [[99.953,115.250]],
		label: $.t("sidebar.honeycomb"),
		popup: $.t("honeycomb.desc")
	},{
		coords: [[117.625,106.328]],
		label: $.t("sidebar.honeycomb"),
		popup: $.t("honeycomb.desc")
	},{
		coords: [[117.109,106.750]],
		label: $.t("sidebar.honeycomb"),
		popup: $.t("honeycomb.desc")
	}],

	//------------------------------------------------Innkeep------------------------------------------------
	innkeep: [{
		coords: [[61.938,186.849]],
		label: $.t("sidebar.innkeep"),
		popupTitle: $.t("sidebar.innkeep") + ' - ' + $.t("s:innkeep.inns.harvikenInn"),
		popup: $.t("innkeep.desc.foodDrinkAndGwent")
	},{
		coords: [[130.375,223.625]],
		label: $.t("sidebar.innkeep"),
		popupTitle: $.t("sidebar.innkeep") + ' - ' + $.t("s:innkeep.inns.houseOfWarriors"),
		popup: $.t("innkeep.desc.foodAndDrink")
	},{
		coords: [[193.812,180.750]],
		label: $.t("sidebar.innkeep"),
		popupTitle: $.t("sidebar.innkeep") + ' - ' + $.t("s:innkeep.inns.uriallaHarbourInn"),
		popup: $.t("innkeep.desc.foodDrinkAndGwent")
	},{
		coords: [[175.406,71.610]],
		label: $.t("sidebar.innkeep"),
		popupTitle: $.t("sidebar.innkeep") + ' - ' + $.t("s:innkeep.inns.svorlagInn"),
		popup: $.t("innkeep.desc.foodDrinkAndGwent")
	},{
		coords: [[118.906,107.859]],
		label: $.t("sidebar.innkeep"),
		popupTitle: $.t("sidebar.innkeep") + ' - ' + $.t("s:innkeep.inns.arinbjornInn"),
		popup: $.t("innkeep.desc.foodDrinkAndGwent")
	},{
		coords: [[149.656,126.281]],
		label: $.t("sidebar.innkeep"),
		popupTitle: $.t("sidebar.innkeep") + ' - ' + $.t("s:innkeep.inns.theNewPort"),
		popup: $.t("innkeep.desc.foodDrinkAndGwent")
	}],

	//------------------------------------------------Knight in Distress------------------------------------------------
	kid: [],

	//------------------------------------------------Monster Den------------------------------------------------
	monsterden: [{
		coords: [[58.155,200.406]],
		label: $.t("sidebar.monsterden"),
		popup: $.t("monsterden.desc")
	},{
		coords: [[63.077,192.282]],
		label: $.t("sidebar.monsterden"),
		popup: $.t("monsterden.desc")
	},{
		coords: [[150.281,136.469]],
		label: $.t("sidebar.monsterden"),
		popup: $.t("monsterden.desc")
	},{
		coords: [[110.735,128.359]],
		label: $.t("sidebar.monsterden"),
		popup: $.t("monsterden.desc")
	},{
		coords: [[144.563,153.250]],
		label: $.t("sidebar.monsterden"),
		popup: $.t("monsterden.desc")
	},{
		coords: [[147.781,157.875]],
		label: $.t("sidebar.monsterden"),
		popup: $.t("monsterden.desc")
	}],

	//------------------------------------------------Monster Nest------------------------------------------------
	monsternest: [{
		coords: [[193.688,170.859]],
		label: $.t("sidebar.monsternest"),
		popup: $.t("monsternest.desc")
	},{
		coords: [[134.766,125.297]],
		label: $.t("sidebar.monsternest"),
		popup: $.t("monsternest.desc")
	},{
		coords: [[99.641,134.563]],
		label: $.t("sidebar.monsternest"),
		popup: $.t("monsternest.desc")
	},{
		coords: [[133.765,131.328]],
		label: $.t("sidebar.monsternest"),
		popup: $.t("monsternest.desc")
	},{
		coords: [[99.578,149.062]],
		label: $.t("sidebar.monsternest"),
		popup: $.t("monsternest.desc")
	}],

	//------------------------------------------------Notice Board------------------------------------------------
	notice: [{
		coords: [[130.969,223.281]],
		label: $.t("sidebar.notice"),
		popup: $.t("notice.desc")
	},{
		coords: [[176.037,72.844]],
		label: $.t("sidebar.notice"),
		popup: $.t("notice.desc")
	},{
		coords: [[93.718,121.000]],
		label: $.t("sidebar.notice"),
		popup: $.t("notice.desc")
	},{
		coords: [[118.219,107.203]],
		label: $.t("sidebar.notice"),
		popup: $.t("notice.desc")
	},{
		coords: [[131.610,134.219]],
		label: $.t("sidebar.notice"),
		popup: $.t("notice.desc")
	},{
		coords: [[104.406,141.094]],
		label: $.t("sidebar.notice"),
		popup: $.t("notice.desc")
	},{
		coords: [[129.234,150.656]],
		label: $.t("sidebar.notice"),
		popup: $.t("notice.desc")
	},{
		coords: [[147.078,126.985]],
		label: $.t("sidebar.notice"),
		popup: $.t("notice.desc")
	}],

	//------------------------------------------------Person in Distress------------------------------------------------
	pid: [{
		coords: [[126.578,123.344]],
		label: $.t("sidebar.pid"),
		popup: $.t("pid.desc") + $.t("pid.afterrescue",{x1: $.t("<a href='#6/-37.265/-32.014\'>"), end: $.t("</a>")})
	},{
		coords: [[121.843,147.469]],
		label: $.t("sidebar.pid"),
		popup: $.t("pid.desc") + $.t("pid.afterrescue",{x1: $.t("<a href='#6/-39.096/-6.965\'>"), end: $.t("</a>")})
	}],

	//------------------------------------------------Place of Power------------------------------------------------
	pop: [{
		coords: [[63.968,181.078]],
		label: $.t("sidebar.pop"),
		popupTitle: $.t("pop.popup",{sign: $.t("signs.yrden")}),
		popup: $.t("pop.desc")
	},{
		coords: [[198.407,177.531]],
		label: $.t("sidebar.pop"),
		popupTitle: $.t("pop.popup",{sign: $.t("signs.quen")}),
		popup: $.t("pop.desc")
	},{
		coords: [[178.031,66.266]],
		label: $.t("sidebar.pop"),
		popupTitle: $.t("pop.popup",{sign: $.t("signs.igni")}),
		popup: $.t("pop.desc")
	},{
		coords: [[101.969,117.437]],
		label: $.t("sidebar.pop"),
		popupTitle: $.t("pop.popup",{sign: $.t("signs.axii")}),
		popup: $.t("pop.desc")
	},{
		coords: [[133.891,126.047]],
		label: $.t("sidebar.pop"),
		popupTitle: $.t("pop.popup",{sign: $.t("signs.axii")}),
		popup: $.t("pop.desc")
	},{
		coords: [[127.797,163.172]],
		label: $.t("sidebar.pop"),
		popupTitle: $.t("pop.popup",{sign: $.t("signs.yrden")}),
		popup: $.t("pop.desc")
	},{
		coords: [[136.281,173.188]],
		label: $.t("sidebar.pop"),
		popupTitle: $.t("pop.popup",{sign: $.t("signs.aard")}),
		popup: $.t("pop.desc")
	},{
		coords: [[155.406,121.813]],
		label: $.t("sidebar.pop") + '*' + ' (' + $.t("misc.underground") + ')',
		popupTitle: $.t("pop.popup",{sign: $.t("signs.quen")}) + ' (' + $.t("misc.underground") + ')',
		popup: $.t("misc.active",{quest: $.t("sidequests.label.gambit")}) + $.t("pop.desc") + $.t("<br />") + $.t("misc.entrance1",{x1: $.t("<a href='#6/3.009/-42.319\'>"), end: $.t("</a>")})
	},{
		coords: [[155.125,133.719]],
		label: $.t("sidebar.pop") + '*' + ' (' + $.t("misc.underground") + ')',
		popupTitle: $.t("pop.popup",{sign: $.t("signs.igni")}) + ' (' + $.t("misc.underground") + ')',
		popup: $.t("misc.active",{quest: $.t("mainquests.label.sunstone")}) + $.t("pop.desc") + $.t("<br />") + $.t("misc.entrance2",{x1: $.t("<a href='#6/9.926/-22.168\'>"), x2: $.t("<a href='#6/-2.416/-21.841\'>"), end: $.t("</a>")})
	}],

	//------------------------------------------------Point of Interest------------------------------------------------
	poi: [{
		coords: [[167.750,194.563]],
		label: $.t("s:poi.label.gship"),
		popupTitle: $.t("s:poi.popupTitle.gship"),
		popup: $.t("s:poi.desc.gship")
	},{
		coords: [[149.328,153.062]],
		label: $.t("s:poi.label.poem"),
		popupTitle: $.t("s:poi.popupTitle.poem"),
		popup: $.t("s:poi.desc.poem")
	},{
		coords: [[127.422,116.469]],
		label: $.t("s:poi.label.birna") + '*',
		popupTitle: $.t("s:poi.popupTitle.birna"),
		popup: $.t("s:poi.desc.birna",{quest: $.t("sidequests.label.gambit")})
	},{
		coords: [[64.687,209.141]],
		label: $.t("s:poi.label.dowry"),
		popupTitle: $.t("s:poi.popupTitle.dowry"),
		popup: $.t("s:poi.desc.dowry",{quest: $.t("sidequests.label.price")})
	},{
		coords: [[109.438,67.016]],
		label: $.t("s:poi.label.nail"),
		popupTitle: $.t("s:poi.popupTitle.nail"),
		popup: $.t("s:poi.desc.nail",{quest: $.t("sidequests.label.undvik"), octo: $.t("<a href='#6/-53.357,/-120.432\'>") + $.t("s:poi.label.octo") + $.t("</a>")})
	},{
		coords: [[112.375,68.453]],
		label: $.t("s:poi.label.nail"),
		popupTitle: $.t("s:poi.popupTitle.nail"),
		popup: $.t("s:poi.desc.nail",{quest: $.t("sidequests.label.undvik"), octo: $.t("<a href='#6/-53.357,/-120.432\'>") + $.t("s:poi.label.octo") + $.t("</a>")})
	},{
		coords: [[103.407,72.859]],
		label: $.t("s:poi.label.nail"),
		popupTitle: $.t("s:poi.popupTitle.nail"),
		popup: $.t("s:poi.desc.nail",{quest: $.t("sidequests.label.undvik"), octo: $.t("<a href='#6/-53.357,/-120.432\'>") + $.t("s:poi.label.octo") + $.t("</a>")})
	},{
		coords: [[102.594,73.297]],
		label: $.t("s:poi.label.nail"),
		popupTitle: $.t("s:poi.popupTitle.nail"),
		popup: $.t("s:poi.desc.nail",{quest: $.t("sidequests.label.undvik"), octo: $.t("<a href='#6/-53.357,/-120.432\'>") + $.t("s:poi.label.octo") + $.t("</a>")})
	},{
		coords: [[107.594,65.578]],
		label: $.t("s:poi.label.twine"),
		popupTitle: $.t("s:poi.popupTitle.twine"),
		popup: $.t("s:poi.desc.nail",{quest: $.t("sidequests.label.undvik"), octo: $.t("<a href='#6/-53.357,/-120.432\'>") + $.t("s:poi.label.octo") + $.t("</a>")})
	},{
		coords: [[106.593,65.328]],
		label: $.t("s:poi.label.twine"),
		popupTitle: $.t("s:poi.popupTitle.twine"),
		popup: $.t("s:poi.desc.nail",{quest: $.t("sidequests.label.undvik"), octo: $.t("<a href='#6/-53.357,/-120.432\'>") + $.t("s:poi.label.octo") + $.t("</a>")})
	},{
		coords: [[106.969,66.359]],
		label: $.t("s:poi.label.octo"),
		popupTitle: $.t("s:poi.popupTitle.octo"),
		popup: $.t("s:poi.desc.octo",{quest: $.t("sidequests.label.undvik")})
	},{
		coords: [[108.532,56.125]],
		label: $.t("s:poi.label.horn"),
		popupTitle: $.t("s:poi.popupTitle.horn"),
		popup: $.t("s:poi.desc.horn")
	}],

	//------------------------------------------------Scavengers------------------------------------------------
	scavenger: [{
		coords: [[63.032,193.360]],
		label: $.t("scavenger.dia") + $.t("scavenger.name.fel") + $.t("scavenger.level.4") + ' (' + $.t("misc.underground") + ')',
		popup:$.t("scavenger.dia") + $.t("scavenger.name.fel") + $.t("scavenger.item.silver") + $.t("scavenger.level.4") + $.t("<br />") + $.t("misc.entrance1",{x1: $.t("<a href='#6/-77.133/56.646\'>"), end: $.t("</a>")})
	},{
		coords: [[143.188,152.547]],
		label: $.t("scavenger.dia") + $.t("scavenger.name.fel") + $.t("scavenger.level.4"),
		popup:$.t("scavenger.dia") + $.t("scavenger.name.fel") + $.t("scavenger.item.steel") + $.t("scavenger.level.4")
	},{
		coords: [[110.821,127.467]],
		label: $.t("scavenger.dia") + $.t("scavenger.name.gri") + $.t("scavenger.level.4"),
		popup:$.t("scavenger.dia") + $.t("scavenger.name.gri") + $.t("scavenger.item.silver") + $.t("scavenger.level.4")
	},{
		coords: [[80.241,145.884]],
		label: $.t("scavenger.dia") + $.t("scavenger.name.gri") + $.t("scavenger.level.3") + ' (' + $.t("misc.underground") + ')',
		popup:$.t("scavenger.dia") + $.t("scavenger.name.gri") + $.t("scavenger.item.silver") + $.t("scavenger.level.3") + $.t("<br />") + $.t("misc.entrance2",{x1: $.t("<a href='#6/-69.756/-8.503\'>"), x2: $.t("<a href='#6/-71.124/-8.525\'>"), end: $.t("</a>")})
	},{
		coords: [[120.812,141.656]],
		label: $.t("scavenger.dia") + $.t("scavenger.name.gri") + $.t("scavenger.level.4"),
		popup:$.t("scavenger.dia") + $.t("scavenger.name.gri") + $.t("scavenger.item.steel") + $.t("scavenger.level.4")
	},{
		coords: [[198.412,174.756]],
		label: $.t("scavenger.dia") + $.t("scavenger.name.gri") + $.t("scavenger.level.3"),
		popup:$.t("scavenger.dia") + $.t("scavenger.name.gri") + $.t("scavenger.item.steel") + $.t("scavenger.level.3")
	},{
		coords: [[103.126,166.047]],
		label: $.t("scavenger.dia") + $.t("scavenger.name.urs") + $.t("scavenger.level.2") + ' (' + $.t("misc.underground") + ')',
		popup:$.t("scavenger.dia") + $.t("scavenger.name.urs") + $.t("scavenger.item.armor") + $.t("scavenger.level.2") + $.t("<br />") + $.t("misc.entrance1",{x1: $.t("<a href='#6/-56.801/23.379\'>"), end: $.t("</a>")})
	},{
		coords: [[101.898,116.907]],
		label: $.t("scavenger.dia") + $.t("scavenger.name.urs") + $.t("scavenger.level.2") + ' (' + $.t("misc.underground") + ')',
		popup:$.t("scavenger.dia") + $.t("scavenger.name.urs") + $.t("scavenger.item.boot") + $.t("scavenger.level.2") + $.t("<br />") + $.t("misc.entrance1",{x1: $.t("<a href='#6/-57.017/-49.812\'>"), end: $.t("</a>")})
	},{
		coords: [[164.866,64.178]],
		label: $.t("scavenger.dia") + $.t("scavenger.name.urs") + $.t("scavenger.level.1") + ' (' + $.t("misc.underground") + ')',
		popup:$.t("scavenger.dia") + $.t("scavenger.name.urs") + $.t("scavenger.item.cross") + $.t("scavenger.level.1") + $.t("<br />") + $.t("misc.entrance2",{x1: $.t("<a href='#6/17.225/-123.64\'>"), x2: $.t("<a href='#6/17.937/-120.146\'>"), end: $.t("</a>")})
	},{
		coords: [[151.094,143.516]],
		label: $.t("scavenger.dia") + $.t("scavenger.name.urs") + $.t("scavenger.level.2"),
		popup:$.t("scavenger.dia") + $.t("scavenger.name.urs") + $.t("scavenger.item.gaunt") + $.t("scavenger.level.2")
	},{
		coords: [[155.917,139.911]],
		label: $.t("scavenger.dia") + $.t("scavenger.name.urs") + $.t("scavenger.level.1"),
		popup:$.t("scavenger.dia") + $.t("scavenger.name.urs") + $.t("scavenger.item.silver") + $.t("scavenger.level.1")
	},{
		coords: [[147.250,155.969]],
		label: $.t("scavenger.dia") + $.t("scavenger.name.urs") + $.t("scavenger.level.2") + ' (' + $.t("misc.underground") + ')',
		popup:$.t("scavenger.dia") + $.t("scavenger.name.urs") + $.t("scavenger.item.silver") + $.t("scavenger.level.2") + $.t("<br />") + $.t("misc.entrance1",{x1: $.t("<a href='#6/-5.922/8.262\'>"), end: $.t("</a>")})
	},{
		coords: [[100.641,150.187]],
		label: $.t("scavenger.dia") + $.t("scavenger.name.urs") + $.t("scavenger.level.1"),
		popup:$.t("scavenger.dia") + $.t("scavenger.name.urs") + $.t("scavenger.item.steel") + $.t("scavenger.level.1")
	},{
		coords: [[143.766,80.797]],
		label: $.t("scavenger.dia") + $.t("scavenger.name.urs") + $.t("scavenger.level.2"),
		popup:$.t("scavenger.dia") + $.t("scavenger.name.urs") + $.t("scavenger.item.steel") + $.t("scavenger.level.2")
	},{
		coords: [[115.142,79.000]],
		label: $.t("scavenger.dia") + $.t("scavenger.name.urs") + $.t("scavenger.level.2"),
		popup:$.t("scavenger.dia") + $.t("scavenger.name.urs") + $.t("scavenger.item.trous") + $.t("scavenger.level.2")
	},{
		coords: [[99.437,135.125]],
		label: $.t("scavenger.dia") + $.t("scavenger.name.wol") + $.t("scavenger.level.3"),
		popup:$.t("scavenger.dia") + $.t("scavenger.name.wol") + $.t("scavenger.item.armor") + $.t("scavenger.level.3")
	},{
		coords: [[101.047,75.281]],
		label: $.t("scavenger.dia") + $.t("scavenger.name.wol") + $.t("scavenger.level.4"),
		popup:$.t("scavenger.dia") + $.t("scavenger.name.wol") + $.t("scavenger.item.boot") + $.t("scavenger.level.4")
	},{
		coords: [[123.250,136.422]],
		label: $.t("scavenger.dia") + $.t("scavenger.name.wol") + $.t("scavenger.level.4"),
		popup:$.t("scavenger.dia") + $.t("scavenger.name.wol") + $.t("scavenger.item.gaunt") + $.t("scavenger.level.4")
	},{
		coords: [[114.953,111.156]],
		label: $.t("scavenger.dia") + $.t("scavenger.name.wol") + $.t("scavenger.level.3") + ' (' + $.t("misc.underground") + ')',
		popup:$.t("scavenger.dia") + $.t("scavenger.name.wol") + $.t("scavenger.item.silver") + $.t("scavenger.level.3") + $.t("<br />") + $.t("misc.entrance1",{x1: $.t("<a href='#6/-46.544/-58.008\'>"), end: $.t("</a>")})
	},{
		coords: [[131.469,204.547]],
		label: $.t("scavenger.dia") + $.t("scavenger.name.wol") + $.t("scavenger.level.3"),
		popup:$.t("scavenger.dia") + $.t("scavenger.name.wol") + $.t("scavenger.item.steel") + $.t("scavenger.level.3")
	},{
		coords: [[168.531,66.062]],
		label: $.t("scavenger.dia") + $.t("scavenger.name.wol") + $.t("scavenger.level.4"),
		popup:$.t("scavenger.dia") + $.t("scavenger.name.wol") + $.t("scavenger.item.trous") + $.t("scavenger.level.4")
	},{
		coords: [[60.079,200.390]],
		label: $.t("scavenger.dia") + $.t("scavenger.name.fel") + $.t("scavenger.level.4") + ' (' + $.t("misc.underground") + ')',
		popup:$.t("scavenger.dia") + $.t("scavenger.name.fel") + $.t("scavenger.item.armor") + $.t("scavenger.level.4") + $.t("<br />") + $.t("scavenger.dia") + $.t("scavenger.name.fel") + $.t("scavenger.item.gaunt") + $.t("scavenger.level.4") + $.t("<br />") + $.t("scavenger.dia") + $.t("scavenger.name.fel") + $.t("scavenger.item.trous") + $.t("scavenger.level.4") + $.t("<br />") + $.t("scavenger.dia") + $.t("scavenger.name.fel") + $.t("scavenger.item.boot") + $.t("scavenger.level.4") + $.t("<br />") + $.t("misc.entrance1",{x1: $.t("<a href='#6/-78.587/68.071\'>"), end: $.t("</a>")})
	},{
		coords: [[135.956,174.044]],
		label: $.t("scavenger.dia") + $.t("scavenger.name.gri") + $.t("scavenger.level.4"),
		popup:$.t("scavenger.dia") + $.t("scavenger.name.gri") + $.t("scavenger.item.armor") + $.t("scavenger.level.4") + $.t("<br />") + $.t("scavenger.dia") + $.t("scavenger.name.gri") + $.t("scavenger.item.gaunt") + $.t("scavenger.level.4") + $.t("<br />") + $.t("scavenger.dia") + $.t("scavenger.name.gri") + $.t("scavenger.item.trous") + $.t("scavenger.level.4") + $.t("<br />") + $.t("scavenger.dia") + $.t("scavenger.name.gri") + $.t("scavenger.item.boot") + $.t("scavenger.level.4")
	},{
		coords: [[158.109,161.766]],
		label: $.t("scavenger.dia") + $.t("scavenger.name.gri") + $.t("scavenger.level.3"),
		popup:$.t("scavenger.dia") + $.t("scavenger.name.gri") + $.t("scavenger.item.armor") + $.t("scavenger.level.3") + $.t("<br />") + $.t("scavenger.dia") + $.t("scavenger.name.gri") + $.t("scavenger.item.gaunt") + $.t("scavenger.level.3") + $.t("<br />") + $.t("scavenger.dia") + $.t("scavenger.name.gri") + $.t("scavenger.item.trous") + $.t("scavenger.level.3") + $.t("<br />") + $.t("scavenger.dia") + $.t("scavenger.name.gri") + $.t("scavenger.item.boot") + $.t("scavenger.level.3")
	},{
		coords: [[197.829,179.406]],
		label: $.t("scavenger.dia") + $.t("scavenger.name.urs") + $.t("scavenger.level.1") + ' (' + $.t("misc.underground") + ')',
		popup:$.t("scavenger.dia") + $.t("scavenger.name.urs") + $.t("scavenger.item.armor") + $.t("scavenger.level.1") + $.t("<br />") + $.t("scavenger.dia") + $.t("scavenger.name.urs") + $.t("scavenger.item.gaunt") + $.t("scavenger.level.1") + $.t("<br />") + $.t("scavenger.dia") + $.t("scavenger.name.urs") + $.t("scavenger.item.trous") + $.t("scavenger.level.1") + $.t("<br />") + $.t("scavenger.dia") + $.t("scavenger.name.urs") + $.t("scavenger.item.boot") + $.t("scavenger.level.1") + $.t("<br />") + $.t("misc.entrance1",{x1: $.t("<a href='#6/53.800/38.500\'>"), end: $.t("</a>")})
	}],

	//------------------------------------------------Shopkeeper------------------------------------------------
	shopkeeper: [{
		coords: [[130.187,222.750]],
		label: $.t("sidebar.shopkeeper"),
		popup: $.t("s:shopkeeper.desc.craftingSuppliesAndFish")
	},{
		coords: [[129.703,132.063]],
		label: $.t("sidebar.shopkeeper"),
		popup: $.t("s:shopkeeper.desc.craftingSuppliesAndFish")
	},{
		coords: [[175.422,73.062]],
		label: $.t("sidebar.shopkeeper"),
		popup: $.t("s:shopkeeper.desc.craftingSuppliesAndFish")
	},{
		coords: [[63.890,187.844]],
		label: $.t("sidebar.shopkeeper"),
		popup: $.t("s:shopkeeper.desc.craftingSuppliesAndFish")
	},{
		coords: [[92.171,117.906]],
		label: $.t("sidebar.shopkeeper"),
		popup: $.t("s:shopkeeper.desc.mapsCraftingSuppliesFishAndSaddles")
	},{
		coords: [[123.031,130.640]],
		label: $.t("sidebar.shopkeeper"),
		popup: $.t("s:shopkeeper.desc.mapsCraftingSupplies")
	},{
		coords: [[103.032,142.094]],
		label: $.t("sidebar.shopkeeper"),
		popup: $.t("s:shopkeeper.desc.craftingSuppliesAndFish")
	},{
		coords: [[135.312,137.407]],
		label: $.t("sidebar.shopkeeper"),
		popup: $.t("misc.liberated") + $.t("shopkeeper.desc.armourAndCraftingSupplies")
	},{
		coords: [[129.062,150.094]],
		label: $.t("sidebar.shopkeeper"),
		popup: $.t("s:shopkeeper.desc.mapsCraftingSuppliesFoodAndDrink")
	},{
		coords: [[141.547,129.188]],
		label: $.t("sidebar.shopkeeper"),
		popup: $.t("s:shopkeeper.desc.mapsCraftingSupplies")
	},{
		coords: [[150.516,125.844]],
		label: $.t("sidebar.shopkeeper"),
		popup: $.t("s:shopkeeper.desc.mapsCraftingSupplies")
	},{
		coords: [[146.609,123.265]],
		label: $.t("sidebar.shopkeeper"),
		popup: $.t("s:shopkeeper.desc.mapsCraftingSupplies")
	},{
		coords: [[149.580,127.767]],
		label: $.t("sidebar.shopkeeper"),
		popupTitle: $.t("sidebar.shopkeeper") + ' - ' + $.t("shopkeeper.label.tailor"),
		popup: $.t("s:shopkeeper.desc.clothesAndCraftingSupplies") + $.t("s:shopkeeper.desc.barber")
	},{
		coords: [[114.609,117.344]],
		label: $.t("sidebar.shopkeeper"),
		popup: $.t("s:shopkeeper.desc.mapsCraftingSupplies")
	},{
		coords: [[127.391,212.562]],
		label: $.t("sidebar.shopkeeper"),
		popup: $.t("s:shopkeeper.desc.mapsCraftingSupplies")
	}],

	//------------------------------------------------Sidequests------------------------------------------------
	sidequests: [{
		coords: [[117.532,158.015]],
		label: $.t("sidequests.label.beloved"),
		popup: $.t("sidequests.desc.beloved")
	},{
		coords: [[133.141,104.313]],
		label: $.t("sidequests.label.horn"),
		popup: $.t("sidequests.desc.horn")
	},{
		coords: [[93.655,121.219]],
		label: $.t("sidequests.label.horn"),
		popup: $.t("sidequests.desc.horn")
	},{
		coords: [[130.891,224.218]],
		label: $.t("sidequests.label.passenger") + '*',
		popup: $.t("misc.active",{quest: $.t("mainquests.label.storm")}) + $.t("misc.disappears",{quest: $.t("mainquests.label.family")}) + $.t("sidequests.desc.passenger")
	},{
		coords: [[134.016,157.968]],
		label: $.t("sidequests.label.sawmill"),
		popup: $.t("sidequests.desc.sawmill")
	},{
		coords: [[149.672,126.704]],
		label: $.t("sidequests.label.unpaid") + '*',
		popup: $.t("misc.active",{quest: $.t("sidequests.label.stranger") + "', '" + $.t("sidequests.label.dreams")}) + $.t("misc.disappears",{quest: $.t("sidequests.label.gambit")}) + $.t("sidequests.desc.unpaid")
	},{
		coords: [[127.173,137.844]],
		label: $.t("sidequests.label.assault"),
		popup: $.t("sidequests.desc.assault")
	},{
		coords: [[114.844,134.922]],
		label: $.t("sidequests.label.brave"),
		popup: $.t("sidequests.desc.brave")
	},{
		coords: [[153.000,122.859]],
		label: $.t("sidequests.label.coronation") + '*',
		popup: $.t("misc.active",{quest: $.t("sidequests.label.gambit")}) + $.t("misc.disappears",{quest: $.t("mainquests.label.mists")}) + $.t("sidequests.desc.coronation")
	},{
		coords: [[161.218,141.032]],
		label: $.t("sidequests.label.punishment1"),
		popup: $.t("sidequests.desc.punishment1")
	},{
		coords: [[147.954,138.188]],
		label: $.t("sidequests.label.punishment2"),
		popup: $.t("sidequests.desc.punishment2")
	},{
		coords: [[160.953,161.000]],
		label: $.t("sidequests.label.keepers"),
		popup: $.t("sidequests.desc.keepers")
	},{
		coords: [[61.562,200.390]],
		label: $.t("sidequests.label.flesh"),
		popup: $.t("misc.disappears",{quest: $.t("sidequests.label.thread")}) + $.t("sidequests.desc.flesh")
	},{
		coords: [[130.110,218.968]],
		label: $.t("sidequests.label.glory"),
		popup: $.t("sidequests.desc.glory")
	},{
		coords: [[178.546,137.407]],
		label: $.t("sidequests.label.spirit"),
		popup: $.t("sidequests.desc.spirit")
	},{
		coords: [[126.922,182.719]],
		label: $.t("sidequests.label.fromfar1"),
		popup: $.t("sidequests.desc.fromfar1")
	},{
		coords: [[135.813,145.938]],
		label: $.t("sidequests.label.hardtimes"),
		popup: $.t("sidequests.desc.hardtimes")
	},{
		coords: [[130.969,223.484]],
		label: $.t("sidequests.label.clothing"),
		popup: $.t("sidequests.desc.clothing")
	},{
		coords: [[63.268,192.875]],
		label: $.t("sidequests.label.maiden"),
		popup: $.t("sidequests.desc.maiden")
	},{
		coords: [[153.546,122.469]],
		label: $.t("sidequests.label.gambit") + '*',
		popup: $.t("misc.active",{quest: $.t("sidequests.label.possession") + "', '" + $.t("sidequests.label.undvik")}) + $.t("misc.disappears",{quest: $.t("mainquests.label.mists")}) + $.t("sidequests.desc.gambit")
	},{
		coords: [[175.219,80.844]],
		label: $.t("sidequests.label.arena"),
		popup: $.t("sidequests.desc.arena")
	},{
		coords: [[142.126,132.438]],
		label: $.t("sidequests.label.disturbed"),
		popup: $.t("sidequests.desc.disturbed")
	},{
		coords: [[173.515,71.954]],
		label: $.t("sidequests.label.possession") + '*',
		popup: $.t("misc.active",{quest: $.t("mainquests.label.king")}) + $.t("misc.disappears",{quest: $.t("mainquests.label.bpreparations")}) + $.t("sidequests.desc.possession")
	},{
		coords: [[137.641,164.046]],
		label: $.t("sidequests.label.practicum"),
		popup: $.t("sidequests.desc.practicum")
	},{
		coords: [[136.141,162.968]],
		label: $.t("sidequests.label.therapy"),
		popup: $.t("sidequests.desc.therapy")
	},{
		coords: [[94.985,126.172]],
		label: $.t("sidequests.label.stranger") + '*',
		popup: $.t("misc.active",{quest: $.t("contracts.label.eldberg")}) + $.t("sidequests.desc.stranger")
	},{
		coords: [[115.766,169.718]],
		label: $.t("sidequests.label.taken1"),
		popup: $.t("sidequests.desc.taken1")
	},{
		coords: [[137.328,218.015]],
		label: $.t("sidequests.label.taken2"),
		popup: $.t("sidequests.desc.taken2")
	},{
		coords: [[81.657,135.876]],
		label: $.t("sidequests.label.dreams") + '*',
		popup: $.t("misc.active",{quest: $.t("mainquests.label.king")}) + $.t("misc.disappears",{quest: $.t("sidequests.label.gambit")}) + $.t("sidequests.desc.dreams")
	},{
		coords: [[137.953,143.313]],
		label: $.t("sidequests.label.blade"),
		popup: $.t("sidequests.desc.blade")
	},{
		coords: [[130.422,223.250]],
		label: $.t("sidequests.label.last") + '*',
		popup: $.t("misc.active",{quest: $.t("mainquests.label.storm")}) + $.t("misc.disappears",{quest: $.t("mainquests.label.baby")}) + $.t("sidequests.desc.last")
	},{
		coords: [[103.250,72.375]],
		label: $.t("sidequests.label.undvik") + '*',
		popup: $.t("misc.active",{quest: $.t("mainquests.label.king")}) + $.t("sidequests.desc.undvik")
	},{
		coords: [[127.751,136.000],[131.641,134.532]],
		label: $.t("sidequests.label.nithing"),
		popup: $.t("sidequests.desc.nithing")
	},{
		coords: [[193.718,179.671],[196.500,185.234]],
		label: $.t("sidequests.label.warriors") + '*',
		popup: $.t("misc.active",{quest: $.t("sidequests.label.nowheres")}) + $.t("sidequests.desc.warriors")
	},{
		coords: [[63.720,187.687]],
		label: $.t("sidequests.label.price"),
		popup: $.t("sidequests.desc.price")
	},{
		coords: [[129.063,148.703]],
		label: $.t("sidequests.label.grossbart"),
		popup: $.t("sidequests.desc.grossbart")
	},{
		coords: [[193.624,179.328]],
		label: $.t("sidequests.label.nowheres"),
		popup: $.t("sidequests.desc.nowheres")
	},{
		coords: [[146.782,124.094]],
		label: $.t("sidequests.label.worthy1"),
		popup: $.t("sidequests.desc.worthy1")
	},{
		coords: [[141.313,128.797]],
		label: $.t("sidequests.label.worthy2"),
		popup: $.t("sidequests.desc.worthy2")
	},{
		coords: [[104.016,140.953]],
		label: $.t("sidequests.label.worthy3"),
		popup: $.t("sidequests.desc.worthy3")
	},{
		coords: [[127.469,132.485]],
		label: $.t("sidequest.pursuit") +$.t(": ") +$.t("sidequests.label.ps_fa"),
		popup: $.t("sidequests.desc.ps_fa")
	},{
		coords: [[130.626,220.843]],
		label: $.t("sidequest.pursuit") +$.t(": ") +$.t("sidequests.label.ps_sg") + '*',
		popup: $.t("misc.active",{quest: $.t("sidequest.pursuit") +$.t(": ") +$.t("sidequests.label.ps_fy") + "', '" + $.t("sidequest.pursuit") +$.t(": ") +$.t("sidequests.label.ps_sk") + "', '" + $.t("sidequest.pursuit") +$.t(": ") +$.t("sidequests.label.ps_fa")}) + $.t("sidequests.desc.ps_sg")
	},{
		coords: [[120.032,149.063]],
		label: $.t("sidequest.pursuit") +$.t(": ") +$.t("sidequests.label.ps_fy"),
		popup: $.t("sidequests.desc.ps_fy")
	},{
		coords: [[131.500,133.688]],
		label: $.t("sidequest.pursuit") +$.t(": ") +$.t("sidequests.label.ps_sk"),
		popup: $.t("sidequests.desc.ps_sk")
	},{
		coords: [[147.094,127.531]],
		label: $.t("sidequest.gwent") +$.t(": ") +$.t("sidequests.label.gw_sk"),
		popup: $.t("sidequests.desc.gw_sk")
	},{
		coords: [[175.203,81.063]],
		label: $.t("sidequest.fist") +$.t(": ") +$.t("sidequests.label.ff_champion") + '*',
		popup: $.t("misc.active",{quest: $.t("sidequest.fist") + $.t(": ") + $.t("sidequests.label.ff_n") + "', '" + $.t("sidequest.fist") +$.t(": ") +$.t("sidequests.label.ff_v") + "', '" + $.t("sidequest.fist") +$.t(": ") +$.t("sidequests.label.ff_skellige")}) + $.t("sidequests.desc.ff_champion")
	},{
		coords: [[147.094,127.266]],
		label: $.t("sidequest.fist") +$.t(": ") +$.t("sidequests.label.ff_skellige"),
		popup: $.t("sidequests.desc.ff_skellige")
	},{
		coords: [[149.063,126.812]],
		label: $.t("sidequest.fist") +$.t(": ") +$.t("sidequests.label.ff_skellige"),
		popup: $.t("sidequests.desc.ff_skellige")
	},{
		coords: [[118.546,105.813]],
		label: $.t("sidequest.fist") +$.t(": ") +$.t("sidequests.label.ff_skellige"),
		popup: $.t("sidequests.desc.ff_skellige")
	},{
		coords: [[153.953,123.641]],
		label: $.t("sidequests.label.scavenger.quest") + $.t("sidequests.label.scavenger.name.urs") + $.t("sidequests.label.scavenger.part.I"),
		popup: $.t("sidequests.label.scavenger.desc.urs")
	},{
		coords: [[153.953,123.783]],
		label: $.t("sidequests.label.scavenger.quest") + $.t("sidequests.label.scavenger.name.urs") + $.t("sidequests.label.scavenger.part.II"),
		popup: $.t("sidequests.label.scavenger.desc.urs")
	},{
		coords: [[153.953,123.925]],
		label: $.t("sidequests.label.scavenger.quest") + $.t("sidequests.label.scavenger.name.urs") + $.t("sidequests.label.scavenger.part.III"),
		popup: $.t("sidequests.label.scavenger.desc.urs")
	},{
		coords: [[153.953,124.068]],
		label: $.t("sidequests.label.scavenger.quest") + $.t("sidequests.label.scavenger.name.urs") + $.t("sidequests.label.scavenger.part.IV"),
		popup: $.t("sidequests.label.scavenger.desc.urs")
	},{
		coords: [[153.953,124.210]],
		label: $.t("sidequests.label.scavenger.quest") + $.t("sidequests.label.scavenger.name.wol") + $.t("sidequests.label.scavenger.part.III"),
		popup: $.t("sidequests.label.scavenger.desc.wol")
	},{
		coords: [[153.953,124.352]],
		label: $.t("sidequests.label.scavenger.quest") + $.t("sidequests.label.scavenger.name.wol") + $.t("sidequests.label.scavenger.part.VI"),
		popup: $.t("sidequests.label.scavenger.desc.wol")
	}],

	//------------------------------------------------Sign Post------------------------------------------------
	signpost: [{
		coords: [[61.921,201.656]],
		label: $.t("s:signpost.label.trottheim"),
		popup: $.t("s:signpost.desc.trottheim")
	},{
		coords: [[62.843,187.218]],
		label: $.t("s:signpost.label.harviken"),
		popup: $.t("s:signpost.desc.harviken")
	},{
		coords: [[129.594,222.593]],
		label: $.t("s:signpost.label.larvik"),
		popup: $.t("s:signpost.desc.larvik")
	},{
		coords: [[136.844,213.281]],
		label: $.t("s:signpost.label.freyasGarden"),
		popup: $.t("s:signpost.desc.freyasGarden")
	},{
		coords: [[133.266,210.000]],
		label: $.t("s:signpost.label.lofoten"),
		popup: $.t("s:signpost.desc.lofoten")
	},{
		coords: [[129.813,210.578]],
		label: $.t("s:signpost.label.lofotenCemetery"),
		popup: $.t("s:signpost.desc.lofotenCemetery")
	},{
		coords: [[126.687,212.547]],
		label: $.t("s:signpost.label.isolatedHut"),
		popup: $.t("s:signpost.desc.isolatedHut")
	},{
		coords: [[123.938,217.141]],
		label: $.t("s:signpost.label.lurthen"),
		popup: $.t("s:signpost.desc.lurthen")
	},{
		coords: [[196.468,184.875]],
		label: $.t("s:signpost.label.trailToYngvarsFang"),
		popup: $.t("s:signpost.desc.trailToYngvarsFang")
	},{
		coords: [[198.563,177.156]],
		label: $.t("s:signpost.label.yngvarsFang"),
		popup: $.t("s:signpost.desc.yngvarsFang")
	},{
		coords: [[193.281,179.281]],
		label: $.t("s:signpost.label.uriallaHarbor"),
		popup: $.t("s:signpost.desc.uriallaHarbor")
	},{
		coords: [[191.485,171.563]],
		label: $.t("s:signpost.label.bayOfWinds"),
		popup: $.t("s:signpost.desc.bayOfWinds")
	},{
		coords: [[177.078,81.266]],
		label: $.t("s:signpost.label.hov"),
		popup: $.t("s:signpost.desc.hov")
	},{
		coords: [[176.359,71.641]],
		label: $.t("s:signpost.label.svorlag"),
		popup: $.t("s:signpost.desc.svorlag")
	},{
		coords: [[168.266,65.594]],
		label: $.t("s:signpost.label.oldWatchtower"),
		popup: $.t("s:signpost.desc.oldWatchtower")
	},{
		coords: [[140.437,52.813]],
		label: $.t("s:signpost.label.thePaliGapCoast"),
		popup: $.t("s:signpost.desc.thePaliGapCoast")
	},{
		coords: [[145.906,84.500]],
		label: $.t("s:signpost.label.kaerAlmhult"),
		popup: $.t("s:signpost.desc.kaerAlmhult")
	},{
		coords: [[108.031,73.500]],
		label: $.t("s:signpost.label.marlinCoast"),
		popup: $.t("s:signpost.desc.marlinCoast")
	},{
		coords: [[99.766,81.672]],
		label: $.t("s:signpost.label.gullPoint"),
		popup: $.t("s:signpost.desc.gullPoint")
	},{
		coords: [[103.235,71.265]],
		label: $.t("s:signpost.label.dorveRuins"),
		popup: $.t("s:signpost.desc.dorveRuins")
	},{
		coords: [[96.360,65.562]],
		label: $.t("s:signpost.label.clanTordarrochForge"),
		popup: $.t("s:signpost.desc.clanTordarrochForge")
	},{
		coords: [[100.610,61.313]],
		label: $.t("s:signpost.label.urskar"),
		popup: $.t("s:signpost.desc.urskar")
	},{
		coords: [[105.218,55.875]],
		label: $.t("s:signpost.label.abandonedVillage"),
		popup: $.t("s:signpost.desc.abandonedVillage")
	},{
		coords: [[117.938,53.000]],
		label: $.t("s:signpost.label.torGvalchca"),
		popup: $.t("s:signpost.desc.torGvalchca")
	},{
		coords: [[79.797,147.688]],
		label: $.t("s:signpost.label.elverumLighthouse"),
		popup: $.t("s:signpost.desc.elverumLighthouse")
	},{
		coords: [[99.828,149.687]],
		label: $.t("s:signpost.label.ruinedInn"),
		popup: $.t("s:signpost.desc.ruinedInn")
	},{
		coords: [[104.967,141.313]],
		label: $.t("s:signpost.label.fyresdal"),
		popup: $.t("s:signpost.desc.fyresdal")
	},{
		coords: [[93.734,124.625]],
		label: $.t("s:signpost.label.kaerMuire"),
		popup: $.t("s:signpost.desc.kaerMuire")
	},{
		coords: [[91.391,118.344]],
		label: $.t("s:signpost.label.holmsteinsPort"),
		popup: $.t("s:signpost.desc.holmsteinsPort")
	},{
		coords: [[106.078,108.797]],
		label: $.t("s:signpost.label.wildShore"),
		popup: $.t("s:signpost.desc.wildShore")
	},{
		coords: [[109.750,121.468]],
		label: $.t("s:signpost.label.fornhala"),
		popup: $.t("s:signpost.desc.fornhala")
	},{
		coords: [[105.265,161.219]],
		label: $.t("s:signpost.label.distillery"),
		popup: $.t("s:signpost.desc.distillery")
	},{
		coords: [[102.641,168.406]],
		label: $.t("s:signpost.label.grotto"),
		popup: $.t("s:signpost.desc.grotto")
	},{
		coords: [[113.891,147.156]],
		label: $.t("s:signpost.label.palisade"),
		popup: $.t("s:signpost.desc.palisade")
	},{
		coords: [[117.906,106.719]],
		label: $.t("s:signpost.label.arinbjorn"),
		popup: $.t("s:signpost.desc.arinbjorn")
	},{
		coords: [[120.719,117.938]],
		label: $.t("s:signpost.label.sund"),
		popup: $.t("s:signpost.desc.sund")
	},{
		coords: [[124.218,129.734]],
		label: $.t("s:signpost.label.fayrlund"),
		popup: $.t("s:signpost.desc.fayrlund")
	},{
		coords: [[119.687,139.281]],
		label: $.t("s:signpost.label.boxholm"),
		popup: $.t("s:signpost.desc.boxholm")
	},{
		coords: [[130.187,133.562]],
		label: $.t("s:signpost.label.rannvaig"),
		popup: $.t("s:signpost.desc.rannvaig")
	},{
		coords: [[128.937,149.000]],
		label: $.t("s:signpost.label.blandare"),
		popup: $.t("s:signpost.desc.blandare")
	},{
		coords: [[127.906,162.281]],
		label: $.t("s:signpost.label.druidsCamp"),
		popup: $.t("s:signpost.desc.druidsCamp")
	},{
		coords: [[128.844,170.031]],
		label: $.t("s:signpost.label.redgill"),
		popup: $.t("s:signpost.desc.redgill")
	},{
		coords: [[133.125,157.000]],
		label: $.t("s:signpost.label.abandonedSawmill"),
		popup: $.t("s:signpost.desc.abandonedSawmill")
	},{
		coords: [[136.047,164.953]],
		label: $.t("s:signpost.label.gedyneith"),
		popup: $.t("s:signpost.desc.gedyneith")
	},{
		coords: [[142.328,169.344]],
		label: $.t("s:signpost.label.whaleGraveyard"),
		popup: $.t("s:signpost.desc.whaleGraveyard")
	},{
		coords: [[136.719,130.625]],
		label: $.t("s:signpost.label.crossroads"),
		popup: $.t("s:signpost.desc.crossroads")
	},{
		coords: [[140.219,145.313]],
		label: $.t("s:signpost.label.minersCamp"),
		popup: $.t("s:signpost.desc.minersCamp")
	},{
		coords: [[141.562,101.562]],
		label: $.t("s:signpost.label.eldbergLighthouse"),
		popup: $.t("s:signpost.desc.eldbergLighthouse")
	},{
		coords: [[143.031,153.156]],
		label: $.t("s:signpost.label.kaerGelen"),
		popup: $.t("s:signpost.desc.kaerGelen")
	},{
		coords: [[146.962,125.250]],
		label: $.t("s:signpost.label.KaerTroldeHarbor"),
		popup: $.t("s:signpost.desc.KaerTroldeHarbor")
	},{
		coords: [[153.875,124.516]],
		label: $.t("s:signpost.label.bridgeToKaerTrolde"),
		popup: $.t("s:signpost.desc.bridgeToKaerTrolde")
	},{
		coords: [[145.938,139.078]],
		label: $.t("s:signpost.label.rogne"),
		popup: $.t("s:signpost.desc.rogne")
	},{
		coords: [[151.016,150.609]],
		label: $.t("s:signpost.label.yustiannasGrotto"),
		popup: $.t("s:signpost.desc.yustiannasGrotto")
	},{
		coords: [[153.938,162.687]],
		label: $.t("s:signpost.label.giantsToes"),
		popup: $.t("s:signpost.desc.giantsToes")
	},{
		coords: [[159.109,136.328]],
		label: $.t("s:signpost.label.ancientCrypt"),
		popup: $.t("s:signpost.desc.ancientCrypt")
	}],

	//------------------------------------------------Signal Fire------------------------------------------------
	signalfire: [],

	//------------------------------------------------Smugglers' Cache------------------------------------------------
	smugglers: [{
		coords: [[131.469,116.375]],
		label: $.t("sidebar.smugglers"),
		popup: $.t("smugglers.desc")
	},{
		coords: [[135.125,110.875]],
		label: $.t("sidebar.smugglers"),
		popup: $.t("smugglers.desc")
	},{
		coords: [[138.875,117.188]],
		label: $.t("sidebar.smugglers"),
		popup: $.t("smugglers.desc")
	},{
		coords: [[144.719,114.906]],
		label: $.t("sidebar.smugglers"),
		popup: $.t("smugglers.desc")
	},{
		coords: [[149.156,108.406]],
		label: $.t("sidebar.smugglers"),
		popup: $.t("smugglers.desc")
	},{
		coords: [[155.000,111.344]],
		label: $.t("sidebar.smugglers"),
		popup: $.t("smugglers.desc")
	},{
		coords: [[160.844,111.563]],
		label: $.t("sidebar.smugglers"),
		popup: $.t("smugglers.desc")
	},{
		coords: [[157.625,103.344]],
		label: $.t("sidebar.smugglers"),
		popup: $.t("smugglers.desc")
	},{
		coords: [[152.375,86.687]],
		label: $.t("sidebar.smugglers"),
		popup: $.t("smugglers.desc")
	},{
		coords: [[138.718,93.500]],
		label: $.t("sidebar.smugglers"),
		popup: $.t("smugglers.desc")
	},{
		coords: [[134.156,94.563]],
		label: $.t("sidebar.smugglers"),
		popup: $.t("smugglers.desc")
	},{
		coords: [[136.281,77.000]],
		label: $.t("sidebar.smugglers"),
		popup: $.t("smugglers.desc")
	},{
		coords: [[140.031,65.250]],
		label: $.t("sidebar.smugglers"),
		popup: $.t("smugglers.desc")
	},{
		coords: [[152.782,66.687]],
		label: $.t("sidebar.smugglers"),
		popup: $.t("smugglers.desc")
	},{
		coords: [[160.906,80.000]],
		label: $.t("sidebar.smugglers"),
		popup: $.t("smugglers.desc")
	},{
		coords: [[168.000,100.125]],
		label: $.t("sidebar.smugglers"),
		popup: $.t("smugglers.desc")
	},{
		coords: [[180.187,130.406]],
		label: $.t("sidebar.smugglers"),
		popup: $.t("smugglers.desc")
	},{
		coords: [[173.625,128.031]],
		label: $.t("sidebar.smugglers"),
		popup: $.t("smugglers.desc")
	},{
		coords: [[164.062,126.906]],
		label: $.t("sidebar.smugglers"),
		popup: $.t("smugglers.desc")
	},{
		coords: [[164.875,134.344]],
		label: $.t("sidebar.smugglers"),
		popup: $.t("smugglers.desc")
	},{
		coords: [[170.188,144.219]],
		label: $.t("sidebar.smugglers"),
		popup: $.t("smugglers.desc")
	},{
		coords: [[163.187,149.468]],
		label: $.t("sidebar.smugglers"),
		popup: $.t("smugglers.desc")
	},{
		coords: [[176.063,158.281]],
		label: $.t("sidebar.smugglers"),
		popup: $.t("smugglers.desc")
	},{
		coords: [[181.062,186.000]],
		label: $.t("sidebar.smugglers"),
		popup: $.t("smugglers.desc")
	},{
		coords: [[179.937,182.687]],
		label: $.t("sidebar.smugglers"),
		popup: $.t("smugglers.desc")
	},{
		coords: [[181.000,176.125]],
		label: $.t("sidebar.smugglers"),
		popup: $.t("smugglers.desc")
	},{
		coords: [[168.625,175.563]],
		label: $.t("sidebar.smugglers"),
		popup: $.t("entrance.desc.exit") + $.t("smugglers.desc")
	},{
		coords: [[167.750,186.625]],
		label: $.t("sidebar.smugglers"),
		popup: $.t("smugglers.desc")
	},{
		coords: [[146.750,172.188]],
		label: $.t("sidebar.smugglers"),
		popup: $.t("smugglers.desc")
	},{
		coords: [[153.656,171.688]],
		label: $.t("sidebar.smugglers"),
		popup: $.t("smugglers.desc")
	},{
		coords: [[147.406,179.625]],
		label: $.t("sidebar.smugglers"),
		popup: $.t("smugglers.desc")
	},{
		coords: [[153.531,178.875]],
		label: $.t("sidebar.smugglers"),
		popup: $.t("smugglers.desc")
	},{
		coords: [[144.407,185.719]],
		label: $.t("sidebar.smugglers"),
		popup: $.t("smugglers.desc")
	},{
		coords: [[144.063,194.656]],
		label: $.t("sidebar.smugglers"),
		popup: $.t("smugglers.desc")
	},{
		coords: [[144.063,202.406]],
		label: $.t("sidebar.smugglers"),
		popup: $.t("smugglers.desc")
	},{
		coords: [[132.687,194.687]],
		label: $.t("sidebar.smugglers"),
		popup: $.t("smugglers.desc")
	},{
		coords: [[102.812,208.750]],
		label: $.t("sidebar.smugglers"),
		popup: $.t("smugglers.desc")
	},{
		coords: [[97.250,180.750]],
		label: $.t("sidebar.smugglers"),
		popup: $.t("smugglers.desc")
	},{
		coords: [[95.344,169.969]],
		label: $.t("sidebar.smugglers"),
		popup: $.t("smugglers.desc")
	},{
		coords: [[88.031,154.219]],
		label: $.t("sidebar.smugglers"),
		popup: $.t("smugglers.desc")
	},{
		coords: [[84.219,158.156]],
		label: $.t("sidebar.smugglers"),
		popup: $.t("smugglers.desc")
	},{
		coords: [[62.437,161.687]],
		label: $.t("sidebar.smugglers"),
		popup: $.t("smugglers.desc")
	},{
		coords: [[65.593,136.250]],
		label: $.t("sidebar.smugglers"),
		popup: $.t("smugglers.desc")
	},{
		coords: [[62.375,118.532]],
		label: $.t("sidebar.smugglers"),
		popup: $.t("smugglers.desc")
	},{
		coords: [[57.188,65.437]],
		label: $.t("sidebar.smugglers"),
		popup: $.t("smugglers.desc")
	},{
		coords: [[71.875,95.563]],
		label: $.t("sidebar.smugglers"),
		popup: $.t("smugglers.desc")
	},{
		coords: [[79.999,112.188]],
		label: $.t("sidebar.smugglers"),
		popup: $.t("smugglers.desc")
	},{
		coords: [[87.312,92.875]],
		label: $.t("sidebar.smugglers"),
		popup: $.t("smugglers.desc")
	},{
		coords: [[101.937,96.312]],
		label: $.t("sidebar.smugglers"),
		popup: $.t("smugglers.desc")
	},{
		coords: [[119.907,97.656]],
		label: $.t("sidebar.smugglers"),
		popup: $.t("smugglers.desc")
	},{
		coords: [[119.344,86.219]],
		label: $.t("sidebar.smugglers"),
		popup: $.t("smugglers.desc")
	},{
		coords: [[123.532,82.750]],
		label: $.t("sidebar.smugglers"),
		popup: $.t("smugglers.desc")
	},{
		coords: [[124.078,93.656]],
		label: $.t("sidebar.smugglers"),
		popup: $.t("smugglers.desc")
	},{
		coords: [[197.624,164.124]],
		label: $.t("sidebar.smugglers"),
		popup: $.t("smugglers.desc")
	},{
		coords: [[197.438,112.625]],
		label: $.t("sidebar.smugglers"),
		popup: $.t("smugglers.desc")
	},{
		coords: [[180.187,107.906]],
		label: $.t("sidebar.smugglers"),
		popup: $.t("smugglers.desc")
	},{
		coords: [[171.094,212.063]],
		label: $.t("sidebar.smugglers"),
		popup: $.t("smugglers.desc")
	},{
		coords: [[207.376,87.812]],
		label: $.t("sidebar.smugglers"),
		popup: $.t("smugglers.desc")
	},{
		coords: [[195.563,136.000]],
		label: $.t("sidebar.smugglers"),
		popup: $.t("smugglers.desc")
	},{
		coords: [[200.313,145.687]],
		label: $.t("sidebar.smugglers"),
		popup: $.t("smugglers.desc")
	}],

	//------------------------------------------------Spoils of War------------------------------------------------
	spoils: [{
		coords: [[62.000,107.063]],
		label: $.t("sidebar.spoils"),
		popup: $.t("spoils.desc")
	},{
		coords: [[140.156,49.594]],
		label: $.t("sidebar.spoils"),
		popup: $.t("spoils.desc")
	},{
		coords: [[136.813,39.312]],
		label: $.t("sidebar.spoils"),
		popup: $.t("spoils.desc")
	},{
		coords: [[174.094,106.563]],
		label: $.t("sidebar.spoils"),
		popup: $.t("spoils.desc")
	},{
		coords: [[167.594,118.375]],
		label: $.t("sidebar.spoils"),
		popup: $.t("spoils.desc")
	},{
		coords: [[202.749,131.688]],
		label: $.t("sidebar.spoils"),
		popup: $.t("spoils.desc")
	},{
		coords: [[82.531,170.031]],
		label: $.t("sidebar.spoils"),
		popup: $.t("spoils.desc")
	},{
		coords: [[110.031,182.969]],
		label: $.t("sidebar.spoils"),
		popup: $.t("spoils.desc")
	}],

	//------------------------------------------------Treasure------------------------------------------------
	treasure: [
	//Surface Treause
	{
		coords: [[62.718,177.407]],
		label: $.t("sidebar.treasure"),
		popup: $.t("treasure.desc")
	},{
		coords: [[113.250,54.313]],
		label: $.t("sidebar.treasure"),
		popup: $.t("treasure.desc")
	},{
		coords: [[133.625,128.094]],
		label: $.t("sidebar.treasure"),
		popup: $.t("treasure.desc")
	},{
		coords: [[134.781,126.062]],
		label: $.t("sidebar.treasure"),
		popup: $.t("treasure.desc")
	},{
		coords: [[143.250,120.469]],
		label: $.t("sidebar.treasure"),
		popup: $.t("treasure.desc")
	},{
		coords: [[137.781,143.657]],
		label: $.t("sidebar.treasure"),
		popup: $.t("treasure.desc")
	},{
		coords: [[153.203,153.047]],
		label: $.t("sidebar.treasure"),
		popup: $.t("s:treasure.desc.solution")
	},{
		coords: [[149.562,153.125]],
		label: $.t("sidebar.treasure"),
		popup: $.t("treasure.desc")
	},{
		coords: [[63.780,68.000]],
		label: $.t("sidebar.treasure"),
		popup: $.t("treasure.desc")
	},{
		coords: [[135.265,127.344]],
		label: $.t("sidebar.treasure"),
		popup: $.t("treasure.desc")
	},{
		coords: [[135.813,125.297]],
		label: $.t("sidebar.treasure"),
		popup: $.t("treasure.desc")
	},{
		coords: [[138.703,122.187]],
		label: $.t("sidebar.treasure"),
		popup: $.t("treasure.desc")
	},{
		coords: [[58.452,208.188]],
		label: $.t("sidebar.treasure"),
		popup: $.t("treasure.desc")
	},{
		coords: [[150.297,164.782]],
		label: $.t("sidebar.treasure"),
		popup: $.t("treasure.desc")
	},{
		coords: [[179.890,81.953]],
		label: $.t("sidebar.treasure"),
		popup: $.t("treasure.desc")
	},{
		coords: [[180.265,82.031]],
		label: $.t("sidebar.treasure"),
		popup: $.t("treasure.desc")
	},{
		coords: [[186.750,71.250]],
		label: $.t("sidebar.treasure"),
		popup: $.t("treasure.desc")
	},{
		coords: [[199.219,118.891]],
		label: $.t("sidebar.treasure"),
		popup: $.t("treasure.desc")
	},{
		coords: [[200.500,110.938]],
		label: $.t("sidebar.treasure"),
		popup: $.t("treasure.desc")
	},{
		coords: [[196.531,112.390]],
		label: $.t("sidebar.treasure"),
		popup: $.t("treasure.desc")
	},{
		coords: [[195.609,101.062]],
		label: $.t("sidebar.treasure"),
		popup: $.t("treasure.desc")
	},{
		coords: [[200.156,99.781]],
		label: $.t("sidebar.treasure"),
		popup: $.t("treasure.desc")
	},{
		coords: [[195.969,94.500]],
		label: $.t("sidebar.treasure"),
		popup: $.t("treasure.desc")
	},{
		coords: [[180.360,138.015]],
		label: $.t("sidebar.treasure"),
		popup: $.t("treasure.desc")
	},{
		coords: [[154.750,192.188]],
		label: $.t("sidebar.treasure"),
		popup: $.t("treasure.desc")
	},{
		coords: [[191.500,198.687]],
		label: $.t("sidebar.treasure"),
		popup: $.t("treasure.desc")
	},{
		coords: [[151.594,85.719]],
		label: $.t("sidebar.treasure"),
		popup: $.t("treasure.desc")
	},{
		coords: [[117.688,73.625]],
		label: $.t("sidebar.treasure"),
		popup: $.t("treasure.desc")
	},{
		coords: [[64.218,103.750]],
		label: $.t("sidebar.treasure"),
		popup: $.t("treasure.desc")
	},{
		coords: [[100.202,160.469]],
		label: $.t("sidebar.treasure"),
		popup: $.t("treasure.desc")
	},{
		coords: [[105.281,72.375]],
		label: $.t("sidebar.treasure"),
		popup: $.t("treasure.desc")
	},{
		coords: [[107.188,68.250]],
		label: $.t("sidebar.treasure"),
		popup: $.t("treasure.desc")
	},{
		coords: [[58.391,191.890]],
		label: $.t("sidebar.treasure"),
		popup: $.t("treasure.desc")
	},{
		coords: [[141.656,128.984]],
		label: $.t("sidebar.treasure"),
		popup: $.t("treasure.desc")
	},{
		coords: [[145.203,120.531]],
		label: $.t("sidebar.treasure"),
		popup: $.t("treasure.desc")
	},{
		coords: [[134.250,141.344]],
		label: $.t("sidebar.treasure"),
		popup: $.t("treasure.desc")
	},{
		coords: [[140.797,144.782]],
		label: $.t("sidebar.treasure"),
		popup: $.t("treasure.desc")
	},{
		coords: [[127.562,151.953]],
		label: $.t("sidebar.treasure"),
		popup: $.t("treasure.desc")
	},{
		coords: [[122.719,136.578]],
		label: $.t("sidebar.treasure"),
		popup: $.t("treasure.desc")
	},{
		coords: [[122.437,137.750]],
		label: $.t("sidebar.treasure"),
		popup: $.t("treasure.desc")
	},{
		coords: [[123.063,137.985]],
		label: $.t("sidebar.treasure"),
		popup: $.t("treasure.desc")
	},{
		coords: [[122.750,137.953]],
		label: $.t("sidebar.treasure"),
		popup: $.t("treasure.desc")
	},{
		coords: [[123.875,137.188]],
		label: $.t("sidebar.treasure"),
		popup: $.t("treasure.desc")
	},{
		coords: [[121.812,138.703]],
		label: $.t("sidebar.treasure"),
		popup: $.t("treasure.desc")
	},{
		coords: [[121.812,138.703]],
		label: $.t("sidebar.treasure"),
		popup: $.t("treasure.desc")
	},{
		coords: [[120.187,141.719]],
		label: $.t("sidebar.treasure"),
		popup: $.t("treasure.desc")
	},{
		coords: [[120.703,141.109]],
		label: $.t("sidebar.treasure"),
		popup: $.t("treasure.desc")
	},{
		coords: [[112.094,143.375]],
		label: $.t("sidebar.treasure"),
		popup: $.t("treasure.desc")
	},{
		coords: [[109.890,120.890]],
		label: $.t("sidebar.treasure"),
		popup: $.t("treasure.desc")
	},{
		coords: [[109.563,122.109]],
		label: $.t("sidebar.treasure"),
		popup: $.t("treasure.desc")
	},{
		coords: [[109.218,121.000]],
		label: $.t("sidebar.treasure"),
		popup: $.t("treasure.desc")
	},{
		coords: [[106.578,119.422]],
		label: $.t("sidebar.treasure"),
		popup: $.t("treasure.desc")
	},{
		coords: [[77.251,153.641]],
		label: $.t("sidebar.treasure"),
		popup: $.t("treasure.desc")
	},{
		coords: [[76.267,156.031]],
		label: $.t("sidebar.treasure"),
		popup: $.t("treasure.desc")
	},{
		coords: [[79.376,143.672]],
		label: $.t("sidebar.treasure"),
		popup: $.t("treasure.desc")
	},{
		coords: [[86.406,127.844]],
		label: $.t("sidebar.treasure"),
		popup: $.t("treasure.desc")
	},{
		coords: [[86.968,127.844]],
		label: $.t("sidebar.treasure"),
		popup: $.t("treasure.desc")
	},{
		coords: [[87.657,122.750]],
		label: $.t("sidebar.treasure"),
		popup: $.t("treasure.desc")
	},{
		coords: [[89.829,119.094]],
		label: $.t("sidebar.treasure"),
		popup: $.t("treasure.desc")
	},{
		coords: [[92.062,121.625]],
		label: $.t("sidebar.treasure"),
		popup: $.t("treasure.desc")
	},{
		coords: [[96.266,125.594]],
		label: $.t("sidebar.treasure"),
		popup: $.t("treasure.desc")
	},{
		coords: [[95.609,125.750]],
		label: $.t("sidebar.treasure"),
		popup: $.t("treasure.desc")
	},{
		coords: [[92.844,124.516]],
		label: $.t("sidebar.treasure"),
		popup: $.t("treasure.desc")
	},{
		coords: [[95.734,112.641]],
		label: $.t("sidebar.treasure"),
		popup: $.t("treasure.desc")
	},{
		coords: [[112.750,108.953]],
		label: $.t("sidebar.treasure"),
		popup: $.t("treasure.desc")
	},{
		coords: [[114.734,105.734]],
		label: $.t("sidebar.treasure"),
		popup: $.t("treasure.desc")
	},{
		coords: [[121.219,217.422]],
		label: $.t("sidebar.treasure"),
		popup: $.t("treasure.desc")
	},{
		coords: [[118.812,219.718]],
		label: $.t("sidebar.treasure"),
		popup: $.t("treasure.desc")
	},{
		coords: [[125.171,222.281]],
		label: $.t("sidebar.treasure"),
		popup: $.t("treasure.desc")
	},{
		coords: [[197.141,179.110]],
		label: $.t("sidebar.treasure"),
		popup: $.t("treasure.desc")
	},{
		coords: [[197.610,179.000]],
		label: $.t("sidebar.treasure"),
		popup: $.t("treasure.desc")
	},{
		coords: [[197.626,179.734]],
		label: $.t("sidebar.treasure"),
		popup: $.t("treasure.desc")
	},{
		coords: [[186.297,69.860]],
		label: $.t("sidebar.treasure"),
		popup: $.t("treasure.desc")
	},{
		coords: [[186.203,68.453]],
		label: $.t("sidebar.treasure"),
		popup: $.t("treasure.desc")
	},{
		coords: [[186.000,71.922]],
		label: $.t("sidebar.treasure"),
		popup: $.t("treasure.desc")
	},{
		coords: [[198.875,144.844]],
		label: $.t("sidebar.treasure"),
		popup: $.t("treasure.desc")
	},{
		coords: [[194.969,111.594]],
		label: $.t("sidebar.treasure"),
		popup: $.t("treasure.desc")
	},{
		coords: [[197.829,98.359]],
		label: $.t("sidebar.treasure"),
		popup: $.t("treasure.desc")
	},{
		coords: [[198.782,100.672]],
		label: $.t("sidebar.treasure"),
		popup: $.t("treasure.desc")
	},{
		coords: [[199.859,98.047]],
		label: $.t("sidebar.treasure"),
		popup: $.t("treasure.desc")
	},{
		coords: [[196.219,100.844]],
		label: $.t("sidebar.treasure"),
		popup: $.t("treasure.desc")
	},{
		coords: [[195.687,95.453]],
		label: $.t("sidebar.treasure"),
		popup: $.t("treasure.desc")
	},{
		coords: [[197.485,93.860]],
		label: $.t("sidebar.treasure"),
		popup: $.t("treasure.desc")
	},{
		coords: [[197.438,94.938]],
		label: $.t("sidebar.treasure"),
		popup: $.t("treasure.desc")
	},{
		coords: [[197.141,91.203]],
		label: $.t("sidebar.treasure"),
		popup: $.t("treasure.desc")
	},{
		coords: [[197.859,90.906]],
		label: $.t("sidebar.treasure"),
		popup: $.t("treasure.desc")
	},{
		coords: [[199.296,90.359]],
		label: $.t("sidebar.treasure"),
		popup: $.t("treasure.desc")
	},{
		coords: [[197.156,87.563]],
		label: $.t("sidebar.treasure"),
		popup: $.t("treasure.desc")
	},{
		coords: [[197.000,88.282]],
		label: $.t("sidebar.treasure"),
		popup: $.t("treasure.desc")
	},{
		coords: [[196.187,89.188]],
		label: $.t("sidebar.treasure"),
		popup: $.t("treasure.desc")
	},{
		coords: [[196.563,89.875]],
		label: $.t("sidebar.treasure"),
		popup: $.t("treasure.desc")
	},{
		coords: [[144.047,153.609]],
		label: $.t("sidebar.treasure"),
		popup: $.t("treasure.desc")
	},{
		coords: [[98.328,139.250]],
		label: $.t("sidebar.treasure"),
		popup: $.t("treasure.desc")
	},{
		coords: [[94.735,124.000]],
		label: $.t("sidebar.treasure"),
		popup: $.t("treasure.desc")
	},{
		coords: [[135.328,98.672]],
		label: $.t("sidebar.treasure"),
		popup: $.t("treasure.desc")
	},{
		coords: [[198.281,177.219]],
		label: $.t("sidebar.treasure"),
		popup: $.t("treasure.desc")
	},{
		coords: [[196.875,174.109]],
		label: $.t("sidebar.treasure"),
		popup: $.t("treasure.desc")
	},{
		coords: [[176.094,108.172]],
		label: $.t("sidebar.treasure"),
		popup: $.t("treasure.desc")
	},{
		coords: [[149.531,83.844]],
		label: $.t("sidebar.treasure"),
		popup: $.t("treasure.desc")
	},{
		coords: [[68.999,54.563]],
		label: $.t("sidebar.treasure"),
		popup: $.t("treasure.desc")
	},{
		coords: [[99.719,192.437]],
		label: $.t("sidebar.treasure"),
		popup: $.t("treasure.desc")
	},{
		coords: [[88.219,38.438]],
		label: $.t("sidebar.treasure"),
		popup: $.t("treasure.desc")
	},{
		coords: [[88.281,39.469]],
		label: $.t("sidebar.treasure"),
		popup: $.t("treasure.desc")
	},{
		coords: [[104.094,46.438]],
		label: $.t("sidebar.treasure"),
		popup: $.t("treasure.desc")
	},{
		coords: [[111.516,71.391]],
		label: $.t("sidebar.treasure"),
		popup: $.t("treasure.desc")
	},{
		coords: [[112.813,69.594]],
		label: $.t("sidebar.treasure"),
		popup: $.t("treasure.desc")
	},{
		coords: [[113.938,71.594]],
		label: $.t("sidebar.treasure"),
		popup: $.t("treasure.desc")
	},{
		coords: [[113.766,69.547]],
		label: $.t("sidebar.treasure"),
		popup: $.t("treasure.desc")
	},{
		coords: [[114.500,69.468]],
		label: $.t("sidebar.treasure"),
		popup: $.t("treasure.desc")
	},{
		coords: [[114.250,67.890]],
		label: $.t("sidebar.treasure"),
		popup: $.t("treasure.desc")
	},{
		coords: [[113.906,68.578]],
		label: $.t("sidebar.treasure"),
		popup: $.t("treasure.desc")
	},{
		coords: [[113.328,70.250]],
		label: $.t("sidebar.treasure"),
		popup: $.t("treasure.desc")
	},{
		coords: [[112.531,69.203]],
		label: $.t("sidebar.treasure"),
		popup: $.t("treasure.desc")
	},{
		coords: [[114.703,67.391]],
		label: $.t("sidebar.treasure"),
		popup: $.t("treasure.desc")
	},{
		coords: [[111.516,68.813]],
		label: $.t("sidebar.treasure"),
		popup: $.t("treasure.desc")
	},{
		coords: [[110.594,68.000]],
		label: $.t("sidebar.treasure"),
		popup: $.t("treasure.desc")
	},{
		coords: [[106.047,69.797]],
		label: $.t("sidebar.treasure"),
		popup: $.t("treasure.desc")
	},{
		coords: [[107.188,67.000]],
		label: $.t("sidebar.treasure"),
		popup: $.t("treasure.desc")
	},{
		coords: [[106.719,66.766]],
		label: $.t("sidebar.treasure"),
		popup: $.t("treasure.desc")
	},{
		coords: [[106.219,66.313]],
		label: $.t("sidebar.treasure"),
		popup: $.t("treasure.desc")
	},{
		coords: [[106.297,65.078]],
		label: $.t("sidebar.treasure"),
		popup: $.t("treasure.desc")
	},{
		coords: [[109.906,68.063]],
		label: $.t("sidebar.treasure"),
		popup: $.t("treasure.desc")
	},{
		coords: [[102.297,62.797]],
		label: $.t("sidebar.treasure"),
		popup: $.t("treasure.desc")
	},{
		coords: [[197.110,109.250]],
		label: $.t("sidebar.treasure"),
		popup: $.t("treasure.desc")
	},{
		coords: [[102.578,68.516]],
		label: $.t("sidebar.treasure"),
		popup: $.t("treasure.desc")
	},{
		coords: [[95.843,66.062]],
		label: $.t("sidebar.treasure") + '*',
		popup: $.t("s:treasure.desc.toodeep")
	},{
		coords: [[62.969,192.562]],
		label: $.t("sidebar.treasure") + ' (' + $.t("misc.underground") + ')',
		popup: $.t("treasure.desc") + $.t("misc.entrance1",{x1: $.t("<a href='#6/-77.133/56.646\'>"), end: $.t("</a>")})
	},{
		coords: [[134.500,101.953]],
		label: $.t("sidebar.treasure") + ' (' + $.t("misc.underground") + ')',
		popup: $.t("treasure.desc") + $.t("misc.entrance1",{x1: $.t("<a href='#6/-23.322/-67.983\'>"), end: $.t("</a>")})
	},{
		coords: [[128.015,218.547]],
		label: $.t("sidebar.treasure") + ' (' + $.t("misc.underground") + ')',
		popup: $.t("treasure.desc") + $.t("misc.entrance1",{x1: $.t("<a href='#6/-29.955/94.131\'>"), end: $.t("</a>")})
	},{
		coords: [[129.297,218.156]],
		label: $.t("sidebar.treasure") + ' (' + $.t("misc.underground") + ')',
		popup: $.t("treasure.desc") + $.t("misc.entrance1",{x1: $.t("<a href='#6/-29.955/94.131\'>"), end: $.t("</a>")})
	},{
		coords: [[84.454,133.407]],
		label: $.t("sidebar.treasure") + ' (' + $.t("misc.underground") + ')',
		popup: $.t("treasure.desc") + $.t("misc.entrance1",{x1: $.t("<a href='#6/-69.938/-23.906\'>"), end: $.t("</a>")})
	},{
		coords: [[101.484,118.985]],
		label: $.t("sidebar.treasure") + ' (' + $.t("misc.underground") + ')',
		popup: $.t("treasure.desc") + $.t("misc.entrance1",{x1: $.t("<a href='#6/-57.017/-49.812\'>"), end: $.t("</a>")})
	},{
		coords: [[104.453,168.641]],
		label: $.t("sidebar.treasure") + ' (' + $.t("misc.underground") + ')',
		popup: $.t("treasure.desc") + $.t("misc.entrance1",{x1: $.t("<a href='#6/-56.801/23.379\'>"), end: $.t("</a>")})
	},{
		coords: [[104.688,166.219]],
		label: $.t("sidebar.treasure") + ' (' + $.t("misc.underground") + ')',
		popup: $.t("treasure.desc") + $.t("misc.entrance1",{x1: $.t("<a href='#6/-56.801/23.379\'>"), end: $.t("</a>")})
	},{
		coords: [[102.750,167.187]],
		label: $.t("sidebar.treasure") + ' (' + $.t("misc.underground") + ')',
		popup: $.t("treasure.desc") + $.t("misc.entrance1",{x1: $.t("<a href='#6/-56.801/23.379\'>"), end: $.t("</a>")})
	},{
		coords: [[119.766,139.797]],	
		label: $.t("sidebar.treasure") + ' (' + $.t("misc.underground") + ')',
		popup: $.t("treasure.desc") + $.t("misc.entrance1",{x1: $.t("<a href='#6/-38.805/-20.193\'>"), end: $.t("</a>")})
	},{
		coords: [[60.719,201.375]],
		label: $.t("sidebar.treasure") + ' (' + $.t("misc.underground") + ')',
		popup: $.t("treasure.desc") + $.t("misc.entrance1",{x1: $.t("<a href='#6/-78.587/68.071\'>"), end: $.t("</a>")})
	},{
		coords: [[149.922,152.844]],
		label: $.t("sidebar.treasure") + ' (' + $.t("misc.underground") + ')',
		popup: $.t("treasure.desc") + $.t("misc.entrance1",{x1: $.t("<a href='#6/-1.801/-1.099\'>"), end: $.t("</a>")})
	},{
		coords: [[149.109,152.406]],
		label: $.t("sidebar.treasure") + ' (' + $.t("misc.underground") + ')',
		popup: $.t("treasure.desc") + $.t("misc.entrance1",{x1: $.t("<a href='#6/-1.801/-1.099\'>"), end: $.t("</a>")})
	},{
		coords: [[148.703,151.531]],
		label: $.t("sidebar.treasure") + ' (' + $.t("misc.underground") + ')',
		popup: $.t("treasure.desc") + $.t("misc.entrance1",{x1: $.t("<a href='#6/-1.801/-1.099\'>"), end: $.t("</a>")})
	},{
		coords: [[149.906,151.063]],
		label: $.t("sidebar.treasure") + ' (' + $.t("misc.underground") + ')',
		popup: $.t("treasure.desc") + $.t("misc.entrance1",{x1: $.t("<a href='#6/-1.801/-1.099\'>"), end: $.t("</a>")})
	},{
		coords: [[114.328,128.828]],
		label: $.t("sidebar.treasure") + ' (' + $.t("misc.underground") + ')',
		popup: $.t("treasure.desc") + $.t("misc.entrance2",{x1: $.t("<a href='#6/-45.722/-30.256\'>"), x2: $.t("<a href='#6/-50.078/-33.245\'>"), end: $.t("</a>")})
	},{
		coords: [[102.656,63.937]],
		label: $.t("sidebar.treasure") + ' (' + $.t("misc.underground") + ')',
		popup: $.t("treasure.desc") + $.t("misc.entrance2",{x1: $.t("<a href='#6/-56.933/-124.343\'>"), x2: $.t("<a href='#6/-56.753/-123.201\'>"), end: $.t("</a>")})
	},{
		coords: [[113.281,129.938]],
		label: $.t("sidebar.treasure") + ' (' + $.t("misc.underground") + ')',
		popup: $.t("treasure.desc") + $.t("misc.entrance2",{x1: $.t("<a href='#6/-45.722/-30.256\'>"), x2: $.t("<a href='#6/-50.078/-33.245\'>"), end: $.t("</a>")})
	},{
		coords: [[149.875,137.156]],
		label: $.t("sidebar.treasure") + ' (' + $.t("misc.underground") + ')',
		popup: $.t("treasure.desc") + $.t("misc.entrance2",{x1: $.t("<a href='#6/9.926/-22.168\'>"), x2: $.t("<a href='#6/-2.416/-21.841\'>"), end: $.t("</a>")})
	},{
		coords: [[154.453,134.359]],
		label: $.t("sidebar.treasure") + ' (' + $.t("misc.underground") + ')',
		popup: $.t("treasure.desc") + $.t("misc.entrance2",{x1: $.t("<a href='#6/9.926/-22.168\'>"), x2: $.t("<a href='#6/-2.416/-21.841\'>"), end: $.t("</a>")})
	},{
		coords: [[154.235,134.000]],
		label: $.t("sidebar.treasure") + ' (' + $.t("misc.underground") + ')',
		popup: $.t("treasure.desc") + $.t("misc.entrance2",{x1: $.t("<a href='#6/9.926/-22.168\'>"), x2: $.t("<a href='#6/-2.416/-21.841\'>"), end: $.t("</a>")})
	},{
		coords: [[154.734,133.625]],
		label: $.t("sidebar.treasure") + ' (' + $.t("misc.underground") + ')',
		popup: $.t("treasure.desc") + $.t("misc.entrance2",{x1: $.t("<a href='#6/9.926/-22.168\'>"), x2: $.t("<a href='#6/-2.416/-21.841\'>"), end: $.t("</a>")})
	},{
		coords: [[158.094,134.656]],
		label: $.t("sidebar.treasure") + ' (' + $.t("misc.underground") + ')',
		popup: $.t("treasure.desc") + $.t("misc.entrance2",{x1: $.t("<a href='#6/9.926/-22.168\'>"), x2: $.t("<a href='#6/-2.416/-21.841\'>"), end: $.t("</a>")})
	},{
		coords: [[153.922,135.750]],
		label: $.t("sidebar.treasure") + ' (' + $.t("misc.underground") + ')',
		popup: $.t("treasure.desc") + $.t("misc.entrance2",{x1: $.t("<a href='#6/9.926/-22.168\'>"), x2: $.t("<a href='#6/-2.416/-21.841\'>"), end: $.t("</a>")})
	},{
		coords: [[153.734,133.578]],
		label: $.t("sidebar.treasure") + ' (' + $.t("misc.underground") + ')',
		popup: $.t("treasure.desc") + $.t("misc.entrance2",{x1: $.t("<a href='#6/9.926/-22.168\'>"), x2: $.t("<a href='#6/-2.416/-21.841\'>"), end: $.t("</a>")})
	},{
		coords: [[150.250,133.594]],
		label: $.t("sidebar.treasure") + ' (' + $.t("misc.underground") + ')',
		popup: $.t("treasure.desc") + $.t("misc.entrance2",{x1: $.t("<a href='#6/9.926/-22.168\'>"), x2: $.t("<a href='#6/-2.416/-21.841\'>"), end: $.t("</a>")})
	},{
		coords: [[149.688,131.969]],
		label: $.t("sidebar.treasure") + ' (' + $.t("misc.underground") + ')',
		popup: $.t("treasure.desc") + $.t("misc.entrance2",{x1: $.t("<a href='#6/9.926/-22.168\'>"), x2: $.t("<a href='#6/-2.416/-21.841\'>"), end: $.t("</a>")})
	},{
		coords: [[149.172,135.718]],
		label: $.t("sidebar.treasure") + ' (' + $.t("misc.underground") + ')',
		popup: $.t("treasure.desc") + $.t("misc.entrance2",{x1: $.t("<a href='#6/9.926/-22.168\'>"), x2: $.t("<a href='#6/-2.416/-21.841\'>"), end: $.t("</a>")})
	},{
		coords: [[150.375,135.422]],
		label: $.t("sidebar.treasure") + ' (' + $.t("misc.underground") + ')',
		popup: $.t("treasure.desc") + $.t("misc.entrance2",{x1: $.t("<a href='#6/9.926/-22.168\'>"), x2: $.t("<a href='#6/-2.416/-21.841\'>"), end: $.t("</a>")})
	},{
		coords: [[150.719,135.688]],
		label: $.t("sidebar.treasure") + ' (' + $.t("misc.underground") + ')',
		popup: $.t("treasure.desc") + $.t("misc.entrance2",{x1: $.t("<a href='#6/9.926/-22.168\'>"), x2: $.t("<a href='#6/-2.416/-21.841\'>"), end: $.t("</a>")})
	},{
		coords: [[149.375,136.625]],
		label: $.t("sidebar.treasure") + ' (' + $.t("misc.underground") + ')',
		popup: $.t("treasure.desc") + $.t("misc.entrance2",{x1: $.t("<a href='#6/9.926/-22.168\'>"), x2: $.t("<a href='#6/-2.416/-21.841\'>"), end: $.t("</a>")})
	},{
		coords: [[144.750,132.500]],
		label: $.t("sidebar.treasure") + ' (' + $.t("misc.underground") + ')',
		popup: $.t("treasure.desc") + $.t("misc.entrance2",{x1: $.t("<a href='#6/-9.167/-28.081\'>"), x2: $.t("<a href='#6/-13.24/-27.598\'>"), end: $.t("</a>")})
	},{
		coords: [[194.015,175.516]],
		label: $.t("sidebar.treasure") + ' (' + $.t("misc.underground") + ')',
		popup: $.t("treasure.desc") + $.t("misc.entrance3",{x1: $.t("<a href='#6/52.882,/34.277\'>"), x2: $.t("<a href='#6/47.070/31.948\'>"), x3: $.t("<a href='#6/50.317/33.289\'>"), end: $.t("</a>")})
	},{
		coords: [[93.655,58.625]],
		label: $.t("sidebar.treasure") + ' (' + $.t("misc.underground") + ')',
		popup: $.t("treasure.desc") + $.t("misc.entrance3",{x1: $.t("<a href='#6/-60.791/-127.375\'>"), x2: $.t("<a href='#6/-60.305/-125.486\'>"), x3: $.t("<a href='#6/-61.228/-122.454\'>"), end: $.t("</a>")})
	},{
		coords: [[94.656,63.500]],
		label: $.t("sidebar.treasure") + ' (' + $.t("misc.underground") + ')',
		popup: $.t("treasure.desc") + $.t("misc.entrance3",{x1: $.t("<a href='#6/-60.791/-127.375\'>"), x2: $.t("<a href='#6/-60.305/-125.486\'>"), x3: $.t("<a href='#6/-61.228/-122.454\'>"), end: $.t("</a>")})
	},{
		coords: [[95.485,62.812]],
		label: $.t("sidebar.treasure") + ' (' + $.t("misc.underground") + ')',
		popup: $.t("treasure.desc") + $.t("misc.entrance3",{x1: $.t("<a href='#6/-60.791/-127.375\'>"), x2: $.t("<a href='#6/-60.305/-125.486\'>"), x3: $.t("<a href='#6/-61.228/-122.454\'>"), end: $.t("</a>")})
	},{
		coords: [[96.750,61.860]],
		label: $.t("sidebar.treasure") + ' (' + $.t("misc.underground") + ')',
		popup: $.t("treasure.desc") + $.t("misc.entrance3",{x1: $.t("<a href='#6/-60.791/-127.375\'>"), x2: $.t("<a href='#6/-60.305/-125.486\'>"), x3: $.t("<a href='#6/-61.228/-122.454\'>"), end: $.t("</a>")})
	},{
		coords: [[95.155,61.922]],
		label: $.t("sidebar.treasure") + ' (' + $.t("misc.underground") + ')',
		popup: $.t("treasure.desc") + $.t("misc.entrance3",{x1: $.t("<a href='#6/-60.791/-127.375\'>"), x2: $.t("<a href='#6/-60.305/-125.486\'>"), x3: $.t("<a href='#6/-61.228/-122.454\'>"), end: $.t("</a>")})
	},{
		coords: [[95.329,60.953]],
		label: $.t("sidebar.treasure") + ' (' + $.t("misc.underground") + ')',
		popup: $.t("treasure.desc") + $.t("misc.entrance3",{x1: $.t("<a href='#6/-60.791/-127.375\'>"), x2: $.t("<a href='#6/-60.305/-125.486\'>"), x3: $.t("<a href='#6/-61.228/-122.454\'>"), end: $.t("</a>")})
	},{
		coords: [[96.281,60.235]],
		label: $.t("sidebar.treasure") + ' (' + $.t("misc.underground") + ')',
		popup: $.t("treasure.desc") + $.t("misc.entrance3",{x1: $.t("<a href='#6/-60.791/-127.375\'>"), x2: $.t("<a href='#6/-60.305/-125.486\'>"), x3: $.t("<a href='#6/-61.228/-122.454\'>"), end: $.t("</a>")})
	},{
		coords: [[93.171,62.969]],
		label: $.t("sidebar.treasure") + ' (' + $.t("misc.underground") + ')',
		popup: $.t("treasure.desc") + $.t("misc.entrance3",{x1: $.t("<a href='#6/-60.791/-127.375\'>"), x2: $.t("<a href='#6/-60.305/-125.486\'>"), x3: $.t("<a href='#6/-61.228/-122.454\'>"), end: $.t("</a>")})
	},{
		coords: [[96.297,63.172]],
		label: $.t("sidebar.treasure") + ' (' + $.t("misc.underground") + ')',
		popup: $.t("treasure.desc") + $.t("misc.entrance3",{x1: $.t("<a href='#6/-60.791/-127.375\'>"), x2: $.t("<a href='#6/-60.305/-125.486\'>"), x3: $.t("<a href='#6/-61.228/-122.454\'>"), end: $.t("</a>")})
	},{
		coords: [[95.125,64.250]],
		label: $.t("sidebar.treasure") + ' (' + $.t("misc.underground") + ')',
		popup: $.t("treasure.desc") + $.t("misc.entrance3",{x1: $.t("<a href='#6/-60.791/-127.375\'>"), x2: $.t("<a href='#6/-60.305/-125.486\'>"), x3: $.t("<a href='#6/-61.228/-122.454\'>"), end: $.t("</a>")})
	},
	//Underwater Treause
	{
		coords: [[146.907,221.844]],
		label: $.t("treasure.watertreasure"),
		popup: $.t("treasure.desc")
	},{
		coords: [[151.812,210.500]],
		label: $.t("treasure.watertreasure") + '*',
		popup: $.t("misc.dactive",{quest: $.t("sidequests.label.last")}) + $.t("treasure.desc")
	},{
		coords: [[138.640,229.750]],
		label: $.t("treasure.watertreasure") + ' (' + $.t("misc.underground") + ')' + '*',
		popup: $.t("misc.dactive",{quest: $.t("sidequests.label.last")}) + $.t("misc.entrance1",{x1: $.t("<a href='#6/-56.801/23.379\'>"), end: $.t("</a>")}) + $.t("treasure.desc")
	},{
		coords: [[147.469,221.468]],
		label: $.t("treasure.watertreasure"),
		popup: $.t("treasure.desc")
	},{
		coords: [[150.469,125.015]],
		label: $.t("treasure.watertreasure"),
		popup: $.t("treasure.desc")
	},{
		coords: [[149.844,124.906]],
		label: $.t("treasure.watertreasure"),
		popup: $.t("treasure.desc")
	},{
		coords: [[63.764,176.937]],
		label: $.t("treasure.watertreasure"),
		popup: $.t("treasure.desc")
	},{
		coords: [[144.281,167.906]],
		label: $.t("treasure.watertreasure"),
		popup: $.t("treasure.desc")
	},{
		coords: [[156.906,163.734]],
		label: $.t("treasure.watertreasure"),
		popup: $.t("treasure.desc")
	},{
		coords: [[157.719,164.343]],
		label: $.t("treasure.watertreasure"),
		popup: $.t("treasure.desc")
	},{
		coords: [[103.531,167.312]],
		label: $.t("treasure.watertreasure") + ' (' + $.t("misc.underground") + ')',
		popup: $.t("treasure.desc") + $.t("misc.entrance1",{x1: $.t("<a href='#6/-56.801/23.379\'>"), end: $.t("</a>")})
	},{
		coords: [[197.438,90.313]],
		label: $.t("treasure.watertreasure"),
		popup: $.t("treasure.desc")
	},{
		coords: [[191.312,197.188]],
		label: $.t("treasure.watertreasure"),
		popup: $.t("treasure.desc")
	},{
		coords: [[157.125,192.031]],
		label: $.t("treasure.watertreasure"),
		popup: $.t("treasure.desc")
	},{
		coords: [[134.656,224.937]],
		label: $.t("treasure.watertreasure"),
		popup: $.t("treasure.desc")
	},{
		coords: [[119.562,219.812]],
		label: $.t("treasure.watertreasure"),
		popup: $.t("treasure.desc")
	},{
		coords: [[119.891,220.359]],
		label: $.t("treasure.watertreasure"),
		popup: $.t("treasure.desc")
	},{
		coords: [[129.250,101.656]],
		label: $.t("treasure.watertreasure"),
		popup: $.t("treasure.desc")
	},{
		coords: [[125.547,112.063]],
		label: $.t("treasure.watertreasure"),
		popup: $.t("treasure.desc")
	},{
		coords: [[98.203,155.359]],
		label: $.t("treasure.watertreasure"),
		popup: $.t("treasure.desc")
	},{
		coords: [[99.156,160.469]],
		label: $.t("treasure.watertreasure"),
		popup: $.t("treasure.desc")
	},{
		coords: [[133.938,125.500]],
		label: $.t("treasure.watertreasure"),
		popup: $.t("treasure.desc")
	},{
		coords: [[121.578,130.516]],
		label: $.t("treasure.watertreasure"),
		popup: $.t("treasure.desc")
	},{
		coords: [[111.703,142.593]],
		label: $.t("treasure.watertreasure"),
		popup: $.t("treasure.desc")
	},{
		coords: [[116.797,139.578]],
		label: $.t("treasure.watertreasure"),
		popup: $.t("treasure.desc")
	},{
		coords: [[98.500,155.344]],
		label: $.t("treasure.watertreasure"),
		popup: $.t("treasure.desc")
	},{
		coords: [[143.547,170.266]],
		label: $.t("treasure.watertreasure"),
		popup: $.t("treasure.desc")
	},{
		coords: [[146.687,166.438]],
		label: $.t("treasure.watertreasure"),
		popup: $.t("treasure.desc")
	},{
		coords: [[148.219,165.344]],
		label: $.t("treasure.watertreasure"),
		popup: $.t("treasure.desc")
	},{
		coords: [[151.344,164.656]],
		label: $.t("treasure.watertreasure"),
		popup: $.t("treasure.desc")
	},{
		coords: [[152.782,164.000]],
		label: $.t("treasure.watertreasure"),
		popup: $.t("treasure.desc")
	},{
		coords: [[157.937,164.562]],
		label: $.t("treasure.watertreasure"),
		popup: $.t("treasure.desc")
	},{
		coords: [[77.344,152.735]],
		label: $.t("treasure.watertreasure"),
		popup: $.t("treasure.desc")
	},{
		coords: [[137.797,207.359]],
		label: $.t("treasure.watertreasure"),
		popup: $.t("treasure.desc")
	},{
		coords: [[189.312,170.906]],
		label: $.t("treasure.watertreasure"),
		popup: $.t("treasure.desc")
	},{
		coords: [[202.532,148.094]],
		label: $.t("treasure.watertreasure"),
		popup: $.t("treasure.desc")
	},{
		coords: [[195.468,111.234]],
		label: $.t("treasure.watertreasure"),
		popup: $.t("treasure.desc")
	},{
		coords: [[196.734,98.125]],
		label: $.t("treasure.watertreasure"),
		popup: $.t("treasure.desc")
	},{
		coords: [[110.062,72.813]],
		label: $.t("treasure.watertreasure"),
		popup: $.t("treasure.desc")
	},{
		coords: [[120.187,59.359]],
		label: $.t("treasure.watertreasure"),
		popup: $.t("treasure.desc")
	},{
		coords: [[194.797,176.531]],
		label: $.t("treasure.watertreasure") + ' (' + $.t("misc.underground") + ')',
		popup: $.t("treasure.desc") + $.t("misc.entrance3",{x1: $.t("<a href='#6/52.882,/34.277\'>"), x2: $.t("<a href='#6/47.070/31.948\'>"), x3: $.t("<a href='#6/50.317/33.289\'>"), end: $.t("</a>")})
	},{
		coords: [[192.265,175.797]],
		label: $.t("treasure.watertreasure") + ' (' + $.t("misc.underground") + ')',
		popup: $.t("treasure.desc") + $.t("misc.entrance3",{x1: $.t("<a href='#6/52.882,/34.277\'>"), x2: $.t("<a href='#6/47.070/31.948\'>"), x3: $.t("<a href='#6/50.317/33.289\'>"), end: $.t("</a>")})
	},{
		coords: [[94.313,62.031]],
		label: $.t("treasure.watertreasure") + ' (' + $.t("misc.underground") + ')',
		popup: $.t("treasure.desc") + $.t("misc.entrance3",{x1: $.t("<a href='#6/-60.791/-127.375\'>"), x2: $.t("<a href='#6/-60.305/-125.486\'>"), x3: $.t("<a href='#6/-61.228/-122.454\'>"), end: $.t("</a>")})
	},{
		coords: [[92.875,62.094]],
		label: $.t("treasure.watertreasure") + ' (' + $.t("misc.underground") + ')',
		popup: $.t("treasure.desc") + $.t("misc.entrance3",{x1: $.t("<a href='#6/-60.791/-127.375\'>"), x2: $.t("<a href='#6/-60.305/-125.486\'>"), x3: $.t("<a href='#6/-61.228/-122.454\'>"), end: $.t("</a>")})
	},{
		coords: [[96.093,59.078]],
		label: $.t("treasure.watertreasure") + ' (' + $.t("misc.underground") + ')',
		popup: $.t("treasure.desc") + $.t("misc.entrance3",{x1: $.t("<a href='#6/-60.791/-127.375\'>"), x2: $.t("<a href='#6/-60.305/-125.486\'>"), x3: $.t("<a href='#6/-61.228/-122.454\'>"), end: $.t("</a>")})
	},{
		coords: [[91.203,63.781]],
		label: $.t("treasure.watertreasure") + ' (' + $.t("misc.underground") + ')',
		popup: $.t("treasure.desc") + $.t("misc.entrance3",{x1: $.t("<a href='#6/-60.791/-127.375\'>"), x2: $.t("<a href='#6/-60.305/-125.486\'>"), x3: $.t("<a href='#6/-61.228/-122.454\'>"), end: $.t("</a>")})
	}],
	
	//------------------------------------------------Vineyard Infestation------------------------------------------------
	vineyardinfestation: []
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
