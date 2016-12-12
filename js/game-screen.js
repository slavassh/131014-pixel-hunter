/**
 * Created by Viacheslav on 20.11.2016.
 */
import {changeView} from './utils';
import {getElementFromTemplate} from './utils';

import HeaderView from './templates/header-view';
import QuestionView from './templates/question-view';
import GameModel from './data/game-model';
import statsScreen from './stats';

const gameModel = new GameModel();
const root = getElementFromTemplate('');

const game = {
  header: new HeaderView(gameModel.state),
  content: new QuestionView(gameModel.getCurrentScreen()),
  interval: null,

  onStart() {

    game.updateQuestion();

    game.interval = setInterval(() => {
      gameModel.tick();
      if (gameModel.timeIsUp()) {
        game.onFail();
        game.userChoiceHandler();
      }
      game.updateHeader();
    }, 1000);
  },

  onEnd() {
    clearInterval(game.interval);
    changeView(statsScreen);
  },

  updateHeader() {
    const header = new HeaderView(gameModel.state);
    root.replaceChild(header.element, game.header.element);
    game.header = header;
  },

  updateQuestion() {
    game.updateHeader();
    gameModel.resetTime();

    const questionView = new QuestionView(gameModel.getCurrentScreen());
    questionView.onUserChoice = game.userChoiceHandler;
    game.changeContentView(questionView);
  },

  changeContentView(view) {
    root.replaceChild(view.element, game.content.element);
    game.content = view;
  },

  userChoiceHandler(userChoice) {

    gameModel.nextScreen();
    if (gameModel.state.screenNumber < (gameModel.state.screens.length - 1)) {
      game.updateQuestion();
    } else {
      game.onEnd();
    }
  },

  onFail() {
    gameModel.lostLife();
    if (gameModel.lostAllLives()) {
      game.onEnd();
    }
  }
};

root.appendChild(game.header.element);
root.appendChild(game.content.element);

export default () => {
  game.onStart();
  changeView(root);
};
