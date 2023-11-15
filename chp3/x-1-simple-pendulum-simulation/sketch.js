let pendul;

function setup() {
  createCanvas(600, 400);
  pendul = new Pendulum(width/2, 0, 175);
}

function draw() {
  background(0);
  pendul.update();
  pendul.show();
}
