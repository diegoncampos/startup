var app = angular.module('appMovie', []);

app.controller('movieCtrl', function($scope) {
	$scope.movies = movies;

	$scope.selectedMovie={
		tittle:"",
		nombre:""
	};

	$scope.get = function(movie){
		$scope.details = "Movie Details:";
		$scope.tittle = "Titulo: " + movie.tittle;
		$scope.director = "Director: " + movie.director;
		$scope.duration = "Duration: " + movie.duration;
		$scope.photo = movie.photo;		

	};

	// $scope.addMovie = function(tittle, director, duration, photo){
	// 	var newMovie = 

	// };


});