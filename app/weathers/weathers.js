'use strict';

angular.module('myApp.weathers', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
    $routeProvider.when('/weathers', {
        templateUrl: 'weathers/weathers.html',
        controller: 'weathersCtrl'
    });
}])

.controller('weathersCtrl', function($scope, WeatherService) {
    $scope.addCity = 'You may want to add a new city. Go to the settings page.';
    $scope.widgets = WeatherService.getWeather();
    $scope.delete = function(id) {
        WeatherService.delete(id);
        $scope.widgets = WeatherService.getWeather();
    };
});