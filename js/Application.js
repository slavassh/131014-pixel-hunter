/**
 * Created by slavash on 16.12.2016.
 */

import IntroView from './screens/IntroView';
import GreetingView from './screens/GreetingView';
import RulesView from './screens/RulesView';
import StatsView from './screens/StatsView';

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

  static showGame() {
    changeView(newGame());
  }

  static showStats(stats) {
    changeView(showStats(stats))
  }

}
