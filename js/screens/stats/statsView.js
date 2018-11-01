import AbstractView from '../../AbstractView';
import footer from '../footer/footer';
import header from '../header/header';
import constants from '../../constants';
import Application from '../../Application';

export default class IntroView extends AbstractView {
  constructor(state) {
    super();
    const resLevels = constants.LEVELS * 100;
    const resFast = state.answers.fast * 50;
    const resLive = state.lives * 50;
    const resSlow = -(state.answers.slow * 50);
    const resTotal = resLevels + resFast + resLive + resSlow;


    this.content = `
    ${header(state)}
    <div class="result">
      <h1>${state.lives > 0 ? `Победа!` : `Поражение`}</h1>
      <table class="result__table">
        <tr>
          <td class="result__number">1.</td>
          <td colspan="2">
            <ul class="stats">
            ${state.answers.stats.map((element) => `<li class="stats__result stats__result--${element}"></li>`).join(``)}
            </ul>
          </td>
          <td class="result__points">×&nbsp;100</td>
          <td class="result__total">${resLevels}</td>
        </tr>
        <tr>
          <td></td>
          <td class="result__extra">Бонус за скорость:</td>
          <td class="result__extra">${state.answers.fast}&nbsp;<span class="stats__result stats__result--fast"></span></td>
          <td class="result__points">×&nbsp;50</td>
          <td class="result__total">${resFast}</td>
        </tr>
        <tr>
          <td></td>
          <td class="result__extra">Бонус за жизни:</td>
          <td class="result__extra">${state.lives}&nbsp;<span class="stats__result stats__result--heart"></span></td>
          <td class="result__points">×&nbsp;50</td>
          <td class="result__total">${resLive}</td>
        </tr>
        <tr>
          <td></td>
          <td class="result__extra">Штраф за медлительность:</td>
          <td class="result__extra">${state.answers.slow}&nbsp;<span class="stats__result stats__result--slow"></span></td>
          <td class="result__points">×&nbsp;50</td>
          <td class="result__total">${resSlow}</td>
        </tr>
        <tr>
          <td colspan="5" class="result__total  result__total--final">${resTotal}</td>
        </tr>
      </table>
    </div>
    ${footer()}`;
  }

  actions() {
    let node = this.createElement();
    let back = node.querySelector(`.back`);
    back.addEventListener(`click`, function () {
      Application.showWelcome();
    });
    return node;
  }
}
