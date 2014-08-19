'use strict';

/**
 * @ngdoc function
 * @name mobileApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the mobileApp
 */
angular.module('opvko').
    controller('orderController', function ($scope, OrderFactory, $routeParams, $location) {
        $scope.$broadcast('start');
        $scope.ContentReady = false;
        OrderFactory.Show($routeParams.id).then(function(x){
            $scope.Order = x.data;
            $scope.$broadcast('stop');
            $scope.ContentReady = true;
            console.log($scope.Order);
        });
        $scope.Back = function(){
            console.log('back');
            $location.path('/');
        };
    });
