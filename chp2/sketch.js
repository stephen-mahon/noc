// to do:
// [ ] Liquid class
// [ ] Surface area for drag

let movers = [];
let mu = 0.1;
let dragC = 0.2;

function setup() {
  createCanvas(400, 400);
  for(let i=0;i<10;i++){
    let mover = new Mover(random(width), random(0, 50), random(1,8));
    movers.push(mover)
  }
  
}

function draw() {
  background(0);
  fill(255, 125);
  noStroke();
  rect(0, height / 2, width, height / 2);

  let gravity = createVector(0, 0.2);
  for(let mover of movers) {
    if (mouseIsPressed) {
      let wind = createVector(0.1, 0);
      mover.applyForce(wind);
    }
    let weight = p5.Vector.mult(gravity, mover.mass);
    mover.applyForce(weight);
    if(mover.position.y > height / 2) {
      mover.drag(dragC);
    }
    mover.update();
    mover.edges();
    mover.show();
  }

}
