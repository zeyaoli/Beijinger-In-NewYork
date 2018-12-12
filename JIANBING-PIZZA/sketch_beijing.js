// var bings = [];
var bing;

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

  // var seed = floor(random(0, 100000));
  // console.log(seed);
  randomSeed(4922);


  // bing = new Bing(width / 2, height / 2, 500, color(39, 82, 76));
  bing = new Bing(300, 300, 500, color(39, 82, 76));


  bing.show();

  textFont(myFont);
  textAlign(CENTER);
  textSize(20);
  textStyle(BOLD);
  // text("煎饼", width / 2, height - 30);
  text("煎饼", 300, 570);


}

function draw() {

}

class Bing {
  constructor(x, y, size, col) {
    this.x = x;
    this.y = y;
    this.size = size;
    this.col = col;
  }

  show() {
    push();
    fill(this.col);
    translate(this.x, this.y);
    scale(0.8);
    ellipse(0, 0, this.size, this.size);

    fill(95, random(70, 90), random(30, 40));

    var triangles = [];
    // set the protection to prevent infinite loop
    var protection = 0;
    //Check Overlap
    while (triangles.length < 25) {
      var overlapping = false;
      var firstPointX, firstPointY;
      var angle = random(0, 360);
      var radius = random(0, this.size / 2 - 30);
      var tri = {
        // this is the algorithm for putting points inside the ellipse
        firstPointX: cos(radians(angle)) * radius,
        firstPointY: sin(radians(angle)) * radius
      }
      // console.log(tri.firstPointX);

      //Get the value of other triangles and detect the distance
      for (var j = 0; j < triangles.length; j++) {
        var other = triangles[j];

        var d = dist(tri.firstPointX, tri.firstPointY, other.firstPointX, other.firstPointY);

        if (d < 60) {
          overlapping = true;
          break;
        };
      };

      if (!overlapping) {
        triangles.push(tri);
      };
      protection++;
      if (protection > 2000000) {
        console.log("You Reach the Limit");
        break;
      };
    };

    //Draw the Triangle Here
    for (let i = 0; i < triangles.length; i++) {
      push();
      translate(triangles[i].firstPointX, triangles[i].firstPointY);
      rotate(random(PI));
      triangle(0, 0, random(-20, -10), random(10, 20), random(10, 20), random(10, 20));
      pop();
    }

    //draw egg
    push();
    var numVertices = 7;
    var spacing = 360 / numVertices;
    beginShape();
    fill(10, 50, 100);
    for (let i = 0; i < numVertices + 1; i++) {
      var eggWhiteAngle = i * spacing;
      var eggRadius = random(100, 110);
      var x = cos(radians(eggWhiteAngle)) * eggRadius;
      var y = sin(radians(eggWhiteAngle)) * eggRadius;
      if (i == 0) {
        vertex(x, y);
      } else {
        var cAngle = eggWhiteAngle - spacing / 2;
        var sRadius = random(120, 180);
        var cX = cos(radians(cAngle)) * sRadius;
        var cY = sin(radians(cAngle)) * sRadius;
        quadraticVertex(cX, cY, x, y);
      }
    }
    endShape();

    fill(56, 100, 50);
    ellipse(0, 0, 75, 75);
    pop();

    //Draw the Sauce on top of it
    push();
    stroke(20, 80, 60);
    strokeWeight(18);
    noFill();
    beginShape();
    vertex(150, 120);
    quadraticVertex(-this.size / 2 - 60, 90, 0, 0);
    quadraticVertex(this.size / 2 + 60, -90, -150, -120);
    endShape();
    pop();



    pop();
  }

}