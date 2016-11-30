/**
 * Created by Viacheslav on 27.11.2016.
 */

import lives from './lives.js';

const timer = 'NN';

export default () => {
  return `<header class="header">
    <div class="header__back">
      <span class="back">
        <img src="img/arrow_left.svg" width="45" height="45" alt="Back">
        <img src="img/logo_small.png" width="101" height="44">
      </span>
    </div>
    <h1 class="game__timer">${timer}</h1>
    ${lives}
  </header>`;
};

