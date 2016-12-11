/**
 * Created by Viacheslav on 27.11.2016.
 */
import AbstractView from './view';

export default class HeaderView extends AbstractView {
  constructor(currentState) {
    super();
    this.state = currentState;
  }

  update(newState) {
    this.state = newState;
    this.element.innerHTML = this.getMarkup();
  }

  _getHearts(currentState) {
    const MAX_LIVES = 3;
    const emptyHeartIcon = 'img/heart__empty.svg';
    const fullHeartIcon = 'img/heart__full.svg';

    let hearts = '';
    for (let i = MAX_LIVES; i > 0; i--) {
      hearts += `<img src="${currentState.livesCount < i ? emptyHeartIcon : fullHeartIcon}" class="game__heart" alt="Life" width="32" height="32">`;
    }
    return hearts;
  }

  getMarkup() {
    return `
      <header class="header">
        <div class="header__back">
          <span class="back">
            <img src="img/arrow_left.svg" width="45" height="45" alt="Back">
            <img src="img/logo_small.png" width="101" height="44">
          </span>
        </div>
        <h1 class="game__timer">${this.state.time}</h1>
        <div class="game__lives">
          ${this._getHearts(this.state)}
        </div>
      </header>`;
  }
}
