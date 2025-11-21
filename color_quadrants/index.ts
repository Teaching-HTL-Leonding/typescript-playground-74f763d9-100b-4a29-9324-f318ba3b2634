function setup() {
    createCanvas(400, 200);
    background("black");
    noStroke();

    fill("orange");
    rect(0, 0, width / 2, height / 2);

    fill("red");
    rect(width / 2, 0, width / 2, height / 2);

    fill("green");
    rect(width / 2, height / 2, width / 2, height /2);

    fill("blue");
    rect( 0, height / 2, width / 2, height / 2);

    fill("black");
    rect( width / 4 , height / 2 - height / 4 / 2, width / 2, height / 4); 
    
}

function mouseClicked () {
    fill("black");
    rect( width / 4 , height / 2 - height / 4 / 2, width / 2, height / 4);

    noStroke()
    fill("white")
    textSize(30);
    textAlign(CENTER, CENTER);

    let t: string 
    if (mouseX < width / 2) { 
        if (mouseY < height / 2) { t = "orange"}
        else { t = "blue"}
        }
    else if ( mouseX < width / 2 * 2) { 
        if ( mouseY < height / 2) { t = "red"}
        else t= "green"

    }

    text ( t, width / 2, height - 100 )












}
