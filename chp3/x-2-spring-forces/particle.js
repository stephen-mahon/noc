class Particle {
    constructor(x, y, mass) {
        this.acceleration = createVector(0, 0);
        this.velocity = createVector(0, 0);
        this.position = createVector(x, y);
        this.mass = mass;
        this.locked = false;
    }

    applyForce(force) {
        let f = force.copy();
        f.div(this.mass);
        this.acceleration.add(f);
    }

    update() {
        if (!this.locked) {
            this.velocity.add(this.acceleration);
            this.position.add(this.velocity);
            this.acceleration.mult(0);
            this.velocity.mult(0.99);
        }
    }

    show(r) {
        noStroke();
        fill(45, 197, 244);
        circle(this.position.x, this.position.y, r);
    }
}