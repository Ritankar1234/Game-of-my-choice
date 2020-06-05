const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var backgroundImage;
var ball, slingshot;
var score = 0;

function preload(){
backgroundImage = loadImage("background.png");
}

function setup() {
  createCanvas(1200,800);

engine = Engine.create();
world = engine.world;

 ball = new Ball(590,350);
 slingshot = new Slingshot(ball.body,{x:600,y:470}); 
 box = new Box(600,200,50,50);
 box1 = new Box(700,200,50,50);
 box2 = new Box(800,200,50,50);
 box3 = new Box(900,200,50,50);
 box4 = new Box(1000,200,50,50);
 sling1 = new Sling1(box.body,{x:600,y:100});
 enemy = new BaseClass(600,190,50,50);
 enemy1 = new Enemy1(600,190,50,50);
 enemy2 = new Enemy2(700,190,50,50);
 enemy3 = new Enemy3(800,190,50,50);
 enemy4 = new Enemy4(900,190,50,50);
 enemy5 = new Enemy5(1000,190,50,50);
 sling2 = new Sling2(box.body,enemy1.body);
 sling3 = new Sling3(box1.body,enemy2.body);
 sling4 = new Sling4(box2.body,enemy3.body);
 sling5 = new Sling5(box3.body,enemy4.body);
 sling6 = new Sling6(box4.body,enemy5.body);
 

}

function draw() {
  background(0);
  
  Engine.update(engine);
  image(backgroundImage,-390,-10,1600,700);

  ball.display();
  slingshot.display();
  box.display();
  box1.display();
  box2.display();
  box3.display();
  box4.display();
  sling1.display();
  enemy.display();
  enemy1.display();
  enemy2.display();
  enemy3.display();
  enemy4.display();
  enemy5.display();
  sling2.display();
  sling3.display();
  sling4.display();
  sling5.display();
  sling6.display();

if(enemy.body.speed>10){
  sling2.sling2.bodyB=null;
  sling2.sling2.bodyA=null;
  
}
if(enemy.body.speed>10){
  sling3.sling3.bodyB=null;
  sling3.sling3.bodyA=null;
  
}

if(enemy.body.speed>10){
  sling4.sling4.bodyB=null;
  sling4.sling4.bodyA=null;
  
}

if(enemy.body.speed>10){
  sling5.sling5.bodyB=null;
  sling5.sling5.bodyA=null;
  
}

if(enemy.body.speed>10){
  sling6.sling6.bodyB=null;
  sling6.sling6.bodyA=null;
  
}

text("Score:"+score,width-200,50);

if(enemy.body.speed>10&&enemy.body.speed<15){
  score= score+1;
}

  }

  function mouseDragged(){
    
        Matter.Body.setPosition(ball.body, {x: mouseX , y: mouseY});
    
  }

    function mouseReleased(){
      slingshot.fly();
    
    }

