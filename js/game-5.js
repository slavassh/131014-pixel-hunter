/**
 * Created by Viacheslav on 20.11.2016.
 */

import game from './game.js';
import nextScreen from './game-6.js';
import question from './templates/question-2.js';

const data = {
  task: 'Угадай, фото или рисунок?',
  answers: {
    image: 'http://placehold.it/705x455',
    photo: 'Фото',
    paint: 'Рисунок'
  }
};

export default game(data, question, nextScreen);
