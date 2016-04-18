// ==UserScript==
// @name         Job Accepter
// @namespace    http://tampermonkey.net/
// @version      0.2
// @updateURL    https://github.com/Nulifier/Subbing/raw/master/job-acceptor.user.js
// @match        https://epsb.eschoolsolutions.com/substituteAvailableJobDetailInitAction.do*
// @match        https://epsb.eschoolsolutions.com/substituteAvailableJobDetailAction.do*
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    // If there is an accept job button, press it!
    $('input[value="Accept Job"]').click();
    
    // Check if there is a Return to List button
    var returnToList = $('input[value="Return To List"]');
    if (returnToList.length > 0) {
        // There is so we wait 5 seconds then return
        window.setTimeout(function() {
            // Go back to the main page
            window.location.replace('https://epsb.eschoolsolutions.com/substituteAvailableJobInitAction.do');
        }, 5 * 1000);
    }
})();
