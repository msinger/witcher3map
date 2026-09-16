window.map_sWest = L.latLng(-32,-32);
window.map_nEast = L.latLng(192+32,192+32);
window.map_center = [96,96];
window.map_minZoom = 2;
window.map_mZoom = 5;
window.map_natZoom = 3;
window.map_Zoom = 3;
window.mapdata_fables = {
	
	//------------------------------------------------Abandoned Site------------------------------------------------
	abandoned: [],

	//------------------------------------------------Alchemy Supplies------------------------------------------------
	alchemy: [],

	//------------------------------------------------Armourer------------------------------------------------
	armourer: [],

	//------------------------------------------------Armourer's Table------------------------------------------------
	armourerstable: [],

	//------------------------------------------------Bandit Camp------------------------------------------------
	banditcamp: [],

	//------------------------------------------------Barber------------------------------------------------
	barber: [],

	//------------------------------------------------Blacksmith------------------------------------------------
	blacksmith: [],

	//------------------------------------------------Boat------------------------------------------------
	boat: [],

	//------------------------------------------------Brothel------------------------------------------------
	brothel: [],

	//------------------------------------------------Contracts------------------------------------------------
	contracts: [],

	//------------------------------------------------Entrance------------------------------------------------
	entrance: [],

	//------------------------------------------------Events------------------------------------------------
	event: [],

	//------------------------------------------------Grindstone------------------------------------------------
	grindstone: [],

	//------------------------------------------------Guarded Treasure------------------------------------------------
	guarded: [],

	//------------------------------------------------Gwent Player------------------------------------------------
	gwent: [{
		coords: [[129.625,92.188]],
		label: $.t("sidebar.gwent"),
		popupTitle: $.t("f:gwent.popup.girl"),
		popup: $.t("misc.dactive",{quest: $.t("mainquests.label.beyond")}) + $.t("gwent.desc.player")
	}],
	
	//------------------------------------------------Gwent Quest------------------------------------------------
	gwentquest: [],
	
	//------------------------------------------------Hanse Base------------------------------------------------
	hansebase: [],

	//------------------------------------------------Harbor------------------------------------------------
	harbor: [],

	//------------------------------------------------Herbalist------------------------------------------------
	herbalist: [],

	//------------------------------------------------Hidden Treasure------------------------------------------------
	hidden: [],

	//------------------------------------------------Hollow Treasure------------------------------------------------
	hollow: [],
	
	//------------------------------------------------Honeycomb------------------------------------------------
	honeycomb: [],

	//------------------------------------------------Innkeep------------------------------------------------
	innkeep: [],

	//------------------------------------------------Knight in Distress------------------------------------------------
	kid: [],

	//------------------------------------------------Monster Den------------------------------------------------
	monsterden: [],

	//------------------------------------------------Monster Nest------------------------------------------------
	monsternest: [],

	//------------------------------------------------Notice Board------------------------------------------------
	notice: [{
		coords: [[127.063,92.313]],
		label: $.t("sidebar.notice"),
		popup: $.t("notice.desc")
	}],

	//------------------------------------------------Person in Distress------------------------------------------------
	pid: [],

	//------------------------------------------------Place of Power------------------------------------------------
	pop: [],

	//------------------------------------------------Point of Interest------------------------------------------------
	poi: [{
		coords: [[126.000,63.125]],
		label: $.t("f:poi.label.thumb"),
		popup: $.t("misc.dactive",{quest: $.t("mainquests.label.beyond")}) + $.t("f:poi.desc.thumb")
	},{
		coords: [[121.625,52.000]],
		label: $.t("f:poi.label.pigs"),
		popup: $.t("misc.dactive",{quest: $.t("mainquests.label.beyond")}) + $.t("f:poi.desc.pigs")
	},{
		coords: [[106.000,72.125]],
		label: $.t("f:poi.label.tower"),
		popup: $.t("misc.dactive",{quest: $.t("mainquests.label.beyond")}) + $.t("f:poi.desc.tower")
	},{
		coords: [[92.000,57.250]],
		label: $.t("f:poi.label.dragon"),
		popup: $.t("misc.dactive",{quest: $.t("mainquests.label.beyond")}) + $.t("f:poi.desc.dragon")
	},{
		coords: [[89.001,46.251]],
		label: $.t("f:poi.label.balbina"),
		popup: $.t("misc.dactive",{quest: $.t("mainquests.label.beyond")}) + $.t("f:poi.desc.balbina")
	},{
		coords: [[66.252,53.126]],
		label: $.t("f:poi.label.camp"),
		popup: $.t("misc.dactive",{quest: $.t("mainquests.label.beyond")}) + $.t("f:poi.desc.camp")
	},{
		coords: [[69.376,69.001]],
		label: $.t("f:poi.label.hood"),
		popup: $.t("misc.dactive",{quest: $.t("mainquests.label.beyond")}) + $.t("f:poi.desc.hood")
	},{
		coords: [[82.750,71.125]],
		label: $.t("f:poi.label.blaviken"),
		popup: $.t("misc.dactive",{quest: $.t("mainquests.label.beyond")}) + $.t("f:poi.desc.blaviken")
	},{
		coords: [[75.876,86.251]],
		label: $.t("f:poi.label.den"),
		popup: $.t("misc.dactive",{quest: $.t("mainquests.label.beyond")}) + $.t("f:poi.desc.den")
	},{
		coords: [[92.000,106.500]],
		label: $.t("f:poi.label.joss"),
		popup: $.t("misc.dactive",{quest: $.t("mainquests.label.beyond")}) + $.t("f:poi.desc.joss")
	},{
		coords: [[99.251,88.625]],
		label: $.t("f:poi.label.wisp"),
		popup: $.t("misc.dactive",{quest: $.t("mainquests.label.beyond")}) + $.t("f:poi.desc.wisp")
	},{
		coords: [[73.876,121.126]],
		label: $.t("f:poi.label.witch"),
		popup: $.t("misc.dactive",{quest: $.t("mainquests.label.beyond")}) + $.t("f:poi.desc.witch")
	},{
		coords: [[71.501,153.000]],
		label: $.t("f:poi.label.grigg"),
		popup: $.t("misc.dactive",{quest: $.t("mainquests.label.beyond")}) + $.t("f:poi.desc.grigg")
	},{
		coords: [[58.251,154.000]],
		label: $.t("f:poi.label.start"),
		popup: $.t("misc.dactive",{quest: $.t("mainquests.label.beyond")}) + $.t("f:poi.desc.start")
	},{
		coords: [[104.625,104.625]],
		label: $.t("f:poi.label.emperor"),
		popup: $.t("misc.dactive",{quest: $.t("mainquests.label.beyond")}) + $.t("f:poi.desc.emperor")
	},{
		coords: [[92.562,48.437]],
		label: $.t("f:poi.label.pepper"),
		popup: $.t("misc.dactive",{quest: $.t("mainquests.label.beyond")}) + $.t("f:poi.desc.pepper")
	},{
		coords: [[74.624,72.063]],
		label: $.t("f:poi.label.slippers"),
		popup: $.t("misc.dactive",{quest: $.t("mainquests.label.beyond")}) + $.t("f:poi.desc.slippers")
	}],

	//------------------------------------------------Scavengers------------------------------------------------
	scavenger: [],

	//------------------------------------------------Shopkeeper------------------------------------------------
	shopkeeper: [{
		coords: [[129.124,90.938]],
		label: $.t("sidebar.shopkeeper"),
		popupTitle: $.t("f:shopkeeper.popup.girl"),
		popup: $.t("misc.dactive",{quest: $.t("mainquests.label.beyond")}) + $.t("f:shopkeeper.desc.girl")
	}],

	//------------------------------------------------Sidequests------------------------------------------------
	sidequests: [{
		coords: [[127.188,93.688]],
		label: $.t("sidequests.label.duck"),
		popup: $.t("misc.dactive",{quest: $.t("mainquests.label.beyond")}) + $.t("sidequests.desc.duck")
	}],

	//------------------------------------------------Sign Post------------------------------------------------
	signpost: [],

	//------------------------------------------------Signal Fire------------------------------------------------
	signalfire: [],

	//------------------------------------------------Smugglers' Cache------------------------------------------------
	smugglers: [],

	//------------------------------------------------Spoils of War------------------------------------------------
	spoils: [],
	
	//------------------------------------------------Treasure------------------------------------------------
	treasure: [{
		coords: [[147.875,71.750]],
		label: $.t("sidebar.treasure"),
		popup: $.t("misc.dactive",{quest: $.t("mainquests.label.beyond")}) + $.t("f:treasure.popup.pot")
	},{
		coords: [[90.501,78.000]],
		label: $.t("sidebar.treasure"),
		popup: $.t("misc.dactive",{quest: $.t("mainquests.label.beyond")}) + $.t("f:treasure.popup.knight")
	},{
		coords: [[74.875,74.000]],
		label: $.t("sidebar.treasure"),
		popup: $.t("misc.dactive",{quest: $.t("mainquests.label.beyond")}) + $.t("treasure.desc")
	},{
		coords: [[106.875,74.313]],
		label: $.t("sidebar.treasure"),
		popup: $.t("misc.dactive",{quest: $.t("mainquests.label.beyond")}) + $.t("treasure.desc")
	},
	//Underwater Treause
	{
		coords: [[86.001,71.500]],
		label: $.t("treasure.watertreasure"),
		popup: $.t("misc.dactive",{quest: $.t("mainquests.label.beyond")}) + $.t("treasure.desc")
	},{
		coords: [[99.500,71.250]],
		label: $.t("treasure.watertreasure"),
		popup: $.t("misc.dactive",{quest: $.t("mainquests.label.beyond")}) + $.t("treasure.desc")
	}],
	
	//------------------------------------------------Vineyard Infestation------------------------------------------------
	vineyardinfestation: []
};
