/**
 * Created by Viacheslav on 20.11.2016.
 */
import getElementFromTemplate from './getElement.js';
import game2Element from './game-2.js';
import insertBlock from './page.js';

const game = {
  timer: 'NN',
  task: 'Угадайте для каждого изображения фото или рисунок?',
  answers: {
    photo: 'Фото',
    paint: 'Рисунок'
  }
};

const header = `<header class="header">
      <div class="header__back">
          <span class="back">
            <img src="img/arrow_left.svg" width="45" height="45" alt="Back">
            <img src="img/logo_small.png" width="101" height="44">
          </span>
      </div>
      <h1 class="game__timer">${game.timer}</h1>
      <div class="game__lives">
        <img src="img/heart__empty.svg" class="game__heart" alt="Life" width="32" height="32">
        <img src="img/heart__full.svg" class="game__heart" alt="Life" width="32" height="32">
        <img src="img/heart__full.svg" class="game__heart" alt="Life" width="32" height="32">
      </div>
    </header>`;

const question = `
      <p class="game__task">${game.task}</p>
      <form class="game__content">
        <div class="game__option">
          <img src="http://placehold.it/468x458" alt="Option 1" width="468" height="458">
          <label class="game__answer game__answer--photo">
            <input name="question1" type="radio" value="photo">
            <span>${game.answers.photo}</span>
          </label>
          <label class="game__answer game__answer--paint">
            <input name="question1" type="radio" value="paint">
            <span>${game.answers.paint}</span>
          </label>
        </div>
        <div class="game__option">
          <img src="http://placehold.it/468x458" alt="Option 2" width="468" height="458">
          <label class="game__answer  game__answer--photo">
            <input name="question2" type="radio" value="photo">
            <span>${game.answers.photo}</span>
          </label>
          <label class="game__answer  game__answer--paint">
            <input name="question2" type="radio" value="paint">
            <span>${game.answers.paint}</span>
          </label>
        </div>
      </form>`;

const stats = `<div class="stats">
        <ul class="stats">
          <li class="stats__result stats__result--wrong"></li>
          <li class="stats__result stats__result--slow"></li>
          <li class="stats__result stats__result--fast"></li>
          <li class="stats__result stats__result--correct"></li>
          <li class="stats__result stats__result--unknown"></li>
          <li class="stats__result stats__result--unknown"></li>
          <li class="stats__result stats__result--unknown"></li>
          <li class="stats__result stats__result--unknown"></li>
          <li class="stats__result stats__result--unknown"></li>
          <li class="stats__result stats__result--unknown"></li>
        </ul>
      </div>`;

const screen = `
      ${header}
      <div class="game">
        ${question}        
        ${stats}
      </div>`;

const game1Element = getElementFromTemplate(screen);

const container = game1Element.querySelector('.game');

const onClick = (evt) => {
  let target = evt.target;
  while (target !== container) {
    if (target.classList.contains('game__answer')) {
      insertBlock(game2Element);
      break;
    }
    target = target.parentNode;
  }
  evt.preventDefault();
};

container.addEventListener('click', onClick);

export default game1Element;
