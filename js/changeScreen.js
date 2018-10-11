
let central = document.querySelector(`.central`);

const clearMain = function () {         // Очитска главного экрана
  while (central.firstChild) {
    central.removeChild(central.firstChild);
  }
};

const changeScreen = function (element) {      // Смена экрана
  clearMain();
  central.appendChild(element);
};

export default changeScreen;
