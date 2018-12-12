var bikes = [];
var bike;

let myFont;

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
  //
  // var seed = floor(random(0, 100000));
  // console.log(seed);
  let seedValue = [
    "68775", "20639", "47378"
  ]
  const ranSeedValue = random(seedValue);
  console.log(ranSeedValue);
  randomSeed(ranSeedValue);

  for (let i = 0; i < 5; i++) {
    // bikes.push(new Bike(random(width), random(height)));
    bikes.push(new Bike(random(600), random(600)));

    bikes[i].show();
  }

  textFont(myFont);
  textAlign(CENTER);
  textSize(20);
  textStyle(BOLD);
  // text("摩拜和ofo", width / 2, height - 30);
  text("摩拜和ofo", 300, 600 - 30);

}

function draw() {

}

class Bike {
  constructor(x, y) {
    this.x = x;
    this.y = y;
    // this.strokeCol = col;
  }

  show() {
    push();
    translate(this.x, this.y);
    rotate(radians(random(-180, 180)));
    noFill();
    // stroke(this.strokeCol);
    const ranChance = random(0, 1);
    if (ranChance < 0.5) {
      stroke(color(48, 90, 60));
    } else {
      stroke(color(19, 88, 50));
    }

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