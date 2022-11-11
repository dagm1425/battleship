import Ship from './Ship';

class Gameboard {
  constructor() {
    this.board = Array.from(Array(10), () => Array.from(Array(10).keys()));
    this.missedShots = [];
  }

  placeShip(cord, l, a) {
    const x = cord[0];
    const y = cord[1];

    this.board[x][y] = {
      coord: [x, y],
      axis: `${a}`,
      ship: new Ship(l),
    };
  }

  receiveAttack(target) {
    // const ships = this.board.filter((e) => typeof e !== 'number');
    const ships = [];
    let hitIsCalled = false;

    for (let i = 0; i < 10; i++) {
      for (let j = 0; j < 10; j++) {
        if (typeof this.board[i][j] === 'object') { ships.push(this.board[i][j]); }
      }
    }

    ships.forEach((e) => {
      if (e.axis === 'h') {
        if (target[0] === e.coord[0]) {
          if (target[1] >= e.coord[1] && target[1] <= (e.coord[1] + e.ship.length - 1)) {
            e.ship.hit(target);
            hitIsCalled = true;
          }
        }
      } else if (target[1] === e.coord[1]) {
        if (target[0] >= e.coord[0] && target[0] <= (e.coord[0] + e.ship.length - 1)) {
          e.ship.hit(target);
          hitIsCalled = true;
        }
      }
    });
    if (!hitIsCalled) { this.missedShots.push(target); }
    return hitIsCalled;
  }

  areAllShipsSunk() {
    const ships = [];

    for (let i = 0; i < 10; i++) {
      for (let j = 0; j < 10; j++) {
        if (typeof this.board[i][j] === 'object') { ships.push(this.board[i][j]); }
      }
    }

    return ships.every((e) => e.ship.isSunk() === true);
  }

  reset() {
    this.board = Array.from(Array(10), () => Array.from(Array(10).keys()));
  }
}

export default Gameboard;
