let movers = [];
let sun;
let G = 1;

function setup() {
  createCanvas(600, 600);
  for (let i = 0; i < 20; i ++) {
    let pos = p5.Vector.random2D();
    let vel = pos.copy();
    vel.setMag(random(10, 15));
    pos.setMag(random(100, 150));
    vel.rotate(PI/2);
    p5.Vector.random2D();
    let m = random(10, 15);
    movers[i] = new Mover(pos.x, pos.y, vel.x, vel.y, m)
  }
  sun = new Mover(0, 0, 0, 0, 500);
  background(0);
}

function draw() {
  background(0);
  translate(width/2, height/2);

  // Try Barnes-Hut simulation and Quadtree #98
  for (let mover of movers) {
    sun.attract(mover)
    for (let other of movers) {
      if (mover != other) {
        mover.attract(other);
      }
    }
  }

  for (let mover of movers) {
    mover.update();
    mover.show();

    sun.show();
    sun.update();
  }
}
