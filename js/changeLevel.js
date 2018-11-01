import changeScreen from './changeScreen';
import constants from './constants';
import data from './data';
import game from './screens/game/game';

const changeLevel = (level) => {
  if (level >= 0 && level < constants.LEVELS) {
    changeScreen(game(data.levels[level]));
  } else if (level < 0) {
    throw new Error(`level should be more then 0`);
  } else if (level >= constants.LEVELS) {
    throw new Error(`level should be less then Levels count`);
  }
};

export default changeLevel;
