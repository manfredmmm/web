(function () {
    "use strict";

    var app = angular.module('mmmApp');

    app.factory('Pages', function () {
        var pages = [{
              name: 'home',
              url: '',
              binary: '00',
              title: 'Home',
              style: 'white'
            }, {
              name: 'me',
              url: 'biography',
              binary: '01',
              title: 'Biography',
              style: 'black'
            }, {
              name: 'can',
              url: 'can-i-use',
              binary: '10',
              title: 'Can I use',
              style: 'black'
            }, {
              name: 'contact',
              url: 'contact',
              binary: '11',
              title: "Let's talk",
              style: 'white'
        }];

        return {
            all: function () {
                return pages;
            },
            getCurrentPageId: function (url) {
                var i, l;

                for (i = 0, l = pages.length; i < l; i += 1) {
                    if ('/' + pages[i].url === url) {
                        return i;
                    }
                }
                return 0;
            }
        };
    });
}());
