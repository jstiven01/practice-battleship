const UI = (() => {
  const boardPlayer1 = document.getElementById('board-player-1');
  const boardPlayer2 = document.getElementById('board-player-2');

  const renderInitialBoards = (player, gameBoard) => {
    let divRender;
    if (player.type === 'H') {
      divRender = boardPlayer1;
    } else {
      divRender = boardPlayer2;
    }
    divRender.innerHTML = '';
    for (let i = 0; i < gameBoard.getBoard().length; i += 1) {
      const divGroup = document.createElement('div');
      divGroup.setAttribute('class', 'btn-group size-board');
      for (let j = 0; j < gameBoard.getBoard().length; j += 1) {
        const button = document.createElement('button');
        button.setAttribute('class', 'm-1 size-button');
        button.setAttribute('id', `btn${i}${j}`);
        if (player.type === 'H') button.classList.add(`color-button-${gameBoard.getBoard()[i][j]}`);
        if (player.type === 'C') {
          button.classList.add('button-position-player2');
          button.setAttribute('data-row', `${i}`);
          button.setAttribute('data-column', `${j}`);
        }
        divGroup.appendChild(button);
      }
      divRender.appendChild(divGroup);
    }
  };

  const renderAttackBoard = (player, gameBoard, position = {}, e = null) => {
    if (player.type === 'H') {
      renderInitialBoards(player, gameBoard);
    } else {
      e.target.classList.add(`color-button-${gameBoard.getBoard()[position.row][position.column]}`);
    }
  };

  const disablePlayer = () => {
    const boardPlayer2 = document.getElementById('board-player-2');
    boardPlayer2.classList.toggle('disable-player');
  };


  return {
    renderInitialBoards, disablePlayer, renderAttackBoard,
  };
})();

export default UI;