/**
 * Created by Viacheslav on 27.11.2016.
 */
import {taskType, questions} from '../data/task-type.js';

const gameContainer = document.createElement('div');
gameContainer.classList.add('game');

const screen = (data) => {
  if (data.type === taskType.DOUBLE) {
    const taskTypeTpl = () => {
      let tpl = '';
      for (let i = 0; i < data.options.length; i++) {
        tpl += `<div class="game__option">
                  <img src="${data.options[i].image}" alt="Option ${i}" width="468" height="458">
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
    gameContainer.innerHTML = `<p class="game__task">${questions[data.type]}</p>
          <form class="game__content">
            ${taskTypeTpl()}
            </div>
          </form>`;
  } else if (data.type === taskType.WIDE) {
    gameContainer.innerHTML = `<p class="game__task">${questions[data.type]}</p>
            <form class="game__content  game__content--wide">
              <div class="game__option">
                <img src="${data.options[0].image}" alt="Option 1" width="705" height="455">
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
  } else if (data.type === taskType.TRIPLE) {
    const taskTypeTpl = () => {
      let tpl = '';
      for (let i = 0; i < data.options.length; i++) {
        tpl += `<div class="game__option">
                  <img src="${data.options[i].image}" alt="Option ${i}" width="304" height="455">
                </div>`;
      }
      return tpl;
    };
    gameContainer.innerHTML = `<p class="game__task">${questions[data.type]}</p>
            <form class="game__content  game__content--triple">
              ${taskTypeTpl()}
            </form>`;
  }
  return gameContainer;
};

export default screen;
