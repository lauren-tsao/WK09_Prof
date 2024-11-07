let xyz;

function setup() {
  createCanvas(windowWidth, windowHeight);
  background(255, 20, 120);
  xyz = { x: width / 2, y: height / 2, z: 80 };
}

function draw() {
  xyz = {
    x: width * noise(frameCount / 200),
    y: height * noise(frameCount / 200 + 1000),
    z: 80 * noise(frameCount / 100 + 20202) + 10,
  };
  ellipse(xyz.x, xyz.y, xyz.z);
}
