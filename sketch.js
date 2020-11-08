
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var boy,boyImage;
var mango1,mango2,mango3,mango4,mango5
var stoneObj
var treeImage,tree
var launcherobj

function preload()
{

boyImage = loadImage("Plucking mangoes/boy.png")
treeImage = loadImage("Plucking mangoes/tree.png")

}

function setup() {
	createCanvas(1000, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
  
	boy = createSprite(250,650,20,20)
	boy.addImage(boyImage)
	boy.scale = 0.5

	tree = createSprite(700,650,20,20)
	tree.addImage(treeImage)
	tree.scale = 0.8

	mango1 = new Mango(750,500,70)
	mango2 = new Mango(720,520,60)
	mango3 = new Mango(740,560,50)
	mango4 = new Mango(730,550,70)
	mango5 = new Mango(720,560,60)
	stoneObj = new Stone(235,420,50)
  launcherobj = new Launcher(stone1.body,{x:255,y:660})

	
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  imageMode(CENTER);
 
  mango1.display()
  mango2.display()
  mango3.display()
  mango4.display()
  mango5.display()
  stoneObj.display()
  launcherobj.display()

  detectcollision(stoneObj,mango1);
  detectcollision(stoneObj,mango2);
  detectcollision(stoneObj,mango3);
  detectcollision(stoneObj,mango4);
  detectcollision(stoneObj,mango5);
  drawSprites();
 
}
function mouseDragged(){
    Matter.Body.setPosition(stone1.body,{x:mouseX,y: mouseY})
}
function mouseReleased(){
   launcherobj.fly()
}

function detectcollision(lstone,lmango){
mangoBodyPosition=lmango.body.position
stoneBodyPosition=lstone.body.position

var distance=dist(stoneBodyPosition.x,stoneBodyPosition.y,mangoBodyPosition.x,mangoBodyPosition.y)
if(distance<=lmango.r+lstone.r){
	Matter.Body.setStatic(lmango.body,false);
}
}

function keyPressed(){
Matter.Body.setPosition(stoneObj.body,{x:235, y:420})
launcherobj.attach(stoneObj.body)
}




