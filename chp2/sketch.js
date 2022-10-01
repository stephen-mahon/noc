let movers = [];

function setup() {
  createCanvas(400, 400);
  for(let i=0;i<2;i++){
    let mover = new Mover(200+(100*i), 200, 1+(i*2));
    movers.push(mover)
  }
  
}

function draw() {
  background(0);
  let gravity = createVector(0, 0.2);
  for(let mover of movers) {
    if (mouseIsPressed) {
      let wind = createVector(0.1, 0);
      mover.applyForce(wind);
    }
    let weight = p5.Vector.mult(gravity, mover.mass);
    mover.applyForce(weight);
    mover.update();
    mover.edges();
    mover.show();
  }

}
