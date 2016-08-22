// ==UserScript==
// @name         Sub List Refresh
// @namespace    http://tampermonkey.net/
// @version      0.5
// @updateURL    https://github.com/Nulifier/Subbing/raw/master/sub-refresh.user.js
// @match        https://epsb.eschoolsolutions.com/substituteAvailableJobAction.do
// @match        https://epsb.eschoolsolutions.com/substituteAvailableJobInitAction.do
// @grant        none
// @require      https://cdnjs.cloudflare.com/ajax/libs/moment.js/2.12.0/moment.min.js
// ==/UserScript==

(function() {
    'use strict';
    
    // Check if there is a job available on the page and click it
    var jobs = $("a:contains('Details')");
    if (jobs.length > 0) {
        // Redirect to page
        window.location.replace(jobs.attr('href'));
    }

    // Refresh the page after 15ish seconds
    window.setTimeout(function() {
        // Set the date to be from today to June 30th, 2016
        /// @todo Change this to be 30 days from today.
        $('#startDate').val(moment().format('MM/DD/YYYY'));
        $('#endDate').val('06/30/2017');
        
        // Search, these are the same steps the page takes
        disableSearch();
        blockUIForSearch("jobSearchToken", "jobSearchCookie");
        document.forms[0].submit();
    }, 15.50 * 1000);
})();
