'use strict';

angular.module('opvko').
    constant('routeConfig', {
        localhost: 'http://localhost:60659/',
        home: {
            GetOrderTileData: 'api/WS_Home/GetOrderTileData',
            Test: 'api/WS_Home/Test'
        },
        orders: {
            Show: 'api/WS_Orders/Show',
            All: 'api/WS_Orders/All',
            GetTaskStatuses: 'api/WS_Orders/GetTaskStatuses',
            GetResponsibleUsers: 'api/WS_Orders/GetResponsibleUsers'
        },
        profile:{
            GetProfile: 'api/WS_Account/GetProfile'
        },
        protocols: {

        }
    });