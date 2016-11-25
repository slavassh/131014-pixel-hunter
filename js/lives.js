/**
 * Created by slavash on 25.11.2016.
 */
const lives = {
  empty: 'img/heart__empty.svg',
  full: 'img/heart__full.svg'
};

const lifebar = `
      <div class="game__lives">
        <img src="${lives.empty}" class="game__heart" alt="Life" width="32" height="32">
        <img src="${lives.full}" class="game__heart" alt="Life" width="32" height="32">
        <img src="${lives.full}" class="game__heart" alt="Life" width="32" height="32">
      </div>`;

export default lifebar;
