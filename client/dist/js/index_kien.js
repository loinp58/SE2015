// AngularJS code in here
var myindex = angular.module("myIndex", []);

myindex.controller('ctrlIndex', function($scope){
	$scope.username = "Kdz";
	$scope.loginStatus = false;

	$scope.usersLeaderBoard = [
		{rank: 1, Name: "Name 1", point: 140},
		{rank: 2, Name: "Name 2", point: 130},
		{rank: 3, Name: "Name 3", point: 120},
		{rank: 4, Name: "Name 4", point: 110},
		{rank: 5, Name: "Name 5", point: 100},
		{rank: 6, Name: "Name 6", point: 90},
		{rank: 7, Name: "Name 7", point: 80},
		{rank: 8, Name: "Name 8", point: 70},
		{rank: 9, Name: "Name 9", point: 60},
		{rank: 10, Name: "Name 10", point: 50}
	];

    $scope.categories = [
        {href: "./quiz_view_giang.html", image: "/dist/img/portfolio/cabin.png"},
        {href: "./quiz_view_giang.html", image: "/dist/img/portfolio/cake.png"},
        {href: "./quiz_view_giang.html", image: "/dist/img/portfolio/circus.png"},
        {href: "./quiz_view_giang.html", image: "/dist/img/portfolio/game.png"},
        {href: "./quiz_view_giang.html", image: "/dist/img/portfolio/safe.png"},
        {href: "./quiz_view_giang.html", image: "/dist/img/portfolio/submarine.png"},
        {href: "./quiz_view_giang.html", image: "/dist/img/portfolio/cabin.png"},
        {href: "./quiz_view_giang.html", image: "/dist/img/portfolio/cake.png"},
        {href: "./quiz_view_giang.html", image: "/dist/img/portfolio/circus.png"},
        {href: "./quiz_view_giang.html", image: "/dist/img/portfolio/game.png"},
        {href: "./quiz_view_giang.html", image: "/dist/img/portfolio/safe.png"},
        {href: "./quiz_view_giang.html", image: "/dist/img/portfolio/submarine.png"},
    ];

    // Login
    $scope.currentTab = 1;
    $scope.changeTab = function(index) {
        $scope.currentTab = index;
    };
    $scope.isActive = function(index) {
        return (index === $scope.currentTab);
    };
	
	$scope.getCurrentLoginStatus = function() {
		return $scope.loginStatus;
	}
	
	$scope.changeLoginStatus = function() {
		$scope.loginStatus = (($scope.loginStatus == false) ? true : false);
		return $scope.loginStatus;
	}
});

//jQuery code in here

jQuery(document).ready(function($) {
	var offset = $("#sidebar").offset();
	var topPadding = 15;

	$(window).scroll(function() {
        if ($(window).scrollTop() > offset.top) {
            $("#sidebar").stop().animate({
            marginTop: $(window).scrollTop() - offset.top + topPadding
        });
        } else {
            $("#sidebar").stop().animate({
            	marginTop: 0
        	});
    	};
    });
});