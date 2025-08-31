//Gameboard object array

//Player object

//Game flow object

// Function input from user (CheckMarkPosition) ---> Update the Gameboard object array

//

//Logic:
// 1. a board of 3x3 square. Listen to which div is being clicked and log its position
// 2. Start a game function
// 3. Play game function: Update the position on the board to toggle to the check sign. Change the state to toggle between cross and blank.
const Player = (function () {
  const players = [];
  function createPlayer(id, name, age) {
    const playerObj = { id, name, age };
    players.push(playerObj);
    return playerObj;
  }

  function getPlayers() {
    console.log(players);
    return players;
  }
  return { createPlayer, getPlayers };
})();

const Game = (function () {
  const GameBoard = Array(9).fill(null);
  const players = Player.getPlayers();
  let i = 0;
  function playGame(position) {
    const positionObj = { position, player: players[i] };
    console.log("Current Player:",i)
    GameBoard[position]=players[i];
    const winner=checkWinner(GameBoard)
    if (winner === null) {
      // no winner yet
      console.log("No winner, keep playing!");
    } else {
      // winner is a player object (if your checkWinner returns player objects)
      console.log("Winner is:", winner.name);
    }
    i = 1 - i;
  }

  function checkWinner(board) {
    const winningCombination = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8], // rows
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8], // cols
      [0, 4, 8],
      [2, 4, 6], // diags
    ];
    for (const [a, b, c] of winningCombination) {
      console.log(board)
      const pa = board[a];
      const pb = board[b];
      const  pc = board[c];
      // match by player identity (id). You could compare by name/mark if you add one.
      if (pa && pb && pc && pa.id === pb.id && pb.id === pc.id) {
        return pa; // return the player object that won
      }
    }
    return null;
  }

  function restartGame(){
    GameBoard=Array(9).fill(null);
  }

  return { playGame };
})();

// 4. Check winner/loser logic function:
// 5. Clear game function
// 6.
