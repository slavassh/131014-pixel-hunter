/**
 * Created by Viacheslav on 27.11.2016.
 */

const data = {
  task: 'Угадай, фото или рисунок?',
  answers: {
    image: 'http://placehold.it/705x455',
    photo: 'Фото',
    paint: 'Рисунок'
  }
};

const question = `
      <p class="game__task">${data.task}</p>
      <form class="game__content  game__content--wide">
        <div class="game__option">
          <img src="${data.answers.image}" alt="Option 1" width="705" height="455">
          <label class="game__answer  game__answer--photo">
            <input name="question1" type="radio" value="photo">
            <span>${data.answers.photo}</span>
          </label>
          <label class="game__answer  game__answer--wide  game__answer--paint">
            <input name="question1" type="radio" value="paint">
            <span>${data.answers.paint}</span>
          </label>
        </div>
      </form>`;

export default question;
