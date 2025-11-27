function setup() {
  createCanvas(400, 400);
}

const circleDiameter = 50;

let circleCenterX = 100;
let circleCenterY = 0;
let directionX = 2; 
let directionY = 2;
let directionX1 = 2; 
let directionY1 = 2;
let circleCenterX1 = 100;
let circleCenterY1 = 0;





function draw() {
  background("gold");

  stroke("white");
  strokeWeight(3);
  fill("lime");
  circle(circleCenterX, circleCenterY, circleDiameter);

  circleCenterX += directionX;
  circleCenterY += directionY;

  if (circleCenterY >= height || circleCenterY <= 0) {
    directionY *= -1;
  }

  if (circleCenterX >= width || circleCenterX <=0) {  
    directionX *= -1;
  }
  

  fill("blue");
  circle(circleCenterY, circleCenterX, circleDiameter);

  circleCenterX += directionX1;
  circleCenterY += directionY1;


  if (circleCenterY >= height || circleCenterY <= 0) {
    directionY *= -1; 
  }

  if (circleCenterX >= width || circleCenterX <=0) {  
    directionX *= -1;
  }
  






  

}
