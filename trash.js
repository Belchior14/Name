const imageTrash = new Image();
imageTrash.src = "/images/bottle.png";

const imageTrash2 = new Image();
imageTrash2.src = "/images/medical_mask_PNG25.png";

let theTrash = [];
let frames = 0;

let trashIds = 1;

class Trash {
  constructor(argX, argY, argWidth, argHeight, argID) {
    this.x = argX;
    this.y = argY;
    this.width = argWidth;
    this.height = argHeight;
    this.speed = -1;
    this.id = argID;
  }

  move() {
    this.x += this.speed;
    if (time <= 150 && time >= 126) {
      this.speed = -1;
    }
    if (time <= 125 && time >= 100) {
      this.speed = -1.6;
    }
    if (time <= 99 && time >= 60) {
      this.speed = -2.35;
    }
    if (time <= 59 && time >= 40) {
      this.speed = -3.35;
    }
    if (time <= 39 && time >= 15) {
      this.speed = -4.1;
    }
    if (time <= 14 && time >= 1) {
      this.speed = -4.6;
    }
  }

  draw() {
    this.move(),
      ctx.drawImage(imageTrash, this.x, this.y, this.width, this.height);
  }
}

function trashAppears() {
  theTrash.forEach((trash) => {
    trash.draw();
  });
  const randomX = randomIntFromInterval(10, 60);
  const trashPositionX = canvas.width + randomX;
  if (frames % 100 === 0 && time <= 150 && time >= 126) {
    const newT = randomIntFromInterval(40, 400);
    theTrash.push(new Trash(trashPositionX, newT, 50, 50, trashIds));
    trashIds++;
  }

  if (frames % 50 === 0 && time <= 125 && time > 0) {
    const newT = randomIntFromInterval(40, 400);
    theTrash.push(new Trash(trashPositionX, newT, 50, 50, trashIds));
    trashIds++;
  }
}

// adding the second trash

let theTrash2 = [];

let trashIds2 = 1;

class Trash2 {
  constructor(argX, argY, argWidth, argHeight, argID) {
    this.x = argX;
    this.y = argY;
    this.width = argWidth;
    this.height = argHeight;
    this.speed = -1;
    this.id = argID;
  }

  move() {
    this.x += this.speed;
    if (time <= 150 && time >= 126) {
      this.speed = -1.1;
    }
    if (time <= 125 && time >= 100) {
      this.speed = -1.7;
    }
    if (time <= 99 && time >= 60) {
      this.speed = -2.45;
    }
    if (time <= 59 && time >= 40) {
      this.speed = -3.45;
    }
    if (time <= 39 && time >= 15) {
      this.speed = -4.2;
    }
    if (time <= 14 && time >= 1) {
      this.speed = -4.7;
    }
  }

  draw() {
    this.move(),
      ctx.drawImage(imageTrash2, this.x, this.y, this.width, this.height);
  }
}

function trashAppears2() {
  theTrash2.forEach((trash) => {
    trash.draw();
  });
  const randomX = randomIntFromInterval(10, 60);
  const trashPositionX = canvas.width + randomX;
  if (frames % 100 === 0 && time <= 150 && time >= 126) {
    const newT = randomIntFromInterval(40, 400);
    theTrash2.push(new Trash2(trashPositionX, newT, 50, 50, trashIds2));
    trashIds2++;
  }
  if (frames % 50 === 0 && time <= 125 && time > 0) {
    const newT = randomIntFromInterval(40, 400);
    theTrash2.push(new Trash2(trashPositionX, newT, 50, 50, trashIds2));
    trashIds2++;
  }
}