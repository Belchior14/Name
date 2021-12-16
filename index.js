const img = new Image();
img.src = './imgfundo.jpg';

const canvas = document.querySelector('.myCanvas');
const ctx = canvas.getContext('2d');

//img background

const backgroundImage = {
    img: img,
    x:0,
    speed: -1,

    move: function(){
        this.x += this.speed,
        this.x %= canvas.width 
    },

    draw: function (){
        this.move()
        ctx.drawImage(this.img,this.x,0,746,480)
        if (this.speed < 0) {
            ctx.drawImage(this.img, this.x + canvas.width,0,746,480)
          } else {
            ctx.drawImage(this.img, this.x - this.img.width,0,746,480);
          }

    },
}

//teste

// Timer 

const startMinutes = 2;
let time = (startMinutes * 60)-1;

const theClock = document.getElementById('clock');

function updateTime () {

    const minutes = Math.floor(time/60);
    let seconds = time % 60;

    seconds = seconds < 10 ? '0' + seconds : seconds;

    theClock.innerHTML = `${minutes}:${seconds}`;

    time --

   
}











window.onload = function () {
    document.getElementById("btnStart").onclick = function () {
      document.getElementById("btnStart").disabled = true;
      startGame();
    };
  };



//main function

function startGame(){
    img.onload = startGame
    setInterval(updateTime,10)
    setInterval(() =>{
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        backgroundImage.draw();
        trashAppears();
        fishAppears();
        
    },20)
}






// adding the trash

const theTrash = []
let frames = 0


class Trash{
    constructor(argX, argY, argWidth,argHeight,argColor,argSpeed){
        this.x = argX,
        this.y = argY,
        this.width = argWidth,
        this.height = argHeight,
        this.color = argColor
        this.speed = argSpeed
    }

    move(){
        this.x += this.speed
    }

    draw(){
        this.move(),
        ctx.fillStyle = this.color,
        ctx.fillRect(this.x, this.y, this.width, this.height)
    }


}

function trashAppears (){
    theTrash.forEach((trash) => {
    trash.draw()
    })
    frames++;
    if(frames % 100 === 0){
        const newY = randomIntFromInterval(40,400);
        theTrash.push(
        new Trash(canvas.width,newY,20,20,'red',-1),
     )
       
    }
}


//adding the fish

const theFish = []



class Fish{
    constructor(argX, argY, argWidth,argHeight,argColor,argSpeed){
        this.x = argX,
        this.y = argY,
        this.width = argWidth,
        this.height = argHeight,
        this.color = argColor
        this.speed = argSpeed
    }

    move(){
        this.x += this.speed
    }

    draw(){
        this.move(),
        ctx.fillStyle = this.color,
        ctx.fillRect(this.x, this.y, this.width, this.height)
    }


}

function fishAppears (){
    theFish.forEach((fish) => {
    fish.draw()
    })
    frames++;
    if(frames % 100 === 0){
        const newY = randomIntFromInterval(40,400);
        theFish.push(
        new Fish(canvas.width,newY,20,20,'green',-1),
            
        )      

    
    }
}

//that random trick

function randomIntFromInterval(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
  }


