quizApp.factory('quizModel',['questionModel', function(questionModel){
	return {
		initialize: function(data) {
			var quizData = {};
			quizData.category = data.name;
			quizData.questions = [];
			angular.forEach(data.questions, function(q) {
				quizData.questions.push(questionModel.create(q));
			});
			
			return quizData;
		}
	};
}]);