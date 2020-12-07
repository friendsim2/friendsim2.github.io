// Variables
var scale;
var windowWidth = 1280;
var windowHeight = 720;
var textboxWidth;
var textboxHeight;

function fixSizes() {
  windowWidth = window.innerWidth;
  windowHeight = window.innerHeight;
  if (windowWidth/16 > windowHeight/9){
    scale = windowHeight/1080;
  } else {
    scale = windowWidth/1920;
  }
  style("#gameWindow", "width", String(1920*scale));
  style("#gameWindow", "height", String(1080*scale));
  style("#textbox > #border > #top", "borderBottom", String(131*scale)+"px solid #777");
  style("#textbox > #border > #bottom", "borderTop", String(131*scale)+"px solid #777");
  style("#textbox > #border > *", "width", String(1160*scale)+"px");
  style("#textbox > #border > *", "borderLeft", String(115*scale)+"px solid transparent");
  style("#textbox > #border > *", "borderRight", String(115*scale)+"px solid transparent");
  style("#textbox > #content > #top", "borderBottom", String(121*scale)+"px solid #BBB");
  style("#textbox > #content > #bottom", "borderTop", String(121*scale)+"px solid #BBB");
  style("#textbox > #content > *", "width", String(1150*scale)+"px");
  style("#textbox > #content > *", "borderLeft", String(105*scale)+"px solid transparent");
  style("#textbox > #content > *", "borderRight", String(105*scale)+"px solid transparent");
  style("#textbox > #content", "bottom", String(10*scale)+"px");
  style("#textbox > #dialogueText", "height", String(262*scale)+"px");
  style("#textbox > #dialogueText", "fontSize", String(32*scale)+"px");
}
function style(elements, cssStyle, newStyle) {
  let x = document.querySelectorAll(elements);
  for (let i = 0; i < x.length; i++) {
    x[i].style[cssStyle] = newStyle;
  }
}





// Game time
function game() {
  
  
  // These requestAnimationFrames start the game and keep it going.
requestAnimationFrame(game);
}
fixSizes()
requestAnimationFrame(game);
