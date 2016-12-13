import {taskType} from './task-type';

export const gameState = {
  livesCount: 3,
  screenNumber: 0,
  time: 30,
  answers: [],
  screens: [
    {
      type: taskType.DOUBLE,
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
      type: taskType.WIDE,
      options: [
        {
          image: 'http://placehold.it/705x455',
          correct: 'paint'
        }
      ]
    },
    {
      type: taskType.TRIPLE,
      options: [
        {
          image: 'http://placehold.it/304x455',
          correct: 'photo'
        },
        {
          image: 'http://placehold.it/304x455',
          correct: 'photo'
        },
        {
          image: 'http://placehold.it/304x455',
          correct: 'paint'
        },
      ]
    },
    {
      type: taskType.DOUBLE,
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
      type: taskType.WIDE,
      options: [
        {
          image: 'http://placehold.it/705x455',
          correct: 'paint'
        }
      ]
    },
    {
      type: taskType.TRIPLE,
      options: [
        {
          image: 'http://placehold.it/304x455',
          correct: 'photo'
        },
        {
          image: 'http://placehold.it/304x455',
          correct: 'photo'
        },
        {
          image: 'http://placehold.it/304x455',
          correct: 'paint'
        },
      ]
    },
    {
      type: taskType.DOUBLE,
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
      type: taskType.WIDE,
      options: [
        {
          image: 'http://placehold.it/705x455',
          correct: 'paint'
        }
      ]
    },
    {
      type: taskType.TRIPLE,
      options: [
        {
          image: 'http://placehold.it/304x455',
          correct: 'photo'
        },
        {
          image: 'http://placehold.it/304x455',
          correct: 'photo'
        },
        {
          image: 'http://placehold.it/304x455',
          correct: 'paint'
        },
      ]
    },
    {
      type: taskType.TRIPLE,
      options: [
        {
          image: 'http://placehold.it/304x455',
          correct: 'photo'
        },
        {
          image: 'http://placehold.it/304x455',
          correct: 'photo'
        },
        {
          image: 'http://placehold.it/304x455',
          correct: 'paint'
        },
      ]
    }
  ]
};
