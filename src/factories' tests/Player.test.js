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
    gameboard.placeShip([1, 3]);
  });

  test('Attacks ship', () => {
    player.attack([1, 4], gameboard);

    expect(gameboard.board[1][3].ship.hits.length).toBe(1);
  });

  // but ship.hit() already knows not to shoot the same coordinate twice'
  test('Does not shoot the same coordinate twice', () => {
    player.attack([1, 4], gameboard);
    player.attack([1, 4], gameboard);

    expect(gameboard.board[1][3].ship.hits.length).toBe(1);
  });

  test('Randomly hits legal coordinates', () => {
    for (let i = 0; i < 100; i++) {
      player.randomAttack(gameboard);
    }
    expect(gameboard.areAllShipsSunk()).toBeTruthy();
  });
});
