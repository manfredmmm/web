(function () {
    "use strict";

    var app = angular.module('mmmApp');

    app.factory('Families', function () {
        var families = [{
                name: "html",
                skills: [{
                    name: "html5",
                    level: 8
                }, {
                    name: "pug",
                    level: 10
                }, {
                    name: "haml",
                    level: 8
                }, {
                    name: "slim",
                    level: 10
                }, {
                    name: "seo on-page",
                    level: 8
                }, {
                    name: "handlebars",
                    level: 8
                }]
            }, {
                name: "css",
                skills: [{
                    name: "postcss",
                    level: 9
                }, {
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
                    level: 9
                }, {
                    name: "responsive layouts",
                    level: 9
                }]
            }, {
                name: "javascript",
                skills: [{
                    name: "vanilla",
                    level: 7
                }, {
                    name: "ES6",
                    level: 7
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
                    level: 7
                }, {
                    name: "threejs",
                    level: 6
                }, {
                    name: "GSAP",
                    level: 8
                }]
            }, {
                name: "javascript frameworks",
                skills: [{
                    name: "angularjs",
                    level: 7
                }, {
                    name: "backbonejs",
                    level: 6
                }, {
                    name: "react",
                    level: 7
                }]
            }, {
                name: "js tasks runner",
                skills: [{
                    name: "gulp",
                    level: 8
                }, {
                    name: "webpack",
                    level: 9
                }, {
                    name: "grunt",
                    level: 6
                }]
            }, {
                name: "fe frameworks",
                skills: [{
                    name: "twitter bootstrap",
                    level: 8
                }, {
                    name: "foundation",
                    level: 9
                }]
            }, {
                name: "js package manager",
                skills: [{
                    name: "yarn",
                    level: 9
                },  {
                    name: "npm",
                    level: 9
                }, {
                    name: "bower",
                    level: 8
                }]
            }, {
                name: "ruby frameworks",
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
                    name: "ux/ui",
                    level: 6
                }, {
                    name: "web design",
                    level: 6
                }]
            }, {
                name: "design tools",
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
                    level: 8
                }, {
                    name: "mercurial",
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
