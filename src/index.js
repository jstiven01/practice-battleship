import './scss/style.scss';
import Player from './js/Player';
import GameBoard from './js/GameBoard';
import Ship from './js/Ship';
import UI from './js/UI';

const arrayShipsH = [Ship(5), Ship(4), Ship(3), Ship(3), Ship(2)];
const arrayShipsPC = [Ship(5), Ship(4), Ship(3), Ship(3), Ship(2)];
const playerHuman = Player('Player Human', 'H', arrayShipsH);
const playerPC = Player('Player Computer', 'C', arrayShipsPC);
const gameBoardH = GameBoard();
const gameBoardPC = GameBoard();
playerPC.setTurn(false);
playerHuman.setTurn(true);
playerHuman.setShips(gameBoardH);
playerPC.setShips(gameBoardPC);
UI.renderInitialBoards(playerHuman, gameBoardH);
UI.renderInitialBoards(playerPC, gameBoardPC);
const buttons = document.querySelectorAll('.button-position-player2');
const event = new Event('build');
const sectionPlayer1 = document.getElementById('section-player-1');


const playHuman = (e) => {
  if (!gameBoardPC.IsOver() && !gameBoardH.IsOver() && playerHuman.getTurn()) {
    const { row } = e.target.dataset;
    const { column } = e.target.dataset;
    playerHuman.attackRival(gameBoardPC, { row, column });
    UI.renderAttackBoard(playerPC, gameBoardPC, { row, column }, e);
    console.log('PlayHuman', gameBoardPC.getBoard());
    if (gameBoardPC.getIsHit()) {
      playerPC.setTurn(false);
      playerHuman.setTurn(true);
    } else {
      playerPC.setTurn(true);
      playerHuman.setTurn(false);
      UI.disablePlayer();
      sectionPlayer1.dispatchEvent(event);
    }
  }
};
const playComputer = () => {
  console.log('dispatch..');

  if (!gameBoardPC.IsOver() && !gameBoardH.IsOver() && playerPC.getTurn()) {
    playerPC.attackRival(gameBoardH);
    console.log('PlayPc', gameBoardPC.getBoard());
    UI.renderAttackBoard(playerHuman, gameBoardH);
    if (gameBoardH.getIsHit()) {
      playerPC.setTurn(true);
      playerHuman.setTurn(false);
      setTimeout(() => {
        sectionPlayer1.dispatchEvent(event);
      }, 3000);
    } else {
      setTimeout(UI.disablePlayer, 3000);
      playerPC.setTurn(false);
      playerHuman.setTurn(true);
    }
  }
};
buttons.forEach((button) => button.addEventListener('click', playHuman));
sectionPlayer1.addEventListener('build', playComputer);
