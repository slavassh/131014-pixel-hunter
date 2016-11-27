/**
 * Created by Viacheslav on 20.11.2016.
 */
import getElementFromTemplate from './getElement.js';
import game3Element from './game-3.js';
import insertBlock from './page.js';
import stats from './templates/status.js';
import header from './templates/header.js';
import question from './templates/question-2.js';

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
