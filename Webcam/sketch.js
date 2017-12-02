function setup() {
  createCanvas(windowWidth,windowHeight);
  frameRate(60);
}

var x=200;
var xDir=1;

function draw() {

  background(255,255,255);
  fill(0,0,0);
  ellipse(x,50,80,80);
  if(x+40 == windowWidth || x-40 == 0){
    xDir=-xDir;
  }

  x+=xDir;
}
