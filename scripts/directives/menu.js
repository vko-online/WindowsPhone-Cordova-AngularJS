/**
 * Created by admin on 15.08.2014.
 */
'use strict';
angular.module('opvko').
    directive('tilemenu', function($location){
        return{
            restrict: 'E',
            templateUrl: 'scripts/directives/partials/menu.html',
            link: function(scope){
                scope.ShowMenu = function(){
                    scope.show = !scope.show;
                };
                scope.show = true;
                scope.profile = function(){
                    $location.path('/profile');
                };
                scope.protocol = function(){
                    $location.path('/protocols');
                };
                scope.order = function(){
                    $location.path('/orders');
                };
                scope.exit = function(){
                    $location.path('/exit');
                };
            }
        };
    });