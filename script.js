// Variables
var windowWidth = 1280;
var windowHeight = 720;
var width;
var height;
var part = document.getElementById("tetbox").getElementById("borderTop").style



// Game time
function game() {
  // Keeps everything the correct size.
  windowWidth = window.innerWidth;
  windowHeight = window.innerHeight;
  if (windowWidth/16 > windowHeight/9){
    width = windowHeight*(16/9);
    alert(width)
    height = windowHeight;
  } else {
    width = windowWidth;
    height = windowWidth*(9/16);
  }
  document.getElementById("gameWindow").style.width = width;
  document.getElementById("gameWindow").style.height = height;
  
  
  
  // These requestAnimationFrames start the game and keep it going.
requestAnimationFrame(game);
}
requestAnimationFrame(game);
