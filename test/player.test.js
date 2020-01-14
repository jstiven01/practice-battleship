import Player from '../src/js/Player';
import GameBoard from '../src/js/GameBoard';
import Ship from '../src/js/Ship';

describe('Creating initial settings with ships', () => {
  const arrayShips = [Ship(5), Ship(4), Ship(3), Ship(3), Ship(2)];
  test('creating Player human', () => {
    const playerHuman = Player('Player Human 1', 'H', arrayShips);
    expect(playerHuman.name).toBe('Player Human 1');
    expect(playerHuman.type).toBe('H');
  });
  test('creating Player Computer', () => {
    const playerHuman = Player('Player Computer 2', 'C', arrayShips);
    expect(playerHuman.name).toBe('Player Computer 2');
    expect(playerHuman.type).toBe('C');
  });
  test('Player placing a 5 ships', () => {
    const playerHuman = Player('Player Human 1', 'H', arrayShips);
    const gameBoard1 = GameBoard();
    playerHuman.setShips(gameBoard1);
    // console.log(gameBoard1.getBoard());
    expect(gameBoard1.IsOver()).toBe(false);
  });
});

describe('Attacks among players', () => {
  const arrayShipsH = [Ship(5), Ship(4), Ship(3), Ship(3), Ship(2)];
  const arrayShipsPC = [Ship(5), Ship(4), Ship(3), Ship(3), Ship(2)];
  let playerHuman = Player('Player Human', 'H', arrayShipsH);
  let playerPC = Player('Player Computer', 'C', arrayShipsPC);
  let gameBoardH = GameBoard();
  let gameBoardPC = GameBoard();

  beforeEach(() => {
    const ship1 = Ship(3);
    const ship2 = Ship(7);
    gameBoardPC = GameBoard();
    gameBoardH = GameBoard();
    playerHuman = Player('Player Human', 'H', arrayShipsH);
    playerPC = Player('Player Computer', 'C', arrayShipsPC);
    playerPC.setTurn(true);
    playerHuman.setTurn(true);

    const shipPosition1 = { row: 2, column: 4 };
    const orientation1 = 'H';
    gameBoardPC.placeShip(ship1, shipPosition1, orientation1);

    const shipPosition2 = { row: 1, column: 7 };
    const orientation2 = 'V';
    gameBoardH.placeShip(ship2, shipPosition2, orientation2);
  });

  test('Player Human make an missed attack and change turn to Player PC', () => {
    expect(playerHuman.getTurn()).toBe(true);
    playerHuman.attackRival(gameBoardPC, { row: 4, column: 5 });
    playerPC.setTurn(true);
    expect(gameBoardPC.getIsHit()).toBe(false);
    expect(playerHuman.getTurn()).toBe(false);
    expect(playerPC.getTurn()).toBe(true);
  });

  test('Player Human make an attack hitting a ship and keeping turn', () => {
    expect(playerHuman.getTurn()).toBe(true);
    playerHuman.attackRival(gameBoardPC, { row: 2, column: 5 });
    playerPC.setTurn(false);
    // console.log(gameBoardPC.getBoard());
    expect(gameBoardPC.getIsHit()).toBe(true);
    expect(playerHuman.getTurn()).toBe(true);
    expect(playerPC.getTurn()).toBe(false);
  });

  test('Player Computer make an attack and game is not Over', () => {
    expect(playerPC.getTurn()).toBe(true);
    playerPC.attackRival(gameBoardH);
    // console.log(gameBoardH.getBoard())
    expect(gameBoardH.IsOver()).toBe(false);
  });
});
