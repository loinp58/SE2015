quizApp.controller('userProfileCtrl', function($rootScope, $scope, $location){
	$scope.back = function() {
		$location.path('/');
	};
});