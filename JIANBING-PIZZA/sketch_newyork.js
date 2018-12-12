var pizza;

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

  var seed = floor(random(0, 100000));
  // console.log(seed);
  randomSeed(56029);

  // pizza = new Pizza(width / 2, height / 2 + 250);
  pizza = new Pizza(300, 300 + 250);

  pizza.show();

  textFont(myFont);
  textAlign(CENTER);
  textSize(20);
  textStyle(BOLD);
  // text("Pizza", width / 2, height - 30);
  text("Pizza", 300, 570);


}



class Pizza {
  constructor(firstPointX, firstPointY) {
    this.x = firstPointX;
    this.y = firstPointY;
  }
  sign(p1, p2, p3) {
    return (p1.x - p3.x) * (p2.y - p3.y) - (p2.x - p3.x) * (p1.y - p3.y);
  }

  isInTriangle(pt, v1, v2, v3) {
    var d1, d2, d3, has_neg, has_pos;

    d1 = this.sign(pt, v1, v2);
    d2 = this.sign(pt, v2, v3);
    d3 = this.sign(pt, v3, v1);

    has_neg = (d1 < 0) || (d2 < 0) || (d3 < 0);
    has_pos = (d1 > 0) || (d2 > 0) || (d3 > 0);

    return !(has_neg && has_pos);
  }
  show() {
    push();
    translate(this.x, this.y);

    translate(0, -50);
    scale(0.8);
    //draw triangle here
    fill(49, 99, 64);
    const leftX = -200;
    const heightY = -480;
    const rightX = 200;
    const t1 = createVector(0, 0);
    const t2 = createVector(leftX, heightY);
    const t3 = createVector(rightX, heightY);
    triangle(t1.x, t1.y, t2.x, t2.y, t3.x, t3.y);

    push();
    fill(34, 66, 56);
    quad(t2.x, t2.y, -186, -440, 186, -440, t3.x, t3.y);
    pop();

    //fake triangle to limit the boundry
    // fill(100, 0, 0);
    const v1 = createVector(0, -50);
    const v2 = createVector(-140, -450);
    const v3 = createVector(140, -450);
    // triangle(v1.x, v1.y, v2.x, v2.y, v3.x, v3.y);

    //the randomeness without overlapping
    var ellipses = [];
    var protection = 0;

    while (ellipses.length < 10) {
      var overlapping = false;
      const ellipseSize = random(60, 80);
      const yRan = random(heightY + ellipseSize / 2, -ellipseSize);

      fill(6, 51, 50);
      var round = {
        ellipseX: random(-200, 200),
        ellipseY: yRan
      }

      for (var j = 0; j < ellipses.length; j++) {
        var other = ellipses[j];

        var d = dist(round.ellipseX, round.ellipseY, other.ellipseX, other.ellipseY);

        // console.log(d);

        if (d < round.ellipseSize + other.ellipseSize) {
          overlapping = true;
          break;
        };
      };

      if (!overlapping) {
        ellipses.push(round);
      };
      protection++;
      if (protection > 2000000) {
        console.log("You Reach the round Limit");
        break;
      };
    };

    for (let i = 0; i < ellipses.length; i++) {
      const size = random(60, 80);
      var p = createVector(ellipses[i].ellipseX, ellipses[i].ellipseY);
      if (this.isInTriangle(p, v1, v2, v3)) {
        ellipse(p.x, p.y, size, size);
      }
    }
    pop();
  }

}