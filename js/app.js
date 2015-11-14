var app = angular.module('angularOne', ['ngRoute']);

app.config(['$routeProvider','$locationProvider',
	function($routeProvider, $locationProvider) {
       $routeProvider
       .when('/', {
	      templateUrl: 'views/home.html',
	      controller: 'HomeController'
	    })
       .when('/photos/:id', {
	      templateUrl: 'views/photo.html',
	      controller: 'PhotoController'
	    })
       .otherwise({
	     redirectTo: '/' 
	  });

	 $locationProvider.html5Mode(true);
}]);
