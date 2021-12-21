const img = new Image();
img.src = "./imgfundo.jpg";

const canvas = document.querySelector(".myCanvas");
const canvasLeft = canvas.offsetLeft;
const canvasTop = canvas.offsetTop;
const ctx = canvas.getContext("2d");

const imageTrash = new Image();
imageTrash.src = "./__cartoon_fish_06_yellow_swim.png" 

var theScore = document.querySelector("#realScore");

var score = 0;

//img background

const backgroundImage = {
  img: img,
  x: 0,

  draw: function () {
    ctx.drawImage(this.img, this.x, 0, 746, 480);
  },
};

//teste

// Timer

/* let startMinutes = 2;
let time = (startMinutes * 60);


let theClock = document.getElementById("clock");

function updateTime() {
  let minutes = Math.floor(time / 60);
  let seconds = time % 60;

  seconds = seconds < 10 ? "0" + seconds : seconds;

  theClock.innerHTML = `${minutes}:${seconds}`;

  time--;

  console.log(time)

  if(time===1){
    clearInterval()
  }
  
} */

window.onload = function () {
  document.getElementById("btnStart").onclick = function () {
    document.getElementById("btnStart").disabled = true;
    startGame();
  };
};

//main function

function startGame() {
  img.onload = startGame;

  /* let theTimer = setInterval(updateTime,50) */

  setInterval(() => {
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    backgroundImage.draw();
    trashAppears();
    fishAppears();
  }, 20);
}

// adding the trash

let theTrash = [];
let frames = 0;

let trashIds = 1;

class Trash {
  constructor(argX, argY, argWidth, argHeight, argColor, argSpeed, argID) {
    this.x = argX;
    this.y = argY;
    this.width = argWidth;
    this.height = argHeight;
    this.color = argColor;
    this.speed = argSpeed;
    this.id = argID;
  }

  move() {
    this.x += this.speed;
  }

  draw() {
    this.move(),
      (ctx.fillStyle = this.color),
      ctx.fillRect(this.x, this.y, this.width, this.height);
      
  }
}

function trashAppears() {
  theTrash.forEach((trash) => {
    trash.draw();
  });
  const randomX = randomIntFromInterval(10, 60);
  const trashPositionX = canvas.width + randomX;
  if (frames % 100 === 0) {
    const newT = randomIntFromInterval(40, 400);
    theTrash.push(new Trash(trashPositionX, newT, 30, 30, "red", -1, trashIds));
    trashIds++;
  }
  
}


//adding the fish

let theFish = [];

let theFishIds = 1;

class Fish {
  constructor(argX, argY, argWidth, argHeight, argColor, argSpeed, argID,argFishWidth, argFishHeight) {
    this.x = argX;
    this.y = argY;
    this.width = argWidth;
    this.height = argHeight;
    this.color = argColor;
    this.speed = argSpeed;
    this.id = argID;
    this.fishImgWidth = 498;
    this.fishImgHeight = 327

  }

  move() {
    this.x += this.speed;
  }

  draw() {
    this.move(),
      (ctx.fillStyle = this.color),
      //ctx.fillRect(this.x, this.y, this.width, this.height)
      ctx.drawImage(imageTrash,0,0,this.fishImgWidth,this.fishImgHeight,this.x,this.y,this.width, this.height);
  }
}


function fishAppears() {
  theFish.forEach((fish) => {
    fish.draw();
  });
  const randomX = randomIntFromInterval(10, 60);
  const fishPositionX = canvas.width + randomX;
  frames++;
  if (frames % 100 === 0) {
    const newY = randomIntFromInterval(40, 400);
    theFish.push(
      new Fish(fishPositionX, newY, 40, 40, "green", -2, theFishIds)
    );
    theFishIds++;
  }
}

//that random trick

function randomIntFromInterval(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

// clicking things on canvas

canvas.addEventListener("click", (event) => {
  const x = event.pageX - canvasLeft;
  const y = event.pageY - canvasTop;

  theFish.forEach((element) => {
    if (
      y > element.y &&
      y < element.y + element.height &&
      x > element.x &&
      x < element.x + element.width
    ) {
      theFish = theFish.filter((fish) => {
        return fish.id !== element.id;
      });
      console.log("buuhhhhh");
      score = score - 30;
      theScore.innerHTML = score;
    }
  });

  theTrash.forEach((element) => {
    if (
      y > element.y &&
      y < element.y + element.height &&
      x > element.x &&
      x < element.x + element.width
    ) {
      theTrash = theTrash.filter((trash) => {
        return trash.id !== element.id;
      });

      score = score + 100;
      theScore.innerHTML = score;
    }
  });
});

// difficulty
