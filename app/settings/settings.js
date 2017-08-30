'use strict';

angular.module('myApp.settings', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
    $routeProvider.when('/settings', {
        templateUrl: 'settings/settings.html',
        controller: 'settingsCtrl'
    });
}])

.controller('settingsCtrl', function(WeatherService) {
    this.add = function(city) {
        WeatherService.create(city);
        console.log('Created ' + city);
    };
});