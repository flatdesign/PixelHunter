import getElementFromTemplate from '../makeTemplate';
import changeScreen from '../changeScreen';
import gameThree from './game-3';
import intro from './intro';
import footer from './footer';
import header from './header';
import data from '../data';

const gameTwo = (level) => {
  const node = getElementFromTemplate(`
  ${header(data.initialState)}
  <div class="game">
  <p class="game__task">${level.title}</p>
  <form class="game__content  ${ level.type === `` ? `` : `game__content--${level.type}`}">
    ${[...level.options.entries()].map(([element]) => `<div class="game__option">${element}</div>`).join(``)}
  </form>
  <div class="stats">
    <ul class="stats">
     ${level.stats.map((element) => `<li class="stats__result stats__result--${element}"></li>`).join(``)}
    </ul>
  </div>
  </div>
  ${footer()}`);

  let options = node.querySelectorAll(`input[type=radio]`);
  for (let i = 0; i < options.length; i++) {
    options[i].addEventListener(`change`, function () {
      changeScreen(gameThree(data.levels[`gameThree`]));
    });
  }

  let back = node.querySelector(`.back`);
  back.addEventListener(`click`, function () {
    changeScreen(intro());
  });

  return node;
};

export default gameTwo;
