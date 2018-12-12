var bagel;
let myFont;

function preload() {
  myFont = loadFont('../assets/SourceHanSans-Bold.otf');
}

function setup() {
  var newyorkCanvas = createCanvas(600, 600);
  // var newyorkCanvas = createCanvas(600 * 8, 600 * 8);
  // scale(8);
  colorMode(HSL);
  noStroke();
  background(45, 80, 50);

  // var seed = floor(random(0, 100000));
  // console.log(seed);
  randomSeed(30235);

  // bagel = new Bagel(width / 2, height / 2);
  bagel = new Bagel(300, 300);

  bagel.show();


  textFont(myFont);
  textAlign(CENTER);
  textSize(20);
  textStyle(BOLD);
  // text("Bagel", width / 2, height - 30);
  text("Bagel", 300, 570);

}

function draw() {


}

class Bagel {
  constructor(x, y) {
    this.x = x;
    this.y = y;
  }

  show() {
    push();
    translate(this.x, this.y);
    scale(0.8);
    fill(34, 56, 59);
    ellipse(0, 0, 400, 400);
    fill(45, 80, 50);
    ellipse(0, 0, 100, 100);

    //sesame
    var sesames = [];
    var protection = 0;
    while (sesames.length < 60) {
      var overlapping = false;
      var ellipseX, ellipseY;
      var angle = random(0, 360);
      var radius = random(50, 200);

      var sesame = {
        ellipseX: cos(radians(angle)) * radius,
        ellipseY: sin(radians(angle)) * radius
      }

      for (var j = 0; j < sesames.length; j++) {
        var other = sesames[j];
        var d = dist(sesame.ellipseX, sesame.ellipseY, other.ellipseX, other.ellipseY);
        if (d < 40) {
          overlapping = true;
          break;
        }
      }
      if (!overlapping) {
        sesames.push(sesame);
      }
      protection++;
      if (protection > 2000000) {
        console.log("You Reach the Limit");
        break;
      }
    }

    for (let i = 0; i < sesames.length; i++) {
      push();
      rotate(radians(random(-180, 180)));
      ellipse(sesames[i].ellipseX, sesames[i].ellipseY, 15, 25);
      pop();
    }

    pop();
  }
}