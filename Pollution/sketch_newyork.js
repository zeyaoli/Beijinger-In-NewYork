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

  pollution();

  textFont(myFont);
  textAlign(CENTER);
  textSize(20);
  textStyle(BOLD);
  // text("Air Quality: Good", width / 2, height - 30);
  text("Air Quality: Good", 300, 600 - 30);


}

function pollution() {
  push();
  // translate(width / 2, height / 2);
  translate(300, 300);

  fill(10, 0, 30);
  textFont(myFont);
  textAlign(CENTER);
  textSize(80);
  textStyle(BOLD);
  text("NEW YORK", 0, 0);
  pop();
}