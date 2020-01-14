import GameBoard from '../src/js/GameBoard';
import Ship from '../src/js/Ship';

test('placing first ship', () => {
  const newShip = Ship(3);
  const initialPosition = { row: 2, column: 6 };
  const gameBoard1 = GameBoard();
  const orientation = 'H';
  const shipPlaced = gameBoard1.placeShip(newShip, initialPosition, orientation);
  expect(shipPlaced).toBe(true);
});

test('placing ship in same occupied position', () => {
  const ship1 = Ship(3);
  const ship2 = Ship(3);
  const shipPosition1 = { row: 0, column: 3 };
  const orientation1 = 'H';
  const shipPosition2 = { row: 0, column: 3 };
  const orientation2 = 'H';

  const gameBoard1 = GameBoard();
  gameBoard1.placeShip(ship1, shipPosition1, orientation1);
  const isShipPlaced2 = gameBoard1.placeShip(ship2, shipPosition2, orientation2);
  expect(isShipPlaced2).toBe(false);
});

test('placing ship in same occupied position oldHorizontal NewVertical', () => {
  const ship1 = Ship(3);
  const ship2 = Ship(5);
  const shipPosition1 = { row: 2, column: 3 };
  const orientation1 = 'V';
  const shipPosition2 = { row: 2, column: 3 };
  const orientation2 = 'H';

  const gameBoard1 = GameBoard();
  gameBoard1.placeShip(ship1, shipPosition1, orientation1);
  const isShipPlaced2 = gameBoard1.placeShip(ship2, shipPosition2, orientation2);
  expect(isShipPlaced2).toBe(false);
});

test('placing ship in available position oldHorizontal newVertical', () => {
  const ship1 = Ship(3);
  const ship2 = Ship(3);
  const shipPosition1 = { row: 4, column: 3 };
  const orientation1 = 'H';
  const shipPosition2 = { row: 2, column: 8 };
  const orientation2 = 'V';

  const gameBoard1 = GameBoard();
  gameBoard1.placeShip(ship1, shipPosition1, orientation1);
  const isShipPlaced2 = gameBoard1.placeShip(ship2, shipPosition2, orientation2);
  expect(isShipPlaced2).toBe(true);
});

test('placing ship in occupied position oldHorizontal newVertical', () => {
  const ship1 = Ship(3);
  const ship2 = Ship(3);
  const shipPosition1 = { row: 4, column: 3 };
  const orientation1 = 'H';
  const shipPosition2 = { row: 2, column: 4 };
  const orientation2 = 'V';

  const gameBoard1 = GameBoard();
  gameBoard1.placeShip(ship1, shipPosition1, orientation1);
  const isShipPlaced2 = gameBoard1.placeShip(ship2, shipPosition2, orientation2);
  expect(isShipPlaced2).toBe(false);
});

test('placing ship in available position oldVertical newHorizontal', () => {
  const ship1 = Ship(3);
  const ship2 = Ship(3);
  const shipPosition1 = { row: 4, column: 3 };
  const orientation1 = 'V';
  const shipPosition2 = { row: 2, column: 4 };
  const orientation2 = 'H';

  const gameBoard1 = GameBoard();
  gameBoard1.placeShip(ship1, shipPosition1, orientation1);
  const isShipPlaced2 = gameBoard1.placeShip(ship2, shipPosition2, orientation2);
  expect(isShipPlaced2).toBe(true);
});

test('placing ship in occupied position oldVertical newHorizontal', () => {
  const ship1 = Ship(3);
  const ship2 = Ship(3);
  const shipPosition1 = { row: 4, column: 3 };
  const orientation1 = 'V';
  const shipPosition2 = { row: 5, column: 2 };
  const orientation2 = 'H';

  const gameBoard1 = GameBoard();
  gameBoard1.placeShip(ship1, shipPosition1, orientation1);
  const isShipPlaced2 = gameBoard1.placeShip(ship2, shipPosition2, orientation2);
  expect(isShipPlaced2).toBe(false);
});

test('placing ship in available position oldVertical newVertical', () => {
  const ship1 = Ship(3);
  const ship2 = Ship(3);
  const shipPosition1 = { row: 0, column: 3 };
  const orientation1 = 'V';
  const shipPosition2 = { row: 5, column: 3 };
  const orientation2 = 'V';

  const gameBoard1 = GameBoard();
  gameBoard1.placeShip(ship1, shipPosition1, orientation1);
  const isShipPlaced2 = gameBoard1.placeShip(ship2, shipPosition2, orientation2);
  expect(isShipPlaced2).toBe(true);
});

test('placing ship in occupied position oldVertical newVertical', () => {
  const ship1 = Ship(3);
  const ship2 = Ship(3);
  const shipPosition1 = { row: 1, column: 3 };
  const orientation1 = 'V';
  const shipPosition2 = { row: 3, column: 3 };
  const orientation2 = 'V';

  const gameBoard1 = GameBoard();
  gameBoard1.placeShip(ship1, shipPosition1, orientation1);
  const isShipPlaced2 = gameBoard1.placeShip(ship2, shipPosition2, orientation2);
  expect(isShipPlaced2).toBe(false);
});

test('placing ship in available position oldHorizontal newHorizontal', () => {
  const ship1 = Ship(3);
  const ship2 = Ship(3);
  const shipPosition1 = { row: 1, column: 3 };
  const orientation1 = 'H';
  const shipPosition2 = { row: 3, column: 3 };
  const orientation2 = 'H';

  const gameBoard1 = GameBoard();
  gameBoard1.placeShip(ship1, shipPosition1, orientation1);
  const isShipPlaced2 = gameBoard1.placeShip(ship2, shipPosition2, orientation2);
  expect(isShipPlaced2).toBe(true);
});

test('placing ship in occupied position oldHorizontal newHorizontal', () => {
  const ship1 = Ship(3);
  const ship2 = Ship(3);
  const shipPosition1 = { row: 1, column: 3 };
  const orientation1 = 'H';
  const shipPosition2 = { row: 1, column: 5 };
  const orientation2 = 'H';

  const gameBoard1 = GameBoard();
  gameBoard1.placeShip(ship1, shipPosition1, orientation1);
  const isShipPlaced2 = gameBoard1.placeShip(ship2, shipPosition2, orientation2);
  expect(isShipPlaced2).toBe(false);
});


test('receiving attack with hitting a Vertical ship', () => {
  const ship1 = Ship(3);
  const shipPosition1 = { row: 4, column: 3 };
  const orientation1 = 'V';

  const gameBoard1 = GameBoard();
  gameBoard1.placeShip(ship1, shipPosition1, orientation1);
  const attackedPosition = { row: 5, column: 3 };
  gameBoard1.receiveAttack(attackedPosition);
  expect(gameBoard1.getIsHit()).toBe(true);
  expect(gameBoard1.IsOver()).toBe(false);
});

test('receiving attack with hitting a Horizontal ship', () => {
  const ship1 = Ship(3);
  const shipPosition1 = { row: 2, column: 4 };
  const orientation1 = 'H';

  const gameBoard1 = GameBoard();
  gameBoard1.placeShip(ship1, shipPosition1, orientation1);

  const attackedPosition = { row: 2, column: 6 };
  gameBoard1.receiveAttack(attackedPosition);
  expect(gameBoard1.getIsHit()).toBe(true);
  expect(gameBoard1.IsOver()).toBe(false);
});

test('receiving attack without hitting', () => {
  const ship1 = Ship(3);
  const shipPosition1 = { row: 2, column: 4 };
  const orientation1 = 'H';

  const gameBoard1 = GameBoard();
  gameBoard1.placeShip(ship1, shipPosition1, orientation1);

  const attackedPosition = { row: 2, column: 8 };
  gameBoard1.receiveAttack(attackedPosition);
  expect(gameBoard1.getIsHit()).toBe(false);
  expect(gameBoard1.IsOver()).toBe(false);
});

test('receiving attack which sink the last ship', () => {
  const ship1 = Ship(3);
  const shipPosition1 = { row: 4, column: 3 };
  const orientation1 = 'V';
  const gameBoard1 = GameBoard();
  gameBoard1.placeShip(ship1, shipPosition1, orientation1);

  const ship2 = Ship(2);
  const shipPosition2 = { row: 2, column: 4 };
  const orientation2 = 'H';
  gameBoard1.placeShip(ship2, shipPosition2, orientation2);

  // Sinking ship 1
  gameBoard1.receiveAttack({ row: 4, column: 3 });
  expect(gameBoard1.getIsHit()).toBe(true);
  gameBoard1.receiveAttack({ row: 5, column: 3 });
  expect(gameBoard1.getIsHit()).toBe(true);
  gameBoard1.receiveAttack({ row: 6, column: 3 });
  expect(gameBoard1.getIsHit()).toBe(true);
  expect(gameBoard1.IsOver()).toBe(false);
  // Sinking ship 2
  gameBoard1.receiveAttack({ row: 2, column: 4 });
  expect(gameBoard1.getIsHit()).toBe(true);
  gameBoard1.receiveAttack({ row: 2, column: 5 });
  expect(gameBoard1.getIsHit()).toBe(true);
  expect(gameBoard1.IsOver()).toBe(true);
});
