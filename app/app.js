'use strict';

// Declare app level module which depends on views, and components
angular.module('myApp', [
    'ngRoute',
    'myApp.weathers',
    'myApp.settings',
    'myApp.version'
]).
config(['$locationProvider', '$routeProvider', function($locationProvider, $routeProvider) {
        $locationProvider.hashPrefix('!');

        $routeProvider.otherwise({ redirectTo: '/weathers' });
    }])
    /* .
    controller('homeCtrl', ['$scope', function($scope) {
        $scope = {
            appTitle: 'WeatherAppJS',
            weathers: 'Weathers',
            settings: 'Settings',
            footerText: 'Created by Luc Debène'
        };
    }]) */
;