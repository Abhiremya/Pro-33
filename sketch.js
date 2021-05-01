const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;

var bg;
var snow1,snow2;
var sn1,sn2;

function preload() {
  bg = loadImage("snow3.jpg");
  sn1 = loadImage("snow4.webp");
  sn2 = loadImage("snow5.webp");

}

function setup() {
  createCanvas(1536, 722);
//   engine = Engine.create();
//  world = engine.world;

//snow1 = Bodies.circle(900,270,90);
//World.add(world,snow1);

}


function draw() {
  background(bg);
  Engine.update(engine);


    // imageMode(CENTER)
    // image(sn1 ,snow1.position.x,snow1.position.y,90,90);

}



















// function setup() {
//   createCanvas(800,400);
//   createSprite(400, 200, 50, 50);
// }

// function draw() {
//   background(255,255,255);  
//   drawSprites();
// }




















