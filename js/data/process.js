/**
 * Created by slavash on 01.12.2016.
 */
import {screens} from './game-data.js';

export const gameState = {
  livesCount: 3,
  currentQuestion: 0,
  time: 30,
  maxQuestions: 10
};

export const setScreen = (game, question) => {
  if (!(question >= 0 && question < gameState.maxQuestions)) {
    throw new RangeError(`This game has only ${gameState.maxQuestions} questions`);
  }
  return Object.assign({}, game, {
    currentQuestion: question
  });
};

export const getScreen = (num) => {
  return screens[`screen-${num}`];
};

export const setTime = (game, time) => {
  if (time < 0) {
    throw new RangeError('Time can not be negative');
  }
  return Object.assign({}, game, {
    time: time
  });
};

export const setLives = (game, lives) => {
  if (lives < 0) {
    throw new RangeError('Number of lives can not be negative');
  }

  return Object.assign({}, game, {
    livesCount: lives
  });
};

