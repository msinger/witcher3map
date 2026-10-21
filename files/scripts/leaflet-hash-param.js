// loosely based on https://github.com/sephcoster/leaflet-hash but heavily modified
// to remove underscore and fix a few issues
(function(window) {
	L.Hash = function(map) {
		this.onHashChange = L.Util.bind(this.onHashChange, this);

		if (map) {
			this.init(map);
		}
	};

	// Return the hash parameters from a string. [based on source](http://goo.gl/mebsOI)
	L.Hash.getHashParams = function() {
		var str = window.location.hash.split("/")[3];
		if (!str) return;
		var hashParams = {};
		var e,
			a = /\+/g,  // Regex for replacing addition symbol with a space
			r = /([^!&;=<>]+)(!?[=><]?)([^&;]*)/g,
			d = function (s) { return decodeURIComponent(s.replace(a, " ")); },
			q = str.replace(/^!\/?/, "");

		while (e = r.exec(q)) {
			hashParams[d(e[1])] = d(e[3]);
		}
		return hashParams;
	};

	L.Hash.removeParam = function(paramName) {
		var hashParams = this.getHashParams();
		var newHash, hashParamsTemp = {};
		for (var param in hashParams) {
			if (paramName != param) hashParamsTemp[param] = hashParams[param];
		}
		this.updateUrlHash(hashParamsTemp);
	};

	L.Hash.addParam = function(paramName, value){
		var hashParams = this.getHashParams();
		if (!hashParams) hashParams = {};
		hashParams[paramName] = value;
		this.updateUrlHash(hashParams);
	};

	L.Hash.getBaseHash = function() {
		var args = window.location.hash.split("/");
		if (args.length >= 3 && args.length <= 4) {
			return args.splice(0, 3).join("/");
		} else {
			return window.location.hash;
		}
	};

	L.Hash.updateUrlHash = function(hashParams) {
		var newHash, hashParamsTemp = [];
		// Loop through params, stringify them and push them into the temp array.
		for (var param in hashParams) {
			hashParamsTemp.push(param + "=" + hashParams[param]);
		}

		var baseHash = this.getBaseHash();

		newHash = baseHash + "/" + hashParamsTemp.join("&");
		window.location.hash = newHash;
	};

	L.Hash.parseHash = function(hash) {
		if(hash.indexOf("#") === 0)
			hash = hash.substr(1);
		var args = hash.split("/");
		if (args.length < 3 && args.length > 4)
			return false;
		var zoom = parseInt(args[0], 10),
		lat = parseFloat(args[1]),
		lng = parseFloat(args[2]);
		params = this.getHashParams();
		if (isNaN(zoom) || isNaN(lat) || isNaN(lng))
			return false;
		return {
			center: new L.LatLng(lat, lng),
			zoom:   zoom,
			params: params
		};
	};

	L.Hash.formatHash = function(map) {
		var center = map.getCenter();
		var zoom = map.getZoom();

		var baseHash = "#" + [zoom,
			center.lat.toFixed(3),
			center.lng.toFixed(3)
		].join("/");

		var hashParams = this.getHashParams();

		if (!hashParams)
			return baseHash;

		var hashParamsTemp = [];
		// Loop through params, stringify them and push them into the temp array.
		for (var param in hashParams) {
			hashParamsTemp.push(param + "=" + hashParams[param]);
		}
		return baseHash + "/" + hashParamsTemp.join("&");
	},

	L.Hash.prototype = {
		map: null,
		lastHash: null,

		getHashParams: L.Hash.getHashParams,
		addParam: L.Hash.addParam,
		removeParam: L.Hash.removeParam,
		getBaseHash: L.Hash.getBaseHash,
		updateUrlHash: L.Hash.updateUrlHash,
		parseHash: L.Hash.parseHash,
		formatHash: L.Hash.formatHash,

		init: function(map) {
			this.map = map;

			// reset the hash
			this.lastHash = null;
			this.onHashChange();

			if (!this.isListening) {
				this.startListening();
			}
		},

		removeFrom: function(map) {
			if (this.changeTimeout) {
				clearTimeout(this.changeTimeout);
			}

			if (this.isListening) {
				this.stopListening();
			}

			this.map = null;
		},

		moving: false,
		zooming: false,

		onMapMoveStart: function() {
			this.moving = true;
		},

		onMapMoveEnd: function() {
			this.moving = false;

			// Bail if we're moving the map ourselves due to a hash update,
			// or if the map is not yet loaded, or if a zoom animation is still running.
			if (this.updateFromHash || !this.map._loaded || this.zooming) {
				return false;
			}

			var hash = this.formatHash(this.map);
			if (this.lastHash != hash) {
				location.replace(hash);
				this.lastHash = hash;
			}
		},

		onMapZoomStart: function() {
			this.zooming = true;
		},

		onMapZoomEnd: function() {
			this.zooming = false;

			// Bail if we're zooming the map ourselves due to a hash update,
			// or if the map is not yet loaded, or if a move animation is still running.
			if (this.updateFromHash || !this.map._loaded || this.moving) {
				return false;
			}

			var hash = this.formatHash(this.map);
			if (this.lastHash != hash) {
				location.replace(hash);
				this.lastHash = hash;
			}
		},

		updateFromHash: false,
		update: function() {
			var hash = location.hash;
			if (hash === this.lastHash) {
				return;
			}
			var parsed = this.parseHash(hash);
			if (parsed) {
				if (!this.moving && !this.zooming) {
					this.updateFromHash = true;
					this.map.setView(parsed.center, parsed.zoom, { animate: false });
					this.updateFromHash = false;
				}
			} else {
				var hash = this.formatHash(this.map);
				location.replace(hash);
				this.lastHash = hash;
			}
		},

		// defer hash change updates every 200ms
		changeDefer: 200,
		changeTimeout: null,
		onHashChange: function() {
			// throttle calls to update() so that they only happen every
			// `changeDefer` ms
			if (!this.changeTimeout) {
				var that = this;
				this.changeTimeout = setTimeout(function() {
					that.update();
					that.changeTimeout = null;
				}, this.changeDefer);
			}
		},

		isListening: false,
		startListening: function() {
			this.map.on("movestart", this.onMapMoveStart, this);
			this.map.on("moveend", this.onMapMoveEnd, this);
			this.map.on("zoomstart", this.onMapZoomStart, this);
			this.map.on("zoomend", this.onMapZoomEnd, this);

			L.DomEvent.addListener(window, "hashchange", this.onHashChange);
			this.isListening = true;
		},

		stopListening: function() {
			this.map.off("movestart", this.onMapMoveStart, this);
			this.map.off("moveend", this.onMapMoveEnd, this);
			this.map.off("zoomstart", this.onMapZoomStart, this);
			this.map.off("zoomend", this.onMapZoomEnd, this);

			L.DomEvent.removeListener(window, "hashchange", this.onHashChange);
			this.isListening = false;
		}
	};
	L.hash = function(map) {
		return new L.Hash(map);
	};
	L.Map.prototype.addHash = function() {
		this._hash = L.hash(this);
	};
	L.Map.prototype.removeHash = function() {
		this._hash.removeFrom();
	};
})(window);
