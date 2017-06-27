console.log(gameMoves);
checking rows for same values
if (gameMoves[0][0] !== undefined && gameMoves[0][0] == gameMoves[0][1] && gameMoves[0][0] == gameMoves[0][2]) {
  alert("Winner!");
}
if (gameMoves[1][0] !== undefined && gameMoves[1][0] == gameMoves[1][1] && gameMoves[1][0] == gameMoves[0][2]) {
  alert("Winner!");
}
if (gameMoves[2][0] !== undefined && gameMoves[2][0] == gameMoves[2][1] && gameMoves[2][0] == gameMoves[2][2]) {
  alert("Winner!");
}
// checking for columns/ diagonal wins
if(gameMoves[0][0] !== undefined && gameMoves[0][0] == gameMoves[1][0] && gameMoves[0][0] == gameMoves[2][0]){
  alert("Winner!");
}
if(gameMoves[0][1] !== undefined && gameMoves[0][1] == gameMoves[1][1] && gameMoves[0][1] === gameMoves[2][2]){
  alert("Winner!");
}
if(gameMoves[0][2] !== undefined && gameMoves[0][2] == gameMoves[1][2] && gameMoves[0][2] == gameMoves[2][2]){
  alert("Winner!");
}
if (gameMoves[0][0] !== undefined && gameMoves[0][0] == gameMoves[1][1] && gameMoves[0][0] == gameMoves[2][2]) {
  alert("Winner!");
}
if (gameMoves[0][2] !== undefined && gameMoves[0][2] == gameMoves[1][1] && gameMoves[0][2] == gameMoves[2][0]) {
  alert("Winner!");
}
