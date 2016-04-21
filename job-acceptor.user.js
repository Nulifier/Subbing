// ==UserScript==
// @name         Job Accepter
// @namespace    http://tampermonkey.net/
// @version      0.3
// @updateURL    https://github.com/Nulifier/Subbing/raw/master/job-acceptor.user.js
// @match        https://epsb.eschoolsolutions.com/substituteAvailableJobDetailInitAction.do*
// @match        https://epsb.eschoolsolutions.com/substituteAvailableJobDetailAction.do*
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    var acceptBtn = $('input[value="Accept Job"]');

    if (acceptBtn.length > 0) {
        acceptBtn.click();
    }
    else {
        // There are no jobs so we wait 5 seconds then return
        window.setTimeout(function() {
            // Go back to the main page
            window.location.replace('https://epsb.eschoolsolutions.com/substituteAvailableJobInitAction.do');
        }, 5 * 1000);
    }
})();
