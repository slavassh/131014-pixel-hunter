/**
 * Created by Viacheslav on 20.11.2016.
 */
import AbstractView from '../templates/AbstractView';
import {
  Extra,
  Points,
  Result,
} from '../data/type-data';
import ProgressView from '../templates/ProgressView';

export default class ResultView extends AbstractView {
  constructor(result, questionData, resultNumber) {
    super();
    this._result = result;
    this._number = resultNumber;
    this._data = questionData;
    this.extraClassName = new Map([
      [Extra.FAST, 'stats__result--fast'],
      [Extra.LIFE, 'stats__result--heart'],
      [Extra.SLOW, 'stats__result--slow']
    ]);
    this.extraPoints = new Map([
      [Extra.FAST, Points.BONUS],
      [Extra.LIFE, Points.BONUS],
      [Extra.SLOW, -Points.BONUS]
    ]);

    this.extraTitle = new Map([
      [Extra.FAST, 'Бонус за скорость'],
      [Extra.LIFE, 'Бонус за жизни'],
      [Extra.SLOW, 'Штраф за медлительность']
    ]);
  }

  getExtraCount() {
    const statsCount = [];

    statsCount[Extra.FAST] = this._result.stats.filter((answer) => answer === Result.FAST).length;
    statsCount[Extra.LIFE] = this._result.lives;
    statsCount[Extra.SLOW] = this._result.stats.filter((answer) => answer === Result.SLOW).length;

    return statsCount;
  }

  getExtraPoints() {
    const statsCount = this.getExtraCount();

    return statsCount.map((item, i) => this.extraPoints.get(i) * statsCount[i]);
  }

  getCorrectPoints() {
    const correctCount = this._result.stats.filter((answer) => answer !== Result.WRONG);
    return correctCount.length * Points.CORRECT;
  }

  getFinalPoints() {
    return this.getCorrectPoints() + this.getExtraPoints().reduce((sum, current) => sum + current);
  }

  getExtra() {
    const extraCount = this.getExtraCount();

    let template = '';
    for (let i = 0; i < extraCount.length; i++) {
      if (extraCount[i]) {
        template += `<tr>
        <td></td>
        <td class="result__extra">${this.extraTitle.get(i)}</td>
        <td class="result__extra">
          ${extraCount[i]}&nbsp;
          <span class="stats__result ${this.extraClassName.get(i)}"></span>
        </td>
        <td class="result__points">×&nbsp;${Math.abs(this.extraPoints.get(i))}</td>
        <td class="result__total">${this.getExtraPoints()[i]}</td>
      </tr>`;
      }
    }
    return template;
  }

  getMarkup() {
    let progressView = new ProgressView(this._result.stats, this._data);

    let getWinTemplate = () => {
      return `
        <tr> 
          <td class="result__number">${this._number}.</td> 
          <td colspan="2"> 
            ${progressView.getMarkup()} 
          </td> 
          <td class="result__points">×&nbsp;${Points.CORRECT}</td> 
          <td class="result__total">${this.getCorrectPoints()}</td> 
        </tr> 
          ${this.getExtra()} 
        <tr> 
          <td colspan="5" class="result__total result__total--final">${this.getFinalPoints()}</td> 
        </tr>`;
    };

    let getFailTemplate = () => {
      return `
        <tr> 
          <td class="result__number">${this._number}.</td> 
          <td colspan="2"> 
            ${progressView.getMarkup()} 
          </td> 
          <td class="result__total"></td> 
          <td class="result__total result__total--final">fail</td> 
        </tr>`;
    };

    return `
        <table class="result__table"> 
          ${this._result.lives > 0 ? getWinTemplate() : getFailTemplate()} 
        </table> 
      </div>`;
  }

}
