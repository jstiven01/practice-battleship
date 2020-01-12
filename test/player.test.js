import Player from '../src/js/Player'
import GameBoard from '../src/js/GameBoard'

test('creating Player human', () => {
    const playerHuman = Player('Player Human 1', 'H');
    expect(playerHuman.name).toBe('Player Human 1');
    expect(playerHuman.type).toBe('H');
});
test('creating Player Computer', ()=> {
    const playerHuman = Player('Player Computer 2', 'C');
    expect(playerHuman.name).toBe('Player Computer 2');
    expect(playerHuman.type).toBe('C');
});
test('Player placing a 5 ships', ()=>{
    const playerHuman = Player('Player Human 1', 'H');
    const gameBoard1= GameBoard();
    playerHuman.setShips(gameBoard1);
    console.log(gameBoard1.getBoard());
    expect(gameBoard1.IsOver()).toBe(false);
})
test.todo('Player Human make an missed attack and change turn');
test.todo('Player Human make an attack hitting a ship and keeping turn');
test.todo('Player Computer make an missed attack and change turn');
test.todo('Player Computer make an attack hitting a ship and keeping turn');