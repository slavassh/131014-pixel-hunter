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
  [Result.CORRECT, 'stats__result--wrong'],
  [Result.WRONG, 'stats__result--wrong'],
  [Result.SLOW, 'stats__result--wrong'],
  [Result.FAST, 'stats__result--wrong'],
  [Result.UNKNOWN, 'stats__result--wrong']
]);
