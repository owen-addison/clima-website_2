import "./style.css";
import { random, math } from "canvas-sketch-util";

const c = document.getElementById("myCanvas");
const ctx = c.getContext("2d");

let n;

c.width = window.innerWidth;
c.height = window.innerHeight;

// Below is too intensive on the browser when animated
for (let i = 0; i < c.width; i++) {
  for (let j = 0; j < c.height; j++) {
    n = random.noise2D(i * 0.01, j * 0.8, 0.05, 1);
    n *= 1 - random.noise2D(i * 0.9, j * 0.1, 0.05, 1);
    n *= random.noise2D(i, j, 0.6, 1);

    ctx.fillStyle = `rgba(205, 208, 189, ${n})`;
    // ctx.fillStyle = "rgba(205, 208, 189, 1)";
    ctx.fillRect(i, j, 1, 1);
  }
}
