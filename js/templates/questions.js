/**
 * Created by Viacheslav on 27.11.2016.
 */
import {game} from '../data/game-data.js';

const gameContainer = document.createElement('div');
gameContainer.classList.add('game');

const question = (data) => {
  if (data.task === game.questions[0]) {
    const question1 = () => {
      let tpl = '';
      for (let i = 0; i < data.answers.length; i++) {
        tpl += `<div class="game__option">
                  <img src="${data.answers[i].image}" alt="Option ${i}" width="468" height="458">
                  <label class="game__answer game__answer--photo">
                    <input name="question${i}" type="radio" value="photo">
                    <span>Фотография</span>
                  </label>
                  <label class="game__answer game__answer--paint">
                    <input name="question${i}" type="radio" value="paint">
                    <span>Рисунок</span>
                  </label>
                </div>`;
      }
      return tpl;
    };
    gameContainer.innerHTML = `<p class="game__task">${data.task}</p>
          <form class="game__content">
            ${question1()}
            </div>
          </form>`;
  } else if (data.task === game.questions[1]) {
    gameContainer.innerHTML = `<p class="game__task">${data.task}</p>
            <form class="game__content  game__content--wide">
              <div class="game__option">
                <img src="${data.answers[0].image}" alt="Option 1" width="705" height="455">
                <label class="game__answer  game__answer--photo">
                  <input name="question1" type="radio" value="photo">
                  <span>Фотография</span>
                </label>
                <label class="game__answer  game__answer--wide  game__answer--paint">
                  <input name="question1" type="radio" value="paint">
                  <span>Рисунок</span>
                </label>
              </div>
            </form>`;
  } else if (data.task === game.questions[2]) {
    const question3 = () => {
      let tpl = '';
      for (let i = 0; i < data.answers.length; i++) {
        tpl += `<div class="game__option">
                  <img src="${data.answers[i].image}" alt="Option ${i}" width="304" height="455">
                </div>`;
      }
      return tpl;
    };
    gameContainer.innerHTML = `<p class="game__task">${data.task}</p>
            <form class="game__content  game__content--triple">
              ${question3()}
            </form>`;
  }
  return gameContainer;
};

export default question;
