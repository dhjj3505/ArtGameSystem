let canvasWidth = 800;
let canvasHeight = 400;
let value = false;

function setup() {
  createCanvas(800, 400);
}

function draw() {
  canvas = createCanvas(canvasWidth, canvasHeight);
  canvas.position(windowWidth/2 - canvasWidth/2, 20);
  background(255, 255, 255);
  textAlign(CENTER);
  text('Game Start', width/2, height/2);
  fill(0);

  if(value === true) {
    var s = createSprite(400, 200, 30, 30);
    s.velocity.x = random(-5, 5);
    s.velocity.y = random(-5, 5);
  }

  drawSprites();

}

function mousePressed() {
  value = true;

 }
