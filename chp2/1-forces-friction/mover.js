class Mover {
    constructor(x, y, mass) {
        this.position = createVector(x, y);
        this.velocity = createVector(0, 0);
        this.acceleration = createVector(0, 0);
        this.mass = mass;
        this.radius = sqrt(this.mass) * 5
    }

    drag(dragC) {
        let drag = this.velocity.copy();
        drag.normalize();
        drag.mult(-1);

        let speedSq = this.velocity.magSq();
        drag.setMag(dragC * speedSq);

        this.applyForce(drag);
    }

    friction() {
        let diff = height - (this.position.y + this.radius);
        if (diff < 1) {
            let friction = this.velocity.copy();
            friction.normalize();
            friction.mult(-1);
            let normal = this.mass;
            friction.setMag(mu * normal);
            this.applyForce(friction);
        }
    }

    applyForce(force){
        let f = p5.Vector.div(force, this.mass)
        this.acceleration.add(f);
    }

    edges() {
        if (this.position.y >= height-this.radius) {
            this.position.y = height-this.radius;
            this.velocity.y *= -1;
          }
      
          if (this.position.x >= width-this.radius) {
            this.position.x = width-this.radius;
            this.velocity.x *= -1;
          } else if (this.position.x <= this.radius) {
            this.position.x = this.radius;
            this.velocity.x *= -1;
          }
    }

    update() {
        this.velocity.add(this.acceleration);
        this.position.add(this.velocity);
        this.acceleration.set(0, 0);
    }

    show() {
        stroke(255);
        strokeWeight(2);
        fill(255, 100);
        ellipse(this.position.x, this.position.y, this.radius *2);
    }
}