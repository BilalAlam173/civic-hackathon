'use strict';

angular.module('angularMaterialAdmin', ['ngAnimate', 'ngCookies',
    'ngSanitize', 'ui.router', 'ngMaterial', 'nvd3', 'app', 'md.data.table'
])

.config(function($stateProvider, $urlRouterProvider, $mdThemingProvider,
    $mdIconProvider) {
    $stateProvider
        .state('login', {
            url: '/login',
            templateUrl: 'app/views/login.html',
            controller: 'LoginController',
            controllerAs: 'vm',
            data: {
                title: 'Login'
            }
        })
        .state('signup-citizen', {
            url: '/signup-citizen',
            templateUrl: 'app/views/signup-citizen.html',
            controller: 'SignupCitizenController',
            controllerAs: 'vm',
            data: {
                title: 'Citizen Signup'
            }

        })
        .state('signup-journalist', {
            url: '/signup-journalist',
            templateUrl: 'app/views/signup-journalist.html',
            controller: 'SignupJournalistController',
            controllerAs: 'vm',
            data: {
                title: 'Journalist Signup'
            }
        })
        .state('signup-authority', {
            url: '/signup-authority',
            templateUrl: 'app/views/signup-authority.html',
            controller: 'SignupAuthorityController',
            controllerAs: 'vm',
            data: {
                title: 'Authority Signup'
            }
        })
        .state('home', {
            url: '',
            templateUrl: 'app/views/main.html',
            controller: 'MainController',
            controllerAs: 'vm',
            abstract: true
        })
        .state('home.dashboard', {
            url: '/dashboard',
            templateUrl: 'app/views/dashboard.html',
            data: {
                title: 'Dashboard'
            }
        })
        .state('home.profile', {
            url: '/profile',
            templateUrl: 'app/views/profile.html',
            controller: 'ProfileController',
            controllerAs: 'vm',
            data: {
                title: 'Profile'
            }
        })
        .state('home.add-alert', {
            url: '/add-alert',
            templateUrl: 'app/alert/add-alert.html',
            controller: 'AddAlertController',
            controllerAs: 'vm',
            data: {
                title: 'Add Alert'
            }
        })
        .state('home.add-issue', {
            url: '/add-issue',
            templateUrl: 'app/issue/add-issue.html',
            controller: 'AddIssueController',
            controllerAs: 'vm',
            data: {
                title: 'Add Issue'
            }
        })
        .state('home.table', {
            url: '/table',
            controller: 'TableController',
            controllerAs: 'vm',
            templateUrl: 'app/views/table.html',
            data: {
                title: 'Table'
            }
        })
        .state('home.data-table', {
            url: '/data-table',
            controller: 'DataTableController',
            controllerAs: 'vm',
            templateUrl: 'app/views/data-table.html',
            data: {
                title: 'Table'
            }
        });

    $urlRouterProvider.otherwise('/login');

    $mdThemingProvider
        .theme('default')
        .primaryPalette('grey', {
            'default': '600'
        })
        .accentPalette('teal', {
            'default': '500'
        })
        .warnPalette('defaultPrimary');

    $mdThemingProvider.theme('dark', 'default')
        .primaryPalette('defaultPrimary')
        .dark();

    $mdThemingProvider.theme('grey', 'default')
        .primaryPalette('grey');

    $mdThemingProvider.theme('custom', 'default')
        .primaryPalette('defaultPrimary', {
            'hue-1': '50'
        });

    $mdThemingProvider.definePalette('defaultPrimary', {
        '50': '#FFFFFF',
        '100': 'rgb(255, 198, 197)',
        '200': '#E75753',
        '300': '#E75753',
        '400': '#E75753',
        '500': '#E75753',
        '600': '#E75753',
        '700': '#E75753',
        '800': '#E75753',
        '900': '#E75753',
        'A100': '#E75753',
        'A200': '#E75753',
        'A400': '#E75753',
        'A700': '#E75753'
    });

    $mdIconProvider.icon('user', 'assets/images/user.svg', 64);
});