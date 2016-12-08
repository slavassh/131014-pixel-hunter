/**
 * Created by slavash on 01.12.2016.
 */
import {gameState} from './game-data.js';

export const setScreen = (game, question) => {
  if (question < 0 || question >= gameState.screens.length) {
    throw new RangeError(`screenNumber ${gameState.screenNumber} is out of range of screens`);
  }
  return Object.assign({}, game, {
    screenNumber: question
  });
};

export const getScreen = (num) => gameState.screens[num];

export const setLives = (game, lives) => {
  if (lives < 0 || lives > gameState.livesCount) {
    throw new RangeError(`livesCount = ${gameState.livesCount}. livesCount can't be negative or > max number of lives`);
  }

  return Object.assign({}, game, {
    livesCount: lives
  });
};

export const setTime = (game, time) => {
  if (time < 0 || time > 30) {
    throw new RangeError(`Time ${gameState.time} is out of time period`);
  }
  return Object.assign({}, game, {
    time: time
  });
};

