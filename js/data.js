import constants from './constants';
import utils from './utils';

const initialState = utils.deepFreeze({
  level: 0,
  lives: constants.LIVES,
  time: constants.TIME,
  answers: new Array(constants.LEVELS).fill(`unknown`)
});


const currentState = utils.cloneObj(initialState);

const levels = [
  {title: `УгадаcloneObjclocloneObjйте для каждого изображения фото или рисунок?`,
    type: ``,
    options: new Set([
      `<img src="http://placehold.it/468x458" alt="Option 1" width="468" height="458">`,
      `<img src="http://placehold.it/468x458" alt="Option 2" width="468" height="458">`
    ])
  },
  {title: `Угадай, фото или рисунок?`,
    type: `wide`,
    options: new Set([
      `<img src="http://placehold.it/705x455" alt="Option 1" width="705" height="455">`
    ])
  },

  {title: `Найдите рисунок среди изображений`,
    type: `triple`,
    options: new Set([
      `<img src="http://placehold.it/304x455" alt="Option 1" width="304" height="455">`,
      `<img src="http://placehold.it/304x455" alt="Option 2" width="304" height="455">`,
      `<img src="http://placehold.it/304x455" alt="Option 3" width="304" height="455">`
    ])
  }
];


export default {levels, currentState, initialState};

