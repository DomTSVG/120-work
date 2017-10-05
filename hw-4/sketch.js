// ***Begin Workflow***

// Setup Canvas
function setup() {
  createCanvas( 800, 800 );
}
// Draw

function draw() {

  // Background Color

  background( 'white' );

  // *CHARACTER SANDBOX*

  push();

  translate( 400, 400 )

  // *BASE BODY (VOLTORB)*

  push();

  fill( 'white' );
  stroke( 'black' );
  ellipse( 0, 0, 600, 600);

  pop();

  // *SHADE*

  push();

  fill( 0, 0, 0, 100);
  noStroke();
  arc( 0, 0, 600, 600, 0, PI);

  pop();

  // *SHADE CUT*

  push();

  fill( 'white' );
  noStroke();
  ellipse( 0, 0, 600, 400);

  pop();

  // *TOP HALF*

  push();

  fill( 'red' );
  stroke( 'black' );
  arc( 0, 0, 600, 600, PI, PI);

  pop();

  // Rounded top half bottom

  push();

  fill( 'red' );
  noStroke();
  ellipse( 0, 0, 600, 150);

  pop();

  // *SHINE*

  push();

  fill( 255, 255, 255, 100);
  rotate(QUARTER_PI);
  noStroke();
  ellipse( -220, 0, 100, 200);

  pop();

  // *RIGHT EYE*

  push();

  fill( 'white' );
  stroke( 'black' );
  triangle( 50, -50, 200, -150, 200, -50);

  pop();

  // *LEFT EYE*

  push();

  fill( 'white' );
  stroke( 'black' );
  triangle( -50, -50, -200, -150, -200, -50);

  pop();

  // *LEFT PUPIL*
  push();

  fill( 'black' );
  ellipse( -140, -70, 40, 40);

  pop();

  push();

  fill( 'brown' );
  ellipse( -140, -70, 30, 30);

  pop();

  push();

  fill( 'white' );
  ellipse( -145, -80, 15, 15);

  pop();

  // *RIGHT PUPIL*
  push();

  fill( 'black' );
  ellipse( 140, -70, 40, 40);

  pop();

  push();

  fill( 'brown' );
  ellipse( 140, -70, 30, 30);

  pop();

  push();

  fill( 'white' );
  ellipse( 135, -80, 15, 15);

  pop();


  // *CHARACTER SANDBOX END*
  pop();

  // END DRAWING
}
