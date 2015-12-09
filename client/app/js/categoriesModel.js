quizApp.factory('categoriesModel', ['categoryModel', function(categoryModel) {
	return {
		initialize: function(data) {
			var categoriesData = {};
			categoriesData.categories = [];
			angular.forEach(data.categories, function(q) {
				categoriesData.categories.push(categoryModel.create(q));
			});
		
			return categoriesData;
		}
	};
}]);