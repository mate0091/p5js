function setup() {
  createCanvas(windowWidth,windowHeight);
}

int x=0;
int xDir=1;

function draw() {
  ellipse(x,50,80,80);
  if(x+40 >= windowWidth || x-40 <= 0){
    xDir=-xDir;
  }

  x+=xDir;
}
