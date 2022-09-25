let bs = [];

function setup() {
  createCanvas(600, 400);
  background(0);
  for (let i = 0; i < 1000; i++){
    let x = random(width);
    let y = random(height);
    b = new Walker(x, y);
    bs.push(b)
  }
}

function draw() {
  for (let b of bs) {
    b.move();
    b.show();
  }
}