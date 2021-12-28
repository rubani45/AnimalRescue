var dog1, rabbit, cat, dog2;
var dog1img, dog2img, catImg, rabbitImg, BgImg;

function setup() {
  createCanvas(windowWidth,windowHeight);
 
}
function preload(){
  BgImg = loadImage("images/bgImg.png");

  dog1img = loadImage("images/dogImg1.png");
  dog2img = loadImage("images/dogImg2.png");
  catImg = loadImage("images/CatImg.png");
  rabbitImg = loadImage("images/RabbitImg.png");
}

function draw() {
  background(BgImg); 

  dog1 = createSprite(windowWidth-1270,windowHeight-100,10,10); 
  dog1.addImage(dog1img);
  dog1.scale = 0.25;
  
  dog2 = createSprite(windowWidth-1210,windowHeight-100,10,10);
  dog2.addImage(dog2img);
  dog2.scale = 0.24;

  cat = createSprite(windowWidth-1150,windowHeight-100,20,20);
  cat.addImage(catImg);
  cat.scale = 0.20;

  rabbit = createSprite(windowWidth-1100,windowHeight-100,10,10);
  rabbit.addImage(rabbitImg);
  rabbit.scale = 0.19;

  drawSprites();
}