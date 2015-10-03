define(['Director'], function(Director) {

	var Movie = function (title) {
		this.title = title;

	};
	Movie.prototype = {

		play:function(){ return "Playing: " + this.title + "..."; },
		stop:function(){ return "Stoping: " + this.title + "..."; },
		set:function(attr, value){ this[attr] = value; },
		get:function(attr){
			return this[attr]; }
		};

		function extend(destination, source) {
			for (var k in source) {
				if (source.hasOwnProperty(k)) {
					destination[k] = source[k];
				}
			}
			return destination; 
		}

		extend(Movie.prototype, Director);

		return Movie;

	});

