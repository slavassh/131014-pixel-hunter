/**
 * Created by slavash on 12.12.2016.
 */

import {setScreen, setTime, setLives, setScreenResult} from './process';
import {gameState} from './game-data';

export default class GameModel {
  constructor(data, state = gameState) {
    this._state = state;
    this._data = data;
  }

  get state() {
    return this._state;
  }

  getCurrentScreen() {
    return this._data[this._state.screenNumber];
  }

  lostLife() {
    this._state = setLives(this._state, this._state.lives - 1);
  }

  nextScreen() {
    this._state = setScreen(this._state, this._data, this._state.screenNumber + 1);
  }

  hasNextScreen() {
    return this._state.screenNumber + 1 < this._data.length;
  }

  tick() {
    this._state = setTime(this._state, this._state.time - 1);
  }

  resetTime() {
    this._state = setTime(this._state, gameState.time);
  }

  resetGameState() {
    this._state = gameState;
  }

  hasLives() {
    return this._state.lives > 0;
  }

  isTimeOver() {
    return this._state.time <= 0;
  }

  addScreenResult(result) {
    this._state = setScreenResult(this._state, result);
  }
}
