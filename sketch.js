let playerX = 50;
let playerY = 50;
let playerSpeed = 3;


function setup() {
    createCanvas(600, 600);
    background(220);
}

function draw() {
 // Dark blue background
    
if (keyIsDown(LEFT_ARROW)) {
 playerX -= playerSpeed;
}
if (keyIsDown(RIGHT_ARROW)) {
 playerX += playerSpeed;
}
if (keyIsDown(UP_ARROW)) {
 playerY -= playerSpeed;
}
if (keyIsDown(DOWN_ARROW)) {
 playerY += playerSpeed;
}

push();
fill(100, 255, 100);      // Light green fill
stroke(255);              // White outline
ellipse(playerX, playerY, 60, 60); 
pop();
// Green circle

    //Game loop will go here
    //stroke(255);
    //strokeweight(5);
    //fill(0, 0, 225);
    //ellipse(playerX, playerY, 60, 60);

        // Draw the maze elements
    fill(0, 0, 255); // Blue walls
    let wall1 = rect(200, 0, 30, 400);
    let wall2 = rect(400, 200, 30, 400);

    // Draw the goal
    fill(0, 255, 0); // Green goal
    let goal = rect(750, 550, 50, 50);


    // Check for collision with wall1
let hitWall1 = collideRectCircle(200, 0, 30, 400, 
                                playerX, playerY, 20);
if (hitWall1) {
  // Reset player to start position
  playerX = 50;
  playerY = 50;
}
let hitWall2 = collideRectCircle(400, 200, 30, 400, 
                                playerX, playerY, 20);
if (hitWall2) {
  // Reset player to start position
  playerX = 50;
  playerY = 50;
}

let hitGoal = collideRectCircle(750, 550, 50, 50, 
                               playerX, playerY, 20);
if (hitGoal) {
  background(0);
  fill(255);
  textSize(64);
  textAlign(CENTER);
  text("YOU WIN!", width / 2, height / 2);
}


}
