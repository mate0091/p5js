let a=0;

function setup() {
  createCanvas(windowWidth,windowHeight);
  angleMode(DEGREES);
  rectMode(CENTER);
  frameRate(60);
}

function draw() {
  background(0);
  push();
  translate(width/2, height/2);
  rotate(a);
  scale(mouseX/100);
  stroke(255);
  fill(100);
  rect(0, 0, 200, 100);
  pop();

  a+=5;
}
