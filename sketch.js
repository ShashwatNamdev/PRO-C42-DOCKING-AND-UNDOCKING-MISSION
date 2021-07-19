var iss;
var spacecraft;
var hasDocked = false;

function preload(){
  bgImg = loadImage("Images/spacebg.jpg")
  issImg = loadImage("Images/iss.png");
  spacecraftImg1 = loadImage("Images/spacecraft1.png");
  spacecraftImg2 = loadImage("Images/spacecraft2.png");
  spacecraftImg3 = loadImage("Images/spacecraft3.png");
  spacecraftImg4 = loadImage("Images/spacecraft4.png");
}

function setup() {
  createCanvas(1000,800);

  iss = createSprite(400,300);
  iss.addImage("issImage",issImg);
  spacecraft = createSprite(400,700);
  spacecraft.x = random(100,900);
  spacecraft.addImage("spacecraftImage",spacecraftImg1);
  spacecraft.scale = 0.3;

  
}

function draw() {
  background(bgImg);
  console.log(spacecraft.x);
  console.log(spacecraft.y);
  if(!hasDocked){
    if(keyDown("LEFT_ARROW")){
    spacecraft.x = spacecraft.x-1;
    spacecraft.addImage("spacecraftLeftImage",spacecraftImg4);
    spacecraft.changeImage("spacecraftLeftImage");
  }else{
    spacecraft.changeImage("spacecraftImage");
  }

  if(keyDown("RIGHT_ARROW")){
    spacecraft.x = spacecraft.x+1;
    spacecraft.addImage("spacecraftRightImage",spacecraftImg3);
    spacecraft.changeImage("spacecraftRightImage");
  }
  
  if(keyDown("UP_ARROW")){
    spacecraft.y = spacecraft.y-1;
    spacecraft.addImage("spacecraftUpImage",spacecraftImg2);
    spacecraft.changeImage("spacecraftUpImage");
  }

  if(keyDown("DOWN_ARROW")){
    spacecraft.y = spacecraft.y+1;
    spacecraft.changeImage("spacecraftUpImage");
  }
  }

  if(spacecraft.x===330 && spacecraft.y===398){
    hasDocked = true;
    textSize(20);
    text("Docking Successful!",1000,700);
  }
  
  drawSprites();
}