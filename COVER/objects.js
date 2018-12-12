class Pizza {
  constructor(firstPointX, firstPointY, scale) {
    this.x = firstPointX;
    this.y = firstPointY;
    this.scale = scale;
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
  show(x_, y_) {
    push();
    // translate(this.x, this.y);
    translate(x_, y_);

    translate(0, 46);
    scale(this.scale);
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

// ***********************************
class Bing {
  constructor(x, y, size, col, scale) {
    this.x = x;
    this.y = y;
    this.size = size;
    this.col = col;
    this.scale = scale;
  }

  show(x_, y_) {
    push();
    fill(this.col);
    // translate(this.x, this.y);
    translate(x_, y_);
    scale(this.scale);
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

// ***********************************
class YellowBean {
  constructor(x, y, scale) {
    this.x = x;
    this.y = y;
    this.scale = scale;
  }

  show(x_, y_) {
    push();
    // translate(this.x, this.y);
    translate(x_, y_);
    scale(this.scale);
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

// ***************************************
class CoffeeBean {
  constructor(x, y, scale) {
    this.x = x;
    this.y = y;
    this.scale = scale;
  }

  show(x_, y_) {
    push();
    // translate(this.x, this.y);
    translate(x_, y_);

    scale(this.scale);
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

// *******************************************
class Baozi {
  constructor(x, y, scale) {
    this.x = x;
    this.y = y;
    this.scale = scale;
  }

  show(x_, y_) {
    push();
    // translate(this.x, this.y);
    translate(x_, y_);
    scale(this.scale);
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
      quadraticVertex(random(-70, -60), random(-50, -40), -75, -80);
      endShape();
      pop();
    }
    pop();
  }
}

// ****************************************
class Bagel {
  constructor(x, y, scale) {
    this.x = x;
    this.y = y;
    this.scale = scale
  }

  show(x_, y_) {
    push();
    randomSeed(30235);
    // translate(this.x, this.y);
    translate(x_, y_);
    scale(this.scale);
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
      if (protection > 3000000) {
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

class Bike {
  constructor(x, y, scale) {
    this.x = x;
    this.y = y;
    this.scale = scale;
    // this.strokeCol = col;
  }

  show(x_, y_) {
    push();
    // translate(this.x, this.y);
    translate(x_, y_);
    // rotate(radians(random(-180, 180)));
    noFill();
    scale(this.scale);
    //give the bike three colors here
    const ranChance = random(0, 1);
    if (ranChance < 0.33) {
      stroke(color(48, 90, 60));
    } else if (ranChance > 0.66 && ranChance < 0.33) {
      stroke(color(19, 88, 50));
    } else {
      stroke(color(226, 52, 41));
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