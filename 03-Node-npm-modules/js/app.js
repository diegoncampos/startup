requirejs.config({
  baseUrl: 'js', // will automatically try to load modules from there, if successfully loaded, they will be accessible globally
  paths: { // relative to the baseUrl
  	jquery: '../node_modules/jquery/dist/jquery.min',
    namedModule: 'Movie' // needed for named modules
}
});

requirejs(['jquery', 'Movie', 'Director'], function ($, Movie, Director) {
	console.log("aca estoy");
	
	
});