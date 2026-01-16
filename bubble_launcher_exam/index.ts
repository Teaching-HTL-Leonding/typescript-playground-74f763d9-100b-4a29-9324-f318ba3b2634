let circleX: number = 0;
let circleY: number = 150;
let direction: number = 1;

const SPEED: number = 2;
const RADI: number = 10;
const DIAM: number = RADI * 2;

let bubble : { x: number, y: number, direction: number }[] = []



function setup() {
createCanvas(500, 300);
} 

function draw() {
    background("white");

    for (let i = 0; i < bubble.length; i++) { 
    bubble = bubbles [i]
    fill("lightgray")
    stroke("darkgray")
    circle(bubble.x, bubble.y, DIAM) }

    bubble.x += SPEED * bubble.direction
    if (bubble.x > width || bubble.x < 0) {
        bubble.direction += -1

    }

    fill('lightgray');
    stroke('darkgray');
    rect(0, 0, DIAM, height);

    fill('yellow');
    stroke('gold');

    circle(circleX, circleY, DIAM);

    circleX += SPEED * direction;
    if (circleX - RADI < 0 || circleX + RADI > width) {
        direction *= -1;
        circleX = max(RADI, min(width - RADI, circleX));
    }
}

function mouseClicked() {
    let newBubble = {
        X: RADI, 
        y : random (RADI , height - RADI ),
        direction: random () < 0.5 ? -1
    }

    bubbles.push(newBubble)
}
