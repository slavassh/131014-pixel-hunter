/**
 * Created by Viacheslav on 20.11.2016.
 */
import HeaderView from './templates/HeaderView';
import QuestionView from './templates/QuestionView';
import ProgressView from './templates/ProgressView';
import Application from './Application';
import {Result} from './data/type-data';

export default class GamePresenter {

  constructor(gameModel) {
    this._model = gameModel;
    this._headerView = new HeaderView(this._model._state);
    this._contentView = new QuestionView(this._model.getCurrentScreen());
    this._progressView = new ProgressView(this._model._state, this._model._data);

    this.root = document.createElement('div');
    this.root.appendChild(this._headerView.element);
    this.root.appendChild(this._contentView.element);
    this._contentView.element.appendChild(this._progressView.element);

    this._interval = null;
  }

  onStart() {
    this._model.resetGameState();

    this.updateHeader();
    this.updateQuestion();
    this.updateProgress();

    this._interval = setInterval(() => {
      this._model.tick();
      if (this._model.isTimeOver()) {
        this.onUserChoice(false);
      }
      this.updateHeader();
    }, 1000);
  }

  stopTimer() {
    clearInterval(this._interval);
  }

  onEnd() {
    this.stopTimer();
    Application.showStats(this._model._state);
  }

  updateHeader() {
    const header = new HeaderView(this._model._state);
    header.setStopTimerCallback(this.stopTimer.bind(this));
    this.root.replaceChild(header.element, this._headerView.element);
    this._headerView.clearHandlers();
    this._headerView = header;
  }

  updateProgress() {
    const progress = new ProgressView(this._model._state.stats, this._model._data);
    this._contentView.element.replaceChild(progress.element, this._progressView.element);
    this._progressView = progress;
  }

  updateQuestion() {
    this.updateHeader();
    this._model.resetTime();

    const questionView = new QuestionView(this._model.getCurrentScreen());
    questionView.onUserChoice = this.onUserChoice.bind(this);
    this.changeContentView(questionView);
    this.updateProgress();
  }

  changeContentView(view) {
    this.root.replaceChild(view.element, this._contentView.element);
    view.element.appendChild(this._progressView.element);
    this._contentView.clearHandlers();
    this._contentView = view;
  }

  onUserChoice(userChoice) {
    if (userChoice) {
      this._model.addScreenResult(this.parseAnswer(this._model._state.time));
    } else {
      this._model.addScreenResult(this.parseAnswer(userChoice));
      this._model.lostLife();
    }

    if (this._model.hasNextScreen() && this._model.hasLives()) {
      this._model.nextScreen();
      this.updateQuestion();
    } else {
      this.onEnd();
    }
  }

  parseAnswer(answer) {
    if (answer === void 0) {
      return Result.UNKNOWN;
    } else if (answer === false) {
      return Result.WRONG;
    } else if (answer > 20) {
      return Result.FAST;
    } else if (answer >= 10 && answer <= 20) {
      return Result.CORRECT;
    } else if (answer < 10) {
      return Result.SLOW;
    }
    return answer;
  }
}
