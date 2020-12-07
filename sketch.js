
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var dustbin1, paperObject,groundObject;


function preload()
{
	
}

function setup() {
	createCanvas(800, 630);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	paperObject=new Paper(200,450,40);
	groundObject=new Ground(width/2,620,width,10);
    dustbin1=new Dustbin(750,557,15,100);
    dustbin2=new Dustbin(550,557,15,100);
    dustbin3=new Dustbin(650,600,215,15);
	Engine.run(engine);
  
}
 function keyPressed() {
	if (keyCode === 32) {

	  Matter.Body.applyForce(paperObject.body,paperObject.body.position,{x:10,y:-15});

 
	}
}



function draw() {
  rectMode(CENTER);
  background("yellow");
  
  drawSprites();
  dustbin1.display();
  dustbin2.display();
  dustbin3.display();
  groundObject.display();
  paperObject.display();
    
   
}



