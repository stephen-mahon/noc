class Mover {
    constructor(x, y, vx, vy, mass){
        this.position = createVector(x, y);
        this.velocity = createVector(vx, vy)
        this.acceleration = createVector(0, 0);
        this.mass = mass;
        this.radius = sqrt(this.mass);
        this.angle = 0;
        this.angleV = 0;
        this.angleA = 0;
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
        this.angleV += this.angleA;
        this.angle += this.angleV
        this.acceleration.set(0, 0);
    }

    show() {
        stroke(255);
        strokeWeight(2);
        fill(255, 100);
        push();
        translate(this.position.x, this.position.y);
        this.angle = this.velocity.heading();
        rotate(this.angle);
        triangle(-this.radius, -this.radius/2, -this.radius, this.radius/2, this.radius, 0);
        pop()
    }
}