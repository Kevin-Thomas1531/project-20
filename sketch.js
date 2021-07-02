
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var plane;
var block1;
var block2;
var rotator1,rotator2,rotator3;
var angle1=10;
var angle2=50;
var angle3=100;
var particle1,particle2,particle3,particle4;



function preload()
{
	
}

function setup() {
	createCanvas(400, 400);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
 var planeoptions={
  isStatic:true



 }
 plane=Bodies.rectangle(200,390,400,10,planeoptions)
  World.add(world,plane);

  block1=Bodies.rectangle(100,300,100,10,planeoptions)
  World.add(world,block1);
 
  block2=Bodies.rectangle(300,300,100,10,planeoptions)
  World.add(world,block2);

  var rotator_options ={
	isStatic: true
  };
  rotator1 = Bodies.rectangle(200,200,100,20,rotator_options);

  rotator2 = Bodies.rectangle(200,200,100,20,rotator_options);

  rotator3 = Bodies.rectangle(200,200,100,20,rotator_options);
 



  World.add(world,rotator1);

  World.add(world,rotator2);

  World.add(world,rotator3);
 
  var ball_options = {
    restitution: 0.95,
    frictionAir:0.01
  }
  particle1 = Bodies.circle(200,10,10,ball_options);
  World.add(world,particle1);

  particle2 = Bodies.circle(200,10,10,ball_options);
  World.add(world,particle2);

  particle3 = Bodies.circle(200,10,10,ball_options);
  World.add(world,particle3);

  particle4 = Bodies.circle(200,10,10,ball_options);
  World.add(world,particle4);


Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  ellipseMode(RADIUS);
  background("black");
  fill("red");
rect(plane.position.x,plane.position.y,400,10);
rect(block1.position.x,block1.position.y,100,10); 
rect(block2.position.x,block2.position.y,100,10)

Body.rotate(rotator1,angle1);
push();
translate(rotator1.position.x,rotator1.position.y);
rotate(angle1);
fill('red');
rect(0,0,100,20);
pop();
angle1=angle1+0.9;

Body.rotate(rotator2,angle2);
push();
translate(rotator2.position.x,rotator2.position.y);
rotate(angle2);
fill('red');
rect(0,0,100,20);
pop();
angle2=angle2+0.9;

Body.rotate(rotator3,angle3);
push();
translate(rotator3.position.x,rotator3.position.y);
rotate(angle3);
fill('red');
rect(0,0,100,20);
pop();
angle3=angle3+0.9;

ellipse(particle1.position.x,particle1.position.y,10,10);

ellipse(particle2.position.x,particle2.position.y,10,10);
 
ellipse(particle3.position.x,particle3.position.y,10,10);
   
ellipse(particle4.position.x,particle4.position.y,10,10);



  drawSprites();
 
}



