/**
 * Created by Viacheslav on 20.11.2016.
 */
import {getElementFromTemplate, insertBlock} from './utils';
import renderStats from './templates/status';
import renderHeader from './templates/header';
import renderQuestion from './templates/questions';
import {gameState} from './data/game-data';
import {setScreen, getScreen, setTime, setLives} from './data/process';
import statsScreen from './stats';

let currentState = gameState;
let interval = null;

const gameElement = getElementFromTemplate('');
const headerElement = renderHeader(currentState);
const questionElement = renderQuestion(getScreen(currentState.screenNumber));
const statsElement = renderStats();

gameElement.appendChild(headerElement);
gameElement.appendChild(questionElement);
questionElement.appendChild(statsElement);

const updateHeader = (state) => {
  renderHeader(state);
};

const updateQuestion = (state) => {
  renderQuestion(getScreen(state.screenNumber));
};

const container = gameElement.querySelector('.game');

const nextQuestion = () => {
  container.removeEventListener('click', onClick);

  currentState = setScreen(currentState, currentState.screenNumber + 1);
  if (currentState.screenNumber < (gameState.screens.length - 1)) {
    updateQuestion(currentState);
    container.addEventListener('click', onClick);
    currentState = setTime(currentState, gameState.time);
    updateHeader(currentState);
  } else {
    onEnd();
  }
};

const onFail = () => {
  currentState = setLives(currentState, currentState.livesCount - 1);
  if (currentState.livesCount === 0) {
    onEnd();
  }
};

const onClick = (evt) => {
  let targetClass = '';

  if (gameElement.querySelector('.game__answer')) {
    targetClass = 'game__answer';
  } else {
    targetClass = 'game__option';
  }

  let target = evt.target;
  while (target !== container) {
    if (target.classList.contains(targetClass)) {
      nextQuestion(currentState);
      break;
    }
    target = target.parentNode;
  }
  evt.preventDefault();
};

container.addEventListener('click', onClick);

const onStart = () => {
  interval = setInterval(() => {
    currentState = setTime(currentState, currentState.time - 1);
    if (currentState.time === 0) {
      onFail();
      nextQuestion(currentState);
    }
    updateHeader(currentState);
  }, 1000);
};

const onEnd = () => {
  clearInterval(interval);
  insertBlock(statsScreen);
};

const screenUpdate = () => {
  insertBlock(gameElement);
  onStart();
};

export default screenUpdate;
