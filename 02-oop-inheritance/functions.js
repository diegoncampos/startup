var Movie = function (title, duration, director) {
	
		this.title = title;
		this.duration = duration;
		this.director = director;
		


};

Movie.prototype = {
	


	play:function(){ MovieObserver.playing(this.title); },
	stop:function(){ MovieObserver.stopping(this.title); },
	set:function(attr, value){ this[attr] = value; },
	get:function(attr){
		console.log(this[attr]); }
};

// Observer

var MovieObserver = (function () {
	var playing = function (name) {
		console.log("Playing " + name + "...");
	},
	stopping = function (name) {
		console.log("Stopping " + name + "...");
	};

	return {playing:playing, stopping:stopping};

})();



// New object + extends

var DownloadableMovie = function (title, duration, director, link){
	Movie.call(this,title, duration, director);
	this.link = link;

};

DownloadableMovie.prototype = Object.create(Movie.prototype);
DownloadableMovie.prototype.getDownloadLink = function (){
	return "Download Link: " + this.link;
};


var Social= (function () {
	var share = function (name) {
		console.log("Sharing " + this.title + " whith " + name);
	},
	like = function () {};

	return {share:share, like:like};

})();

function extend(destination, source) {
  for (var k in source) {
    if (source.hasOwnProperty(k)) {
      destination[k] = source[k];
    }
  }
  return destination; 
}

extend(Movie.prototype, Social);
extend(DownloadableMovie.prototype, Social);

// Class Actors


var Actors= (function () {
	var addActors = function (actors) {
		this.actors = [actors];
	};
	var showActors = function(){
		console.log(this.actors.toString());
	};

	return {addActors:addActors, showActors:showActors};

})();

extend(Movie.prototype, Actors);
extend(DownloadableMovie.prototype, Actors);





// Test

var TheSimpsons = new Movie("TheSimpsons","nose","nose");
alert(TheSimpsons.title);
TheSimpsons.addActors(['Homer', 'Bart']);
TheSimpsons.showActors();

var Transformers = new DownloadableMovie("Transformers", "nose", "nose", "www.download.com");
alert(Transformers.title + " Link: " + Transformers.getDownloadLink());
Transformers.addActors(['robot1', 'robot2']);
Transformers.showActors();
console.log(Transformers.getDownloadLink());

