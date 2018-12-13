function Frog(x, y, size){
  Rectangle.call(this, x, y, size, size);
}

Frog.prototype = Object.create(Rectangle.prototype);

Frog.prototype.show = function () {
  fill(255);
  rect(this.x, this.y, this.w, this.h);
};

// Frog.prototype.move = function (x,y) {
//   this.x += x;
//   this.y += y;
// };
