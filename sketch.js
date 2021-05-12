var movingRect, fixedRect;
var object1, object2;



function setup() {
  createCanvas(1200,800);
  fixedRect = createSprite(600, 400, 50, 80);
  movingRect = createSprite(400,100,80,30);
  fixedRect.shapeColor = "green";
  movingRect.shapeColor = "green";
 fixedRect.debug = true;
 movingRect.debug = true;
 object1 = createSprite(400,800,80,30);
 object2 = createSprite(600,100,70,20);
 object1.shapeColor = "green";
 object2.shapeColor = "green";
 object1.debug = true;
 object2.debug = true;
 object1.velocityY= -5;
 movingRect.velocityY= +5;
}

function draw() {
  background(255,255,255);  

bounceOff(object1,movingRect);
  
drawSprites();
}

