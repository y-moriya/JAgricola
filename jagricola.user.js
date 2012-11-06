// ==UserScript==
// @name        JAgricola
// @namespace   JAgricola
// @description Agricola sites translates to Japanese.
// @include     http://www.boiteajeux.net/jeux/agr/*
// @version     1
// @require     http://code.jquery.com/jquery-1.8.2.js
// @grant       hoge
// ==/UserScript==

// TODO: 手札を表示する箱を用意して日本語で表示。
// TODO: 各カードクリック？で詳細表示。
// TODO: メッセージ洗い出して日本語化

(function() {
	document.body.innerHTML = document.body.innerHTML.replace("Choose an action in the first tab on the left !", "左から選んでね。");
	$("#dvPanneauInfo").after('<div id="jagmsg" />');
	$('td[title*="11."]').click(function() {
	    $("#jagmsg").text("畑だおっお");
	});
	
})();