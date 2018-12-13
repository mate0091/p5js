function Rectangle(x,y,w,h){
  this.x = x;
  this.y = y;
  this.w = w;
  this.h = h;
}

Rectangle.prototype.intersects = function (other) {
    return !( this.x + this.w  <= other.x            ||
              this.x           >= other.x + other.w  ||
              this.y + this.h  <= other.y            ||
              this.y           >= other.y + other.h);
};

Rectangle.prototype.move = function (x,y) {
  this.x += x;
  this.y += y;
};
