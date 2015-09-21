(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
// define(['Director'], function(Director) {

require([Director], function(Director){
var Movie = function (title) {
	this.title = title;

};
Movie.prototype = {
	
	play:function(){ return "Playing: " + this.title + "..."; },
	stop:function(){ return "Stoping: " + this.title + "..."; },
	set:function(attr, value){ this[attr] = value; },
	get:function(attr){
		console.log(this[attr]); }
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

// module.exports = Movie;

// });

});
},{}]},{},[1]);
