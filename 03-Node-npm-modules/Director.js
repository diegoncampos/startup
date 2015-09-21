

var Director = function(director) {
	this.director = direcotor;
	this.quotes = [quotes];

	this.get = function (attr){
		return this[attr];

	}

	this.set = function (attr, valor) {
		this[attr] = valor;
	}

	this.speak = function(){
		return this.director + "says: " + this.quotes;
		console.log(this.director + "says: " + this.quotes);
	}
	
}

module.exports = Director;


