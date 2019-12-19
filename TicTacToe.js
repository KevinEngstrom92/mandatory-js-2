console.log("Loaded file");
var pause = false;
var modalClose = document.getElementById("close");
modalClose.addEventListener("click", close);
document.getElementById("table").addEventListener("click", makeMove);
var restarted = false;
var firstRow = new Array(3);
var secondRow = new Array(3);
var thirdRow = new Array(3);
var blueScore = 0;
var redScore = 0;
var winner = "";

var table = document.getElementById("table");

for (var i = 0, row; (row = table.rows[i]); i++) {
  //iterate through rows
  //rows would be accessed using the "row" variable assigned in the for loop
  for (var j = 0, col; (col = row.cells[j]); j++) {
    //iterate through columns
    //columns would be accessed using the "col" variable assigned in the for loop
    col.textContent = "-";
  }
}

function WriteBoard() {
  if (!pause) {
    console.log("WriteBoard() function reached");
    var player = document.getElementById("current-player");
    if (restarted) {
      player.textContent === "Blue";
      restarted = false;
    } else if (player.textContent === "Blue") {
      player.setAttribute("style", "color: blue; font-weight: bold;");
    } else {
      player.setAttribute("style", "color: red; font-weight: bold;");
    }

    if (winner === "Blue") {
      blueScore++;
      document.getElementById("blue-score").textContent = blueScore;
    } else if (winner === "Red") {
      redScore++;
      document.getElementById("red-score").textContent = redScore;
    }
    winner = "";
    //Count open slots everytime use clicks

    var slotsLeft = 0;
    for (var i = 0, row; (row = table.rows[i]); i++) {
      //iterate through rows
      //rows would be accessed using the "row" variable assigned in the for loop
      for (var j = 0, col; (col = row.cells[j]); j++) {
        //iterate through columns
        //columns would be accessed using the "col" variable assigned in the for loop
        if (col.textContent === "-") {
          slotsLeft++;
        }
      }
    }
    if (slotsLeft === 0) {
      shouldQuit = true;
      DisplayModal("Its a TIE!");
    }
    CheckWinner();

    // MainGameLoop();
  }
}

function makeMove(event) {
  var player = document.getElementById("current-player");
  console.log("click");

  let sign = "";

  if (event.target.textContent === "X" || event.target.textContent === "O") {
    //Do nothing, since the cell was already taken by any player
  } else {
    player.textContent === "Blue" ? (sign = "X") : (sign = "O");
    player.textContent === "Blue"
      ? (player.textContent = "Red")
      : (player.textContent = "Blue");
    event.target.textContent = sign;
  }

  WriteBoard();
}

//Display Modal
function DisplayModal(s) {
  let modal = document.getElementById("modal-holder");
  document.getElementById("modal-content").textContent = s;
  modal.style.display = "block";
  pause = true;

  if (s === "Red Won!") {
    winner = "Red";
  } else {
    winner = "Blue";
  }
}

//Code for closebutton
function close() {
  var modal = document.getElementById("modal-holder");
  modal.style.display = "none";
}

//If the user clicks outside of modal-holders content divs
window.onclick = function(event) {
  if (event.target.id === "modal-holder") {
    document.getElementById("modal-holder").style.display = "none";
  }
};

function ResetBoard() {
  console.log("reset board");
  var table = document.getElementById("table");

  for (var i = 0, row; (row = table.rows[i]); i++) {
    //iterate through rows
    //rows would be accessed using the "row" variable assigned in the for loop
    for (var j = 0, col; (col = row.cells[j]); j++) {
      //iterate through columns
      //columns would be accessed using the "col" variable assigned in the for loop
      col.textContent = "-";
    }
  }
  firstRow.fill("-");
  secondRow.fill("-");
  thirdRow.fill("-");

  sign = "X";
  pause = false;
  restarted = true;
  WriteBoard();
}

function CheckWinner() {
  console.log("checking winner");
  var table = document.getElementById("table");

  for (var i = 0, row; (row = table.rows[i]); i++) {
    //iterate through rows
    //rows would be accessed using the "row" variable assigned in the for loop
    for (var j = 0, col; (col = row.cells[j]); j++) {
      //iterate through columns
      //columns would be accessed using the "col" variable assigned in the for loop
      if (i === 0) {
        firstRow[j] = col;
      }
      if (i === 1) {
        secondRow[j] = col;
      }
      if (i === 2) {
        thirdRow[j] = col;
      }
    }
  }
  //Verbose logic for checking winner!

  if (
    firstRow[0].textContent === "X" &&
    firstRow[1].textContent === "X" &&
    firstRow[2].textContent === "X"
  ) {
    pause = true;
    winner = "blue";
    DisplayModal("Blue Won!");
  } else if (
    firstRow[0].textContent === "O" &&
    firstRow[1].textContent === "O" &&
    firstRow[2].textContent === "O"
  ) {
    pause = true;

    DisplayModal("Red Won!");
  } else if (
    secondRow[0].textContent === "X" &&
    secondRow[1].textContent === "X" &&
    secondRow[2].textContent === "X"
  ) {
    pause = true;
    winner = "blue";
    DisplayModal("Blue Won!");
  } else if (
    secondRow[0].textContent === "O" &&
    secondRow[1].textContent === "O" &&
    secondRow[2].textContent === "O"
  ) {
    pause = true;
    DisplayModal("Red Won!");
  } else if (
    thirdRow[0].textContent === "X" &&
    thirdRow[1].textContent === "X" &&
    thirdRow[2].textContent === "X"
  ) {
    pause = true;
    winner = "blue";
    DisplayModal("Blue Won!");
  } else if (
    thirdRow[0].textContent === "O" &&
    thirdRow[1].textContent === "O" &&
    thirdRow[2].textContent === "O"
  ) {
    pause = true;
    DisplayModal("Red Won!");
  } else if (
    firstRow[0].textContent === "X" &&
    secondRow[0].textContent === "X" &&
    thirdRow[0].textContent === "X"
  ) {
    pause = true;
    winner = "blue";
    DisplayModal("Blue Won!");
  } else if (
    firstRow[0].textContent === "O" &&
    secondRow[0].textContent === "O" &&
    thirdRow[0].textContent === "O"
  ) {
    pause = true;
    DisplayModal("Red Won!");
  } else if (
    firstRow[1].textContent === "X" &&
    secondRow[1].textContent === "X" &&
    thirdRow[1].textContent === "X"
  ) {
    pause = true;
    winner = "blue";
    DisplayModal("Blue Won!");
  } else if (
    firstRow[1].textContent === "O" &&
    secondRow[1].textContent === "O" &&
    thirdRow[1].textContent === "O"
  ) {
    pause = true;
    DisplayModal("Red Won!");
  } else if (
    firstRow[2].textContent === "X" &&
    secondRow[2].textContent === "X" &&
    thirdRow[2].textContent === "X"
  ) {
    pause = true;
    winner = "blue";
    DisplayModal("Blue Won!");
  } else if (
    firstRow[2].textContent === "O" &&
    secondRow[2].textContent === "O" &&
    thirdRow[2].textContent === "O"
  ) {
    pause = true;
    DisplayModal("Red Won!");
  } else if (
    firstRow[0].textContent === "X" &&
    secondRow[1].textContent === "X" &&
    thirdRow[2].textContent === "X"
  ) {
    pause = true;
    winner = "blue";
    DisplayModal("Blue Won!");
  } else if (
    firstRow[0].textContent === "O" &&
    secondRow[1].textContent === "O" &&
    thirdRow[2].textContent === "O"
  ) {
    pause = true;
    DisplayModal("Red Won!");
  } else if (
    firstRow[2].textContent === "X" &&
    secondRow[1].textContent === "X" &&
    thirdRow[0].textContent === "X"
  ) {
    pause = true;
    winner = "blue";
    DisplayModal("Blue Won!");
  } else if (
    firstRow[2].textContent === "O" &&
    secondRow[1].textContent === "O" &&
    thirdRow[0].textContent === "O"
  ) {
    pause = true;
    DisplayModal("Red Won!");
  }
}
