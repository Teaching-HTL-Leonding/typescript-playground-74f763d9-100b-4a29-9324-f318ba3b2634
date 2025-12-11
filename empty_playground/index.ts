function setup() {
    createCanvas(500, 500);
    background("red");

    let i = 1;
    while (i < 10) {
        fill("black");
        circle(50 * i, 50, 50);
        i += 1;
    }

    for (let j = 1; j < 10; j += 1) {
        fill("black");
        circle(50 * j, 200, 50);
    }
}



// abweisende Schleife 
// NICHT abweisende Schleife 
