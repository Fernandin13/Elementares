const Engine = Matter.Engine; 
const World = Matter.World; 
const Bodies = Matter.Bodies; 
const Constraint = Matter.Constraint;

var fogo;
var vento;
var imagemfogo,imagemvento;
var fundoimg;
var ground;
var animation1;

function preload(){
fundoimg = loadImage("game_background_4.png")
animation1 = loadAnimation("Elementals_fire_knight_basic_v1.0/gifs/01_idle.gif")

}
function setup(){
createCanvas(windowWidth,windowHeight)
engine = Engine.create(); 
world = engine.world;
fogo = new Fogo(200,200)
ground = new Ground(600,height,1200,20)
}
function draw(){
background(fundoimg)
Engine.update(engine);
fogo.display();
ground.display();
}
