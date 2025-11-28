
function setup() {
  const num = Math.floor(random(0, 1_000_000));

  createCanvas(500, 300);
  background("black");

  textAlign(CENTER, CENTER);
  fill("yellow");
  noStroke();
  text(num, width / 2, height - 20);

  noFill();
  stroke("yellow");
  rect(40, 100, 50, 90);
  rect(110, 100, 50, 90);
  rect(180, 100, 50, 90);
  rect(250, 100, 50, 90);
  rect(320, 100, 50, 90);
  rect(390, 100, 50, 90);

  const digit1 = num % 10
  const digit2 = floor(num / 10) % 10
  const digit3 = floor(num / 100) % 10
  const digit4 = floor(num / 1000) % 10
  const digit5 = floor(num / 10000) % 10
  const digit6 = floor(num / 100000) % 10

  fill("yellow");
  textSize(40);
  text(digit6, width / 7.5, height / 2);
  text(digit5, width / 3.7, height / 2);
  text(digit4, width / 2.4, height / 2);
  text(digit3, width / 1.8, height / 2);
  text(digit2, width / 1.45, height / 2);
  text(digit1, width / 1.2, height / 2);




}
