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
	"monster",
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

function tLink(key, noLink) {
	let res  = esc($.t(key + ".label")) || key;
	let link = esc($.t(key + ".link"), true);
	if (noLink || link == key + ".link")
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
function subst(text, item, noLinks, depth = 3, coordLinkToId, ids) {
	if (!depth || depth <= 0) {
		console.error("subst() recursion too deep.");
		return;
	}
	return text.replace(/__([^_]+(_?[^_]+)*)*__/g, function(match) {
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
								res += subst(esc(arrMatch[i].slice(1)), item, noLinks, depth - 1);
							else if (prop)
								res += subst(esc($.t(applyPrefix(arrMatch[i] + prop, prefix))), item, noLinks, depth - 1);
							else
								res += tLink(applyPrefix(arrMatch[i], prefix), noLinks);
						}
						return res;
					}
				}
			}
		} else if (match.slice(0, 6) == "?this.") {
			let colon = match.indexOf(":");
			if (!item[match.slice(6, colon)])
				return "";
			return subst(match.slice(colon + 1).replace(/\\_/g, "_"), item, noLinks, depth - 1);
		} else if (match.slice(0, 7) == "?!this.") {
			let colon = match.indexOf(":");
			if (item[match.slice(7, colon)])
				return "";
			return subst(match.slice(colon + 1).replace(/\\_/g, "_"), item, noLinks, depth - 1);
		} else if (match.slice(0, 6) == "*this." && coordLinkToId && ids) {
			let concat = undefined;
			let arrMatch = match.match(/^(.*)\[(.*)\]$/);
			if (arrMatch) {
				concat = esc(arrMatch[2]);
				arrMatch = item[arrMatch[1].slice(6)];
				if (typeof arrMatch == "string")
					arrMatch = [arrMatch];
			} else if (item[match.slice(6)]) {
				arrMatch = [item[match.slice(6)]];
			}
			if (arrMatch instanceof Array) {
				let res = coordLinkToId(arrMatch, null, ids, noLinks, false, concat);
				return res || match;
			}
		}
		if (match[0] == "#")
			return subst(esc(match.slice(1)), item, noLinks, depth - 1);
		if (prop)
			return subst(esc($.t(match + prop)), item, noLinks, depth - 1);
		return tLink(match, noLinks);
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

function isPortal(item, dataKey) {
	return dataKey == "entrance" && item.portal;
}

function isUnderwater(item, dataKey) {
	return (dataKey == "treasure" || dataKey == "entrance" || dataKey == "monster") && item.underwater;
}

function prescreenMapData(mapInfo, data) {
	let ids  = {};
	let gids = {};
	let rids = {};
	data.ids  = ids;
	data.gids = gids;
	data.rids = rids;

	for (let dataKey of markerGroupNames) {
		let items = [];

		if (dataKey in data)
			items = data[dataKey];

		if (!(items instanceof Array)) {
			console.error(mapInfo.name + "->" + dataKey + " is not an array: ", items);
			items = [];
		}

		data[dataKey] = items;

		for (let item of items) {
			if (!(item instanceof Object)) {
				console.error("An element of " + mapInfo.name + "->" + dataKey + " is not an object: ", item);
				continue;
			}

			let coords = item.coords;
			if (!(coords instanceof Array) || coords.length == 0) {
				console.error("An element of " + mapInfo.name + "->" + dataKey + " does not have valid coordinates: ", item);
				item.coords = false;
				continue;
			}
			if (!(coords[0] instanceof Array))
				coords = [coords];
			let newCoords = [];
			for (let coord of coords) {
				if (!isCoord(coord)) {
					console.error("An element of " + mapInfo.name + "->" + dataKey + " does have an invalid coordinate: ", item, coord);
					continue;
				}
				newCoords.push(coord);
			}
			coords = newCoords;
			if (coords.length == 0) {
				item.coords = false;
				continue;
			}
			item.coords = coords;

			item.dataKey = dataKey;

			if (item.id && typeof item.id == "string") {
				if (!ids[item.id])
					ids[item.id] = [];
				ids[item.id].push(item);
			}

			if (item.groupId && typeof item.groupId == "string") {
				if (!gids[item.groupId])
					gids[item.groupId] = [];
				gids[item.groupId].push(item);
			}

			if (isPerson(dataKey) && item.rescueFrom && typeof item.rescueFrom == "string") {
				if (!rids[item.rescueFrom])
					rids[item.rescueFrom] = [];
				rids[item.rescueFrom].push(item);
			}
		}
	}
}

function substMapData(mapInfo, data, dataKey, f, r, noLinks) {
	const concat       = esc($.t("misc.concat"));
	const concatDash   = esc($.t("misc.concatDash"));
	const openBracket  = esc($.t("misc.openBracket"));
	const closeBracket = esc($.t("misc.closeBracket"));

	function coordListFromIds(id, ids, filter) {
		if (!(id instanceof Array))
			id = [id];
		let res = [];
		for (let i = 0; i < id.length; i++) {
			if (!ids[id[i]])
				continue;
			for (let item of ids[id[i]]) {
				if (filter && !filter(item, id))
					continue;
				for (let coord of item.coords)
					res.push({ coord: coord, item: item });
			}
		}
		return res;
	}

	function genSubKey(item, dataKey) {
		let subKey = "";
		if (isPortal(item, dataKey))
			subKey = ".portal";
		if (dataKey == "hidden" && item.guarded)
			subKey = ".guarded";
		if (isUnderwater(item, dataKey))
			subKey += ".underwater";
		return subKey;
	}

	function genLabel(item, dataKey, subKey, noLinks) {
		let label = item.label || "";

		if (typeof label != "string" || !label) {
			label = dataKey + subKey + ".label";
			if (dataKey == "hollow" && item.stump)
				label = "#" + (esc($.t(dataKey + ".stump.label")) || esc($.t(label)));
			else if (dataKey == "hollow" && item.log)
				label = "#" + (esc($.t(dataKey + ".log.label")) || esc($.t(label)));
		}

		label = subst(esc(label[0] == "#" ? label.substring(1) : $.t(label)), item, noLinks);

		if (item.extraLabel) {
			let extraLabel = item.extraLabel;
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
					label += subst(esc(extra), item, noLinks);
				}
			}
		}

		return label;
	}

	function coordLinkToId(id, text, ids, noLinks, filter, concat, concatLast) {
		let items = coordListFromIds(id, ids, filter || function(item, id) {
			return item.dataKey != "gwent" || concat !== undefined || ids[id].length == 1;
		});
		if (items.length < 1)
			return false;
		if (items.length > 1 && concat === undefined) {
			console.error("ID matches mutliple coords, but only one is expected:", id, items);
			items = [items[0]];
		}
		let links = ""
		for (let i = 0; i < items.length; i++) {
			if (i != 0) {
				if (concatLast === undefined || i < items.length - 1)
					links += concat;
				else
					links += concatLast;
			}
			let ltext = text;
			if (ltext === null) {
				let subKey = genSubKey(items[i].item, items[i].item.dataKey);
				ltext = genLabel(items[i].item, items[i].item.dataKey, subKey, true);
			}
			if (noLinks)
				links += ltext;
			else
				links += '<a href="#' + mapInfo.maxZoom + "/" +
				         items[i].coord[0] + "/" + items[i].coord[1] +
				         '">' + ltext + "</a>";
		}
		return links;
	}

	for (let item of data[dataKey]) {
		if (!(item instanceof Object))
			continue;

		let coords = item.coords;
		if (!coords)
			continue;

		let id          = (item.id && typeof item.id == "string") ? item.id : null;
		let icon        = dataKey;
		let desc        = item.desc;
		let extraDesc   = item.extraDesc;
		let notInGame   = item.notInGame;
		let unreachable = item.unreachable;
		let portal      = isPortal(item, dataKey);
		let underwater  = isUnderwater(item, dataKey);
		let after       = item.after;
		let before      = item.before;
		let weakBefore  = item.weakBefore;
		let during      = item.during;
		let cleared     = item.cleared;
		let uncleared   = item.uncleared;
		let rescueFrom  = isPerson(dataKey) && item.rescueFrom;
		let rescuable   = (dataKey == "pid" || (dataKey == "event" && item.rescuable)) && id;
		let special     = false;
		let underground = dataKey != "stash" && item.underground;
		let entrances   = (data.entrance.length || data.monsterden.length) && item.entrances;
		let images      = item.images;

		let subKey = genSubKey(item, dataKey);
		let label = genLabel(item, dataKey, subKey, noLinks);

		if (typeof desc != "string" || (desc !== "" && !desc)) {
			desc = dataKey + subKey + ".desc";
			if (dataKey == "hollow" && item.stump)
				desc = "#" + (esc($.t(dataKey + ".stump.desc")) || esc($.t(desc)));
			else if (dataKey == "hollow" && item.log)
				desc = "#" + (esc($.t(dataKey + ".log.desc")) || esc($.t(desc)));
		}

		desc = desc && subst(esc(desc[0] == "#" ? desc.substring(1) : $.t(desc)), item, noLinks);

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
					desc += subst(esc(extra), item, noLinks);
				}
			}
		}

		if (underground)
			label += concat + openBracket + esc($.t("misc.underground")) + closeBracket;

		if (unreachable)
			label += concat + openBracket + esc($.t("misc.unreachable")) + closeBracket;

		if (cleared) {
			cleared = subst(esc($.t("misc.cleared")), item, noLinks, undefined, coordLinkToId, data.ids);
			if (desc)
				desc = concat + desc;
			desc = cleared + desc;
			special = true;
		}

		if (uncleared) {
			uncleared = subst(esc($.t("misc.uncleared")), item, noLinks, undefined, coordLinkToId, data.ids);
			if (desc)
				desc = concat + desc;
			desc = uncleared + desc;
			special = true;
		}

		if (after) {
			after = subst(esc($.t("misc.after")), item, noLinks);
			if (desc)
				desc = concat + desc;
			desc = after + desc;
			special = true;
		}

		if (weakBefore) {
			weakBefore = subst(esc($.t("misc.weakBefore")), item, noLinks);
			if (desc)
				desc = concat + desc;
			desc = weakBefore + desc;
			special = true;
		}

		if (before) {
			before = subst(esc($.t("misc.before")), item, noLinks);
			if (desc)
				desc = concat + desc;
			desc = before + desc;
			special = true;
		}

		if (during) {
			during = subst(esc($.t("misc.during")), item, noLinks);
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
			let textLink = coordLinkToId(id, textHere, data.rids, noLinks);
			if (textLink) {
				if (desc)
					desc = concat + desc;
				desc = text.replace(/__[^_]*__/, textLink) + desc;
			}
		}

		if (rescueFrom && typeof rescueFrom == "string") {
			let text        = esc($.t("pid.rescue"));
			let matchResult = text.match(/__[^_]*__/);
			let textHere    = "__?__";
			if (matchResult && matchResult.length == 1)
				textHere = matchResult[0].slice(2, -2);
			let textLink = coordLinkToId(rescueFrom, textHere, data.ids, noLinks);
			if (textLink) {
				if (desc)
					desc = concat + desc;
				desc = text.replace(/__[^_]*__/, textLink) + desc;
				special = true;
			}
		}

		if (item.liberate) {
			let lib = "";
			if (item.liberate === true)
				lib = subst(esc($.t("misc.liberate")), item, noLinks);
			else
				lib = subst(esc($.t("misc.liberateThis")), item, noLinks, undefined, coordLinkToId, data.ids);
			if (desc && lib)
				desc += concat;
			desc += lib;
			special = true;
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
				let textHere       = esc($.t("entrance.link.here"));
				let textConcat     = esc($.t("entrance.link.concat"));
				let textConcatLast = esc($.t("entrance.link.concatLast")) || textConcat;
				let textLinks = coordLinkToId(entrances, textHere, data.gids, noLinks, function(item) {
					return item.dataKey == "entrance" || item.dataKey == "monsterden";
				}, textConcat, textConcatLast);
				if (textLinks) {
					let text = esc($.t("entrance.link.desc"));
					if (desc)
						desc += concat;
					desc += text.replace(/__list__/, textLinks);
				}
			}
		}

		if ((dataKey == "entrance" || dataKey == "monsterden") && item.goesToInterior) {
			let interior = item.goesToInterior;
			let floorId  = item.goesToFloorId;
			let linkText = esc($.t("misc.floorLink")).replace(/ /g, "&nbsp;");
			let link = '[&nbsp;<a href="javascript:selectFloor(' + interior.id + ", " + floorId + ', true);">' +
			           linkText + "</a>&nbsp;]";
			if (noLinks)
				link = linkText;
			if (desc)
				desc += concat;
			desc += link;
		}

		let routeObjs = [];
		if (item.routes instanceof Array) {
			let links = [];

			for (let route of item.routes) {
				if (!(route instanceof Object))
					continue;
				if (typeof route.name != "string")
					continue;
				if (!(route.coords instanceof Array) || route.coords.length == 0)
					continue;
				let obj = {
					name:   esc($.t(route.name)),
					coords: route.coords,
					fuse:   dataKey == "alchemy" ||
					        dataKey == "herbalist" ||
					        dataKey == "shopkeeper" ||
					        (dataKey == "entrance" && portal),
					dashed: dataKey == "entrance" && portal
				};
				obj.id = r ? r(obj) : -1;
				routeObjs.push(obj);
				let link = '<a href="javascript:selectRoute(' + obj.id + ');">' + obj.name + '</a>';
				if (noLinks)
					link = obj.name;
				links.push(link);
			}

			if (links.length != 0) {
				let routeDesc = esc($.t("misc.route"));
				routeDesc = routeDesc.replace(/__routes\[([^_]+_?)*[^_]*\]__/, function(match) {
					let routesConcat = match.slice(9, -3);
					let res = "";
					for (let i = 0; i < links.length; i++) {
						if (i != 0)
							res += routesConcat;
						res += links[i];
					}
					return res;
				});
				if (desc)
					desc += concat;
				desc += routeDesc;
			}
		}

		if (item.hos && dataKey == "sidequest")
			icon += "_hos";
		else if (item.baw && dataKey == "sidequest")
			icon += "_baw";
		if (item.race && dataKey == "sidequest")
			icon = "race";
		if (dataKey == "treasurehunt" && typeof item.name == "string" && item.name.startsWith("scav_"))
			icon += "_scav";
		else if (item.hos && (dataKey == "contract" || dataKey == "treasurehunt"))
			icon += "_hos";
		if (item.guarded && dataKey == "hidden")
			icon += "_guarded";
		if (item.lantern && dataKey == "poi")
			icon = "lantern";
		if (item.lamp && dataKey == "poi")
			icon = "lamp";
		if (item.runewright && (dataKey == "armorer" || dataKey == "blacksmith"))
			icon = "runewright";
		if (item.master && (dataKey == "armorer" || dataKey == "blacksmith"))
			icon = "master";
		if (item.dyeshop && dataKey == "shopkeeper")
			icon = "dyeshop";
		if (underwater)
			icon += "_uw";
		if (portal)
			icon = "portal";
		if (underground)
			icon += "_ug";

		if (images) {
			if (typeof images == "string")
				images = [images];
			if (images instanceof Array) {
				let linkText = esc($.t("misc.imageLink")).replace(/ /g, "&nbsp;");
				for (let image of images) {
					if (typeof image != "string" || !image)
						continue;
					let link = '[&nbsp;<a target="_blank" href="' + window.topdir + "/files/images/" + image + '.jpg">' +
					           linkText + "</a>&nbsp;]";
					if (noLinks)
						link = linkText;
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
			if (f(coord, id, label, desc, icon, routeObjs) === false)
				return;
		}
	}
}

function substInteriors(mapInfo, data, dataKey, f, noLinks) {
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

		let superBounds = false;
		function expandSuperBounds(bounds) {
			let normalBounds = [[Math.min(bounds[0][0], bounds[1][0]), Math.min(bounds[0][1], bounds[1][1])],
			                    [Math.max(bounds[0][0], bounds[1][0]), Math.max(bounds[0][1], bounds[1][1])]];
			if (!superBounds) {
				superBounds = normalBounds;
				return;
			}
			superBounds = [[Math.min(normalBounds[0][0], superBounds[0][0]), Math.min(normalBounds[0][1], superBounds[0][1])],
			               [Math.max(normalBounds[1][0], superBounds[1][0]), Math.max(normalBounds[1][1], superBounds[1][1])]];
		}

		let label      = item.label || "";
		let extraLabel = item.extraLabel;

		if (typeof label != "string" || !label)
			label = dataKey + ".label";
		label = subst(esc(label[0] == "#" ? label.substring(1) : $.t(label)), item, noLinks);

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
					label += subst(esc(extra), item, noLinks);
				}
			}
		}

		let ifloors = item.floors;
		if (!ifloors || !(ifloors instanceof Array) || ifloors.length == 0)
			ifloors = [item];
		else if (item.entrances || item.images)
			console.error("An element of " + mapInfo.name + "->" + dataKey + " has both, floor and image definitions: ", item);

		let foundEntrance = false;
		let floors = [];
		let interior = { label: label, id: -1, floors: floors };
		for (floor of ifloors) {
			let iimages = floor.images;
			if (!(iimages instanceof Array))
				iimages = [iimages];
			let images = [];
			for (image of iimages) {
				if (!(image instanceof Object))
					continue;
				if (!(image.bounds instanceof Array) || image.bounds.length != 2)
					continue;
				if (!isCoord(image.bounds[0]) || !isCoord(image.bounds[1]))
					continue;
				if (!image.file || typeof image.file != "string")
					continue;
				images.push({ bounds: image.bounds, file: image.file });
				expandSuperBounds(image.bounds);
			}

			if (images.length == 0) {
				console.error("An element of " + mapInfo.name + "->" + dataKey + " has a floor without images: ", item);
				continue;
			}

			let entrances = floor.entrances;
			if (typeof entrances == "string")
				entrances = [entrances];
			if (entrances instanceof Array) {
				for (let entrancesId of entrances) {
					function checkEntrance(entrance) {
						if (!entrance.groupId || entrance.groupId != entrancesId)
							return;
						foundEntrance = true;
						entrance.goesToInterior = interior;
						entrance.goesToFloorId = floors.length;
					}
					if (data.entrance instanceof Array)
						for (let entrance of data.entrance)
							checkEntrance(entrance);
					if (data.monsterden instanceof Array)
						for (let entrance of data.monsterden)
							checkEntrance(entrance);
				}
			}

			let floorLabel = "";
			if (item !== floor) {
				floorLabel          = floor.label || "";
				let extraFloorLabel = floor.extraLabel;

				if (typeof floorLabel != "string" || !floorLabel)
					floorLabel = "";
				floorLabel = floorLabel && subst(esc(floorLabel[0] == "#" ? floorLabel.substring(1) : $.t(floorLabel)), floor, noLinks);

				if (extraFloorLabel) {
					if (typeof extraFloorLabel == "string")
						extraFloorLabel = [extraFloorLabel];
					if (extraFloorLabel instanceof Array) {
						for (let extra of extraFloorLabel) {
							if (typeof extra != "string" || !extra)
								continue;
							extra = extra[0] == "#" ? extra.substring(1) : $.t(extra);
							if (extra[0] == "<")
								extra = extra.substring(1);
							else if (label)
								floorLabel += concatDash;
							floorLabel += subst(esc(extra), item, noLinks);
						}
					}
				}
			}

			floors.push({ label: floorLabel, images: images });
		}

		interior.bounds = superBounds;
		interior.coord = [superBounds[0][0], (superBounds[0][1] + superBounds[1][1]) / 2];

		interior.id = f(interior);
		if (interior.id === false) {
			interior.id = -1;
			return;
		}
	}
}
