function setup() {
    const SIZE = 400;  // Size of canvas
    const STRIPE_THICKNESS = 50; // Thickness of the stripes

    createCanvas(SIZE, SIZE);
    background("lime");

    noStroke();


    let x = 1;
    while (x < 8) {

        fill("yellow");
        noStroke();
        rect(0, x * STRIPE_THICKNESS, width, STRIPE_THICKNESS);
        x += 2
    }
}
