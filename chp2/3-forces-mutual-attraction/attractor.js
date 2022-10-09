class Attractor {
    constructor(x, y, mass) {
        this.position = createVector(x, y);
        this.mass = mass;
        this.radius = sqrt(this.mass);
    }

    applyForce(force) {
        let f = p5.Vector.div(force, this.mass);
        this.acceleration.add(f);
    }

    attract(mover) {
        let force = p5.Vector.sub(this.position, mover.position);
        let dSq = constrain(force.magSq(), 100, 1000);
        let strength = G * (this.mass * mover.mass) / dSq;
        force.setMag(strength);
        mover.applyForce(force);
    }

    show() {
        noStroke();
        fill(255, 0, 100)
        ellipse(this.position.x, this.position.y, this.radius*2);
    }
}