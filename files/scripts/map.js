var icons = {};
var markers = {};
var invisibleMarkers = {};
var markerCount = {};
var notes = [];
var invisibleMarkerOpacity = 0.25;

L.Icon.Default.imagePath = window.files_path + "/images/leaflet";

var icon_sizes = {
	//                     regular, underground
	abandoned:           [[30, 30], [30, 40]],
	alchemy:             [[20, 28], [21, 37]],
	armourer:            [[24, 34], [24, 43]],
	armourerstable:      [[30, 27], [30, 36]],
	banditcamp:          [[29, 30], [29, 39]],
	barber:              [[30, 30], [30, 39]],
	blacksmith:          [[27, 30], [27, 39]],
	boat:                [[30, 28], [30, 37]],
	brothel:             [[28, 26], [28, 33]],
	contracts:           [[20, 31], [23, 43]],
	entrance:            [[28, 27], false   ],
	event:               [[23, 34], [23, 37]],
	grindstone:          [[30, 26], [30, 35]],
	guarded:             [[23, 34], [23, 43]],
	gwent:               [[24, 30], [24, 39]],
	gwentquest:          [[24, 30], [24, 39]],
	hansebase:           [[29, 30], [29, 39]],
	harbor:              [[27, 30], [27, 39]],
	herbalist:           [[25, 28], [25, 37]],
	hidden:              [[23, 34], [23, 43]],
	hollow:              [[28, 27], [28, 36]],
	honeycomb:           [[29, 29], [29, 37]],
	innkeep:             [[26, 30], [26, 39]],
	kid:                 [[28, 30], [28, 39]],
	monsterden:          [[30, 27], false   ],
	monsternest:         [[23, 30], [23, 39]],
	note_marker:         [[23, 23], false   ],
	notice:              [[23, 28], [23, 30]],
	pid:                 [[24, 34], [24, 43]],
	poi:                 [[28, 28], [28, 37]],
	pop:                 [[27, 30], [27, 39]],
	scavenger:           [[30, 30], [30, 39]],
	shopkeeper:          [[21, 30], [21, 39]],
	sidequests:          [[10, 30], [10, 39]],
	signalfire:          [[17, 34], [17, 34]],
	signpost:            [[27, 34], [27, 43]],
	smugglers:           [[28, 30], [28, 39]],
	spoils:              [[25, 28], [25, 37]],
	treasure:            [[23, 34], [32, 38]],
	treasure_uw:         [[23, 34], [32, 38]],
	vineyardinfestation: [[28, 32], [28, 41]]
};

function createMarker(coord, icon, label, popup, dataKey) {
	var mapKey = "markers-" + mapInfos[0].name + "-hidden";
	var marker = L.marker(coord, { icon: icon, riseOnHover: true }).bindLabel(label, { direction: "auto" }).bindPopup(popup);

	marker.on("contextmenu", function(e) {
		toggleMarker(e, mapKey, dataKey);
	});

	if (!markerCount[dataKey])
		markerCount[dataKey] = 0;

	if (isMarkerInvisible(mapKey, marker.getLatLng().lat, marker.getLatLng().lng))
		marker.setOpacity(invisibleMarkerOpacity);
	else
		markerCount[dataKey]++;

	return marker;
}

function isMarkerInvisible(mapKey, lat, lng) {
	return invisibleMarkers[mapKey].indexOf(lat + ";" + lng) >= 0;
}

function toggleMarker(e, mapKey, dataKey) {
	if (!e.target)
		return;

	var key = e.latlng.lat + ";" + e.latlng.lng;

	if (typeof markerCount[dataKey] != "number" || isNaN(markerCount[dataKey]))
		markerCount[dataKey] = 0;

	if (e.target.options.opacity === 1.0) {
		e.target.setOpacity(invisibleMarkerOpacity);
		invisibleMarkers[mapKey].push(key);
		markerCount[dataKey]--;
	} else {
		e.target.setOpacity(1.0);
		invisibleMarkers[mapKey].splice(invisibleMarkers[mapKey].indexOf(key), 1);
		markerCount[dataKey]++;
	}

	localStorage[mapKey] = JSON.stringify(invisibleMarkers[mapKey]);
	$("ul.key:not(.controls) > li:not(.none) > i." + dataKey + " ~ :last").text(markerCount[dataKey]);
}

function resetMarkers() {
	var mapKey = "markers-" + mapInfos[0].name + "-hidden";
	invisibleMarkers[mapKey] = [];
	localStorage[mapKey] = JSON.stringify(invisibleMarkers[mapKey]);
	location.reload();
}

function processData() {
	var data = mapInfos[0].getMapData();

	var mapKey = "markers-" + mapInfos[0].name + "-hidden";
	if (!localStorage[mapKey])
		localStorage[mapKey] = JSON.stringify([]);
	invisibleMarkers[mapKey] = JSON.parse(localStorage[mapKey]);

	var notesKey = "notes-" + mapInfos[0].name;
	if (!localStorage[notesKey])
		localStorage[notesKey] = JSON.stringify([]);
	notes = JSON.parse(localStorage[notesKey]);

	for (var dataKey in data) {
		if (markerGroupNames.indexOf(dataKey) < 0) {
			console.log("Skip unknown marker group '" + dataKey + "' in mapdata file.");
			continue;
		}

		var items = data[dataKey];
		var groupItems = [];

		for (var item of items) {
			if (item.popupTitle == null)
				item.popupTitle = item.label;

			for (var coord of item.coords) {
				var n = dataKey;

				if (item.label.includes($.t("treasure.watertreasure")))
					n += "_uw";

				if (item.label.includes($.t("misc.underground")))
					n += "_ug";

				groupItems.push(createMarker(coord, icons[n], item.label,
				                             "<h1>" + item.popupTitle + "</h1>" + item.popup,
				                             dataKey));
			}
		}

		markers[dataKey] = L.layerGroup(groupItems);
	}
}

function runMap() {
	// Fix bug where sidebar scrollbar doesn't appear when the language drop-down opens
	createLangSwitcher();
	$(".dd-selected").on("click", function() {
		setTimeout(function() {
			$("#sidebar").getNiceScroll().resize();
		}, 500);
	});

	for (var icon in icon_sizes) {
		// regular
		if (icon_sizes[icon][0])
			icons[icon] = L.icon({ iconUrl:  window.files_path + "/images/icons/" + icon + ".png",
			                       iconSize: icon_sizes[icon][0] });

		// underground
		if (icon_sizes[icon][1])
			icons[icon + "_ug"] = L.icon({ iconUrl:  window.files_path + "/images/icons/underground/" + icon + ".png",
			                               iconSize: icon_sizes[icon][1] });
	}

	processData();

	window.allLayers = [];
	for (var groupName of markerGroupNames)
		if (groupName in markers)
			allLayers.push(markers[groupName]);

	var mobile   = ($("#sidebar").width() < 300);
	var wayPoint = false;
	var circle   = null;

	if (localStorage.hideWarn)
		$("#warn").remove();

	if (localStorage["hide-all-" + mapInfos[0].name]) {
		$("#hide-all").hide();
		$("#show-all").show();
	}

	if (localStorage["hide-monsters"]) {
		$("#info").addClass("hideMonsters");
		$("#hide-monsters").hide();
		$("#show-monsters").show();
	}

	function hackySticky() {
		if ($(window).height() > $("#sidebar-wrap").outerHeight() + $("div#copyright").outerHeight() + 45)
			$("div#copyright").addClass("absolute");
		else
			$("div#copyright").removeClass("absolute");
	}

	hackySticky();
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

	var map_settings = {
		minZoom:            mapInfos[0].minZoom,
		maxZoom:            mapInfos[0].maxZoom,
		center:             mapInfos[0].initialPos,
		zoom:               mapInfos[0].initialZoom,
		attributionControl: false,
		zoomControl:        false,
		layers:             allLayers,
		crs:                L.CRS.Simple
	};

	var map = L.map("map", map_settings);

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

	var hash   = new L.Hash(map);
	var bounds = new L.LatLngBounds(L.latLng(mapInfos[0].bounds[0]), L.latLng(mapInfos[0].bounds[1]));
	map.setMaxBounds(bounds);

	if (!mobile) {
		var searchData = [];

		for (var layer of allLayers) {
			for (var marker of Object.values(layer._layers)) {
				searchData.push({
					loc:   [marker._latlng.lat, marker._latlng.lng],
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
			zoom:         5,
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
	}

	var layer_settings = {
		tms:             true,
		bounds:          bounds,
		noWrap:          true,
		maxNativeZoom:   mapInfos[0].nativeZoom,
		continuousWorld: true,
		crs:             L.CRS.Simple
	};

	L.tileLayer(window.files_path + "/maps/" + mapInfos[0].name + "/{z}/{x}/{y}.png", layer_settings).addTo(map);
	L.tileLayer(window.files_path + "/maps/" + mapInfos[0].name + "/{z}/{x}/{y}.jpg", layer_settings).addTo(map);

	// TODO: Make this a configuration option:
	map.dragging._draggable.on('predrag', function() {
		var pos = map._initialTopLeftPoint.subtract(this._newPos);
		this._newPos = this._newPos.subtract(map._getBoundsOffset(new L.Bounds(pos, pos.add(map.getSize())),
		                                                          map.options.maxBounds));
	});

	map.on("contextmenu", function(e) {
		if (!bounds.contains(e.latlng))
			return false;

		if (wayPoint)
			map.removeLayer(wayPoint);

		wayPoint = new L.marker(e.latlng, {
			icon: L.icon({
				iconUrl:  window.files_path + "/images/icons/waypoint.png",
				iconSize: [26, 32]
			})
		}).on("click", function() {
			map.removeLayer(wayPoint);
			hash.removeParam("w");
		}).on("contextmenu", function() {
			map.removeLayer(wayPoint);
			hash.removeParam("w");
		}).addTo(map);

		hash.addParam("w", e.latlng.lat.toFixed(3) + "," + e.latlng.lng.toFixed(3));
	});

	$(".leaflet-marker-icon").on("contextmenu", function(e) {
		return false;
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
		console.log("Popup at:");
		console.log("[" + e.popup._latlng.lat.toFixed(3) + ", " + e.popup._latlng.lng.toFixed(3) + "]");
	});

	function createCircle(lat, lng) {
		var noteKey = lat.toFixed(3) + ";" + lng.toFixed(3);

		// Only add param and show center button if not a note
		if (!notes[getNoteIndex(noteKey)]) {
			hash.addParam("m", lat + "," + lng);
			$("#centerButton").show();
		}

		circle = L.circleMarker(L.latLng(lat, lng), {
			color:       "red",
			fillColor:   "#f03",
			fillOpacity: 0.5,
			radius:      20
		}).addTo(map);
	}

	function deleteCircle() {
		if(circle !== null) {
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

	if (localStorage["markers-" + mapInfos[0].name]) {
		$.each($.parseJSON(localStorage["markers-" + mapInfos[0].name]), function(key, val) {
			if (val === false) {
				$("i." + key).parent().addClass("layer-disabled");
				map.removeLayer(window.markers[key]);
			}
		});
	}

	for (var val of $("ul.key:not(.controls) li:not(.none) i")) {
		var marker = $(val).attr("class");
		var pill = $('<div class="pill">' + window.markerCount[marker] + "</div>");
		$(val).next().after(pill);
		if (localStorage["hide-counts"])
			pill.hide();
	}

	if (localStorage["hide-counts"]) {
		$("#hide-counts").hide();
		$("#show-counts").show();
	}

	$("#hide-all").on("click", function(e) {
		var remember = {};
		if (localStorage["markers-" + mapInfos[0].name])
			remember = $.parseJSON(localStorage["markers-" + mapInfos[0].name]);

		for (var val of allLayers)
			map.removeLayer(val);

		for (var val of $("ul.key:not(.controls) li:not(.none) i"))
			remember[$(val).attr("class")] = false;

		for (var li of $("ul.key:first li"))
			$(li).addClass("layer-disabled");

		$("#hide-all").hide();
		$("#show-all").show();
		localStorage["markers-" + mapInfos[0].name] = JSON.stringify(remember);
		localStorage["hide-all-" + mapInfos[0].name] = true;
	});

	$("#show-all").on("click", function(e) {
		var remember = {};
		if (localStorage["markers-" + mapInfos[0].name])
			remember = $.parseJSON(localStorage["markers-" + mapInfos[0].name]);

		for (var val of allLayers)
			map.addLayer(val);

		for (var val of $("ul.key:not(.controls) li:not(.none) i"))
			remember[$(val).attr("class")] = true;

		for (var li of $("ul.key:first li"))
			$(li).removeClass("layer-disabled");

		$("#show-all").hide();
		$("#hide-all").show();
		localStorage["markers-" + mapInfos[0].name] = JSON.stringify(remember);
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

	$(document).on("click", "li#hide-monsters", function(e) {
		localStorage["hide-monsters"] = true;
		$("#info").addClass("hideMonsters");
		$("#hide-monsters").hide();
		$("#show-monsters").show();
	});

	$(document).on("click", "li#show-monsters", function(e) {
		localStorage.removeItem("hide-monsters");
		$("#info").removeClass("hideMonsters");
		$("#hide-monsters").show();
		$("#show-monsters").hide();
	});

	$("ul.key:not(.controls)").on("click", "li:not(.none)", function(e) {
		var marker   = $(this).find("i").attr("class");

		var remember = {};
		if (localStorage["markers-" + mapInfos[0].name])
			remember = $.parseJSON(localStorage["markers-" + mapInfos[0].name]);

		if ($(this).hasClass("layer-disabled")) {
			map.addLayer(window.markers[marker]);
			$(this).removeClass("layer-disabled");
			remember[marker] = true;
		} else {
			map.removeLayer(window.markers[marker]);
			$(this).addClass("layer-disabled");
			remember[marker] = false;
		}
		localStorage["markers-" + mapInfos[0].name] = JSON.stringify(remember);
	});

	var origSidebar;
	var origBorder;
	var origHide;
	var origInfoWrap;
	var origInfo;

	function hideSidebar() {
		origSidebar = $("#sidebar").css("left");
		origBorder = $("#sidebar-border").css("left");
		origHide = $("#hide-sidebar").css("left");
		origInfoWrap = $("#info-wrap").css(["left", "width"]);
		origInfo = $("#info").css(["width", "margin-right"]);

		$("#info-wrap").css({ left: "0px", width: "100%" });
		$("#info").css({ width: "auto", "margin-right": "80px" });
		$("#map").css("left", "0px");
		map.invalidateSize();

		// TODO: What happens when user manages to trigger click event while animation is running?
		var base = $("#sidebar").outerWidth();
		$("#sidebar").animate({ left: "-" + base + "px"}, 200);
		$("#sidebar-border").animate({ left: "-" + (base + 15) + "px"}, 200);
		$("#hide-sidebar").animate({ left: "0px"}, 200, function() {
			$("#hide-sidebar").addClass("show-sidebar");
		});
	}

	function showSidebar(elem) {
		$("#sidebar").animate({ left: origSidebar }, 200);
		$(elem).animate({ left: origHide }, 200);
		$("#sidebar-border").animate({ left: origBorder }, 200, function() {
			$(".show-sidebar").removeClass("show-sidebar");
			// TODO: Figure out why this part was removed
			/*
			$("#sidebar").attr("style", "");
			$("#sidebar-border").attr("style", "");
			$("#info-wrap").css(origInfoWrap);
			$("#info").css(origInfo);
			$("#map").attr("style", "");
			*/
		});
	}

	$(document).on("click", "div#hide-sidebar:not(.show-sidebar)", function(e) {
		hideSidebar();
		localStorage["hide-sidebar"] = true;
	});

	$(document).on("click", "div#hide-sidebar.show-sidebar", function(e) {
		showSidebar($(this));
		localStorage.removeItem("hide-sidebar");
	});

	if (localStorage["hide-sidebar"]) {
		setTimeout(function() {
			// TODO: Maybe save sidebar origs here once; and on resize, but only if it is shown.
			hideSidebar();
		}, 500);
	}

	$(window).on("resize", function() {
		// TODO: Why do this? This breaks sidebar when it is currently hidden. It will never come out again.
		if ($(".show-sidebar").length && $(this).width() > 768) {
			// TODO: Figure out why this part was removed
			/*
			$("#map").css("left", origMap);
			map.invalidateSize();
			*/
			$(".show-sidebar").removeClass("show-sidebar");
			/*
			$("#hide-sidebar").attr("style", "");
			$("#sidebar").attr("style", "");
			$("#sidebar-border").attr("style", "");
			$("#info-wrap").attr("style", "");
			$("#map").attr("style", "");
			*/
		}
	});

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
		                  '<img id="popup-close" src="../files/images/exit.png" alt="Close" onclick="popupClose();">' +
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
			'<li><a href="http://git.io/vkfA2" target="_blank">Leaflet.label</a> (MIT)</li>',
			'<li><a href="http://git.io/mwK1oA" target="_blank">Leaflet-hash</a> (MIT)</li>',
			'<li><a href="http://git.io/vJw5v" target="_blank">Leaflet.fullscreen</a> (BSD2)</li>',
			'<li><a href="http://git.io/vkCPC" target="_blank">Leaflet Control Search</a> (MIT)</li>',
			'<li><a href="https://github.com/krisk/Fuse" target="_blank">Fuse</a> (Apache)</li>',
			'<li><a href="http://git.io/vIAs2" target="_blank">Font Awesome</a> (MIT)</li>',
			'</ul>'
		].join('\n'));
	});

	setTimeout(function() {
		for (var val of $("ul.key:not(.controls) li:not(.none) i")) {
			var key = $(val).attr("class");
			key = $.t("sidebar." + key);
			var tooltip = $('<span class="tooltip">' + key + "</span>");

			var ellipsis = $(val).next();
			if (ellipsis.outerWidth() < ellipsis[0].scrollWidth) {
				$(val).parent().mousemove(function(e) {
					var x = e.clientX;
					var y = e.clientY;

					// calculate y-position to counteract scroll offset
					var offset = $("#logo").offset();
					y -= offset.top;

					tooltip.css("top", (y + 15) + "px");
					tooltip.css("left", (x + 15) + "px");
					tooltip.css("display", "block");
				}).mouseleave(function() {
					tooltip.css("display", "none");
				});
			}

			$("#sidebar-wrap").append(tooltip);
		}
		for (var val of $("ul.controls li:not(.none) i")) {
			var key = $(val).next().text();
			var tooltip = $('<span class="tooltip">' + key + "</span>");

			var ellipsis = $(val).next();
			if (ellipsis.outerWidth() < ellipsis[0].scrollWidth) {
				$(val).parent().mousemove(function(e) {
					var x = e.clientX;
					var y = e.clientY;

					// calculate y-position to counteract scroll offset
					var offset = $("#logo").offset();
					y -= offset.top;

					tooltip.css("top", (y + 15) + "px");
					tooltip.css("left", (x + 15) + "px");
					tooltip.css("display", "block");
				}).mouseleave(function() {
					tooltip.css("display", "none");
				});
			}

			$("#sidebar-wrap").append(tooltip);
		}
	}, 100);

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
		                 'style="cursor:pointer"></div><strong>' + $.t("controls.backupLoad") +
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
			map.setView([hashMarker[0], hashMarker[1]]);
		} else {
			map.setView(mapInfos[0].initialPos);
		}
	}, $.t("controls.centerMarkerButton"), "centerButton").addTo(map);

	window.getNoteIndex = function(noteKey) {
		for (var i = 0; i < notes.length; i++)
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
		marker.bindLabel(note.label, { direction: "auto" });
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
		       '<i class="fa fa-floppy-o"></i>&nbsp;' + $.t("notes.saveNote") + "</button>" +
		       '<button onclick="deleteNote(\'' + note.key + '\')"><i class="fa fa-trash-o"></i>&nbsp;' +
		       $.t("notes.deleteNote") + "</button></div></div>";
	}

	function createNote(note) {
		var noteMarker = null;

		if (note.label && note.label !== "")
			noteMarker = L.marker(L.latLng(note.lat, note.lng), { icon: icons.note_marker, riseOnHover: true }).
			             bindLabel(note.label, { direction: "auto" }).bindPopup(getNotePopup(note)).openPopup();
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
	for (var i = 0; i < notes.length; i++) {
		createNote(notes[i]);
	}

	var hashParams = hash.getHashParams();

	if (!hashParams) {
		$("#centerButton").hide();
		return;
	}

	if (hashParams.w) {
		var hashWayPoint = hashParams.w.split(",");
		wayPoint = new L.marker(L.latLng(hashWayPoint[0], hashWayPoint[1]), {
			icon: L.icon({
				iconUrl:  window.files_path + "/images/icons/waypoint.png",
				iconSize: [26, 32]
			})
		}).on("click", function() {
			map.removeLayer(wayPoint);
			hash.removeParam("w");
		}).on("contextmenu", function() {
			map.removeLayer(wayPoint);
			hash.removeParam("w");
		}).addTo(map);
	}

	if (hashParams.m) {
		var hashMarker = hashParams.m.split(",");
		for (var val of allLayers) {
			for (var marker of val.getLayers()) {
				if(hashMarker[0] == marker._latlng.lat && hashMarker[1] == marker._latlng.lng)
					marker.openPopup();
			}
		}
	} else {
		$("#centerButton").hide();
	}
}

$(function() {
	$.i18n.init(i18noptions, function() {
		$.i18n.loadNamespace(mapInfos[0].ns, function() {
			$(document).i18n();
			runMap();
		});
	});
});
