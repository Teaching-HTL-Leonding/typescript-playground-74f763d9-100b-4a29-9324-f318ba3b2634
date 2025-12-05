function setup() {
    createCanvas(300, 300);
    textAlign(CENTER, CENTER);
    textSize(24);

}

let x = 50
let y = 50
let size = 10
let speedX = 2
let speedY = 2
let counter = 5

let circleCenterX: number;
let circleCenterY: number;


let directionX = 2;
let directionY = 2;








function draw() {
    background("gold");

    stroke("black");

    line(x - 20, y, x, y + 20);
    line(x - 20, y, x, y - 20);
    line(x + 20, y, x, y - 20);
    line(x + 20, y, x, y + 20);

    noStroke()
    x += speedX
    y += speedY

    circleCenterX += directionX;
    circleCenterY += directionY;

    if (circleCenterX <= 0|| circleCenterX >= width) {
        directionX *= -1;
    }
    if (circleCenterY <= 0 || circleCenterY >= height) {
        directionY *= -1; 
    }
}







    


