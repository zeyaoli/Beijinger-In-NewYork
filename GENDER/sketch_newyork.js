let myFont;

function preload() {
  myFont = loadFont('../assets/SourceHanSans-Bold.otf');
}

function setup() {
  createCanvas(600, 600);
  // createCanvas(4800, 4800);
  // scale(8);
  colorMode(HSL);
  noStroke();

  background(45, 80, 50);

  newyorkGender();

  textFont(myFont);
  textAlign(CENTER);
  textSize(20);
  textStyle(BOLD);
  // text("Male:Female 89:100", width / 2, height - 30);
  // text("There are also non-binary people in our society", width / 2, 30);
  // text("Be respectful and supportive of them", width / 2, 60);
  text("Male:Female 89:100", 300, 600 - 30);
  text("There are also non-binary people in our society", 300, 50);
  text("Be respectful and supportive of them", 300, 80);
}

function newyorkGender() {
  push();
  // translate(width / 2, height / 2);
  translate(300, 300);
  noFill();
  strokeWeight(15);
  push();
  scale(0.89);
  stroke(222, 80, 50);
  const maleEllipseX = -100;
  const maleEllipseY = 50;
  const size = 100;
  const lineLength = 100
  ellipse(maleEllipseX, maleEllipseY, size, size);
  line(maleEllipseX + 20, maleEllipseY - size / 2, maleEllipseX + 50, maleEllipseY - size / 2 - lineLength);
  line(maleEllipseX + 50, maleEllipseY - size / 2 - lineLength, maleEllipseX - size / 2 + 44, maleEllipseY - size / 2 - lineLength / 2 - 26);
  line(maleEllipseX + 50, maleEllipseY - size / 2 - lineLength, maleEllipseX + size / 2 + 30, maleEllipseY - size / 2 - lineLength / 2);
  pop();
  const femaleEllipseX = 100;
  const femaleEllipseY = -50;
  stroke(5, 80, 50);
  ellipse(femaleEllipseX, femaleEllipseY, size, size);
  line(femaleEllipseX, femaleEllipseY + size / 2, femaleEllipseX, femaleEllipseY + size / 2 + lineLength);
  line(femaleEllipseX - size / 2, femaleEllipseY + size / 2 + lineLength / 2, femaleEllipseX + size / 2, femaleEllipseY + size / 2 + lineLength / 2);
  pop();
  pop();
}