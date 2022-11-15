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

function hoverOn(e) {
  const axis = document.getElementById('axis');
  const str = e.target.id;
  const xPos = parseInt(str[0]);
  const yPos = parseInt(str[1]);
  const lengths = [5, 4, 3, 3, 2];
  const clickCounter = document.getElementById('click-counter');
  const l = lengths[parseInt(clickCounter.innerText)];

  if (axis.innerText === 'h') {
    if ((yPos + l - 1) <= 9) {
      for (let i = 0; i < l; i++) {
        const div = document.getElementById(`${xPos}${yPos + i}`);
        if (div.style.backgroundColor === '') { div.style.backgroundColor = 'rgb(28, 241, 213)'; }
      }
    }
  } else if (axis.innerText === 'v') {
    if ((xPos + l - 1) <= 9) {
      for (let i = 0; i < l; i++) {
        const div = document.getElementById(`${xPos + i}${yPos}`);
        if (div.style.backgroundColor === '') { div.style.backgroundColor = 'rgb(28, 241, 213)'; }
      }
    }
  }
}

function hoverOff(e) {
  const axis = document.getElementById('axis');
  const str = e.target.id;
  const xPos = parseInt(str[0]);
  const yPos = parseInt(str[1]);
  const lengths = [5, 4, 3, 3, 2];
  const clickCounter = document.getElementById('click-counter');
  const l = lengths[parseInt(clickCounter.innerText)];

  if (axis.innerText === 'h') {
    if ((yPos + l - 1) <= 9) {
      for (let i = 0; i < l; i++) {
        const div = document.getElementById(`${xPos}${yPos + i}`);
        if (div.style.backgroundColor === 'rgb(28, 241, 213)') { div.style.backgroundColor = ''; }
      }
    }
  } else if (axis.innerText === 'v') {
    if ((xPos + l - 1) <= 9) {
      for (let i = 0; i < l; i++) {
        const div = document.getElementById(`${xPos + i}${yPos}`);
        if (div.style.backgroundColor === 'rgb(28, 241, 213)') { div.style.backgroundColor = ''; }
      }
    }
  }
}

function rotateAxis() {
  const axis = document.getElementById('axis');
  if (axis.innerText === 'h') return axis.innerText = 'v';
  axis.innerText = 'h';
}

function markShip(e, l) {
  const axis = document.getElementById('axis');
  const str = e.target.id;
  const xPos = parseInt(str[0]);
  const yPos = parseInt(str[1]);

  if (axis.innerText === 'h') {
    for (let i = 0; i < l; i++) {
      const div = document.getElementById(`${xPos}${yPos + i}`);
      div.style.backgroundColor = 'rgb(118, 143, 156)';
    }
  } else {
    for (let i = 0; i < l; i++) {
      const div = document.getElementById(`${xPos + i}${yPos}`);
      div.style.backgroundColor = 'rgb(118, 143, 156)';
    }
  }
}

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
        div.style.backgroundColor = 'rgb(118, 143, 156)';
      }
    } else {
      for (let i = 0; i < e.ship.length; i++) {
        const div = document.getElementById(`p${e.coord[0] + i}${e.coord[1]}`);
        div.style.backgroundColor = 'rgb(118, 143, 156)';
      }
    }
  });
}

function renderPlayerAttack(isHit, xPos, yPos) {
  const div = document.getElementById(`e${xPos}${yPos}`);
  if (div.style.backgroundColor === '') {
    if (isHit) div.style.backgroundColor = 'rgb(255, 45, 0)';
    else div.style.backgroundColor = 'rgb(218, 247, 166)';
  }
}

function renderEnemyAttack(coord, isHit) {
  const div = document.getElementById(`p${coord[0]}${coord[1]}`);
  if (isHit) div.style.backgroundColor = 'rgb(255, 45, 0)';
  else div.style.backgroundColor = 'rgb(218, 247, 166)';
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
  renderWin, closeModal, openModal, resetBoards, rotateAxis, hoverOn, hoverOff, markShip,
};
