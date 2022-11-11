import './styles.css';

function createBoard(n) {
  const boards = document.querySelectorAll('.board');

  boards.forEach((board) => {
    board.style.gridTemplateRows = `repeat(${n}, 1fr)`;
    board.style.gridTemplateColumns = `repeat(${n}, 1fr)`;

    for (let i = 0; i < (n); i++) {
      for (let j = 0; j < (n); j++) {
        const div = document.createElement('div');
        div.classList.add('board-divs');
        board.appendChild(div);
        if (board.classList.contains('player')) {
          div.setAttribute('id', `p${i}${j}`);
        } else if (board.classList.contains('enemy')) {
          div.setAttribute('id', `e${i}${j}`);
        } else {
          div.setAttribute('id', `${i}${j}`);
        }
      }
    }
  });
}

function hoverOn(e, l) {
  const axis = document.getElementById('axis');
  const str = e.target.id;
  const xPos = parseInt(str[0]);
  const yPos = parseInt(str[1]);
  if (axis.innerText === 'h') {
    if ((yPos + l - 1) <= 9) {
      for (let i = 0; i < l; i++) {
        const div = document.getElementById(`${xPos}${yPos + i}`);
        if (div.style.backgroundColor === '') { div.style.backgroundColor = 'lightblue'; }
      }
    }
  } else if (axis.innerText === 'v') {
    if ((xPos + l - 1) <= 9) {
      for (let i = 0; i < l; i++) {
        const div = document.getElementById(`${xPos + i}${yPos}`);
        if (div.style.backgroundColor === '') { div.style.backgroundColor = 'lightblue'; }
      }
    }
  }
}

function hoverOff(e, l) {
  const axis = document.getElementById('axis');
  const str = e.target.id;
  const xPos = parseInt(str[0]);
  const yPos = parseInt(str[1]);

  if (axis.innerText === 'h') {
    if ((yPos + l - 1) <= 9) {
      for (let i = 0; i < l; i++) {
        const div = document.getElementById(`${xPos}${yPos + i}`);
        if (div.style.backgroundColor === 'lightblue') { div.style.backgroundColor = ''; }
      }
    }
  } else if (axis.innerText === 'v') {
    if ((xPos + l - 1) <= 9) {
      for (let i = 0; i < l; i++) {
        const div = document.getElementById(`${xPos + i}${yPos}`);
        if (div.style.backgroundColor === 'lightblue') { div.style.backgroundColor = ''; }
      }
    }
  }
}

function rotateAxis() {
  const axis = document.getElementById('axis');
  if (axis.innerText === 'h') return axis.innerText = 'v';
  axis.innerText = 'h';
}

function isInBoard(x, y) {
  if (x >= 0 && x <= 9
    && y >= 0 && y <= 9) { return true; }
}

function isLegal(xPos, yPos) {
  const dx = [-1, -1, -1, 0, 0, 1, 1, 1];
  const dy = [-1, 0, 1, -1, 1, -1, 0, 1];
  let x;
  let y;

  for (let i = 0; i < dx.length; i++) {
    x = xPos + dx[i];
    y = yPos + dy[i];
    if (isInBoard(x, y)) {
      const div = document.getElementById(`${x}${y}`);

      if (div.style.backgroundColor === 'blue') return false;
    }
  }
}

function markShip(e, l) {
  const clickCounter = document.getElementById('click-counter');
  const axis = document.getElementById('axis');
  const str = e.target.id;
  const xPos = parseInt(str[0]);
  const yPos = parseInt(str[1]);

  if (axis.innerText === 'h') {
    for (let i = 0; i < l; i++) {
      const div = document.getElementById(`${xPos}${yPos + i}`);
      div.style.backgroundColor = 'blue';
    }
  } else {
    for (let i = 0; i < l; i++) {
      const div = document.getElementById(`${xPos + i}${yPos}`);
      div.style.backgroundColor = 'blue';
    }
  }

  clickCounter.innerText = parseInt(clickCounter.innerText) + 1;
}

// function placeShip(e, l) {
//   const axis = document.getElementById('axis');
//   const str = e.target.id;
//   const headX = parseInt(str[0]);
//   const headY = parseInt(str[1]);

//   if (axis.innerText === 'h') {
//     const tailX = headX;
//     const tailY = headY + l - 1;
//     if (isLegal(headX, headY) !== false
//     && isLegal(tailX, tailY) !== false) { markShip(e, l); }
//   } else if (axis.innerText === 'v') {
//     const tailX = headX + l - 1;
//     const tailY = headY;
//     if (isLegal(headX, headY) !== false
//     && isLegal(tailX, tailY) !== false) { markShip(e, l); }
//   }
// }

function renderPlayerBoard(board) {
  const ships = [];

  for (let i = 0; i < 10; i++) {
    for (let j = 0; j < 10; j++) {
      if (typeof board[i][j] === 'object') { ships.push(board[i][j]); }
    }
  }

  ships.forEach((e) => {
    if (e.axis === 'h') {
      for (let i = 0; i < e.ship.length; i++) {
        const div = document.getElementById(`p${e.coord[0]}${e.coord[1] + i}`);
        div.style.backgroundColor = 'green';
      }
    } else {
      for (let i = 0; i < e.ship.length; i++) {
        const div = document.getElementById(`p${e.coord[0] + i}${e.coord[1]}`);
        div.style.backgroundColor = 'green';
      }
    }
  });
}

function renderPlayerAttack(isHit, xPos, yPos) {
  const div = document.getElementById(`e${xPos}${yPos}`);
  if (div.style.backgroundColor === '') {
    if (isHit) div.style.backgroundColor = 'red';
    else div.style.backgroundColor = 'yellow';
  }
}

function renderEnemyAttack(coord, isHit) {
  const div = document.getElementById(`p${coord[0]}${coord[1]}`);
  if (isHit) div.style.backgroundColor = 'red';
  else div.style.backgroundColor = 'yellow';
}

function openModal(modal) {
  const overlay = document.getElementById('overlay');

  if (modal == null) return;
  modal.classList.add('active');
  overlay.classList.add('active');
}

function closeModal(modal) {
  const overlay = document.getElementById('overlay');

  if (modal == null) return;
  modal.classList.remove('active');
  overlay.classList.remove('active');
}

function renderWin(player) {
  const gameOverModal = document.getElementById('game-over');
  gameOverModal.firstElementChild.innerText = `${player} Won!`;
  openModal(gameOverModal);
}

function renderNewBoards() {
  const boards = document.querySelectorAll('.board');
  boards.forEach((board) => {
    const boardDivs = board.children;
    for (let i = 0; i < boardDivs.length; i++) {
      boardDivs[i].style.backgroundColor = '';
    }
  });
}

function resetBoards() {
  const gameOverModal = document.getElementById('game-over');
  closeModal(gameOverModal);
  renderNewBoards();
}

export {
  createBoard, renderPlayerBoard, renderPlayerAttack, renderEnemyAttack,
  renderWin, closeModal, openModal, resetBoards, rotateAxis, hoverOn, hoverOff, markShip, isLegal,
};
