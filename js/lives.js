/**
 * Created by slavash on 25.11.2016.
 */
let livesCount = 2;
const MAX_LIVES = 3;

const emptyHeartIcon = 'img/heart__empty.svg';
const fullHeartIcon = 'img/heart__full.svg';

const lives = () => {
  let hearts = '';
  for (let i = MAX_LIVES; i > 0; i--) {
    hearts += `<img src="${ livesCount < i ? emptyHeartIcon : fullHeartIcon}" class="game__heart" alt="Life" width="32" height="32">`;
  }
  return hearts;
};

const lifebar = `
      <div class="game__lives">
        ${lives()}
      </div>`;

export default lifebar;
