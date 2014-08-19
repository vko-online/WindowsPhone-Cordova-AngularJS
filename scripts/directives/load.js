'use strict';
angular.module('opvko').
    directive('load', function(){
       return{
           restrict: 'E',
           templateUrl: 'scripts/directives/partials/load.html',
           link: function(scope, element){
               scope.$on('stop', function(){
                   element.children().addClass('stop');
               });
               scope.$on('start', function(){
                   element.children().removeClass('stop');
               });
           }
       };
    });