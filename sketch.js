var barco, mar, barcoimc, marimc;
function preload(){
barcoimc= loadAnimation("ship-1.png","ship-2.png","ship-3.png","ship-4.png")
marimc= loadImage("sea.png") 
}

function setup(){
  createCanvas(400,400);
mar=createSprite(400,200)
mar.addImage(marimc)
mar.scale= 0.3;
mar.velocityX=-5;
barco=createSprite(130,200,30,30)
barco.addAnimation(barcoimc);
barco.scale= 0.25;
}

function draw() {
  background("blue");
 mar.velocityX=-3;

}
