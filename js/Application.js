import Intro from './screens/intro/intro';
import Game from './screens/game/game';
import Stats from './screens/stats/stats';
import Gretting from './screens/greeting/greeting';
import Rules from './screens/rules/rules';

const ControllerID = {
  INTRO: ``,
  GREETING: `greeting`,
  RULES: `rules`,
  GAME: `game`,
  STATS: `stats`
};


class Application {
  constructor() {
    this.routes = {
      [ControllerID.INTRO]: Intro,
      [ControllerID.GREETING]: Gretting,
      [ControllerID.RULES]: Rules,
      [ControllerID.GAME]: Game,
      [ControllerID.STATS]: Stats
    };

    window.onhashchange = () => {
      this.changeController(this.getControllerIdFromHash(location.hash));
    };
  }

  changeController(route = ``) {
    const Controller = this.routes[route];
    new Controller().init();
  }

  getControllerIdFromHash(hash) {
    return hash.replace(/\d|#|=/g, ``);
  }

  init() {
    this.changeController(this.getControllerIdFromHash(location.hash));
  }

  showWelcome() {
    location.hash = ControllerID.INTRO;
  }
  showGame() {
    location.hash = ControllerID.GAME;
  }
  showStats(state) {
    let customStatsID = ControllerID.STATS + `=${state.answers.length}`; // Уровни
    for (let i = 0; i <= state.level; i++) {
      if (state.answers[i] === `fast`) {
        customStatsID += `1`;
      } else if (state.answers[i] === `slow`) {
        customStatsID += `0`;
      }
    }
    customStatsID += `${state.lives}`;    // жизни

    location.hash = customStatsID;
  }
  showGretting() {
    location.hash = ControllerID.GREETING;
  }
  showRules() {
    location.hash = ControllerID.RULES;
  }
}

const app = new Application();
app.init();
export default app;
