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

class GamePresenter {

  constructor() {
    this.header = new HeaderView(gameModel.state);
    this.content = new QuestionView(gameModel.getCurrentScreen());
    this.progress = new ProgressView(gameModel.state);

    this.root = getElementFromTemplate('');
    this.root.appendChild(this.header.element);
    this.root.appendChild(this.content.element);
    this.content.element.appendChild(this.progress.element);

    this.interval = null;
  }

  onStart() {
    this.updateQuestion();

    this.interval = setInterval(() => {
      gameModel.tick();
      if (gameModel.isTimeOver()) {
        this.userChoiceHandler();
      }
      this.updateHeader();
    }, 1000);
  }

  onEnd() {
    clearInterval(this.interval);
    const statsView = new StatsView(gameModel.state);
    changeView(statsView.element);
  }

  updateHeader() {
    const header = new HeaderView(gameModel.state);
    this.root.replaceChild(header.element, this.header.element);
    this.header = header;
  }

  updateProgress() {
    const progress = new ProgressView(gameModel.state);
    this.content.element.replaceChild(progress.element, this.progress.element);
    this.progress = progress;
  }

  updateQuestion() {
    this.updateHeader();
    gameModel.resetTime();

    const questionView = new QuestionView(gameModel.getCurrentScreen());
    questionView.onUserChoice = this.userChoiceHandler.bind(this);
    this.changeContentView(questionView);
    this.updateProgress();
  }

  changeContentView(view) {
    this.root.replaceChild(view.element, this.content.element);
    view.element.appendChild(this.progress.element);
    this.content = view;
  }

  userChoiceHandler(userChoice) {
    if (userChoice) {
      gameModel.addScreenResult();
    } else {
      gameModel.addUserFail();
      this.onFail();
    }

    if (gameModel.hasNextScreen()) {
      gameModel.nextScreen();
      this.updateQuestion();
    } else {
      this.onEnd();
    }
  }

  onFail() {
    gameModel.lostLife();
    if (!gameModel.hasLives()) {
      this.onEnd();
    }
  }
}

const gamePresenter = new GamePresenter();

export default () => {
  gamePresenter.onStart();
  changeView(gamePresenter.root);
};
