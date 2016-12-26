/**
 * Created by Viacheslav on 20.11.2016.
 */
import AbstractView from '../templates/AbstractView';
import {
  Extra,
  extraTitle,
  Points,
  Result,
  extraPoints
} from '../data/type-data';
import ProgressView from '../templates/ProgressView';

export default class ResultView extends AbstractView {
  constructor(result, questionData, resultNumber) {
    super();
    this.result = result;
    this.number = resultNumber;
    this.data = questionData;
    this.extraClassName = new Map([
      [Extra.FAST, 'stats__result--fast'],
      [Extra.LIFE, 'stats__result--heart'],
      [Extra.SLOW, 'stats__result--slow']
    ]);
  }

  getExtraCount() {
    const statsCount = [];

    statsCount[Extra.FAST] = this.result.stats.filter((answer) => answer === Result.FAST).length;
    statsCount[Extra.LIFE] = this.result.lives;
    statsCount[Extra.SLOW] = this.result.stats.filter((answer) => answer === Result.SLOW).length;

    return statsCount;
  }

  getExtraPoints() {
    const statsCount = this.getExtraCount();

    return statsCount.map((item, i) => extraPoints.get(i) * statsCount[i]);
  }

  getCorrectPoints() {
    const correctCount = this.result.stats.filter((answer) => answer !== Result.WRONG);
    return correctCount.length * Points.CORRECT;
  }

  getFinalPoints() {
    return this.getCorrectPoints() + this.getExtraPoints().reduce((sum, current) => sum + current);
  }

  getExtra() {
    const extraCount = this.getExtraCount();

    let tpl = '';
    for (let i = 0; i < extraCount.length; i++) {
      if (extraCount[i]) {
        tpl += `<tr>
        <td></td>
        <td class="result__extra">${extraTitle.get(i)}</td>
        <td class="result__extra">
          ${extraCount[i]}&nbsp;
          <span class="stats__result ${this.extraClassName.get(i)}"></span>
        </td>
        <td class="result__points">×&nbsp;${Math.abs(extraPoints.get(i))}</td>
        <td class="result__total">${this.getExtraPoints()[i]}</td>
      </tr>`;
      }
    }
    return tpl;
  }

  getMarkup() {
    let progressView = new ProgressView(this.result.stats, this.data);
    let tpl = '';

    if (this.result.lives > 0) {
      tpl = `
          <td class="result__points">×&nbsp;${Points.CORRECT}</td>
          <td class="result__total">${this.getCorrectPoints()}</td>
        </tr>
        ${this.getExtra()}
        <tr>
          <td colspan="5" class="result__total  result__total--final">${this.getFinalPoints()}</td>`;
    } else {
      tpl = `
        <td class="result__total"></td>
        <td class="result__total  result__total--final">fail</td>`;
    }

    return `        
      <table class="result__table">
        <tr>
          <td class="result__number">${this.number}.</td>
          <td colspan="2">
          ${progressView.getMarkup()}
          </td>
          ${tpl}
        </tr>
      </table>  
      </div>`;
  }
}
