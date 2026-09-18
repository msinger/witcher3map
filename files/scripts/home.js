//empty mocks to avoid errors on mapdata files
var L = {};
L.latLng = function() {};
window.markers = {};

$.i18n.init(i18noptions, async function() {
	for (var map of window.search_maps) {
		await new Promise(function(resolve) {
			$.i18n.loadNamespace(map.ns, resolve);
		});

		await loadScript("files/scripts/mapdata-" + map.path + ".js");
		processData(map, window["mapdata_" + map.path]);
	}

	var searchInput = $("#search");
	searchInput.keyup(function() {
		doSearch()
	});

	if (searchInput.val())
		doSearch();

	$("#clear").click(function() {
		$("#search").val("");
		$("#results").empty();
		$("#clear").hide();
		$("#nav").show();
	});

	$(document).i18n()
});

//mocks shared.js processData function to generate search results
var count = 0;
var mapdata = [];
function processData(map, data) {
	$.each(data, function(markerType,markers) {
		$.each(markers, function(index,marker) {
			if (!marker || !marker.popup)
				return;
			// TODO: Why toString and slice?
			var link = window.location.href.replace(window.location.hash, '').toString().slice(0, -10) +
			           map.ns + "/index.html#3/" + marker.coords[0][0] + "/" + marker.coords[0][1] +
			           "/m=" + marker.coords[0][0] + "," + marker.coords[0][1];
			var popupText = marker.popup.replace(/<\/?[^>]+(>|$)/g, "");
			var popupTitle = marker.popupTitle ? marker.popupTitle : '';
			var label;
			if (popupTitle === '') {
				label = marker.label;
			} else if (popupTitle.indexOf(marker.label) > -1) {
				label = popupTitle;
			} else {
				label = marker.label+' ('+popupTitle+')';
			}

			mapdata.push({
				'id': count,
				'map': $.t('maps.'+map.path),
				'label':label,
				'popup':popupText,
				'link':link
			});

			count++;
		})
	})
}

function doSearch() {
	var searchElement = $('#search');
	var resultsElement = $('#results');
	var searchText = searchElement.val();
	if(searchText.length === 0) {
		resultsElement.empty();
		$('#clear').hide();
		$('#nav').show();
		return;
	} else {
		$('#clear').show();
		$('#nav').hide();
	}

	var options = {
		caseSensitive: false,
		includeScore: false,
		shouldSort: true,
		tokenize: false,
		threshold: 0.2,
		location: 0,
		distance: 10000,
		maxPatternLength: 32,
		keys: ["map","label","popup"]
	};
	var fuse = new Fuse(mapdata, options);
	var result = fuse.search(searchText);

	resultsElement.empty();
	var count = '<li>'+result.length+' '+$.t('home.resultsFound')+'</li>';
	resultsElement.append($(count));
	var resultsLength = result.length;
	for(i=0;i<resultsLength;i++) {
		var item = '<li><div><a href="'+result[i].link+'">'+result[i].label+' - '+result[i].map+'</a></div><div class="searchDescription"><div class="truncated" onclick="toggleTruncate(event, this)">'+result[i].popup+'</div></div></li>';
		resultsElement.append($(item));
	}
}

function toggleTruncate(e, element) {
	e.preventDefault();
	e.stopPropagation();
	$(element).toggleClass("truncated");
}

$(function() {
	var s = $('#search-input-wrapper');
	var pos = s.position();
	//setup sticky searchbar
	$(window).scroll(function() {
		var windowpos = $(window).scrollTop();
		if (windowpos >= pos.top) {
			if($('#search').val()) {
				s.addClass("sticky");
			}
		} else {
			s.removeClass("sticky");
		}
	});
});
