define([
    '/javascripts/add-event-listener.js',
    '/javascripts/trigger-event.js'
], function() {

    'use strict';

    var button = document.querySelector('button');

    button.addEventListener('click', function() {
        alert("I've been clicked");
    }, false);

    button.triggerEvent('click');

});