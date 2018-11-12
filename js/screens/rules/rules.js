import RulesView from './rulesView';
import changeScreen from '../../changeScreen';
import app from '../../Application';
import utils from '../../utils';

export default class Rules {
  constructor() {
    this.view = new RulesView();
  }
  init() {
    changeScreen(this.view.bind());

    this.view.onNextScreen = () => {
      app.showGame();
    };

    this.view.onPreviousScreen = () => {
      utils.backToIntro();
    };
  }
}

