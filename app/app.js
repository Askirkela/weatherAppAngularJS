'use strict';

// Declare app level module which depends on views, and components
angular.module('myApp', [
        'ngRoute',
        'myApp.weathers',
        'myApp.settings',
        'myApp.version'
    ])
    .config(['$locationProvider', '$routeProvider', function($locationProvider, $routeProvider) {
        $locationProvider.hashPrefix('!');

        $routeProvider.otherwise({ redirectTo: '/weathers' });
    }])
    .controller('homeCtrl', function($scope) {
        $scope.appTitle = 'WeatherAppJS';
        $scope.weatherPage = 'Weathers';
        $scope.settingsPage = 'Settings';
    })
    .service('WeatherService', ['$http', function($http) {
        var url = 'https://api.openweathermap.org/data/2.5/weather?q=';
        var apiKeyString = '&APPID=dc393667966650c4415b7190103fcc7d';
        var metricString = '&units=metric';
        var widgets = [];
        this.create = function(city) {
            $http.get(url + city + apiKeyString + metricString)
                .then(function(res) {
                    var w = {
                        id: widgets.length == 0 ? 0 : widgets.length,
                        name: res.data.name,
                        country: res.data.sys.country,
                        temp: Math.round(res.data.main.temp) + '°C',
                        weatherIcon: 'wi wi-owm-' + res.data.weather[0].id,
                        desc: res.data.weather[0].description
                    };
                    widgets.push(w);
                });
        };
        this.delete = function(id) {
            widgets = widgets.filter(function(w) { return w.id !== id; });
        };
        this.getWeather = function() {
            return widgets;
        };
    }]);