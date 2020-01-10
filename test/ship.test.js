import Ship from '../src/js/Ship'

test('hitting a ship in one position and checking is NOT sunk', ()=> {
    const newShip = Ship(3);
    newShip.hit(1);
    expect(newShip.isSunk()).toBe(false);

});

test('hitting a ship in all positions and checking is Sunk', ()=> {
    const newShip = Ship(3);
    newShip.hit(0);
    newShip.hit(1);
    newShip.hit(2);
    expect(newShip.isSunk()).toBe(true);
});

