import intro from './screens/intro/intro';
import game from './screens/game/game';
import stats from './screens/stats/stats';
import changeScreen from './changeScreen';
import data from './data';
import gretting from './screens/greeting/greeting';
import rules from './screens/rules/rules';

export default class Application {
  static showWelcome() {
    changeScreen(intro());
  }
  static showGame(level) {
    changeScreen(game(level));
  }
  static showStats() {
    changeScreen(stats(data.currentState));
  }
  static showGretting() {
    changeScreen(gretting());
  }
  static showRules() {
    changeScreen(rules());
  }
}
