/**
 * Created by admin on 15.08.2014.
 */
'use strict';

angular.
    module('opvko').
    factory('OrderFactory',function($http, routeConfig){
        var OrderFactory = function(data){
            angular.extend(this, data);
        };
        OrderFactory.Show = function(_id){
            return $http({
                cache: true,
                method: 'GET',
                url: routeConfig.localhost + routeConfig.orders.Show,
                params:{
                    id: _id
                }
            });
        };
        OrderFactory.All = function(datein, dateout, page, pagesize, responsibles, statuses){
            return $http({
                cache: true,
                method: 'GET',
                url: routeConfig.localhost + routeConfig.orders.All,
                params:{
                    _datein: datein,
                    _dateout: dateout,
                    _page: page,
                    _pagesize: pagesize,
                    _responsibles: responsibles,
                    _statuses: statuses
                }
            });
        };
        OrderFactory.GetTaskStatuses = function(){
            return $http({
                cache: true,
                method: 'GET',
                url: routeConfig.localhost + routeConfig.orders.GetTaskStatuses
            });
        };
        OrderFactory.GetResponsibleUsers = function(){
            return $http({
                cache: true,
                method: 'GET',
                url: routeConfig.localhost + routeConfig.orders.GetResponsibleUsers
            });
        };
        return OrderFactory;
    });