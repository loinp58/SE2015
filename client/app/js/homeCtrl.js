quizApp.controller('HomeCtrl', function($scope, $rootScope, $location) {
	$scope.chooseCategory = function() {
		$location.path('/categories');
	};
	$scope.seeProfile = function() {
		$location.path('/profile');
	};
	$scope.help = function() {
		$location.path('help');
	};
});