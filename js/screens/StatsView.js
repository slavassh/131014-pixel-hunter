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
    this.results = [{
      'date': Date.now(),
      'stats': this.state.stats,
      'lives': this.state.lives
    }];
  }

  isGameOverTitle() {
    return this.state.lives > 0 ? StatsTitle.WIN : StatsTitle.LOSE;
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
      body: JSON.stringify(this.results[0]),
      headers: {
        'Content-Type': 'application/json'
      }
    }).
        then(status).
        catch(Application.showError);
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

  addResults() {
    let resultView = new ResultView(this.results[0], this.data);
    const resultsContainter = this.element.querySelector('.result');

    resultsContainter.appendChild(resultView.element);
  }

  bindHandlers() {
    this.addResults();
    this.postStats();

    const backLinkLogo = this.element.querySelector('.header__back');

    backLinkLogo.style.cursor = 'pointer';

    const onBackClick = () => {
      Application.showGame();
    };

    backLinkLogo.addEventListener('click', onBackClick);
  }
}
