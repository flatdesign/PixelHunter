import timer from './timer';

export default class GamePresenter {
  constructor(state) {

  }

  runTime(timerNode, time) {
    timer.run(timerNode, time);
  }

  stopTime(step) {
    timer.stop(step);
  }
}
