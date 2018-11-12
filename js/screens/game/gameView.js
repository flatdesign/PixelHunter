import AbstractView from '../../AbstractView';
import footer from '../footer/footer';
import header from '../header/header';
import data from '../../data';
import Timer from '../../timer';

export default class GameView extends AbstractView {
  constructor(state) {
    super();
    this.content = `
      ${header(state)}
      <div class="game">
        <p class="game__task">${data.levels[state.level].title}</p>
        <form class="game__content ${ data.levels[state.level].type === `` ? `` : `game__content--${data.levels[state.level].type}`}">
          ${[...data.levels[state.level].options.entries()].map(([element], i) => `
          <div class="game__option">
            ${element}
            ${ data.levels[state.level].type === `triple` ? `` :
              `<label class="game__answer game__answer--photo">
              <input name="question${++i}" type="radio" value="photo">
              <span>Фото</span>
            </label>
            <label class="game__answer game__answer--paint">
              <input name="question${i}" type="radio" value="paint">
              <span>Рисунок</span>
            </label>`
            }

          </div>`).join(``)}
        </form>
        <div class="stats">
          <ul class="stats">
            ${state.answers.map((element) => `<li class="stats__result stats__result--${element}"></li>`).join(``)}
          </ul>
        </div>
      </div>
      ${footer()}`;
  }

  bind(level) {
    let node = this.createElement();
    let timerNode = node.querySelector(`.game__timer`);
    let step = Timer.run(timerNode);

    if (level.type === ``) {
      let options = node.querySelectorAll(`.game__option input[type=radio]`);

      for (let i = 0; i < options.length; i++) {
        options[i].addEventListener(`change`, () => {
          let count = 0;
          for (let j = 0; j < options.length; j++) {
            if (options[j].checked === true) {
              count++;
            }
          }
          if (count > 1) {
            this.changeGame(timerNode, step);
          }
        });
      }
    } else if (level.type === `wide`) {
      let options = node.querySelectorAll(`.game__option input[type=radio]`);

      for (let i = 0; i < options.length; i++) {
        options[i].addEventListener(`change`, () => {
          this.changeGame(timerNode, step);
        });
      }
    } else if (level.type === `triple`) {
      let options = node.querySelectorAll(`.game__option`);
      for (let i = 0; i < options.length; i++) {
        options[i].addEventListener(`click`, () => {
          this.changeGame(timerNode, step);
        });
      }

    }

    let back = node.querySelector(`.back`);
    back.addEventListener(`click`, () => {
      this.backIntro();
    });
    return node;
  }

  changeGame(timerNode, step) {

  }

  backIntro() {

  }
}
