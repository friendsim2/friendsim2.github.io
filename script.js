// These make sure the canvas looks right
var canvas = document.getElementById("theCanvas");
var w = 1280;
var h = 720;

// Game time
function game() {
  // The following makes the canvas fit the screen while keeping aspect ratio.
  w = window.innerWidth;
  h = window.innerHeight;
  if (w/16 > h/9){
    canvas.style.height = h;
    canvas.style.width = h*(16/9);
  } else {
    canvas.style.width = w;
    canvas.style.height = w*(9/16);
  }
  
  
  
  
  // These requestAnimationFrames start the game and keep it going.
requestAnimationFrame(game);
}
requestAnimationFrame(game);
