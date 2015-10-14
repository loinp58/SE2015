var quiz_view = angular.module("quizView", []);

quiz_view.controller("viewCtrl", function($scope){
	$scope.username = "Kdz";
	$scope.questions = [
		{type: 'multipleChoice', question: "question 1", choice: ["a", "b", "c", "d"], answer: "d"},
		{type: 'yesNo', question: "question 2", choice: ["yes", "no"], answer: "yes"},
		{type: 'fill', question: "question 3", choice: "", answer: "answer"}
	];
});