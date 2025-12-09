import game from "./game.js";
import gameLogic from "./gameLogic.js";
import input from "analiza-sync";

const board = game.createBoard(10);

const playerSoldiers = game.generateAllGameSoldiers();
const pcSoldiers = game.generateAllGameSoldiers();

game.PlacingSoldiersOnBoard(board, playerSoldiers, [0, 4]);
game.PlacingSoldiersOnBoard(board, pcSoldiers, [6, 10]);

let choice;

// while (choice != 'exit') {
//   choice = input();
// }
console.log(playerSoldiers[1])
choice = gameLogic.getMovementOptions(board, playerSoldiers[1])[0].right
gameLogic.moove(board, playerSoldiers[1], choice)

console.log(playerSoldiers[1])