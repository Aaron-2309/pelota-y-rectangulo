
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var boton;
var angle = 90;


function setup() {
  createCanvas(400,400);

  engine = Engine.create();
  world = engine.world;
  
   var ball_options = {
    restitution: 0.95,
    frictionAir:0.01
  }

  var girapalo_options = {
  isStatic: true


  }
   
   var ground_options ={
     isStatic: true
   };
   
  boton = createImg('up.png');
  boton.position(20,30);
  boton.size(50,50);
  boton.mouseClicked(vForce);

  ground = Bodies.rectangle(200,400,500,20,ground_options);
  World.add(world,ground);

  ball = Bodies.circle(100,10,20,ball_options);
  World.add(world,ball);
  
  girapalo = Bodies.rectangle(70,300,100,100,girapalo_options);
  World.add(world, girapalo)
  


  rectMode(CENTER);
  ellipseMode(RADIUS);
}


function draw() 
{
  background(51);
  Engine.update(engine);
  
  Matter.Body.rotate(girapalo,angle);
  push ();
  translate(girapalo.position.x,girapalo.position.y);
  rotate(angle);
  rect(0,0,100,20);
  pop ();
  angle += 0.2;
  ellipse(ball.position.x,ball.position.y,20);
  rect(ground.position.x,ground.position.y,500,20);
 
console.log(ground.position.y);

  
  
}

function vForce()
{
  Matter.Body.applyForce(ball,{x:0,y:0},{x:0,y:-0.05});
}
  