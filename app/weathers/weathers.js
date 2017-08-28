'use strict';

angular.module('myApp.weathers', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
    $routeProvider.when('/weathers', {
        templateUrl: 'weathers/weathers.html',
        controller: 'weathersCtrl'
    });
}])

.controller('weathersCtrl', [function() {

}]);