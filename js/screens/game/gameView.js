import AbstractView from '../../AbstractView';
import footer from '../footer/footer';
import header from '../header/header';
import data from '../../data';
import Timer from '../../timer';
import constants from '../../constants';
import changeLevel from '../../changeLevel';
import Application from '../../Application';

export default class GameView extends AbstractView {
  constructor(level) {
    super();
    this.content = `
      ${header(data.currentState)}
      <div class="game">
        <p class="game__task">${level.title}</p>
        <form class="game__content ${ level.type === `` ? `` : `game__content--${level.type}`}">
          ${[...level.options.entries()].map(([element], i) => `
          <div class="game__option">
            ${element}
            ${ level.type === `triple` ? `` :
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
            ${data.currentState.answers.stats.map((element) => `<li class="stats__result stats__result--${element}"></li>`).join(``)}
          </ul>
        </div>
      </div>
      ${footer()}`;
  }

  actions(level) {
    let node = this.createElement();
    let timerNode = node.querySelector(`.game__timer`);
    let step = Timer.run(timerNode);

    const changeGame = () => {
      if (Number(timerNode.innerHTML) > 20) {
        data.currentState.answers.stats[data.currentState.level] = constants.answerType.fast;
        data.currentState.answers.fast++;
      } else {
        data.currentState.answers.stats[data.currentState.level] = constants.answerType.slow;
        data.currentState.answers.slow++;
      }

      if (data.currentState.level < constants.LEVELS - 1) {
        Timer.stop(step);
        changeLevel(++data.currentState.level);

      } else {
        Timer.stop(step);
        Application.showStats(data.currentState);
      }
    };

    if (level.type === ``) {
      let options = node.querySelectorAll(`.game__option input[type=radio]`);

      for (let i = 0; i < options.length; i++) {
        options[i].addEventListener(`change`, function () {
          let count = 0;
          for (let j = 0; j < options.length; j++) {
            if (options[j].checked === true) {
              count++;
            }
          }
          if (count > 1) {
            changeGame();
          }
        });
      }
    } else if (level.type === `wide`) {
      let options = node.querySelectorAll(`.game__option input[type=radio]`);

      for (let i = 0; i < options.length; i++) {
        options[i].addEventListener(`change`, function () {
          changeGame();
        });
      }
    } else if (level.type === `triple`) {
      let options = node.querySelectorAll(`.game__option`);
      for (let i = 0; i < options.length; i++) {
        options[i].addEventListener(`click`, function () {
          changeGame();
        });
      }

    }

    let back = node.querySelector(`.back`);
    back.addEventListener(`click`, function () {
      Application.showWelcome();
    });
    return node;
  }
}
