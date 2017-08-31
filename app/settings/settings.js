'use strict';

angular.module('myApp.settings', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
    $routeProvider.when('/settings', {
        templateUrl: 'settings/settings.html',
        controller: 'settingsCtrl'
    });
}])

.controller('settingsCtrl', function($scope, WeatherService) {
    $scope.addNewString = 'Add new city : ';
    $scope.addString = 'Add';
    $scope.currWidgetsString = 'Current widgets :';
    $scope.widgets = WeatherService.getWeather();
    $scope.addCity = function() {
        if ($scope.city !== '') {
            WeatherService.create($scope.city);
        }
        $scope.widgets = WeatherService.getWeather();
    };
});