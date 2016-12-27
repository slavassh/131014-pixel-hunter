/**
 * Created by Viacheslav on 20.11.2016.
 */
import Application from '../Application';
import AbstractView from '../templates/AbstractView';
import HeaderView from '../templates/HeaderView';

export default class RulesView extends AbstractView {
  getMarkup() {
    return `
      <header class="header">
        ${HeaderView.getHeaderBack()}
      </header>
      <div class="rules  central--none">
        <h1 class="rules__title">Правила</h1>
        <p class="rules__description">Угадай 10 раз для каждого изображения фото <img
          src="img/photo_icon.png" width="16" height="16"> или рисунок <img
          src="img/paint_icon.png" width="16" height="16" alt="">.<br>
          Фотографиями или рисунками могут быть оба изображения.<br>
          На каждую попытку отводится 30 секунд.<br>
          Ошибиться можно не более 3 раз.<br>
          <br>
          Готовы?
        </p>
        <form class="rules__form">
          <input class="rules__input" type="text" placeholder="Ваше Имя">
          <button class="rules__button  continue" type="submit" disabled>Go!</button>
        </form>
      </div>`;
  }

  bindHandlers() {
    const rulesBack = this.element.querySelector('.header__back');
    const rulesSubmit = this.element.querySelector('.rules__button');
    const rulesInput = this.element.querySelector('.rules__input');

    rulesBack.style.cursor = 'pointer';

    const onBackClick = () => {
      Application.showGreeting();
    };

    const onNameInput = () => {
      if (rulesInput.value) {
        rulesSubmit.removeAttribute('disabled');
      } else {
        rulesSubmit.setAttribute('disabled', '');
      }
    };

    const onSubmit = (evt) => {
      evt.preventDefault();

      Application.user = rulesInput.value;
      Application.showGame();
    };

    rulesBack.addEventListener('click', onBackClick);
    rulesInput.addEventListener('input', onNameInput);
    rulesSubmit.addEventListener('click', onSubmit);
  }
}
