/**
 * Created by Viacheslav on 20.11.2016.
 */
import game from './game.js';
import nextScreen from './game-10.js';
import question from './templates/question-3.js';

const data = {
  task: 'Найдите рисунок среди изображений',
  answers: {
    image: 'http://placehold.it/304x455',
    photo: 'Фото',
    paint: 'Рисунок'
  }
};

export default game(data, question, nextScreen);
