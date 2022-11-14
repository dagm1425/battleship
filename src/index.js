import {
  createBoard, resetBoards, rotateAxis, hoverOn, hoverOff, openModal,
} from './DOM';
import {
  checkPlacementEnd, placePlayerShip, launchPlayerAndEnemyAttacks,
  checkGameEnd,
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
  hoverOn(e);
}));

placementDivs.forEach((placementDiv) => placementDiv.addEventListener('mouseleave', (e) => {
  hoverOff(e);
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
    launchPlayerAndEnemyAttacks(e, player, enemy, playerBoard, enemyBoard);
    checkGameEnd(player, enemy, playerBoard, enemyBoard);
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
