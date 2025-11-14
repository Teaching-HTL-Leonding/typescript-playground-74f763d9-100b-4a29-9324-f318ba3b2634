function setup() {
    createCanvas(400, 400);
    background("hotpink");
}

function draw() {
    background("hotpink");
    stroke("white");
    fill("darkblue");
    rect(width / 2 - 50, height / 2 - 25, 100, 50);

    if (mouseX >= width / 2 - 50 && mouseX <= width / 2 + 50
    && mouseY >= height / 2 - 25 && mouseY <= height / 2 + 25) {
        text("drinnen" , 10, 10);
    }


}
