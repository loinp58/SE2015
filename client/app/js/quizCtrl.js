quizApp.controller('QuizCtrl', function QuizCtrl($rootScope, $scope, $resource, $location, quizModel, userModel){
	$resource('https://letlol.herokuapp.com/api/categories/' + $rootScope.categoryID).get(function (data) {
		console.log($rootScope.categoryID);
		$scope.quiz = quizModel.initialize(data);
		$scope.currentPosition = -1;
		$scope.updatePage();
	});
	
	$resource('fixtures/user.json').get(function(data) {
		$scope.user = userModel.initialize(data);
	});
	
	$scope.hasNext = function() {
		return !($scope.currentPosition >= $scope.quiz.questions.length - 1);
	};
	
	$scope.updatePage = function() {
		$scope.currentQuestion = $scope.quiz.questions[++$scope.currentPosition];
	};
	
	$scope.submitAnswer = function() {
		var score = $scope.currentQuestion.score;
		angular.forEach($scope.currentQuestion.options, function(o) {
			if($scope.currentResponse == o.choice && o.is_correct) {
				$scope.user.correct = $scope.user.correct + 1;
				$scope.user.score = $scope.user.score + score;
			}
		});
		
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
			$rootScope.quizSize = $scope.quiz.questions.length;
			$rootScope.user = $scope.user;
			$location.path('/result');
		}
	}
	
	$scope.quit = function() {
		$location.path('/');
	}
});