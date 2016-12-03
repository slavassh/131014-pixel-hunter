/**
 * Created by slavash on 25.11.2016.
 */
const stats = {
  wrong: 'stats__result--wrong',
  slow: 'stats__result--slow',
  fast: 'stats__result--fast',
  correct: 'stats__result--correct',
  unknown: 'stats__result--unknown'
};

const statsContainer = document.createElement('div');

statsContainer.classList.add('stats');

export default () => {
  statsContainer.innerHTML = `<ul class="stats">
    <li class="stats__result ${stats.wrong}"></li>
    <li class="stats__result ${stats.slow}"></li>
    <li class="stats__result ${stats.fast}"></li>
    <li class="stats__result ${stats.correct}"></li>
    <li class="stats__result ${stats.unknown}"></li>
    <li class="stats__result ${stats.slow}"></li>
    <li class="stats__result ${stats.unknown}"></li>
    <li class="stats__result ${stats.fast}"></li>
    <li class="stats__result ${stats.unknown}"></li>
    <li class="stats__result ${stats.wrong}"></li>
  </ul>`;
  return statsContainer;
};

