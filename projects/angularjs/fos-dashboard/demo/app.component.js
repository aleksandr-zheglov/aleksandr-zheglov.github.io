(function(){
    'use strict';

    /**
     * @type {{templateUrl: string}}
     */
    var AppComponent = {
        template: '<div>'+
                        '<fos-dashboard '+
                                'fosd-config-promise="$ctrl.fosdConfig" '+
                                'on-select="$ctrl.onSelectItem($event);"></fos-dashboard>'+
                        '<div class="btn-group">'+
                            '<span>Test Area Panel: </span>'+
                            '<button class="btn btn-default btn-xs" ng-click="$ctrl.onLocale(\'en-us\')">EN</button>'+
                            '<button class="btn btn-default btn-xs" ng-click="$ctrl.onLocale(\'ru\')">RU</button>'+
                        '</div>'+
                    '</div>',

        /**
         * @param $q
         * @param $log
         * @param $window
         * @param $translate
         */
        controller: function ($q, $log, $window, $translate) {

            /**
             *
             */
            this.$onInit = function() {
                function config(){
                    return {

                        //'api_baseUrl' : 'https://private-75389-20170101.apiary-mock.com/api/v1',
                        'api_baseUrl' : '',

                        'pollingInterval' : {
                            'default'   : 10000,
                            'tracking'  : 11000,
                            'orders'    : 12000,
                            'ports'     : 23000,
                            'alerts'    : 14000,
                            'expenses'  : 15000,
                            'services'  : 16000,
                            'notifications': 17000
                        },
                        'queryParams':{
                            'services_period_days'  : 30,
                            'expenses_last_days'    : 30
                        },
                        'transitionStateNames':{
                            'ports'         : 'fosd_ports_details',
                            'alarms'        : 'fosd_alarms_details',
                            'notifications' : 'fosd_notifications_details',
                            'e-services'    : 'fosd_eservices',
                            'orders'        : 'fosd_orders'
                        }
                    }
                }

                // test config : build only.
                this.fosdConfig = $q.when(config());
            };

            /**
             * @param event
             */
            this.onSelectItem = function(event){
                var item = event.item || {id:'testID'};
                var message = 'Excellent! Now we can use this element and its id ('+item.id+') for the redirect.';
                $log.debug('>',message,[event]);
                $window.alert(message);
            };

            /**
             * @param locale
             */
            this.onLocale = function(locale){
                $translate.use(locale);
            }
        }
    };

    /**
     * @param $compileProvider
     * @param $logProvider
     * @param $translateProvider
     * @constructor
     */
    function Config($compileProvider, $logProvider, $translateProvider){

        $compileProvider.debugInfoEnabled(true);
        $logProvider.debugEnabled(true);

        $translateProvider.useSanitizeValueStrategy('escape');
        $translateProvider.determinePreferredLanguage();
        $translateProvider.useMessageFormatInterpolation();
        $translateProvider.preferredLanguage('en-us');
    }

    angular
        .module('app', [
            'ngMockE2E',
            'fos-dashboard'
        ])
        .config(Config)
        .component('app', AppComponent);
})();



