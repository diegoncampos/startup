

var app = angular.module('canvas', []);

app.controller('Ctrl', function($scope) {

//rectangle
var canvas = document.getElementById('myCanvas');
var context = canvas.getContext('2d');

context.beginPath();
context.rect(188, 50, 200, 100);
context.fillStyle = '#'+Math.floor(Math.random()*16777215).toString(16);
context.fill();
context.lineWidth = 10;
context.strokeStyle = '#'+Math.floor(Math.random()*16777215).toString(16);
context.stroke();

//circle

var centerX = canvas.width / 2;
var centerY = canvas.height / 2;
var radius = 70;

context.beginPath();
context.arc(centerX, centerY, radius, 0, 2 * Math.PI, false);
context.fillStyle = '#'+Math.floor(Math.random()*16777215).toString(16);
context.fill();
context.lineWidth = 10;
context.strokeStyle = '#'+Math.floor(Math.random()*16777215).toString(16);
context.stroke();

//triangle

context.fillStyle='#'+Math.floor(Math.random()*16777215).toString(16);
context.beginPath();
//  100,110 -> 200,10 -> 300,110 (it will return to first point)
context.moveTo(100,410);
context.lineTo(200,200);
context.lineTo(300,410);
context.closePath();
context.fill();
context.lineWidth = 10;
context.strokeStyle = '#'+Math.floor(Math.random()*16777215).toString(16);
context.stroke();

});