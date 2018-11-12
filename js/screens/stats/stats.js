import StatsView from './statsView';
import changeScreen from '../../changeScreen';
import data from '../../data';
import utils from '../../utils';

export default class Stats {
  constructor() {
    this.makeStatsObj = (hash) => {
      let obj = {};
      obj = utils.cloneObj(data.initialState);
      const reg = /\d/g;
      let results = [];
      let search;
      while ((search = reg.exec(hash)) !== null) {
        results.push(Number(search[0]));
      }
      obj.level = results[0];
      let i;
      for (i = 0; i < results[0]; i++) {
        if (results[i + 1] === 1) {
          obj.answers[i] = `fast`;
        } else if (results[i + 1] === 0) {
          obj.answers[i] = `slow`;
        }
      }
      obj.lives = results[++i];
      return obj;
    };
    this.view = new StatsView(this.makeStatsObj(location.hash));
  }
  init() {
    changeScreen(this.view.bind());
    this.view.onPreviousScreen = () => {
      utils.backToIntro();
    };
  }
}
