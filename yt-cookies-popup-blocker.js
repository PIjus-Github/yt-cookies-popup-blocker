// ==UserScript==
// @name         YouTube Cookies Popup Blocker
// @namespace    https://github.com/Peeyos1
// @version      1.0
// @description  Blocks the YouTube cookies popup.
// @author       PIjus
// @match        https://*.youtube.com/*
// @grant        none
// ==/UserScript==
var elem = document.getElementById("dialog");
  elem.parentNode.removeChild(elem);


