angular.module('quizApp')
.controller('FacebookController', function ($scope, $rootScope) {
	$scope.user = {}
	$scope.fbLogin = function() {
		FB.login(function(response) {
			if (response.status === 'connected') {
	    	FB.api('/me', {
	    		 fields: 'picture, email, name'
	    	}, function (response) {
	    		$scope.user.email = response.email
	    		$scope.user.password = response.id
	    		$scope.user.name = response.name
				$rootScope.userName = response.name
	    		$scope.user.picture = response.picture
				$rootScope.userPicture = response.picture
	    		$rootScope.logined = true;
	    		//console.log($rootScope.logined);
	    	})
	  } else if (response.status === 'not_authorized') {
	    // The person is logged into Facebook, but not your app.
	  } else {
	    // The person is not logged into Facebook, so we're not sure if
	    // they are logged into this app or not.
	  }
	}, {scope: 'public_profile,email'})};
})