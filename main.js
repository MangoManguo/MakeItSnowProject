// MAKE IT SNOWWWW ❄☃⛄🌨

// let myCircle = {
//   x: 200,
//   y: 200,
//   dx: 2,
//   dy: 2,
// };

// myCircle.initX = myCircle.x;

// console.log(myCircle);

// Set up Canvas and Graphics Context
let cnv = document.getElementById("myCanvas");
let ctx = cnv.getContext("2d");
cnv.width = 1000;
cnv.height = 600;

var snowArray = [];

var snow = {
  radius: 20,
  x: Math.random() * 1000,
  y: 0,
  speedX: 2,
  speedY: 5,
  color: "white",
};

for (let i = 0; i < 100; i++) {
  snowArray.push({
    radius: Math.random() * 4 + 1,
    x: Math.random() * 1000,
    y: 0,
    speedX: Math.random() * 1.2 - 0.6,
    speedY: Math.random() * 2 + 0.1,
    color: "white",
  });
}

for (let i = 0; i < snowArray.length; i++) {
  snowArray[i].initX = snowArray[i].x;
}

document.addEventListener("keydown", keyDownHandler);
document.addEventListener("keyup", keyupHandler);

function keyDownHandler(event) {
  console.log(event.code);
  if (event.code == "ArrowRight" && snowArray.length < 1000) {
    console.log(snowArray.length);
    for (let i = 0; i < 10; i++) {
      snowArray.push({
        radius: Math.random() * 4 + 1,
        x: Math.random() * 1000,
        y: 0,
        speedX: Math.random() * 1.2 - 0.6,
        speedY: Math.random() * 2,
        color: "white",
      });
    }
  }

  if (event.code == "ArrowLeft" && snowArray.length > 100) {
    snowArray.splice(0, 10);
    console.log(snowArray.length);
  }

  if (event.code == "ArrowDown") {
    for (let i = 0; i < snowArray.length; i++) {
      if (snowArray[i].speedY > 0.1) {
        snowArray[i].speedY -= Math.random() * 0.1;
      }
      if (snowArray[i].speedX > 0.1) {
        snowArray[i].speedX -= Math.random() * 0.07;
      }
      if (snowArray[i].speedX < -0.1) {
        snowArray[i].speedX += Math.random() * 0.07;
      }
    }
  }
  if (event.code == "ArrowUp") {
    for (let i = 0; i < snowArray.length; i++) {
      if (snowArray[i].speedY < 7) {
        snowArray[i].speedY += Math.random() * 0.1;
      }
      if (snowArray[i].speedX < 0.45) {
        snowArray[i].speedX += Math.random() * 0.07;
      }
      if (snowArray[i].speedX > -0.45) {
        snowArray[i].speedX -= Math.random() * 0.07;
      }
    }
  }

  if (event.code == "KeyD") {
    for (let i = 0; i < snowArray.length; i++) {
      if (snowArray[i].speedX < 1) {
        snowArray[i].speedX += Math.random() * 0.2;
        for (let i = 0; i < snowArray.length; i++) {
          snowArray[i].initX = snowArray[i].x + 20;
        }
      }
    }
  }
  if (event.code == "KeyA") {
    for (let i = 0; i < snowArray.length; i++) {
      if (snowArray[i].speedX > -1) {
        snowArray[i].speedX -= Math.random() * 0.2;
        for (let i = 0; i < snowArray.length; i++) {
          snowArray[i].initX = snowArray[i].x - 20;
        }
      }
    }
  }
}

function keyupHandler(event) {
  console.log(event.code);
  for (let i = 0; i < snowArray.length; i++) {
    if (event.code == "KeyD" || event.code == "KeyA") {
      snowArray[i].speedX = Math.random() * 1.2 - 0.6;
    }
  }
}

// x = 0
// y = 550
// tw = 0 (default make 10)
// th = 0 (default make 20)

function drawTree(color, x, y, w, h, trunkW, trunkH) {
  ctx.fillStyle = color;
  ctx.beginPath();
  ctx.moveTo(x, y);
  ctx.lineTo(x + 50 + w / 2, y - 100 - h);
  ctx.lineTo(x + 100 + w, y);
  ctx.lineTo(x, y);
  ctx.fill();
  ctx.fillRect(x + 45 + w / 2 - trunkW / 2, y, trunkW + 10, trunkH + 20);
}

// Main Program Loop
requestAnimationFrame(draw);

function draw() {
  // Background

  let sky = ctx.createLinearGradient(0, 0, 0, 350);
  sky.addColorStop(0, "rgb(24, 47, 84)");
  sky.addColorStop(1, "rgb(81, 119, 166)");

  ctx.fillStyle = sky;
  ctx.fillRect(0, 0, cnv.width, cnv.height);

  // FUNCTIONIZE
  // Mountains and hills
  ctx.fillStyle = "rgb(75, 101, 125)";
  ctx.beginPath();
  ctx.moveTo(400, 500);
  ctx.quadraticCurveTo(550, -150, 700, 500);
  ctx.fill();
  ctx.fillStyle = "rgb(109, 133, 156)";
  ctx.beginPath();
  ctx.moveTo(250, 500);
  ctx.quadraticCurveTo(400, -300, 550, 500);
  ctx.fill();
  ctx.beginPath();
  ctx.moveTo(700, 500);
  ctx.quadraticCurveTo(900, -250, 1100, 500);
  ctx.fill();
  ctx.fillStyle = "rgb(143, 169, 194)";
  ctx.beginPath();
  ctx.moveTo(500, 500);
  ctx.quadraticCurveTo(700, -200, 900, 500);
  ctx.fill();
  ctx.beginPath();
  ctx.moveTo(625, 200);
  ctx.bezierCurveTo(600, 250, 470, 150, 440, 750);
  ctx.fill();
  ctx.beginPath();
  ctx.moveTo(0, 500);
  ctx.quadraticCurveTo(200, -210, 400, 500);
  ctx.fill();
  ctx.fillStyle = "rgb(208, 226, 242)";
  ctx.beginPath();
  ctx.moveTo(150, 500);
  ctx.quadraticCurveTo(300, -100, 450, 500);
  ctx.fill();
  ctx.beginPath();
  ctx.moveTo(650, 500);
  ctx.quadraticCurveTo(800, 0, 950, 500);
  ctx.fill();
  ctx.fillStyle = "rgb(180, 209, 237)";
  ctx.beginPath();
  ctx.moveTo(750, 500);
  ctx.quadraticCurveTo(1000, -100, 1150, 500);
  ctx.fill();
  ctx.beginPath();
  ctx.moveTo(-300, 500);
  ctx.quadraticCurveTo(50, -200, 250, 500);
  ctx.fill();
  ctx.fillStyle = "rgb(242, 247, 252)";
  ctx.beginPath();
  ctx.moveTo(0, 500);
  ctx.quadraticCurveTo(150, 0, 350, 500);
  ctx.fill();
  ctx.beginPath();
  ctx.moveTo(240, 300);
  ctx.bezierCurveTo(300, 350, 320, 250, 400, 600);
  ctx.fill();
  ctx.beginPath();
  ctx.moveTo(600, 500);
  ctx.quadraticCurveTo(775, 100, 900, 500);
  ctx.fill();
  ctx.fill();
  ctx.beginPath();
  ctx.moveTo(500, 500);
  ctx.quadraticCurveTo(600, 200, 750, 500);
  ctx.fill();
  ctx.fillStyle = "rgb(208, 226, 242)";
  ctx.beginPath();
  ctx.moveTo(-200, 500);
  ctx.quadraticCurveTo(0, 250, 350, 500);
  ctx.fill();
  ctx.beginPath();
  ctx.moveTo(600, 500);
  ctx.quadraticCurveTo(1100, 300, 1300, 500);
  ctx.fill();

  drawTree("rgb(47, 65, 89)", 500, 445, -80, -50, -5, -5);
  drawTree("rgb(47, 65, 89)", 400, 460, -80, -50, -5, -5);
  drawTree("rgb(47, 65, 89)", 420, 455, -70, -20, -5, -5);
  drawTree("rgb(47, 65, 89)", 447, 455, -80, -40, -5, -5);
  drawTree("rgb(47, 65, 89)", 460, 455, -50, -10, -5, -5);
  drawTree("rgb(75, 101, 125)", 200, 462, -80, -60, -5, -7);
  drawTree("rgb(75, 101, 125)", 170, 465, -70, -30, -5, -7);

  ctx.fillStyle = "rgb(230, 240, 250)";
  ctx.fillRect(0, 500, 1000, 100);
  ctx.beginPath();
  ctx.moveTo(0, 500);
  ctx.quadraticCurveTo(500, 400, 1000, 500);
  ctx.fill();

  // Trees
  drawTree("rgb(129, 156, 181)", 50, 490, -40, -10, 0, 0);
  drawTree("rgb(156, 186, 214)", -10, 500, -20, 40, 0, 0);
  drawTree("rgb(96, 123, 148)", 500, 490, -10, 50, 0, 0);
  drawTree("rgb(183, 209, 232)", 465, 505, -40, 30, 0, 0);
  drawTree("rgb(129, 156, 181)", 570, 510, -40, -10, 0, 0);
  drawTree("rgb(129, 156, 181)", 570, 510, -40, -10, 0, 0);
  drawTree("rgb(156, 186, 214)", 780, 435, -50, 0, -3, -5);
  drawTree("rgb(96, 123, 148)", 750, 440, -60, -30, -4, -5);

  // Snowman (WIP)
  // ctx.fillStyle = "white";
  // ctx.strokeStyle = "lightgrey";
  // ctx.lineWidth = 3;
  // ctx.beginPath();
  // ctx.arc(100, 520, 50, 0, 2 * Math.PI);
  // ctx.fill();
  // ctx.stroke();
  // ctx.beginPath();
  // ctx.arc(100, 450, 40, 0, 2 * Math.PI);
  // ctx.fill();
  // ctx.stroke();
  // ctx.fillStyle = "rgb(70, 70, 70)";
  // ctx.strokeStyle = "black";
  // ctx.lineWidth = 2.5;
  // ctx.fillRect(55, 425, 90, 5);
  // ctx.strokeRect(55, 425, 90, 5);
  // ctx.beginPath();
  // ctx.moveTo(65, 425);
  // ctx, lineTo(60);

  // Logic
  for (let i = 0; i < snowArray.length; i++) {
    ctx.fillStyle = snowArray[i].color;
    ctx.beginPath();
    ctx.arc(
      snowArray[i].x,
      snowArray[i].y,
      snowArray[i].radius,
      0,
      2 * Math.PI
    );
    ctx.fill();
  }

  for (let i = 0; i < snowArray.length; i++) {
    snowArray[i].x += snowArray[i].speedX;
    snowArray[i].y += snowArray[i].speedY;

    if (snowArray[i].y - snowArray[i].radius > cnv.height) {
      snowArray[i].x = Math.random() * 1000;
      snowArray[i].y = -snowArray[i].radius;
      snowArray[i].initX = snowArray[i].x;
    }
    if (snowArray[i].x - snowArray[i].radius > cnv.width) {
      // console.log("hi");
      snowArray[i].x = -snowArray[i].radius;
      snowArray[i].initX = snowArray[i].x;
    }
    if (snowArray[i].x + snowArray[i].radius < 0) {
      // console.log("bye");
      snowArray[i].x = cnv.width + snowArray[i].radius;
      snowArray[i].initX = snowArray[i].x;
    }
  }

  for (let i = 0; i < snowArray.length; i++) {
    if (
      snowArray[i].x > snowArray[i].initX + 30 ||
      snowArray[i].x < snowArray[i].initX - 30
    ) {
      snowArray[i].speedX *= -1;
    }
  }

  // Drawing
  // ctx.clearRect(0, 0, cnv.width, cnv.height);

  // Circle
  // ctx.fillStyle = "green";
  // ctx.beginPath();
  // ctx.arc(myCircle.x, myCircle.y, 30, 0, 2 * Math.PI);
  // ctx.fill();

  // myCircle.x += myCircle.dx;

  // if (myCircle.x > myCircle.initX + 100) {
  //   myCircle.dx *= -1;
  // }

  // if (myCircle.x < myCircle.initX - 100) {
  //   myCircle.dx *= -1;
  // }

  // myCircle.y++;

  // Request another Animation Frame
  requestAnimationFrame(draw);
}
