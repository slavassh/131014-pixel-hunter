/**
 * Created by Viacheslav on 20.11.2016.
 */
import getElementFromTemplate from './getElement.js';
import insertBlock from './page.js';
import stats from './templates/status.js';
import header from './templates/header.js';

export default (data, question, nextScreen) => {
  const screen = `
    ${header}
      <div class="game">
        ${question(data)}
       <div class="stats">
        ${stats}
       </div>
      </div>`;

  const gameElement = getElementFromTemplate(screen);

  const container = gameElement.querySelector('.game');

  let targetClass = '';

  if (gameElement.querySelector('.game__answer')) {
    targetClass = 'game__answer';
  } else {
    targetClass = 'game__option';
  }

  const onClick = (evt) => {
    let target = evt.target;
    while (target !== container) {
      if (target.classList.contains(targetClass)) {
        insertBlock(nextScreen);
        break;
      }
      target = target.parentNode;
    }
    evt.preventDefault();
  };

  container.addEventListener('click', onClick);

  return gameElement;
};
