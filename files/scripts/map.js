var icons = {};
var markers = {};
var checkedMarkers = [];
var disabledMarkers = [];
var markerLayers = {};
var hasMarkers = {};
var uncheckedMarkerCount = {};
var notes = [];
var checkedMarkerOpacity = 0.25;
var routes = [];
var interiors = [];
var map = null;

L.Icon.Default.imagePath = window.topdir + "/files/images/leaflet";

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

var route_colors = {
	alchemy:       "#8ac33b",
	entrance:      "#cb67fe",
	herbalist:     "#8ac33b",
	shopkeeper:    "#ffed86",
	sidequest:     "#ffcc00",
	sidequest_hos: "#4da4dd",
	sidequest_baw: "#ed7459"
};

function toCoordId(coord) {
	return coord[0].toFixed(3) + ";" + coord[1].toFixed(3);
}

function createMarker(coord, icon, label, popup, dataKey, id, checked, routes) {
	let marker = L.marker(coord, { icon: icon, riseOnHover: true });

	marker.bindTooltip(label);
	marker.bindPopup(popup);

	let coordId = toCoordId(coord);

	let obj = { id: coordId, icons: [], layers: [], checked: checked };
	if (id) {
		if (id in markers)
			obj = markers[id];
		obj.id = id;
		markers[id] = obj;
	} else {
		id = coordId;
	}

	if (obj.icons.length > 0) {
		if (checked && !obj.checked)
			toggleMarker(obj, true);
		checked = obj.checked;
	} else if (checked) {
		checkedMarkers.push(id);
	}

	marker.setOpacity(checked ? checkedMarkerOpacity : 1.0);

	markers[coordId] = obj;
	obj.icons.push(marker);
	marker.obj = obj;
	if (obj.layers.indexOf(dataKey) < 0) {
		obj.layers.push(dataKey);
		if (!checked)
			uncheckedMarkerCount[dataKey]++;
	}

	marker.on("contextmenu", function(e) {
		if (!e.target || !e.target.obj)
			return;
		toggleMarker(e.target.obj);
	});

	hasMarkers[dataKey] = true;

	marker.routes = [];
	for (let route of routes) {
		marker.routes.push(route);
		route.marker = marker;

		if (!route.fuse)
			continue;

		route.layer.setStyle({ opacity: checked ? checkedMarkerOpacity : 0.7 });

		route.layer.on("click", function(e) {
			if (!e.target || !e.target.route || !e.target.route.marker)
				return;
			e.target.route.marker.openPopup();
		});

		route.layer.on("contextmenu", function(e) {
			if (!e.target || !e.target.route || !e.target.route.marker || !e.target.route.marker.obj)
				return;
			L.DomEvent.stopPropagation(e);
			toggleMarker(e.target.route.marker.obj);
		});
	}

	return marker;
}

function saveCheckedMarkers() {
	let checkedKey = "markers-" + mapInfos[0].name + "-checked";
	localStorage[checkedKey] = JSON.stringify(checkedMarkers);
}

function saveDisabledMarkers() {
	let disabledKey = "markers-" + mapInfos[0].name + "-disabled";
	localStorage[disabledKey] = JSON.stringify(disabledMarkers);
}

function updateCount(dataKey) {
	$("ul.key:not(.controls) > li:not(.none) > i." + dataKey + " ~ :last").text(uncheckedMarkerCount[dataKey]);
}

function toggleMarker(mobj, noUpdate) {
	mobj.checked = !mobj.checked;

	for (m of mobj.icons) {
		m.setOpacity(mobj.checked ? checkedMarkerOpacity : 1.0);
		for (let route of m.routes) {
			if (!route.fuse)
				continue;
			route.layer.setStyle({ opacity: mobj.checked ? checkedMarkerOpacity : 0.7 });
		}
	}

	if (mobj.checked) {
		checkedMarkers.push(mobj.id);
		for (let dataKey of mobj.layers)
			uncheckedMarkerCount[dataKey]--;
	} else {
		checkedMarkers = checkedMarkers.filter(function (item) { return item !== mobj.id; });
		for (let dataKey of mobj.layers)
			uncheckedMarkerCount[dataKey]++;
	}

	if(!noUpdate) {
		saveCheckedMarkers();
		for (let dataKey of mobj.layers)
			updateCount(dataKey);
	}
}

function resetMarkers() {
	let checkedKey = "markers-" + mapInfos[0].name + "-checked";
	localStorage.removeItem(checkedKey);
	location.reload();
}

function processData(checkedMarkers) {
	let data = mapInfos[0].getMapData();

	prescreenMapData(mapInfos[0], data);

	substInteriors(mapInfos[0], data, "interior", function(interior) {
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
	});

	for (let dataKey of markerGroupNames) {
		let groupItems = [];

		substMapData(mapInfos[0], data, dataKey, function(coord, id, label, desc, icon, routes) {
			if (!icons[icon]) {
				console.error("Invalid icon:", icon);
				return;
			}

			let checked = false;
			let coordId = toCoordId(coord);
			if (checkedMarkers.indexOf(coordId) >= 0 || (id && checkedMarkers.indexOf(id) >= 0))
				checked = true;

			let tooltip = label.replace(/<\/?[^>]+(>|$)/g, "");
			let m = createMarker(coord, icons[icon], tooltip,
			                     "<h1>" + label + "</h1>" + desc,
			                     dataKey, id, checked, routes);
			groupItems.push(m);

			for (let route of routes) {
				if (!route.fuse)
					continue;
				groupItems.push(route.layer);
			}
		}, function(r) {
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
			r.layer = L.polyline(arr, { color: route_colors[dataKey] || "red", dashArray: r.dashed ? "4 8" : null });
			r.layer.route = r;
			routes.push(r);
			return id;
		});

		markerLayers[dataKey] = L.layerGroup(groupItems);
		if (disabledMarkers.indexOf(dataKey) >= 0)
			markerLayers[dataKey].disabled = true;
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

function selectRoute(id, skipFit) {
	unselectRoutes(true);
	let r = routes[id];
	if (!r.fuse)
		r.layer.addTo(map);
	if (!skipFit)
		map.fitBounds(r.layer.getBounds());
	if (!r.fuse)
		updateRouteHash(id);
}

function unselectFloors(id) {
	for (floor of interiors[id].floors)
		map.removeLayer(floor.layer);
}

function closeInterior(id) {
	unselectFloors(id);
	map.removeLayer(interiors[id].tooltip);
	map.removeLayer(interiors[id].rectangle);
	interiors[id].shown = false;
	updateInteriorHash();
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
		let nextLink = '[&nbsp;<a href="javascript:selectFloor(' + interiorId + ", " +
		               ((floorId + 1) % intr.floors.length) + ');">' + next + "</a>&nbsp;]";
		let prevId = floorId != 0 ? floorId - 1 : intr.floors.length - 1;
		let prevLink = '[&nbsp;<a href="javascript:selectFloor(' + interiorId + ", " +
		               prevId + ');">' + prev + "</a>&nbsp;]";
		label += "<br>" + prevLink + concat + nextLink;
	}
	const close = esc($.t("misc.closeLink")).replace(/ /g, "&nbsp;");
	let closeLink = '[&nbsp;<a href="javascript:closeInterior(' + interiorId + ');">' + close + "</a>&nbsp;]";
	label += concat + closeLink;
	intr.tooltip.setContent("<center>" + label + "</center>");
}

function selectFloor(interiorId, floorId, fit) {
	updateInteriorLabel(interiorId, floorId);
	unselectFloors(interiorId);
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
	if (fit)
		map.fitBounds(interior.bounds);
	interior.shown = true;
	interior.shownFloorId = floorId;
	updateInteriorHash();
}

function createSidebar() {
	let sidebar =
		'<div id="sidebar">' +
			'<div id="sidebar-wrap">' +
				'<a href="' + window.topdir + '/index.html" title="' + esc($.t("controls.returnToMapSelection"), true) + '"><center><img width="250" height="165" src="' + window.topdir + "/" + esc($.t("misc.logo_min"), true) + '" class="center"></center></a>' +
				'<ul class="key">';

	let count = 0;
	for (key of markerGroupNames) {
		if (hasMarkers[key]) {
			let disabledClass = "";
			if (markerLayers[key].disabled)
				disabledClass = ' class="layer-disabled"';
			sidebar += "<li" + disabledClass + '><i class="' + key + '"></i><div>' + esc($.t("sidebar." + key)) + '</div></li>';
			count++;
		}
	}

	// Number of elements must be even.
	if (count & 1)
		sidebar += '<li class="none"></li>';

	sidebar +=
				'</ul>' +
				'<ul class="key controls">' +
					'<li id="show-all"><i class="fa fa-eye"></i><div>' + esc($.t("controls.show")) + '</div></li>' +
					'<li id="hide-all"><i class="fa fa-eye-slash"></i><div>' + esc($.t("controls.hide")) + '</div></li>' +
					'<li id="show-counts"><i class="fa fa-check-square"></i><div>' + esc($.t("controls.showCounts")) + '</div></li>' +
					'<li id="hide-counts"><i class="fa fa-square"></i><div>' + esc($.t("controls.hideCounts")) + '</div></li>' +
					'<li id="reset-tracking"><i class="fa fa-eraser"></i><div>' + esc($.t("controls.resetInvisible")) + '</div></li>' +
					'<li><a href="https://github.com/witcher3map/witcher3map/wiki" target="_blank"><i class="fa fa-info-circle"></i><div>' + esc($.t("controls.helpFeatures")) + '</div></a></li>' +
					'<li id="Credits" class="credits"><i class="fa fa-copyright"></i><span>' + esc($.t("controls.credits")) + '</span></li>' +
					'<li class="none"></li>' +
				'</ul>' +
				'<div id="lang-switcher"></div>' +
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
		'<div id="hide-sidebar"></div>';

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

	let disabledKey = "markers-" + mapInfos[0].name + "-disabled";
	if (localStorage[disabledKey])
		disabledMarkers = JSON.parse(localStorage[disabledKey]);
	if (!(disabledMarkers instanceof Array))
		disabledMarkers = [];

	let initialHideAll = false;
	if (localStorage["hide-all-" + mapInfos[0].name])
		initialHideAll = true;

	let checkedKey = "markers-" + mapInfos[0].name + "-checked";
	let checkedMarkersLd = [];
	if (localStorage[checkedKey])
		checkedMarkersLd = JSON.parse(localStorage[checkedKey]);
	if (!(checkedMarkersLd instanceof Array))
		checkedMarkersLd = [];

	let notesKey = "notes-" + mapInfos[0].name;
	if (localStorage[notesKey])
		notes = JSON.parse(localStorage[notesKey]);
	if (!(notes instanceof Array))
		notes = [];

	for (let dataKey of markerGroupNames) {
		hasMarkers[dataKey] = false;
		uncheckedMarkerCount[dataKey] = 0;
	}

	processData(checkedMarkersLd);

	window.allLayers = [];
	let initialLayers = [];
	for (var groupName of markerGroupNames) {
		if (groupName in markerLayers) {
			allLayers.push(markerLayers[groupName]);
			if (!markerLayers[groupName].disabled)
				initialLayers.push(markerLayers[groupName]);
		}
	}

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

	function hackySticky() {
		if ($(window).height() > $("#sidebar-wrap").outerHeight() + $("div#copyright").outerHeight() + 45)
			$("div#copyright").addClass("absolute");
		else
			$("div#copyright").removeClass("absolute");
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

	var bounds = new L.LatLngBounds(L.latLng(mapInfos[0].bounds[0]), L.latLng(mapInfos[0].bounds[1]));

	var map_settings = {
		minZoom:             mapInfos[0].minZoom,
		maxZoom:             mapInfos[0].maxZoom,
		center:              mapInfos[0].initialPos,
		zoom:                mapInfos[0].initialZoom,
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

	var searchData = [];

	for (var layer of allLayers) {
		for (var marker of Object.values(layer.getLayers())) {
			if (!marker.getLatLng)
				continue;
			let pos = marker.getLatLng();
			searchData.push({
				loc:   [pos.lat, pos.lng],
				title: marker._popup._content.replace(/<h1>/, "").replace(/<\/h1>/, " - ").replace(/\\'/g, "")
			});
		}
	}

	map.addControl(new L.Control.Search({
		autoResize:   false,
		autoType:     false,
		minLength:    2,
		position:     "topright",
		autoCollapse: false,
		zoom:         mapInfos[0].maxZoom,
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
			var result= fuse.search(text);

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
		minNativeZoom: mapInfos[0].minNativeZoom,
		maxNativeZoom: mapInfos[0].maxNativeZoom
	};

	L.tileLayer(window.topdir + "/files/maps/" + mapInfos[0].name + "/{z}/{x}/{y}.png", layer_settings).addTo(map);
	L.tileLayer(window.topdir + "/files/maps/" + mapInfos[0].name + "/{z}/{x}/{y}.jpg", layer_settings).addTo(map);

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
			hash.addParam("m", lat + "," + lng);
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
		infoClose();
		if (notePopupOpen)
			notePopupEnd();
	});

	window.updateRouteHash = function(r) {
		if (r >= 0)
			hash.addParam("r", r);
		else
			hash.removeParam("r");
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

	for (var val of $("ul.key:not(.controls) li:not(.none) i")) {
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

	$("#hide-all").on("click", function(e) {
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
		localStorage["hide-all-" + mapInfos[0].name] = true;
	});

	$("#show-all").on("click", function(e) {
		for (let val of allLayers) {
			val.disabled = false;
			map.addLayer(val);
		}

		disabledMarkers = [];

		for (let li of $("ul.key:first li"))
			$(li).removeClass("layer-disabled");

		$("#show-all").hide();
		$("#hide-all").show();

		localStorage.removeItem("markers-" + mapInfos[0].name + "-disabled");
		localStorage.removeItem("hide-all-" + mapInfos[0].name);
	});

	$("#hide-counts").on("click", function(e) {
		for (var val of $("ul.key:not(.controls) > li:not(.none) i"))
			$(val).siblings(":last").hide();

		$("#hide-counts").hide();
		$("#show-counts").show();
		localStorage["hide-counts"] = true;
	});

	$("#show-counts").on("click", function(e) {
		for (var val of $("ul.key:not(.controls) > li:not(.none) i"))
			$(val).siblings(":last").show();

		$("#show-counts").hide();
		$("#hide-counts").show();
		localStorage.removeItem("hide-counts");
	});

	$("#reset-tracking").on("click", function(e) {
		e.preventDefault();
		if (confirm($.t("controls.resetInvisConfirm")))
			resetMarkers();
	});

	$("ul.key:not(.controls)").on("click", "li:not(.none)", function(e) {
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
		$("#info-wrap").css({ left: "0px", width: "100%" });
		$("#info").css({ width: "auto", "margin-right": "80px" });

		let base = $("#sidebar").outerWidth();
		if (anim) {
			$("#sidebar").animate({ left: "-" + base + "px" }, 200);
			$("#sidebar-border").animate({ left: "-" + (base + 15) + "px"}, 200);
			$("#hide-sidebar").animate({ left: "0px" }, 200, function() {
				$("#hide-sidebar").addClass("show-sidebar");

				// In case the sidebar gets hidden while being narrow due to a small browser window,
				// place it at the position it would have when it were wider. Otherwise, on Chrome
				// it would be half visible when the browser window gets enlarged while the bar is
				// hidden.
				$("#sidebar").finish();
				$("#sidebar").css({ left: "-390px" });
			});
		} else {
			$("#sidebar").css({ left: "-" + base + "px" });
			$("#sidebar-border").css({ left: "-" + (base + 15) + "px" });
			$("#hide-sidebar").css({ left: "0px" });
			$("#hide-sidebar").addClass("show-sidebar");
		}
	}

	function showSidebar() {
		$("#info-wrap").css({ left: "", width: "" });
		$("#info").css({ width: "", "margin-right": "" });

		$("#hide-sidebar").removeClass("show-sidebar");
		$("#sidebar").animate({ left: "" }, 200, function() {
			$("#hide-sidebar").css({ left: "" });
			$("#sidebar-border").css({ left: "" });
		});
	}

	$(document).on("click", "div#hide-sidebar:not(.show-sidebar)", function(e) {
		hideSidebar(true);
		localStorage["hide-sidebar"] = true;
	});

	$(document).on("click", "div#hide-sidebar.show-sidebar", function(e) {
		showSidebar();
		localStorage.removeItem("hide-sidebar");
	});

	if (localStorage["hide-sidebar"])
		hideSidebar(false);

	$(document).on("click", "div#warn", function(e) {
		localStorage.hideWarn = true;
		$(this).remove();
	});

	// This is supposed to close the popup when the user clicks anywhere in the window except the popup itself.
	// But this doesn't work. e.toElement is undefined most of the time and just causes an exception.
	/*
	function popupClick(e) {
		if ($(e.target).is("#popup-content") ||
		    $(e.toElement.offsetParent).is("#popup-content") ||
		    $(e.toElement.offsetParent).is("#popup-wrap"))
			return;

		popupClose();
	}
	*/

	window.popupClose = function() {
		$("#popup-wrap").remove();
		//$(document).off("click", "*", popupClick);
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
		//$(document).on("click", "*", popupClick);
	}

	$(document).on("click", ".credits", function(e) {
		e.preventDefault();
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
			'</ul>'
		].join('\n'));
	});

	hackySticky();
	$("#sidebar").getNiceScroll().resize();

	// Create tooltips for sidebar texts that get ellipsis.
	setTimeout(function() {
		let wrap = $("#sidebar-wrap");
		for (let val of $("ul.key:not(.controls) li:not(.none) i")) {
			let key = $(val).attr("class");
			let text = esc($.t("sidebar." + key));
			let tooltip = $('<span class="tooltip">' + text + "</span>");

			let ellipsis = $(val).next();
			if (ellipsis.outerWidth() < ellipsis[0].scrollWidth) {
				$(val).parent().mousemove(function(e) {
					let x = e.clientX;
					let y = e.clientY;

					// Calculate y-position to counteract scroll offset.
					y = y - wrap.offset().top + wrap.scrollTop();

					tooltip.css("top", (y + 15) + "px");
					tooltip.css("left", (x + 15) + "px");
					tooltip.css("display", "block");
				}).mouseleave(function() {
					tooltip.css("display", "none");
				});
			}

			wrap.append(tooltip);
		}
		for (let val of $("ul.controls li:not(.none) i")) {
			let text = $(val).next().text();
			let tooltip = $('<span class="tooltip">' + text + "</span>");

			let ellipsis = $(val).next();
			if (ellipsis.outerWidth() < ellipsis[0].scrollWidth) {
				$(val).parent().mousemove(function(e) {
					let x = e.clientX;
					let y = e.clientY;

					// Calculate y-position to counteract scroll offset.
					y = y - wrap.offset().top + wrap.scrollTop();

					tooltip.css("top", (y + 15) + "px");
					tooltip.css("left", (x + 15) + "px");
					tooltip.css("display", "block");
				}).mouseleave(function() {
					tooltip.css("display", "none");
				});
			}

			wrap.append(tooltip);
		}

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
			map.setView(mapInfos[0].initialPos);
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
		localStorage["notes-" + mapInfos[0].name] = JSON.stringify(notes);
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

	document.getElementById("map").style.cursor = "crosshair";

	let hashParams = hash.getHashParams();

	if (!hashParams) {
		$("#centerButton").hide();
		return;
	}

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
	} else {
		$("#centerButton").hide();
	}

	if (hashParams.r) {
		let rid = +hashParams.r;
		if (rid >= 0 && rid < routes.length)
			selectRoute(rid, true);
	}

	if (hashParams.i) {
		let intrs = hashParams.i.split(",");
		for (intr of intrs) {
			let tup = intr.split(".");
			if (tup.length == 1)
				tup[1] = 0;
			let id = +tup[0];
			let fl = +tup[1];
			if (id >= 0 && id < interiors.length && fl >= 0 && fl < interiors[id].floors.length)
				selectFloor(id, fl);
		}
	}
}

$(function() {
	$.i18n.init(i18noptions, function() {
		$.i18n.loadNamespace(mapInfos[0].ns, function() {
			try {
				$(document).i18n();
				runMap();
			} catch(e) {
				console.error("Uncaught in i18n callback:", e);
				throw e;
			}
		});
	});
});
