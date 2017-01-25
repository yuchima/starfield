var star = function() {
  // this.x = random(-width, width);
  // this.y = random(-height, height);
  this.z = random(width);
  this.pz = this.z;
  // this.maxspeed = 30;
  this.p = createVector(random(-width, width), random(-height, height));
  this.v = createVector(0, 0);
  this.a = createVector(0, 0);


  this.update = function() {
    this.z -= speed;
    if (this.z < 1) {
      this.z = width;
      this.p = createVector(random(-width, width), random(-height,height));
      this.v.add(this.a)
      this.p.add(this.v);
      // this.normmouse =
      // this.p.add(mouseVector)
      // this.v.limit = (this.maxspeed);
      this.pz = this.z;
    }
  }

  this.show = function() {
    fill(255);
    noStroke();
    // ellipse(this.sx, this.sy, this.r, this.r);

    this.sx = map(this.p.x / this.z, 0, 1, 0, width);
    this.sy = map(this.p.y / this.z, 0, 1, 0, height);

    this.px = map(this.p.x / this.pz, 0, 1, 0, width);
    this.py = map(this.p.y / this.pz, 0, 1, 0, height);

    this.r = map(this.z, 0, width, 10, 0)
    this.pz = this.z;

    stroke(255);
    line(this.px, this.py, this.sx, this.sy);

  }
}
