import AbstractView from '../../AbstractView';
import footer from '../footer/footer';
import data from '../../data';
import header from '../header/header';

export default class RulesView extends AbstractView {
  constructor() {
    super();
    this.content = `
    ${header(data.currentState)}
    <div class="rules">
    <h1 class="rules__title">Правила</h1>
    <p class="rules__description">Угадай 10 раз для каждого изображения фото <img
      src="img/photo_icon.png" width="16" height="16"> или рисунок <img
      src="img/paint_icon.png" width="16" height="16" alt="">.<br>
      Фотографиями или рисунками могут быть оба изображения.<br>
      На каждую попытку отводится 30 секунд.<br>
      Ошибиться можно не более 3 раз.<br>
      <br>
      Готовы?
    </p>
    <form class="rules__form">
      <input class="rules__input" type="text" placeholder="Ваше Имя">
      <button class="rules__button  continue" type="submit">Go!</button>
    </form>
    </div>
    ${footer()}`;
  }

  bind() {
    let node = this.createElement();
    let button = node.querySelector(`.rules__button`);
    button.disabled = true;
    let form = node.querySelector(`.rules__form`);
    let input = node.querySelector(`.rules__input`);

    input.addEventListener(`input`, function (e) {
      if (input.value === ``) {
        button.disabled = true;
      } else {
        button.disabled = false;
      }
    });

    form.addEventListener(`submit`, (e) => {
      e.preventDefault();
      this.onNextScreen();
    });

    let back = node.querySelector(`.back`);
    back.addEventListener(`click`, () => {
      this.onPreviousScreen();
    });

    return node;
  }
  onNextScreen() {}
  onPreviousScreen() {}
}
