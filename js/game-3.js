/**
 * Created by Viacheslav on 20.11.2016.
 */
import getElementFromTemplate from './getElement.js';
import statsElement from './stats.js';
import insertBlock from './page.js';
import stats from './templates/status.js';
import header from './templates/header.js';
import question from './templates/question-3.js';

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
