/**
 * Created by admin on 15.08.2014.
 */
'use strict';

angular.
    module('opvko').
    factory('ProfileFactory',function($http, routeConfig){
        var ProfileFactory = function(data){
            angular.extend(this, data);
        };
        ProfileFactory.GetProfile = function(){
            return $http({
                cache: true,
                method: 'GET',
                url: routeConfig.localhost + routeConfig.profile.GetProfile
            });
        };
        return ProfileFactory;
    });