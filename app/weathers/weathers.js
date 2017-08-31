'use strict';

angular.module('myApp.weathers', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
    $routeProvider.when('/weathers', {
        templateUrl: 'weathers/weathers.html',
        controller: 'weathersCtrl'
    });
}])

.controller('weathersCtrl', function($scope, WeatherService) {
    $scope.widgets = WeatherService.getWeather();
    $scope.delete = function(name) {
        WeatherService.delete(name);
        $scope.widgets = WeatherService.getWeather();
    };
});