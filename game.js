// Create the canvas
var canvas = document.getElementById("canvas")
var	ctx = canvas.getContext("2d");
 //document.body.appendChild(canvas); 

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

// Monster image
var monsterReady = false;
var monsterImage = new Image();
monsterImage.onload = function () {
	monsterReady = true;
};
monsterImage.src = "img/green.png";

// Game objects
var hero = {
	speed: 256 // movement in pixels per second
};
var monster = {};
var monstersCaught = 0;

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

// Reset the game when the player catches a monster
var reset = function () {
	hero.x = canvas.width / 2;
	hero.y = canvas.height / 2;
	hero.w = 32;
	hero.h = 32;

	// Throw the monster somewhere on the screen randomly
	monster.w = 32;
	monster.h = 32;
	monster.x = (Math.random() * (canvas.width - 32));
	monster.y = (Math.random() * (canvas.height - 66 - 32));
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

	// Are they touching?
	if (
		hero.x <= (monster.x + 32)
		&& monster.x <= (hero.x + 32)
		&& hero.y <= (monster.y + 32)
		&& monster.y <= (hero.y + 32)
	) {
		++monstersCaught;
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

	if (monsterReady) {
		ctx.drawImage(monsterImage, monster.x, monster.y);
	}

	// Score
	ctx.fillStyle = "rgb(250, 250, 250)";
	ctx.font = "24px Helvetica";
	ctx.textAlign = "left";
	ctx.textBaseline = "top";
	ctx.fillText("Gems caught: " + monstersCaught, 32, 32);
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