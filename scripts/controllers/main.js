'use strict';

/**
 * @ngdoc function
 * @name mobileApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the mobileApp
 */
angular.module('opvko').
    controller('mainController', function ($scope, HomeFactory, $location) {
        $scope.$broadcast('start');
        $scope.ContentReady = false;
        HomeFactory.GetOrderTileData().then(function (x) {
            $scope.TileData = x.data;
            $scope.$broadcast('stop');
            $scope.ContentReady = true;
        });
        this.OpenTask = function(task){
            $location.path( '/order/' + task.Id);
        };
        $scope.Show = false;
        this.Show = function(){
            $scope.Show = !$scope.Show;
        };
    });
