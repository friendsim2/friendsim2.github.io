// These make sure the canvas looks right
var gameWindow = document.getElementById("gameWindow");
var w = 1280;
var h = 720;

// Game time
function game() {
  // The following makes the game window fit the browser window while keeping aspect ratio.
  w = window.innerWidth;
  h = window.innerHeight;
  if (w/16 > h/9){
    gameWindow.style.height = h;
    gameWindow.style.width = h*(16/9);
  } else {
    gameWindow.style.width = w;
    gameWindow.style.height = w*(9/16);
  }
  
  
  
  
  // These requestAnimationFrames start the game and keep it going.
requestAnimationFrame(game);
}
requestAnimationFrame(game);
