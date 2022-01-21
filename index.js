const img = new Image();
img.src = "images/imgfundo.jpg";

//variables

//declaring variables

const canvas = document.querySelector(".myCanvas");
const canvasLeft = canvas.offsetLeft;
const canvasTop = canvas.offsetTop;
const ctx = canvas.getContext("2d");
const playAgain = document.querySelector("#btnPlayAgain");
const checkHighScore = document.querySelector(".highScore");
checkHighScore.style.visibility = "hidden";

let timer = "02:30";
let score = 0;
let highScore = localStorage.getItem("highestScore") || 0;
checkHighScore.textContent = `High Score: ${highScore}`;

const introduction = document.querySelector(".introduction");
const aquaman = document.querySelector(".aquaman");

const bazinga = new Audio();
bazinga.src = "/sounds/bazinga.swf.mp3";

const success = new Audio();
success.src = "/sounds/great-success-borat.mp3";

const fail = new Audio();
fail.src = "/sounds/Nelson.mp3";

// check the High Score

function highhiestScore() {
  if (score > localStorage.getItem("highestScore")) {
    success.play();
    localStorage.setItem("highestScore", score);
    highScore = score;
    checkHighScore.textContent = `High Score: ${highScore}`;
    alert("Congratulations! This is a new world record!!!");
  }
}

//img background

const backgroundImage = {
  img: img,
  x: 0,

  draw: function () {
    ctx.drawImage(this.img, this.x, 0, 746, 480);
    ctx.fillStyle = "black";
    ctx.font = "25px sans-serif";
    ctx.fillText(`Score: ${score}`, 25, 50);
    ctx.fillText(`${timer}`, 650, 50);
  },
};

// Timer

let time = 150;

function realTime(second) {
  const min = Math.floor(second / 60);
  const sec = Math.floor(second % 60);
  timer = `${min < 10 ? "0" : ""}${min}:${sec < 10 ? "0" : ""}${sec}`;
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
  checkHighScore.style.visibility = "visible";
  introduction.style.visibility = "hidden";
  aquaman.style.visibility = "hidden";

  setInterval(() => {
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    backgroundImage.draw();
    frames++;
    trashAppears();
    fishAppears();
    trashAppears2();
    fishAppears2();
  }, 20);

  let timesUp = setInterval(() => {
    time--;
    realTime(time);

    if (time <= 0 || time < 1) {
      clearInterval(timesUp);
      highhiestScore();
      timer = "00:00";
      playAgain.style.visibility = "visible";
      theFish = [];
      theFish2 = [];
      theTrash = [];
      theTrash2 = [];
    }
  }, 1000);
}

//restart the game

playAgain.onclick = () => {
  playAgain.style.visibility = "hidden";
  score = 0;
  timer = "02:30";
  time = 150;
  frames = 0;

  startGame();
};

// clicking things on canvas

canvas.addEventListener("click", (event) => {
  const x = event.layerX;
  const y = event.layerY;

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

      if (score >= 0) {
        score = score - 30;
      }
      if (score > 1) {
        bazinga.play();
      }
      if (score === 0 || score < 0) {
        gameOver();
      }
    }
  });

  theFish2.forEach((element) => {
    if (
      y > element.y &&
      y < element.y + element.height &&
      x > element.x &&
      x < element.x + element.width
    ) {
      theFish2 = theFish2.filter((fish2) => {
        return fish2.id !== element.id;
      });
      if (score >= 0) {
        score = score - 30;
      }
      if (score > 1) {
        bazinga.play();
      }
      if (score === 0 || score < 0) {
        gameOver();
      }
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

//game over

function gameOver() {
  fail.play();
  timer = "00:00";
  time = 0;
  playAgain.style.visibility = "visible";
  theFish = [];
  theFish2 = [];
  theTrash = [];
  theTrash2 = [];
  alert("Game Over!!! You are not ready to help me! Silly human!");
}
