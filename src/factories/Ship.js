class Ship {
  constructor(length) {
    this.hits = [];
    this.length = length;
  }

  hit(coord) {
    const coordStr = coord.toString();

    if (this.hits.includes(coordStr)) return;
    this.hits.push(coordStr);
  }

  isSunk() {
    return this.hits.length === this.length;
  }
}

export default Ship;
