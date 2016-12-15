/**
 * Created by slavash on 12.12.2016.
 */

import {setScreen, getScreen, setTime, setLives, setScreenResult, hasScreen} from './process';
import {gameState} from './game-data';

export default class GameModel {
  constructor(state = gameState) {
    this._state = state;
  }

  get state() {
    return this._state;
  }

  getCurrentScreen() {
    return getScreen(this._state.screenNumber);
  }

  lostLife() {
    this._state = setLives(this._state, this._state.livesCount - 1);
  }

  nextScreen() {
    this._state = setScreen(this._state, this._state.screenNumber + 1);
  }

  hasNextScreen() {
    return hasScreen(this._state.screenNumber + 1);
  }

  tick() {
    this._state = setTime(this._state, this._state.time - 1);
  }

  resetTime() {
    this._state = setTime(this._state, gameState.time);
  }

  hasLives() {
    return this._state.livesCount > 0;
  }

  isTimeOver() {
    return this._state.time <= 0;
  }

  addScreenResult() {
    this._state = setScreenResult(this._state, this._state.time);
  }

  addUserFail() {
    this._state = setScreenResult(this._state, false);
  }
}
