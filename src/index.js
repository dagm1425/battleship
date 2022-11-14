import {
  createBoard, renderPlayerAttack, renderEnemyAttack,
  renderWin, resetBoards, rotateAxis, hoverOn, hoverOff, openModal,
} from './DOM';
import {
  checkPlacementEnd, placePlayerShip,
} from './game';
import Gameboard from './factories/Gameboard';
import Player from './factories/Player';

window.onload = createBoard(10);

const placementDivs = Array.from(document.querySelector('.board.placement').children);
const rotateBtn = document.getElementById('rotate-btn');
const enemyBoardDivs = Array.from(document.querySelector('.board.enemy').children);
const replayBtn = document.getElementById('replay-btn');
const player = new Player('Player');
const enemy = new Player('Enemy');
const playerBoard = new Gameboard();
const enemyBoard = new Gameboard();

placementDivs.forEach((placementDiv) => placementDiv.addEventListener('mouseenter', (e) => {
  const lengths = [5, 4, 3, 3, 2];
  const clickCounter = document.getElementById('click-counter');
  const l = lengths[parseInt(clickCounter.innerText)];

  hoverOn(e, l);
}));

placementDivs.forEach((placementDiv) => placementDiv.addEventListener('mouseleave', (e) => {
  const lengths = [5, 4, 3, 3, 2];
  const clickCounter = document.getElementById('click-counter');
  const l = lengths[parseInt(clickCounter.innerText)];

  hoverOff(e, l);
}));

rotateBtn.addEventListener('click', () => {
  rotateAxis();
});

placementDivs.forEach((placementDiv) => {
  placementDiv.addEventListener('click', (e) => {
    placePlayerShip(e, playerBoard, enemyBoard);
    checkPlacementEnd();
  });
});

enemyBoardDivs.forEach((enemyBoardDiv) => {
  enemyBoardDiv.addEventListener('click', (e) => {
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
});

replayBtn.addEventListener('click', () => {
  const gameStart = document.getElementById('game-start');

  player.resetAlreadyHitCoords();
  enemy.resetAlreadyHitCoords();
  resetBoards();
  playerBoard.reset();
  enemyBoard.reset();
  openModal(gameStart);
});
