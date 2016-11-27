/**
 * Created by Viacheslav on 20.11.2016.
 */
import getElementFromTemplate from './getElement.js';
import game3Element from './game-3.js';
import insertBlock from './page.js';
import stats from './status.js';
import lives from './lives.js';

const game = {
  timer: 'NN',
  task: 'Угадай, фото или рисунок?',
  answers: {
    image: 'http://placehold.it/705x455',
    photo: 'Фото',
    paint: 'Рисунок'
  }
};

const header = `
    <header class="header">
      <div class="header__back">
        <span class="back">
          <img src="img/arrow_left.svg" width="45" height="45" alt="Back">
          <img src="img/logo_small.png" width="101" height="44">
        </span>
      </div>
      <h1 class="game__timer">${game.timer}</h1>
      ${lives}
    </header>`;

const question = `
      <p class="game__task">${game.task}</p>
      <form class="game__content  game__content--wide">
        <div class="game__option">
          <img src="${game.answers.image}" alt="Option 1" width="705" height="455">
          <label class="game__answer  game__answer--photo">
            <input name="question1" type="radio" value="photo">
            <span>${game.answers.photo}</span>
          </label>
          <label class="game__answer  game__answer--wide  game__answer--paint">
            <input name="question1" type="radio" value="paint">
            <span>${game.answers.paint}</span>
          </label>
        </div>
      </form>`;

const screen = `
      ${header}
      <div class="game">
        ${question}        
        ${stats}
      </div>`;

const game2Element = getElementFromTemplate(screen);

const container = game2Element.querySelector('.game');

const onClick = (evt) => {
  let target = evt.target;
  while (target !== container) {
    if (target.classList.contains('game__answer')) {
      insertBlock(game3Element);
    }
    target = target.parentNode;
  }
  evt.preventDefault();
};

container.addEventListener('click', onClick);

export default game2Element;
