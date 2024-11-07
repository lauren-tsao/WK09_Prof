let gridDim = 16;

function setup() {
  createCanvas(windowWidth, windowHeight);
  noStroke();
}

function draw() {
  for (let x = 0; x < width; x += gridDim) {
    for (let y = 0; y < height; y += gridDim) {
      let mc = 255 * noise(x / 320, y / 320, frameCount / 400);
      fill(mc);
      rect(x, y, gridDim);
    }
  }
}
