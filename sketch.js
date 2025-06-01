let s;
let speed = 1;

function setup() {
  createCanvas(600, 600);
  s = new Snake();
}

function draw() {
  background(36, 37, 38);
  s.update();
  s.show();
}

function keyPressed() {
  if (keyCode === UP_ARROW) {
    
    s.direction = 3;

  } else if (keyCode === DOWN_ARROW) {

    s.direction = 1;

  } else if (keyCode === RIGHT_ARROW) {

    s.direction = 0;

  } else if (keyCode === LEFT_ARROW) {

    s.direction = 2;

  } else if (keyCode === 49) {
    
    changeSpeed(+2);

  } else if (keyCode === 50) {
    
    changeSpeed(-2);

  }
  updateSpeedByDir();
}

function changeSpeed(num) {
  speed += num;
  if( 0 > speed ){speed = 0;}
  updateSpeedMeter();
  updateSpeedByDir();
}

function updateSpeedMeter(){
  document.getElementById("speed").innerText = speed;
}

function updateSpeedByDir(){
    if (s.direction === 3) {
      s.dir(0, -speed);
    } else if (s.direction === 1) {
      s.dir(0, +speed);
    } else if (s.direction === 0) {
      s.dir(+speed, 0);
    } else if (s.direction === 2) {
      s.dir(-speed, 0);
    }
}
