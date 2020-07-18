const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;
var bobObject1,bobObject2,bobObject3,bobObject4,bobObject5;


function setup() {
	createCanvas(800, 700);

	engine = Engine.create();
	world = engine.world;

	ground = createSprite(400,300,400,50);
	ground.shapecolor = ("red");

	//Create the Bodies Here.
	ROOF = new Roof(400,300,400,50);

	ROOF = new Roof(200,300,400,50);
	bobObject1 = new Ball(450,500);
	rope1 = new Rope(bobObject1.body,ROOF.body,200-76, 0);
	bobObject2 = new Ball(480,500);
	rope2 = new Rope(bobObject2.body,ROOF.body,200-38, 0);
	bobObject3 = new Ball(510,500);
	rope3 = new Rope(bobObject3.body,ROOF.body,200, 0);
	bobObject4 = new Ball(540,500);
	rope4 = new Rope(bobObject4.body,ROOF.body,200+38, 0);
	bobObject5 = new Ball(570,500);
	rope5 = new Rope(bobObject5.body,ROOF.body,200+76, 0);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(255);

  bobObject1.display();
  bobObject2.display();
  bobObject3.display();
  bobObject4.display();
  bobObject5.display();
  
  drawSprites();
 
}



