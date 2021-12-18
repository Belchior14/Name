const img = new Image();
img.src = "./imgfundo.jpg";

const canvas = document.querySelector(".myCanvas");
const canvasLeft = canvas.offsetLeft;
const canvasTop = canvas.offsetTop;
const ctx = canvas.getContext("2d");

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

/* const startMinutes = 2;
let time = (startMinutes * 60)-1;

const theClock = document.getElementById('clock');

function updateTime () {

    const minutes = Math.floor(time/60);
    let seconds = time % 60;

    seconds = seconds < 10 ? '0' + seconds : seconds;

    theClock.innerHTML = `${minutes}:${seconds}`;

    time --

   
} */
0;

window.onload = function () {
  document.getElementById("btnStart").onclick = function () {
    document.getElementById("btnStart").disabled = true;
    startGame();
  };
};

//main function

function startGame() {
  img.onload = startGame;
  /* setInterval(updateTime,1000) */
  setInterval(() => {
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    backgroundImage.draw();
    trashAppears();
    fishAppears();

    //click();
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

  if (frames % 100 === 0) {
    const newT = randomIntFromInterval(40, 400);
    theTrash.push(new Trash(canvas.width, newT, 20, 20, "red", -1, trashIds));
    trashIds++;
  }
}

//adding the fish

let theFish = [];

class Fish {
  constructor(argX, argY, argWidth, argHeight, argColor, argSpeed) {
    this.x = argX;
    this.y = argY;
    this.width = argWidth;
    this.height = argHeight;
    this.color = argColor;
    this.speed = argSpeed;
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

function fishAppears() {
  theFish.forEach((fish) => {
    fish.draw();
  });
  frames++;
  if (frames % 100 === 0) {
    const newY = randomIntFromInterval(40, 400);
    theFish.push(new Fish(canvas.width, newY, 20, 20, "green", -1));
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
      console.log("buuhhhhh");
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
      console.log(element);
    }
  });
});

/* let indFish = 0 */
/*   element.indFish = indFish //0 //1 */
/* indFish++  */
/*  elementes[element.indFish] */
/*  let berlchior ={firstName:`'Belchior`}
    console.log(berlchior) ==> {firstName:`'Belchior`}
    berlchior.city = 'Ericeira'
    console.log(berlchior) ==> {firstName:`'Belchior`, city:'Ericeira',} */

/*  let userClickeelement = [0]
    const person = [
        {name: 'belchior',
         indFish:0   },
         {name: 'alvaro',
         indFish:1,
        }
    ]
person.forEach(element => {

   person.delete(person[element.indFish])


})  */
