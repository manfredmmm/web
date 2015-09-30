(function () {
    "use strict";

    var app = angular.module('mApp', []);

    app.controller('sectionsController', function ($scope) {
        $scope.currentPage = 0;
        $scope.pages = [{
              name: 'front'
            }, {
              name: 'me'
        }];

        $scope.isCurrentPage = function (page) {
            return $scope.pages[$scope.currentPage].name === page;
        };

        $scope.next = function () {
            $scope.currentPage += 1;
            console.log('next');
        };

        $scope.previous = function () {
            $scope.currentPage -= 1;
            console.log('prev');
        };
    });

})();
