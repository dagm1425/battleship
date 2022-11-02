import Gameboard from '../factories/Gameboard';

describe('Gameboard', () => {
  let gboard;

  beforeEach(() => {
    gboard = new Gameboard();
  });

  test('Places ship at specified coord', () => {
    gboard.placeShip([1, 3]);

    expect(gboard.board[1][3]).toEqual({
      coord: [1, 3],
      ship: {
        hits: [],
        length: 3,
      },
    });
  });

  test('Sends the ‘hit’ function to the correct ship if attack hit a ship', () => {
    gboard.placeShip([1, 3]);
    gboard.receiveAttack([1, 4]);

    expect(gboard.board[1][3].ship.hits.length).toBe(1);
  });

  test('Records the coordinates of missed shots', () => {
    gboard.placeShip([1, 3]);
    gboard.receiveAttack([1, 4]);
    gboard.receiveAttack([1, 6]);

    expect(gboard.missedShots).toContainEqual([1, 6]);
  });

  test('Does not hit the same target more than once', () => {
    gboard.placeShip([1, 3]);
    gboard.receiveAttack([1, 4]);
    gboard.receiveAttack([1, 4]);

    expect(gboard.board[1][3].ship.hits.length).toBe(1);
  });

  test('Reports whether or not all ships have been sunk', () => {
    gboard.placeShip([1, 3]);
    gboard.placeShip([4, 0]);

    gboard.receiveAttack([1, 3]);
    gboard.receiveAttack([1, 4]);
    gboard.receiveAttack([1, 5]);

    gboard.receiveAttack([4, 0]);
    gboard.receiveAttack([4, 1]);
    gboard.receiveAttack([4, 2]);

    expect(gboard.areAllShipsSunk()).toBe(true);
  });
});
