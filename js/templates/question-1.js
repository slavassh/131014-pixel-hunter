/**
 * Created by Viacheslav on 27.11.2016.
 */

const question = (data) => {
  return `<p class="game__task">${data.task}</p>
  <form class="game__content">
    <div class="game__option">
      <img src="${data.answers.image}" alt="Option 1" width="468" height="458">
      <label class="game__answer game__answer--photo">
        <input name="question1" type="radio" value="photo">
        <span>${data.answers.photo}</span>
      </label>
      <label class="game__answer game__answer--paint">
        <input name="question1" type="radio" value="paint">
        <span>${data.answers.paint}</span>
      </label>
    </div>
    <div class="game__option">
      <img src="${data.answers.image}" alt="Option 2" width="468" height="458">
      <label class="game__answer  game__answer--photo">
        <input name="question2" type="radio" value="photo">
        <span>${data.answers.photo}</span>
      </label>
      <label class="game__answer  game__answer--paint">
        <input name="question2" type="radio" value="paint">
        <span>${data.answers.paint}</span>
      </label>
    </div>
  </form>`;
};

export default question;
