class Ball {
    constructor(x, y, xspeed, yspeed, radius) {
        this.x = x;
        this.y = y;
        this.xspeed = xspeed;
        this.yspeed = yspeed;
        this.radius = radius;
    }

    intersects(other) {
        let d = dist(this.x, this.y, other.x, other.y);
        return d < this.radius + other.radius;
      }

    update() {
        if ((this.x > (width-this.radius)) || (this.x < this.radius)) {
            this.xspeed *= -1;
        }
        if ((this.y > (height-this.radius)) || (this.y < this.radius)) {
            this.yspeed *= -1;
        }
        this.x += this.xspeed;
        this.y += this.yspeed;
    }

    draw() {
        noStroke();
        fill(255, 100, 300);
        ellipse(this.x, this.y, this.radius*2);
    }
}