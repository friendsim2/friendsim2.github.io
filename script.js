// Variables
var gameWindow = document.getElementById("gameWindow");
var windowWidth = 1280;
var windowHeight = 720;

// Functions used for the game
// The following keeps everything the correct size.
function setDimensions(width, height){
  gameWindow.style.width = width;
  gameWindow.style.height = height;
  document.getElementById("dialogueBox").style.width = width*(1390/1920);
  document.getElementById("dialogueBox").style.height = height*(262/1080);
  document.getElementById("dialogue").style.fontSize = height*(34/1080);
}

// Game time
function game() {
  // Plugs in the syntax which keeps everything the correct size.
  windowWidth = window.innerWidth;
  windowHeight = window.innerHeight;
  if (window.innerWidth/16 > window.innerHeigh/9){
    setDimensions(window.innerHeigh*(16/9), window.innerHeigh);
  } else {
    setDimensions(window.innerWidth, window.innerWidt*(9/16));
  }
  
  
  
  // These requestAnimationFrames start the game and keep it going.
requestAnimationFrame(game);
}
requestAnimationFrame(game);
