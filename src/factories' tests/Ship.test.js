import Ship from '../factories/Ship';

describe('Ship', () => {
  let ship;

  beforeEach(() => {
    ship = new Ship(2);
  });

  test("Increments ship's hits", () => {
    ship.hit([1, 3]);
    // eslint-disable-next-line no-undef
    expect(ship.hits.length).toBe(1);
  });

  test('Determines if ship is sunk', () => {
    ship.hit([1, 3]);
    ship.hit([1, 2]);
    // eslint-disable-next-line no-undef
    expect(ship.isSunk()).toBe(true);
  });
});
