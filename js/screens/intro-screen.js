/**
 * Created by Viacheslav on 20.11.2016.
 */
import {changeView} from '../utils';
import greetingView from './greeting-screen';
import AbstractView from '../templates/view';

class IntroView extends AbstractView {
  getMarkup() {
    return `
      <div id="intro" class="intro">
        <h1 class="intro__asterisk">*</h1>
          <p class="intro__motto"><sup>*</sup> Это не фото. Это рисунок маслом нидерландского художника-фотореалиста Tjalf
            Sparnaay.</p>
      </div>`;
  }

  bindHandlers() {
    const greetingsButton = this.element.querySelector('.intro__asterisk');

    const onClick = (evt) => {
      evt.preventDefault();
      changeView(greetingView.element);
    };

    greetingsButton.addEventListener('click', onClick);
  }
}

export default new IntroView();
