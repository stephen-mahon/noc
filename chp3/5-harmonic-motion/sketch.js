let angle = 0;
//let angleV = 0;
function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(0, 20);
  translate(200, 200);
  fill(252, 238, 33);
  //let r = map(sin(angle), -1, 1, 0, 200);
  let x = map(cos(angle), -1, 1, 200, -200);
  let y = map(sin(angle), -1, 1, 200, -200);
  stroke(255)
  line(0, 0, x, y)
  circle(x, y, 32);
  let increment = TWO_PI / 60; // Want frequency of 1 second, and sketch is running at 60 FPS. 360 Degrees every 60 frames.
  angle += increment;
  //angle += angleV;
  //angleV += 0.0001;
}
