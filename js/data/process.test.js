/**
 * Created by slavash on 01.12.2016.
 */
import {gameState, setScreen, setLives, setTime} from './process.js';
import assert from 'assert';

describe('setScreen', () => {
  it('should throws an error if negative value passed', () => {
    assert.throws(() => setScreen(gameState, -1));
  });
  it('should throws an error if Number of screens > 10', () => {
    assert.throws(() => setScreen(gameState, 10));
  });
});
describe('setLives', () => {
  it('should throws an error if Number of lives < 0', () => {
    assert.throws(() => setLives(gameState, -1));
  });
  it('should throws an error if time < 0', () => {
    assert.throws(() => setTime(gameState, -1));
  });
});
