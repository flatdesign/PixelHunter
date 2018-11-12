import GameView from './gameView';
import constants from '../../constants';
import changeLevel from '../../changeLevel';
import data from '../../data';
import Timer from '../../timer';
import app from '../../Application';
import changeScreen from '../../changeScreen';
import utils from '../../utils';

export default class Game {
  constructor(state = data.currentState) {
    this.view = new GameView(state);
  }
  init(level = data.levels[data.currentState.level]) {
    changeScreen(this.view.bind(level));

    this.view.changeGame = (timerNode, step) => {
      if (Number(timerNode.innerHTML) > 20) {
        data.currentState.answers[data.currentState.level] = constants.answerType.fast;

      } else {
        data.currentState.answers[data.currentState.level] = constants.answerType.slow;
      }

      if (data.currentState.level < constants.LEVELS - 1) {
        Timer.stop(step);
        changeLevel(++data.currentState.level);

      } else {
        Timer.stop(step);
        app.showStats(data.currentState);
      }
    };

    this.view.backIntro = () => {
      utils.backToIntro();
    };
  }
}
