 var mainApp = angular.module("mainApp", ['ngRoute']);

 mainApp.config(function($routeProvider) {

     $routeProvider
         .when('/home', {
             templateUrl: './views/home.html',

         })
         .when('/customerCare', {

             templateUrl: './views/customerCare.html',
             controller: 'CustomerCareController'
         })
         .when('/customerCareLookup', {
             templateUrl: './views/customerCareLookup.html',
             controller: 'CustomerCareLookupController'

         })
         .when('/deviceInfo', {
            templateUrl: './views/deviceInfo.html',
            controller: 'DeviceInfoController'

         }).when('/overview',{
            templateUrl: './views/overview.html'
         })
         .otherwise({
             redirectTo: '/home'
         });
 });



 