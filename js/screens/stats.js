import getElementFromTemplate from '../getElementFromTemplate';
import changeScreen from '../changeScreen';
import intro from './intro';
import footer from './footer';
import header from './header';
import data from '../data';
import constants from '../constants';

const stats = (levels) => {
  const resLevels = constants.LEVELS * 100;
  const resFast = data.currentState.answers.fast * 50;
  const resLive = data.currentState.lives * 50;
  const resSlow = -(data.currentState.answers.slow * 50);
  const resTotal = resLevels + resFast + resLive + resSlow;


  const node = getElementFromTemplate(`
  ${header(data.currentState)}
  <div class="result">
    <h1>${data.currentState.lives > 0 ? `Победа!` : `Поражение`}</h1>
    <table class="result__table">
      <tr>
        <td class="result__number">1.</td>
        <td colspan="2">
          <ul class="stats">
          ${data.currentState.answers.stats.map((element) => `<li class="stats__result stats__result--${element}"></li>`).join(``)}
          </ul>
        </td>
        <td class="result__points">×&nbsp;100</td>
        <td class="result__total">${resLevels}</td>
      </tr>
      <tr>
        <td></td>
        <td class="result__extra">Бонус за скорость:</td>
        <td class="result__extra">${data.currentState.answers.fast}&nbsp;<span class="stats__result stats__result--fast"></span></td>
        <td class="result__points">×&nbsp;50</td>
        <td class="result__total">${resFast}</td>
      </tr>
      <tr>
        <td></td>
        <td class="result__extra">Бонус за жизни:</td>
        <td class="result__extra">${data.currentState.lives}&nbsp;<span class="stats__result stats__result--heart"></span></td>
        <td class="result__points">×&nbsp;50</td>
        <td class="result__total">${resLive}</td>
      </tr>
      <tr>
        <td></td>
        <td class="result__extra">Штраф за медлительность:</td>
        <td class="result__extra">${data.currentState.answers.slow}&nbsp;<span class="stats__result stats__result--slow"></span></td>
        <td class="result__points">×&nbsp;50</td>
        <td class="result__total">${resSlow}</td>
      </tr>
      <tr>
        <td colspan="5" class="result__total  result__total--final">${resTotal}</td>
      </tr>
    </table>
  </div>
  ${footer()}`);

  let back = node.querySelector(`.back`);
  back.addEventListener(`click`, function () {
    changeScreen(intro());
  });


  return node;
};

export default stats;
