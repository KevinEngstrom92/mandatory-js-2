console.log("Loaded file");

let canvas = document.getElementById("canvas");
let context = canvas.getContext("2D");

var mappen = new Array(3).fill(new Array(3)).fill("");

function WriteBoard() {
  console.log("WriteBoard() function reached");
  var player = document.getElementById("current-player");

  if (player.textContent === "Blue") {
    player.setAttribute("style", "color: blue; font-weight: bold;");
  } else {
    player.setAttribute("style", "color: red; font-weight: bold;");
  }

  //  MainGameLoop();
}

function MainGameLoop() {}
