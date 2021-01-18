var fixedRect, movingRect,object1,object2,car,wall,;

function setup() {
  createCanvas(1200,800);
  fixedRect = createSprite(600, 400, 50, 80);
  fixedRect.shapeColor = "green";
  fixedRect.debug = true;
  movingRect = createSprite(400,200,80,30);
  movingRect.shapeColor = "green";
  movingRect.debug = true;
  car=createSprite(200,200,100,100);
  car.shapeColor="orange";
  wall=createSprite(1000,200,30,15);
  wall.shapeColor="blue";
}

function draw() {
  background(0,0,0);  
  movingRect.x = World.mouseX;
  movingRect.y = World.mouseY;

  
  if(isTouching(car,wall)){
    textSize(20);
    Text("touched",150,150);
  }
   bounceOff();
  drawSprites();
}

