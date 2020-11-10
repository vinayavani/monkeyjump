
  var monkey , monkey_running,ground,backimg,background1;
  var banana ,bananaImage, obstacle, obstacleImage;
  var foodGp, obstacleGp;
  var score=0,survivaltime=0;

  function preload(){

  monkey_running =loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")

  bananaImage = loadImage("banana.png");
  obstacleImage = loadImage("obstacle.png");

  }



function setup() {
  createCanvas(400,400) ; 

  monkey=createSprite(80,315,20,20);
  monkey.addAnimation("moving",monkey_running);
  monkey.scale=0.1;

  ground=createSprite(400,350,900,10);
  ground.velocityX=-4;
  ground.x=ground.width /2;

  foodgp=createGroup();
  obstaclegp=createGroup();
  }


function draw() {
  background(255);

  if(ground.x<0){
  ground.x=ground.width/2;
  }

  if(keyDown("space")){
  monkey.velocityY=-10;
  }

  monkey.velocityY=monkey.velocityY+0.8;

  monkey.collide(ground);
  
  text("survival Time :"+score,300,50);
  stroke("white");
  textSize(20);
  fill("white");
  
  
  
  food();  
  enemy();
  drawSprites();
  }

function food(){
  if(frameCount%80===0){
  banana=createSprite(400,350,40,10); 
  banana.addImage(bananaImage);
  banana.y=Math.round(random(120,200))
  banana.velocityX=-3; 
  banana.scale=0.1;
  banana.lifetime=-1;
  foodgp.add(banana);
  }
  }

function enemy(){
if(frameCount % 300===0) {
obstacle=createSprite(230,340,20,20);
obstacle.addImage(obstacleImage);
obstacle.velocityX=-3;
obstacle.lifetime=-1;
obstacle.scale=0.1;
obstaclegp.add(obstacle);
  
} 
}


