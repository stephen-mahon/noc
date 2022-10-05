let movers = [];
let attractor;
let G = 5;

function setup() {
  createCanvas(800, 800);
  for (let i = 0; i < 10; i++) {
    let x = random(width);
    let y = random(height);
    let m = random(5, 25);
    movers[i] = new Mover(x, y, m);

  }
  attractor = new Attractor(width / 2, height / 2, 100);
  background(0);
}

function draw() {
  background(0, 5);
  for (mover of movers) {
    mover.update();
    mover.show();
    attractor.attract(mover);
  }
  
  attractor.show();
}
