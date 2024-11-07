let xy;

function setup() {
  createCanvas(windowWidth, windowHeight);
  background(255, 20, 120);
  xy = { x: width / 2, y: height / 2 };
}

function draw() {
  xy = {
    x: random(0, width),
    y: random(0, height),
  };
  ellipse(xy.x, xy.y, 50);
}
