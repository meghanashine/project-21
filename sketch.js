
var wall,thickness;
var bullet,speed,weight;

function setup() {
  createCanvas(1600,400);

  bullet = createSprite(50, 200, 50, 10);
  bullet.shapeColor="white";

  wall = createSprite(1200,200,thickness,height/2);
  wall.shapeColor=color(80,80,80);

  speed=random(223,321);
  weight=random(30,52);
  thickness=random(22,83);
}

function draw() {
  background(0);

  bullet.velocityX=speed;

  if(hasCollided(bullet,wall))
    {
      bullet.velocityX=0;

      var damage = 0.5*weight*speed*speed/(thickness*thickness*thickness);
      if(damage>10)
      {
        bullet.shapeColor=color(255,0,0);
      }
      if(damage<10)
      {
        bullet.shapeColor=color(0,255,0);
      }
    }

    wall.depth=1;
    bullet.depth=2;

    console.log(damage);

  drawSprites();
}

function hasCollided(thin,fat)
{
  bulletRightEdge=thin.x+thin.width;
  wallLeftEdge=fat.x;
  if(bulletRightEdge>=wallLeftEdge)
  {
    return true;
  }
  return false;
}