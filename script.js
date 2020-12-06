// Variables
var windowWidth = 1280;
var windowHeight = 720;
var width;
var height;

function changeChildren(parent, cssStyle, newStyle) {
  let x = document.querySelector(parent).children;
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
  document.querySelector("#gameWindow").style.width = width;
  document.querySelector("#gameWindow").style.height = height;
  document.querySelector("#textbox > #border > #top").style.borderBottom = "100px solid #777";
  document.querySelector("#textbox > #border > #bottom").style.borderTop = "100px solid #777";
  changeChildren("#textbox > #border", "width", "200px");
  changeChildren("#textbox > #border", "borderLeft", "50px solid transparent");
  changeChildren("#textbox > #border", "borderRight", "50px solid transparent");
  document.querySelector("#textbox > #content > #top").style.borderBottom = "25px solid #BBB";
  document.querySelector("#textbox > #content > #bottom").style.borderTop = "25px solid #BBB";
  changeChildren("#textbox > #content", "width", "100px");
  changeChildren("#textbox > #content", "borderLeft", "25px solid transparent");
  changeChildren("#textbox > #content", "borderRight", "25px solid transparent");
  
  
  // These requestAnimationFrames start the game and keep it going.
requestAnimationFrame(game);
}
requestAnimationFrame(game);
