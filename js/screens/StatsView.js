/**
 * Created by Viacheslav on 20.11.2016.
 */
import AbstractView from '../templates/AbstractView';

const resume = {
  progress: 'Здесь будет прогрессбар',
  head: 'Победа!',
  result1: {
    number: 1,
    stats: {
      points: 100,
      total: 900,
    },
    extra: {
      speed: {
        title: 'Бонус за скорость:',
        points: 50,
        count: 1,
        total: 50
      },
      life: {
        title: 'Бонус за жизни:',
        points: 50,
        count: 2,
        total: 100,
      },
      slow: {
        title: 'Штраф за медлительность:',
        points: 50,
        count: 2,
        total: -100,
      }
    },
    final: 950,
  },
};

export default class StatsView extends AbstractView {
  constructor(currentState) {
    super();
    this.state = currentState;
  }

  getMarkup() {
    return `
      <header class="header">
        <div class="header__back">
          <span class="back">
            <img src="img/arrow_left.svg" width="45" height="45" alt="Back">
            <img src="img/logo_small.png" width="101" height="44">
          </span>
        </div>
      </header>
      
      <div class="result">
      
      <h1>${resume.head}</h1>
        
      <table class="result__table">
        <tr>
          <td class="result__number">${resume.result1.number}.</td>
          <td colspan="2">
          ${resume.progress}
          </td>
          <td class="result__points">×&nbsp;${resume.result1.stats.points}</td>
          <td class="result__total">${resume.result1.stats.total}</td>
        </tr>
        <tr>
          <td></td>
          <td class="result__extra">${resume.result1.extra.speed.title}</td>
          <td class="result__extra">${resume.result1.extra.speed.count}&nbsp;<span class="stats__result stats__result--fast"></span></td>
          <td class="result__points">×&nbsp;${resume.result1.extra.speed.points}</td>
          <td class="result__total">${resume.result1.extra.speed.total}</td>
        </tr>
        <tr>
          <td></td>
          <td class="result__extra">${resume.result1.extra.life.title}</td>
          <td class="result__extra">${resume.result1.extra.life.count}&nbsp;<span class="stats__result stats__result--heart"></span></td>
          <td class="result__points">×&nbsp;${resume.result1.extra.life.points}</td>
          <td class="result__total">${resume.result1.extra.life.total}</td>
        </tr>
        <tr>
          <td></td>
          <td class="result__extra">${resume.result1.extra.slow.title}</td>
          <td class="result__extra">${resume.result1.extra.slow.count}&nbsp;<span class="stats__result stats__result--slow"></span></td>
          <td class="result__points">×&nbsp;${resume.result1.extra.slow.points}</td>
          <td class="result__total">${resume.result1.extra.slow.total}</td>
        </tr>
        <tr>
          <td colspan="5" class="result__total  result__total--final">${resume.result1.final}</td>
        </tr>
      </table>  
      </div>`;
  }
}
