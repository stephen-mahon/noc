class Walker {
  constructor(x, y) {
    this.x = x;
    this.y = y;
  }

  move() {
    this.x += random(-1, 1);
    this.y += random(-1, 1);
  }

  show() {
    stroke(255);
    point(this.x, this.y)
  }
}