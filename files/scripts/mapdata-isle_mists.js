window.map_path  = 'isle_mists';
window.map_sWest = L.latLng(0,0);
window.map_nEast = L.latLng(384,512);
window.map_center = [192,256];
window.map_minZoom = 2;
window.map_mZoom = 5;
window.map_natZoom = 3;
window.map_Zoom = 3;
window.mapdata_isle_mists = {
	
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
	entrance: [{
		coords: [[221.316,301.495]],
		label: $.t("sidebar.entrance"),
		popup: $.t("entrance.desc.exit")
	},{
		coords: [[215.191,308.217]],
		label: $.t("sidebar.entrance"),
		popup: $.t("entrance.desc.exit")
	},{
		coords: [[210.113,307.620]],
		label: $.t("sidebar.entrance"),
		popup: $.t("entrance.desc.exit")
	},{
		coords: [[198.462,296.715]],
		label: $.t("sidebar.entrance"),
		popup: $.t("entrance.desc.exit")
	}],

	//------------------------------------------------Events------------------------------------------------
	event: [],

	//------------------------------------------------Grindstone------------------------------------------------
	grindstone: [],

	//------------------------------------------------Guarded Treasure------------------------------------------------
	guarded: [],

	//------------------------------------------------Gwent Player------------------------------------------------
	gwent: [],
	
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
	hollow: [{
		coords: [[226.245,314.043]], // _tree_cont_with_gold_1
		label: $.t("sidebar.hollow"),
		popup: $.t("misc.dactive",{quest: $.t("mainquests.label.mists")}) + $.t("hollow.desc") + $.t("misc.imageLink",{name: "gameplay-loot-_tree_cont_with_gold_11"})
	},{
		coords: [[221.018,281.330]], // _tree_cont_with_gold_2
		label: $.t("sidebar.hollow"),
		popup: $.t("misc.dactive",{quest: $.t("mainquests.label.mists")}) + $.t("hollow.desc") + $.t("misc.imageLink",{name: "gameplay-loot-_tree_cont_with_gold_4"})
	},{
		coords: [[219.972,278.043]], // _tree_cont_with_gold_2
		label: $.t("sidebar.hollow"),
		popup: $.t("misc.dactive",{quest: $.t("mainquests.label.mists")}) + $.t("hollow.desc") + $.t("misc.imageLink",{name: "gameplay-loot-_tree_cont_with_gold_5"})
	},{
		coords: [[220.420,268.932]], // _tree_cont_with_gold_1
		label: $.t("sidebar.hollow"),
		popup: $.t("misc.dactive",{quest: $.t("mainquests.label.mists")}) + $.t("hollow.desc") + $.t("misc.imageLink",{name: "gameplay-loot-_tree_cont_with_gold_6"})
	},{
		coords: [[185.915,262.957]], // _tree_cont_with_gold_2
		label: $.t("sidebar.hollow"),
		popup: $.t("misc.dactive",{quest: $.t("mainquests.label.mists")}) + $.t("hollow.desc") + $.t("misc.imageLink",{name: "gameplay-loot-_tree_cont_with_gold_8"})
	},{
		coords: [[170.977,246.675]], // _tree_cont_with_gold_2
		label: $.t("sidebar.hollow"),
		popup: $.t("misc.dactive",{quest: $.t("mainquests.label.mists")}) + $.t("hollow.desc") + $.t("misc.imageLink",{name: "gameplay-loot-_tree_cont_with_gold_9"})
	},{
		coords: [[189.611,275.243]], // _tree_cont_with_gold_2
		label: $.t("sidebar.hollow"),
		popup: $.t("misc.dactive",{quest: $.t("mainquests.label.mists")}) + $.t("hollow.desc") + $.t("misc.imageLink",{name: "gameplay-loot-_tree_cont_with_gold_3"})
	},{
		coords: [[201.151,282.749]], // _tree_cont_with_gold_1
		label: $.t("sidebar.hollow"),
		popup: $.t("misc.dactive",{quest: $.t("mainquests.label.mists")}) + $.t("hollow.desc") + $.t("misc.imageLink",{name: "gameplay-loot-_tree_cont_with_gold_2"})
	},{
		coords: [[214.744,265.870]], // _tree_cont_with_gold_2
		label: $.t("sidebar.hollow"),
		popup: $.t("misc.dactive",{quest: $.t("mainquests.label.mists")}) + $.t("hollow.desc") + $.t("misc.imageLink",{name: "gameplay-loot-_tree_cont_with_gold_7"})
	},{
		coords: [[234.312,313.520]], // _tree_cont_with_gold_2
		label: $.t("sidebar.hollow"),
		popup: $.t("misc.dactive",{quest: $.t("mainquests.label.mists")}) + $.t("hollow.desc") + $.t("misc.imageLink",{name: "gameplay-loot-_tree_cont_with_gold_10"})
	}],
	
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
	notice: [],

	//------------------------------------------------Person in Distress------------------------------------------------
	pid: [],

	//------------------------------------------------Place of Power------------------------------------------------
	pop: [],

	//------------------------------------------------Point of Interest------------------------------------------------
	poi: [{
		coords: [[205.482,291.189]],
		label: $.t("i:poi.label.hut"),
		popup: $.t("i:poi.desc.hut")
	},{
		coords: [[175.757,244.285]],
		label: $.t("i:poi.label.ferenc"),
		popup: $.t("i:poi.desc.ferenc")
	},{
		coords: [[240.884,247.721]],
		label: $.t("i:poi.label.gasp"),
		popup: $.t("i:poi.desc.gasp")
	},{
		coords: [[227.440,283.720]],
		label: $.t("i:poi.label.ivo"),
		popup: $.t("i:poi.desc.ivo")
	}],

	//------------------------------------------------Scavengers------------------------------------------------
	scavenger: [],

	//------------------------------------------------Shopkeeper------------------------------------------------
	shopkeeper: [],

	//------------------------------------------------Sidequests------------------------------------------------
	sidequests: [],

	//------------------------------------------------Sign Post------------------------------------------------
	signpost: [],

	//------------------------------------------------Signal Fire------------------------------------------------
	signalfire: [],

	//------------------------------------------------Smugglers' Cache------------------------------------------------
	smugglers: [],

	//------------------------------------------------Spoils of War------------------------------------------------
	spoils: [],
	
	//------------------------------------------------Treasure------------------------------------------------
	treasure: [
	//Surface Treause
	{
		coords: [[242.378,245.630]],
		label: $.t("sidebar.treasure"),
		popup: $.t("misc.dactive",{quest: $.t("mainquests.label.mists")}) + $.t("treasure.desc") + $.t("misc.imageLink",{name: "gameplay-loot-ironbound_chest_container_chest_with_uniq_runes_oils8"})
	},{
		coords: [[211.158,257.579]],
		label: $.t("sidebar.treasure"),
		popup: $.t("misc.dactive",{quest: $.t("mainquests.label.mists")}) + $.t("treasure.desc") + $.t("misc.imageLink",{name: "gameplay-loot-old_chest_container__treasure__q3__skelige7"})
	},{
		coords: [[207.274,255.637]],
		label: $.t("sidebar.treasure"),
		popup: $.t("misc.dactive",{quest: $.t("mainquests.label.mists")}) + $.t("treasure.desc") + $.t("misc.imageLink",{name: "gameplay-loot-old_chest_unerwater_container__weaponsmith_area__novigrad3"})
	},{
		coords: [[200.254,252.500]],
		label: $.t("sidebar.treasure"),
		popup: $.t("misc.dactive",{quest: $.t("mainquests.label.mists")}) + $.t("treasure.desc") + $.t("misc.imageLink",{name: "gameplay-loot-old_chest_unerwater_container__treasure__q4__novigrad7"})
	},{
		coords: [[168.139,245.779]],
		label: $.t("sidebar.treasure"),
		popup: $.t("misc.dactive",{quest: $.t("mainquests.label.mists")}) + $.t("treasure.desc") + $.t("misc.imageLink",{name: "gameplay-loot-old_chest_muddy_container__unique_nml_weapon_epic9"})
	},{
		coords: [[184.272,281.479]],
		label: $.t("sidebar.treasure"),
		popup: $.t("misc.dactive",{quest: $.t("mainquests.label.mists")}) + $.t("treasure.desc") + $.t("misc.imageLink",{name: "gameplay-loot-old_chest_muddy_container__treasure__q5__skelige8"})
	},{
		coords: [[191.889,284.616]],
		label: $.t("sidebar.treasure"),
		popup: $.t("misc.dactive",{quest: $.t("mainquests.label.mists")}) + $.t("treasure.desc") + $.t("misc.imageLink",{name: "gameplay-loot-old_chest_unerwater_container_chest_with_uniq_runes_oils9"})
	},{
		coords: [[189.350,288.798]],
		label: $.t("sidebar.treasure"),
		popup: $.t("misc.dactive",{quest: $.t("mainquests.label.mists")}) + $.t("treasure.desc") + $.t("misc.imageLink",{name: "gameplay-loot-old_chest_unerwater_container__weaponsmith_area__novigrad9"})
	},{
		coords: [[206.677,287.902]],
		label: $.t("sidebar.treasure"),
		popup: $.t("misc.dactive",{quest: $.t("mainquests.label.mists")}) + $.t("treasure.desc") + $.t("misc.imageLink",{name: "gameplay-loot-old_chest_unerwater_container__weaponsmith_area__novigrad11"})
	},{
		coords: [[191.591,324.947]],
		label: $.t("sidebar.treasure"),
		popup: $.t("misc.dactive",{quest: $.t("mainquests.label.mists")}) + $.t("treasure.desc") + $.t("misc.imageLink",{name: "gameplay-loot-old_chest_unerwater_container__weaponsmith_area__novigrad10"})
	},{
		coords: [[191.105,325.396]],
		label: $.t("sidebar.treasure"),
		popup: $.t("misc.dactive",{quest: $.t("mainquests.label.mists")}) + $.t("treasure.desc") + $.t("misc.imageLink",{name: "gameplay-loot-old_chest_unerwater_container_chest_with_uniq_runes_oils11"})
	},{
		coords: [[217.261,317.777]],
		label: $.t("sidebar.treasure"),
		popup: $.t("misc.dactive",{quest: $.t("mainquests.label.mists")}) + $.t("treasure.desc") + $.t("misc.imageLink",{name: "gameplay-loot-old_chest_unerwater_container_chest_with_uniq_runes_oils10"})
	},{
		coords: [[217.730,313.296]],
		label: $.t("sidebar.treasure"),
		popup: $.t("misc.dactive",{quest: $.t("mainquests.label.mists")}) + $.t("treasure.desc") + $.t("misc.imageLink",{name: "gameplay-loot-old_chest_muddy_container__treasure__q5__skelige10"})
	},{
		coords: [[219.225,305.903]],
		label: $.t("sidebar.treasure") + ' (' + $.t("misc.underground") + ')',
		popup: $.t("misc.dactive",{quest: $.t("mainquests.label.mists")}) + $.t("treasure.desc") + $.t("misc.entrance2",{x1: $.t("<a href='#6/32.842/60.292\'>"), x2: $.t("<a href='#6/26.588/68.203\'>"), end: $.t("</a>")}) + $.t("misc.imageLink",{name: "gameplay-loot-_prolog_dead_soldier10"})
	},{
		coords: [[218.478,305.977]],
		label: $.t("sidebar.treasure") + ' (' + $.t("misc.underground") + ')',
		popup: $.t("misc.dactive",{quest: $.t("mainquests.label.mists")}) + $.t("treasure.desc") + $.t("misc.entrance2",{x1: $.t("<a href='#6/32.842/60.292\'>"), x2: $.t("<a href='#6/26.588/68.203\'>"), end: $.t("</a>")}) + $.t("misc.imageLink",{name: "gameplay-loot-old_chest_muddy_container__tailor_area__skelige10"})
	},{
		coords: [[223.855,300.450]],
		label: $.t("sidebar.treasure"),
		popup: $.t("misc.dactive",{quest: $.t("mainquests.label.mists")}) + $.t("treasure.desc") + $.t("misc.imageLink",{name: "gameplay-loot-crate__unique_oils8"})
	},{
		coords: [[236.104,289.097]],
		label: $.t("sidebar.treasure"),
		popup: $.t("misc.dactive",{quest: $.t("mainquests.label.mists")}) + $.t("treasure.desc") + $.t("misc.imageLink",{name: "gameplay-loot-old_chest_container__weaponsmith_area__skelige6"})
	},{
		coords: [[210.710,231.140]],
		label: $.t("sidebar.treasure"),
		popup: $.t("misc.dactive",{quest: $.t("mainquests.label.mists")}) + $.t("treasure.desc") + $.t("misc.imageLink",{name: "island_of_mist-loot-old_chest_container__unique_nml_weapon1"})
	},{
		coords: [[230.941,299.507]],
		label: $.t("sidebar.treasure"),
		popup: $.t("misc.dactive",{quest: $.t("mainquests.label.mists")}) + $.t("treasure.desc") + $.t("misc.imageLink",{name: "gameplay-loot-old_chest_muddy_container__treasure__q5__skelige6"})
	},{
		coords: [[237.000,300.301]],
		label: $.t("sidebar.treasure"),
		popup: $.t("misc.dactive",{quest: $.t("mainquests.label.mists")}) + $.t("treasure.desc") + $.t("misc.imageLink",{name: "gameplay-loot-old_chest_muddy_container__tailor_area__skelige6"})
	},{
		coords: [[235.321,288.837]],
		label: $.t("sidebar.treasure"),
		popup: $.t("misc.dactive",{quest: $.t("mainquests.label.mists")}) + $.t("treasure.desc") + $.t("misc.imageLink",{name: "gameplay-loot-old_chest_unerwater_container__weaponsmith_area__novigrad6"})
	},{
		coords: [[230.727,301.197]],
		label: $.t("sidebar.treasure"),
		popup: $.t("misc.dactive",{quest: $.t("mainquests.label.mists")}) + $.t("treasure.desc") + $.t("misc.imageLink",{name: "gameplay-loot-crate__unique_oils7"})
	},{
		coords: [[232.146,317.404]],
		label: $.t("sidebar.treasure"),
		popup: $.t("misc.dactive",{quest: $.t("mainquests.label.mists")}) + $.t("treasure.desc") + $.t("misc.imageLink",{name: "gameplay-loot-old_chest_unerwater_container__treasure__q4__novigrad16"})
	},{
		coords: [[225.200,304.483]],
		label: $.t("sidebar.treasure"),
		popup: $.t("misc.dactive",{quest: $.t("mainquests.label.mists")}) + $.t("treasure.desc") + $.t("misc.imageLink",{name: "gameplay-loot-old_chest_muddy_container__unique_nml_weapon11"})
	},
	//Underwater Treause
	{
		coords: [[211.008,253.247]],
		label: $.t("treasure.watertreasure"),
		popup: $.t("misc.dactive",{quest: $.t("mainquests.label.mists")}) + $.t("treasure.desc") + $.t("misc.imageLink",{name: "gameplay-loot-old_chest_unerwater_container__weaponsmith_area__novigrad7"})
	},{
		coords: [[214.444,247.423]],
		label: $.t("treasure.watertreasure"),
		popup: $.t("misc.dactive",{quest: $.t("mainquests.label.mists")}) + $.t("treasure.desc") + $.t("misc.imageLink",{name: "gameplay-loot-old_chest_unerwater_container__weaponsmith_area__novigrad4"})
	},{
		coords: [[211.308,241.746]],
		label: $.t("treasure.watertreasure"),
		popup: $.t("misc.dactive",{quest: $.t("mainquests.label.mists")}) + $.t("treasure.desc") + $.t("misc.imageLink",{name: "gameplay-loot-old_chest_unerwater_container__weaponsmith_area__novigrad5"})
	},{
		coords: [[198.611,216.054]],
		label: $.t("treasure.watertreasure"),
		popup: $.t("misc.dactive",{quest: $.t("mainquests.label.mists")}) + $.t("treasure.desc") + $.t("misc.imageLink",{name: "island_of_mist-loot-old_chest_unerwater_container_chest_with_uniq_runes_oils5"})
	},{
		coords: [[203.390,229.796]],
		label: $.t("treasure.watertreasure"),
		popup: $.t("misc.dactive",{quest: $.t("mainquests.label.mists")}) + $.t("treasure.desc") + $.t("misc.imageLink",{name: "island_of_mist-loot-old_chest_unerwater_container__treasure__q4__novigrad1"})
	},{
		coords: [[240.585,292.981]],
		label: $.t("treasure.watertreasure"),
		popup: $.t("misc.dactive",{quest: $.t("mainquests.label.mists")}) + $.t("treasure.desc") + $.t("misc.imageLink",{name: "gameplay-loot-old_chest_unerwater_container_chest_with_uniq_runes_oils6"})
	},{
		coords: [[243.722,288.201]],
		label: $.t("treasure.watertreasure"),
		popup: $.t("misc.dactive",{quest: $.t("mainquests.label.mists")}) + $.t("treasure.desc") + $.t("misc.imageLink",{name: "gameplay-loot-old_chest_unerwater_container_chest_with_uniq_runes_oils7"})
	},{
		coords: [[212.503,322.408]],
		label: $.t("treasure.watertreasure"),
		popup: $.t("misc.dactive",{quest: $.t("mainquests.label.mists")}) + $.t("treasure.desc") + $.t("misc.imageLink",{name: "gameplay-loot-old_chest_unerwater_container__treasure__q1__novigrad10"})
	},{
		coords: [[207.723,319.570]],
		label: $.t("treasure.watertreasure"),
		popup: $.t("misc.dactive",{quest: $.t("mainquests.label.mists")}) + $.t("treasure.desc") + $.t("misc.imageLink",{name: "gameplay-loot-old_chest_unerwater_container__treasure__q4__novigrad10"})
	},{
		coords: [[166.869,248.243]],
		label: $.t("treasure.watertreasure"),
		popup: $.t("misc.dactive",{quest: $.t("mainquests.label.mists")}) + $.t("treasure.desc") + $.t("misc.imageLink",{name: "gameplay-loot-old_chest_unerwater_container__treasure__q4__novigrad9"})
	},{
		coords: [[166.496,249.887]],
		label: $.t("treasure.watertreasure"),
		popup: $.t("misc.dactive",{quest: $.t("mainquests.label.mists")}) + $.t("treasure.desc") + $.t("misc.imageLink",{name: "gameplay-loot-old_chest_unerwater_container_chest_with_uniq_runes_oils12"})
	},{
		coords: [[164.255,260.566]],
		label: $.t("treasure.watertreasure"),
		popup: $.t("misc.dactive",{quest: $.t("mainquests.label.mists")}) + $.t("treasure.desc") + $.t("misc.imageLink",{name: "gameplay-loot-old_chest_unerwater_container_chest_with_uniq_runes_oils5"})
	}],
	
	//------------------------------------------------Vineyard Infestation------------------------------------------------
	vineyardinfestation: []
};
