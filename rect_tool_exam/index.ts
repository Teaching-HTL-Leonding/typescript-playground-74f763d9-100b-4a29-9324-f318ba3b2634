function setup() {
    createCanvas(400, 200);
    background("black");
    angleMode(DEGREES);
}

function mouseMoved () {
    const gridSize = 20;
    
    background("black");
    strokeWeight(2);
    noFill();

    let diameterX = Math.abs((mouseX - width / 2) * 2);
    diameterX = Math.round ( mouseX / gridSize * 2);
    let diameterY = Math.abs ((mouseY - height / 2) * 2)
    diameterX = Math.round (mouseY / gridSize * 2)

    stroke("green");
    arc(width/2, height/2, diameterX, diameterY, 0, 90);
    stroke("pink");
    arc(width/2, height/2, diameterX, diameterY, 90, 180);
    stroke("gray");
    arc(width/2, height/2, diameterX, diameterY, 180, 270);
    stroke("red");
    arc(width/2, height/2, diameterX, diameterY, 270, 360);
    
    





















}
