
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint= Matter.Constraint;

function preload()
{
	
}

var tree,stone1;

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

    groundSprite=createSprite(width/2, height-35, width,10);
	groundSprite.shapeColor=color("white")

	//creating a ground
	ground = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true} );
	 World.add(world, ground);
	 
	 //boySprite=createSprite()

	//Create the Bodies Here.
   stoneObj=new Stone(200,200)
   treeObj=new Tree(700,650)
   mango1=new Mango(695,640)

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);


  stoneObj.display();
  treeObj.display();
  mango1.display();
  drawSprites();
 
}



