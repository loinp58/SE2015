var quizApp = angular.module('quizApp', ['ngRoute', 'ngResource']).config(['$routeProvider', function($routeProvider) {
	$routeProvider.
		when('/login', { templateUrl: '../app/templates/login.html'}).
		when('/categories', { templateUrl: '../app/templates/categories.html'}).
		when('/quiz', { templateUrl: '../app/templates/quiz.html'}).
		when('/help', { templateUrl: '../app/templates/help.html'}).
		when('/result', { templateUrl: '../app/templates/result.html'}).
		otherwise({
			redirectTo: '/login'
		});
}]);