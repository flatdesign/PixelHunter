import GreetingView from './greetingView';
import changeScreen from '../../changeScreen';
import app from '../../Application';
export default class Greeting {
  constructor() {
    this.view = new GreetingView();
  }

  init() {
    changeScreen(this.view.bind());

    this.view.nextScreen = () => {
      app.showRules();
    };
  }
}

