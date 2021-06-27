var flappyBird,flappyBirdI;
var pipe,pipeI,pipeGroup;
var back,backI;
var gameOver,gameOverI;
var gameState = "play";


function preload(){
    flappyBirdI = loadImage("flappyBird.png");
    pipeI = loadImage("pipe.png");
    backI = loadImage("background.png");
    gameOverI = loadImage("gameOver.png");
    
}

function setup() {
    createCanvas(600,400);

    back = createSprite(200,200,10,10);
    back.addImage("back",backI);
    back.velocityX = -5;


    flappyBird = createSprite(150,180,20,50);
    flappyBird.addImage("flappyBird",flappyBirdI);
    flappyBird.scale = 0.1;
    

    gameOver = createSprite(400,200,10,10);
    gameOver.addImage("gameOver",gameOverI);
    gameOver.visible = false;

    pipeGroup = new Group ();
}

function draw() {
    background(0);
  if (gameState === "play") {
    if (back.x > 50){
        back.x = 200;
      }
    
      flappyBird.velocityY += 0.8;

    if(keyDown("space")){
        flappyBird.velocityY = -9;
    }
    if(pipeGroup.isTouching(flappyBird)){
        flappyBird.velocityY = 0;
        flappyBird.velocityX = 0;
        gameState = "end"
    }
    
    spawnpipe();
    
  }
  if(gameState === "end"){
    gameOver.visible = true;
    back.velocityX = 0;
    pipeGroup.setVelocityXEach(0);
  }
   pipeGroup.debug = true;
   flappyBird.debug = true;

  drawSprites();
}

function spawnpipe(){
    if(frameCount % 60 === 0){
    pipe = createSprite(600,Math.round(random(100,300)),400,400);
    pipe.addImage("pipe",pipeI);
    pipe.velocityX = -5;
    pipe.scale = 2.5;
    pipeGroup.add(pipe);
    }
}