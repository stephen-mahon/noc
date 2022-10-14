let radius = 150;
let theta = 0;


function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(0);
  stroke(255);
  strokeWeight(4);
  noFill();
  translate(height/2, width/2);
  
  let inc = 0.1;
  noLoop();
  beginShape()
    for (let a = 0; a < TWO_PI; a+=inc ){
      let r1 = radius + random(-50, 10);
      let x = r1 * cos(a);
      let y = r1 * sin(a);
      vertex(x, y)
    }

  endShape(CLOSE)

}
