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
  if (mouseX>0 && mouseX<=width/2){
  speed = map(mouseX, 0, width/2, 0, 15);
  } else {
  speed = map(mouseX, width/2, width, 15, 0);
};
  for (var i = 0; i < stars.length; i++) {

    stars[i].update();
    stars[i].show();
  }
}
