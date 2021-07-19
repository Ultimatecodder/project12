var garden,rabbit;
var gardenImg,rabbitImg;
var Appals;
function preload(){
  gardenImg = loadImage("garden.png");
  rabbitImg = loadImage("rabbit.png");
  Appals= loadImage("apple.png") 
}

function setup(){
  
  createCanvas(400,400);
  
// Moving background
garden=createSprite(200,200);
garden.addImage(gardenImg);

//creating boy running
rabbit = createSprite(180,340,30,30);
rabbit.scale =0.09;
rabbit.addImage(rabbitImg);
}

function createApples(){
  if(frameCount%60===0) {
Appals=createSprite(random(50,350),40,10,10);
  Appals.addImage(Appals);
  appleScale=0.5;
  }
  
}

function draw() {
  background(0);
  
  edges= createEdgeSprites();
  rabbit.collide(edges);




  drawSprites();
}