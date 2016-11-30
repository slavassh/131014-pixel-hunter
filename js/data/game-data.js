export const game = {
  questions: {
    'task-1': 'Угадайте для каждого изображения фото или рисунок?',
    'task-2': 'Угадай, фото или рисунок?',
    'task-3': 'Найдите рисунок среди изображений'
  },
  answers: {
    photo: 'Фотография',
    paint: 'Рисунок'
  }
};

export const screens = {
  'screen-0': {
    task: game.questions['task-1'],
    answers: [
      {
        image: 'http://placehold.it/468x458',
        correct: game.answers.photo
      },
      {
        image: 'http://placehold.it/468x458',
        correct: game.answers.paint
      }
    ]
  },
  'screen-1': {
    task: game.questions['task-2'],
    answers: [
      {
        image: 'http://placehold.it/705x455',
        correct: game.answers.paint
      }
    ]
  },
  'screen-2': {
    task: game.questions['task-3'],
    answers: [
      {
        image: 'http://placehold.it/304x455',
        correct: game.answers.photo
      },
      {
        image: 'http://placehold.it/304x455',
        correct: game.answers.photo
      },
      {
        image: 'http://placehold.it/304x455',
        correct: game.answers.paint
      },
    ]
  },
  'screen-3': {
    task: game.questions['task-1'],
    answers: [
      {
        image: 'http://placehold.it/468x458',
        correct: game.answers.photo
      },
      {
        image: 'http://placehold.it/468x458',
        correct: game.answers.paint
      }
    ]
  },
  'screen-4': {
    task: game.questions['task-2'],
    answers: [
      {
        image: 'http://placehold.it/705x455',
        correct: game.answers.paint
      }
    ]
  },
  'screen-5': {
    task: game.questions['task-3'],
    answers: [
      {
        image: 'http://placehold.it/304x455',
        correct: game.answers.photo
      },
      {
        image: 'http://placehold.it/304x455',
        correct: game.answers.photo
      },
      {
        image: 'http://placehold.it/304x455',
        correct: game.answers.paint
      },
    ]
  },
  'screen-6': {
    task: game.questions['task-1'],
    answers: [
      {
        image: 'http://placehold.it/468x458',
        correct: game.answers.photo
      },
      {
        image: 'http://placehold.it/468x458',
        correct: game.answers.paint
      }
    ]
  },
  'screen-7': {
    task: game.questions['task-2'],
    answers: [
      {
        image: 'http://placehold.it/705x455',
        correct: game.answers.paint
      }
    ]
  },
  'screen-8': {
    task: game.questions['task-3'],
    answers: [
      {
        image: 'http://placehold.it/304x455',
        correct: game.answers.photo
      },
      {
        image: 'http://placehold.it/304x455',
        correct: game.answers.photo
      },
      {
        image: 'http://placehold.it/304x455',
        correct: game.answers.paint
      },
    ]
  },
  'screen-9': {
    task: game.questions['task-3'],
    answers: [
      {
        image: 'http://placehold.it/304x455',
        correct: game.answers.photo
      },
      {
        image: 'http://placehold.it/304x455',
        correct: game.answers.photo
      },
      {
        image: 'http://placehold.it/304x455',
        correct: game.answers.paint
      },
    ]
  }
};

