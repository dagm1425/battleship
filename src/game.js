import { closeModal, markShip, renderPlayerBoard } from './DOM';

function isInBoard(x, y) {
  if (x >= 0 && x <= 9 && y >= 0 && y <= 9) { return true; }
}

function isLegal(xPos, yPos, playerBoard) {
  const dx = [-1, -1, -1, 0, 0, 1, 1, 1];
  const dy = [-1, 0, 1, -1, 1, -1, 0, 1];
  let legal = true;
  let x;
  let y;

  for (let i = 0; i < dx.length; i++) {
    x = xPos + dx[i];
    y = yPos + dy[i];
    if (isInBoard(x, y)) {
      if (typeof playerBoard.board[x][y] !== 'number') legal = false;
    }
  }

  return legal;
}

function incrementClick() {
  const clickCounter = document.getElementById('click-counter');
  clickCounter.innerText = parseInt(clickCounter.innerText) + 1;
}

function checkPlacementEnd() {
  const clickCounter = document.getElementById('click-counter');
  const gameStart = document.getElementById('game-start');
  const axis = document.getElementById('axis');

  if (parseInt(clickCounter.innerText) === 5) {
    closeModal(gameStart);
    clickCounter.innerText = 0;
    axis.innerText = 'h';
  }
}

function generateTarget(enemyBoard, l) {
  const axes = ['h', 'v'];
  const axis = axes[Math.floor(Math.random() * 2)];
  let headX = Math.floor(Math.random() * 10);
  let headY = Math.floor(Math.random() * 10);
  let tailX;
  let tailY;

  if (axis === 'h') {
    tailX = headX;
    tailY = headY + l - 1;

    while (typeof enemyBoard.board[headX][headY] !== 'number'
    || isLegal(headX, headY, enemyBoard) === false
    || isLegal(tailX, tailY, enemyBoard) === false
    || tailY > 9) {
      headX = Math.floor(Math.random() * 10);
      headY = Math.floor(Math.random() * 10);
      tailX = headX;
      tailY = headY + l - 1;
    }
  } else if (axis === 'v') {
    tailX = headX + l - 1;
    tailY = headY;

    while (typeof enemyBoard.board[headX][headY] !== 'number'
    || isLegal(headX, headY, enemyBoard) === false
    || isLegal(tailX, tailY, enemyBoard) === false
    || tailX > 9) {
      headX = Math.floor(Math.random() * 10);
      headY = Math.floor(Math.random() * 10);
      tailX = headX + l - 1;
      tailY = headY;
    }
  }

  return [headX, headY, axis];
}

function placeEnemyShip(enemyBoard) {
  const lengths = [5, 4, 3, 3, 2];
  const clickCounter = document.getElementById('click-counter');
  const l = lengths[parseInt(clickCounter.innerText)];

  const target = generateTarget(enemyBoard, l);
  const headX = target[0];
  const headY = target[1];
  const axis = target[2];

  enemyBoard.placeShip([headX, headY], l, axis);
}

function placePlayerShip(e, playerBoard, enemyBoard) {
  const lengths = [5, 4, 3, 3, 2];
  const clickCounter = document.getElementById('click-counter');
  const l = lengths[parseInt(clickCounter.innerText)];
  const axis = document.getElementById('axis');
  const str = e.target.id;
  const headX = parseInt(str[0]);
  const headY = parseInt(str[1]);

  if (axis.innerText === 'h') {
    const tailX = headX;
    const tailY = headY + l - 1;
    if (isLegal(headX, headY, playerBoard)
      && isLegal(tailX, tailY, playerBoard)
      && tailY <= 9) {
      markShip(e, l);
      playerBoard.placeShip([headX, headY], l, axis.innerText);
      renderPlayerBoard(playerBoard.board);
      placeEnemyShip(enemyBoard);
      incrementClick();
    }
  } else if (axis.innerText === 'v') {
    const tailX = headX + l - 1;
    const tailY = headY;
    if (isLegal(headX, headY, playerBoard)
      && isLegal(tailX, tailY, playerBoard)
      && tailX <= 9) {
      markShip(e, l);
      playerBoard.placeShip([headX, headY], l, axis.innerText);
      renderPlayerBoard(playerBoard.board);
      placeEnemyShip(enemyBoard);
      incrementClick();
    }
  }
}

export {
  incrementClick, checkPlacementEnd, placePlayerShip, placeEnemyShip,
};
