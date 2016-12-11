/**
 * Created by Viacheslav on 20.11.2016.
 */
import {changeView} from './utils';
import renderStats from './templates/status';
import HeaderView from './templates/header-view';
import QuestionView from './templates/question-view';
import GameView from './templates/game-view';
import {gameState} from './data/game-data';
import {setScreen, getScreen, setTime, setLives} from './data/process';
import statsScreen from './stats';

const gameView = new GameView();
let currentState = gameState;
let interval = null;

const updateHeader = (state) => {
  gameView.header = new HeaderView(state);
};

const updateQuestion = (screen) => {
  const questionView = new QuestionView(screen);
  gameView.question = questionView;
  questionView.onUserChoice = userChoiceHandler;
};

updateQuestion(getScreen(currentState.screenNumber));

const userChoiceHandler = (userChoice) => {
  console.dir(userChoice);
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

const onStart = (state = gameState) => {
  currentState = state;

  screenUpdate();

  interval = setInterval(() => {
    currentState = setTime(currentState, currentState.time - 1);
    if (currentState.time === 0) {
      onFail();
      userChoiceHandler(currentState);
    }
    updateHeader(currentState);
  }, 1000);

  changeView(gameView.element);
};

const onEnd = () => {
  clearInterval(interval);
  changeView(statsScreen);
};

const screenUpdate = () => {
  updateHeader(currentState);
  updateQuestion(getScreen(currentState.screenNumber));
};

export default onStart;
