// These make sure the canvas looks right
var gameWindow = document.getElementById("gameWindow");
var w = 1280;
var h = 720;
var gameW = 1;
var gameH = 1;

// Game time
function game() {
  // The following sets of lines keep everything the correct size or aspect ratio.
  w = window.innerWidth;
  h = window.innerHeight;
  if (w/16 > h/9){
    gameWindow.style.height = gameH = h;
    gameWindow.style.width = gameW = h*(16/9);
  } else {
    gameWindow.style.width = gameW = w;
    gameWindow.style.height = gameH = w*(9/16);
  }
  // More aspect ratio stuff
  document.getElementById("dialogueBox").style.width = gameW*(1390/1920);
  document.getElementById("dialogueBox").style.height = gameH*(262/1080);
  document.getElementById("dialogue").style.fontSize = h*(38/1080);
  
  
  
  // These requestAnimationFrames start the game and keep it going.
requestAnimationFrame(game);
}
requestAnimationFrame(game);
