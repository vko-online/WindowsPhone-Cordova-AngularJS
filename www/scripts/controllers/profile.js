/**
 * Created by admin on 15.08.2014.
 */
'use strict';

/**
 * @ngdoc function
 * @name mobileApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the mobileApp
 */
angular.module('opvko').
    controller('profileController', function ($scope, ProfileFactory, $routeParams, $location) {
        $scope.$broadcast('start');
        $scope.ContentReady = false;
        ProfileFactory.GetProfile().then(function (x) {
            $scope.Profile = x.data;
            $scope.$broadcast('stop');
            $scope.ContentReady = true;
        });
        $scope.Back = function () {
            $location.path('/');
        };
    });