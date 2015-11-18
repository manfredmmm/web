(function () {
    "use strict";

    function SectionsController ($scope, Pages) {
        $scope.pages = Pages.all();
        $scope.currentPage = 0;
        $scope.currentPageStyle = $scope.pages[$scope.currentPage].style;
        $scope.menuActive = false;

        var options = {
            horizontal: true,
            // Item based navigation
            itemNav: 'basic',
            // Scrolling
            scrollSource: $('ul.pages'),
            scrollBy: 1,
            // Dragging
            mouseDragging: true,
            touchDragging: true,
            // Navigation buttons
            prevPage: $('a.nav-previous'),
            nextPage: $('a.nav-next'),
            // Mixed options
            speed: 400,
            easing: 'swing',
            keyboardNavBy: 'pages'
        };

        var frame = $('.frame');
        var sly = new Sly(frame, options).init();

        $scope.sly = sly;

        sly.on('moveEnd', function (eventName) {
            var pageIndex = sly.rel.activePage;

            $('ul.pages li section').removeClass('active');
            $('ul.pages li.item-' + pageIndex + ' section').addClass('active');

            $scope.$apply( function () {
                $scope.currentPage = sly.rel.activePage;
                $scope.currentPageStyle = $scope.pages[$scope.currentPage].style;
            });
        });

        $scope.isCurrentPage = function (page) {
            return $scope.pages[$scope.currentPage].name === page;
        };

        $scope.toggleMenu = function () {
            $scope.menuActive = !$scope.menuActive;
        };

        $scope.goTo = function (pageNum) {
            sly.toStart(pageNum, true);
            $scope.currentPage = pageNum;
            $scope.menuActive = !$scope.menuActive;
        };
        
        if ($('svg#home-icon').length > 0) {
            new Vivus('home-icon', { type: 'oneByOne', duration: 75 });
        }
    }

    SectionsController.$inject = ['$scope', 'Pages'];
    angular.module('mmmApp').controller('SectionsController', SectionsController);
}());
