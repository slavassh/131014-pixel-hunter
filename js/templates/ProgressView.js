/**
 * Created by slavash on 25.11.2016.
 */
import AbstractView from './AbstractView';
import {Result} from '../data/type-data';

let parseAnswer = (answer) => {
  if (answer === void 0) {
    return Result.UNKNOWN;
  }
  return answer;
};

export default class ProgressView extends AbstractView {
  constructor(stats, questionData) {
    super();
    this.stats = stats;
    this.data = questionData;
    this.progressClassName = new Map([
      [Result.CORRECT, 'stats__result--correct'],
      [Result.WRONG, 'stats__result--wrong'],
      [Result.SLOW, 'stats__result--slow'],
      [Result.FAST, 'stats__result--fast'],
      [Result.UNKNOWN, 'stats__result--unknown']
    ]);
  }

  getStats() {
    return this.data.map((gameScreen, i) => {
      const className = this.progressClassName.get(parseAnswer(this.stats[i]));
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
    this.element.classList.add('_state');
  }
}

