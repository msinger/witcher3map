var mapInfos = [];

var markerGroupNames = [
	"abandoned",
	"alchemy",
	"armorer",
	"armorerstable",
	"banditcamp",
	"barber",
	"blacksmith",
	"boat",
	"brothel",
	"contract",
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
	"scavengerhunt",
	"shopkeeper",
	"sidequest",
	"signalfire",
	"signpost",
	"smugglers",
	"spoils",
	"stash",
	"treasure",
	"treasurehunt",
	"vineyardinfestation"
];

let markerGroupNamesForProc = [];
for (let n of markerGroupNames) {
	if (n == "event" || n == "pid")
		continue;
	markerGroupNamesForProc.push(n);
}
// Move event and pid to the end, they can be source of person rescue.
markerGroupNamesForProc.push("event");
markerGroupNamesForProc.push("pid");

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

function isCoord(coord) {
	return coord &&
	       coord instanceof Array &&
	       coord.length == 2 &&
	       typeof coord[0] == "number" &&
	       typeof coord[1] == "number";
}

function tLink(key) {
	let res  = esc($.t(key + ".label")) || key;
	let link = esc($.t(key + ".link"), true);
	if (link == key + ".link")
		link = "";
	if (link)
		res = '<a target="_blank" href="' + link + '">' + res + "</a>";
	return res;
}

// ("v:foo", "shopkeeper")  ->  "v:shopkeeper.foo"
function applyPrefix(key, prefix) {
	if (!prefix)
		return key;
	let match = key.match(/^([^:]*):(.*)$/);
	if (match)
		return match[1] + ":" + prefix + "." + match[2];
	return prefix + "." + key;
}

// Replaces placeholders like __mainquest.pyres__ with a label and optional link provided by locale.
function subst(text, item, depth = 3) {
	if (!depth || depth <= 0) {
		console.error("subst() recursion too deep.");
		return;
	}
	return text.replace(/__([^_]+_?[^_]+)*__/g, function(match) {
		let prop = "";
		match = match.slice(2, -2);
		if (match.slice(0, 5) == "this.") {
			let propMatch = match.match(/^(.*)\/([^\/]*)$/);
			if (propMatch) {
				match = propMatch[1];
				prop = propMatch[2];
				if (prop)
					prop = "." + prop;
			}
			let prefixMatch = match.match(/^(.*)@([^@]*)$/);
			let prefix = "";
			if (prefixMatch) {
				match = prefixMatch[1];
				prefix = prefixMatch[2];
			}
			if (item[match.slice(5)]) {
				match = item[match.slice(5)];
				if (match[0] != "#")
					match = applyPrefix(match, prefix);
			} else {
				let arrMatch = match.match(/^(.*)\[(.*)\]$/);
				if (arrMatch) {
					let concat = esc(arrMatch[2]);
					arrMatch = item[arrMatch[1].slice(5)];
					if (typeof arrMatch == "string")
						arrMatch = [arrMatch];
					if (arrMatch instanceof Array) {
						let res = "";
						for (let i = 0; i < arrMatch.length; i++) {
							if (i != 0)
								res += concat;
							if (arrMatch[i][0] == "#")
								res += subst(esc(arrMatch[i].slice(1)), item, depth - 1);
							else if (prop)
								res += subst(esc($.t(applyPrefix(arrMatch[i] + prop, prefix))), item, depth - 1);
							else
								res += tLink(applyPrefix(arrMatch[i], prefix));
						}
						return res;
					}
				}
			}
		}
		if (match[0] == "#")
			return subst(esc(match.slice(1)), item, depth - 1);
		if (prop)
			return subst(esc($.t(match + prop)), item, depth - 1);
		return tLink(match);
	});
}

function isPerson(dataKey) {
	return dataKey == "armorer" ||
	       dataKey == "alchemy" ||
	       dataKey == "barber" ||
	       dataKey == "blacksmith" ||
	       dataKey == "brothel" ||
	       dataKey == "gwent" ||
	       dataKey == "gwentquest" ||
	       dataKey == "herbalist" ||
	       dataKey == "innkeep" ||
	       dataKey == "shopkeeper";
}

function substMapData(mapInfo, data, dataKey, f) {
	const concat       = esc($.t("misc.concat"));
	const concatDash   = esc($.t("misc.concatDash"));
	const openBracket  = esc($.t("misc.openBracket"));
	const closeBracket = esc($.t("misc.closeBracket"));

	let items = [];

	if (dataKey in data)
		items = data[dataKey];

	if (!(items instanceof Array)) {
		items = [];
		console.error(mapInfo.name + "->" + dataKey + " is not an array: ", items);
	}

	for (let item of items) {
		if (!(item instanceof Object)) {
			console.error("An element of " + mapInfo.name + "->" + dataKey + " is not an object: ", item);
			continue;
		}

		let coords = item.coords;
		if (!(coords instanceof Array) || coords.length == 0) {
			console.error("An element of " + mapInfo.name + "->" + dataKey + " does not have valid coordinates: ", item);
			continue;
		}
		if (!(coords[0] instanceof Array))
			coords = [coords];

		let icon        = dataKey;
		let label       = item.label || "";
		let desc        = item.desc;
		let extraLabel  = item.extraLabel;
		let extraDesc   = item.extraDesc;
		let notInGame   = item.notInGame;
		let underwater  = (dataKey == "treasure" || dataKey == "entrance") && item.underwater;
		let after       = item.after;
		let before      = item.before;
		let weakBefore  = item.weakBefore;
		let during      = item.during;
		let rescueFrom  = isPerson(dataKey) && item.rescueFrom;
		let rescuable   = (dataKey == "pid" || (dataKey == "event" && item.rescuable)) &&
		                  item.goesTo instanceof Object && isCoord(item.goesTo.coords);
		let special     = false;
		let underground = dataKey != "stash" && item.underground;
		let entrances   = data.entrance && item.entrances;
		let images      = item.images;

		if (typeof label != "string" || !label) {
			label = dataKey + ".label";
			if (item.underwater)
				label = dataKey + ".underwater.label";
			else if (dataKey == "hollow" && item.stump)
				label = "#" + (esc($.t(dataKey + ".stump.label")) || esc($.t(label)));
			else if (dataKey == "hollow" && item.log)
				label = "#" + (esc($.t(dataKey + ".log.label")) || esc($.t(label)));
			else if (dataKey == "hidden" && item.guarded)
				label = dataKey + ".guarded.label";
		}

		if (typeof desc != "string" || (desc !== "" && !desc)) {
			desc = dataKey + ".desc";
			if (item.underwater)
				desc = dataKey + ".underwater.desc";
			else if (dataKey == "hollow" && item.stump)
				desc = "#" + (esc($.t(dataKey + ".stump.desc")) || esc($.t(desc)));
			else if (dataKey == "hollow" && item.log)
				desc = "#" + (esc($.t(dataKey + ".log.desc")) || esc($.t(desc)));
			else if (dataKey == "hidden" && item.guarded)
				desc = dataKey + ".guarded.desc";
		}

		label = subst(esc(label[0] == "#" ? label.substring(1) : $.t(label)), item);
		desc = desc && subst(esc(desc[0] == "#" ? desc.substring(1) : $.t(desc)), item);

		if (extraLabel) {
			if (typeof extraLabel == "string")
				extraLabel = [extraLabel];
			if (extraLabel instanceof Array) {
				for (let extra of extraLabel) {
					if (typeof extra != "string" || !extra)
						continue;
					extra = extra[0] == "#" ? extra.substring(1) : $.t(extra);
					if (extra[0] == "<")
						extra = extra.substring(1);
					else if (label)
						label += concatDash;
					label += subst(esc(extra), item);
				}
			}
		}

		if (extraDesc) {
			if (typeof extraDesc == "string")
				extraDesc = [extraDesc];
			if (extraDesc instanceof Array) {
				for (let extra of extraDesc) {
					if (typeof extra != "string" || !extra)
						continue;
					extra = extra[0] == "#" ? extra.substring(1) : $.t(extra);
					if (extra[0] == "<")
						extra = extra.substring(1);
					else if (desc)
						desc += concat;
					desc += subst(esc(extra), item);
				}
			}
		}

		if (underground)
			label += concat + openBracket + esc($.t("misc.underground")) + closeBracket;

		if (after) {
			after = subst(esc($.t("misc.after")), item);
			if (desc)
				desc = concat + desc;
			desc = after + desc;
			special = true;
		}

		if (weakBefore) {
			weakBefore = subst(esc($.t("misc.weakBefore")), item);
			if (desc)
				desc = concat + desc;
			desc = weakBefore + desc;
			special = true;
		}

		if (before) {
			before = subst(esc($.t("misc.before")), item);
			if (desc)
				desc = concat + desc;
			desc = before + desc;
			special = true;
		}

		if (during) {
			during = subst(esc($.t("misc.during")), item);
			if (desc)
				desc = concat + desc;
			desc = during + desc;
			special = true;
		}

		if (rescuable) {
			let text        = esc($.t("pid.afterrescue"));
			let matchResult = text.match(/__[^_]*__/);
			let textHere    = "__?__";
			if (matchResult && matchResult.length == 1)
				textHere = matchResult[0].slice(2, -2);
			let textLink = '<a href="#' + mapInfo.maxZoom + "/" +
			               item.goesTo.coords[0] + "/" + item.goesTo.coords[1] +
			               '">' + textHere + "</a>";
			if (desc)
				desc = concat + desc;
			desc = text.replace(/__[^_]*__/, textLink) + desc;
		}

		if (rescueFrom && typeof rescueFrom == "string") {
			let foundPid = null
			if (data.pid instanceof Array) {
				for (let pid of data.pid) {
					if (!pid.id || pid.id != rescueFrom)
						continue;
					if (!isCoord(pid.coords))
						break;
					foundPid = pid;
				}
			}
			if (!foundPid && data.event instanceof Array) {
				for (let e of data.event) {
					if (!e.rescuable || !e.id || e.id != rescueFrom)
						continue;
					if (!isCoord(e.coords))
						break;
					foundPid = e;
				}
			}
			if (foundPid) {
				let text        = esc($.t("pid.rescue"));
				let matchResult = text.match(/__[^_]*__/);
				let textHere    = "__?__";
				if (matchResult && matchResult.length == 1)
					textHere = matchResult[0].slice(2, -2);
				let textLink = '<a href="#' + mapInfo.maxZoom + "/" +
				               foundPid.coords[0] + "/" + foundPid.coords[1] +
				               '">' + textHere + "</a>";
				if (desc)
					desc = concat + desc;
				desc = text.replace(/__[^_]*__/, textLink) + desc;
				if (!foundPid.goesTo || dataKey != "gwent")
					foundPid.goesTo = item;
				special = true;
			}
		}

		if (notInGame) {
			if (desc)
				desc += concat;
			desc += esc($.t("misc.notInGame"));
		}

		if (entrances) {
			if (typeof entrances == "string")
				entrances = [entrances];
			if (entrances instanceof Array) {
				let entranceCoords = [];
				for (let entrancesId of entrances) {
					function checkEntrance(entrance) {
						if (!entrance.groupId || entrance.groupId != entrancesId)
							return;
						let eCoords = entrance.coords;
						if (!eCoords || eCoords.length == 0)
							return;
						if (!(eCoords[0] instanceof Array))
							eCoords = [eCoords];
						for (let eCoord of eCoords) {
							if (!isCoord(eCoord))
								continue;
							entranceCoords.push(eCoord);
						}
					}
					if (data.entrance instanceof Array)
						for (let entrance of data.entrance)
							checkEntrance(entrance);
					if (data.monsterden instanceof Array)
						for (let entrance of data.monsterden)
							checkEntrance(entrance);
				}
				let textHere       = esc($.t("entrance.link.here"));
				let textConcat     = esc($.t("entrance.link.concat"));
				let textConcatLast = esc($.t("entrance.link.concatLast")) || textConcat;
				let textLinks = "";
				for (let i = 0; i < entranceCoords.length; i++) {
					if (i != 0 && i == entranceCoords.length - 1)
						textLinks += textConcatLast;
					else if (i != 0)
						textLinks += textConcat;
					textLinks += '<a href="#' + mapInfo.maxZoom + "/" +
					             entranceCoords[i][0] + "/" + entranceCoords[i][1] +
					             '">' + textHere + "</a>";
				}
				if (textLinks) {
					let text = esc($.t("entrance.link.single"));
					if (entranceCoords.length != 1)
						text = esc($.t("entrance.link.multiple")) || text;
					if (desc)
						desc += concat;
					desc += text.replace(/__list__/, textLinks);
				}
			}
		}

		if (item.hos && dataKey == "sidequest")
			icon += "_hos";
		else if (item.baw && dataKey == "sidequest")
			icon += "_baw";
		if (item.hos && (dataKey == "contract" || dataKey == "treasurehunt"))
			icon += "_hos";
		if (item.guarded && dataKey == "hidden")
			icon += "_guarded";
		if (underwater)
			icon += "_uw";
		if (underground)
			icon += "_ug";

		if (images) {
			if (typeof images == "string")
				images = [images];
			if (images instanceof Array) {
				for (let image of images) {
					if (typeof image != "string" || !image)
						continue;
					let link = '[&nbsp;<a target="_blank" href="' + window.topdir + "/files/images/" + image + '.jpg">' +
					           esc($.t("misc.imageLink")).replace(/ /g, "&nbsp;") + "</a>&nbsp;]";
					if (desc)
						desc += concat;
					desc += link;
				}
			}
		}

		if (typeof item.special == "boolean")
			special = item.special;
		if (special)
			label += "*";

		for (let coord of coords) {
			if (!isCoord(coord)) {
				console.error("An element of " + mapInfo.name + "->" + dataKey + " does have an invalid coordinate: ", item, coord);
				continue;
			}

			if (f(coord, label, desc, icon) === false)
				return;
		}
	}
}
