
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var ground,dustbin;
var crum,paper;

var dust;

function preload(){
//crum = loadImage("dustbin.png");
}

function setup() {
	createCanvas(1450, 700);
    rectMode(CENTER);
    
    engine = Engine.create();
	world = engine.world;

  //Create the Bodies Here.
  
  ground = new Ground(800,600,1900,20);
  dustbin = new Dustbin(1280,580,150,20);
  paper = new Paper(100,100);
  dustbin1 = new Dustbin(1345,520,20,220);
  dustbin1.scale=0.5;
  dustbin2 = new Dustbin(1255,480,20,220);
  
  //dustbin2=createSprite(1140,480,20,220);
 // dustbin2.scale(0.2);
  
 // dust = createSprite(1237,580,400,400);
  //dust.addImage(crum);


	Engine.run(engine);
  
}



function draw() {
  rectMode(CENTER);
  background("white");
  
    ground.display();
  //dustbin.display();
    paper.display();
  dustbin1.display();
  //dustbin2.display();
}

function keyPressed() {
  if (keyCode === UP_ARROW){
    Matter.Body.applyForce(paper.body,paper.body.position,{x:85,y:-85});
  }
}

