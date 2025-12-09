const getMovementOptions = (board, soldier) => {
  const movementOptions = [];
  // right
  if (soldier.loc.y < board.length - 1) {
    movementOptions.push({ right: { x: soldier.loc.x, y: soldier.loc.y + 1 } });
  }
  // left
  if (soldier.loc.y !== 0) {
    movementOptions.push({ left: { x: soldier.loc.x, y: soldier.loc.y - 1 } });
  }
  // front
  if (soldier.loc.x < board.length - 1) {
    movementOptions.push({ front: { x: soldier.loc.x + 1, y: soldier.loc.y } });
  }
  // back
  if (soldier.loc.x !== 0) {
    movementOptions.push({ back: { x: soldier.loc.x - 1, y: soldier.loc.y } });
  }
  return movementOptions;
};

const moove = (board, soldier, newPlace) => {
  board[soldier.loc.x][soldier.loc.y] = 0
  board[soldier.loc.x][soldier.loc.y] = 'X'
  soldier.loc.x = newPlace.x
  soldier.loc.y = newPlace.y
}

export default { getMovementOptions , moove};
