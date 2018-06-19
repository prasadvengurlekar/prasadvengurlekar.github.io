'use strict';

/**
* Config for the router
  Reference on https://ciphertrick.com/2016/07/06/lazy-load-modules-and-controllers-in-angularjs/
*/

app
//.run(
//        ['$rootScope', '$state', '$stateParams',
//            function ($rootScope, $state, $stateParams) {
//                $rootScope.$state = $state;
//                $rootScope.$stateParams = $stateParams;
//            }
//        ]
//    )
.config(
        ['$stateProvider', '$urlRouterProvider',
            function ($stateProvider, $urlRouterProvider) {

                $urlRouterProvider
                    .otherwise('/test');
                $stateProvider
                .state('test', {
                    url: '/test',
                    templateUrl: 'app/components/test/testpage.html',
                    resolve: {
                        deps: ['$ocLazyLoad',
                            function ($ocLazyLoad) {
                                return $ocLazyLoad.load(['app/components/test/testpageCtrl.js']);
                            }
                        ]
                    }
                })
                .state('landing', {
                    url: '/landing',
                    templateUrl: 'landing.html',
                    resolve: {
                        deps: ['$ocLazyLoad',
                            function ($ocLazyLoad) {
                                return $ocLazyLoad.load([
                                        'js/landingCtrl.js'
                                ]);
                            }
                        ]
                    }
                })
                .state('landing.home', {
                    url: '/dashboard',
                    templateUrl: 'pages/home.html',
                    resolve: {
                        deps: ['$ocLazyLoad',
                            function ($ocLazyLoad) {
                                return $ocLazyLoad.load([
                                        'js/homeCtrl.js'
                                ]);
                            }
                        ]
                    }
                })
                .state('landing.requestInOut', {
                    url: '/RequestIN-OUT',
                    templateUrl: 'pages/reports/requestinout.html',
                    resolve: {
                        deps: ['$ocLazyLoad',
                            function ($ocLazyLoad) {
                                return $ocLazyLoad.load([
                                        'js/reports/requestinoutCtrl.js'
                                ]);
                            }
                        ]
                    }
                    })
                .state('landing.failedawaiting', {
                    url: '/Failed_Awaiting',
                    templateUrl: 'pages/reports/failedawaiting.html',
                    resolve: {
                        deps: ['$ocLazyLoad',
                            function ($ocLazyLoad) {
                                return $ocLazyLoad.load([
                                        'js/reports/failedawaitingtCtrl.js'
                                ]);
                            }
                        ]
                    }
                    })
                .state('landing.failuredetails', {
                     url: '/Failure_Details',
                     templateUrl: 'pages/reports/failuredetails.html',
                     resolve: {
                         deps: ['$ocLazyLoad',
                            function ($ocLazyLoad) {
                                return $ocLazyLoad.load([
                                        'js/reports/failuredetailsCtrl.js'
                                ]);
                            }
                        ]
                     }
                    })
                .state('landing.networkexception', {
                    url: '/Network_Exception',
                    templateUrl: 'pages/reports/networkexception.html',
                    resolve: {
                        deps: ['$ocLazyLoad',
                            function ($ocLazyLoad) {
                                return $ocLazyLoad.load([
                                        'js/reports/networkexceptionCtrl.js'
                                ]);
                            }
                        ]
                    }
                    })
                .state('landing.nodelatency', {
                    url: '/Node_Latency',
                    templateUrl: 'pages/reports/nodelatency.html',
                    resolve: {
                        deps: ['$ocLazyLoad',
                            function ($ocLazyLoad) {
                                return $ocLazyLoad.load([
                                        'js/reports/nodelatencyCtrl.js'
                                ]);
                            }
                        ]
                    }
                    })
                .state('landing.responsetime', {
                    url: '/Response_Time',
                    templateUrl: 'pages/reports/responsetime.html',
                    resolve: {
                        deps: ['$ocLazyLoad',
                            function ($ocLazyLoad) {
                                return $ocLazyLoad.load([
                                        'js/reports/responsetimeCtrl.js'
                                ]);
                            }
                        ]
                    }
                    })
                .state('landing.servicelatency', {
                    url: '/Service_Latency',
                    templateUrl: 'pages/reports/servicelatency.html',
                    resolve: {
                        deps: ['$ocLazyLoad',
                            function ($ocLazyLoad) {
                                return $ocLazyLoad.load([
                                        'js/reports/servicelatencyCtrl.js'
                                ]);
                            }
                        ]
                    }
                    })
                .state('landing.transactions', {
                    url: '/Transactions',
                    templateUrl: 'pages/reports/transactions.html',
                    resolve: {
                        deps: ['$ocLazyLoad',
                            function ($ocLazyLoad) {
                                return $ocLazyLoad.load([
                                        'js/reports/transactionsCtrl.js'
                                ]);
                            }
                        ]
                    }
                })
            }
        ]
    );