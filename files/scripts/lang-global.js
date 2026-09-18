if (localStorage.lang == null) {
	var lang = window.navigator.userLanguage || window.navigator.language;
	lang = lang.substring(0,2);
	localStorage.lang = lang;
}

window.i18noptions = {
	debug: false,
	getAsync: true,
	ns: 'general',
	lng: localStorage.lang,
	fallbackLng: 'en',
	useDataAttrOptions: true,
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
	selected: localStorage.lang == "en",
	description: " ",
	imageSrc: window.files_path + "/images/flags/en.png"
}, {
	text: "Čeština",
	value: "cz",
	selected: localStorage.lang == "cz",
	description: " ",
	imageSrc: window.files_path + "/images/flags/cz.png"
}, {
	text: "Polski",
	value: "pl",
	selected: localStorage.lang == "pl",
	description: " ",
	imageSrc: window.files_path + "/images/flags/pl.png"
}, {
	text: "Русский",
	value: "ru",
	selected: localStorage.lang == "ru",
	description: " ",
	imageSrc: window.files_path + "/images/flags/ru.png"
}, {
	text: "T\xfcrk\xe7e",
	value: "tr",
	selected: localStorage.lang == "tr",
	description: " ",
	imageSrc: window.files_path + "/images/flags/tr.png"
}, {
	text: "中國傳統的",
	value: "zh",
	selected: localStorage.lang == "zh",
	description: " ",
	imageSrc: window.files_path + "/images/flags/zh.png"
}];

function changeLang(lang) {
	if(localStorage.lang != lang) {
		localStorage.lang = lang;
		window.location.reload();
	}
};

$(function() {
	$("#lang-switcher").ddslick({
		data: languageOptions,
		width: 150,
		onSelected: function(obj) {
			changeLang(obj.selectedData.value)
		}
	});
});

function loadScript(url) {
	return new Promise(function(resolve, reject) {
		var script = document.createElement("script");
		script.src = url;
		script.onload = resolve;
		script.onerror = reject;
		document.head.appendChild(script);
	});
};
