/**
 * Created by admin on 15.08.2014.
 */
'use strict';
angular.module('opvko').
    directive('collapse', function(){
        return{
            restrict: 'E',
            transclude: true,
            replace: true,
            templateUrl: 'scripts/directives/partials/collapse.html',
            scope:{
                header: '@'
            },
            link: function(scope){
                scope.closed = false;
                scope.toggle = function(){
                    scope.closed = !scope.closed;
                };
            }/*,
            controller: function($scope) {
                $scope.closed = false;
                return $scope.toggle = function() {
                    return
                };
            }*/
        };
    });