class Mover {
    constructor(x, y, mass){
        this.position = createVector(x, y);
        this.velocity = p5.Vector.random2D();
        this.velocity.mult(10);
        this.acceleration = createVector(0, 0);
        this.mass = mass;
        this.radius = sqrt(this.mass);
    }

    applyForce(force) {
        let f = p5.Vector.div(force, this.mass);
        this.acceleration.add(f);
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