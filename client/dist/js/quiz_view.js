var quiz_view = angular.module("quizView", []);

quiz_view.controller("viewCtrl", function($scope, $http){
    $http.get("http://www.w3schools.com/angular/customers.php")
    .success(function(response) {$scope.questions = response.questions;});
});