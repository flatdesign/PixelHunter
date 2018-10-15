import getElementFromTemplate from '../makeTemplate';
import greeting from './greeting';
import changeScreen from '../changeScreen';
import footer from './footer';


const intro = () => {
  const node = getElementFromTemplate(
      `<div id="main" class="central__content">
       <div id="intro" class="intro">
        <h1 class="intro__asterisk">*</h1>
        <p class="intro__motto"><sup>*</sup> Это не фото. Это рисунок маслом нидерландского художника-фотореалиста Tjalf Sparnaay.</p>
        </div>
      </div>
    ${footer()}`);

  let next = node.querySelector(`.intro__asterisk `);


  next.addEventListener(`click`, function () {
    changeScreen(greeting());
  });
  return node;
};

export default intro;


