/**
 * Created by Viacheslav on 27.11.2016.
 */

import lives from './lives.js';

const header = document.createElement('header');
header.classList.add('header');

export default (data) => {
  header.innerHTML = `
    <div class="header__back">
      <span class="back">
        <img src="img/arrow_left.svg" width="45" height="45" alt="Back">
        <img src="img/logo_small.png" width="101" height="44">
      </span>
    </div>
    <h1 class="game__timer">${data.time}</h1>
    <div class="game__lives">
        ${lives(data)}
      </div>`;
  return header;
};

