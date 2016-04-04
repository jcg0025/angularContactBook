var app = angular.module('myApp', ['myApp.controllers', 'myApp.factories', 'ngRoute']);
app.config(['$routeProvider', function($routeProvider){
    $routeProvider
    .when('/', {
        templateUrl: 'views/home.html',
        controller: 'homeController'
    })
    .when('/singleView',{
        templateUrl: 'views/singleView.html',
        controller: 'singleViewController'
    })
    .otherwise({
        redirectTo: '/'
    })
}]);