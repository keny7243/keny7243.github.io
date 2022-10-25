//https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Objects/Object_building_practice
// setup canvas

const canvas = document.querySelector('canvas');
const ctx = canvas.getContext('2d');

//makes canvas size of window
const width = canvas.width = window.innerWidth;
const height = canvas.height = window.innerHeight;

// function to generate random number

function random(min, max) {
  const num = Math.floor(Math.random() * (max - min + 1)) + min;
  return num;
}

// function to generate random color

function randomRGB() {
  return `rgb(${random(0, 255)},${random(0, 255)},${random(0, 255)})`;
}

class Ball {
    constructor(x, y, velX, velY, color, size) { //vel=how fast the ball moves
      this.x = x;
      this.y = y;
      this.velX = velX;
      this.velY = velY;
      this.color = color;
      this.size = size;
    }

    draw() {
        ctx.beginPath(); //ctx = 2d canvas context
        ctx.fillStyle = this.color;
        ctx.arc(this.x, this.y, this.size, 0, 2 * Math.PI); //generates our ball
        ctx.fill();
      }

      update() {//makes the ball move, accounts for edges of screen
        if ((this.x + this.size) >= width) {
          this.velX = -(this.velX);
        }
      
        if ((this.x - this.size) <= 0) {
          this.velX = -(this.velX);
        }
      
        if ((this.y + this.size) >= height) {
          this.velY = -(this.velY);
        }
      
        if ((this.y - this.size) <= 0) {
          this.velY = -(this.velY);
        }
      
        this.x += this.velX;
        this.y += this.velY;
      }

      collisionDetect() {
        for (const ball of balls) {
          if (this !== ball) { //only runs if it is not seeing if it collided with itself 
            const dx = this.x - ball.x;
            const dy = this.y - ball.y;
            const distance = Math.sqrt(dx * dx + dy * dy);
      
            if (distance < this.size + ball.size) {// if they overlap, change both their colors to a random color
              ball.color = this.color = randomRGB();
            }
          }
        }
      }
  }

  //make a new variable, call it balls, its going to be an array
const balls = [];

//as long as we have less than 25 balls in the array, we're gonna generate a random size and make a new ball
while (balls.length < 25) {
  const size = random(10, 20);
  const ball = new Ball(
    // ball position always drawn at least one ball width
    // away from the edge of the canvas, to avoid drawing errors
    random(0 + size, width - size),
    random(0 + size, height - size),
    //x and y velocity for the two random methods below, generating a random speed between -7 to 7 pixels
    random(-7, 7),
    random(-7, 7),
    randomRGB(),
    size
  );

  balls.push(ball);
}

// function runs forever 
function loop() {
    //draw rectangle that fills canvas context and make it semi-transparent black
    ctx.fillStyle = "rgba(0, 0, 0, 0.25)";
    ctx.fillRect(0, 0, width, height);
  
    //for each ball in that array, we are gonna draw it and update it
    for (const ball of balls) {
      ball.draw();
      ball.update();
      ball.collisionDetect();
    }
  
    requestAnimationFrame(loop);
  }

  //calls first iteration of this
  loop();

  