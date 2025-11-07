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
    
    let mouseX = Math.abs( mouseX - width/2 * 2);
    mouseX = Math.round (mouseX / gridSize) * gridSize;
    let mouseY = Math.abs ( mouseY - height/2 * 2);
    mouseY= Math.round (mouseY/ gridSize) * gridSize;

    rect = mouseX * mouseY
  
    stroke("red");
    arc(width/2, height/2, mouseX, mouseY, 40, 80);

    stroke("yellow");
    arc(width/2, height/2, mouseX, mouseY, 80, 160);

    stroke("aqua")
    arc(width/2, height/2, mouseX, mouseY, 160, 320);

    stroke("lime");
    arc(width/2, height/2, mouseX, mouseY, 320, 640);


    stroke("lightgray");
    strokeWeight(1);
    textAlign(LEFT);
    const area = Math.round(width * height / 2 * Math.PI);
    text(`Area: ${area}`, 5, height - 10);  








}
