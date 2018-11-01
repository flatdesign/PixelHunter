import AbstractView from '../../AbstractView';
import constants from '../../constants';

export default class HeaderView extends AbstractView {
  constructor(state) {
    super();
    this.content = `<header class="header">
    <div class="header__back">
      <span class="back">
        <img src="img/arrow_left.svg" width="45" height="45" alt="Back">
        <img src="img/logo_small.png" width="101" height="44">
      </span>
    </div>
    <h1 class="game__timer"></h1>
    <div class="game__lives">
      ${new Array(constants.LIVES - state.lives).fill(`<img src="img/heart__empty.svg" class="game__heart" alt="Life" width="32" height="32"></img>`).join(``)}
      ${new Array(state.lives).fill(`<img src="img/heart__full.svg" class="game__heart" alt="Life" width="32" height="32"></img>`).join(``)}
    </div>
    </header>`;
  }

  actions() {
    return this.content;
  }
}
