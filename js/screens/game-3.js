import getElementFromTemplate from '../makeTemplate';
import changeScreen from '../changeScreen';
import stats from './stats';
import intro from './intro';
import footer from './footer';
import header from './header';
import data from '../data';

const gameThree = (level) => {
  const node = getElementFromTemplate(`
  ${header(data.initialState)}
  <div class="game">
  <p class="game__task">${level.title}</p>
  <form class="game__content ${ level.type === `` ? `` : `game__content--${level.type}`}">
    ${level.options.map((element) => element).join(``)}
  </form>
  <div class="stats">
    <ul class="stats">
      ${level.stats.map((element) => `<li class="stats__result stats__result--${element}"></li>`).join(``)}
    </ul>
  </div>
  </div>
  ${footer()}`);


  let options = node.querySelectorAll(`.game__option`);
  for (let i = 0; i < options.length; i++) {
    options[i].addEventListener(`click`, function () {
      changeScreen(stats(data.levels));
    });
  }

  let back = node.querySelector(`.back`);
  back.addEventListener(`click`, function () {
    changeScreen(intro());
  });

  return node;
};

export default gameThree;
