quizApp.controller("HelpCtrl", function($scope, $location){
	$scope.back = function() {
		$location.path('/');
	};
});