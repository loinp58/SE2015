quizApp.controller('ResultCtrl', function($scope, $location) {
	$scope.playAgain = function() {
		$location.path('/categories');
	};
});