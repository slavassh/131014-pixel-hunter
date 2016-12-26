/**
 * Created by Viacheslav on 20.11.2016.
 */
import AbstractView from '../templates/AbstractView';
import {StatsTitle} from '../data/type-data';
import ResultView from '../templates/ResultView';
import Application from '../Application';

export default class StatsView extends AbstractView {
  constructor(currentState, questionData, userName) {
    super();
    this.state = currentState;
    this.data = questionData;
    this.user = userName;
    this.number = 1;
    this.result = [{
      'date': Date.now(),
      'stats': this.state.stats,
      'lives': this.state.lives
    }];
  }

  isGameOverTitle() {
    return this.state.lives > 0 ? StatsTitle.WIN : StatsTitle.LOSE;
  }

  getStatsHistory() {
    const status = (response) => {
      if (response.status >= 200 && response.status < 300) {
        return response;
      } else if (response.status === 404) {
        return false;
      } else {
        throw new Error(`${response.status}: ${response.statusText}`);
      }
    };

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
    const status = (response) => {
      if (response.status >= 200 && response.status < 300) {
        return response;
      } else {
        throw new Error(`${response.status}: ${response.statusText}`);
      }
    };

    window.fetch(`https://intensive-ecmascript-server-dxttmcdylw.now.sh/pixel-hunter/stats/${this.user}`, {
      method: 'POST',
      body: JSON.stringify(this.result[0]),
      headers: {
        'Content-Type': 'application/json'
      }
    }).
        then(status);
  }

  getMarkup() {

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
      </div>`;
  }

  addResults(results) {
    const resultsContainer = this.element.querySelector('.result');
    results.forEach((result) => {
      let resultView = new ResultView(result, this.data, this.number++);
      resultsContainer.appendChild(resultView.element);
    });

  }

  bindHandlers() {
    this.addResults(this.result);
    this.getStatsHistory();

    const backLinkLogo = this.element.querySelector('.header__back');

    backLinkLogo.style.cursor = 'pointer';

    const onBackClick = () => {
      Application.showGame();
    };

    backLinkLogo.addEventListener('click', onBackClick);
  }
}
