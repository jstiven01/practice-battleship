const GameBoard = () => {
  const board = [...Array(10)].map(() => Array(10).fill(null));
  const shipCoordinates = [];
  let isHit;

  const getBoard = () => board;

  const renderShipOnBoard = (ship, position, orientation) => {
    if (orientation === 'V') {
      for (let i = position.row; i < position.row + ship.length; i += 1) {
        board[i][position.column] = ship.getType();
      }
    } else {
      for (let i = position.column; i < position.column + ship.length; i += 1) {
        board[position.row][i] = ship.getType();
      }
    }
  };

  const IsOver = () => shipCoordinates.length === 0;


  const validatePosition = (ship, position, orientation) => {
    for (let i = 0; i < shipCoordinates.length; i += 1) {
      const initialRow = shipCoordinates[i].position.row;
      const initialCol = shipCoordinates[i].position.column;
      const finalRow = shipCoordinates[i].position.row + shipCoordinates[i].ship.length - 1;
      const finalColumn = shipCoordinates[i].position.column + shipCoordinates[i].ship.length - 1;

      if (shipCoordinates[i].orientation === 'V' && orientation === 'V'
            && ((position.row + ship.length - 1 >= initialRow
            && position.row + ship.length - 1 <= finalRow)
            || (position.row >= initialRow
            && position.row <= finalRow)) && initialCol === position.column) {
        return false;
      } if (shipCoordinates[i].orientation === 'H' && orientation === 'V'
      && (position.row <= initialRow
      && position.row + ship.length - 1 >= initialRow)
      && (initialCol <= position.column && position.column <= finalColumn)) {
        return false;
      } if (shipCoordinates[i].orientation === 'V' && orientation === 'H'
      && (position.column <= initialCol
      && position.column + ship.length - 1 >= initialCol)
      && (initialRow <= position.row && position.row <= finalRow)) {
        return false;
      } if (shipCoordinates[i].orientation === 'H' && orientation === 'H'
      && ((position.column + ship.length - 1 >= initialCol
      && position.column + ship.length - 1 <= finalColumn)
      || (position.column >= initialCol && position.column <= finalColumn))
      && initialRow === position.row) {
        return false;
      }
    }
    return true;
  };

  const placeShip = (ship, position, orientation) => {
    if (!validatePosition(ship, position, orientation)) return false;
    shipCoordinates.push({ ship, position, orientation });
    renderShipOnBoard(ship, position, orientation);
    return true;
  };

  const isHittingShip = (position) => {
    for (let i = 0; i < shipCoordinates.length; i += 1) {
      const initialRow = shipCoordinates[i].position.row;
      const initialCol = shipCoordinates[i].position.column;
      if (shipCoordinates[i].orientation === 'V' && initialCol === position.column && position.row - initialRow >= 0 && position.row - initialRow <= shipCoordinates[i].ship.length - 1) {
        shipCoordinates[i].ship.hit(position.row - initialRow);
        if (shipCoordinates[i].ship.isSunk()) shipCoordinates.splice(i, 1);
        return true;
      } if (shipCoordinates[i].orientation === 'H' && initialRow === position.row && position.column - initialCol >= 0 && position.column - initialCol <= shipCoordinates[i].ship.length - 1) {
        shipCoordinates[i].ship.hit(position.column - initialCol);
        if (shipCoordinates[i].ship.isSunk()) shipCoordinates.splice(i, 1);
        return true;
      }
    }
    return false;
  };

  const saveAttack = (position) => {
    board[position.row][position.column] = isHit ? 'X' : 'M';
  };

  const receiveAttack = (position) => {
    isHit = isHittingShip(position);
    saveAttack(position);
  };

  const getIsHit = () => isHit;

  return {
    placeShip, receiveAttack, getIsHit, IsOver, getBoard,
  };
};
export default GameBoard;