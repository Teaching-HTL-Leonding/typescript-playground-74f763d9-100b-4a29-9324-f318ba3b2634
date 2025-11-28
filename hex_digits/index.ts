function setup() {
  const num = Math.floor(random (0, 64));

  createCanvas(300, 300);
  background("black");

  textAlign(CENTER, CENTER);
  fill("yellow");
  noStroke();
  text(num, width / 2, height - 20);

  noFill();
  stroke("yellow");
  rect(60, 100, 50, 70);
  rect(130, 100, 50, 70);
  rect(200, 100, 50, 70);


  const digit1 = num % 16
  const digit2 = floor(num / 16) % 16
  const digit3 = floor(num / 256) % 16
  
  let hex1: string
  if (digit1 === 10) {hex1= "A"}
  else if (digit1 === 11) {hex1 = "B"}
  else if ( digit1 === 12) {hex1 = "C"}
  else if ( digit1 === 13) {hex1 = "D"}
  else if ( digit1 === 14) {hex1 = "E"}
  else if ( digit1 === 15) {hex1 = "F"}
  else { hex1 = `${digit1}`}


  let hex2: string
  if (digit2 === 10) { hex2 = "A"}
  else if (digit2 === 11) { hex2 = "C"}
  else if ( digit2 === 12) {hex2 = "C"}
  else if ( digit2 === 13) {hex2 = "D"}
  else if ( digit2 === 14) {hex2 = "E"}
  else if ( digit2 === 15) {hex2 = "F"}
  else { hex2 = `${digit2}`}



  fill("yellow");
  textSize(40);
  text(digit3, width / 3.6 , height / 2);
  text(digit2, width / 2, height / 2);
  text(digit1, width / 1.3, height / 2);   


}

