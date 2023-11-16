let particles = [];
let springs = [];
let spacing = 20
let numParticles = 10;

let restLength = 200;
let k = 0.1;
let gravity;
let mass = 1;

function setup() {
  createCanvas(400, 800);
  for (let i = 0; i < numParticles; i++) {
    particles[i] = new Particle(200, i*spacing, mass);
    if(i != 0) {
      spring = new Spring(k, spacing, particles[i-1], particles[i])
      springs.push(spring);
    }
  }
  particles[0].locked = true;

  gravity = createVector(0, 0.1);
}

function draw() {
  background(0);

  for (let spring of springs) {
    //spring.show();
    spring.update();
  }

  noFill();
  stroke(255);
  strokeWeight(4);

  beginShape();
  let head = particles[0];
  curveVertex(head.position.x, head.position.y);
  for (let particle of particles) {
    particle.applyForce(gravity);
    particle.update();
    curveVertex(particle.position.x, particle.position.y);
  }
  let tail = particles[particles.length - 1];
  curveVertex(tail.position.x, tail.position.y);

  endShape();

  
  if (mouseIsPressed) {
    tail.position.set(mouseX, mouseY);
    tail.velocity.set(0, 0);
  }

}
