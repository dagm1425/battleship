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
        } else {
          div.setAttribute('id', `e${i}${j}`);
        }
      }
    }
  });
}

function renderPlayerBoard(board) {
  const ships = [];

  for (let i = 0; i < 10; i++) {
    for (let j = 0; j < 10; j++) {
      if (typeof board[i][j] === 'object') { ships.push(board[i][j]); }
    }
  }

  ships.forEach((e) => {
    for (let i = 0; i < e.ship.length; i++) {
      const div = document.getElementById(`p${e.coord[0]}${e.coord[1] + i}`);
      div.style.backgroundColor = 'green';
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

export {
  createBoard, renderPlayerBoard, renderPlayerAttack, renderEnemyAttack,
};
