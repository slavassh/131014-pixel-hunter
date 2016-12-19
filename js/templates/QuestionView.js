/**
 * Created by Viacheslav on 27.11.2016.
 */
import {TaskType, questions} from '../data/type-data';
import AbstractView from './AbstractView';

class QuestionView extends AbstractView {

  constructor(questionData) {
    super();
    this.model = questionData;
    this.typeClass = [
      'game__content--double',
      'game__content--wide',
      'game__content--triple'
    ];
  }

  set onUserChoice(handler) {
    this._onUserChoice = handler;
  }

  getMarkup() {
    const answers = this.model.answers;
    let tpl = '';
    if (this.model.type === TaskType.DOUBLE) {
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
    } else if (this.model.type === TaskType.WIDE) {
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
    } else if (this.model.type === TaskType.TRIPLE) {
      for (let i = 0; i < answers.length; i++) {
        tpl += `<label class="game__option">
                   <img src="${answers[i].image.url}" alt="Option ${i}" width="${answers[i].image.width}" height="${answers[i].image.height}">
                   <div class="game__answer">
                    <input name="question" type="radio" value="paint${i}">
                   </div>
                 </label>`;
      }
    }

    return `
      <p class="game__task">${questions[this.model.type]}</p>
      <form class="game__content  ${this.typeClass[this.model.type]}">
        ${tpl}
        </div>
      </form>`;
  }

  bindHandlers() {

    const onClick = (evt) => {
      let targetClass = '';

      if (this.model.type !== TaskType.TRIPLE) {
        targetClass = 'game__answer';
      } else {
        targetClass = 'game__option';
      }

      let target = evt.target;
      while (target !== this.element) {
        if (target.classList.contains(targetClass) && isAllQuestionsAnswered()) {
          this._onUserChoice(isAllAnswersCorrect());
          break;
        }
        target = target.parentNode;
      }
    };

    const getAnswers = () => {
      let results = [];

      let form = this.element.querySelector('form');
      for (let i = 0; i < this.model.answers.length; i++) {
        if (this.model.type !== TaskType.TRIPLE) {
          results.push(form[`question${i}`].value);
        } else {
          results.push(form['question'].value);
        }
      }
      return results;
    };

    const isAllQuestionsAnswered = () => {
      return getAnswers().every((answer) => answer !== '');
    };

    const isAllAnswersCorrect = () => {
      return getAnswers().every((answer, i) => answer === this.model.answers[i].type);
    };

    this.element.addEventListener('click', onClick);
  }

  addClass() {
    this.element.classList.add('game');
  }
}

export default QuestionView;
