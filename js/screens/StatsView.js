/**
 * Created by Viacheslav on 20.11.2016.
 */
import AbstractView from '../templates/AbstractView';
import {StatsTitle} from '../data/type-data';
import ResultView from '../templates/ResultView';
import Application from '../Application';
import HeaderView from '../templates/HeaderView';
import {status} from '../utils';

export default class StatsView extends AbstractView {
  constructor(currentState, questionData, userName) {
    super();
    this._state = currentState;
    this._data = questionData;
    this.user = userName;
    this._number = 1;
    this._result = [{
      'date': Date.now(),
      'stats': this._state.stats,
      'lives': this._state.lives
    }];
  }

  isGameOverTitle() {
    return this._state.lives > 0 ? StatsTitle.WIN : StatsTitle.LOSE;
  }

  getStatsHistory() {
    const fetchStats = () => {
      this.postStats();
    };

    window.fetch(`https://intensive-ecmascript-server-dxttmcdylw.now.sh/pixel-hunter/stats/${this.user}`).
        then(status).
        then((response) => response.json()).
        then((data) => {
          this.addResults(data.reverse());
        }).
        then(fetchStats).
        catch(fetchStats);
  }

  postStats() {

    window.fetch(`https://intensive-ecmascript-server-dxttmcdylw.now.sh/pixel-hunter/stats/${this.user}`, {
      method: 'POST',
      body: JSON.stringify(this._result[0]),
      headers: {
        'Content-Type': 'application/json'
      }
    }).
        then(status);
  }

  getMarkup() {

    return `
      <header class="header">
        ${HeaderView.getHeaderBack()}
      </header>
      
      <div class="result">      
        <h1>${this.isGameOverTitle()}</h1>        
      </div>`;
  }

  addResults(results) {
    const resultsContainer = this.element.querySelector('.result');
    results.forEach((result) => {
      let resultView = new ResultView(result, this._data, this._number++);
      resultsContainer.appendChild(resultView.element);
    });

  }

  bindHandlers() {
    this.addResults(this._result);
    this.getStatsHistory();

    const backLinkLogo = this.element.querySelector('.header__back');

    backLinkLogo.style.cursor = 'pointer';

    const onBackClick = () => {
      Application.showGame();
    };

    backLinkLogo.addEventListener('click', onBackClick);
  }
}
