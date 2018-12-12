let myFont;
var bean;

function preload() {
  myFont = loadFont('../assets/SourceHanSans-Bold.otf');
}


function setup() {
  var beijingCanvas = createCanvas(600, 600);
  // var beijingCanvas = createCanvas(600 * 8, 600 * 8);
  // scale(8);

  colorMode(HSL);
  noStroke();
  background(45, 80, 50);

  // bean = new YellowBean(width / 2, height / 2);
  bean = new YellowBean(300, 300);

  bean.show();

  textFont(myFont);
  textAlign(CENTER);
  textSize(20);
  textStyle(BOLD);
  // text("黄豆", width / 2, height - 30);
  text("黄豆", 300, 570);

}

function draw() {

}

class YellowBean {
  constructor(x, y) {
    this.x = x;
    this.y = y;
  }

  show() {
    push();
    translate(this.x, this.y);
    scale(0.8);
    var rad = 35;
    rotate(radians(rad));
    fill(60, 90, 80);
    ellipse(0, 0, 300, 400);
    fill(45, 80, 50);
    // fill(10, 0, 0);
    beginShape();
    var startX = -120;
    var startY = -130;
    vertex(startX, startY);
    quadraticVertex(-200, 0, startX + 5.5, -startY + 1);
    quadraticVertex(-130, 80, -75, 48);
    quadraticVertex(20, 0, -72, -68);
    quadraticVertex(-130, -108, -66, -185);
    endShape();

    beginShape();
    noFill();
    strokeWeight(4);
    stroke(45, 80, 50);
    vertex(-10, -40);
    quadraticVertex(20, 0, -10, 40);
    endShape();

    pop();
  }

}