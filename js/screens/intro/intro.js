import IntroView from './introView';
import changeScreen from '../../changeScreen';
import app from '../../Application';

export default class Intro {
  constructor() {
    this.view = new IntroView();
  }

  init() {
    changeScreen(this.view.bind());
    this.view.nextScreen = () => {
      app.showGretting();
    };

  }
}

