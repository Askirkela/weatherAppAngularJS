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
    .service('WeatherService', ['$http', function($http) {
        var url = 'https://api.openweathermap.org/data/2.5/weather?q=';
        var apiKeyString = '&APPID=dc393667966650c4415b7190103fcc7d';
        var metricString = '&units=metric';
        var widgets = [{
                name: 'Paris',
                country: 'FR',
                temp: '25°C',
                weatherIcon: 'wi wi-owm-503',
                desc: 'Cloudy'
            },
            {
                name: 'Rouen',
                country: 'FR',
                temp: '22°C',
                weatherIcon: 'wi wi-owm-503',
                desc: 'Rainy'
            }
        ];
        this.create = function(city) {
            $http.get(url + city + apiKeyString + metricString)
                .then(function(res) {
                    var w = {
                        name: res.json().name,
                        country: res.json().sys.country,
                        temp: res.json().main.temp,
                        weatherIcon: 'wi wi-owm-' + res.json().weather[0].id,
                        desc: res.json().weather[0].description
                    };
                    widgets.push(w);
                });
        };
        this.delete = function(city) {
            widgets = widgets.filter(function(w) { return w.name !== city; });
        };
        this.getWeather = function() {
            console.log(JSON.stringify(widgets));
            return widgets;
        };
    }]);