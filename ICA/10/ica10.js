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
  }