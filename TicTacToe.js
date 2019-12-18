console.log("Loaded file");
var pause = false;
var modalClose = document.getElementById("close");
modalClose.addEventListener("click", close);
document.getElementById("table").addEventListener("click", makeMove);

var mappen = new Array(3).fill(new Array(3)).fill("");

var table = document.getElementById("table");


for (var i = 0, row; row = table.rows[i]; i++) {
   //iterate through rows
   //rows would be accessed using the "row" variable assigned in the for loop
   for (var j = 0, col; col = row.cells[j]; j++) {
     //iterate through columns
     //columns would be accessed using the "col" variable assigned in the for loop
     col.textContent="-";
   }
}

function WriteBoard() {
  if(!pause) {
  console.log("WriteBoard() function reached");
  var player = document.getElementById("current-player");


  if (player.textContent === "Blue") {
    player.setAttribute("style", "color: blue; font-weight: bold;");
  } else {
    player.setAttribute("style", "color: red; font-weight: bold;");
  }

  //Count open slots everytime use clicks

  var slotsLeft=0;
   for (var i = 0, row; row = table.rows[i]; i++) {
      //iterate through rows
      //rows would be accessed using the "row" variable assigned in the for loop
      for (var j = 0, col; col = row.cells[j]; j++) {
        //iterate through columns
        //columns would be accessed using the "col" variable assigned in the for loop
        if(col.textContent === "-")
        {
          slotsLeft++;
        }
      }
   }
  if(slotsLeft === 0)
  {
    shouldQuit=true;
    DisplayModal("Its a TIE!");
  }
  CheckWinner();

  // MainGameLoop();
  }
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


function MainGameLoop()
{





}


//Display Modal
function DisplayModal(s)
{
  let modal = document.getElementById("modal-holder");
  document.getElementById("modal-content").textContent=s;
  modal.style.display="block";
}

//Code for closebutton
function close()
{
  var modal = document.getElementById("modal-holder");
  modal.style.display="none";
}

//If the user clicks outside of modal-holders content divs
window.onclick = function(event) {
  if (event.target.id === "modal-holder") {
    document.getElementById("modal-holder").style.display = "none";

  }
}

function ResetBoard()
{
  console.log("reset board");
  var table = document.getElementById("table");


  for (var i = 0, row; row = table.rows[i]; i++) {
     //iterate through rows
     //rows would be accessed using the "row" variable assigned in the for loop
     for (var j = 0, col; col = row.cells[j]; j++) {
       //iterate through columns
       //columns would be accessed using the "col" variable assigned in the for loop
       col.textContent="-";
     }
  }
}

function CheckWinner()
{
  console.log("checking winner");
  var table = document.getElementById("table");


  for (var i = 0, row; row = table.rows[i]; i++) {
     //iterate through rows
     //rows would be accessed using the "row" variable assigned in the for loop
     for (var j = 0, col; col = row.cells[j]; j++) {
       //iterate through columns
       //columns would be accessed using the "col" variable assigned in the for loop
       if(row.cells[0].textContent === "X" && row.cells[1].textContent === "X" && row.cells[2].textContent === "X")
       {
         DisplayModal("Blue Wins!");
         pause = true;
       }
       if(row.cells[0].textContent === "O" && row.cells[1].textContent === "O" && row.cells[2].textContent === "O")
       {
         DisplayModal("Red Wins!");
         pause = true;
       }
       if(row.cells[0].textContent === "X" && row.cells[4].textContent === "X" && row.cells[8].textContent === "X")
       {
         DisplayModal("Blue Wins!");
         pause = true;
       }
        if(row.cells[0].textContent === "O" && row.cells[4].textContent === "O" && row.cells[8].textContent === "O")
       {
         DisplayModal("Red Wins!");
         pause = true;
       }
        if(row.cells[3].textContent === "X" && row.cells[4].textContent === "X" && row.cells[5].textContent === "X")
       {
         DisplayModal("Blue Wins!");
         pause = true;
       }
       if(row.cells[3].textContent === "O" && row.cells[4].textContent === "O" && row.cells[5].textContent === "O")
       {
         DisplayModal("Red Wins!");
         pause = true;
       }
       if(row.cells[6].textContent === "X" && row.cells[7].textContent === "X" && row.cells[8].textContent === "X")
       {
         DisplayModal("Blue Wins!");
         pause = true;
       }
      if(row.cells[6].textContent === "O" && row.cells[7].textContent === "O" && row.cells[8].textContent === "O")
       {
         DisplayModal("Red Wins!");
         pause = true;
       }
       if(row.cells[6].textContent === "X" && row.cells[4].textContent === "X" && row.cells[2].textContent === "X")
       {
         DisplayModal("Blue Wins!");
         pause = true;
       }
       if(row.cells[6].textContent === "O" && row.cells[4].textContent === "O" && row.cells[2].textContent === "O")
       {
         DisplayModal("Red Wins!");
         pause = true;

     }
  }
}
}
