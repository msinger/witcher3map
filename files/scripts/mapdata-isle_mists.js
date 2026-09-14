window.map_path  = 'isle_mists';
window.map_sWest = L.latLng(-85.050,-180);
window.map_nEast = L.latLng(200,180);
window.map_center = [7.000,22.000];
window.map_minZoom = 2;
window.map_mZoom = 5;
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
		coords: [[32.842,60.292]],
		label: $.t("sidebar.entrance"),
		popup: $.t("entrance.desc.exit")
	},{
		coords: [[26.588,68.203]],
		label: $.t("sidebar.entrance"),
		popup: $.t("entrance.desc.exit")
	},{
		coords: [[21.125,67.500]],
		label: $.t("sidebar.entrance"),
		popup: $.t("entrance.desc.exit")
	},{
		coords: [[7.885,54.667]],
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
		coords: [[37.579,75.058]], // _tree_cont_with_gold_1
		label: $.t("sidebar.hollow"),
		popup: $.t("misc.dactive",{quest: $.t("mainquests.label.mists")}) + $.t("hollow.desc") + $.t("misc.imageLink",{name: "gameplay-loot-_tree_cont_with_gold_11"})
	},{
		coords: [[32.547,36.563]], // _tree_cont_with_gold_2
		label: $.t("sidebar.hollow"),
		popup: $.t("misc.dactive",{quest: $.t("mainquests.label.mists")}) + $.t("hollow.desc") + $.t("misc.imageLink",{name: "gameplay-loot-_tree_cont_with_gold_4"})
	},{
		coords: [[31.504,32.695]], // _tree_cont_with_gold_2
		label: $.t("sidebar.hollow"),
		popup: $.t("misc.dactive",{quest: $.t("mainquests.label.mists")}) + $.t("hollow.desc") + $.t("misc.imageLink",{name: "gameplay-loot-_tree_cont_with_gold_5"})
	},{
		coords: [[31.952,21.973]], // _tree_cont_with_gold_1
		label: $.t("sidebar.hollow"),
		popup: $.t("misc.dactive",{quest: $.t("mainquests.label.mists")}) + $.t("hollow.desc") + $.t("misc.imageLink",{name: "gameplay-loot-_tree_cont_with_gold_6"})
	},{
		coords: [[-6.839,14.941]], // _tree_cont_with_gold_2
		label: $.t("sidebar.hollow"),
		popup: $.t("misc.dactive",{quest: $.t("mainquests.label.mists")}) + $.t("hollow.desc") + $.t("misc.imageLink",{name: "gameplay-loot-_tree_cont_with_gold_8"})
	},{
		coords: [[-23.725,-4.219]], // _tree_cont_with_gold_2
		label: $.t("sidebar.hollow"),
		popup: $.t("misc.dactive",{quest: $.t("mainquests.label.mists")}) + $.t("hollow.desc") + $.t("misc.imageLink",{name: "gameplay-loot-_tree_cont_with_gold_9"})
	},{
		coords: [[-2.504,29.399]], // _tree_cont_with_gold_2
		label: $.t("sidebar.hollow"),
		popup: $.t("misc.dactive",{quest: $.t("mainquests.label.mists")}) + $.t("hollow.desc") + $.t("misc.imageLink",{name: "gameplay-loot-_tree_cont_with_gold_3"})
	},{
		coords: [[11.006,38.232]], // _tree_cont_with_gold_1
		label: $.t("sidebar.hollow"),
		popup: $.t("misc.dactive",{quest: $.t("mainquests.label.mists")}) + $.t("hollow.desc") + $.t("misc.imageLink",{name: "gameplay-loot-_tree_cont_with_gold_2"})
	},{
		coords: [[26.116,18.369]], // _tree_cont_with_gold_2
		label: $.t("sidebar.hollow"),
		popup: $.t("misc.dactive",{quest: $.t("mainquests.label.mists")}) + $.t("hollow.desc") + $.t("misc.imageLink",{name: "gameplay-loot-_tree_cont_with_gold_7"})
	},{
		coords: [[44.716,74.443]], // _tree_cont_with_gold_2
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
		coords: [[15.961,48.164]],
		label: $.t("i:poi.label.hut"),
		popup: $.t("i:poi.desc.hut")
	},{
		coords: [[-18.479,-7.031]],
		label: $.t("i:poi.label.ferenc"),
		popup: $.t("i:poi.desc.ferenc")
	},{
		coords: [[49.951,-2.988]],
		label: $.t("i:poi.label.gasp"),
		popup: $.t("i:poi.desc.gasp")
	},{
		coords: [[38.685,39.375]],
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
		coords: [[51.069,-5.449]],
		label: $.t("sidebar.treasure"),
		popup: $.t("misc.dactive",{quest: $.t("mainquests.label.mists")}) + $.t("treasure.desc") + $.t("misc.imageLink",{name: "gameplay-loot-ironbound_chest_container_chest_with_uniq_runes_oils8"})
	},{
		coords: [[22.268,8.613]],
		label: $.t("sidebar.treasure"),
		popup: $.t("misc.dactive",{quest: $.t("mainquests.label.mists")}) + $.t("treasure.desc") + $.t("misc.imageLink",{name: "gameplay-loot-old_chest_container__treasure__q3__skelige7"})
	},{
		coords: [[17.978,6.328]],
		label: $.t("sidebar.treasure"),
		popup: $.t("misc.dactive",{quest: $.t("mainquests.label.mists")}) + $.t("treasure.desc") + $.t("misc.imageLink",{name: "gameplay-loot-old_chest_unerwater_container__weaponsmith_area__novigrad3"})
	},{
		coords: [[9.968,2.636]],
		label: $.t("sidebar.treasure"),
		popup: $.t("misc.dactive",{quest: $.t("mainquests.label.mists")}) + $.t("treasure.desc") + $.t("misc.imageLink",{name: "gameplay-loot-old_chest_unerwater_container__treasure__q4__novigrad7"})
	},{
		coords: [[-26.745,-5.273]],
		label: $.t("sidebar.treasure"),
		popup: $.t("misc.dactive",{quest: $.t("mainquests.label.mists")}) + $.t("treasure.desc") + $.t("misc.imageLink",{name: "gameplay-loot-old_chest_muddy_container__unique_nml_weapon_epic9"})
	},{
		coords: [[-8.754,36.738]],
		label: $.t("sidebar.treasure"),
		popup: $.t("misc.dactive",{quest: $.t("mainquests.label.mists")}) + $.t("treasure.desc") + $.t("misc.imageLink",{name: "gameplay-loot-old_chest_muddy_container__treasure__q5__skelige8"})
	},{
		coords: [[0.175,40.429]],
		label: $.t("sidebar.treasure"),
		popup: $.t("misc.dactive",{quest: $.t("mainquests.label.mists")}) + $.t("treasure.desc") + $.t("misc.imageLink",{name: "gameplay-loot-old_chest_unerwater_container_chest_with_uniq_runes_oils9"})
	},{
		coords: [[-2.811,45.351]],
		label: $.t("sidebar.treasure"),
		popup: $.t("misc.dactive",{quest: $.t("mainquests.label.mists")}) + $.t("treasure.desc") + $.t("misc.imageLink",{name: "gameplay-loot-old_chest_unerwater_container__weaponsmith_area__novigrad9"})
	},{
		coords: [[17.308,44.296]],
		label: $.t("sidebar.treasure"),
		popup: $.t("misc.dactive",{quest: $.t("mainquests.label.mists")}) + $.t("treasure.desc") + $.t("misc.imageLink",{name: "gameplay-loot-old_chest_unerwater_container__weaponsmith_area__novigrad11"})
	},{
		coords: [[-0.175,87.890]],
		label: $.t("sidebar.treasure"),
		popup: $.t("misc.dactive",{quest: $.t("mainquests.label.mists")}) + $.t("treasure.desc") + $.t("misc.imageLink",{name: "gameplay-loot-old_chest_unerwater_container__weaponsmith_area__novigrad10"})
	},{
		coords: [[-0.747,88.418]],
		label: $.t("sidebar.treasure"),
		popup: $.t("misc.dactive",{quest: $.t("mainquests.label.mists")}) + $.t("treasure.desc") + $.t("misc.imageLink",{name: "gameplay-loot-old_chest_unerwater_container_chest_with_uniq_runes_oils11"})
	},{
		coords: [[28.745,79.453]],
		label: $.t("sidebar.treasure"),
		popup: $.t("misc.dactive",{quest: $.t("mainquests.label.mists")}) + $.t("treasure.desc") + $.t("misc.imageLink",{name: "gameplay-loot-old_chest_unerwater_container_chest_with_uniq_runes_oils10"})
	},{
		coords: [[29.228,74.179]],
		label: $.t("sidebar.treasure"),
		popup: $.t("misc.dactive",{quest: $.t("mainquests.label.mists")}) + $.t("treasure.desc") + $.t("misc.imageLink",{name: "gameplay-loot-old_chest_muddy_container__treasure__q5__skelige10"})
	},{
		coords: [[30.751,65.479]],
		label: $.t("sidebar.treasure") + ' (' + $.t("misc.underground") + ')',
		popup: $.t("misc.dactive",{quest: $.t("mainquests.label.mists")}) + $.t("treasure.desc") + $.t("misc.entrance2",{x1: $.t("<a href='#6/32.842/60.292\'>"), x2: $.t("<a href='#6/26.588/68.203\'>"), end: $.t("</a>")}) + $.t("misc.imageLink",{name: "gameplay-loot-_prolog_dead_soldier10"})
	},{
		coords: [[29.993,65.566]],
		label: $.t("sidebar.treasure") + ' (' + $.t("misc.underground") + ')',
		popup: $.t("misc.dactive",{quest: $.t("mainquests.label.mists")}) + $.t("treasure.desc") + $.t("misc.entrance2",{x1: $.t("<a href='#6/32.842/60.292\'>"), x2: $.t("<a href='#6/26.588/68.203\'>"), end: $.t("</a>")}) + $.t("misc.imageLink",{name: "gameplay-loot-old_chest_muddy_container__tailor_area__skelige10"})
	},{
		coords: [[35.317,59.062]],
		label: $.t("sidebar.treasure"),
		popup: $.t("misc.dactive",{quest: $.t("mainquests.label.mists")}) + $.t("treasure.desc") + $.t("misc.imageLink",{name: "gameplay-loot-crate__unique_oils8"})
	},{
		coords: [[46.195,45.703]],
		label: $.t("sidebar.treasure"),
		popup: $.t("misc.dactive",{quest: $.t("mainquests.label.mists")}) + $.t("treasure.desc") + $.t("misc.imageLink",{name: "gameplay-loot-old_chest_container__weaponsmith_area__skelige6"})
	},{
		coords: [[21.779,-22.500]],
		label: $.t("sidebar.treasure"),
		popup: $.t("misc.dactive",{quest: $.t("mainquests.label.mists")}) + $.t("treasure.desc") + $.t("misc.imageLink",{name: "island_of_mist-loot-old_chest_container__unique_nml_weapon1"})
	},{
		coords: [[41.828,57.953]],
		label: $.t("sidebar.treasure"),
		popup: $.t("misc.dactive",{quest: $.t("mainquests.label.mists")}) + $.t("treasure.desc") + $.t("misc.imageLink",{name: "gameplay-loot-old_chest_muddy_container__treasure__q5__skelige6"})
	},{
		coords: [[46.920,58.887]],
		label: $.t("sidebar.treasure"),
		popup: $.t("misc.dactive",{quest: $.t("mainquests.label.mists")}) + $.t("treasure.desc") + $.t("misc.imageLink",{name: "gameplay-loot-old_chest_muddy_container__tailor_area__skelige6"})
	},{
		coords: [[45.553,45.396]],
		label: $.t("sidebar.treasure"),
		popup: $.t("misc.dactive",{quest: $.t("mainquests.label.mists")}) + $.t("treasure.desc") + $.t("misc.imageLink",{name: "gameplay-loot-old_chest_unerwater_container__weaponsmith_area__novigrad6"})
	},{
		coords: [[41.640,59.941]],
		label: $.t("sidebar.treasure"),
		popup: $.t("misc.dactive",{quest: $.t("mainquests.label.mists")}) + $.t("treasure.desc") + $.t("misc.imageLink",{name: "gameplay-loot-crate__unique_oils7"})
	},{
		coords: [[42.876,79.014]],
		label: $.t("sidebar.treasure"),
		popup: $.t("misc.dactive",{quest: $.t("mainquests.label.mists")}) + $.t("treasure.desc") + $.t("misc.imageLink",{name: "gameplay-loot-old_chest_unerwater_container__treasure__q4__novigrad16"})
	},{
		coords: [[36.598,63.809]],
		label: $.t("sidebar.treasure"),
		popup: $.t("misc.dactive",{quest: $.t("mainquests.label.mists")}) + $.t("treasure.desc") + $.t("misc.imageLink",{name: "gameplay-loot-old_chest_muddy_container__unique_nml_weapon11"})
	},
	//Underwater Treause
	{
		coords: [[22.105,3.515]],
		label: $.t("treasure.watertreasure"),
		popup: $.t("misc.dactive",{quest: $.t("mainquests.label.mists")}) + $.t("treasure.desc") + $.t("misc.imageLink",{name: "gameplay-loot-old_chest_unerwater_container__weaponsmith_area__novigrad7"})
	},{
		coords: [[25.799,-3.339]],
		label: $.t("treasure.watertreasure"),
		popup: $.t("misc.dactive",{quest: $.t("mainquests.label.mists")}) + $.t("treasure.desc") + $.t("misc.imageLink",{name: "gameplay-loot-old_chest_unerwater_container__weaponsmith_area__novigrad4"})
	},{
		coords: [[22.431,-10.019]],
		label: $.t("treasure.watertreasure"),
		popup: $.t("misc.dactive",{quest: $.t("mainquests.label.mists")}) + $.t("treasure.desc") + $.t("misc.imageLink",{name: "gameplay-loot-old_chest_unerwater_container__weaponsmith_area__novigrad5"})
	},{
		coords: [[8.059,-40.253]],
		label: $.t("treasure.watertreasure"),
		popup: $.t("misc.dactive",{quest: $.t("mainquests.label.mists")}) + $.t("treasure.desc") + $.t("misc.imageLink",{name: "island_of_mist-loot-old_chest_unerwater_container_chest_with_uniq_runes_oils5"})
	},{
		coords: [[13.581,-24.082]],
		label: $.t("treasure.watertreasure"),
		popup: $.t("misc.dactive",{quest: $.t("mainquests.label.mists")}) + $.t("treasure.desc") + $.t("misc.imageLink",{name: "island_of_mist-loot-old_chest_unerwater_container__treasure__q4__novigrad1"})
	},{
		coords: [[49.724,50.273]],
		label: $.t("treasure.watertreasure"),
		popup: $.t("misc.dactive",{quest: $.t("mainquests.label.mists")}) + $.t("treasure.desc") + $.t("misc.imageLink",{name: "gameplay-loot-old_chest_unerwater_container_chest_with_uniq_runes_oils6"})
	},{
		coords: [[52.052,44.648]],
		label: $.t("treasure.watertreasure"),
		popup: $.t("misc.dactive",{quest: $.t("mainquests.label.mists")}) + $.t("treasure.desc") + $.t("misc.imageLink",{name: "gameplay-loot-old_chest_unerwater_container_chest_with_uniq_runes_oils7"})
	},{
		coords: [[23.725,84.902]],
		label: $.t("treasure.watertreasure"),
		popup: $.t("misc.dactive",{quest: $.t("mainquests.label.mists")}) + $.t("treasure.desc") + $.t("misc.imageLink",{name: "gameplay-loot-old_chest_unerwater_container__treasure__q1__novigrad10"})
	},{
		coords: [[18.479,81.562]],
		label: $.t("treasure.watertreasure"),
		popup: $.t("misc.dactive",{quest: $.t("mainquests.label.mists")}) + $.t("treasure.desc") + $.t("misc.imageLink",{name: "gameplay-loot-old_chest_unerwater_container__treasure__q4__novigrad10"})
	},{
		coords: [[-28.072,-2.373]],
		label: $.t("treasure.watertreasure"),
		popup: $.t("misc.dactive",{quest: $.t("mainquests.label.mists")}) + $.t("treasure.desc") + $.t("misc.imageLink",{name: "gameplay-loot-old_chest_unerwater_container__treasure__q4__novigrad9"})
	},{
		coords: [[-28.459,-0.439]],
		label: $.t("treasure.watertreasure"),
		popup: $.t("misc.dactive",{quest: $.t("mainquests.label.mists")}) + $.t("treasure.desc") + $.t("misc.imageLink",{name: "gameplay-loot-old_chest_unerwater_container_chest_with_uniq_runes_oils12"})
	},{
		coords: [[-30.751,12.128]],
		label: $.t("treasure.watertreasure"),
		popup: $.t("misc.dactive",{quest: $.t("mainquests.label.mists")}) + $.t("treasure.desc") + $.t("misc.imageLink",{name: "gameplay-loot-old_chest_unerwater_container_chest_with_uniq_runes_oils5"})
	}],
	
	//------------------------------------------------Vineyard Infestation------------------------------------------------
	vineyardinfestation: []
};
