class Particle {
    constructor(x, y) {
        this.location = createVector(x, y);
        this.velocity = p5.Vector.random2D();
        this.velocity.mult(random(3));
        this.accelation = gravity;
        this.radius = 16;
    }

    intersects(other) {
        let d = dist(this.location.x, this.location.y, other.location.x, other.location.y);
        return d < this.radius + other.radius;
    }

    update() {
        if ((this.location.x > (width-this.radius)) || (this.location.x < this.radius)) {
            this.velocity.x *= -1;
        }
        if ((this.location.y > (height-this.radius)) || (this.location.y < this.radius)) {
            this.velocity.y *= -1;
        }
        this.velocity.add(this.accelation);
        this.velocity.mult(0.99);
        this.location.add(this.velocity);
    }

    draw() {
        noStroke();
        fill(255, 100, 300);
        ellipse(this.location.x, this.location.y, 2*this.radius);
    }
}