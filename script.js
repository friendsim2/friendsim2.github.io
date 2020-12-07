// Variables
var windowWidth = 1280;
var windowHeight = 720;
var width;
var height;
var textboxWidth;
var textboxHeight;

function styleAll(elements, cssStyle, newStyle) {
  let x = document.querySelectorAll(elements);
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
    width = (windowHeight*(16/9))/1920;
    height = windowHeight/1080;
  } else {
    width = windowWidth/1920;
    height = (windowWidth*(9/16))/1080;
  }
  document.querySelector("#gameWindow").style.width = 1920*width;
  document.querySelector("#gameWindow").style.height = 1080*height;
  textboxWidth = 1160*width
  textboxPoints = 115*width
  textboxHeight = 262*height
  document.querySelector("#textbox > #border > #top").style.borderBottom = String(textboxHeight/2)+"px solid #777";
  document.querySelector("#textbox > #border > #bottom").style.borderTop = String(textboxHeight/2)+"px solid #777";
  styleAll("#textbox > #border > *", "width", String(textboxWidth));
  styleAll("#textbox > #border > *", "borderLeft", String(textboxPoints)+"px solid transparent");
  styleAll("#textbox > #border > *", "borderRight", String(textboxPoints)+"px solid transparent");
  document.querySelector("#textbox > #content > #top").style.borderBottom = "25px solid #BBB";
  document.querySelector("#textbox > #content > #bottom").style.borderTop = "25px solid #BBB";
  styleAll("#textbox > #content > *", "width", "100px");
  styleAll("#textbox > #content > *", "borderLeft", "25px solid transparent");
  styleAll("#textbox > #content > *", "borderRight", "25px solid transparent");
  
  
  // These requestAnimationFrames start the game and keep it going.
requestAnimationFrame(game);
}
requestAnimationFrame(game);
