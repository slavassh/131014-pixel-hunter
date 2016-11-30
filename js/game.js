/**
 * Created by Viacheslav on 20.11.2016.
 */
import getElementFromTemplate from './getElement.js';
import insertBlock from './page.js';
import renderStats from './templates/status.js';
import renderHeader from './templates/header.js';
import renderQuestion from './templates/questions.js';
import {gameState, setScreen, getScreen} from './data/process.js';

let currentState = gameState;

const screenUpdate = () => {
  const gameElement = getElementFromTemplate(`
    ${renderHeader()}
    <div class="game">
      ${renderQuestion(getScreen(currentState.currentQuestion))}
      <div class="stats">
        ${renderStats()}
      </div>
     </div>`
  );

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
        currentState = setScreen(currentState, currentState.currentQuestion + 1);
        screenUpdate();
        break;
      }
      target = target.parentNode;
    }
    evt.preventDefault();
  };

  insertBlock(gameElement);
  container.addEventListener('click', onClick);
};

export default screenUpdate;
