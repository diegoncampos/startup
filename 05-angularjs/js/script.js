var app = angular.module('appMovie', []);

app.controller('movieCtrl', function($scope) {
	$scope.movies = movies;
});