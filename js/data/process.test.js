/**
 * Created by slavash on 01.12.2016.
 */
import {setScreen, setLives, setTime} from './process';
import {gameState} from './game-data';
import assert from 'assert';

describe('setScreen', () => {
  it('should throws an error if negative value passed', () => {
    let screens = [{}, {}, {}];
    assert.throws(() => setScreen(gameState, screens, -1));
  });
  it('should throws an error if value more then number of screens', () => {
    let screens = [{}, {}, {}];
    assert.throws(() => setScreen(gameState, screens, screens.length));
  });
  it('should change screenNumber in game stage', () => {
    let screens = [{}, {}, {}];
    let state = setScreen(gameState, screens, 2);
    let expectedState = Object.assign({}, gameState, {screenNumber: 2});
    assert.deepEqual(state, expectedState);
  });
});

describe('setLives', () => {
  it('should throws an error if Number of lives < 0', () => {
    assert.throws(() => setLives(gameState, -1));
  });
  it('should throws an error if value more then max number of lives', () => {
    assert.throws(() => setLives(gameState, gameState.lives + 1));
  });
  it('should change lives in game stage', () => {
    let state = setLives(gameState, 2);
    let expectedState = Object.assign({}, gameState, {lives: 2});
    assert.deepEqual(state, expectedState);
  });
});

describe('setTime', () => {
  it('should throws an error if time < 0', () => {
    assert.throws(() => setTime(gameState, -1));
  });
  it('should throws an error if value more then response time', () => {
    assert.throws(() => setTime(gameState, gameState.time + 1));
  });
  it('should change time in game stage', () => {
    let state = setTime(gameState, 5);
    let expectedState = Object.assign({}, gameState, {time: 5});
    assert.deepEqual(state, expectedState);
  });
});
