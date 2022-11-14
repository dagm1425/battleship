class Player {
  constructor(name) {
    this.name = name;
    this.alreadyHitCoords = [];
  }

  isAlreadyHit(coord) {
    const coordStr = coord.toString();

    return (this.alreadyHitCoords.includes(coordStr));
  }

  attack(coord, gameboard) {
    const coordStr = coord.toString();
    if (this.isAlreadyHit(coord)) return;

    this.alreadyHitCoords.push(coordStr);
    return gameboard.receiveAttack(coord);
  }

  randomAttack(gameboard) {
    const coord = [];
    let coordStr = '';

    if (this.alreadyHitCoords.length === 100) return;

    let x = Math.floor(Math.random() * 10);
    let y = Math.floor(Math.random() * 10);

    while (this.isAlreadyHit([x, y])) {
      x = Math.floor(Math.random() * 10);
      y = Math.floor(Math.random() * 10);
    }

    coord.push(x, y);
    coordStr = coord.toString();
    this.alreadyHitCoords.push(coordStr);
    return [
      coord, gameboard.receiveAttack([x, y]),
    ];
  }

  resetAlreadyHitCoords() {
    this.alreadyHitCoords = [];
  }
}

export default Player;
