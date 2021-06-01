const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

function preload(){
  back = loadImage("GamingBackground.png");
  danger = loadImage("Monster-01.png");

}

function setup(){
  createCanvas(1000,500);
  engine = Engine.create();
  world = engine.world;

  var ops = {
    isStatic:true
  }
  ground = Bodies.rectangle(450,430,900,20,ops);
  World.add(world,ground);

  var ops = { 
    isStatic:false
  }
  danger1 = Bodies.rectangle(800,200,100,100,ops);
  World.add(world,danger1);

  b1 = new BOX(700,100);
  b2 = new BOX(700,100);
  b3 = new BOX(700,100);
  b4 = new BOX(700,100);
  b5 = new BOX(700,100);

  b6 = new BOX(600,100);
  b7 = new BOX(600,100);
  b8 = new BOX(600,100);
  b9 = new BOX(600,100);
  b10 = new BOX(600,100);
  b11 = new BOX(600,100);
  b13 = new BOX(600,100);

  b14 = new BOX(500,100);
  b15 = new BOX(500,100);
  b16 = new BOX(500,100);
  b17 = new BOX(500,100);
  b18 = new BOX(500,100);
  b19 = new BOX(500,100);

  man = new SUPERMAN(200,100,200,100);
  
  
}

function draw(){
  background(back);
  Engine.update(engine);

  fill("white")
  rectMode(CENTER);
  rect(ground.position.x,ground.position.y,900,20);

  imageMode(CENTER);
  image(danger,danger1.position.x,danger1.position.y,100,100);

  fill("red");
  b1.display();
  b2.display();
  b3.display();
  b4.display();
  b5.display();

  b6.display();
  b7.display();
  b8.display();
  b9.display();
  b10.display();
  b11.display();
  b13.display();
 
  b14.display();
  b15.display();
  b16.display();
  b17.display();
  b18.display();
  b19.display();

  man.display();

}

