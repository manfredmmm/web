(function () {
    "use strict";

    var app = angular.module('mmmApp');

    app.factory('Pages', function () {
        var pages = [{
              name: 'home',
              binary: '00',
              title: 'Home',
              style: 'white'
            }, {
              name: 'me',
              binary: '01',
              title: 'Biography',
              style: 'black'
            }, {
              name: 'can',
              binary: '10',
              title: 'Can I use',
              style: 'black'
            }, {
              name: 'contact',
              binary: '11',
              title: "Let's talk",
              style: 'white'
        }];

        return {
            all: function () {
                return pages;
            }
        };
    });
}());
