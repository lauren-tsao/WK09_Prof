let ids = [];

let cId = -1;
let debounceDelay = 500;
let lastClicked;

function preload() {
  ids = loadStrings("../assets/ids.example.txt");
}

function shuffleArray(arr) {
  for (let i = 0; i < arr.length; i++) {
    for (let j = i; j < arr.length; j++) {
      let rj = floor(random(j, arr.length));
      let t = arr[i];
      arr[i] = arr[rj];
      arr[rj] = t;
    }
  }
  return arr;
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  background(255, 20, 120);
  randomSeed(1234);
  textAlign(CENTER, CENTER);
  textSize(32);
  noLoop();

  lastClicked = 0;

  ids = shuffleArray(ids);
  print(ids);
}

function draw() {
  if (millis() - lastClicked > debounceDelay) {
    cId = (cId + 1) % ids.length;

    background(255, 20, 120);
    text(ids[cId], width / 2, height / 2);

    lastClicked = millis();
  }
}

function mouseClicked() {
  draw();
}
