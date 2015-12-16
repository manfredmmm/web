(function () {
    "use strict";

    function CanIUseController ($scope, Families) {
        $scope.families = Families.all();
        $scope.currentSkill = false;

        $scope.showLevel = function (skill) {
            $scope.currentSkill = skill;
        };

        // TODO: falta fer que es dibuixin els ticks un per un
        //$scope.$watch('currentSkill', function (newValue, oldValue) {
        //    console.log('current skill: ' + $scope.currentSkill.name);
        //    if (newValue !== false) {
        //        $('svg#tick-1 path').css('stroke', '#000');
        //        if (($('svg#tick-1').length) > 0) {
        //            //new Vivus('tick-1', { type: 'oneByOne', duration: 75 });
        //            $('svg#tick-1 path').css('stroke', '#ffffff');
        //        } else {
        //            console.log('ola k ase nene');
        //        }
        //    }
        //});

        $scope.isCompleted = function (level) {
            return $scope.currentSkill.level >= level;
        };

        $scope.goBack = function () {
            $scope.currentSkill = false;
            $scope.searchSkill = '';
        };
    }

    CanIUseController.$inject = ['$scope', 'Families'];
    angular.module('mmmApp').controller('CanIUseController', CanIUseController);
}());
