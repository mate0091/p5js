function Rect(x,y,w,h) {
    this.x=x;
    this.y=y;
    this.w=w;
    this.h=h;
    this.brightness = 0;

  this.move=function() {
    this.x+=random(-5,5);
    this.y+=random(-5,5);
  }

  this.show=function() {
    rectMode(CENTER);
    stroke(255);
    strokeWeight(4);
    fill(this.brightness, 125);
    rect(this.x,this.y,this.w,this.h);
    strokeWeight(8);
    stroke(255,0,0);
    point(this.x,this.y);
    point(this.x-this.w/2, this.y-this.h/2)
    point(this.x+this.w/2, this.y+this.h/2);
  }

  this.isInside = function(mx,my){
    return mx > this.x - this.w / 2 && mx < this.x + this.w / 2 && my > this.y - this.h / 2 && my < this.y + this.h / 2;
  }

  this.changeColor=function(color){
    this.brightness = color;
  }

  this.intersectsRect = function(other){
    if(this.x-this.w/2 > other.x+other.w/2 || other.x-other.w/2 > this.x+this.w/2) return false;
    if(this.y-this.h/2 < other.y+other.h/2 || other.y-other.h/2 < this.y+this.h/2) return false;

    return true;
  }
}

let rects=[];

function setup() {
  createCanvas(windowWidth,windowHeight);
  frameRate(60);

  for (let i = 0; i < 2; i++)
  {
    let w = new Rect(random(50,width-50),random(250,height-250),random(50,250),random(50,250));
    rects.push(w);
  }
}

function draw() {
  background(51);
  // for (let i = 0; i < rects.length; i++) {
  //   for (let j = 0; j < rects.length; j++)
  //   {
  //     if(i!=j && rects[i].intersectsRect(rects[j])){
  //       console.log("intersects");
  //     }
  //   }
  //
  //   rects[i].move();
  //   rects[i].show();
  // }
  if(rects[0].intersectsRect(rects[1]) == true){
    console.log("INTERSECTS");
  }

  for(let i = 0; i < rects.length; i++)
  {
    rects[i].move();
    rects[i].show();
  }
}

function mousePressed() {
  for (let i = rects.length - 1; i >= 0; i--){
    if(rects[i].isInside(mouseX, mouseY)){
      rects.splice(i, 1);
    }
  }
}
