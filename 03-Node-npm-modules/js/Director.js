define(function() {


	var Director = function(director) {
		this.director = director;
		this.quotes = [quotes];

		this.get = function (attr){
			return this[attr];

		};

		this.set = function (attr, valor) {
			this[attr] = valor;
		};

		this.speak = function(){
			console.log(this.director + "says: " + this.quotes);
			return this.director + "says: " + this.quotes;
			
		};

	};


// module.exports = Director;


});
