/**
 * Created by Viacheslav on 27.11.2016.
 */
import {game} from '../data/game-data.js';

const gameContainer = document.createElement('div');
gameContainer.classList.add('game');

const question = (data) => {
  if (data.task === game.questions['task-1']) {
    gameContainer.innerHTML = `<p class="game__task">${data.task}</p>
          <form class="game__content">
            <div class="game__option">
              <img src="${data.answers[0].image}" alt="Option 1" width="468" height="458">
              <label class="game__answer game__answer--photo">
                <input name="question1" type="radio" value="photo">
                <span>${data.answers[0].photo}</span>
              </label>
              <label class="game__answer game__answer--paint">
                <input name="question1" type="radio" value="paint">
                <span>${data.answers[0].paint}</span>
              </label>
            </div>
            <div class="game__option">
              <img src="${data.answers[1].image}" alt="Option 2" width="468" height="458">
              <label class="game__answer  game__answer--photo">
                <input name="question2" type="radio" value="photo">
                <span>${data.answers[1].photo}</span>
              </label>
              <label class="game__answer  game__answer--paint">
                <input name="question2" type="radio" value="paint">
                <span>${data.answers[1].paint}</span>
              </label>
            </div>
          </form>`;
  } else if (data.task === game.questions['task-2']) {
    gameContainer.innerHTML = `<p class="game__task">${data.task}</p>
            <form class="game__content  game__content--wide">
              <div class="game__option">
                <img src="${data.answers[0].image}" alt="Option 1" width="705" height="455">
                <label class="game__answer  game__answer--photo">
                  <input name="question1" type="radio" value="photo">
                  <span>${data.answers[0].photo}</span>
                </label>
                <label class="game__answer  game__answer--wide  game__answer--paint">
                  <input name="question1" type="radio" value="paint">
                  <span>${data.answers[0].paint}</span>
                </label>
              </div>
            </form>`;
  } else if (data.task === game.questions['task-3']) {
    gameContainer.innerHTML = `<p class="game__task">${data.task}</p>
            <form class="game__content  game__content--triple">
              <div class="game__option">
                <img src="${data.answers[0].image}" alt="Option 1" width="304" height="455">
              </div>
              <div class="game__option  game__option--selected">
                <img src="${data.answers[1].image}" alt="Option 1" width="304" height="455">
              </div>
              <div class="game__option">
                <img src="${data.answers[2].image}" alt="Option 1" width="304" height="455">
              </div>
            </form>`;
  }
  return gameContainer;
};

export default question;
