let balls = [];

let gravity;

function setup() {
  createCanvas(640, 360);
  gravity = createVector(0, 0.1);
}

function mousePressed(){
  let ball = new Particle(mouseX, mouseY);
  balls.push(ball);
}

function draw() {
  background(0);
  for(let ball of balls){
    ball.update();
    ball.draw();

    for (let other of balls) {
      if (ball != other && ball.intersects(other)) {
        ball.velocity.mult(-1);
        other.velocity.mult(-1);
        break
      }
    }
  }
}
