// ==UserScript==
// @name           JAgricola
// @author         euro_s
// @description    Agricola sites translates to Japanese.
// @version        0.1
// @match          http://www.boiteajeux.net/jeux/agr/*
// ==/UserScript==

(function() {
	document.body.innerHTML = document.body.innerHTML.replace("Choose an action in the first tab on the left !", "左から選んでね。");
})();