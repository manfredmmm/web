(function () {
    "use strict";

    var app = angular.module('mmmApp');

    app.directive('resize', ['$window', function ($window) {
        return function (scope, element, sly) {
            var w = angular.element($window);

            scope.getWindowDimensions = function () {
                return {
                    'h': w.height(),
                    'w': w.width()
                };
            };

            scope.$watch(scope.getWindowDimensions, function (newValue, oldValue) {
                scope.windowHeight = newValue.h;
                scope.windowWidth = newValue.w;

                console.log('w ' + scope.windowWidth);
                console.log('h ' + scope.windowHeight);

                scope.sly.reload();
            }, true);

            w.bind('resize', function () {
                scope.$apply();
            });
        }
    }]);
})();
