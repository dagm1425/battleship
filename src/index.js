import {
  createBoard, renderPlayerBoard, renderPlayerAttack,
  renderEnemyAttack, renderWin, resetBoards,
} from './DOM';
import Gameboard from './factories/Gameboard';
import Ship from './factories/Ship';
import Player from './factories/Player';

window.onload = createBoard(10);
const enemyBoardDom = document.querySelector('.board.enemy');
const replayBtn = document.getElementById('replay');
const player = new Player('Player');
const enemy = new Player('Enemy');
const playerBoard = new Gameboard();
const enemyBoard = new Gameboard();

playerBoard.board[0][3] = {
  coord: [0, 3],
  ship: new Ship(3),
};

playerBoard.board[3][5] = {
  coord: [3, 5],
  ship: new Ship(3),
};

playerBoard.board[7][1] = {
  coord: [7, 1],
  ship: new Ship(3),
};

enemyBoard.board[1][5] = {
  coord: [1, 5],
  ship: new Ship(3),
};

enemyBoard.board[3][7] = {
  coord: [3, 7],
  ship: new Ship(3),
};

enemyBoard.board[5][0] = {
  coord: [5, 0],
  ship: new Ship(3),
};

renderPlayerBoard(playerBoard.board);

enemyBoardDom.addEventListener('click', (e) => {
  const str = e.target.id.slice(1);
  const xPos = parseInt(str[0]);
  const yPos = parseInt(str[1]);

  const playerHit = player.attack([xPos, yPos], enemyBoard);
  renderPlayerAttack(playerHit, xPos, yPos);

  if (playerHit !== undefined) {
    const enemyHit = enemy.randomAttack(playerBoard);
    renderEnemyAttack(enemyHit[0], enemyHit[1]);
  }
  if (playerBoard.areAllShipsSunk()) renderWin(enemy.name);
  else if (enemyBoard.areAllShipsSunk()) renderWin(player.name);
});

replayBtn.addEventListener('click', () => {
  resetBoards();
  playerBoard.reset();
  enemyBoard.reset();
});
