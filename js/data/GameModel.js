/**
 * Created by slavash on 12.12.2016.
 */

import {setScreen, setTime, setLives, setScreenResult} from './process';
import {gameState} from './game-data';

export default class GameModel {
  constructor(data, state = gameState) {
    this._state = state;
    this.data = data;
  }

  get state() {
    return this._state;
  }

  getCurrentScreen() {
    return this.data[this._state.screenNumber];
  }

  lostLife() {
    this._state = setLives(this._state, this._state.livesCount - 1);
  }

  nextScreen() {
    this._state = setScreen(this._state, this.data, this._state.screenNumber + 1);
  }

  hasNextScreen() {
    return this._state.screenNumber + 1 < this.data.length;
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
    return this._state.livesCount > 0;
  }

  isTimeOver() {
    return this._state.time <= 0;
  }

  addScreenResult() {
    this._state = setScreenResult(this._state, this._state.time);
  }
}
