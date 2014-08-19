'use strict';

angular.
    module('opvko', [
        'ngRoute',
        'angular-datepicker'
    ]).
    config(function ($routeProvider, $httpProvider) {
        $httpProvider.defaults.withCredentials = true;
        $httpProvider.defaults.headers.common['X-Requested-With'] = 'XMLHttpRequest';
        $httpProvider.defaults.headers['delete'] = {
            'Content-Type': 'application/json;charset=utf-8'
        };
        $routeProvider.
            when('/', {
                templateUrl: 'views/main.html',
                controller: 'mainController',
                controllerAs: 'main'
            }).
            when('/order/:id', {
                templateUrl: 'views/order.html',
                controller: 'orderController',
                controllerAs: 'order'
            }).
            when('/orders', {
                templateUrl: 'views/orders.html',
                controller: 'ordersController',
                controllerAs: 'orders'
            }).
            when('/profile', {
                templateUrl: 'views/profile.html',
                controller: 'profileController',
                controllerAs: 'profile'
            }).
            when('/protocol/:id', {
                templateUrl: 'views/protocol.html',
                controller: 'protocolController',
                controllerAs: 'protocol'
            }).
            when('/protocols', {
                templateUrl: 'views/protocols.html',
                controller: 'protocolsController',
                controllerAs: 'protocols'
            }).
            when('/exit', {
                template: '',
                controller: 'exitController',
                controllerAs: 'exit'
            }).
            otherwise({
                redirectTo: '/'
            });
    }, function ($sceDelegateProvider) {
        $sceDelegateProvider.resourceUrlWhitelist(['.*']);
    });
