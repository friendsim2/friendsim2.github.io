var canvas = document.getElementById("theCanvas");

function game() {
  if (window.innerWidth/16 > window.innerHeight/9){
    canvas.style.height = window.innerHeight;
    canvas.style.width = canvas.style.height*(16/9);
  } else {
    canvas.style.width = window.innerWidth;
    canvas.style.height = canvas.style.width*(9/16);
  }
  
requestAnimationFrame(game);}
requestAnimationFrame(game);
