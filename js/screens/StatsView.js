/**
 * Created by Viacheslav on 20.11.2016.
 */
import AbstractView from '../templates/AbstractView';
import {
  Extra,
  extraTitle,
  Points,
  StatsTitle,
  extraPoints
} from '../data/type-data';
import ProgressView from '../templates/ProgressView';
import Application from '../Application';

export default class StatsView extends AbstractView {
  constructor(currentState) {
    super();
    this.state = currentState;
    this.extraClassName = new Map([
      [Extra.FAST, 'stats__result--fast'],
      [Extra.LIFE, 'stats__result--heart'],
      [Extra.SLOW, 'stats__result--slow']
    ]);
  }

  isGameOverTitle() {
    return this.state.livesCount > 0 ? StatsTitle.WIN : StatsTitle.LOSE;
  }

  getExtraCount() {
    const statsCount = [];

    statsCount[Extra.FAST] = this.state.userAnswers.filter((time) => time > 20).length;
    statsCount[Extra.LIFE] = this.state.livesCount;
    statsCount[Extra.SLOW] = this.state.userAnswers.filter((time) => time < 10 && time !== false).length;

    return statsCount;
  }

  getExtraPoints() {
    const statsCount = this.getExtraCount();

    return statsCount.map((item, i) => extraPoints.get(i) * statsCount[i]);
  }

  getCorrectPoints() {
    const correctCount = this.state.userAnswers.filter((time) => time > 0);
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
    const progressView = new ProgressView(this.state);

    return `
      <header class="header">
        <div class="header__back">
          <a title="Переиграть" class="back">
            <img src="img/arrow_left.svg" width="45" height="45" alt="Back">
            <img src="img/logo_small.png" width="101" height="44">
          </a>
        </div>
      </header>
      
      <div class="result">
      
      <h1>${this.isGameOverTitle()}</h1>
        
      <table class="result__table">
        <tr>
          <td class="result__number">1.</td>
          <td colspan="2">
          ${progressView.getMarkup()}
          </td>
          <td class="result__points">×&nbsp;${Points.CORRECT}</td>
          <td class="result__total">${this.getCorrectPoints()}</td>
        </tr>
        ${this.getExtra()}
        <tr>
          <td colspan="5" class="result__total  result__total--final">${this.getFinalPoints()}</td>
        </tr>
      </table>  
      </div>`;
  }

  bindHandlers() {
    const backLinkLogo = this.element.querySelector('.header__back');

    backLinkLogo.style.cursor = 'pointer';

    const onBackClick = () => {
      Application.showGame();
    };

    backLinkLogo.addEventListener('click', onBackClick);
  }
}
