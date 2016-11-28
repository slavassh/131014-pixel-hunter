/**
 * Created by Viacheslav on 20.11.2016.
 */

import game from './game.js';
import nextScreen from './game-8.js';
import question from './templates/question-1.js';

const data = {
  task: 'Угадайте для каждого изображения фото или рисунок?',
  answers: {
    image: 'http://placehold.it/468x458',
    photo: 'Фото',
    paint: 'Рисунок'
  }
};

export default game(data, question, nextScreen);
