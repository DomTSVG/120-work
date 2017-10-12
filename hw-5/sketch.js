// Start Workflow

// Canvas Creation

function setup() {
  createCanvas( windowWidth, windowHeight );
}

// Setup Variables

var ballAngle = 0;
var ballColor1 = 255;
var ballColor2 = 0;
var ballColor3 = 0;
var starAngle = 0;
var ballColSwitch = "no"

// Variables End

// Draw function

function draw() {
  background( 'white' );
  // No cursor
  noCursor();

  // Update Values
  // Base Ball Rotation on Mouse Position
  ballRotationRate = (mouseY * 0.1) - 30;

  // Update Ball's Angle to Match Itself Plus Rotation Rate
  ballAngle = ballAngle + ballRotationRate;
  // Set backing shape to spin constantly
  starAngle = starAngle + 1;


  // **Start Sandbox**

  push();
  // Move the star along with the cursor
  translate( mouseX, mouseY );

  push();

  // Star
  fill( 220, 220, 0, 85 );
  noStroke();
  rotate( radians( starAngle) );
  triangle( -200, -75, 200, -75, 0, 200);
  triangle( -200, 75, 200, 75, 0, -200);
  rotate( HALF_PI );
  triangle( -200, -75, 200, -75, 0, 200);
  triangle( -200, 75, 200, 75, 0, -200);
  rotate(QUARTER_PI);
  triangle( -200, -75, 200, -75, 0, 200);
  triangle( -200, 75, 200, 75, 0, -200);
  rotate(QUARTER_PI);
  triangle( -200, -75, 200, -75, 0, 200);
  triangle( -200, 75, 200, 75, 0, -200);
  rotate(QUARTER_PI);
  triangle( -200, -75, 200, -75, 0, 200);
  triangle( -200, 75, 200, 75, 0, -200);

  pop();

  // PokeBall
  push();
  strokeWeight( 5 );
  fill( "white" );
  ellipse( 0, 0, 250, 250 );

  pop();

  // Top half
  push();

  noStroke();
  fill( "red" );
  rotate( radians(ballAngle) );
  arc( 0, 0, 250, 250, PI, 0);

  pop();

  // Shade

  push();

  noStroke();
  rotate( QUARTER_PI );
  rotate( PI );
  rotate( HALF_PI );
  fill( 0, 0, 0, 30 );
  arc( 0, 0, 250, 250, QUARTER_PI, PI, OPEN);

  pop();

  // Shine

  push();

  noStroke();
  rotate( PI );
  rotate( QUARTER_PI );
  fill( 250, 250, 250, 85);
  ellipse( 100, 0, 40, 80);

  pop();

  // Outside Stroke
  push();

  strokeWeight( 5 );
  noFill();
  ellipse( 0, 0, 250, 250);

  pop();

  // Button

  push();
  strokeWeight( 5 );
  fill( "white" );
  ellipse( 0, 0, 50, 50);

  pop();

}
