/**
 * Created by Viacheslav on 20.11.2016.
 */
import getElementFromTemplate from './getElement.js';
import rulesElement from './rules.js';
import insertBlock from './page.js';

const welcome = {
  asterisk: '*',
  content: {
    title: 'Лучшие художники-фотореалисты бросают&nbsp;тебе&nbsp;вызов!',
    text: `Правила игры просты.<br>
            Нужно отличить рисунок&nbsp;от фотографии и сделать выбор.<br>
            Задача кажется тривиальной, но не думай, что все так просто.<br>
            Фотореализм обманчив и коварен.<br>
            Помни, главное — смотреть очень внимательно.`
  },
  logo: '<img src="img/logo_big.png" width="201" height="89" alt="Pixel Hunter">',
  continue: '<img src="img/arrow_right.svg" width="64" height="64" alt="Next">'
};

const head = `<h1 class="greeting__asterisk">${welcome.asterisk}</h1>`;

const content = `<div class="greeting__logo">${welcome.logo}</div>
      <div class="greeting__challenge">
      <h3>${welcome.content.title}</h3>
      <p>${welcome.content.text}</p>
      </div>`;

const footer = `<div class="greeting__continue"><span>${welcome.continue}</span></div>`;

const article = `
      ${head}
      <div class="greeting  central--blur">
        ${content}
      </div>
      <footer>
        ${footer};
      </footer>`

const greetingElement = getElementFromTemplate(article);

const rulesArrow = greetingElement.querySelector('.greeting__continue');

const onClick = (evt) => {
  evt.preventDefault();
  insertBlock(rulesElement);
};

rulesArrow.addEventListener('click', onClick);

export default greetingElement;
