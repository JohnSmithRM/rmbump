// ==UserScript==
// @name         куклобампалка wip
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  попытка запилить автобампалку для куклотредов. работает только с куклоскриптом
// @author       JohnSmithRM
// @match        https://2ch.hk/*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=2ch.hk
// @downloadURL  https://github.com/JohnSmithRM/rmbump/raw/main/rmbump.user.js
// @updateURL    https://github.com/JohnSmithRM/rmbump/raw/main/rmbump.user.js
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    let target = document.getElementsByClassName('postform__raw_flex')[0];
    let button = document.createElement('buttom');
    button.classList.add('button', 'desktop');
    button.setAttribute('id', 'kuklobump');
    button.textContent = 'Куклобамп';
    button.style.margin = 'auto 0 auto auto';
    target.insertBefore(button, target.children[2]);

    let event = document.createEvent('SVGEvents');
    event.initEvent('click', true, true);

    let i = 0;

    button.addEventListener('click', function(e) {
        document.getElementsByClassName('de-file-btn-txt')[i].children[0].dispatchEvent(event);
        document.getElementsByClassName('de-file-txt-input')[i].value = 'https://2ch.hk/b/src/282617791/16764772244170.jpg';
        document.getElementsByClassName('de-file-txt-add')[i].click();
        i += 1;
        if (i >= 4) { i = 0; }
    });

})();
