quizApp.controller('CategoriesCtrl', function($scope, $location) {
	$scope.categories = [
        {image: "img/portfolio/cabin.png"},
        {image: "img/portfolio/cake.png"},
        {image: "img/portfolio/circus.png"},
        {image: "img/portfolio/game.png"},
        {image: "img/portfolio/safe.png"},
        {image: "img/portfolio/submarine.png"},
        {image: "img/portfolio/cabin.png"},
        {image: "img/portfolio/cake.png"},
        {image: "img/portfolio/circus.png"},
        {image: "img/portfolio/game.png"},
        {image: "img/portfolio/safe.png"},
        {image: "img/portfolio/submarine.png"},
    ];
	
	$scope.startQuiz = function() {
		$location.path('/quiz');
	};
})