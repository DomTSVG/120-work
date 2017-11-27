//////////////////
// OOP Homework //
//////////////////

// Creating 30 Moving Boxes //

// Set Variable Namespace

var boxes = [];
var boxNum = 30;


// Setup Canvas

function setup() {
  createCanvas( windowWidth, windowHeight );
  background( 'white' );

  // Create Boxes
  for (let i = 0; i < boxNum; i++) {
    boxes.push( new Box( 0, 0, random(2,20), random(0,255)) );
  }

}

// draw

function draw() {

  for (var i = 0; i < boxes.length; i++) {
        boxes[i].frame();
    }

}

/////////////////////////
// Create object class //
/////////////////////////

class Box {

  // Method 1 (Constructor)
  constructor( x, y, size, color ) {
    // Constructor Method Code
    this.boxColor = random( 0, 255 );
    this.w = size;
    this.h = size;
    this.size = random( 2, 40 );
    this.posX = x;
    this.posY = y;
    this.deltaX = random( -5, 5 );
    this.deltaY = random( -5, 5 );
  }

  // Frame

  frame() {
    this.display();
    this.move();
    this.eCheck();
  }

  // Display the Box

  display() {
    push();
    // Set Box Fill color
    fill( this.boxColor );
    // Set Ball Position
    translate( this.posX, this.posY );
    // Draw It
    rect( 0, 0, this.w, this.h );
    pop();
  }

  // Move the Box

  move() {
    // update positions
    this.posX += this.deltaX;
    this.posY += this.deltaY;
  }

  // Check for the Edge

  eCheck() {
    // Check vertical
    if( this.posX + this.w >= width || this.posX <= 0 ) {
      this.deltaX *= -1
    }
    // Check Horizontal
    if( this.posY + this.h >= height || this.posY <= 0 ) {
      this.deltaY *= -1
    }

  }

  // Add extra methods here

}
