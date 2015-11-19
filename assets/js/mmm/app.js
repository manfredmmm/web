(function () {
    "use strict";

    var app = angular.module('mmmApp', []);

    app.config(['$locationProvider', function ($locationProvider) {
        $locationProvider.html5Mode({ enabled: true, requireBase: false });
    }]);
})();
