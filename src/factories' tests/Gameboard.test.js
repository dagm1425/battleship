import Gameboard from '../factories/Gameboard';
import Ship from '../factories/Ship';

describe('Gameboard', () => {
  let gameboard;

  beforeEach(() => {
    gameboard = new Gameboard();
  });

  test('Places ship at specified coord', () => {
    gameboard.placeShip([1, 3], 4, 'v');

    expect(gameboard.board[1][3]).toEqual({
      coord: [1, 3],
      axis: 'v',
      ship: new Ship(4),
    });
  });

  test('Sends the ‘hit’ function to the correct ship if attack hit a ship', () => {
    gameboard.placeShip([1, 3], 4, 'v');
    gameboard.receiveAttack([2, 3]);

    expect(gameboard.board[1][3].ship.hits.length).toBe(1);
  });

  test('Records the coordinates of missed shots', () => {
    gameboard.placeShip([1, 3]);
    gameboard.receiveAttack([1, 4]);
    gameboard.receiveAttack([1, 6]);

    expect(gameboard.missedShots).toContainEqual([1, 6]);
  });

  test('Does not hit the same target more than once', () => {
    gameboard.placeShip([1, 3], 4, 'v');
    gameboard.receiveAttack([2, 3]);
    gameboard.receiveAttack([2, 3]);

    expect(gameboard.board[1][3].ship.hits.length).toBe(1);
  });

  test('Reports whether or not all ships have been sunk', () => {
    gameboard.placeShip([1, 3], 3, 'v');
    gameboard.placeShip([4, 0], 2, 'h');

    gameboard.receiveAttack([1, 3]);
    gameboard.receiveAttack([2, 3]);
    gameboard.receiveAttack([3, 3]);

    gameboard.receiveAttack([4, 0]);
    gameboard.receiveAttack([4, 1]);

    expect(gameboard.areAllShipsSunk()).toBeTruthy();
  });
});
