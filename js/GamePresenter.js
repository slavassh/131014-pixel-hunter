/**
 * Created by Viacheslav on 20.11.2016.
 */
import HeaderView from './templates/HeaderView';
import QuestionView from './templates/QuestionView';
import ProgressView from './templates/ProgressView';
import GameModel from './data/GameModel';
import Application from './Application';

const gameModel = new GameModel();

export default class GamePresenter {

  constructor() {
    this.header = new HeaderView(gameModel.state);
    this.content = new QuestionView(gameModel.getCurrentScreen());
    this.progress = new ProgressView(gameModel.state);

    this.root = document.createElement('div');
    this.root.appendChild(this.header.element);
    this.root.appendChild(this.content.element);
    this.content.element.appendChild(this.progress.element);

    this.interval = null;
  }

  onStart() {
    gameModel.resetGameState();

    this.updateHeader();
    this.updateQuestion();
    this.updateProgress();

    this.interval = setInterval(() => {
      gameModel.tick();
      if (gameModel.isTimeOver()) {
        this.onUserChoice();
      }
      this.updateHeader();
    }, 1000);
  }

  stopTimer() {
    clearInterval(this.interval);
  }

  onEnd() {
    this.stopTimer();
    Application.showStats(gameModel.state);
  }

  updateHeader() {
    const header = new HeaderView(gameModel.state);
    header.stopTimer = this.stopTimer.bind(this);
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
    questionView.onUserChoice = this.onUserChoice.bind(this);
    this.changeContentView(questionView);
    this.updateProgress();
  }

  changeContentView(view) {
    this.root.replaceChild(view.element, this.content.element);
    view.element.appendChild(this.progress.element);
    this.content = view;
  }

  onUserChoice(userChoice) {
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
