import game from "./game.js";

const board = game.createBoard(10);

const playerSoldiers = game.generateAllGameSoldiers();
const pcSoldiers = game.generateAllGameSoldiers();

game.PlacingSoldiersOnBoard(board, playerSoldiers, [0, 4]);
game.PlacingSoldiersOnBoard(board, pcSoldiers, [6, 10])

console.table(board);
console.table(playerSoldiers);
console.table(pcSoldiers);
