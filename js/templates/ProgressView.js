/**
 * Created by slavash on 25.11.2016.
 */
import AbstractView from './AbstractView';
import {Result, progressClassName} from '../data/task-type';

export default class ProgressView extends AbstractView {
  constructor(currentState) {
    super();
    this.state = currentState;
  }

  getStats() {
    let result;
    let tpl = '';
    for (let i = 0; i < this.state.screens.length; i++) {
      if (this.answers[i] === false) {
        result = Result.WRONG;
      } else if (this.answers[i] === 'unknown') {
        result = Result.UNKNOWN;
      } else if (this.answers[i] > 20) {
        result = Result.FAST;
      } else if (this.answers[i] >= 10 && this.answers[i] <= 20) {
        result = Result.CORRECT;
      } else if (this.answers[i] < 10) {
        result = Result.SLOW;
      }
      tpl += `<li class="stats__result  ${progressClassName.get(result)}"></li>`;
    }
    return tpl;
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

