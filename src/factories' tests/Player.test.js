// import Ship from '../factories/Ship';
import Gameboard from '../factories/Gameboard';
import Player from '../factories/Player';

describe('Player', () => {
  let gameboard;
  //   let ship;
  let player;

  beforeEach(() => {
    gameboard = new Gameboard();
    // ship = new Ship(3);
    player = new Player('Player1');
    gameboard.placeShip([4, 0], 2, 'h');
  });

  test('Attacks ship', () => {
    player.attack([4, 1], gameboard);

    expect(gameboard.board[4][0].ship.hits.length).toBe(1);
  });

  test('Does not shoot the same coordinate twice', () => {
    player.attack([4, 1], gameboard);
    player.attack([4, 1], gameboard);

    expect(gameboard.board[4][0].ship.hits.length).toBe(1);
  });

  test('Randomly hits legal coordinates', () => {
    for (let i = 0; i < 100; i++) {
      player.randomAttack(gameboard);
    }
    expect(gameboard.areAllShipsSunk()).toBeTruthy();
  });
});
