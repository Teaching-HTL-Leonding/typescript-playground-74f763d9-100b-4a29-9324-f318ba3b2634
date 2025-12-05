function setup() {
    createCanvas(300, 300);
    textAlign(CENTER, CENTER);
    textSize(24);

}

let x = 150;
let y = 50;
let size = 10;
let speedX = 2;
let speedY = 2;
let counter = 5;

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

    if (x <= 0 || x >= width) {
        speedX *= -1;
        counter -= 1
    }
    if (y <= 0 || y >= height) {
        speedY *= -1;
        counter -= 1
    }

    text(counter, x, y);

    if (counter === 0) { speedX = 0, speedY = 0 };










}










