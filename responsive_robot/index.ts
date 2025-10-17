function setup() {
  createCanvas(300, 400);
  background("lightgray");

  // Define relative sizes and positions based on canvas width and height
  const headWidth = width * 0.50; // Head size as 50% of the canvas width
  const headHeight = height * 0.50; // Head size as 50% of the canvas width
  const headX = width / 2 - headWidth / 2; // Center the head horizontally
  const headY = height / 2 - headHeight / 2; // Center the head vertically

  // Draw the robot's head
  fill("gray");
  rect(headX, headY, headWidth, headHeight);

  // Left eye 
  const leftEyeCenterX = headX + headWidth * 0.25;
  const leftEyeCenterY = headY + headHeight * 0.25;
  const leftEyeDiameter = min(headWidth, headHeight) * 0.2;
  fill("black");
  circle(leftEyeCenterX, leftEyeCenterY, leftEyeDiameter);

  // Right eye 
  const rightEyeCenterX = headX + headWidth * 0.75; 
  const rightEyeCenterY = headY + headHeight * 0.25; 
  const rightEyeDiameter = min(headWidth,headHeight) * 0.2;
  fill("black");
  circle(rightEyeCenterX, rightEyeCenterY, rightEyeDiameter);

  


  

  
  

}
