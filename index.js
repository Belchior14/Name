const img = new Image();
img.src = "./imgfundo.jpg";

const canvas = document.querySelector(".myCanvas");
const canvasLeft = canvas.offsetLeft;
const canvasTop = canvas.offsetTop;
const ctx = canvas.getContext("2d");


const scoreAndTime = document.querySelector(".scoreAndTime");
//scoreAndTime.style.display = "none"

const imageFish1 = new Image();
imageFish1.src = "./cartoon_fish_06_yellow_swim.png";

const imageTrash = new Image();
imageTrash.src ="./cartoon_fish_06_green_swim.png"

const imageTrash2 = new Image();
imageTrash2.src = "./cartoon_fish_06_blue_swim.png"



var timer ="02:30"
var score = 0;



//img background

const backgroundImage = {
  img: img,
  x: 0,

  draw: function () {
    ctx.drawImage(this.img, this.x, 0, 746, 480);
    ctx.fillStyle = "black"
    ctx.font = '25px sans-serif'
    ctx.fillText(`Score: ${score}`,25,50)
    ctx.fillText(`${timer}`,650,50)
   
  },
};

// Timer



let time = 150;

function realTime(second) {
  const min = Math.floor(second / 60);
  const sec = Math.floor(second % 60);
  timer = `${min < 10 ? "0" : ""}${min}:${
    sec < 10 ? "0" : ""
  }${sec}`;
}

// timer done

window.onload = function () {
  document.getElementById("btnStart").onclick = function () {
    document.getElementById("btnStart").disabled = true;
    startGame();
  };
};

//main function

function startGame() {
  img.onload = startGame;

  document.getElementById("btnStart").style.display = "none";
 


  const timesUp = setInterval(() => {
    time--;
    realTime(time);

    if (time <= 0 || time < 1) {
      clearInterval(timesUp);
      timer = "00:00";
    }
  }, 1000);

  setInterval(() => {
    ctx.clearRect(0, 0, canvas.width, canvas.height);



    backgroundImage.draw();
    trashAppears();
    fishAppears();
    trashAppears2()
  }, 20);

}

// adding the trash

let theTrash = [];
let frames = 0;

let trashIds = 1;

class Trash {
  constructor(argX, argY, argWidth, argHeight, argSpeed, argID) {
    this.x = argX;
    this.y = argY;
    this.width = argWidth;
    this.height = argHeight;
    this.speed = -1;
    this.id = argID;
    this.frame = 0;
    this.frameX = 0;
    this.frameY = 0;

    this.fishImgWidth = 498;
    this.fishImgHeight = 327;
  }

  move() {
    this.x += this.speed;
    if (time <= 125 && time >= 100) {
      this.speed = -1.6;
    }
    if ((time <= 99) & (time >= 60)) {
      this.speed = -2.35;
    }
    if ((time <= 59) & (time >= 40)) {
      this.speed = -3.35;
    }
    if ((time <= 39) & (time >= 15)) {
      this.speed = -4.1;
    }
    if ((time <= 14) & (time >= 1)) {
      this.speed = -4.6;
    }
    if (time === 0) {
      this.x = 1000;
    }
    if (frames % 5 === 0) {
      this.frame++;
      if (this.frame >= 12) this.frame = 0;
      if (this.frame === 3 || this.frame === 7 || this.frame === 11) {
        this.frameX = 0;
      } else {
        this.frameX++;
      }
      if (this.frame < 3) this.frameY = 0;
      else if (this.frame < 7) this.frameY = 1;
      else if (this.frame < 11) this.frameY = 2;
      else this.frameY = 0;
    }
  }

  draw() {
    this.move(),
    console.log(theTrash)
      ctx.drawImage(
        imageTrash,
        this.frameX * this.fishImgWidth,
        this.frameY * this.fishImgHeight,
        this.fishImgWidth,
        this.fishImgHeight,
        this.x,
        this.y,
        this.width,
        this.height
      );
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
    theTrash.push(
      new Trash(trashPositionX, newT, 50, 50, this.speed, trashIds)
    );
    trashIds++;
  }
}

// adding the second trash

let theTrash2 = [];


let trashIds2 = 1;

class Trash2 {
  constructor(argX, argY, argWidth, argHeight, argSpeed, argID) {
    this.x = argX;
    this.y = argY;
    this.width = argWidth;
    this.height = argHeight;
    this.speed = -1.1;
    this.id = argID;
    this.frame = 0;
    this.frameX = 0;
    this.frameY = 0;

    this.fishImgWidth = 498;
    this.fishImgHeight = 327;
  }

  move() {
    this.x += this.speed;
    if (time <= 125 && time >= 100) {
      this.speed = -1.7;
    }
    if ((time <= 99) & (time >= 60)) {
      this.speed = -2.45;
    }
    if ((time <= 59) & (time >= 40)) {
      this.speed = -3.45;
    }
    if ((time <= 39) & (time >= 15)) {
      this.speed = -4.2;
    }
    if ((time <= 14) & (time >= 1)) {
      this.speed = -4.7;
    }
    if (time === 0) {
      this.x = 1000;
    }
    if (frames % 5 === 0) {
      this.frame++;
      if (this.frame >= 12) this.frame = 0;
      if (this.frame === 3 || this.frame === 7 || this.frame === 11) {
        this.frameX = 0;
      } else {
        this.frameX++;
      }
      if (this.frame < 3) this.frameY = 0;
      else if (this.frame < 7) this.frameY = 1;
      else if (this.frame < 11) this.frameY = 2;
      else this.frameY = 0;
    }
  }

  draw() {
    this.move(),
    console.log(theTrash2)
      ctx.drawImage(
        imageTrash2,
        this.frameX * this.fishImgWidth,
        this.frameY * this.fishImgHeight,
        this.fishImgWidth,
        this.fishImgHeight,
        this.x,
        this.y,
        this.width,
        this.height
      );
  }
}

function trashAppears2() {
  theTrash2.forEach((trash) => {
    trash.draw();
  });
  const randomX = randomIntFromInterval(10, 60);
  const trashPositionX = canvas.width + randomX;
  if (frames % 100 === 0) {
    const newT = randomIntFromInterval(40, 400);
    theTrash2.push(
      new Trash2(trashPositionX, newT, 50, 50, this.speed, trashIds2)
    );
    trashIds2++;
  }
}



//adding the fish

let theFish = [];

let theFishIds = 1;

class Fish {
  constructor(
    argX,
    argY,
    argWidth,
    argHeight,
    argSpeed,
    argID,
    argFishWidth,
    argFrame,
    argFrameX,
    argFrameY,
    argFishHeight
  ) {
    this.x = argX;
    this.y = argY;
    this.width = argWidth;
    this.height = argHeight;
    this.speed = -0.9;
    this.id = argID;
    this.frame = 0;
    this.frameX = 0;
    this.frameY = 0;

    this.fishImgWidth = 498;
    this.fishImgHeight = 327;
  }

  move() {
    this.x += this.speed;
    if (time <= 125 && time >= 100) {
      this.speed = -1.4;
    }
    if ((time <= 99) & (time >= 60)) {
      this.speed = -2.15;
    }
    if ((time <= 59) & (time >= 40)) {
      this.speed = -3.15;
    }
    if ((time <= 39) & (time >= 15)) {
      this.speed = -3.9;
    }
    if ((time <= 14) & (time >= 1)) {
      this.speed = -4.4;
    }
    if (time === 0) {
      this.x = 1000;
    }
    if (frames % 5 === 0) {
      this.frame++;
      if (this.frame >= 12) this.frame = 0;
      if (this.frame === 3 || this.frame === 7 || this.frame === 11) {
        this.frameX = 0;
      } else {
        this.frameX++;
      }
      if (this.frame < 3) this.frameY = 0;
      else if (this.frame < 7) this.frameY = 1;
      else if (this.frame < 11) this.frameY = 2;
      else this.frameY = 0;
    }
  }

  draw() {
    this.move(),
      ctx.drawImage(
        imageFish1,
        this.frameX * this.fishImgWidth,
        this.frameY * this.fishImgHeight,
        this.fishImgWidth,
        this.fishImgHeight,
        this.x,
        this.y,
        this.width,
        this.height
      );
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
    theFish.push(new Fish(fishPositionX, newY, 50, 50, this.speed, theFishIds));

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
  
      score = score - 30;
    
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
    
    }
  });
  theTrash2.forEach((element) => {
    if (
      y > element.y &&
      y < element.y + element.height &&
      x > element.x &&
      x < element.x + element.width
    ) {
      theTrash2 = theTrash2.filter((trash) => {
        return trash.id !== element.id;
      });

      score = score + 100;
     
    }
  });
});