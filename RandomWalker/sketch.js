var x;
var y;

function setup() {
  createCanvas(windowWidth,windowHeight);
  frameRate(60);
  background(51);

  x=600;
  y=600;
}

function draw() {
  stroke(255);
  strokeWeight(2);
  point(x,y);

  var rand=ceil(random(4));

  switch (rand) {
    case 1:
      x++;
      break;
    case 3:
      y++;
      break;
    case 4:
      y--;
      break;
    default:
      break;
  }
}
