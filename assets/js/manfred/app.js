(function () {
    "use strict";

    var app = angular.module('mApp', []);

    app.controller('sectionsController', ['$scope', function ($scope) {
        $scope.currentPage = 0;
        $scope.pages = [{
              binary: '000',
              name: 'home'
            }, {
              binary: '001',
              name: 'me'
            }, {
              binary: '010',
              name: 'likes'
            }, {
              binary: '011',
              name: 'can I do?'
            }, {
              binary: '100',
              name: 'contact'
            }, {
              binary: '101',
              name: 'social'
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
