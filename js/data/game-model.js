/**
 * Created by slavash on 12.12.2016.
 */

import {setScreen, getScreen, setTime, setLives} from './process';
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
    return setLives(this._state, this._state.livesCount - 1);
  }

  nextScreen() {
    this._state = setScreen(this._state, this._state.screenNumber + 1);
  }

  tick() {
    this._state = setTime(this._state, this._state.time + 1);
  }

  resetTime() {
    this._state = setTime(this._state, gameState.time);
  }

  lostAllLives() {
    return this._state.livesCount <= 0;
  }

  timeIsUp() {
    return this._state.time <= 0;
  }
}
