let maxVx = 5;
let maxVy = 5;
let minR = 8;
let maxR = 32;

let balls = [];

function setup() {
  createCanvas(640, 360);
}

function mousePressed(){
  let vx = random(maxVx);
  let vy = random(maxVy);
  let r = random(minR, maxR);
  let ball = new Ball(mouseX, mouseY, vx, vy, r);
  balls.push(ball);
}

function draw() {
  background(0);
  for(let ball of balls){
    ball.update();
    ball.draw();
    
    for (let other of balls) {
      if (ball != other && ball.intersects(other)) {
        ball.xspeed *= -1;
        ball.yspeed *= -1;
        other.xspeed *= -1;
        other.yspeed += -1;
        break
      }
    }
  }
}
