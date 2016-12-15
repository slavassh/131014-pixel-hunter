/**
 * Created by slavash on 01.12.2016.
 */
import {gameState} from './game-data';

export const setScreen = (game, screenNumber) => {
  if (screenNumber < 0 || screenNumber >= gameState.screens.length) {
    throw new RangeError(`screenNumber ${gameState.screenNumber} is out of range of screens`);
  }
  return Object.assign({}, game, {
    screenNumber: screenNumber
  });
};

export const getScreen = (num) => gameState.screens[num];

export const hasScreen = (num) => typeof gameState.screens[num] !== void 0;

export const setLives = (game, lives) => {
  if (lives < 0 || lives > gameState.livesCount) {
    throw new RangeError(`livesCount = ${lives}. livesCount can't be negative or > max number of lives`);
  }

  return Object.assign({}, game, {
    livesCount: lives
  });
};

export const setTime = (game, time) => {
  if (time < 0 || time > 30) {
    throw new RangeError(`Time ${time} is out of time period`);
  }
  return Object.assign({}, game, {
    time: time
  });
};

export const setScreenResult = (game, result) => {
  let arr = game.answers.slice(0);
  arr.push(result);
  return Object.assign({}, game, {
    answers: arr
  });
};

