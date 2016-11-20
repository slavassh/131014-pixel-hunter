/**
 * Created by Viacheslav on 20.11.2016.
 */
import getElementFromTemplate from './getElement.js';

const introElement = getElementFromTemplate(
    `<div id="intro" class="intro">
      <h1 class="intro__asterisk">*</h1>
        <p class="intro__motto"><sup>*</sup> Это не фото. Это рисунок маслом нидерландского художника-фотореалиста Tjalf
          Sparnaay.</p>
    </div>`
);
export default introElement;
