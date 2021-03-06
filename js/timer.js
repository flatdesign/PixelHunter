import Application from './Application';
import constants from './constants';
import data from './data';
import setLives from './setLives';
import changeLevel from './changeLevel';

class Timer {
  static run(timerNode, time = constants.TIME) {
    let count;
    if (time > 0 && time <= constants.TIME) {
      timerNode.innerHTML = time;
      count = setInterval(() => {
        if (time < 1) {
          clearInterval(count);
          if (data.currentState.level < constants.LEVELS - 1 && data.currentState.lives !== 1) {
            setLives(data.currentState.lives - 1);
            changeLevel(++data.currentState.level);
          } else {
            setLives(data.currentState.lives - 1);
            Application.showStats(data.currentState);
          }
        } else {
          timerNode.innerHTML = --time;
        }
      }, 1000);
      return count;
    } else if (time <= 0) {
      throw new Error(`time should be more then 0`);
    } else if (time > constants.TIME) {
      throw new Error(`time shouldn't be more then max time`);
    }
    return count;
  }

  static stop(count) {
    clearInterval(count);
  }
}

export default Timer;


