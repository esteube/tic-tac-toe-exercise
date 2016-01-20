window.onload = start;
var boxes = document.getElementsByClassName("tile");
var turnText = document.querySelector(".playerTurn");
var winnerText = document.querySelector(".winnerText");
var OMoves, XMoves, winCounter, counter;

var winningCombinations = [[0,1,2],[3,4,5],[6,7,8],
[0,3,6],[1,4,7],[2,5,8],[0,4,8],[2,4,6]];

function start(){
  addXandOListener();
  addResetListener();
  OMoves = [];
  XMoves = [];
  winCounter=0;
  counter = 1;
}

function removeListeners(){
  for (var i = boxes.length - 1; i >= 0; i--) {
    boxes[i].removeEventListener("click", addXorO);
  }
}

function addXandOListener(){
  for (var i = boxes.length - 1; i >= 0; i--) {
    boxes[i].addEventListener("click", addXorO);
  }
}

function addXorO(event){
  if (event.target.innerText.length === 0){
    if (counter % 2 === 0) {
      OMoves.push(parseInt(event.target.getAttribute("id").replace(/[^0-9]/g,'')));
      event.target.innerText = "O";
      event.target.classList.add("O");
      turnText.innerText = "It is X's turn";
      counter++;
      checkForWin(OMoves, "O");
    }
    else {
      XMoves.push(parseInt(event.target.getAttribute("id").replace(/[^0-9]/g,'')));
      event.target.innerText = "X";
      event.target.classList.add("X");
      turnText.innerText = "It is O's turn";
      counter++;
      checkForWin(XMoves, "X");
    }
  // if the counter is greater than or equal to 10, the game is a draw!
  if (counter >= 10){
    turnText.innerText = "Game Over!";
    var conf = confirm("It's a draw, do you want to play again?");
    if(conf){
      resetBoard();
    }
  }
 }
}

function addResetListener(){
  var resetButton = document.getElementById("reset");
  resetButton.addEventListener("click", resetBoard);
}

function checkForWin(movesArray, name){
  // loop over the first array of winning combinations
  for (var i = 0; i < winningCombinations.length; i++) {
    // reset the winCounter each time!
    winCounter = 0;
    // loop over each individual array
    for (var j = 0; j < winningCombinations[i].length; j++) {
      // if the number in winning combo array is === a number in moves array, add to winCounter
      if(movesArray.indexOf(winningCombinations[i][j]) !== -1){
        winCounter++;
      }
      // if winCounter === 3 that means all 3 moves are winning combos and game is over!
      if(winCounter === 3){
        turnText.innerText = `Game over, ${name} wins!`;
        removeListeners();
      }
    }
  }
}

function resetBoard(){
  for (var i = boxes.length - 1; i >= 0; i--) {
    boxes[i].innerText="";
    boxes[i].setAttribute("class","tile");
  }
  turnText.innerText = "It is X's turn";
  start();
}