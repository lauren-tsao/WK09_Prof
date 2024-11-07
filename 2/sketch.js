let xy;

function setup() {
  createCanvas(windowWidth, windowHeight);
  background(255, 20, 120);
  xy = { x: width / 2, y: height / 2 };
}

function draw() {
  xy = {
    x: randomGaussian(width / 2, width / 12),
    y: randomGaussian(height / 2, height / 12),
  };
  ellipse(xy.x, xy.y, 50);
}
