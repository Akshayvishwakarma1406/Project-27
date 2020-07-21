
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

function setup() {
	createCanvas(500, 500);


	engine = Engine.create();
	world = engine.world;

	Roof = new Ground(200,100,250,60);
	//Create the Bodies Here.
	bobObject1 = new Ball(160,200);
	rope1 = new Chain(bobObject1.body,Roof.body,-64,30);
	bobObject2 = new Ball(180,200);
	rope2 = new Chain(bobObject2.body,Roof.body,-32,30);
	bobObject3 = new Ball(200,200);
	rope3 = new Chain(bobObject3.body,Roof.body,0,30);
	bobObject4 = new Ball(220,200);
	rope4 = new Chain(bobObject4.body,Roof.body,+32,30);
	bobObject5 = new Ball(240,200);
	rope5 = new Chain(bobObject5.body,Roof.body,+64,30);



	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  Roof.display();
  bobObject1.display();
  bobObject2.display();
  bobObject3.display();
  bobObject4.display();
  bobObject5.display();
  rope1.display();
  rope2.display();
  rope3.display();  
  rope4.display();  
  rope5.display();

  drawSprites();
 
}

function keyPressed() {
	if (keyCode === UP_ARROW) {
	   Matter.Body.applyForce(bobObject1.body,bobObject1.body.position,{x:-95,y:95});
	   
	 }
	}
   



