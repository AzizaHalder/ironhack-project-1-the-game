/*
TODO
    - create 'tourist' character
    - give tourist jump functionality 
    - create 'rat' obstacle
    - create 'animation' of rat obstacles 
    - game over 
    - score 
    - background last
    - music 
*/

class Game {
  constructor() {
    this.ctx = null;
    this.background = {
      src: null,
      x: 0,
      speed: -1,
    };
    this.player = null;
    this.ratsArray = [];
    // obstacle, do I want it to start straight away?
    // this.obstacle = null;
  }

  moveBackground() {
    this.background.x += this.background.speed;
    this.background.x %= 1000;
  }

  drawBackground() {
    this.ctx.drawImage(this.background.src, this.background.x, 0, 1000, 500);
    if (this.background.speed < 0) {
      this.ctx.drawImage(
        this.background.src,
        this.background.x + 1000,
        0,
        1000,
        500
      );
    }
    // else {
    //   this.ctx.drawImage(
    //     this.background.src,
    //     this.background.x - 1000,
    //     0,
    //     1000,
    //     500
    //   );
    // }
  }

  startGame() {
    // creating context
    const canvas = document.getElementById("canvas");
    // saving context
    this.ctx = canvas.getContext("2d");

    // width, height, posx, posy
    const tourist = new Tourist(200, 300, 0, 200);
    // const rat = new Rat(80, 90, 0, 400)

    this.player = tourist;

    // creating instance of the object image
    const background = new Image();

    background.src = "./images/park-cityscape.jpg";

    background.onload = () => {
      this.background.src = background;
      this.updateCanvas();
      this.drawPlayer();
    };
  }

  // this = speed etc
  // moveBackground() {
  //   (this.x = 0), (this.speed = -1), (this.bg = this.x += this.speed);
  //   this.x %= this.ctx.canvas.width;
  // }

  // drawBackground() {
  //   this.ctx.drawImage(this.bg, this.x, 0);
  //   if (this.speed < 0) {
  //     this.ctx.drawImage(this.bg, this.x + this.ctx.canvas.width, 0);
  //   } else {
  //     this.ctx.drawImage(this.bg, this.x - this.bg.width, 0);
  //   }
  // }

  drawPlayer() {
    this.ctx.drawImage(
      this.player.img,
      this.player.posX,
      this.player.posY,
      // defining jumpX?
      // this.player.jumpX,
      this.player.width,
      this.player.height
    );

    // draw rat obstacle
  }

  updateCanvas() {
    // should this be canvas.width?
    this.ctx.drawImage(this.background.src, 0, 0, 1000, 500);
    // update player position before drawing
    this.player.newPos();
    // exectute
    setInterval(() => {
      this.moveBackground();
      this.ctx.clearRect(0, 0, 1000, 500);
      this.drawBackground();
      this.ctx.drawImage(
        this.player.img,
        0,
        this.player.posY,
        this.player.width,
        this.player.height
        // this.player.jumpX
        // drawbAckground()

        // if doens;t work try request animation
      );
    }, 20);

    // obstacles
    // updateObstacles();
  }
}

class Tourist {
  constructor(width, height, posX, posY, jumpX) {
    this.width = width;
    this.height = height;
    this.posX = posX;
    this.posY = posY;
    // add property for speed/jump?
    this.jumpX = jumpX;

    this.img = this.createTourist();
  }

  createTourist() {
    const tourist = new Image();

    tourist.src = "./images/tourist.png";

    return tourist;
  }

  //   moveup,
  jumpUp() {
    // should be jump property
    // this.jumpX = += 40
    this.jumpX += 100;
    console.log(this.jumpX);
  }

  // update position of player
  newPos() {
    this.posX += this.jumpX;
  }

  jumpDown() {
    this.posY = 0;
    // if (this.posX == 0) return this.posY;
  }

  touristMove() {
    document.addEventListener("keydown", (e) => {
      if (e.key == " ") {
        console.log(e);
        return this.jumpUp();
      }
    });
    // what to do when player stops pressing spacebar
    document.addEventListener("keyup", (e) => {
      // return (this.jumpX = 0);
      if (e.key == "keyup") return this.jumpDown;
    });
  }
}

// class Rat extends Tourist {
//   // Do I need posX and POsY? probably not... as obstacle will have it's own x, y
//   constructor(width, height, posX, posY) {
//     super(width, height, posX, posY);
//   }

//   createRat() {
//     const rat = new Image();
//     rat.src = "./images/rat.jpg";
//     return rat;
//   }
//  moveleftRat ()
// }

// newRat at different

// event listener to check for 'keydown' and 'key up'

window.onload = () => {
  document.getElementById("start-button").onclick = () => {
    const game = new Game();
    game.startGame();
    document.addEventListener("keydown", (e) => {
      game.player.touristMove(e.keyCode);
    });
  };
};

// document.addEventListener("keydown", (event) => {
//   console.log(event.key);
//   console.log(event.code);
// });
