class Mover {
    constructor(x, y, vx, vy, mass){
        this.position = createVector(x, y);
        this.velocity = createVector(vx, vy)
            this.acceleration = createVector(0, 0);
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

    update() {
        this.velocity.add(this.acceleration);
        this.position.add(this.velocity);
        this.acceleration.set(0, 0);
    }

    show() {
        stroke(255);
        strokeWeight(2);
        fill(125);
        ellipse(this.position.x, this.position.y, this.radius*2);
    }
}