const WIDTH = 500;
const HEIGHT = 300;
const MARGIN = 50;

const wordToGuess = "apple";

function setup() {
  createCanvas(WIDTH, HEIGHT);
  background("black");
  textAlign(CENTER, CENTER);
  colorMode(HSB);
  angleMode(DEGREES);

  textSize(60);

  let i = 0;

  while (i < wordToGuess.length) {
    push()
    translate(
      random(MARGIN, WIDTH - MARGIN),
      random(MARGIN, HEIGHT - MARGIN)
    )
    rotate(random(-45, 45))

    fill(random(360), 100, 100)

    text(wordToGuess[i], 0, 0)

    pop()
    i++
  }
}

function guess(textInput: string) {
  fill("white");

  if (textInput === wordToGuess) {
    background("green");
    textSize(75);
    text("Correct!", WIDTH / 2, HEIGHT / 2);
  } else {
    background("red");
    textSize(50);
    text(`Wrong!\nIt was "${wordToGuess}"`, WIDTH / 2, HEIGHT / 2);
  }
}
