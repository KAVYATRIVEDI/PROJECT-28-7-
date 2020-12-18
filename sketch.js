
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint=Matter.Constraint;
function preload()
{
	//yes
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	tree = new Tree(500,450,500,500);
  ground = new Ground(400,690,800,20);
  boy = new Boy(150,600,250,250);
  stone = new Stone(80,530,25,25);
  slingshot = new SlingShot(stone.body,{x:80, y:530});

  mango1 = new Mango(580,300,40,40);
  mango2 = new Mango(530,250,40,40);
  mango3 = new Mango(550,350,40,40);
  mango4 = new Mango(460,400,40,40);
  mango5 = new Mango(350,390,40,40);
  mango6 = new Mango(410,390,40,40);
  mango7 = new Mango(650,350,40,40);
  mango8 = new Mango(600,390,40,40);
  mango9 = new Mango(420,300,40,40);
  mango10 = new Mango(500,320,40,40);
  	Engine.run(engine);
  
}


function draw() {
 
  background(0);
  
  Engine.update(engine);
  tree.display();
  ground.display();
  boy.display();
  stone.display();
  mango1.display();
  slingshot.display();
 mango2.display();
 mango3.display();
 mango4.display();
 mango5.display();
 mango6.display();
 mango7.display();
 mango8.display();
 mango9.display();
 mango10.display();

 detectcollision(stone,mango1);
 detectcollision(stone,mango2);
 detectcollision(stone,mango3);
 detectcollision(stone,mango4);
 detectcollision(stone,mango5);
 detectcollision(stone,mango6);
 detectcollision(stone,mango7);
 detectcollision(stone,mango8);
 detectcollision(stone,mango9);
 detectcollision(stone,mango10);
}
function mouseDragged(){
  
      Matter.Body.setPosition(stone.body, {x: mouseX , y: mouseY});
  
}


function mouseReleased(){
  slingshot.fly();

}

function keyPressed(){
  if(keyCode === 32){
      slingshot.attach(stone.body);
  }
}

function detectcollision(lstone,lmango){
mangoBodyPosition=lmango.body.position
stoneBodyPosition=lstone.body.position

var distance=dist(stoneBodyPosition.x,stoneBodyPosition.y,mangoBodyPosition.x,mangoBodyPosition.y)
if(distance<=lmango.r+lmango.r)
{
Matter.Body.Static(lmango.body,false);
}
}


