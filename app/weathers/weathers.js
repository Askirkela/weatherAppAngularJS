'use strict';

angular.module('myApp.weathers', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
    $routeProvider.when('/weathers', {
        templateUrl: 'weathers/weathers.html',
        controller: 'weathersCtrl'
    });
}])

.controller('weathersCtrl', ['$scope', function($scope) {
    $scope = {
        welcome: 'Hi there! o/',
        widgets: [{
                name: 'Paris',
                country: 'FR',
                temp: '29°C',
                weatherIcon: 'wi wi-owm-403',
                desc: 'Cloudy'
            },
            {
                name: 'Montpellier',
                country: 'FR',
                temp: '29°C',
                weatherIcon: 'wi wi-owm-403',
                desc: 'Cloudy'
            }
        ]
    };
}]);