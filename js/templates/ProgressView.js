/**
 * Created by slavash on 25.11.2016.
 */
import AbstractView from './AbstractView';
import {Result} from '../data/type-data';

let parseAnswer = (answer) => {
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
};

export default class ProgressView extends AbstractView {
  constructor(currentState) {
    super();
    this.state = currentState;
    this.progressClassName = new Map([
      [Result.CORRECT, 'stats__result--correct'],
      [Result.WRONG, 'stats__result--wrong'],
      [Result.SLOW, 'stats__result--slow'],
      [Result.FAST, 'stats__result--fast'],
      [Result.UNKNOWN, 'stats__result--unknown']
    ]);
  }

  getStats() {
    return this.state.screens.map((screen, i) => {
      const className = this.progressClassName.get(parseAnswer(this.state.userAnswers[i]));
      return `<li class="stats__result  ${className}"></li>`;
    }).join('');
  }

  getMarkup() {
    return `
      <ul class="stats">
        ${this.getStats()}
      </ul>`;
  }

  addClass() {
    this.element.classList.add('stats');
  }
}

