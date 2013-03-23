// ==UserScript==
// @name        BAJAlert
// @namespace   BAJAlert
// @description alert for your turn.
// @include     http://www.boiteajeux.net/index.php*
// @version     1.0
// @require     http://code.jquery.com/jquery-1.8.2.js
// @grant       hoge
// ==/UserScript==

(function() {

    // global variables
    var AUDIO_LIST;
    
    // constants
    var ajaxmsec = 10 * 1000;
    
    // main functions
    initialize();
    if (!document.body.innerHTML.match("clNbParties"))
    {
    	setAjaxAlert();
    }
    
    // sub functions
    function initialize() {
        AUDIO_LIST = {
            "bell": new Audio("http://heaven.gunjobiyori.com/up1157.wav")
        };
    }

    function setAjaxAlert() {
        $.get('index.php', { p : "encours" }, function(data) {
            if (data.match("clNbParties")) {
                AUDIO_LIST["bell"].play();
                alert("It's your turn!");
                
                location.href = location.href;
            }
        });
    
        setTimeout(setAjaxAlert, ajaxmsec);
    }
    
    function GM_getValue(key , defaultValue)
    {
      var value = window.localStorage.getItem(key);
      if (value != null) {
        return eval(value);
      } else {
        return defaultValue || null;
      }
    }
    
    function GM_setValue(key , value)
    {
      window.localStorage.setItem(key , value);
    }


})(); 