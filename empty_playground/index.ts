function setup() {
    createCanvas(500, 500);
    background("red");

    let i = 0;
    while (i < 11) {
        fill("black");
        circle(50 * i, 50, 50);
        i += 1;
    }
}

