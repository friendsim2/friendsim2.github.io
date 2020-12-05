// Variables
var gameWindow = document.getElementById("gameWindow");
var windowWidth = 1280;
var windowHeight = 720;

// Functions used for the game
// The following keeps everything the correct size.
function setDimensions(width, height){
  gameWindow.style.width = width;
  gameWindow.style.height = height;
  document.getElementById("dialogueText").style.fontSize = height*(34/1080);
}

// Game time
function game() {
  // Plugs in the syntax which keeps everything the correct size.
  windowWidth = window.innerWidth;
  windowHeight = window.innerHeight;
  if (windowWidth/16 > windowHeight/9){
    setDimensions(windowHeight*(16/9), windowHeight);
  } else {
    setDimensions(windowWidth, windowWidth*(9/16));
  }
  
  
  
  // These requestAnimationFrames start the game and keep it going.
requestAnimationFrame(game);
}
requestAnimationFrame(game);
