var fixedRect, MovingRect;

function setup() {
  createCanvas(1200,800);
  fixedRect = createSprite(400, 100, 50, 80);
  fixedRect.shapeColor = "green";
  fixedRect.debug = true;
  
  MovingRect = createSprite(400, 800, 80, 30);
  MovingRect.shapeColor = "green";
  MovingRect.debug = true;
  MovingRect.velocityY = -5;
  fixedRect.velocityY = 5;
}

function draw() {
  background(0);  

  if(MovingRect.x - fixedRect.x < fixedRect.width/2 + MovingRect.width/2 &&
    fixedRect.x - MovingRect.x  < fixedRect.width/2 + MovingRect.width/2){
    fixedRect.velocityX = fixedRect.velocityX * (-1);
    MovingRect.velocityX = MovingRect.velocityX * (-1);
  }
  if(MovingRect.y - fixedRect.y < fixedRect.height/2 + MovingRect.height/2 &&
    fixedRect.y - MovingRect.y  < fixedRect.height/2 + MovingRect.height/2){
      fixedRect.velocityY = fixedRect.velocityY * (-1);
      MovingRect.velocityY = MovingRect.velocityY * (-1);
  }
  drawSprites();
}