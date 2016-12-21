/**
 * Created by Viacheslav on 27.11.2016.
 */
import {TaskType, AnswerType} from '../data/type-data';
import AbstractView from './AbstractView';
import imageLoader from '../image-loader/image-loader';

class QuestionView extends AbstractView {

  constructor(questionData) {
    super();
    this.data = questionData;
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
    const answers = this.data.answers;
    let tpl = '';
    if (this.data.type === TaskType.TWO_OF_TWO) {
      for (let i = 0; i < answers.length; i++) {
        tpl += `<div class="game__option">
                  <img src="${answers[i].image.url}" alt="Option ${i}" width="${answers[i].image.width}" height="${answers[i].image.height}">
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
    } else if (this.data.type === TaskType.TINDER_LIKE) {
      tpl = `<div class="game__option">
                <img src="${answers[0].image.url}" alt="Option 1" width="${answers[0].image.width}" height="${answers[0].image.height}">
                <label class="game__answer  game__answer--photo">
                  <input name="question0" type="radio" value="photo">
                  <span>Фотография</span>
                </label>
                <label class="game__answer  game__answer--wide  game__answer--paint">
                  <input name="question0" type="radio" value="painting">
                  <span>Рисунок</span>
                </label>
              </div>`;
    } else if (this.data.type === TaskType.ONE_OF_THREE) {
      for (let i = 0; i < answers.length; i++) {
        tpl += `<label class="game__option" for="question${i}">
                   <img src="${answers[i].image.url}" alt="Option ${i}" width="${answers[i].image.width}" height="${answers[i].image.height}">
                   <input id="question${i}" name="question${i}" type="checkbox" value="painting">                   
                 </label>`;
      }
    }

    return `
      <p class="game__task">${this.data.question}</p>
      <form class="game__content  ${this.typeClass.get(this.data.type)}">
        ${tpl}
        </div>
      </form>`;
  }

  bindHandlers() {

    const onClick = () => {
      if (this.data.type === TaskType.ONE_OF_THREE && isOptionChecked()) {
        this._onUserChoice(isOptionCorrect());
      } else if (this.data.type !== TaskType.ONE_OF_THREE && isAllQuestionsAnswered()) {
        this._onUserChoice(isAllAnswersCorrect());
      }
    };

    const getTripleTypeCorrect = () => {
      const optionOne = this.data.answers.filter((answer) => answer.type === AnswerType.PAINTING);
      const optionTwo = this.data.answers.filter((answer) => answer.type === AnswerType.PHOTO);
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

      let form = this.element.querySelector('form');
      for (let i = 0; i < this.data.answers.length; i++) {
        if (this.data.type === TaskType.ONE_OF_THREE) {
          results.push(form[`question${i}`].checked);
        } else {
          results.push(form[`question${i}`].value);
        }
      }
      return results;
    };

    const isAllQuestionsAnswered = () => {
      return getAnswers().every((answer) => answer !== '');
    };

    const isOptionChecked = () => {
      return getAnswers().some((answer) => answer === true);
    };

    const isOptionCorrect = () => {
      return this.data.answers[getAnswers().indexOf(true)].type === getTripleTypeCorrect();
    };

    const isAllAnswersCorrect = () => {
      return getAnswers().every((answer, i) => answer === this.data.answers[i].type);
    };

    this.element.addEventListener('click', onClick);

    const imgToReplace = document.querySelector('img');

    imageLoader(imgToReplace).load({
      url: this.data.answers[0].image.url,
      width: this.data.answers[0].image.width,
      height: this.data.answers[0].image.height
    });
  }

  addClass() {
    this.element.classList.add('game');
  }
}

export default QuestionView;
