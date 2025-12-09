import game from "./game.js";
import gameLogic from "./gameLogic.js";

const board = game.createBoard(10);

const playerSoldiers = game.generateAllGameSoldiers();
const pcSoldiers = game.generateAllGameSoldiers();

game.PlacingSoldiersOnBoard(board, playerSoldiers, [0, 4]);
game.PlacingSoldiersOnBoard(board, pcSoldiers, [6, 10]);

console.log(pcSoldiers[5])
console.log(gameLogic.getMovementOptions(board, pcSoldiers[5]));


