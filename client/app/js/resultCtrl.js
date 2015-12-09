quizApp.controller('ResultCtrl', function($rootScope, $scope, $location) {
	$scope.user = $rootScope.user;
	$scope.quizSize = $rootScope.quizSize;
	
	$scope.playAgain = function() {
		$location.path('/categories');
	};
});