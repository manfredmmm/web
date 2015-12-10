(function () {
    "use strict";

    function SectionsController ($rootScope, $scope, $location, Pages) {
        $scope.pages = Pages.all();
        $scope.currentPage = 0;
        $scope.currentPageStyle = $scope.pages[$scope.currentPage].style;
        $scope.menuActive = false;

        $scope.isCurrentPage = function (page) {
            return $scope.pages[$scope.currentPage].name === page;
        };

        $scope.toggleMenu = function () {
            $scope.menuActive = !$scope.menuActive;
        };

        $scope.goTo = function (pageNum) {
            $scope.currentPage = pageNum;
            $scope.menuActive = !$scope.menuActive;
            $rootScope.$broadcast("sly:startPage", pageNum);
        };

        $scope.$on('sly:activePage', function (event, activePage) {
            $scope.currentPage = activePage;
            $scope.currentPageStyle = $scope.pages[$scope.currentPage].style;
            $location.url($scope.pages[$scope.currentPage].url);
            $scope.$apply();
        });
        
        if ($('svg#home-icon').length > 0) {
            new Vivus('home-icon', { type: 'oneByOne', duration: 75 });
        }
    }

    SectionsController.$inject = ['$rootScope', '$scope', '$location', 'Pages'];
    angular.module('mmmApp').controller('SectionsController', SectionsController);
}());
