class Pendulum{

    constructor(x, y, r) {
        this.origin = createVector(x, y);
        this.position = createVector();
        this.r = r;
        this.angle = PI/8;

        this.angleV = 0.0;
        this.angleA = 0.0;
        this.damping = 0.99999;
        this.ballR = 32.0;
    }

    update() {
        let gravity = 1;
        this.angleA = - gravity * sin(this.angle) / this.r;
        this.angleV += this.angleA * this.damping;
        this.angle += this.angleV;
    }

    show() {
        this.position.set(this.r * sin(this.angle), this.r * cos(this.angle), 0);
        this.position.add(this.origin);

        stroke(255);
        strokeWeight(2);
        line(this.origin.x, this.origin.y, this.position.x, this.position.y);
        ellipseMode(CENTER);
        fill(127);
        ellipse(this.position.x, this.position.y, this.ballR, this.ballR);
    }
}