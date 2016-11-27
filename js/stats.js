/**
 * Created by Viacheslav on 20.11.2016.
 */
import getElementFromTemplate from './getElement.js';
import stats from './status.js';

const resume = {
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
  result2: {
    number: 2,
    stats: {
      total: 'fail',
    }
  },
  result3: {
    number: 3,
    stats: {
      points: 100,
      total: 900,
    },
    extra: {
      life: {
        title: 'Бонус за жизни:',
        points: 50,
        count: 2,
        total: 100,
      }
    },
    final: 950
  }
};

const header = `
    <header class="header">
      <div class="header__back">
        <span class="back">
          <img src="img/arrow_left.svg" width="45" height="45" alt="Back">
          <img src="img/logo_small.png" width="101" height="44">
        </span>
      </div>
    </header>`;

const headline = `<h1>${resume.head}</h1>`;

const table1 = `
      <table class="result__table">
        <tr>
          <td class="result__number">${resume.result1.number}.</td>
          <td colspan="2">
            ${stats}
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
      </table>`;

const table2 = `<table class="result__table">
        <tr>
          <td class="result__number">${resume.result2.number}.</td>
          <td>
            ${stats}
          </td>
          <td class="result__total"></td>
          <td class="result__total  result__total--final">${resume.result1.stats.total}</td>
        </tr>
      </table>`;

const table3 = `<table class="result__table">
        <tr>
          <td class="result__number">${resume.result3.number}.</td>
          <td colspan="2">
            ${stats}
          </td>
          <td class="result__points">×&nbsp;${resume.result3.stats.points}</td>
          <td class="result__total">${resume.result3.stats.total}</td>
        </tr>
        <tr>
          <td></td>
          <td class="result__extra">${resume.result3.extra.life.title}</td>
          <td class="result__extra">${resume.result3.extra.life.count}&nbsp;<span class="stats__result stats__result--heart"></span></td>
          <td class="result__points">×&nbsp;${resume.result3.extra.life.points}</td>
          <td class="result__total">${resume.result3.extra.life.total}</td>
        </tr>
        <tr>
          <td colspan="5" class="result__total  result__total--final">${resume.result3.final}</td>
        </tr>
      </table>`;

const screen = `
      ${header}
      <div class="result">
        ${headline}
        ${table1}
        ${table2}
        ${table3}
      </div>`;

const statsElement = getElementFromTemplate(screen);

export default statsElement;
