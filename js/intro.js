/**
 * Created by Viacheslav on 20.11.2016.
 */
import {getElementFromTemplate, insertBlock} from './utils.js';
import greetingElement from './greeting.js';

const introElement = getElementFromTemplate(
    `<div id="intro" class="intro">
      <h1 class="intro__asterisk">*</h1>
        <p class="intro__motto"><sup>*</sup> Это не фото. Это рисунок маслом нидерландского художника-фотореалиста Tjalf
          Sparnaay.</p>
    </div>`
);

const greetingsButton = introElement.querySelector('.intro__asterisk');

const onClick = (evt) => {
  evt.preventDefault();
  insertBlock(greetingElement);
};

greetingsButton.addEventListener('click', onClick);

export default introElement;
