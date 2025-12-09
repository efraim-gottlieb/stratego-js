const createBoard = (boardSize = 10, fill = 0) => {
  const board = [];
  for (let i = 0; i < boardSize; i++) {
    board.push(Array(10).fill(fill));
  }
  return board;
};

const createSoldier = (player, rank = null, type = "soldier") => {
  return {
    player,
    rank,
    type,
  };
};

const generateSoldiers = (soldiersNum, rank) => {
  const soldiers = [];
  for (let i = 0; i < soldiersNum; i++) {
    soldiers.push(createSoldier("pc", rank));
  }
  return soldiers;
};

const generateAllGameSoldiers = () => {
  const soldiers = [];
  soldiers.push(...generateSoldiers(4, 1));
  soldiers.push(...generateSoldiers(10, 2));
  soldiers.push(...generateSoldiers(6, 3));
  soldiers.push(...generateSoldiers(4, 4));
  soldiers.push(...generateSoldiers(4, 5));
  soldiers.push(...generateSoldiers(4, 6));
  soldiers.push(...generateSoldiers(3, 7));
  soldiers.push(...generateSoldiers(2, 8));
  soldiers.push(...generateSoldiers(1, 9));
  soldiers.push(...generateSoldiers(1, 10));
  soldiers.push(createSoldier("pc", null, "flag"));
  return soldiers;
};

const getFreeFields = (board, range) => {
  const freePlacess = [];
  for (let x = range[0]; x < range[1]; x++) {
    for (let y = 0; y < board[x].length; y++) {
      if (board[x][y] == 0) {
        freePlacess.push({ x, y });
      }
    }
  }
  return freePlacess;
};

const getRandomFreePlace = (board, range) => {
  const freePlacess = getFreeFields(board, range);
  const randomIndex = Math.floor(Math.random() * freePlacess.length);
  const randomChoice = freePlacess[randomIndex];
  return randomChoice;
};

const PlacingSoldiersOnBoard = (board, soldiers, range) => {
  soldiers.forEach((soldier) => {
    const place = getRandomFreePlace(board, range);
    board[place.x][place.y] = "X";
    soldier.loc = { x: place.x, y: place.y };
  });
};

export default { createBoard, generateAllGameSoldiers, PlacingSoldiersOnBoard };
