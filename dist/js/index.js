var myindex = angular.module("myIndex", []);

myindex.controller('ctrlIndex', function($scope){
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
});