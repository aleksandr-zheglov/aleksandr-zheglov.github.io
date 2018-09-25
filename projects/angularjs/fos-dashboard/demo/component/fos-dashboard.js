/*
	 transas.com
	 FOS Dashboard | v.0.1.6
	 2017
 */
'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(function (angular) {
    'use strict';

    angular.module('fos-dashboard', ['ng', 'ngSanitize', 'pascalprecht.translate', 'leaflet-directive', 'chart.js', 'fos-api', 'fos-dashboard.translations', // note : created by gulp task 'locale'
    'fos-dashboard.core', 'fos-dashboard.common', 'fos-dashboard.components', 'fos-dashboard.templates']);
})(window.angular);
(function (angular) {
    'use strict';

    angular.module('fos-dashboard.common', ['fos-dashboard.common.app-header']);
})(window.angular);
(function (angular) {
    'use strict';

    angular.module('fos-dashboard.components', ['fos-dashboard.components.common', 'fos-dashboard.components.alarms', 'fos-dashboard.components.orders', 'fos-dashboard.components.expenses', 'fos-dashboard.components.notifications', 'fos-dashboard.components.portscalls', 'fos-dashboard.components.tracking', 'fos-dashboard.components.e-services']);
})(window.angular);
(function (angular) {
    'use strict';

    angular.module('fos-dashboard.core', ['fos-dashboard.core.utils', 'fos-dashboard.core.states', 'fos-dashboard.core.polling', 'fos-dashboard.core.localize']);
})(window.angular);
(function (angular) {
    'use strict';

    angular.module('fos-dashboard.templates', []);
})(window.angular);
(function (angular) {
    'use strict';

    angular.module('fos-dashboard.common.app-header', []);
})(window.angular);
(function (angular) {
    'use strict';

    angular.module('fos-dashboard.components.alarms', ['fos-dashboard.core.polling']);
})(window.angular);
(function (angular) {
    'use strict';

    angular.module('fos-dashboard.components.common', []);
})(window.angular);
(function (angular) {
    'use strict';

    angular.module('fos-dashboard.components.e-services', []);
})(window.angular);
(function (angular) {
    'use strict';

    angular.module('fos-dashboard.components.expenses', ['chart.js']).config(["ChartJsProvider", function (ChartJsProvider) {
        ChartJsProvider.setOptions({ colors: ['#1b6fb6', '#6eb4c7', '#54829b', '#988aff', '#62dbf3', '#f464b8', '#7ac5fe', '#024873', '#D9B596', '#A67153', '#5E652C', '#854811', '#C47C00', '#240B03', '#752A0B', '#BD776F', '#4D3400', '#9BA548', '#404740', '#407840', '#544351'] });
    }]);
})(window.angular);
(function (angular) {
    'use strict';

    angular.module('fos-dashboard.components.orders', []);
})(window.angular);
(function (angular) {
    'use strict';

    angular.module('fos-dashboard.components.notifications', []);
})(window.angular);
(function (angular) {
    'use strict';

    angular.module('fos-dashboard.components.portscalls', []);
})(window.angular);
(function (angular) {
    'use strict';

    angular.module('fos-dashboard.components.tracking', []);
})(window.angular);
(function (angular) {
    'use strict';

    angular.module('fos-dashboard.core.localize', ['pascalprecht.translate']);
})(window.angular);
(function (angular) {
    'use strict';

    angular.module('fos-dashboard.core.states', []);
})(window.angular);
(function (angular) {
    'use strict';

    angular.module('fos-dashboard.core.polling', []);
})(window.angular);
(function (angular) {
    'use strict';

    angular.module("fos-dashboard.translations", []).config(["$translateProvider", function ($translateProvider) {
        $translateProvider.translations("en-us", { "copyright": "© 2017 Transas, Inc.", "copyright.company.short": "Transas", "common.loader.fosdconfig.loading": "Configuration...", "common.loader.error.base.message": "Something went wrong", "common.loader.retry.description": "Click retry to reload data", "common.loader.retry.btn.name": "Retry", "common.loader.retry.btn.title": "Click retry to reload data", "session.lastupdate": "Last update", "page.caption": "FOS Dashboard", "header.caption": "Dashboard", "tracking.pane.caption": "Tracking performance", "tracking.schedule.intime.label": "To ports in time", "tracking.schedule.intime.title": "To ports in time", "tracking.schedule.behind.label": "Behind the schedule", "tracking.schedule.behind.title": "Behind the schedule", "tracking.schedule.ahead.label": "Ahead the schedule", "tracking.schedule.ahead.title": "Ahead the schedule", "tracking.status.ok.label": "Tracking OK", "tracking.status.ok.title": "Tracking OK", "tracking.status.nok.label": "Tracking NOK", "tracking.status.nok.title": "Tracking NOK", "ports.pane.caption": "Ports of calls", "ports.map.popup.label.goingto": "{RES, plural, =0{There are no ships} one{One ship} other{# ships} } going to%br%{name}", "expenses.pane.caption": "Total Expenses for last {RES, plural, =0{days} one{day} other{# days}}", "expenses.total.label": "Total expenses", "expenses.total.title": "Total expenses", "expenses.budget.used.label": "Budget usage", "expenses.budget.used.title": "Budget usage", "expenses.orders.services.label": "Orders for services", "expenses.orders.services.title": "Orders for services", "expenses.orders.data.label": "Orders for data", "expenses.orders.data.title": "Orders for data", "alarms.pane.caption": "Alarms", "notifications.pane.caption": "Notifications", "orders.onhold.label": "Orders on hold", "orders.onhold.title": "Orders on hold", "services.elicenses.label": "Expiring licenses {RES, plural, =0{today} one{yesterday} other{in # days}}", "services.elicenses.title": "Expiring licenses {RES, plural, =0{today} one{yesterday} other{in # days}}" });

        $translateProvider.translations("ru", { "copyright": "© 2017 Transas, Inc.", "copyright.company.short": "Transas", "common.loader.fosdconfig.loading": "Конфигурация...", "common.loader.error.base.message": "Что-то пошло не так", "common.loader.retry.description": "Нажмите ПОВТОРИТЬ для загрузки данных", "common.loader.retry.btn.name": "Повторить", "common.loader.retry.btn.title": "Нажмите ПОВТОРИТЬ для загрузки данных", "session.lastupdate": "Последнее обновление", "page.caption": "FOS Dashboard", "header.caption": "Dashboard", "tracking.pane.caption": "Отслеживание", "tracking.schedule.intime.label": "Вовремя", "tracking.schedule.intime.title": "Вовремя", "tracking.schedule.behind.label": "С опозданием", "tracking.schedule.behind.title": "С опозданием", "tracking.schedule.ahead.label": "С опережением", "tracking.schedule.ahead.title": "С опережением", "tracking.status.ok.label": "Состояние ОК", "tracking.status.ok.title": "Состояние ОК", "tracking.status.nok.label": "Состояние NOK", "tracking.status.nok.title": "Состояние NOK", "ports.pane.caption": "Порт прибытия", "ports.map.popup.label.goingto": "{RES, plural, =0{Нет судов идущих} one{Одно судно идет} other{# судов идет} } в%br%{name}", "expenses.pane.caption": "Суммарные расходы за последние {RES, plural, =0{days} one{день} other{# дн.}}", "expenses.total.label": "Суммарные расходы", "expenses.total.title": "Суммарные расходы", "expenses.budget.used.label": "Расход бюджета", "expenses.budget.used.title": "Расход бюджета", "expenses.orders.services.label": "Заказы на услуги", "expenses.orders.services.title": "Заказы на услуги", "expenses.orders.data.label": "Заказы на данные", "expenses.orders.data.title": "Заказы на данные", "alarms.pane.caption": "Тревога", "notifications.pane.caption": "Нотификации", "orders.onhold.label": "Отложенных заказа", "orders.onhold.title": "Отложенные заказы", "services.elicenses.label": "Истекших лицензий {RES, plural, =0{сегодня} one{вчера} other{# дн. назад}}", "services.elicenses.title": "Истекшие лицензии {RES, plural, =0{сегодня} one{вчера} other{# дн. назад}}" });
    }]);
})(window.angular);
(function (angular) {
    'use strict';
    /**
     * @type {{templateUrl: string}}
     */

    var FosdComponent = {
        bindings: {
            fosdConfigPromise: '<',
            onSelect: '&'
        },
        templateUrl: './fos-dashboard.component.html',
        controller: 'FosdDashboardController'
    };

    angular.module('fos-dashboard').component('fosDashboard', FosdComponent);
})(window.angular);
(function (angular) {
    'use strict';

    angular.module('fos-dashboard').constant('FOSD_ENUMS_CONFIG', FOSD_ENUMS_CONFIG);

    /**
     *
     * @param FOSD_API
     * @returns {{api_baseUrl: string, pollingInterval: {default: number, tracking: number, orders: number, ports: number, alerts: number, expenses: number, services: number, notifications: number}, queryParams: {services_period_days: number, expenses_last_days: number}}}
     * @constructor
     */
    function FOSD_ENUMS_CONFIG(FOSD_API) {

        return {
            'api_baseUrl': FOSD_API.apiBaseUrl || '',

            'pollingInterval': {
                'default': 10000,
                'tracking': 11000,
                'orders': 12000,
                'ports': 23000,
                'alerts': 14000,
                'expenses': 15000,
                'services': 16000,
                'notifications': 17000
            },
            'queryParams': {
                'services_period_days': 30,
                'expenses_last_days': 30
            },
            'transitionStateNames': {
                /*
                'ports'         : 'fosd_ports_details',
                'alarms'        : 'fosd_alarms_details',
                'notifications' : 'fosd_notifications_details',
                'e-services'    : 'fosd_eservices',
                'orders'        : 'fosd_orders'
                */
            }
        };
    }
})(window.angular);
(function (angular) {
    'use strict';

    FosdConfigService.$inject = ["$log", "FOSD_ENUMS_CONFIG"];
    angular.module('fos-dashboard').service('FosdConfigService', FosdConfigService);

    /**
     * @param $log
     * @param FOSD_ENUMS_CONFIG
     * @constructor
     */
    function FosdConfigService($log, FOSD_ENUMS_CONFIG) {

        'use strict';

        var logger = "FOSD CONFIG SERVICE";
        var options = angular.copy(FOSD_ENUMS_CONFIG);

        this.config = function (opt) {
            angular.extend(options, opt);
            $log.debug(logger, 'Config : base:', [FOSD_ENUMS_CONFIG], 'external:', [opt], 'result:', [options]);
            return options;
        };

        this.uConfig = function () {
            return options;
        };
    }
})(window.angular);
(function (angular) {
    'use strict';
    /**
     *
     */

    var FosdDashboardController = function () {

        /**
         *
         * @param $log
         * @param FosdConfigService
         * @param FosdLocalizeService
         */
        FosdDashboardController.$inject = ["$log", "FosdConfigService", "FosdLocalizeService"];
        function FosdDashboardController($log, FosdConfigService, FosdLocalizeService) {
            _classCallCheck(this, FosdDashboardController);

            this.$log = $log;
            this.FosdConfigService = FosdConfigService;
            this.FosdLocalizeService = FosdLocalizeService;
        }

        /**
         *
         */


        _createClass(FosdDashboardController, [{
            key: '$onInit',
            value: function $onInit() {
                this.FosdLocalizeService.init();
            }
        }, {
            key: '$handleSource',


            /**
             *
             */
            value: function $handleSource() {
                var _this = this;

                this.isLoaded = false;
                this.isError = false;

                this.$fosdConfigPromise.then(function (data) {
                    //this.isError = false;
                    _this.isError = _this.validateConfig(data);
                }, function () {
                    _this.isError = true;
                }).finally(function () {
                    _this.isLoaded = true;
                });
            }

            /**
             *
             * @param data
             * @returns {boolean}
             */

        }, {
            key: 'validateConfig',
            value: function validateConfig(data) {
                return !(this.FosdConfigService && this.FosdConfigService.config(data));
            }

            /**
             * @param event
             */

        }, {
            key: 'onSelectItem',
            value: function onSelectItem(event) {
                this.onSelect({
                    $event: event
                });
            }
        }, {
            key: 'isConfigLoaded',


            // $onDestroy() {};

            /**
             *
             * @returns {boolean}
             */
            get: function get() {
                return this.isLoaded && !this.isError;
            }

            /**
             * @returns {*}
             */

        }, {
            key: 'fosdConfigPromise',
            get: function get() {
                return this.$fosdConfigPromise;
            }

            /**
             * @param fosdConfigPromise
             */
            ,
            set: function set(fosdConfigPromise) {
                this.$fosdConfigPromise = fosdConfigPromise;

                if (fosdConfigPromise && angular.isFunction(fosdConfigPromise.then)) {
                    this.$handleSource(fosdConfigPromise);
                } else {
                    this.$log && this.$log.warn('Invalidate format for .fosdConfigPromise(): promise object is missing.');
                }
            }
        }]);

        return FosdDashboardController;
    }();

    angular.module('fos-dashboard').controller('FosdDashboardController', FosdDashboardController);
})(window.angular);
(function (angular) {
    'use strict';
    /**
     * @type {{}}
     */

    var FOSD_API = {
        'apiBaseUrl': '', //apiEndPoint
        'tracking': { Url: '/tracking', CustomOptions: false, Method: 'get' },
        'ports': { Url: '/vessels/ports', CustomOptions: false, Method: 'get' },
        'expenses': { Url: '/expenses', CustomOptions: false, Method: 'get' },
        'orders': { Url: '/orders', CustomOptions: false, Method: 'get' },
        'services': { Url: '/services/expiring', CustomOptions: false, Method: 'get' },
        'notifications': { Url: '/notifications', CustomOptions: false, Method: 'get' },
        'alarms': { Url: '/alarms', CustomOptions: false, Method: 'get' }
    };

    angular.module('fos-api', []).constant('FOSD_API', FOSD_API);
})(window.angular);
(function (angular) {
    'use strict';
    /**
     *
     * @type {{bindings: {}, templateUrl: string}}
     */

    var FosdHeaderComponent = {
        bindings: {},
        templateUrl: './app-header.html',
        controller: 'FosdAppHeaderController'
    };

    angular.module('fos-dashboard.common.app-header').component('appHeader', FosdHeaderComponent);
})(window.angular);
(function (angular) {
    'use strict';
    /**
     *
     */

    var FosdAppHeaderController = function () {

        /**
         * @param $scope
         * @param FOSD_ENUMS_EVENTS_POLLING
         */
        FosdAppHeaderController.$inject = ["$scope", "FOSD_ENUMS_EVENTS_POLLING"];
        function FosdAppHeaderController($scope, FOSD_ENUMS_EVENTS_POLLING) {
            var _this2 = this;

            _classCallCheck(this, FosdAppHeaderController);

            this.onFreshUpdate = $scope.$on(FOSD_ENUMS_EVENTS_POLLING.updated, function () /*event*/{
                _this2.validateFreshLabel();
            });
        }

        /**
         *
         */


        _createClass(FosdAppHeaderController, [{
            key: '$onInit',
            value: function $onInit() {
                this.validateFreshLabel();
            }

            /**
             *
             */

        }, {
            key: '$onDestroy',
            value: function $onDestroy() {
                this.onFreshUpdate();
                this.onFreshUpdate = null;
            }
        }, {
            key: 'validateFreshLabel',


            /**
             *
             */
            value: function validateFreshLabel() {
                this.timestamp = new Date();
            }
        }]);

        return FosdAppHeaderController;
    }();

    angular.module('fos-dashboard.common.app-header').controller('FosdAppHeaderController', FosdAppHeaderController);
})(window.angular);
(function (angular) {
    'use strict';
    /**
     * @type {{bindings: {}, templateUrl: string, controller: string}}
     */

    var FosdPaneAlarmsComponent = {
        bindings: {
            onSelect: '&'
        },
        templateUrl: './alarms.component.html',
        controller: 'FosdAlarmsController'
    };

    angular.module('fos-dashboard.components.alarms').component('paneAlarms', FosdPaneAlarmsComponent);
})(window.angular);
(function (angular) {
    'use strict';
    /**
     *
     */

    var FosdAlarmsController = function () {

        /**
         *
         * @param $scope
         * @param FosdAlarmsService
         * @param FOSD_ENUMS_EVENTS_ALARMS
         * @param FosdAlarmsPollingService
         * @param FosdStatesService
         */
        FosdAlarmsController.$inject = ["$scope", "FosdAlarmsService", "FOSD_ENUMS_EVENTS_ALARMS", "FosdAlarmsPollingService", "FosdStatesService"];
        function FosdAlarmsController($scope, FosdAlarmsService, FOSD_ENUMS_EVENTS_ALARMS, FosdAlarmsPollingService, FosdStatesService) {
            var _this3 = this;

            _classCallCheck(this, FosdAlarmsController);

            this.service = FosdAlarmsService;
            this.servicePoll = FosdAlarmsPollingService;
            this.serviceStates = FosdStatesService;
            this.onAlarmsList = $scope.$on(FOSD_ENUMS_EVENTS_ALARMS.listUpdated, function (event, data) {
                _this3.validateData(data);
            });
        }

        /**
         *
         */


        _createClass(FosdAlarmsController, [{
            key: '$onInit',
            value: function $onInit() {
                this.alarmsCollection = [];
                this.startPolling();
                this.validateData();
            }
        }, {
            key: '$onDestroy',


            /**
             *
             */
            value: function $onDestroy() {
                this.onAlarmsList();
                this.servicePoll.stopPolling();
            }
        }, {
            key: 'onSelectItem',


            /**
             * @param event
             */
            value: function onSelectItem(event) {
                if (event && event.item) {
                    this.serviceStates.actionAlarmItem(event.item.id);
                }
                this.onSelect({
                    $event: event
                });
            }

            /**
             * @param event
             */

        }, {
            key: 'onRetryLoad',
            value: function onRetryLoad(event) {
                this.startPolling();
            }

            /**
             * @param inList
             */

        }, {
            key: 'validateData',
            value: function validateData(inList) {
                this.alarmsCollection = inList || this.service.getAlarms();
            }

            /**
             *
             */

        }, {
            key: 'startPolling',
            value: function startPolling() {
                this.sourcePromise = this.servicePoll.startPolling();
            }
        }]);

        return FosdAlarmsController;
    }();

    angular.module('fos-dashboard.components.alarms').controller('FosdAlarmsController', FosdAlarmsController);
})(window.angular);
(function (angular) {
    'use strict';
    /**
     * @type {{listUpdated: string}}
     */

    var FOSD_ENUMS_EVENTS_ALARMS = {
        'listUpdated': 'EVENTS_ALARMS_LIST_UPDATED'
    };

    angular.module('fos-dashboard.components.alarms').constant('FOSD_ENUMS_EVENTS_ALARMS', FOSD_ENUMS_EVENTS_ALARMS);
})(window.angular);
(function (angular) {
    'use strict';

    angular.module('fos-dashboard.components.alarms').factory('FosdAlarmItem', FosdAlarmItem);

    /**
     * @returns {Function}
     * @constructor
     */
    function FosdAlarmItem() {
        return function (data) {
            this.id = data.id;
            this.name = data.name;
            this.value = data.count || 0;
        };
    }
})(window.angular);
(function (angular) {
    'use strict';

    FosdAlarmsService.$inject = ["$log", "$rootScope", "FOSD_ENUMS_EVENTS_ALARMS"];
    angular.module('fos-dashboard.components.alarms').service('FosdAlarmsService', FosdAlarmsService);

    /**
     * @param $log
     * @param $rootScope
     * @param FOSD_ENUMS_EVENTS_ALARMS
     * @returns {{EVENTS: *, updateAlarms: updateAlarms, getAlarms: getAlarms}}
     * @constructor
     */
    function FosdAlarmsService($log, $rootScope, FOSD_ENUMS_EVENTS_ALARMS) {
        'use strict';

        var logger = 'ALARMS SERVICE : \t',
            alarmsCollection = [];

        var service = {
            EVENTS: FOSD_ENUMS_EVENTS_ALARMS,
            updateAlarms: updateAlarms,
            getAlarms: getAlarms
        };
        return service;

        // Private Functions -----------------------------------------------------------------------------------

        /**
         * @returns {Array}
         */
        function getAlarms() {
            return alarmsCollection || [];
        }

        /**
         *
         * @param freshList
         */
        function updateAlarms(freshList) {
            $log.debug(logger, 'Update collection:', [freshList]);
            alarmsCollection = processList(freshList);
            fireChanges();
        }

        /**
         *
         */
        function fireChanges() {
            $rootScope.$broadcast(service.EVENTS.listUpdated, getAlarms());
        }

        /**
         * @param list
         * @returns {*}
         */
        function processList(list) {
            // something post-processing.
            // return $filter('orderBy')(list, "-value");
            return list;
        }
    }
})(window.angular);
(function (angular) {
    'use strict';
    /**
     * @type {{bindings: {onSelect: string}, templateUrl: string, controller: string}}
     */

    var FosdPaneEServicesComponent = {
        bindings: {
            onSelect: '&'
        },
        templateUrl: './e-services.component.html',
        controller: 'FosdEServicesController'
    };

    angular.module('fos-dashboard.components.e-services').component('paneLicenses', FosdPaneEServicesComponent);
})(window.angular);
(function (angular) {
    'use strict';
    /**
     *
     */

    var FosdEServicesController = function () {

        /**
         *
         * @param $scope
         * @param $rootScope
         * @param $translate
         * @param FosdEServicesService
         * @param FOSD_ENUMS_EVENTS_ESERVICES
         * @param FosdEServicesPollingService
         * @param FosdStatesService
         */
        FosdEServicesController.$inject = ["$scope", "$rootScope", "$translate", "FosdEServicesService", "FOSD_ENUMS_EVENTS_ESERVICES", "FosdEServicesPollingService", "FosdStatesService"];
        function FosdEServicesController($scope, $rootScope, $translate, FosdEServicesService, FOSD_ENUMS_EVENTS_ESERVICES, FosdEServicesPollingService, FosdStatesService) {
            var _this4 = this;

            _classCallCheck(this, FosdEServicesController);

            this.service = FosdEServicesService;
            this.servicePoll = FosdEServicesPollingService;
            this.serviceStates = FosdStatesService;
            this.$translate = $translate;

            this.onEServicesUpdate = $scope.$on(FOSD_ENUMS_EVENTS_ESERVICES.updated, function (event, data) {
                _this4.validateEServicesData(data);
            });

            this.onTranslationUpdate = $rootScope.$on('$translateChangeSuccess', function (event) {
                _this4.validateELicencesLabel();
            });
        }

        /**
         *
         */


        _createClass(FosdEServicesController, [{
            key: '$onInit',
            value: function $onInit() {
                this.model = {
                    eLicensesValue: 0,
                    eLicensesLabel: ''
                };
                this.startPolling();
                this.validateEServicesData();
            }

            /**
             *
             */

        }, {
            key: '$onDestroy',
            value: function $onDestroy() {
                this.onEServicesUpdate();
                this.onTranslationUpdate();
                this.servicePoll.stopPolling();
            }
        }, {
            key: 'validateEServicesData',


            /**
             * @param oVO
             */
            value: function validateEServicesData(oVO) {
                var eServ = oVO || this.service.getServices();
                this.model.eLicensesValue = eServ.expiringLicenses;
                this.validateELicencesLabel(eServ);
            }

            /**
             * @param oVO
             */

        }, {
            key: 'validateELicencesLabel',
            value: function validateELicencesLabel(oVO) {
                var eServ = oVO || this.service.getServices();
                this.model.eLicensesLabel = this.$translate.instant('services.elicenses.label', { RES: eServ.rangeLastDays });
            }

            /**
             *
             */

        }, {
            key: 'onSelectItem',
            value: function onSelectItem(event) {
                if (event) {
                    this.serviceStates.actionEServices();
                }
                this.onSelect({
                    $event: {
                        item: {
                            'id': 'e-service',
                            'eventSource': 'e-service'
                        }
                    }
                });
            }

            /**
             *
             */

        }, {
            key: 'onRetryLoad',
            value: function onRetryLoad() {
                this.startPolling();
            }

            /**
             *
             */

        }, {
            key: 'startPolling',
            value: function startPolling() {
                this.sourcePromise = this.servicePoll.startPolling();
            }
        }]);

        return FosdEServicesController;
    }();

    angular.module('fos-dashboard.components.e-services').controller('FosdEServicesController', FosdEServicesController);
})(window.angular);
(function (angular) {
    'use strict';

    /**
     * @type {{listUpdated: string}}
     */

    var FOSD_ENUMS_EVENTS_ESERVICES = {
        'updated': 'EVENTS_ESERVICES_UPDATED'
    };

    angular.module('fos-dashboard.components.e-services').constant('FOSD_ENUMS_EVENTS_ESERVICES', FOSD_ENUMS_EVENTS_ESERVICES);
})(window.angular);
(function (angular) {
    'use strict';

    angular.module('fos-dashboard.components.e-services').factory('FosdEServicesVO', FosdEServicesVO);

    /**
     * @returns {Function}
     * @constructor
     */
    function FosdEServicesVO() {
        return function (data, rangeLastDays) {
            this.expiringLicenses = data.expiring_licenses;
            this.rangeLastDays = rangeLastDays || 0;
        };
    }
})(window.angular);
(function (angular) {
    'use strict';

    FosdEServicesService.$inject = ["$log", "$rootScope", "FOSD_ENUMS_EVENTS_ESERVICES", "FosdEServicesVO"];
    angular.module('fos-dashboard.components.e-services').service('FosdEServicesService', FosdEServicesService);

    /**
     *
     * @param $log
     * @param $rootScope
     * @param FOSD_ENUMS_EVENTS_ESERVICES
     * @param FosdEServicesVO
     * @returns {{EVENTS: *, updateOrders: updateOrders, getOrders: getOrders}}
     * @constructor
     */
    function FosdEServicesService($log, $rootScope, FOSD_ENUMS_EVENTS_ESERVICES, FosdEServicesVO) {

        'use strict';

        var logger = 'E-SERVICES : \t';
        var eservicesVO = new FosdEServicesVO({});
        var service = {
            EVENTS: FOSD_ENUMS_EVENTS_ESERVICES,
            updateServices: updateServices,
            getServices: getServices
        };
        return service;

        // Private Functions -----------------------------------------------------------------------------------

        /**
         * @param vo
         */
        function updateServices(vo) {
            $log.debug(logger, 'Update Services VO:', [vo]);
            eservicesVO = processEServices(vo);
            fireChanges();
        }

        /**
         * @returns {Array}
         */
        function getServices() {
            return eservicesVO || new FosdEServicesVO({});
        }

        /**
         *
         */
        function fireChanges() {
            $rootScope.$broadcast(service.EVENTS.updated, getServices());
        }

        /**
         * @param vo
         * @returns {*}
         */
        function processEServices(vo) {
            // something post-processing.
            return vo;
        }
    }
})(window.angular);
(function (angular) {
    'use strict';
    /**
     *
     * @type {{bindings: {expensesTotal: string}, templateUrl: string, controller: string}}
     */

    var FosdPaneExpensesComponent = {
        bindings: {},
        templateUrl: './expenses.component.html',
        controller: 'FosdExpensesController'
    };

    angular.module('fos-dashboard.components.expenses').component('paneExpenses', FosdPaneExpensesComponent);
})(window.angular);
(function (angular) {
    'use strict';
    /**
     *
     */

    var FosdExpensesController = function () {

        /**
         * @param $scope
         * @param FosdExpensesService
         * @param FosdOrdersService
         * @param FosdExpensesPollingService
         * @param FosdConfigService
         * @param FOSD_ENUMS_EVENTS_EXPENSES
         * @param FOSD_ENUMS_EVENTS_ORDERS
         * @param FOSD_ENUMS_CHARTS_BASE_COLORS
         * @param FosdStringUtils_totalValue
         */
        FosdExpensesController.$inject = ["$scope", "FosdExpensesService", "FosdOrdersService", "FosdExpensesPollingService", "FosdConfigService", "FOSD_ENUMS_EVENTS_EXPENSES", "FOSD_ENUMS_EVENTS_ORDERS", "FOSD_ENUMS_CHARTS_BASE_COLORS", "FosdStringUtils_totalValue"];
        function FosdExpensesController($scope, FosdExpensesService, FosdOrdersService, FosdExpensesPollingService, FosdConfigService, FOSD_ENUMS_EVENTS_EXPENSES, FOSD_ENUMS_EVENTS_ORDERS, FOSD_ENUMS_CHARTS_BASE_COLORS, FosdStringUtils_totalValue) {
            var _this5 = this;

            _classCallCheck(this, FosdExpensesController);

            this.service = FosdExpensesService;
            this.servicePoll = FosdExpensesPollingService;
            this.serviceOrders = FosdOrdersService;
            this.serviceConfig = FosdConfigService;

            this.COLORS = FOSD_ENUMS_CHARTS_BASE_COLORS;
            this.utilsTotal = FosdStringUtils_totalValue;

            this.onExpensesUpdate = $scope.$on(FOSD_ENUMS_EVENTS_EXPENSES.updated, function (event, data) {
                _this5.validateData(data || {});
            });

            this.onOrdersUpdate = $scope.$on(FOSD_ENUMS_EVENTS_ORDERS.updated, function (event, data) {
                _this5.validateOrderData(data);
            });
        }

        /**
         *
         */


        _createClass(FosdExpensesController, [{
            key: '$onInit',
            value: function $onInit() {
                var config = this.serviceConfig.uConfig();
                this.model = {
                    budgetUsagePct: 0,
                    expensesPeriod: config && config.queryParams ? config.queryParams.expenses_last_days : 0,
                    expensesTotal: 0,
                    expensesCurrency: '',
                    eCategoriesCollection: [],
                    orders4Data: 0,
                    orders4Services: 0,
                    activeLegend: null
                };

                this.startPolling();
                this.validateData();
                this.validateOrderData();
            }

            /**
             *
             */

        }, {
            key: '$onDestroy',
            value: function $onDestroy() {
                this.onExpensesUpdate();
                this.onOrdersUpdate();
                this.servicePoll.stopPolling();
            }
        }, {
            key: 'onRetryLoad',


            /**
             */
            value: function onRetryLoad() {
                this.startPolling();
            }

            /**
             *
             */

        }, {
            key: 'startPolling',
            value: function startPolling() {
                this.sourcePromise = this.servicePoll.startPolling();
            }

            /**
             *
             * @param eVO - FosdExpensesVO
             */

        }, {
            key: 'validateData',
            value: function validateData() {
                var eVO = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};


                var budget = eVO.budget || this.service.getBudget();
                var categories = eVO.categories || this.service.getCategories();

                this.model.eCategoriesCollection = this.processChartsData(categories);
                this.model.budgetUsagePct = budget.budgetUsagePct + '%'; // ToDo : check value.
                this.model.expensesTotal = this.utilsTotal(budget.total);
                this.model.expensesCurrency = budget.currency;
            }

            /**
             *
             * @param oVO
             */

        }, {
            key: 'validateOrderData',
            value: function validateOrderData(oVO) {
                var orders = oVO || this.serviceOrders.getOrders();
                this.model.orders4Data = orders.forData;
                this.model.orders4Services = orders.forServices;
            }

            /**
             * @param eCategories
             * @returns {*}
             */

        }, {
            key: 'processChartsData',
            value: function processChartsData(eCategories) {
                var _this6 = this;

                var i = 0;
                return eCategories.map(function (item) {
                    return {
                        "id": item.id,
                        "label": item.name,
                        "value": item.value,
                        "color": _this6.COLORS[i++]
                    };
                });
            }

            /**
             *
             * @param $event
             */

        }, {
            key: 'onLegendItem',
            value: function onLegendItem($event) {
                if ($event) {
                    this.model.activeLegend = $event.item;
                }
            }
        }]);

        return FosdExpensesController;
    }();

    angular.module('fos-dashboard.components.expenses').controller('FosdExpensesController', FosdExpensesController);
})(window.angular);
(function (angular) {
    'use strict';

    /**
     * @type {{listUpdated: string}}
     */

    var FOSD_ENUMS_EVENTS_EXPENSES = {
        'updated': 'EVENTS_EXPENSES_UPDATED'
    };

    /**
     * @type {string[]}
     */
    var FOSD_ENUMS_CHARTS_BASE_COLORS = ['#1b6fb6', '#6eb4c7', '#54829b', '#988aff', '#62dbf3', '#f464b8', '#7ac5fe', '#024873', '#D9B596', '#A67153', '#5E652C', '#854811', '#C47C00', '#240B03', '#752A0B', '#BD776F', '#4D3400', '#9BA548', '#404740', '#407840', '#544351'];

    angular.module('fos-dashboard.components.expenses').constant('FOSD_ENUMS_EVENTS_EXPENSES', FOSD_ENUMS_EVENTS_EXPENSES).constant('FOSD_ENUMS_CHARTS_BASE_COLORS', FOSD_ENUMS_CHARTS_BASE_COLORS);
})(window.angular);
(function (angular) {
    'use strict';

    angular.module('fos-dashboard.components.expenses').factory('FosdExpensesVO', FosdExpensesVO).factory('FosdExpensesBudgetVO', FosdExpensesBudgetVO).factory('FosdExpensesCategoryItem', FosdExpensesCategoryItem);

    /**
     * @returns {Function}
     * @constructor
     */
    function FosdExpensesVO() {
        return function (budgetVO, categoriesCollection) {
            this.budget = budgetVO; //new FosdExpensesBudgetVO(budgetVO)
            this.categories = categoriesCollection;
        };
    }

    /**
     * @returns {Function}
     * @constructor
     */
    function FosdExpensesBudgetVO() {
        return function (data /*={}*/) {
            this.total = data.total || 0;
            this.currency = data.currency; // default value of  one-way binding.
            this.budgetUsagePct = data.budget_usage_pct || 0;
        };
    }

    /**
     * @returns {Function}
     * @constructor
     */
    function FosdExpensesCategoryItem() {
        return function (data) {
            this.id = data.id;
            this.name = data.name;
            this.value = data.value || 0;
        };
    }
})(window.angular);
(function (angular) {
    'use strict';

    FosdExpensesService.$inject = ["$log", "$rootScope", "FOSD_ENUMS_EVENTS_EXPENSES", "FosdExpensesBudgetVO", "FosdExpensesVO"];
    angular.module('fos-dashboard.components.expenses').service('FosdExpensesService', FosdExpensesService);

    /**
     * @param $log
     * @param $rootScope
     * @param FOSD_ENUMS_EVENTS_EXPENSES
     * @param FosdExpensesBudgetVO
     * @param FosdExpensesVO
     * @returns {{EVENTS: *, updateExpenses: updateExpenses, getBudget: getBudget, getCategories: getCategories}}
     * @constructor
     */
    function FosdExpensesService($log, $rootScope, FOSD_ENUMS_EVENTS_EXPENSES, FosdExpensesBudgetVO, FosdExpensesVO) {

        'use strict';

        var logger = 'EXPENSES SERVICE : \t';
        var eBudgetVO = new FosdExpensesBudgetVO({});
        var eCategoriesCollection = [];
        var service = {
            EVENTS: FOSD_ENUMS_EVENTS_EXPENSES,
            updateExpenses: updateExpenses,
            getBudget: getBudget,
            getCategories: getCategories
        };

        return service;

        // Private Functions -----------------------------------------------------------------------------------

        /**
         * @param eVO
         */
        function updateExpenses(eVO) {
            $log.debug(logger, 'Update Expenses VO:', [eVO.budget], [eVO.categories]);
            eBudgetVO = processBudget(eVO.budget);
            eCategoriesCollection = processCategories(eVO.categories);
            fireChanges();
        }

        /**
         * @returns {Array}
         */
        function getBudget() {
            return eBudgetVO || new FosdExpensesBudgetVO({});
        }

        /**
         * @returns {Array}
         */
        function getCategories() {
            return eCategoriesCollection || [];
        }

        /**
         *
         */
        function fireChanges() {
            $rootScope.$broadcast(service.EVENTS.updated, new FosdExpensesVO(eBudgetVO, eCategoriesCollection));
        }

        /**
         * @param vo
         * @returns {*}
         */
        function processBudget(vo) {
            // something post-processing.
            return vo;
        }

        /**
         * @param list
         * @returns {*}
         */
        function processCategories(list) {
            // something post-processing.
            return list;
        }
    }
})(window.angular);
(function (angular) {
    'use strict';
    /**
     *
     * @type {{bindings: {onSelect: string}, templateUrl: string, controller: string}}
     */

    var FosdPaneOrdersComponent = {
        bindings: {
            onSelect: '&'
        },
        templateUrl: './orders.component.html',
        controller: 'FosdOrdersController'
    };

    angular.module('fos-dashboard.components.orders').component('paneOrders', FosdPaneOrdersComponent);
})(window.angular);
(function (angular) {
    'use strict';
    /**
     *
     */

    var FosdOrdersController = function () {

        /**
         * @param $scope
         * @param FosdOrdersService
         * @param FOSD_ENUMS_EVENTS_ORDERS
         * @param FosdOrdersPollingService
         * @param FosdStatesService
         */
        FosdOrdersController.$inject = ["$scope", "FosdOrdersService", "FOSD_ENUMS_EVENTS_ORDERS", "FosdOrdersPollingService", "FosdStatesService"];
        function FosdOrdersController($scope, FosdOrdersService, FOSD_ENUMS_EVENTS_ORDERS, FosdOrdersPollingService, FosdStatesService) {
            var _this7 = this;

            _classCallCheck(this, FosdOrdersController);

            this.service = FosdOrdersService;
            this.servicePoll = FosdOrdersPollingService;
            this.serviceStates = FosdStatesService;
            this.onOrdersUpdate = $scope.$on(FOSD_ENUMS_EVENTS_ORDERS.updated, function (event, data) {
                _this7.validateOrderData(data);
            });
        }

        /**
         *
         */


        _createClass(FosdOrdersController, [{
            key: '$onInit',
            value: function $onInit() {
                this.model = {
                    ordersOnHold: 0
                };
                this.startPolling();
                this.validateOrderData();
            }

            /**
             *
             */

        }, {
            key: '$onDestroy',
            value: function $onDestroy() {
                this.onOrdersUpdate();
                this.servicePoll.stopPolling();
            }
        }, {
            key: 'validateOrderData',


            /**
             * @param oVO
             */
            value: function validateOrderData(oVO) {
                var orders = oVO || this.service.getOrders();
                this.model.ordersOnHold = orders.onHold;
            }

            /**
             *
             */

        }, {
            key: 'onSelectItem',
            value: function onSelectItem(event) {
                if (event) {
                    this.serviceStates.actionOrdersOnHold();
                }
                this.onSelect({
                    $event: {
                        item: {
                            'id': 'orders',
                            'eventSource': 'orders'
                        }
                    }
                });
            }

            /**
             */

        }, {
            key: 'onRetryLoad',
            value: function onRetryLoad() {
                this.startPolling();
            }

            /**
             *
             */

        }, {
            key: 'startPolling',
            value: function startPolling() {
                this.sourcePromise = this.servicePoll.startPolling();
            }
        }]);

        return FosdOrdersController;
    }();

    angular.module('fos-dashboard.components.orders').controller('FosdOrdersController', FosdOrdersController);
})(window.angular);
(function (angular) {
    'use strict';

    /**
     * @type {{listUpdated: string}}
     */

    var FOSD_ENUMS_EVENTS_ORDERS = {
        'updated': 'EVENTS_ORDERS_UPDATED'
    };

    angular.module('fos-dashboard.components.orders').constant('FOSD_ENUMS_EVENTS_ORDERS', FOSD_ENUMS_EVENTS_ORDERS);
})(window.angular);
(function (angular) {
    'use strict';

    angular.module('fos-dashboard.components.orders').factory('FosdOrdersVO', FosdOrdersVO);

    /**
     * @returns {Function}
     * @constructor
     */
    function FosdOrdersVO() {
        return function (data /*={}*/) {
            this.forServices = data.for_services;
            this.forData = data.for_data;
            this.onHold = data.on_hold;
        };
    }
})(window.angular);
(function (angular) {
    'use strict';

    FosdOrdersService.$inject = ["$log", "$rootScope", "FOSD_ENUMS_EVENTS_ORDERS", "FosdOrdersVO"];
    angular.module('fos-dashboard.components.orders').service('FosdOrdersService', FosdOrdersService);

    /**
     * @param $log
     * @param $rootScope
     * @param FOSD_ENUMS_EVENTS_ORDERS
     * @param FosdOrdersVO
     * @returns {{EVENTS: *, updateOrders: updateOrders, getOrders: getOrders}}
     * @constructor
     */
    function FosdOrdersService($log, $rootScope, FOSD_ENUMS_EVENTS_ORDERS, FosdOrdersVO) {

        'use strict';

        var logger = 'ORDERS SERVICE : \t';
        var ordersVO = new FosdOrdersVO({});
        var service = {
            EVENTS: FOSD_ENUMS_EVENTS_ORDERS,
            updateOrders: updateOrders,
            getOrders: getOrders
        };
        return service;

        // Private Functions -----------------------------------------------------------------------------------

        /**
         * @param vo
         */
        function updateOrders(vo) {
            $log.debug(logger, 'Update Orders VO:', [vo]);
            ordersVO = processOrders(vo);
            fireChanges();
        }

        /**
         * @returns {Array}
         */
        function getOrders() {
            return ordersVO || new FosdOrdersVO({});
        }

        /**
         *
         */
        function fireChanges() {
            $rootScope.$broadcast(service.EVENTS.updated, getOrders());
        }

        /**
         * @param vo
         * @returns {*}
         */
        function processOrders(vo) {
            // something post-processing.
            return vo;
        }
    }
})(window.angular);
(function (angular) {
    'use strict';
    /**
     * @type {{bindings: {}, templateUrl: string, controller: string}}
     */

    var FosdPaneNotificationsComponent = {
        bindings: {
            onSelect: '&'
        },
        templateUrl: './notifications.component.html',
        controller: 'FosdNotificationController'
    };

    angular.module('fos-dashboard.components.notifications').component('paneNotifications', FosdPaneNotificationsComponent);
})(window.angular);
(function (angular) {
    'use strict';
    /**
     *
     */

    var FosdNotificationController = function () {

        /**
         * @param $scope
         * @param FosdNotificationsService
         * @param FOSD_ENUMS_EVENTS_NOTIFICATIONS
         * @param FosdNotificationsPollingService
         * @param FosdStatesService
         */
        FosdNotificationController.$inject = ["$scope", "FosdNotificationsService", "FOSD_ENUMS_EVENTS_NOTIFICATIONS", "FosdNotificationsPollingService", "FosdStatesService"];
        function FosdNotificationController($scope, FosdNotificationsService, FOSD_ENUMS_EVENTS_NOTIFICATIONS, FosdNotificationsPollingService, FosdStatesService) {
            var _this8 = this;

            _classCallCheck(this, FosdNotificationController);

            this.service = FosdNotificationsService;
            this.servicePoll = FosdNotificationsPollingService;
            this.serviceStates = FosdStatesService;
            this.onNotiesList = $scope.$on(FOSD_ENUMS_EVENTS_NOTIFICATIONS.listUpdated, function (event, data) {
                _this8.validateData(data);
            });
        }

        /**
         *
         */


        _createClass(FosdNotificationController, [{
            key: '$onInit',
            value: function $onInit() {
                this.notificationCollection = [];
                this.startPolling();
                this.validateData();
            }
        }, {
            key: '$onDestroy',


            /**
             *
             */
            value: function $onDestroy() {
                this.onNotiesList();
                this.servicePoll.stopPolling();
            }
        }, {
            key: 'onSelectItem',


            /**
             * @param event
             */
            value: function onSelectItem(event) {
                if (event && event.item) {
                    this.serviceStates.actionPortItem(event.item.id);
                }
                this.onSelect({
                    $event: event
                });
            }

            /**
             * @param event
             */

        }, {
            key: 'onRetryLoad',
            value: function onRetryLoad(event) {
                this.startPolling();
            }

            /**
             *
             */

        }, {
            key: 'startPolling',
            value: function startPolling() {
                this.sourcePromise = this.servicePoll.startPolling();
            }

            /**
             * @param inList
             */

        }, {
            key: 'validateData',
            value: function validateData(inList) {
                this.notificationCollection = inList || this.service.getNotifications();
            }
        }]);

        return FosdNotificationController;
    }();

    angular.module('fos-dashboard.components.notifications').controller('FosdNotificationController', FosdNotificationController);
})(window.angular);
(function (angular) {
    'use strict';
    /**
     *
     * @type {{listUpdated: string}}
     */

    var FOSD_ENUMS_EVENTS_NOTIFICATIONS = {
        'listUpdated': 'EVENTS_NOTIFICATIONS_LIST_UPDATED'
    };

    angular.module('fos-dashboard.components.notifications').constant('FOSD_ENUMS_EVENTS_NOTIFICATIONS', FOSD_ENUMS_EVENTS_NOTIFICATIONS);
})(window.angular);
(function (angular) {
    'use strict';

    angular.module('fos-dashboard.components.notifications').factory('FosdNotificationItem', FosdNotificationItem);

    /**
     * @returns {Function}
     * @constructor
     */
    function FosdNotificationItem() {
        return function (data /*={}*/) {
            this.id = data.id; // GenerateUniqueId.next()
            this.name = data.name;
            this.value = data.count || 0;
        };
    }
})(window.angular);
(function (angular) {
    'use strict';

    FosdNotificationsService.$inject = ["$log", "$rootScope", "FOSD_ENUMS_EVENTS_NOTIFICATIONS"];
    angular.module('fos-dashboard.components.notifications').service('FosdNotificationsService', FosdNotificationsService);

    /**
     * @param $log
     * @param $rootScope
     * @param FOSD_ENUMS_EVENTS_NOTIFICATIONS
     * @returns {{EVENTS: *, updateNotifications: updateNotifications, getNotifications: getNotifications}}
     * @constructor
     */
    function FosdNotificationsService($log, $rootScope, FOSD_ENUMS_EVENTS_NOTIFICATIONS) {
        'use strict';

        var logger = 'NOTIFICATIONS SERVICE',
            notificationsCollection = [];
        var service = {
            EVENTS: FOSD_ENUMS_EVENTS_NOTIFICATIONS,
            updateNotifications: updateNotifications,
            getNotifications: getNotifications
        };
        return service;

        // Private Functions -----------------------------------------------------------------------------------

        /**
         * @returns {Array}
         */
        function getNotifications() {
            return notificationsCollection || [];
        }

        /**
         *
         * @param freshList
         */
        function updateNotifications(freshList) {
            $log.debug(logger, 'Update collection:', [freshList]);
            notificationsCollection = processList(freshList);
            fireChanges();
        }

        /**
         *
         */
        function fireChanges() {
            $rootScope.$broadcast(service.EVENTS.listUpdated, getNotifications());
        }

        /**
         *
         * @param list
         * @returns {*}
         */
        function processList(list) {
            // something post-processing.
            // return $filter('orderBy')(list, "-value");
            return list;
        }
    }
})(window.angular);
(function (angular) {
    'use strict';
    /**
     *
     * @type {{bindings: {}, templateUrl: string, controller: string}}
     */

    var FosdPanePortsCallsComponent = {
        bindings: {
            portsCollection: '<',
            onSelect: '&'
        },
        templateUrl: './portscalls.component.html',
        controller: 'FosdPortsCallsController'
    };

    angular.module('fos-dashboard.components.portscalls').component('panePortsCalls', FosdPanePortsCallsComponent);
})(window.angular);
(function (angular) {
    'use strict';
    /**
     *
     */

    var FosdPortsCallsController = function () {

        /**
         *
         * @param $scope
         * @param FosdPortsCallsService
         * @param FOSD_ENUMS_EVENTS_PORTS
         * @param FosdPortsPollingService
         * @param FosdStatesService
         */
        FosdPortsCallsController.$inject = ["$scope", "FosdPortsCallsService", "FOSD_ENUMS_EVENTS_PORTS", "FosdPortsPollingService", "FosdStatesService"];
        function FosdPortsCallsController($scope, FosdPortsCallsService, FOSD_ENUMS_EVENTS_PORTS, FosdPortsPollingService, FosdStatesService) {
            var _this9 = this;

            _classCallCheck(this, FosdPortsCallsController);

            this.service = FosdPortsCallsService;
            this.servicePoll = FosdPortsPollingService;
            this.serviceStates = FosdStatesService;
            this.onPortsList = $scope.$on(FOSD_ENUMS_EVENTS_PORTS.listUpdated, function (event, data) {
                _this9.validateData(data ? data.ports : null);
            });
        }

        /**
         *
         */


        _createClass(FosdPortsCallsController, [{
            key: '$onInit',
            value: function $onInit() {
                this.portsCollection = null;
                this.portActive = null;
                this.startPolling();
                this.validateData();
            }
        }, {
            key: '$onDestroy',


            /**
             *
             */
            value: function $onDestroy() {
                this.onPortsList();
                this.servicePoll.stopPolling();
            }
        }, {
            key: 'onSelectItem',


            /**
             * @param event
             */
            value: function onSelectItem(event) {
                if (event && event.item) {
                    this.serviceStates.actionPortItem(event.item.id);
                }
                this.onSelect({
                    $event: event
                });
            }

            /**
             * @param event
             */

        }, {
            key: 'onHoverItem',
            value: function onHoverItem(event) {
                if (event && event.item) {
                    this.selectedMarker = event.item.id;
                }
            }

            /**
             * @param id
             */

        }, {
            key: 'onHoverMarker',
            value: function onHoverMarker(id) {
                this.portActive = id;
            }

            /**
             * @param event
             */

        }, {
            key: 'onRetryLoad',
            value: function onRetryLoad(event) {
                this.startPolling();
            }

            /**
             * @param inList
             */

        }, {
            key: 'validateData',
            value: function validateData(inList) {
                var list = inList || this.service.getPorts();
                this.validatePortsList(list);
            }

            /**
             * @param list
             */

        }, {
            key: 'validatePortsList',
            value: function validatePortsList(list) {
                this.portsCollection = list;
                this.portActive = null;
            }

            /**
             *
             */

        }, {
            key: 'startPolling',
            value: function startPolling() {
                this.sourcePromise = this.servicePoll.startPolling();
            }
        }]);

        return FosdPortsCallsController;
    }();

    angular.module('fos-dashboard.components.portscalls').controller('FosdPortsCallsController', FosdPortsCallsController);
})(window.angular);
(function (angular) {
    'use strict';
    /**
     *
     * @type {{listUpdated: string}}
     */

    var FOSD_ENUMS_EVENTS_PORTS = {
        'listUpdated': 'EVENTS_PORTS_LIST_UPDATED'
    };

    angular.module('fos-dashboard.components.portscalls').constant('FOSD_ENUMS_EVENTS_PORTS', FOSD_ENUMS_EVENTS_PORTS);
})(window.angular);
(function (angular) {
    'use strict';

    angular.module('fos-dashboard.components.portscalls').factory('FosdPortsItem', FosdPortsItem);

    /**
     * @returns {Function}
     * @constructor
     */
    function FosdPortsItem() {
        return function (data) {
            this.id = data.id /*|| GenerateUniqueId.next()*/;
            this.name = data.name;
            this.value = this.shipsCount = data.ships_count || 0;
            this.lat = data.lat;
            this.lon = data.lon;
        };
    }
})(window.angular);
(function (angular) {
    'use strict';

    FosdPortsCallsService.$inject = ["$log", "$rootScope", "$filter", "FOSD_ENUMS_EVENTS_PORTS"];
    angular.module('fos-dashboard.components.portscalls').service('FosdPortsCallsService', FosdPortsCallsService);

    /**
     *
     * @param $log
     * @param $rootScope
     * @param $filter
     * @param FOSD_ENUMS_EVENTS_PORTS
     * @returns {{EVENTS: *, updatePorts: updatePorts, getPorts: getPorts}}
     * @constructor
     */
    function FosdPortsCallsService($log, $rootScope, $filter, FOSD_ENUMS_EVENTS_PORTS) {
        'use strict';

        var logger = 'PORTS SERVICE : \t',
            portsCollection = [];
        //localePrefix = 'portname.';

        var service = {
            EVENTS: FOSD_ENUMS_EVENTS_PORTS,
            updatePorts: updatePorts,
            getPorts: getPorts,
            onPortDetails: onPortDetails
        };

        return service;

        // Private Functions -----------------------------------------------------------------------------------

        /**
         * @returns {Array}
         */
        function getPorts() {
            return portsCollection || [];
        }

        /**
         * @param freshList
         */
        function updatePorts(freshList) {
            $log.debug(logger, 'Update collection:', [freshList]);
            portsCollection = processList(freshList);
            fireChanges();
        }

        /**
         *
         */
        function fireChanges() {
            $rootScope.$broadcast(service.EVENTS.listUpdated, { ports: getPorts() });
        }

        /**
         *
         * @param list
         * @returns {*}
         */
        function processList(list) {
            // something post-processing.
            // for example, port-name translation :
            /* list.forEach(item => {
                let key = localePrefix + item.unlocode.toLowerCase();
                let tName = $translate.instant(key); // item.unlocode initialized in FosdPortsItem.
                tName && (tName !== key) && (item.name = tName);
            });*/
            return $filter('orderBy')(list, "-value");
        }

        /**
         *
         */
        function onPortDetails(portItem) {}
    }
})(window.angular);
(function (angular) {
    'use strict';
    /**
     *
     * @type {{bindings: {}, templateUrl: string, controller: string}}
     */

    var FosdPaneTrackingComponent = {
        bindings: {},
        templateUrl: './tracking.component.html',
        controller: 'FosdTrackingController'
    };

    angular.module('fos-dashboard.components.tracking').component('paneTracking', FosdPaneTrackingComponent);
})(window.angular);
(function (angular) {
    'use strict';
    /**
     *
     */

    var FosdTrackingController = function () {

        /**
         * @param $scope
         * @param FosdTrackingService
         * @param FOSD_ENUMS_EVENTS_TRACKING
         * @param FosdTrackingPollingService
         */
        FosdTrackingController.$inject = ["$scope", "FosdTrackingService", "FOSD_ENUMS_EVENTS_TRACKING", "FosdTrackingPollingService"];
        function FosdTrackingController($scope, FosdTrackingService, FOSD_ENUMS_EVENTS_TRACKING, FosdTrackingPollingService) {
            var _this10 = this;

            _classCallCheck(this, FosdTrackingController);

            this.service = FosdTrackingService;
            this.servicePoll = FosdTrackingPollingService;

            this.onTrackingUpdate = $scope.$on(FOSD_ENUMS_EVENTS_TRACKING.updated, function (event, data) {
                _this10.validateData(data);
            });
        }

        /**
         *
         */


        _createClass(FosdTrackingController, [{
            key: '$onInit',
            value: function $onInit() {
                this.model = {};
                this.startPolling();
                this.validateData();
            }

            /**
             *
             */

        }, {
            key: '$onDestroy',
            value: function $onDestroy() {
                this.onTrackingUpdate();
                this.servicePoll.stopPolling();
            }
        }, {
            key: 'onRetryLoad',


            /**
             */
            value: function onRetryLoad() {
                this.startPolling();
            }

            /**
             *
             */

        }, {
            key: 'startPolling',
            value: function startPolling() {
                this.sourcePromise = this.servicePoll.startPolling();
            }

            /**
             * @param tVO - FosdExpensesVO
             */

        }, {
            key: 'validateData',
            value: function validateData(tVO /* = {}*/) {
                this.model = tVO || this.service.getTracking() || {};
            }
        }]);

        return FosdTrackingController;
    }();

    angular.module('fos-dashboard.components.tracking').controller('FosdTrackingController', FosdTrackingController);
})(window.angular);
(function (angular) {
    'use strict';

    /**
     * @type {{listUpdated: string}}
     */

    var FOSD_ENUMS_EVENTS_TRACKING = {
        'updated': 'EVENTS_TRACKING_UPDATED'
    };

    angular.module('fos-dashboard.components.tracking').constant('FOSD_ENUMS_EVENTS_TRACKING', FOSD_ENUMS_EVENTS_TRACKING);
})(window.angular);
(function (angular) {
    'use strict';

    angular.module('fos-dashboard.components.tracking').factory('FosdTrackingVO', FosdTrackingVO);

    /**
     * @returns {Function}
     * @constructor
     */
    function FosdTrackingVO() {
        return function (data /*={}*/) {
            this.scheduleInTime = data.in_time;
            this.scheduleBehind = data.behind;
            this.scheduleAhead = data.ahead;
            this.trackingOK = data.ok;
            this.trackingNOK = data.nok;
        };
    }
})(window.angular);
(function (angular) {
    'use strict';

    FosdTrackingService.$inject = ["$log", "$rootScope", "FosdTrackingVO", "FOSD_ENUMS_EVENTS_TRACKING"];
    angular.module('fos-dashboard.components.tracking').service('FosdTrackingService', FosdTrackingService);

    /**
     * 
     * @param $log
     * @param $rootScope
     * @param FosdTrackingVO
     * @param FOSD_ENUMS_EVENTS_TRACKING
     * @returns {{EVENTS: *, updateTracking: updateTracking, getTracking: getTracking}}
     * @constructor
     */
    function FosdTrackingService($log, $rootScope, FosdTrackingVO, FOSD_ENUMS_EVENTS_TRACKING) {

        'use strict';

        var logger = 'TRACKING SERVICE : \t';
        var trackingVO = new FosdTrackingVO({});
        var service = {
            EVENTS: FOSD_ENUMS_EVENTS_TRACKING,
            updateTracking: updateTracking,
            getTracking: getTracking
        };

        return service;

        // Private Functions -----------------------------------------------------------------------------------

        /**
         * @param vo
         */
        function updateTracking(vo) {
            $log.debug(logger, 'Update Tracking VO:', [vo]);
            trackingVO = processTracking(vo);
            fireChanges();
        }

        /**
         * @returns {Array}
         */
        function getTracking() {
            return trackingVO || new FosdTrackingVO({});
        }

        /**
         *
         */
        function fireChanges() {
            $rootScope.$broadcast(service.EVENTS.updated, getTracking());
        }

        /**
         * @param vo
         * @returns {*}
         */
        function processTracking(vo) {
            // something post-processing.
            return vo;
        }
    }
})(window.angular);
(function (angular) {
    'use strict';

    FosdLocalizeService.$inject = ["$log", "$translate"];
    angular.module('fos-dashboard.core.localize').factory('FosdLocalizeService', FosdLocalizeService);

    // Fosd Localize Service
    // ----------------------------------------------------------------------------------------------------------
    //

    /**
     *
     * @param $log
     * @param $translate
     * @returns {{init: init, setLocale: setLocale}}
     * @constructor
     */
    function FosdLocalizeService($log, $translate) {

        var SN = 'LOCALIZE SERVICE :';
        var DEFAULT_LOCALE = 'en-us';

        return {
            init: init,
            setLocale: setLocale
        };

        // Private Functions -----------------------------------------------------------------------------------

        /**
         *
         */
        function init() {

            // $log.debug(SN, 'Registered vocabularies : ', $translate.getAvailableLanguageKeys());
            var currentLang = $translate.proposedLanguage() || $translate.use();

            $log.debug(SN, 'Init : predefined Lang:', currentLang || 'undefined');
            setLocale(currentLang || DEFAULT_LOCALE);
        }

        /**
         * @param locale
         */
        function setLocale(locale) {
            $log.debug(SN, 'Set locale :', locale);
            $translate.use(locale);

            /*if ($translate.use() !== locale){
                $log.warn(SN, 'Something went wrong : canceled : ', locale);
             }*/
        }
    }
})(window.angular);
(function (angular) {
    'use strict';

    FosdStatesService.$inject = ["$log", "FosdConfigService"];
    angular.module('fos-dashboard.core.states').factory('FosdStatesService', FosdStatesService);

    // Fosd States Service
    // ----------------------------------------------------------------------------------------------------------
    // Used:

    function FosdStatesService($log, /*,$state,*/FosdConfigService) {

        var SN = 'STATES SERVICE :';

        return {
            actionAlarmItem: actionAlarmItem,
            actionNoticeItem: actionNoticeItem,
            actionPortItem: actionPortDetails,
            actionEServices: actionEServices,
            actionOrdersOnHold: actionOrdersOnHold
        };

        // Private Functions -----------------------------------------------------------------------------------

        /**
         * @param target
         * @returns {null}
         */
        function getStateName(target) {
            var config = FosdConfigService.uConfig();
            return config && config.transitionStateNames ? config.transitionStateNames[target] : null;
        }

        /**
         * @param stateName
         * @param stateParams
         */
        function baseAction(stateName, stateParams) {
            if (stateName) {
                $log.debug(SN, 'Transition to :', stateName, stateParams);
                //$state.go(stateName, stateParams);
            } else {
                $log.debug(SN, 'Undefined stateName for transition. Canceled!');
            }
        }

        /**
         *
         * @param id
         */
        function actionAlarmItem(id) {
            baseAction(getStateName('alarms'), { 'id': id });
        }

        /**
         * @param id
         */
        function actionNoticeItem(id) {
            baseAction(getStateName('notifications'), { 'id': id });
        }

        /**
         * @param id
         */
        function actionPortDetails(id) {
            baseAction(getStateName('ports'), { 'id': id });
        }

        /**
         *
         */
        function actionEServices() {
            baseAction(getStateName('e-services'));
        }

        /**
         *
         */
        function actionOrdersOnHold() {
            baseAction(getStateName('orders'));
        }
    }
})(window.angular);
(function (angular) {
    'use strict';

    /**
     * @returns {{next: next}}
     * @constructor
     */

    function GenerateUniqueId() {
        var generateUid = function generateUid() {
            var d = new Date().getTime();
            var uuid = 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
                var r = (d + Math.random() * 16) % 16 | 0;
                d = Math.floor(d / 16);
                return (c === 'x' ? r : r & 0x7 | 0x8).toString(16);
            });
            return uuid;
        };
        return {
            next: function next() {
                return generateUid();
            }
        };
    }

    /**
     * 9999999999 -> 9 999 999 999
     * @returns {Function}
     * @constructor
     */
    function FosdStringUtils_totalValue() {
        return function (data) {
            return data ? data.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ") : data;
        };
    }

    angular.module('fos-dashboard.core.utils', []).factory('FosdStringUtils_totalValue', FosdStringUtils_totalValue).factory('GenerateUniqueId', GenerateUniqueId);
})(window.angular);
(function (angular) {
    'use strict';
    /**
     *
     * @type {{bindings: {}, templateUrl: string}}
     */

    var FosdBaseLabelItem = {
        bindings: {
            bliLabel: '=bliLabel',
            bliValue: '=bliValue'
        },
        templateUrl: './base-label-item.html'
    };

    angular.module('fos-dashboard.components.common').component('baseLabelItem', FosdBaseLabelItem);
})(window.angular);
(function (angular) {
    'use strict';
    /**
     * @type {{bindings: {item: string, onSelect: string}, templateUrl: string, controller: string}}
     */

    var FosdBaseLinkItem = {
        bindings: {
            item: '<',
            onSelect: '&',
            onHover: '&'
        },
        templateUrl: './base-link-item.component.html',
        controller: 'FosdBaseLinkItemController'
    };

    angular.module('fos-dashboard.components.common').component('baseLinkItem', FosdBaseLinkItem);
})(window.angular);
(function (angular) {
    'use strict';
    /**
     *
     */

    var FosdBaseLinkItemController = function () {
        function FosdBaseLinkItemController() {
            _classCallCheck(this, FosdBaseLinkItemController);
        }

        _createClass(FosdBaseLinkItemController, [{
            key: 'selectItem',

            /**
             * Select an item
             */
            value: function selectItem() {
                this.onSelect({
                    $event: {
                        item: this.item
                    }
                });
            }
            /**
             * Hover an item
             */

        }, {
            key: 'hoverItem',
            value: function hoverItem() {
                this.onHover({
                    $event: {
                        item: this.item
                    }
                });
            }
        }]);

        return FosdBaseLinkItemController;
    }();

    angular.module('fos-dashboard.components.common').controller('FosdBaseLinkItemController', FosdBaseLinkItemController);
})(window.angular);
(function (angular) {
    'use strict';
    /**
     *
     * @type {{bindings: {}, templateUrl: string, controller: string}}
     */

    var FosdPaneSimpleBlockComponent = {
        bindings: {
            paneLabel: '<',
            paneValue: '<',
            paneIconClass: '<'
        },
        templateUrl: './pane-simple-block.component.html',
        controller: 'FosdPaneSimpleBlockController'
    };

    angular.module('fos-dashboard.components.common').component('paneSimpleBlock', FosdPaneSimpleBlockComponent);
})(window.angular);
(function (angular) {
    'use strict';
    /**
     *
     */

    var FosdPaneSimpleBlockController = function () {
        function FosdPaneSimpleBlockController() {
            _classCallCheck(this, FosdPaneSimpleBlockController);
        }

        _createClass(FosdPaneSimpleBlockController, [{
            key: 'selectItem',


            /**
             *
             */
            value: function selectItem() {
                this.onSelect({
                    $event: {
                        item: this.item
                    }
                });
            }
        }]);

        return FosdPaneSimpleBlockController;
    }();

    angular.module('fos-dashboard.components.common').controller('FosdPaneSimpleBlockController', FosdPaneSimpleBlockController);
})(window.angular);
(function (angular) {
    'use strict';
    /**
     *
     * @type {{bindings: {}, templateUrl: string, controller: string}}
     */

    var FosdViewContentLoaderComponent = {
        bindings: {
            sourcePromise: '<',
            onRetry: '&'
        },
        transclude: {
            vcLoaderView: 'vcLoaderView',
            vcLoaderError: '?vcLoaderError',
            vcLoaderLoading: '?vcLoaderLoading'
        },
        templateUrl: './view-loader.component.html',
        controller: 'FosdViewContentLoaderController'
    };

    angular.module('fos-dashboard.components.common').component('fosdVcLoader', FosdViewContentLoaderComponent);
})(window.angular);
(function (angular) {
    'use strict';
    /**
     *
     */

    var FosdViewContentLoaderController = function () {

        /**
         *
         * @param $log
         */
        FosdViewContentLoaderController.$inject = ["$log"];
        function FosdViewContentLoaderController($log) {
            _classCallCheck(this, FosdViewContentLoaderController);

            this.$log = $log;
        }

        /**
         * @returns {*}
         */


        _createClass(FosdViewContentLoaderController, [{
            key: '$handleSource',


            /**
             *
             */
            value: function $handleSource() {
                var _this11 = this;

                this.isLoading = true;
                this.isError = false;
                this.$sourcePromise.then(function () {
                    _this11.$log.debug('View-Loader : promise : resolved.');
                    _this11.isError = false;
                }, function () {
                    _this11.$log.warn('View-Loader : promise : rejected.');
                    _this11.isError = true;
                }).finally(function () {
                    _this11.isLoading = false;
                });
            }

            /**
             *
             */

        }, {
            key: 'onRetryLoad',
            value: function onRetryLoad($event) {
                this.onRetry($event);
            }
        }, {
            key: 'sourcePromise',
            get: function get() {
                return this.$sourcePromise;
            }

            /**
             * @param sourcePromise
             */
            ,
            set: function set(sourcePromise) {
                this.$sourcePromise = sourcePromise;

                if (sourcePromise && angular.isFunction(sourcePromise.then)) {
                    this.$handleSource(sourcePromise);
                }
            }

            /**
             * @returns {boolean}
             */

        }, {
            key: 'isSuccess',
            get: function get() {
                return !this.isLoading && !this.isError;
            }
        }]);

        return FosdViewContentLoaderController;
    }();

    angular.module('fos-dashboard.components.common').controller('FosdViewContentLoaderController', FosdViewContentLoaderController);
})(window.angular);
(function (angular) {
    'use strict';
    /**
     *
     * @type {{bindings: {}, templateUrl: string, controller: string}}
     */

    var FosdExpensesChartComponent = {
        bindings: {
            echartCategories: '<',
            echartActiveCategory: '<',
            echartTotal: '<',
            echartCurrency: '<'
        },
        templateUrl: './expenses-chart.component.html',
        controller: 'FosdExpensesChartController'
    };

    angular.module('fos-dashboard.components.expenses').component('expensesChart', FosdExpensesChartComponent);
})(window.angular);
(function (angular) {
    'use strict';
    /**
     *
     */

    var fosdChartInstance = null;

    var FosdExpensesChartController = function () {

        /**
         *
         * @param $log
         */
        FosdExpensesChartController.$inject = ["$log"];
        function FosdExpensesChartController($log) {
            _classCallCheck(this, FosdExpensesChartController);

            this.$log = $log;
        }

        /**
         *
         */


        _createClass(FosdExpensesChartController, [{
            key: '$onInit',
            value: function $onInit() {
                this.dimension = 9;
                this.chartOptions = {
                    cutoutPercentage: 78,
                    responsive: true,
                    maintainAspectRatio: false,
                    animation: {
                        animateRotate: true,
                        animateScale: false,
                        onComplete: function onComplete() {
                            fosdChartInstance = this.chart;
                        }
                    },
                    borderWidth: 0,
                    elements: {
                        arc: {
                            borderWidth: 1
                        }
                    },
                    tooltips: {
                        mode: 'single',
                        callbacks: {
                            label: function label(tooltipItems, data) {

                                var indice = tooltipItems.index;
                                var label = data.labels[indice];
                                var dataSet = data && data.datasets ? data.datasets[0] : null;
                                var value = dataSet && dataSet.data ? dataSet.data[indice] : '';

                                return (label + ' : ' + value).replace(/.{25}\S*\s+/g, "$&@").split(/\s+@/) || label;
                            }
                        },
                        cornerRadius: 1,
                        backgroundColor: 'rgba(0,0,0,0.95)',
                        xPadding: 10,
                        yPadding: 10
                    }
                };

                this.isBigTotal = false;
                this.resetChartMetrics();
            }

            /**
             * @returns {*}
             */

        }, {
            key: 'resetChartMetrics',


            /**
             *
             */
            value: function resetChartMetrics() {
                this.data = [];
                this.labels = [];
                this.colors = [];
                this.datasetOverride = [];
                this.datasetOverride = {
                    hoverBackgroundColor: [],
                    hoverBorderColor: []
                };
            }
        }, {
            key: 'hexToRgb',
            value: function hexToRgb(hex, alpha) {
                if (!hex) {
                    return hex;
                }

                var shorthandRegex = /^#?([a-f\d])([a-f\d])([a-f\d])$/i;
                hex = hex.replace(shorthandRegex, function (m, r, g, b) {
                    return r + r + g + g + b + b;
                });
                var result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
                return result ? 'rgba(' + parseInt(result[1], 16) + ',' + parseInt(result[2], 16) + ',' + parseInt(result[3], 16) + ',' + (alpha || 1) + ')' : hex;
            }
        }, {
            key: 'echartTotal',
            get: function get() {
                return this.$valueTotal;
            }

            /**
             * String
             * @param value
             */
            ,
            set: function set(value) {
                this.$valueTotal = value;
                // change font size for a big total value
                this.isBigTotal = value.length > this.dimension;
            }

            /**
             * @returns {*}
             */

        }, {
            key: 'echartCategories',
            get: function get() {
                return this.$valueEchartCategories;
            }

            /**
             *
             * @param collection
             */
            ,
            set: function set(collection) {
                var _this12 = this;

                if (!collection) {
                    this.$log.warn('List of Expenses Categories is undefined! Canceled.');
                    return;
                }

                this.$valueEchartCategories = collection;
                this.resetChartMetrics();

                collection.forEach(function (item) {
                    _this12.data.push(item.value);
                    _this12.labels.push(item.label);
                    _this12.colors.push(item.color);
                    _this12.datasetOverride.hoverBackgroundColor.push(_this12.hexToRgb(item.color, 0.95));
                    _this12.datasetOverride.hoverBorderColor.push(_this12.hexToRgb(item.color, 0.95));
                });
            }
        }, {
            key: 'echartActiveCategory',
            set: function set(value) {
                var closeTip = function closeTip(chart) {
                    if (chart) {
                        chart.tooltip._active = [];
                        chart.tooltip.update(true);
                        chart.draw();
                    }
                };
                var openTip = function openTip(chart, datasetIndex, pointIndex) {
                    if (!chart || !chart.tooltip) {
                        return;
                    }
                    if (chart.tooltip._active == undefined) {
                        chart.tooltip._active = [];
                    }
                    var requestedElem = chart.getDatasetMeta(datasetIndex).data[pointIndex];
                    chart.tooltip._active = [requestedElem];
                    chart.tooltip.update(true);
                    chart.draw();
                };
                var useInteraction = false;
                if (value && fosdChartInstance && useInteraction) {
                    var index = this.$valueEchartCategories.indexOf(value);
                    openTip(fosdChartInstance.controller, 0, index);
                }
            }
        }]);

        return FosdExpensesChartController;
    }();

    angular.module('fos-dashboard.components.expenses').controller('FosdExpensesChartController', FosdExpensesChartController);
})(window.angular);
(function (angular) {
    'use strict';
    /**
     *
     * @type {{bindings: {}, templateUrl: string, controller: string}}
     */

    var FosdExpensesChartLegendComponent = {
        bindings: {
            echartCategories: '<',
            onHoverItem: '&'
        },
        templateUrl: './expenses-chart-legend.component.html',
        controller: 'FosdExpensesChartLegendController'
    };

    angular.module('fos-dashboard.components.expenses').component('expensesChartLegend', FosdExpensesChartLegendComponent);
})(window.angular);
(function (angular) {
    'use strict';
    /**
     *
     */

    var FosdExpensesChartLegendController = function () {
        function FosdExpensesChartLegendController() {
            _classCallCheck(this, FosdExpensesChartLegendController);
        }

        _createClass(FosdExpensesChartLegendController, [{
            key: 'onSelectItem',


            /**
             * Hover an item
             */
            value: function onSelectItem(inItem) {
                this.onHoverItem({
                    $event: {
                        item: inItem
                    }
                });
            }
        }]);

        return FosdExpensesChartLegendController;
    }();

    angular.module('fos-dashboard.components.expenses').controller('FosdExpensesChartLegendController', FosdExpensesChartLegendController);
})(window.angular);
(function (angular) {
    'use strict';
    /**
     *
     * @type {{bindings: {}, templateUrl: string, controller: string}}
     */

    var FosdPortsListComponent = {
        bindings: {
            portsCollection: '<',
            portActive: '<',
            onSelect: '&',
            onHover: '&'
        },
        templateUrl: './ports-list.component.html',
        controller: 'FosdPortsListController'
    };

    angular.module('fos-dashboard.components.portscalls').component('portsList', FosdPortsListComponent);
})(window.angular);
(function (angular) {
    'use strict';
    /**
     *
     */

    var FosdPortsListController = function () {

        /**
         *
         * @param $anchorScroll
         */
        FosdPortsListController.$inject = ["$anchorScroll"];
        function FosdPortsListController($anchorScroll) {
            _classCallCheck(this, FosdPortsListController);

            this.$anchorScroll = $anchorScroll;
        }

        /**
         * @param event
         */


        _createClass(FosdPortsListController, [{
            key: 'onSelectItem',
            value: function onSelectItem(event) {
                this.onSelect({
                    $event: event
                });
            }

            /**
             * @param event
             */

        }, {
            key: 'onHoverItem',
            value: function onHoverItem(event) {
                this.onHover({
                    $event: event
                });
            }

            /**
             * @param portId
             */

        }, {
            key: 'scrollTo',


            /**
             *
             * @param id
             */
            value: function scrollTo(id) {
                this.$anchorScroll && id && this.$anchorScroll(id);
            }
        }, {
            key: 'portActive',
            set: function set(portId) {
                this.scrollTo('fosdItem_port_' + portId);
                this.$valuePortActive = portId;
            }

            /**
             *
             * @returns {*}
             */
            ,
            get: function get() {
                return this.$valuePortActive;
            }
        }]);

        return FosdPortsListController;
    }();

    angular.module('fos-dashboard.components.portscalls').controller('FosdPortsListController', FosdPortsListController);
})(window.angular);
(function (angular) {
    'use strict';
    /**
     *
     * @type {{bindings: {}, templateUrl: string, controller: string}}
     */

    var FosdPortsMapComponent = {
        bindings: {
            mapCollection: '<',
            selectedMarker: '<',
            onSelect: '&'
        },
        templateUrl: './ports-map.component.html',
        controller: 'FosdPortsMapController'
    };

    angular.module('fos-dashboard.components.portscalls').component('portsMap', FosdPortsMapComponent);
})(window.angular);
(function (angular) {
    'use strict';
    /**
     *
     //https://leaflet-extras.github.io/leaflet-providers/preview/
     //tileLayer: 'http://{s}.tile.opencyclemap.org/cycle/{z}/{x}/{y}.png',
     //tileLayer: "http://{s}.basemaps.cartocdn.com/light_nolabels/{z}/{x}/{y}.png",
     //tileLayer: "http://{s}.basemaps.cartocdn.com/light_only_labels/{z}/{x}/{y}.png",
     */

    var FosdPortsMapController = function () {

        /**
         *
         * @param $scope
         * @param $rootScope
         * @param $translate
         */
        FosdPortsMapController.$inject = ["$scope", "$rootScope", "$translate"];
        function FosdPortsMapController($scope, $rootScope, $translate) {
            var _this13 = this;

            _classCallCheck(this, FosdPortsMapController);

            this.$scope = $scope;
            this.$translate = $translate;
            this.onPortMarker = $scope.$on('leafletDirectiveMarker.mouseover', function (event, args) {
                args && args.leafletObject.openPopup();
                _this13.onSelect({
                    $event: args.modelName
                });
            });

            this.onTranslationUpdate = $rootScope.$on('$translateChangeSuccess', function (event) {
                _this13.validateMarkers(_this13.mapCollection || []);
            });
        }

        /**
         *
         */


        _createClass(FosdPortsMapController, [{
            key: '$onInit',
            value: function $onInit() {
                this.markers = null;
                this.currentOpenMarker = null;

                var markerColor = '#1b6fb6';
                var icon = '<svg width="100" height="100" xmlns="http://www.w3.org/2000/svg"><g><ellipse stroke="null" opacity="0.25" ry="50" rx="50" id="svg_2" cy="50" cx="50" stroke-width="1.5" fill="' + markerColor + '"/><ellipse stroke="null" opacity="0.5" ry="25" rx="25" id="svg_1" cy="50" cx="50" stroke-width="1.5" fill="' + markerColor + '"/></g></svg>';
                var svgURL = "data:image/svg+xml;base64," + btoa(icon);

                this.leafIcon = {
                    //iconUrl: 'assets/img/marker-icon.svg',
                    iconUrl: svgURL,
                    iconSize: [22, 22], // size of the icon
                    iconAnchor: [11, 11], // point of the icon which will correspond to marker's location
                    popupAnchor: [0, 0] // point from which the popup should open relative to the iconAnchor
                };

                this.defaults = {
                    attributionControl: false,
                    boxZoom: false,
                    dragging: false,
                    scrollWheelZoom: false,
                    zoomControl: false,
                    doubleClickZoom: false,
                    maxZoom: 1,
                    //worldCopyJump :true,
                    tileLayer: "http://{s}.tiles.wmflabs.org/bw-mapnik/{z}/{x}/{y}.png",
                    tileLayerOptions: {
                        opacity: 1,
                        detectRetina: true,
                        reuseTiles: true
                        //noWrap:true
                    },
                    tap: false
                };
                this.center = {
                    lat: 25,
                    lng: 0,
                    zoom: 1
                };
            }

            /**
             *
             */

        }, {
            key: '$onDestroy',
            value: function $onDestroy() {
                this.onPortMarker();
                this.onTranslationUpdate();
            }
        }, {
            key: 'validateMarkers',


            /**
             * @param collection
             */
            value: function validateMarkers(collection) {
                var _this14 = this;

                var arr = [];
                if (this.markers) {
                    this.markers.length = 0;
                }

                collection.forEach(function (item) {
                    if (item.lat && item.lon) {

                        var msg = _this14.$translate ? _this14.$translate.instant('ports.map.popup.label.goingto', { RES: item.shipsCount, name: item.name }) : '';
                        arr[item.id] = {
                            lat: item.lat,
                            lng: item.lon,
                            message: msg.replace('%br%', '<br>'),
                            focus: false,
                            draggable: false,
                            icon: _this14.leafIcon,
                            closeButton: false,
                            autoPan: false
                        };
                    } else {
                        // note : spec : Some ports may not have coordinates. And name?
                    }
                });
                this.markers = arr;
            }

            /**
             * @param markerId
             */

        }, {
            key: 'mapCollection',


            /**
             * @returns {*}
             */
            get: function get() {
                return this.$valueMapCollection;
            }

            /**
             * @param collection
             */
            ,
            set: function set(collection) {
                if (!collection) {
                    return;
                }

                this.$valueMapCollection = collection;
                if (this.validateMarkers) {
                    this.validateMarkers(collection);
                }
            }
        }, {
            key: 'selectedMarker',
            set: function set(markerId) {
                var marker = markerId && this.markers ? this.markers[markerId] : null;
                if (marker) {
                    this.currentOpenMarker && (this.currentOpenMarker.focus = false);
                    marker.focus = true;
                    this.currentOpenMarker = marker;
                } else {
                    this.currentOpenMarker && (this.currentOpenMarker.focus = false);
                }
                this.$valueSelectedMarker = markerId;
            }

            /**
             *
             * @returns {*}
             */
            ,
            get: function get() {
                return this.$valueSelectedMarker;
            }
        }]);

        return FosdPortsMapController;
    }();

    angular.module('fos-dashboard.components.portscalls').controller('FosdPortsMapController', FosdPortsMapController);
})(window.angular);
(function (angular) {
    'use strict';
    /**
     *
     *
     * @param $rootScope
     * @param $log
     * @param $q
     * @param FosdConfigService
     * @param $interval
     * @param $http
     * @param $translate
     * @param FOSD_ENUMS_EVENTS_POLLING
     * @returns {Service}
     * @constructor
     */

    FosdPollingProtoService.$inject = ["$rootScope", "$log", "$q", "FosdConfigService", "$interval", "$http", "$translate", "FOSD_ENUMS_EVENTS_POLLING"];
    function FosdPollingProtoService($rootScope, $log, $q, FosdConfigService, $interval, $http, $translate, FOSD_ENUMS_EVENTS_POLLING) {

        var Service = function Service(loggerName) {

            this.logger = loggerName;
            this.pInterval = null;
            this.deferred = null;
            this.config = {
                queryUrl: null,
                querySbj: 'polling',
                queryErr: '',
                queryParams: {},
                pollingIntervalSeconds: 5000
            };

            this.EVENTS = FOSD_ENUMS_EVENTS_POLLING;
        };

        /**
         *
         */
        Service.prototype.uConfig = function () {
            return FosdConfigService.uConfig();
        };

        /**
         * @returns {*}
         */
        Service.prototype.uConfigPolling = function () {
            var config = this.uConfig();
            return config ? config.pollingInterval : {};
        };

        /**
         * @returns {*}
         */
        Service.prototype.uConfigBaseUrl = function () {
            var config = this.uConfig();
            return config ? config.api_baseUrl : '';
        };

        /**
         * Override it
         */
        Service.prototype.startPolling = function () {
            var immediately = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : true;


            var self = this;

            if (immediately) {
                this.query();
            }

            if (!this.pInterval) {
                $log.debug(this.logger, 'Start Polling...');
                this.pInterval = $interval(function () {
                    return self.query();
                }, this.config.pollingIntervalSeconds /*, count*/);
                $interval.cancel(this.pInterval);
            } else {
                $log.debug(this.logger, 'Polling is already started...');
            }

            if (!this.deferred) {
                this.deferred = $q.defer();
            }

            return this.deferred.promise;
        };

        /**
         * Override it
         */
        Service.prototype.stopPolling = function () {

            if (this.pInterval) {
                $log.debug(this.logger, 'Polling stopped.');
                $interval.cancel(this.pInterval);
                this.pInterval = null;
            }

            this.deferred.reject({
                cancelled: true
            });
        };

        /**
         * Override it
         */
        Service.prototype.query = function () {
            var self = this;
            var sbj = this.config.querySbj || '';

            /**
             *
             * @returns {string}
             */
            function getTime() {
                var d = new Date();
                return d.getHours() + ":" + d.getMinutes() + ":" + d.getSeconds() + ":" + d.getMilliseconds() + ' ' /* + '\t'*/;
            }

            /**
             * @param response
             */
            function success(response) {
                $log.debug(self.logger, getTime(), ':', 'Request : Done : ', sbj, [response]);

                response && response.data ? self.query_success(response.data) : self.query_error(response);
            }

            /**
             * @param response
             * @param status
             */
            function error(response, status) {
                $log.debug(self.logger, getTime(), ':', 'Request : Done : ', sbj, [response], status);
                self.query_error(response, status);
                throw new Error($translate.instant(self.config.queryErr));
            }

            $log.debug(this.logger, sbj, '...');
            return $http.get(this.uConfigBaseUrl() + this.config.queryUrl, this.config.queryParams).then(success, error);
        };

        /**
         * Override it
         */
        Service.prototype.query_success = function (response) {
            $rootScope.$broadcast(this.EVENTS.FOSD_ENUMS_EVENTS_POLLING);

            //$interval.cancel(pInterval);
            this.deferred.resolve(response);
        };

        /**
         * Override it
         */
        Service.prototype.query_error = function () /*response*/{
            // override

            this.deferred.reject();

            // !Important : we stop polling after the first error.
            // The button "Retry"  helps to start it again.
            // !Important : If we need to continue polling after error - we need to check Deferred object after "Retry"!
            if (this.pInterval) {
                $log.debug(this.logger, 'Polling stopped.');
                $interval.cancel(this.pInterval);
                this.pInterval = null;
            }
        };

        return Service;
    }

    /**
     * @type {{listUpdated: string}}
     */
    var FOSD_ENUMS_EVENTS_POLLING = {
        'updated': 'EVENTS_POLLING_GLOBAL_UPDATED'
    };

    angular.module('fos-dashboard.core.polling').constant('FOSD_ENUMS_EVENTS_POLLING', FOSD_ENUMS_EVENTS_POLLING).factory('FosdPollingProtoService', FosdPollingProtoService);
})(window.angular);
(function (angular) {
    'use strict';

    FosdAlarmsPollingService.$inject = ["$log", "FOSD_API", "FosdPollingProtoService", "FosdAlarmItem", "FosdAlarmsService"];
    angular.module('fos-dashboard.core.polling').service('FosdAlarmsPollingService', FosdAlarmsPollingService);

    // Fosd Alarms Polling Service
    // ----------------------------------------------------------------------------------------------------------
    // Used: @Alarms component

    /**
     * @param $log
     * @param FOSD_API
     * @param FosdPollingProtoService
     * @param FosdAlarmItem
     * @param FosdAlarmsService
     * @returns {*}
     * @constructor
     */
    function FosdAlarmsPollingService($log, FOSD_API, FosdPollingProtoService, FosdAlarmItem, FosdAlarmsService) {

        var service = new FosdPollingProtoService('ALARMS POOL SERVICE : \t');
        var confPolling = service.uConfigPolling() || {};

        // config
        service.config.queryUrl = FOSD_API.alarms.Url;
        service.config.querySbj = 'Alarms Poll';
        service.config.queryErr = 'ALARMS.ERRORS.LOADING_ERROR';
        service.config.pollingIntervalSeconds = confPolling.alarms || confPolling.default || 10000;

        // overridden methods
        service.query_success = query_success;

        return service;

        // Private Functions -----------------------------------------------------------------------------------

        /**
         * Overridden
         */
        function query_success(data) {
            var alarmsVO = processCollection(data);
            FosdAlarmsService.updateAlarms(alarmsVO);

            Object.getPrototypeOf(this).query_success.call(this);
        }

        /**
         *
         * @param rawData
         * @returns {null}
         */
        function processCollection(rawData) {
            if (!rawData || !angular.isArray(rawData)) {
                $log.debug(service.logger, 'Data for processing is undefined! Canceled.');
                return null;
            }

            return rawData.map(function (rawItem) {
                return new FosdAlarmItem(rawItem);
            });
        }
    }
})(window.angular);
(function (angular) {
    'use strict';

    FosdEServicesPollingService.$inject = ["$log", "FOSD_API", "FosdPollingProtoService", "FosdEServicesService", "FosdEServicesVO"];
    angular.module('fos-dashboard.core.polling').service('FosdEServicesPollingService', FosdEServicesPollingService);

    /**
     * @param $log
     * @param FOSD_API
     * @param FosdPollingProtoService
     * @param FosdEServicesService
     * @param FosdEServicesVO
     * @returns {*}
     * @constructor
     */
    function FosdEServicesPollingService($log, FOSD_API, FosdPollingProtoService, FosdEServicesService, FosdEServicesVO) {

        var service = new FosdPollingProtoService('E-SERVICES : \t') || {},
            config = service.uConfig(),
            confDays = config && config.queryParams ? config.queryParams.services_period_days : 0;
        var confPolling = service.uConfigPolling() || {};

        // config
        service.config.queryUrl = FOSD_API.services.Url;
        service.config.querySbj = 'Services Poll';
        service.config.queryErr = 'SERVICES.ERRORS.LOADING_ERROR';
        service.config.queryParams = { 'period_days': confDays };
        service.config.pollingIntervalSeconds = confPolling.services || confPolling.default || 10000;

        // overridden methods
        service.query_success = query_success;
        return service;

        // Private Functions -----------------------------------------------------------------------------------

        /**
         * Overridden
         */
        function query_success(data) {
            var vo = processEServices(data);
            FosdEServicesService.updateServices(vo);

            Object.getPrototypeOf(this).query_success.call(this);
        }

        /**
         * @param rawData
         * @returns {null}
         */
        function processEServices(rawData) {
            if (!rawData) {
                $log.debug(service.logger, 'Data for processing is undefined! Canceled.');
                return null;
            }
            return new FosdEServicesVO(rawData, confDays);
        }
    }
})(window.angular);
(function (angular) {
    'use strict';

    FosdExpensesPollingService.$inject = ["$log", "FOSD_API", "FosdPollingProtoService", "FosdExpensesService", "FosdExpensesVO", "FosdExpensesBudgetVO", "FosdExpensesCategoryItem"];
    angular.module('fos-dashboard.core.polling').service('FosdExpensesPollingService', FosdExpensesPollingService);

    /**
     *
     * @param $log
     * @param FOSD_API
     * @param FosdPollingProtoService
     * @param FosdExpensesService
     * @param FosdExpensesVO
     * @param FosdExpensesBudgetVO
     * @param FosdExpensesCategoryItem
     * @returns {*|{}}
     * @constructor
     */
    function FosdExpensesPollingService($log, FOSD_API, FosdPollingProtoService, FosdExpensesService, FosdExpensesVO, FosdExpensesBudgetVO, FosdExpensesCategoryItem) {

        var service = new FosdPollingProtoService('EXPENSES SERVICE : \t') || {};
        var config = service.uConfig();
        var confDays = config && config.queryParams ? config.queryParams.expenses_last_days : 0;
        var confPolling = service.uConfigPolling() || {};

        // config
        service.config.queryUrl = FOSD_API.expenses.Url;
        service.config.querySbj = 'expenses Poll';
        service.config.queryErr = 'EXPENSES.ERRORS.LOADING_ERROR';
        service.config.queryParams = { 'last_days': confDays };
        service.config.pollingIntervalSeconds = confPolling.expenses || confPolling.default || 10000;

        // overridden methods
        service.query_success = query_success;
        return service;

        // Private Functions -----------------------------------------------------------------------------------

        /**
         * Overridden
         */
        function query_success(data) {
            processExpenses(data);
            Object.getPrototypeOf(this).query_success.call(this);
        }

        /**
         * @param rawData
         * @returns {null}
         */
        function processExpenses(rawData) {
            if (!rawData || !angular.isArray(rawData.categories)) {
                $log.debug(service.logger, 'Data for processing is undefined! Canceled.');
                return null;
            }

            var budgetVO = new FosdExpensesBudgetVO(rawData);
            var categories = rawData.categories.map(function (rawItem) {
                return new FosdExpensesCategoryItem(rawItem);
            });

            FosdExpensesService.updateExpenses(new FosdExpensesVO(budgetVO, categories));
        }
    }
})(window.angular);
(function (angular) {
    'use strict';

    FosdNotificationsPollingService.$inject = ["$log", "FOSD_API", "FosdPollingProtoService", "FosdNotificationItem", "FosdNotificationsService"];
    angular.module('fos-dashboard.core.polling').service('FosdNotificationsPollingService', FosdNotificationsPollingService);

    // Fosd Notifications Polling Service
    // ----------------------------------------------------------------------------------------------------------
    // Used: @Notifications component

    /**
     *
     * @param $log
     * @param FOSD_API
     * @param FosdPollingProtoService
     * @param FosdNotificationItem
     * @param FosdNotificationsService
     * @returns {*|{}}
     * @constructor
     */
    function FosdNotificationsPollingService($log, FOSD_API, FosdPollingProtoService, FosdNotificationItem, FosdNotificationsService) {

        var service = new FosdPollingProtoService('NOTIFICATIONS POOL SERVICE : \t') || {};
        var confPolling = service.uConfigPolling() || {};

        // config
        service.config.queryUrl = FOSD_API.notifications.Url;
        service.config.querySbj = 'Notifications Poll';
        service.config.queryErr = 'NOTIFICATIONS.ERRORS.LOADING_ERROR';
        service.config.pollingIntervalSeconds = confPolling.notifications || confPolling.default || 10000;

        // overridden methods
        service.query_success = query_success;
        return service;

        // Private Functions -----------------------------------------------------------------------------------

        /**
         * Overridden
         */
        function query_success(data) {
            var notificationsVO = processCollection(data);
            FosdNotificationsService.updateNotifications(notificationsVO);

            Object.getPrototypeOf(this).query_success.call(this);
        }

        /**
         *
         * @param rawData
         * @returns {null}
         */
        function processCollection(rawData) {
            if (!rawData || !angular.isArray(rawData)) {
                $log.debug(service.logger, 'Data for processing is undefined! Canceled.');
                return null;
            }
            return rawData.map(function (rawItem) {
                return new FosdNotificationItem(rawItem);
            });
        }
    }
})(window.angular);
(function (angular) {
    'use strict';

    FosdOrdersPollingService.$inject = ["$log", "FOSD_API", "FosdPollingProtoService", "FosdOrdersService", "FosdOrdersVO"];
    angular.module('fos-dashboard.core.polling').service('FosdOrdersPollingService', FosdOrdersPollingService);

    /**
     *
     * @param $log
     * @param FOSD_API
     * @param FosdPollingProtoService
     * @param FosdOrdersService
     * @param FosdOrdersVO
     * @returns {*}
     * @constructor
     */
    function FosdOrdersPollingService($log, FOSD_API, FosdPollingProtoService, FosdOrdersService, FosdOrdersVO) {

        var service = new FosdPollingProtoService('ORDERS SERVICE : \t') || {};
        var confPolling = service.uConfigPolling() || {};

        // config
        service.config.queryUrl = FOSD_API.orders.Url;
        service.config.querySbj = 'Orders Poll';
        service.config.queryErr = 'ORDERS.ERRORS.LOADING_ERROR';
        service.config.pollingIntervalSeconds = confPolling.orders || confPolling.default || 10000;

        // overridden methods
        service.query_success = query_success;
        return service;

        // Private Functions -----------------------------------------------------------------------------------

        /**
         * Overridden
         */
        function query_success(data) {
            var vo = processOrders(data);
            FosdOrdersService.updateOrders(vo);

            Object.getPrototypeOf(this).query_success.call(this);
        }

        /**
         * @param rawData
         * @returns {null}
         */
        function processOrders(rawData) {
            if (!rawData) {
                $log.debug(service.logger, 'Data for processing is undefined! Canceled.');
                return null;
            }
            return new FosdOrdersVO(rawData);
        }
    }
})(window.angular);
(function (angular) {
    'use strict';

    FosdPortsPollingService.$inject = ["$log", "FOSD_API", "FosdPollingProtoService", "FosdPortsItem", "FosdPortsCallsService"];
    angular.module('fos-dashboard.core.polling').service('FosdPortsPollingService', FosdPortsPollingService);

    // Fosd Ports Polling Service
    // ----------------------------------------------------------------------------------------------------------
    // Used: @PortsOfCalls component

    /**
     *
     * @param $log
     * @param FOSD_API
     * @param FosdPollingProtoService
     * @param FosdPortsItem
     * @param FosdPortsCallsService
     * @returns {*|{}}
     * @constructor
     */
    function FosdPortsPollingService($log, FOSD_API, FosdPollingProtoService, FosdPortsItem, FosdPortsCallsService) {

        var service = new FosdPollingProtoService('PORTS POOL SERVICE : \t') || {};
        var confPolling = service.uConfigPolling() || {};

        // config
        service.config.queryUrl = FOSD_API.ports.Url;
        service.config.querySbj = 'Ports Poll';
        service.config.queryErr = 'PORTS.ERRORS.LOADING_ERROR';
        service.config.pollingIntervalSeconds = confPolling.ports || confPolling.default || 10000;

        // overridden methods
        service.query_success = query_success;
        return service;

        // Private Functions -----------------------------------------------------------------------------------

        /**
         * Overridden
         */
        function query_success(data) {
            var portsVO = processCollection(data);
            FosdPortsCallsService.updatePorts(portsVO);

            Object.getPrototypeOf(this).query_success.call(this);
        }

        /**
         *
         * @param rawData
         * @returns {null}
         */
        function processCollection(rawData) {
            if (!rawData || !angular.isArray(rawData)) {
                $log.debug(service.logger, 'Data for processing is undefined! Canceled.');
                return null;
            }
            return rawData.map(function (rawItem) {
                return new FosdPortsItem(rawItem);
            });
        }
    }
})(window.angular);
(function (angular) {
    'use strict';

    FosdTrackingPollingService.$inject = ["$log", "FOSD_API", "FosdPollingProtoService", "FosdTrackingService", "FosdTrackingVO"];
    angular.module('fos-dashboard.core.polling').service('FosdTrackingPollingService', FosdTrackingPollingService);

    /**
     *
     * @param $log
     * @param FOSD_API
     * @param FosdPollingProtoService
     * @param FosdTrackingService
     * @param FosdTrackingVO
     * @returns {*}
     * @constructor
     */
    function FosdTrackingPollingService($log, FOSD_API, FosdPollingProtoService, FosdTrackingService, FosdTrackingVO) {

        var service = new FosdPollingProtoService('TRACKING SERVICE : \t');
        var confPolling = service.uConfigPolling() || {};

        // config
        service.config.queryUrl = FOSD_API.tracking.Url;
        service.config.querySbj = 'Trackings Poll';
        service.config.queryErr = 'TRACKING.ERRORS.LOADING_ERROR';
        service.config.pollingIntervalSeconds = confPolling.tracking || confPolling.default || 10000;

        // overridden methods
        service.query_success = query_success;
        return service;

        // Private Functions -----------------------------------------------------------------------------------

        /**
         * Overridden
         */
        function query_success(data) {
            var vo = processTracking(data);
            FosdTrackingService.updateTracking(vo);

            Object.getPrototypeOf(this).query_success.call(this);
        }

        /**
         * @param rawData
         * @returns {null}
         */
        function processTracking(rawData) {
            if (!rawData) {
                $log.debug(service.logger, 'Data for processing is undefined! Canceled.');
                return null;
            }
            return new FosdTrackingVO(rawData);
        }
    }
})(window.angular);
(function (angular) {
    'use strict';

    angular.module('fos-dashboard.templates').run(['$templateCache', function ($templateCache) {
        $templateCache.put('./fos-dashboard.component.html', '<div class="fosDashboard"><app-header></app-header><div class="container-spinner" ng-if="!$ctrl.isConfigLoaded"><div class="spinner-config"><svg viewBox="25 25 50 50"><circle cx="50" cy="50" r="20" fill="none" stroke-width="2" stroke-miterlimit="10"/><circle cx="50" cy="50" r="10" fill="none" stroke-width="2" stroke-miterlimit="10"/></svg></div><div><h3 translate>common.loader.fosdconfig.loading</h3></div></div><div class="container" ng-if="$ctrl.isConfigLoaded"><div class="row"><div class="col-lg-8"><pane-tracking></pane-tracking><pane-ports-calls on-select="$ctrl.onSelectItem($event);"></pane-ports-calls></div><div class="col-lg-4"><pane-alarms on-select="$ctrl.onSelectItem($event);"></pane-alarms><pane-notifications on-select="$ctrl.onSelectItem($event);"></pane-notifications><div class="row"><div class="col-lg-6 col-sm-6 col-xs-6"><pane-orders on-select="$ctrl.onSelectItem($event);"></pane-orders></div><div class="col-lg-6 col-sm-6 col-xs-6"><pane-licenses on-select="$ctrl.onSelectItem($event);"></pane-licenses></div></div></div></div><div class="row"><div class="col-lg-12"><pane-expenses></pane-expenses></div></div></div><!-- /container --></div>');
        $templateCache.put('./alarms.component.html', '<div class="panel panel-fosd panel-fosd__alarms"><div class="panel-heading"><h3 class="panel-title" translate>alarms.pane.caption</h3></div><fosd-vc-loader source-promise="$ctrl.sourcePromise" on-retry="$ctrl.onRetryLoad($event)"><vc-loader-view><div class="list-group"><div data-simplebar class="simplebar-alarms"><base-link-item ng-repeat="alarmGroup in $ctrl.alarmsCollection track by $id(alarmGroup.id)" item="alarmGroup" on-select="$ctrl.onSelectItem($event);"></base-link-item></div></div></vc-loader-view></fosd-vc-loader></div>');
        $templateCache.put('./e-services.component.html', '<div class="fosd-simpleblock-container"><fosd-vc-loader source-promise="$ctrl.sourcePromise" on-retry="$ctrl.onRetryLoad($event)"><vc-loader-view><pane-simple-block pane-label="$ctrl.model.eLicensesLabel" pane-value="$ctrl.model.eLicensesValue" pane-icon-class="\'glyphicon-alert\'" ng-click="$ctrl.onSelectItem($event);"></pane-simple-block></vc-loader-view></fosd-vc-loader></div>');
        $templateCache.put('./expenses.component.html', '<div class="panel panel-fosd panel-fosd__expenses"><div class="panel-heading"><h3 class="panel-title" translate="expenses.pane.caption" translate-values="{ RES: $ctrl.model.expensesPeriod||0}"></h3></div><fosd-vc-loader source-promise="$ctrl.sourcePromise" on-retry="$ctrl.onRetryLoad($event)"><vc-loader-view><div class="panel-body"><div class="row expenses-metrics"><div class="col-lg-5"><div class="bli-group"><div class="bli-label" translate>expenses.total.label</div><div class="bli-value">{{$ctrl.model.expensesTotal}}<span class="expenses-item-value__currency">{{::$ctrl.model.expensesCurrency}}</span></div></div><div class="row expenses-metrics"><base-label-item class="col-lg-4 col-md-4 col-sm-4" bli-label="\'expenses.budget.used.label\' | translate" bli-value="$ctrl.model.budgetUsagePct"></base-label-item><base-label-item class="col-lg-4 col-md-4 col-sm-4" bli-label="\'expenses.orders.services.label\' | translate" bli-value="$ctrl.model.orders4Services"></base-label-item><base-label-item class="col-lg-4 col-md-4 col-sm-4" bli-label="\'expenses.orders.data.label\' | translate" bli-value="$ctrl.model.orders4Data"></base-label-item></div></div><div class="col-lg-3"><expenses-chart echart-categories="$ctrl.model.eCategoriesCollection" echart-active-category="$ctrl.model.activeLegend" echart-total="$ctrl.model.expensesTotal" echart-currency="$ctrl.model.expensesCurrency"></expenses-chart></div><div class="col-lg-4"><expenses-chart-legend echart-categories="$ctrl.model.eCategoriesCollection" on-hover-item="$ctrl.onLegendItem($event)"></expenses-chart-legend></div></div></div></vc-loader-view></fosd-vc-loader></div>');
        $templateCache.put('./notifications.component.html', '<div class="panel panel-fosd panel-fosd__notifications"><div class="panel-heading"><h3 class="panel-title" translate>notifications.pane.caption</h3></div><fosd-vc-loader source-promise="$ctrl.sourcePromise" on-retry="$ctrl.onRetryLoad($event)"><vc-loader-view><div class="list-group"><div data-simplebar class="simplebar-notifications"><base-link-item ng-repeat="notificationGroup in $ctrl.notificationCollection track by $id(notificationGroup.id)" item="notificationGroup" on-select="$ctrl.onSelectItem($event);"></base-link-item></div></div></vc-loader-view></fosd-vc-loader></div>');
        $templateCache.put('./orders.component.html', '<div class="fosd-simpleblock-container"><fosd-vc-loader source-promise="$ctrl.sourcePromise" on-retry="$ctrl.onRetryLoad($event)"><vc-loader-view><pane-simple-block pane-label="\'orders.onhold.label\' | translate" pane-value="$ctrl.model.ordersOnHold" pane-icon-class="\'glyphicon-hourglass\'" ng-click="$ctrl.onSelectItem($event);"></pane-simple-block></vc-loader-view></fosd-vc-loader></div>');
        $templateCache.put('./portscalls.component.html', '<div class="panel panel-fosd panel-fosd__portscalls"><div class="panel-heading"><h3 class="panel-title" translate>ports.pane.caption</h3></div><div class="row row-body"><fosd-vc-loader source-promise="$ctrl.sourcePromise" on-retry="$ctrl.onRetryLoad($event)"><vc-loader-view><div class="col-lg-8 col-md-8"><ports-map map-collection="$ctrl.portsCollection" selected-marker="$ctrl.selectedMarker" on-select="$ctrl.onHoverMarker($event);"></ports-map></div><div class="col-lg-4 col-md-4"><ports-list ports-collection="$ctrl.portsCollection" port-active="$ctrl.portActive" on-select="$ctrl.onSelectItem($event);" on-hover="$ctrl.onHoverItem($event);"></ports-list></div></vc-loader-view></fosd-vc-loader></div></div>');
        $templateCache.put('./tracking.component.html', '<div class="panel panel-fosd panel-fosd__tracking"><div class="panel-heading"><h3 class="panel-title" translate>tracking.pane.caption</h3></div><fosd-vc-loader source-promise="$ctrl.sourcePromise" on-retry="$ctrl.onRetryLoad($event)"><vc-loader-view><div class="panel-body"><div class="row tracking-metrics"><base-label-item class="col-md-5ths col-xs-6" bli-label="\'tracking.schedule.intime.label\' | translate" bli-value="$ctrl.model.scheduleInTime"></base-label-item><base-label-item class="col-md-5ths col-xs-6" bli-label="\'tracking.schedule.behind.label\' | translate" bli-value="$ctrl.model.scheduleBehind"></base-label-item><base-label-item class="col-md-5ths col-xs-6" bli-label="\'tracking.schedule.ahead.label\' | translate" bli-value="$ctrl.model.scheduleAhead"></base-label-item><base-label-item class="col-md-5ths col-xs-6" bli-label="\'tracking.status.ok.label\' | translate" bli-value="$ctrl.model.trackingOK"></base-label-item><base-label-item class="col-md-5ths col-xs-6" bli-label="\'tracking.status.nok.label\' | translate" bli-value="$ctrl.model.trackingNOK"></base-label-item></div></div></vc-loader-view></fosd-vc-loader></div>');
        $templateCache.put('./app-header.html', '<nav class="navbar navbar-default navbar-fosd navbar-static-top"><div class="container"><div class="navbar-header"><a class="navbar-brand" href="#" translate>header.caption</a></div><p class="navbar-text navbar-right"><span translate>session.lastupdate</span> <span>{{$ctrl.timestamp | date:\'HH:mm\'}}</span></p></div></nav>');
        $templateCache.put('./base-label-item.html', '<div class="bli-group"><div class="bli-label">{{$ctrl.bliLabel}}</div><div class="bli-value">{{$ctrl.bliValue}}</div></div>');
        $templateCache.put('./base-link-item.component.html', '<a href="" class="list-group-item list-group-item-fosd" ng-click="$ctrl.selectItem();" ng-mouseover="$ctrl.hoverItem();"><span class="list-group-item-text">{{ ::$ctrl.item.name }}</span> <span class="chevron">{{ $ctrl.item.value }}<i class="glyphicon glyphicon-menu-right"></i></span></a>');
        $templateCache.put('./pane-simple-block.component.html', '<div class="panel panel-fosd pane-simple-block pointer"><div class="panel-body"><div class="block_label"><span class="glyphicon" ng-class="$ctrl.paneIconClass" aria-hidden="true"></span> <span>{{$ctrl.paneValue}}</span> <span>{{$ctrl.paneLabel}}</span></div></div></div>');
        $templateCache.put('./view-loader.component.html', '<div class="fosd-vc-loader"><div class="vc-loader__loading" ng-if="$ctrl.isLoading" ng-transclude="vcLoaderLoading"><div class="spinner"><svg viewBox="25 25 50 50"><circle cx="50" cy="50" r="20" fill="none" stroke-width="2" stroke-miterlimit="10"/></svg></div></div><div class="vc-loader__error" ng-if="$ctrl.isError" ng-transclude="vcLoaderError"><div class="retry"><span class="icon glyphicon glyphicon-ban-circle" aria-hidden="true"></span><h4 translate>common.loader.error.base.message</h4><h5 class="description" translate>common.loader.retry.description</h5><button class="btn btn-primary" ng-click="$ctrl.onRetryLoad($event)" translate="common.loader.retry.btn.name" translate-attr-title="common.loader.retry.btn.title"></button></div></div><div class="vc-loader__view" ng-show="$ctrl.isSuccess" ng-transclude="vcLoaderView"></div></div>');
        $templateCache.put('./expenses-chart.component.html', '<div class="expenses-chart-holder"><div class="expenses-chart-total"><p class="expenses-chart-total__value" ng-class="{\'small\':$ctrl.isBigTotal}">{{$ctrl.echartTotal}}</p><p class="expenses-chart-total__currency">{{::$ctrl.echartCurrency}}</p></div><canvas id="fosd-chart-area" height="220" class="chart chart-doughnut fos-chart fos-chart-expenses" chart-data="$ctrl.data" chart-labels="$ctrl.labels" chart-options="$ctrl.chartOptions" chart-colors="$ctrl.colors" chart-dataset-override="$ctrl.datasetOverride"></canvas></div>');
        $templateCache.put('./expenses-chart-legend.component.html', '<ul class="list-group legend-scale"><li class="list-group-item" ng-repeat="legend in $ctrl.echartCategories" ng-mouseover="$ctrl.onSelectItem(legend);"><span class="marker" ng-style="{\'background-color\': legend.color}"></span> <span class="info">{{ legend.label }}</span> <span class="badge">{{legend.value}}</span></li></ul>');
        $templateCache.put('./ports-list.component.html', '<div class="list-group"><div data-simplebar class="simplebar-ports"><base-link-item ng-repeat="port in $ctrl.portsCollection track by $id(port.id)" ng-class="{\'active-port\':port.id==$ctrl.portActive}" item="port" id="fosdItem_port_{{port.id}}" on-select="$ctrl.onSelectItem($event);" on-hover="$ctrl.onHoverItem($event);"></base-link-item></div></div>');
        $templateCache.put('./ports-map.component.html', '<leaflet id="fosd_portscalls" class="fosd-ports-map" defaults="$ctrl.defaults" lf-center="$ctrl.center" markers="$ctrl.markers" height="251px" width="100%"></leaflet>');
    }]);
})(window.angular);