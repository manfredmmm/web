(function () {
    "use strict";

    var app = angular.module('mApp', []);

    app.controller('sectionsController', ['$scope', function ($scope) {
        $scope.pages = [{
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
        $scope.currentPage = 0;
        $scope.currentPageStyle = $scope.pages[$scope.currentPage].style;

        var options = {
            horizontal: true,
            // Item based navigation
            itemNav: 'basic',
            // Scrolling
            scrollSource: $('ul.pages'),
            scrollBy: 1,
            // Dragging
            mouseDragging: true,
            touchDragging: true,
            // Navigation buttons
            prevPage: $('a.nav-previous'),
            nextPage: $('a.nav-next'),
            // Mixed options
            speed: 400,
            easing: 'swing',
            keyboardNavBy: 'pages'
        };

        var frame = $('.frame');
        var sly = new Sly(frame, options).init();

        sly.on('moveEnd', function (eventName) {
            $scope.$apply(function () {
                $scope.currentPage = sly.rel.activePage;
                $scope.currentPageStyle = $scope.pages[$scope.currentPage].style;
            });
        });

        if ($('svg#home-icon').length > 0) {
            new Vivus('home-icon', { type: 'oneByOne', duration: 75 });
        }

        $scope.isCurrentPage = function (page) {
            return $scope.pages[$scope.currentPage].name === page;
        };

        $scope.goTo = function (pageNum) {
            $scope.currentPage = pageNum;
        };
    }]);

    app.controller('sidebarController', ['$scope', function ($scope) {
        $scope.sidebarActive = false;

        $scope.toggleSidebar = function () {
            $scope.sidebarActive = !$scope.sidebarActive;
        };
    }]);

    app.controller('canIUseController', ['$scope', function ($scope) {
        $scope.currentSkill = false;
        $scope.families = [{
                name: "html",
                skills: [{
                    name: "html5",
                    level: 5
                }, {
                    name: "jade",
                    level: 10
                }, {
                    name: "haml",
                    level: 10
                }, {
                    name: "slim",
                    level: 10
                }, {
                    name: "seo friendly",
                    level: 10
                }]
            }, {
                name: "javascript",
                skills: [{
                    name: "native",
                    level: 6
                }, {
                    name: "angularjs",
                    level: 10
                }, {
                    name: "jquery",
                    level: 10
                }, {
                    name: "nodejs",
                    level: 10
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
                    level: 7
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
                    level: 10
                }, {
                    name: "sinatra",
                    level: 10
                }]
            }, {
                name: "web design",
                skills: [{
                    name: "responsive design",
                    level: 10
                }, {
                    name: "ux-ui",
                    level: 10
                }, {
                    name: "web design",
                    level: 10
                }]
            }, {
                name: "Front end frameworks",
                skills: [{
                    name: "twitter bootstrap",
                    level: 10
                }, {
                    name: "foundation",
                    level: 10
                }]
            }, {
                name: "Design tools",
                skills: [{
                    name: "illustrator",
                    level: 10
                }, {
                    name: "photoshop",
                    level: 10
                }]
            }, {
                name: "3D library",
                skills: [{
                    name: "three.js",
                    level: 10
                }]
            }, {
                name: "source control",
                skills: [{
                    name: "git",
                    level: 7
                }]
        }];

        $scope.showLevel = function (skill) {
            $scope.currentSkill = skill;
        };


        // TODO: falta fer que es dibuixin els ticks un per un
        $scope.$watch('currentSkill', function (newValue, oldValue) {
            console.log('current skill: ' + $scope.currentSkill.name);
            if (newValue !== false) {
                console.log('updateeeeeee');
                $('svg#tick-1 path').css('stroke', '#000');
                if (($('svg#tick-1').length) > 0) {
                    //new Vivus('tick-1', { type: 'oneByOne', duration: 75 });
                    $('svg#tick-1 path').css('stroke', '#ffffff');
                    console.log('tick-1');
                } else {
                    console.log('ola k ase nene');
                }
            }
        });

        $scope.isCompleted = function (level) {
            return $scope.currentSkill.level >= level;
        };

        $scope.goBack = function () {
            $scope.currentSkill = false;
            $scope.searchSkill = '';
        };
    }]);
})();
