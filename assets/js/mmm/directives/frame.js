(function () {
    "use strict";

    var app = angular.module('mmmApp');
    
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

    function frameableDirective ($location, Pages) {
        return {
            restrict: "A",
            scope: {},
            link: function ($scope, $frame) {
                var sly = new Sly($frame, options).init(),
                    $pages = $('ul.pages'),
                    $sections = $pages.find('li section');

                sly.on('moveEnd', function (eventName) {
                    var pageIndex = sly.rel.activePage;

                    $sections.removeClass('active');
                    $pages.find('li.item-' + pageIndex + ' section').addClass('active');

                    $scope.$emit('sly:activePage', sly.rel.activePage);
                });

                $scope.$on('sly:reload', function () {
                    sly.reload();
                });

                console.log($scope);

                sly.toCenter(Pages.getCurrentPageId($location.url()), true);
            }
        };
    }

    frameableDirective.$inject = ['$location', 'Pages'];

    app.directive('frameable', frameableDirective);
}());

