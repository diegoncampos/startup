define(function() {

	var Director = function(director) {
		this.director = director;
		this.quotes = [];
	};

	Director.prototype = {

		get:function (attr){ return this[attr]; },

		set:function (attr, valor) { this[attr] = valor; },

		speak:function(){ return this.director + " says: " + this.quotes; }

	};

	return Director;

});
