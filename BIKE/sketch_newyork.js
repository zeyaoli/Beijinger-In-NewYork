let bikes = [];
let bike;

let myFont;

function preload() {
  myFont = loadFont('../assets/SourceHanSans-Bold.otf');
}

function setup() {
  var newyorkCanvas = createCanvas(600, 600);
  // var newyorkCanvas = createCanvas(4800, 4800);
  // scale(8);
  colorMode(HSL);
  noStroke();
  background(45, 80, 50);


  for (let i = 0; i < 3; i++) {
    // bikes.push(new Bike(width / 2, 80 + i * 180, color(226, 52, 41)));
    bikes.push(new Bike(300, 80 + i * 180, color(226, 52, 41)));

    bikes[i].show();
  }

  textFont(myFont);
  textAlign(CENTER);
  textSize(20);
  textStyle(BOLD);
  // text("Citi Bike", width / 2, height - 30);
  text("Citi Bike", 300, 600 - 30);


}

function draw() {


}

class Bike {
  constructor(x, y, col) {
    this.x = x;
    this.y = y;
    this.strokeCol = col;
  }

  show() {
    push();
    translate(this.x, this.y);
    noFill();
    stroke(this.strokeCol);
    strokeWeight(15);
    //wheel
    const ellipseX = 90;
    const ellipseY = 50;
    ellipse(-ellipseX, ellipseY, 100, 100);
    ellipse(ellipseX, ellipseY, 100, 100);
    // the bike structure
    line(ellipseX, ellipseY, 0, ellipseY);
    line(0, ellipseY, -60, -30);
    line(-60, -30, 40, -30);
    line(40, -30, ellipseX, ellipseY);
    //the front part
    line(-ellipseX, ellipseY, -60, -60);
    line(-75, -60, -40, -60);
    //seat
    const seatY = -60;
    line(40, -30, 40, seatY);
    line(30, seatY, 50, seatY);
    pop();
  }
}