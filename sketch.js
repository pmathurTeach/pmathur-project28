const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
const Constraint=Matter.Constraint;
var dustbinObj, paperObject,groundObject,world;
var launchingForce=100;


function setup() {
	createCanvas(1200, 700);
	rectMode(CENTER);
	engine = Engine.create();
	world = engine.world;
	
	paperObject=new Paper(200,450,70);
	groundObject=new Ground(width/2,670,width,100);
	dustbinObj=new Bin(1000,610);
	launcherObject=new Launcher(paperObject.body,{x:235,y:350})
	Engine.run(engine);

}


function draw() {
  rectMode(CENTER);
  background("white");
 
  launcherObject.display();
  paperObject.display();
  groundObject.display();
  dustbinObj.display();
}

function mouseDragged()
{
	Matter.Body.setPosition(paperObject.body, {x:mouseX, y:mouseY}) 
}

function mouseReleased()
{
	launcherObject.fly();
 }

function keyPressed() {
	if (keyCode === 32) {
    Matter.Body.setPosition(paperObject.body, {x:235, y:420}) 
	  launcherObject.attach(paperObject.body);
	}
  }
