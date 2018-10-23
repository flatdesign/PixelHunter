import constants from './constants';
import data from './data';

const setLives = (count, state = data.currentState) => {
  if (count >= 0 && count <= constants.LIVES) {
    state.lives = count;
  } else if (count < 0) {
    throw new Error(`lives should be more then 0`);
  } else if (count > constants.LEVELS) {
    throw new Error(`lives shouldn't be more them max lives count `);
  }
  return count;
};

export default setLives;
