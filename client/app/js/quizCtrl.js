quizApp.controller('QuizCtrl', function QuizCtrl($scope, $resource, $location, quizModel){
	$resource('fixtures/questions.json').get(function (data) {
		$scope.quiz = quizModel.initialize(data);
		$scope.currentPosition = -1;
		$scope.updatePage();
	});
	
	$scope.hasNext = function() {
		return !($scope.currentPosition >= $scope.quiz.questions.length - 1);
	};
	
	$scope.updatePage = function() {
		$scope.currentQuestion = $scope.quiz.questions[++$scope.currentPosition];
	};
	
	$scope.submitAnswer = function() {
		$scope.next();
	};
	
	$scope.isAnswered = function () {
		return ($scope.currentResponse !== "" && $scope.currentResponse !== undefined);
	};
	
	$scope.next = function () {
		var valid = $scope.hasNext();
		if(valid == true) {
			$scope.currentResponse = "";
			$scope.updatePage();
		}
		else {
		$location.path('/result');
		}
	}
	
	$scope.quit = function() {
		$location.path('/');
	}
});