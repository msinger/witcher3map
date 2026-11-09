var icons = {};
var markers = {};
var checkedMarkers = [];
var disabledMarkers = [];
var markerLayers = {};
var hasMarkers = {};
var uncheckedMarkerCount = {};
var notes = [];
var uncheckedMarkerOpacity = 0.9;
var checkedMarkerOpacity = 0.25;
var uncheckedRouteOpacity = 0.7;
var checkedRouteOpacity = 0.25;
var uncheckedAreaStrokeOpacity = 0.5;
var checkedAreaStrokeOpacity = 0.25;
var selectedAreaStrokeOpacity = 0.95;
var uncheckedAreaFillOpacity = 0.2;
var checkedAreaFillOpacity = 0.075;
var routes = [];
var areas = [];
var interiors = [];
var map = null;
var searchData = [];
var prevHashParams = {};
var selectedTab = "filter";
var globalItems = {};
var questCatOpen = [];
var questListEntryOpen = null;
var cardDeckOpen = [];
var cardListEntryOpen = null;
var schoolOpen = [];
var gearListEntryOpen = null;
var alchemyCatOpen = [];
var alchemyListEntryOpen = null;
var sidebarShown = true;

window.mapInfoIndex = window.mapInfoIndex || 0;
window.mapInfo = mapInfos[window.mapInfoIndex];

var externalItems = { all: [] };
for (let info of mapInfos)
	if (info != mapInfo)
		externalItems[info.ns] = {};

var scrollPos = {
	filter:   0,
	interior: 0,
	quest:    0,
	card:     0,
	gear:     0,
	alchemy:  0,
	settings: 0
};

L.Icon.Default.imagePath = window.topdir + "/files/images/leaflet";

var externItemsProcessList = [
	[ "armorer",       true ],
	[ "blacksmith",    true ],
	[ "contract",      true ],
	[ "event",         true ],
	[ "gwent",         true ],
	[ "gwentquest",    true ],
	[ "innkeep",       true ],
	[ "poi",           true ],
	[ "scavengerhunt", true ],
	[ "shopkeeper",    true ],
	[ "sidequest",     true ],
	[ "treasure",      false ],
	[ "treasurehunt",  true ]
];

var icon_sizes = {
	//                     regular, underground, optional anchors
	abandoned:           [[30, 30], [30, 40]],
	alchemy:             [[20, 28], [21, 37]],
	armorer:             [[24, 34], [24, 43]],
	armorerstable:       [[30, 27], [30, 36]],
	banditcamp:          [[29, 30], [29, 39]],
	barber:              [[30, 30], [30, 39]],
	blacksmith:          [[27, 30], [27, 39]],
	boat:                [[30, 28], [30, 37]],
	brothel:             [[28, 26], [28, 33]],
	contract:            [[23, 34], [23, 43]],
	contract_hos:        [[23, 34], [23, 43]],
	dyeshop:             [[27, 28], [27, 37]],
	entrance:            [[28, 27], [28, 35]],
	entrance_uw:         [[28, 27], [28, 35]],
	event:               [[23, 34], [23, 37]],
	grindstone:          [[30, 26], [30, 35]],
	guarded:             [[23, 34], [23, 43]],
	gwent:               [[24, 30], [24, 39]],
	gwentquest:          [[24, 30], [24, 39]],
	hansebase:           [[29, 30], [29, 39]],
	harbor:              [[27, 30], [27, 39]],
	herbalist:           [[25, 28], [25, 37]],
	hidden:              [[22, 34], [22, 43]],
	hidden_guarded:      [[25, 39], [25, 48]],
	hollow:              [[28, 27], [28, 36]],
	honeycomb:           [[29, 29], [29, 37]],
	innkeep:             [[26, 30], [26, 39]],
	kid:                 [[28, 30], [28, 39]],
	lamp:                [[19, 28], [19, 37]],
	lantern:             [[19, 28], [19, 37]],
	master:              [[30, 34], [30, 43]],
	monster:             [[17, 23], [17, 32]],
	monster_uw:          [[17, 23], [17, 32]],
	monsterden:          [[30, 27], [30, 35]],
	monsternest:         [[23, 30], [23, 39]],
	mounted:             [[29, 36], [29, 45]],
	note_marker:         [[23, 23], false,   [0, 22]],
	notice:              [[23, 28], [23, 30]],
	pid:                 [[24, 34], [24, 43]],
	poi:                 [[28, 28], [28, 37]],
	pop:                 [[27, 30], [27, 39]],
	portal:              [[28, 27], [28, 36]],
	race:                [[30, 28], [30, 37]],
	runewright:          [[34, 24], [34, 33]],
	scavengerhunt:       [[30, 30], [30, 39]],
	shopkeeper:          [[21, 30], [21, 39]],
	sidequest:           [[10, 30], [10, 39]],
	sidequest_hos:       [[10, 30], [10, 39]],
	sidequest_baw:       [[16, 36], [16, 42]],
	signalfire:          [[17, 34], [17, 34]],
	signpost:            [[27, 34], [27, 43]],
	smugglers:           [[28, 30], [28, 39]],
	spoils:              [[25, 28], [25, 37]],
	stash:               [[27, 32], [27, 41]],
	treasure:            [[20, 23], [20, 32]],
	treasure_uw:         [[20, 23], [20, 32]],
	treasurehunt:        [[22, 34], [22, 43]],
	treasurehunt_scav:   [[22, 34], [22, 43]],
	treasurehunt_hos:    [[23, 34], [23, 43]],
	vineyardinfestation: [[28, 32], [28, 41]]
};

for (micon of monster_icons)
	icon_sizes["monster/" + micon] = [[32, 32], [32, 41]];

var draw_colors = {
	alchemy:                  "#8ac33b",
	portal:                   "#cb67fe",
	herbalist:                "#8ac33b",
	shopkeeper:               "#ffed86",
	sidequest:                "#ffcc00",
	sidequest_hos:            "#4da4dd",
	sidequest_baw:            "#ed7459",
	mounted:                  "#fa6a57",
	"monster/alghoul":        "#95507c",
	"monster/alp":            "#55291f",
	"monster/arachas":        "#812b25",
	"monster/arachnomorph":   "#1b1b1b",
	"monster/archespore":     "#782418",
	"monster/banshee":        "#322f2b",
	"monster/barghest":       "#6e9547",
	"monster/basilisk":       "#3e352c",
	"monster/bear":           "#3a2012",
	"monster/boar":           "#2f2019",
	"monster/bruxa":          "#331f1c",
	"monster/cockatrice":     "#443734",
	"monster/cyclops":        "#3f2f2d",
	"monster/drowner":        "#738290",
	"monster/earthelemental": "#8d352b",
	"monster/ekimmara":       "#635050",
	"monster/endrega":        "#3b2e8d",
	"monster/fiend":          "#803a37",
	"monster/fireelemental":  "#e47a11",
	"monster/fleder":         "#7d74a0",
	"monster/foglet":         "#aea3a1",
	"monster/forktail":       "#91934c",
	"monster/gargoyle":       "#203712",
	"monster/garkain":        "#be7976",
	"monster/ghoul":          "#a8536b",
	"monster/giantcentipede": "#1a1213",
	"monster/golem":          "#383430",
	"monster/gravehag":       "#b0627d",
	"monster/griffin":        "#281a1b",
	"monster/harpy":          "#3b3027",
	"monster/icetroll":       "#55a3a4",
	"monster/kikimore":       "#362021",
	"monster/leshen":         "#ac8276",
	"monster/nekker":         "#9fb28e",
	"monster/nightwraith":    "#64984e",
	"monster/noonwraith":     "#71a68a",
	"monster/palewidow":      "#cec0c7",
	"monster/panther":        "#2a211d",
	"monster/rocktroll":      "#7c9c96",
	"monster/rotfiend":       "#3f2f2b",
	"monster/scurver":        "#b85d50",
	"monster/shaelmaar":      "#403635",
	"monster/siren":          "#95726b",
	"monster/slyzard":        "#a18b84",
	"monster/spriggan":       "#352c28",
	"monster/waterhag":       "#666493",
	"monster/werewolf":       "#493f39",
	"monster/wight":          "#352a1e",
	"monster/wilddog":        "#352e30",
	"monster/wildhunthound":  "#474b56",
	"monster/wolf":           "#8d9490",
	"monster/wraith":         "#77bf8d",
	"monster/wyvern":         "#3d2a2b"
};

function toCoordId(coord) {
	return coord[0].toFixed(3) + ";" + coord[1].toFixed(3);
}

function createMarkerObj(coordId, item, checked) {
	let id = item.id;
	let global = item.global;
	let obj = { id: coordId, coordIds: [], markers: [], layers: [], externals: [], checked: checked, global: global };
	if (id) {
		if (global && id in globalItems)
			obj = globalItems[id];
		else if (id in markers)
			obj = markers[id];
		obj.id = id;
		if (coordId)
			markers[id] = obj;
		if (global)
			globalItems[id] = obj;
	} else {
		if (!coordId)
			console.error("creating non-global obj without coordId", item);
		id = coordId;
	}

	if (coordId)
		obj.coordIds.push(coordId);

	if (obj.markers.length > 0) {
		if (checked && !obj.checked)
			toggleChecked(obj, true);
		checked = obj.checked;
	} else if (checked) {
		if (!obj.global)
			checkedMarkers.push(id);
	}

	obj.item = item;

	return [obj, id, checked];
}

function createExternalObj(map, coord, dataKey, item) {
	let id = item.id;
	let global = item.global;
	let coordId = toCoordId(coord);
	let ns = map.ns;

	let obj = {
		id:        coordId,
		coordIds:  [],
		markers:   [],
		layers:    [],
		externals: [],
		global:    global
	};

	if (id) {
		if (global && id in globalItems)
			obj = globalItems[id];
		else if (externalItems[ns] && id in externalItems[ns])
			obj = externalItems[ns][id];
		obj.id = id;
		if (global)
			globalItems[id] = obj;
	} else {
		id = coordId;
	}

	let ext = {
		coordId:  coordId,
		external: true,
		map:      map,
		obj:      obj,
		item:     item
	};

	obj.externals.push(ext);
	externalItems.all.push(ext);
	externalItems[ns][id] = obj;
}

function createMarker(coord, icon, label, popup, dataKey, item, checked, routes, areas) {
	let marker = L.marker(coord, { icon: icon, riseOnHover: true });

	marker.bindTooltip(label);
	marker.bindPopup(popup);

	let coordId = toCoordId(coord);

	let obj;
	let id;
	[obj, id, checked] = createMarkerObj(coordId, item, checked);

	marker.setOpacity(checked ? checkedMarkerOpacity : uncheckedMarkerOpacity);

	markers[coordId] = obj;
	obj.markers.push(marker);
	marker.obj = obj;
	if (obj.layers.indexOf(dataKey) < 0) {
		obj.layers.push(dataKey);
		if (!checked)
			uncheckedMarkerCount[dataKey]++;
	}

	marker.on("contextmenu", function(e) {
		if (!e.target || !e.target.obj)
			return;
		toggleChecked(e.target.obj);
	});

	hasMarkers[dataKey] = true;

	marker.routes = [];
	for (let route of routes) {
		marker.routes.push(route);
		route.marker = marker;

		if (!route.fuse)
			continue;

		route.layer.setStyle({ opacity: checked ? checkedRouteOpacity : uncheckedRouteOpacity });

		route.layer.on("click", function(e) {
			if (!e.target || !e.target.route || !e.target.route.marker)
				return;
			e.target.route.marker.openPopup();
		});

		route.layer.on("contextmenu", function(e) {
			if (!e.target || !e.target.route || !e.target.route.marker || !e.target.route.marker.obj)
				return;
			L.DomEvent.stopPropagation(e);
			toggleChecked(e.target.route.marker.obj);
		});
	}

	marker.areas = [];
	for (let area of areas) {
		marker.areas.push(area);
		area.marker = marker;

		if (!area.fuse)
			continue;

		area.layer.setStyle({
			opacity:     checked ? checkedAreaStrokeOpacity : uncheckedAreaStrokeOpacity,
			fillOpacity: checked ? checkedAreaFillOpacity   : uncheckedAreaFillOpacity
		});

		area.layer.on("click", function(e) {
			if (!e.target || !e.target.area || !e.target.area.marker)
				return;
			e.target.area.marker.openPopup();
		});
	}

	return marker;
}

function saveCheckedMarkers() {
	let checkedKey = "markers-" + mapInfo.name + "-checked";
	localStorage[checkedKey] = JSON.stringify(checkedMarkers);
}

function saveDisabledMarkers() {
	let disabledKey = "markers-" + mapInfo.name + "-disabled";
	localStorage[disabledKey] = JSON.stringify(disabledMarkers);
}

function updateCount(dataKey) {
	$("ul.key.filter > li:not(.none) > i." + dataKey + " ~ :last").text(uncheckedMarkerCount[dataKey]);
}

function toggleChecked(obj, noUpdate) {
	if (obj.global && obj.quest && obj.quest.initial)
		return;

	if (obj.global && obj.card && obj.card.initial)
		return;

	if (obj.global && obj.alchemy && obj.alchemy.initial)
		return;

	obj.checked = !obj.checked;

	for (m of obj.markers) {
		m.setOpacity(obj.checked ? checkedMarkerOpacity : uncheckedMarkerOpacity);
		for (let route of m.routes) {
			if (!route.fuse)
				continue;
			route.layer.setStyle({ opacity: obj.checked ? checkedRouteOpacity : uncheckedRouteOpacity });
		}
		for (let area of m.areas) {
			if (!area.fuse)
				continue;
			area.layer.setStyle({
				opacity:     obj.checked ? checkedAreaStrokeOpacity : uncheckedAreaStrokeOpacity,
				fillOpacity: obj.checked ? checkedAreaFillOpacity   : uncheckedAreaFillOpacity
			});
		}
	}

	let newClass = "fa-square-o";
	let oldClass = "fa-square-o";
	if (obj.checked)
		newClass = "fa-check-square-o";
	else
		oldClass = "fa-check-square-o";

	if (obj.quest) {
		$("li.quest-" + $.escapeSelector(obj.id) + " i.checkbox").removeClass(oldClass).addClass(newClass);
		if (typeof obj.finished != "boolean" && obj.checked)
			$("li.quest-" + $.escapeSelector(obj.id)).addClass("item-finished");
		else
			$("li.quest-" + $.escapeSelector(obj.id)).removeClass("item-finished");
	}

	if (obj.card) {
		$("li.card-" + $.escapeSelector(obj.id) + " i.checkbox").removeClass(oldClass).addClass(newClass);
		if (obj.checked)
			$("li.card-" + $.escapeSelector(obj.id)).addClass("item-finished");
		else
			$("li.card-" + $.escapeSelector(obj.id)).removeClass("item-finished");
	}

	if (obj.diagram)
		$("li.diagram-" + $.escapeSelector(obj.id) + " i.checkbox").removeClass(oldClass).addClass(newClass);

	if (obj.gear) {
		$("li.gear-" + $.escapeSelector(obj.id) + " i.checkbox-f").removeClass(oldClass).addClass(newClass);
		if (obj.checked)
			$("li.gear-" + $.escapeSelector(obj.id)).addClass("item-finished");
		else
			$("li.gear-" + $.escapeSelector(obj.id)).removeClass("item-finished");
	}

	if (obj.alchemy) {
		$("li.alchemy-" + $.escapeSelector(obj.id) + " i.checkbox").removeClass(oldClass).addClass(newClass);
		if (typeof obj.finished != "boolean" && obj.checked)
			$("li.alchemy-" + $.escapeSelector(obj.id)).addClass("item-finished");
		else
			$("li.alchemy-" + $.escapeSelector(obj.id)).removeClass("item-finished");
	}

	if (obj.checked) {
		if (!obj.global)
			checkedMarkers.push(obj.id);
		for (let dataKey of obj.layers)
			uncheckedMarkerCount[dataKey]--;
	} else {
		if (!obj.global)
			checkedMarkers = checkedMarkers.filter(function (item) { return item !== obj.id; });
		for (let dataKey of obj.layers)
			uncheckedMarkerCount[dataKey]++;
	}

	if(!noUpdate) {
		if (obj.global) {
			let globs = null;
			if (localStorage["globals-checked"])
				globs = JSON.parse(localStorage["globals-checked"]);
			if (!(globs instanceof Array))
				globs = [];
			let mod = false;
			if (obj.checked) {
				if (globs.indexOf(obj.id) < 0) {
					globs.push(obj.id);
					mod = true;
				}
			} else {
				if (globs.indexOf(obj.id) >= 0) {
					globs = globs.filter(function (item) { return item !== obj.id; });
					mod = true;
				}
			}
			if (mod)
				localStorage["globals-checked"] = JSON.stringify(globs);
		}
		saveCheckedMarkers();
		for (let dataKey of obj.layers)
			updateCount(dataKey);
	}
}

function toggleFinished(obj, noUpdate) {
	if (!obj.global || (!obj.quest && !obj.alchemy) || typeof obj.finished != "boolean")
		return;

	obj.finished = !obj.finished;

	let newClass = "fa-square-o";
	let oldClass = "fa-square-o";
	if (obj.finished)
		newClass = "fa-check-square-o";
	else
		oldClass = "fa-check-square-o";

	if (obj.quest) {
		$("li.quest-" + $.escapeSelector(obj.id) + " i.checkbox-f").removeClass(oldClass).addClass(newClass);
		if (obj.finished)
			$("li.quest-" + $.escapeSelector(obj.id)).addClass("item-finished");
		else
			$("li.quest-" + $.escapeSelector(obj.id)).removeClass("item-finished");
	}

	if (obj.alchemy) {
		$("li.alchemy-" + $.escapeSelector(obj.id) + " i.checkbox-f").removeClass(oldClass).addClass(newClass);
		if (obj.finished)
			$("li.alchemy-" + $.escapeSelector(obj.id)).addClass("item-finished");
		else
			$("li.alchemy-" + $.escapeSelector(obj.id)).removeClass("item-finished");
	}

	if(!noUpdate) {
		let globs = null;
		if (localStorage["globals-checked"])
			globs = JSON.parse(localStorage["globals-checked"]);
		if (!(globs instanceof Array))
			globs = [];
		let mod = false;
		if (obj.finished) {
			if (globs.indexOf(obj.id + "$f") < 0) {
				globs.push(obj.id + "$f");
				mod = true;
			}
		} else {
			if (globs.indexOf(obj.id + "$f") >= 0) {
				globs = globs.filter(function (item) { return item !== obj.id + "$f"; });
				mod = true;
			}
		}
		if (mod)
			localStorage["globals-checked"] = JSON.stringify(globs);
	}
}

function resetProgress() {
	for (let m of mapInfos) {
		let key = "markers-" + m.name + "-checked";
		localStorage.removeItem(key);
	}
	localStorage.removeItem("globals-checked");
	location.reload();
}

function inheritMapDlc(item, map) {
	if (map.hos)    item.hos    = true;
	if (map.notHos) item.notHos = true;
	if (map.baw)    item.baw    = true;
	if (map.notBaw) item.notBaw = true;
	if (map.mod)    item.mod    = true;
	if (map.notMod) item.notMod = true;
}

function processData(checkedMarkersLd, checkedGlobalsLd) {
	let data = [];
	for (let i = 0; i < mapInfos.length; i++)
		data.push(mapInfos[i].getMapData());

	alchemy = substAlchemy(alchemy);

	for (let [id, item] of Object.entries(alchemy)) {
		let obj = {
			id:        id,
			coordIds:  [],
			markers:   [],
			layers:    [],
			externals: [],
			checked:   item.initial || checkedGlobalsLd.indexOf(id) >= 0,
			finished:  (item.alchemyKey != "alcohol" && item.alchemyKey != "substance") ?
			           checkedGlobalsLd.indexOf(id + "$f") >= 0 : null,
			global:    true,
			alchemy:   item
		};
		globalItems[id] = obj;
		item.obj = obj;
	}

	prescreenQuests(quests);
	for (let i = 0; i < mapInfos.length; i++)
		prescreenMapData(mapInfos[i], data[i]);

	quests = substQuests(quests);

	for (let [id, quest] of Object.entries(quests)) {
		let obj = {
			id:        id,
			coordIds:  [],
			markers:   [],
			layers:    [],
			externals: [],
			checked:   quest.initial || checkedGlobalsLd.indexOf(id) >= 0,
			finished:  quest.questKey != "event" ? checkedGlobalsLd.indexOf(id + "$f") >= 0 : null,
			global:    true,
			quest:     quest
		};
		globalItems[id] = obj;
		quest.obj = obj;
	}

	substInteriors(mapInfo, data[mapInfoIndex], "interior", function(interior) {
		let id = interiors.length;
		let z = 0;
		for (let i = 0; i < interior.floors.length; i++) {
			let layers = [];
			for (let j = 0; j < interior.floors[i].images.length; j++) {
				layers.push(L.imageOverlay(window.topdir + "/files/images/" + interior.floors[i].images[j].file,
				                           interior.floors[i].images[j].bounds,
				                           { zIndex: z++, pane: "interiorPane" }));
			}
			if (layers.length == 1)
				layers = layers[0];
			else
				layers = L.featureGroup(layers, { pane: "interiorPane" });
			layers.floor = interior.floors[i];
			interior.floors[i].layer = layers;
		}

		let rectangle = L.rectangle(interior.bounds, { color:       "#222",
		                                               opacity:     0.4,
		                                               fill:        true,
		                                               fillOpacity: 0.4,
		                                               interactive: false,
		                                               pane:        "bgPane" });
		interior.rectangle = rectangle;
		rectangle.interior = interior;

		let tooltip = L.tooltip(interior.coord, { content:     interior.label,
		                                          direction:   "bottom",
		                                          permanent:   true,
		                                          interactive: true });
		interior.tooltip = tooltip;
		tooltip.interior = interior;

		interiors.push(interior);
		return id;
	}, fitDlc);

	for (let dataKey of markerGroupNames) {
		let groupItems = [];

		substMapData(mapInfo, data[mapInfoIndex], dataKey, quests, function(coord, item, routes, areas) {
			if (!icons[item.icon]) {
				console.error("Invalid icon:", item.icon);
				return;
			}

			inheritMapDlc(item, mapInfo);

			let checked = false;
			let coordId = toCoordId(coord);
			if (checkedMarkersLd.indexOf(coordId) >= 0 || (item.id && checkedMarkersLd.indexOf(item.id) >= 0))
				checked = true;
			if (item.global) {
				if (checked && checkedGlobalsLd.indexOf(item.id) < 0) {
					// Migrate local to global
					checkedGlobalsLd.push(item.id);
					localStorage["globals-checked"] = JSON.stringify(checkedGlobalsLd);
				}
				if (checkedGlobalsLd.indexOf(item.id) >= 0)
					checked = true;
			}

			if (fitDlc(item)) {
				let tooltip = item.label.replace(/<\/?[^>]+(>|$)/g, "");
				let m = createMarker(coord, icons[item.icon], tooltip,
				                     "<h1>" + item.label + "</h1>" + item.desc,
				                     dataKey, item, checked, routes, areas);
				groupItems.push(m);

				searchData.push({
					loc:   coord,
					title: item.label.replace(/<\/?a[^>]*(>|$)/g, "") + " - " + item.desc.replace(/<\/?a[^>]*(>|$)/g, "")
				});

				for (let route of routes) {
					if (!route.fuse)
						continue;
					groupItems.push(route.layer);
				}

				for (let area of areas) {
					if (!area.fuse)
						continue;
					groupItems.push(area.layer);
				}
			} else {
				createMarkerObj(toCoordId(coord), item, checked);
			}
		}, function(r, item) {
			let arr = [];
			if (!isCoord(r.coords[0]) && r.coords[0] instanceof Array) {
				for (let sub of r.coords) {
					if (!(sub instanceof Array))
						continue;
					let innerArr = [];
					for (let coord of sub) {
						if (!isCoord(coord))
							continue;
						innerArr.push(L.latLng(coord[0], coord[1]));
					}
					if (innerArr.length != 0)
						arr.push(innerArr);
				}
			} else {
				for (let coord of r.coords) {
					if (!isCoord(coord))
						continue;
					arr.push(L.latLng(coord[0], coord[1]));
				}
			}
			let id = routes.length;
			r.layer = L.polyline(arr, { color: draw_colors[item.icon] || "red", dashArray: r.dashed ? "4 8" : null });
			r.layer.route = r;
			routes.push(r);
			return id;
		}, function(a, item) {
			let arr = [];
			if (!isCoord(a.coords[0]) && a.coords[0] instanceof Array) {
				for (let sub of a.coords) {
					if (!(sub instanceof Array))
						continue;
					let innerArr = [];
					for (let coord of sub) {
						if (!isCoord(coord))
							continue;
						innerArr.push(L.latLng(coord[0], coord[1]));
					}
					if (innerArr.length != 0)
						arr.push(innerArr);
				}
			} else {
				for (let coord of a.coords) {
					if (!isCoord(coord))
						continue;
					arr.push(L.latLng(coord[0], coord[1]));
				}
			}
			let id = areas.length;
			a.layer = L.polygon(arr, { color: draw_colors[item.icon] || "red", dashArray: a.dashed ? "4 8" : null });
			a.layer.area = a;
			areas.push(a);
			return id;
		});

		markerLayers[dataKey] = L.layerGroup(groupItems);
		if (disabledMarkers.indexOf(dataKey) >= 0)
			markerLayers[dataKey].disabled = true;
	}

	for (let i = 0; i < mapInfos.length; i++) {
		if (i == mapInfoIndex)
			continue;

		for (let [dataKey, doLocals] of externItemsProcessList) {
			substMapData(mapInfos[i], data[i], dataKey, quests, function(coord, item) {
				if (!icons[item.icon]) {
					console.error("Invalid icon:", item.icon);
					return;
				}

				inheritMapDlc(item, mapInfos[i]);

				if (!fitDlc(item))
					return;

				createExternalObj(mapInfos[i], coord, dataKey, item);
			}, undefined, undefined, undefined, !doLocals);
		}
	}

	cards = substCards(cards);

	for (let [id, card] of Object.entries(cards)) {
		card.global = true;
		let [obj] = createMarkerObj(null, card, card.initial || checkedGlobalsLd.indexOf(id) >= 0);
		obj.card = card;
		card.obj = obj;

		let nsrcs = [];

		for (let coordId of obj.coordIds)
			nsrcs.push({ coordId: coordId, obj: obj });
		for (let ext of obj.externals)
			nsrcs.push({ ns: ext.map.ns, coordId: ext.coordId, obj: ext });

		let sources = card.sources || [];
		if (!(sources instanceof Array))
			sources = [sources];
		for (let src of sources) {
			let hasNs = src.indexOf(":") >= 0;
			if (hasNs) {
				let ns;
				[ns, src] = src.split(":");
				if (ns == mapInfo.ns) {
					let sobj = markers[src];
					if (!sobj) {
						console.error("card " + id + " has non-existent source " + src, card);
						continue;
					}
					if (sobj.coordIds.length == 0) {
						console.error("card " + id + " source " + src + " has no coordinates", card);
						continue;
					}
					if (!sobj.item) {
						console.error("card " + id + " source " + src + " has no item information", card);
						continue;
					}
					for (let coordId of sobj.coordIds)
						nsrcs.push({ coordId: coordId, obj: sobj });
				} else {
					let sobj = externalItems[ns][src];
					if (!sobj) {
						console.error("card " + id + " has non-existent source " + ns + ":" + src, card);
						continue;
					}
					let exts = sobj.externals;
					if (exts.length == 0) {
						console.error("card " + id + " source " + ns + ":" + src + " has no coordinates", card);
						continue;
					}
					for (let ext of exts) {
						if (!ext.item) {
							console.error("card " + id + " source " + ns + ":" + src + " has no item information", card);
							continue;
						}
						nsrcs.push({ ns: ext.map.ns, coordId: ext.coordId, obj: ext });
					}
				}
				continue;
			}
			let sobj = globalItems[src];
			if (!sobj) {
				console.error("card " + id + " has non-existent source " + src, card);
				continue;
			}
			if (sobj.quest) {
				nsrcs.push({ quest: sobj.quest, obj: sobj });
				continue;
			}
			let exts = sobj.externals;
			if (sobj.coordIds.length == 0 && exts.length == 0) {
				console.error("card " + id + " source " + src + " has no coordinates", card);
				continue;
			}
			for (let coordId of sobj.coordIds) {
				if (!sobj.item) {
					console.error("card " + id + " source " + src + " has no item information", card);
					continue;
				}
				nsrcs.push({ coordId: coordId, obj: sobj });
			}
			for (let ext of exts) {
				if (!ext.item) {
					console.error("card " + id + " source (" + ext.map.ns + ":)" + src + " has no item information", card);
					continue;
				}
				nsrcs.push({ ns: ext.map.ns, coordId: ext.coordId, obj: ext });
			}
		}

		card.sources = nsrcs;
	}

	gear = substGear(gear);

	for (let [id, item] of Object.entries(gear)) {
		item.global = true;
		let [obj] = createMarkerObj(null, item, checkedGlobalsLd.indexOf(id) >= 0);
		obj.gear = item;
		item.obj = obj;

		let diagram = item.diagram;
		if (diagram) {
			diagram = {
				id:     diagram,
				global: true
			};
			let [dobj] = createMarkerObj(null, diagram, checkedGlobalsLd.indexOf(diagram.id) >= 0);
			dobj.diagram = true;
			diagram.obj = dobj;
			diagram = dobj;
		}

		let quest = item.quest;
		if (quest) {
			quest = quests[quest];
			if (!quest)
				console.error("gear " + id + " has non-existent quest " + item.quest, item);
		}

		item.diagram = diagram;
		item.quest = quest;
	}
}

function unselectRoutes(skipHashUpdate) {
	for (r of routes) {
		if (r.fuse)
			continue;
		map.removeLayer(r.layer);
	}
	if (!skipHashUpdate)
		updateRouteHash(-1);
}

function selectRoute(id, skipFit, skipHashUpdate) {
	unselectRoutes(true);
	let r = routes[id];
	if (!r.fuse) {
		r.layer.addTo(map);
		if (!skipHashUpdate)
			updateRouteHash(id);
	}
	if (!skipFit)
		map.fitBounds(r.layer.getBounds());
}

function unselectAreas(skipHashUpdate) {
	for (a of areas) {
		if (a.fuse)
			continue;
		map.removeLayer(a.layer);
	}
	if (!skipHashUpdate)
		updateAreaHash(-1);
}

function selectArea(id, skipFit, skipHashUpdate) {
	unselectAreas(true);
	let a = areas[id];
	if (!a.fuse) {
		a.layer.addTo(map);
		if (!skipHashUpdate)
			updateAreaHash(id);
	}
	if (!skipFit)
		map.fitBounds(a.layer.getBounds());
}

function unselectFloors(id) {
	for (floor of interiors[id].floors)
		map.removeLayer(floor.layer);
}

function closeInterior(id, skipHashUpdate) {
	unselectFloors(id);
	map.removeLayer(interiors[id].tooltip);
	map.removeLayer(interiors[id].rectangle);
	interiors[id].shown = false;
	if (!skipHashUpdate)
		updateInteriorHash();
	$("#interior-switch" + id).addClass("interior-hidden").children("i").removeClass("fa-eye").addClass("fa-eye-slash");
}

function updateInteriorLabel(interiorId, floorId) {
	const concat = esc($.t("misc.concat"));
	const concatDash = esc($.t("misc.concatDash"));
	let intr = interiors[interiorId];
	let floor = intr.floors[floorId];
	let label = intr.label
	if (floor.label)
		label += concatDash + floor.label;
	if (intr.floors.length != 1) {
		const next = esc($.t("misc.nextLink")).replace(/ /g, "&nbsp;");
		const prev = esc($.t("misc.prevLink")).replace(/ /g, "&nbsp;");
		let nextLink = '[&nbsp;<a href="javascript:document.getElementById(\'map\').focus(); selectFloor(' +
		               interiorId + ", " + ((floorId + 1) % intr.floors.length) + ');">' + next + "</a>&nbsp;]";
		let prevId = floorId != 0 ? floorId - 1 : intr.floors.length - 1;
		let prevLink = '[&nbsp;<a href="javascript:document.getElementById(\'map\').focus(); selectFloor(' +
		               interiorId + ", " + prevId + ');">' + prev + "</a>&nbsp;]";
		label += "<br>" + prevLink + concat + nextLink;
	}
	const close = esc($.t("misc.closeLink")).replace(/ /g, "&nbsp;");
	let closeLink = '[&nbsp;<a href="javascript:document.getElementById(\'map\').focus(); closeInterior(' +
	                interiorId + ');">' + close + "</a>&nbsp;]";
	label += concat + closeLink;
	intr.tooltip.setContent("<center>" + label + "</center>");
}

function selectFloor(interiorId, floorId, fit, skipHashUpdate) {
	updateInteriorLabel(interiorId, floorId);
	unselectFloors(interiorId, true);
	let interior = interiors[interiorId];
	interior.rectangle.addTo(map);
	for (let i = 0; i < interior.floors.length; i++) {
		let floor = interior.floors[i];
		if (i == floorId)
			floor.layer.setStyle({ opacity: 1.0 });
		else
			floor.layer.setStyle({ opacity: 0.4 });
		floor.layer.addTo(map);
	}
	floor.layer.addTo(map);
	interior.tooltip.addTo(map);
	interior.shown = true;
	interior.shownFloorId = floorId;
	$("#interior-switch" + interiorId).removeClass("interior-hidden").children("i").removeClass("fa-eye-slash").addClass("fa-eye");
	if (!skipHashUpdate)
		updateInteriorHash();
	if (fit)
		map.fitBounds(interior.bounds);
}

function findNearestInterior(p) {
	let found = null;
	let fdist = 0;
	for (let i = 0; i < interiors.length; i++) {
		let interior = interiors[i];
		if (!interior.shown)
			continue;
		let centerLat = (interior.bounds[0][0] + interior.bounds[1][0]) / 2;
		let centerLng = (interior.bounds[0][1] + interior.bounds[1][1]) / 2;
		let dist = Math.hypot(centerLat - p.lat, centerLng - p.lng);
		if (!found || dist < fdist) {
			found = interior;
			fdist = dist;
		}
	}
	return found;
}

function hackySticky() {
	if ($(window).height() > $("#sidebar-logo").outerHeight() +
	                         $("#sidebar-tabs").outerHeight() +
	                         $("#sidebar-wrap").outerHeight() +
	                         $("div#copyright").outerHeight() + 45)
		$("div#copyright").addClass("absolute");
	else
		$("div#copyright").removeClass("absolute");
}

function selectTab(tab) {
	if (tab == selectedTab)
		return;
	if ($("#tab-" + tab).length != 1)
		return;
	scrollPos[selectedTab] = $("#sidebar").getNiceScroll(0).getScrollTop();
	sessionStorage["scrollbar-" + selectedTab] = scrollPos[selectedTab];
	$("#sidebar-tabs > i").removeClass("sel");
	$("#sidebar-wrap > div[id^='body-']").hide();
	$("#tab-" + tab).addClass("sel");
	$("#body-" + tab).show();
	selectedTab = tab;
	hackySticky();
	$("#sidebar").getNiceScroll().resize();
	$("#sidebar").getNiceScroll(0).scrollTop(scrollPos[tab]);
	sessionStorage["selectedTab"] = tab;
}

function toggleQuestCatOpen(cat, noUpdate) {
	let index = questCatOpen.indexOf(cat);
	let open = index >= 0;
	if (open) {
		$("li.questcat-" + cat + ">i.caret").removeClass("fa-caret-up").addClass("fa-caret-down");
		$("li.questcat-" + cat + ">ul.quest").hide();
		questCatOpen.splice(index, 1);
	} else {
		$("li.questcat-" + cat + ">i.caret").removeClass("fa-caret-down").addClass("fa-caret-up");
		$("li.questcat-" + cat + ">ul.quest").show();
		questCatOpen.push(cat);
	}
	hackySticky();
	$("#sidebar").getNiceScroll().resize();
	if (!noUpdate)
		sessionStorage.questCatOpen = JSON.stringify(questCatOpen);
}

function toggleCardDeckOpen(deck, noUpdate) {
	let index = cardDeckOpen.indexOf(deck);
	let open = index >= 0;
	if (open) {
		$("li.carddeck-" + deck + ">i.caret").removeClass("fa-caret-up").addClass("fa-caret-down");
		$("li.carddeck-" + deck + ">ul.card").hide();
		cardDeckOpen.splice(index, 1);
	} else {
		$("li.carddeck-" + deck + ">i.caret").removeClass("fa-caret-down").addClass("fa-caret-up");
		$("li.carddeck-" + deck + ">ul.card").show();
		cardDeckOpen.push(deck);
	}
	hackySticky();
	$("#sidebar").getNiceScroll().resize();
	if (!noUpdate)
		sessionStorage.cardDeckOpen = JSON.stringify(cardDeckOpen);
}

function toggleSchoolOpen(school, noUpdate) {
	let index = schoolOpen.indexOf(school);
	let open = index >= 0;
	if (open) {
		$("li.school-" + school + ">i.caret").removeClass("fa-caret-up").addClass("fa-caret-down");
		$("li.school-" + school + ">ul.gear").hide();
		schoolOpen.splice(index, 1);
	} else {
		$("li.school-" + school + ">i.caret").removeClass("fa-caret-down").addClass("fa-caret-up");
		$("li.school-" + school + ">ul.gear").show();
		schoolOpen.push(school);
	}
	hackySticky();
	$("#sidebar").getNiceScroll().resize();
	if (!noUpdate)
		sessionStorage.schoolOpen = JSON.stringify(schoolOpen);
}

function toggleAlchemyCatOpen(cat, noUpdate) {
	let index = alchemyCatOpen.indexOf(cat);
	let open = index >= 0;
	if (open) {
		$("li.alchemycat-" + cat + ">i.caret").removeClass("fa-caret-up").addClass("fa-caret-down");
		$("li.alchemycat-" + cat + ">ul.alchemy").hide();
		alchemyCatOpen.splice(index, 1);
	} else {
		$("li.alchemycat-" + cat + ">i.caret").removeClass("fa-caret-down").addClass("fa-caret-up");
		$("li.alchemycat-" + cat + ">ul.alchemy").show();
		alchemyCatOpen.push(cat);
	}
	hackySticky();
	$("#sidebar").getNiceScroll().resize();
	if (!noUpdate)
		sessionStorage.alchemyCatOpen = JSON.stringify(alchemyCatOpen);
}

function createQuestList() {
	let groups = [
		{ id: "mainquest",    label: esc($.t("questcategory.mainquests")) },
		{ id: "sidequest",    label: esc($.t("questcategory.sidequests")) },
		{ id: "contract",     label: esc($.t("questcategory.contracts")) },
		{ id: "treasurehunt", label: esc($.t("questcategory.treasurehunts")) },
		{ id: "event",        label: esc($.t("questcategory.events")) }
	];

	let g = {
		mainquest:    [],
		sidequest:    [],
		contract:     [],
		treasurehunt: [],
		event:        []
	};

	for (let quest of Object.values(quests)) {
		if (!fitDlc(quest))
			continue;
		let cat = quest.questKey;
		g[cat].push(quest);
	}

	for (let i = 0; i < groups.length; i++) {
		g[groups[i].id].sort(function(a, b) { return a.labelText.localeCompare(b.labelText); });
	}

	let r = '<ul class="questcat">';
	for (let i = 0; i < groups.length; i++) {
		r += '<li tabindex="0" class="questcat questcat-' + groups[i].id + '" data-quest-cat="' + groups[i].id + '">' +
		     '<div class="ellip-tooltip" data-quest-cat="' + groups[i].id + '">' + groups[i].label + '</div>' +
		     '<i class="caret fa fa-caret-down" data-quest-cat="' + groups[i].id + '"></i><br>' +
		     '<ul class="quest" hidden>';
		for (let quest of g[groups[i].id]) {
			let dlcClass = "";
			if (quest.hos)
				dlcClass = " hos";
			else if (quest.baw)
				dlcClass = " baw";
			let checkedClass = "fa-square-o";
			let finishedClass = "fa-square-o";
			let finishedClass2 = "";
			if (quest.obj.checked) {
				checkedClass = "fa-check-square-o";
				if (typeof quest.obj.finished != "boolean")
					finishedClass2 = " item-finished";
			}
			if (quest.obj.finished) {
				finishedClass = "fa-check-square-o";
				finishedClass2 = " item-finished";
			}
			r += '<li tabindex="0" id="quest-' + quest.id + '" class="quest quest-' + quest.id + finishedClass2 + '" data-quest-id="' + quest.id + '">';
			if (quest.initial)
				r += '<i class="checkbox checkbox-frozen fa fa-check-square-o"></i>';
			else
				r += '<i tabindex="0" class="checkbox fa ' + checkedClass + '" data-quest-id="' + quest.id + '"></i>';
			if (typeof quest.obj.finished != "boolean")
				r += '<i class="skip-checkbox"></i>';
			else
				r += '<i tabindex="0" class="checkbox-f fa ' + finishedClass + '" data-quest-id="' + quest.id + '"></i>';
			r += '<i class="quest-region region-' + quest.region + '"></i>' +
			     '<i class="quest-type ' + quest.icon + '"></i>' +
			     '<b class="quest-level">' + (quest.level || "") + '</b>' +
			     '<div class="quest-title ellip-tooltip' + dlcClass + '" data-quest-id="' + quest.id + '">' + quest.labelText + '</div><br></li>';
		}
		r += '</ul>' +
		     '</li>';
	}
	r += '</ul>';
	return r;
}

function createCardList() {
	let decks = [
		{ id: "monsters",            label: esc($.t("card.monsters.label")) },
		{ id: "nilfgaardian_empire", label: esc($.t("card.nilfgaardian_empire.label")) },
		{ id: "northern_realms",     label: esc($.t("card.northern_realms.label")) },
		{ id: "scoiatael",           label: esc($.t("card.scoiatael.label")) },
		{ id: "skellige",            label: esc($.t("card.skellige.label")) },
		{ id: "neutral",             label: esc($.t("card.neutral.label")) }
	];

	let g = {
		monsters:            [],
		nilfgaardian_empire: [],
		northern_realms:     [],
		scoiatael:           [],
		skellige:            [],
		neutral:             []
	};

	for (let card of Object.values(cards)) {
		if (!fitDlc(card))
			continue;
		let deck = card.cardKey;
		g[deck].push(card);
	}

	for (let i = 0; i < decks.length; i++) {
		g[decks[i].id].sort(function(a, b) { return a.labelText.localeCompare(b.labelText); });
	}

	let r = '<ul class="carddeck">';
	for (let i = 0; i < decks.length; i++) {
		if (g[decks[i].id].length == 0)
			continue;
		r += '<li tabindex="0" class="carddeck carddeck-' + decks[i].id + '" data-card-deck="' + decks[i].id + '">' +
		     '<div class="ellip-tooltip" data-card-deck="' + decks[i].id + '">' + decks[i].label + '</div>' +
		     '<i class="caret fa fa-caret-down" data-card-deck="' + decks[i].id + '"></i><br>' +
		     '<ul class="card" hidden>';
		for (let card of g[decks[i].id]) {
			let dlcClass = "";
			if (card.hos)
				dlcClass = " hos";
			else if (card.baw)
				dlcClass = " baw";
			let checkedClass = "fa-square-o";
			let checkedClass2 = "";
			if (card.obj.checked) {
				checkedClass = "fa-check-square-o";
				checkedClass2 = " item-finished";
			}
			r += '<li tabindex="0" id="card-' + card.id + '" class="card card-' + card.id + checkedClass2 + '" data-card-id="' + card.id + '">';
			if (card.initial)
				r += '<i class="checkbox checkbox-frozen fa fa-check-square-o"></i>';
			else
				r += '<i tabindex="0" class="checkbox fa ' + checkedClass + '" data-card-id="' + card.id + '"></i>';
			r += '<i class="card-icon card-' + card.icon + '"></i>' +
			     '<div class="card-label ellip-tooltip' + dlcClass + '" data-card-id="' + card.id + '">' + card.labelText + '</div><br></li>';
		}
		r += '</ul>' +
		     '</li>';
	}
	r += '</ul>';
	return r;
}

function createGearList() {
	let schools = [
		{ id: "bear",      label: esc($.t("gear.bear.label")) },
		{ id: "cat",       label: esc($.t("gear.cat.label")) },
		{ id: "forgotten", label: esc($.t("gear.forgotten.label")) },
		{ id: "griffin",   label: esc($.t("gear.griffin.label")) },
		{ id: "manticore", label: esc($.t("gear.manticore.label")) },
		{ id: "viper",     label: esc($.t("gear.viper.label")) },
		{ id: "wolf",      label: esc($.t("gear.wolf.label")) }
	];

	let g = {
		bear:      [],
		cat:       [],
		forgotten: [],
		griffin:   [],
		manticore: [],
		viper:     [],
		wolf:      []
	};

	for (let item of Object.values(gear)) {
		if (!fitDlc(item))
			continue;
		let school = item.gearKey;
		g[school].push(item);
	}

	for (let i = 0; i < schools.length; i++) {
		g[schools[i].id].sort(function(a, b) { return a.labelText.localeCompare(b.labelText); });
	}

	let r = '<ul class="school">';
	for (let i = 0; i < schools.length; i++) {
		if (g[schools[i].id].length == 0)
			continue;
		r += '<li tabindex="0" class="school school-' + schools[i].id + '" data-school="' + schools[i].id + '">' +
		     '<div class="ellip-tooltip" data-school="' + schools[i].id + '">' + schools[i].label + '</div>' +
		     '<i class="caret fa fa-caret-down" data-school="' + schools[i].id + '"></i><br>' +
		     '<ul class="gear" hidden>';
		for (let item of g[schools[i].id]) {
			let dlcClass = "";
			if (item.hos)
				dlcClass = " hos";
			else if (item.baw)
				dlcClass = " baw";
			let checkedClass = "fa-square-o";
			let craftedClass = "fa-square-o";
			let craftedClass2 = "";
			if (item.obj.checked) {
				craftedClass = "fa-check-square-o";
				craftedClass2 = " item-finished";
			}
			let diagId = "";
			let diagId2 = "";
			if (item.diagram) {
				if (item.diagram.checked)
					checkedClass = "fa-check-square-o";
				diagId = " diagram-" + item.diagram.id;
				diagId2 = ' data-diagram-id="' + item.diagram.id + '"';
			}
			r += '<li tabindex="0" id="gear-' + item.id + '" class="gear gear-' + item.id + diagId + craftedClass2 + '" data-gear-id="' + item.id + '"' + diagId2 + '>';
			if (item.diagram)
				r += '<i tabindex="0" class="checkbox fa ' + checkedClass + '" data-gear-id="' + item.id + '"' + diagId2 + '></i>';
			else
				r += '<i class="skip-checkbox"></i>';
			r += '<i tabindex="0" class="checkbox-f fa ' + craftedClass + '" data-gear-id="' + item.id + '"></i>' +
			     '<i class="gear-icon gear-' + item.icon + '"></i>' +
			     '<div class="gear-label ellip-tooltip' + dlcClass + '" data-gear-id="' + item.id + '">' + item.labelText + '</div><br></li>';
		}
		r += '</ul>' +
		     '</li>';
	}
	r += '</ul>';
	return r;
}

function createAlchemyList() {
	let groups = [
		{ id: "substance", label: esc($.t("alchemylist.substance.label")) },
		{ id: "alcohol",   label: esc($.t("alchemylist.alcohol.label")) },
		{ id: "bomb",      label: esc($.t("alchemylist.bomb.label")) },
		{ id: "decoction", label: esc($.t("alchemylist.decoction.label")) },
		{ id: "oil",       label: esc($.t("alchemylist.oil.label")) },
		{ id: "potion",    label: esc($.t("alchemylist.potion.label")) },
		{ id: "quest",     label: esc($.t("alchemylist.quest.label")) }
	];

	let g = {
		alcohol:   [],
		bomb:      [],
		decoction: [],
		oil:       [],
		potion:    [],
		quest:     [],
		substance: []
	};

	for (let item of Object.values(alchemy)) {
		if (!fitDlc(item))
			continue;
		let cat = item.alchemyKey;
		g[cat].push(item);
	}

	for (let i = 0; i < groups.length; i++) {
		g[groups[i].id].sort(function(a, b) { return a.labelText.localeCompare(b.labelText); });
	}

	let r = '<ul class="alchemycat">';
	for (let i = 0; i < groups.length; i++) {
		r += '<li tabindex="0" class="alchemycat alchemycat-' + groups[i].id + '" data-alchemy-cat="' + groups[i].id + '">' +
		     '<div class="ellip-tooltip" data-alchemy-cat="' + groups[i].id + '">' + groups[i].label + '</div>' +
		     '<i class="caret fa fa-caret-down" data-alchemy-cat="' + groups[i].id + '"></i><br>' +
		     '<ul class="alchemy" hidden>';
		for (let item of g[groups[i].id]) {
			let dlcClass = "";
			if (item.hos)
				dlcClass = " hos";
			else if (item.baw)
				dlcClass = " baw";
			let checkedClass = "fa-square-o";
			let finishedClass = "fa-square-o";
			let finishedClass2 = "";
			if (item.obj.checked) {
				checkedClass = "fa-check-square-o";
				if (typeof item.obj.finished != "boolean")
					finishedClass2 = " item-finished";
			}
			if (item.obj.finished) {
				finishedClass = "fa-check-square-o";
				finishedClass2 = " item-finished";
			}
			r += '<li tabindex="0" id="alchemy-' + item.id + '" class="alchemy alchemy-' + item.id + finishedClass2 + '" data-alchemy-id="' + item.id + '">';
			if (item.initial)
				r += '<i class="checkbox checkbox-frozen fa fa-check-square-o"></i>';
			else
				r += '<i tabindex="0" class="checkbox fa ' + checkedClass + '" data-alchemy-id="' + item.id + '"></i>';
			if (typeof item.obj.finished != "boolean")
				r += '<i class="skip-checkbox"></i>';
			else
				r += '<i tabindex="0" class="checkbox-f fa ' + finishedClass + '" data-alchemy-id="' + item.id + '"></i>';
			r += '<i class="alchemy-icon" style="background-image: url(' + topdir + '/files/images/alchemy/' + item.icon + '.png);"></i>' +
			     '<div class="alchemy-label ellip-tooltip' + dlcClass + '" data-alchemy-id="' + item.id + '">' + item.labelText + '</div><br></li>';
		}
		r += '</ul>' +
		     '</li>';
	}
	r += '</ul>';
	return r;
}

function createSidebar() {
	let sidebar =
		'<div id="sidebar">' +
			'<div id="sidebar-logo"><a href="' + window.topdir + '/index.html" title="' + esc($.t("controls.returnToMapSelection"), true) + '"><center><img width="250" height="165" src="' + window.topdir + "/" + esc($.t("misc.logo_min"), true) + '" class="center"></center></a></div>' +
			'<div id="sidebar-tabs">' +
				'<b></b><i tabindex="0" id="tab-filter" class="fa fa-filter sel"></i>';

	if (interiors.length > 0)
		sidebar += '<b></b><i tabindex="0" id="tab-interior"></i>';

	sidebar +=
				'<b></b><i tabindex="0" id="tab-quest"></i>' +
				'<b></b><i tabindex="0" id="tab-card"></i>' +
				'<b></b><i tabindex="0" id="tab-gear"></i>' +
				'<b></b><i tabindex="0" id="tab-alchemy"></i>' +
				'<b></b><i tabindex="0" id="tab-settings" class="fa fa-cog"></i>' +
				'<b class="fill"></b>' +
			'</div>' +
			'<div id="sidebar-wrap">' +
				'<div id="body-filter">' +
					'<ul class="key filter">';

	let count = 0;
	for (key of markerGroupNames) {
		if (hasMarkers[key]) {
			let disabledClass = "";
			if (markerLayers[key].disabled)
				disabledClass = ' class="layer-disabled"';
			sidebar += '<li tabindex="0"' + disabledClass + '><i class="' + key + '"></i><div class="ellip-tooltip">' + esc($.t("sidebar." + key)) + '</div></li>';
			count++;
		}
	}

	// Number of elements must be even.
	if (count & 1)
		sidebar += '<li class="none"></li>';

	sidebar +=
					'</ul>' +
					'<ul class="key controls">' +
						'<li id="show-all" tabindex="0"><i class="fa fa-eye"></i><div class="ellip-tooltip">' + esc($.t("controls.show")) + '</div></li>' +
						'<li id="hide-all" tabindex="0"><i class="fa fa-eye-slash"></i><div class="ellip-tooltip">' + esc($.t("controls.hide")) + '</div></li>' +
						'<li id="show-counts" tabindex="0"><i class="fa fa-check-square"></i><div class="ellip-tooltip">' + esc($.t("controls.showCounts")) + '</div></li>' +
						'<li id="hide-counts" tabindex="0"><i class="fa fa-square"></i><div class="ellip-tooltip">' + esc($.t("controls.hideCounts")) + '</div></li>' +
						'<li><a href="https://github.com/witcher3map/witcher3map/wiki" target="_blank"><i class="fa fa-info-circle"></i><div class="ellip-tooltip">' + esc($.t("controls.helpFeatures")) + '</div></a></li>' +
						'<li id="Credits" tabindex="0" class="credits"><i class="fa fa-copyright"></i><span class="ellip-tooltip">' + esc($.t("controls.credits")) + '</span></li>' +
					'</ul>' +
				'</div>' +
				'<div id="body-interior" hidden>' +
					'<ul class="key interior">';

	for (let i = 0; i < interiors.length; i++) {
		let disabledClass = "";
		let eye = "fa-eye";
		if (!interiors[i].shown) {
			disabledClass = ' class="interior-hidden"';
			eye = "fa-eye-slash";
		}
		sidebar += '<li id="interior-switch' + i + '" tabindex="0"' + disabledClass + '><i class="fa ' + eye + '"></i><div class="ellip-tooltip">' + interiors[i].label + '</div></li>';
	}

	// Number of elements must be even.
	if (interiors.length & 1)
		sidebar += '<li class="none"></li>';

	sidebar +=
					'</ul>' +
				'</div>' +
				'<div id="body-quest" hidden>' +
					createQuestList() +
				'</div>' +
				'<div id="body-card" hidden>' +
					createCardList() +
				'</div>' +
				'<div id="body-gear" hidden>' +
					createGearList() +
				'</div>' +
				'<div id="body-alchemy" hidden>' +
					createAlchemyList() +
				'</div>' +
				'<div id="body-settings" hidden>' +
					'<ul class="setting">' +
						'<li id="enable-hos" tabindex="0"><i class="fa ' + (enable_hos ? 'fa-check-square-o' : 'fa-square-o') + '"></i><div class="ellip-tooltip">' + esc($.t("controls.enableHoS")) + '</div></li>' +
						'<li id="enable-baw" tabindex="0"><i class="fa ' + (enable_baw ? 'fa-check-square-o' : 'fa-square-o') + '"></i><div class="ellip-tooltip">' + esc($.t("controls.enableBaW")) + '</div></li>' +
						'<li id="enable-mod" tabindex="0"><i class="fa ' + (enable_mod ? 'fa-check-square-o' : 'fa-square-o') + '"></i><div class="ellip-tooltip">' + esc($.t("controls.enableMod")) + '</div></li>' +
						'<li id="reset-tracking" tabindex="0"><i class="fa fa-eraser"></i><div class="ellip-tooltip">' + esc($.t("controls.resetProgress")) + '</div></li>' +
					'</ul>' +
					'<div id="lang-switcher"></div>' +
				'</div>' +
			'</div>' +
			'<div id="copyright">' +
				'<div id="note">' +
					'<span id="note-msg">' +
						$.t("misc.contribute", { link: '<a style="color:#000000;text-decoration:underline" href="https://github.com/msinger/witcher3map">Github</a>' }) +
					'</span>' +
				'</div>' +
				'Created by <a href="https://github.com/untamed0">untamed0</a> and enhanced by ' +
				'<a href="https://github.com/root-BB">BaHTsIzBEdEvi</a> and ' +
				'<a href="https://github.com/msinger">Michael Singer</a>, licensed under ' +
				'<a href="http://creativecommons.org/licenses/by-nc-sa/4.0">CC BY-NC-SA</a>. ' +
				'The Witcher 3, logo, icons and map are the property of ' +
				'<a href="https://en.cdprojektred.com">CD PROJEKT RED</a>.' +
			'</div>' +
		'</div>' +
		'<div id="sidebar-border"></div>' +
		'<div tabindex="0" id="hide-sidebar"></div>';

	$("body").append(sidebar);
}

function runMap() {
	for (var icon in icon_sizes) {
		// regular
		if (icon_sizes[icon][0])
			icons[icon] = L.icon({ iconUrl:    window.topdir + "/files/images/icons/" + icon + ".png",
			                       iconSize:   icon_sizes[icon][0],
			                       iconAnchor: icon_sizes[icon][2] });

		// underground
		if (icon_sizes[icon][1])
			icons[icon + "_ug"] = L.icon({ iconUrl:    window.topdir + "/files/images/icons/underground/" + icon + ".png",
			                               iconSize:   icon_sizes[icon][1],
			                               iconAnchor: icon_sizes[icon][3] });
	}

	const params = new URLSearchParams(window.location.search);
	const paramDraw = params.get("draw") != null;

	if (localStorage.enableHoS === "false")
		enable_hos = false;
	if (localStorage.enableBaW === "false")
		enable_baw = false;
	if (localStorage.enableMod === "true")
		enable_mod = true;

	let disabledKey = "markers-" + mapInfo.name + "-disabled";
	if (localStorage[disabledKey])
		disabledMarkers = JSON.parse(localStorage[disabledKey]);
	if (!(disabledMarkers instanceof Array))
		disabledMarkers = [];

	let initialHideAll = false;
	if (localStorage["hide-all-" + mapInfo.name])
		initialHideAll = true;

	let checkedKey = "markers-" + mapInfo.name + "-checked";
	let checkedMarkersLd = [];
	if (localStorage[checkedKey])
		checkedMarkersLd = JSON.parse(localStorage[checkedKey]);
	if (!(checkedMarkersLd instanceof Array))
		checkedMarkersLd = [];

	let notesKey = "notes-" + mapInfo.name;
	if (localStorage[notesKey])
		notes = JSON.parse(localStorage[notesKey]);
	if (!(notes instanceof Array))
		notes = [];

	let checkedGlobalsLd = [];
	if (localStorage["globals-checked"])
		checkedGlobalsLd = JSON.parse(localStorage["globals-checked"]);
	if (!(checkedGlobalsLd instanceof Array))
		checkedGlobalsLd = [];

	for (let dataKey of markerGroupNames) {
		hasMarkers[dataKey] = false;
		uncheckedMarkerCount[dataKey] = 0;
	}

	for (let info of mapInfos)
		info.label = esc($.t("maps." + info.name));

	processData(checkedMarkersLd, checkedGlobalsLd);

	window.allLayers = [];
	let initialLayers = [];
	for (var groupName of markerGroupNames) {
		if (groupName in markerLayers) {
			allLayers.push(markerLayers[groupName]);
			if (!markerLayers[groupName].disabled)
				initialLayers.push(markerLayers[groupName]);
		}
	}

	$.event.special.enter = {
		delegateType: 'keydown',
		bindType: 'keydown',
		handle: function (e) {
			if (e.originalEvent.key === "Enter") {
				e.handleObj.handler.apply(this, arguments);
				return false;
			}
		}
	};

	$.event.special.spacebar = {
		delegateType: 'keydown',
		bindType: 'keydown',
		handle: function (e) {
			if (e.originalEvent.key === " ") {
				e.handleObj.handler.apply(this, arguments);
				return false;
			}
		}
	};

	$("body").empty();
	createSidebar();
	createLangSwitcher();
	$("body").append(
		'<div id="warn">' + esc($.t("misc.portraitWarn")) + '</div>' +
		'<div id="info-wrap"><div id="info-fade-intro"></div><div id="info"></div><div id="info-fade-outro"></div></div>' +
		'<div id="map"></div>'
	);

	// Fix bug where sidebar scrollbar doesn't appear when the language drop-down opens
	$(".dd-selected").on("click", function() {
		setTimeout(function() {
			$("#sidebar").getNiceScroll().resize();
		}, 500);
	});

	var wayPoint = false;
	var circle   = null;

	if (localStorage.hideWarn)
		$("#warn").remove();

	if (initialHideAll) {
		$("#hide-all").hide();
		$("#show-all").show();
	}

	$(window).on("resize", function() {
		hackySticky();
	});

	$("div#sidebar").niceScroll({
		cursorcolor:  "#5E4F32",
		cursorborder: "none"
	});

	$("div#info").niceScroll({
		cursorcolor:  "#5E4F32",
		cursorborder: "none"
	});

	var bounds = new L.LatLngBounds(L.latLng(mapInfo.bounds[0]), L.latLng(mapInfo.bounds[1]));

	var map_settings = {
		minZoom:             mapInfo.minZoom,
		maxZoom:             mapInfo.maxZoom,
		center:              mapInfo.initialPos,
		zoom:                mapInfo.initialZoom,
		attributionControl:  false,
		zoomControl:         false,
		layers:              initialLayers,
		crs:                 L.CRS.Simple,
		maxBounds:           bounds,
		maxBoundsViscosity:  1.0  // TODO: Make this a configuration option
	};

	window.map = L.map("map", map_settings);

	map.createPane("bgPane");
	map.createPane("interiorPane");
	map.createPane("selectionPane");

	new L.Control.Zoom({
		position:     "topright",
		zoomInTitle:  $.t("controls.zoomInButton"),
		zoomOutTitle: $.t("controls.zoomOutButton")
	}).addTo(map);

	new L.Control.Fullscreen({
		position: "topright",
		title: {
			false: $.t("controls.viewFullscreenButton"),
			true:  $.t("controls.exitFullscreenButton")
		}
	}).addTo(map);

	var hash = new L.Hash(map);

	map.addControl(new L.Control.Search({
		autoResize:   false,
		autoType:     false,
		minLength:    2,
		position:     "topright",
		autoCollapse: false,
		zoom:         mapInfo.maxZoom,
		text:         $.t("controls.searchButton"),
		filterJSON: function(json) {
			return json;
		},
		callData: function(text, callResponse) {
			var options = {
				caseSensitive:    false,
				includeScore:     false,
				shouldSort:       true,
				tokenize:         false,
				threshold:        0.2,
				location:         0,
				distance:         10000,
				maxPatternLength: 32,
				keys:             ["title"]
			};
			var fuse = new Fuse(searchData, options);
			var result = fuse.search(text);

			callResponse(result);

			setTimeout(function() {
				$(".search-tooltip").getNiceScroll().resize();
			}, 200);

			return {
				abort: function() {
					console.log("aborted request: " + text);
				}
			};
		}
	}));

	$(".search-tooltip").niceScroll({
		cursorcolor:      "#5E4F32",
		cursorborder:     "none",
		horizrailenabled: false
	});

	var layer_settings = {
		bounds:        bounds,
		noWrap:        true,
		minNativeZoom: mapInfo.minNativeZoom,
		maxNativeZoom: mapInfo.maxNativeZoom
	};

	L.tileLayer(window.topdir + "/files/maps/" + mapInfo.name + "/{z}/{x}/{y}.png", layer_settings).addTo(map);
	L.tileLayer(window.topdir + "/files/maps/" + mapInfo.name + "/{z}/{x}/{y}.jpg", layer_settings).addTo(map);

	map.on("contextmenu", function(e) {
		if (!bounds.contains(e.latlng))
			return false;

		if (wayPoint)
			map.removeLayer(wayPoint);

		wayPoint = new L.marker(e.latlng, {
			icon: L.icon({
				iconUrl:    window.topdir + "/files/images/icons/waypoint.png",
				iconSize:   [26, 32],
				iconAnchor: [12, 29]
			})
		}).on("click", function() {
			map.removeLayer(wayPoint);
			hash.removeParam("w");
		}).on("contextmenu", function() {
			map.removeLayer(wayPoint);
			hash.removeParam("w");
		}).addTo(map);

		hash.addParam("w", e.latlng.lat.toFixed(3) + "," + e.latlng.lng.toFixed(3));

		if (paramDraw && window.event.ctrlKey)
			lineEdit.value = e.latlng.lat.toFixed(3) + "," + e.latlng.lng.toFixed(3);
	});

	map.on("popupopen", function(e) {
		deleteCircle();
		createCircle(e.popup._latlng.lat, e.popup._latlng.lng);
		if (e.popup._source.areas) {
			for (let area of e.popup._source.areas) {
				if (area.fuse)
					area.layer.setStyle({ opacity: selectedAreaStrokeOpacity });
			}
		}
		$("#info-wrap").stop();
		$("#info").html(e.popup._source._popup._content);
		$("#info").getNiceScroll(0).doScrollTop(0, 0);
		$("#info-wrap").fadeIn("fast");
		if ($("#info").html().indexOf('class="note-row"') >= 0)
			notePopupStart();
	});

	function createCircle(lat, lng) {
		var noteKey = lat.toFixed(3) + ";" + lng.toFixed(3);

		// Only add param and show center button if not a note
		if (!notes[getNoteIndex(noteKey)]) {
			hash.addParam("m", lat.toFixed(3) + "," + lng.toFixed(3));
			$("#centerButton").show();

			if (paramDraw && window.event.ctrlKey)
				lineEdit.value = lat.toFixed(3) + "," + lng.toFixed(3);
		}

		circle = L.circleMarker(L.latLng(lat, lng), {
			color:       "red",
			fillColor:   "#f03",
			fillOpacity: 0.5,
			radius:      20,
			pane:        "selectionPane"
		}).addTo(map);
	}

	function deleteCircle() {
		if(circle !== null) {
			unselectRoutes();
			unselectAreas();
			map.removeLayer(circle);
			hash.removeParam("m");
			$("#centerButton").hide();
		}
	}

	function infoClose() {
		$("#info-wrap").fadeOut("fast", function() {
			$("#info").html("");
			deleteCircle();
			map.closePopup();
		});
	}

	map.on("popupclose", function(e) {
		if (e.popup._source.areas) {
			for (let area of e.popup._source.areas) {
				if (area.fuse)
					area.layer.setStyle({ opacity: e.popup._source.obj.checked ? checkedAreaStrokeOpacity :
					                                                             uncheckedAreaStrokeOpacity });
			}
		}
		infoClose();
		if (notePopupOpen)
			notePopupEnd();
	});

	map.on("keydown", function(e) {
		let key = e.originalEvent.key;
		if (key == "PageUp") {
			let interior = findNearestInterior(map.getCenter());
			if (interior) {
				let floor = (interior.shownFloorId + 1) % interior.floors.length;
				selectFloor(interior.id, floor);
			}
		} else if (key == "PageDown") {
			let interior = findNearestInterior(map.getCenter());
			if (interior) {
				let floor = interior.shownFloorId != 0 ? interior.shownFloorId - 1 : interior.floors.length - 1;
				selectFloor(interior.id, floor);
			}
		} else if (key == "Escape") {
			let interior = findNearestInterior(map.getCenter());
			if (interior)
				closeInterior(interior.id);
		}
	});

	window.updateRouteHash = function(r) {
		if (r >= 0)
			hash.addParam("r", r);
		else
			hash.removeParam("r");
	}

	window.updateAreaHash = function(a) {
		if (a >= 0)
			hash.addParam("a", a);
		else
			hash.removeParam("a");
	}

	window.updateInteriorHash = function() {
		let h = "";
		for (let i = 0; i < interiors.length; i++) {
			if (interiors[i].shown) {
				if (h)
					h += ",";
				h += i;
				if (interiors[i].floors.length > 1)
					h += "." + interiors[i].shownFloorId;
			}
		}
		if (h)
			hash.addParam("i", h);
		else
			hash.removeParam("i");
	}

	for (var val of $("ul.key.filter li:not(.none) i")) {
		var marker = $(val).attr("class");
		var pill = $('<div class="pill">' + uncheckedMarkerCount[marker] + "</div>");
		$(val).next().after(pill);
		if (localStorage["hide-counts"])
			pill.hide();
	}

	if (localStorage["hide-counts"]) {
		$("#hide-counts").hide();
		$("#show-counts").show();
	}

	$("#hide-all").on("click enter spacebar", function(e) {
		disabledMarkers = [];
		for (let val of markerGroupNames)
			disabledMarkers.push(val);

		for (let val of allLayers) {
			val.disabled = true;
			map.removeLayer(val);
		}

		for (let li of $("ul.key:first li"))
			$(li).addClass("layer-disabled");

		$("#hide-all").hide();
		$("#show-all").show();

		saveDisabledMarkers();
		localStorage["hide-all-" + mapInfo.name] = true;
	});

	$("#show-all").on("click enter spacebar", function(e) {
		for (let val of allLayers) {
			val.disabled = false;
			map.addLayer(val);
		}

		disabledMarkers = [];

		for (let li of $("ul.key:first li"))
			$(li).removeClass("layer-disabled");

		$("#show-all").hide();
		$("#hide-all").show();

		localStorage.removeItem("markers-" + mapInfo.name + "-disabled");
		localStorage.removeItem("hide-all-" + mapInfo.name);
	});

	$("#hide-counts").on("click enter spacebar", function(e) {
		for (var val of $("ul.key.filter > li:not(.none) i"))
			$(val).siblings(":last").hide();
		$("#hide-counts").hide();
		$("#show-counts").show();
		localStorage["hide-counts"] = true;
	});

	$("#show-counts").on("click enter spacebar", function(e) {
		for (var val of $("ul.key.filter > li:not(.none) i"))
			$(val).siblings(":last").show();
		$("#show-counts").hide();
		$("#hide-counts").show();
		localStorage.removeItem("hide-counts");
	});

	$("#reset-tracking").on("click enter", function(e) {
		if (confirm($.t("controls.resetConfirm")))
			resetProgress();
	});

	$("#enable-hos").on("click enter spacebar", function(e) {
		if (enable_hos)
			localStorage.enableHoS = "false";
		else
			localStorage.removeItem("enableHoS");
		location.reload();
	});

	$("#enable-baw").on("click enter spacebar", function(e) {
		if (enable_baw)
			localStorage.enableBaW = "false";
		else
			localStorage.removeItem("enableBaW");
		location.reload();
	});

	$("#enable-mod").on("click enter spacebar", function(e) {
		if (enable_mod)
			localStorage.removeItem("enableMod");
		else
			localStorage.enableMod = "true";
		location.reload();
	});

	$("ul.key.filter").on("click enter spacebar", "li:not(.none)", function(e) {
		var dataKey = $(this).find("i").attr("class");

		let disabled = markerLayers[dataKey].disabled;
		disabled = !disabled;
		markerLayers[dataKey].disabled = disabled;

		if (disabled) {
			disabledMarkers.push(dataKey);
			$(this).addClass("layer-disabled");
			map.removeLayer(markerLayers[dataKey]);
		} else {
			disabledMarkers = disabledMarkers.filter(function (item) { return item !== dataKey; });
			map.addLayer(markerLayers[dataKey]);
			$(this).removeClass("layer-disabled");
		}

		saveDisabledMarkers();
	});

	function hideSidebar(anim) {
		sidebarShown = false;

		$("#info-wrap").addClass("nosidebar");
		$("#info-fade-intro").addClass("nosidebar");
		$("#info").getNiceScroll().resize();

		let base = $("#sidebar").outerWidth();
		let border = $("#sidebar-border").outerWidth();
		let total = base + border;
		if (anim) {
			$("#sidebar").animate({ left: "-" + total + "px" }, 200);
			$("#sidebar-border").animate({ left: "-" + border + "px"}, 200);
			$("#hide-sidebar").animate({ left: "0px" }, 200, function() {
				$("#hide-sidebar").addClass("show-sidebar");
				$("#sidebar").finish().hide();
				$("#sidebar-border").finish().hide();
			});
		} else {
			$("#sidebar").css({ left: "-" + total + "px" }).hide();
			$("#sidebar-border").css({ left: "-" + border + "px" }).hide();
			$("#hide-sidebar").css({ left: "0px" });
			$("#hide-sidebar").addClass("show-sidebar");
		}
	}

	function showSidebar() {
		// Call hide to calculate hidden position (which is the start for the animation) based on current
		// sidebar width again.
		hideSidebar(false);

		sidebarShown = true;
		localStorage.removeItem("hide-sidebar");

		$("#info-wrap").removeClass("nosidebar");
		$("#info-fade-intro").removeClass("nosidebar");
		$("#info").getNiceScroll().resize();

		$("#sidebar").show();
		hackySticky();
		$("#sidebar").getNiceScroll().resize();

		$("#hide-sidebar").removeClass("show-sidebar");
		$("#sidebar").animate({ left: "" }, 200, function() {
			$("#hide-sidebar").css({ left: "" });
			$("#sidebar-border").css({ left: "" }).show();
		});
	}

	$(document).on("click enter", "div#hide-sidebar:not(.show-sidebar)", function(e) {
		hideSidebar(true);
		localStorage["hide-sidebar"] = true;
	});

	$(document).on("click enter", "div#hide-sidebar.show-sidebar", function(e) {
		showSidebar();
	});

	if (localStorage["hide-sidebar"])
		hideSidebar(false);

	$("div#warn").on("click", function(e) {
		localStorage.hideWarn = true;
		$(this).remove();
	});

	window.popupClose = function() {
		$("#popup-wrap").remove();
	}

	function popup(title, content) {
		$("body").prepend('<div id="popup-wrap"><div id="popup-border">' +
		                  '<img id="popup-close" src="' + window.topdir + '/files/images/exit.png" alt="Close" onclick="popupClose();">' +
		                  '<div id="popup-content"><h1>' + title + "</h1><hr>" + content + "</div></div></div>");
		$("div#popup-content").niceScroll({
			rtlmode:      "auto",
			cursorcolor:  "#5E4F32",
			cursorborder: "none",
			autohidemode: false
		});
	}

	$(".credits").on("click enter", function(e) {
		popup("Credits", [
			'<p>Created by:</p>',
			'<ul>',
			'<li><a href="https://github.com/untamed0" target="_blank">untamed0</a></li>',
			'</ul>',
			'<p>And enhanced by:</p>',
			'<ul>',
			'<li><a href="https://github.com/root-BB" target="_blank">BaHTsIzBEdEvi</a> - See',
			'<a href="https://github.com/root-BB/witcher3map" target="_blank">README.md on Github</a> for changes</li>',
			'<li><a href="https://github.com/msinger" target="_blank">Michael Singer</a> - See',
			'<a href="https://github.com/msinger/witcher3map" target="_blank">README.md on Github</a> for changes</li>',
			'</ul>',
			'<p>With contributions from:</p>',
			'<ul>',
			'<li><a href="https://github.com/mcarver" target="_blank">mcarver</a> (lead contributor) - Marker count,',
			'hash permalink improvements, backup/restore settings, numerous fixes etc.</li>',
			'<li><a href="https://github.com/ankri" target="_blank">ankri</a> - Ability to hide markers on right or',
			'double click</li>',
			'<li><a href="https://github.com/ITroxxCH" target="_blank">ITroxxCH</a> - Translation/i18n implementation</li>',
			'<li><a href="https://github.com/msmorgan" target="_blank">msmorgan</a> - Javascript and map data structure improvements</li>',
			'<li><a href="https://twitter.com/DesignGears" target="_blank">@DesignGears</a> &amp; <a href="https://github.com/hhrhhr" target="_blank">hhrhhr</a> - Map and asset extraction</li>',
			'</ul>',
			'<p>Thanks to the following people for contributions to improving the map data:</p>',
			'<ul>',
			'<li><a href="https://wiiare.in" target="_blank">lordfiSh</a> - Toussaint Map Markers</li>',
			'</ul>',
			'<h3>Translations</h3>',
			'<ul>',
			'<li>Russian - <a href="https://www.nexusmods.com/users/62669641" target="_blank">Arkwulf</a>',
			'(With the help of old crowdin translations)</li>',
			'<li>Turkish - <a href="https://github.com/root-BB" target="_blank">BaHTsIzBEdEvi</a></li>',
			'<li>Czech - <a href="https://www.nexusmods.com/users/33112273" target="_blank">MikeCZ</a> and',
			'<a href="https://www.nexusmods.com/users/3168799" target="_blank">Lord Mazour</a></li>',
			'<li>Chinese Traditional - <a href="https://crowdin.com/profile/YheonYeung" target="_blank">YheonYeung</a></li>',
			'<li>Polish - <a href="https://crowdin.com/profile/toffi3" target="_blank">toffi3</a>,',
			'<a href="https://crowdin.com/profile/Umber91310486" target="_blank">Umber91310486</a> and',
			'<a href="https://crowdin.com/profile/regulargvy13" target="_blank">Mochal</a></li>',
			'</ul>',
			'<p>Special thanks to <a href="https://crowdin.com" target="_blank">crowdin</a> for letting us use',
			'their excellent translation editor.</p>',
			'<h3>Witcher 3 Assets</h3>',
			'<p>The Witcher 3, logo, icons, map and text are the property of',
			'<a href="http://en.cdprojektred.com/" target="_blank">CD PROJEKT RED</a> and used without permission.',
			'Non commercial use is permitted under section 9.4 of their',
			'<a href="http://bar.cdprojektred.com/regulations/" target="_blank">User Agreement</a></p>',
			'<h3>Used JavaScript Libraries</h3>',
			'<ul>',
			'<li><a href="http://jquery.com" target="_blank">jQuery</a> (MIT)</li>',
			'<li><a href="http://git.io/vkLly" target="_blank">jQuery.NiceScroll</a> (MIT)</li>',
			'<li><a href="https://github.com/prashantchaudhary/ddslick" target="_blank">jQuery.ddslick</a></li>',
			'<li><a href="http://leafletjs.com" target="_blank">Leaflet</a> (BSD2)</li>',
			'<li><a href="https://github.com/cliffcloud/leaflet.easybutton" target="_blank">Leaflet.EasyButton</a> (MIT)</li>',
			'<li><a href="http://git.io/mwK1oA" target="_blank">Leaflet-hash</a> (MIT)</li>',
			'<li><a href="http://git.io/vJw5v" target="_blank">Leaflet.fullscreen</a> (BSD2)</li>',
			'<li><a href="http://git.io/vkCPC" target="_blank">Leaflet Control Search</a> (MIT)</li>',
			'<li><a href="https://github.com/krisk/Fuse" target="_blank">Fuse</a> (Apache)</li>',
			'<li><a href="http://git.io/vIAs2" target="_blank">Font Awesome</a> (MIT)</li>',
			'<li><a href="http://www.webfontfree.com">Web Font Free</a> (CC BY 4.0)</li>',
			'</ul>'
		].join('\n'));
	});

	hackySticky();
	$("#sidebar").getNiceScroll().resize();

	function bindEllips(selector) {
		for (let val of $(selector)) {
			$(val).bind({
				mouseenter: function(e) {
					$("div.ellip-tooltip-box").remove();
					let elem = $(e.target);
					if (elem.outerWidth() < elem[0].scrollWidth)
						$('<div class="ellip-tooltip-box">' + $(e.target).text() + '</div>').css(
							{ top: e.pageY, left: e.pageX }
						).appendTo("body");
				},
				mousemove: function(e) {
					let elem = $(e.target);
					if (elem.outerWidth() < elem[0].scrollWidth)
						$("div.ellip-tooltip-box").css({ top: e.pageY, left: e.pageX });
				},
				mouseleave: function(e) {
					$("div.ellip-tooltip-box").remove();
				}
			});
		}
	}

	bindEllips("ul li div.ellip-tooltip");

	setTimeout(function() {
		hackySticky();
		$("#sidebar").getNiceScroll().resize();

		// Chrome needs another reminder for some reason to hide the sidebar.
		if (localStorage["hide-sidebar"])
			hideSidebar(false);
	}, 500);

	function backupData() {
		var date = new Date().toLocaleDateString("sv-SE", { year: "numeric", month: "2-digit", day: "2-digit" });
		var backupFileName = "witcher3map_backup_" + date + ".json";
		if (confirm($.t("controls.backupSave", { fileName: backupFileName }))) {
			var blob = new Blob([JSON.stringify(localStorage)], { type: "text/plain;charset=utf-8" });
			saveAs(blob, backupFileName);
		}
	}

	function showRestore() {
		if (!window.FileReader) {
			alert($.t("controls.backupHtmlFail"));
			return;
		}

		if ($("#restoreDiv").length)
			return;

		var restoreButtonPos = $("#restoreButton")[0].getBoundingClientRect();
		var restoreDiv = '<div id="restoreDiv" style="top:' + restoreButtonPos.top + "px;right:" +
		                 (14 + restoreButtonPos.right - restoreButtonPos.left) + 'px;"><div style="float:right;">' +
		                 '<button class="fa fa-times-circle" onclick="$(\'#restoreDiv\').remove();" ' +
		                 'style="cursor:pointer"></div><strong>' + esc($.t("controls.backupLoad")) +
		                 '</strong><br><input type="file" id="files" name="file[]"></div>';
		$("body").append($(restoreDiv));
		var filesInput = document.getElementById("files");
		filesInput.addEventListener("change", function(e) {
			var file = e.target.files[0];
			var reader = new FileReader();
			reader.onload = function(e) {
				var content = e.target.result;
				try {
					var restoreData = $.parseJSON(content);
					console.log("restore started.");
					for (var prop in restoreData) {
						console.log("restoring property:" + prop + " using value: " + restoreData[prop]);
						localStorage[prop] = restoreData[prop];
					}
					console.log("restore complete!");
					alert($.t("controls.backupLoadSuccess"));
					location.reload();
				} catch(err) {
					alert($.t("controls.backupLoadFail"));
					console.log(err.message);
				} finally {
					$("#restoreDiv").remove();
				}
			};
			reader.readAsText(file);
		});
	}

	var backupButton = L.easyButton("fa-download", function(btn, map) {
		backupData();
	}, $.t("controls.backupDataButton"));
	var restoreButton = L.easyButton("fa-upload", function(btn, map) {
		showRestore();
	}, $.t("controls.restoreDataButton"), "restoreButton");
	L.easyBar([backupButton, restoreButton]).addTo(map);

	window.noteMarkers = {};
	var noteStatus = false;
	var noteCursorCss = null;
	var notePopupOpen = false;
	L.easyButton("fa-pencil", function(btn, map) {
		if (!noteStatus)
			startNote();
		else
			endNote();
	}, $.t("controls.addNoteButton"), "noteButton").addTo(map);

	L.easyButton("fa-crosshairs", function(btn, map) {
		hashParams = hash.getHashParams();
		if (hashParams && hashParams.m) {
			var hashMarker = hashParams.m.split(",");
			if (hashMarker.length == 2 && typeof +hashMarker[0] == "number" && typeof +hashMarker[1] == "number")
				map.setView([hashMarker[0], hashMarker[1]]);
		} else {
			map.setView(mapInfo.initialPos);
		}
	}, $.t("controls.centerMarkerButton"), "centerButton").addTo(map);

	window.getNoteIndex = function(noteKey) {
		for (let i = 0; i < notes.length; i++)
			if (notes[i].key == noteKey)
				return i;
		return -1;
	};

	function startNote() {
		console.log("starting note");
		$("#noteButton").attr("title", $.t("controls.cancelNoteButton")).addClass("activeEasyButton");
		$(document).on("keyup.addnote", function(e) {
			if (e.keyCode === 27)
				endNote();
		});
		noteStatus = true;
		noteCursorCss = $(".leaflet-container").css("cursor");
		$(".leaflet-container").css("cursor", "crosshair");
		map.addEventListener("click", addNote);
	}

	function backupNotes() {
		localStorage["notes-" + mapInfo.name] = JSON.stringify(notes);
	}

	window.saveNote = function(noteKey) {
		var note = notes[getNoteIndex(noteKey)];
		note.label = $("#note-label").val();
		note.title = $("#note-title").val();
		note.text = $("#note-text").val();
		var marker = noteMarkers[note.key];
		marker.bindTooltip(note.label);
		marker.bindPopup(getNotePopup(note));
		noteMarkers[note.key] = marker;
		backupNotes();
		$("#note-save").attr("disabled", true);
	};

	window.deleteNote = function(noteKey) {
		map.removeLayer(noteMarkers[noteKey]);
		notes.splice(getNoteIndex(noteKey), 1);
		delete noteMarkers[noteKey];
		backupNotes();
		infoClose();
	};

	function getNotePopup(note) {
		return '<div id="note-popup"><div class="note-row"><label for="note-label" class="label">' +
		       $.t("notes.label") + '</label><input type="text" id="note-label" placeholder="' +
		       $.t("notes.enterLabel") + '" value="' + note.label + '"></div>' +
		       '<div class="note-row"><label for="note-title" class="label">' + $.t("notes.title") +
		       '</label><input type="text" id="note-title" placeholder="' + $.t("notes.enterTitle") +
		       '" value="' + note.title + '"></div><div class="note-row"><label for="note-text" ' +
		       'class="label top">' + $.t("notes.note") + '</label><textarea id="note-text" placeholder=\"' +
		       $.t("notes.enterText") + '">' + note.text + '</textarea></div>' +
		       '<div><button id="note-save" onclick="saveNote(\'' + note.key + '\')" disabled>' +
		       '<i class="fa fa-floppy-o"></i>&nbsp;' + $.t("notes.save") + "</button>" +
		       '<button onclick="deleteNote(\'' + note.key + '\')"><i class="fa fa-trash-o"></i>&nbsp;' +
		       $.t("notes.delete") + "</button></div></div>";
	}

	function createNote(note) {
		var noteMarker = null;

		if (note.label && note.label !== "")
			noteMarker = L.marker(L.latLng(note.lat, note.lng), { icon: icons.note_marker, riseOnHover: true }).
			             bindTooltip(note.label).bindPopup(getNotePopup(note)).openPopup();
		else
			noteMarker = L.marker(L.latLng(note.lat, note.lng), { icon: icons.note_marker, riseOnHover: true }).
			             bindPopup(getNotePopup(note)).openPopup();

		noteMarker.addTo(map);
		noteMarkers[note.key] = noteMarker;
	}

	function addNote(e) {
		var note = {
			key:   e.latlng.lat.toFixed(3) + ";" + e.latlng.lng.toFixed(3),
			lat:   e.latlng.lat,
			lng:   e.latlng.lng,
			label: "",
			title: "",
			text:  ""
		};

		createNote(note);
		notes.push(note);
		backupNotes();
		endNote();

		return false;
	}

	function endNote() {
		$("#noteButton").attr("title", $.t("controls.addNoteButton")).removeClass("activeEasyButton");
		$(document).off("keyup.addnote");
		noteStatus = false;
		$(".leaflet-container").css("cursor", noteCursorCss);
		map.removeEventListener("click");
		console.log("stopping note");
	}

	function notePopupStart() {
		notePopupOpen = true;
		$("#note-label, #note-title, #note-text").on("keyup.notechange", function() {
			$("#note-save").attr("disabled", false);
		});
		console.log("note popup started!");
	}

	function notePopupEnd() {
		$("#note-label, #note-title, #note-text").off("keyup.notechange");
		console.log("note popup ended!");
	}

	// create saved notes on load
	for (let i = 0; i < notes.length; i++) {
		createNote(notes[i]);
	}

	if (paramDraw) {
		var dline = [];
		var dlinePoly = null;
		var lineEditBox = L.control({ position: "bottomleft" });
		var lineEdit = document.createElement("input");
		lineEdit.type = "text";
		lineEdit.onkeydown = function (e) {
			if (e.key == "Enter") {
				var coords = this.value;
				dline = [];
				if (coords) {
					try {
						var p = JSON.parse("[" + coords + "]");
						if (p.length >= 1) {
							for (var i = 0; i < p.length; i++)
								dline[i] = [p[i][0] || 0, p[i][1] || 0];
						}
					} catch (e) { }
				}
				if (dlinePoly)
					dlinePoly.removeFrom(map);
				dlinePoly = null;
				if (dline.length > 1)
					dlinePoly = L.polyline(dline, { color: "green" }).addTo(map);
			}
		};

		lineEditBox.onAdd = function (map) {
			var div = L.DomUtil.create("div");
			L.DomEvent.disableClickPropagation(div);
			L.DomEvent.disableScrollPropagation(div);
			var p = document.createElement("p");
			p.appendChild(lineEdit);
			div.appendChild(p);
			return div;
		};

		lineEditBox.addTo(map);

		map.on("click", function (e) {
			if (window.event.ctrlKey) {
				var lat = e.latlng.lat;
				var lng = e.latlng.lng;
				if (window.event.shiftKey && dline.length >= 1) {
					var dlat = Math.abs(lat - dline[dline.length - 1][0]);
					var dlng = Math.abs(lng - dline[dline.length - 1][1]);
					if (dlat < dlng)
						lat = dline[dline.length - 1][0];
					else
						lng = dline[dline.length - 1][1];
				}
				dline[dline.length] = [lat, lng];
				var t = "";
				for (var i = 0; i < dline.length; i++) {
					if (i > 0)
						t += ", ";
					t += "[" + dline[i][0].toFixed(3) + "," + dline[i][1].toFixed(3) + "]";
				}
				lineEdit.value = t;
				if (dlinePoly)
					dlinePoly.removeFrom(map);
				dlinePoly = null;
				if (dline.length > 1)
					dlinePoly = L.polyline(dline, { color: "green" }).addTo(map);
			}

			lineEdit.setSelectionRange(0, lineEdit.value.length);
			lineEdit.focus();
		});

		if (!L.Browser.mobile) {
			map.on("dblclick load", function (e) {
				lineEdit.setSelectionRange(0, lineEdit.value.length);
				lineEdit.focus();
			});

			var mouse_state = 0;

			map.on("moveend", function (e) {
				if (mouse_state & 1)
					return;
				lineEdit.setSelectionRange(0, lineEdit.value.length);
				lineEdit.focus();
			});

			window.onload = function (e) {
				lineEdit.setSelectionRange(0, lineEdit.value.length);
				lineEdit.focus();
			};

			function track_mouse_state(e) {
				mouse_state = e.buttons !== undefined ? e.buttons : e.which;
			}

			document.addEventListener("mousedown", track_mouse_state);
			document.addEventListener("mousemove", track_mouse_state);
			document.addEventListener("mouseup", track_mouse_state);
		}

		map.boxZoom.disable();
		map.doubleClickZoom.disable();
	}

	var coord = L.control({ position: "bottomleft" });
	var coordDiv = L.DomUtil.create("div");
	coordDiv.innerHTML = "<p>&nbsp;</p>";
	coord.onAdd = function (map) {
		L.DomEvent.disableClickPropagation(coordDiv);
		L.DomEvent.disableScrollPropagation(coordDiv);
		return coordDiv;
	};
	coord.addTo(map);

	map.on("mousemove", function (e) {
		coordDiv.innerHTML = "<p>" + e.latlng.lat.toFixed(3) + ", " + e.latlng.lng.toFixed(3) + "</p>";
	});

	$("#sidebar-tabs > i").on("click enter", function(e) {
		let id = this.id;
		if (!id || id.substr(0, 4) != "tab-")
			return;
		id = id.substr(4);
		selectTab(id);
	});

	$("ul.key.interior").on("click enter spacebar", "li:not(.none)", function(e) {
		let id = this.id;
		if (!id || id.substr(0, 15) != "interior-switch")
			return;
		id = +id.substr(15);
		if (interiors[id].shown)
			closeInterior(id);
		else
			selectFloor(id, interiors[id].shownFloorId || 0, true);
	});

	document.getElementById("map").style.cursor = "crosshair";

	$("li.quest i.checkbox").on("click enter spacebar", function(e) {
		let questId = this.dataset.questId;
		if (!questId)
			return;
		let quest = quests[questId];
		if (!quest)
			return;
		toggleChecked(quest.obj);
	});

	$("li.quest i.checkbox-f").on("click enter spacebar", function(e) {
		let questId = this.dataset.questId;
		if (!questId)
			return;
		let quest = quests[questId];
		if (!quest)
			return;
		toggleFinished(quest.obj);
	});

	$("li.questcat>div, li.questcat>i").on("click", function(e) {
		let cat = this.dataset.questCat;
		if (!cat)
			return;
		toggleQuestCatOpen(cat);
	});
	$("li.questcat").on("keydown", function(e) {
		let cat = this.dataset.questCat;
		if (!cat)
			return;
		let key = e.originalEvent.key;
		if (key == "Enter" || key == "+") {
			if (questCatOpen.indexOf(cat) >= 0)
				return;
			toggleQuestCatOpen(cat);
			return false;
		} else if (key == "Backspace" || key == "-") {
			if (questCatOpen.indexOf(cat) < 0)
				return;
			toggleQuestCatOpen(cat);
			return false;
		}
	});

	$("li.card i.checkbox").on("click enter spacebar", function(e) {
		let cardId = this.dataset.cardId;
		if (!cardId)
			return;
		let card = cards[cardId];
		if (!card)
			return;
		toggleChecked(card.obj);
	});

	$("li.carddeck>div, li.carddeck>i").on("click", function(e) {
		let deck = this.dataset.cardDeck;
		if (!deck)
			return;
		toggleCardDeckOpen(deck);
	});
	$("li.carddeck").on("keydown", function(e) {
		let deck = this.dataset.cardDeck;
		if (!deck)
			return;
		let key = e.originalEvent.key;
		if (key == "Enter" || key == "+") {
			if (cardDeckOpen.indexOf(deck) >= 0)
				return;
			toggleCardDeckOpen(deck);
			return false;
		} else if (key == "Backspace" || key == "-") {
			if (cardDeckOpen.indexOf(deck) < 0)
				return;
			toggleCardDeckOpen(deck);
			return false;
		}
	});

	$("li.gear i.checkbox").on("click enter spacebar", function(e) {
		let diagId = this.dataset.diagramId;
		if (!diagId)
			return;
		let diagram = globalItems[diagId];
		if (!diagram)
			return;
		toggleChecked(diagram);
	});

	$("li.gear i.checkbox-f").on("click enter spacebar", function(e) {
		let gearId = this.dataset.gearId;
		if (!gearId)
			return;
		let item = gear[gearId];
		if (!item)
			return;
		toggleChecked(item.obj);
	});

	$("li.school>div, li.school>i").on("click", function(e) {
		let school = this.dataset.school;
		if (!school)
			return;
		toggleSchoolOpen(school);
	});
	$("li.school").on("keydown", function(e) {
		let school = this.dataset.school;
		if (!school)
			return;
		let key = e.originalEvent.key;
		if (key == "Enter" || key == "+") {
			if (schoolOpen.indexOf(school) >= 0)
				return;
			toggleSchoolOpen(school);
			return false;
		} else if (key == "Backspace" || key == "-") {
			if (schoolOpen.indexOf(school) < 0)
				return;
			toggleSchoolOpen(school);
			return false;
		}
	});

	$("li.alchemy i.checkbox").on("click enter spacebar", function(e) {
		let alchemyId = this.dataset.alchemyId;
		if (!alchemyId)
			return;
		let item = alchemy[alchemyId];
		if (!item)
			return;
		toggleChecked(item.obj);
	});

	$("li.alchemy i.checkbox-f").on("click enter spacebar", function(e) {
		let alchemyId = this.dataset.alchemyId;
		if (!alchemyId)
			return;
		let item = alchemy[alchemyId];
		if (!item)
			return;
		toggleFinished(item.obj);
	});

	$("li.alchemycat>div, li.alchemycat>i").on("click", function(e) {
		let cat = this.dataset.alchemyCat;
		if (!cat)
			return;
		toggleAlchemyCatOpen(cat);
	});
	$("li.alchemycat").on("keydown", function(e) {
		let cat = this.dataset.alchemyCat;
		if (!cat)
			return;
		let key = e.originalEvent.key;
		if (key == "Enter" || key == "+") {
			if (alchemyCatOpen.indexOf(cat) >= 0)
				return;
			toggleAlchemyCatOpen(cat);
			return false;
		} else if (key == "Backspace" || key == "-") {
			if (alchemyCatOpen.indexOf(cat) < 0)
				return;
			toggleAlchemyCatOpen(cat);
			return false;
		}
	});

	function openQuestListEntry(qid) {
		if (questListEntryOpen == qid)
			return;
		closeQuestListEntry();
		const concat       = esc($.t("misc.concat"));
		const openBracket  = esc($.t("misc.openBracket"));
		const closeBracket = esc($.t("misc.closeBracket"));
		const loc          = esc($.t("misc.location"));
		const startPoint   = esc($.t("misc.startPoint"));
		let exp = '<ul id="quest-expand">';
		let hasInfo = false;
		let link = esc($.t(qid + ".link"));
		if (link != qid + ".link") {
			hasInfo = true;
			exp += '<li><i class="quest-expand-indent fa fa-external-link"></i>' +
			       '<a class="ellip-tooltip" target="_blank" href="' + link + '"><div class="ellip-tooltip">' +
			       esc($.t("misc.wiki")) + '</div></a></li>';
		}
		if (quests[qid]) {
			let obj = quests[qid].obj;
			let isEv = typeof obj.finished != "boolean";
			let l = isEv ? loc : startPoint;
			for (let coordId of obj.coordIds) {
				hasInfo = true;
				link = linkToCoord(coordId);
				exp += '<li><i class="quest-expand-indent fa fa-crosshairs"></i>' +
				       '<a class="ellip-tooltip" href="' + link + '"><div class="ellip-tooltip">' + l + '</div></a></li>';
			}
			for (let ext of obj.externals) {
				hasInfo = true;
				link = linkIntoMap(ext.map, ext.coordId);
				let label = l + concat + openBracket + ext.map.label + closeBracket;
				exp += '<li><i class="quest-expand-indent fa fa-map"></i>' +
				       '<a class="ellip-tooltip" href="' + link + '"><div class="ellip-tooltip">' + label + '</div></a></li>';
			}
		}
		if (!hasInfo)
			exp += '<li><i class="quest-expand-indent"></i>' +
			       '<div class="ellip-tooltip noclick">' + esc($.t("misc.noinfo")) + '</div>' +
			       '</li>';
		exp += '</ul>';
		$("li.quest-" + $.escapeSelector(qid)).append(exp);
		bindEllips("ul#quest-expand li .ellip-tooltip");
		questListEntryOpen = qid;
		sessionStorage.questListEntryOpen = qid;
	}

	function closeQuestListEntry() {
		$("#quest-expand").remove();
		questListEntryOpen = null;
		sessionStorage.removeItem("questListEntryOpen");
	}

	$("li.quest div.quest-title").on("click", function() {
		let id = this.dataset.questId;
		if (!id)
			return;
		let wasOpen = questListEntryOpen == id;
		closeQuestListEntry();
		if (wasOpen)
			return;
		openQuestListEntry(id);
	});
	$("li.quest").on("keydown", function(e) {
		let id = this.dataset.questId;
		if (!id)
			return;
		let key = e.originalEvent.key;
		let wasOpen = questListEntryOpen == id;
		if (!wasOpen && (key == "Enter" || key == "+")) {
			openQuestListEntry(id);
			return false;
		} else if (wasOpen && (key == "Backspace" || key == "-")) {
			closeQuestListEntry();
			return false;
		}
	});

	function openCardListEntry(cid) {
		if (cardListEntryOpen == cid)
			return;
		closeCardListEntry();
		const base         = esc($.t("misc.baseDeck"));
		const random       = esc($.t("misc.randomPlayer"));
		const concat       = esc($.t("misc.concat"));
		const openBracket  = esc($.t("misc.openBracket"));
		const closeBracket = esc($.t("misc.closeBracket"));
		const loc          = esc($.t("misc.location"));
		let exp = '<ul id="card-expand">';
		let hasInfo = false;
		let card = cards[cid];
		if (card) {
			if (card.link) {
				hasInfo = true;
				exp += '<li><i class="card-expand-indent fa fa-external-link"></i>' +
				       '<a class="ellip-tooltip" target="_blank" href="' + card.link + '"><div class="ellip-tooltip">' +
				       esc($.t("misc.wiki")) + '</div></a></li>';
			}
			if (card.initial) {
				hasInfo = true;
				exp += '<li><i class="card-expand-indent"></i>' +
				       '<div class="ellip-tooltip noclick">' + base + '</div></li>';
			}
			if (card.random) {
				hasInfo = true;
				exp += '<li><i class="card-expand-indent"></i>' +
				       '<div class="ellip-tooltip noclick">' + random + '</div></li>';
			}
			for (let src of card.sources) {
				hasInfo = true;
				if (src.quest) {
					const inQuest = esc($.t("misc.acquireInQuest", { quest: src.quest.labelText }));
					let dlcClass = "";
					if (src.quest.hos)
						dlcClass = " hos";
					else if (src.quest.baw)
						dlcClass = " baw";
					exp += '<li><i class="card-expand-indent ' + src.quest.icon + '"></i>' +
					       '<a class="ellip-tooltip" href="' + src.quest.linkSelf + '"><div class="ellip-tooltip' + dlcClass + '">' +
					       inQuest + '</div></a></li>';
					continue;
				}
				let text = loc;
				if (src.obj.item.dataKey == "gwent" || src.obj.item.dataKey == "gwentquest")
					text = esc($.t("misc.wonFrom", { person: src.obj.item.labelText }));
				else if (isPerson(src.obj.item.dataKey))
					text = esc($.t("misc.purchasedFrom", { person: src.obj.item.labelText }));
				let link;
				let icon = "fa-crosshairs";
				if (src.ns) {
					text += concat + openBracket + src.obj.map.label + closeBracket;
					link = linkIntoMap(src.obj.map, src.coordId);
					icon = "fa-map";
				} else {
					link = linkToCoord(src.coordId);
				}
				exp += '<li><i class="card-expand-indent fa ' + icon + '"></i>' +
				       '<a class="ellip-tooltip" href="' + link + '"><div class="ellip-tooltip">' +
				       text + '</div></a></li>';
			}
		}
		if (!hasInfo)
			exp += '<li><i class="card-expand-indent"></i>' +
			       '<div class="ellip-tooltip noclick">' + esc($.t("misc.noinfo")) + '</div>' +
			       '</li>';
		exp += '</ul>';
		$("li.card-" + $.escapeSelector(cid)).append(exp);
		bindEllips("ul#card-expand li .ellip-tooltip");
		cardListEntryOpen = cid;
		sessionStorage.cardListEntryOpen = cid;
	}

	function closeCardListEntry() {
		$("#card-expand").remove();
		cardListEntryOpen = null;
		sessionStorage.removeItem("cardListEntryOpen");
	}

	$("li.card div.card-label").on("click", function() {
		let id = this.dataset.cardId;
		if (!id)
			return;
		let wasOpen = cardListEntryOpen == id;
		closeCardListEntry();
		if (wasOpen)
			return;
		openCardListEntry(id);
	});
	$("li.card").on("keydown", function(e) {
		let id = this.dataset.cardId;
		if (!id)
			return;
		let key = e.originalEvent.key;
		let wasOpen = cardListEntryOpen == id;
		if (!wasOpen && (key == "Enter" || key == "+")) {
			openCardListEntry(id);
			return false;
		} else if (wasOpen && (key == "Backspace" || key == "-")) {
			closeCardListEntry();
			return false;
		}
	});

	function openGearListEntry(gid) {
		if (gearListEntryOpen == gid)
			return;
		closeGearListEntry();
		const concat       = esc($.t("misc.concat"));
		const openBracket  = esc($.t("misc.openBracket"));
		const closeBracket = esc($.t("misc.closeBracket"));
		const diagLoc      = esc($.t("misc.diagLocation"));
		let exp = '<ul id="gear-expand">';
		let hasInfo = false;
		let item = gear[gid];
		if (item) {
			if (item.link) {
				hasInfo = true;
				exp += '<li><i class="gear-expand-indent fa fa-external-link"></i>' +
				       '<a class="ellip-tooltip" target="_blank" href="' + item.link + '"><div class="ellip-tooltip">' +
				       esc($.t("misc.wiki")) + '</div></a></li>';
			}
			let quest = item.quest;
			if (quest) {
				hasInfo = true;
				let dlcClass = "";
				if (quest.hos)
					dlcClass = " hos";
				else if (quest.baw)
					dlcClass = " baw";
				exp += '<li><i class="gear-expand-indent ' + quest.icon + '"></i>' +
				       '<a class="ellip-tooltip" href="' + quest.linkSelf + '"><div class="ellip-tooltip' + dlcClass + '">' +
				       quest.labelText + '</div></a></li>';
			}
			let diagram = item.diagram;
			if (diagram && (diagram.coordIds.length == 1 || diagram.externals.length == 1)) {
				hasInfo = true;
				let text = diagLoc;
				let link;
				let icon = "fa-crosshairs";
				if (diagram.externals.length == 1) {
					let map = diagram.externals[0].map;
					text += concat + openBracket + map.label + closeBracket;
					link = linkIntoMap(map, diagram.externals[0].coordId);
					icon = "fa-map";
				} else {
					link = linkToCoord(diagram.coordIds[0]);
				}
				exp += '<li><i class="gear-expand-indent fa ' + icon + '"></i>' +
				       '<a class="ellip-tooltip" href="' + link + '"><div class="ellip-tooltip">' +
				       text + '</div></a></li>';
			}
			let gobj = item.obj;
			if (gobj.coordIds.length == 1 || gobj.externals.length == 1) {
				hasInfo = true;
				let text = esc($.t("misc.itemLocation"));
				let link;
				let icon = "fa-crosshairs";
				if (gobj.externals.length == 1) {
					let map = gobj.externals[0].map;
					text += concat + openBracket + map.label + closeBracket;
					link = linkIntoMap(map, gobj.externals[0].coordId);
					icon = "fa-map";
				} else {
					link = linkToCoord(gobj.coordIds[0]);
				}
				exp += '<li><i class="gear-expand-indent fa ' + icon + '"></i>' +
				       '<a class="ellip-tooltip" href="' + link + '"><div class="ellip-tooltip">' +
				       text + '</div></a></li>';
			}
		}
		if (!hasInfo)
			exp += '<li><i class="gear-expand-indent"></i>' +
			       '<div class="ellip-tooltip noclick">' + esc($.t("misc.noinfo")) + '</div>' +
			       '</li>';
		exp += '</ul>';
		$("li.gear-" + $.escapeSelector(gid)).append(exp);
		bindEllips("ul#gear-expand li .ellip-tooltip");
		gearListEntryOpen = gid;
		sessionStorage.gearListEntryOpen = gid;
	}

	function closeGearListEntry() {
		$("#gear-expand").remove();
		gearListEntryOpen = null;
		sessionStorage.removeItem("gearListEntryOpen");
	}

	$("li.gear div.gear-label").on("click", function() {
		let id = this.dataset.gearId;
		if (!id)
			return;
		let wasOpen = gearListEntryOpen == id;
		closeGearListEntry();
		if (wasOpen)
			return;
		openGearListEntry(id);
	});
	$("li.gear").on("keydown", function(e) {
		let id = this.dataset.gearId;
		if (!id)
			return;
		let key = e.originalEvent.key;
		let wasOpen = gearListEntryOpen == id;
		if (!wasOpen && (key == "Enter" || key == "+")) {
			openGearListEntry(id);
			return false;
		} else if (wasOpen && (key == "Backspace" || key == "-")) {
			closeGearListEntry();
			return false;
		}
	});

	function openAlchemyListEntry(aid) {
		if (alchemyListEntryOpen == aid)
			return;
		closeAlchemyListEntry();
		let exp = '<ul id="alchemy-expand">';
		let hasInfo = false;
		let item = alchemy[aid];
		if (item) {
			if (item.link) {
				hasInfo = true;
				exp += '<li><i class="alchemy-expand-indent fa fa-external-link"></i>' +
				       '<a class="ellip-tooltip" target="_blank" href="' + item.link + '"><div class="ellip-tooltip">' +
				       esc($.t("misc.wiki")) + '</div></a></li>';
			}
		}
		if (!hasInfo)
			exp += '<li><i class="alchemy-expand-indent"></i>' +
			       '<div class="ellip-tooltip noclick">' + esc($.t("misc.noinfo")) + '</div>' +
			       '</li>';
		exp += '</ul>';
		$("li.alchemy-" + $.escapeSelector(aid)).append(exp);
		bindEllips("ul#alchemy-expand li .ellip-tooltip");
		alchemyListEntryOpen = aid;
		sessionStorage.alchemyListEntryOpen = aid;
	}

	function closeAlchemyListEntry() {
		$("#alchemy-expand").remove();
		alchemyListEntryOpen = null;
		sessionStorage.removeItem("alchemyListEntryOpen");
	}

	$("li.alchemy div.alchemy-label").on("click", function() {
		let id = this.dataset.alchemyId;
		if (!id)
			return;
		let wasOpen = alchemyListEntryOpen == id;
		closeAlchemyListEntry();
		if (wasOpen)
			return;
		openAlchemyListEntry(id);
	});
	$("li.alchemy").on("keydown", function(e) {
		let id = this.dataset.alchemyId;
		if (!id)
			return;
		let key = e.originalEvent.key;
		let wasOpen = alchemyListEntryOpen == id;
		if (!wasOpen && (key == "Enter" || key == "+")) {
			openAlchemyListEntry(id);
			return false;
		} else if (wasOpen && (key == "Backspace" || key == "-")) {
			closeAlchemyListEntry();
			return false;
		}
	});

	window.jumpToCoord = function(coord) {
		let coordId = toCoordId(coord);

		for (let val of allLayers) {
			for (let marker of val.getLayers()) {
				if (!marker.getLatLng)
					continue;
				let pos = marker.getLatLng();
				if(coord[0] == pos.lat && coord[1] == pos.lng)
					marker.openPopup();
			}
		}

		map.flyTo(coord, mapInfo.maxZoom);
	}

	window.jumpIntoList = function(id) {
		if (!quests[id])
			return;
		let quest = quests[id];
		if (!sidebarShown)
			showSidebar();
		selectTab("quest");
		if (questCatOpen.indexOf(quest.questKey) < 0)
			toggleQuestCatOpen(quest.questKey);
		openQuestListEntry(id);
		let qElem = $("#quest-" + $.escapeSelector(id));
		let wrap = $("#sidebar-wrap");
		let pos = qElem.position().top -
		          wrap.position().top +
		          wrap[0].offsetTop -
		          $("#sidebar-tabs").height();
		$("#sidebar").getNiceScroll(0).doScrollTop(pos);
		qElem.focus();
	}

	window.addEventListener("pagehide", function() {
		sessionStorage["scrollbar-" + selectedTab] = $("#sidebar").getNiceScroll(0).getScrollTop();
	});

	let sessionQuestCatOpen = null;
	if (sessionStorage.questCatOpen)
		sessionQuestCatOpen = JSON.parse(sessionStorage.questCatOpen);
	if (!(sessionQuestCatOpen instanceof Array))
		sessionQuestCatOpen = [];
	for (let cat of sessionQuestCatOpen)
		toggleQuestCatOpen(cat, true);

	if (sessionStorage.questListEntryOpen)
		openQuestListEntry(sessionStorage.questListEntryOpen);

	let sessionCardDeckOpen = null;
	if (sessionStorage.cardDeckOpen)
		sessionCardDeckOpen = JSON.parse(sessionStorage.cardDeckOpen);
	if (!(sessionCardDeckOpen instanceof Array))
		sessionCardDeckOpen = [];
	for (let deck of sessionCardDeckOpen)
		toggleCardDeckOpen(deck, true);

	if (sessionStorage.cardListEntryOpen)
		openCardListEntry(sessionStorage.cardListEntryOpen);

	let sessionSchoolOpen = null;
	if (sessionStorage.schoolOpen)
		sessionSchoolOpen = JSON.parse(sessionStorage.schoolOpen);
	if (!(sessionSchoolOpen instanceof Array))
		sessionSchoolOpen = [];
	for (let school of sessionSchoolOpen)
		toggleSchoolOpen(school, true);

	if (sessionStorage.gearListEntryOpen)
		openGearListEntry(sessionStorage.gearListEntryOpen);

	let sessionAlchemyCatOpen = null;
	if (sessionStorage.alchemyCatOpen)
		sessionAlchemyCatOpen = JSON.parse(sessionStorage.alchemyCatOpen);
	if (!(sessionAlchemyCatOpen instanceof Array))
		sessionAlchemyCatOpen = [];
	for (let cat of sessionAlchemyCatOpen)
		toggleAlchemyCatOpen(cat, true);

	if (sessionStorage.alchemyListEntryOpen)
		openAlchemyListEntry(sessionStorage.alchemyListEntryOpen);

	for (let tab of Object.keys(scrollPos)) {
		let pos = sessionStorage["scrollbar-" + tab];
		if (!pos || Number.isNaN(+pos))
			continue;
		scrollPos[tab] = +pos;
	}
	$("#sidebar").getNiceScroll(0).scrollTop(scrollPos[selectedTab]);

	let sessionTab = sessionStorage.selectedTab;
	if (sessionTab && sessionTab in scrollPos)
		selectTab(sessionTab);

	function processHashParams(hashParams) {
		if (hashParams.w != prevHashParams.w) {
			if (wayPoint)
				map.removeLayer(wayPoint);
			wayPoint = false;

			if (hashParams.w) {
				var hashWayPoint = hashParams.w.split(",");
				if (hashWayPoint.length == 2 && typeof +hashWayPoint[0] == "number" && typeof +hashWayPoint[1] == "number") {
					wayPoint = new L.marker(L.latLng(hashWayPoint[0], hashWayPoint[1]), {
						icon: L.icon({
							iconUrl:    window.topdir + "/files/images/icons/waypoint.png",
							iconSize:   [26, 32],
							iconAnchor: [12, 29]
						})
					}).on("click", function() {
						map.removeLayer(wayPoint);
						hash.removeParam("w");
					}).on("contextmenu", function() {
						map.removeLayer(wayPoint);
						hash.removeParam("w");
					}).addTo(map);
				}
			}
		}

		if (hashParams.m != prevHashParams.m) {
			if (hashParams.m) {
				var hashMarker = hashParams.m.split(",");
				for (var val of allLayers) {
					for (var marker of val.getLayers()) {
						if (!marker.getLatLng)
							continue;
						let pos = marker.getLatLng();
						if(hashMarker[0] == pos.lat && hashMarker[1] == pos.lng)
							marker.openPopup();
					}
				}
				$("#centerButton").show();
			} else {
				$("#centerButton").hide();
				map.closePopup();
			}
		}

		if (hashParams.r != prevHashParams.r) {
			if (hashParams.r) {
				let rid = +hashParams.r;
				if (rid >= 0 && rid < routes.length)
					selectRoute(rid, true, true);
			} else {
				unselectRoutes(true);
			}
		}

		if (hashParams.a != prevHashParams.a) {
			if (hashParams.a) {
				let aid = +hashParams.a;
				if (aid >= 0 && aid < areas.length)
					selectArea(aid, true, true);
			} else {
				unselectAreas(true);
			}
		}

		if (hashParams.i != prevHashParams.i) {
			let isel = [];
			for (let i = 0; i < interiors.length; i++)
				isel[i] = -1;
			if (hashParams.i) {
				let intrs = hashParams.i.split(",");
				for (intr of intrs) {
					let tup = intr.split(".");
					if (tup.length == 1)
						tup[1] = 0;
					let id = +tup[0];
					let fl = +tup[1];
					if (id >= 0 && id < interiors.length && fl >= 0 && fl < interiors[id].floors.length)
						isel[id] = fl;
				}
			}
			for (let i = 0; i < interiors.length; i++) {
				if (isel[i] >= 0)
					selectFloor(i, isel[i], false, true);
				else
					closeInterior(i, true);
			}
		}

		prevHashParams = hashParams;
	}

	$("#centerButton").hide();
	processHashParams(hash.getHashParams() || {});

	hash.init(function() {
		processHashParams(this.getHashParams() || {});
	});
}

$(function() {
	$.i18n.init(i18noptions, async function() {
		$(document).i18n();

		for (let map of window.mapInfos) {
			await new Promise(function(resolve) {
				$.i18n.loadNamespace(map.ns, resolve);
			});
		}

		runMap();
	});
});
