/////////////////////////////
// ~~~~ HOMEWORK   12 ~~~~~//
/////////////////////////////
//~A short game by DomTSVG~//
/////////////////////////////

// Expanding on the bubble pop game so that it, well, functions like    //
// a game. Quick note, somehow, code is broken, and constantly increases//
// bubble spawn rate until refresh.                                     //

///////////////////////////
/// Pre-Class Functions ///
///////////////////////////

// Set Up Necessary Variables //

let bubbles = []; // Bubble variable //
let t = 0; // A letter variable to store score in. //
let ballNum = 0; // Number of bubbles on screen //
let highScore = 0; // Player's current high score before refresh //

// Set Up //

function setup() {
    createCanvas(windowWidth, windowHeight);
    resetGame(); // Event call that resets the sketch. //
}
// Draw Function //

function draw() {
    // Blue Background //
    background(30, 30, 90);
    // Text //
    textSize(30);
    strokeWeight(2);
    textAlign(CENTER);
    fill("Green");
    text("Score:", width/2, height/15);
    text(t, width/2, height/8); // Text that keeps track of current score //
    text(ballNum, width/2, height/1.2); // Tracks bubbles on screen //
    fill("Red");
    text("High Score", width/1.1, height/15);
    text(highScore, width/1.1, height/8); // Text keeps track of high score //
    textSize(15)
    noStroke();
    // Instructions and Info //
    text("Click the bubbles to increase your score. If the number above (the number of bubbles on screen) reaches 25, it's game over, and you start at 0.", width/2, height/1.05);
    text("The game gets a little harder every reset (and eventually breaks, sorry), refresh the page to start over and wipe your high score.", width/2, 20+height/1.05);
    // Process Bubble Class Events //
    for (let i = 0; i < bubbles.length; i++) {
        bubbles[i].move();
        bubbles[i].show();
        bubbles[i].eCheck();
    }
    // Conditional to track when bubbles on screen pass 25 to reset game. //
    if (ballNum > 25) {
      resetGame();
    }
}

// Timer (Derived from given site code)

function bubbleTimer() {
    let b = new Bubble(random(50, width-50), random(50, height-50), random(5, 50));
    bubbles.push(b);
    // Call new bubble every 2 seconds //
    setTimeout(bubbleTimer, 2000);
    ballNum = ballNum + 1; // Ensures bubble number gets properly tracked //
}

// Event that resets the sketch //

function resetGame() {
  let b = new Bubble(width / 2, height / 2, 10);
  bubbles.push(b);
  bubbleTimer();
  ballNum = 0;
  t = 0;
  bubbles.splice(0, 100); // Kills all bubbles in index, with space to spare. //
  // ^- Possible cause of spawn rate increase? //
}

// Check for Mouse Press and Destroy //

function mousePressed() {
    for (let i = bubbles.length - 1; i >= 0; i--) {
        let destroyMe = bubbles[i].mouseCheck();
        if (destroyMe) {
            bubbles.splice(i, 1);
            t = t + 1;
            ballNum = ballNum - 1;
            if ( t > highScore ) {
              highScore = t;
            }
        }
    }
}



///////////////////////////////////////////////////
// Bubble Class
///////////////////////////////////////////////////
class Bubble {
    constructor(x, y, r) {
        this.x = x;
        this.y = y;
        this.r = r;
        this.deltaX = random( -2, 2 );
        this.deltaY = random( -2, 2 );
    }

    move() {
        this.x = this.x + this.deltaX;
        this.y = this.y + this.deltaY;
    }

    show() {
        stroke(255);
        strokeWeight(3);
        fill(100, 100, 125, 180);
        ellipse(this.x, this.y, this.r * 2);
        noStroke();
        fill( 255, 255, 255, 50 );
        ellipse(this.x + this.r/3, this.y - this.r/3, this.r);
    }

    eCheck() {
      // Check vertical edge
      if( this.x + this.r >= width || this.x - this.r <= 0 ) {
        this.deltaX *= -1
      }
      // Check Horizontal edge
      if( this.y + this.r >= height || this.y - this.r <= 0 ) {
        this.deltaY *= -1
      }

    }

// Mouse check Event

    mouseCheck() {
        let d = dist(this.x, this.y, mouseX, mouseY);
        if (d < this.r) {
            return true;
        } else {
            return false;
        }
    }
}
