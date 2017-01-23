var stars = [];
var speed, mouseVector;

function setup() {
  createCanvas(window.innerWidth, window.innerHeight);
  for (var i = 0; i < 400; i++) {
    stars.push (new star());
  }
}

function draw() {
  background(0);
  translate(width/2, height/2);
  mouseVector = createVector(mouseX,mouseY);
  speed = map(mouseX, 0, width, 0, 30);
  for (var i = 0; i < stars.length; i++) {
    
    stars[i].update();
    stars[i].show();
  }
}
