// Create the canvas
var canvas = document.getElementById("canvas")
var	ctx = canvas.getContext("2d");
 

// Background image
var bgReady = false;
var bgImage = new Image();
bgImage.onload = function () {
	bgReady = true;
};
bgImage.src = "img/background.png";

// Hero image
var heroReady = false;
var heroImage = new Image();
heroImage.onload = function () {
	heroReady = true;
};
heroImage.src = "img/pink.png";

// Gem image
var gemReady = false;
var gemImage = new Image();
gemImage.onload = function () {
	gemReady = true;
};
gemImage.src = "img/green.png";

// Game objects
var hero = {
	speed: 300 // hero movement in pixels per second
};
var gem = {};
var gemsCaught = 0;

var block1 = {x:173,y:288,w:32,h:32,type:"block"};
var block2 = {x:300,y:288,w:162,h:32,type:"block"};
var block3 = {x:365,y:159,w:32,h:32,type:"block"};
var ground = {x:0,y:416,w:512,h:66,type:"ground"};

var blocks=[block1,block2,block3,ground];

// Handle keyboard controls
var keysDown = {};

addEventListener("keydown", function (e) {
	keysDown[e.keyCode] = true;
}, false);

addEventListener("keyup", function (e) {
	delete keysDown[e.keyCode];
}, false);

// Reset the game when the player catches a gem
var reset = function () {
	hero.x = canvas.width / 2;
	hero.y = canvas.height / 2;
	hero.w = 32;
	hero.h = 32;

	// Throw the gem randomly on the screen
	gem.w = 32;
	gem.h = 32;
	gem.x = (Math.random() * (canvas.width - 32));
	gem.y = (Math.random() * (canvas.height - 66 - 32));
};

// Update game objects
var update = function (modifier) {
	if (38 in keysDown) { // Player holding up
		hero.y -= hero.speed * modifier;
		if(hero.y <= 0){
				hero.y=600;
	}
	}
	if (40 in keysDown) { // Player holding down
		hero.y += hero.speed * modifier;
		if(hero.y+32 >= 700){
				hero.y=600;
	}
	}
	if (37 in keysDown) { // Player holding left
		hero.x -= hero.speed * modifier;
		if(hero.x<=0){
				hero.x = 600;
	}
	}
	if (39 in keysDown) { // Player holding right
		hero.x += hero.speed * modifier;
		if(hero.x + 32>= 700){
				hero.x = 600;
	}
	}

	// Are the hero and gem touching?
	if (
		hero.x <= (gem.x + 32)
		&& gem.x <= (hero.x + 32)
		&& hero.y <= (gem.y + 32)
		&& gem.y <= (hero.y + 32)
	) {
		++gemsCaught;
		reset();
	}
};

// Draw everything
var render = function () {
	if (bgReady) {
		ctx.drawImage(bgImage, 0, 0);
	}

	if (heroReady) {
		ctx.drawImage(heroImage, hero.x, hero.y);
	}

	if (gemReady) {
		ctx.drawImage(gemImage, gem.x, gem.y);
	}

	// Score
	ctx.fillStyle = "rgb(250, 250, 250)";
	ctx.font = "24px Helvetica";
	ctx.textAlign = "left";
	ctx.textBaseline = "top";
	ctx.fillText("Gems caught: " + gemsCaught, 32, 32);
};

// The main game loop
var main = function () {
	var now = Date.now();
	var delta = now - then;

	update(delta / 1000);
	render();

	then = now;

	// Request to do this again ASAP
	requestAnimationFrame(main);
};

// Cross-browser support for requestAnimationFrame
var w = window;
requestAnimationFrame = w.requestAnimationFrame || w.webkitRequestAnimationFrame || w.msRequestAnimationFrame || w.mozRequestAnimationFrame;

// Let's play this game!
var then = Date.now();
reset();
main();