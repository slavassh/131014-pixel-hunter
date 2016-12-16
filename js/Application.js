/**
 * Created by slavash on 16.12.2016.
 */

import IntroView from './screens/IntroView';
import GreetingView from './screens/GreetingView';
import RulesView from './screens/RulesView';
import StatsView from './screens/StatsView';
import GamePresenter from './GamePresenter';

const main = document.getElementById('main');
const changeView = (element) => {
  main.innerHTML = '';
  main.appendChild(element);
};

export default class Application {

  static showIntro() {
    const introView = new IntroView();
    changeView(introView.element);
  }

  static showGreeting() {
    const greetingView = new GreetingView();
    changeView(greetingView.element);
  }

  static showRules() {
    const rulesView = new RulesView();
    changeView(rulesView.element);
  }

  static showGame() {
    const gamePresenter = new GamePresenter();
    gamePresenter.onStart();
    changeView(gamePresenter.root);
  }

  static showStats(stats) {
    const statsView = new StatsView(stats);
    changeView(statsView.element);
  }
}
