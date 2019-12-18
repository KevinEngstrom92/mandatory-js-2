console.log("Loaded file");

document.getElementById("table").addEventListener("click", makeMove);

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



function makeMove(event)
{
    var player = document.getElementById("current-player");
  console.log("click");

 let sign = "";



if(event.target.textContent === "X" || event.target.textContent === "O")
{
  //Do nothing, since the cell was already taken by any player
}
else
{
  player.textContent === "Blue" ? sign = "X" : sign = "O";
 player.textContent === "Blue" ? player.textContent = "Red" : player.textContent = "Blue";
 event.target.textContent = sign;
}



 WriteBoard();
}


function MainGameLoop() {}
