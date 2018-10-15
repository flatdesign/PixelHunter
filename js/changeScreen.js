let central = document.querySelector(`.central`);

const changeScreen = (element) => {      // Смена экрана
  central.innerHTML = ``;
  central.appendChild(element);
};

export default changeScreen;
