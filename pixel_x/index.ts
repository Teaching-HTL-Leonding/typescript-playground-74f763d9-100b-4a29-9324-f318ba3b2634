function setup() {
    const SIZE = 425; // Canvas size
    const GRID = 25;  // Size of the squares

    createCanvas(SIZE, SIZE);
    background("black");

    noStroke();

    let x = GRID;
    while (x < SIZE - GRID) {
        fill("yellow");
        rect(x, x, GRID, GRID);

        fill("lime");
        rect(x, height - GRID - x, GRID);

        x += GRID;
    } 
}
