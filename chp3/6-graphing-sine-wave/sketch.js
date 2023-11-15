let angles = [];
let anglesV = [];
let r = 2;

function setup() {
  createCanvas(600, 400);
  let total = floor(width / (r * 2))
  for (let i = 0; i < total+1; i++) {
    angles[i] = map(i, 0, total, 0, 2*TWO_PI);
    anglesV[i] = i / 500;
  }
}

function draw() {
  background(0);
  translate(300, 200);
  noFill();
  stroke(254, 238, 33);
  beginShape();
  for (let i = 0; i < angles.length; i++){
    let y = map(sin(angles[i]), -1, 1, -200, 200);
    strokeWeight(4);
    let x = map(i, 0, angles.length, -300, 300);
    vertex(x,y);
    angles[i] += 0.02;
  }
  endShape();
  
}
