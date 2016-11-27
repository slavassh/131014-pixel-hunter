/**
 * Created by Viacheslav on 20.11.2016.
 */
import getElementFromTemplate from './getElement.js';
import statsElement from './stats.js';
import insertBlock from './page.js';
import stats from './status.js';
import lives from './lives.js';

const game = {
  timer: 'NN',
  task: 'Найдите рисунок среди изображений',
  answers: {
    image: 'http://placehold.it/304x455',
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
      <form class="game__content  game__content--triple">
        <div class="game__option">
          <img src="${game.answers.image}" alt="Option 1" width="304" height="455">
        </div>
        <div class="game__option  game__option--selected">
          <img src="${game.answers.image}" alt="Option 1" width="304" height="455">
        </div>
        <div class="game__option">
          <img src="${game.answers.image}" alt="Option 1" width="304" height="455">
        </div>
      </form>`;

const screen = `
      ${header}
      <div class="game">
        ${question}        
        ${stats}
      </div>`;

const game3Element = getElementFromTemplate(screen);

const container = game3Element.querySelector('.game');

const onClick = (evt) => {
  let target = evt.target;
  while (target !== container) {
    if (target.classList.contains('game__option')) {
      insertBlock(statsElement);
    }
    target = target.parentNode;
  }
  evt.preventDefault();
};

container.addEventListener('click', onClick);

export default game3Element;
