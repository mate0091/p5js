function setup() {
  createCanvas(windowWidth,windowHeight);
}

var x=0;
var xDir=1;

function draw() {
  ellipse(x,50,80,80);
  if(x+40 == windowWidth || x-40 == 0){
    xDir=-xDir;
  }

  x+=xDir;
}
