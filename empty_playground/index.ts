let colorI = 0
let colors: string[] = ["red", "green", "blue"]

function setup() {
    createCanvas(500, 500)
}

function mouseClicked() {
    let x = random(50, width - 50)
    let y = random(50, height - 50)

    flower(x, y, colors[colorI])

    colorI = (colorI + 1) % colors.length
}

function flower(x: number, y: number, color: string) {
    push()
    translate(x, y)

    noStroke()
    fill(color)


    circle(0, -25, 50)
    circle(25, 0, 50)
    circle(0, 25, 50)
    circle(-25, 0, 50)


    fill("yellow")
    circle(0, 0, 40)

    pop()
}