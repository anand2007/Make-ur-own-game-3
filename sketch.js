var bg;
var animal1img;
var animal2img;
var animal3img;
var animal4img;
var animal5img;
var animal;

function preload(){
  bg = loadImage("bg.png")
  animal1img = loadImage("mole.jpg");
  animal2img = loadImage("mole2.png");
  animal3img = loadImage("mole3.jpg");
  animal4img = loadImage("rat.png");
  animal5img = loadImage("ghost.png");
}
function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  background(bg); 
  spawnAnimals1(); 
  drawSprites();
}

function spawnAnimals1(){
  if(frameCount%60 === 0){
    animal1=createSprite(200,280,10,10);
    animal1.x=Math.round(random(270,270));
    //animal1.y=Math.round(random(20,600));

    animal1.addImage("f",animal1img)
    animal1.lifetime=50;
    animal1.scale=0.6;
  }
  if(frameCount%160 === 0){
    animal2=createSprite(200,280,10,10);
    animal2.x=Math.round(random(270,270));
    //animal1.y=Math.round(random(20,600));

    animal2.addImage("f",animal2img)
    animal2.lifetime=50;
    animal2.scale=0.2;
  }
}