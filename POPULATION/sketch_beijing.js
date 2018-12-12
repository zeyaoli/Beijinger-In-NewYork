let circle;
let circles = [];
var startingR = 21;
let currentR = startingR;
let maxLoops = 1000;

let myFont;

function preload() {
  myFont = loadFont('../assets/SourceHanSans-Bold.otf');
}

function setup() {
  var beijingCanvas = createCanvas(600, 600);
  // var beijingCanvas = createCanvas(4800, 4800);
  // scale(8);
  colorMode(HSL);
  noStroke();
  background(45, 80, 50);

  push();
  fill(123, 38, 45);
  // translate(width / 2, height / 2);
  translate(300, 300);
  ellipse(0, 0, 400, 400);
  newCircles();
  for (var i = 0; i < circles.length; i++) {
    circles[i].show();
  }
  pop();
  textFont(myFont);
  textAlign(CENTER);
  textSize(20);
  textStyle(BOLD);
  // text("人口:2173万", width / 2, height - 30);
  text("人口:2173万", 300, 600 - 30);

}

function newCircles() {

  currentR = startingR;
  let loopCycle = maxLoops;
  while (loopCycle > 0) {
    //change the random width and height
    let angle = random(0, 360);
    let radius = random(0, 190);
    let circleX = cos(radians(angle)) * radius;
    let circleY = sin(radians(angle)) * radius;
    // circle = new Circle(random(width), random(height), currentR);
    circle = new Circle(circleX, circleY, currentR);

    let overlapping = false;
    for (var j = 0; j < circles.length; j++) {
      let other = circles[j];
      let d = dist(circle.x, circle.y, other.x, other.y);
      if (d < circle.r + other.r) {
        overlapping = true;
        break;
      }
    }
    if (!overlapping) {
      circles.push(circle);
    }
    loopCycle--;
    if (loopCycle === 0) {
      if (currentR - 1) {
        currentR = currentR - 1;
        loopCycle = maxLoops;
      }
    }
  }
}


class Circle {
  constructor(x, y, r) {
    this.x = x;
    this.y = y;
    this.r = r;
  }

  show() {
    push();
    fill(54, 97, 65);
    translate(this.x, this.y);
    ellipse(0, 0, this.r * 2, this.r * 2);
    pop();
  }

}