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
    controller('protocolsController', function ($scope, ProtocolFactory, $routeParams, $location) {

        this.Back = function(){
            $location.path('/');
        };
    });