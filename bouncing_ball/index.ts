function setup() {
  createCanvas(300, 200);
}

const circleDiameter = 70;

let circleCenterX = 0;
let circleCenterY = 0;
let directionHorizontal = 3;
let directionVertical = 3;


// Remember: The _draw_ method is called FOR EVERY FRAME
function draw() {
  background("gold");

  stroke("white");
  strokeWeight(4);
  fill("lime");
  circle(circleCenterX, height / 2, circleDiameter);

  fill("blue");
  circle(width / 2, circleCenterY, circleDiameter);

  circleCenterX += directionHorizontal;
  circleCenterY += directionVertical;

  

  //                         +----------------------------- OR operator
  //                         |
  //                         v
  if (circleCenterX >= width || circleCenterX <= 0) {
    directionHorizontal *= -1;
  }


  if (circleCenterY >= height || circleCenterY <= 0) {
    directionVertical *= -1;
  }

}



