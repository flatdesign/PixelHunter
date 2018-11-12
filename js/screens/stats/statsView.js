import AbstractView from '../../AbstractView';
import footer from '../footer/footer';
import header from '../header/header';
import constants from '../../constants';

export default class IntroView extends AbstractView {
  constructor(state) {
    super();
    let fastCount = 0;
    let slowCount = 0;

    state.answers.forEach(function (elem) {
      if (elem === `fast`) {
        fastCount++;
      } else if (elem === `slow`) {
        slowCount++;
      }
    });
    const resLevels = constants.LEVELS * 100;
    const resFast = fastCount * 50;
    const resLive = state.lives * 50;
    const resSlow = -(slowCount * 50);
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
            ${state.answers.map((element) => `<li class="stats__result stats__result--${element}"></li>`).join(``)}
            </ul>
          </td>
          <td class="result__points">×&nbsp;100</td>
          <td class="result__total">${resLevels}</td>
        </tr>
        <tr>
          <td></td>
          <td class="result__extra">Бонус за скорость:</td>
          <td class="result__extra">${fastCount}&nbsp;<span class="stats__result stats__result--fast"></span></td>
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
          <td class="result__extra">${slowCount}&nbsp;<span class="stats__result stats__result--slow"></span></td>
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

  bind() {
    let node = this.createElement();
    let back = node.querySelector(`.back`);
    back.addEventListener(`click`, () => {
      this.onPreviousScreen();
    });
    return node;
  }

  onPreviousScreen() {}
}
