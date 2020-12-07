// Variables
var scale;
var windowWidth = 1280;
var windowHeight = 720;
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
    scale = windowHeight/1080;
  } else {
    scale = windowWidth/1920;
  }
  document.querySelector("#gameWindow").style.width = 1920*scale;
  document.querySelector("#gameWindow").style.height = 1080*scale;
  document.querySelector("#textbox > #border > #top").style.borderBottom = String(131*scale)+"px solid #777";
  document.querySelector("#textbox > #border > #bottom").style.borderTop = String(131*scale)+"px solid #777";
  styleAll("#textbox > #border > *", "width", String(1160*scale)+"px");
  styleAll("#textbox > #border > *", "borderLeft", String(115*scale)+"px solid transparent");
  styleAll("#textbox > #border > *", "borderRight", String(115*scale)+"px solid transparent");
  document.querySelector("#textbox > #content > #top").style.borderBottom = String(121*scale)+"px solid #BBB";
  document.querySelector("#textbox > #content > #bottom").style.borderTop = String(121*scale)+"px solid #BBB";
  styleAll("#textbox > #content > *", "width", String(1150*scale)+"px");
  styleAll("#textbox > #content > *", "borderLeft", String(105*scale)+"px solid transparent");
  styleAll("#textbox > #content > *", "borderRight", String(105*scale)+"px solid transparent");
  styleAll("#textbox > #content", "bottom", String(10*scale)+"px");
  
  
  // These requestAnimationFrames start the game and keep it going.
requestAnimationFrame(game);
}
requestAnimationFrame(game);
