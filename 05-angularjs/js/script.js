var app = angular.module('appMovie', []);
var selectedMovie = "";

app.controller('movieCtrl', function($scope) {
	$scope.movies = movies;

	$scope.selectedMovie={
		tittle:"",
		nombre:""
	};

	$scope.get = function(movie){
		$scope.getDetails = "Movie Details:";
		$scope.getTittle = "Titulo: " + movie.tittle;
		$scope.getDirector = "Director: " + movie.director;
		$scope.getDuration = "Duration: " + movie.duration;
		$scope.getPhoto = movie.photo;	

		$scope.edTittle = movie.tittle;
		$scope.edDirector = movie.director;
		$scope.edDuration = movie.duration;
		$scope.edPhoto = movie.photo;	

		selectedMovie = movie;

	};

	$scope.addMovie = function(){
		
		$scope.newMovie = [{tittle : $scope.newTittle, 
			director : $scope.newDirector, 
			duration : $scope.newDuration, 
			photo : $scope.newPhoto}];

			$scope.movies = $scope.movies.concat($scope.newMovie);

			$scope.newTittle = "";
			$scope.newDirector = "";
			$scope.newDuration = "";
			$scope.newPhoto = "";

		};

		$scope.deleteMovie = function(){  

			var index = $scope.movies.indexOf(selectedMovie);

			var r = confirm("Delete " + selectedMovie.tittle +"?");
			if (r === true) {
				
				$scope.movies.splice(index,1); 

				$scope.edTittle = "";
				$scope.edDirector = "";
				$scope.edDuration = "";
				$scope.edPhoto = "";


				cleanDetails();	

			} 


		};

		$scope.editMovie = function(){   



			for (var i = 0; i< $scope.movies.length; i++){
				if($scope.movies[i] === selectedMovie) {

					var r = confirm("Edit " + selectedMovie.tittle + "?");
					if (r === true) {

						$scope.movies[i] = {tittle : $scope.edTittle, 
							director : $scope.edDirector, 
							duration : $scope.edDuration, 
							photo : $scope.edPhoto};


							cleanDetails();
						}

					}
				}	

			};

			function cleanDetails(){
				$scope.getDetails = "";
				$scope.getTittle = "";
				$scope.getDirector = "";
				$scope.getDuration = "";
				$scope.getPhoto = "";	
			};


		});