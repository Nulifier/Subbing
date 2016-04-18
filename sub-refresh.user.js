// ==UserScript==
// @name         Sub List Refresh
// @namespace    http://tampermonkey.net/
// @version      0.1
// @updateURL    https://github.com/Nulifier/Subbing
// @match        https://epsb.eschoolsolutions.com/substituteAvailableJobAction.do
// @match        https://epsb.eschoolsolutions.com/substituteAvailableJobInitAction.do
// @grant        none
// @require      https://cdnjs.cloudflare.com/ajax/libs/moment.js/2.12.0/moment.min.js
// ==/UserScript==

(function() {
    'use strict';

    window.setTimeout(function() {
        $('#startDate').val(moment().format('MM/DD/YYYY'));
        $('#endDate').val('06/30/2016');
        disableSearch();
        blockUIForSearch("jobSearchToken", "jobSearchCookie");
        document.forms[0].submit();
    }, 15.5 * 1000);
})();
