/**
 * Created by Viacheslav on 27.11.2016.
 */
import {TaskType, AnswerType} from '../data/type-data';
import AbstractView from './AbstractView';
import imageLoader from '../image-loader/image-loader';

class QuestionView extends AbstractView {

  constructor(questionData) {
    super();
    this._data = questionData;
    this.typeClass = new Map([
      [TaskType.TWO_OF_TWO, 'game__content--double'],
      [TaskType.TINDER_LIKE, 'game__content--wide'],
      [TaskType.ONE_OF_THREE, 'game__content--triple']
    ]);
  }

  set onUserChoice(handler) {
    this._onUserChoice = handler;
  }

  getMarkup() {
    const answers = this._data.answers;

    let template = '';
    if (this._data.type === TaskType.TWO_OF_TWO) {
      for (let i = 0; i < answers.length; i++) {
        template += `<div class="game__option">
                  <img class="dummy-image">
                  <label class="game__answer game__answer--photo">
                    <input name="question${i}" type="radio" value="photo">
                    <span>Фотография</span>
                  </label>
                  <label class="game__answer game__answer--paint">
                    <input name="question${i}" type="radio" value="painting">
                    <span>Рисунок</span>
                  </label>
                </div>`;
      }
    } else if (this._data.type === TaskType.TINDER_LIKE) {
      template = `<div class="game__option">
                <img class="dummy-image">
                <label class="game__answer  game__answer--photo">
                  <input name="question0" type="radio" value="photo">
                  <span>Фотография</span>
                </label>
                <label class="game__answer  game__answer--wide  game__answer--paint">
                  <input name="question0" type="radio" value="painting">
                  <span>Рисунок</span>
                </label>
              </div>`;
    } else if (this._data.type === TaskType.ONE_OF_THREE) {
      for (let i = 0; i < answers.length; i++) {
        template += `<label class="game__option" for="question${i}">
                   <img class="dummy-image">
                   <input id="question${i}" name="question${i}" type="checkbox" value="painting">                   
                 </label>`;
      }
    }

    return `
      <p class="game__task">${this._data.question}</p>
      <form class="game__content  ${this.typeClass.get(this._data.type)}">
        ${template}
        </div>
      </form>`;
  }

  getImages() {

    let elementsToReplace = this.element.querySelectorAll('.dummy-image');

    let i = 0;
    for (let img of elementsToReplace) {
      imageLoader(img).load({
        url: this._data.answers[i].image.url,
        width: this._data.answers[i].image.width,
        height: this._data.answers[i].image.height
      });
      i++;
    }
  }

  bindHandlers() {

    const onClick = () => {
      if (this._data.type === TaskType.ONE_OF_THREE && isOptionChecked()) {
        this._onUserChoice(isOptionCorrect());
      } else if (this._data.type !== TaskType.ONE_OF_THREE && isAllQuestionsAnswered()) {
        this._onUserChoice(isAllAnswersCorrect());
      }
    };

    const getTripleTypeCorrect = () => {
      const optionOne = this._data.answers.filter((answer) => answer.type === AnswerType.PAINTING);
      const optionTwo = this._data.answers.filter((answer) => answer.type === AnswerType.PHOTO);
      let correct;
      if (optionOne.length < optionTwo.length) {
        correct = optionOne[0].type;
      } else {
        correct = optionTwo[0].type;
      }
      return correct;
    };

    const getAnswers = () => {
      let results = [];
      let checkedValue;
      let form = this.element.querySelector('form');

      if (this._data.type === TaskType.ONE_OF_THREE) {
        for (let i = 0; i < this._data.answers.length; i++) {
          results.push(form[`question${i}`].checked);
        }
      } else if (form.querySelector('input:checked')) {
        checkedValue = document.querySelectorAll('input:checked');
        for (let answer of checkedValue) {
          results.push(answer.value);
        }
      }

      return results;
    };

    const isAllQuestionsAnswered = () => {
      return getAnswers().length >= this._data.answers.length;
    };

    const isOptionChecked = () => {
      return getAnswers().some((answer) => answer === true);
    };

    const isOptionCorrect = () => {
      return this._data.answers[getAnswers().indexOf(true)].type === getTripleTypeCorrect();
    };

    const isAllAnswersCorrect = () => {
      return getAnswers().every((answer, i) => answer === this._data.answers[i].type);
    };

    this.element.addEventListener('click', onClick);

    this.getImages();
  }

  clearHandlers() {
    this._onUserChoice = null;
  }

  addClass() {
    this.element.classList.add('game');
  }
}

export default QuestionView;
