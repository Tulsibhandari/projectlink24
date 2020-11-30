
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var paperObject,dustbin1,dustbin2,dustbin3,ground1;
function preload()
{
	
}

function setup() {
	createCanvas(1200,400);
	//groundSprite=createSprite(width/2, height-35, width,10);
	//groundSprite.shapeColor=color("yellow");

	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.                                                        
	//ground = Bodies.rectangle(width/2, 350, width, 10 , {isStatic:true} );
	//World.add(world, ground);



	 ground1 = new ground(width/2, 368, width,10);
	paperObject = new paper(100,300,20/2);
	dustbin1 = new dustbin(900,350,200,20);
	dustbin2 = new dustbin(990,310,20,100);
	dustbin3 = new dustbin(792,310,20,100);
	
	Engine.run(engine);


	
}


function draw() {
  rectMode(CENTER);
  background(0);  
  

  paperObject.display();

   dustbin1.display();
   dustbin2.display();
   dustbin3.display();
   ground1.display();
   drawSprites();
 
}


function keyPressed(){


if(keyCode=== UP_ARROW){

	
Matter.Body.applyForce(paperObject.body,paperObject.body.position,{x:85,y:-85});

}


}
