let canvasWidth = 800;
let canvasHeight = 400;
let value = false;
let player;
let player_x = 30;
let player_y = 60;


function setup() {
  createCanvas(800, 400);
  player = rect(mouseX, mouseY, player_x, player_y);
}



function draw() {

  canvas = createCanvas(canvasWidth, canvasHeight);
  canvas.position(windowWidth/2 - canvasWidth/2, 20);

  background(255, 255, 255);
  fill(0);
  if(value === false ) {
   textAlign(CENTER);
   text('Game Start', width/2, height/2);
 }

 if(value === true) {
  show();
  var s = createSprite(width/2, height/2, 5, 5);
  s.velocity.x = random(-1, 1);
  s.velocity.y = random(-1, 1); 
}


drawSprites();

if(player_x > 400 && player_y > 400 ) {

  background(0);
  fill(255,0,0);
  textAlign(CENTER);
  textSize(50);
  text('過猶不及', width/2, 200);
   textAlign(CENTER);
  textSize(20);
  text(': 모든 사물이 정도를 지나치면 미치지 못한 것과 같다.', width/2, 270);


}
}

function mousePressed() {
  value = true;

}

function show() {
  player = createSprite(mouseX,mouseY,player_x, player_y);
   var s = createSprite(width/2, height/2, 5, 5);
  player.shapeColor = "black";
  if(player.overlap(s)){
    player_x = player_x+1;
    player_y = player_y+1;

  }
}

