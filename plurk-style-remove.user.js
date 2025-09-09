// ==UserScript==
// @name         Plurk佈景清除
// @namespace    http://tampermonkey.net/
// @version      2025-09-02
// @description  自動移除噗浪佈景，減輕瀏覽器的gpu負擔
// @author       YunlinTG
// @match        https://www.plurk.com/*
// @exclude      https://www.plurk.com/s/*
// @exclude      https://www.plurk.com/p/*
// @icon         data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==
// @grant        none
// ==/UserScript==

(function() {
    'use strict';
    document.getElementById('theme-custom').href = "";
})();
