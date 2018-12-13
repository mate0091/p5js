let frog;
let grid = 50;

function setup() {
  createCanvas(windowWidth,windowHeight);
  frameRate(60);
  frog = new Frog(100, 100, grid - 4);
}

function draw() {
  background(0);
  frog.show();
}

function keyPressed(){
  if(keyCode === UP_ARROW) {
    print("moved up");
   frog.move(0, -grid);
  }
  else if(keyCode === DOWN_ARROW) {
    print("moved down");
    frog.move(0, grid);
  }
  else if(keyCode === LEFT_ARROW) {
    print("moved left");
    frog.move(-grid, 0);
  }
  else if(keyCode === RIGHT_ARROW) {
    print("moved right");
    frog.move(grid, 0);
 }
}
