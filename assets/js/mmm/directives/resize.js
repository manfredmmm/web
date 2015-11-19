(function () {
    "use strict";

    var app = angular.module('mmmApp');

    app.directive('resize', ['$window', function ($window) {
        var w = angular.element($window);

        return {
            restrict: 'A',
            scope: {},
            controller: ['$scope', function ($scope) {
                $scope.getWindowDimensions = function () {
                    return {
                        'w': w.width(),
                        'h': w.height()
                    };
                };

                $scope.$watch($scope.getWindowDimensions, function (newValue, oldValue) {
                    $scope.$emit("sly:reload");
                }, true);

                w.bind('resize', function () {
                    $scope.$apply();
                });
            }]
        }
    }]);
})();
