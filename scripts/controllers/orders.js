'use strict';

/**
 * @ngdoc function
 * @name mobileApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the mobileApp
 */
angular.module('opvko').
    controller('ordersController', function ($scope, OrderFactory, $routeParams, $location) {
        $scope.$broadcast('start');
        $scope.ContentReady = false;
        $scope.Datein = new Date(2013, 9, 22);
        $scope.Dateout = new Date(2013, 9, 22);
        $scope.Page = 0;
        $scope.Pagesize = 10;
        $scope.Default = 1;
        OrderFactory.GetResponsibleUsers().then(function (x) {
            $scope.Responsibles = x.data;
            $scope.ResponsibleSelected = $scope.Responsibles.filter(function (obj) {
                return obj.Id === '414';
            })[0];

            OrderFactory.GetTaskStatuses().then(function (y) {
                $scope.Statuses = y.data;
                $scope.StatusSelected = $scope.Statuses.filter(function (obj) {
                    return obj.ID === $scope.Default;
                })[0];

                $scope.ContentReady = true;
                OrderFactory.All($scope.Datein.toUTCString(), $scope.Dateout.toUTCString(), $scope.Page, $scope.Pagesize, parseInt($scope.ResponsibleSelected.Id), $scope.StatusSelected.ID).then(function (z) {
                    $scope.Orders = z.data;
                    $scope.$broadcast('stop');
                });
            });
        });
        this.Update = function () {
             $scope.$broadcast('start');
             OrderFactory.All($scope.Datein.toUTCString(), $scope.Dateout.toUTCString(), $scope.Page, $scope.Pagesize, parseInt($scope.ResponsibleSelected.Id), $scope.StatusSelected.ID).then(function (z) {
             $scope.Orders = z.data;
             $scope.$broadcast('stop');
             });
        };

        this.DatePicker = function (id) {
            if (angular.element(document.querySelector('#' + id + '_root')).css('display') === ''
                || angular.element(document.querySelector('#' + id + '_root')).css('display') === 'block') {
                angular.element(document.querySelector('#' + id + '_root')).css({
                    display: 'none'
                });
            }
            else {
                angular.element(document.querySelector('#' + id + '_root')).css({
                    display: 'block'
                });
            }
        };
        $scope.Back = function () {
            $location.path('/');
        };
    });
