quizApp.factory('userModel', function() {
	return {
		initialize : function(data) {
			var user = {};
			user.name = data.name;
			user.avatar = data.avatar;
			user.score = data.score;
			user.rank = data.rank;
			user.division = data.division;
			user.correct = 0;
			
			return user;
		}
	};
});