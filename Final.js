let canvasWidth = 800;
let canvasHeight = 400;
let value = false;
let player;
let player_x = 30;
let player_y = 60;


function setup() {
  createCanvas(800, 400);
}



function draw() {

  canvas = createCanvas(canvasWidth, canvasHeight);
  canvas.position(windowWidth/2 - canvasWidth/2, 20);

  background(255, 255, 255);
  fill(0);
}
function show() {
  player = createSprite(mouseX,mouseY,player_x, player_y);
   var s = createSprite(width/2, height/2, 5, 5);
  player.shapeColor = "black";

  }
}
