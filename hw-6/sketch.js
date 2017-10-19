// Start Workflow

// Setup Canvas and Background

function setup() {
  createCanvas( windowWidth, windowHeight);
  background( "white" );

  // Set Up Needed Variables

  var dotColorR; // R value of color
  var dotColorG; // G value of color
  var dotColorB; // B value of color
  var dotSizeW; // dot width
  var dotSizeH; // dot height
  var dotPosX; // X position of dot
  var dotPosY; // Y position of dot
  var dotTrans; // dot transparency
  var dotTransMod; // Modifier for Transparency
}

// Draw function
// (I will be drawing ellipses of several different sizes
// and not only making them different colors, but making them different
// transparencies)

function draw() {

  // Variable Sandbox
  push();

  // Set Values for draw

  // Color

  var dotColorR = random( 0, 255 );
  var dotColorB = random( 0, 255 );
  var dotColorG = random( 0, 255 );

  // Dot Size

  var dotSizeW = random( 5, 20 ); // Set value
  var dotSizeW = dotSizeW*2; // Multiply prev. value by 2

  var dotSizeH = random( 20, 80 ); // Set value
  var dotSizrH = dotSizeH/2; // Divide prev. value by two

  // Dot Positions

  var dotPosX = random( 0, windowWidth );
  var dotPosY = random( 0, windowHeight );

  // Dot transparency

  var dotTrans = random( 2, 255 );
  var dotTransMod = dotTrans%3;
  var dotTrans = dotTrans*dotTransMod;
  var dotTrans = abs(dotTrans);
  constrain( dotTrans, 1, 255 );

  pop();

  // *Dot Sandbox*

  push();

  // Draw Dot

  noStroke();
  fill( dotColorR, dotColorG, dotColorB, dotTrans );
  ellipse ( dotPosX, dotPosY, dotSizeW, dotSizeH );

}
