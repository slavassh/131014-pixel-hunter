/**
 * Created by slavash on 06.12.2016.
 */

export const questions = [
  'Угадайте для каждого изображения фото или рисунок?',
  'Угадай, фото или рисунок?',
  'Найдите рисунок среди изображений'
];

export const TaskType = {
  DOUBLE: 0,
  WIDE: 1,
  TRIPLE: 2
};

export const typeClass = [
  'game__content--double',
  'game__content--wide',
  'game__content--triple'
];

export const Result = {
  CORRECT: 0,
  WRONG: 1,
  SLOW: 2,
  FAST: 3,
  UNKNOWN: 4
};

export const progressClassName = new Map([
  [Result.CORRECT, 'stats__result--correct'],
  [Result.WRONG, 'stats__result--wrong'],
  [Result.SLOW, 'stats__result--slow'],
  [Result.FAST, 'stats__result--fast'],
  [Result.UNKNOWN, 'stats__result--unknown']
]);

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

export const extraClassName = new Map([
  [Extra.FAST, 'stats__result--fast'],
  [Extra.LIFE, 'stats__result--heart'],
  [Extra.SLOW, 'stats__result--slow']
]);

export const extraTitle = new Map([
  [Extra.FAST, 'Бонус за скорость'],
  [Extra.LIFE, 'Бонус за жизни'],
  [Extra.SLOW, 'Штраф за медлительность']
]);
