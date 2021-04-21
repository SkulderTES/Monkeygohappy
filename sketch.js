
var monkey , monkey_running
var banana ,bananaImage, obstacle, obstacleImage
var fruitGroup, obstacleGroup
var score = 0;

function preload(){
  
  
monkey_running = loadAnimation("Monkey_01.png","Monkey_02.png","Monkey_03.png","Monkey_04.png","Monkey_05.png","Monkey_06.png","Monkey_07.png","Monkey_08.png","Monkey_09.png","Monkey_10.png");
  
  bananaImage = loadImage("banana.png");
  obstacleImage = loadImage("stone.png");
 groundImage = loadImage("jungle.jpg");
  
}

function setup() {
  createCanvas(800,400);
  jungle = createSprite(0,0,800,400);
  jungle.addImage(groundImage);
  jungle.scale= 1.5;
  jungle.x=jungle.width/2;
  jungle.velocityX= -4;
  
  monkey=createSprite(80,315,20,20);
  monkey.addAnimation("moving",monkey_running);
  monkey.scale= 0.2;
  
  ground=createSprite(400,350,900,10);
  ground.velocityX= -4;
  ground.x=ground.width/2;
  ground.visible = false;
  
  fruitGroup=createGroup();
  obstacleGroup=createGroup();
  
  
}


function draw() {
  background("cyan");
  
  if(jungle.x<100){
    jungle.x=jungle.width/2;
  }
  
  
  if(ground.x<0){
    ground.x=ground.width/2; 
  }
  if(keyDown("space")){
    monkey.velocityY = -12;
  }
  monkey.velocityY = monkey.velocityY +0.8;
  monkey.collide(ground);
  fruits();
  rocks();
  drawSprites();
  stroke(0);
  fill(0);
  textSize(20);
  text("Score :"+score,300,50);
  if(fruitGroup.isTouching(monkey)){
    fruitGroup.destroyEach();
    score = score+2;
  }
  switch(score){ 
    case 10: monkey.scale = 0.22;
              break;
    case 20: monkey.scale = 0.24;
              break;
    case 30: monkey.scale = 0.26;
              break;
    case 40: monkey.scale = 0.28;
              break;
              default:
              break;
  
  }
  
  
  if(obstacleGroup.isTouching(monkey))
  {
  monkey.scale = 0.08; 
    score = score -0.5;
  }
  
  
  
}

function fruits() { 
  //write code here to spawn the Food
  if (frameCount % 80 === 0) 
  { banana = createSprite(600,250,40,10);
  banana.y = random(120,200);
  banana.velocityX = -5;
   //assign lifetime to the variable 
   banana.lifetime = 300;
   monkey.depth = banana.depth + 1;
   //add image of banana 
   banana.addImage(bananaImage);
   banana.scale=0.1;
   //add each banana to the group 
   fruitGroup.add(banana);
  } 
} 
function rocks() { 
  if(frameCount % 300 === 0) 
  {
    obstacle = createSprite(800,320,10,40);
  obstacle.velocityX = -6;
//add image to the obstacle 
    obstacle.addImage(obstacleImage);
    obstacle.scale=0.15;
    //lifetime to the obstacle 
    obstacle.lifetime = 300;
    //add each obstacle to the group 
    obstacleGroup.add(obstacle);
  } 
}


