/**
 * Created by Viacheslav on 27.11.2016.
 */
import AbstractView from './AbstractView';
import Application from '../Application';
import {gameState} from '../data/game-data';

export default class HeaderView extends AbstractView {
  constructor(currentState) {
    super();
    this._state = currentState;
  }

  setStopTimerCallback(callback) {
    this.stopTimer = callback;
  }

  _getHearts(currentState) {
    const MAX_LIVES = gameState.lives;
    const emptyHeartIcon = 'img/heart__empty.svg';
    const fullHeartIcon = 'img/heart__full.svg';

    let hearts = '';
    for (let i = MAX_LIVES; i > 0; i--) {
      hearts += `<img src="${currentState.lives < i ? emptyHeartIcon : fullHeartIcon}" class="game__heart" alt="Life" width="32" height="32">`;
    }
    return hearts;
  }

  getMarkup() {
    return `
      <header class="header">      
        ${HeaderView.getHeaderBack()}
        <div>
          <h1 class="game__timer">${this._state.time}</h1>
          </div>
          <div class="game__lives">
            ${this._getHearts(this._state)}
         </div>
      </header>`;
  }

  bindHandlers() {
    const backLinkLogo = this.element.querySelector('.header__back');

    backLinkLogo.style.cursor = 'pointer';

    const onBackClick = () => {
      if (this.stopTimer()) {
        this.stopTimer();
      }
      Application.showGame();
    };

    backLinkLogo.addEventListener('click', onBackClick);
  }

  clearHandlers() {
    this.stopTimer = null;
  }

  static getHeaderBack() {
    return `
        <div class="header__back">
          <span class="back">
            <img src="img/arrow_left.svg" width="45" height="45" alt="Back">
            <img src="img/logo_small.png" width="101" height="44">
          </span>
        </div>`;
  }
}


