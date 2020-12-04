var canvas = document.getElementById("theCanvas");
var w = 1280;
var h = 720;

function game() {
  w = window.innerWidth;
  h = window.innerHeight;
  if (w/16 > h/9){
    canvas.style.height = h;
    canvas.style.width = h*(16/9);
  } else {
    canvas.style.width = w;
    canvas.style.height = w*(9/16);
  }
  
requestAnimationFrame(game);}
requestAnimationFrame(game);
