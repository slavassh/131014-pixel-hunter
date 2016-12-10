/**
 * Created by Viacheslav on 20.11.2016.
 */
import {getElementFromTemplate, changeView} from './utils';
import renderStats from './templates/status';
import renderHeader from './templates/header';
import QuestionView from './templates/question-view';
import {gameState} from './data/game-data';
import {setScreen, getScreen, setTime, setLives} from './data/process';
import statsScreen from './stats';

let currentState = gameState;
let interval = null;

const gameElement = getElementFromTemplate('');
const headerElement = renderHeader(currentState);
const questionElement = new QuestionView(getScreen(currentState.screenNumber));
const statsElement = renderStats();

gameElement.appendChild(headerElement);
gameElement.appendChild(questionElement.element);
// questionElement.appendChild(statsElement);

const updateHeader = (state) => {
  renderHeader(state);
};

const updateQuestion = (state) => {
  // new QuestionView(getScreen(state.screenNumber));
};

const container = gameElement.querySelector('.game');

const nextQuestion = () => {
  currentState = setScreen(currentState, currentState.screenNumber + 1);
  if (currentState.screenNumber < (gameState.screens.length - 1)) {
    updateQuestion(currentState);
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
  changeView(statsScreen);
};

/*const updateLevel = (level) => {
  const levelView = new LevelView(level);
  gameView.level = levelView;
  levelView.onAnswer = answerHandler;
};*/

const screenUpdate = (screenNumber) => {
/*  const QuestionView = new QuestionView(screenNumber);*/
  changeView(gameElement);
  onStart();
};

export default screenUpdate;
