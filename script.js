window.onload = function(){

  var currentPlayer = 'x'
  var gameMoves = new Array(new Array(3), new Array(3), new Array(3))
  var gameSquares = document.getElementsByClassName('gameSquare')

  for (var i = 0; i < gameSquares.length; i++) {
    gameSquares[i].addEventListener("click", function(){
      for (var j = 0; j < this.classList.length; j++) {
        if (this.classList[j] == "x" || this.classList[j] == "y") {
          return false
        }
      }
      this.classList.add(currentPlayer)
      var boxSelected = parseInt(this.id[this.id.length - 1])
      var boxNum = 1
      for (var i = 0; i < gameMoves.length; i++) {
        for (var j = 0; j < gameMoves[i].length; j++) {
          if (boxNum == boxSelected) {
            gameMoves[i][j] = currentPlayer
          }
          boxNum++
        }
      }

      var winningArrays = [
          [gameMoves[0][0], gameMoves[0][1], gameMoves[0][2]],
          [gameMoves[1][0], gameMoves[1][1], gameMoves[0][2]],
          [gameMoves[2][0], gameMoves[2][1], gameMoves[2][2]],
          [gameMoves[0][0], gameMoves[1][0], gameMoves[2][0]],
          [gameMoves[0][1], gameMoves[1][1], gameMoves[2][2]],
          [gameMoves[0][2], gameMoves[1][2], gameMoves[2][2]],
          [gameMoves[0][0], gameMoves[1][1], gameMoves[2][2]],
          [gameMoves[0][2], gameMoves[1][1], gameMoves[2][0]]
      ]
      for (var i = 0; i < winningArrays.length; i++) {
        if (winningArrays[i][0] !== undefined && winningArrays[i][0] == winningArrays[i][1] && winningArrays[i][0] == winningArrays[i][2] ) {
            alert("Winner!");
        }
      }

      if (currentPlayer == "x") {
        currentPlayer = "y"
      }
      else {
        currentPlayer = "x"
      }
    })
  }

  var resetButton = document.getElementById("resetGame");
  resetButton.onclick = reloadPage;

  function reloadPage(){
    window.location.reload();
  }

}
