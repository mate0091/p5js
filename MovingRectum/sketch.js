class Rect {
  constructor(x,y,w,h) {
    this.x=x;
    this.y=y;
    this.w=w;
    this.h=h;
  }

  move(){
    this.x+=random(-5,5);
    this.y+=random(-5,5);
  }

  show(){
    stroke(255);
    strokeWeight(4);
    rectMode(CENTER);
    noFill();
    rect(this.x,this.y,this.w,this.h);
  }
}

let rects=[];

function setup() {
  createCanvas(windowWidth,windowHeight);
  frameRate(60);

  // for (let i = 0; i < 25; i++)
  // {
  //   rects[i] = new Rect(random(50,width-50),random(250,height-250),random(50,250),random(50,250));
  // }
}

function draw() {
  background(51);
  for (let i = 0; i < rects.length; i++) {
    rects[i].move();
    rects[i].show();
  }
}

function mousePressed() {
  let r = random(50,250);
  let b = new Rect(mouseX, mouseY, r, r);
  rects.push(b);
}
