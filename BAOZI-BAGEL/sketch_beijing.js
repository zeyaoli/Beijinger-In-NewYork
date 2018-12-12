var baozi;

let myFont;

function preload() {
  myFont = loadFont('../assets/SourceHanSans-Bold.otf');
}

function setup() {
  var beijingCanvas = createCanvas(600, 600);
  // var beijingCanvas = createCanvas(600 * 8, 600 * 8);

  colorMode(HSL);
  noStroke();
  background(45, 80, 50);
  // scale(8);

  // var seed = floor(random(0, 100000));
  // console.log(seed);
  randomSeed(64884);

  baozi = new Baozi(300, 300);
  baozi.show();

  textFont(myFont);
  textAlign(CENTER);
  textSize(20);
  textStyle(BOLD);
  text("包子", 300, 570);


}

class Baozi {
  constructor(x, y) {
    this.x = x;
    this.y = y;
  }

  show() {
    push();
    translate(this.x, this.y);
    scale(0.8);
    fill(43, 64, 92);
    ellipse(0, 0, 400, 400);
    fill(45, 80, 50);
    ellipse(0, 0, 30, 30);
    for (let i = 0; i < 12; i++) {
      push();
      noFill();
      rotate(radians(i * 30));
      stroke(45, 80, 50);
      strokeWeight(7);
      beginShape();
      vertex(-25, -30);
      // quadraticVertex(-60, -40, -75, -80);
      quadraticVertex(random(-70, -60), random(-50, -40), -75, -80);
      endShape();
      pop();
    }
    pop();

  }

}