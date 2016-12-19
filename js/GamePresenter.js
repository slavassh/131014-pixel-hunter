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
    this.headerView = new HeaderView(gameModel.state);
    this.contentView = new QuestionView(gameModel.getCurrentScreen());
    this.progressView = new ProgressView(gameModel.state);

    this.root = document.createElement('div');
    this.root.appendChild(this.headerView.element);
    this.root.appendChild(this.contentView.element);
    this.contentView.element.appendChild(this.progressView.element);

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
    header.setStopTimerCallback(this.stopTimer.bind(this));
    this.root.replaceChild(header.element, this.headerView.element);
    this.headerView = header;
  }

  updateProgress() {
    const progress = new ProgressView(gameModel.state);
    this.contentView.element.replaceChild(progress.element, this.progressView.element);
    this.progressView = progress;
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
    this.root.replaceChild(view.element, this.contentView.element);
    view.element.appendChild(this.progressView.element);
    this.contentView = view;
  }

  onUserChoice(userChoice) {
    if (userChoice) {
      gameModel.addScreenResult();
    } else {
      gameModel.addUserFail();
      gameModel.lostLife();
    }

    if (gameModel.hasNextScreen() && gameModel.hasLives()) {
      gameModel.nextScreen();
      this.updateQuestion();
    } else {
      this.onEnd();
    }
  }
}
