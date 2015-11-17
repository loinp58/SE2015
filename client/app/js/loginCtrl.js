quizApp.controller("LoginCtrl", function($scope, $location) {
	$scope.isValidUser = function() {
	return true;
	}
	
	$scope.currentTab = 1;
    $scope.changeTab = function(index) {
        $scope.currentTab = index;
    };
    $scope.isActive = function(index) {
        return (index === $scope.currentTab);
    };
	
	$scope.getCurrentLoginStatus = function() {
		return $scope.loginStatus;
	}
	
	$scope.changeLoginStatus = function() {
		$scope.loginStatus = (($scope.loginStatus == false) ? true : false);
		return $scope.loginStatus;
	}
	
	$scope.chooseCategory = function() {
		$location.path('/categories');
	}
	
	$scope.help = function () {
		$location.path('/help');
	}
});