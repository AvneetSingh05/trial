var fRect,mRect;


function setup() {
  createCanvas(800,400);

  fRect=createSprite(600, 400, 50, 80);
  fRect.shapeColour="green";
  fRext.debug=true;

  mRect=createSprite(400, 200, 80, 30);
  mRect.shapeColour="green";
  mRext.debug=true;
}

function draw() {
  background(255,255,255);  
  
  mRect.x=World.mouseX;
  mRect.y=World.mouseY;

  if(mRect.x-fRect.x<fRect.width/2+mRect.width/2 &&
     fRect.x-mRect.x<fRect.width/2+mRect.width/2 &&
      mRect.y-fRect.y<fRect.height/2+mRect.height/2 && 
      fRect.y-mRect.y<fRect.height/2+mRect.height/2){

    mRect.shapeColour="red";
    fRect.shapeColour="red";
  }
  
  else{
    mRect.shapeColour="green";
    fRect.shapeColour="green";

  }
  
  
  
  drawSprites();

}