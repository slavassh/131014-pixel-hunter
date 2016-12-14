import {TaskType} from './task-type';

export const gameState = {
  livesCount: 3,
  screenNumber: 0,
  time: 30,
  answers: [],
  screens: [
    {
      type: TaskType.DOUBLE,
      options: [
        {
          image: 'http://placehold.it/468x458',
          correct: 'photo'
        },
        {
          image: 'http://placehold.it/468x458',
          correct: 'paint'
        }
      ]
    },
    {
      type: TaskType.WIDE,
      options: [
        {
          image: 'http://placehold.it/705x455',
          correct: 'paint'
        }
      ]
    },
    {
      type: TaskType.TRIPLE,
      options: [
        {
          image: 'http://placehold.it/304x455',
          correct: 'paint2'
        },
        {
          image: 'http://placehold.it/304x455',
          correct: 'paint2'
        },
        {
          image: 'http://placehold.it/304x455',
          correct: 'paint2'
        },
      ]
    },
    {
      type: TaskType.DOUBLE,
      options: [
        {
          image: 'http://placehold.it/468x458',
          correct: 'photo'
        },
        {
          image: 'http://placehold.it/468x458',
          correct: 'paint'
        }
      ]
    },
    {
      type: TaskType.WIDE,
      options: [
        {
          image: 'http://placehold.it/705x455',
          correct: 'paint'
        }
      ]
    },
    {
      type: TaskType.TRIPLE,
      options: [
        {
          image: 'http://placehold.it/304x455',
          correct: 'paint1'
        },
        {
          image: 'http://placehold.it/304x455',
          correct: 'paint1'
        },
        {
          image: 'http://placehold.it/304x455',
          correct: 'paint1'
        },
      ]
    },
    {
      type: TaskType.DOUBLE,
      options: [
        {
          image: 'http://placehold.it/468x458',
          correct: 'photo'
        },
        {
          image: 'http://placehold.it/468x458',
          correct: 'paint'
        }
      ]
    },
    {
      type: TaskType.WIDE,
      options: [
        {
          image: 'http://placehold.it/705x455',
          correct: 'paint'
        }
      ]
    },
    {
      type: TaskType.TRIPLE,
      options: [
        {
          image: 'http://placehold.it/304x455',
          correct: 'paint0'
        },
        {
          image: 'http://placehold.it/304x455',
          correct: 'paint0'
        },
        {
          image: 'http://placehold.it/304x455',
          correct: 'paint0'
        },
      ]
    },
    {
      type: TaskType.DOUBLE,
      options: [
        {
          image: 'http://placehold.it/468x458',
          correct: 'photo'
        },
        {
          image: 'http://placehold.it/468x458',
          correct: 'paint'
        }
      ]
    }
  ]
};
