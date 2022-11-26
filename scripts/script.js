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
    this.background = null;
    this.player = null;
  }

  startGame() {
    // creating context
    const canvas = document.getElementById("canvas");
    // saving context
    this.ctx = canvas.getContext("2d");

    // width, height, posx, posy
    const tourist = new Tourist(200, 300, 0, 200);

    this.player = tourist;

    // creating instance of the object image
    const background = new Image();

    background.src = "./images/park-cityscape.jpg";

    background.onload = () => {
      this.bg = background;
      this.updateCanvas();
      this.drawPlayer();
    };
  }

  drawPlayer() {
    this.ctx.drawImage(
      this.player.img,
      this.player.posX,
      this.player.posY,
      this.player.width,
      this.player.height
    );
  }

  updateCanvas() {
    // should this be canvas.width?
    this.ctx.clearRect(0, 0, 1000, 500);
    this.ctx.drawImage(this.bg, 0, 0, 1000, 500);
    // exectute
    setInterval(() => {
      this.ctx.drawImage(
        this.player.img,
        0,
        this.player.posY,
        this.player.width,
        this.player.height
      );
    }, 1000);
  }
}

class Tourist {
  constructor(width, height, posX, posY) {
    this.width = width;
    this.height = height;
    this.posX = posX;
    this.posY = posY;
    // add one more properties for speed/jump?
    // this.jumpX = jumpX

    this.img = this.createTourist();
  }

  createTourist() {
    const tourist = new Image();

    tourist.src = "./images/tourist.png";

    return tourist;
  }

  //   moveup
  jumpUp() {
    // should be jump property
    // this.jumpX = += 40
    this.posY += 40;
  }

  jumpDown() {
    if (this.posX == 0) return this.posY;
  }

  touristMove() {
    document.addEventListener("keydown", (e) => {
      if (e.key == " ") {
        console.log(e);
        console.log("spacebar");
        return this.jumpUp();
      }
    });
  }
}

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
