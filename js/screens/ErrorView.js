/**
 * Created by Viacheslav on 20.11.2016.
 */

import AbstractView from '../templates/AbstractView';

export default class ErrorView extends AbstractView {
  getMarkup() {
    return `
      <div id="intro" class="intro">
        <h1 class="intro__asterisk">:(</h1>
          <p class="intro__motto">Что-то пошло не так...</p>
      </div>`;
  }
}
