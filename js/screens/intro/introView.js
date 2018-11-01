import AbstractView from '../../AbstractView';
import Application from '../../Application';
import footer from '../footer/footer';

export default class IntroView extends AbstractView {
  constructor() {
    super();
    this.content = `<div id="main" class="central__content">
  <div id="intro" class="intro">
   <h1 class="intro__asterisk">*</h1>
   <p class="intro__motto"><sup>*</sup> Это не фото. Это рисунок маслом нидерландского художника-фотореалиста Tjalf Sparnaay.</p>
   </div>
 </div>
  ${footer()}`;
  }

  actions() {
    let node = this.createElement();
    let next = node.querySelector(`.intro__asterisk `);
    next.addEventListener(`click`, function () {
      Application.showGretting();
    });
    return node;
  }
}
