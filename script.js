// Variables
var windowWidth = 1280;
var windowHeight = 720;
var width;
var height;

function changeChildren(query, cssStyle, newStyle) {
  let x = document.querySelector(query).children;
  for (let i = 0; i < x.length; i++) {
    x[i].style[cssStyle] = newStyle;
  }
}

// Game time
function game() {
  // Keeps everything the correct size.
  windowWidth = window.innerWidth;
  windowHeight = window.innerHeight;
  if (windowWidth/16 > windowHeight/9){
    width = windowHeight*(16/9);
    height = windowHeight;
  } else {
    width = windowWidth;
    height = windowWidth*(9/16);
  }
  document.getElementById("gameWindow").style.width = width;
  document.getElementById("gameWindow").style.height = height;
  document.getElementById("borderTop").style.borderBottom = "25px solid #555";
  document.getElementById("borderBottom").style.borderTop = "25px solid #555";
  changeChildren("#textbox", "width", "100px");
  changeChildren("#textbox", "borderLeft", "25px solid transparent");
  changeChildren("#textbox", "borderRight", "25px solid transparent");
  
  
  // These requestAnimationFrames start the game and keep it going.
requestAnimationFrame(game);
}
requestAnimationFrame(game);
