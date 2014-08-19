'use strict';

angular.
    module('opvko').
    factory('HomeFactory',function($http, routeConfig){
        var HomeFactory = function(data){
            angular.extend(this, data);
        };
        HomeFactory.GetOrderTileData = function(){
            return $http({
                cache: true,
                method: 'GET',
                url: routeConfig.localhost + routeConfig.home.GetOrderTileData
            });
        };
        return HomeFactory;
    });