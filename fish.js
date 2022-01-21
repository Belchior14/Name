const imageFish1 = new Image();
imageFish1.src = "/images/cartoon_fish_06_yellow_swim.png";

const imageFish2 = new Image();
imageFish2.src = "/images/cartoon_fish_06_blue_swim.png";

//adding the fish

let theFish = [];

let theFishIds = 1;

class Fish {
  constructor(argX, argY, argWidth, argHeight, argID) {
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
    if (time <= 150 && time >= 126) {
      this.speed = -0.9;
    }
    if (time <= 125 && time >= 100) {
      this.speed = -1.4;
    }
    if (time <= 99 && time >= 60) {
      this.speed = -2.15;
    }
    if (time <= 59 && time >= 40) {
      this.speed = -3.15;
    }
    if (time <= 39 && time >= 15) {
      this.speed = -3.9;
    }
    if (time <= 14 && time >= 1) {
      this.speed = -4.4;
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

  if (frames % 100 === 0 && time <= 150 && time >= 126) {
    const newY = randomIntFromInterval(40, 400);
    theFish.push(new Fish(fishPositionX, newY, 50, 50, theFishIds));

    theFishIds++;
  }
  if (frames % 50 === 0 && time <= 125 && time > 0) {
    const newY = randomIntFromInterval(40, 400);
    theFish.push(new Fish(fishPositionX, newY, 50, 50, theFishIds));

    theFishIds++;
  }
}

// adding the Fish2

let theFish2 = [];

let theFishIds2 = 1;

class Fish2 {
  constructor(argX, argY, argWidth, argHeight, argID) {
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
    if (time <= 150 && time >= 126) {
      this.speed = -0.8;
    }
    if (time <= 125 && time >= 100) {
      this.speed = -1.3;
    }
    if (time <= 99 && time >= 60) {
      this.speed = -2.05;
    }
    if (time <= 59 && time >= 40) {
      this.speed = -3.05;
    }
    if (time <= 39 && time >= 15) {
      this.speed = -3.8;
    }
    if (time <= 14 && time >= 1) {
      this.speed = -4.3;
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
        imageFish2,
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

function fishAppears2() {
  theFish2.forEach((fish2) => {
    fish2.draw();
  });
  const randomX = randomIntFromInterval(10, 60);
  const fishPositionX = canvas.width + randomX;

  if (frames % 100 === 0 && time <= 150 && time >= 126) {
    const newY = randomIntFromInterval(40, 400);
    theFish2.push(new Fish2(fishPositionX, newY, 50, 50, theFishIds2));
    theFishIds2++;
  }
  if (frames % 100 === 0 && time <= 125 && time > 0) {
    const newY = randomIntFromInterval(40, 400);
    theFish2.push(new Fish2(fishPositionX, newY, 50, 50, theFishIds2));
    theFishIds2++;
  }
}

//that random trick

function randomIntFromInterval(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}
