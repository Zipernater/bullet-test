var bu , wall ;
var speed , we , th;

function setup() {
  createCanvas(1600,400);
  speed = random(223,321);
  th = random(22,83);
  we = random(30,52);
  bu = createSprite(50, 200, 70, 30);
  wall = createSprite(1200 , 200 , th , height/2);
  bu.velocityX = 8 ;
}

function draw() {
  background("salmon");  
  if(wall.x-bu.x < (bu.width + wall.width)/2){
    bu.velocityX=0;
    var def = 0.5 * we * speed * speed / (th * th * th);
    if(def > 10){
      bu.shapeColor = color(255,0,0);
    }
    if(def < 10){
      bu.shapeColor = color(0,255,0);
    }
  }
  drawSprites();
}