// Variables
var windowWidth = 1280;
var windowHeight = 720;
var textboxPart = document.getElementById("tetbox").getElementById("borderTop");

// Functions used for the game
// The following keeps everything the correct size.
function setDimensions(width, height){
  document.getElementById("gameWindow").style.width = width;
  document.getElementById("gameWindow").style.height = height;
  textboxPart = document.getElementById("tetbox").childNodes;
  textboxPart.style.width = 0px;
  textboxPart.style.borderLeft = 25px solid transparent;
  textboxPart.style.borderRight = 25px solid transparent;
  document.getElementById("borderTop").borderBottom: 50px solid #555;
  document.getElementById("borderBottom").borderTop: 50px solid #555;
  
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
