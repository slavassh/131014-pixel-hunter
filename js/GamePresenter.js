/**
 * Created by Viacheslav on 20.11.2016.
 */
import HeaderView from './templates/HeaderView';
import QuestionView from './templates/QuestionView';
import ProgressView from './templates/ProgressView';
import Application from './Application';

export default class GamePresenter {

  constructor(gameModel) {
    this.model = gameModel;
    this.headerView = new HeaderView(this.model.state);
    this.contentView = new QuestionView(this.model.getCurrentScreen());
    this.progressView = new ProgressView(this.model.state);

    this.root = document.createElement('div');
    this.root.appendChild(this.headerView.element);
    this.root.appendChild(this.contentView.element);
    this.contentView.element.appendChild(this.progressView.element);

    this.interval = null;
  }

  onStart() {
    this.model.resetGameState();

    this.updateHeader();
    this.updateQuestion();
    this.updateProgress();

    this.interval = setInterval(() => {
      this.model.tick();
      if (this.model.isTimeOver()) {
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
    Application.showStats(this.model.state);
  }

  updateHeader() {
    const header = new HeaderView(this.model.state);
    header.setStopTimerCallback(this.stopTimer.bind(this));
    this.root.replaceChild(header.element, this.headerView.element);
    this.headerView = header;
  }

  updateProgress() {
    const progress = new ProgressView(this.model.state);
    this.contentView.element.replaceChild(progress.element, this.progressView.element);
    this.progressView = progress;
  }

  updateQuestion() {
    this.updateHeader();
    this.model.resetTime();

    const questionView = new QuestionView(this.model.getCurrentScreen());
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
      this.model.addScreenResult();
    } else {
      this.model.addUserFail();
      this.model.lostLife();
    }

    if (this.model.hasNextScreen() && this.model.hasLives()) {
      this.model.nextScreen();
      this.updateQuestion();
    } else {
      this.onEnd();
    }
  }
}
