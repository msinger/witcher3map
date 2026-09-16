var L = {};
L.latLng = function() {};
window.markers = {};

$.i18n.init(i18noptions, async function() {
	for (var map of window.search_maps) {
		await new Promise(function(resolve) {
			$.i18n.loadNamespace(map.ns, resolve);
		});

		await loadScript("files/scripts/mapdata-" + map.path + ".js");
		processData(map);
	}

	var t = $("#search");
	t.keyup(function() {
		doSearch()
	});

	if (t.val())
		doSearch();

	$("#clear").click(function() {
		$("#search").val(""), $("#results").empty(), $("#clear").hide(), $("#nav").show()
	});

	$(document).i18n()
});

var count = 0;
var mapdata = [];

function processData(m) {
	$.each(window["mapdata_" + m.path], function(e, c) {
		$.each(c, function(e, c) {
			if (c && c.popup) {
				var s;
				var n = window.location.href.replace(window.location.hash, "").toString().slice(0, -10) +
					    m.ns + "/index.html#3/" + c.coords[0][0] + "/" + c.coords[0][1] + "/m=" + c.coords[0][0] +
					    "," + c.coords[0][1];
				var o = c.popup.replace(/<\/?[^>]+(>|$)/g, "");
				var r = c.popupTitle ? c.popupTitle : "";
				s = "" === r ? c.label : r.indexOf(c.label) > -1 ? r : c.label + " (" + r + ")", mapdata.push({
					id: count,
					map: $.t("maps." + m.path),
					label: s,
					popup: o,
					link: n
				}), count++
			}
		})
	})
}

function doSearch() {
	var a = $("#search"),
		e = $("#results"),
		t = a.val();
	if (0 === t.length) {
		e.empty(), $("#clear").hide(), $("#nav").show();
		return
	}
	$("#clear").show(), $("#nav").hide();
	var c = new Fuse(mapdata, {
		caseSensitive: !1,
		includeScore: !1,
		shouldSort: !0,
		tokenize: !1,
		threshold: .2,
		location: 0,
		distance: 1e4,
		maxPatternLength: 32,
		keys: ["map", "label", "popup"]
	}).search(t);
	e.empty();
	var s = "<li>" + c.length + " " + $.t("home.resultsFound") + "</li>";
	e.append($(s));
	var n = c.length;
	for (i = 0; i < n; i++) {
		var o = '<li><div><a href="' + c[i].link + '">' + c[i].label + " - " + c[i].map + '</a></div><div class="searchDescription"><div class="truncated" onclick="toggleTruncate(event, this)">' + c[i].popup + "</div></div></li>";
		e.append($(o))
	}
}

function toggleTruncate(a, e) {
	a.preventDefault(), a.stopPropagation(), $(e).toggleClass("truncated")
}

$(function() {
	var a = $("#search-input-wrapper"),
		e = a.position();
	$(window).scroll(function() {
		$(window).scrollTop() >= e.top ? $("#search").val() && a.addClass("sticky") : a.removeClass("sticky")
	})
});
