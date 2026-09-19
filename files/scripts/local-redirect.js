const urlParams = new URLSearchParams(window.location.search);
let noRedirectParam = urlParams.get("noredirect") !== null;

// If we run on a "file://..." URL, then redirect to the top level index.html. This way we can
// use the same local storage of the browser for all maps. Settings will be shared between all
// map views and backup/restore works as expected.
if (window.location.protocol == "file:" && !noRedirectParam)
	window.location.replace(window.topdir + "/index.html?map=" + mapInfos[0].ns);

