import getElementFromTemplate from '../makeTemplate';
import changeScreen from '../changeScreen';
import gameTwo from './game-2';
import intro from './intro';
import footer from './footer';
import header from './header';
import data from '../data';

const gameOne = (level) => {
  const node = getElementFromTemplate(`
  ${header(data.initialState)}
  <div class="game">
    <p class="game__task">${level.title}</p>
    <form class="game__content ${ level.type === `` ? `` : `game__content--${level.type}`}">
      ${[...level.options.entries()].map(([element]) => `<div class="game__option">${element}</div>`).join(``)}
    </form>
    <div class="stats">
      <ul class="stats">
        ${level.stats.map((element) => `<li class="stats__result stats__result--${element}"></li>`).join(``)}
      </ul>
    </div>
  </div>
  ${footer()}`);

  let questions = node.querySelectorAll(`.game__option input[type=radio]`);

  for (let i = 0; i < questions.length; i++) {
    questions[i].addEventListener(`change`, function () {
      let count = 0;
      for (let j = 0; j < questions.length; j++) {
        if (questions[j].checked === true) {
          count++;
        }
      }
      if (count > 1) {
        changeScreen(gameTwo(data.levels[`gameTwo`]));
      }
    });
  }

  let back = node.querySelector(`.back`);
  back.addEventListener(`click`, function () {
    changeScreen(intro());
  });


  return node;
};


export default gameOne;
