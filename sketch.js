function setup() {
  createCanvas(800,400);
  speed=random(223,21)
   weight=random(30,52)
   thickness=random(22,83)
   b=createSprite(50, 200, 50,50); 
   b.velocityX = speed;
    b.shapeColor=color(255); 
    wall=createSprite(1500,200, thickness, height/2) 
    wall.shapeColor=color(80,80,80)











}

function draw() {
  background(255,255,255);
  
  if(hasCollided(bullet, wall)) { 
    bullet.velocityX=0; 
    var damage=0.5 * weight * speed* speed/(thickness *thickness *thickness); if
    (damage>10) { wall.shapeColor=color(255,0,0); } 
    if(damage<10) {
       wall.shapeColor=color(0,255,0); } }
  drawSprites();
}
function hasCollided(lbullet, lwall) { 
  bulletRightEdge=lbullet.x +lbullet.width;
   wallLeftEdge=lwall.x;
    if (bulletRightEdge>=wallLeftEdge) {
       return true }
        return false; }