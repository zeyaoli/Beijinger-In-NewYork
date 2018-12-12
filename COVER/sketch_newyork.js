var bean;


let myFont;

function preload() {
  myFont = loadFont('../assets/SourceHanSans-Bold.otf');
}

function setup() {
  var newyorkCanvas = createCanvas(600, 600);
  colorMode(HSL);
  noStroke();
  background(45, 80, 50);


  bean = new CoffeeBean(width / 2, height / 2);
  bean.show();

  textFont(myFont);
  textAlign(CENTER);
  textSize(20);
  textStyle(BOLD);
  text("Coffee Bean", width / 2, height - 30);
}

function draw() {


}

class CoffeeBean {
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
    fill(38, 65, 22);
    ellipse(0, 0, 300, 400);

    fill(45, 80, 50);
    beginShape();
    var startX = -10;
    var startY = -196;
    var firstEndX = -30;
    var firstEndY = 196;
    vertex(startX, startY);
    quadraticVertex(-80, -80, -15, 0);
    quadraticVertex(40, 80, -5, 200);
    quadraticVertex(0, 210, 10, 200);
    quadraticVertex(70, 80, 15, 0);
    quadraticVertex(-40, -80, 5, -200);
    quadraticVertex(0, -210, startX, startY);
    endShape();

    pop();

  }
}