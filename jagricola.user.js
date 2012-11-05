// ==UserScript==
// @name        JAgricola
// @namespace   JAgricola
// @description Agricola sites translates to Japanese.
// @include     http://www.boiteajeux.net/jeux/agr/*
// @version     1
// @require     http://ajax.googleapis.com/ajax/libs/jquery/1.7/jquery.min.js
// @grant       hoge
// ==/UserScript==

(function(){
	document.body.innerHTML = document.body.innerHTML.replace("Choose an action in the first tab on the left !", "左から選んでね。");
	$('td[title*="11."]').click(function() {
	    alert("畑だおっお");
	});
})();