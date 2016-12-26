/**
 * Created by slavash on 06.12.2016.
 */

export const TaskType = {
  TWO_OF_TWO: 'two-of-two',
  TINDER_LIKE: 'tinder-like',
  ONE_OF_THREE: 'one-of-three'
};

export const AnswerType = {
  PAINTING: 'painting',
  PHOTO: 'photo'
};

export const Result = {
  CORRECT: 'correct',
  WRONG: 'wrong',
  SLOW: 'slow',
  FAST: 'fast',
  UNKNOWN: 'unknown'
};

export const Points = {
  CORRECT: 100,
  BONUS: 50
};

export const StatsTitle = {
  WIN: 'Победа!',
  LOSE: 'Поражение!'
};

export const Extra = {
  FAST: 0,
  LIFE: 1,
  SLOW: 2
};

export const extraPoints = new Map([
  [Extra.FAST, Points.BONUS],
  [Extra.LIFE, Points.BONUS],
  [Extra.SLOW, -Points.BONUS]
]);

export const extraTitle = new Map([
  [Extra.FAST, 'Бонус за скорость'],
  [Extra.LIFE, 'Бонус за жизни'],
  [Extra.SLOW, 'Штраф за медлительность']
]);
