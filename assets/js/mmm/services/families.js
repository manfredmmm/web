(function () {
    "use strict";

    var app = angular.module('mmmApp');

    app.factory('Families', function () {
        var families = [{
                name: "html",
                skills: [{
                    name: "html5",
                    level: 6
                }, {
                    name: "jade",
                    level: 10
                }, {
                    name: "haml",
                    level: 8
                }, {
                    name: "slim",
                    level: 10
                }, {
                    name: "seo friendly",
                    level: 7
                }]
            }, {
                name: "javascript",
                skills: [{
                    name: "native",
                    level: 6
                }, {
                    name: "angularjs",
                    level: 8
                }, {
                    name: "jquery",
                    level: 9
                }, {
                    name: "nodejs",
                    level: 5
                }, {
                    name: "AJAX",
                    level: 8
                }, {
                    name: "JSON",
                    level: 9
                }, {
                    name: "coffeescript",
                    level: 6
                }]
            }, {
                name: "css",
                skills: [{
                    name: "css3",
                    level: 9
                }, {
                    name: "sass/scss",
                    level: 9
                }, {
                    name: "stylus",
                    level: 9
                }, {
                    name: "less",
                    level: 9
                }, {
                    name: "animations",
                    level: 8
                }, {
                    name: "responsive layouts",
                    level: 8
                }]
            }, {
                name: "js tasks runner",
                skills: [{
                    name: "gulp",
                    level: 8
                }, {
                    name: "grunt",
                    level: 6
                }]
            }, {
                name: "js package manager",
                skills: [{
                    name: "npm",
                    level: 9
                }, {
                    name: "bower",
                    level: 8
                }]
            }, {
                name: "frameworks",
                skills: [{
                    name: "ruby on rails",
                    level: 6
                }, {
                    name: "sinatra",
                    level: 6
                }]
            }, {
                name: "web design",
                skills: [{
                    name: "responsive design",
                    level: 7
                }, {
                    name: "ux-ui",
                    level: 6
                }, {
                    name: "web design",
                    level: 6
                }]
            }, {
                name: "Front end frameworks",
                skills: [{
                    name: "twitter bootstrap",
                    level: 8
                }, {
                    name: "foundation",
                    level: 9
                }]
            }, {
                name: "Design tools",
                skills: [{
                    name: "illustrator",
                    level: 5
                }, {
                    name: "photoshop",
                    level: 7
                }]
            }, {
                name: "source control",
                skills: [{
                    name: "git",
                    level: 7
                }]
        }];

        return {
            all: function () {
                return families;
            }
        };
    });
}());
