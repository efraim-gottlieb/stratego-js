const getMovementOptions = (board, soldier) => {
  const movementOptions = [];
  // right
  if (soldier.loc.y < board.length - 1) {
    movementOptions.push("right");
  }
  // left
  if (soldier.loc.y !== 0) {
    movementOptions.push("left");
  }
  // front
  if (soldier.loc.x < board.length - 1) {
    movementOptions.push("front");
  }
  // back
  if (soldier.loc.x !== 0) {
    movementOptions.push("back");
  }
  return movementOptions;
};

export default { getMovementOptions };
