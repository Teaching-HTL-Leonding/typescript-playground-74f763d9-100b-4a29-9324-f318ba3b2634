function setup() {
  createCanvas(200, 200);

}

function mouseMoved() {
  background("aqua");
  stroke("blue");
  strokeWeight(2)
  noFill();
  // "Varible"
  circle(mouseX, mouseY, 30);
  circle(mouseX, mouseY, 20);
  line(mouseX-25, mouseY, mouseX+25, mouseY);
  line(mouseX, mouseY-25, mouseX, mouseY+25);
}
