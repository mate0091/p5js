import java.util.Random;

Random generator;


void setup(){
  background(255);
  size(600, 400);
  generator = new Random();
  smooth();
}

void draw(){  
  float xLocation = (float) generator.nextGaussian();
  float variance = 100;
  float mean = width/2;
  
  xLocation = (xLocation * variance) + mean;
  
  noStroke();
  fill(0, 10);
  noStroke();
  ellipse(xLocation, height/2, 16, 16);
}