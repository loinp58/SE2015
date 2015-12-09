quizApp.controller('CategoriesCtrl', function CategoriesCtrl($rootScope, $scope, $resource, $location, categoriesModel) {
	$resource('https://letlol.herokuapp.com/api/categories').get(function (data) {
		$scope.categoriesData = categoriesModel.initialize(data);
		$scope.categories = $scope.categoriesData.categories;
	});
	
	$scope.startQuiz = function(categoryID) {
		$rootScope.categoryID = categoryID;
		$location.path('/quiz');
	};

	$scope.back = function() {
		$location.path('/');
	}
})