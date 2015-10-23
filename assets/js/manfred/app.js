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
              title: 'contact',
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
        $scope.skills = [];
    }]);
})();
