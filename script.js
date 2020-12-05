// These make sure the canvas looks right
var gameWindow = document.getElementById("gameWindow");
var w = 1280;
var h = 720;
var dialogue = document.getElementById("dialogue");

// Game time
function game() {
  // The following sets of lines keep everything the correct size or aspect ratio.
  w = window.innerWidth;
  h = window.innerHeight;
  if (w/16 > h/9){
    gameWindow.style.height = h;
    gameWindow.style.width = h*(16/9);
  } else {
    gameWindow.style.width = w;
    gameWindow.style.height = w*(9/16);
  }
  // More aspect ratio stuff
  dialogue.style.fontSize = gameWindow.style.height*(38/1080);
  
  
  
  // These requestAnimationFrames start the game and keep it going.
requestAnimationFrame(game);
}
requestAnimationFrame(game);
