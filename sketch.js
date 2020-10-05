const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var ground1,charlie,plant1,plant2,plant3,plant4,plant5,plant6,plant7;
var driedPlant;

function setup() {
	canvas=createCanvas(1200, 800);
	engine = Engine.create();
	world = engine.world;
	
	ground1 = new Ground(600,height,1200,20);

	charlie= new Charlie(400,695,1,1);
	plant1= new Plant(600,700,100,90);
	plant2= new Plant(700,750,100,90);
	plant3= new Plant(900,700,100,90);
	plant4= new Plant(1000,600,100,90);
	plant5= new Plant(100,640,100,90);
	plant6= new Plant(200,700,100,90);
	plant7= new Plant(1100,670,100,90);
	//Create the Bodies Here.

}


function draw() {
  background("white");
  Engine.run(engine);
  
  ground1.display();
  charlie.display();
  plant1.display();
  plant2.display();
  plant3.display();
  plant4.display();
  plant5.display();
  plant6.display();
  plant7.display();
}