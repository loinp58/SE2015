var login = angular.module("login", []);
login.controller("loginCtrl", function($scope) {
    $scope.currentTab = 1;
    $scope.changeTab = function(index) {
        $scope.currentTab = index;
    };
    $scope.isActive = function(index) {
        return (index === $scope.currentTab);
    };
});
