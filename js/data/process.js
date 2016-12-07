/**
 * Created by slavash on 01.12.2016.
 */
import {gameState} from './game-data.js';

export const setScreen = (game, question) => {
  if (question < 0 || question >= gameState.screens.length) {
    throw new RangeError(`This game has only ${gameState.screens.length} questions`);
  }
  return Object.assign({}, game, {
    screenNumber: question
  });
};

export const getScreen = (num) => gameState.screens[num];

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

