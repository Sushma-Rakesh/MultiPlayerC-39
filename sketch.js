var canvas;
var backgroundImage;
var bgImg;
var database;
var form, player;
var playerCount;
var car1,car2,car1_Img,car2_Img
var track
var cars = []
var allPlayers
var gameState

function preload() {
  backgroundImage = loadImage("./assets/background.png");
  car1_Img = loadImage("./assets/car1.png")
  car2_Img = loadImage("./assets/car2.png")
  track = loadImage("./assets/track.jpg")
}

function setup() {
  canvas = createCanvas(windowWidth, windowHeight);
  database = firebase.database();
  game = new Game();
  game.start();

}

function draw() {
  background(backgroundImage);

  if(gameState === 1){
    game.play()
  }

  if(gameState === 2){
    game.update(1)
  }
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}
