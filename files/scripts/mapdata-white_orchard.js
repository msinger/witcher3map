window.map_path  = 'white_orchard';
window.map_sWest = L.latLng(-32,-32);
window.map_nEast = L.latLng(128+32,160+32);
window.map_center = [64.000,80.000];
window.map_minZoom = 2;
window.map_mZoom = 7;
window.map_natZoom = 5;
window.map_Zoom = 3;
window.mapdata_white_orchard = {
	//------------------------------------------------Abandoned Site------------------------------------------------
	abandoned: [{
		coords: [[36.938,93.437]],
		label: $.t("abandoned.label"),
		popup: $.t("abandoned.desc")
	},{
		coords: [[66.126,19.312]],
		label: $.t("abandoned.label"),
		popup: $.t("abandoned.desc")
	}],

	//------------------------------------------------Alchemy Supplies------------------------------------------------
	alchemy: [],

	//------------------------------------------------Armourer------------------------------------------------
	armourer: [{
		coords: [[59.187,64.750]],
		label: $.t("sidebar.armourer"),
		popupTitle: $.t("sidebar.armourer") + ' - ' + $.t("craftlevels.Amateur"),
		popup: $.t("armourer.desc")
	}],

	//------------------------------------------------Armourer's Table------------------------------------------------
	armourerstable: [{
		coords: [[109.345,19.528]],
		label: $.t("armourerstable.label"),
		popup: $.t("armourerstable.desc")
	}],

	//------------------------------------------------Bandit Camp------------------------------------------------
	banditcamp: [{
		coords: [[21.624,41.125]],
		label: $.t("banditcamp.label"),
		popup: $.t("banditcamp.desc")
	},{
		coords: [[48.563,97.125]],
		label: $.t("banditcamp.label"),
		popup: $.t("banditcamp.desc")
	},{
		coords: [[82.585,15.844]],
		label: $.t("banditcamp.label"),
		popup: $.t("banditcamp.desc")
	},{
		coords: [[102.000,109.840]],
		label: $.t("banditcamp.label"),
		popup: $.t("banditcamp.desc")
	},{
		coords: [[51.844,116.125]],
		label: $.t("banditcamp.label"),
		popup: $.t("banditcamp.desc")
	},{
		coords: [[64.907,114.000]],
		label: $.t("banditcamp.label"),
		popup: $.t("banditcamp.desc")
	}],

	//------------------------------------------------Barber------------------------------------------------
	barber: [],

	//------------------------------------------------Blacksmith------------------------------------------------
	blacksmith: [{
		coords: [[108.062,20.375]],
		label: $.t("sidebar.blacksmith"),
		popupTitle: $.t("sidebar.blacksmith") + ' - ' + $.t("craftlevels.Amateur"),
		popup: $.t("blacksmith.desc")
	}],

	//------------------------------------------------Boat------------------------------------------------
	boat: [],

	//------------------------------------------------Brothel------------------------------------------------
	brothel: [],
	
	//------------------------------------------------Contracts------------------------------------------------
	contracts: [{
		coords: [[62.406,64.437]],
		label: $.t("contracts.label.devil"),
		popup: $.t("misc.disappears",{quest: $.t("mainquests.label.ice")}) + $.t("contracts.desc.devil")
	}],
	
	//------------------------------------------------Entrance------------------------------------------------
	entrance: [{
		coords: [[30.376,68.125]],
		label: $.t("sidebar.entrance"),
		popup: $.t("entrance.desc.entry"),
	},{
		coords: [[36.563,74.250]],
		label: $.t("sidebar.entrance"),
		popup: $.t("entrance.desc.entry")
	},{
		coords: [[102.563,60.782]],
		label: $.t("sidebar.entrance"),
		popup: $.t("entrance.desc.exit")
	}],
	
	//------------------------------------------------Events------------------------------------------------
	event: [{
		coords: [[64.938,34.313]],
		label: $.t("event.label.tomira") + '*',
		popup: $.t("misc.dactive",{quest: $.t("mainquests.label.something")}) + $.t("event.desc.tomira")
	},{
		coords: [[88.688,38.125]],
		label: $.t("event.label.dwarves") + '*',
		popup: $.t("misc.dactive",{quest: $.t("mainquests.label.something")}) + $.t("event.desc.dwarves")
	}],

	//------------------------------------------------Grindstone------------------------------------------------
	grindstone: [{
		coords: [[60.017,65.276]],
		label: $.t("sidebar.grindstone") + '*',
		popup: $.t("w:grindstone.desc.forge",{quest: $.t("sidequests.label.twist")}) + $.t("grindstone.desc")
	},{
		coords: [[67.250,17.625]],
		label: $.t("sidebar.grindstone"),
		popup: $.t("grindstone.desc")
	},{
		coords: [[108.125,21.375]],
		label: $.t("sidebar.grindstone"),
		popup: $.t("grindstone.desc")
	}],

	//------------------------------------------------Guarded Treasure------------------------------------------------
	guarded: [{
		coords: [[45.624,85.500]],
		label: $.t("sidebar.guarded"),
		popup: $.t("guarded.desc")
	},{
		coords: [[88.437,8.750]],
		label: $.t("sidebar.guarded"),
		popup: $.t("guarded.desc")
	},{
		coords: [[105.910,59.063]],
		label: $.t("sidebar.guarded") + ' (' + $.t("misc.underground") + ')',
		popup: $.t("guarded.desc") + $.t("<br />") + $.t("misc.entrance1",{x1: $.t("<a href='#6/-33.651/-94.526\'>"), end: $.t("</a>")})
	},{
		coords: [[107.781,32.656]],
		label: $.t("sidebar.guarded"),
		popup: $.t("guarded.desc")
	},{
		coords: [[46.000,128.250]],
		label: $.t("sidebar.guarded"),
		popup: $.t("guarded.desc")
	}],

	//------------------------------------------------Gwent Player------------------------------------------------
	gwent: [{
		coords: [[66.030,70.938]],
		label: $.t("sidebar.gwent") + '*',
		popup: $.t("misc.disappears",{quest: $.t("mainquests.label.incident")})
	}],
	
	//------------------------------------------------Gwent Quest------------------------------------------------
	gwentquest: [],
	
	//------------------------------------------------Hanse Base------------------------------------------------
	hansebase: [],

	//------------------------------------------------Harbor------------------------------------------------
	harbor: [],

	//------------------------------------------------Herbalist------------------------------------------------
	herbalist: [{
		coords: [[64.437,33.687]],
		label: $.t("sidebar.herbalist"),
		popup: $.t("herbalist.desc")
	},{
		coords: [[37.750,93.125]],
		label: $.t("sidebar.herbalist") + '*',
		popup: $.t("misc.liberated") + $.t("herbalist.desc")
	}],

	//------------------------------------------------Hidden Treasure------------------------------------------------
	hidden: [{
		coords: [[89.812,49.062]],
		label: $.t("sidebar.hidden"),
		popupTitle: $.t("treasure.label") +$.t(": ") +$.t("sidequests.label.tr_temerian"),
		popup: $.t("sidequests.desc.tr_temerian")
	},{
		coords: [[97.812,87.563]],
		label: $.t("sidebar.hidden"),
		popupTitle: $.t("treasure.label") +$.t(": ") +$.t("sidequests.label.tr_dirty"),
		popup: $.t("sidequests.desc.tr_dirty")
	},{
		coords: [[106.750,98.000]],
		label: $.t("sidebar.hidden"),
		popupTitle: $.t("treasure.label") +$.t(": ") +$.t("sidequests.label.tr_deserter"),
		popup: $.t("sidequests.desc.tr_deserter")
	}],

	//------------------------------------------------Hollow Treasure------------------------------------------------
	hollow: [{
		coords: [[75.875,131.312]],
		label: $.t("sidebar.hollow"),
		popup: $.t("hollow.desc")
	},{
		coords: [[61.156,114.656]],
		label: $.t("sidebar.hollow"),
		popup: $.t("hollow.desc")
	},{
		coords: [[68.875,119.187]],
		label: $.t("sidebar.hollow"),
		popup: $.t("hollow.desc")
	},{
		coords: [[79.187,15.312]],
		label: $.t("sidebar.hollow"),
		popup: $.t("hollow.desc")
	},{
		coords: [[29.405,80.750]],
		label: $.t("sidebar.hollow"),
		popup: $.t("hollow.desc")
	},{
		coords: [[115.812,50.750]],
		label: $.t("sidebar.hollow"),
		popup: $.t("hollow.desc")
	},{
		coords: [[115.250,59.500]],
		label: $.t("sidebar.hollow"),
		popup: $.t("hollow.desc")
	},{
		coords: [[35.030,103.063]],
		label: $.t("sidebar.hollow"),
		popup: $.t("hollow.desc")
	},{
		coords: [[93.063,139.375]],
		label: $.t("sidebar.hollow"),
		popup: $.t("hollow.desc")
	},{
		coords: [[97.281,132.656]],
		label: $.t("sidebar.hollow"),
		popup: $.t("hollow.desc")
	},{
		coords: [[84.187,94.563]],
		label: $.t("sidebar.hollow"),
		popup: $.t("hollow.desc")
	},{
		coords: [[112.125,62.750]],
		label: $.t("sidebar.hollow"),
		popup: $.t("hollow.desc")
	},{
		coords: [[59.999,121.188]],
		label: $.t("sidebar.hollow"),
		popup: $.t("hollow.desc")
	},{
		coords: [[76.000,10.875]],
		label: $.t("sidebar.hollow"),
		popup: $.t("hollow.desc")
	},{
		coords: [[75.687,15.688]],
		label: $.t("sidebar.hollow"),
		popup: $.t("hollow.desc")
	},{
		coords: [[72.343,12.969]],
		label: $.t("sidebar.hollow"),
		popup: $.t("hollow.desc")
	},{
		coords: [[61.781,128.469]],
		label: $.t("sidebar.hollow"),
		popup: $.t("hollow.desc")
	},{
		coords: [[32.062,60.500]],
		label: $.t("sidebar.hollow"),
		popup: $.t("hollow.desc")
	},{
		coords: [[85.438,142.469]],
		label: $.t("sidebar.hollow"),
		popup: $.t("hollow.desc")
	},{
		coords: [[120.656,60.531]],
		label: $.t("sidebar.hollow"),
		popup: $.t("hollow.desc")
	}],
	
	//------------------------------------------------Honeycomb------------------------------------------------
	honeycomb: [{
		coords: [[67.750,41.938]],
		label: $.t("sidebar.honeycomb"),
		popup: $.t("honeycomb.desc")
	},{
		coords: [[67.313,35.000]],
		label: $.t("sidebar.honeycomb"),
		popup: $.t("honeycomb.desc")
	},{
		coords: [[62.313,26.062]],
		label: $.t("sidebar.honeycomb"),
		popup: $.t("honeycomb.desc")
	},{
		coords: [[64.063,16.500]],
		label: $.t("sidebar.honeycomb"),
		popup: $.t("honeycomb.desc")
	},{
		coords: [[64.875,17.562]],
		label: $.t("sidebar.honeycomb"),
		popup: $.t("honeycomb.desc")
	},{
		coords: [[69.219,18.906]],
		label: $.t("sidebar.honeycomb"),
		popup: $.t("honeycomb.desc")
	},{
		coords: [[69.093,16.844]],
		label: $.t("sidebar.honeycomb"),
		popup: $.t("honeycomb.desc")
	},{
		coords: [[69.875,14.844]],
		label: $.t("sidebar.honeycomb"),
		popup: $.t("honeycomb.desc")
	},{
		coords: [[81.875,15.563]],
		label: $.t("sidebar.honeycomb"),
		popup: $.t("honeycomb.desc")
	},{
		coords: [[73.343,4.906]],
		label: $.t("sidebar.honeycomb"),
		popup: $.t("honeycomb.desc")
	},{
		coords: [[72.500,5.125]],
		label: $.t("sidebar.honeycomb"),
		popup: $.t("honeycomb.desc")
	},{
		coords: [[87.750,24.125]],
		label: $.t("sidebar.honeycomb"),
		popup: $.t("honeycomb.desc")
	},{
		coords: [[94.500,17.375]],
		label: $.t("sidebar.honeycomb"),
		popup: $.t("honeycomb.desc")
	},{
		coords: [[96.281,16.000]],
		label: $.t("sidebar.honeycomb"),
		popup: $.t("honeycomb.desc")
	},{
		coords: [[78.781,31.937]],
		label: $.t("sidebar.honeycomb"),
		popup: $.t("honeycomb.desc")
	},{
		coords: [[78.187,32.031]],
		label: $.t("sidebar.honeycomb"),
		popup: $.t("honeycomb.desc")
	},{
		coords: [[86.937,30.313]],
		label: $.t("sidebar.honeycomb"),
		popup: $.t("honeycomb.desc")
	},{
		coords: [[90.000,30.500]],
		label: $.t("sidebar.honeycomb"),
		popup: $.t("honeycomb.desc")
	},{
		coords: [[86.001,35.969]],
		label: $.t("sidebar.honeycomb"),
		popup: $.t("honeycomb.desc")
	},{
		coords: [[92.125,32.531]],
		label: $.t("sidebar.honeycomb"),
		popup: $.t("honeycomb.desc")
	},{
		coords: [[106.907,32.562]],
		label: $.t("sidebar.honeycomb"),
		popup: $.t("honeycomb.desc")
	},{
		coords: [[97.438,37.531]],
		label: $.t("sidebar.honeycomb"),
		popup: $.t("honeycomb.desc")
	},{
		coords: [[89.843,39.500]],
		label: $.t("sidebar.honeycomb"),
		popup: $.t("honeycomb.desc")
	},{
		coords: [[88.062,40.375]],
		label: $.t("sidebar.honeycomb"),
		popup: $.t("honeycomb.desc")
	},{
		coords: [[87.250,40.656]],
		label: $.t("sidebar.honeycomb"),
		popup: $.t("honeycomb.desc")
	},{
		coords: [[29.376,52.312]],
		label: $.t("sidebar.honeycomb"),
		popup: $.t("honeycomb.desc")
	},{
		coords: [[41.908,108.156]],
		label: $.t("sidebar.honeycomb"),
		popup: $.t("honeycomb.desc")
	},{
		coords: [[72.374,86.750]],
		label: $.t("sidebar.honeycomb"),
		popup: $.t("honeycomb.desc")
	},{
		coords: [[61.813,90.187]],
		label: $.t("sidebar.honeycomb"),
		popup: $.t("honeycomb.desc")
	},{
		coords: [[62.000,98.375]],
		label: $.t("sidebar.honeycomb"),
		popup: $.t("honeycomb.desc")
	},{
		coords: [[64.563,119.094]],
		label: $.t("sidebar.honeycomb"),
		popup: $.t("honeycomb.desc")
	},{
		coords: [[78.906,35.844]],
		label: $.t("sidebar.honeycomb"),
		popup: $.t("honeycomb.desc")
	},{
		coords: [[80.688,36.937]],
		label: $.t("sidebar.honeycomb"),
		popup: $.t("honeycomb.desc")
	},{
		coords: [[89.875,65.625]],
		label: $.t("sidebar.honeycomb"),
		popup: $.t("honeycomb.desc")
	},{
		coords: [[101.625,65.000]],
		label: $.t("sidebar.honeycomb"),
		popup: $.t("honeycomb.desc")
	},{
		coords: [[97.125,58.938]],
		label: $.t("sidebar.honeycomb"),
		popup: $.t("honeycomb.desc")
	},{
		coords: [[99.813,103.312]],
		label: $.t("sidebar.honeycomb"),
		popup: $.t("honeycomb.desc")
	},{
		coords: [[97.625,105.938]],
		label: $.t("sidebar.honeycomb"),
		popup: $.t("honeycomb.desc")
	},{
		coords: [[93.313,93.500]],
		label: $.t("sidebar.honeycomb"),
		popup: $.t("honeycomb.desc")
	},{
		coords: [[52.937,26.875]],
		label: $.t("sidebar.honeycomb"),
		popup: $.t("honeycomb.desc")
	},{
		coords: [[83.594,32.688]],
		label: $.t("sidebar.honeycomb"),
		popup: $.t("honeycomb.desc")
	},{
		coords: [[94.844,31.531]],
		label: $.t("sidebar.honeycomb"),
		popup: $.t("honeycomb.desc")
	},{
		coords: [[98.719,33.562]],
		label: $.t("sidebar.honeycomb"),
		popup: $.t("honeycomb.desc")
	},{
		coords: [[69.249,89.250]],
		label: $.t("sidebar.honeycomb"),
		popup: $.t("honeycomb.desc")
	},{
		coords: [[68.999,12.500]],
		label: $.t("sidebar.honeycomb"),
		popup: $.t("honeycomb.desc")
	},{
		coords: [[76.656,37.281]],
		label: $.t("sidebar.honeycomb"),
		popup: $.t("honeycomb.desc")
	},{
		coords: [[68.500,21.437]],
		label: $.t("sidebar.honeycomb"),
		popup: $.t("honeycomb.desc")
	},{
		coords: [[69.313,48.125]],
		label: $.t("sidebar.honeycomb"),
		popup: $.t("honeycomb.desc")
	},{
		coords: [[75.875,31.875]],
		label: $.t("sidebar.honeycomb"),
		popup: $.t("honeycomb.desc")
	}],
	
	//------------------------------------------------Innkeep------------------------------------------------
	innkeep: [{
		coords: [[65.125,70.219]],
		label: $.t("sidebar.innkeep") + '*',
		popupTitle: $.t("sidebar.innkeep") + ' - ' + $.t("w:innkeep.inns.whiteOrchardInn"),
		popup: $.t("misc.disappears",{quest: $.t("mainquests.label.incident")}) + $.t("innkeep.desc.foodDrinkAndGwent")
	}],

	//------------------------------------------------Knight in Distress------------------------------------------------
	kid: [],

	//------------------------------------------------Monster Den------------------------------------------------
	monsterden: [],

	//------------------------------------------------Monster Nest------------------------------------------------
	monsternest: [{
		coords: [[117.750,60.000]],
		label: $.t("sidebar.monsternest"),
		popup: $.t("monsternest.desc")
	},{
		coords: [[92.062,127.781]],
		label: $.t("sidebar.monsternest"),
		popup: $.t("monsternest.desc")
	},{
		coords: [[67.938,134.906]],
		label: $.t("sidebar.monsternest"),
		popup: $.t("monsternest.desc")
	}],

	//------------------------------------------------Notice Board------------------------------------------------
	notice: [{
		coords: [[61.937,64.437]],
		label: $.t("sidebar.notice"),
		popup: $.t("notice.desc")
	}],

	//------------------------------------------------Person in Distress------------------------------------------------
	pid: [],

	//------------------------------------------------Place of Power------------------------------------------------
	pop: [{
		coords: [[22.126,52.125]],
		label: $.t("sidebar.pop"),
		popupTitle: $.t("pop.popup",{sign: $.t("signs.quen")}),
		popup: $.t("pop.desc")
	},{
		coords: [[29.937,90.438]],
		label: $.t("sidebar.pop"),
		popupTitle: $.t("pop.popup",{sign: $.t("signs.yrden")}),
		popup: $.t("pop.desc")
	},{
		coords: [[85.094,35.281]],
		label: $.t("sidebar.pop"),
		popupTitle: $.t("pop.popup",{sign: $.t("signs.axii")}),
		popup: $.t("pop.desc")
	},{
		coords: [[102.062,61.125]],
		label: $.t("sidebar.pop"),
		popupTitle: $.t("pop.popup",{sign: $.t("signs.igni")}),
		popup: $.t("pop.desc")
	},{
		coords: [[118.438,58.625]],
		label: $.t("sidebar.pop"),
		popupTitle: $.t("pop.popup",{sign: $.t("signs.aard")}),
		popup: $.t("pop.desc")
	},{
		coords: [[93.313,128.219]],
		label: $.t("sidebar.pop"),
		popupTitle: $.t("pop.popup",{sign: $.t("signs.quen")}),
		popup: $.t("pop.desc")
	}],

	//------------------------------------------------Point of Interest------------------------------------------------
	poi: [{
		coords: [[87.250,133.687]],
		label: $.t("poi.label.lootableBattlefield"),
		popup: $.t("poi.desc.lootableBattlefield")
	},{
		coords: [[74.342,129.422]],
		label: $.t("w:poi.label.crystalSkull") + '*',
		popup: $.t("misc.disappears",{quest: $.t("mainquests.label.incident")}) + $.t("w:poi.desc.crystalSkull",{quest: $.t("sidequests.label.last")})
	},{
		coords: [[62.376,73.437]],
		label: $.t("w:poi.label.boss"),
		popup: $.t("w:poi.desc.boss")
	},{
		coords: [[32.408,69.906]],
		label: $.t("w:poi.label.diary"),
		popup: $.t("w:poi.desc.diary",{quest: $.t("contracts.label.devil")})
	}],

	//------------------------------------------------Scavengers------------------------------------------------
	scavenger: [{
		coords: [[51.754,115.911]],
		label: $.t("scavenger.dia") + $.t("scavenger.name.ser") + $.t("scavenger.level.1"),
		popup: $.t("scavenger.dia") + $.t("scavenger.name.ser") + $.t("scavenger.item.steel") + $.t("scavenger.level.1")
	},{
		coords: [[103.157,60.343]],
		label: $.t("scavenger.dia") + $.t("scavenger.name.ser") + $.t("scavenger.level.1") + ' (' + $.t("misc.underground") + ')',
		popup: $.t("scavenger.dia") + $.t("scavenger.name.ser") + $.t("scavenger.item.silver") + $.t("scavenger.level.1") + $.t("<br />") + $.t("misc.entrance1",{x1: $.t("<a href='#6/-33.651/-94.526\'>"), end: $.t("</a>")})
	}],

	//------------------------------------------------Shopkeeper------------------------------------------------
	shopkeeper: [{
		coords: [[64.344,74.187]],
		label: $.t("sidebar.shopkeeper"),
		popup: $.t("w:shopkeeper.desc.gwentCraftingAndHorse")
	},{
		coords: [[64.312,17.313]],
		label: $.t("sidebar.shopkeeper") + '*',
		popup: $.t("misc.liberated") + $.t("shopkeeper.desc.alchemyRunesAndFood")
	}],
	
	//------------------------------------------------Sidequests------------------------------------------------
	sidequests: [{
		coords: [[73.813,50.313]],
		label: $.t("sidequests.label.fry"),
		popup: $.t("sidequests.desc.fry")
	},{
		coords: [[59.782,64.719]],
		label: $.t("sidequests.label.twist"),
		popup: $.t("sidequests.desc.twist")
	},{
		coords: [[62.064,67.531]],
		label: $.t("sidequests.label.faith") + '*',
		popup: $.t("misc.dactive",{quest: $.t("mainquests.label.something")}) + $.t("sidequests.desc.faith")
	},{
		coords: [[48.469,124.407]],
		label: $.t("sidequests.label.missing"),
		popup: $.t("sidequests.desc.missing")
	},{
		coords: [[64.814,33.156]],
		label: $.t("sidequests.label.death1") + '*',
		popup: $.t("misc.dactive",{quest: $.t("mainquests.label.orchard")}) + $.t("sidequests.desc.death1")
	},{
		coords: [[89.813,26.126]],
		label: $.t("sidequests.label.precious"),
		popup: $.t("sidequests.desc.precious")
	}],

	//------------------------------------------------Sign Post------------------------------------------------
	signpost: [{
		coords: [[32.811,66.938]],
		label: $.t("w:signpost.label.abandonedVillage"),
		popup: $.t("w:signpost.desc.abandonedVillage")
	},{
		coords: [[36.499,49.906]],
		label: $.t("w:signpost.label.brokenBridge"),
		popup: $.t("w:signpost.desc.brokenBridge")
	},{
		coords: [[62.875,76.656]],
		label: $.t("w:signpost.label.woesongBridge"),
		popup: $.t("w:signpost.desc.woesongBridge")
	},{
		coords: [[65.875,27.125]],
		label: $.t("w:signpost.label.sawmill"),
		popup: $.t("w:signpost.desc.sawmill")
	},{
		coords: [[89.687,64.063]],
		label: $.t("w:signpost.label.mill"),
		popup: $.t("w:signpost.desc.mill")
	},{
		coords: [[113.125,19.000]],
		label: $.t("w:signpost.label.nilfgaardianGarrison"),
		popup: $.t("w:signpost.desc.nilfgaardianGarrison")
	},{
		coords: [[91.000,118.563]],
		label: $.t("w:signpost.label.cacklerBridge"),
		popup: $.t("w:signpost.desc.cacklerBridge")
	},{
		coords: [[69.844,124.813]],
		label: $.t("w:signpost.label.crossroads"),
		popup: $.t("w:signpost.desc.crossroads")
	},{
		coords: [[61.063,101.500]],
		label: $.t("w:signpost.label.ford"),
		popup: $.t("w:signpost.desc.ford")
	},{
		coords: [[54.250,128.875]],
		label: $.t("w:signpost.label.ransackedVillage"),
		popup: $.t("w:signpost.desc.ransackedVillage")
	}],

	//------------------------------------------------Signal Fire------------------------------------------------
	signalfire: [],

	//------------------------------------------------Smugglers' Cache------------------------------------------------
	smugglers: [{
		coords: [[40.376,105.813]],
		label: $.t("sidebar.smugglers"),
		popup: $.t("smugglers.desc")
	}],

	//------------------------------------------------Spoils of War------------------------------------------------
	spoils: [{
		coords: [[118.875,36.656]],
		label: $.t("sidebar.spoils"),
		popup: $.t("spoils.desc")
	}],
	
	//------------------------------------------------Treasure------------------------------------------------
	treasure: [
	//Surface Treause
	{
		coords: [[69.155,38.250]],
		label: $.t("sidebar.treasure"),
		popup: $.t("treasure.desc")
	},{
		coords: [[116.031,28.125]],
		label: $.t("sidebar.treasure"),
		popup: $.t("treasure.desc")
	},{
		coords: [[116.625,19.937]],
		label: $.t("sidebar.treasure"),
		popup: $.t("treasure.desc")
	},{
		coords: [[92.812,117.844]],
		label: $.t("sidebar.treasure"),
		popup: $.t("treasure.desc")
	},{
		coords: [[90.281,116.188]],
		label: $.t("sidebar.treasure"),
		popup: $.t("treasure.desc")
	},{
		coords: [[85.687,48.906]],
		label: $.t("sidebar.treasure"),
		popup: $.t("treasure.desc")
	},{
		coords: [[62.562,77.687]],
		label: $.t("sidebar.treasure"),
		popup: $.t("treasure.desc")
	},{
		coords: [[62.281,89.062]],
		label: $.t("sidebar.treasure"),
		popup: $.t("treasure.desc")
	},{
		coords: [[44.905,114.344]],
		label: $.t("sidebar.treasure"),
		popup: $.t("treasure.desc")
	},{
		coords: [[34.155,78.938]],
		label: $.t("sidebar.treasure"),
		popup: $.t("treasure.desc")
	},{
		coords: [[36.749,49.375]],
		label: $.t("sidebar.treasure"),
		popup: $.t("treasure.desc")
	},{
		coords: [[50.843,42.750]],
		label: $.t("sidebar.treasure"),
		popup: $.t("treasure.desc")
	},{
		coords: [[113.218,32.375]],
		label: $.t("sidebar.treasure"),
		popup: $.t("treasure.desc")
	},{
		coords: [[112.188,48.688]],
		label: $.t("sidebar.treasure"),
		popup: $.t("treasure.desc")
	},{
		coords: [[92.656,73.156]],
		label: $.t("sidebar.treasure"),
		popup: $.t("treasure.desc")
	},{
		coords: [[76.624,107.657]],
		label: $.t("sidebar.treasure"),
		popup: $.t("treasure.desc")
	},{
		coords: [[68.282,87.531]],
		label: $.t("sidebar.treasure"),
		popup: $.t("treasure.desc")
	},{
		coords: [[82.750,132.188]],
		label: $.t("sidebar.treasure"),
		popup: $.t("treasure.desc")
	},{
		coords: [[81.687,132.437]],
		label: $.t("sidebar.treasure"),
		popup: $.t("treasure.desc")
	},{
		coords: [[80.031,134.563]],
		label: $.t("sidebar.treasure"),
		popup: $.t("treasure.desc")
	},{
		coords: [[80.343,137.625]],
		label: $.t("sidebar.treasure"),
		popup: $.t("treasure.desc")
	},{
		coords: [[28.248,69.344]],
		label: $.t("sidebar.treasure"),
		popup: $.t("treasure.desc")
	},{
		coords: [[66.063,116.375]],
		label: $.t("sidebar.treasure"),
		popup: $.t("treasure.desc")
	},{
		coords: [[49.626,121.062]],
		label: $.t("sidebar.treasure"),
		popup: $.t("treasure.desc")
	},{
		coords: [[53.469,125.562]],
		label: $.t("sidebar.treasure"),
		popup: $.t("treasure.desc")
	},{
		coords: [[51.875,125.781]],
		label: $.t("sidebar.treasure"),
		popup: $.t("treasure.desc")
	},{
		coords: [[52.032,127.657]],
		label: $.t("sidebar.treasure"),
		popup: $.t("treasure.desc")
	},{
		coords: [[42.095,113.468]],
		label: $.t("sidebar.treasure"),
		popup: $.t("treasure.desc")
	},{
		coords: [[38.248,104.094]],
		label: $.t("sidebar.treasure"),
		popup: $.t("treasure.desc")
	},{
		coords: [[67.719,16.031]],
		label: $.t("sidebar.treasure"),
		popup: $.t("treasure.desc")
	},{
		coords: [[66.843,121.125]],
		label: $.t("sidebar.treasure"),
		popup: $.t("treasure.desc")
	},{
		coords: [[72.750,114.000]],
		label: $.t("sidebar.treasure"),
		popup: $.t("treasure.desc")
	},{
		coords: [[33.313,25.625]],
		label: $.t("sidebar.treasure"),
		popup: $.t("treasure.desc")
	},{
		coords: [[82.219,27.688]],
		label: $.t("sidebar.treasure"),
		popup: $.t("treasure.desc")
	},{
		coords: [[30.717,91.031]],
		label: $.t("sidebar.treasure"),
		popup: $.t("treasure.desc")
	},{
		coords: [[103.562,71.438]],
		label: $.t("sidebar.treasure"),
		popup: $.t("treasure.desc")
	},{
		coords: [[61.593,114.969]],
		label: $.t("sidebar.treasure"),
		popup: $.t("treasure.desc")
	},{
		coords: [[29.905,54.687]],
		label: $.t("sidebar.treasure"),
		popup: $.t("treasure.desc")
	},{
		coords: [[85.031,36.875]],
		label: $.t("sidebar.treasure"),
		popup: $.t("treasure.desc")
	},{
		coords: [[81.937,124.125]],
		label: $.t("sidebar.treasure"),
		popup: $.t("treasure.desc")
	},{
		coords: [[56.751,128.437]],
		label: $.t("sidebar.treasure"),
		popup: $.t("treasure.desc")
	},{
		coords: [[28.562,66.094]],
		label: $.t("sidebar.treasure"),
		popup: $.t("treasure.desc")
	},{
		coords: [[100.719,14.281]],
		label: $.t("sidebar.treasure"),
		popup: $.t("treasure.desc")
	},{
		coords: [[77.906,30.875]],
		label: $.t("sidebar.treasure"),
		popup: $.t("treasure.desc")
	},
	//Underwater Treause
	{
		coords: [[78.124,54.062]],
		label: $.t("treasure.watertreasure"),
		popup: $.t("treasure.desc")
	},{
		coords: [[86.750,51.063]],
		label: $.t("treasure.watertreasure"),
		popup: $.t("treasure.desc")
	},{
		coords: [[72.781,60.531]],
		label: $.t("treasure.watertreasure"),
		popup: $.t("treasure.desc")
	},{
		coords: [[75.094,57.031]],
		label: $.t("treasure.watertreasure"),
		popup: $.t("treasure.desc")
	},{
		coords: [[42.594,132.343]],
		label: $.t("treasure.watertreasure"),
		popup: $.t("treasure.desc")
	},{
		coords: [[33.968,72.688]],
		label: $.t("treasure.watertreasure") + ' (' + $.t("misc.underground") + ')',
		popup: $.t("treasure.desc") + $.t("misc.entrance2",{x1: $.t("<a href='#6/-79.592/-84.199\'>"), x2: $.t("<a href='#6/-77.897/-75.586\'>"), end: $.t("</a>")})
	},{
		coords: [[30.561,68.688]],
		label: $.t("treasure.watertreasure") + ' (' + $.t("misc.underground") + ')',
		popup: $.t("treasure.desc") + $.t("misc.entrance2",{x1: $.t("<a href='#6/-79.592/-84.199\'>"), x2: $.t("<a href='#6/-77.897/-75.586\'>"), end: $.t("</a>")})
	},{
		coords: [[39.313,78.156]],
		label: $.t("treasure.watertreasure"),
		popup: $.t("treasure.desc")
	}],
	
	//------------------------------------------------Vineyard Infestation------------------------------------------------
	vineyardinfestation: []
};
