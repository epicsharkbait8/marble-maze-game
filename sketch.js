function setup() {
    createCanvas(600, 400);
    background(220);
}

function draw() {
    background(50,50,100); //Dark blue background

    //Game loop will go here
    fill(255, 100, 100);
    stroke(255)
    rect(100,100,50,50)

    //Display game title type
    fill(100,255,100); //light green fill
    textSize(24);
    textAlign(CENTER);
    Text("Marble Maze - coming soon!", width/2, height/2)
}
