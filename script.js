// ==UserScript==
// @name         YouTube Cookies Popup Blocker
// @namespace    https://github.com/Peeeaaayus
// @version      0.1
// @description  Blocks the YouTube cookies popup.
// @author       PIjus
// @match        https://*.youtube.com/*
// @grant        none
// ==/UserScript==
var elem = document.getElementById("dialog");
  elem.parentNode.removeChild(elem);


