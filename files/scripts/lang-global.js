if (null == localStorage.lang) {
	var e = window.navigator.userLanguage || window.navigator.language;
	e = e.substring(0, 2);
	localStorage.lang = e;
}

window.i18noptions = {
	debug: !1,
	getAsync: !0,
	ns: "general",
	lng: localStorage.lang,
	fallbackLng: "en",
	useDataAttrOptions: !0,
	lngWhitelist: ["en", "cz", "pl", "ru", "tr", "zh"],

	customLoad: function(lng, ns, options, callback) {
		loadScript(
			window.files_path + "/locales/" + lng + "/" + ns + ".js"
		).then(function() {
			callback(null, window.i18nData[lng][ns]);
		}).catch(function() {
			callback("failed loading translation", {});
		});
	}
};

var languageOptions = [{
	text: "English",
	value: "en",
	selected: "en" == localStorage.lang,
	description: " ",
	imageSrc: window.files_path + "/images/flags/en.png"
}, {
	text: "Čeština",
	value: "cz",
	selected: "cz" == localStorage.lang,
	description: " ",
	imageSrc: window.files_path + "/images/flags/cz.png"
}, {
	text: "Polski",
	value: "pl",
	selected: "pl" == localStorage.lang,
	description: " ",
	imageSrc: window.files_path + "/images/flags/pl.png"
}, {
	text: "Русский",
	value: "ru",
	selected: "ru" == localStorage.lang,
	description: " ",
	imageSrc: window.files_path + "/images/flags/ru.png"
}, {
	text: "T\xfcrk\xe7e",
	value: "tr",
	selected: "tr" == localStorage.lang,
	description: " ",
	imageSrc: window.files_path + "/images/flags/tr.png"
}, {
	text: "中國傳統的",
	value: "zh",
	selected: "zh" == localStorage.lang,
	description: " ",
	imageSrc: window.files_path + "/images/flags/zh.png"
}];

window.changeLang = function(e) {
	localStorage.lang != e && (localStorage.lang = e, window.location.reload())
};

$(function() {
	$("#lang-switcher").ddslick({
		data: languageOptions,
		width: 150,
		onSelected: function(e) {
			changeLang(e.selectedData.value)
		}
	})
});

var loadScript = function(url) {
	return new Promise(function(resolve, reject) {
		var script = document.createElement("script");
		script.src = url;
		script.onload = resolve;
		script.onerror = reject;
		document.head.appendChild(script);
	});
};
