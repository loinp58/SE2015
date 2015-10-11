var quiz_view = angular.module("quizView", []);

quiz_view.controller("viewCtrl", function($scope){
    $scope.number = 1;
    $scope.head = "1 + 1 = ?";
    $scope.choice = ["1", "2", "3", "4"];
});