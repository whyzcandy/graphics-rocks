'use strict';

var myApp = angular.module('myApp', ['ngRoute']);

myApp.config(function($routeProvider) {
   $routeProvider.when('/siggraph-2014-paper',
      {
         templateUrl: 'views/siggraph-2014-paper.html',
         controller: 'SiggraphCtrl'
      });
   $routeProvider.when('/siggraph-2014-course',
      {
         templateUrl: 'views/siggraph-2014-course.html',
         controller: 'SiggraphCtrl'
      });
   $routeProvider.otherwise({
      redirectTo: '/siggraph-2014-paper'
   });
});
