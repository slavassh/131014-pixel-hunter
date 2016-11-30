/**
 * Created by slavash on 01.12.2016.
 */
import {screens} from './game-data.js';

export const gameState = {
  livesCount: 3,
  currentQuestion: 0
};

export const setScreen = (game, question) => {
  return Object.assign({}, game, {
    currentQuestion: question
  });
};

export const getScreen = (num) => {
  return screens[`screen-${num}`];
};
