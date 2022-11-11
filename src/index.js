import {
  createBoard, renderPlayerBoard, renderPlayerAttack,
  renderEnemyAttack, renderWin, resetBoards, rotateAxis,
  hoverOn, hoverOff, markShip, placeShip, isLegal, closeModal,
  openModal,
} from './DOM';
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

enemyBoard.placeShip([0, 3], 5, 'h');
enemyBoard.placeShip([0, 0], 4, 'v');
enemyBoard.placeShip([3, 5], 3, 'h');
enemyBoard.placeShip([6, 1], 3, 'h');
enemyBoard.placeShip([9, 5], 2, 'h');

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
    const gameStart = document.getElementById('game-start');
    const lengths = [5, 4, 3, 3, 2];
    const clickCounter = document.getElementById('click-counter');
    const l = lengths[parseInt(clickCounter.innerText)];

    // placeShip(e, l);
    const axis = document.getElementById('axis');
    const str = e.target.id;
    const headX = parseInt(str[0]);
    const headY = parseInt(str[1]);

    if (axis.innerText === 'h') {
      const tailX = headX;
      const tailY = headY + l - 1;
      if (isLegal(headX, headY) !== false
      && isLegal(tailX, tailY) !== false
      && (headY + l - 1) <= 9) {
        markShip(e, l);
        playerBoard.placeShip([headX, headY], l, axis.innerText);
        renderPlayerBoard(playerBoard.board);
      }
    } else if (axis.innerText === 'v') {
      const tailX = headX + l - 1;
      const tailY = headY;
      if (isLegal(headX, headY) !== false
      && isLegal(tailX, tailY) !== false
      && (headX + l - 1) <= 9) {
        markShip(e, l);
        playerBoard.placeShip([headX, headY], l, axis.innerText);
        renderPlayerBoard(playerBoard.board);
      }
    }

    if (parseInt(clickCounter.innerText) === 5) {
      closeModal(gameStart);
      clickCounter.innerText = 0;
      axis.innerText = 'h';
    }
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
}
  replayBtn.addEventListener('click', () => {
    resetBoards();
    playerBoard.reset();
    enemyBoard.reset();
  });
