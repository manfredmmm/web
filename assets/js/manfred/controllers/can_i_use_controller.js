(function () {
    "use strict";

    function CanIUseController ($scope) {
        $scope.currentSkill = false;
        $scope.families = [{
                name: "html",
                skills: [{
                    name: "html5",
                    level: 5
                }, {
                    name: "jade",
                    level: 10
                }, {
                    name: "haml",
                    level: 10
                }, {
                    name: "slim",
                    level: 10
                }, {
                    name: "seo friendly",
                    level: 10
                }]
            }, {
                name: "javascript",
                skills: [{
                    name: "native",
                    level: 6
                }, {
                    name: "angularjs",
                    level: 10
                }, {
                    name: "jquery",
                    level: 10
                }, {
                    name: "nodejs",
                    level: 10
                }, {
                    name: "AJAX",
                    level: 8
                }, {
                    name: "JSON",
                    level: 9
                }, {
                    name: "coffeescript",
                    level: 6
                }]
            }, {
                name: "css",
                skills: [{
                    name: "css3",
                    level: 9
                }, {
                    name: "sass/scss",
                    level: 9
                }, {
                    name: "stylus",
                    level: 9
                }, {
                    name: "less",
                    level: 9
                }, {
                    name: "animations",
                    level: 7
                }, {
                    name: "responsive layouts",
                    level: 8
                }]
            }, {
                name: "js tasks runner",
                skills: [{
                    name: "gulp",
                    level: 8
                }, {
                    name: "grunt",
                    level: 6
                }]
            }, {
                name: "js package manager",
                skills: [{
                    name: "npm",
                    level: 9
                }, {
                    name: "bower",
                    level: 8
                }]
            }, {
                name: "frameworks",
                skills: [{
                    name: "ruby on rails",
                    level: 10
                }, {
                    name: "sinatra",
                    level: 10
                }]
            }, {
                name: "web design",
                skills: [{
                    name: "responsive design",
                    level: 10
                }, {
                    name: "ux-ui",
                    level: 10
                }, {
                    name: "web design",
                    level: 10
                }]
            }, {
                name: "Front end frameworks",
                skills: [{
                    name: "twitter bootstrap",
                    level: 10
                }, {
                    name: "foundation",
                    level: 10
                }]
            }, {
                name: "Design tools",
                skills: [{
                    name: "illustrator",
                    level: 10
                }, {
                    name: "photoshop",
                    level: 10
                }]
            }, {
                name: "3D library",
                skills: [{
                    name: "three.js",
                    level: 10
                }]
            }, {
                name: "source control",
                skills: [{
                    name: "git",
                    level: 7
                }]
        }];

        $scope.showLevel = function (skill) {
            $scope.currentSkill = skill;
        };

        // TODO: falta fer que es dibuixin els ticks un per un
        //$scope.$watch('currentSkill', function (newValue, oldValue) {
        //    console.log('current skill: ' + $scope.currentSkill.name);
        //    if (newValue !== false) {
        //        console.log('updateeeeeee');
        //        $('svg#tick-1 path').css('stroke', '#000');
        //        if (($('svg#tick-1').length) > 0) {
        //            //new Vivus('tick-1', { type: 'oneByOne', duration: 75 });
        //            $('svg#tick-1 path').css('stroke', '#ffffff');
        //            console.log('tick-1');
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

    CanIUseController.$inject = ['$scope'];

    angular.module('mmmApp').controller('CanIUseController', CanIUseController);
}());
