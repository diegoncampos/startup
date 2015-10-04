

var app = angular.module('canvas', []);

app.controller('Ctrl', function($scope) {

//rectangle
var canvas = document.getElementById('myCanvas');
var context = canvas.getContext('2d');

context.beginPath();
context.rect(20, 50, 200, 100);
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
context.moveTo(100,410);
context.lineTo(200,200);
context.lineTo(300,410);
context.closePath();
context.fill();
context.lineWidth = 10;
context.strokeStyle = '#'+Math.floor(Math.random()*16777215).toString(16);
context.stroke();

//mio
(function(){
	var c = document.getElementById('myCanvas'),
	ctx = c.getContext('2d');

	function draw (){

		context.fillStyle="blue";
		context.beginPath();
		context.moveTo(100,410);
		context.lineTo(200,200);
		context.lineTo(300,410);
		context.closePath();
		context.fill();
		context.lineWidth = 10;
		context.strokeStyle = '#'+Math.floor(Math.random()*16777215).toString(16);
		context.stroke();
		context.scale(1,1);

		window.requestAnimationFrame(draw);

	}

	draw();
})();

//Animated Rectangle

(function(){
	var pos =  {x: 0, y:0};
	var c = document.getElementById('animatedRectangle'),
	ctx = c.getContext('2d');
  //backgrownd
  function repaint(){
  	ctx.fillStyle = 'red';
  	ctx.fillRect(0,0,c.width,c.height);
  }
  
  function draw (){
    //paints over the last square otherwise this will create a ghost or tail effect
    repaint();
    
    if(pos.x <= c.width){
    	pos.x+=5;
    } else {
    	if (pos.y <= c.height){
    		pos.x = 0;
    		pos.y+=30;
  			} else { pos.x = 0; pos.y=0;} //reinicio
  		}

    //rectangulo negro y cambia de posicion
    ctx.fillStyle = 'black';

    //moves the position
    ctx.setTransform(3,0,0,1,pos.x, pos.y);
    ctx.fillRect(0,5,50,50);
    console.log(pos);
    window.requestAnimationFrame(draw);
}

draw();
})();

//Animated Triangle 2

window.onload = function () {

	var canvas = document.getElementById('animatedTriangle');
	var ctx = canvas.getContext('2d');
	var W = canvas.width = window.innerWidth;
	var H = canvas.height = window.innerHeight;

	var x = 200
	var y = 200

	var speed = 5;

	function repaint(){
		ctx.fillStyle = 'white';
		ctx.fillRect(0,0,canvas.width,canvas.height);
	}

	function animate() {

		reqAnimFrame = window.mozRequestAnimationFrame    ||
		window.requestAnimationFrame ||
		window.msRequestAnimationFrame     ||
		window.oRequestAnimationFrame
		;

		reqAnimFrame(animate);

		x += speed;

		if(x <= 0 || x >= W - 300){
			speed = -speed;
		}

		draw();
	}

	function draw() {  

		repaint();

		ctx.beginPath();
	ctx.fillStyle = '#'+Math.floor(Math.random()*16777215).toString(16); //"rgba(0,204,142,0.5)";
	ctx.moveTo(x,y);
	ctx.lineTo(x + 150, y + (-180));
	ctx.lineTo(x + 300, y);
	ctx.scale(1,1);
	//ctx.rotate(Math.PI / 180);
	ctx.fill();
}
animate();

};//onload function

});