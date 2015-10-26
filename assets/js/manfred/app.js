(function () {
    "use strict";

    var app = angular.module('mApp', []);

    app.controller('sectionsController', ['$scope', function ($scope) {
        $scope.currentPage = 0;
        $scope.pages = [{
              name: 'home',
              binary: '000',
              title: 'home',
              style: 'white'
            }, {
              name: 'me',
              binary: '001',
              title: 'bio',
              style: 'black'
            }, {
              name: 'can',
              binary: '010',
              title: 'what can I do?',
              style: 'black'
            }, {
              name: 'contact',
              binary: '011',
              title: "let's talk",
              style: 'white'
            }, {
              name: 'social',
              binary: '100',
              title: 'social',
              style: 'white'
        }];

        $scope.isCurrentPage = function (page) {
            return $scope.pages[$scope.currentPage].name === page;
        };

        $scope.isCurrentPageBlack = function () {
            return $scope.pages[$scope.currentPage].black === 'true';
        };

        $scope.next = function () {
            $scope.currentPage += 1;
        };

        $scope.previous = function () {
            $scope.currentPage -= 1;
        };

        $scope.goTo = function (pageNum) {
            $scope.currentPage = pageNum;
        };

        $scope.$watch('currentPage', function (currentPage) {
            $scope.currentPageStyle = $scope.pages[currentPage].style;
        });
    }]);

    app.controller('sidebarController', ['$scope', function ($scope) {
        $scope.sidebarActive = false;

        $scope.toggleSidebar = function () {
            $scope.sidebarActive = !$scope.sidebarActive;
        };
    }]);

    app.controller('canIUseController', ['$scope', function ($scope) {
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
                }]
            }, {
                name: "javascript",
                skills: [{
                    name: "javascript",
                    level: 5
                }, {
                    name: "angularjs",
                    level: 10
                }, {
                    name: "jquery",
                    level: 10
                }, {
                    name: "node",
                    level: 10
                }]
            }, {
                name: "frameworks",
                skills: [{
                    name: "ruby on rails",
                    level: 10
                }, {
                    name: "angularjs",
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
        }];
    }]);
})();
