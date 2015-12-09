var quizApp = angular.module('quizApp', ['ngRoute', 'ngResource']).config(['$routeProvider', function($routeProvider) {
	$routeProvider.
		when('/', {templateUrl: '../app/templates/home.html'}).
		when('/login', { templateUrl: '../app/templates/login.html'}).
		when('/profile', { templateUrl: '../app/templates/userProfile.html'}).
		when('/categories', { templateUrl: '../app/templates/categories.html'}).
		when('/quiz', { templateUrl: '../app/templates/quiz.html'}).
		when('/help', { templateUrl: '../app/templates/help.html'}).
		when('/result', { templateUrl: '../app/templates/result.html'}).
		otherwise({
			redirectTo: '/'
		});
}]);

window.fbAsyncInit = function() {
    FB.init({
      appId      : '800598230085740',
      xfbml      : true,
      version    : 'v2.5'
    });
  };

  (function(d, s, id){
     var js, fjs = d.getElementsByTagName(s)[0];
     if (d.getElementById(id)) {return;}
     js = d.createElement(s); js.id = id;
     js.src = "//connect.facebook.net/en_US/sdk.js";
     fjs.parentNode.insertBefore(js, fjs);
   }(document, 'script', 'facebook-jssdk'));