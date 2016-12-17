/**
 * Created by Viacheslav on 20.11.2016.
 */
import AbstractView from '../templates/AbstractView';
import {Extra, extraClassName, extraTitle, Points, StatsTitle} from '../data/type-data';
import ProgressView from '../templates/ProgressView';
import Application from '../Application';

export default class StatsView extends AbstractView {
  constructor(currentState) {
    super();
    this.state = currentState;
  }

  isGameOverTitle() {
    return this.state.livesCount > 0 ? StatsTitle.WIN : StatsTitle.LOSE;
  }

  getCorrectCount() {
    return this.state.answers.filter((time) => time > 0);
  }

  getFastCount() {
    return this.state.answers.filter((time) => time > 20);
  }

  getSlowCount() {
    return this.state.answers.filter((time) => time < 10 && time !== false);
  }

  getStatsCount() {
    const statsCount = [];

    statsCount[Extra.FAST] = this.getFastCount().length;
    statsCount[Extra.LIFE] = this.state.livesCount;
    statsCount[Extra.SLOW] = this.getSlowCount().length;

    return statsCount;
  }

  getFinal() {
    const statsCount = this.getStatsCount();
    return this.getCorrectCount().length * Points.CORRECT
                                          + Points.BONUS * (statsCount[Extra.FAST] + statsCount[Extra.LIFE])
                                          - Points.BONUS * statsCount[Extra.SLOW];
  }

  getExtra() {
    const statsCount = this.getStatsCount();

    let tpl = '';
    for (let i = 0; i < statsCount.length; i++) {
      if (statsCount[i]) {
        tpl += `<tr>
        <td></td>
        <td class="result__extra">${extraTitle.get(i)}</td>
        <td class="result__extra">
          ${statsCount[i]}&nbsp;
          <span class="stats__result ${extraClassName.get(i)}"></span>
        </td>
        <td class="result__points">×&nbsp;${Points.BONUS}</td>
        <td class="result__total">${statsCount[i] * Points.BONUS}</td>
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
          <td class="result__total">${this.getCorrectCount().length * Points.CORRECT}</td>
        </tr>
        ${this.getExtra()}
        <tr>
          <td colspan="5" class="result__total  result__total--final">${this.getFinal()}</td>
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
