var canvas;
var backgroundImage;
var bgImg;
var database;
var form, player;
var playerCount;
var p1, p2;
var p1Animation = [];
var p1SpriteData, p1SpriteSheet;
var p2Animation = [];
var p2SpriteData, p2SpriteSheet;
var pokemons = [];

function preload() {
  backgroundImage = loadImage("./assets/background.png");
  p1SpriteData = loadJSON('./assets/pokemon/pokemon.json');
  p1SpriteSheet = loadImage('./assets/pokemon/pokemon.png');
}

function setup() {
  canvas = createCanvas(windowWidth, windowHeight);
  database = firebase.database();
  game = new Game();
  game.start();

  var p1Frames = p1SpriteData.frames;
  for (var i = 0; i < p1Frames.length; i++) {
    var pos = p1Frames[i].position;
    var img = p1SpriteSheet.get(pos.x, pos.y, pos.w, pos.h);
    p1Animation.push(img);
  }

}

function draw() {
  background(backgroundImage);
  if (playerCount === 2) {
    game.update("play");
    game.play();
  }
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}
