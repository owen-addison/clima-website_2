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

// Get header button elements
const homeButton = document.getElementById("home-button");
const aboutButton = document.getElementById("about-button");
const contactButton = document.getElementById("contact-button");

// Add event listeners
homeButton.addEventListener("click", (e) => {
  console.log("home", e.target);
});

aboutButton.addEventListener("click", (e) => {
  console.log("about", e.target);
});

contactButton.addEventListener("click", (e) => {
  console.log("contact", e.target);
});

/*
_________________________________________________________________________
TO DO: IMPROVEMENTS OR BUGS TO FIX
_________________________________________________________________________
*/
/*
  - Allow canvas to resize properly with window
    - Possibly stretch the existing sketch as opposed to re-rendering each time
  - Build modules for loading up about and contact pages
  - Convert existing html to a module for loading the home page
  - Add functionality for switching between pages with header buttons
  - Use promises to load page elements asynchronously (canvas first)
  - Look into more efficient ways to render background
    - Possibly render a really large sketch using canvas-sketch as an png and load that instead
*/
