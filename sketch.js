const Engine = Matter.Engine; 
const World = Matter.World; 
const Bodies = Matter.Bodies; 
const Constraint = Matter.Constraint;

var fogo;
var agua;
var imagemfogo,imagemagua;
var fundoimg;

function preload(){
fundoimg = loadImage("game_background_4.png")
}
function setup(){
createCanvas(windowWidth,windowHeight)
engine = Engine.create(); 
world = engine.world;
}
function draw(){
background(fundoimg)
Engine.update(engine);
}
