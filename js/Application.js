/**
 * Created by slavash on 16.12.2016.
 */

import IntroView from './screens/IntroView';
import GreetingView from './screens/GreetingView';
import RulesView from './screens/RulesView';
import StatsView from './screens/StatsView';
import GamePresenter from './GamePresenter';
import GameModel from './data/GameModel';
import ErrorView from './screens/ErrorView';

const main = document.getElementById('main');
const changeView = (element) => {
  main.innerHTML = '';
  main.appendChild(element);
};

let questionData;
let userName;

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
    const gamePresenter = new GamePresenter(new GameModel(questionData));
    gamePresenter.onStart();
    changeView(gamePresenter.root);
  }

  static showStats(stats) {
    const statsView = new StatsView(stats, questionData, userName);
    changeView(statsView.element);
  }

  static set data(data) {
    questionData = data;
  }

  static set user(name) {
    userName = name;
  }

  static showError() {
    const errorView = new ErrorView();
    changeView(errorView.element);
  }
}
