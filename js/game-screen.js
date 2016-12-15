/**
 * Created by Viacheslav on 20.11.2016.
 */
import {changeView} from './utils';
import {getElementFromTemplate} from './utils';

import HeaderView from './templates/HeaderView';
import QuestionView from './templates/QuestionView';
import ProgressView from './templates/ProgressView';
import GameModel from './data/GameModel';
import StatsView from './screens/StatsView';

const gameModel = new GameModel();
const root = getElementFromTemplate('');

const game = {
  header: new HeaderView(gameModel.state),
  content: new QuestionView(gameModel.getCurrentScreen()),
  progress: new ProgressView(gameModel.state),
  interval: null,

  onStart() {

    game.updateQuestion();

    game.interval = setInterval(() => {
      gameModel.tick();
      if (gameModel.isTimeOver()) {
        game.onFail();
        game.userChoiceHandler();
      }
      game.updateHeader();
    }, 1000);
  },

  onEnd() {
    clearInterval(game.interval);
    const statsView = new StatsView(gameModel.state);
    changeView(statsView.element);
  },

  updateHeader() {
    const header = new HeaderView(gameModel.state);
    root.replaceChild(header.element, game.header.element);
    game.header = header;
  },

  updateProgress() {
    const progress = new ProgressView(gameModel.state);
    game.content.element.replaceChild(progress.element, game.progress.element);
    game.progress = progress;
  },

  updateQuestion() {
    game.updateHeader();
    gameModel.resetTime();

    const questionView = new QuestionView(gameModel.getCurrentScreen());
    questionView.onUserChoice = game.userChoiceHandler;
    game.changeContentView(questionView);
    game.updateProgress();
  },

  changeContentView(view) {
    root.replaceChild(view.element, game.content.element);
    view.element.appendChild(game.progress.element);
    game.content = view;
  },

  userChoiceHandler(userChoice) {
    if (userChoice) {
      gameModel.addScreenResult();
    } else {
      gameModel.addUserFail();
      game.onFail();
    }
    if (gameModel.hasNextScreen()) {
      gameModel.nextScreen();
      game.updateQuestion();
    } else {
      game.onEnd();
    }
  },

  onFail() {
    gameModel.lostLife();
    if (!gameModel.hasLives()) {
      game.onEnd();
    }
  }
};

root.appendChild(game.header.element);
root.appendChild(game.content.element);
game.content.element.appendChild(game.progress.element);

export default () => {
  game.onStart();
  changeView(root);
};
