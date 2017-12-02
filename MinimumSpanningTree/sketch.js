let vertices = [];

function vert(x,y){
  this.x=x;
  this.y=y;
}

function setup() {
  createCanvas(windowWidth,windowHeight);
  frameRate(60);
  // generateVertices(50);
}

function generateVertices(amount){
  // vertices = [];
  // for (let i = 0; i < amount; i++){
  //   let temp = new vert(random(100, width - 100), random(100, height - 100));
  //   vertices.push(temp);
  // }
  let temp = new vert(mouseX, mouseY);
  vertices.push(temp);
}

function mousePressed(){
  generateVertices(50);
}

function draw() {
  background(51);

  let reached = [];
  let unreached = [];

  //Every vertex is unreached at beginning
  arrayCopy(vertices, unreached);

  //Add first unreached to reached
  reached.push(unreached[0]);
  unreached.shift();

  //While there are unreached vertices
  while (unreached.length != 0) {
    let minimum = 99999;
    let reachedI;
    let unreachedI;

    //Search for shortest edge between the reached and unreached
    for (var i = 0; i < reached.length; i++) {
      for (var j = 0; j < unreached.length; j++) {
        let v1 = reached[i];
        let v2 = unreached[j];
        let d = dist(v1.x, v1.y, v2.x, v2.y);

        if(d < minimum) {
          minimum = d;
          reachedI = i;
          unreachedI = j;
        }
      }
    }

    stroke(255, 0, 0);
    strokeWeight(8);
    line(reached[reachedI].x, reached[reachedI].y, unreached[unreachedI].x, unreached[unreachedI].y);

    reached.push(unreached[unreachedI]);
    unreached.splice(unreachedI, 1);
  }


  for (let i = 0; i < vertices.length; i++){
    stroke(255);
    strokeWeight(20);
    point(vertices[i].x, vertices[i].y);
  }
}
