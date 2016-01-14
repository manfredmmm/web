(function () {
    "use strict";

    var app = angular.module('mmmApp');

    app.directive('resize', ['$window', function ($window) {
        var w = angular.element($window);

        return {
            restrict: 'A',
            scope: {},
            controller: ['$rootScope', function ($rootScope) {
                w.bind('resize', function () {
                    $rootScope.$broadcast("sly:reload");
                });
            }]
        }
    }]);
})();
