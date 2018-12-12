let myFont;
// let coffeeBean;

function preload() {
  myFont = loadFont('../assets/SourceHanSans-Bold.otf');
}

let objects = [];

function setup() {
  // createCanvas(600 * 8, 600 * 8);
  createCanvas(600, 600);
  colorMode(HSL);
  noStroke();
  background(45, 80, 50);
  // scale(8);

  let coffeeBean = new CoffeeBean(width / 2, height / 2, 0.2);
  let pizza = new Pizza(width / 2, height / 2 - 250, 0.18);
  let bing = new Bing(width / 2, height / 2, 500, color(39, 82, 76), 0.18);
  let yellowBean = new YellowBean(width / 2, height / 2, 0.2);
  let bagel = new Bagel(width / 2, height / 2, 0.22);
  // let bike = new Bike(width / 2, height / 2, 0.3);
  let baozi = new Baozi(width / 2, height / 2, 0.22);

  objects.push(coffeeBean);
  objects.push(pizza);
  objects.push(bing);
  objects.push(yellowBean);
  objects.push(bagel);
  objects.push(baozi);
  // objects.push(bing);
  // objects.push(coffeeBean);
  // shuffle(objects, true);

  for (let i = 0; i < 6; i++) {
    for (let j = 0; j < 6; j++) {
      let ranIdx = int(random(0, objects.length));
      objects[ranIdx].show(60 + 95 * i, 65 + 95 * j);
    }

  }
}