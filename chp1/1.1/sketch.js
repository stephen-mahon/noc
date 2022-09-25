let balls = [];

function setup() {
  createCanvas(640, 360);
  for (let i = 0; i < 5; i ++) {
    ball = new Ball(random(10), random(10), random(8,32));
    balls.push(ball);
  }
}

function draw() {
  background(255);
  for(let ball of balls) {
    ball.update();
    ball.draw();
  }
}
