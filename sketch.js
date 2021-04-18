const Engine = Matter.Engine;
const World = Matter.World;
const Body = Matter.Body;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
var engine, world;
var ground1, BlockBlue1, BlockBlue2, BlockBlue3, BlockBlue4, BlockBlue5, BlockBlue7;
var BlockPink1, BlockPink2, BlockPink3, BlockPink4, BlockPink5, BlockPink6, BlockPink7;
var BlockBlue8, BlockBlue9, BlockBlue10, BlockBlue11, BlockBlue12, BlockBlue13, BlockBlue14;
var polygon1;

function setup() {

  createCanvas(800, 400);
  engine = Engine.create();
  world = engine.world

  ground1 = new Ground(530, 140, 120, 10);
  ground2 = new Ground(350, 270, 280, 10);
  ground3 = new Ground(2, 380, 2000, 10);

  BlockBlue1 = new Box(300, 182, 20, 20);
  BlockBlue2 = new Box(320, 182, 20, 20);
  BlockBlue3 = new Box(340, 182, 20, 20);
  BlockBlue4 = new Box(360, 182, 20, 20);
  BlockBlue5 = new Box(380, 182, 20, 20);
  BlockBlue6 = new Box(400, 182, 20, 20);
  BlockBlue7 = new Box(420, 182, 20, 20);

  BlockPink1 = new BoxPink(501, 2, 20, 25);
  BlockPink2 = new BoxPink(520, 2, 20, 25);
  BlockPink3 = new BoxPink(540, 2, 20, 25);
  BlockPink4 = new BoxPink(560, 2, 20, 25);
  BlockPink5 = new BoxPink(501, 12, 20, 20);
  BlockPink6 = new BoxPink(520, 12, 20, 20);
  BlockPink7 = new BoxPink(540, 12, 20, 20);
  BlockPink8 = new BoxPink(501, 12, 20, 20);
  BlockPink9 = new BoxPink(520, 12, 20, 20);
  BlockPink10 = new BoxPink(540, 12, 20, 20);

  BlockBlue8  = new Box(280, 182, 20, 20);
  BlockBlue9  = new Box(320, 182, 20, 20);
  BlockBlue10 = new Box(340, 182, 20, 20);
  BlockBlue11 = new Box(360, 182, 20, 20);
  BlockBlue12 = new Box(380, 182, 20, 20);
  BlockBlue13 = new Box(400, 182, 20, 20);
  BlockBlue14 = new Box(420, 182, 20, 20);
  BlockBlue15 = new Box(320, 182, 20, 20);
  BlockBlue16 = new Box(340, 182, 20, 20);
  BlockBlue17 = new Box(420, 182, 20, 20);
  

  polygon_1 = new poly(110, 100, 20, 20);
  sling = new SlingShot(polygon_1.body, { x: 70, y: 90 });

  Engine.run(engine);

}

function draw() {
  background(56, 44, 44);

  ground1.display();
  ground2.display();
  ground3.display();

  BlockBlue1.display();
  BlockBlue2.display();
  BlockBlue3.display();
  BlockBlue4.display();
  BlockBlue5.display();
  BlockBlue6.display();
  BlockBlue7.display();

  BlockPink1.display ();
  BlockPink2.display ();
  BlockPink3.display ();
  BlockPink4.display ();
  BlockPink5.display ();
  BlockPink6.display ();
  BlockPink7.display ();
  BlockPink8.display ();
  BlockPink9.display ();
  BlockPink10.display ();

  BlockBlue8.display ();
  BlockBlue9.display ();
  BlockBlue10.display();
  BlockBlue11.display();
  BlockBlue12.display();
  BlockBlue13.display();
  BlockBlue14.display();
  BlockBlue15.display();
  BlockBlue16.display();
  BlockBlue17.display();


  polygon_1.display();
  sling.display();
}

function mouseDragged() {
  Matter.Body.setPosition(polygon_1.body, { x: mouseX, y: mouseY })
}

function mouseReleased() {
  sling.fly();
}

