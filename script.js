// These make sure the canvas looks right
var gameWindow = document.getElementById("gameWindow");
var w = 1280;
var h = 720;
var gameW = 0;
var gameH = 0;

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
  gameW = gameWindow.style.width;
  hameh = gameWindow.style.height;
  document.getElementById("dialogueBox").style.width = gameW*(1390/1920);
  document.getElementById("dialogueBox").style.height = gameH*(262/1080);
  document.getElementById("dialogue").style.fontSize = h*(38/1080);
  
  
  
  // These requestAnimationFrames start the game and keep it going.
requestAnimationFrame(game);
}
requestAnimationFrame(game);
