import constants from './constants';
import data from './data';
import Game from './screens/game/game';

const changeLevel = (level) => {
  if (level >= 0 && level < constants.LEVELS) {
    data.currentState.level = level;
    new Game(data.currentState).init(data.levels[level]);
  } else if (level < 0) {
    throw new Error(`level should be more then 0`);
  } else if (level >= constants.LEVELS) {
    throw new Error(`level should be less then Levels count`);
  }
};

export default changeLevel;
