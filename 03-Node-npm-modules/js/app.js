requirejs.config({
  baseUrl: 'js', // will automatically try to load modules from there, if successfully loaded, they will be accessible globally
  paths: { // relative to the baseUrl
  	jquery: '../node_modules/jquery/dist/jquery.min'
  }
});

requirejs(['jquery', 'Movie', 'Director'], function ($, Movie, Director) {

	var alien = new Movie('Alien');
	var ridleyScott = new Director("Ridley Scott");
	ridleyScott.set('quotes', ['Cast is everything.', 'Do what ...']);
	alien.set('director', ridleyScott);
	alien.get('director').speak();

	$.each(alien.director.quotes, function(key, quotes) {
		console.log('Quote: ' + key + '\n' + 'Say: ' + quotes);
	});


    // TEST

    console.log('\n\nTEST:\n\n');
    console.log("Title: " + alien.title);
    console.log("Director: " + ridleyScott.director);
    console.log("Quotes: " + ridleyScott.quotes.toString());
    console.log("Movie Director: " + alien.director.director);
    console.log(alien.get('director').speak());

});