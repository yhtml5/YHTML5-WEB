'use strict';

angular.module('yhtml5', [
        'ui.router',
        'controllers'
    ])
    .config(function($stateProvider, $urlRouterProvider) {
        $urlRouterProvider
            .otherwise("/index");
        $stateProvider
            .state('index', {
                url: "/index",
                views: {
                    "nav": {
                        templateUrl: "view/nav/nav.html"
                    },
                    "nav-right": {
                        templateUrl: "view/nav-right/nav-right.html"
                    },
                    "content": {
                        templateUrl: "view/show/show.html"
                    },
                    "footer": {
                        templateUrl: "view/footer/footer.html"
                    }
                }
            })
            .state('download', {
                url: "/download",
                views: {
                    "nav": {
                        templateUrl: "view/nav-blue/nav-blue.html"
                    },
                    "nav-right": {
                        templateUrl: "view/nav-right/nav-right.html"
                    },
                    "content": {
                        templateUrl: "view/download/download.html"
                    },
                    "footer": {
                        templateUrl: "view/footer/footer.html"
                    }
                }
            })
            .state('production', {
                url: "/production",
                views: {
                    "nav": {
                        templateUrl: "view/nav-blue/nav-blue.html"
                    },
                    "nav-right": {
                        templateUrl: "view/nav-right/nav-right.html"
                    },
                    "content": {
                        templateUrl: "view/production/production.html"
                    },
                    "footer": {
                        templateUrl: "view/footer/footer.html"
                    }
                }
            })
            .state('production.accounting', {
                url: "/accounting",
                views: {
                    "content": {
                        templateUrl: "view/production.accounting/production.accounting.html"
                    }
                }
            })
            .state('production.credit', {
                url: "/credit",
                views: {
                    "content": {
                        templateUrl: "view/production.credit/production.credit.html"
                    }
                }
            })
            .state('cost', {
                url: "/cost",
                views: {
                    "nav": {
                        templateUrl: "view/nav-blue/nav-blue.html"
                    },
                    "nav-right": {
                        templateUrl: "view/nav-right/nav-right.html"
                    },
                    "content": {
                        templateUrl: "view/cost/cost.html"
                    },
                    "footer": {
                        templateUrl: "view/footer/footer.html"
                    }
                }
            })
            .state('contact', {
                url: "/contact",
                views: {
                    "nav": {
                        templateUrl: "view/nav-blue/nav-blue.html"
                    },
                    "nav-right": {
                        templateUrl: "view/nav-right/nav-right.html"
                    },
                    "content": {
                        templateUrl: "view/contact/contact.html"
                    },
                    "footer": {
                        templateUrl: "view/footer/footer.html"
                    }
                }
            });
    });