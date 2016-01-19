(function () {
    "use strict";

    var app = angular.module('mmmApp');

    app.factory('Pages', function () {
        var pages = [{
              name: 'home',
              url: '',
              binary: '000',
              title: 'Home',
              style: 'white'
            }, {
              name: 'me',
              url: 'biography',
              binary: '001',
              title: 'Biography',
              style: 'black'
            }, {
              name: 'work',
              url: 'experience',
              binary: '010',
              title: 'Experience',
              style: 'black'
            }, {
              name: 'can',
              url: 'can-i-use',
              binary: '011',
              title: 'Can I use',
              style: 'black'
            }, {
              name: 'contact',
              url: 'contact-me',
              binary: '100',
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
