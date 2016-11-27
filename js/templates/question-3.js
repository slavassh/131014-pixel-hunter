/**
 * Created by Viacheslav on 27.11.2016.
 */

const data = {
  task: 'Найдите рисунок среди изображений',
  answers: {
    image: 'http://placehold.it/304x455',
    photo: 'Фото',
    paint: 'Рисунок'
  }
};

const question = `
      <p class="game__task">${data.task}</p>
      <form class="game__content  game__content--triple">
        <div class="game__option">
          <img src="${data.answers.image}" alt="Option 1" width="304" height="455">
        </div>
        <div class="game__option  game__option--selected">
          <img src="${data.answers.image}" alt="Option 1" width="304" height="455">
        </div>
        <div class="game__option">
          <img src="${data.answers.image}" alt="Option 1" width="304" height="455">
        </div>
      </form>`;

export default question;
