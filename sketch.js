var harry, harryImage;
var hermione, hermioneImage;
var ronald, ronaldImage;
var db;
var db;
var gameState = 0;
var playerCount;
var f;
var p;
var g;
var allPlayer;
var distance = 0;
var characters;
var bg;

function preload(){
  harryImage = loadImage("4.PNG");
  hermioneImage = loadImage("2.PNG");
  ronaldImage = loadImage("3.PNG"); 
  bg = loadImage("1.PNG");
}

function setup() {
  db = firebase.database();
  createCanvas(900,500);
  g = new game();
  g.getState();
  g.start();
 

}

function draw() {
  background("pink"); 
  if(playerCount == 3){
    g.update(1);

}
if(gameState == 1){
g.play();
}

}