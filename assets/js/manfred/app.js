(function () {
    "use strict";

    var app = angular.module('mApp', []);

    app.controller('sectionsController', ['$scope', function ($scope) {
        $scope.currentPage = 0;
        $scope.pages = [{
              binary: '000',
              name: 'home',
              title: 'home'
            }, {
              binary: '001',
              name: 'me',
              title: 'bio'
            }, {
              binary: '010',
              name: 'can',
              title: 'what can I do?'
            }, {
              binary: '011',
              name: 'contact',
              title: 'contact'
            }, {
              binary: '100',
              name: 'social',
              title: 'social'
        }];

        $scope.isCurrentPage = function (page) {
            return $scope.pages[$scope.currentPage].name === page;
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
    }]);

    app.controller('sidebarController', ['$scope', function ($scope) {
        $scope.sidebarActive = false;

        $scope.toggleSidebar = function () {
            $scope.sidebarActive = !$scope.sidebarActive;
        };
    }]);
})();
