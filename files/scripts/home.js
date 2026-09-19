function processMapDataForGlobalSearch(map) {
	var data = map.getMapData();

	for (var markers of Object.values(data)) {
		for (var marker of Object.values(markers)) {
			if (!marker || !marker.popup)
				continue;

			var label = marker.label;
			if (marker.popupTitle) {
				if (marker.popupTitle.indexOf(marker.label) >= 0)
					label = marker.popupTitle;
				else
					label += " (" + marker.popupTitle + ")";
			}

			var popupText = marker.popup.replace(/<\/?[^>]+(>|$)/g, "");

			// TODO: Why toString and slice?
			var link = window.location.href.replace(window.location.hash, "").toString().slice(0, -10) +
			           map.ns + "/index.html#3/" + marker.coords[0][0] + "/" + marker.coords[0][1] +
			           "/m=" + marker.coords[0][0] + "," + marker.coords[0][1];

			searchData.push({
				id:    searchCount,
				map:   $.t("maps." + map.name),
				label: label,
				popup: popupText,
				link:  link
			});

			searchCount++;
		}
	}
}

function doSearch() {
	var searchText = $("#search").val();
	var resultsElement = $("#results");

	resultsElement.empty();

	if (searchText.length === 0) {
		$("#clear").hide();
		$("#nav").show();
		return;
	}

	$("#clear").show();
	$("#nav").hide();

	var options = {
		caseSensitive:    false,
		includeScore:     false,
		shouldSort:       true,
		tokenize:         false,
		threshold:        0.2,
		location:         0,
		distance:         10000,
		maxPatternLength: 32,
		keys:             ["map", "label", "popup"]
	};
	var fuse = new Fuse(searchData, options);
	var result = fuse.search(searchText);

	var count = "<li>" + result.length + " " + $.t("home.resultsFound") + "</li>";
	resultsElement.append($(count));

	for (var i = 0; i < result.length; i++) {
		var item = '<li><div><a href="' + result[i].link + '">' + result[i].label + " - " + result[i].map + "</a></div>" +
		           '<div class="searchDescription"><div class="truncated" onclick="toggleTruncate(event, this)">' +
		           result[i].popup + "</div></div></li>";
		resultsElement.append($(item));
	}
}

function toggleTruncate(e, element) {
	e.preventDefault();
	e.stopPropagation();
	$(element).toggleClass("truncated");
}

function runHome() {
	window.searchCount = 0;
	window.searchData = [];

	createLangSwitcher();

	for (var map of window.mapInfos)
		processMapDataForGlobalSearch(map);

	var searchInput = $("#search");
	searchInput.keyup(function() {
		doSearch();
	});

	if (searchInput.val())
		doSearch();

	$("#clear").click(function() {
		$("#search").val("");
		$("#results").empty();
		$("#clear").hide();
		$("#nav").show();
	});

	var s = $("#search-input-wrapper");
	var pos = s.position();
	//setup sticky searchbar
	$(window).scroll(function() {
		var windowpos = $(window).scrollTop();
		if (windowpos >= pos.top) {
			if($("#search").val())
				s.addClass("sticky");
		} else {
			s.removeClass("sticky");
		}
	});
}

const urlParams = new URLSearchParams(window.location.search);
const mapParam = urlParams.get("map");

let loadMap = false;

if (mapParam) {
	for (let mapInfo of window.mapInfos) {
		if (mapParam == mapInfo.ns) {
			window.mapInfos = [mapInfo];
			loadMap = true;
			break;
		}
	}
}

if (loadMap) {
	(async function() {
		document.getElementById("home-css").remove();
		await loadStyle(window.topdir + "/files/styles/main.css");
		loadScript(window.topdir + "/files/scripts/map.js");
	})();
} else {
	$(function() {
		$.i18n.init(i18noptions, async function() {
			$(document).i18n();

			for (let map of window.mapInfos) {
				await new Promise(function(resolve) {
					$.i18n.loadNamespace(map.ns, resolve);
				});
			}

			runHome();
		});
	});
}
