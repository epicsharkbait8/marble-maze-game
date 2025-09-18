function setup() {
    createCanvas(600, 400);
    background(220);
}

function draw() {
    //Game loop will go here
    fill(255, 0, 0);
    ellipse(50, 50, 20, 20);

    //Display game title type
    fill(0);
    textSize(24);
    textAlign(CENTER);
    Text("Marble Maze - coming soon!", width/2, height/2)
}
