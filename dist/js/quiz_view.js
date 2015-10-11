var quiVview = angular.module("quizview", []);

quizView.controller('ctrlQuiz', function($scope){
    $scope.number = 1;
    $scope.head = "1 + 1 = ?";
    $scope.answer = "2";
});