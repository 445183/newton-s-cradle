const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var chain;
var bob1,bob2,bob3,bob4,bob5;
var roof1,roof2,roof3,roof4,roof5;
var rope1,rope2,rope3,rope4,rope5;

function setup() {
	createCanvas(1250, 575);

	engine = Engine.create();
	world = engine.world;
	
	bob1= new Bob(525,375);
	bob2= new Bob(575,375);
	bob3= new Bob(625,375);
	bob4= new Bob(675,375);
	bob5= new Bob(725,375);

	roof1= new Roof(525,160);
	roof2= new Roof(575,160);
	roof3= new Roof(625,160);
	roof4= new Roof(675,160);
	roof5= new Roof(725,160);

	//roof6= new Roof(625,425);
	//roof7= new Roof(525,425);
	//roof8= new Roof(575,425);
	//roof9= new Roof(675,425);
	//roof10= new Roof(725,425);	
	
	rope1= new Chain(roof1.body,bob1.body);
	rope2= new Chain(bob2.body,roof2.body);
	rope3= new Chain(bob3.body,roof3.body);
	rope4= new Chain(bob4.body,roof4.body);
	rope5= new Chain(bob5.body,roof5.body);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  Engine.update(engine);

  rope1.display();
  rope2.display();
  rope3.display();
  rope4.display();
  rope5.display();

  bob1.display();
  bob2.display();
  bob3.display();
  bob4.display();
  bob5.display();

  roof1.display();
  roof2.display();
  roof3.display();
  roof4.display();
  roof5.display();

  drawSprites();
}