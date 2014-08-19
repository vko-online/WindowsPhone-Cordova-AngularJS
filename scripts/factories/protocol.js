/**
 * Created by admin on 15.08.2014.
 */
'use strict';

angular.
    module('opvko').
    factory('ProtocolsFactory',function($http, routeConfig){
        var ProtocolsFactory = function(data){
            angular.extend(this, data);
        };
        ProtocolsFactory.GetProfile = function(){
            return $http({
                cache: true,
                method: 'GET',
                url: routeConfig.localhost + routeConfig.profile.GetProfile
            });
        };
        return ProtocolsFactory;
    });