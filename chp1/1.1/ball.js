class Ball {
    constructor(xspeed, yspeed, r) {
        this.x = random(width);
        this.y = random(height);
        this.xspeed = xspeed;
        this.yspeed = yspeed;
        this.r = r;
        this.color = random(255);
    }

    update() {
        this.x += this.xspeed;
        this.y += this.yspeed;
        if ((this.x > (width-this.r)) || (this.x < this.r)) {
            this.xspeed *= -1
        }
        if ((this.y > (height-this.r)) || (this.y < this.r)) {
            this.yspeed *= -1
        }
    }

    draw() {
        stroke(0);
        fill(this.color, this.color, this.color);
        ellipse(this.x, this.y, this.r, this.r);
    }
}