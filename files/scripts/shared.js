var mapInfos = [];

var markerGroupNames = [
	"abandoned",
	"alchemy",
	"armourer",
	"armourerstable",
	"banditcamp",
	"barber",
	"blacksmith",
	"boat",
	"brothel",
	"contracts",
	"entrance",
	"event",
	"grindstone",
	"guarded",
	"gwent",
	"gwentquest",
	"hansebase",
	"harbor",
	"herbalist",
	"hidden",
	"hollow",
	"honeycomb",
	"innkeep",
	"kid",
	"monsterden",
	"monsternest",
	"notice",
	"pid",
	"pop",
	"poi",
	"scavenger",
	"shopkeeper",
	"sidequests",
	"signalfire",
	"signpost",
	"smugglers",
	"spoils",
	"treasure",
	"vineyardinfestation"
];

function loadScript(url) {
	return new Promise(function(resolve, reject) {
		let script = document.createElement("script");
		script.src = url;
		script.onload = resolve;
		script.onerror = reject;
		document.head.appendChild(script);
	});
}

function loadStyle(url) {
	return new Promise(function(resolve, reject) {
		let style = document.createElement("link");
		style.rel = "stylesheet";
		style.type = "text/css";
		style.media = "screen";
		style.href = url;
		style.onload = resolve;
		style.onerror = reject;
		document.head.appendChild(style);
	});
}

function registerMap(mapInfo) {
	mapInfos.push(mapInfo);
}

function esc(text, quotes) {
	var r = String(text)
		.replace(/&/g, "&amp;")
		.replace(/</g, "&lt;")
		.replace(/>/g, "&gt;");
	if (quotes)
		r = r.replace(/"/g, "&quot;")
	return r;
}
