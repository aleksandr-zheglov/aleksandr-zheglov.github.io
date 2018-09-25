(function(){
    'use strict';

    angular
        .module('app')
        .run(Run);

    /**
     * @param $httpBackend
     * @param FOSD_API
     * @constructor
     */
    function Run($httpBackend, FOSD_API){

        console.log('Mock module started: ');

        /**
         * @param max
         * @param min
         * @returns {*}
         */
        var random = function (max, min){
            return Math.floor(Math.random() * (max - min)) + min;
        };

        //
        // [ Tracking ]-----------------------------------------------------------------------------------------------
        // http://docs.20170101.apiary.io/#reference/tracking

        /**
         * @returns {{in_time: *, behind: *, ahead: *, ok: *, nok: *}}
         */
        var trackingRespond = function(){
            return {
                "in_time"   : random(200, 150),
                "behind"    : random(30, 10),
                "ahead"     : random(60, 30),
                "ok"        : random(250, 200),
                "nok"       : random(20, 10)
            };
        };
        $httpBackend
            .whenGET(FOSD_API.tracking.Url)
            .respond(function() {
                return [200, trackingRespond(), {}];
            });

        //
        // [ Ports of Calls ]-----------------------------------------------------------------------------------------
        //
        var portsRespond = function(){
            var base = [
                {
                    "id": "DEHAM",
                    "name": "Hamburg",
                    "lat" : 53.507,
                    "lon" : 9.9619,
                    "ships_count": random(100, 0)
                },{
                    "id": "USSFO",
                    "name": "Kiel",
                    "lat" : 37.77395,
                    "lon" : -122.3963,
                    "ships_count": random(10, 0)
                },{
                    "id": "RULED",
                    "name": "Saint Petersburg",
                    "lat" : 59.91933,
                    "lon" : 30.327035,
                    "ships_count": random(40, 0)
                },{
                    "id": "RUMMK",
                    "name": "Murmansk",
                    "lat" : 68.984125,
                    "lon" : 33.061,
                    "ships_count": random(10, 0)
                },{
                    "id": "SESTO",
                    "name": "Stockholm",
                    "lat" : 59.32705,
                    "lon" : 18.10615,
                    "ships_count": random(100, 0)
                },{
                    "id": "AUSYD",
                    "name": "Sydney",
                    "lat" : -33.851505,
                    "lon" : 151.19885,
                    "ships_count": random(50, 0)
                },{
                    "id": "SEALAND",
                    "name": "Sealand",
                    "ships_count": random(1, 0)
                }
            ];

            base.forEach(function(item) {
                if (item.id.indexOf('_copy')==-1){
                    var newItem1 = angular.copy(item);
                    newItem1.id = newItem1.id + '_copy_1';
                    newItem1.name = newItem1.name + ' (port)';
                    newItem1.ships_count = newItem1.ships_count + 20;
                    base.push(newItem1)
                }});
            return base;
        };

        //  http://docs.20170101.apiary.io/#reference/port/ports/list-of-all-ports-of-calls
        $httpBackend
            .whenGET(FOSD_API.ports.Url)
            .respond(function() {
                return [200, portsRespond(), {}];
            });


        //
        // [ Expenses ]-----------------------------------------------------------------------------------------------
        //
        var expensesRespond = function(){
            return {
                "total" : random(100000, 10000), //9999999
                "currency": "USD",
                "budget_usage_pct" : random(100, 20),
                "categories" : [{
                    "id" : "charts_tads_avcs",
                    "name" : "Charts: TADS/AVCS",
                    "value" : random(200, 10)
                },{
                    "id" : "charts_tx97_maintenance",
                    "name" : "Charts: TX-97 and Professional/ Basic Maintenance",
                    "value" : random(200, 10)
                },{
                    "id" : "subscription_weather",
                    "name" : "Weather Subscription",
                    "value" : random(100, 5)
                },{
                    "id" : "publication_digital",
                    "name" : "Digital Publications",
                    "value" : random(200, 5)
                },{
                    "id" : "flat_fee",
                    "name" : "Flat Fee",
                    "value" : random(100, 5)
                },{
                    "id" : "pays_payasyousail",
                    "name" : "Pay As You sail (PAYS)",
                    "value" : random(100, 1)
                },{"id":"service_planing","name":"Planing Service","value":5}]};
        };

        // http://docs.20170101.apiary.io/#reference/expenses/total-expenses-for-the-last-{period}-days.
        $httpBackend
            .whenGET(FOSD_API.expenses.Url)
            .respond(function() {
                return [200, expensesRespond(), {}];
            });


        //
        // [ Orders ]------------------------------------------------------------------------------------------------
        // http://docs.20170101.apiary.io/#reference/orders
        var ordersRespond = function(){
            return {
                "for_services": random(100, 10),
                "for_data": random(100, 3),
                "on_hold": random(50, 3)
            };
        };
        $httpBackend
            .whenGET(FOSD_API.orders.Url)
            .respond(function() {
                return [200, ordersRespond(), {}];
            });


        //
        // [ Alarms ]------------------------------------------------------------------------------------------------
        //
        var alarmsRespond = function(){
            return [
                {
                    "id": "ssas_management",
                    "name": "SSAS Management",
                    "count":  random(30, 2)
                }, {
                    "id": "zone_alerts",
                    "name": "Zone Alerts",
                    "count":  random(20, 10)
                },
                {
                    "id": "ssase_management",
                    "name": "SSAS Management",
                    "count":  random(30, 2)
                }, {
                    "id": "zone_alerets",
                    "name": "Zone Alerts",
                    "count":  random(20, 10)
                }
            ];
        };

        $httpBackend
            .whenGET(FOSD_API.alarms.Url)
            .respond(function() {
                return [200, alarmsRespond(), {}];
            });


        //
        // [ Notifications ]------------------------------------------------------------------------------------------
        //
        var notificationsRespond = function(){
            return [
                {
                    "id": "routes_received",
                    "name": "Received routes",
                    "count": random(50, 10)
                }, {
                    "id": "chats_active",
                    "name": "Active chats",
                    "count": random(30, 7)
                }, {
                    "id": "ships_msgs_unreplied",
                    "name": "Un-replied messages from ships",
                    "count": random(50, 20)
                }, {
                    "id": "ships_pendinginfo",
                    "name": "Pending information to be pushed to ships",
                    "count": random(20, 5)
                },
                {
                    "id": "routes_recei3ved",
                    "name": "Received routes",
                    "count": random(50, 10)
                }, {
                    "id": "chats_ac3tive",
                    "name": "Active chats",
                    "count": random(30, 7)
                }, {
                    "id": "ships_msgs_u3nreplied",
                    "name": "Un-replied messages from ships",
                    "count": random(50, 20)
                }, {
                    "id": "ships_pending3info",
                    "name": "Pending information to be pushed to ships",
                    "count": random(20, 5)
                }
            ];
        };

        $httpBackend
            .whenGET(FOSD_API.notifications.Url)
            .respond(function() {
                return [200, notificationsRespond(), {}];
            });

        //
        // [ Services ]-----------------------------------------------------------------------------------------------
        //
        var servicesRespond = function(){
            return {
                "expiring_licenses": random(20, 5)
            };
        };
        $httpBackend
            .whenGET(FOSD_API.services.Url)
            .respond(function() {
                return [200, servicesRespond(), {}];
            });
    }

})();