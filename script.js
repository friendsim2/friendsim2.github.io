// Variables
var x, i;
var windowWidth = 1280;
var windowHeight = 720;
var part = document.getElementById("tetbox").getElementById("borderTop").style

// For when you need to change the css of all children
function changeChildren(parentAndChildren, oldStyle, newStyle) {
  x = parentAndChildren;
  for (i = 0; i < x.length; i++) {
    x[i].style.oldStyle = newStyle;
  }
}

// The following keeps everything the correct size.
function setDimensions(width, height){
  document.getElementById("gameWindow").style.width = width;
  document.getElementById("gameWindow").style.height = height;
  changeChildren(getElementById("tetbox"), "div", width, 25px)
  changeChildren(getElementById("tetbox"), "div", width, 25px)
  document.getElementById("borderTop").borderBottom = 50px solid #555;
  document.getElementById("borderBottom").borderTop = 50px solid #555;
  changeChildren(document.getElementById("tetbox").querySelectorAll("div"), width, 25px);
  changeChildren(document.getElementById("tetbox").querySelectorAll("div"), borderLeft, 25px solid transparent);
  changeChildren(document.getElementById("tetbox").querySelectorAll("div"), borderRight, 25px solid transparent);
  
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
