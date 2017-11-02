// Setup Canvas

// I'm gonna use windowWidth, because
// it spans the whole screen, and I love that.

function setup() {

  createCanvas( windowWidth, 25 );
  background( 0, 0, 0, 0 );

}

// Draw function

function draw() {

  // Set up needed variable(s).
  var x = 0 // Leftmost triangle point's x value
  var m = 13 // set up the middle of the triangle
  var y = 0 // Leftmost point y value
  var b = x+m // Bottom point x value, midpoint of base

  // Repeat Triangle across top of screen.
  while (x<=width){
    fill(random(0,255), random(0,255), random(0,255));
    triangle( x, y, x+25, y, x+b, y+25);
    x = x+25
  }
}
