const createBoard = (boardSize = 10, fill = null) => {
  const board = [];
  for (let i = 0; i < 10; i++) {
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

const getFreeFields = (board) => {
  const freePlacess = [];
  for (let x = 0; x < board.length; x++) {
    for (let y = 0; y < board[x].length; y++) {
      if (board[x][y] == null) {
        freePlacess.push({x, y});
      }
    }
  }
  return freePlacess;
};

const getRandomFreePlace = (board) => {
  const freePlacess = getFreeFields(board);
  const randomIndex = Math.floor(Math.random() * freePlacess.length);
  const randomChoice = freePlacess[randomIndex];
  return randomChoice;
};

const PlacingSoldiersOnBoard = (board, soldiers, range) => {
  soldiers.forEach((soldier) => {
    const place = getRandomFreePlace(board.slice(range[0], range[1]))
    board[place.x][place.y] = 'X'
    soldier.x = place.x
    soldier.y = place.y
  });
};

const board = createBoard(10);

const playerSoldiers = generateAllGameSoldiers();
const pcSoldiers = generateAllGameSoldiers();

PlacingSoldiersOnBoard(board, playerSoldiers, [6, 9])
// PlacingSoldiersOnBoard(board, pcSoldiers, [6, 9])



console.table(board)


