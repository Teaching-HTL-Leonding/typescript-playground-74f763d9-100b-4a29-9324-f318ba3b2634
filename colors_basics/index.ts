function setup() {
  createCanvas(200, 200);
  colorMode(HSB)
  background(35, 65, 147);

}


function mouseMoved() {
  background(360 * mouseX / width, 100, 100);
}
