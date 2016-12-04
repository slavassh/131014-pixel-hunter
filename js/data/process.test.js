/**
 * Created by slavash on 01.12.2016.
 */
import {gameState, setScreen, setLives, setTime} from './process.js';
import assert from 'assert';


describe('Game parameters', () => {
  describe('Current question', () => {
    describe('Setting', () => {
      it('Number of screens successfuly changes', () => {
        assert.equal(setScreen(gameState, 9).currentQuestion, 9);
      });
    });

    describe('Failures', () => {
      it('setScreen throws an error if negative value passed', () => {
        assert.throws(() => setScreen(gameState, -1));
      });
      it('setScreen throws an error if Number of screens > 10', () => {
        assert.throws(() => setScreen(gameState, 10));
      });
      it('setLives throws an error if Number of lives < 0', () => {
        assert.throws(() => setLives(gameState, -1));
      });
      it('setTime throws an error if time < 0', () => {
        assert.throws(() => setTime(gameState, -1));
      });
    });
  });
});
