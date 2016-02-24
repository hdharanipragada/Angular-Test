'use strict';

/**
 * @ngdoc overview
 * @name angularTestApp
 * @description
 * # angularTestApp
 *
 * Main module of the application.
 */
angular
    .module('angularTestApp', [

        'ngAnimate',
        'ngAria',
        'ngCookies',
        'ngMessages',
        'ngResource',
        'ngRoute',
        'ngSanitize',
        'ngTouch',
        'ui.router'
    ])
    .config(function($stateProvider, $urlRouterProvider) {
        //delete $httpProvider.defaults.headers.common['X-Requested-With'];
        $urlRouterProvider.otherwise('/home');
        $stateProvider
            .state('home', {
                url: '/home',
                templateUrl: 'views/home.html',
                controller: 'HomeCtrl'
            })

        .state('login', {
                url: '/login',
                templateUrl: 'views/login.html',
                controller: 'LoginCtrl'
            })
            .state('dashboard', {
                url: '/dashboard',
                templateUrl: 'views/dashboard.html',
                controller: 'DashboardCtrl'
            })
            .state('News', {
                parent: 'dashboard',
                url: '/News',
                templateUrl: 'views/News.html'
            }).state('Updates', {
                parent: 'dashboard',
                url: '/Updates',
                templateUrl: 'views/Updates.html'
            })
            .state('Tasks', {
                parent: 'dashboard',
                url: '/Tasks',
                templateUrl: 'views/Tasks.html'
            })
            .state('Market', {
                parent: 'dashboard',
                url: '/Market',
                templateUrl: 'views/Market.html'
            })


    });
